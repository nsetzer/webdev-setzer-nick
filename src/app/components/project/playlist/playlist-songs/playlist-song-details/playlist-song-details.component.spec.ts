import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistSongDetailsComponent } from './playlist-song-details.component';

describe('PlaylistSongDetailsComponent', () => {
  let component: PlaylistSongDetailsComponent;
  let fixture: ComponentFixture<PlaylistSongDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaylistSongDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaylistSongDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
