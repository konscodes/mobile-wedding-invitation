import styled from '@emotion/styled';

const RoundButton = styled.button`
  padding: 0.5em 1em;
  margin-bottom: 30px;
  border: 1px solid #DF405C;
  outline: none;
  box-shadow: none;
  font-size: 0.9rem;
  cursor: pointer;
  color: #DF4043;
  text-decoration: none;
  background-color: #fff;
`.withComponent('a');

export default RoundButton;
