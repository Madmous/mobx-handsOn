import React from 'react';

type OwnProps = {
  travelCostInEuro: number;
};

type Props = OwnProps;

const Cost = (props: Props) => {
  const { travelCostInEuro } = props;
  return (
    <div>
      <span>Coût du voyage</span>
      <input name="cost" type="number" value={travelCostInEuro} />
      <span>Tout compris : hébergement, transports, loisirs …</span>
    </div>
  );
};

export default Cost;
