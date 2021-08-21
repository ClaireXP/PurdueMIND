import './AlumniPage.css';
import '../../App.css';

import damenPic  from '../../assets/logos/damen.png'
import jackPic   from '../../assets/logos/default.jpeg'
import parkerPic from '../../assets/logos/default.jpeg'
import scottPic  from '../../assets/logos/default.jpeg'

import AlumniProfile from './AlumniProfile';

let jsonData = require('../text.json');

export default function AlumniPage() {
  return (
    <div className='alumniPage'>
      <div className='aboutInfo'>
        <div id='aboutHeader'>
          <h1>About Us</h1>
        </div>

        <div>
          <p>{jsonData.aboutText}</p>
        </div>

        <ol>
          <li>{jsonData.goal1}</li>
          <li>{jsonData.goal2}</li>
          <li>{jsonData.goal3}</li>
        </ol>
      </div>

      <div className='seniorExecsInfo'>
        <h2 className='subHeader'>MIND Senior Executives</h2>
        <AlumniProfile name={"Damen Wilson"}       desc={jsonData.seniorExec.damen.desc}    image={damenPic } />
        <AlumniProfile name={"Jack Stickney"}      desc={jsonData.seniorExec.jack.desc}     image={jackPic  } />
        <AlumniProfile name={"Parker van Emmerik"} desc={jsonData.seniorExec.parker.desc}   image={parkerPic} />
        <AlumniProfile name={"Scott Kenning"}      desc={jsonData.seniorExec.scott.desc}    image={scottPic } />
      </div> 

    </div>
  );
};
