import styled from '@emotion/styled';

const Button = styled.button`
  font-family: "Josefin Sans", Arial, sans-serif;
  padding: 0.5em 1em;
  border: 1px solid #DF405C;
  outline: none;
  box-shadow: none;
  font-size: 0.9rem;
  cursor: pointer;
  background: white;
  display: flex;
  align-items: center;
  color: #1a1a1a;
  text-decoration: none;
  gap: 2px;
  color: #DF4043;
`.withComponent('a');

export default Button;
