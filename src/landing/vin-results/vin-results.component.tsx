/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Vehicle } from '../../_shared/interfaces/vehicle.interface';
import { resultsContainerClass, resultItemClass } from './vin-results.styles';

interface VinResultsProps {
  vehicles: Vehicle[];
}

export const VinResults = ({ vehicles }: VinResultsProps) => {
  const renderVehicleResults = () => {
    if (!vehicles.length) {
      return <li>No Results</li>;
    }
    return vehicles.map((vehicle, idx) => (
      <li css={resultItemClass} key={idx + vehicle.make}>
        <p>Make: {vehicle.make}</p>
        <p>Model: {vehicle.model}</p>
        <p>Year: {vehicle.year}</p>
        <p>Vin: {vehicle.vin}</p>
      </li>
    ));
  };
  return (
    <section>
      <ul css={resultsContainerClass}>{renderVehicleResults()}</ul>
    </section>
  );
};
