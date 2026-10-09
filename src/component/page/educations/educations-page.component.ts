import { Component } from "@angular/core";

import { DomainViewComponent } from "../../view/domain/domain-view.component";
import { EducationService } from "../../../service/education.service";

@Component({
    selector: "app-educations-page-component",
    templateUrl: "./educations-page.component.html",
    imports: [DomainViewComponent]
})
export class EducationsPageComponent {
    baseServiceType = EducationService;
}