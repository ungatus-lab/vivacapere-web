export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top, #17396b 0%, #08111d 35%, #02060d 100%)",
        color: "#ffffff",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "24px 40px",
        }}
      >
        <div>
          <div
            style={{
              color: "#7fd7ff",
              fontWeight: "bold",
              letterSpacing: "2px",
            }}
          >
            VIVACAPERE
          </div>

          <div
            style={{
              fontSize: "12px",
              color: "#7088a8",
            }}
          >
            Product Ecosystem
          </div>
        </div>

        <div
          style={{
            width: "44px",
            height: "44px",
            borderRadius: "50%",
            border: "1px solid #4aa8ff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#7fd7ff",
            fontSize: "20px",
            boxShadow: "0 0 15px rgba(74,168,255,.35)",
            cursor: "pointer",
          }}
        >
          👤
        </div>
      </header>

      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "10px 24px 60px",
        }}
      >
        <img
          src="/vision-poster.png"
          alt="Vision Scenario Builder"
          style={{
            width: "100%",
            borderRadius: "24px",
            display: "block",
            border: "1px solid rgba(120,200,255,.15)",
          }}
        />
      </section>

      <section
        style={{
          maxWidth: "1200px",
             border: "1px solid rgba(120,200,255,.15)",
            padding: "40px",
          }}
        >
          <div
            style={{
              color: "#7fd7ff",
              fontSize: "12px",
              letterSpacing: "4px",
            }}
          >
            CURRENT PRODUCT
          </div>

          <h2
            style={{
              marginTop: "16px",
            }}
          >
            Vivacapere AutoClicker
          </h2>

          <p
            style={{
              color: "#9ec2e8",
            }}
          >
            Google Play Release
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit,minmax(280px,1fr))",
              gap: "20px",
              marginTop: "30px",
            }}
          >
            <div
              style={{
                background: "rgba(255,255,255,.04)",
                borderRadius: "18px",
                padding: "24px",
              }}
            >
              <div
                style={{
                  color: "#69ff87",
                  fontWeight: "bold",
                  fontSize: "20px",
                }}
              >
                TIMELINE
              </div>

              <p>Free</p>

              <p>
                Record gestures.
                Replay actions.
                Build scenarios.
              </p>
            </div>

            <div
              style={{
                background: "rgba(255,255,255,.04)",
                borderRadius: "18px",
                padding: "24px",
              }}
            >
              <div
                style={{
                  color: "#5ecbff",
                  fontWeight: "bold",
                  fontSize: "20px",
                }}
              >
                VISION
              </div>

              <p>Premium €4.99</p>

              <p>
                Visual recognition.
                TransScan engine.
                Adaptive automation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 24px 80px",
        }}
      >
        <h2>Coming Next</h2>

        <p>Device Room</p>
        <p>Multi Device Orchestration</p>
        <p>AI Assistant</p>
      </section>

      <footer
        style={{
          borderTop: "1px solid rgba(255,255,255,.08)",
          padding: "40px",
          textAlign: "center",
          color: "#7c90b0",
        }}
      >
        <div>VIVACAPERE OÜ</div>

        <div style={{ marginTop: "10px" }}>
          Privacy Policy • Terms • Contact
        </div>
      </footer>
    </main>
  );
}
