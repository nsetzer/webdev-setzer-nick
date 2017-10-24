import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistUploadComponent } from './playlist-upload.component';

describe('PlaylistUploadComponent', () => {
  let component: PlaylistUploadComponent;
  let fixture: ComponentFixture<PlaylistUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaylistUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaylistUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
