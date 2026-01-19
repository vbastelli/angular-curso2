import { Component, input } from '@angular/core';
import { ContaComponent } from './conta/conta.component';
import { BoasVindasComponent } from './boas-vindas/boas-vindas.component';

@Component({
  selector: 'app-banner',
  imports: [ContaComponent, BoasVindasComponent],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css',
})
export class BannerComponent {
  saldo = input.required<number>();
}
