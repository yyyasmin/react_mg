import React, { useState } from 'react';
import FrameWithImage from './FrameWithImage';
import HeaderComponent from './Header';

import AnimatedHighlightsSection from './AnimatedHighlightsSection';
import UserDetailsSection from './UserDetailsSection';
import CustomOrderSection from './CustomOrderSection';
import FeaturedGamesSection from './FeaturedGamesSection';
import CommunitySection from './CommunitySection';
import FooterComponent from './Footer';


const LandingPage = () => {
  const [showUserDetailForm, setShowUserDetailForm] = useState(false);
  const [showCustomOrderForm, setShowCustomOrderForm] = useState(false);

  console.log("IN LandingPage -- reseting formData")
  const [formData, setFormData] = useState({
    // Initial state structure
    userDetails: {
      fullName: '',
      email: '',
      phone: '',
    },
    customOrder: {
      email: '', 
      ageGroup: '',
      skillLevel: '',
      subject: '',
      customSubject: '',
    },
  });


  // USER DETAILS

  const handleUserDetailsChange = (e) => {
    const { name, value } = e.target;
    console.log("IN handleUserDetailsChange -- name, value: ", name, value)
    setFormData({
      ...formData,
      userDetails: {
        ...formData.userDetails,
        [name]: value,
      },
    });
    console.log("IN handleUserDetailsChange -- formData: ", formData)
  };

  const handleShowUserDetailForm = () => {
    setShowUserDetailForm(true);
  };

  const handleCloseUserDetailForm = () => {
    setShowUserDetailForm(false);
  };

  const handleSubmitUserDetailForm = () => {
    setShowUserDetailForm(false);
  };



  // CUSTOM ORDER

  const handleCustomOrderChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      customOrder: {
        ...formData.customOrder,
        [name]: value,
      },
    });
  };

  const handleShowCustomOrderForm = () => {
    setShowCustomOrderForm(true);
  };

  const handleCloseCustomOrderForm = () => {
    setShowCustomOrderForm(false);
  };

  const handleSubmitCustomOrderForm = () => {
    setShowCustomOrderForm(false);
  };

  
  console.log("IN landingpage -- BEFORE retrun -- formData.userDetails: ", formData.userDetails)
  console.log("IN landingpage -- BEFORE retrun -- formData.customOrder: ", formData.customOrder)

  return (
    <>
      <FrameWithImage />
      {/* <HeaderComponent /> */}

      <AnimatedHighlightsSection />
      <UserDetailsSection
        onShowUserDetailForm={handleShowUserDetailForm}
        onHideUserDetailForm={handleCloseUserDetailForm}
        onSubmitUserDetailForm={handleSubmitUserDetailForm}
        formData={formData.userDetails}
        handleChange={handleUserDetailsChange}
        showUserDetailForm={showUserDetailForm}
      />
      <CustomOrderSection
        onShowCustomOrderForm={handleShowCustomOrderForm}
        onHideCustomOrderForm={handleCloseCustomOrderForm}
        onSubmitCustomOrderForm={handleSubmitCustomOrderForm}
        formData={formData}
        handleChange={handleCustomOrderChange}
        showCustomOrderForm={showCustomOrderForm}
      />
      <FeaturedGamesSection />
      <CommunitySection />
      <FooterComponent />
    </>
  );
};

export default LandingPage;
