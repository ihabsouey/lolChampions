import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChampionsListComponent } from './champions-list/champions-list.component';
import { AgGridModule } from 'ag-grid-angular';
import { ReactiveFormsModule } from '@angular/forms'; // Import ReactiveFormsModule

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
@NgModule({
  declarations: [ChampionsListComponent],
  imports: [
    CommonModule,
    AgGridModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatGridListModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatDividerModule,
    MatIconModule,
  ],
  exports: [ChampionsListComponent],
})
export class ChampionsModule {}
