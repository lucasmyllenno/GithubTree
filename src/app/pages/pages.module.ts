import { NgModule } from '@angular/core';
import { UserSearchPageComponent } from './user-search-page/user-search-page.component';
import { ProjectsInfoPageComponent } from './projects-info-page/projects-info-page.component';
import { ModulesModule } from '../modules/modules.module';
import { ExtendedModule, FlexModule } from '@angular/flex-layout';
import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
    declarations: [
        UserSearchPageComponent,
        ProjectsInfoPageComponent,
    ],
    imports: [
        ModulesModule,
        FlexModule,
        CommonModule,
        MatDividerModule,
        MatFormFieldModule,
        FormsModule,
        MatIconModule,
        MatInputModule,
        ReactiveFormsModule,
        MatButtonModule,
        ExtendedModule
    ],
    exports: [
        UserSearchPageComponent,
        ProjectsInfoPageComponent
    ]
})
export class PagesModule {
}
