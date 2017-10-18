import "core-js/es6";
import "core-js/es7/reflect";
import "zone.js/dist/zone";

import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { enableProdMode, Component, NgModule } from "@angular/core";

enableProdMode();

@Component({
    selector: "app",
    template: `
    <div>
        <a href="https://github.com/plantain-00/pagination-js-component/tree/master/demo/angular/index.ts" target="_blank">the source code of the demo</a>
        <h3>default mode:</h3>
        <div class="default-mode">
            <pagination [total]="total"
                [current]="current1"
                [count]="count"
                (jump)="jump1($event)">
            </pagination>
        </div>
        <br/>
        <h3>mode 1:</h3>
        <div class="mode-1">
            <pagination [total]="total"
                [current]="current2"
                [count]="count"
                [mode]="mode1"
                (jump)="jump2($event)">
            </pagination>
        </div>
    </div>
    `,
})
class MainComponent {
    total = 12;
    current1 = 1;
    count = 2;

    current2 = 1;
    mode1 = 1;

    jump1(page: number) {
        this.current1 = page;
    }
    jump2(page: number) {
        this.current2 = page;
    }
}

import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { PaginationModule } from "../../dist/angular";

@NgModule({
    imports: [BrowserModule, FormsModule, PaginationModule],
    declarations: [MainComponent],
    bootstrap: [MainComponent],
})
class MainModule { }

platformBrowserDynamic().bootstrapModule(MainModule);
