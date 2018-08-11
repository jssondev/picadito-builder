import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule, ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
