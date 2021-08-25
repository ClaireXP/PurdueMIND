import './Project.css';
import '../../App.css';

import defaultImg from '../../assets/projects/defaultImg.jpg'

export default function Projects(
  {
    id,
    imgSrc = defaultImg,
    alt = '404: No Image',
    title,
    description
  }) {
  return (
    <div className='project'>
      <img className='projectImg' id={id} src={imgSrc} alt={alt}/>

      <div id='projectInfo'>
        <h4 className='title'>{title}</h4>
        <h5 className='description'>{description}</h5>
      </div>
    </div>
  );
};
