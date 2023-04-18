import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DeliveryComponent } from './components/delivery/delivery.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, DeliveryComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
