import { useState } from 'react';
import styled from '@emotion/styled';
import data from 'data.json';
import { Caption } from '@/components/Text.tsx';

type InformationType = {
  title1: string;
  subTitle1: string;
  message1: string;
  title2: string;
  subTitle2: string;
  message2: string;
  title3: string;
  subTitle3: string;
  message3: string;
  title4: string;
  subTitle4: string;
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
  const subTitles = ['subTitle1', 'subTitle2', 'subTitle3', 'subTitle4'] as const;
  const messages = ['message1', 'message2', 'message3', 'message4'] as const;

  return (
    <InformationWrapper>
      {titles.map((titleKey, index) => (
        <ContentWrapper key={index}>
          <TitleAndButtonWrapper>
            <div>
              <InfoTitle>{information[titleKey]}</InfoTitle>
              <InfoSub>{information[subTitles[index]]}</InfoSub>
            </div>
            <MoreButton onClick={() => toggleVisibility(index)}>
              {visibleIndexes[index] ? '-' : '+'}
            </MoreButton>
          </TitleAndButtonWrapper>
          <SeparatorLine />
          {visibleIndexes[index] && <Caption>{information[messages[index]]}</Caption>}
        </ContentWrapper>
      ))}
    </InformationWrapper>
  );
};

export default Information;

const InformationWrapper = styled.div`
  width: 80%;
  max-width: 600px;
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

const TitleAndButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  align-items: baseline;
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

const InfoTitle = styled.p`
  font-family: "Josefin Sans", sans-serif;
  line-height: 1;
  margin: 0;
  font-size: 1.2rem;
  line-height: 1.375rem;
  white-space: pre-line;
  padding-top: 10px;
  text-align: justify;
`;

const InfoSub = styled.p`
  font-family: "Josefin Sans", sans-serif;
  line-height: 1.2;
  margin: 0;
  font-size: 1rem;
  color: #555;
  text-align: justify;
`;
