import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import CustomOrderForm from './CustomOrderForm';
import GameCard from './GameCard'; // Importing the new component
import image_1 from './about_active_litening.JPG';
import image_2 from './get_to_know.JPG';
import image_3 from './share_and_listen.JPG';
import image_4 from './relax_with_midnfullness.JPG';



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
  font-size: 1.3em;
`;

const GameCardContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const CustomOrderButton = styled.button`
  background-color: #28a745;
  color: #fff;
  width: 200px;
  padding: 12px;
  font-size: 18px;
  font-weight: bold;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  margin-bottom: 10px;
`;

const CommunityButton = styled(Link)`
  display: inline-block;
  color: #fff;
  background-color: #28a745;
  padding: 10px;
  text-decoration: none;
  border-radius: 20px;
  font-weight: bold;
  margin: 0 auto;
`;

const Footer = styled.footer`
  margin-top: 20px;
  text-align: center;
`;

const CopyRight = styled.p`
  color: #fff;
  padding: 5px;
  background-color: #000;
  display: inline-block;
  border-radius: 5px;
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
          <GameCard
            title="Active Listening Adventure"
            description="What is Active listening and how it relates to communication skills - Play to find out"
            imageUrl={image_1}
            playUrl="https://main--ng-about.netlify.app"
          />
          <GameCard
            title="Get to Know Each Other Challenge"
            description="Promote geting to konw each other while having fun, and collaboration with diadic memory tasks."
            imageUrl={image_2}
            playUrl="https://main--mg-young-kids.netlify.app"
          />
          <GameCard
            title="Sharing and Listening Challenge"
            description="Promote sharing, listening while having fun, and collaboration with diadic memory tasks."
            imageUrl={image_3}
            playUrl="https://main--know-better-1.netlify.app/"
          />
          <GameCard
            title="mindfulness"
            description="Promote calm and relaxed mode of well being using mindfulness diadic memory tasks."
            imageUrl={image_4}
            playUrl="https://main--mg-mindfulness.netlify.app"
          />
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
