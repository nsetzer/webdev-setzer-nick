import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistSearchSongDetailsComponent } from './playlist-search-song-details.component';

describe('PlaylistSearchSongDetailsComponent', () => {
  let component: PlaylistSearchSongDetailsComponent;
  let fixture: ComponentFixture<PlaylistSearchSongDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaylistSearchSongDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaylistSearchSongDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
