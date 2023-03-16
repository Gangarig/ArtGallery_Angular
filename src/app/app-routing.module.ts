import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { HomeGerComponent } from './german/home-ger/home-ger.component';
import { HomeMNComponent } from './mongolian/home-mn/home-mn.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { GalleryGerComponent } from './german/gallery-ger/gallery-ger.component';
import { GalleryMNComponent } from './mongolian/gallery-mn/gallery-mn.component';
import { ImgZoominComponent } from './components/img-zoomin/img-zoomin.component';
import { ImgZoominGerComponent } from './german/img-zoomin-ger/img-zoomin-ger.component';
import { ImgZoominMNComponent } from './mongolian/img-zoomin-mn/img-zoomin-mn.component';
import { FooterComponent } from './components/footer/footer.component';
import { FooterGerComponent } from './german/footer-ger/footer-ger.component';
import { FooterMNComponent } from './mongolian/footer-mn/footer-mn.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NavbarGerComponent } from './german/navbar-ger/navbar-ger.component';
import { NavbarMNComponent } from './mongolian/navbar-mn/navbar-mn.component';
import { AboutComponent } from './components/about/about.component';
import { AboutGerComponent } from './german/about-ger/about-ger.component';
import { AboutMNComponent } from './mongolian/about-mn/about-mn.component';
import { ContactComponent } from './components/contact/contact.component';
import { ContactGerComponent } from './german/contact-ger/contact-ger.component';
import { ContactMNComponent } from './mongolian/contact-mn/contact-mn.component';
import { SuccessComponent } from './components/success/success.component';
import { NgOptimizedImage } from '@angular/common';

const routes: Routes = [
  {path:'',component:HomePageComponent},
  {path:'homeGer',component:HomeGerComponent},
  {path:'homeMn',component:HomeMNComponent},
  {path:'gallery',component:GalleryComponent},
  {path:'galleryGer',component:GalleryGerComponent},
  {path:'galleryMn',component:GalleryMNComponent},
  {path:'imgzoomin/:i',component:ImgZoominComponent},
  {path:'imgzoominGer/:i',component:ImgZoominGerComponent},
  {path:'imgzoominMn/:i',component:ImgZoominMNComponent},
  {path:'footer',component:FooterComponent},
  {path:'footerGer',component:FooterGerComponent},
  {path:'footerMn',component:FooterMNComponent},
  {path:'navbar',component:NavbarComponent},
  {path:'navbarGer',component:NavbarGerComponent},
  {path:'navbarMn',component:NavbarMNComponent},
  {path:'about',component:AboutComponent},
  {path:'aboutGer',component:AboutGerComponent},
  {path:'aboutMn',component:AboutMNComponent},
  {path:'contact',component:ContactComponent},
  {path:'contactGer',component:ContactGerComponent},
  {path:'contactMn',component:ContactMNComponent},
  {path:'success',component:SuccessComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
