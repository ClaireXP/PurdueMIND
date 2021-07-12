import './AboutPage.css';
import '../../App.css';

import presPic from '../../assets/logos/jenna.png'
import vicePic from '../../assets/logos/kevin.png'
import treaPic from '../../assets/logos/akio.png'
import secrPic from '../../assets/logos/kyle.png'
import entrPic from '../../assets/logos/elyssia.png'
import rdevPic from '../../assets/logos/matthew.png'
import netePic from '../../assets/logos/claire.png'

import damenPic  from '../../assets/logos/damen.png'
import jackPic   from '../../assets/logos/default.jpeg'
import parkerPic from '../../assets/logos/default.jpeg'
import scottPic  from '../../assets/logos/default.jpeg'

import leePic     from '../../assets/logos/dr-lee.png'
import hoilettPic from '../../assets/logos/dr-hoilett.png'
import mazinPic   from '../../assets/logos/default.jpeg'

import OfficerProfile from './OfficerProfile';

let jsonData = require('./text.json');

export default function AboutPage() {
  return (
    <div className='aboutPage'>

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

      <div className='officersInfo'>
        <h2>MIND Officers</h2>
        <OfficerProfile name={jsonData.pres.name} pos={jsonData.pres.pos} desc={jsonData.pres.desc} image={presPic} />
        <OfficerProfile name={jsonData.vice.name} pos={jsonData.vice.pos} desc={jsonData.vice.desc} image={vicePic} />
        <OfficerProfile name={jsonData.trea.name} pos={jsonData.trea.pos} desc={jsonData.trea.desc} image={treaPic} />
        <OfficerProfile name={jsonData.secr.name} pos={jsonData.secr.pos} desc={jsonData.secr.desc} image={secrPic} />
        <OfficerProfile name={jsonData.entr.name} pos={jsonData.entr.pos} desc={jsonData.entr.desc} image={entrPic} />
        <OfficerProfile name={jsonData.rdev.name} pos={jsonData.rdev.pos} desc={jsonData.rdev.desc} image={rdevPic} />
        <OfficerProfile name={jsonData.nete.name} pos={jsonData.nete.pos} desc={jsonData.nete.desc} image={netePic} />
      </div>

      <div className='seniorExecsInfo'>
        <h2>MIND Senior Executives</h2>
        <OfficerProfile name={"Damen Wilson"}       pos={""} desc={jsonData.pres.desc} image={damenPic } />
        <OfficerProfile name={"Jack Stickney"}      pos={""} desc={jsonData.vice.desc} image={jackPic  } />
        <OfficerProfile name={"Parker van Emmerik"} pos={""} desc={jsonData.trea.desc} image={parkerPic} />
        <OfficerProfile name={"Scott Kenning"}      pos={""} desc={jsonData.secr.desc} image={scottPic } />
      </div> 

      <div className='advisorsInfo'>
        <h2>MIND Advisors</h2>
        <OfficerProfile name={"Dr. Hyowon Lee"}      pos={""} desc={jsonData.pres.desc} image={leePic    } />
        <OfficerProfile name={"Dr. Orlando Hoilett"} pos={""} desc={jsonData.vice.desc} image={hoilettPic} />
        <OfficerProfile name={"Mazin Hakim"}         pos={""} desc={jsonData.trea.desc} image={mazinPic  } />
      </div> 

    </div>
  );
};
