import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserSearchPageComponent } from './pages/user-search-page/user-search-page.component';
import { ProjectsInfoPageComponent } from './pages/projects-info-page/projects-info-page.component';

const routes: Routes = [
  {
    path: 'search',
    component: UserSearchPageComponent
  },
  {
    path: 'projects/:username',
    component: ProjectsInfoPageComponent
  },
  {
    path: '**',
    redirectTo: 'search',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
