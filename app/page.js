const builtItems = [
  ["Gesture Recorder", "Built and tested"],
  ["Timeline Player", "Built and tested"],
  ["Vision Recording & TransScan", "Built and tested"],
  ["Visual Templates & Matcher", "Built · final integration"],
  ["Project → Season → Scenario → Scene → Step", "Implemented"],
  ["MindMap Scenario Builder", "Implemented"],
  ["Project Catalog & Gesture Editor", "Implemented"],
  ["Scanner & Encoder", "Implemented"],
  ["Remote Desktop & Windows Agent", "Working foundation"],
  ["Multi-PC Device Room & Live Mirrors", "Working foundation"],
  ["WebRTC Media & Remote Input Channel", "Implemented · stabilizing"],
  ["Unified Widget Control", "Finalizing"],
];

const integrationItems = [
  ["Unified Quick Start", "Widget → Recorder or Player → Start"],
  ["Automatic Project Creation", "Start recording → project and scenario structure created"],
  ["Smart Vision Loop", "Recognize → confirm → execute → re-scan when needed"],
  ["Scenario Combination", "Combine projects while preserving the originals"],
  ["Extended Visual Capture", "More visual states for animated and changing interfaces"],
  ["Video to Project", "Turn selected video frames into a draft scenario structure"],
];

const roadmap = [
  ["NOW", "Single Device", "Final integration, Quick Start, Vision loop and public testing preparation."],
  ["DEPENDENCY", "Multi-Device", "Builds on the completed Single Device workflow, Device Room, Remote and Windows Agent foundations."],
  ["AFTER MULTI-DEVICE", "Automation Marketplace", "Project publishing, sharing, selling and rental begin after Multi-Device completion."],
  ["FINAL PLATFORM LAYER", "AI Integration", "AI-operated workflows begin after the Single Device and Multi-Device foundations are complete."],
];

// Public progress indicators. Update these values whenever the internal milestone state changes.
// Funding totals and private thresholds are intentionally never exposed on the website.
const releaseProgress = {
  singleDevice: 84,
  multiDevice: 46,
  marketplace: 0,
  aiIntegration: 0,
  acceleration: 32,
};

const progressStages = [
  {
    key: "singleDevice",
    title: "Single Device",
    status: "Final integration",
    dependency: "Current release focus",
  },
  {
    key: "multiDevice",
    title: "Multi-Device",
    status: "Foundation built · product integration in progress",
    dependency: "Depends on Single Device",
  },
  {
    key: "marketplace",
    title: "Automation Marketplace",
    status: "Starts after Multi-Device",
    dependency: "Depends on Single Device + Multi-Device",
  },
  {
    key: "aiIntegration",
    title: "AI Integration",
    status: "Starts after Multi-Device",
    dependency: "Depends on the completed automation platform",
  },
];

const sectionStyle = {
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "88px 20px",
  boxSizing: "border-box",
};

const panelStyle = {
  background:
    "linear-gradient(145deg, rgba(13,30,53,0.94), rgba(4,10,19,0.96))",
  border: "1px solid rgba(104,202,255,0.18)",
  borderRadius: "28px",
  boxShadow: "0 28px 80px rgba(0,0,0,0.34)",
};

function SectionTitle({ eyebrow, title, text }) {
  return (
    <div style={{ maxWidth: "760px", marginBottom: "34px" }}>
      <div className="eyebrow">{eyebrow}</div>
      <h2 className="sectionTitle">{title}</h2>
      {text ? <p className="sectionLead">{text}</p> : null}
    </div>
  );
}

function Poster({ src, alt, portrait = false }) {
  return (
    <div
      style={{
        ...panelStyle,
        padding: "8px",
        overflow: "hidden",
        maxWidth: portrait ? "820px" : "1400px",
        margin: "0 auto",
      }}
    >
      <img
        src={src}
        alt={alt}
        style={{
          display: "block",
          width: "100%",
          height: "auto",
          borderRadius: "21px",
        }}
      />
    </div>
  );
}

