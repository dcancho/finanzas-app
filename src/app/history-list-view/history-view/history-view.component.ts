import { Component } from '@angular/core';
import { HistoryCardsListComponent } from '../history-cards-list/history-cards-list.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { AddInvoiceComponent } from '../../add-invoice-modal/add-invoice.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-history-view',
  standalone: true,
  imports: [
    HistoryCardsListComponent,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    AddInvoiceComponent,
    RouterModule
  ],
  templateUrl: './history-view.component.html',
  styleUrls: ['./history-view.component.css']
})
export class HistoryViewComponent {
  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(AddInvoiceComponent, {
      width: '250px',
      data: {name: 'test'}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}