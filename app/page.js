const builtItems = [
  "Gesture Recorder",
  "Timeline Playback",
  "Vision Recording",
  "Project / Season / Scenario / Scene / Step hierarchy",
  "MindMap Scenario Builder",
  "Project Catalog",
  "Gesture Editor",
  "Remote foundation",
  "Windows Agent foundation",
  "Device Room and screen mirroring foundation",
];

const integrationItems = [
  ["Unified Widget Control", "Move Recorder and Player controls into the central Widget and its satellites."],
  ["Unified Quick Start", "Widget → Recorder or Player → Start, without opening the MindMap first."],
  ["Automatic Project Creation", "Start recording → project and scenario structure created automatically."],
  ["Scene Recognition Integration", "Determine the current scene and select the relevant scenario step."],
  ["Visual State Confirmation", "Confirm the current screen state before gesture execution."],
  ["Adaptive Re-Checking", "Re-scan when the screen differs, then continue when the state is confirmed."],
  ["Scenario Combination", "Combine projects into a new project while preserving the originals."],
  ["Video to Project", "Turn selected video frames into a draft Step structure for gesture completion."],
];

const roadmap = [
  ["NOW", "Final integration", "Unified Widget, Quick Start and the complete Vision execution loop."],
  ["NEXT", "Public testing", "Founder access, stability fixes and Google Play preparation."],
  ["THEN", "Multi-device", "Device Room, Windows Agent, mirrors and device-specific scenario branches."],
  ["FUTURE", "Automation ecosystem", "Marketplace, collaborative recognition and AI-operated workflows."],
];

const overviewLayers = [
  ["Unified Widget", "One control centre for Recorder, Player, Timeline, Vision and MindMap."],
  ["Single Device", "Record, build and replay directly on the current Android device."],
  ["Scenario Builder", "Project → Season → Scenario → Scene → Step."],
  ["Multi-Device Direction", "Remote devices, emulators and mirrors as the next platform stage."],
];

const sectionStyle = {
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "88px 20px",
  boxSizing: "border-box",
};

const panelStyle = {
  background: "linear-gradient(145deg, rgba(13,30,53,0.94), rgba(4,10,19,0.96))",
  border: "1px solid rgba(104,202,255,0.18)",
  borderRadius: "28px",
  boxShadow: "0 28px 80px rgba(0,0,0,0.34)",
};

function SectionTitle({ eyebrow, title, text }) {
  return (
    <div style={{ maxWidth: "780px", marginBottom: "34px" }}>
      <div className="eyebrow">{eyebrow}</div>
      <h2 className="sectionTitle">{title}</h2>
      {text ? <p className="sectionLead">{text}</p> : null}
    </div>
  );
}

function Poster({ src, alt }) {
  return (
    <div className="posterFrame">
      <img src={src} alt={alt} className="posterImage" />
    </div>
  );
}

