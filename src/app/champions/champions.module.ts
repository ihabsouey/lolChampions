import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChampionsListComponent } from './champions-list/champions-list.component';

@NgModule({
  declarations: [ChampionsListComponent],
  imports: [CommonModule],
  exports: [ChampionsListComponent],
})
export class ChampionsModule {}
