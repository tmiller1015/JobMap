import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MapComponent } from './map/map.component';
import { MapFilterContainerComponent } from './map-filter-container/map-filter-container.component';

@NgModule({
	declarations: [AppComponent, MapComponent, MapFilterContainerComponent],
	imports: [BrowserModule, ClarityModule, BrowserAnimationsModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
