import * as Vue from "vue";
import Component from "vue-class-component";
import "../../dist/vue";

@Component({
    template: `
    <pagination :total="total"
        :current="current"
        :count="count"
        @jump="jump(arguments[0])"></pagination>
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
