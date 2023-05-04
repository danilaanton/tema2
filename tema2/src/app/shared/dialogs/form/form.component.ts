import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { NzModalRef } from 'ng-zorro-antd/modal';
import * as catData from 'src/app/core/models/cat';
import { CatService } from 'src/app/core/services/cat.service';
import { EyeValidator } from '../../validators/validators';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  readonly #modal = inject(NzModalRef);

  @Input() cat!: catData.Cat;

  catForm!: FormGroup;
  sexOptions = Object.values(catData.Sex);
  furPatternOptions = Object.values(catData.FurPattern);
  furColorOptions = Object.values(catData.FurColor);
  eyeOptions = Object.values(catData.Eye);
  healthOptions = Object.values(catData.Health);

  constructor(private fb: FormBuilder, private catService: CatService) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.catForm = new FormGroup({
      image: new FormControl(this.cat.image),
      name: new FormControl(this.cat.name, [
        Validators.required,
        Validators.maxLength(25),
      ]),
      breed: new FormControl(this.cat.breed, [
        Validators.required,
        Validators.maxLength(25),
      ]),
      sex: new FormControl(this.cat.sex, Validators.required),
      months: new FormControl(this.cat.months, [
        Validators.required,
        Validators.min(0),
        Validators.max(480),
      ]),
      furPattern: new FormControl(this.cat.furPattern, Validators.required),
      furColor: new FormControl(this.cat.furColor, Validators.required),
      eyes: new FormControl(this.cat.eyes, EyeValidator),
      healthStatus: new FormControl(this.cat.healthStatus),
      additionalComment: new FormControl(
        this.cat.additionalComment,
        Validators.maxLength(256)
      ),
    });
  }

  cancel(): void {
    this.#modal.triggerCancel();
  }

  submit(): void {
    this.#modal.triggerOk();
  }

  get image() {
    return this.catForm.get('image');
  }
  get name() {
    return this.catForm.get('name');
  }
  get breed() {
    return this.catForm.get('breed');
  }
  get sex() {
    return this.catForm.get('sex');
  }
  get months() {
    return this.catForm.get('months');
  }
  get furPattern() {
    return this.catForm.get('furPattern');
  }
  get furColor() {
    return this.catForm.get('furColor');
  }
  get eyes() {
    return this.catForm.get('eyes');
  }
  get healthStatus() {
    return this.catForm.get('healthStatus');
  }
  get additionalComment() {
    return this.catForm.get('additionalComment');
  }
}
