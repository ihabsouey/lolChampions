import { Component, OnInit } from '@angular/core';
import { ChampionsService } from '../../services/champions.service';
import { ColDef, GridApi, GridReadyEvent } from 'ag-grid-community';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';
import { FormBuilder, FormGroup } from '@angular/forms';

interface IRow {
  name: string;
  title: string;
}

@Component({
  selector: 'app-champions-list',
  templateUrl: './champions-list.component.html',
  styleUrl: './champions-list.component.css',
})
export class ChampionsListComponent implements OnInit {
  champions: any[] = [];
  championsData: any[] = []; // The transformed data for AG-Grid
  private gridApi!: GridApi;

  searchForm: FormGroup = this.fb.group({
    searchQuery: [''],
  });

  constructor(
    private championService: ChampionsService,
    private fb: FormBuilder // Inject FormBuilder
  ) {}

  ngOnInit(): void {
    this.getChampions();
    this.initializeSearchForm();
  }
  initializeSearchForm(): void {
    this.searchForm = this.fb.group({
      searchQuery: [''], // Add any additional form controls as needed
    });
  }

  filterByNameOrTitle(): void {
    console.log('searchQuery:', this.searchForm.get('searchQuery')?.value);
    const searchQuery = this.searchForm.get('searchQuery')?.value.toLowerCase();

    this.championsData = this.champions
      .filter((champion) => {
        return (
          champion.name.toLowerCase().includes(searchQuery) ||
          champion.title.toLowerCase().includes(searchQuery)
        );
      })
      .map((champion) => ({
        name: champion.name,
        title: champion.title,
      }));
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
  colDefs: ColDef<IRow>[] = [{ field: 'name' }, { field: 'title' }, {}];
  onBtnEpxort() {
    const params = {
      fileName: 'champions_data',
    };
    this.gridApi.exportDataAsCsv(params);
  }
  onGridReady(params: GridReadyEvent) {
    this.gridApi = params.api;
  }
}
