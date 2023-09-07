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
          <a className="links" href="https://github.com/KevinKipkemei">
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
          <a
            className="links"
            href="https://drive.google.com/file/d/1pvROgDxHsGjNTJict88hRhD4Ilo8cdB9/view?pli=1"
          >
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
        <div className="emailcontact">
          <p className="tech-title">Contact</p>
          <a href="mailto:kevinkemei90@gmail.com" className="links">
            kevinkemei90@gmail.com
          </a>
        </div>
      </div>
      <div className="projects-info">
        <p className="projects-title">PROJECTS</p>
        <a className="card-links" href="https://car-safety-and-reliability-6an7.vercel.app/">
          <div className="card">
            <p className="project-title">CAR SAFETY AND RELIABITY CHECK</p>
            <div className="status">
              <p className="description-card">Status : </p>
              <div className="status-indicator-live"></div>
              <p className="description-card">Live </p>
            </div>
            <p className="description-card">
              This site allows users to input essential vehicle details, the
              car's make, model, and model year. Subsequently, it
              cross-references this information with the National Highway
              Traffic Safety Administration (NHTSA) API then furnishes users
              with comprehensive data regarding manufacturer recalls, should any
              exist, alongside customer complaints originating from fellow
              owners of the identical vehicle.
            </p>
            <div className="card-stack">
              <p className="card-tech">React</p>
              <p className="card-tech">Typescript</p>
              <p className="card-tech">Vite</p>
              <p className="card-tech">NHTSA API</p>
            </div>
          </div>
          <div className="card">
            <p className="project-title">TIXLY - TICKET SELLING WEBSITE</p>
            <div className="status">
              <p className="description-card">Status : </p>
              <div className="status-indicator"></div>
              <p className="description-card">Coming Soon </p>
            </div>
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
          <div className="status">
            <p className="description-card">Status : </p>
            <div className="status-indicator"></div>
            <p className="description-card">Coming Soon </p>
          </div>
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
          <div className="status">
            <p className="description-card">Status : </p>
            <div className="status-indicator"></div>
            <p className="description-card">Coming Soon </p>
          </div>
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
          <p className="project-title">TRAVEL ADVISORY WEB APPLICATION</p>
          <div className="status">
            <p className="description-card">Status : </p>
            <div className="status-indicator"></div>
            <p className="description-card">Coming Soon </p>
          </div>
          <p className="description-card">
            This is a web application that acts as a travel companion. The app
            interacts with Google Maps API along with a travel advisory API to
            provide suggestions for restaurants, tourist attractions around the
            user's location. The recommendations are accompanied with their
            respective Google Maps ratings, as well as awards and cuisines
            served with regards to restaurants.
          </p>
          <div className="card-stack">
            <p className="card-tech">React</p>
            <p className="card-tech">Typecript</p>
            <p className="card-tech">Google Maps API</p>
            <p className="card-tech">Travel Advisory API</p>
            <p className="card-tech">Axios</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
