import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeavyLoadersSlowComponent } from '@shared/heavy-loaders/heavy-loaders-slow.component';
import { TitleComponent } from "../../../shared/title/title.component";

@Component({
    standalone: true,
    templateUrl: './defer-views.component.html',
    styles: ``,
    imports: [CommonModule, HeavyLoadersSlowComponent, TitleComponent]
})
export default class DeferViewsComponent {

}
