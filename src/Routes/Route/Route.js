import Blog from "../../components/Pages/Blog/Blog";
import DetailsPage from "../../components/Pages/DetailsPage/DetailsPage";
import Home from "../../components/Pages/Home/Home";
import Login from "../../components/Pages/Login/Login";
import MyReview from "../../components/Pages/MyReview/MyReview";
import Register from "../../components/Pages/Register/Register";
import Services from "../../components/Pages/Services/Services";
import Main from "../../Layout/Main";

const { createBrowserRouter } = require("react-router-dom");

 const router = createBrowserRouter([
    {
         path: '/',
         element: <Main></Main>,
         errorElement: <h1>404 not found</h1>,
         children: [
             {
                 path: '/',
                 loader: () => fetch('http://localhost:5000/service'),
                 element:<Home></Home>
             },
             {
                 path: '/services',
                 loader: () => fetch('http://localhost:5000/services'),
                 element: <Services></Services>
                
             },
             {
                 path: '/service/:id',
                 loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`),
                 element:<DetailsPage></DetailsPage>
             },
             {
                 path: '/myReview',
                 element:<MyReview></MyReview>
             },
             {
                 path: '/blog',
                 element: <Blog></Blog>
             },
             {
                 path: '/login',
                 element:<Login></Login>
             },
             {
                 path: '/register',
                 element:<Register></Register>
             }
        ]
        
    }
 ])


export default router;