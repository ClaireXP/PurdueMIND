import './AboutPage.css';
import '../../App.css';

export default function AdvisorProfile({name, desc, image}) {
    return (
      <div id='boxProfile'>
        <h3 id='name'>{name}</h3>
      
        <div id='boxProfileInfo'>
          <div class="crop" id='profileImg'>
            <img id="profilePic" src={image} alt='Profile Pic' />
          </div>

          <div id='boxProfileText'>
            <p id='desc'>{desc}</p>
          </div>
  
        </div>
      </div>
    );
  };
  