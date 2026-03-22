import { useNavigate } from "react-router-dom";

export default function Topbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Optionally clear user session or token here
    navigate("/"); // Redirect to landing page
  };

  return (
    <div className="bg-white shadow p-4 flex justify-between items-center">
      <h2 className="font-semibold text-lg">Welcome Back 👋</h2>
      <button
        onClick={handleLogout}
        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
      >
        Logout
      </button>
    </div>
  );
}