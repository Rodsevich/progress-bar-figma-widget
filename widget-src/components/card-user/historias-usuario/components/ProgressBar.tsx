const { widget } = figma;
const { AutoLayout, Rectangle } = widget;


interface ProgressBarProps {
    anchoBarraProgreso: number;
}

export const ProgressBar = ({
    anchoBarraProgreso,
}: ProgressBarProps) => {
    return (
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
                width={anchoBarraProgreso}
                height={8}
            />

        </AutoLayout>
    )
}
