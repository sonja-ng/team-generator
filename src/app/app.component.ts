import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  newMemberName = "";
  members: string[] = [];
  errorMessage = "";
 
  addMember(){
    if (!this.newMemberName){
      this.errorMessage = 'Name cannot be empty';
      return;
    }
    this.members.push(this.newMemberName)
    this.newMemberName = "";
    this.errorMessage = "";
  }
  onInput(member: string){
    this.newMemberName = member;
  }
}
