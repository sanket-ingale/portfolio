import './About.css';

export default function About() {
  return (
    <div className="about">
      <span>About me</span>
      <div className='row--one'>
        <p>
          A result-driven computer science engineer with a strong foundation in logic and coding. <br/>
          Seeking to enhance design excellence and a career that will enhance my technical skills. <br/>
          Ability to learn new tools and concepts quickly while working independently or in a team environment.
        </p>
        <img src={require('../../images/dp.png')} alt='dp'></img>
      </div>
      <div className='row--two'>
        <div className='info'>
          <span className='info--title'>Technologies worked on</span>
          <span className='info--desc'>
            <span>ReactJS</span>
            <span>Redux</span>
            <span>Javascript ES6</span>
            <span>HTML</span>
            <span>CSS</span>
            <span>Bootstrap</span>
            <span>C</span>
            <span>Java</span>
            <span>Linux</span>
            <span>SQL</span>
          </span>
        </div>
        <div className='info'>
          <span className='info--title'>Tools used</span>
          <span className='info--desc'>
            <span>Visual Studio Code</span>
            <span>Android Studio</span>
            <span>Eclipse</span>
            <span>Adobe Photoshop</span>
            <span>Adobe Illustrator</span>
            <span>Adobe XD</span>
            <span>Figma</span>
            <span>Atom Text Editor</span>
            <span>SQL Studio</span>
          </span>
        </div>
        <div className='info'>
          <span className='info--title'>Languages</span>
          <span className='info--desc'>
            <span>English</span>
            <span>Marathi</span>
            <span>Hindi</span>
          </span>
        </div>
      </div>
    </div>
  );
}
