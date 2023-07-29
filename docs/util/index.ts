const utils: any = {};
// 将 Base64 转换为 Blob
utils.base64ToBlob = function base64ToBlob(base64String: string, mimeType: string = 'image/png') {
  // 去掉 Base64 数据头部声明信息
  const base64Data = base64String.split(',')[1];

  // 将 Base64 字符串解码为二进制数据
  const binaryData = atob(base64Data);

  // 创建一个 Uint8Array 用于存储二进制数据
  const arrayBuffer = new ArrayBuffer(binaryData.length);
  const uint8Array = new Uint8Array(arrayBuffer);

  // 将二进制数据填充到 Uint8Array 中
  for (let i = 0; i < binaryData.length; i++) {
    uint8Array[i] = binaryData.charCodeAt(i);
  }

  // 创建 Blob 对象
  return new Blob([uint8Array], { type: mimeType });
}

// 下载图片方法
utils.downloadImg = function downloadImg(blob: any, imgName: string) {
  const aLink = document.createElement('a');
  aLink.download = imgName;
  aLink.href = URL.createObjectURL(blob);
  aLink.click()
}

export default utils;