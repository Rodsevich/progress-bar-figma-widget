const { widget } = figma;
const { Frame,Ellipse } = widget;

interface PerfilUserProps{
    avatar_url:string
}

export const PerfilUser = ({avatar_url}:PerfilUserProps) => {
    return (
        <Frame
            name="container__top__photo_user"
            overflow="visible"
            width={123}
            height={123}
        >
            <Ellipse
                name="Ellipse 35"
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
                fill={{
                    type: "image",
                    src: avatar_url ,
                    imageRef:
                        "837cd3b5bf15872b3ef00c794f7c8e4594b56ed0",
                    scalingFactor: 0.5,
                }}
                stroke="#B0BDBE"
                strokeWidth={2}
                width={123}
                height={123}
            />
        </Frame>

    )
}


