import React, { useRef } from "react";
import CustomHook from "./CustomHook";

function Home() {
  const scrollTab = useRef();
  CustomHook(scrollTab);

  return (
    <section ref={scrollTab} className="home">
      <div className="content">
        <div className="name">
          Hi, MY NAME IS <span>CODER KID</span>
        </div>
        <div className="des">
          {/* 30 */}

          <p>
            A programmer and a Fullstack Web Dev with interests in{" "}
            <strong>Cybersecurity, AI and Robotics</strong>
          </p>
        </div>

        <a
          href="https://github.com/0CODERKID"
          target="_blank"
          rel="noopener noreferrer"
          className="animation active "
        >
          Visit my github
        </a>
      </div>
      <div className="avatar">
        <div className="card">
          <img src="no head.png" alt="" />
          <div className="info">
            <div>Developer</div>
            <div>Indian</div>
            <div>14 year old</div>
            <div>Male</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
