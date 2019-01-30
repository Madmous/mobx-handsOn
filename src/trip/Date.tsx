import React from 'react';

type OwnProps = {
  startDate: string;
  endDate: string;
};

type Props = OwnProps;

const Date = (props: Props) => {
  const { startDate, endDate } = props;
  return (
    <div>
      <span>Dates du voyage</span>
      <input name="startDate" type="date" value={startDate} />
      <input name="endDate" type="date" value={endDate} />
    </div>
  );
};

export default Date;
