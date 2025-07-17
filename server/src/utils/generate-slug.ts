export const generateSlug = (text: string): string => {
  return text
    .toLowerCase()
    .trim()
    .replace(/[\s\W-]+/g, '-') // Replace spaces & non-word chars with -
    .replace(/^-+|-+$/g, ''); // Remove leading/trailing -
};
