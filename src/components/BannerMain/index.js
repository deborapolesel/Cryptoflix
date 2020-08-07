import React from 'react';
import VideoIframeResponsive from './components/VideoIframeResponsive';
import { BannerMainContainer, ContentAreaContainer } from './styles';

import { Banner } from '../../configs/Banner.json';

function getYouTubeId(youtubeURL) {
  return youtubeURL
    .replace(
      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
      '$7',
    );
}

export default function BannerMain() {
  const youTubeID = getYouTubeId(Banner.url);
  const bgUrl = `https://img.youtube.com/vi/${youTubeID}/maxresdefault.jpg`;

  return (
    <BannerMainContainer backgroundImage={bgUrl}>
      <ContentAreaContainer>
        <ContentAreaContainer.Item>
          <ContentAreaContainer.Title>
            {Banner.title}
          </ContentAreaContainer.Title>

          <ContentAreaContainer.Description>
            {Banner.description}
          </ContentAreaContainer.Description>
        </ContentAreaContainer.Item>

        <ContentAreaContainer.Item>
          <VideoIframeResponsive
            youtubeID={youTubeID}
          />
        </ContentAreaContainer.Item>
      </ContentAreaContainer>
    </BannerMainContainer>
  );
}
