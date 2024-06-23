import styled from '@emotion/styled';
import data from 'data.json';
// import mainImg from '@/assets/images/12.jpeg'

const Main = () => {
  const { greeting } = data;
  return (
    <div>
      {/* <MainImg src={mainImg} /> remove background image*/}
      <MainTitle>{greeting.title}</MainTitle>
    </div>
  );
};

export default Main;

// const MainImg = styled.img`
//   border-radius: 200px 200px 0 0;
//   width: 90%;
//   max-width: 450px;
//   padding-top: 20px;
// `;

const MainTitle = styled.h1`
  padding-top: 70px;
  padding-bottom: 70px;
  font-family: OilCan, sans-serif;
  font-size: 2.75rem;
  color: #2F2120;
  line-height: 1;
  text-transform: uppercase;
  white-space: pre-line;
`;
