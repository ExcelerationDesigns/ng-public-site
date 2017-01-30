import { Injectable } from '@angular/core';

import { AngularFire, FirebaseObjectObservable } from 'angularfire2';
import { ConstService } from '../utility/const.service';

export interface AddressInfo {
  address: string;
  city: string;
  state: string;
  zip: number;
  dateCreated?: {};
  dateModified?: {};
}

@Injectable()
export class AddressService {

  public addressObj$: FirebaseObjectObservable<AddressInfo>;

  constructor(private af: AngularFire,
              private constService: ConstService) {

    this.addressObj$ = af.database.object(this.constService.addressRoute);

  }

  createAddress(address: AddressInfo): firebase.Promise<void> {
    // address.dateCreated = firebase.database['ServerValue']['TIMESTAMP'];
    // address.dateModified = firebase.database['ServerValue']['TIMESTAMP'];
    return this.addressObj$.set(address);
  }

  updateAddress(changes: AddressInfo): firebase.Promise<void> {
    changes.dateModified = firebase.database['ServerValue']['TIMESTAMP'];
    return this.af.database.object(this.constService.addressRoute).update(changes);
  }

  getAddress(): FirebaseObjectObservable<AddressInfo> {
    return this.af.database.object(this.constService.addressRoute);
  }

}
