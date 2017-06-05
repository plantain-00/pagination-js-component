import * as React from "react";
import * as ReactDOM from "react-dom";
import { Pagination } from "../../dist/react";

class Main extends React.Component<{}, {}> {
    total = 10;
    current = 1;
    count = 2;

    jump(page: number) {
        this.current = page;
        this.setState({ current: this.current });
    }

    render() {
        return (
            <div>
                <a href="https://github.com/plantain-00/pagination-js-component/tree/master/demo/react/index.tsx" target="_blank">the source code of the demo</a>
                <Pagination total={this.total}
                    current={this.current}
                    count={this.count}
                    jump={page => this.jump(page)}>
                </Pagination>
            </div>
        );
    }
}

ReactDOM.render(<Main />, document.getElementById("container"));

