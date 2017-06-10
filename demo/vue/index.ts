import * as Vue from "vue";
import Component from "vue-class-component";
import "../../dist/vue";

@Component({
    template: `
    <div>
        <a href="https://github.com/plantain-00/pagination-js-component/tree/master/demo/vue/index.ts" target="_blank">the source code of the demo</a>
        <pagination :total="total"
            :current="current"
            :count="count"
            @jump="jump($event)">
        </pagination>
    </div>
    `,
})
class App extends Vue {
    total = 10;
    current = 1;
    count = 2;

    jump(page: number) {
        this.current = page;
    }
}

// tslint:disable-next-line:no-unused-expression
new App({ el: "#container" });
