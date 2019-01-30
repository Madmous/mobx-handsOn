import React, { Component } from 'react';

import Trip from './trip/Trip';

class App extends Component {
  render() {
    return (
      <Trip
        travelDestination={''}
        startDate={''}
        endDate={''}
        travelCostInEuro={0}
      />
    );
  }
}

export default App;
