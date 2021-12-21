import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-list-project',
    templateUrl: './list-project.component.html'
})

export class ListProjectComponent implements OnInit{

    ngOnInit(): void {
        document.getElementById("create-project-option").style.opacity = ".16";
        document.getElementById("list-project-option").style.opacity = "1";
    }


}