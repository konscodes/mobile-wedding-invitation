import styled from '@emotion/styled';
import data from 'data.json';
import RoundButton from '@/components/RoundButton.tsx';
import { Caption, Paragraph } from '@/components/Text.tsx';

const Invitation = () => {
  const { greeting } = data;
  return (
    <InvitationWrapper>
      <Paragraph>{greeting.message}</Paragraph>
      <Caption textAlign={'center'}>{greeting.eventDetail}</Caption>
      <RoundButton
        target="_blank"
        href="https://raw.githubusercontent.com/konscodes/mobile-wedding-invitation/main/src/assets/invitation.ics"
        rel="noreferrer">
        Add to Calendar
      </RoundButton>
      <InvitationImage src={`/11.jpeg`} alt="Invitation" />
    </InvitationWrapper>
  );
};

export default Invitation;

const InvitationWrapper = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InvitationImage = styled.img`
  margin-bottom: 36px; /* Adjust the margin as needed */
  max-width: 100%;  /* Ensure the image is responsive */
  height: auto;
`;
