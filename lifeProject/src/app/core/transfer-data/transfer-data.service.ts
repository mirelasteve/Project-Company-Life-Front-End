import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class TransferJobAdsService {

  public transferredObject: object;

  public insertData(data: object): void {
    this.transferredObject = data;
  }
}
