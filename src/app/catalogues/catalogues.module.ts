import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { RouterModule } from '@angular/router';
import { FridgebrandComponent } from './fridgebrand/fridgebrand.component';


@NgModule({
    imports:[
        CommonModule,
        RouterModule.forChild([
            { path: 'fridgebrand', component: FridgebrandComponent}
        ])
    ],
    declarations: [FridgebrandComponent]
})
export class CataloguesModule {}