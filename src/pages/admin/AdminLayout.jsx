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
        <Link to="/admin" className="sow-nav-logo">ARCODIC</Link>
        <div className="sow-nav-links">
          <Link to="/admin/profile" className="sow-nav-link">My signature</Link>
          <Link to="/admin/new" className="sow-nav-cta" style={{ marginLeft: 8 }}>+ New SOW</Link>
          <button onClick={logout} className="sow-nav-ghost" style={{ marginLeft: 8 }}>
            Log out
          </button>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}
