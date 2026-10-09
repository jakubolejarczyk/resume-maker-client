import { Component } from "@angular/core";

import { EntityViewComponent } from "../../view/entity/entity-view.component";
import { EducationService } from "../../../service/education.service";

@Component({
    selector: "educations-page-component",
    templateUrl: "./educations-page.component.html",
    imports: [EntityViewComponent]
})
export class EducationsPageComponent {
    baseServiceType = EducationService;
}