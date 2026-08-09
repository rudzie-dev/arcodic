import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../../lib/supabaseClient";

const STATUS_LABEL = {
  draft: "Draft",
  sent: "Sent",
  viewed: "Viewed",
  signed: "Signed",
  void: "Void",
};

function clientLink(id) {
  return `${window.location.origin}/sow/${id}`;
}

export default function Dashboard() {
  const [sows, setSows] = useState(null);
  const [copiedId, setCopiedId] = useState(null);

  const load = async () => {
    const { data } = await supabase.from("sows").select("*").order("created_at", { ascending: false });
    setSows(data || []);
  };

  useEffect(() => {
    load();
  }, []);

  const copyLink = async (id) => {
    await navigator.clipboard.writeText(clientLink(id));
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 1500);
  };

  const voidSow = async (id) => {
    if (!confirm("Void this SOW? The client link will stop working.")) return;
    await supabase.from("sows").update({ status: "void" }).eq("id", id);
    load();
  };

  if (sows === null) return <div className="sow-shell">Loading…</div>;

  return (
    <div className="sow-shell">
      <h1 className="sow-h1">Statements of Work</h1>
      <p className="sow-sub">
        {sows.length === 0 ? "No SOWs yet." : `${sows.length} SOW${sows.length === 1 ? "" : "s"}`}
      </p>

      {sows.length === 0 ? (
        <div className="sow-card">
          <p style={{ marginBottom: 16 }}>Fill out the builder form after a call to generate a client link.</p>
          <Link to="/admin/new" className="sow-btn">+ New SOW</Link>
        </div>
      ) : (
        <div className="sow-card" style={{ padding: "8px 28px" }}>
          {sows.map((s) => (
            <div className="sow-list-item" key={s.id}>
              <div style={{ minWidth: 220 }}>
                <div style={{ fontWeight: 700 }}>{s.project_title || "Untitled SOW"}</div>
                <div style={{ fontSize: 13, color: "var(--dim)" }}>
                  {s.client_name}
                  {s.client_company ? ` — ${s.client_company}` : ""}
                </div>
              </div>
              <span className={`sow-badge ${s.status}`}>{STATUS_LABEL[s.status]}</span>
              <div className="sow-link-box" style={{ flex: "1 1 260px" }}>
                <span style={{ opacity: 0.7 }}>{clientLink(s.id)}</span>
              </div>
              <div style={{ display: "flex", gap: 8 }}>
                <button className="sow-btn sow-btn-ghost" style={{ padding: "8px 14px", fontSize: 13 }} onClick={() => copyLink(s.id)}>
                  {copiedId === s.id ? "Copied!" : "Copy link"}
                </button>
                {s.status === "signed" && (
                  <a
                    href={`${window.location.origin}/sow/${s.id}`}
                    target="_blank"
                    rel="noreferrer"
                    className="sow-btn sow-btn-ghost"
                    style={{ padding: "8px 14px", fontSize: 13 }}
                  >
                    View
                  </a>
                )}
                {s.status !== "void" && s.status !== "signed" && (
                  <button
                    className="sow-btn sow-btn-ghost"
                    style={{ padding: "8px 14px", fontSize: 13, color: "var(--red)" }}
                    onClick={() => voidSow(s.id)}
                  >
                    Void
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
