import { Component } from "@angular/core";

import { EntityViewComponent } from "../../view/entity/entity-view.component";
import { ExperienceService } from "../../../service/experience.service";

@Component({
    selector: "app-experiences-page-component",
    templateUrl: "./experiences-page.component.html",
    imports: [EntityViewComponent]
})
export class ExperiencesPageComponent {
    baseServiceType = ExperienceService;
}