export default function Home() {
  return (
    <main className="page">
      <style>{`
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { margin: 0; background: #02060d; }
        button, a { font: inherit; }
        a { color: inherit; text-decoration: none; }
        .page {
          min-height: 100vh;
          overflow: hidden;
          color: #fff;
          font-family: Arial, Helvetica, sans-serif;
          background:
            radial-gradient(circle at 50% 0%, rgba(24,83,146,.42), transparent 28%),
            radial-gradient(circle at 100% 30%, rgba(46,24,130,.18), transparent 28%),
            linear-gradient(180deg, #071322 0%, #02060d 38%, #030812 100%);
        }
        .header {
          position: sticky;
          top: 0;
          z-index: 20;
          border-bottom: 1px solid rgba(255,255,255,.07);
          background: rgba(2,6,13,.78);
          backdrop-filter: blur(16px);
        }
        .headerInner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 16px 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
        }
        .brand { color: #89ddff; font-weight: 800; letter-spacing: 3px; }
        .brandSub { margin-top: 4px; color: #6f88aa; font-size: 11px; letter-spacing: 1px; }
        .nav { display: flex; align-items: center; gap: 22px; color: #9db3ce; font-size: 13px; }
        .nav a:hover { color: #fff; }
        .profile {
          width: 44px; height: 44px; padding: 0; border-radius: 50%;
          border: 1px solid #4aa8ff; color: #7fd7ff;
          background: radial-gradient(circle at 30% 20%, rgba(74,168,255,.28), transparent 40%), rgba(8,17,29,.92);
          box-shadow: 0 0 20px rgba(74,168,255,.3);
          display: grid; place-items: center; cursor: pointer;
        }
        .hero {
          max-width: 1040px;
          margin: 0 auto;
          padding: 92px 20px 54px;
          text-align: center;
        }
        .eyebrow { color: #69ceff; font-size: 12px; font-weight: 700; letter-spacing: 4px; }
        .hero h1 {
          margin: 18px 0 0;
          font-size: clamp(42px, 8vw, 82px);
          line-height: .98;
          letter-spacing: -3px;
        }
        .hero h2 {
          margin: 18px 0 0;
          color: #8bddff;
          font-size: clamp(22px, 4vw, 38px);
          font-weight: 500;
        }
        .heroProduct { color: #fff; }
        .heroLead {
          max-width: 720px;
          margin: 24px auto 0;
          color: #a8bed8;
          font-size: clamp(16px, 2.2vw, 20px);
          line-height: 1.7;
        }
        .status {
          display: inline-flex;
          margin-top: 24px;
          padding: 10px 15px;
          border: 1px solid rgba(83,211,255,.24);
          border-radius: 999px;
          color: #9ee7ff;
          background: rgba(25,117,169,.12);
          font-size: 13px;
        }
        .actions { display: flex; justify-content: center; flex-wrap: wrap; gap: 12px; margin-top: 30px; }
        .button {
          display: inline-flex; align-items: center; justify-content: center;
          min-height: 48px; padding: 0 21px; border-radius: 14px;
          border: 1px solid rgba(99,203,255,.35); font-weight: 700;
        }
        .primary { background: linear-gradient(135deg, #1d8dff, #6d36ff); box-shadow: 0 12px 30px rgba(37,126,255,.28); }
        .secondary { background: rgba(255,255,255,.045); color: #bceaff; }
        .posterWrap { width: 100%; padding: 0 14px 68px; }
        .sectionTitle { margin: 14px 0 0; font-size: clamp(30px, 5vw, 50px); line-height: 1.08; }
        .sectionLead { margin: 18px 0 0; color: #9eb4ce; font-size: 17px; line-height: 1.75; }
        .modeGrid, .builtGrid, .integrationGrid, .fundGrid, .roadmapGrid {
          display: grid; gap: 16px;
        }
        .modeGrid { grid-template-columns: repeat(2, minmax(0,1fr)); }
        .modeCard { padding: 29px; min-height: 290px; }
        .modeFlow { color: #fff; font-weight: 700; line-height: 1.7; }
        .modeCard ul { margin: 24px 0 0; padding-left: 19px; color: #a9bdd5; line-height: 1.9; }
        .builtGrid { grid-template-columns: repeat(2, minmax(0,1fr)); }
        .builtItem, .integrationItem { padding: 19px; border-radius: 18px; background: rgba(255,255,255,.035); border: 1px solid rgba(255,255,255,.07); }
        .builtName { font-weight: 700; }
        .badge { display: inline-block; margin-top: 10px; font-size: 11px; color: #86dfff; }
        .integrationGrid { grid-template-columns: repeat(2, minmax(0,1fr)); }
        .integrationItem p { margin: 9px 0 0; color: #95abc5; line-height: 1.55; }
        .evolution { display: grid; grid-template-columns: .8fr 1.2fr; gap: 28px; align-items: center; }
        .fundGrid { grid-template-columns: 1.1fr .9fr; }
        .fundCard { padding: 32px; }
        .paymentButtons { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 24px; }
        .paymentButton { padding: 13px 16px; border-radius: 12px; background: rgba(255,255,255,.06); border: 1px solid rgba(116,211,255,.2); }
        .finePrint { margin-top: 18px; color: #6f849f; font-size: 12px; line-height: 1.6; }
        .roadmapGrid { grid-template-columns: repeat(4, minmax(0,1fr)); }
        .progressStack { display: grid; gap: 16px; }
        .progressCard { padding: 24px; }
        .progressHead { display: flex; justify-content: space-between; gap: 18px; align-items: flex-start; }
        .progressTitle { margin: 0; font-size: 21px; }
        .progressStatus { margin-top: 7px; color: #91a9c4; font-size: 14px; line-height: 1.5; }
        .progressValue { color: #8de4ff; font-size: 22px; font-weight: 800; white-space: nowrap; }
        .progressTrack { height: 12px; margin-top: 18px; border-radius: 999px; overflow: hidden; background: rgba(255,255,255,.07); border: 1px solid rgba(255,255,255,.06); }
        .progressFill { height: 100%; border-radius: inherit; background: linear-gradient(90deg,#178dff,#55d8ff,#8664ff); box-shadow: 0 0 18px rgba(72,198,255,.38); }
        .progressDependency { margin-top: 11px; color: #6f89a7; font-size: 12px; }
        .accelerationPanel { margin-top: 20px; padding: 28px; }
        .accelerationTop { display: flex; justify-content: space-between; gap: 18px; align-items: center; }
        .accelerationValue { color: #9ae9ff; font-size: 28px; font-weight: 900; }
        .accelerationText { margin: 13px 0 0; color: #a8bdd5; line-height: 1.7; }
        .privateFundingNote { margin-top: 13px; color: #6e87a4; font-size: 12px; line-height: 1.6; }
        .proofLine { padding: 15px 18px; border-radius: 14px; background: rgba(71,203,255,.08); border: 1px solid rgba(87,207,255,.17); color: #b8edff; line-height: 1.6; }
        .roadmapCard { padding: 22px; }
        .roadmapStage { color: #69ceff; font-size: 11px; font-weight: 800; letter-spacing: 3px; }
        .roadmapCard h3 { margin: 12px 0 0; }
        .roadmapCard p { margin: 12px 0 0; color: #91a8c2; line-height: 1.6; font-size: 14px; }
        .footer { border-top: 1px solid rgba(255,255,255,.08); padding: 42px 20px; text-align: center; color: #7187a3; }
        @media (max-width: 820px) {
          .nav { display: none; }
          .hero { padding-top: 68px; }
          .hero h1 { letter-spacing: -1.6px; }
          .modeGrid, .builtGrid, .integrationGrid, .fundGrid, .roadmapGrid, .evolution { grid-template-columns: 1fr; }
          .posterWrap { padding-left: 8px; padding-right: 8px; }
        }
      `}</style>

      <header className="header">
        <div className="headerInner">
          <a href="#top">
            <div className="brand">VIVACAPERE</div>
            <div className="brandSub">ANDROID AUTOMATION ECOSYSTEM</div>
          </a>

          <nav className="nav" aria-label="Primary navigation">
            <a href="#product">Product</a>
            <a href="#technology">Technology</a>
            <a href="#proof">Built</a>
            <a href="#funding">Funding</a>
            <a href="#roadmap">Roadmap</a>
            <a href="#support">Support</a>
          </nav>

          <button
            type="button"
            className="profile"
            aria-label="Vivacapere account access coming soon"
            title="Account access coming soon"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.8" />
              <path d="M4.5 20C5.2 15.8 7.8 13.5 12 13.5C16.2 13.5 18.8 15.8 19.5 20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </header>

      <section id="top" className="hero">
        <div className="eyebrow">THE SCREEN BECOMES THE TRIGGER</div>
        <h1><span className="heroProduct">Vivacapere AutoClicker</span></h1>
        <h2>Vision Scenario Builder · Multi-Device Orchestration</h2>
        <p className="heroLead">
          Record what should happen. Let Vision understand when it should happen. Vivacapere connects real screen states with gestures, scenarios and devices, turning visible change into the trigger for automation.
        </p>
        <div className="status">Built and working · final integration before public testing</div>
        <div className="actions">
          <a className="button primary" href="#funding">Accelerate the Release</a>
          <a className="button secondary" href="#proof">See the Working System</a>
          <a className="button secondary" href="#investors">Investor Program</a>
        </div>
      </section>

      <div className="posterWrap">
        <Poster src="/new_poster_centralbutton.jpg" alt="Vivacapere central Widget architecture with single-device and multi-device automation" />
      </div>

      <section id="product" style={sectionStyle}>
        <SectionTitle
          eyebrow="TWO AUTOMATION MODES"
          title="Automation that can see before it acts."
          text="Ordinary macros wait for time to pass. Vivacapere Vision waits for the right visual state, identifies the relevant scene and executes the action connected to what is actually on the screen."
        />
        <div className="modeGrid">
          <article className="modeCard" style={{ ...panelStyle, borderColor: "rgba(92,255,132,.22)" }}>
            <div className="eyebrow" style={{ color: "#69ff87" }}>TIMELINE · FREE</div>
            <h3 style={{ fontSize: "27px", margin: "15px 0" }}>Record once. Replay precisely.</h3>
            <div className="modeFlow">Record gestures → Save timeline → Replay</div>
            <ul>
              <li>Tap, swipe and extended gesture recording</li>
              <li>Time-based execution</li>
              <li>Reusable scenarios and gesture editing</li>
              <li>Fast entry point for everyday automation</li>
            </ul>
          </article>
          <article className="modeCard" style={{ ...panelStyle, borderColor: "rgba(94,203,255,.28)" }}>
            <div className="eyebrow">VISION · PREMIUM</div>
            <h3 style={{ fontSize: "27px", margin: "15px 0" }}>The live screen becomes the trigger.</h3>
            <div className="modeFlow">Record → Recognize scene → Confirm state → Execute</div>
            <ul>
              <li>Recognizes the current visual state before acting</li>
              <li>Connects each scene with its relevant gesture</li>
              <li>Handles animated and changing interfaces through visual re-checking</li>
              <li>Turns recorded screen states into reusable automation logic</li>
            </ul>
          </article>
        </div>
      </section>

      <section style={{ ...sectionStyle, paddingTop: "34px", paddingBottom: "34px" }}>
        <div style={{ ...panelStyle, padding: "clamp(28px, 6vw, 64px)", textAlign: "center", borderColor: "rgba(91,215,255,.32)" }}>
          <div className="eyebrow">FROM BLIND REPLAY TO VISUAL ACTION</div>
          <h2 className="sectionTitle" style={{ maxWidth: "900px", marginLeft: "auto", marginRight: "auto" }}>
            Give automation eyes, memory and hands.
          </h2>
          <p className="sectionLead" style={{ maxWidth: "820px", marginLeft: "auto", marginRight: "auto" }}>
            A captured screen frame becomes meaningful context. A scene becomes a recognizable state. A gesture becomes the action connected to that state. A scenario becomes a reusable chain of visual decisions. Multi-Device turns those chains into orchestration across an entire environment.
          </p>
          <div className="proofLine" style={{ maxWidth: "760px", margin: "28px auto 0" }}>
            See the state → recognize the scene → confirm the moment → execute the action → continue the scenario.
          </div>
        </div>
      </section>
      <section id="proof" style={{ ...sectionStyle, paddingTop: "42px" }}>
        <SectionTitle
          eyebrow="BUILT AND WORKING"
          title="A year of development is already inside the product."
          text="Vivacapere is not a mock-up and not a promise to begin later. Recorder, Player, Vision, TransScan, MindMap, Remote Desktop, Windows Agent and multi-PC foundations already exist. The remaining work is focused: unite the experience, stabilize it across hardware and place it in people’s hands."
        />
        <div style={{ ...panelStyle, padding: "20px" }}>
          <div className="builtGrid">
            {builtItems.map(([name, status]) => (
              <div className="builtItem" key={name}>
                <div className="builtName">{name}</div>
                <span className="badge">{status}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="technology" style={sectionStyle}>
        <div className="evolution">
          <div>
            <div className="eyebrow">INTERFACE EVOLUTION</div>
            <h2 className="sectionTitle">One control point for an entire automation world.</h2>
            <p className="sectionLead">
              The central Widget becomes Recorder, Player and scenario control without covering the screen with technical panels. Start quickly, record naturally, then open the full MindMap only when deeper editing is needed.
            </p>
          </div>
          <Poster src="/old_panel_posters.jpg" alt="Working Recorder and Player control panels" />
        </div>
      </section>

      <section style={{ ...sectionStyle, paddingTop: "40px" }}>
        <SectionTitle
          eyebrow="FINAL INTEGRATION BEFORE TESTING"
          title="The invention is built. The release experience is being completed."
          text="The core technology already exists. Current work connects Quick Start, automatic project creation, scene recognition, visual confirmation and adaptive execution into one polished public workflow."
        />
        <div className="integrationGrid">
          {integrationItems.map(([name, description]) => (
            <article className="integrationItem" key={name}>
              <strong>{name}</strong>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section style={sectionStyle}>
        <SectionTitle
          eyebrow="PRODUCT VISION"
          title="Vision Scenario Builder"
          text="A gesture is no longer separated from reality. Recorder captures the action together with its visual context. Vision recognizes the current scene, confirms the state and selects the relevant step. The result is automation that responds to what the screen shows, not only to a blind timer."
        />
        <Poster src="/vision-poster.png" alt="Vision Scenario Builder product vision poster" portrait />
      </section>

      <section style={{ ...sectionStyle, paddingTop: "34px" }}>
        <SectionTitle
          eyebrow="MULTI-DEVICE FOUNDATION"
          title="From one screen to an orchestra of devices."
          text="The same visual scenario model expands beyond one phone. Device Room, Windows Agent, live PC mirrors and isolated device sessions already form the foundation. The next integration step lets scenarios select, observe and control phones, computers and emulators as one coordinated environment."
        />
        <div className="modeGrid">
          <div className="fundCard" style={panelStyle}>
            <h3 style={{ marginTop: 0 }}>Single Device</h3>
            <p className="sectionLead" style={{ fontSize: "15px" }}>
              Record, build, recognize and replay directly on the current device.
            </p>
          </div>
          <div className="fundCard" style={panelStyle}>
            <h3 style={{ marginTop: 0 }}>Multi Device</h3>
            <p className="sectionLead" style={{ fontSize: "15px" }}>
              Device Room, Windows Agent, remote mirrors, emulators and orchestrated scenario branches.
            </p>
          </div>
        </div>
      </section>

      <section id="funding" style={sectionStyle}>
        <SectionTitle
          eyebrow="PUBLIC RELEASE PROGRESS"
          title="Help turn a working breakthrough into a public product."
          text="The technology has crossed the invention stage. Support now increases development capacity, hardware coverage and integration speed. Each completed layer unlocks the next: Single Device → Multi-Device → Marketplace → AI Integration."
        />
        <div className="progressStack">
          {progressStages.map((stage) => {
            const value = releaseProgress[stage.key];
            return (
              <article className="progressCard" style={panelStyle} key={stage.key}>
                <div className="progressHead">
                  <div>
                    <h3 className="progressTitle">{stage.title}</h3>
                    <div className="progressStatus">{stage.status}</div>
                  </div>
                  <div className="progressValue">{value}%</div>
                </div>
                <div className="progressTrack" aria-label={`${stage.title} readiness ${value}%`}>
                  <div className="progressFill" style={{ width: `${value}%` }} />
                </div>
                <div className="progressDependency">{stage.dependency}</div>
              </article>
            );
          })}
        </div>
        <div className="accelerationPanel" style={{ ...panelStyle, borderColor: "rgba(91,215,255,.34)" }}>
          <div className="accelerationTop">
            <div>
              <div className="eyebrow">SUPPORT ACCELERATION</div>
              <h3 style={{ margin: "11px 0 0", fontSize: "25px" }}>Release acceleration power</h3>
            </div>
            <div className="accelerationValue">{releaseProgress.acceleration}%</div>
          </div>
          <div className="progressTrack">
            <div className="progressFill" style={{ width: `${releaseProgress.acceleration}%` }} />
          </div>
          <p className="accelerationText">
            Every increase in support gives the project more continuous development time, broader device testing and more parallel integration. The effect is shown here as acceleration power, while financial totals remain private.
          </p>
          <p className="privateFundingNote">
            Financial totals and internal release thresholds remain private. This indicator reflects their practical effect on development speed.
          </p>
        </div>
      </section>
      <section id="support" style={sectionStyle}>
        <SectionTitle
          eyebrow="ACCELERATE THE LAUNCH"
          title="Build the future with us"
          text="Vivacapere already has eyes, memory and hands. Support helps complete the product experience, test it on more real hardware and bring visual automation to the people who have been waiting for more than another blind macro recorder."
        />
        <div className="fundGrid">
          <div className="fundCard" style={panelStyle}>
            <h3 style={{ marginTop: 0, fontSize: "25px" }}>Accelerate public release</h3>
            <p className="sectionLead" style={{ fontSize: "15px" }}>
              Any contribution strengthens final integration, continuous development, hardware validation, infrastructure and public release preparation.
            </p>
            <div className="paymentButtons">
              <a className="paymentButton" href="#">Revolut</a>
              <a className="paymentButton" href="#">PayPal</a>
              <a className="paymentButton" href="#">Crypto</a>
            </div>
            <p className="finePrint">
              Payment links are placeholders until the final personal support links are inserted. Voluntary support does not provide equity, repayment rights or profit participation.
            </p>
          </div>
          <div id="investors" className="fundCard" style={panelStyle}>
            <div className="eyebrow">THREE SEPARATE PATHS</div>
            <h3 style={{ fontSize: "25px" }}>Founder Pass · Donate · Investor Program</h3>
            <p className="sectionLead" style={{ fontSize: "15px" }}>
              Founder Pass is early access. Donate is voluntary support without equity. The Investor Program is a separate private route for economic participation in the Vivacapere AutoClicker product, subject to formal terms and agreement.
            </p>
            <div className="paymentButtons">
              <a className="paymentButton" href="mailto:contact@vivacapere.ee?subject=Founder%20Pass">Request Founder Pass</a>
              <a className="paymentButton" href="mailto:contact@vivacapere.ee?subject=Investor%20Program">Request Investor Information</a>
            </div>
            <p className="finePrint">Investor participation is not a donation or a Founder Pass. Exact profit definitions, accounting periods, payment procedures and legal terms must be agreed separately before funds are accepted.</p>
          </div>
        </div>
      </section>

      <section id="roadmap" style={{ ...sectionStyle, paddingTop: "32px" }}>
        <SectionTitle eyebrow="ROADMAP" title="A dependency-based path to the complete automation platform." />
        <div className="roadmapGrid">
          {roadmap.map(([stage, title, text]) => (
            <article className="roadmapCard" style={panelStyle} key={stage}>
              <div className="roadmapStage">{stage}</div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <footer className="footer">
        <div style={{ color: "#a8c6e6", letterSpacing: "2px" }}>VIVACAPERE OÜ</div>
        <div style={{ marginTop: "10px", fontSize: "13px" }}>Privacy Policy · Terms · Contact</div>
      </footer>
    </main>
  );
}
