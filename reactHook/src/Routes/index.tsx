import { UseTransition } from "../Hooks/UseTransition";

interface RouteType {
  path: string;
  element: JSX.Element;
}

export const routeConfig: RouteType[] = [
  {
    path: "/file",
    element: <UseTransition />,
  },
  {
    path: "/type",
    element: <h1>Rahul</h1>,
  },
];
