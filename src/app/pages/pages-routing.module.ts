import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StrategyComponent } from './strategy/strategy.component';
import { QuantComponent } from './quant/quant.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { OurworkComponent } from './ourwork/ourwork.component'; 
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
const routes: Routes = [
  { path: '', loadChildren: './home/home.module#HomeModule' },
  { path: 'strategy', component: StrategyComponent },
  { path: 'quant', component: QuantComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'ourwork', component: OurworkComponent },
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule] 
})

export class PagesRoutingModule { }
