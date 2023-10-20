import React from 'react';
import SectionHeader from '../SectionHeader';
import content from '../../content/contributeIntro';
import ImageContent from './../ImageContent';
import { MainContainer, Box, Content, Description } from './style';
import Hyperlink from 'react-native-hyperlink';
import HTMLReactParser from 'html-react-parser';

function Contribute() {
  const renderContent = () => {
    return (
      <Box>
        {content.sections.map((section, index) => {
          return (
            <Content key={index}>
              <SectionHeader title={section.title} />
              {section.content.map((content, index) => {
                return (
                  <Hyperlink
                    linkStyle={{ textDecoration: 'underline' }}
                    onPress={(url) => window.open(url, '_blank')}
                  >
                    <Description key={index}>{HTMLReactParser(content.par)}</Description>
                  </Hyperlink>
                );
              })}
            </Content>
          );
        })}
      </Box>
    );
  };

  return (
    <MainContainer>
      <ImageContent
        image={require('../../assets/Frame 1.png')}
        imageSide="right"
        Children={renderContent}
      />
    </MainContainer>
  );
}

export default Contribute;
