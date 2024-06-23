import styled from '@emotion/styled';

export const Heading1 = styled.p`
  font-family: OilCan, sans-serif;
  font-size: 1.5rem;
  margin: 10px;
  white-space: pre-line;
`;

export const Heading2 = styled.p`
  font-size: 1rem;
  margin: 10px;
  white-space: pre-line;
`;

export const PointTitle = styled.p`
  font-family: OilCan, sans-serif;
  line-height: 1;
  margin: 0;
  white-space: pre-line;
`;

export const Paragraph = styled.p`
  font-size: 1rem;
  line-height: 1.375rem;
`;

export const Caption = styled.p<{ textAlign?: string }>`
  font-weight: 400;
  text-align: ${(props) => (props.textAlign ? props.textAlign : 'start')};
  white-space: pre-line;
`;
