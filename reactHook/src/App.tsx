import reactLogo from "./assets/react.svg";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { routeConfig } from "./Routes";

function App() {
  const router = createBrowserRouter(routeConfig);
  return (
    <>
      <Navbar logo={reactLogo} name="useTransition" />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
