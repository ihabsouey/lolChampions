import { Component, OnInit } from '@angular/core';
import { ChampionsService } from '../../services/champions.service';

@Component({
  selector: 'app-champions-list',
  templateUrl: './champions-list.component.html',
  styleUrl: './champions-list.component.css',
})
export class ChampionsListComponent implements OnInit {
  champions: any[] = [];

  constructor(private championService: ChampionsService) {}

  ngOnInit(): void {
    this.getChampions();
  }

  getChampions(): void {
    this.championService.getChampions().subscribe(
      (champions) => {
        this.champions = champions;
        console.log('Champions chargés:', this.champions);
      },
      (error) => {
        console.error(
          "Une erreur s'est produite lors du chargement des champions:",
          error
        );
      }
    );
  }
}
