/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Button } from 'antd';
import { Header } from './header/header.component';
import { Footer } from './footer/footer.component';
import {
  landingContainerClass,
  mainContainerClass,
  centerClass,
} from './landing.styles';
import { getHandler } from '../_shared/services/trellis-widget.handler';
import { SyntheticEvent } from 'react';

const handler = getHandler();

export const Landing = () => {
  const handleLookUpClick = (event: SyntheticEvent) => {
    handler.open(event);
  };

  return (
    <section css={landingContainerClass}>
      <div css={centerClass}>
        <Header />
      </div>
      <div css={[mainContainerClass, centerClass]}>
        <Button type="primary" onClick={handleLookUpClick}>
          Look up VIN
        </Button>
      </div>
      <div css={centerClass}>
        <Footer />
      </div>
    </section>
  );
};
