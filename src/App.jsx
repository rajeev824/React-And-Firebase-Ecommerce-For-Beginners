import React from 'react';
import {
  BrowserRouter as Router,
  Route, 
  Routes,
} from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import NoPage from "./pages/noPage/NoPage";
import ProductInfo from "./pages/productInfo/ProductInfo";
import ScrollTop from "./components/scrollTop/ScrollTop";
import CartPage from "./pages/cart/CartPage";
import AllProduct from "./pages/allProduct/AllProduct";
import Signup from "./pages/registration/Signup";
import Login from "./pages/registration/Login";
import UserDashboard from "./pages/user/UserDashboard";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AddProductPage from "./pages/admin/AddProductPage";
import UpdateProductPage from "./pages/admin/UpdateProductPage";
import CategoryPage from "./pages/category/CategoryPage";
import MyState from "./context/myState";
import { Toaster } from 'react-hot-toast';

// Make sure to import the component
import { ProtectedRouteForUser } from "./protectedRoute/ProtectedRouteForUser";
// import { ProtectedRouteForAdmin } from "./protectedRoute/ProtectedRouteForAdmin";
const App = () => {
  return (
    <MyState>
      <Router>
        <ScrollTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/productinfo/:id" element={<ProductInfo />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/allproduct" element={<AllProduct />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/category/:categoryname" element={<CategoryPage />} />

          <Route path="/user-dashboard" element={
            <ProtectedRouteForUser>
              <UserDashboard />
            </ProtectedRouteForUser>
          } />

          <Route path="/admin-dashboard" element={
            <ProtectedRouteForUser>
              <AdminDashboard />
            </ProtectedRouteForUser>
          } />


          <Route path="/updateproduct/:id" element={
            <ProtectedRouteForUser>
              <UpdateProductPage />
            </ProtectedRouteForUser>
          } />

          <Route path="/addproduct" element={<AddProductPage />} />
          <Route path="/*" element={<NoPage />} />
        </Routes>
        <Toaster />
      </Router>
    </MyState>
  );
}

export default App;
