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
      {/* HEADER */}

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
            fontSize: "18px",
            boxShadow: "0 0 15px rgba(74,168,255,.35)",
            cursor: "pointer",
          }}
        >
          ⌁
        </div>
      </header>

      {/* HERO */}

      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "70px 24px",
        }}
      >
        <div
          style={{
            color: "#7fd7ff",
            letterSpacing: "5px",
            fontSize: "12px",
          }}
        >
          SEE • UNDERSTAND • AUTOMATE
        </div>

        <h1
          style={{
            fontSize: "clamp(80px,12vw,160px)",
            margin: "20px 0 0 0",
            lineHeight: 0.9,
            letterSpacing: "-4px",
          }}
        >
          VISI
          <span
            style={{
              color: "#47bcff",
              textShadow: "0 0 25px #47bcff",
            }}
          >
            O
          </span>
          N
        </h1>

        <h2
          style={{
            color: "#d7eaff",
            fontWeight: 300,
            fontSize: "clamp(26px,4vw,48px)",
            marginTop: "12px",
          }}
        >
          SCENARIO BUILDER
        </h2>

        <p
          style={{
            marginTop: "30px",
            fontSize: "22px",
            color: "#7fd7ff",
          }}
        >
          More than a standard autoclicker.
        </p>

        <p
          style={{
            maxWidth: "800px",
            color: "#9db0ce",
            lineHeight: 1.8,
          }}
        >
          Vivacapere AutoClicker is powered by the
          Vision Scenario Builder engine.
        </p>
      </section>

      {/* APP CARD */}

      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 24px 60px",
        }}
      >
        <div
          style={{
            background:
              "linear-gradient(135deg,#0b1728,#143255)",
            borderRadius: "28px",
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

      {/* POSTER PLACE */}

      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 24px 60px",
        }}
      >
        <h2
          style={{
            color: "#7fd7ff",
          }}
        >
          Vision Scenario Builder
        </h2>

        <div
          style={{
            marginTop: "20px",
            minHeight: "500px",
            borderRadius: "24px",
            border: "1px solid rgba(120,200,255,.15)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#7e95b8",
          }}
        >
          PLACE POSTER IMAGE HERE
        </div>
      </section>

      {/* FUTURE */}

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

      {/* FOOTER */}

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
