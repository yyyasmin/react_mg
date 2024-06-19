import React from 'react';
import styled from 'styled-components';
import logo from '../assets/logo.jpg'; // Make sure the path is correct

const Header = styled.header`
  display: flex;
  flex-direction: column; /* Stack items vertically */
  padding: 20px;
  background-color: #f8f9fa;
  text-align: center;
  align-items: center;

  margin-bottom: 80px;


`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 2.5em;
  margin: 0; /* Adjust space between title and logo */
`;

const Logo = styled.img`
  width: 600px; /* Adjust size as needed */
  // height: auto;
  height: 200px;
 border-radius: 25px;

 display: inline-block;

  color: #fff;
  //background-color: #28a745;  //green
  // background-color: #8f67d9;  // purple


  padding: 12px 24px;
  border-radius: 25px;
  text-decoration: none;
  border: none;
  font-weight: bold;
  margin: 0 auto;
  font-size: 1.3em;
  cursor: pointer;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2), 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    background-color: #218838;
    transform: translateY(-2px);
    box-shadow: 0 12px 20px rgba(0, 0, 0, 0.25), 0 6px 12px rgba(0, 0, 0, 0.15);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.2), 0 3px 6px rgba(0, 0, 0, 0.1);

`;

const SubTitle = styled.p`
  display: inline-block;
  color: #fff;
  background-color: #28a745; /* Green */
  background-color: #8f67d9; /* Purple */

  padding: 12px 24px;
  border-radius: 25px;
  text-decoration: none;
  border: none;
  font-weight: bold;
  margin: 0 auto;
  font-size: 1.2em;
  cursor: pointer;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2), 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
`;


const HeaderComponent = () => {
  return (
    <Header>
      <TitleContainer>
        {/* <Title>Play Your Way</Title> */}
        <Logo src={logo} alt="Logo" />
      </TitleContainer>
      <SubTitle>Transform Communication Through Play!</SubTitle>
    </Header>
  );
};

export default HeaderComponent;
