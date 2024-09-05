import { CommonModule } from '@angular/common';
import { Component, Input} from '@angular/core';
import { DetailproduitComponent } from "../detailproduit/detailproduit.component";
import { Produit } from '../../models/produit.model';



@Component({
  selector: 'app-create-produit',
  standalone: true,
  imports: [CommonModule, DetailproduitComponent],
  templateUrl: './create-produit.component.html',
  styleUrl: './create-produit.component.css'
})
export class CreateProduitComponent {

produits : Produit[] = [
      {
        id:1,
        name: "Tee-Shirt",
        description: "Ceci est une description du tee-shirt",
        prix: 20,
        imageUrl: "assets/images/tee-shirt.jpg"
      },
      {
        id:2,
        name: "Jeans",
        description: "Ceci est une description du jeans",
        prix:40,
        imageUrl: "assets/images/jeans.jpg"
      },
      {
        id:3,
        name: "Chaussures",
        description: "Ceci est une description des chaussures",
        prix:60,
        imageUrl: "assets/images/pair-trainers.jpg"
      }
    ];


    // Ajoute ici d'autres méthodes si tu veux ajouter ou modifier les produits

    produitSelectionne: Produit | null = null;

    afficherDetails(produit: Produit) {
      this.produitSelectionne = produit; // Affiche les détails du produit sélectionné
    }

    fermerDetails() {
      this.produitSelectionne = null; // Réinitialise le produit sélectionné
    }

}
