import * as React from "react";
import * as common from "./common";

export class Pagination extends React.PureComponent<{
    total: number;
    current: number;
    count: number;
    jump: (page: number) => void;
}, { hovered: boolean }> {
    jumpTo(page: number) {
        this.props.jump(page);
    }

    render() {
        const list = common.getPages(this.props.current, this.props.total, this.props.count).map(page => {
            if (page.disabled) {
                return (
                    <li>
                        <span>{page.text}</span>
                    </li>
                );
            } else {
                return (
                    <li>
                        <a href="javascript:void(0)" onClick={e => this.jumpTo(page.value)}>{page.text}</a>
                    </li>
                );
            }
        });
        return (
            <ul className="pagination">
                {list}
            </ul>
        );
    }
}