import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {

  // Variables ---
  calculatorForm = new FormGroup({
    firstInput: new FormControl(''),
    secondInput: new FormControl(''),
    operator: new FormControl('')
  });

  result = 0;

  // Methods ---
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {

    // Read values of the form controls from the form group
    const firstInput = (this.calculatorForm.get('firstInput')?.value || 0) as number;
    const secondInput = (this.calculatorForm.get('secondInput')?.value || 0) as number;
    const operator = this.calculatorForm.get('operator')?.value;

    // Calculate according to the operator
    switch ( operator ) {
      case '+': {

        this.result =  firstInput + secondInput;
        break;

      }
      case '-': {

        this.result = firstInput - secondInput;
        break;

      }
      case '*': {

        this.result = firstInput * secondInput;
        break;

      }
      case '/': {

        this.result = firstInput / secondInput;
        break;

      }
      default: {

        this.result = 0;
        break;

      }
    }

  }

  onClear() {

    this.calculatorForm.get('firstInput')?.setValue(null);
    this.calculatorForm.get('secondInput')?.setValue(null);
    this.calculatorForm.get('operator')?.setValue('');
    this.result = 0;

  }

}
