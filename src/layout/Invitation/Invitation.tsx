import React from 'react';
import styled from '@emotion/styled';
import data from 'data.json';
import RoundButton from '@/components/RoundButton.tsx';
import { Caption, Paragraph } from '@/components/Text.tsx';
import { createEvent, EventAttributes } from 'ics';

const isAndroid = () => /Android/i.test(navigator.userAgent);
const isIOS = () => /iPhone|iPad|iPod/i.test(navigator.userAgent);

interface EventDetails {
  start: [number, number, number, number, number]; // [Year, Month, Day, Hour, Minute]
  duration: { hours: number; minutes: number };
  title: string;
  description: string;
  location: string;
  url: string;
}

const Invitation: React.FC = () => {
  const { greeting } = data;

  const event: EventDetails = {
    start: [2024, 11, 9, 17, 0],
    duration: { hours: 5, minutes: 0 },
    title: 'Si & Ko Wedding',
    description: 'Siyun 💍 Konstantin\nGetting Married!',
    location: '223 Samyang-ro 173-gil, Gangbuk-ku, Seoul',
    url: 'https://siyun-ko-wedding.vercel.app/',
  };

  const googleCalendarLink = (event: EventDetails) => {
    const startDate = new Date(Date.UTC(event.start[0], event.start[1] - 1, event.start[2], event.start[3], event.start[4]))
      .toISOString()
      .replace(/-|:|\.\d\d\d/g, "");
    const endDate = new Date(Date.UTC(event.start[0], event.start[1] - 1, event.start[2], event.start[3] + event.duration.hours, event.start[4] + event.duration.minutes))
      .toISOString()
      .replace(/-|:|\.\d\d\d/g, "");

    return `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
      event.title
    )}&dates=${startDate}/${endDate}&details=${encodeURIComponent(
      event.description
    )}&location=${encodeURIComponent(event.location)}&sf=true&output=xml`;
  };

  const handleAddToCalendar = () => {
    if (isAndroid()) {
      const link = googleCalendarLink(event);
      window.open(link, '_blank');
    } else if (isIOS()) {
      const link = document.createElement('a');
      link.href = "https://raw.githubusercontent.com/konscodes/mobile-wedding-invitation/main/src/assets/invitation.ics";
      link.download = 'invitation.ics';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      const icsEvent: EventAttributes = {
        start: event.start,
        duration: event.duration,
        title: event.title,
        description: event.description,
        location: event.location,
        url: event.url,
        status: 'CONFIRMED',
        busyStatus: 'BUSY',
        alarms: [{ action: 'display', description: 'Si & Ko Wedding', trigger: { hours: 72, before: true } }],
      };

      createEvent(icsEvent, (error, value) => {
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
    }
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
