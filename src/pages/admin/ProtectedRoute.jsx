import { Navigate } from "react-router-dom";
import { useAuth } from "../../lib/useAuth";
import { UI_CSS } from "../../lib/uiStyles";

export default function ProtectedRoute({ children }) {
  const { session, loading } = useAuth();

  if (loading) {
    return (
      <div className="sow-ui">
        <style>{UI_CSS}</style>
        <div className="sow-narrow">Loading…</div>
      </div>
    );
  }

  if (!session) {
    return <Navigate to="/admin/login" replace />;
  }

  return children;
}
