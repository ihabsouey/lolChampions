import { Component, OnInit } from '@angular/core';
import { ChampionsService } from '../../services/champions.service';
import { ColDef } from 'ag-grid-community';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';

interface IRow {
  name: string;
  title: string;
  title2: string;
}

@Component({
  selector: 'app-champions-list',
  templateUrl: './champions-list.component.html',
  styleUrl: './champions-list.component.css',
})
export class ChampionsListComponent implements OnInit {
  champions: any[] = [];
  championsData: any[] = []; // The transformed data for AG-Grid

  constructor(private championService: ChampionsService) {}

  ngOnInit(): void {
    this.getChampions();
  }

  getChampions(): void {
    this.championService.getChampions().subscribe(
      (champions) => {
        this.champions = champions;
        this.championsData = this.champions.map((champion) => ({
          name: champion.name,
          title: champion.title,
        }));
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
  colDefs: ColDef<IRow>[] = [
    { field: 'name' },
    { field: 'title' },
    {
      headerName: 'Actions',
      cellRenderer: 'deleteButtonRenderer', // Custom renderer for the delete button
      width: 100, // Adjust the width as needed
    },
  ];
}
