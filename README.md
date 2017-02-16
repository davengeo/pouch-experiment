# PouchExperiment

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.24.

## Objective

This is a small experiment about the replication mechanism between pouchdb and couchbase sync-gateway
It needs as backend running in the same machine

* the small middleware in https://github.com/davengeo/middle-patch
* The couchbase sync-gateway https://github.com/couchbase/sync_gateway

	It shows than the pouchdb replication.from mechanism behaves suboptimal by using direct protocol with the sync-gateway.
 This is due the lack of support of sync-gateway for 'application/json'. They use instead 'multipart/mixed'.
 When an agent in the middle makes the translation then is remarkable the gain in performance.. 
 I have added some screenshots in the /screenshots folder to illustrate that.  

## Build

For the front-end part

```bash
ng build --output-path dist/experiment --bh http://localhost:4010/experiment/ -w
```

For the middle-path middleware

```bash
npm start
```

For the sync gateway (compiled in windows)

```bash 
./sync_gateway.exe sync_gateway.json
```


