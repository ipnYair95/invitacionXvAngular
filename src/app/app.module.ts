import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BannerComponent } from './pages/banner/banner.component';
import { CounterComponent } from './components/counter/counter.component';
import { FotosComponent } from './pages/fotos/fotos.component';
import { FooterComponent } from './footer/footer.component';
import { SwiperModule } from 'swiper/angular';
import { StarsComponent } from './components/stars/stars.component';
import { FamilyComponent } from './pages/family/family.component';
import { CardComponent } from './components/card/card.component';
import { GifsComponent } from './pages/gifs/gifs.component';
import { GifCardComponent } from './components/gif-card/gif-card.component';
import { TitleComponent } from './components/title/title.component';
import { MapaComponent } from './pages/mapa/mapa.component';
import { SafePipe } from './pipes/safe-pipe.pipe';
import { registerLocaleData } from '@angular/common';
import localeEs from "@angular/common/locales/es";
import { HrTextComponent } from './components/hr-text/hr-text.component';

registerLocaleData(localeEs, 'es');

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BannerComponent,
    CounterComponent,
    FotosComponent,
    FooterComponent,
    StarsComponent,
    FamilyComponent,
    CardComponent,
    GifsComponent,
    GifCardComponent,
    TitleComponent,
    MapaComponent,
    SafePipe,
    HrTextComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SwiperModule
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'es'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
