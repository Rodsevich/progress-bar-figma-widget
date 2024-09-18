import { useWidgetApp } from "../../../../hooks/useWidgetApp";

const { widget } = figma;
const { AutoLayout, SVG, Text,Input } = widget;

export const TextTarea = ({id_user}:{id_user:number}) => {

    const {reporteDia,setReporteDia} = useWidgetApp()
    const userReport = reporteDia.find(report => report.id === id_user);



    return (
        <AutoLayout
            name="Textarea"
            overflow="visible"
            direction="vertical"
            spacing={4}
            width={500}
        >
            <AutoLayout
                name="Label+box"
                overflow="visible"
                direction="vertical"
                spacing={6}
                width={500}
            >
                <Text
                    name="Label"
                    fill="#00292E"
                    width="fill-parent"
                    fontFamily="Heebo"
                    fontSize={14}
                >
                    Reporte del dia
                </Text>
                <AutoLayout
                    name="Frame 427319341"
                    fill="#F5F5F5"
                    cornerRadius={8}
                    overflow="visible"
                    spacing={8}
                    padding={{
                        vertical: 12,
                        horizontal: 16,
                    }}
                    width="fill-parent"
                >
                    <Input
                        name="report-input"
                        fontSize={16}
                        horizontalAlignText="left"
                        value={userReport ? userReport.report : ''}
                        y={100}
                        width="fill-parent"
                        onTextEditEnd={(event)=>{
                            setReporteDia((prev) => {
                                const reportIndex = prev.findIndex(report => report.id === id_user);
                                if (reportIndex !== -1) {
                                    prev[reportIndex].report = event.characters;
                                    return [...prev];
                                } else {
                                    return [...prev, { id: id_user, report: event.characters }];
                                }
                            });
                        }}
                        placeholder="Reporte"
                    />
                    {/* <Text
                        name="Placeholder Text"
                        fill="#00292E"
                        width="fill-parent"
                        fontFamily="Heebo"
                        fontSize={14}
                    >
                        

                    </Text> */}
                </AutoLayout>
            </AutoLayout>
            <AutoLayout
                name="HelperText"
                hidden={true}
                overflow="visible"
                padding={{
                    vertical: 0,
                    horizontal: 12,
                }}
                width={328}
            >
                <Text
                    name="Helper text"
                    fill="#000000B3"
                    width="fill-parent"
                    verticalAlignText="center"
                    fontFamily="Heebo"
                    fontSize={14}
                    fontWeight={300}
                >
                    Helper text
                </Text>
            </AutoLayout>
        </AutoLayout>
    )
}
