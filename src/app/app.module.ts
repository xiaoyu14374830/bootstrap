import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CarouselfigureComponent } from './carouselfigure/carouselfigure.component';
import { SubjectComponent } from './subject/subject.component';
import { ItemComponent } from './item/item.component';
import { StarComponent } from './star/star.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SidebarComponent,
    CarouselfigureComponent,
    SubjectComponent,
    ItemComponent,
    StarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
