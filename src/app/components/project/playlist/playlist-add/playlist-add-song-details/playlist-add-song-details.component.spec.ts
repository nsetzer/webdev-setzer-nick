import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistAddSongDetailsComponent } from './playlist-add-song-details.component';

describe('PlaylistAddSongDetailsComponent', () => {
  let component: PlaylistAddSongDetailsComponent;
  let fixture: ComponentFixture<PlaylistAddSongDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaylistAddSongDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaylistAddSongDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
