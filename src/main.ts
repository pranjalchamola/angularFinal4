import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule).then(() => {
  console.log('here')
  if ('serviceWorker' in navigator) {
  console.log('here123')

    navigator.serviceWorker.register('ngsw-worker.js');
  }}).catch(err => console.log("Error: ",err));
