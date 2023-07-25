import React from "react";

export const Roadmap = () => {
  return (
    <section id="roadmap" className="roadmap-section">
      <h1 style={{ margin: "0 auto", textAlign: "center" }}>Roadmap</h1>
      <ul className="roadmap-list">
        <li>
          <div class="date">Step 1</div>
          <div class="title">100 TG members</div>
          <div class="descr">Lock liq. Renounce. Dextools update.</div>
        </li>
        <li>
          <div class="date">Step 2</div>
          <div class="title">250 TG members</div>
          <div class="descr">CG. CMC. Beer race teaser..</div>
        </li>
        <li>
          <div class="date">Step 3</div>
          <div class="title">500 TG members</div>
          <div class="descr">First beer race.</div>
        </li>
        <li>
          <div class="date">Step 4</div>
          <div class="title">1k TG members</div>
          <div class="descr">$2m mc. Bet on beer races every 1hr.</div>
        </li>
      </ul>
    </section>
  );
};
