import React, { Component } from 'react';

import tripStore from './trip/store';
import personalInformationStore from './personal-information/store';
import Trip from './trip/Trip';

class App extends Component {
  render() {
    return (
      <div>
        <MainInsuredPerson {...personalInformationStore} />
        <Trip {...tripStore} />
        <button onClick={() => {}}>Send</button>
      </div>
    );
  }
}

export default App;
