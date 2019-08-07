/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Button } from 'antd';
import { Header } from './header/header.component';
import { Footer } from './footer/footer.component';
import {
  landingContainerClass,
  mainContainerClass,
  centerClass,
  headerContainerClass,
  footerContainerClass,
} from './landing.styles';
import { getHandler } from '../_shared/services/trellis-widget.handler';
import { SyntheticEvent, useState } from 'react';
import {
  getPoliciesByAccountId,
  getAllVehiclesFromPolicies,
} from '../_shared/services/trellis-api.service';
import { Vehicle } from '../_shared/interfaces/vehicle.interface';
import { VinResults } from './vin-results/vin-results.component';

export const Landing = () => {
  const [showResults, setShowResults] = useState(false);
  const [showError, setShowError] = useState(false);
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);

  const onTrellisSuccess = async (accountId: string) => {
    // due to some apparent async work that happens on the trellis backend
    // when utilizing the demo insurance provider I was receiving messages
    // saying policies not ready.
    // I would not normally resort to using setTimeout as a bandaid solution
    // but for the purposes of this demo I decided this was the most efficient
    setTimeout(async () => {
      const policies = await getPoliciesByAccountId(accountId);
      const allAccountVehicles = getAllVehiclesFromPolicies(policies);
      setVehicles(allAccountVehicles);
      setShowResults(true);
    }, 1000);
  };

  const onTrellisFail = () => {
    setShowResults(false);
    setShowError(true);
  };

  const handler = getHandler(onTrellisSuccess, onTrellisFail);
  const handleLookUpClick = (event: SyntheticEvent) => {
    handler.open(event);
  };

  const handleOnResetClick = () => {
    setShowResults(false);
    setShowError(false);
  };

  return (
    <section css={landingContainerClass}>
      <div css={[headerContainerClass, centerClass]}>
        <Header />
      </div>
      <div css={[mainContainerClass, centerClass]}>
        {!showResults ? (
          <Button type="primary" onClick={handleLookUpClick}>
            Look up VIN
          </Button>
        ) : (
          <div css={centerClass}>
            <VinResults vehicles={vehicles} />
            <div>
              <Button onClick={handleOnResetClick}>Reset</Button>
            </div>
          </div>
        )}
        {showError && (
          <div css={centerClass}>
            <h2>Something went wrong, please try again</h2>
            <div>
              <Button onClick={handleOnResetClick}>Reset</Button>
            </div>
          </div>
        )}
      </div>
      <div css={[footerContainerClass, centerClass]}>
        <Footer />
      </div>
    </section>
  );
};
