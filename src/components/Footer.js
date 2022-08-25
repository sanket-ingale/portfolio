import './Footer.css';

export default function Footer() {
  return (
    <div className="footer">
      <img src={require('../images/hexagons.png')} alt='hex'/>
      <div className='footer--right'>
        <div className='name'>Sanket Ingale</div>
        <span>+91 9404 26 4995 | Pune (MH), India</span>
        <div className='links'>
          <a target='blank' href='https://www.linkedin.com/in/sanket-ingale1998/'>LinkedIn</a>
          <a target='blank' href='https://github.com/sanket-ingale'>Github</a>
          <a target='blank' href='https://www.instagram.com/lightbuster_/'>Instagram</a>
          <a target='blank' href='mailto:sanket.ingale1998@gmail.com'>Mail me</a>
        </div>
      </div>
    </div>
  );
}
