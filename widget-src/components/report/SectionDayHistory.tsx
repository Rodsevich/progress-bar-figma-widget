import { ReporteDia, ReportUserStories, StatusDia } from "../../types/index";
import { capitalizeFirstLetter } from "../../utils/index";
import { CardUser } from "../card-user/CardUser";

const { widget } = figma;
const { AutoLayout, Text, Ellipse, Frame, SVG, Rectangle, Input,Image } = widget;


interface PropsSection {
    info: ReportUserStories[];
    statusDia: StatusDia[];
    reporteDia: ReporteDia[];
    day: string;
}

const SectionDayHistory = ({ info, reporteDia, statusDia, day }: PropsSection) => {

    // const statusDia = statusDia.find(status => status.id === user_id);


    const splitIntoRows = (items: ReportUserStories[], itemsPerRow: number): ReportUserStories[][] => {
        const rows: ReportUserStories[][] = [];

        for (let i = 0; i < items.length; i += itemsPerRow) {
            rows.push(items.slice(i, i + itemsPerRow));
        }

        return rows;
    };

    const itemsPerRow = 2;

    const calcularPorcentajeProgreso = (original_estimate: number, completed: number) => {
        if (original_estimate === 0) return 0;
        return Math.floor((completed / original_estimate) * 100);
    };

    const calcularAnchoBarraProgreso = (original_estimate: number, completed: number, maxWidth: number = 500) => {
        const porcentajeProgreso = calcularPorcentajeProgreso(original_estimate, completed);
        const width = (porcentajeProgreso / 100) * maxWidth;
        return width;
    };


    return (
        <AutoLayout
            name={day}
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
                    {day}
                </Text>
            </AutoLayout>

            {info.length > 0 && (
                splitIntoRows(info, itemsPerRow).map((rowItems, index) => (
                    <AutoLayout
                        key={index}
                        name={`Row-${index}`}
                        direction="horizontal"
                        spacing={16}
                    >
                        {rowItems.map((infoItem, idx) => (
                            // CARD USER
                            <AutoLayout
                                name={infoItem.user.full_name}
                                effect={{
                                    type: "drop-shadow",
                                    color: "#00000054",
                                    offset: {
                                        x: 0,
                                        y: 1,
                                    },
                                    blur: 4,
                                    showShadowBehindNode:
                                        false,
                                }}
                                fill="#FFF"
                                stroke="#B5B5B5"
                                cornerRadius={8}
                                overflow="visible"
                                direction="vertical"
                                spacing={28}
                                padding={1}
                                verticalAlignItems="center"

                            >

                                <AutoLayout
                                    name="ContainerTop"
                                    fill={{
                                        type: "gradient-linear",
                                        gradientHandlePositions:
                                            [
                                                {
                                                    x: 0.093,
                                                    y: 0.268,
                                                },
                                                {
                                                    x: 0.918,
                                                    y: 0.268,
                                                },
                                                {
                                                    x: 0.093,
                                                    y: -3.404,
                                                },
                                            ],
                                        gradientStops: [
                                            {
                                                position: 0,
                                                color: {
                                                    r: 0.21960784494876862,
                                                    g: 0.9372549057006836,
                                                    b: 0.6274510025978088,
                                                    a: 1,
                                                },
                                            },
                                            {
                                                position: 0.5,
                                                color: {
                                                    r: 0.5882353186607361,
                                                    g: 0.9725490212440491,
                                                    b: 0.529411792755127,
                                                    a: 1,
                                                },
                                            },
                                            {
                                                position: 1,
                                                color: {
                                                    r: 0.7529411911964417,
                                                    g: 0.9843137264251709,
                                                    b: 0.45098039507865906,
                                                    a: 1,
                                                },
                                            },
                                        ],
                                        opacity: 0.12,
                                    }}
                                    stroke="#EBF3BF"
                                    cornerRadius={{
                                        topLeft: 8,
                                        topRight: 8,
                                        bottomRight: 0,
                                        bottomLeft: 0,
                                    }}
                                    strokeWidth={0}
                                    overflow="visible"
                                    spacing={24}
                                    padding={{
                                        top: 32,
                                        right: 20,
                                        bottom: 16,
                                        left: 20,
                                    }}
                                    width={540}
                                >
                                    {/* PERFIL USER */}

                                    <Frame
                                        name="container__top__photo_user"
                                        overflow="visible"
                                        width={123}
                                        height={123}
                                    >



                                        <Image
                                            cornerRadius={100}
                                            name="Avatar user"
                                            src={infoItem.user.avatar_url} 
                                            width={123}
                                            height={123}
                                            stroke="#B0BDBE"
                                            strokeWidth={2}
                                            effect={{
                                                type: "drop-shadow",
                                                color:
                                                    "#00000054",
                                                offset: {
                                                    x: 0,
                                                    y: 1,
                                                },
                                                blur: 8,
                                                showShadowBehindNode:
                                                    false,
                                            }}
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
                                        />

                                    </Frame>

                                    {/* INFO PROGRESS */}

                                    {/* <InfoProgressUser infoItem.user={infoItem.user} /> */}


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
                                                {capitalizeFirstLetter(infoItem.user.username)}
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


                                            {/* STATUS DAY */}


                                            <AutoLayout
                                                name="Status"
                                                overflow="visible"
                                                direction="vertical"
                                                spacing={12}

                                            >

                                                {/* Status */}
                                                {

                                                    statusDia.find(status => status.id === infoItem.user.id)?.bloqueo
                                                        ?
                                                        <AutoLayout
                                                            name="TagsContainer"
                                                            overflow="visible"
                                                            spacing={12}
                                                        >
                                                            <AutoLayout
                                                                // onClick={() => cambiarStatus()}
                                                                name="chip status"
                                                                fill="#FBEBEB"
                                                                cornerRadius={16}
                                                                overflow="visible"
                                                                padding={{
                                                                    vertical: 4,
                                                                    horizontal: 8,
                                                                }}
                                                                height={24}
                                                                verticalAlignItems="center"
                                                            >
                                                                <Frame
                                                                    name="status icons"
                                                                    overflow="visible"
                                                                    width={20}
                                                                    height={20}
                                                                >
                                                                    <Ellipse
                                                                        name="vector"
                                                                        x={{
                                                                            type: "horizontal-scale",
                                                                            leftOffsetPercent: 8.34,
                                                                            rightOffsetPercent: 8.327,
                                                                        }}
                                                                        y={{
                                                                            type: "vertical-scale",
                                                                            topOffsetPercent: 8.333,
                                                                            bottomOffsetPercent: 8.334,
                                                                        }}
                                                                        fill="#D73232"
                                                                        width={16.667}
                                                                        height={16.667}
                                                                    />
                                                                    <SVG
                                                                        name="symbol"
                                                                        x={{
                                                                            type: "horizontal-scale",
                                                                            leftOffsetPercent: 33.34,
                                                                            rightOffsetPercent: 33.327,
                                                                        }}
                                                                        y={{
                                                                            type: "vertical-scale",
                                                                            topOffsetPercent: 45.833,
                                                                            bottomOffsetPercent: 45.834,
                                                                        }}
                                                                        height={2}
                                                                        width={7}
                                                                        src="<svg width='8' height='2' viewBox='0 0 8 2' fill='none' xmlns='http://www.w3.org/2000/svg'>
<path fill-rule='evenodd' clip-rule='evenodd' d='M0.667969 1.83317V0.166504H7.33464V1.83317H0.667969Z' fill='white'/>
</svg>
"
                                                                    />
                                                                </Frame>
                                                                <AutoLayout
                                                                    name="Text"
                                                                    overflow="visible"
                                                                    spacing={8}
                                                                    padding={{
                                                                        vertical: 0,
                                                                        horizontal: 4,
                                                                    }}
                                                                    verticalAlignItems="center"
                                                                >
                                                                    <Text
                                                                        name="Label"
                                                                        fill="#001113"
                                                                        verticalAlignText="center"
                                                                        fontFamily="Heebo"
                                                                        fontSize={14}
                                                                    >
                                                                        Con bloqueo
                                                                    </Text>
                                                                </AutoLayout>
                                                            </AutoLayout>

                                                            <AutoLayout
                                                                // onClick={() => levantarMano()}
                                                                name="raise_hand"
                                                                fill="#F3EDBF"
                                                                cornerRadius={16}
                                                                overflow="visible"
                                                                padding={{
                                                                    vertical: 4,
                                                                    horizontal: 8,
                                                                }}
                                                                height={24}
                                                                verticalAlignItems="center"
                                                            >
                                                                <Frame
                                                                    name="status icons"
                                                                    overflow="visible"
                                                                    width={20}
                                                                    height={20}
                                                                >
                                                                    <SVG
                                                                        name="vector_symbol"
                                                                        height={20}
                                                                        width={20}
                                                                        src="<svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
<path d='M9.9987 1.6665L19.1654 17.4998H0.832031L9.9987 1.6665Z' fill='#D7C632'/>
<path fill-rule='evenodd' clip-rule='evenodd' d='M9.16821 13.3337V15.0004H10.8348V13.3337H9.16821ZM9.16821 8.3335V11.6669H10.8348V8.3335H9.16821Z' fill='black' fill-opacity='0.7'/>
</svg>
"
                                                                    />
                                                                </Frame>
                                                                <AutoLayout
                                                                    name="Text"
                                                                    overflow="visible"
                                                                    spacing={8}
                                                                    padding={{
                                                                        vertical: 0,
                                                                        horizontal: 4,
                                                                    }}
                                                                    verticalAlignItems="center"
                                                                >
                                                                    <Text
                                                                        name="Levantar mano"
                                                                        fill="#001113"
                                                                        verticalAlignText="center"
                                                                        fontFamily="Heebo"
                                                                        fontSize={14}
                                                                    >
                                                                        {statusDia.find(status => status.id === infoItem.user.id)?.levantada_mano ? 'Bajar mano ' : 'Levantar mano'}
                                                                    </Text>
                                                                    <SVG
                                                                        name="Vector"
                                                                        height={19}
                                                                        width={13}
                                                                        src="<svg width='13' height='20' viewBox='0 0 13 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
<path d='M12.0152 6.83333C11.4715 6.83333 11.0303 7.27667 11.0303 7.82292V12.375H10.6364C9.33636 12.375 8.27273 13.4438 8.27273 14.75H7.48485C7.48485 13.135 8.6903 11.805 10.2424 11.6071V3.07292C10.2424 2.81046 10.1387 2.55876 9.95397 2.37318C9.76928 2.18759 9.51877 2.08333 9.25758 2.08333C8.99638 2.08333 8.74588 2.18759 8.56118 2.37318C8.37649 2.55876 8.27273 2.81046 8.27273 3.07292V9.20833H7.48485V1.48958C7.48485 1.22713 7.38109 0.975425 7.19639 0.789842C7.0117 0.604259 6.7612 0.5 6.5 0.5C6.2388 0.5 5.9883 0.604259 5.80361 0.789842C5.61891 0.975425 5.51515 1.22713 5.51515 1.48958V9.20833H4.72727V2.67708C4.72727 2.41463 4.62351 2.16293 4.43882 1.97734C4.25412 1.79176 4.00362 1.6875 3.74242 1.6875C3.48123 1.6875 3.23073 1.79176 3.04603 1.97734C2.86134 2.16293 2.75758 2.41463 2.75758 2.67708V10H1.9697V5.05208C1.9697 4.78963 1.86594 4.53793 1.68124 4.35234C1.49655 4.16676 1.24605 4.0625 0.984848 4.0625C0.72365 4.0625 0.47315 4.16676 0.288455 4.35234C0.103761 4.53793 0 4.78963 0 5.05208V12.9688C0 16.5788 2.90727 19.5 6.5 19.5C10.0927 19.5 13 16.5788 13 12.9688V7.82292C13 7.27667 12.5588 6.83333 12.0152 6.83333Z' fill='#D7C632' stroke='#413C0F' stroke-width='0.6'/>
</svg>
"
                                                                    />
                                                                </AutoLayout>
                                                            </AutoLayout>
                                                        </AutoLayout>
                                                        :
                                                        <Frame
                                                            name="ChipStatusSuccess"
                                                            fill="#BDE3BC"
                                                            cornerRadius={16}
                                                            overflow="visible"
                                                            width={132}
                                                            height={24}
                                                        // onClick={() => cambiarStatus()}
                                                        >
                                                            <AutoLayout
                                                                name="Frame 427319343"
                                                                x={{
                                                                    type: "center",
                                                                    offset: -0.5,
                                                                }}
                                                                y={{
                                                                    type: "center",
                                                                    offset: 0.5,
                                                                }}
                                                                overflow="visible"
                                                                spacing={5}
                                                                verticalAlignItems="center"
                                                            >
                                                                <Frame
                                                                    name="status icons"
                                                                    width={20}
                                                                    height={20}
                                                                >
                                                                    <Ellipse
                                                                        name="vector"
                                                                        x={{
                                                                            type: "horizontal-scale",
                                                                            leftOffsetPercent: 8.34,
                                                                            rightOffsetPercent: 8.327,
                                                                        }}
                                                                        y={{
                                                                            type: "vertical-scale",
                                                                            topOffsetPercent: 8.333,
                                                                            bottomOffsetPercent: 8.334,
                                                                        }}
                                                                        fill="#29A627"
                                                                        width={16.667}
                                                                        height={16.667}
                                                                    />
                                                                    <SVG
                                                                        name="symbol"
                                                                        x={{
                                                                            type: "horizontal-scale",
                                                                            leftOffsetPercent: 25,
                                                                            rightOffsetPercent: 25,
                                                                        }}
                                                                        y={{
                                                                            type: "vertical-scale",
                                                                            topOffsetPercent: 33.333,
                                                                            bottomOffsetPercent: 29.524,
                                                                        }}
                                                                        height={7}
                                                                        width={10}
                                                                        src="<svg width='10' height='8' viewBox='0 0 10 8' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path fill-rule='evenodd' clip-rule='evenodd' d='M0 4.02382L3.57143 7.59524L10 1.16667L9 0.166672L3.57143 5.59524L1 3.02382L0 4.02382Z' fill='white'/>
              </svg>
              "
                                                                    />
                                                                </Frame>
                                                                <AutoLayout
                                                                    name="Text"
                                                                    overflow="visible"
                                                                    spacing={8}
                                                                    padding={{
                                                                        vertical: 0,
                                                                        horizontal: 4,
                                                                    }}
                                                                    verticalAlignItems="center"
                                                                >
                                                                    <Text
                                                                        name="¡Sin bloqueos!"
                                                                        fill="#000"
                                                                        verticalAlignText="center"
                                                                        fontFamily="Heebo"
                                                                        fontSize={14}
                                                                    >
                                                                        ¡Sin bloqueos!
                                                                    </Text>
                                                                </AutoLayout>
                                                            </AutoLayout>
                                                        </Frame>
                                                }
                                                
                                                {
                                                    
                                                    statusDia.find(status => status.id === infoItem.user.id)?.bloqueo
                                                    &&
                                                    // Alert
                                                    <AutoLayout
                                                        name="Alert"
                                                        fill={statusDia.find(status => status.id === infoItem.user.id)?.levantada_mano ? '#FBF9EB' : '#FBEBEB'}
                                                        stroke={statusDia.find(status => status.id === infoItem.user.id)?.levantada_mano ? '#EDE5A1' : '#EDA1A1'}
                                                        cornerRadius={4}
                                                        spacing={8}
                                                        padding={{
                                                            vertical: 14,
                                                            horizontal: 16,
                                                        }}
                                                        width={353}
                                                    >
                                                        {
                                                            statusDia.find(status => status.id === infoItem.user.id)?.levantada_mano
                                                            &&
                                                            <Frame
                                                                name="StatusIcons"
                                                                overflow="visible"
                                                                width={20}
                                                                height={20}
                                                            >
                                                                <SVG
                                                                    name="vector_symbol"
                                                                    height={20}
                                                                    width={20}
                                                                    src="<svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
<path d='M9.9987 1.66663L19.1654 17.5H0.832031L9.9987 1.66663Z' fill='#D7C632'/>
<path fill-rule='evenodd' clip-rule='evenodd' d='M9.16797 13.3337V15.0004H10.8345V13.3337H9.16797ZM9.16797 8.33356V11.667H10.8345V8.33356H9.16797Z' fill='black' fill-opacity='0.7'/>
</svg>
"
                                                                />
                                                            </Frame>
                                                        }
                                                        <Input
                                                            name="message-bloqueo"
                                                            fontSize={16}
                                                            fill="#404040"
                                                            fontFamily="Heebo"
                                                            placeholder="Escribe tu bloqueo"
                                                            value={statusDia.find(status => status.id === infoItem.user.id)?.bloqueo_description || ''}
                                                            width={321}
                                                            onTextEditEnd={(event) => { }}
                                                        />
                                                    </AutoLayout>
                                                }

                                            </AutoLayout>


                                            {/* <StatusDayUser user_id={infoItem.user.id} /> */}


                                        </AutoLayout>

                                    </AutoLayout>

                                </AutoLayout>


                                {/* HISTORIAUSUARIO */}

                                <AutoLayout
                                    name="ContainerHUs"
                                    overflow="visible"
                                    direction="vertical"
                                    spacing={16}
                                    padding={{
                                        top: 0,
                                        right: 20,
                                        bottom: 24,
                                        left: 20,
                                    }}
                                    width={540}
                                >


                                    {/* Listar las historias de usuario del usuario */}
                                    {
                                        infoItem.user_stories.map((user_story) => (
                                            <AutoLayout
                                                name="Frame427319349"
                                                overflow="visible"
                                                direction="vertical"
                                                spacing={16}
                                                width={500}
                                            >
                                                {/* <HistoriaUsuarioCard user_story={user_story} /> */}

                                                <AutoLayout
                                                    name="container HU"
                                                    overflow="visible"
                                                    direction="vertical"
                                                    width="fill-parent"
                                                >
                                                    <AutoLayout
                                                        name="Frame 427319337"
                                                        overflow="visible"
                                                        direction="vertical"
                                                        width={500}
                                                    >
                                                        <Text
                                                            name="title HU"
                                                            fill="#001D21"
                                                            width="fill-parent"
                                                            height={30}
                                                            verticalAlignText="center"
                                                            fontFamily="Heebo"
                                                            fontWeight={500}
                                                        >
                                                            {user_story.title}
                                                        </Text>
                                                        <Text
                                                            name="link url HU"
                                                            fill="#3256D7"
                                                            href={user_story.url}
                                                            fontFamily="Heebo"
                                                            fontSize={14}
                                                            textDecoration="underline"
                                                        >
                                                            HU {user_story.id}
                                                        </Text>
                                                    </AutoLayout>
                                                    <AutoLayout
                                                        name="Frame 427319339"
                                                        overflow="visible"
                                                        direction="vertical"
                                                        spacing={12}
                                                        width={500}
                                                    >
                                                        <AutoLayout
                                                            name="container hours + amount"
                                                            overflow="visible"
                                                            spacing="auto"
                                                            width="fill-parent"
                                                            verticalAlignItems="center"
                                                        >
                                                            <Text
                                                                name="Crear componente Acordeon"
                                                                fill="#001D21"
                                                                verticalAlignText="center"
                                                                fontFamily="Heebo"
                                                            >
                                                                {user_story.description}
                                                            </Text>
                                                            <AutoLayout
                                                                name="Pill - hours"
                                                                fill="#C1FAE2"
                                                                cornerRadius={
                                                                    16
                                                                }
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
                                                                    fontSize={14}
                                                                >
                                                                    {user_story.schedulin_CompletedWork}/{user_story.schedulin_OriginalEstimate}
                                                                </Text>
                                                            </AutoLayout>
                                                        </AutoLayout>

                                                        <AutoLayout
                                                            name="Progress Bar"
                                                            overflow="visible"
                                                            direction="vertical"
                                                            spacing={8}
                                                            width="fill-parent"
                                                        >
                                                            {/* progress bar */}
                                                            <AutoLayout
                                                                name="Bars"
                                                                fill="#E8E8E8"
                                                                cornerRadius={100}
                                                                overflow="visible"
                                                                direction="vertical"
                                                                spacing={4}
                                                                width="fill-parent"

                                                            >
                                                                <Rectangle
                                                                    name="Bar"
                                                                    fill="#AEC42E"
                                                                    cornerRadius={100}
                                                                    width={calcularAnchoBarraProgreso(
                                                                        user_story.schedulin_OriginalEstimate,
                                                                        user_story.schedulin_CompletedWork
                                                                    )}
                                                                    height={8}
                                                                />

                                                            </AutoLayout>
                                                            {/* info progress bar */}
                                                            <AutoLayout
                                                                name="Help text"
                                                                overflow="visible"
                                                                spacing={4}
                                                                width={500}
                                                                verticalAlignItems="center"
                                                            >
                                                                <Text
                                                                    name="Text bold"
                                                                    fill="#444"
                                                                    fontFamily="Heebo"
                                                                    fontSize={14}
                                                                    fontWeight={
                                                                        700
                                                                    }
                                                                >
                                                                    {calcularPorcentajeProgreso(user_story.schedulin_OriginalEstimate, user_story.schedulin_CompletedWork)}%
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

                                                    </AutoLayout>
                                                </AutoLayout>


                                                {/* <DividerHistorias /> */}
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
                                            </AutoLayout>


                                        ))


                                    }
                                    {/* <TextTarea id_user={infoItem.user.id} /> */}
                                    {/* TEXT TAREA */}
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
                                                    value={reporteDia.find(report => report.id === infoItem.user.id)?.report || ''}
                                                    y={100}
                                                    width="fill-parent"
                                                    onTextEditEnd={(event) => {
                                                    }}
                                                    placeholder="Reporte"
                                                />
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

                                </AutoLayout>

                                {/* <HistoriasUsuario infoItem={infoItem} /> */}

                            </AutoLayout>
                            // <CardUser key={idx} infoItem={infoItem} />
                        ))}
                    </AutoLayout>
                ))
            )}

        </AutoLayout>
    )
}



export const createSectionDayHistory = async (dataSection: PropsSection): Promise<SceneNode> => {

    const node = await figma.createNodeFromJSXAsync(
        <SectionDayHistory
            info={dataSection.info}
            statusDia={dataSection.statusDia}
            reporteDia={dataSection.reporteDia}
            day={dataSection.day}
        />
    )

    return node;
}