export function useCalculateMaxStringWidth(keys: string[], fontsize: number = 16, offset: number = 0) {
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d')!;

  context.font = `${fontsize}px Arial`;
  const maxLength = keys.reduce((acc, key) => {
    const { width } = context.measureText(key);
    return Math.max(acc, width) + offset;
  }, 0);

  canvas.remove();
  return maxLength;
}
