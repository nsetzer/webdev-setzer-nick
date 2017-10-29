import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetListTextComponent } from './widget-list-text.component';

describe('WidgetListTextComponent', () => {
  let component: WidgetListTextComponent;
  let fixture: ComponentFixture<WidgetListTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetListTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetListTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
