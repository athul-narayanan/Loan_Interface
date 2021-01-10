import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HalfCirclDottedComponent } from './half-circl-dotted/half-circl-dotted.component';
import { DotsComponent } from './dots/dots.component';
import { LoadFeatureComponent } from './load-feature/load-feature.component';
import { AvailLoanComponent } from './avail-loan/avail-loan.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from 'src/environments/environment';
import { LoanFeaturesService } from './../app/loan-features.service';
import { LoanStepsComponent } from './loan-steps/loan-steps.component';
import { EligibilityCalculatorComponent } from './eligibility-calculator/eligibility-calculator.component';
import { LoadDetailsComponent } from './load-details/load-details.component';
import { ApplyLoanComponent } from './apply-loan/apply-loan.component';
import {MatSliderModule} from '@angular/material/slider';
import { MatSliderComponent } from './mat-slider/mat-slider.component';
import { FormsModule} from '@angular/forms'
import {MatSelectModule} from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatInputModule} from '@angular/material/input';
import { ProceedLoanComponent } from './proceed-loan/proceed-loan.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HalfCirclDottedComponent,
    DotsComponent,
    LoadFeatureComponent,
    AvailLoanComponent,
    LoanStepsComponent,
    EligibilityCalculatorComponent,
    LoadDetailsComponent,
    ApplyLoanComponent,
    MatSliderComponent,
    ProceedLoanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    MatSliderModule,
    FormsModule,
    MatSelectModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatInputModule
  ],
  providers: [LoanFeaturesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
