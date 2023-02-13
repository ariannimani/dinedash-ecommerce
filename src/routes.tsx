import {
  ContactUs,
  Main,
  OrderConfirmation,
  Restaurants,
  Shops,
  UserProfile,
} from "pages";
import AllComponents from "pages/all-components/AllComponents";
import { Route, Routes } from "react-router-dom";

export const AppRoutes: React.FC = () => (
  <>
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/restaurants" element={<Restaurants />} />
      <Route path="/shops" element={<Shops />} />
      <Route path="/user-profile" element={<UserProfile />} />
      <Route path="/order" element={<OrderConfirmation />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/components" element={<AllComponents />} />
    </Routes>
  </>
);
