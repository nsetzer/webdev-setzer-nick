import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetListHeaderComponent } from './widget-list-header.component';

describe('WidgetListHeaderComponent', () => {
  let component: WidgetListHeaderComponent;
  let fixture: ComponentFixture<WidgetListHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetListHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetListHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
