import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-product-type-two',
  templateUrl: './product-type-two.component.html',
  styleUrls: ['./product-type-two.component.scss']
})
export class ProductTypeTwoComponent implements OnInit {

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
