import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    // Clear session (token, cookie, or any state)
    // This is placeholder logic
    sessionStorage.clear();
    navigate("/login");
  }, [navigate]);

  return (
    <div className="h-screen flex items-center justify-center">
      <p className="text-lg text-gray-600">Logging out...</p>
    </div>
  );
}
