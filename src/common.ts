export type Page = {
    value: number;
    disabled: boolean;
    text: string;
};

export function getPages(current: number, total: number, count: number) {
    const pages: Page[] = [];
    pages.push({
        value: 1,
        disabled: current === 1,
        text: "«",
    });
    pages.push({
        value: current === 1 ? 1 : current - 1,
        disabled: current === 1,
        text: "‹",
    });
    for (let i = 1; i <= total; i++) {
        if (i - current <= count && i - current >= -count) {
            pages.push({
                value: i,
                disabled: i === current,
                text: i.toString(),
            });
        }
    }
    pages.push({
        value: current === total ? total : current + 1,
        disabled: current === total,
        text: "›",
    });
    pages.push({
        value: total,
        disabled: current === total,
        text: "»",
    });
    return pages;
}
