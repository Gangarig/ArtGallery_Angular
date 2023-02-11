import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ImgZoominComponent } from './components/img-zoomin/img-zoomin.component';
import { ArtistComponent } from './components/artist/artist.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [
  {path:'',component:HomePageComponent},
  {path:'gallery',component:GalleryComponent},
  {path:'imgzoomin/:i',component:ImgZoominComponent},
  {path:'artist',component:ArtistComponent},
  {path:'footer',component:FooterComponent},
  {path:'navbar',component:NavbarComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:NavbarComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
