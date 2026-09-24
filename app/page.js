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
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "24px",
          boxSizing: "border-box",
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
              marginTop: "4px",
              fontSize: "12px",
              color: "#7088a8",
            }}
          >
            Product Ecosystem
          </div>
        </div>

        <button
          type="button"
          aria-label="Open Vivacapere account"
          title="Vivacapere Account"
          style={{
            width: "44px",
            height: "44px",
            padding: 0,
            borderRadius: "50%",
            border: "1px solid #4aa8ff",
            background:
              "radial-gradient(circle at 30% 20%, rgba(74,168,255,0.25), transparent 38%), rgba(8,17,29,0.8)",
            color: "#7fd7ff",
            boxShadow: "0 0 18px rgba(74,168,255,0.35)",
            display: "grid",
            placeItems: "center",
            cursor: "pointer",
          }}
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <circle
              cx="12"
              cy="8"
              r="4"
              stroke="currentColor"
              strokeWidth="1.8"
            />

            <path
              d="M4.5 20C5.2 15.8 7.8 13.5 12 13.5C16.2 13.5 18.8 15.8 19.5 20"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </header>

      {/* POSTER HERO */}

      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "16px 24px 60px",
          boxSizing: "border-box",
        }}
      >
        <div
          role="img"
          aria-label="Vision Scenario Builder"
          style={{
            width: "100%",
            aspectRatio: "16 / 9",
            borderRadius: "28px",
            border: "1px solid rgba(120,200,255,0.18)",
            backgroundImage: 'url("/vision-poster.png")',
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundColor: "#050b14",
            boxShadow:
              "0 28px 90px rgba(0,0,0,0.42), 0 0 55px rgba(49,145,255,0.12)",
            overflow: "hidden",
            boxSizing: "border-box",
          }}
        />
      </section>

      {/* CURRENT PRODUCT */}

      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 24px 60px",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            background:
              "linear-gradient(135deg, #0b1728 0%, #143255 100%)",
            borderRadius: "28px",
            border: "1px solid rgba(120,200,255,0.15)",
            padding: "40px",
            boxShadow: "0 24px 70px rgba(0,0,0,0.25)",
            boxSizing: "border-box",
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

          <h1
            style={{
              margin: "16px 0 0",
              fontSize: "clamp(30px, 5vw, 48px)",
              lineHeight: 1.1,
            }}
          >
            Vivacapere AutoClicker
          </h1>

          <h2
            style={{
              margin: "10px 0 0",
              color: "#80d5ff",
              fontSize: "clamp(20px, 3vw, 30px)",
              fontWeight: 400,
            }}
          >
            Vision Scenario Builder
          </h2>

          <p
            style={{
              margin: "18px 0 0",
              color: "#9ec2e8",
            }}
          >
            Preparing for Google Play release
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "20px",
              marginTop: "32px",
            }}
          >
            {/* TIMELINE */}

            <article
              style={{
                background:
                  "radial-gradient(circle at 15% 0%, rgba(92,255,132,0.12), transparent 40%), rgba(255,255,255,0.04)",
                border: "1px solid rgba(105,255,135,0.18)",
                borderRadius: "20px",
                padding: "26px",
                boxSizing: "border-box",
              }}
            >
              <div
                style={{
                  color: "#69ff87",
                  fontWeight: "bold",
                  fontSize: "22px",
                  letterSpacing: "2px",
                }}
              >
                TIMELINE
              </div>

              <div
                style={{
                  marginTop: "12px",
                  color: "#ffffff",
                  fontWeight: "bold",
                }}
              >
                Free
              </div>

              <p
                style={{
                  margin: "18px 0 0",
                  color: "#aebfd7",
                  lineHeight: 1.7,
                }}
              >
                Record gestures. Replay actions. Build complete automation
                scenarios using timing and recorded idle intervals.
              </p>
            </article>

            {/* VISION */}

            <article
              style={{
                background:
                  "radial-gradient(circle at 15% 0%, rgba(74,188,255,0.16), transparent 40%), rgba(255,255,255,0.04)",
                border: "1px solid rgba(94,203,255,0.22)",
                borderRadius: "20px",
                padding: "26px",
                boxSizing: "border-box",
              }}
            >
              <div
                style={{
                  color: "#5ecbff",
                  fontWeight: "bold",
                  fontSize: "22px",
                  letterSpacing: "2px",
                }}
              >
                VISION
              </div>

              <div
                style={{
                  marginTop: "12px",
                  color: "#ffffff",
                  fontWeight: "bold",
                }}
              >
                Premium EUR 4.99
              </div>

              <p
                style={{
                  margin: "18px 0 0",
                  color: "#aebfd7",
                  lineHeight: 1.7,
                }}
              >
                Capture visual states with TransScan, create scene etalons and
                execute gestures when the expected screen state is detected.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* COMING NEXT */}

      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 24px 80px",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            borderLeft: "2px solid #389cff",
            padding: "4px 0 4px 24px",
          }}
        >
          <div
            style={{
              color: "#7fd7ff",
              fontSize: "12px",
              letterSpacing: "4px",
            }}
          >
            COMING NEXT
          </div>

          <h2
            style={{
              margin: "14px 0 0",
            }}
          >
            Platform Expansion
          </h2>

          <p
            style={{
              marginTop: "20px",
              color: "#9db0ce",
              lineHeight: 1.9,
            }}
          >
            Device Room
            <br />
            Multi-Device Orchestration
            <br />
            AI Assistant
          </p>
        </div>
      </section>

      {/* FOOTER */}

      <footer
        style={{
          borderTop: "1px solid rgba(255,255,255,0.08)",
          padding: "40px 24px",
          textAlign: "center",
          color: "#7c90b0",
        }}
      >
        <div>VIVACAPERE OÜ</div>

        <div
          style={{
            marginTop: "10px",
            fontSize: "13px",
          }}
        >
          Privacy Policy · Terms · Contact
        </div>
      </footer>
    </main>
  );
}
