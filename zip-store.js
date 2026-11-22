(function (root, factory) {
  const api = factory();
  if (typeof module === "object" && module.exports) module.exports = api;
  root.GuideZip = api;
})(typeof globalThis !== "undefined" ? globalThis : this, function () {
  const CRC = new Uint32Array(256);
  for (let n = 0; n < 256; n += 1) {
    let c = n;
    for (let k = 0; k < 8; k += 1) c = (c & 1) ? (0xedb88320 ^ (c >>> 1)) : (c >>> 1);
    CRC[n] = c >>> 0;
  }

  function crc32(bytes) {
    let c = 0xffffffff;
    for (let i = 0; i < bytes.length; i += 1) c = CRC[(c ^ bytes[i]) & 255] ^ (c >>> 8);
    return (c ^ 0xffffffff) >>> 0;
  }

  function u16(view, offset, value) {
    view.setUint16(offset, value, true);
  }

  function u32(view, offset, value) {
    view.setUint32(offset, value, true);
  }

  function zipStore(files) {
    const encoded = (files || []).map(file => ({
      name: new TextEncoder().encode(String(file.name || "file").replace(/^\/+/, "")),
      data: file.bytes instanceof Uint8Array ? file.bytes : new Uint8Array(file.bytes || [])
    })).filter(file => file.name.length);
    let size = 22;
    encoded.forEach(file => { size += 30 + file.name.length + file.data.length + 46 + file.name.length; });
    const out = new Uint8Array(size);
    const view = new DataView(out.buffer);
    let offset = 0;
    const central = [];
    encoded.forEach(file => {
      const crc = crc32(file.data);
      const local = offset;
      u32(view, offset, 0x04034b50); offset += 4;
      u16(view, offset, 20); offset += 2;
      u16(view, offset, 0); offset += 2;
      u16(view, offset, 0); offset += 2;
      u16(view, offset, 0); offset += 2;
      u16(view, offset, 0); offset += 2;
      u32(view, offset, crc); offset += 4;
      u32(view, offset, file.data.length); offset += 4;
      u32(view, offset, file.data.length); offset += 4;
      u16(view, offset, file.name.length); offset += 2;
      u16(view, offset, 0); offset += 2;
      out.set(file.name, offset); offset += file.name.length;
      out.set(file.data, offset); offset += file.data.length;
      central.push({ file, crc, local });
    });
    const centralStart = offset;
    central.forEach(entry => {
      u32(view, offset, 0x02014b50); offset += 4;
      u16(view, offset, 20); offset += 2;
      u16(view, offset, 20); offset += 2;
      u16(view, offset, 0); offset += 2;
      u16(view, offset, 0); offset += 2;
      u16(view, offset, 0); offset += 2;
      u16(view, offset, 0); offset += 2;
      u32(view, offset, entry.crc); offset += 4;
      u32(view, offset, entry.file.data.length); offset += 4;
      u32(view, offset, entry.file.data.length); offset += 4;
      u16(view, offset, entry.file.name.length); offset += 2;
      u16(view, offset, 0); offset += 2;
      u16(view, offset, 0); offset += 2;
      u16(view, offset, 0); offset += 2;
      u16(view, offset, 0); offset += 2;
      u32(view, offset, 0); offset += 4;
      u32(view, offset, entry.local); offset += 4;
      out.set(entry.file.name, offset); offset += entry.file.name.length;
    });
    const centralSize = offset - centralStart;
    u32(view, offset, 0x06054b50); offset += 4;
    u16(view, offset, 0); offset += 2;
    u16(view, offset, 0); offset += 2;
    u16(view, offset, central.length); offset += 2;
    u16(view, offset, central.length); offset += 2;
    u32(view, offset, centralSize); offset += 4;
    u32(view, offset, centralStart); offset += 4;
    u16(view, offset, 0);
    return out.slice(0, offset + 2);
  }

  function unzip(bytes) {
    const data = bytes instanceof Uint8Array ? bytes : new Uint8Array(bytes || []);
    const view = new DataView(data.buffer, data.byteOffset, data.byteLength);
    const files = [];
    let offset = 0;
    while (offset + 30 <= data.length) {
      if (view.getUint32(offset, true) !== 0x04034b50) break;
      const method = view.getUint16(offset + 8, true);
      const compressed = view.getUint32(offset + 18, true);
      const nameLength = view.getUint16(offset + 26, true);
      const extra = view.getUint16(offset + 28, true);
      const start = offset + 30 + nameLength + extra;
      const name = new TextDecoder().decode(data.subarray(offset + 30, offset + 30 + nameLength));
      const slice = data.subarray(start, start + compressed);
      if (name && !name.endsWith("/")) {
        if (method === 0) files.push({ name, bytes: slice.slice() });
        else files.push({ name, bytes: slice.slice(), method });
      }
      offset = start + compressed;
    }
    return files;
  }

  return { crc32, zipStore, unzip };
});
