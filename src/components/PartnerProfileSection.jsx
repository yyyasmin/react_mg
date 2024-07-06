import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import styled from 'styled-components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { baseUrl } from '../helpers/ServerRoutes';
import { SectionTitle, SectionSubTitle, BookGameButton } from './LandingPageStyles';

const PPSSection = styled.section`
  align-items: center;
  text-align: center;
  margin-bottom: 80px;
`;

const PartnerProfileModalBody = styled(Modal.Body)`
  background: linear-gradient(to bottom, purple, green);
`;

const PartnerProfileSection = ({
  onShowPartnerProfileForm,
  onHidePartnerProfileForm,
  showPartnerProfileForm,
}) => {
  const [formData, setFormData] = useState({
    ageGroup: '',
    subject: '',
    gender: '',
    profileRequirement: '',
    playingTime: '',
    relationshipLevel: '',
    playmateEmail: '',
  });
  const [newSubject, setNewSubject] = useState('');
  const [subjects, setSubjects] = useState([
    'math', 'history', 'english', 'soccer', 'tennis', 'acting', 'music', 'relationships', 'playback_improvisation', 'other'
  ]);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleAddSubject = async () => {
    if (newSubject && !subjects.includes(newSubject)) {
      setSubjects([...subjects, newSubject]);
      await axios.post(`${baseUrl}/add_subject`, { newSubject });
    }
    setNewSubject('');
  };

  const handleSubmitPartnerProfileForm = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${baseUrl}/submit_partner_profile`, formData);
      onHidePartnerProfileForm();
      navigate('/desired-page'); // Replace '/desired-page' with the target path
    } catch (error) {
      console.error('Error submitting partner profile:', error);
    }
  };

  const handleClose = () => onHidePartnerProfileForm();
  const handleShow = () => onShowPartnerProfileForm();

  return (
    <PPSSection>
      <SectionTitle>Find a Perfect Partner for Your Goals</SectionTitle>
      <SectionSubTitle>
        Create a profile to find the best match for your needs and interests.
      </SectionSubTitle>
      <BookGameButton onClick={handleShow}>
        Create Partner Profile
      </BookGameButton>

      <Modal show={showPartnerProfileForm} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Partner Profile</Modal.Title>
        </Modal.Header>
        <PartnerProfileModalBody>
          <Form onSubmit={handleSubmitPartnerProfileForm}>
            <Form.Group controlId="formAgeGroup" className="mb-3">
              <Form.Label>Age Group</Form.Label>
              <Form.Control
                as="select"
                name="ageGroup"
                value={formData.ageGroup}
                onChange={handleChange}
                required
              >
                <option value="">Select Age Group</option>
                <option value="kids">Kids</option>
                <option value="teens">Teens</option>
                <option value="adults">Adults</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="formSubject" className="mb-3">
              <Form.Label>Subject of Interest</Form.Label>
              <Form.Control
                as="select"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              >
                {subjects.map((subject) => (
                  <option key={subject} value={subject}>{subject}</option>
                ))}
              </Form.Control>
            </Form.Group>

            {formData.subject === 'other' && (
              <Form.Group controlId="formCustomSubject" className="mb-3">
                <Form.Label>Custom Subject</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter custom subject"
                  name="customSubject"
                  value={newSubject}
                  onChange={(e) => setNewSubject(e.target.value)}
                  required
                />
                <Button variant="primary" onClick={handleAddSubject}>
                  Add Subject
                </Button>
              </Form.Group>
            )}

            <Form.Group controlId="formGender" className="mb-3">
              <Form.Label>Gender</Form.Label>
              <Form.Control
                as="select"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="formProfileRequirement" className="mb-3">
              <Form.Label>Type of Profile Requirement</Form.Label>
              <Form.Control
                as="select"
                name="profileRequirement"
                value={formData.profileRequirement}
                onChange={handleChange}
                required
              >
                <option value="">Select Profile Requirement</option>
                <option value="matching_profile">Matching Profile</option>
                <option value="same_day_time">Whoever wants to play at the same day and time</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="formPlayingTime" className="mb-3">
              <Form.Label>Playing Time</Form.Label>
              <Form.Control
                type="datetime-local"
                name="playingTime"
                value={formData.playingTime}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formRelationshipLevel" className="mb-3">
              <Form.Label>Relationship Level</Form.Label>
              <Form.Control
                as="select"
                name="relationshipLevel"
                value={formData.relationshipLevel}
                onChange={handleChange}
                required
              >
                <option value="">Select Relationship Level</option>
                <option value="Don't know">Don't know</option>
                <option value="acquaintances">Acquaintances</option>
                <option value="friends">Friends</option>
                <option value="good friends">Good Friends</option>
                <option value="life partners">Life Partners</option>
                <option value="colleagues">Colleagues</option>
              </Form.Control>
            </Form.Group>

            {formData.relationshipLevel !== "Don't know" && (
              <Form.Group controlId="formPlaymateEmail" className="mb-3">
                <Form.Label>Playmate Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter playmate email"
                  name="playmateEmail"
                  value={formData.playmateEmail}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            )}

            <Button variant="primary" type="submit">
              Get me my perfect playmate
            </Button>
          </Form>
        </PartnerProfileModalBody>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </PPSSection>
  );
};

export default PartnerProfileSection;
