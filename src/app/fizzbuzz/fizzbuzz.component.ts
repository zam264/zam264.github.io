import { Component, Input, EventEmitter, Output } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
    selector: 'app-fizzbuzz',
    templateUrl: './fizzbuzz.component.html',
    styleUrls: ['./fizzbuzz.component.scss']
})
export class FizzbuzzComponent {
    fizzbuzznumber = 30
    fizzbuzzoutput = ""

    fizzbuzz() {
        this.fizzbuzzoutput = ""
        for (var i = 1; i <= this.fizzbuzznumber; i++) {
            if (i % 15 == 0) {
                this.fizzbuzzoutput += `${i} FizzBuzz\n`;
            }
            else if (i % 3 == 0) {
                this.fizzbuzzoutput += `${i} Fizz\n`;
            }
            else if (i % 5 == 0) {
                this.fizzbuzzoutput += `${i} Buzz\n`;
            }
            else {
                this.fizzbuzzoutput += `${i}\n`;
            }
        }
    }
}
