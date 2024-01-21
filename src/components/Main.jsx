/*for fontawesome */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';

export default function Main() {
  return (
    <div className="main">
      <div className="col-3 contact">
        <h2>Contact</h2>
        <ul>
          <li>
            <FontAwesomeIcon icon={faGithub} />
            <a
              href="https://github.com/Atircharlotte"
              target="_blank"
              rel="noopener noreferrer"
            >
              {' '}
              MyGitHub
            </a>
          </li>

          <li>
            <FontAwesomeIcon icon={faEnvelope} /> rita789201131@gmail.com
          </li>
          <li>
            <FontAwesomeIcon icon={faLocationDot} /> Taipei, Taiwan
          </li>
          <li>
            <FontAwesomeIcon icon={faPhone} /> (+886) 979-862-751
          </li>
          <li>
            <FontAwesomeIcon icon={faLinkedin} />
            <a
              href="https://www.linkedin.com/in/以柔-陳-991b05244/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {' '}
              MyLinkedin
            </a>
          </li>
        </ul>
      </div>
      <div className="col-6 hero-and-project">
        <h2>About me</h2>
        <p>
          Hello This is Chen Yi Rou!
          <br />
          As a NON computer science graduate, I realize I'm lack of computer
          science knowledge.
          <br /> However, I'm willing to learn by myself through the Internet
          and take some related courses while I was attending school. <br />
          There are a lot of thing to catch up, but I will do my best to become
          a qualified web developer!
        </p>
        <h2>My project</h2>
        <ul className="project-ls">
          <li>
            <h4>THINGS TO DO</h4>
            <a href="https://thingstodowow.netlify.app">
              <img alt="things to do" src="assets/thingsToDo.jpg" />
            </a>
          </li>

          <li>
            <h4>MOVIE STATION</h4>
            <a href="https://moviestationwow.netlify.app">
              <img alt="movie station" src="assets/movieStation.jpg" />
            </a>
          </li>
          <li>
            <h4>SWEETIE</h4>
          </li>
        </ul>
      </div>
      <div className="col-3 skills">
        <h2>Skills</h2>
        <ul>
          <li>HTML, CSS, JavaScript</li>
          <li>JSX, React.js, React Router</li>
          <li>Python, C</li>
          <li>Git, GitHub</li>
        </ul>
        <h2>Languages</h2>
        <ul>
          <li>Mandarin</li>
          <li>English</li>
          <li>Korean</li>
        </ul>
      </div>
    </div>
  );
}
