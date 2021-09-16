import './Officer.css';
import '../../../App.css';

import defaultImg from '../../../assets/headshots/default.jpeg'

export default function AdvisorProfile(
  {
    id,
    imgSrc = defaultImg,
    alt = '404: No Image',
    name,
    position
  }) {
  return (
    <div className='profile'>
      <img className='profilePic' id={id} src={imgSrc} alt={alt}/>

      <div id='eboardInfo'>
        <h3 className='name'>{name}</h3>
        <h5 className='position'>{position}</h5>
      </div>
    </div>
  );
};
