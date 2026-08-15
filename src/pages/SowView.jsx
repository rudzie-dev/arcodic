import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchSowByToken, signSow } from "../lib/supabaseClient";
import SignaturePad from "../components/SignaturePad";
import { UI_CSS } from "../lib/uiStyles";

export default function SowView() {
  const { token } = useParams();
  const [sow, setSow] = useState(null);
  const [pdfUrl, setPdfUrl] = useState(null);
  const [loadError, setLoadError] = useState("");
  const [loading, setLoading] = useState(true);

  const [agree, setAgree] = useState(false);
  const [typedSig, setTypedSig] = useState("");
  const [drawnSig, setDrawnSig] = useState(null);
  const [signing, setSigning] = useState(false);
  const [signError, setSignError] = useState("");
  const [justSigned, setJustSigned] = useState(false);

  const load = () => {
    setLoading(true);
    fetchSowByToken(token)
      .then(({ sow, pdf_url }) => {
        setSow(sow);
        setPdfUrl(pdf_url);
        setLoadError("");
      })
      .catch((err) => setLoadError(err.message))
      .finally(() => setLoading(false));
  };

  useEffect(load, [token]);

  const submit = async (e) => {
    e.preventDefault();
    setSignError("");
    if (!agree) {
      setSignError("Please check the box confirming you agree to the terms.");
      return;
    }
    if (!typedSig.trim()) {
      setSignError("Please type your full name to sign.");
      return;
    }
    setSigning(true);
    try {
      const result = await signSow({ token, typedSignature: typedSig, drawnSignature: drawnSig, agree });
      setPdfUrl(result.pdf_url);
      setJustSigned(true);
    } catch (err) {
      setSignError(err.message);
    } finally {
      setSigning(false);
    }
  };

  if (loading) {
    return (
      <div className="sow-ui">
        <style>{UI_CSS}</style>
        <div className="sow-narrow">Loading…</div>
      </div>
    );
  }

  if (loadError) {
    return (
      <div className="sow-ui">
        <style>{UI_CSS}</style>
        <div className="sow-narrow">
          <h1 className="sow-h1">Not found</h1>
          <p className="sow-sub">This link is invalid, void, or has expired.</p>
        </div>
      </div>
    );
  }

  const signed = sow.status === "signed" || justSigned;

  return (
    <div className="sow-ui">
      <style>{UI_CSS}</style>
      <nav className="sow-nav">
        <span className="sow-nav-logo">ARCODIC</span>
      </nav>
      <div className="sow-shell">
        <p className="sow-kicker">Statement of Work</p>
        <h1 className="sow-h1">{sow.project_title}</h1>
        <p className="sow-sub">
          Prepared for {sow.client_name}
          {sow.client_company ? ` — ${sow.client_company}` : ""} by {sow.rep_name}
        </p>

        <div className="sow-card">
          <div className="sow-doc-block">
            <h3>Scope of Work</h3>
            <p style={{ whiteSpace: "pre-wrap" }}>{sow.scope_of_work}</p>
          </div>

          {sow.deliverables?.length > 0 && (
            <div className="sow-doc-block">
              <h3>Deliverables</h3>
              <ul style={{ paddingLeft: 20 }}>
                {sow.deliverables.map((d, i) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>
            </div>
          )}

          <div className="sow-doc-block">
            <h3>Timeline & Price</h3>
            <p>{sow.timeline || "—"} · {sow.price}</p>
          </div>

          {sow.payment_terms && (
            <div className="sow-doc-block">
              <h3>Payment Terms</h3>
              <p style={{ whiteSpace: "pre-wrap" }}>{sow.payment_terms}</p>
            </div>
          )}

          {sow.additional_terms && (
            <div className="sow-doc-block">
              <h3>Additional Terms</h3>
              <p style={{ whiteSpace: "pre-wrap" }}>{sow.additional_terms}</p>
            </div>
          )}

          <div className="sow-doc-block">
            <h3>Signed by {sow.rep_name}</h3>
            {sow.rep_signature_image && (
              <img src={sow.rep_signature_image} alt="Rep signature" style={{ maxHeight: 50, marginBottom: 6 }} />
            )}
            <p style={{ fontStyle: "italic" }}>{sow.rep_signature_typed}</p>
            <p style={{ fontSize: 12, color: "var(--dim)" }}>
              {sow.rep_signed_at && new Date(sow.rep_signed_at).toLocaleString()}
            </p>
          </div>
        </div>

        {signed ? (
          <div className="sow-card">
            <span className="sow-badge signed" style={{ marginBottom: 12 }}>Signed</span>
            <h3 style={{ margin: "10px 0 4px" }}>Both signatures are on file.</h3>
            <p className="sow-sub" style={{ marginBottom: 16 }}>
              Signed by {sow.client_signature_typed || typedSig} on{" "}
              {new Date(sow.client_signed_at || Date.now()).toLocaleString()}.
            </p>
            {pdfUrl && (
              <a href={pdfUrl} target="_blank" rel="noreferrer" className="sow-btn">
                Download signed PDF
              </a>
            )}
          </div>
        ) : (
          <form onSubmit={submit} className="sow-card">
            <h3 style={{ marginBottom: 4 }}>Review & sign</h3>
            <p className="sow-sub">By signing below you agree to the terms outlined above.</p>

            <div className="sow-checkbox-row">
              <input
                type="checkbox"
                id="agree"
                checked={agree}
                onChange={(e) => setAgree(e.target.checked)}
              />
              <label htmlFor="agree" style={{ fontSize: 14 }}>
                I have reviewed and agree to the scope, terms, and price outlined above.
              </label>
            </div>

            <div className="sow-field">
              <label>Type your full name to sign *</label>
              <input type="text" required value={typedSig} onChange={(e) => setTypedSig(e.target.value)} />
            </div>

            <div className="sow-field">
              <label>Draw your signature (optional)</label>
              <div>
                <SignaturePad onChange={setDrawnSig} />
              </div>
            </div>

            {signError && <div className="sow-error" style={{ marginBottom: 12 }}>{signError}</div>}

            <button className="sow-btn sow-btn-red" type="submit" disabled={signing}>
              {signing ? "Signing…" : "Sign & submit"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
