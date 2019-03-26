import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HouseComponent } from './house/house.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule, MatButtonModule, MatListModule, MatSelectModule , MatInputModule, MatExpansionModule,MatGridListModule } from '@angular/material';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

import { HouseListComponent } from './house-list/house-list.component';
import { NgxChartsModule } from "@swimlane/ngx-charts";
import { LiveGraphComponent } from './live-graph/live-graph.component';
const config: SocketIoConfig = { url: 'http://localhost:4444', options: {} };
@NgModule({
  declarations: [
    AppComponent,
    HouseComponent,
    HouseListComponent,
    LiveGraphComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule, 
    MatButtonModule,
    MatListModule,
    MatSelectModule,
    MatInputModule,
    NgxChartsModule,
    MatExpansionModule,
    MatGridListModule,
    SocketIoModule.forRoot(config)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
