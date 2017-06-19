import Vue from "vue";
import Component from "vue-class-component";
import * as common from "./common";
import { srcVueTemplateHtml } from "./vue-variables";

@Component({
    template: srcVueTemplateHtml,
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
