import { Observable } from "rxjs/Rx";

export class ShopHelper {
  static getPerId(): string {
    return '/headers/groups';
  }

  static getShopId(param): string {
    return '/profiles/' + param;
  }

  static setShopId(perId, selectedShopId): string {
    return '/profiles/' + perId + '/currentShop/' + selectedShopId;
  }

  static session(): string {
    return '/session/';
  }
}
