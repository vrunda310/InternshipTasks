// UsernameForm.stories.jsx
import LocalStorageDemo from "./localStorageDemo";
import FetchDemo from "./fetchDemo";
import WindowSizeDemo from "./useWindowSizeDemo";
import UseonOutsideClickDemo from "./useonOutsideClickDemo";
 import ThemeDemo from "./ThemeDemo";
import { ThemeProvider } from "./ThemeContext";


export default {
  title: "Components/customHooks",
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
};

export const LocalStorageExample = () => <LocalStorageDemo />;
export const FetchExample = () => <FetchDemo url="https://jsonplaceholder.typicode.com/users/1" />;
export const WindowSizeExample = () => <WindowSizeDemo />;
export const OutsideClickExample = () => <UseonOutsideClickDemo />;
export const ThemeExample = () => <ThemeDemo />;

