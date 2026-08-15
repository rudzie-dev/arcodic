import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabaseClient";
import { useAuth } from "../../lib/useAuth";
import SignaturePad from "../../components/SignaturePad";

export default function Profile() {
  const { user } = useAuth();
  const [fullName, setFullName] = useState("");
  const [typedSig, setTypedSig] = useState("");
  const [drawnSig, setDrawnSig] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!user) return;
    supabase
      .from("admin_profile")
      .select("*")
      .eq("user_id", user.id)
      .maybeSingle()
      .then(({ data }) => {
        if (data) {
          setFullName(data.full_name || "");
          setTypedSig(data.signature_typed || "");
          setDrawnSig(data.signature_image || null);
        }
        setLoading(false);
      });
  }, [user]);

  const save = async (e) => {
    e.preventDefault();
    setSaving(true);
    setError("");
    setSaved(false);
    const { error } = await supabase.from("admin_profile").upsert({
      user_id: user.id,
      full_name: fullName,
      signature_typed: typedSig,
      signature_image: drawnSig,
      updated_at: new Date().toISOString(),
    });
    setSaving(false);
    if (error) setError(error.message);
    else setSaved(true);
  };

  if (loading) return <div className="sow-shell">Loading…</div>;

  return (
    <div className="sow-shell">
      <p className="sow-kicker">Settings</p>
      <h1 className="sow-h1">Your signature</h1>
      <p className="sow-sub">
        This gets pre-baked into every new SOW automatically — no separate signing step for you.
      </p>
      <form onSubmit={save} className="sow-card">
        <div className="sow-field">
          <label>Your name (as it appears on the SOW)</label>
          <input type="text" required value={fullName} onChange={(e) => setFullName(e.target.value)} />
        </div>
        <div className="sow-field">
          <label>Typed signature</label>
          <input
            type="text"
            required
            placeholder="e.g. Rudz"
            value={typedSig}
            onChange={(e) => setTypedSig(e.target.value)}
          />
        </div>
        <div className="sow-field">
          <label>Drawn signature (optional)</label>
          <div>
            <SignaturePad onChange={setDrawnSig} />
          </div>
          {drawnSig && (
            <div className="hint">Saved signature will be replaced when you draw a new one and save.</div>
          )}
        </div>
        {error && <div className="sow-error">{error}</div>}
        {saved && <div className="sow-sub" style={{ color: "#1c6b34" }}>Saved.</div>}
        <button className="sow-btn" type="submit" disabled={saving}>
          {saving ? "Saving…" : "Save signature"}
        </button>
      </form>
    </div>
  );
}
