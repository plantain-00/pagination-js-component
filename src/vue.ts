import * as Vue from "vue";
import Component from "vue-class-component";
import { Page } from "./common";
import { srcVueTemplateHtml } from "./vue-variables";

@Component({
    template: srcVueTemplateHtml,
    props: ["total", "current", "count"],
})
class Pagination extends Vue {
    total: number;
    current: number;
    count: number;

    get pages() {
        const pages: Page[] = [];
        pages.push({
            value: 1,
            disabled: this.current === 1,
            text: "«",
        });
        pages.push({
            value: this.current === 1 ? 1 : this.current - 1,
            disabled: this.current === 1,
            text: "‹",
        });
        for (let i = 1; i <= this.total; i++) {
            if (i - this.current <= this.count && i - this.current >= -this.count) {
                pages.push({
                    value: i,
                    disabled: i === this.current,
                    text: i.toString(),
                });
            }
        }
        pages.push({
            value: this.current === this.total ? this.total : this.current + 1,
            disabled: this.current === this.total,
            text: "›",
        });
        pages.push({
            value: this.total,
            disabled: this.current === this.total,
            text: "»",
        });
        return pages;
    }

    jumpTo(value: number) {
        this.$emit("jump", value);
    }
}

Vue.component("pagination", Pagination);
