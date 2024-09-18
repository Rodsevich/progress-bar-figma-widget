import { useWidgetApp } from "../hooks/useWidgetApp";
import { ReportUserStories } from "../types/index";
import { dateNow, generateDate } from "../utils/index";
import { CardUser } from "./card-user/CardUser";

const { widget } = figma;
const { AutoLayout, Text, Frame, Rectangle, SVG, Ellipse } = widget;



export const SectionDay = ({ infoItems }: { infoItems: ReportUserStories[] }) => {

    const {dateCurrent,setDateCurrent} = useWidgetApp();
    
    const splitIntoColumns = (items: ReportUserStories[], columns: number): ReportUserStories[][] => {
        const columnItems = [];
        const itemsPerColumn = Math.ceil(items.length / columns);

        for (let i = 0; i < columns; i++) {
            columnItems.push(items.slice(i * itemsPerColumn, (i + 1) * itemsPerColumn));
        }

        return columnItems;
    };
 
    const splitIntoRows = (items: ReportUserStories[], itemsPerRow: number): ReportUserStories[][] => {
        const rows: ReportUserStories[][] = [];

        for (let i = 0; i < items.length; i += itemsPerRow) {
            rows.push(items.slice(i, i + itemsPerRow));
        }

        return rows;
    };

    const itemsPerRow = 2;
   
    

    return (
        <AutoLayout
            name={dateCurrent}
            fill="#FFF"
            cornerRadius={8}
            direction="vertical"
            spacing={23}
            padding={{
                top: 0,
                right: 100,
                bottom: 50,
                left: 100,
            }}
        >

            <AutoLayout
                name="Titile"
                spacing={10}
                padding={10}
                width={1150}
                height={110}
                verticalAlignItems="center"
            >
                <Text
                    name="title_text"
                    fill="#001D21"
                    width="fill-parent"
                    horizontalAlignText="center"
                    fontFamily="Inter"
                    fontSize={64}
                    fontWeight={500}
                >
                    {dateCurrent}
                </Text>
            </AutoLayout>

            {infoItems.length > 0 && (
                splitIntoRows(infoItems, itemsPerRow).map((rowItems, index) => (
                    <AutoLayout
                        key={index}
                        name={`Row-${index}`}
                        direction="horizontal"
                        spacing={16}
                    >
                        {rowItems.map((infoItem, idx) => (
                            <CardUser key={idx} infoItem={infoItem} />
                        ))}
                    </AutoLayout>
                ))
            )}

        </AutoLayout>

    )
};


export const createSectionDay = async(info:ReportUserStories[]):Promise<SceneNode>=>{

    const node = await figma.createNodeFromJSXAsync(<SectionDay infoItems={info} />);
    return node;
}


