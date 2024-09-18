
const { widget } = figma;
const { AutoLayout} = widget;

const ReportFrame = () => {

    return (
        <AutoLayout
            name="SemanasFrame"
            fill="#FFF"
            spacing={10}
            padding={100}
            horizontalAlignItems="center"
            verticalAlignItems="center"
        >


        </AutoLayout>
    )

};


export const createReportFrame = async (): Promise<FrameNode> => {
    const node = await figma.createNodeFromJSXAsync(<ReportFrame/>);
    return node as FrameNode;
};