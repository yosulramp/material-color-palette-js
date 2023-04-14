import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { APP_BASE_HREF } from '@angular/common';

const MaterialComponents = [
  MatGridListModule,
  MatFormFieldModule,
  MatInputModule,
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ...MaterialComponents,
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/material-color-palette-js' },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
