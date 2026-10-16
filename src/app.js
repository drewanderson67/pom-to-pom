(() => {
const I = window.IMG;
const $ = (s, r = document) => r.querySelector(s);
const NAV = [
  ["/how-it-works", "How It Works"], ["/the-huddle", "The Huddle"], ["/our-story", "Our Story"],
  ["/faq", "FAQ"], ["/privacy", "Privacy"], ["/login", "Member Login"]
];
const TEAMS = ["Arizona Cardinals","Atlanta Falcons","Baltimore Ravens","Buffalo Bills","Carolina Panthers","Chicago Bears","Cincinnati Bengals","Cleveland Browns","Dallas Cowboys","Denver Broncos","Detroit Lions","Green Bay Packers","Houston Texans","Indianapolis Colts","Jacksonville Jaguars","Kansas City Chiefs","Las Vegas Raiders","Los Angeles Chargers","Los Angeles Rams","Miami Dolphins","Minnesota Vikings","New England Patriots","New Orleans Saints","New York Giants","New York Jets","Philadelphia Eagles","Pittsburgh Steelers","San Francisco 49ers","Seattle Seahawks","Tampa Bay Buccaneers","Tennessee Titans","Washington Commanders"];
const STEPS = [
  ["Create Your Profile", "Tell us about yourself, your cheer journey, and the life you're building beyond the sidelines.", "1"],
  ["Take the Matching Quiz", "Share your interests, personality, experiences, and what you're hoping to find in your network.", "2"],
  ["Meet Your Huddle", "Get thoughtfully matched with about five cheerleaders from across the league who share real common ground.", "3"],
  ["Build Your Network", "Prompts, activities, conversations, and real-life meetups that continue long after the season ends.", "4"]
];
const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

const lnav = (title, dark) => `<div class="lnav${dark ? " dark" : ""}"><div class="in"><span class="t">${title}</span><div class="r">
  <a class="hide-s" href="#/how-it-works">How it works</a><a class="hide-s" href="#/faq">FAQ</a><a class="pill sm" href="#/apply">Apply</a></div></div></div>`;

const band = (h, p, dark = true) => `<section class="sec band ${dark ? "navy" : "alt"}"><div class="wrap rv">
  <h2 class="h1">${h}</h2><p class="lead">${p}</p>
  <div class="ctas"><a class="pill${dark ? " gold" : ""}" href="#/apply">Apply now</a><a class="more" href="#/faq"${dark ? ' style="color:var(--gold-l)"' : ""}>Read the FAQ</a></div></div></section>`;

const gallery = () => `
  <div class="gallery" id="gal">${STEPS.map((s, i) => `<article class="card rv d${i % 4}">
    <span class="num">Step ${s[2]}</span><h3>${s[0]}</h3><p>${s[1]}</p><div class="glyph" aria-hidden="true">${s[2]}</div></article>`).join("")}</div>
  <div class="gal-ctl"><button class="pv" aria-label="Previous"></button><button class="nx" aria-label="Next"></button></div>`;

const PAGES = {
  "/": () => ({ lnav: "", html: `
  <section class="hero">
    <div class="wrap">
      <p class="eyebrow rv">A community for professional cheerleaders</p>
      <h1 class="h-hero rv d1">Team to team.<br><span class="grad">City to city.</span></h1>
      <p class="lead rv d2">Pom to Pom is a curated, private club that connects professional cheerleaders beyond their own teams — for friendships, professional connections, and a network that lasts far beyond the season.</p>
      <div class="ctas rv d3"><a class="pill" href="#/apply">Apply now</a><a class="more" href="#/how-it-works">See how it works</a></div>
    </div>
    <div class="hero-media" id="heroMedia"><img src="${I.hero}" alt="Five professional cheerleaders walking arm in arm holding poms" fetchpriority="high"></div>
  </section>

  <section class="sec"><div class="wrap center">
    <h2 class="h1 rv">Your team is where it starts.<br><span style="color:var(--ink3)">Your network is where it goes.</span></h2>
    <p class="lead rv d1" style="max-width:760px;margin:24px auto 0">A private club where current NFL cheerleaders find community, mentorship, and genuine connection with people who truly understand <b>the schedule, the pressure, and the joy.</b></p>
  </div></section>

  <div class="tiles">
    <a class="tile navy full rv" href="#/the-huddle" style="text-decoration:none;color:#f5f5f7">
      <p class="eyebrow gold">The Concept</p>
      <h2 class="h2">Five cheerleaders. Five teams.<br>One Huddle.</h2>
      <p class="sub">A small, thoughtfully matched group from across the league.</p>
      <div class="ctas"><span class="pill gold">Meet the Huddle</span><span class="more">Learn more</span></div>
      <div class="rings" aria-hidden="true"><span>01</span><span>02</span><span>03</span><span>04</span><span>05</span></div>
      <div class="media"><img src="${I.huddle}" alt="Five cheerleaders from five teams, arm in arm" loading="lazy"></div>
    </a>
    <a class="tile photo rv" href="#/our-story" style="text-decoration:none">
      <img class="bg" src="${I.founder}" alt="" loading="lazy">
      <p class="eyebrow gold">Our Story</p>
      <h2 class="h2">Built from real connection.</h2>
      <p class="sub">Five seasons. One Pro Bowl. Friendships for life.</p>
      <div class="ctas"><span class="more">Read the story</span></div>
    </a>
    <a class="tile alt rv d1" href="#/how-it-works" style="text-decoration:none;color:var(--ink)">
      <p class="eyebrow">The Process</p>
      <h2 class="h2">Four steps<br>to belonging.</h2>
      <p class="sub" style="color:var(--ink2)">Profile. Quiz. Huddle. Network.</p>
      <div class="ctas"><span class="pill">Get started</span><span class="more" style="color:var(--link)">How it works</span></div>
      <div class="media"><img src="${I.group}" alt="A group of cheerleaders from different teams together" loading="lazy" style="border-radius:20px 20px 0 0;width:100%;aspect-ratio:3/2;object-fit:cover"></div>
    </a>
  </div>

  <section class="sec alt" style="padding-bottom:40px"><div class="wrap gal-head">
      <h2 class="h1 rv">How it works.</h2>
      <a class="more rv" href="#/how-it-works">Explore the journey</a>
    </div>${gallery()}</section>

  <section class="sec"><div class="wrap">
    <div class="split">
      <div class="ph rv"><img src="${I.founder2}" alt="Alyvia Marcinek, founder of Pom to Pom" loading="lazy" style="aspect-ratio:4/5"></div>
      <div class="copy rv d1">
        <p class="eyebrow">From our founder</p>
        <p class="quote">“How incredible would it be if more cheerleaders had this?”</p>
        <p>I made my first NFL team at 18 and cheered five seasons for the Jacksonville Jaguars — captain, Veteran of the Year, and a 2024 Pro Bowl Games rep. At the Pro Bowl, one cheerleader from every team came together, and <b>those connections became lifelong friendships.</b></p>
        <p>Pom to Pom makes those connections intentional — for every cheerleader, not just the few who get selected.</p>
        <div class="quote-by"><b>Alyvia Marcinek</b><span>Founder, Pom to Pom</span></div>
        <p><a class="more" href="#/our-story">Read our full story</a></p>
      </div>
    </div>
  </div></section>

  <section class="sec alt"><div class="wrap center">
    <p class="eyebrow rv">Who it's for</p>
    <h2 class="h1 rv d1">For the human<br>behind the uniform.</h2>
    <div class="who">
      <div class="rv"><i>01</i>Real friendships beyond your own team.</div>
      <div class="rv d1"><i>02</i>A professional network that gets your career.</div>
      <div class="rv d2"><i>03</i>Genuine community in this season of life.</div>
      <div class="rv d3"><i>04</i>Lasting connections across cities and teams.</div>
    </div>
  </div></section>

  <section class="sec navy"><div class="wrap center">
    <p class="eyebrow gold rv">Membership · Limited to 50</p>
    <h2 class="h-hero rv d1">Be part of<br>the beginning.</h2>
    <p class="lead rv d2" style="max-width:680px;margin:22px auto 0">We're bringing together our first 50 professional cheerleaders to help shape the future of Pom to Pom — a community created by cheerleaders, for cheerleaders.</p>
    <div class="ctas rv d3"><a class="pill gold" href="#/apply">Apply for the Founding 50</a></div>
    <div class="stats">
      <div class="stat rv"><b data-count="50">0</b><span>Founding members</span></div>
      <div class="stat rv d1"><b data-count="32">0</b><span>NFL teams</span></div>
      <div class="stat rv d2"><b data-count="5">0</b><span>Cheerleaders per Huddle</span></div>
    </div>
  </div></section>` }),

  "/how-it-works": () => ({ lnav: lnav("How It Works"), html: `
  <section class="hero"><div class="wrap">
    <p class="eyebrow rv">The Journey</p>
    <h1 class="h-hero long rv d1">Meaningful connections,<br><span class="grad">made intentional.</span></h1>
    <p class="lead rv d2">Meet professional cheerleaders beyond your own team — based on who you are, what you enjoy, and where you are in life.</p>
  </div></section>
  <section class="sec" style="padding-bottom:40px"><div class="wrap gal-head"><div><p class="eyebrow rv">Your path to the Huddle</p><h2 class="h1 rv d1">Four steps to belonging.</h2></div></div>${gallery()}</section>
  <section class="sec alt"><div class="wrap"><div class="split">
    <div class="copy rv"><p class="eyebrow">Curated, not automated</p><h2 class="h2">Every Huddle is hand-built.</h2>
      <p>Our team reviews every application personally and curates each Huddle manually — aiming for warm, useful groups of about five cheerleaders from <b>different teams, never your own.</b></p>
      <p><a class="more" href="#/the-huddle">How matching works</a></p></div>
    <div class="ph rv d1"><img src="${I.group}" alt="Cheerleaders from different teams together" loading="lazy" style="aspect-ratio:3/2"></div>
  </div></div></section>
  ${band("Ready to find your Huddle?", "Your next connection could be anywhere in the league.")}` }),

  "/the-huddle": () => ({ lnav: lnav("The Huddle"), html: `
  <section class="hero"><div class="wrap">
    <p class="eyebrow rv">The Huddle</p>
    <h1 class="h-hero long rv d1">Friendship, matched with<br><span class="grad">the same care as your routine.</span></h1>
    <p class="lead rv d2">Five cheerleaders, five teams, one intentional match across life stage, interests, career, and how you like to connect.</p>
    <div class="ctas rv d3"><a class="pill" href="#/apply">Apply now</a></div>
  </div><div class="hero-media" id="heroMedia"><img src="${I.huddle}" alt="Editorial illustration of five cheerleaders in burgundy uniforms" loading="lazy"></div></section>
  <section class="sec"><div class="wrap">
    <p class="eyebrow center rv">How matching works</p>
    <h2 class="h1 center rv d1">A Huddle isn't random.<br>It's built for you.</h2>
    <div class="info">
      <article class="alt rv" style="background:var(--bg2)"><h3>Life stage first.</h3><p>From rookie season to retirement and everything after — so your Huddle understands your context without you having to explain it.</p></article>
      <article class="rv d1" style="background:var(--bg2)"><h3>Then what makes it stick.</h3><p>Shared interests outside of cheer, the career you're building next, and how you like to connect — quick voice notes, late-night calls, or meeting up when seasons align.</p></article>
      <article class="wide rv" style="background:var(--navy);color:#f5f5f7"><h3>Less networking. More friends.</h3><p style="color:#a1a1a6">A small, intimate circle that feels like the friends you'd have made anyway — if your paths had crossed sooner.</p></article>
    </div>
  </div></section>
  <section class="sec alt"><div class="wrap center">
    <p class="eyebrow rv">A sample Huddle</p>
    <h2 class="h1 rv d1">Five teams. Five stories.<br>One circle.</h2>
    <div class="members">${[
      ["Falcons", "Rookie season, chasing a nursing degree", "#a71930,#5e0e1b"],
      ["Cowboys", "Third season, building a marketing career", "#2b4a8a,#0b1f45"],
      ["Chiefs", "Prefers deep, late-night voice notes", "#e31837,#8f0c20"],
      ["Rams", "Final season, launching her own studio", "#003594,#ffa300"],
      ["Dolphins", "Alumna, mentoring the group on what's next", "#008e97,#fc4c02"]
    ].map((m, i) => `<div class="member rv d${i % 4}"><div class="av" style="background:linear-gradient(135deg,${m[2]})">${m[0][0]}</div><b>${m[0]}</b><p>${m[1]}</p></div>`).join("")}</div>
  </div></section>
  ${band("Your Huddle is waiting to be built.", "Founding 50 members shape the first Huddles. Spots are limited.")}` }),

  "/our-story": () => ({ lnav: lnav("Our Story"), html: `
  <section class="hero"><div class="wrap">
    <p class="eyebrow rv">Our Story</p>
    <h1 class="h-hero long rv d1">Your team is where it starts.<br><span class="grad">Your network is where it goes.</span></h1>
    <p class="lead rv d2">Some of the most meaningful relationships in a cheerleader's life can come from beyond her own team.</p>
  </div></section>
  <section class="sec" style="padding-top:40px"><div class="wrap"><div class="split">
    <div class="ph rv"><img src="${I.founder2}" alt="Alyvia Marcinek, founder of Pom to Pom" style="aspect-ratio:4/5"></div>
    <div class="copy rv d1"><p class="quote">“Your team gives you teammates. But there is an entire league of people who may have so much more in common with you than you realize.”</p>
      <div class="quote-by"><b>Alyvia Marcinek</b><span>Founder, Pom to Pom</span></div></div>
  </div></div></section>
  <section class="sec alt"><div class="article">
    <p class="eyebrow rv">From our founder</p>
    <h2 class="h1 rv d1">Why I created this.</h2>
    <p class="rv">I made my first NFL cheerleading team at 18, while I was still in high school. I cheered for the Jacksonville Jaguars for five seasons, from 2019 to 2024, became a captain, was named Veteran of the Year, and represented the Jaguars at the 2024 Pro Bowl Games. My teammates called me “Baby Roar.”</p>
    <p class="rv">I loved my team, but wished I knew people across the league who understood what it was like to enter this world so young.</p>
    <p class="k rv">Then I went to the Pro Bowl.</p>
    <p class="rv">One cheerleader from every team came together, and those connections became real friendships. We celebrate babies, relationships, career moves, and the moments that matter.</p>
    <p class="pull rv">How incredible would it be if more cheerleaders had this?</p>
    <p class="rv">I created Pom to Pom to make those connections more intentional — bringing cheerleaders from different teams together through shared personalities, interests, experiences, and stages of life. I want more cheerleaders to have people who understand them, support them, and stay in their lives long after the season ends.</p>
    <p class="rv"><a class="more" href="https://pom-to-pom.bubbleapps.io/our-story" target="_blank" rel="noopener">Read Alyvia's full letter</a></p>
  </div></section>
  ${band("Ready to find your Huddle?", "Meet cheerleaders from across the league who share your interests, experiences, and aspirations.")}` }),

  "/faq": () => ({ lnav: lnav("FAQ"), html: `
  <section class="hero" style="padding-bottom:20px"><div class="wrap">
    <p class="eyebrow rv">Private membership · Personal connection</p>
    <h1 class="h-hero rv d1">Questions?<br><span class="grad">Answers.</span></h1>
    <p class="lead rv d2">Everything you need to know before applying to the Founding 50.</p>
  </div></section>
  <section class="sec" style="padding-top:20px"><div class="wrap"><div class="faq rv">${[
    ["Who is Pom to Pom for?", "Current professional NFL cheerleaders who want a thoughtful, private network beyond their own team."],
    ["How does the application and approval process work?", "Join the Founding 50 waitlist and complete the application — our team reviews each one personally. If approved, an administrator creates your member account and sends a secure password-setup email (Member Login has a resend option if it doesn't arrive). After setup, you'll complete your profile and the four-section matching quiz before entering member spaces."],
    ["What happens to my information?", "Applicant details stay private. Members choose whether they appear in the directory, and only approved members can access member spaces."],
    ["What is the matching quiz?", "Four short sections about your cheer journey, life beyond cheer, connection style, and what you hope to find here."],
    ["How are Huddles created?", "Manually, by the Pom to Pom team. We aim for warm, useful groups of about five cheerleaders from different teams — matching is not automated."]
  ].map((q, i) => `<details${i ? "" : " open"}><summary>${q[0]}</summary><div class="ans">${q[1]}</div></details>`).join("")}</div>
  <div class="ctas"><a class="pill" href="#/apply">Start your application</a></div></div></section>` }),

  "/privacy": () => ({ lnav: lnav("Privacy & Safety"), html: `
  <section class="hero" style="padding-bottom:0"><div class="wrap">
    <p class="eyebrow rv">Privacy & Safety</p>
    <h1 class="h-hero long rv d1">Private by design.<br><span class="grad">Protected by community.</span></h1>
    <p class="lead rv d2">A curated space for current NFL cheerleaders — here's who it's for, what your Huddle sees, and how we care for your information.</p>
  </div></section>
  <section class="sec"><div class="wrap"><div class="info">
    <article class="rv" style="background:var(--bg2)"><h3>Who it's for.</h3><p>The pilot is for current NFL cheerleaders only. Alumni and cheerleaders from the NBA, NHL, or MLB can join the interest list as Pom to Pom grows.</p><p>Every application is manually reviewed. Approval is an invitation to continue onboarding — not a shortcut around it.</p></article>
    <article class="rv d1" style="background:var(--bg2)"><h3>What your Huddle sees.</h3><div class="chips">${["Name","Team","City or area","Career","Bio","Interests","Profile photo","Huddle membership"].map(c => `<span>${c}</span>`).join("")}</div><p>Your email, quiz answers, life-stage details, and matching scores are never visible to your Huddle.</p></article>
    <article class="wide rv" style="background:var(--navy);color:#f5f5f7"><h3>We don't sell your data. Ever.</h3><p style="color:#a1a1a6">We use your information to review applications, suggest Huddles, and improve the experience. Private answers stay private, and Huddle messages never become public content.</p></article>
    <article class="wide rv" style="background:var(--bg2)"><h3>Community guidelines.</h3><ul class="rules">
      <li><b>Keep it confidential.</b> Stories, conversations, and screenshots stay where they were shared.</li>
      <li><b>Lead with respect.</b> Be kind, curious, and considerate of different experiences.</li>
      <li><b>Honor boundaries.</b> Respect each member's time, comfort, and choice to connect.</li>
      <li><b>Keep criticism off social media.</b> Bring concerns to the team privately.</li>
      <li><b>Uphold the spirit of the league.</b> Professionalism, generosity, and care.</li></ul>
      <p>Repeated violations may lead to a review and a pause or removal from the community.</p></article>
    <article class="rv" style="background:var(--bg2)"><h3>Reporting and blocking.</h3><p>Report concerns and block members from inside the product. Admins review every report. You never have to continue a connection that doesn't feel right.</p></article>
    <article class="rv d1" style="background:var(--bg2)"><h3>Looking ahead.</h3><p>We hope to welcome alumni and other leagues in the future. For now, the pilot stays focused, private, and protected.</p></article>
  </div></div></section>` }),

  "/apply": () => ({ lnav: lnav("Founding 50"), html: `
  <section class="sec alt" style="padding-top:clamp(56px,8vw,96px)"><div class="wrap center">
    <p class="eyebrow rv">Founding 50 Application</p>
    <h1 class="h1 rv d1">Tell us where you've been<br>and where you're going.</h1>
    <p class="lead rv d2" style="max-width:640px;margin:18px auto 0">We read every application personally. Share the parts of your story that will help us build a meaningful first membership.</p>
    <form class="form-card rv d3" id="applyForm" novalidate style="text-align:left">
      <div class="field"><input id="f-name" name="name" placeholder=" " autocomplete="name" required><label for="f-name">Full name</label><p class="msg">Enter your name.</p></div>
      <div class="field"><input id="f-email" name="email" type="email" placeholder=" " autocomplete="email" required><label for="f-email">Email</label><p class="msg">Enter a valid email address.</p></div>
      <div class="field"><select id="f-team" name="team" required><option value="">Select your team</option>${TEAMS.map(t => `<option>${t}</option>`).join("")}</select><label for="f-team">Current NFL team</label><p class="msg">Choose your team.</p></div>
      <div class="field"><textarea id="f-journey" name="journey" placeholder=" " required></textarea><label for="f-journey">Your cheer journey</label><p class="msg">Tell us a little about your teams and seasons.</p></div>
      <div class="field"><textarea id="f-career" name="career" placeholder=" "></textarea><label for="f-career">Career and interests</label></div>
      <div class="field"><textarea id="f-why" name="why" placeholder=" " required></textarea><label for="f-why">Why Pom to Pom?</label><p class="msg">What kind of connection are you hoping to find?</p></div>
      <label class="check"><input type="checkbox" id="f-elig" required><span>I am a current NFL cheerleader. The Founding 50 is for current NFL cheerleaders only.</span></label>
      <p class="notice" id="eligMsg" hidden>Please confirm your eligibility to continue.</p>
      <button class="pill" type="submit">Submit application</button>
      <p class="fine">Your application is private and reviewed only by the Pom to Pom team.</p>
    </form>
  </div></section>` }),

  "/login": () => ({ lnav: lnav("Member Login"), html: `
  <section class="sec alt" style="padding-top:clamp(56px,8vw,96px);min-height:80vh"><div class="wrap center">
    <img src="${I.emblem}" alt="" width="96" height="96" class="rv" style="margin:0 auto 20px;border-radius:50%">
    <p class="eyebrow rv">Private member access</p>
    <h1 class="h1 rv d1">Your Huddle is<br>coming soon.</h1>
    <p class="lead rv d2" style="max-width:600px;margin:18px auto 0">Profiles, The Huddle community, and events are being built with the same care as our Founding 50.</p>
    <form class="form-card rv d3" id="loginForm" novalidate style="text-align:left;max-width:460px">
      <div class="field"><input id="l-email" type="email" placeholder=" " autocomplete="email" required><label for="l-email">Email address</label><p class="msg">Enter a valid email address.</p></div>
      <div class="field"><input id="l-pass" type="password" placeholder=" " autocomplete="current-password" required><label for="l-pass">Password</label><p class="msg">Enter your password.</p></div>
      <button class="pill" type="submit">Sign in</button>
      <p class="fine"><a href="#" id="resend">Resend setup / reset password</a></p>
      <p class="notice" id="loginMsg" hidden></p>
      <p class="fine">New here? <a href="#/apply">Apply to join the Founding 50</a>.</p>
    </form>
  </div></section>` })
};

function footer() {
  return `<div class="in">
    <div class="note"><img src="${I.emblem}" alt="" loading="lazy"><span>Pom to Pom is a private club for professional NFL cheerleaders. Membership is by application and limited to the Founding 50.</span></div>
    <div class="cols">
      <div><h4>Explore</h4><a href="#/how-it-works">How It Works</a><a href="#/the-huddle">The Huddle</a><a href="#/our-story">Our Story</a><a href="#/faq">FAQ</a></div>
      <div><h4>Membership</h4><a href="#/apply">Apply Now</a><a href="#/login">Member Login</a><a href="#/privacy">Privacy &amp; Community</a></div>
      <div><h4>Contact</h4><a href="mailto:hello@pomtopom.com">hello@pomtopom.com</a></div>
    </div>
    <div class="legal"><span>Copyright © ${new Date().getFullYear()} Pom to Pom. All rights reserved.</span><span>v${window.APP_VERSION}</span></div></div>`;
}

let io;
function render() {
  const path = (location.hash.replace(/^#/, "") || "/").split("?")[0];
  const page = (PAGES[path] || PAGES["/"])();
  document.body.classList.remove("menu-open");
  $("#burger").setAttribute("aria-expanded", "false");
  $("#lnav-slot").innerHTML = page.lnav;
  const app = $("#app");
  app.innerHTML = page.html;
  app.style.animation = "none"; app.offsetHeight; app.style.animation = "";
  document.querySelectorAll("#navlinks a, #mmenu a").forEach(a => a.toggleAttribute("aria-current", a.getAttribute("href") === "#" + path) || a.removeAttribute("aria-current"));
  document.querySelectorAll("#navlinks a, #mmenu a").forEach(a => a.getAttribute("href") === "#" + path ? a.setAttribute("aria-current", "page") : a.removeAttribute("aria-current"));
  window.scrollTo({ top: 0, behavior: "instant" });
  const t = { "/": "Pom to Pom — Connection beyond the uniform" }[path] || `${(NAV.find(n => n[0] === path) || [, path === "/apply" ? "Apply" : "Pom to Pom"])[1]} — Pom to Pom`;
  document.title = t;
  wire();
}

function wire() {
  io && io.disconnect();
  io = new IntersectionObserver(es => es.forEach(e => {
    if (!e.isIntersecting) return;
    e.target.classList.add("in-view");
    e.target.querySelectorAll("[data-count]").forEach(countUp);
    if (e.target.matches("[data-count]")) countUp(e.target);
    io.unobserve(e.target);
  }), { threshold: .12, rootMargin: "0px 0px -6% 0px" });
  document.querySelectorAll(".rv, .rings").forEach(el => io.observe(el));

  const g = $("#gal");
  if (g) {
    const pv = $(".gal-ctl .pv"), nx = $(".gal-ctl .nx");
    const step = () => g.querySelector(".card").offsetWidth + 20;
    const upd = () => { pv.disabled = g.scrollLeft < 8; nx.disabled = g.scrollLeft + g.clientWidth >= g.scrollWidth - 8; };
    pv.onclick = () => g.scrollBy({ left: -step(), behavior: "smooth" });
    nx.onclick = () => g.scrollBy({ left: step(), behavior: "smooth" });
    g.addEventListener("scroll", upd, { passive: true }); upd();
  }

  const af = $("#applyForm");
  if (af) af.onsubmit = e => {
    e.preventDefault();
    let ok = true;
    af.querySelectorAll(".field").forEach(f => {
      const el = f.querySelector("input,select,textarea");
      const bad = el.required && (!el.value.trim() || (el.type === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(el.value)));
      f.classList.toggle("err", bad); if (bad) ok = false;
    });
    const elig = $("#f-elig").checked; $("#eligMsg").hidden = elig; if (!elig) ok = false;
    if (!ok) { const first = af.querySelector(".err input,.err select,.err textarea") || $("#f-elig"); first.focus(); return; }
    const d = Object.fromEntries(new FormData(af));
    try { localStorage.setItem("p2p-application", JSON.stringify({ ...d, at: new Date().toISOString() })); } catch (_) {}
    const body = `Name: ${d.name}\nEmail: ${d.email}\nTeam: ${d.team}\n\nCheer journey:\n${d.journey}\n\nCareer and interests:\n${d.career}\n\nWhy Pom to Pom:\n${d.why}`;
    af.innerHTML = `<div class="done"><div class="tick"></div><h2 class="h3">Thank you, ${esc(d.name.split(" ")[0])}.</h2>
      <p class="lead" style="margin-top:10px">Your application has been saved on this device. Send it to the team to complete your submission.</p>
      <div class="ctas"><a class="pill" href="mailto:hello@pomtopom.com?subject=${encodeURIComponent("Founding 50 Application — " + d.name)}&body=${encodeURIComponent(body)}">Send to Pom to Pom</a><a class="more" href="#/">Back home</a></div></div>`;
  };

  const lf = $("#loginForm");
  if (lf) {
    const msg = $("#loginMsg");
    lf.onsubmit = e => {
      e.preventDefault();
      const em = $("#l-email"), pw = $("#l-pass");
      const be = !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(em.value), bp = !pw.value;
      em.parentNode.classList.toggle("err", be); pw.parentNode.classList.toggle("err", bp);
      if (be || bp) return;
      msg.hidden = false; msg.className = "notice";
      msg.textContent = "The member experience isn't open yet. Approved Founding 50 members will receive a setup email when it launches.";
    };
    $("#resend").onclick = e => {
      e.preventDefault();
      const em = $("#l-email");
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(em.value)) { em.parentNode.classList.add("err"); em.focus(); return; }
      msg.hidden = false; msg.className = "notice ok";
      msg.textContent = `If ${em.value} belongs to an approved member, a setup link is on its way.`;
    };
  }
}

function countUp(el) {
  const to = +el.dataset.count, t0 = performance.now(), dur = 1400;
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) { el.textContent = to; return; }
  const f = t => { const p = Math.min(1, (t - t0) / dur); el.textContent = Math.round(to * (1 - Math.pow(1 - p, 3))); if (p < 1) requestAnimationFrame(f); };
  requestAnimationFrame(f);
}

function heroScale() {
  const m = $("#heroMedia"); if (!m) return;
  const r = m.getBoundingClientRect(), vh = innerHeight;
  const p = Math.min(1, Math.max(0, (vh - r.top) / (vh * .9)));
  m.style.transform = `scale(${.92 + .08 * p})`;
}

function init() {
  $("#navlinks").innerHTML = NAV.map(n => `<li><a href="#${n[0]}">${n[1]}</a></li>`).join("") + `<li><a class="pill sm" href="#/apply" style="color:#fff">Apply</a></li>`;
  $("#mmenu").innerHTML = `<a href="#/">Home</a>` + NAV.map(n => `<a href="#${n[0]}">${n[1]}</a>`).join("") + `<a href="#/apply" style="color:var(--rose)">Apply Now</a>`;
  $("#foot").innerHTML = footer();
  $("#burger").onclick = () => {
    const open = document.body.classList.toggle("menu-open");
    $("#burger").setAttribute("aria-expanded", open); $("#mmenu").setAttribute("aria-hidden", !open);
  };
  addEventListener("hashchange", render);
  addEventListener("scroll", () => requestAnimationFrame(heroScale), { passive: true });
  addEventListener("resize", heroScale);
  render(); heroScale();
  if ("serviceWorker" in navigator && location.protocol.startsWith("http")) navigator.serviceWorker.register("sw.js").catch(() => {});
}
init();
})();
