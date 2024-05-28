import {createBrowserRouter} from "react-router-dom";
import UserList from "./pages/UserList"; 
import Home from "./pages/Home";
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "/user-list",
      element: <UserList/>,
    },
  ]);
  export default router;  