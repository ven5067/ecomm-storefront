import { Component, OnInit } from '@angular/core';
import { ProductService } from '../products/product.service';
import { CartService } from './cart.service';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { ZipcodeService } from '../zipcode.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  public productForm: FormGroup;
  public product;
  public pid;
  public model: any;
  // customFields: FormArray;

  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private zipcodeService: ZipcodeService
  ) {
    this.productForm = this.formBuilder.group({
      quantity: [1, [Validators.required]],
      zipcode: ['', [Validators.required]],
      customFields: this.formBuilder.array([])
    });
  }

  ngOnInit(): void {
    this.pid = this.route.snapshot.paramMap.get('pid');
    this.product = this.productService.getProductById(this.pid);
    // this.customFields = this.productForm.get('customFields') as FormArray;
    // this.product.customFields.forEach(field => {
    //   this.customFields.push(this.addCustomFieldForm(field));
    // });
    // console.log(this.productForm.get('customFields')['controls']);
  }

  addCustomFieldForm(field) {
    return this.formBuilder.group({
      field: field.fieldName,
      value: ''
    });
  }

  onSubmit() {
    this.cartService.addItem(this.productForm.value);
    this.clearForm();
    this.router.navigate(['/products']);
  }

  clearForm() {
    this.productForm.reset();
  }

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term.length < 2 ? []
        : this.zipcodeService.autocomplete(term))
    )

  getQuantity() {
    return this.productForm.get('quantity');
  }

  getZipcode() {
    return this.productForm.get('zipcode');
  }

}
