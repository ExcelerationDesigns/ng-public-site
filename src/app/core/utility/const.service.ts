import { Injectable } from '@angular/core';

@Injectable()
export class ConstService {

  //
  // Internal Routes
  //
  public readonly loginRoute: string = `/login`;

  //
  // API Routes
  //

  public readonly addressRoute: string = `/address/`;
}
