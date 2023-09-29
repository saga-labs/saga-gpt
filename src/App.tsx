import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Pages
import ChatPage from "./pages/chat";
import SettingsPage from "./pages/settings";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <ChatPage />,
    },
    {
      path: "/settings",
      element: <SettingsPage />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
