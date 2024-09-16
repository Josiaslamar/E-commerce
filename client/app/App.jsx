import { Route, Routes } from "react-router-dom"
import AuthLayout from "./components/auth/layout"
import Authlogin from "./pages/auth/login"
import AuthSignup from "./pages/auth/signup"
import AdminLayout from "./components/admin/layout"
import AdminDashboard from "./pages/admin/dashboard"
import AdminFeatures from "./pages/admin/features"
import AdminOrders from "./pages/admin/orders"
import AdminProducts from "./pages/admin/products"
import Shoppinglayout from "./components/shopping/layout"
import NotFound from "./pages/not-found"
import ShoppingHome from "./pages/shopping/home"
import ShoppingAccount from "./pages/shopping/account"
import ShoppingListing from "./pages/shopping/listing"
import ShoppingCheckout from "./pages/shopping/checkout"
import CheckAuth from "./components/common/check-auth"
import UnauthPage from "./pages/unauth-page"

function App() {
  const isAuthenticated = false;
  const user = null

  return (
    <div className="flex flex-col overflow-hidden bg-white">

      <Routes>
        <Route path="/auth" element={
          <CheckAuth isAuthenticated={isAuthenticated} user={user}>
            <AuthLayout />
          </CheckAuth>
        }>
          <Route path="login" element={<Authlogin />} />
          <Route path="signup" element={<AuthSignup />} />
        </Route>
        <Route path="/admin" element={
          <CheckAuth isAuthenticated={isAuthenticated} user={user}>
            <AdminLayout />
          </CheckAuth>
        }>
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="products" element={<AdminProducts />} />
          <Route path="orders" element={<AdminOrders />} />
          <Route path="features" element={<AdminFeatures />} />
        </Route>
        <Route path="/shop" element={
          <CheckAuth isAuthenticated={isAuthenticated} user={user}>
            <Shoppinglayout />
          </CheckAuth>
        }>
          <Route path="home" element={<ShoppingHome />} />
          <Route path="listing" element={<ShoppingListing />} />
          <Route path="checkout" element={<ShoppingCheckout />} />
          <Route path="account" element={<ShoppingAccount />} />
        </Route>
<Route path="/unauth-page" element={<UnauthPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
