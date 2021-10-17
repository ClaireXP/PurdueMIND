import './Alumni.css';
import '../../about/components/Officer.css';
import '../../../App.css';

import defaultImg from '../../../assets/headshots/default.png'

export default function AlumniProfile(
  {
    id,
    imgSrc = defaultImg,
    alt = '404: No Image',
    name,
    position,
    major,
  }) {
  return (
    <div className='profile'>
      <img className='profilePic' id={id} src={imgSrc} alt={alt} />

      <div id='eboardInfo'>
        <h3 className='name'>{name}</h3>
        <h4 className='position'>{position}</h4>
        <h5 className='major'>{major}</h5>
        <br/>
      </div>
    </div>
  );
};
