// Advanced utility to remove BOTH white and black backgrounds for 100% transparent PNG rendering

const cache = new Map();

export const removeBackgroundAuto = (imageSrc, darkThreshold = 35, lightThreshold = 235) => {
  if (!imageSrc) return Promise.resolve('');
  if (cache.has(imageSrc)) {
    return Promise.resolve(cache.get(imageSrc));
  }

  return new Promise((resolve) => {
    const img = new Image();
    // Only set crossOrigin for cross-domain external URLs
    if (typeof imageSrc === 'string' && (imageSrc.startsWith('http://') || imageSrc.startsWith('https://'))) {
      img.crossOrigin = 'Anonymous';
    }
    img.src = imageSrc;
    
    img.onload = () => {
      try {
        const canvas = document.createElement('canvas');
        const w = img.naturalWidth || img.width || 400;
        const h = img.naturalHeight || img.height || 400;
        canvas.width = w;
        canvas.height = h;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, w, h);

        const imgData = ctx.getImageData(0, 0, w, h);
        const data = imgData.data;

        for (let i = 0; i < data.length; i += 4) {
          const r = data[i];
          const g = data[i + 1];
          const b = data[i + 2];
          
          const maxBrightness = Math.max(r, g, b);
          const minBrightness = Math.min(r, g, b);

          // Remove Dark/Black Backgrounds
          if (maxBrightness < darkThreshold) {
            data[i + 3] = 0; // Fully transparent
          } else if (maxBrightness < darkThreshold + 30) {
            const alphaRatio = (maxBrightness - darkThreshold) / 30;
            data[i + 3] = Math.floor(alphaRatio * 255);
          }

          // Remove Light/White Backgrounds
          if (minBrightness > lightThreshold) {
            data[i + 3] = 0; // Fully transparent
          } else if (minBrightness > lightThreshold - 30) {
            const alphaRatio = (lightThreshold - minBrightness) / 30;
            data[i + 3] = Math.floor(alphaRatio * 255);
          }
        }

        ctx.putImageData(imgData, 0, 0);
        const transparentDataUrl = canvas.toDataURL('image/png');
        cache.set(imageSrc, transparentDataUrl);
        resolve(transparentDataUrl);
      } catch (err) {
        console.warn('Transparent image processing fallback:', err);
        resolve(imageSrc);
      }
    };

    img.onerror = (err) => {
      console.warn('Image load error for transparent processing:', err);
      resolve(imageSrc);
    };
  });
};

export const removeDarkBackground = removeBackgroundAuto;
