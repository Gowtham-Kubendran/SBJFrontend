import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ProductsComponent } from './components/products/products.component';
import { GoldSchemesComponent } from './components/gold-schemes/gold-schemes.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { CollectionsComponent } from './components/collections/collections.component';
import { SetPricesComponent } from './components/set-prices/set-prices.component';


  const routes: Routes = [
  
    {
      path: '', redirectTo: '/home', pathMatch: 'full'
    },
    {
      path: 'home',
      component: HomeComponent
    },
    {
      path: 'products/:metal',
      component:ProductsComponent
    },
    {
      path:'goldschemes',
      component:GoldSchemesComponent
    }, 
    {
      path:'contactus',
      component:ContactusComponent
    }, 
    {
      path:'aboutus',
      component:AboutusComponent
    },
    {
      path: 'collections',
      component:CollectionsComponent
    },
    {
      path: 'setprices',
      component: SetPricesComponent
    },
    {
      path: "**",
      component: PageNotFoundComponent
    },
    
    
  ];
  


@NgModule({
  imports: [RouterModule.forRoot(routes,{
    onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
