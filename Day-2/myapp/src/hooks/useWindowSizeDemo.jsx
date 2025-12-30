import { useWindowSize } from "./useWindowSize";

export default function WindowSizeDemo() {
   const { width, height } = useWindowSize();

  return (
    <div style={{ padding: "1rem" }}>
      <h3>Window Size</h3>
      <p>Width: {width}px</p>
      <p>Height: {height}px</p>
    </div>
  );
}

