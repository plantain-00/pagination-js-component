import * as Vue from "vue";
import "../../dist/vue";

/* tslint:disable:no-unused-expression */
new Vue({
    el: "#container",
    data: {
        total: 10,
        current: 1,
        count: 2,
    },
    methods: {
        jump(this: This, page: number) {
            this.current = page;
        },
    },
});
/* tslint:enable:no-unused-expression */

type This = {
    total: number;
    current: number;
    count: number;
} & Vue;
