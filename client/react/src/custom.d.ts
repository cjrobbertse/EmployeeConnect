declare module "*.svg" {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const content: string;
  export default content;
}

declare module "*.svg?inline" {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const content: string;
  export default content;
}

declare module "*.jpg";
declare module "*.png";
