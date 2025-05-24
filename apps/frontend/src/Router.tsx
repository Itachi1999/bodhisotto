import {
    createBrowserRouter,
    RouterProvider,
} from "react-router";
import RootLayout from "./modules/shared/RootLayout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        errorElement: <div>Oops! Something went wrong.</div>
    }
]);

const Router = () => {
    return (
        <RouterProvider router={router} />
    )
};

export default Router;