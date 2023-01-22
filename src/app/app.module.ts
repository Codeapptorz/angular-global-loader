import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SecondChildComponent } from './second-child/second-child.component';
import { FirstChildComponent } from './first-child/first-child.component';
import { AppRoutingModule } from './app-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppLoaderComponent } from './shared/components/app-loader/app-loader.component';

@NgModule({
  declarations: [
    AppComponent,
    AppLoaderComponent,
    SecondChildComponent,
    FirstChildComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, MatButtonModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
