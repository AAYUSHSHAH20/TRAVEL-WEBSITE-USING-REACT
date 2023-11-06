import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Img from '../assets/tour-img06.jpg';
import './Details.css';
import { Container, Row, Col, Form, Label } from 'reactstrap';

const Detail = () => {
    
  const [guests, setGuests] = useState(1); // Initialize the number of guests with 1
  const pricePerPerson = 99; // Price per person
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    guests: 1,
    totalprice: pricePerPerson,
  });

  // Function to calculate the total price
  const calculateTotalPrice = () => {
    return guests * pricePerPerson;
  };

  // Function to handle guest count change
  const handleGuestCountChange = (e) => {
    const newGuestCount = parseInt(e.target.value, 10); // Parse the input value as an integer
    setGuests(newGuestCount);
    setFormData({
      ...formData,
      guests: newGuestCount,
      totalprice: newGuestCount * pricePerPerson,
    });
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send the form data to the server
      await axios.post('http://localhost:5000/api/submit-form', formData);

      // Reset the form fields
      setFormData({
        name: '',
        phone: '',
        date: '',
        guests: 1,
        totalprice: pricePerPerson,
      });

      alert('Your data is recevied successfully we will contact you soon!!!');
    } catch (error) {
      console.error('Error submitting form data:', error);
      alert('Error submitting form data');
    }
  };

  return (
    <section>
      <Container>
        <Row>
          <Col lg='8'>
            <div className='tour_content'>
              <img src={Img} alt='Tour' />
              <div className='tour_info'>
                <h2>Kerela, India</h2>
                <h4>Lost Yourself In the God's Own Valley</h4>
                <span className='fa fa-star checked'>4.8</span>
              </div>
            </div>
          </Col>
          <Col lg='4'>
            <h1>Book Your Trip Now</h1>
            <h3>${pricePerPerson} / per person</h3>
            <div className='from-container'>
              <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input
                  type='text'
                  placeholder='Name'
                  name='name'
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
                <label>Phone No</label>
                <input
                  type='text'
                  placeholder='Phone No'
                  name='phone'
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                />
                <Label>Date</Label>
                <input
                  type='date'
                  placeholder='Date'
                  name='date'
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  required
                />
                <label>Guests</label>
                <input
                  type='number'
                  placeholder='Guests'
                  name='guests'
                  value={guests}
                  min='1'
                  onChange={handleGuestCountChange}
                  required
                />
                <h3>Total Price: ${formData.totalprice}</h3>
                <button type='submit'>Confirm Booking</button>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Detail;
