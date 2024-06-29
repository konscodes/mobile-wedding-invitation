import styled from '@emotion/styled';
import data from 'data.json';

const Main = () => {
  const { greeting } = data;
  return (
    <MainWrapper>
      <MainTitle>{greeting.title}</MainTitle>
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

const MainTitle = styled.h1`
  font-family: OilCan, sans-serif;
  font-size: 2.75rem;
  color: #2F2120;
  line-height: 1;
  text-transform: uppercase;
  white-space: pre-line;
  text-align: center; /* Center text horizontally */
`;
