import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
@Component({
  standalone: true,
  selector: 'app-account-summary',
  templateUrl: './account-summary.component.html',
  imports: [CommonModule, MatMenuModule, MatButtonModule, MatToolbarModule],
})
export class AccountSummaryComponent {

      lastName= 'Doe';
  accounts = [
    {
      acctname: 'Checkings1',
      acctnum: '123456789',
      balance: 1000,
      status: 'Active'
    },
    {
      acctname: 'Checkings2',
      acctnum: '987654321',
      balance: 2500,
      status: 'Inactive'
    }
  ];
}
