import styled from '@emotion/styled';

const Container = styled.div`
  border: 30px solid transparent; /* Set initial value for border */
  border-image-source: url('/background.png'); /* Set image path */
  border-image-slice: 30% 49%; /* Set the size of the image */
  border-image-width: 280px; /* Set the width of the border image */
  background-color: #ffffff;
  width: 85vw;
  margin: 0 auto;
  
  @media screen and (min-width: 500px) {
      width: 500px;
  }
`;
export default Container;
