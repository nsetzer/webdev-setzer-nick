import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetListHtmlComponent } from './widget-list-html.component';

describe('WidgetListHtmlComponent', () => {
  let component: WidgetListHtmlComponent;
  let fixture: ComponentFixture<WidgetListHtmlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetListHtmlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetListHtmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
