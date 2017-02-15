import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Rx";

const PouchDB = require('pouchdb-browser');

@Injectable()
export class PouchDbService {

    db: any;
    dbRemote: string;
    private static dbName: string = 'experiment';

    constructor() {
        this.dbRemote = 'http://localhost:4010/sgw/greeter-sandbox/';
    }

    static destroyDB(): Promise<any> {
        return new PouchDB(PouchDbService.dbName).destroy();
    }

    initDB(): Observable<any> {
        return Observable.fromPromise(
            PouchDbService
                .destroyDB()
                .then(() => {
                    this.db = new PouchDB(PouchDbService.dbName, {auto_compaction: true});
                })
        );
    }

    replicate(): Observable<any> {
        return Observable.create(observer => {
            this.db.replicate.from(this.dbRemote)
                .on('change', change => {
                    console.info('changes', change);
                })
                .on('complete', complete => {
                    console.info('complete', complete);
                    observer.next();
                    observer.complete();
                })
                .on('pause', pause => {
                    console.info('pause', pause);
                })
                .on('error', error => {
                    console.info('error', error);
                    observer.error(error);
                })
                .on('active', function () {
                    console.info('active');
                })
                .on('denied', function (err) {
                    console.info('denied', err);
                })
        });
    }
}
