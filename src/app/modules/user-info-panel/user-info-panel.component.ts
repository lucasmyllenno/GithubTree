import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-info-panel',
  templateUrl: './user-info-panel.component.html',
  styleUrls: ['./user-info-panel.component.scss']
})
export class UserInfoPanelComponent implements OnInit {

  @Input() publicRepos: number | null | undefined;
  @Input() publicGists: number | null | undefined;
  @Input() followers: number | null | undefined;
  @Input() following: number | null | undefined;

  constructor() { }

  ngOnInit(): void {
  }
}
