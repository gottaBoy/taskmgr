import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { NewProjectComponent } from '../new-project/new-project.component';
import { InviteComponent } from "../invite/invite.component";
@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {

  projects = [
    {
      "name":"项目名称1",
      "desc":"项目描述1",
      "coverImg":"assets/img/covers/0.jpg"
    },
    {
      "name":"自动化测试项目",
      "desc":"这是一个企业内部的项目",
      "coverImg":"assets/img/covers/1.jpg"
    }
  ];

  constructor(private dialog:MatDialog) { }

  ngOnInit() {
  }
  openNewProjectDialog(){
    const dialogRef = this.dialog.open(NewProjectComponent,{data:{dark:true}});
    dialogRef.afterClosed().subscribe(result => console.log(result));
  }

  launchInviteDialog(){
    const dialogRef = this.dialog.open(InviteComponent);
  }
}