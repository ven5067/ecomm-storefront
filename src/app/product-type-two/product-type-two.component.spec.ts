import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductTypeTwoComponent } from './product-type-two.component';

describe('ProductTypeTwoComponent', () => {
  let component: ProductTypeTwoComponent;
  let fixture: ComponentFixture<ProductTypeTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductTypeTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductTypeTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
