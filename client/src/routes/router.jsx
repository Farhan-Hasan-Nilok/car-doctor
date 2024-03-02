import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../Pages/login/Login";
import Home from "../Pages/home/Home";
import Signup from "../Pages/signup/Signup";
import NotFound from "../Pages/ErrorPage/NotFound";
import Bookings from "../Pages/shared/header/Bookings";
import BookingDetails from "../Pages/BookingDetails/BookingDetails";
import PrivateRoute from "./PrivateRoute";
import AdminBooking from "../Admin/AdminBooking/AdminBooking";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <NotFound />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'my-bookings',
                element: <PrivateRoute><BookingDetails /></PrivateRoute>
            },
            {
                path: 'checkout/:id',
                element: <Bookings />,
                loader: ({ params }) => fetch(`https://car-doctor-server-eight-ashy.vercel.app/service/${params.id}`)
            },
        ]
    },
    {
        path: 'login',
        element: <Login />
    },
    {
        path: 'signup',
        element: <Signup />
    },
    {
        path: 'admin/all-bookings',
        element: <PrivateRoute><AdminBooking /></PrivateRoute>
    },

]);

export default router;