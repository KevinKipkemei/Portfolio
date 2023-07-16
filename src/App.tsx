import './App.css';
import Github from '../src/assets/logo-github.svg';
import LinkedIn from '../src/assets/logo-linkedin.svg';
import Link from '../src/assets/link-outline.svg';

function App() {
  return (
    <div className="landing">
      <div className="general-info">
        <div className="name-and-title">
          <p className="name">Kevin Kipkemei</p>
          <p className="title">Front-End Developer</p>
        </div>
        <div className="personal-links">
          <a className="links" href="">
            <div className="logo-and-link">
              <img className="logos" src={Github} />
              <p>Github</p>
            </div>
          </a>
          <a className="links" href="">
            <div className="logo-and-link">
              <img className="logos" src={LinkedIn} />
              <p>Linked In</p>
            </div>
          </a>
          <a className="links" href="">
            <div className="logo-and-link">
              <img className="logos" src={Link} />
              <p>Résumé</p>
            </div>
          </a>
        </div>
        <div>
          <p className="description">
            I'm a front-end developer with a passion for creating immersive user
            experiences. I specialize in developing responsive web applications
            using modern technologies such as HTML5, CSS3, and JavaScript
            frameworks like React, and have dabbled in the creation of mobile
            hybrid applications using React Native and Ionic. From crafting
            visually stunning interfaces to optimizing performance and
            usability, my goal is to deliver seamless and engaging digital
            experiences. With a strong attention to detail and a collaborative
            approach, I strive to bring ideas to life and create impactful
            solutions. Explore my portfolio to see examples of my work and
            discover how I can contribute to your project.
          </p>
        </div>
        <p className="tech-title">Familiar Technologies</p>
        <div className="stack">
          <p className="tech-links">React</p>
          <p className="tech-links">TypeScript</p>
          <p className="tech-links">Firebase</p>
          <p className="tech-links">React Native</p>
        </div>
        <div>
        <p className="tech-title">Contact</p>
        <a href = "mailto:kevinkemei90@gmail.com" className = 'links'>kevinkemei90@gmail.com</a>
        </div>
      </div>
      <div className="projects-info">
        <p className="projects-title">PROJECTS</p>
        <a className="card-links" href="https://www.google.com">
          <div className="card">
            <p className="project-title">TIXLY - TICKET SELLING WEBSITE</p>
            <p className="description-card">
              This is a ticket selling website, complete with two payment
              gateways, Stripe to handle card payments, and M-PESA to handle
              mobile wallet payments.
            </p>
            <div className="card-stack">
              <p className="card-tech">React</p>
              <p className="card-tech">Typescript</p>
              <p className="card-tech">Firebase</p>
              <p className="card-tech">Vite</p>
              <p className="card-tech">Stripe API</p>
              <p className="card-tech">M-PESA API</p>
            </div>
          </div>
        </a>
        <div className="card">
          <p className="project-title">FIELD TEAMS MANAGEMENT SYSTEM</p>
          <p className="description-card">
            This is a website that allows managers to remotely manage and track
            field teams. Tracking is done using the Google Maps API, while
            management and assigning of duties is done via a dashboard on the
            site's landing page.
          </p>
          <div className="card-stack">
            <p className="card-tech">React</p>
            <p className="card-tech">Javascript</p>
            <p className="card-tech">Firebase</p>
            <p className="card-tech">Google Maps API</p>
            <p className="card-tech">Material UI</p>
          </div>
        </div>
        <div className="card">
          <p className="project-title">TREE MAPPING MOBILE APP</p>
          <p className="description-card">
            This is a hybrid mobile app that allows users to take record of and
            map tree planting exercises. The app makes use of native features
            such as the camera. The mapping is done through drawing of polygons
            on a map provided by Google Maps.
          </p>
          <div className="card-stack">
            <p className="card-tech">React Native</p>
            <p className="card-tech">Javascript</p>
            <p className="card-tech">Firebase</p>
            <p className="card-tech">Google Maps API</p>
            <p className="card-tech">Expo</p>
          </div>
        </div>
        <div className="card">
          <p className="project-title">FIELD TEAMS MANAGEMENT SYSTEM</p>
        </div>
      </div>
    </div>
  );
}

export default App;
