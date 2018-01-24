import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivitiesLogsComponent } from './activities-logs.component';

describe('ActivitiesLogsComponent', () => {
  let component: ActivitiesLogsComponent;
  let fixture: ComponentFixture<ActivitiesLogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivitiesLogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivitiesLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
