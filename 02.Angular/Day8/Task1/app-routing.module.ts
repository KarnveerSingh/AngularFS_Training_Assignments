import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { CategoryComponent } from './category/category.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

const routes: Routes = [
  {path : '' , component:HomeComponent},
  {path : 'category' , component:CategoryComponent},
  {path : 'about-us' , component:AboutUsComponent},
  {path : 'contact-us' , component:ContactComponent},
  {path : "login" , component:LoginComponent},
  {path : "details/:id" , component:ProductDetailComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
