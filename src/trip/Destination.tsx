import React from 'react';

type OwnProps = {
  travelDestination: string;
};

type Props = OwnProps;
const Destination = (props: Props) => {
  const { travelDestination } = props;
  return (
    <div>
      <span>Pays de destination</span>
      <input name="destination" type="text" value={travelDestination} />
    </div>
  );
};

export default Destination;
