import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { PaginationModule } from "../../dist/aot/angular";
import { MainComponent } from "./main";

@NgModule({
    imports: [BrowserModule, FormsModule, PaginationModule],
    declarations: [MainComponent],
    bootstrap: [MainComponent],
})
export class MainModule { }
