import { useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { supabase } from "../../lib/supabaseClient";
import { useAuth } from "../../lib/useAuth";
import { UI_CSS } from "../../lib/uiStyles";

export default function Login() {
  const { session, loading } = useAuth();
  const navigate = useNavigate();
  const [mode, setMode] = useState("signin"); // 'signin' | 'signup'
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");

  if (!loading && session) return <Navigate to="/admin" replace />;

  const submit = async (e) => {
    e.preventDefault();
    setError("");
    setNotice("");
    setBusy(true);
    try {
      if (mode === "signin") {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
        navigate("/admin");
      } else {
        const { error } = await supabase.auth.signUp({ email, password });
        if (error) throw error;
        setNotice("Account created. Check your email to confirm, then sign in.");
        setMode("signin");
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="sow-ui">
      <style>{UI_CSS}</style>
      <div className="sow-narrow">
        <h1 className="sow-h1">{mode === "signin" ? "Sign in" : "Create your account"}</h1>
        <p className="sow-sub">SOW builder — internal access only.</p>
        <form onSubmit={submit} className="sow-card">
          <div className="sow-field">
            <label>Email</label>
            <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="sow-field">
            <label>Password</label>
            <input
              type="password"
              required
              minLength={6}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && <div className="sow-error">{error}</div>}
          {notice && <div className="sow-sub" style={{ color: "#1c6b34" }}>{notice}</div>}
          <button className="sow-btn" type="submit" disabled={busy} style={{ width: "100%", marginTop: 8 }}>
            {busy ? "Please wait…" : mode === "signin" ? "Sign in" : "Create account"}
          </button>
        </form>
        <button
          type="button"
          onClick={() => setMode(mode === "signin" ? "signup" : "signin")}
          style={{ background: "none", border: "none", fontSize: 13, textDecoration: "underline", cursor: "pointer" }}
        >
          {mode === "signin" ? "First time here? Create an account" : "Already have an account? Sign in"}
        </button>
      </div>
    </div>
  );
}
