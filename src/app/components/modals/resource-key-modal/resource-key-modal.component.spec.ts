import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceKeyModalComponent } from './resource-key-modal.component';

describe('ResourceKeyModalComponent', () => {
  let component: ResourceKeyModalComponent;
  let fixture: ComponentFixture<ResourceKeyModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResourceKeyModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourceKeyModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
