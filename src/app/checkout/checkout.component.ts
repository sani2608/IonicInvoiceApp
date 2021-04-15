import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {

  @Input() name: string;
    public s = [{itemName:'Chicken - Soup Base',quantity:1,uom:'Bread - Flat Bread',price:1},
  {itemName:'Appetizer - Mini Egg Roll, Shrimp',quantity:2,uom:'Coffee - Irish Cream',price:2},
  {itemName:'Vinegar - Red Wine',quantity:3,uom:'Longos - Chicken Cordon Bleu',price:3},
  {itemName:'Sauce - Balsamic Viniagrette',quantity:4,uom:'Pepper - Julienne, Frozen',price:4},
  {itemName:'Kiwi',quantity:5,uom:'Longos - Chicken Caeser Salad',price:5},
   {itemName:'Bread - Granary Small Pull',quantity:15,uom:'Sprouts - Brussel',price:15},
  {itemName:'Pork - Shoulder',quantity:16,uom:'Heavy Duty Dust Pan',price:16},
  {itemName:'Cup - 6oz, Foam',quantity:17,uom:'Glass Clear 7 Oz Xl',price:17},
  {itemName:'Pasta - Cannelloni, Sheets, Fresh',quantity:18,uom:'Eggplant - Asian',price:18},
  {itemName:'Beef - Texas Style Burger',quantity:19,uom:'Lidsoupcont Rp12dn',price:19},
  {itemName:'Shrimp - Black Tiger 26/30',quantity:20,uom:'Beef Wellington',price:20},
  {itemName:'Lobster - Baby, Boiled',quantity:21,uom:'Meldea Green Tea Liquor',price:21},
   {itemName:'Plasticforkblack',quantity:31,uom:'Bowl 12 Oz - Showcase 92012',price:31},


];

  constructor() { }

  ngOnInit() {}
  buy() {
    console.log('buy button pressed');

  }

}
