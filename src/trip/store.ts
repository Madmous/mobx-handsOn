import { observable, computed, action, decorate } from 'mobx';

// https://mobx.js.org/best/decorators.html

export interface Store {
  travelDestination: string;
  startDate: string;
  endDate: string;
  travelCostInEuro: number;
  // changeStartDate: SimpleHandler;
  // changeEndDate: SimpleHandler;
  // changeDestination: SimpleHandler;
  // changeCost: (cost: number) => void;
}

export class TripStore implements Store {}

export default new TripStore();
