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
            <Pagination total={this.total}
                current={this.current}
                count={this.count}
                jump={page => this.jump(page)}></Pagination>
        );
    }
}

ReactDOM.render(<Main />, document.getElementById("container"));

