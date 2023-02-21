export class LoggingService{


    logStatusChanged(accountStatus: string){

        console.log('A server status changed, new status: ' + accountStatus);
    }
}