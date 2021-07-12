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
          <p>{textList.aboutTexts[0]}</p>
        </div>

        <ol>
          <li>{textList.aboutTexts[1]}</li>
          <li>{textList.aboutTexts[2]}</li>
          <li>{textList.aboutTexts[3]}</li>
        </ol>
      </div>

      <div className='officersInfo'>
        <h2>MIND Officers</h2>

        <OfficerProfile name={textList.officerNames[0]} pos={textList.officerPoses[0]} desc={textList.officerDescs[0]} />
        <OfficerProfile name={textList.officerNames[1]} pos={textList.officerPoses[1]} desc={textList.officerDescs[1]} />
        <OfficerProfile name={textList.officerNames[2]} pos={textList.officerPoses[2]} desc={textList.officerDescs[2]} />

      </div>

    </div>
  );
};

function OfficerProfile({name, pos, desc}) {
  return (
    <div className='officerProfile'>

      <h3>{name}</h3>
      <h4>{pos}</h4>
      <p>{desc}</p>

    </div>
  );
};
