import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import 'rxjs/add/operator/toPromise';

import { ShopHelper } from "./shop.helper";

@Injectable()
export class ShopService {

  constructor(private http: Http) {
  }
  
  getPerId():Promise<any> {
    return this.http
        .get(ShopHelper.getPerId())
        .map(res => res.json())
        .toPromise();
  }

  getProfiles(param):Promise<any> {
    return this.http
        .get(ShopHelper.getShopId(param))
        .map(res => res.json())
        .toPromise();
  }

  setShopId(perId, selectedShopId):Promise<any> {
    return this.http
        .post(ShopHelper.setShopId(perId, selectedShopId), {})
        .toPromise();
  }

  session():Promise<any> {
    return this.http
        .post(ShopHelper.session(), {})
        .toPromise();
  }
}
