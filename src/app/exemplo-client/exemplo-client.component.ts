import { Component, OnInit } from '@angular/core';
import { BitcoinService } from '../bitcoin.service';

@Component({
  selector: 'app-exemplo-client',
  templateUrl: './exemplo-client.component.html',
  styleUrls: ['./exemplo-client.component.css'],
})
export class ExemploClientComponent implements OnInit {
  constructor(public bitcoinService: BitcoinService) {}

  ngOnInit() {}

  updateBitcoinRates() {
    this.bitcoinService.update();
  }
}
