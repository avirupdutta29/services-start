import { AccountsService } from './../account.service';
import { Component } from '@angular/core';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  //providers:[LoggingService]
})
export class NewAccountComponent {
  

  constructor(private loggingService: LoggingService,
    private accountsService: AccountsService){

     this.accountsService.statusUpdateEvent.subscribe(
      (status: string)=>alert('New Status: '+ status)
     );

  }

  onCreateAccount(accountName: string, accountStatus: string) {
    

    //this.loggingService.logStatusChanged(accountStatus)

    this.accountsService.addAccount(accountName,accountStatus);
  }
}
