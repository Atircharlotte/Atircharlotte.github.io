/*for fontawesome */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';
//for propTypes
import PropTypes from 'prop-types';

export default function Main(props) {
  const { chosenOne } = props;

  return (
    <div className="main">
      <div className="col-3 contact">
        <h2>{chosenOne.contact}</h2>
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
        <h2>{chosenOne.aboutMe}</h2>
        <p>{chosenOne.description}</p>
        <h2>{chosenOne.project}</h2>
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
        <h2>{chosenOne.skill}</h2>
        <ul>
          <li>HTML, CSS, JavaScript</li>
          <li>JSX, React.js, React Router</li>
          <li>Python, C</li>
          <li>Git, GitHub</li>
        </ul>
        <h2>{chosenOne.knowLanguage}</h2>
        <ul>
          <li>{chosenOne.detail1}</li>
          <li>{chosenOne.detail2}</li>
          <li>{chosenOne.detail3}</li>
        </ul>
      </div>
    </div>
  );
}

Main.propTypes = {
  chosenOne: PropTypes.shape({
    contact: PropTypes.string,
    aboutMe: PropTypes.string,
    description: PropTypes.string,
    project: PropTypes.string,
    skill: PropTypes.string,
    knowLanguage: PropTypes.string,
    detail1: PropTypes.string,
    detail2: PropTypes.string,
    detail3: PropTypes.string,
  }),
};
