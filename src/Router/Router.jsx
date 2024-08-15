import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Components/Home";
import Posts from "../Components/Posts";
import NewPost from "../Components/NewPost";
import Users from "../Components/Users";
import Edit from "../Components/Edit";
import ErrorPage from "../Components/ErrorPage";
import AdminLogin from "../AdminLogin/AdminLogin";
import PrivateRoute from "./PrivateRoute";
import Category from "../Components/Category";
import Earning from "../Components/Earning";
import Analytics from "../Components/Analytics";
import Chat from "../Components/Chat";

const Router = createBrowserRouter([
   {
      path: '/',
      element: <PrivateRoute><Layout></Layout></PrivateRoute>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
         {
            path: '/',
            element: <Home></Home>
         },
         {
            path: '/posts',
            element: <Posts></Posts>
         },
         {
            path: '/category/:id',
            element: <Edit></Edit>,
            loader: ({params}) => fetch(`https://blogy-server.vercel.app/category/${params.id}`)
         },
         {
            path: '/category',
            element: <Category></Category>
         },
         {
            path: '/new-post',
            element: <NewPost></NewPost>
         },
         {
            path: '/earning',
            element: <Earning></Earning>
         },
         {
            path: '/analytics',
            element: <Analytics></Analytics>
         },
         {
            path: '/users',
            element: <Users></Users>
         },
         {
            path: '/chat',
            element: <Chat></Chat>
         }
      ]
   },   
   {
      path: '/admin-login',
      element: <AdminLogin></AdminLogin>
   }
])

export default Router;