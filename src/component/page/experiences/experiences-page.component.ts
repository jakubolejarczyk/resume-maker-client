import { Component } from "@angular/core";

import { DomainViewComponent } from "../../view/domain/domain-view.component";
import { ExperienceService } from "../../../service/experience.service";

@Component({
    selector: "app-experiences-page-component",
    templateUrl: "./experiences-page.component.html",
    imports: [DomainViewComponent]
})
export class ExperiencesPageComponent {
    baseServiceType = ExperienceService;
}