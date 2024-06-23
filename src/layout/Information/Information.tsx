import styled from '@emotion/styled';
import data from 'data.json';
import { Caption, PointTitle } from '@/components/Text.tsx';

const Information = () => {
  const { information } = data;
  return (
    <InformationWrapper>
      <PointTitle>{information.title1}</PointTitle>
      <Caption>{information.message1}</Caption>
      <PointTitle>{information.title2}</PointTitle>
      <Caption>{information.message2}</Caption>
      <PointTitle>{information.title3}</PointTitle>
      <Caption>{information.message3}</Caption>
      <PointTitle>{information.title4}</PointTitle>
      <Caption>{information.message4}</Caption>
    </InformationWrapper>
  );
};

export default Information;

const InformationWrapper = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  white-space: pre-line;
  margin-bottom: 30px;
`;
