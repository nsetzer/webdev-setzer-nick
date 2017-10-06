import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistNewComponent } from './playlist-new.component';

describe('PlaylistNewComponent', () => {
  let component: PlaylistNewComponent;
  let fixture: ComponentFixture<PlaylistNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaylistNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaylistNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
