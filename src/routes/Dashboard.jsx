import { Navigate, Outlet } from "react-router-dom";
import NavbarDashboard from "../components/Navbar";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
function DashboardOlio() {
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (location.pathname === "/dashboard") {
      navigate("/dashboard/bienvenida");
    }
  }, [location]);
  return (
    <div style={{ minHeight: "100vh" }} className="content_dashboard">
      <NavbarDashboard />
      <Outlet />
    </div>
  );
}

export default DashboardOlio;