function PosterSlot({ label, filename, description, reverse = false, ratio = "16 / 9" }) {
  return (
    <div className={`posterSlotRow${reverse ? " reverse" : ""}`}>
      <div className="posterSlotCopy">
        <div className="eyebrow">POSTER SLOT</div>
        <h3>{label}</h3>
        <p>{description}</p>
        <code>{filename}</code>
      </div>
      <div className="posterSlot" style={{ aspectRatio: ratio }}>
        <div className="slotCross" aria-hidden="true" />
        <div className="slotLabel">{label}</div>
        <div className="slotHint">Visual will be generated for this exact position</div>
      </div>
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
            radial-gradient(circle at 100% 35%, rgba(46,24,130,.17), transparent 28%),
            linear-gradient(180deg, #071322 0%, #02060d 38%, #030812 100%);
        }
        .header {
          position: sticky;
          top: 0;
          z-index: 20;
          border-bottom: 1px solid rgba(255,255,255,.07);
          background: rgba(2,6,13,.8);
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
          line-height: 1.3;
        }
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
        .posterWrap { width: 100%; padding: 0 14px 40px; }
        .posterFrame {
          max-width: 1400px; margin: 0 auto; padding: 8px; overflow: hidden;
          background: linear-gradient(145deg, rgba(13,30,53,.94), rgba(4,10,19,.96));
          border: 1px solid rgba(104,202,255,.18); border-radius: 28px;
          box-shadow: 0 28px 80px rgba(0,0,0,.34);
        }
        .posterImage { display: block; width: 100%; height: auto; border-radius: 21px; }
        .overviewGrid, .modeGrid, .builtGrid, .integrationGrid, .fundGrid, .roadmapGrid {
          display: grid; gap: 16px;
        }
        .overviewGrid { max-width: 1200px; margin: 0 auto; padding: 0 20px 54px; grid-template-columns: repeat(4, minmax(0,1fr)); }
        .overviewCard, .builtItem, .integrationItem {
          padding: 19px; border-radius: 18px; background: rgba(255,255,255,.035); border: 1px solid rgba(255,255,255,.07);
        }
        .overviewCard strong { color: #d9f4ff; }
        .overviewCard p, .integrationItem p { margin: 9px 0 0; color: #95abc5; line-height: 1.55; font-size: 14px; }
        .sectionTitle { margin: 14px 0 0; font-size: clamp(30px, 5vw, 50px); line-height: 1.08; }
        .sectionLead { margin: 18px 0 0; color: #9eb4ce; font-size: 17px; line-height: 1.75; }
        .modeGrid { grid-template-columns: repeat(2, minmax(0,1fr)); }
        .modeCard { padding: 29px; min-height: 290px; }
        .modeFlow { color: #fff; font-weight: 700; line-height: 1.7; }
        .modeCard ul { margin: 24px 0 0; padding-left: 19px; color: #a9bdd5; line-height: 1.9; }
        .builtGrid { grid-template-columns: repeat(2, minmax(0,1fr)); }
        .builtName { font-weight: 700; }
        .badge { display: inline-block; margin-top: 10px; font-size: 11px; color: #79e8a0; }
        .integrationGrid { grid-template-columns: repeat(2, minmax(0,1fr)); }
        .posterSlotRow {
          display: grid;
          grid-template-columns: .82fr 1.18fr;
          gap: 28px;
          align-items: center;
          margin-top: 34px;
        }
        .posterSlotRow.reverse { grid-template-columns: 1.18fr .82fr; }
        .posterSlotRow.reverse .posterSlotCopy { order: 2; }
        .posterSlotRow.reverse .posterSlot { order: 1; }
        .posterSlotCopy {
          padding: 28px;
          border-radius: 24px;
          background: rgba(6,16,29,.66);
          border: 1px solid rgba(98,201,255,.12);
        }
        .posterSlotCopy h3 { margin: 14px 0 0; font-size: clamp(25px, 4vw, 38px); }
        .posterSlotCopy p { color: #9eb4ce; line-height: 1.7; }
        .posterSlotCopy code { color: #6ed7ff; font-size: 12px; overflow-wrap: anywhere; }
        .posterSlot {
          position: relative;
          min-height: 260px;
          display: grid;
          place-items: center;
          padding: 24px;
          overflow: hidden;
          border-radius: 28px;
          border: 1px dashed rgba(105,211,255,.45);
          background:
            linear-gradient(rgba(7,20,36,.82), rgba(4,10,19,.92)),
            repeating-linear-gradient(90deg, transparent 0 39px, rgba(83,179,255,.07) 40px),
            repeating-linear-gradient(0deg, transparent 0 39px, rgba(83,179,255,.07) 40px);
          text-align: center;
        }
        .slotCross::before, .slotCross::after {
          content: ""; position: absolute; left: 50%; top: 50%; width: 72%; height: 1px; background: rgba(102,205,255,.12);
        }
        .slotCross::before { transform: translate(-50%,-50%) rotate(24deg); }
        .slotCross::after { transform: translate(-50%,-50%) rotate(-24deg); }
        .slotLabel { position: relative; color: #bcecff; font-weight: 800; font-size: clamp(20px, 4vw, 34px); }
        .slotHint { position: absolute; bottom: 25px; color: #637f9e; font-size: 12px; letter-spacing: 1px; }
        .fundGrid { grid-template-columns: 1.1fr .9fr; }
        .fundCard { padding: 32px; }
        .paymentButtons { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 24px; }
        .paymentButton { padding: 13px 16px; border-radius: 12px; background: rgba(255,255,255,.06); border: 1px solid rgba(116,211,255,.2); }
        .finePrint { margin-top: 18px; color: #6f849f; font-size: 12px; line-height: 1.6; }
        .roadmapGrid { grid-template-columns: repeat(4, minmax(0,1fr)); }
        .roadmapCard { padding: 22px; }
        .roadmapStage { color: #69ceff; font-size: 11px; font-weight: 800; letter-spacing: 3px; }
        .roadmapCard h3 { margin: 12px 0 0; }
        .roadmapCard p { margin: 12px 0 0; color: #91a8c2; line-height: 1.6; font-size: 14px; }
        .footer { border-top: 1px solid rgba(255,255,255,.08); padding: 42px 20px; text-align: center; color: #7187a3; }
        @media (max-width: 820px) {
          .nav { display: none; }
          .hero { padding-top: 68px; }
          .hero h1 { letter-spacing: -1.6px; }
          .modeGrid, .builtGrid, .integrationGrid, .fundGrid, .roadmapGrid, .overviewGrid, .posterSlotRow, .posterSlotRow.reverse { grid-template-columns: 1fr; }
          .posterSlotRow.reverse .posterSlotCopy, .posterSlotRow.reverse .posterSlot { order: initial; }
          .posterWrap { padding-left: 8px; padding-right: 8px; }
          .overviewGrid { padding-left: 20px; padding-right: 20px; }
          .posterSlotCopy { padding: 22px; }
          .posterSlot { min-height: 230px; }
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
            <a href="#roadmap">Roadmap</a>
            <a href="#support">Support</a>
          </nav>
          <button type="button" className="profile" aria-label="Vivacapere account access coming soon" title="Account access coming soon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.8" />
              <path d="M4.5 20C5.2 15.8 7.8 13.5 12 13.5C16.2 13.5 18.8 15.8 19.5 20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </header>

      <section id="top" className="hero">
        <div className="eyebrow">WORKING ANDROID AUTOMATION SYSTEM</div>
        <h1>Vivacapere AutoClicker</h1>
        <h2>Vision Scenario Builder<br />Built for Multi-Device Orchestration</h2>
        <p className="heroLead">Record gestures, construct structured scenarios and execute automation through timeline or visual screen states.</p>
        <div className="status">Final integration before public testing</div>
        <div className="actions">
          <a className="button primary" href="#support">Support Development</a>
          <a className="button secondary" href="#product">Explore the Product</a>
        </div>
      </section>

      <div className="posterWrap">
        <Poster src="/new_poster_centralbutton.jpg" alt="Vivacapere platform overview with central Widget, single-device automation, scenario hierarchy and multi-device direction" />
      </div>

      <div className="overviewGrid">
        {overviewLayers.map(([title, text]) => (
          <div className="overviewCard" key={title}>
            <strong>{title}</strong>
            <p>{text}</p>
          </div>
        ))}
      </div>

      <section id="product" style={sectionStyle}>
        <SectionTitle
          eyebrow="SINGLE-DEVICE AUTOMATION"
          title="Record, build and replay on one Android device."
          text="The first public product centres on direct device automation. The existing Recorder, editable gesture flow and Player are being connected to the central Widget for true Quick Start."
        />
        <PosterSlot
          label="Single Device"
          filename="/single-device-poster.jpg"
          description="Future visual: Widget → Recorder → editable Steps → Player, with Timeline and Vision as the two execution modes."
        />
      </section>

      <section style={{ ...sectionStyle, paddingTop: "30px" }}>
        <SectionTitle
          eyebrow="TWO AUTOMATION MODES"
          title="Start simple. Add visual understanding when needed."
          text="Timeline provides direct gesture automation. Vision adds scenario-aware execution based on the current screen state."
        />
        <div className="modeGrid">
          <article className="modeCard" style={{ ...panelStyle, borderColor: "rgba(92,255,132,.22)" }}>
            <div className="eyebrow" style={{ color: "#69ff87" }}>TIMELINE · FREE</div>
            <h3 style={{ fontSize: "27px", margin: "15px 0" }}>Gesture automation</h3>
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
            <h3 style={{ fontSize: "27px", margin: "15px 0" }}>Visual-state automation</h3>
            <div className="modeFlow">Record → Recognize scene → Confirm state → Execute</div>
            <ul>
              <li>Screen-state recognition</li>
              <li>Scenario-aware action selection</li>
              <li>Visual state matching before execution</li>
              <li>Adaptive re-checking when the screen changes</li>
            </ul>
          </article>
        </div>
      </section>

      <section style={{ ...sectionStyle, paddingTop: "36px" }}>
        <SectionTitle
          eyebrow="BUILT AND WORKING"
          title="The system exists beyond the concept."
          text="These product foundations already exist. The following integration section separately identifies what still has to be connected into the final public workflow."
        />
        <div style={{ ...panelStyle, padding: "20px" }}>
          <div className="builtGrid">
            {builtItems.map((name) => (
              <div className="builtItem" key={name}>
                <div className="builtName">{name}</div>
                <span className="badge">Implemented foundation</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="technology" style={sectionStyle}>
        <SectionTitle
          eyebrow="STRUCTURED SCENARIO BUILDER"
          title="From Project to editable Step."
          text="Recording is organised through Project → Season → Scenario → Scene → Step. A Step connects its gesture with the relevant visual context, while MindMap provides the editing surface for the complete structure."
        />
        <PosterSlot
          label="Scenario Builder / MindMap"
          filename="/scenario-builder-poster.jpg"
          description="Future visual: the hierarchy shown at readable scale, including the relationship between Scene, Step, gesture and visual state."
          reverse
        />
      </section>

      <section style={{ ...sectionStyle, paddingTop: "34px" }}>
        <SectionTitle
          eyebrow="INTERFACE EVOLUTION"
          title="From working panels to one unified Widget."
          text="Recorder and Player already operate through working control pipelines. The final interface transfers those controls into the central Widget and its surrounding satellites, creating a direct Quick Start path without opening MindMap first."
        />
        <PosterSlot
          label="Panels → Unified Widget"
          filename="/widget-transition-poster.jpg"
          description="Replacement for the current broad panel poster: separate Recorder and Player controls on one side, central Widget modes and satellites on the other."
        />
      </section>

      <section style={{ ...sectionStyle, paddingTop: "34px" }}>
        <SectionTitle
          eyebrow="FINAL INTEGRATION BEFORE TESTING"
          title="Focused connections between existing systems."
          text="The remaining work centres on Quick Start, automatic project creation and the complete Vision execution loop."
        />
        <div className="integrationGrid">
          {integrationItems.map(([name, description]) => (
            <article className="integrationItem" key={name}>
              <strong>{name}</strong>
              <p>{description}</p>
            </article>
          ))}
        </div>
        <PosterSlot
          label="Vision Execution Loop"
          filename="/vision-loop-poster.jpg"
          description="Future visual: Observe → Recognize → Confirm → Execute → Re-check. The public poster will show the result without exposing the internal recognition recipe."
          reverse
        />
      </section>

      <section style={{ ...sectionStyle, paddingTop: "34px" }}>
        <SectionTitle
          eyebrow="NEXT PLATFORM STAGE"
          title="Multi-Device Orchestration"
          text="The existing remote, Windows Agent, Device Room and mirroring foundations provide the base for extending the same scenario model across devices and emulators."
        />
        <PosterSlot
          label="Multi Device"
          filename="/multi-device-poster.jpg"
          description="Future visual: Vivacapere control centre connected to Windows Mirror, LDPlayer Mirror and Smartphone Mirror, clearly marked as the next platform stage."
        />
      </section>

      <section id="support" style={sectionStyle}>
        <SectionTitle
          eyebrow="ACCELERATE THE LAUNCH"
          title="Support Development"
          text="Support removes development, testing, hardware and founder-capacity barriers between the working system and public testing."
        />
        <div className="fundGrid">
          <div className="fundCard" style={panelStyle}>
            <h3 style={{ marginTop: 0, fontSize: "25px" }}>Founder Acceleration</h3>
            <p className="sectionLead" style={{ fontSize: "15px" }}>Continuous AI-assisted development, parallel hardware testing, release preparation, mobility, healthcare and a stable working environment.</p>
            <div className="paymentButtons">
              <a className="paymentButton" href="#">Revolut</a>
              <a className="paymentButton" href="#">PayPal</a>
              <a className="paymentButton" href="#">Crypto</a>
            </div>
            <p className="finePrint">Payment links remain placeholders until the final personal support links are inserted. Voluntary support does not provide equity, repayment rights or profit participation.</p>
          </div>
          <div className="fundCard" style={panelStyle}>
            <div className="eyebrow">EARLY PARTICIPATION</div>
            <h3 style={{ fontSize: "25px" }}>Founder access and private funding</h3>
            <p className="sectionLead" style={{ fontSize: "15px" }}>Closed testing, Founder Pass and private funding enquiries will use separate terms and contact routes.</p>
            <div className="paymentButtons">
              <a className="paymentButton" href="mailto:contact@vivacapere.ee">Contact Vivacapere</a>
            </div>
          </div>
        </div>
      </section>

      <section id="roadmap" style={{ ...sectionStyle, paddingTop: "32px" }}>
        <SectionTitle eyebrow="ROADMAP" title="From final integration to an automation ecosystem." />
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
