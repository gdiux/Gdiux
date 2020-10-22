import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

// COMPONENTS
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProjectsComponent } from './projects/projects.component';

const routes: Routes = [

    {
        path: 'dashboard', component: PagesComponent,
        children: [
          { path: '', component: DashboardComponent },
          { path: 'projects', component: ProjectsComponent }
        ]
      },

];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [RouterModule]
})

export class PagesRoutingModule {}


