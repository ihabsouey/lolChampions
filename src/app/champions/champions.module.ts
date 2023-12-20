import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChampionsListComponent } from './champions-list/champions-list.component';
import { AgGridModule } from 'ag-grid-angular';

@NgModule({
  declarations: [ChampionsListComponent],
  imports: [CommonModule, AgGridModule],
  exports: [ChampionsListComponent],
})
export class ChampionsModule {}
