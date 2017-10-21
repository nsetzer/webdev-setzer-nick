import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetListYoutubeComponent } from './widget-list-youtube.component';

describe('WidgetListYoutubeComponent', () => {
  let component: WidgetListYoutubeComponent;
  let fixture: ComponentFixture<WidgetListYoutubeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetListYoutubeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetListYoutubeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
