import { ReportUserStories } from "../../types/index";
import { InfoProgressUser } from "./components/InfoProgressUser";
import { PerfilUser } from "./components/PerfilUser";
import { HistoriasUsuario } from "./historias-usuario/HistoriasUsuario";
// import { useWidgetApp } from '../../hooks/useWidgetApp';
// import { ProgressBar } from "../ProgressBar";
// import { backgroundAndBorderColors } from "../../options/style-options";


const { widget } = figma;
const { AutoLayout, Text, Frame, Rectangle, SVG } = widget;

export const CardUser = ({infoItem}:{infoItem:ReportUserStories}) => {

    
    return (
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
                <PerfilUser avatar_url={infoItem.user.avatar_url}/>
                <InfoProgressUser user_info={infoItem.user} />
            </AutoLayout>

          
           
            <HistoriasUsuario infoItem={infoItem}/>

        </AutoLayout>
    );


}

