import { Component } from "@angular/core";

import { EntityViewComponent } from "../../view/entity/entity-view.component";
import { SkillService } from "../../../service/skill.service";

@Component({
    selector: "app-skills-page-component",
    templateUrl: "./skills-page.component.html",
    imports: [EntityViewComponent]
})
export class SkillsPageComponent {
    baseServiceType = SkillService;
}