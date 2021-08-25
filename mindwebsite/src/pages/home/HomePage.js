import './HomePage.css';
import '../../App.css';

import pic1 from '../../assets/slideCarousel/pic1.jpeg';
import pic2 from '../../assets/slideCarousel/pic2.jpeg';
import pic3 from '../../assets/slideCarousel/pic3.jpeg';
import pic4 from '../../assets/slideCarousel/pic4.jpeg';
import pic5 from '../../assets/slideCarousel/pic5.jpeg';
import pic6 from '../../assets/slideCarousel/pic6.jpeg';
import pic7 from '../../assets/slideCarousel/pic7.jpeg';

import Carousel from 'react-img-carousel';
require('react-img-carousel/lib/carousel.css');

export default function HomePage() {
  return (
    <div className='homePage'>
      <div id='homeHeader'>
        <h1>Purdue MIND</h1>
        <h5>The frontier of Medicine, Innovation, Networking, and Design</h5>
      </div>

      <div id='slideshowContainer'>
        <Carousel autoplay='true' autoplaySpeed='3500' slideHeight='300px' cellPadding={ 5 }>
          <img alt='' src={pic1}/>
          <img alt='' src={pic2}/>
          <img alt='' src={pic3}/>
          <img alt='' src={pic4}/>
          <img alt='' src={pic5}/>
          <img alt='' src={pic6}/>
          <img alt='' src={pic7}/>
        </Carousel>
      </div>

      <div className='break'/>
      
      <div id='nextMeeting'>
        <h2>Next Meeting</h2>
        
        <div id='meetingInfo'>
          <div id='locationTxt'>
            <h4>Location:</h4>
            <h3>MJIS 1001</h3>
          </div>

          <div id='dateTxt'>
            <h4>Date:</h4>
            <h3>Thursday @6:30pm</h3>
          </div>
        </div>
      </div>

      <div className='break' id='breakBeforeEvents'/>

      <h2 id='eventsTxt'>Upcoming Events</h2>
      <iframe 
          id='calendar' title='MIND Calendar'
          src='https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ceb888&amp;ctz=America%2FIndiana%2FIndianapolis&amp;src=ZGZjcGRlb245dmcwczAzYzk0dWRvYzVxbWNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%23616161&amp;showDate=1&amp;showPrint=0&amp;showTabs=0&amp;showCalendars=0&amp;showTz=1&amp;showTitle=0'
          style={{border: 'solid 1px #777'}}
          width='800' height='600'
          frameborder='0' scrolling='no'
      />
    </div>
  );
};
