export type InsuredPerson = {
  civility: string;
  firstname: string;
  lastname: string;
  email: string;
  birthdate: string;
};

export type Address = {
  address: string;
  city: string;
  country: string;
  zipCode: string;
};

export type Store = InsuredPerson & Address;

export class PersonalInformationStore implements Store {}

export default new PersonalInformationStore();
