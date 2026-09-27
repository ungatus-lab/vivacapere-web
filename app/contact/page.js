export const metadata = {
  title: "Contact | Vivacapere",
  description: "Contact Vivacapere OÜ",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

const panelStyle = {
  background: "linear-gradient(145deg, rgba(13,30,53,0.94), rgba(4,10,19,0.96))",
  border: "1px solid rgba(104,202,255,0.18)",
  borderRadius: "24px",
};

export default function ContactPage() {
  return (
    <main className="page">
      <style>{`
        * { box-sizing: border-box; }
        html, body { margin: 0; min-height: 100%; background: #02060d; }
        a { color: inherit; text-decoration: none; }
        .page { min-height: 100vh; color: #fff; font-family: Arial, Helvetica, sans-serif; background: radial-gradient(circle at 50% 0%, rgba(24,83,146,.35), transparent 30%), linear-gradient(180deg,#071322,#02060d 45%); }
        .header { border-bottom: 1px solid rgba(255,255,255,.07); background: rgba(2,6,13,.86); }
        .headerInner { max-width: 920px; margin: 0 auto; padding: 20px; display: flex; justify-content: space-between; align-items: center; gap: 20px; }
        .brand { color: #89ddff; font-weight: 800; letter-spacing: 3px; }
        .back { color: #9db3ce; font-size: 14px; }
        .back:hover { color: #fff; }
        .content { max-width: 920px; margin: 0 auto; padding: 72px 20px 100px; }
        .eyebrow { color: #69ceff; font-size: 12px; font-weight: 700; letter-spacing: 4px; }
        h1 { margin: 16px 0 0; font-size: clamp(42px, 7vw, 68px); line-height: 1; letter-spacing: -2px; }
        .lead { max-width: 700px; margin: 20px 0 34px; color: #9eb4ce; font-size: 17px; line-height: 1.7; }
        .contactPrimary { padding: 28px; margin-bottom: 16px; }
        .contactPrimary h2 { margin: 0 0 16px; font-size: 25px; }
        .email { color: #8de4ff; font-size: clamp(20px, 4vw, 28px); overflow-wrap: anywhere; }
        .hint { margin-top: 14px; color: #7f96b1; line-height: 1.6; }
        .legal { overflow: hidden; }
        details { border-bottom: 1px solid rgba(255,255,255,.08); }
        details:last-child { border-bottom: 0; }
        summary { padding: 22px 24px; cursor: pointer; list-style: none; display: flex; justify-content: space-between; gap: 20px; font-size: 18px; font-weight: 700; }
        summary::-webkit-details-marker { display: none; }
        summary::after { content: "+"; color: #8de4ff; font-size: 24px; font-weight: 400; }
        details[open] summary::after { content: "−"; }
        .detailBody { padding: 0 24px 24px; color: #b5c8dc; line-height: 1.8; }
        .detailBody strong { color: #fff; }
        .footer { border-top: 1px solid rgba(255,255,255,.08); padding: 36px 20px; text-align: center; color: #7187a3; }
        .footerLinks { margin-top: 10px; display: flex; justify-content: center; flex-wrap: wrap; gap: 8px 14px; font-size: 13px; }
        @media (max-width: 640px) { .headerInner { padding: 16px 18px; } .content { padding: 48px 18px 72px; } .contactPrimary { padding: 22px 20px; } summary { padding: 20px; } .detailBody { padding: 0 20px 22px; } }
      `}</style>

      <header className="header">
        <div className="headerInner">
          <a href="/" className="brand">VIVACAPERE</a>
          <a href="/" className="back">Back to product</a>
        </div>
      </header>

      <section className="content">
        <div className="eyebrow">CONTACT</div>
        <h1>Contact Vivacapere.</h1>
        <p className="lead">Product access, partnerships, investment enquiries and general company communication.</p>

        <section className="contactPrimary" style={{ ...panelStyle, borderColor: "rgba(74,168,255,.34)" }}>
          <h2>General contact</h2>
          <a className="email" href="mailto:contact@vivacapere.ee">contact@vivacapere.ee</a>
          <div className="hint">Available for communication in English, Estonian and Russian.</div>
        </section>

        <section className="legal" style={panelStyle}>
          <details>
            <summary>Legal contacts</summary>
            <div className="detailBody">
              <strong>Vivacapere OÜ</strong><br />
              Registry code: 17588291<br />
              Mere pst 1-12<br />
              40231 Sillamäe linn<br />
              Ida-Viru maakond, Estonia<br />
              Email: <a className="email" style={{ fontSize: "inherit" }} href="mailto:contact@vivacapere.ee">contact@vivacapere.ee</a>
            </div>
          </details>
          <details>
            <summary>Product and early access</summary>
            <div className="detailBody">
              For Founder Pass, closed testing and product-related enquiries, email contact@vivacapere.ee with the subject “Founder Pass”.
            </div>
          </details>
          <details>
            <summary>Investment enquiries</summary>
            <div className="detailBody">
              Private investment information is provided only by direct request and under separately agreed legal and financial terms.
            </div>
          </details>
          <details>
            <summary>Privacy enquiries</summary>
            <div className="detailBody">
              Requests concerning personal data, correction or deletion can be sent to contact@vivacapere.ee.
            </div>
          </details>
        </section>
      </section>

      <footer className="footer">
        <div>© 2026 Vivacapere OÜ</div>
        <div className="footerLinks">
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms</a>
          <a href="/contact">Contact</a>
        </div>
      </footer>
    </main>
  );
}
