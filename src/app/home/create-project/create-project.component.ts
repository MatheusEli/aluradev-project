import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-create-project',
    templateUrl: './create-project.component.html'
})

export class CreateProjectComponent implements OnInit {

    color = '#6BD1FF';

    onColorChange(event): void {
        document.getElementById('code-box').style.backgroundColor = event.target.value;
    }

    ngOnInit(): void {
        document.getElementById("create-project-option").style.opacity = "1";
        document.getElementById("list-project-option").style.opacity = ".16";
    }
}