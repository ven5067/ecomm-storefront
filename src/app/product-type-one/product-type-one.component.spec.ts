import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductTypeOneComponent } from './product-type-one.component';

describe('ProductTypeOneComponent', () => {
  let component: ProductTypeOneComponent;
  let fixture: ComponentFixture<ProductTypeOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductTypeOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductTypeOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
