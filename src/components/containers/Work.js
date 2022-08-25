import './Work.css';
import Title from './Title';
import Data from '../../data';

export default function Work() {
  return (
    <div className="work">
      <Title/>
      <div className='container'>
        {Data.map(item => {
          return (
            <div className='data--card'>
              <div className='card--id'>0{item.id}</div>
              <div className='card--title'>{item.title}</div>
              <img src={require('../../images/video1.gif')} alt='hex'/>
              <div className='card--desc'>{item.description}</div>
              <a target='blank' href={item.link}>Github Link</a>
            </div>
          );
        })}
      </div>
    </div>
  );
}
