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
          padding: "16px 24px 48px",
          boxSizing: "border-box",
        }}
      >
        /vision-poster.png            boxShadow:
              "0 28px 90px rgba(0,0,0,0.42), 0 0 55px rgba(49,145,255,0.12)",
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
            padding: "clamp(24px, 5vw, 40px)",
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
              fontSize: "clamp(30px, 7vw, 48px)",
              lineHeight: 1.08,
            }}
          >
            Vivacapere AutoClicker
          </h1>

          <h2
            style={{
              margin: "10px 0 0",
              color: "#80d5ff",
              fontSize: "clamp(20px, 5vw, 30px)",
              fontWeight: 400,
            }}
          >
            Vision Scenario Builder
          </h2>

          <p
            style={{
              margin: "18px 0 0",
              color: "#9ec2e8",
              fontSize: "clamp(14px, 3.8vw, 17px)",
            }}
          >
            Preparing for Google Play release
          </p>

          {/* MODE CARDS */}

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
              gap: "12px",
              marginTop: "30px",
              alignItems: "start",
            }}
          >
            {/* TIMELINE */}

            <details
              style={{
                minWidth: 0,
                background:
                  "radial-gradient(circle at 20% 0%, rgba(92,255,132,0.15), transparent 45%), rgba(255,255,255,0.04)",
                border: "1px solid rgba(105,255,135,0.22)",
                borderRadius: "20px",
                boxSizing: "border-box",
                overflow: "hidden",
              }}
            >
              <summary
                style={{
                  minHeight: "142px",
                  padding: "18px 14px",
                  boxSizing: "border-box",
                  cursor: "pointer",
                  listStyle: "none",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  gap: "14px",
                }}
              >
                <div>
                  <div
                    style={{
                      color: "#69ff87",
                      fontWeight: "bold",
                      fontSize: "clamp(16px, 4.5vw, 22px)",
                      letterSpacing: "1px",
                      overflowWrap: "anywhere",
                    }}
                  >
                    TIMELINE
                  </div>

                  <div
                    style={{
                      marginTop: "10px",
                      color: "#ffffff",
                      fontWeight: "bold",
                      fontSize: "14px",
                    }}
                  >
                    Free
                  </div>
                </div>

                <div
                  style={{
                    color: "#8fcfa0",
                    fontSize: "11px",
                    lineHeight: 1.4,
                  }}
                >
                  Tap for details
                </div>
              </summary>

              <div
                style={{
                  padding: "0 14px 18px",
                  color: "#aebfd7",
                  fontSize: "13px",
                  lineHeight: 1.55,
                }}
              >
                Record gestures and replay scenarios using captured timing and
                idle intervals.
              </div>
            </details>

            {/* VISION */}

            <details
              style={{
                minWidth: 0,
                background:
                  "radial-gradient(circle at 20% 0%, rgba(74,188,255,0.2), transparent 45%), rgba(255,255,255,0.04)",
                border: "1px solid rgba(94,203,255,0.26)",
                borderRadius: "20px",
                boxSizing: "border-box",
                overflow: "hidden",
              }}
            >
              <summary
                style={{
                  minHeight: "142px",
                  padding: "18px 14px",
                  boxSizing: "border-box",
                  cursor: "pointer",
                  listStyle: "none",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  gap: "14px",
                }}
              >
                <div>
                  <div
                    style={{
                      color: "#5ecbff",
                      fontWeight: "bold",
                      fontSize: "clamp(16px, 4.5vw, 22px)",
                      letterSpacing: "1px",
                      overflowWrap: "anywhere",
                    }}
                  >
                    VISION
                  </div>

                  <div
                    style={{
                      marginTop: "10px",
                      color: "#ffffff",
                      fontWeight: "bold",
                      fontSize: "14px",
                      lineHeight: 1.35,
                    }}
                  >
                    Premium
                    <br />
                    EUR 4.99
                  </div>
                </div>

                <div
                  style={{
                    color: "#86cceb",
                    fontSize: "11px",
                    lineHeight: 1.4,
                  }}
                >
                  Tap for details
                </div>
              </summary>

              <div
                style={{
                  padding: "0 14px 18px",
                  color: "#aebfd7",
                  fontSize: "13px",
                  lineHeight: 1.55,
                }}
              >
                Detect screen states with TransScan and execute gestures when
                the expected scene appears.
              </div>
            </details>
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
              fontSize: "clamp(26px, 7vw, 38px)",
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
