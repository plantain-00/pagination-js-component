export type Page = {
    value: number;
    disabled: boolean;
    text: string;
};

export function getPages(current: number, total: number, count: number, mode: number | undefined) {
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
    const mode1Count = 2 * count + 1;
    const mode1StartIndex = Math.floor((current - 1) / mode1Count) * mode1Count + 1;
    const mode1EndIndex = Math.min(mode1StartIndex + mode1Count - 1, total);
    for (let i = 1; i <= total; i++) {
        const isVisible = mode === 1
            ? i >= mode1StartIndex && i <= mode1EndIndex
            : i - current <= count && i - current >= -count;
        if (isVisible) {
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
