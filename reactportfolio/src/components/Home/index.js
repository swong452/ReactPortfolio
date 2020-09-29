import React from "react";

function Home() {
  return (

    <div className="banner-info">
      <div className="col-md-7 header-right">
        <h1>Samson Wong</h1>
        <h6>Network Site Relability Engnineer (Automation, Cloud)</h6>
        <div>
          <a href="../docs/SamsonWong_NetworkSiteReliabilityEngineer.docx" target="_blank"
            title="Click to view my Resume">View Resume</a>
          <a href="https://github.com/swong452" rel="noopener" target="_blank" title="Github"> GitHub Link </a>
          <a href="https://www.linkedin.com/in/samson-wong-45a25317/" rel="noopener" title='LinkedIn'
                target="_blank" className = "fa fa-linkedin"> LinkedIn </a>
        </div>


        <ul className="address">

          <li>
            <ul className="address-text">
              <li><b>NAME</b></li>
              <li>Samson Wong</li>
            </ul>
          </li>

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
