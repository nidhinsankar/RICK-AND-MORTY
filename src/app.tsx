import { useEffect } from "react";
import reactDOM from "react-dom/client";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Episode from "./pages/Episode";
import Location from "./pages/Location";
import Navbar from "./components/Navbar";
import Detail from "./pages/Detailpage";
import { Provider } from "react-redux";
import store from "./store/store";

/**
 * NAVBAR
 * BODY
 *   - SEARCHBAR
 *   - FILTERSTAB
 *   - CARD DISPLAY
 */

const App = () => {
  return (
    <Provider store={store}>
      <Navbar />
      <Outlet />
    </Provider>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/episode",
        element: <Episode />,
      },
      {
        path: "/location",
        element: <Location />,
      },
      {
        path: "/:id",
        element: <Detail />,
      },
    ],
  },
]);

const root = reactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<RouterProvider router={router} />);
