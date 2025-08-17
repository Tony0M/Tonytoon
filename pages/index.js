export default function Home() {
  return (
    <main style={{
      minHeight: "100vh",
      display: "grid",
      placeItems: "center",
      padding: "40px",
      fontFamily: "system-ui, Arial, sans-serif",
      background: "linear-gradient(180deg,#f8fbff,#ffffff)"
    }}>
      <div style={{
        maxWidth: 820,
        textAlign: "center",
        background: "rgba(255,255,255,0.8)",
        border: "1px solid #e5e7eb",
        borderRadius: 16,
        padding: "28px 24px",
        boxShadow: "0 10px 30px rgba(0,0,0,0.06)"
      }}>
        <h1 style={{ fontSize: 36, margin: 0, fontWeight: 800, color: "#0f172a" }}>
          TonyToon World — Coming Soon 🚀
        </h1>
        <p style={{ fontSize: 18, color: "#334155", marginTop: 12 }}>
          Your first interactive adventure is on the way! Join our pre-launch list to get notified the moment we drop the first book.
        </p>
        <div style={{ marginTop: 18, display: "flex", gap: 8, justifyContent: "center", flexWrap: "wrap" }}>
          <input
            placeholder="Enter your email"
            aria-label="Email"
            style={{ padding: "12px 14px", borderRadius: 12, border: "1px solid #cbd5e1", minWidth: 260 }}
          />
          <button
            style={{ padding: "12px 18px", borderRadius: 12, background: "#facc15", color: "#111827", fontWeight: 700, border: "none", cursor: "pointer" }}
          >
            Notify Me
          </button>
        </div>
        <p style={{ fontSize: 12, color: "#64748b", marginTop: 10 }}>
          We respect your privacy. No spam—ever.
        </p>
      </div>
    </main>
  );
}
