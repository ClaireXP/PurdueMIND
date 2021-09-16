import './AlumniPage.css';
import '../../App.css';

// import damenPic  from '../../assets/logos/damen.png'
// import jackPic   from '../../assets/logos/default.jpeg'
// import parkerPic from '../../assets/logos/default.jpeg'
// import scottPic  from '../../assets/logos/default.jpeg'

// import AlumniProfile from './AlumniProfile';

const alumniList = require('./alumniList.json');

export default function AlumniPage() {
  return (
    <div className='alumniPage'>
      <div id='aboutHeader'>
        <h1>About Us</h1>
      </div>

      {/* ALUMNI FORM EMBEDDED HERE */}

      <h2 className='subHeader'>MIND Senior Executives</h2>
      <div className='alumni'>
        {/* <AlumniProfile name={"Damen Wilson"}       desc={jsonData.seniorExec.damen.desc}    image={damenPic } />
        <AlumniProfile name={"Jack Stickney"}      desc={jsonData.seniorExec.jack.desc}     image={jackPic  } />
        <AlumniProfile name={"Parker van Emmerik"} desc={jsonData.seniorExec.parker.desc}   image={parkerPic} />
        <AlumniProfile name={"Scott Kenning"}      desc={jsonData.seniorExec.scott.desc}    image={scottPic } /> */}
      </div> 

    </div>
  );
};
