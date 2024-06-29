import styled from '@emotion/styled';
import data from 'data.json';
import { useEffect, useState } from 'react';

const Main = () => {
  const { greeting } = data;
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Set a timeout to delay the appearance of the title
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 600); // Adjust the delay time as needed

    // Clean up timeout on component unmount
    return () => clearTimeout(timeout);
  }, []);

  return (
    <MainWrapper>
      <MainTitle isVisible={isVisible}>{greeting.title}</MainTitle>
    </MainWrapper>
  );
};

export default Main;

const MainWrapper = styled.div`
  height: 100vh; /* Ensure the wrapper takes the full viewport height */
  display: flex;
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
`;

const MainTitle = styled.h1<{ isVisible: boolean }>`
  font-family: OilCan, sans-serif;
  font-size: 2.75rem;
  color: #2F2120;
  line-height: 1;
  text-transform: uppercase;
  white-space: pre-line;
  text-align: center; /* Center text horizontally */
  opacity: ${({ isVisible }) => (isVisible ? '1' : '0')}; /* Initial opacity */
  transition: opacity 1s ease; /* Smooth transition for opacity change */
`;
