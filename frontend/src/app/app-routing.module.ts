import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { FrontpageComponent } from './components/frontpage/frontpage.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";
import { AddCanvaComponent } from "./components/add-canva/add-canva.component"
import { UpdateCanvaComponent } from "./components/update-canva/update-canva.component";

import { AuthGuard } from "./auth.guard";

const routes: Routes = [
  {path: '', component: FrontpageComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'gallery', component: GalleryComponent},
  {path: 'add-canva', component: AddCanvaComponent, canActivate: [AuthGuard]},
  {path: 'add-canva/edit/:_id', component: AddCanvaComponent, canActivate: [AuthGuard]},
  {path: 'update-canva', component: UpdateCanvaComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [FrontpageComponent,
                                  LoginComponent,
                                  RegisterComponent,
                                  ContactComponent,
                                  GalleryComponent,
                                  AddCanvaComponent,
                                  UpdateCanvaComponent]
