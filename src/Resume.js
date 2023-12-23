// Resume.js

import React from 'react';
import './Resume.css'; // You can create a CSS file for styling

const Resume = () => {
  return (
    <div className="resume-container">
      <section className="name">
        <h1>Siva Madhavan</h1>
      </section>

      <section className="contact">
        <h5> +91 6374698287 | Coimbatore, India | sivamadhavan619@gmail.com | <a href="https://github.com/SivaMadhavan">github.com/siva</a> | <a href="https://linkedin.com/in/sivamadhavan">linkedin.com/in/sivamadhavan</a></h5>
      </section>

      <section className="education">
        <h4 className="underline">EDUCATION</h4>
        <p><h5>PSG COLLEGE OF TECHNOLOGY, Coimbatore India</h5> 
          Bachelor of Engineering in Electronics and Communications
        </p>
      </section>

      <section className="skills">
      <h4 className="underline">SKILLS</h4>
      <ul>
        <section className="bullet-points">
          <li><strong>Languages:</strong> Python, SQL, JavaScript, C, C++</li>
          <li><strong>Technologies:</strong> Django, Django Rest Framework, ORM, Redis, Celery, REST APIs, Postman, MariaDB, MySQL, HTML/CSS, AWS-CloudWatch, S3, DynamoDB, Lambda, PyCharm, Git-Gitlab</li>
        </section>
        </ul>
      </section>

      <section className="experience">
        <h4 className="underline">EXPREINCE</h4>
        <ul>
          <li>
            <strong>Software Engineer, HealthViewX, Payoda Technologies Pvt. Ltd Jun.2021 – Present</strong>
            <ul>
            <section className="bullet-points">
                <li> •  Designed and integrated a Pain Management Module into the healthcare product, enhancing patient care and treatment monitoring capabilities.</li>
                <li> •  Successfully integrated external communication platforms such as Twilio, RingCentral, eFax, Availity, and others,improving communication efficiency within the healthcare ecosystem.</li>
                <li> •  Integrated various health monitoring devices, including Fitbit, iHealth and Cardiowell to seamlessly track patients'health data. This integration significantly improved care provider efficiency and contributed to increased revenuestreams</li>
                <li> •  Played a pivotal role in maintaining and troubleshooting the production server, ensuring uninterrupted service and swift issue resolution</li>
                <li> •  Implemented secure JWT Single Sign-On (SSO) authentication, enhancing user convenience and system security for seamless access to the healthcare platform.</li>
            </section>
            </ul>
          </li>
          <li>
            <strong>Software Engineer Intern, Payoda Technologies Pvt. Ltd</strong>
            <ul>
            <section className="bullet-points">
              <li>• Designed and developed a full-stack application employing MVT design patterns and utilizing Django, HTML, CSS,and MySQL.</li> 
              <li>• Contributed to the development of HealthViewX as part of a final year project, utilizing Python-Django, HTML,CSS, and MySQL for backend development. Engineered a feature enabling users to seamlessly download data invarious formats, including CSV, XLSX, and PDF.</li>
            </section>  
            </ul>
          </li>
        </ul>
      </section>

      <section className="projects">
      <h4 className="underline">PROJECTS</h4>
        <ul>
            <li>
              <strong> Podcast App (Personal Project for Skill Development) - <a color='blue' href="https://github.com/SivaMadhavan/podcast">github</a> </strong>
              <ul>
              <section className="bullet-points">
              <li>• Independently designed and developed a podcast streaming application using the Django framework tosignificantly enhance my skills in web development. This project aims to deepen my understanding of backend.</li>
              <li>• Leveraged Django for the backend development, employing MySQL for efficient data management and retrieval.Implemented a secure User Authentication system to safeguard user accounts and data, ensuring reliable access control.</li>
              <li>• Gained hands-on experience in utilizing Django and MySQL for backend development, sharpening my skills in web application architecture and database management.</li>
              <li>• Strengthened my understanding of frontend-backend interactions, API integration, and authentication mechanisms in web development.</li>
              </section>
              </ul>
            </li>
              <li>
                <strong> Vendor Management System (Personal Project for Skill Development) - <a color='blue' href="https://github.com/SivaMadhavan/vms_vault">github</a> </strong>
                <ul>
                <section className="bullet-points">
                <li> • The Comprehensive Vendor Management System with Purchase Order Integration is a sophisticated web application built using Django Rest Framework. This system provides organizations with a comprehensive solution for managing vendor relationships, with a special emphasis on the seamless creation, tracking, and management of purchase orders</li>
                <li><strong>Technologies used: </strong> Python, Django, Django Rest Framework,MySQL</li>
                </section>
                </ul>
              </li>
          </ul>
      </section>
    </div>
  );
};

export default Resume;
