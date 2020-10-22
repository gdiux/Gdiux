import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';

// MODULES
import { SharedModule } from '../shared/shared.module';

// COMPONENTSs
import { ProjectsComponent } from './projects/projects.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';



@NgModule({
  declarations: [
    ProjectsComponent,
    DashboardComponent,
    PagesComponent
  ],
  exports: [
    ProjectsComponent,
    DashboardComponent,
    PagesComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
   ]
})
export class PagesModule { }
