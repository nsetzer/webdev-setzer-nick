import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationComposeComponent } from './notification-compose.component';

describe('NotificationComposeComponent', () => {
  let component: NotificationComposeComponent;
  let fixture: ComponentFixture<NotificationComposeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificationComposeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationComposeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
