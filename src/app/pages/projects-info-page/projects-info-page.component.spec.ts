import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsInfoPageComponent } from './projects-info-page.component';

describe('ProjectsInfoPageComponent', () => {
    let component: ProjectsInfoPageComponent;
    let fixture: ComponentFixture<ProjectsInfoPageComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ProjectsInfoPageComponent]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ProjectsInfoPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
