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
  numberOfTeams: number | "" = "";
  teams: string[][] = [];
 
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

  onNumberOfTeamsInput(value: string){
    this.numberOfTeams = Number(value)
  }

  generateTeams(){
    if (!this.numberOfTeams || this.numberOfTeams <= 0){
      this.errorMessage = "Invalid number of teams"
      return;
    }
    if (this.numberOfTeams > this.members.length){
      this.errorMessage = 'Not enough members';
      return;
    }
    const allMembers = [...this.members];
    this.errorMessage = "";

    while (allMembers.length > 0){
      for (let i = 0; i < this.numberOfTeams; i++){
        const randomIdx = Math.floor(Math.random() * allMembers.length)
        const member = allMembers.splice(randomIdx, 1)[0];
        if (!member) break;
        if (this.teams[i]){
          this.teams[i].push(member)
        } else {
          this.teams[i] = [member]
        }
      }
    }
    this.numberOfTeams = "";
    this.members = [];
  }
}
