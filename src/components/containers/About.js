import './About.css';

export default function About() {
  return (
    <div className="about">
      <span>About me</span>
      <div className='row--one'>
        <p>
        I enjoy exploring new perspectives, whether through photography, travel, or gaming. <br/>
        These interests inspire me to stay curious and open-minded in both life and work. <br/>
        I believe in the value of continuous learning and collaboration, aiming to contribute meaningfully to any team or project I’m part of.
        </p>
        <img src={require('../../images/dp.png')} alt='dp'></img>
      </div>
      <div className='row--two'>
        <div className='info'>
          <span className='info--title'>Languages</span>
          <span className='info--desc'>
            <span>JavaScript</span>
            <span>HTML</span>
            <span>CSS</span>
            <span>SQL</span>
            <span>CSS</span>
            <span>GraphQL</span>
            <span>C</span>
            <span>Java</span>
          </span>
        </div>
        <div className='info'>
          <span className='info--title'>Frameworks & Libraries</span>
          <span className='info--desc'>
            <span>ReactJS</span>
            <span>VueJS</span>
            <span>ReactNative</span>
            <span>Tailwind</span>
            <span>MUI</span>
            <span>Redux</span>
            <span>Zustand</span>
            <span>ThreeJS</span>
          </span>
        </div>
        <div className='info'>
          <span className='info--title'>Tools</span>
          <span className='info--desc'>
            <span>Webflow</span>
            <span>Figma</span>
            <span>Git</span>
            <span>GitHub</span>
            <span>GitLab</span>
            <span>Postman</span>
          </span>
        </div>
      </div>
    </div>
  );
}
