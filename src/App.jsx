import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Dummy from "./pages/Dummy";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "/dummy",
      element: <Dummy/>,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
