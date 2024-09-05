import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CreateProduitComponent } from "./components/create-produit/create-produit.component";
import { DetailproduitComponent } from './components/detailproduit/detailproduit.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CreateProduitComponent, DetailproduitComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'produits';
}
