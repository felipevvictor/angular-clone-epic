import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CardComponent } from './componentes/card/card.component';
import { MenuBarComponent } from './componentes/menu-bar/menu-bar.component';
import { CardLabelComponent } from './componentes/card/card-label/card-label.component';
import { CardPricingComponent } from './componentes/card/card-pricing/card-pricing.component';
import { BigCardComponent } from './componentes/big-card/big-card.component';
import { BigCardLabelComponent } from './componentes/big-card/big-card-label/big-card-label.component';
import { BigCardPricingComponent } from './componentes/big-card/big-card-pricing/big-card-pricing.component';
import { NavBarComponent } from './componentes/nav-bar/nav-bar.component';
import { ExtremeCardComponent } from './componentes/extreme-card/extreme-card.component';
import { ExtremeCardLabelComponent } from './componentes/extreme-card/extreme-card-label/extreme-card-label.component';
import { ExtremeCardPricingComponent } from './componentes/extreme-card/extreme-card-pricing/extreme-card-pricing.component';
import { SmallCardComponent } from './componentes/small-card/small-card.component';
import { SmallCardLabelComponent } from './componentes/small-card/small-card-label/small-card-label.component';
import { TituloComponent } from './componentes/titulo/titulo.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardComponent,
    MenuBarComponent,
    CardLabelComponent,
    CardPricingComponent,
    BigCardComponent,
    BigCardLabelComponent,
    BigCardPricingComponent,
    NavBarComponent,
    ExtremeCardComponent,
    ExtremeCardLabelComponent,
    ExtremeCardPricingComponent,
    SmallCardComponent,
    SmallCardLabelComponent,
    TituloComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
