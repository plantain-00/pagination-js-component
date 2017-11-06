import { Component, Input, Output, EventEmitter, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import * as common from "./common";
export * from "./common";
import { angularTemplateHtml } from "./angular-variables";

/**
 * @public
 */
@Component({
    selector: "pagination",
    template: angularTemplateHtml,
})
export class PaginationComponent {
    @Input()
    total: number;
    @Input()
    current: number;
    @Input()
    count: number;
    @Input()
    mode?: number;

    @Output()
    jump = new EventEmitter<number>();

    get pages() {
        return common.getPages(this.current, this.total, this.count, this.mode);
    }

    jumpTo(page: number) {
        this.jump.emit(page);
    }

    trackBy(page: common.Page, index: number) {
        return index;
    }
}

/**
 * @public
 */
@NgModule({
    declarations: [
        PaginationComponent,
    ],
    imports: [
        CommonModule,
    ],
    exports: [
        PaginationComponent,
    ],
})
export class PaginationModule { }
