import { Component } from "@angular/core";

import { SkillService } from "../../../service/skill.service";
import { DomainViewComponent } from "../../view/domain/domain-view.component";

@Component({
    selector: "app-skills-page-component",
    templateUrl: "./skills-page.component.html",
    imports: [DomainViewComponent]
})
export class SkillsPageComponent {
    baseServiceType = SkillService;
}