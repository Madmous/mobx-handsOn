import React from 'react';
import Destination from './Destination';
import Cost from './Cost';
import Date from './Date';

import { Store as MobxProps } from './store';

type Props = MobxProps;

const Trip = (props: Props) => {
  const {
    startDate,
    endDate,
    travelDestination,
    travelCostInEuro,
  } = props;

  return (
    <div>
      <h1>Informations sur votre voyage</h1>
      <Date startDate={startDate} endDate={endDate} />
      <Destination travelDestination={travelDestination} />
      <Cost travelCostInEuro={travelCostInEuro} />
    </div>
  );
};

export default Trip;
