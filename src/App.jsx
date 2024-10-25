import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import LoginPage from './Pages/LoginPage.jsx'
import SignUpPage from './Pages/SiginUpPage.jsx'
import UserHome from './Pages/UserHome.jsx';
import Products from './Pages/Product.jsx';
import AdmHome from './Pages/AdmHome.jsx';

//⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⡶⢶⣾⠻⣦⡀⠀⠀⠀⠀⠀
//⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⡾⠋⠀⠀⠙⢶⡾⠃⠀⠀⠀⠀⠀
//⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢾⡋⠀⠀⠀⢀⣴⠟⢷⣄⠀⠀⠀⠀⠀
//⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⡾⠻⣦⣀⣴⠟⠁⠀⠀⠙⢷⣄⠀⠀⠀
//⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⡾⠋⠀⣠⡾⠛⢷⡀⠀⠀⠀⠀⠀⠙⣷⣄⠀
//⠀⠀⠀⠀⠀⠀⠀⠀⣠⡾⠋⠀⣠⡾⠋⠀⠀⢸⡇⠀⠀⠀⠀⢀⣴⠏⣹⠇
//⠀⠀⠀⠀⠀⠀⣠⡾⠋⠀⣠⡾⠋⠀⠀⠀⠀⣼⠃⠀⠀⢀⣴⠟⢁⡼⠋⠀
//⠀⠀⠀⠀⣠⡾⠋⠀⣠⡾⠋⠀⠀⠀⠀⠀⣾⠃⢀⣤⠾⠋⣡⡶⠋⠀⠀⠀
//⠀⠀⣠⡾⠋⠀⣠⡾⠋⠀⠀⠀⠀⠀⠀⠀⠻⣾⣋⣡⡴⠟⠉⠀⠀⠀⠀⠀
//⢠⡾⠋⠀⣠⡾⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠁⠀⠀⠀⠀⠀⠀⠀⠀
//⠈⠻⣦⡾⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀


const router = createBrowserRouter([
    {
        path: "/",
        element: <LoginPage/>,
    },
    {
        path: "/Sign-up",
        element: <SignUpPage />,
    },
    {
      path: "/Home",
      element: <UserHome />
    },
    {
      path: "/Home/*",
      element: <Products />
    },
    {
      path: "/AdmHome",
      element: <AdmHome />
    },
    {
      path: "/AdmHome/*",
      element: <Products />
    },
]);

export default function App() {
  return (
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);