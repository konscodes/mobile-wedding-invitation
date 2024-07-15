import styled from '@emotion/styled';
import data from 'data.json';
import RoundButton from '@/components/RoundButton.tsx';
import { Caption, Paragraph } from '@/components/Text.tsx';
import { createEvent, EventAttributes } from 'ics';

const Invitation = () => {
  const { greeting } = data;

  const handleAddToCalendar = () => {
    const event: EventAttributes = {
      start: [2024, 11, 9, 17, 0], // [Year, Month, Day, Hour, Minute]
      duration: { hours: 5, minutes: 0 },
      title: 'Si & Ko Wedding',
      description: 'Siyun 💍 Konstantin\nGetting Married!',
      location: '223 Samyang-ro 173-gil, Gangbuk-ku, Seoul',
      url: 'https://siyun-ko-wedding.vercel.app/',
      status: 'CONFIRMED',
      busyStatus: 'BUSY',
      alarms: [{ action: 'display', description: 'Si & Ko Wedding', trigger: { hours: 72, before: true } }]
    };

    createEvent(event, (error, value) => {
      if (error) {
        console.log(error);
        return;
      }
      const blob = new Blob([value], { type: 'text/calendar' });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = 'invitation.ics';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  };

  return (
    <InvitationWrapper>
      <Paragraph>{greeting.message}</Paragraph>
      <Caption textAlign={'center'}>{greeting.eventDetail}</Caption>
      <RoundButton onClick={handleAddToCalendar}>
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
