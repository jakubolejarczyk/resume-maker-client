import { Component } from "@angular/core";

import { DomainViewComponent } from "../../view/domain/domain-view.component";
import { ResumeService } from "../../../service/resume.service";

@Component({
    selector: "app-resumes-page-component",
    templateUrl: "./resumes-page.component.html",
    imports: [DomainViewComponent]
})
export class ResumesPageComponent {
    baseServiceType = ResumeService;
}