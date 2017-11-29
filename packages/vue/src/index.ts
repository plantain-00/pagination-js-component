import Vue from "vue";
import Component from "vue-class-component";
import * as common from "pagination-js-component";
export * from "pagination-js-component";
import { indexTemplateHtml } from "./variables";

@Component({
    template: indexTemplateHtml,
    props: ["total", "current", "count", "mode"],
})
class Pagination extends Vue {
    total: number;
    current: number;
    count: number;
    mode?: number;

    get pages() {
        return common.getPages(this.current, this.total, this.count, this.mode);
    }

    jumpTo(page: number) {
        this.$emit("jump", page);
    }
}

Vue.component("pagination", Pagination);
