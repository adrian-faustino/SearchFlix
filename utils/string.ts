export const toTitleCase = (str: string): string => {
  if (!str) return "";
  const [firstChar, ...rest] = str;
  return firstChar.toUpperCase() + rest.join("");
};
