import React from "react";
import stock from "../../img/Gandalf.jpg";
import person from "../../img/male1.png";
import resume from "../../docs/SamsonWong_NetworkSiteReliabilityEngineer.docx";
import "./style.css";

function Home() {
  return (

    <div className="jumbotron">
      <div className="col-md-5 header-left">
       
        <img src={stock} alt="" />
        <h1>Samson Wong</h1>
      </div>

      <div className="col-md-7 header-right">
        <h6>Network Site Relability Engnineer (Automation, Cloud)</h6>


        <div style={{ display: "flex" }}>
          <a href={resume} target="_blank" title="Resume"
            style={{ display: "block", backgroundImage: `url(${person})`, width: 50, height: 50, padding: 10, backgroundSize: "contain" }}
          ></a>

          <a
            href="https://www.linkedin.com/in/samson-wong-45a25317/" title="Samson LinkedIn Contact"
            style={{ display: "block", backgroundImage: "url(https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Bug.svg.original.svg)", width: 50, height: 50, backgroundSize: "contain" }}
          > </a>

          <a
            href="https://github.com/swong452" title="Samson GitHub"
            style={{ display: "block", backgroundImage: "url(https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png)", width: 50, height: 50, backgroundSize: "contain" }}
          > </a>

        </div>


        <ul className="address">
          <li>
            <ul className="address-text">
              <li><b> D.O.B</b></li>
              <li> Too Told to Tell</li>
            </ul>
          </li>

          <li>
            <ul className="address-text">
              <li><b>MOBILE </b></li>
              <li>(908) 992-8079</li>
            </ul>
          </li>

          <li>
            <ul className="address-text">
              <li><b>ADDRESS </b></li>
              <li>New Jersey, USA</li>
            </ul>
          </li>

          <li>
            <ul className="address-text">
              <li><b>E-MAIL </b></li>
              <li><a href="mailto:steelerwong2005@hotmail.com"> steelerwong2005@hotmail.com</a></li>
            </ul>
          </li>
        </ul>

      </div>
    </div >
  )
};


export default Home;
