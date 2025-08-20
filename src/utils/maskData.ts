// utils/maskData.ts
export const maskData = (value: string, visible: number = 4): string => {
  if (!value) return "";
  const hiddenLength = Math.max(value.length - visible, 0);
  return "*".repeat(hiddenLength) + value.slice(-visible);
};
