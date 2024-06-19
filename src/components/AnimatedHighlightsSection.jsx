// AnimatedHighlightsSection.jsx
import React, { useState, useEffect } from 'react';
import { Section, AnimatedHighlight } from './LandingPageStyles';
import styled from 'styled-components';

import lineImage1 from '../assets/linesImages/p10.jfif';
import lineImage2 from '../assets/linesImages/p2.jfif';
import lineImage3 from '../assets/linesImages/p3.jfif';
import lineImage4 from '../assets/linesImages/p4.jfif';
import lineImage5 from '../assets/linesImages/p5.jfif';
import lineImage6 from '../assets/linesImages/p6.jfif';
import lineImage7 from '../assets/linesImages/p7.jfif';
import lineImage8 from '../assets/linesImages/p8.jfif';


const lines = [
  { text: 'Having trouble connecting with other people - friends and/or spouses?', img: lineImage1 },
  { text: 'Feeling "stuck" and not belonging in social interactions?', img: lineImage2 },
  { text: 'No suggestions for entertainment or events?', img: lineImage3 },
  { text: 'Do you stay "out of the conversation" even in WhatsApp groups or on social networks?', img: lineImage4 },
  { text: 'Feeling lonely? Can\'t find a partner?', img: lineImage5 },
  { text: 'You hardly leave the house because you have nowhere to go and with whom?', img: lineImage6 },
  { text: 'Are you very stressed before going out or "dates" and don\'t know how to start a conversation?', img: lineImage7 },
  { text: 'Choose only hobbies that do not require communication with people?', img: lineImage8 },
];

export const LinesSection = styled.section`
  margin-bottom: 70px;
  align-items: center;
  text-align: center;
  margin-bottom: 50px;
`;

const AnimatedHighlightsSection = () => {
  const [animationIndex, setAnimationIndex] = useState(0);
  const [animationStarted, setAnimationStarted] = useState(false);

  useEffect(() => {
    setAnimationStarted(true);
    const interval = setInterval(() => {
      setAnimationIndex((prevIndex) => (prevIndex + 1) % lines.length);
    }, 3000); // Change line every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <LinesSection>
      {lines.map((line, index) => (
        <AnimatedHighlight
          key={index}
          style={{
            display: animationIndex === index ? 'block' : 'none',
            animationDelay: `${index * 9}s`,
          }}
        >
          <img src={line.img} alt="" />
          <p>{line.text}</p>
        </AnimatedHighlight>
      ))}
    </LinesSection>
  );
};

export default AnimatedHighlightsSection;
