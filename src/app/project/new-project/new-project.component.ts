import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
//OverlayContainer
@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.scss']
})
export class NewProjectComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) private data,
    private dialogRef:MatDialogRef<NewProjectComponent>
    // private dc:MatDrawerContainer
  ) { }

  ngOnInit() {
    console.log(JSON.stringify(this.data));
    // this.dc.themClass = this.data.dark ? 'myapp-dark-theme' : null;
  }

  onClick(){
     this.dialogRef.close('I received your message'); 
  }

}
