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
              <h3 className="mb-0">Consultor</h3>
              <div className="subheading mb-3">Independent</div>
              <p>
              Design and implementation of web apps with Python, JavaScript, and SQL using frameworks 
              like Django (back end), React, and Bootstrap. Implementation with Redux. 
              (https://segurosideal.netlify.app/ https://segurosideal.herokuapp.com/)
              Database construction in SQL, postgresql, sqlite. Advanced handling of excel.
              Backend programming through nodejs (API Rest). (example: https://seguros-back.herokuapp.com/)
              Programming in python, Flask, django, javascript, html, CSS, SASS (front end). 
              Management of Heroku, GIT.
              Data mining through python (web app example: https://entaciónrtelecom.herokuapp.com/)
              Financial, investment and market evaluation to obtain the greatest economic benefit for clients. 
              Focused on project analysis using financial economic criteria such as Net Present Value, 
              Internal Rate of Return, profit margins.
              </p>
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
              Management and database design in excel and sql.
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
                Database construction in SQL.
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
                Database management through excel and sql.
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
              Database management through excel and sql.
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
              <i className="fab fa-js-square"></i>
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
              <i className="fab fa-gulp"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-grunt"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-npm"></i>
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
              CS50W: CS50's Web Programming with Python and JavaScript. A course of study offered by Harvard - 2021
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              CS50: CS50's Introduction to Computer Science. A course of study offered by Harvard - 2021
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
