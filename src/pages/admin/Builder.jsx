import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { supabase } from "../../lib/supabaseClient";
import { useAuth } from "../../lib/useAuth";

const emptyForm = {
  client_name: "",
  client_company: "",
  client_email: "",
  project_title: "",
  scope_of_work: "",
  deliverables: [""],
  timeline: "",
  price: "",
  payment_terms: "",
  additional_terms: "",
};

export default function Builder() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState(emptyForm);
  const [profile, setProfile] = useState(null);
  const [profileLoading, setProfileLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [createdLink, setCreatedLink] = useState(null);

  useEffect(() => {
    if (!user) return;
    supabase
      .from("admin_profile")
      .select("*")
      .eq("user_id", user.id)
      .maybeSingle()
      .then(({ data }) => {
        setProfile(data);
        setProfileLoading(false);
      });
  }, [user]);

  const set = (key) => (e) => setForm({ ...form, [key]: e.target.value });

  const setDeliverable = (i, value) => {
    const next = [...form.deliverables];
    next[i] = value;
    setForm({ ...form, deliverables: next });
  };
  const addDeliverable = () => setForm({ ...form, deliverables: [...form.deliverables, ""] });
  const removeDeliverable = (i) =>
    setForm({ ...form, deliverables: form.deliverables.filter((_, idx) => idx !== i) });

  const submit = async (e) => {
    e.preventDefault();
    setError("");

    if (!profile || !profile.signature_typed) {
      setError("Set up your signature first (link above) — it gets pre-baked into every SOW.");
      return;
    }

    setSaving(true);
    const now = new Date().toISOString();
    const { data, error } = await supabase
      .from("sows")
      .insert({
        created_by: user.id,
        status: "sent",
        sent_at: now,
        client_name: form.client_name,
        client_company: form.client_company,
        client_email: form.client_email,
        project_title: form.project_title,
        scope_of_work: form.scope_of_work,
        deliverables: form.deliverables.filter((d) => d.trim() !== ""),
        timeline: form.timeline,
        price: form.price,
        payment_terms: form.payment_terms,
        additional_terms: form.additional_terms,
        rep_name: profile.full_name,
        rep_signature_typed: profile.signature_typed,
        rep_signature_image: profile.signature_image,
        rep_signed_at: now,
      })
      .select()
      .single();

    setSaving(false);
    if (error) {
      setError(error.message);
      return;
    }
    setCreatedLink(`${window.location.origin}/sow/${data.id}`);
  };

  if (profileLoading) return <div className="sow-shell">Loading…</div>;

  if (createdLink) {
    return (
      <div className="sow-shell">
        <h1 className="sow-h1">Link generated</h1>
        <p className="sow-sub">Your signature is already on the document. Send this to your client to review and sign.</p>
        <div className="sow-card">
          <div className="sow-link-box" style={{ marginBottom: 16 }}>
            <span style={{ flex: 1, wordBreak: "break-all" }}>{createdLink}</span>
          </div>
          <div style={{ display: "flex", gap: 10 }}>
            <button
              className="sow-btn"
              onClick={() => navigator.clipboard.writeText(createdLink)}
            >
              Copy link
            </button>
            <Link to="/admin" className="sow-btn sow-btn-ghost">Back to dashboard</Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="sow-shell">
      <h1 className="sow-h1">New SOW</h1>
      <p className="sow-sub">
        Fill this out after the call. Your signature ({profile?.signature_typed || "not set — "}
        {!profile?.signature_typed && <Link to="/admin/profile">set it up</Link>}) is applied automatically.
      </p>

      <form onSubmit={submit}>
        <div className="sow-card">
          <h3 style={{ marginBottom: 14, fontSize: 13, textTransform: "uppercase", letterSpacing: ".05em", color: "var(--dim)" }}>
            Client
          </h3>
          <div className="sow-row">
            <div className="sow-field">
              <label>Client name *</label>
              <input type="text" required value={form.client_name} onChange={set("client_name")} />
            </div>
            <div className="sow-field">
              <label>Company</label>
              <input type="text" value={form.client_company} onChange={set("client_company")} />
            </div>
          </div>
          <div className="sow-field">
            <label>Client email</label>
            <input type="email" value={form.client_email} onChange={set("client_email")} />
          </div>
        </div>

        <div className="sow-card">
          <h3 style={{ marginBottom: 14, fontSize: 13, textTransform: "uppercase", letterSpacing: ".05em", color: "var(--dim)" }}>
            Project
          </h3>
          <div className="sow-field">
            <label>Project title *</label>
            <input type="text" required value={form.project_title} onChange={set("project_title")} />
          </div>
          <div className="sow-field">
            <label>Scope of work *</label>
            <textarea required value={form.scope_of_work} onChange={set("scope_of_work")} rows={5} />
          </div>
          <div className="sow-field">
            <label>Deliverables</label>
            {form.deliverables.map((d, i) => (
              <div className="sow-deliverable-row" key={i}>
                <input
                  type="text"
                  value={d}
                  onChange={(e) => setDeliverable(i, e.target.value)}
                  placeholder={`Deliverable ${i + 1}`}
                />
                {form.deliverables.length > 1 && (
                  <button type="button" className="sow-remove" onClick={() => removeDeliverable(i)}>×</button>
                )}
              </div>
            ))}
            <button type="button" className="sow-btn sow-btn-ghost" style={{ padding: "6px 14px", fontSize: 12 }} onClick={addDeliverable}>
              + Add deliverable
            </button>
          </div>
          <div className="sow-row">
            <div className="sow-field">
              <label>Timeline</label>
              <input type="text" placeholder="e.g. 3 weeks" value={form.timeline} onChange={set("timeline")} />
            </div>
            <div className="sow-field">
              <label>Price *</label>
              <input type="text" required placeholder="e.g. $4,500" value={form.price} onChange={set("price")} />
            </div>
          </div>
        </div>

        <div className="sow-card">
          <h3 style={{ marginBottom: 14, fontSize: 13, textTransform: "uppercase", letterSpacing: ".05em", color: "var(--dim)" }}>
            Terms
          </h3>
          <div className="sow-field">
            <label>Payment terms</label>
            <textarea value={form.payment_terms} onChange={set("payment_terms")} rows={3} />
          </div>
          <div className="sow-field">
            <label>Additional terms</label>
            <textarea value={form.additional_terms} onChange={set("additional_terms")} rows={3} />
          </div>
        </div>

        {error && <div className="sow-error" style={{ marginBottom: 16 }}>{error}</div>}

        <button className="sow-btn" type="submit" disabled={saving}>
          {saving ? "Generating…" : "Generate client link"}
        </button>
      </form>
    </div>
  );
}
