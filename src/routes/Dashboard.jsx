import { Navigate, Outlet } from "react-router-dom";
import NavbarDashboard from "../components/Navbar";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
function DashboardOlio() {
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (location.pathname === "/dashboard") {
      navigate("/dashboard/formulario");
    }
  }, [location]);
  return (
    <div style={{ minHeight: "100vh" }}>
      <NavbarDashboard />
      <Outlet />
    </div>
  );
}

export default DashboardOlio;
