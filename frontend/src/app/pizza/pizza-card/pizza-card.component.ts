import { style } from "@angular/animations";
import { Component } from "@angular/core";

@Component({
  selector:'app-pizza-card',
  templateUrl:'pizza-card.component.html',
  styleUrls:['pizza-card.component.css']

})
export class PizzaCardComponent{
  property:any={
    "Id":1,
    "Type":"pizza",
    "Price":250
  }

}
