import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from './home/home.module';
import { PagesRoutingModule } from './pages-routing.module';
import { StrategyComponent } from './strategy/strategy.component';
import { QuantComponent } from './quant/quant.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import {PortfolioCardComponent} from './portfolio/portfolioCard.component';
import { OurworkComponent } from './ourwork/ourwork.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SignInComponent } from 'src/app/component/sign-in/sign-in.component';


@NgModule({
  declarations: [ StrategyComponent, SignInComponent, QuantComponent, PortfolioComponent, PortfolioCardComponent, OurworkComponent, LoginComponent, RegisterComponent ],
  imports: [
    CommonModule, 
    HomeModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
