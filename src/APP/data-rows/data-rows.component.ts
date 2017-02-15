import {Component, OnInit} from "@angular/core";
import {PouchDbService} from "../pouchdb/pouchdb.service";
import {ShopService} from "../services/shop.service";

@Component({
    selector: 'app-data-rows',
    templateUrl: './data-rows.component.html',
    styleUrls: ['./data-rows.component.css']
})
export class DataRowsComponent implements OnInit {

    //noinspection JSMismatchedCollectionQueryUpdate
    private rows: Array<string> = [];

    constructor(private pouchService: PouchDbService,
                private shopService: ShopService) {
    }

    ngOnInit() {
        this.pouchService
            .initDB()
            .subscribe(() => {
                this.initSessionAndReplicate();
            }, (err) => {
                console.log('pouchdb bad initialized:', err);
            });
    }

    private initSessionAndReplicate() {
        console.log('pouchdb initialized');
        this.initSession()
            .then(() => {
                console.log('proceed with replication');
                this.pouchService
                    .replicate()
                    .subscribe(changes => {
                        this.rows = changes;
                    });
            });
    }

    private initSession() {
        let perId = null;
        //noinspection TypeScriptUnresolvedVariable
        return this.shopService
            .getPerId()
            .then(response => {
                perId = response['perId'];
                return this.shopService.getProfiles(perId)
            })
            .then(profiles => this.shopService.setShopId(perId, profiles[0].delegationUnitIdentifier))
            .then(() => this.shopService.session())
            .catch(error => console.log('found error:', error));
    }
}
