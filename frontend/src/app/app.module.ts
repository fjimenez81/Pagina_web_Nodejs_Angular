import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from "@angular/forms";

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrontpageComponent } from './components/frontpage/frontpage.component';
import { ContactComponent } from './components/contact/contact.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';



import { AuthGuard } from "./auth.guard";
import { NgFallimgModule } from 'ng-fallimg';
import { NgxPaginationModule } from 'ngx-pagination'
import { AddCanvaComponent } from './components/add-canva/add-canva.component';
import { UpdateCanvaComponent } from './components/update-canva/update-canva.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { MatCardModule } from "@angular/material/card";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { FlexLayoutModule } from "@angular/flex-layout";
import { PayloadComponent } from './components/payload/payload.component';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    AddCanvaComponent,
    UpdateCanvaComponent,
    PayloadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgFallimgModule.forRoot({
      default: 'http://superprosamui.com/2016/wp-content/plugins/ap_background/images/default/default_1.png',
    }),
    NgxPaginationModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    FlexLayoutModule,
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
