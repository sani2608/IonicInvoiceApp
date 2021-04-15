import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-total',
  templateUrl: './total.page.html',
  styleUrls: ['./total.page.scss'],
})
export class TotalPage implements OnInit {
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
  {itemName:'Veal - Heart',quantity:32,uom:'Artichoke - Fresh',price:32},
  {itemName:'Green Tea Refresher',quantity:33,uom:'Flavouring - Raspberry',price:33},
  {itemName:'Lid - 10,12,16 Oz',quantity:34,uom:'Cheese - Gorgonzola',price:34},
  {itemName:'Rosemary - Fresh',quantity:35,uom:'Appetizer - Shrimp Puff',price:35},
  {itemName:'Cookie Dough - Oatmeal Rasin',quantity:36,uom:'Pineapple - Regular',price:36},
  {itemName:'Grapes - Red',quantity:37,uom:'Mustard - Individual Pkg',price:37},
  {itemName:'Cheese Cloth No 100',quantity:38,uom:'Wine - Winzer Krems Gruner',price:38},
   {itemName:'Venison - Ground',quantity:50,uom:'Arizona - Plum Green Tea',price:50},
  {itemName:'Water - Perrier',quantity:51,uom:'Seedlings - Buckwheat, Organic',price:51},
  {itemName:'Curry Paste - Green Masala',quantity:52,uom:'Soup - Campbells Bean Medley',price:52},
  {itemName:'Nut - Hazelnut, Whole',quantity:53,uom:'Mushroom - Morel Frozen',price:53},
  {itemName:'Veal - Eye Of Round',quantity:54,uom:'Chocolate Bar - Reese Pieces',price:54},
  {itemName:'Worcestershire Sauce',quantity:55,uom:'Pork - Belly Fresh',price:55},
  {itemName:'Oil - Hazelnut',quantity:56,uom:'Rosemary - Primerba, Paste',price:56},
  {itemName:'Bread Ww Cluster',quantity:57,uom:'Potato - Sweet',price:57},
  {itemName:'Bar Bran Honey Nut',quantity:58,uom:'Mushroom - Crimini',price:58},
  {itemName:'Chicken - Leg, Fresh',quantity:59,uom:'Ecolab - Solid Fusion',price:59},
  {itemName:'Cup - Translucent 7 Oz Clear',quantity:60,uom:'Compound - Mocha',price:60},
  {itemName:'Turkey - Breast, Double',quantity:61,uom:'Cleaner - Lime Away',price:61},
  {itemName:'Beef - Eye Of Round',quantity:62,uom:'Oranges - Navel, 72',price:62},
  {itemName:'Pur Source',quantity:63,uom:'Soup - Campbells - Chicken Noodle',price:63},
  {itemName:'Cheese - Feta',quantity:64,uom:'Straws - Cocktale',price:64},
  {itemName:'Butter Ripple - Phillips',quantity:65,uom:'Soup Knorr Chili With Beans',price:65},
  {itemName:'Rice - Wild',quantity:66,uom:'Wine - Hardys Bankside Shiraz',price:66},
  {itemName:'Dill - Primerba, Paste',quantity:67,uom:'Nantucket - Kiwi Berry Cktl.',price:67},
  {itemName:'Temperature Recording Station',quantity:68,uom:'Cheese - Parmigiano Reggiano',price:68},
  {itemName:'Basil - Fresh',quantity:69,uom:'Lumpfish Black',price:69},
  {itemName:'Rice - Basmati',quantity:70,uom:'Tea - Honey Green Tea',price:70},
  {itemName:'Vegetable - Base',quantity:71,uom:'Pepper - Red Bell',price:71},
  {itemName:'Pate - Liver',quantity:72,uom:'Kiwi Gold Zespri',price:72},
  {itemName:'Jack Daniels',quantity:73,uom:'Table Cloth 72x144 White',price:73},
];
  constructor() { }

  ngOnInit() {
  }


}
