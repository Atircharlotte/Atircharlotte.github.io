import PropTypes from 'prop-types';
export default function Header(props) {
  const { updateData, chosenOne } = props;

  function languageChange(language) {
    updateData(language);
  }
  return (
    <div className="header">
      <div className="left-nav">
        <div className="nav-name">
          <h1>{chosenOne.name}</h1>
          <p>{chosenOne.job}</p>
        </div>
        <img alt="avatar" src="../assets/avatar.jpg" />
      </div>
      <div className="right-nav">
        <ul>
          <div className="dropdown">
            <li className="drop--btn">{chosenOne.menu2}</li>
            <div className="dropdown--content">
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  中文
                </a>
              </li>
              <li>
                <a
                  href="https://drive.google.com/file/d/1GTVB_6ujOzQOYpMWdtfplRMwlLBrRYjl/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  English
                </a>
              </li>
            </div>
          </div>

          <div className="dropdown">
            <li className="drop--btn">{chosenOne.menu1}</li>
            <div className="dropdown--content">
              <li onClick={() => languageChange('mandarin')}>中文</li>
              <li onClick={() => languageChange('english')}>English</li>
              <li onClick={() => languageChange('korean')}>한국어</li>
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
}

Header.propTypes = {
  updateData: PropTypes.func,
  chosenOne: PropTypes.shape({
    name: PropTypes.string,
    job: PropTypes.string,
    menu1: PropTypes.string,
    menu2: PropTypes.string,
  }),
};
