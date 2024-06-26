import React, { useState } from 'react';
import HeaderComponent from './Header';
import AnimatedHighlightsSection from './AnimatedHighlightsSection';
import UserDetailsSection from './UserDetailsSection';
import CustomOrderSection from './CustomOrderSection';
import FeaturedGamesSection from './FeaturedGamesSection';
import CommunitySection from './CommunitySection';
import FooterComponent from './Footer';
import PartnerProfileSection from './PartnerProfileSection';

const LandingPage = () => {
  const [showUserDetailForm, setShowUserDetailForm] = useState(false);
  const [showCustomOrderForm, setShowCustomOrderForm] = useState(false);
  const [showPartnerProfileForm, setShowPartnerProfileForm] = useState(false);
  const [userEmail, setUserEmail] = useState('');

  const [formData, setFormData] = useState({
    userDetails: {
      name: '',
      email: '',
      password: '',
    },
    customOrder: {
      email: '',
      ageGroup: '',
      skillLevel: '',
      subject: '',
      customSubject: '',
    },
    partnerProfile: {
      partnerDetails: '',
    },
  });

  // USER DETAILS
  const handleUserDetailsChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      userDetails: {
        ...formData.userDetails,
        [name]: value,
      },
    });
  };

  const handleShowUserDetailForm = () => {
    setShowUserDetailForm(true);
  };

  const handleCloseUserDetailForm = () => {
    setShowUserDetailForm(false);
  };

  const handleSubmitUserDetailForm = (email) => {
    setUserEmail(email);
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
    if (!userEmail) {
      alert("Please complete the 'Yes I do' section first.");
      return;
    }
    setShowCustomOrderForm(true);
  };

  const handleCloseCustomOrderForm = () => {
    setShowCustomOrderForm(false);
  };

  const handleSubmitCustomOrderForm = () => {
    setShowCustomOrderForm(false);
  };

  // PARTNER PROFILE
  const handlePartnerProfileChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      partnerProfile: {
        ...formData.partnerProfile,
        [name]: value,
      },
    });
  };

  const handleShowPartnerProfileForm = () => {
    if (!userEmail) {
      alert("Please complete the 'Yes I do' section first.");
      return;
    }
    setShowPartnerProfileForm(true);
  };

  const handleClosePartnerProfileForm = () => {
    setShowPartnerProfileForm(false);
  };

  return (
    <>
      <HeaderComponent />
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
        formData={formData.customOrder}
        handleChange={handleCustomOrderChange}
        showCustomOrderForm={showCustomOrderForm}
      />
      <PartnerProfileSection
        onShowPartnerProfileForm={handleShowPartnerProfileForm}
        onHidePartnerProfileForm={handleClosePartnerProfileForm}
        formData={formData.partnerProfile}
        handleChange={handlePartnerProfileChange}
        showPartnerProfileForm={showPartnerProfileForm}
      />
      <FeaturedGamesSection />
      <CommunitySection />
      <FooterComponent />
    </>
  );
};

export default LandingPage;
