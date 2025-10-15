import React, { useState, useEffect } from "react";

export default function IngredientInput({ pool = [], value = [], onChange = () => {} }) {
  const [text, setText] = useState("");

  useEffect(() => {
    setText("");
  }, [value]);

  function addToken(token) {
    const t = token.trim().toLowerCase();
    if (!t) return;
    if (!value.includes(t)) onChange([...value, t]);
    setText("");
  }

  function removeToken(t) {
    onChange(value.filter(x => x !== t));
  }

  // Safe filtering: pool is always an array
  const suggestions = (pool || [])
    .filter(p => p.toLowerCase().includes(text.toLowerCase()) && !(value || []).includes(p))
    .slice(0, 6);

  return (
    <div>
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 8 }}>
        {(value || []).map(t => (
          <span key={t} style={{ padding: "6px 8px", background: "#eee", borderRadius: 16 }}>
            {t} <button onClick={() => removeToken(t)} style={{ marginLeft: 6 }}>x</button>
          </span>
        ))}
      </div>

      <input
        placeholder="Type ingredient and press Enter"
        value={text}
        onChange={e => setText(e.target.value)}
        onKeyDown={e => { if (e.key === "Enter") { e.preventDefault(); addToken(text); } }}
        style={{ padding: "8px", borderRadius: 4, border: "1px solid #ccc", width: "100%" }}
      />

      <div style={{ marginTop: 4, display: "flex", flexWrap: "wrap", gap: 4 }}>
        {suggestions.map(s => (
          <button
            key={s}
            onClick={() => addToken(s)}
            style={{ padding: "4px 8px", borderRadius: 4, border: "1px solid #aaa", background: "#f9f9f9" }}
          >
            {s}
          </button>
        ))}
      </div>
    </div>
  );
}