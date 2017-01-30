import { Component, OnInit, OnDestroy } from '@angular/core';
// import { Observable } from 'rxjs/Observable';

import { AddressService, AddressInfo } from './../../../core/database/address.service';

@Component({
  selector: 'app-details',
  styleUrls: ['./details.component.scss'],
  templateUrl: './details.component.html'
})
export class DetailsComponent implements OnInit, OnDestroy {

  public addressInfo: AddressInfo = {
    address: '',
    city: '',
    state: '',
    zip: 0
  };

  // private info: AddressInfo;

  constructor(public addressService: AddressService) { }

  ngOnInit() {
    /*this.addressInfo = this.addressService.addressObj$;
    this.addressInfo.subscribe((val) => {
      this.info = val;
    });*/
  }

  ngOnDestroy() {
  }

  updateAddress() {
    this.addressService.createAddress(this.addressInfo);
  }

}
