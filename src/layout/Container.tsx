import styled from '@emotion/styled';

const Container = styled.div`
  /* border: 30px solid transparent; Set initial value for border */
  /* border-image-source: url('/background.png'); remove background border image */
  border-image-slice: 30% 49%; /* Set the size of the image */
  border-image-width: 280px; /* Set the width of the border image */
  /* background-image: url('/background_temp.png'); */
  background-repeat: repeat-y;
  /* background-color: #F1EBE4; */
  background-size: contain;
  /* width: 85vw;  */
  /* padding: 0 30px;  */
  margin: 0 auto;
  @media screen and (min-width: 500px) {
      width: 500px;
  }
`;
export default Container;
