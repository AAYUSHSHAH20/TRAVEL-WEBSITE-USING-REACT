import "./ContactFormStyles.css";
import axios from 'axios'
import { useState } from "react";

function ContactForm() {

  const [formdata,setFormdata] = useState(
    {
      Name: "",
      Email: "",
      Textarea: "",
    } )
  
    const handlechange = (e) => {
      setFormdata({
        ...formdata,
        [e.target.name]:e.target.value
      })
    }

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        await axios.post('http://localhost:5000/api/insert', formdata);
        alert('Message recevied successfully');
        setFormdata({
          Name: '',
          Email: '',
          Textarea:'',
        });
      } catch (error) {
        console.error('Error inserting data:', error);
        alert('Error inserting data');
      }
    };
 
  return (
    <div className="from-container">
      <h1>Send a message to us!</h1>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input type="text" placeholder="Name"  name='Name' onChange={handlechange} value={formdata.Name} required />
        <label>Email</label>
        <input type="email" placeholder='Email' name='Email' onChange={handlechange} value={formdata.Email} required   />
        {/* <input type="text" placeholder='Subject' name='Subject' onChange={handlechange} value={formdata.Suject} required /> */}
        <label>Enter Your Message</label>
        <textarea type="text" placeholder="Message" rows="4" name='Textarea' onChange={handlechange} value={formdata.Textarea} required ></textarea>
        <button>Send Message</button>
      </form>
    </div>
  );
}

export default ContactForm;
