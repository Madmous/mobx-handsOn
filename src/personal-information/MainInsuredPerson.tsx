// @flow
import * as React from 'react';

import { Store as MobxProps } from './store';

type Props = MobxProps;

export function MainInsuredPerson(props: Props) {
  return (
    <div>
      <div>
        <span>Civilité</span>
        <input name="civility" value={props.civility} />
      </div>
      <div>
        <span>Prénom</span>
        <input name="firstname" value={props.firstname} />
      </div>
      <div>
        <span>Nom</span>
        <input name="lastname" value={props.lastname} />
      </div>
      <div>
        <span>Email</span>
        <input type="email" name="email" value={props.email} />
      </div>
      <div>
        <span>Date de naissance</span>
        <input type="date" name="birthdate" value={props.birthdate} />
      </div>
      <div>
        <span>Adresse</span>
        <input name="address" value={props.address} />
      </div>
      <div>
        <span>Ville</span>
        <input name="city" value={props.city} />
      </div>
      <div>
        <span>Pays</span>
        <input name="country" value={props.country} />
      </div>
      <div>
        <span>Code postal</span>
        <input name="zipCode" value={props.zipCode} />
      </div>
    </div>
  );
}
