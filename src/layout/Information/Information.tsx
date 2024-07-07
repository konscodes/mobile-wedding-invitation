import { useState } from 'react';
import styled from '@emotion/styled';
import data from 'data.json';
import { Caption, PointTitle } from '@/components/Text.tsx';

type InformationType = {
  title1: string;
  message1: string;
  title2: string;
  message2: string;
  title3: string;
  message3: string;
  title4: string;
  message4: string;
};

const Information = () => {
  const { information } = data as { information: InformationType };
  const [visibleIndexes, setVisibleIndexes] = useState<boolean[]>(new Array(4).fill(false));

  const toggleVisibility = (index: number) => {
    setVisibleIndexes(prevVisibleIndexes =>
      prevVisibleIndexes.map((visible, i) => (i === index ? !visible : visible))
    );
  };

  const titles = ['title1', 'title2', 'title3', 'title4'] as const;
  const messages = ['message1', 'message2', 'message3', 'message4'] as const;

  return (
    <InformationWrapper>
      {titles.map((titleKey, index) => (
        <ContentWrapper key={index}>
          <PointTitle>{information[titleKey]}</PointTitle>
          <SeparatorLine />
          {visibleIndexes[index] ? (
            <>
              <Caption>{information[messages[index]]}</Caption>
              <MoreButton onClick={() => toggleVisibility(index)}>View Less</MoreButton>
            </>
          ) : (
            <MoreButton onClick={() => toggleVisibility(index)}>View More</MoreButton>
          )}
        </ContentWrapper>
      ))}
    </InformationWrapper>
  );
};

export default Information;

const InformationWrapper = styled.div`
  width: 80%;
  max-width: 600px; /* Set a max-width to control the width */
  display: flex;
  flex-direction: column;
  white-space: pre-line;
  margin-bottom: 30px;
  background: white;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border: 1px solid #000;
`;

const ContentWrapper = styled.div`
  margin-bottom: 16px;
`;

const SeparatorLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: #ccc;
  margin: 8px 0;
`;

const MoreButton = styled.button`
  font-family: "Josefin Sans", Arial, sans-serif;
  box-sizing: border-box;
  padding: 0.5em 1em;
  font-size: 1rem;
  align-items: center;
  border: 1px solid #DF405C;
  cursor: pointer;
  color: #DF4043;
  margin-top: 8px;
  background: white;
  display: inline-block;
  text-align: center;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f2f2f2;
  }
`;
