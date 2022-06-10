import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyCompoComponent } from './lazy-compo.component';

describe('LazyCompoComponent', () => {
  let component: LazyCompoComponent;
  let fixture: ComponentFixture<LazyCompoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LazyCompoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LazyCompoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
