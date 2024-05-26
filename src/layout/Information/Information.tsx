import styled from '@emotion/styled';
import data from 'data.json';
import { Caption } from '@/components/Text.tsx';

const Information = () => {
  const { information } = data;
  return (
    <InformationWrapper>
      <Caption textAlign={'left'}>{information.message}</Caption>
    </InformationWrapper>
  );
};

export default Information;

const InformationWrapper = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;
