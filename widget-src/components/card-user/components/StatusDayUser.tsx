import { useWidgetApp } from "../../../hooks/useWidgetApp";
import { StatusDia, ReporteDia } from '../../../types/index';

const { widget } = figma;
const { AutoLayout, Text, Frame, Rectangle, SVG, Ellipse, Input } = widget;

const user = figma.currentUser;
const page = figma.currentPage;

// export const StatusDayUser = ({ status }: { status: StatusDia }) => {
export const StatusDayUser = ({ user_id }: { user_id: number }) => {

    const { statusDia, setStatusDia } = useWidgetApp()
    const statusActual = statusDia.find(status => status.id === user_id);
    
    // console.log('USER',user);
    // console.log('PAGE',page);

    const cambiarStatus = () => {
        console.log('status actual',statusActual);
        if (statusActual) {
            setStatusDia((prev) => {
                // Encontrar el índice del status a actualizar
                const existingStatusIndex = prev.findIndex(status => status.id === statusActual.id);

                if (existingStatusIndex !== -1) {
                    // Crear una nueva copia del array con el cambio aplicado
                    const updatedStatusDia = [...prev];
                    updatedStatusDia[existingStatusIndex] = {
                        ...updatedStatusDia[existingStatusIndex],
                        bloqueo: !updatedStatusDia[existingStatusIndex].bloqueo // Alternar el valor de bloqueo
                    };
                    return updatedStatusDia;
                }

                return prev; // Si no se encuentra el status, devolver el array sin cambios
            });
        }else{
            const newStatusDia = {
                id:user_id,

            }
            // setStatusDia((prev)=>{
                

            // })
        }
    };

    const onTextEditEnd = (event: TextEditEvent) => {
        setStatusDia((prev) => {
            // Encontrar el índice del status a actualizar
            const existingStatusIndex = prev.findIndex(status => status.id === user_id);

            if (existingStatusIndex !== -1) {
                // Crear una nueva copia del array con el cambio aplicado
                const updatedStatusDia = [...prev];
                updatedStatusDia[existingStatusIndex] = {
                    ...updatedStatusDia[existingStatusIndex],
                    bloqueo_description: event.characters // Actualizar bloqueo_description
                };
                return updatedStatusDia;
            }

            return prev; // Si no se encuentra el status, devolver el array sin cambios
        });
    };

    const levantarMano = () => {
        setStatusDia((prev) => {

            const existingStatusIndex = prev.findIndex(status => status.id === user_id);

            if (existingStatusIndex !== -1) {

                const updatedStatusDia = [...prev];
                updatedStatusDia[existingStatusIndex] = {
                    ...updatedStatusDia[existingStatusIndex],
                    levantada_mano: !updatedStatusDia[existingStatusIndex].levantada_mano,
                };
                return updatedStatusDia;
            }

            return prev;

        });
    };

    return (
        <AutoLayout
            name="Status"
            overflow="visible"
            direction="vertical"
            spacing={12}

        >

            {/* Status */}
            {
                statusActual?.bloqueo
                    ?
                    <AutoLayout
                        name="TagsContainer"
                        overflow="visible"
                        spacing={12}
                    >
                        <AutoLayout
                            onClick={() => cambiarStatus()}
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
                            onClick={() => levantarMano()}
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
                                      {    statusActual.levantada_mano ? 'Bajar mano ' : 'Levantar mano' } 
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
                        onClick={() => cambiarStatus()}
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
                statusActual?.bloqueo
                &&
                // Alert
                <AutoLayout
                    name="Alert"
                    fill={statusActual.levantada_mano ? '#FBF9EB' : '#FBEBEB'}
                    stroke={statusActual.levantada_mano ? '#EDE5A1' : '#EDA1A1'}
                    cornerRadius={4}
                    spacing={8}
                    padding={{
                        vertical: 14,
                        horizontal: 16,
                    }}
                    width={353}
                >   
                    {
                        statusActual.levantada_mano
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
                        value={statusActual.bloqueo_description || ''}
                        width={321}
                        onTextEditEnd={(event) => onTextEditEnd(event)}
                    />
                </AutoLayout>
            }

        </AutoLayout>
    )

};

