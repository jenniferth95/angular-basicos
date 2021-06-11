import { NgModule } from '@angular/core';
import { ContadorComponent } from './contador/contador.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        ContadorComponent,
    ],
    exports:[
        ContadorComponent,
    ],
    imports: [
        /**van los modulos a importar */
        CommonModule
    ]
})

export class contadorModule{}