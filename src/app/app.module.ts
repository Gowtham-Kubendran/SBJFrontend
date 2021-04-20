import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { TopsellingComponent, TopSellingDialog } from './components/topselling/topselling.component';
import { ProductsComponent, DialogDataExampleDialog } from './components/products/products.component';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModuleModule } from '../app/material-module/material-module.module';
import { GoldSchemesComponent } from './components/gold-schemes/gold-schemes.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { ContactusComponent } from './components/contactus/contactus.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { CollectionsComponent, DialogDataExample } from './components/collections/collections.component';

// import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { TalktousComponent } from './components/talktous/talktous.component';
import { TodaysrateComponent } from './components/todaysrate/todaysrate.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SetPricesComponent } from './components/set-prices/set-prices.component';
import { MatMenuModule } from '@angular/material/menu';
import { NoRightClickDirective } from './no-right-click.directive';

// import { Location, PathLocationStrategy} from '@angular/common';



@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    TopsellingComponent,
    ProductsComponent,
    DialogDataExampleDialog,
    TopSellingDialog,
    DialogDataExample,
    GoldSchemesComponent,
    ContactusComponent,
    AboutusComponent,
    CollectionsComponent,
    TalktousComponent,
    TodaysrateComponent,
    SetPricesComponent,
    NoRightClickDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatMenuModule,
    MaterialModuleModule,
    SlickCarouselModule,
    FlexLayoutModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [DialogDataExampleDialog,DialogDataExample,TopSellingDialog]
})
export class AppModule { }
