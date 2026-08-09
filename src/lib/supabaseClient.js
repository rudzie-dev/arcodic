import { createClient } from "@supabase/supabase-js";

const url = import.meta.env.VITE_SUPABASE_URL;
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!url || !anonKey) {
  // Loud in dev so a missing .env doesn't fail silently later.
  console.error(
    "Missing VITE_SUPABASE_URL / VITE_SUPABASE_ANON_KEY — check your .env file."
  );
}

export const supabase = createClient(url, anonKey);

export const FUNCTIONS_URL = `${url}/functions/v1`;

export async function fetchSowByToken(token) {
  const res = await fetch(`${FUNCTIONS_URL}/get-sow?token=${encodeURIComponent(token)}`, {
    headers: { apikey: anonKey, Authorization: `Bearer ${anonKey}` },
  });
  const body = await res.json();
  if (!res.ok) throw new Error(body.error || "Failed to load SOW");
  return body; // { sow, pdf_url }
}

export async function signSow({ token, typedSignature, drawnSignature, agree }) {
  const res = await fetch(`${FUNCTIONS_URL}/sign-sow`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      apikey: anonKey,
      Authorization: `Bearer ${anonKey}`,
    },
    body: JSON.stringify({
      token,
      client_typed_signature: typedSignature,
      client_drawn_signature: drawnSignature,
      agree,
    }),
  });
  const body = await res.json();
  if (!res.ok) throw new Error(body.error || "Failed to sign");
  return body; // { ok, pdf_url, signed_at }
}
