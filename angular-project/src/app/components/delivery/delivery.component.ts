import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/types/data';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.scss'],
})
export class DeliveryComponent implements OnInit {
  orders: Order[] = [];
  newGoodsName: string;
  newGoodsPrice: number;

  ngOnInit(): void {}

  onSubmit() {
    if (!this.newGoodsName && this.newGoodsPrice) {
      alert('Add Goods');
      return;
    }

    const newOrder: Order = {
      name: this.newGoodsName,
      price: this.newGoodsPrice,
    };

    this.orders.push(newOrder);
  }
}
