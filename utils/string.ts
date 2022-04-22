export const toTitleCase = (str: string): string => {
  if (!str) return "";
  const [firstChar, ...rest] = str.split("");
  return firstChar.toUpperCase() + rest.join("");
};

// Resource: https://stackoverflow.com/questions/5717093/check-if-a-javascript-string-is-a-url
export const isValidHttpUrl = (str: string): boolean => {
  let url;

  try {
    url = new URL(str);
  } catch (_) {
    return false;
  }

  return url.protocol === "http:" || url.protocol === "https:";
};
