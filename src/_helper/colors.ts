export function hexToRgba(hex: string, alpha: number = 1): string {
  hex = hex.replace("#", "");
  const bigint = parseInt(hex, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

export function rgbToHex(r: number, g: number, b: number): string {
  return (
    "#" +
    [r, g, b]
      .map((x) => {
        const hex = x.toString(16);
        return hex.length === 1 ? "0" + hex : hex;
      })
      .join("")
  );
}

export function adjustColorBrightness(hex: string, factor: number): string {
  let [r, g, b]: any = hexToRgba(hex);
  r = Math.min(255, Math.max(0, Math.floor(r * (1 + factor))));
  g = Math.min(255, Math.max(0, Math.floor(g * (1 + factor))));
  b = Math.min(255, Math.max(0, Math.floor(b * (1 + factor))));
  return rgbToHex(r, g, b);
}

export function lightenColor(hex: string, factor: number = 0.1): string {
  return adjustColorBrightness(hex, factor);
}

export function darkenColor(hex: string, factor: number = 0.1): string {
  return adjustColorBrightness(hex, -factor);
}
