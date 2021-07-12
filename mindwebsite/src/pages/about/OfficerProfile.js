import './AboutPage.css';
import '../../App.css';

export default function OfficerProfile({name, pos, desc, image}) {
    return (
      <div className='officerProfile'>
  
        <h3>{name}</h3>
        <h4>{pos}</h4>
        <p>{desc}</p>

        <div class="crop">
          <img id="profilePic" src={image} alt='Profile Pic' />
        </div>
  
      </div>
    );
  };