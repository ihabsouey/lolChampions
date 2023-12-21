import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChampionsListComponent } from './champions-list/champions-list.component';
import { AgGridModule } from 'ag-grid-angular';
import { ReactiveFormsModule } from '@angular/forms'; // Import ReactiveFormsModule

@NgModule({
  declarations: [ChampionsListComponent],
  imports: [CommonModule, AgGridModule, ReactiveFormsModule],
  exports: [ChampionsListComponent],
})
export class ChampionsModule {}
