import {Component, OnInit} from "@angular/core";
import {PouchDbService} from "../pouchdb/pouchdb.service";

@Component({
    selector: 'app-data-rows',
    templateUrl: './data-rows.component.html',
    styleUrls: ['./data-rows.component.css']
})
export class DataRowsComponent implements OnInit {

    private rows: any[] = [];

    constructor(private pouchService: PouchDbService) {
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
                        this.rows = this.rows.concat(changes);
                    });
            });
    }

    //*
    // Usually some business initialization that brings a session-id cookie from the sync-gw after a successful login
    // Obviously I have delete this one, it should return a promise.
    //*//

    //noinspection JSMethodCanBeStatic
    private initSession(): Promise<void> {
        return Promise.resolve();
    }
}
