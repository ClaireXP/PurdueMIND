import './AboutPage.css';
import '../../App.css';

export default function SeniorExecProfile({name, desc, image}) {
    return (
      <div id='boxProfile'>
  
        <div class="crop" id='profileImg'>
          <img id="profilePic" src={image} alt='Profile Pic' />
        </div>

        <div id='boxProfileText'>
          <h3 id='name'>{name}</h3>
          <p id='desc'>{desc}</p>
        </div>
  
      </div>
    );
  };