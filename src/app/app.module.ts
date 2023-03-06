import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ImgZoominComponent } from './components/img-zoomin/img-zoomin.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeMNComponent } from './mongolian/home-mn/home-mn.component';
import { AboutMNComponent } from './mongolian/about-mn/about-mn.component';
import { NavbarMNComponent } from './mongolian/navbar-mn/navbar-mn.component';
import { FooterMNComponent } from './mongolian/footer-mn/footer-mn.component';
import { GalleryMNComponent } from './mongolian/gallery-mn/gallery-mn.component';
import { ImgZoominMNComponent } from './mongolian/img-zoomin-mn/img-zoomin-mn.component';
import { HomeGerComponent } from './german/home-ger/home-ger.component';
import { NavbarGerComponent } from './german/navbar-ger/navbar-ger.component';
import { FooterGerComponent } from './german/footer-ger/footer-ger.component';
import { AboutGerComponent } from './german/about-ger/about-ger.component';
import { ImgZoominGerComponent } from './german/img-zoomin-ger/img-zoomin-ger.component';
import { GalleryGerComponent } from './german/gallery-ger/gallery-ger.component';
import { ContactGerComponent } from './german/contact-ger/contact-ger.component';
import { ContactMNComponent } from './mongolian/contact-mn/contact-mn.component';
import { FormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './components/contact/page-not-found/page-not-found.component';
import { SuccessComponent } from './components/contact/success/success.component';
import { FeedbackComponent } from './components/contact/feedback/feedback.component';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    GalleryComponent,
    ImgZoominComponent,
    FooterComponent,
    NavbarComponent,
    AboutComponent,
    ContactComponent,
    HomeMNComponent,
    AboutMNComponent,
    NavbarMNComponent,
    FooterMNComponent,
    GalleryMNComponent,
    HomeGerComponent,
    NavbarGerComponent,
    FooterGerComponent,
    AboutGerComponent,
    ImgZoominGerComponent,
    ImgZoominMNComponent,
    GalleryGerComponent,
    ContactGerComponent,
    ContactMNComponent,
    PageNotFoundComponent,
    SuccessComponent,
    FeedbackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
