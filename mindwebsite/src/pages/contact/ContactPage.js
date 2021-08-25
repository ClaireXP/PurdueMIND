import ContactForm from './ContactForm';

import './ContactPage.css';
import '../../App.css';

export default function ContactPage() {
  return (
    <div className='contactPage'>
      <div id='contactHeader'>
        <h1>Contact Us</h1>
        <h4>Contact us at purdueuniversitymind@gmail.com or send us a message below!</h4>
      </div>

      <ContactForm/>
    </div>
  );
};
