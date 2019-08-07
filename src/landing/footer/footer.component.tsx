/** @jsx jsx */
import { jsx } from '@emotion/core';
import Logo from '../../_shared/assets/logo.png';
import { logoClass, containerClass } from './footer.styles';

export const Footer = () => {
  return (
    <section css={containerClass}>
      <img src={Logo} css={logoClass} alt="Trellis logo" />
    </section>
  );
};
