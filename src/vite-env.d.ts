/// <reference types="vite/client" />

declare module "*.png" {
  const pngContent: string;
  export default pngContent;
}

declare module "*.svg" {
  const svgContent: string;
  export default svgContent;
}
