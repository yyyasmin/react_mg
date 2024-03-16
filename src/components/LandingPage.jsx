import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import CustomOrderForm from './CustomOrderForm';

// Styled Components

const Container = styled.div`
  font-family: 'Arial', sans-serif;
  background-color: #f7f7f7;
  color: #333;
  padding: 20px;
  text-align: center;
`;

const Header = styled.header`
  margin-bottom: 20px;
`;

const Title = styled.h1`
  font-size: 2.5em;
  margin-bottom: 10px;
`;

const SubTitle = styled.p`
  font-size: 1.8em;
  padding: 10px;
  display: inline-block;
  border-radius: 5px;
  background-color: #8f67d9;
  color: #fff;
`;

const Section = styled.section`
  margin-bottom: 40px;
`;

const SectionTitle = styled.h2`
  font-size: 1.8em;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 1.1em;
`;

const GameCardContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const GameCard = styled.div`
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 20px;
  margin: 10px;
  text-align: center;
`;

const GameCardImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 5px;
`;

const GameButton = styled.a`
  display: inline-block; /* Adjusted display */
  color: #fff;
  background-color: #007bff;
  padding: 10px; /* Adjusted padding */
  text-decoration: none;
  border-radius: 20px; /* Rounded edges */
  font-weight: bold;
  margin-top: 10px;
`;

const CustomOrderButton = styled.button`
  background-color: #28a745;
  color: #fff;
  width: 200px;
  padding: 12px;
  font-size: 18px;
  font-weight: bold;
  border: none;
  border-radius: 20px; /* Rounded edges */
  cursor: pointer;
  margin-bottom: 10px;
`;

const CommunityButton = styled(Link)`
  display: inline-block; /* Adjusted display */
  color: #fff;
  background-color: #28a745;
  padding: 10px; /* Adjusted padding */
  text-decoration: none;
  border-radius: 20px; /* Rounded edges */
  font-weight: bold;
  margin: 0 auto;
`;

const Footer = styled.footer`
  margin-top: 20px;
  text-align: center;
`;

const CopyRight = styled.p`
  color: #fff;
  padding: 5px; /* Adjusted padding */
  background-color: #000;
  display: inline-block;
  border-radius: 5px; /* Rounded edges */
`;

const LandingPage = () => {
  const [showForm, setShowForm] = useState(false);

  const handleShowForm = () => {
    setShowForm(true);
  };

  return (
    <Container>
      <Header>
        <Title>Play Your Way</Title>
        <SubTitle>Transform Communication Through Play!</SubTitle>
      </Header>

      <Section>
        <SectionTitle>Explore Our Memory Match Games</SectionTitle>
        <Description>
          Enhance communication skills with engaging memory games tailored for specific goals.
        </Description>
        <GameCardContainer>
          <GameCard>
            <GameCardImage src="game-image-url" alt="What is Active listening - Play to find out" />
            <p>Active Listening Adventure</p>
            <p>What is Active listening and how it relates to communication skills - Play to find out</p>
            <GameButton href="https://debug3--active-litening.netlify.app" target="_blank" rel="noopener noreferrer">Play Now</GameButton>
          </GameCard>
          <GameCard>
            <GameCardImage src="game-image-url" alt="Sharing and Listening Challenge" />
            <p>Sharing and Listening Challenge</p>
            <p>Promote sharing, listening, and collaboration with diadic memory tasks.</p>
            <GameButton href="https://main--yasmin-mg.netlify.app" target="_blank" rel="noopener noreferrer">Play Now</GameButton>
          </GameCard>
          {/* Add more game cards as needed */}
        </GameCardContainer>
      </Section>

      <Section>
        <SectionTitle>Create Your Custom Game</SectionTitle>
        <Description>
          Order a personalized game for your specific subject, age group, and skill level.
        </Description>
        <CustomOrderButton onClick={handleShowForm}>
          Place Custom Order
        </CustomOrderButton>
        {showForm && <CustomOrderForm />}
      </Section>

      <Section>
        <SectionTitle>Join Our Community</SectionTitle>
        <Description>
          Connect with others, share experiences, and get exclusive updates.
        </Description>
        <CommunityButton to="/community">Join Now</CommunityButton>
      </Section>

      <Footer>
        <CopyRight>&copy; {new Date().getFullYear()} Play Your Way Memory Match Games. All rights reserved.</CopyRight>
      </Footer>
    </Container>
  );
};

export default LandingPage;
