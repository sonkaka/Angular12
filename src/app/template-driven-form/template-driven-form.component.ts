import { Component, OnInit } from '@angular/core';
import { CommonService } from '../Services/common.service';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.scss'],
})
export class TemplateDrivenFormComponent implements OnInit {
  public name = '';
  constructor(private common: CommonService) {}

  ngOnInit(): void {}

  public submitForm(): void {
    console.log('submit form: name=' + this.name);
    this.common.submitData({ ten: this.name, tuoi: 20 });
  }
  public onClickSubmit(param: any): void {
    console.log('onClickSubmit: param=' + param);
  }
}
