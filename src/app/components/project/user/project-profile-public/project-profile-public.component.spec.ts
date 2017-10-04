import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectProfilePublicComponent } from './project-profile-public.component';

describe('ProjectProfilePublicComponent', () => {
  let component: ProjectProfilePublicComponent;
  let fixture: ComponentFixture<ProjectProfilePublicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectProfilePublicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectProfilePublicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
