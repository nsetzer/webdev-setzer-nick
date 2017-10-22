import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetListImageComponent } from './widget-list-image.component';

describe('WidgetListImageComponent', () => {
  let component: WidgetListImageComponent;
  let fixture: ComponentFixture<WidgetListImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetListImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetListImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
