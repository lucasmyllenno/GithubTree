import { NgModule } from '@angular/core';
import { CommitsTimelineComponent } from './commits-timeline/commits-timeline.component';
import { RepositoriesAccordionComponent } from './repositories-accordion/repositories-accordion.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ExtendedModule, FlexModule } from '@angular/flex-layout';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { UserInfoPanelComponent } from './user-info-panel/user-info-panel.component';
import { MatOptionModule } from '@angular/material/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';

@NgModule({
    declarations: [
        CommitsTimelineComponent,
        RepositoriesAccordionComponent,
        ToolbarComponent,
        UserInfoPanelComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        CommonModule,
        FlexModule,
        ExtendedModule,
        MatExpansionModule,
        MatFormFieldModule,
        MatIconModule,
        MatDividerModule,
        MatOptionModule,
        ReactiveFormsModule,
        MatAutocompleteModule,
        MatInputModule
    ],
    exports: [
        CommitsTimelineComponent,
        RepositoriesAccordionComponent,
        ToolbarComponent,
        UserInfoPanelComponent
    ]
})
export class ModulesModule {
}
