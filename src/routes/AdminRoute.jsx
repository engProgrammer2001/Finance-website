import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import ProtectedRoute from "../components/ProtectedRoute/ProtectedRoute";
import Admin from "../components/Admin/Admin";
import AdminDashboard from "../components/Admin/components/AdminDashboard";
import TotalUser from "../components/Admin/components/TotalUser";
import UploadLogo from "../components/Admin/components/UploadLogo";
import UploadFooterAndFavicon from "../components/Admin/components/UploadFooterAndFavicon";
import UploadFavicon from "../components/Admin/components/UploadFavicon";
import AdminProfile from "../components/Admin/components/AdminProfile";

const AdminRoute = () => {
  return (
    <Routes>
      {/* Protect all admin routes */}
      <Route
        path="/admin/*"
        element={
          <ProtectedRoute allowedRoles={["admin"]}>
            <Admin />
          </ProtectedRoute>
        }
      >
        <Route index element={<Navigate to="/admin/dashboard" />} />
        <Route path="dashboard" element={<AdminDashboard />} />
        <Route path="total-user-admin" element={<TotalUser />} />
        <Route path="upload-logo-admin" element={<UploadLogo />} />
        <Route
          path="upload-footer-and-favicon-admin"
          element={<UploadFooterAndFavicon />}
        />
        <Route path="upload-favicon-admin" element={<UploadFavicon />} />
        <Route path="admin-profile" element={<AdminProfile />} />
      </Route>
    </Routes>
  );
};

export default AdminRoute;
