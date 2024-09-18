import { ReportUserStories, User } from "../../../types/index";
import { capitalizeFirstLetter } from "../../../utils/index";
import { StatusDayUser } from "./StatusDayUser";

const { widget } = figma;
const { AutoLayout, Text, Frame, Rectangle, SVG, Ellipse, Input } = widget;

export const InfoProgressUser = ({ user_info }: { user_info: User }) => {
    return (
        <AutoLayout
            name="ContainerTop"
            overflow="visible"
            direction="vertical"
            spacing={20}
            width={353}
        >

            <AutoLayout
                name="Frame 427319337"
                overflow="visible"
                direction="vertical"
                width="fill-parent"
            >
                <Text
                    name="Emma"
                    fill="#001D21"
                    width="fill-parent"
                    height={30}
                    verticalAlignText="center"
                    fontFamily="Heebo"
                    fontSize={20}
                    fontWeight={500}
                >
                    {capitalizeFirstLetter(user_info.username)}
                </Text>
                <AutoLayout
                    name="container hours + amount"
                    overflow="visible"
                    spacing="auto"
                    width="fill-parent"
                    verticalAlignItems="center"
                >
                    <Text
                        name="Horas del sprint"
                        fill="#001D21"
                        width={207}
                        height={30}
                        verticalAlignText="center"
                        fontFamily="Heebo"
                    >
                        Horas del sprint
                    </Text>
                    <AutoLayout
                        name="Pill - hours"
                        fill="#C1FAE2"
                        cornerRadius={16}
                        overflow="visible"
                        spacing={8}
                        padding={{
                            vertical: 4,
                            horizontal: 8,
                        }}
                        horizontalAlignItems="center"
                        verticalAlignItems="center"
                    >
                        <Text
                            name="11/62"
                            fill="#001113"
                            width={43}
                            verticalAlignText="center"
                            horizontalAlignText="center"
                            fontFamily="Heebo"
                            fontWeight={500}
                        >
                            47/62
                        </Text>
                    </AutoLayout>
                </AutoLayout>
            </AutoLayout>

            <AutoLayout
                name="Frame 427319339"
                overflow="visible"
                direction="vertical"
                spacing={12}
                width="fill-parent"
            >
                {/* Progress bar */}
                <AutoLayout
                    name="Progress Bar"
                    overflow="visible"
                    direction="vertical"
                    spacing={8}
                    width="fill-parent"
                >
                    <AutoLayout
                        name="Bars"
                        overflow="visible"
                        direction="vertical"
                        spacing={4}
                        width={353}
                    >
                        <AutoLayout
                            name="Bar+Steppers"
                            overflow="visible"
                            direction="vertical"
                            spacing={4}
                            width="fill-parent"
                        >
                            <Frame
                                name="Bar"
                                overflow="visible"
                                width="fill-parent"
                                height={8}
                            >
                                <Rectangle
                                    name="Bar"
                                    x={{
                                        type: "horizontal-scale",
                                        leftOffsetPercent: 0,
                                        rightOffsetPercent: 0,
                                    }}
                                    y={{
                                        type: "vertical-scale",
                                        topOffsetPercent: 0,
                                        bottomOffsetPercent: 0,
                                    }}
                                    fill="#E8E8E8"
                                    cornerRadius={
                                        100
                                    }
                                    width={353}
                                    height={8}
                                />
                                <SVG
                                    name="Bar Filled"
                                    x={{
                                        type: "horizontal-scale",
                                        leftOffsetPercent: 0,
                                        rightOffsetPercent: 25,
                                    }}
                                    y={{
                                        type: "vertical-scale",
                                        topOffsetPercent: 0,
                                        bottomOffsetPercent: 0,
                                    }}
                                    height={8}
                                    width={265}
                                    src="<svg width='265' height='8' viewBox='0 0 265 8' fill='none' xmlns='http://www.w3.org/2000/svg'>
<path d='M0 4C0 1.79086 1.79086 0 4 0H260.75C262.959 0 264.75 1.79086 264.75 4V4C264.75 6.20914 262.959 8 260.75 8H4C1.79086 8 0 6.20914 0 4V4Z' fill='#AEC42E'/>
                    </svg>"/>
                            </Frame>
                        </AutoLayout>
                    </AutoLayout>
                    <AutoLayout
                        name="Help text"
                        overflow="visible"
                        spacing={4}
                        width={353}
                        verticalAlignItems="center"
                    >
                        <Text
                            name="Text bold"
                            fill="#444"
                            fontFamily="Heebo"
                            fontSize={14}
                            fontWeight={700}
                        >
                            75%
                        </Text>
                        <Text
                            name="Text regular"
                            fill="#444"
                            fontFamily="Heebo"
                            fontSize={14}
                        >
                            completed
                        </Text>
                    </AutoLayout>
                </AutoLayout>
                
                <StatusDayUser user_id={user_info.id}/>
              

            </AutoLayout>

        </AutoLayout>
    )
}

