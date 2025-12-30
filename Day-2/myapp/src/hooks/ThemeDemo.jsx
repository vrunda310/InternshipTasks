
import { useTheme } from "./useTheme";

export default function ThemeDemo() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div style={{ padding: "1rem", background: theme === "light" ? "#fff" : "#333", color: theme === "light" ? "#000" : "#fff" }}>
      <p>Current theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}
