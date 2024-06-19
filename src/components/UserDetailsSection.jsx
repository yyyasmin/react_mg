import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { Section, SectionTitle, SectionSubTitle, CommunityButton } from './LandingPageStyles';
import styled from 'styled-components';


const UDSection = styled.section`
  align-items: center;
  text-align: center;
  margin-bottom: 80px;
`;

const UserDetailsSection = ({ onShowUserDetailForm, onHideUserDetailForm, onSubmitUserDetailForm, formData, handleChange, showUserDetailForm }) => {
  const handleSubmitUserDetailForm = (e) => {
    e.preventDefault();
    onSubmitUserDetailForm(e);
  };

  const handleClose = () => onHideUserDetailForm(); // Call onHideUserDetailForm when closing modal
  const handleShow = () => onShowUserDetailForm(); // Call onShowUserDetailForm to show modal

  return (
    <UDSection>
      <SectionTitle>Let us know you:</SectionTitle>
      <SectionSubTitle>
        Do you want to improve your communication skills and connect better with others?
      </SectionSubTitle>
      <CommunityButton onClick={handleShow}>
        Yes I do!
      </CommunityButton>

      <Modal show={showUserDetailForm} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>User Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmitUserDetailForm}>
            <Form.Group controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" required />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" type="submit" onClick={handleSubmitUserDetailForm}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </UDSection>
  );
};

export default UserDetailsSection;
