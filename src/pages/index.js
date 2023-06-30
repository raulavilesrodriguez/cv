import React from 'react';

import Layout from '../components/Layout';
import avatar from '../assets/images/avatar.png';

// import { Link } from 'gatsby';
import Sidebar from '../components/Sidebar';
import config from '../../config';
const IndexPage = () => (
  <Layout>
    <Sidebar />
    <div className="container-fluid p-0">
      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="about"
      >
        <div className="w-100">
          <h1 className="mb-0">
              {config.firstName}
              <span className="text-primary"> {config.lastName}</span>
          </h1>
          <div className="media p-3">
            <img
                className="ml-3 mt-3 img-profile rounded-circle foto"
                src={avatar}
                alt=""
              />
            <div className="media-body">
            </div>
          </div>

          <div className="subheading mb-5">
            {config.address} · {config.phone} ·
            <a href={`mailto:${config.email}`}>{config.email}</a>
          </div>
          <p className="lead mb-5">
          I have experience in high-level business and economic analysis. 
          To achieve the stated objectives I have used knowledge of computer science, 
          mathematics, and business to promote the overall value proposition.
          </p>
          <div className="social-icons">
            {config.socialLinks.map(social => {
              const { icon, url } = social;
              return (
                <a key={url} href={url}>
                  <i className={`fab ${icon}`}></i>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex justify-content-center"
        id="experience"
      >
        <div className="w-100">
          <h2 className="mb-5">Experience</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Market Analyst</h3>
              <div className="subheading mb-3">Arcotel</div>
              <div>
              <div>
              Data analysis through R to determine the impact the interconnection charges in telecommunications industry  <br></br>
              <a href="https://github.com/raulavilesrodriguez/interconexion_r">interconexion repository</a>
              <br> </br>
              <a href="https://ideaviles.shinyapps.io/interconexionr/">interconexion web app</a>
              </div>
              <div>
              Data analysis through R to determine the consistency of the information sent by the mobile operators. Calculate market concentration 
              payout percentages
              <a href="https://github.com/raulavilesrodriguez/market_concentration"> concentration repository</a>
              &nbsp;
              <a href="https://ideaviles.shinyapps.io/concentracionsma/">concentration web app</a>
              </div>
              <div>
              Data analysis through R to process of statistical information of: 
              <a href="https://github.com/raulavilesrodriguez/sai_processing"> Internet service repository</a> 
              &nbsp;
              <a href="https://github.com/raulavilesrodriguez/avs_arcotel"> Audio and video subscription service repository</a>
              </div>
              <div>
              Design of a model of the expansion plan of the mobile service &nbsp;
              <a href="https://github.com/raulavilesrodriguez/expansion_sma"> Expansion plan repository</a>
              </div>
              <div>
              Design of models to measure the impact of regulatory measures &nbsp;
              <a href="https://github.com/raulavilesrodriguez/norma_derechos_clientes"> Norma clientes repository</a>
              &nbsp;
              Data mining through python 
              &nbsp;
              <a href="https://github.com/raulavilesrodriguez/telcomec"> telecom series repository</a>
              </div>
              </div>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">Jan 2020 - Present</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Developer</h3>
              <div className="subheading mb-3">Independent</div>
              <div>
              <div>
              Design of financial models to predict the movements of the stocks using machine learning in R &nbsp;
              <a href="https://github.com/raulavilesrodriguez/finance_R"> financial models repository</a>
              </div>
              <div>
              Program development to scrapy with rvest in R and python. These programs bypass the bots of the diferentes pages. 
              <a href="https://github.com/raulavilesrodriguez/scrapy_R"> scrapy plusvalia model repository</a>
              &nbsp;
              <a href="https://ideaviles.shinyapps.io/plusvaliam/"> scrapy plusvalia model web app</a>
              </div>
              <div>
              Design and implementation of web apps with Python, JavaScript, and SQL using frameworks 
              like Django (back end), React, and Bootstrap. Implementation with Redux. Insurance. &nbsp;
              <a href="https://github.com/raulavilesrodriguez/seguros_nettlify"> fronted Insurance repository</a>
              </div>
              <div>
              Database construction in SQL, postgresql, sqlite. Advanced handling of excel.
              Backend programming through nodejs (API Rest). Insurance. &nbsp;
              <a href="https://github.com/raulavilesrodriguez/seguros_sqlite_postgresql"> backend Insurance repository</a>
              Management of GIT.
              </div>
              <p>
              Financial, investment and market evaluation to obtain the greatest economic benefit for clients. 
              Focused on project analysis using financial economic criteria such as Net Present Value, 
              Internal Rate of Return, profit margins.
              </p>
              </div>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">Oct 2018 - Present</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Regional Intendant</h3>
              <div className="subheading mb-3">Arcotel</div>
              <p>
              Management and database design in excel and sqlite.
              In charge of the execution and supervision of administrative 
              sanctioning procedures for telecommunications companies.
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">Ago 2017 - Sept 2018</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Technical director</h3>
              <div className="subheading mb-3">Arcotel</div>
              <p>
                Advanced excel management.
                Database construction in sqlite.
                In charge of carrying out the economic projection of the budget of the 
                Technical Direction considering risk criteria and expenditure trends from previous years.
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">Ago 2016 - Ago 2017</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
            <div className="resume-content">
              <h3 className="mb-0">Director in Evaluation of Telecommunications Companies</h3>
              <div className="subheading mb-3">MINTEL</div>
              <p>
                Database management through excel.
                I was in charge of the supervision and evaluation direction of telecommunications 
                companies at MINTEL, where I led, coordinated and carried out the financial, economic 
                and market evaluation analysis of telecommunications companies. Additionally, 
                I was one of the delegates to analyze the topics proposed in the Arcotel and CNT E.P.
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">Oct 2014 - Jul 2016</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
            <div className="resume-content">
              <h3 className="mb-0">Institutional Advisor</h3>
              <div className="subheading mb-3">SENATEL</div>
              <p>
              Database management through excel.
              I worked in the Planning Directorate where I worked as Institutional Advisor, 
              where I was in charge of the technical-economic analysis of several projects 
              that were executed for the institution, such as, for example, I performed statistical 
              analyzes to find the correlation of variables and determine relationships mathematics 
              (business intelligence), I performed the valuation of telecommunications companies for 
              the collection of concession fees.
              In this position, I also performed the analysis of technical, economic and financial 
              information, in order to create reports on the current environment and trends in the 
              telecommunications industry for decision making (KPI's).
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">Feb 2012 - Sept 2014</span>
            </div>
          </div>
          
          <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
            <div className="resume-content">
              <h3 className="mb-0">Senior Marketing Analyst</h3>
              <div className="subheading mb-3">CNT E.P.</div>
              <p>
                I worked in the Strategic Marketing Management where I worked as a senior analyst 
                of segments and products in the corporate area where I was in charge of the development 
                of various products and services: such as internet and data through the VSAT satellite 
                network, virtual central, development of customized solutions for corporate clients.
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">May 2010 - Feb 2012</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
            <div className="resume-content">
              <h3 className="mb-0">Finance Consultant</h3>
              <div className="subheading mb-3">Copa Airlines - Panamá</div>
              <p>
                I did a consultancy whose purpose was to reduce costs in the management of technical 
                purchases. With my work team we made significant reductions in landing gear, brake 
                and tire contract costs.
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">Oct 2009 - Dic 2009</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
            <div className="resume-content">
              <h3 className="mb-0">Engineer in telephony and networking networks</h3>
              <div className="subheading mb-3">CNT E.P.</div>
              <p>
                I supervised and carried out installations of 87 Lucent telephone exchanges in different 
                provinces of Ecuador. I performed the administration of users of telephone exchanges of 
                Samsung, Lucent, ZTE technologies, which consisted of technical support in 
                hardware / software, and preventive maintenance. I also managed the IP data network 
                that remotely controls the Lucent digital exchanges.
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">May 2005 - Ago 2008</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
            <div className="resume-content">
              <h3 className="mb-0">Telecommunications engineer in radio</h3>
              <div className="subheading mb-3">Televisión del Pacífico</div>
              <p>
                I was responsible for the realization of several satellite communications (transmission 
                and reception via satellite), links via microwave, configuration of the new data network 
                through CISCO teams where I demonstrated my organizational and planning skills.
                Perform maintenance of electronic equipment and technical support, offering solutions for 
                both internal and external customers within the television environment.
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">Jun 2003 - Jul 2005</span>
            </div>
          </div>

        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="education"
      >
        <div className="w-100">
          <h2 className="mb-5">Education</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">INCAE - Costa Rica</h3>
              <div className="subheading mb-3">MBA</div>
              <div>Finance and Economics</div>
              <p>Business Specialization</p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">May 2008 - May 2010</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
            <div className="resume-content">
              <h3 className="mb-0">Escuela Politécnica Nacional - Ecuador</h3>
              <div className="subheading mb-3">Electronics and Telecommunications Engineering</div>
              <p>Technology Specialization</p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">August 1998 - May 2003</span>
            </div>
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="skills"
      >
        <div className="w-100">
          <h2 className="mb-5">Skills</h2>

          <div className="subheading mb-3">
            Programming Languages &amp; Tools
          </div>
          <ul className="list-inline dev-icons">
            <li className="list-inline-item">
              <i className="fab fa-html5"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-css3-alt"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-react"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-node-js"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-sass"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-wordpress"></i>
            </li>
            <li className="list-inline-item">
              <i className="fas fa-database"></i>
            </li>
            <li className="list-inline-item">
              <i className="fas fa-flask"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-python"></i>
            </li>
          </ul>

          <div className="subheading mb-3">Workflow</div>
          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fa fa-check"></i>
              Mobile-First, Responsive Design
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Functional tests &amp; Debugging
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Cross Functional Teams
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Agile Development &amp; Autodidact
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Data analysis through R and python
            </li>
          </ul>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="interests"
      >
        <div className="w-100">
          <h2 className="mb-5">Interests</h2>
          <p>
            Apart from my passion for technology, I like sports, lifting weights and running outdoors. 
            I like to read character bio books like Einstein and business books like Starbucks Challenge.
          </p>
          <p className="mb-0">
            When I am at home I like to learn new cooking recipes, repair things around the house and 
            learn new computer science topics such as Artificial Intelligence.
          </p>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="awards1"
      >
        <div className="w-100">
          <h2 className="mb-5">Certifications</h2>
          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              CS50W: CS50's Web Programming with Python and JavaScript. A course of study offered by Harvard University - 2021
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              CS50: CS50's Introduction to Computer Science. A course of study offered by Harvard University - 2021
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i><sup></sup>
              Opportunities and Risks of 5G Networks - United States Department of State - 2021
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i><sup></sup>
              PMBOK-based Project Management Fundamentals
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i><sup></sup>
              Advanced Level Training on cost model and pricing for the Spanish-speaking 
              countries of America - UIT
              (Santiago de Chile)
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i><sup></sup>
              CCNA certificate from CISCO SYSTEM, as an expert in Internetworking
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i><sup></sup>
              Spectrum Assessment Course in mobile networks - UIT - 2021
            </li>
          </ul>
        </div>
      </section>
    </div>
  </Layout>
);

export default IndexPage;
