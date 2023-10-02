import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Pages
import ChatPage from "./pages/chat";
import SettingsPage from "./pages/settings";
import SignIn from "./pages/auth";

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
    {
      path: "/auth",
      element: <SignIn />,
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App;
