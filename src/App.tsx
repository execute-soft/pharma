import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Landing from "@/pages/Landing";
import DashboardLayout from "@/layouts/DashboardLayout";
import DashboardHome from "@/pages/pharma/DashboardHome";
import Inventory from "@/pages/pharma/Inventory";
import Customers from "@/pages/pharma/Customers";
import Analytics from "@/pages/pharma/Analytics";
import Settings from "@/pages/pharma/Settings";
import InventoryAlerts from "@/pages/pharma/InventoryAlerts";
import CustomerSegments from "@/pages/pharma/CustomerSegments";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/pharma" element={<DashboardLayout />}>
          <Route index element={<DashboardHome />} />
          <Route path="inventory" element={<Inventory />} />
          <Route path="inventory/alerts" element={<InventoryAlerts />} />
          <Route path="customers" element={<Customers />} />
          <Route path="customers/segments" element={<CustomerSegments />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="settings" element={<Settings />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
