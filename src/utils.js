// utils.js
const images = import.meta.glob("/src/assets/**/*.png", { eager: true });

export const getImageUrl = (path) => {
  const imageKey = `/src/assets/${path}`;
  const imageModule = images[imageKey];

  if (imageModule && imageModule.default) {
    return imageModule.default;
  } else {
    console.error(`Image not found at path: ${path}`);
    return ""; // Fallback to avoid breaking the app
  }
};
