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
import { UpdateCanvaComponent } from './components/update-canva/update-canva.component'




@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    AddCanvaComponent,
    UpdateCanvaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgFallimgModule.forRoot({
      default: 'http://superprosamui.com/2016/wp-content/plugins/ap_background/images/default/default_large.png',
    }),
    NgxPaginationModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
