export default function Header() {
  return (
    <div className="header">
      <div className="left-nav">
        <div className="nav-name">
          <h1>
            Rita
            <br />
            Chen
          </h1>
          <p>Web Developer</p>
        </div>
        <img alt="avatar" src="../assets/avatar.jpg" />
      </div>
      <div className="right-nav">
        <ul>
          <li>About</li>
          <li>Contact</li>
          <li>Language</li>
          <li>Resume</li>
        </ul>
      </div>
    </div>
  );
}
