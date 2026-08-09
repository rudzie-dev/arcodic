import { Link, Outlet, useNavigate } from "react-router-dom";
import { supabase } from "../../lib/supabaseClient";
import { UI_CSS } from "../../lib/uiStyles";

export default function AdminLayout() {
  const navigate = useNavigate();

  const logout = async () => {
    await supabase.auth.signOut();
    navigate("/admin/login");
  };

  return (
    <div className="sow-ui">
      <style>{UI_CSS}</style>
      <nav className="sow-nav">
        <Link to="/admin">SOW Builder</Link>
        <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
          <Link to="/admin/profile" style={{ fontSize: 13, fontWeight: 500 }}>My signature</Link>
          <Link to="/admin/new" className="sow-btn" style={{ padding: "8px 16px", fontSize: 13 }}>
            + New SOW
          </Link>
          <button onClick={logout} className="sow-btn sow-btn-ghost" style={{ padding: "8px 16px", fontSize: 13 }}>
            Log out
          </button>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}
