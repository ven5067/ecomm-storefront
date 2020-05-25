import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-product-type-one',
  templateUrl: './product-type-one.component.html',
  styleUrls: ['./product-type-one.component.scss']
})
export class ProductTypeOneComponent implements OnInit {

  @Input() product: any;
  @Input() productForm: FormGroup;
  customFields: FormArray;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    console.log('product', this.product);
    this.customFields = this.productForm.get('customFields') as FormArray;
    this.product.customFields.forEach(field => {
      this.customFields.push(this.addCustomFieldForm(field));
    });
  }

  addCustomFieldForm(field) {
    return this.formBuilder.group({
      field: field.fieldName,
      value: ''
    });
  }

}
