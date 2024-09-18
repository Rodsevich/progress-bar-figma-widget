const { widget } = figma;
const { AutoLayout, SVG } = widget;

export const DividerHistorias = () => {
    return (
        <AutoLayout
            name="divider"
            overflow="visible"
            direction="vertical"
            spacing={10}
            padding={{
                vertical: 8,
                horizontal: 0,
            }}
            width="fill-parent"
            horizontalAlignItems="center"
        >
            <SVG
                name="Vector 5"
                width="fill-parent"
                src="<svg width='500' viewBox='0 0 500 0' fill='none' xmlns='http://www.w3.org/2000/svg'>
<path d='M0 0H500' stroke='#E6EAEA' stroke-linecap='round'/>
</svg>
"
            />
        </AutoLayout>
    )
};
