import './MainContent.css'
import AboutMe from '../about-me/AboutMe';
import Education from '../education/Education';
import Experience from '../experience/Experience';
import Projects from '../projects/Projects';
import Resume from '../resume/Resume';
import Contact from '../contact/Contact';

export default function MainContent() {
    return (
        <div class="main-content">
            <AboutMe/>
            <Experience/>
            <Projects/>
            <Education/>
            <Resume/>
            <Contact/>
        </div>
    );
}