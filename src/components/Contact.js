import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  }
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [validationErrors, setValidationErrors] = useState({});

  const onFormUpdate = (category, value) => {
      setFormDetails({
        ...formDetails,
        [category]: value
      })
  }

  const handleBlur = (e, field) => {
    if (e.target.value.trim() === '') {
      setValidationErrors(prevErrors => ({ ...prevErrors, [field]: 'This field is required' }));
    } else {
      setValidationErrors(prevErrors => ({ ...prevErrors, [field]: '' }));
    }
  };

  const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const handleEmailBlur = (e) => {
    if (!validateEmail(e.target.value)) {
      setValidationErrors(prevErrors => ({ ...prevErrors, email: 'Invalid email address' }));
    } else {
      setValidationErrors(prevErrors => ({ ...prevErrors, email: '' }));
    }
    handleBlur(e, 'email');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormDetails(formInitialDetails);
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Get In Touch</h2>
                <form onSubmit={handleSubmit}>
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} onBlur={(e) => handleBlur(e, 'firstName')} />
                      {validationErrors.firstName && (
                        <p className="error-message">{validationErrors.firstName}</p>
                      )}
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" value={formDetails.lastName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)} onBlur={(e) => handleBlur(e, 'lastName')} />
                      {validationErrors.lastName && (
                        <p className="error-message">{validationErrors.lastName}</p>
                      )}
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="email" value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} onBlur={handleEmailBlur} />
                      {validationErrors.email && (
                        <p className="error-message">{validationErrors.email}</p>
                      )}
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="tel" value={formDetails.phone} placeholder="Phone No." onChange={(e) => onFormUpdate('phone', e.target.value)} onBlur={(e) => handleBlur(e, 'phone')} />
                      {validationErrors.phone && (
                        <p className="error-message">{validationErrors.phone}</p>
                      )}
                    </Col>
                    <Col size={12} className="px-1">
                      <textarea rows="6" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)} onBlur={(e) => handleBlur(e, 'message')}></textarea>
                      {validationErrors.message && (
                        <p className="error-message">{validationErrors.message}</p>
                      )}
                      <button type="submit"><span>Send</span></button>
                    </Col>
                  </Row>
                </form>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}