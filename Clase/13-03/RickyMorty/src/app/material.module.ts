import { NgModule } from "@angular/core";
import {MatMenuModule} from "@angular/material/menu"
import {MatButtonModule} from "@angular/material/button"
import {MatTableModule} from "@angular/material/table"
import {MatPaginatorModule} from "@angular/material/paginator"
import {MatCardModule}from "@angular/material/card"
import { MatFormFieldModule } from "@angular/material/form-field";




const myListModuleMaterial =[ MatMenuModule,MatButtonModule,MatTableModule,
    MatPaginatorModule,MatCardModule,MatFormFieldModule




]

@NgModule({
imports: [...myListModuleMaterial],
exports: [...myListModuleMaterial]


})


export class MaterialModule{}