import './AboutPage.css';
import '../../App.css';
import textList from './text';

export default function AboutPage() {
  return (
    <div className='aboutPage'>

      <div className='aboutInfo'>
        <div id='aboutHeader'>
          <h1>About Us</h1>
        </div>

        <div>
          <p>{textList[0]}</p>
        </div>

        <ol>
          <li>{textList[1]}</li>
          <li>{textList[2]}</li>
          <li>{textList[3]}</li>
        </ol>
      </div>

      <div className='officersInfo'>
        <h2>MIND Officers</h2>
      </div>

    </div>
  );
};
