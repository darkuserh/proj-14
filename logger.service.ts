import { Injectable } from "@angular/core";
@Injectable()
export class LoggerService{
logMessage(name:string,status:string){
console.log('A new user with created with username ' +name+ ' with status' +status+ 'has been addeed')
}
}