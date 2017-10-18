import Vue from "vue";
import Component from "vue-class-component";
import "../../dist/vue";

@Component({
    template: `
    <div>
        <a href="https://github.com/plantain-00/pagination-js-component/tree/master/demo/vue/index.ts" target="_blank">the source code of the demo</a>
        <h3>default mode:</h3>
        <div class="default-mode">
            <pagination :total="total"
                :current="current1"
                :count="count"
                @jump="jump1($event)">
            </pagination>
        </div>
        <br/>
        <h3>mode 1:</h3>
        <div class="mode-1">
            <pagination :total="total"
                :current="current2"
                :count="count"
                :mode="mode1"
                @jump="jump2($event)">
            </pagination>
        </div>
    </div>
    `,
})
class App extends Vue {
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

new App({ el: "#container" });
