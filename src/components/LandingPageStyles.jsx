import styled, { keyframes, css } from 'styled-components';

export const Container = styled.div`
  font-family: 'Arial', sans-serif;
  background-color: #f7f7f7;
  color: #333;
  padding: 20px;
  text-align: center;
  background-color: #f8f9fa;

`;

export const Header = styled.header`
  align-items: center;
  text-align: center;
    margin-bottom:40px;
  background-color: #f8f9fa;


`;

export const Title = styled.h1`
  font-size: 2.5em;
  align-items: center;
  text-align: center;
    margin-bottom:40px;
  background-color: #f8f9fa;

`;

export const SubTitle = styled.p`
  font-size: 1.8em;
  padding: 10px;
  display: inline-block;
  border-radius: 5px;
  background-color: #8f67d9;
  color: #fff;
  align-items: center;
  text-align: center;
    margin-bottom:40px;
  background-color: #f8f9fa;


`;

export const Section = styled.section`
  margin-bottom: 70px;
  align-items: center;
  text-align: center;
  margin-bottom:40px;
    background-color: #f8f9fa;

`;

export const SectionTitle = styled.h2`
  font-size: 1.8em;
  // margin-bottom:40px; 
    background-color: #f8f9fa;
  
`;

export const SectionSubTitle = styled.p`
  font-size: 1.5em;
    // margin-bottom:40px;

   font-weight: bold; /* Bold text */
    font-size: 1.3rem;
    color: #333;
    color: green;
      background-color: #f8f9fa;

`;

export const Description = styled.p`
  font-size: 1.3em;
`;

export const GameCardContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
    background-color: #f8f9fa;

`;

export const FormContainer = styled.div` // LandingPageStyles.jsx
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  max-width: 500px;
  z-index: 1000;
      background-color: #f8f9fa;

`;



export const CommunityButton = styled.button`
  display: inline-block;
  color: #fff;
  background-color: #8f67d9; /* Purple */
  background-color: #28a745;  /* green */
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

  &:hover {
    background-color: #218838;
    transform: translateY(-2px);
    box-shadow: 0 12px 20px rgba(0, 0, 0, 0.25), 0 6px 12px rgba(0, 0, 0, 0.15);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.2), 0 3px 6px rgba(0, 0, 0, 0.1);
  }
`;


export const BookGameButton = styled.button`
  display: inline-block;
  color: #fff;
  background-color: #28a745;
  padding: 10px 20px;
  text-decoration: none;
  border: none;
  border-radius: 20px;
  font-weight: bold;
  cursor: pointer;
  margin: 0 auto;
  font-size: 1.2em;

  &:hover {
    background-color: #218838;
  }
`;

export const FormSubmitButton = styled.button`
  background-color: #28a745;
  color: #fff;
  padding: 10px;
  font-size: 1.2em;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
  width: 100%;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 1.5em;
  cursor: pointer;
  color: #333;

  &:hover {
    color: #000;
  }
`;

export const Footer = styled.footer`
  margin-top: 20px;
  text-align: center;
      background-color: #f8f9fa;

`;

export const CopyRight = styled.p`
  color: #fff;
  padding: 5px;
  background-color: #000;
  display: inline-block;
  border-radius: 5px;
`;

export const LandingSection = styled.section`
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 40px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  align-items: center;
      background-color: #f8f9fa;


`;

const fadeInFromFar = keyframes`
  from {
    opacity: 0;
    transform: scale(0.5);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

export const AnimatedHighlight = styled.div`
  text-align: center;
    margin-bottom:40px;


  img {
    width: 250px; /* Adjust size as needed */
    height: auto;
    display: block;
    margin: 0 auto 10px; /* Center the image */
  }

  p {
    font-weight: bold; /* Bold text */
    font-size: 1.25rem;
    color: #333;
    color: red;
  }
`;

export const EvenHighlight = styled(AnimatedHighlight)`
  background-color: #f9defd;
`;

export const OddHighlight = styled(AnimatedHighlight)`
  background-color: #f7f7f7;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  max-width: 500px;
  margin: 0 auto;
      background-color: #f8f9fa;

`;

export const Label = styled.label`
  margin-bottom: 10px;
  font-size: 1.2em;
  color: #333;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
      background-color: #f8f9fa;

`;

export const Input = styled.input`
  padding: 8px;
  font-size: 1em;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
  margin-top: 5px;
`;

export const Select = styled.select`
  padding: 8px;
  font-size: 1em;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
  margin-top: 5px;
`;

export const BigLine = styled.p`
  font-size: 1.5em;
`;
