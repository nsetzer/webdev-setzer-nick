import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistSearchViewComponent } from './playlist-search-view.component';

describe('PlaylistSearchViewComponent', () => {
  let component: PlaylistSearchViewComponent;
  let fixture: ComponentFixture<PlaylistSearchViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaylistSearchViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaylistSearchViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
