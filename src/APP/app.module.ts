import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";

import {AppComponent} from "./app.component";
import {DataRowsComponent} from "./data-rows/data-rows.component";
import {PouchDbService} from "./pouchdb/pouchdb.service";
import {RouterModule, Routes} from "@angular/router";


const appRoutes: Routes = [
    {path: '', component: DataRowsComponent},
];

@NgModule({
    declarations: [
        AppComponent,
        DataRowsComponent
    ],
    imports: [
        RouterModule.forRoot(appRoutes),
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    providers: [
        PouchDbService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
