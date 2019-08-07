/** @jsx jsx */
import { jsx } from '@emotion/core';
import 'antd/dist/antd.css';

import { Landing } from './landing/landing.component';
import { appContainerClass } from './app.styles';

function App() {
  return (
    <div css={appContainerClass}>
      <Landing />
    </div>
  );
}

export default App;
