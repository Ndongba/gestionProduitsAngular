import { Produit } from './../../models/produit.model';
import { CommonModule } from '@angular/common';
import { Component,EventEmitter, Output, Input } from '@angular/core';


@Component({
  selector: 'app-detailproduit',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detailproduit.component.html',
  styleUrl: './detailproduit.component.css'
})
export class DetailproduitComponent {

  @Input() produit: Produit | null = null; // Le produit à afficher
  @Output() fermerDetail = new EventEmitter<void>(); // Événement pour fermer les détails

  fermer() {
    this.fermerDetail.emit(); // Émet l'événement de fermeture
  }
}
