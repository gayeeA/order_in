// src/routes/AppRoutes.jsx
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// // Common components
// import ProtectedRoute from "../components/common/ProtectedRoute";

// // Dashboard
// import DashboardHome from "../components/dashboard/DashboardHome";

// // Menu Management
import MenuPage from "../pages/MenuManagement/MenuPage";
// import AddDish from "../pages/MenuManagement/AddDish";
// import Promotions from "../pages/MenuManagement/Promotions";

// // Orders
// import OrdersPage from "../pages/Orders/OrdersPage";
// import OrderDetails from "../pages/Orders/OrderDetails";

// // Payments
// import PaymentsPage from "../pages/Payments/PaymentsPage";
// import Reports from "../pages/Payments/Reports";
// import BillReceipt from "../pages/Payments/BillReceipt";

// // Inventory
// import InventoryPage from "../pages/Inventory/InventoryPage";
// import AddStock from "../pages/Inventory/AddStock";
// import LowStockAlert from "../pages/Inventory/LowStockAlert";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Default redirect */}
      <Route path="/" element={<Navigate to="/dashboard" />} />

      {/* Dashboard */}
      {/* <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <DashboardHome />
          </ProtectedRoute>
        }
      /> */}

      {/* ✅ Menu Management */}
      <Route
        path="/menu"
        element={

            <MenuPage />

        }
      />
      {/* <Route
        path="/menu/add"
        element={
          <ProtectedRoute>
            <AddDish />
          </ProtectedRoute>
        }
      />
      <Route
        path="/menu/promotions"
        element={
          <ProtectedRoute>
            <Promotions />
          </ProtectedRoute>
        } */}
      />

      {/* Orders
      <Route
        path="/orders"
        element={
          <ProtectedRoute>
            <OrdersPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/orders/:id"
        element={
          <ProtectedRoute>
            <OrderDetails />
          </ProtectedRoute>
        }
      /> */}

      {/* Payments */}
      {/* <Route
        path="/payments"
        element={
          <ProtectedRoute>
            <PaymentsPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/payments/reports"
        element={
          <ProtectedRoute>
            <Reports />
          </ProtectedRoute>
        }
      />
      <Route
        path="/payments/bill"
        element={
          <ProtectedRoute>
            <BillReceipt />
          </ProtectedRoute>
        }
      /> */}

      {/* Inventory
      <Route
        path="/inventory"
        element={
          <ProtectedRoute>
            <InventoryPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/inventory/add"
        element={
          <ProtectedRoute>
            <AddStock />
          </ProtectedRoute>
        }
      />
      <Route
        path="/inventory/low-stock"
        element={
          <ProtectedRoute>
            <LowStockAlert />
          </ProtectedRoute>
        }
      /> */}

      {/* 404 fallback */}
      <Route path="*" element={<h2>404 - Page Not Found</h2>} />
    </Routes>
  );
};

export default AppRoutes;
