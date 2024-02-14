import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Dummy from "./pages/Dummy";
import Main from "./layouts/Main";
import Second from "./pages/Second";
import Third from "./pages/Third";
import Fourth from "./pages/Fourth";
import Later from "./pages/Later";
import Final from "./pages/Final";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children:[
        {
          path:"/",
          element: <Home/>
        },
        {
          path:"/second",
          element: <Second/>
        },
        {
          path:"/third",
          element: <Third/>
        },
        {
          path:"/fourth",
          element: <Fourth/>
        },
        {
          path:"/later",
          element: <Later/>
        },
        {
          path:"/final",
          element: <Final/>
        },
      ]
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
