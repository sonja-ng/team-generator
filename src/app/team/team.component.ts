import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
  @Input() team: string[] = [] //variables passed in
  @Input() index = 0 //variables passed in
  constructor() { }

  ngOnInit(): void {
  }

}
