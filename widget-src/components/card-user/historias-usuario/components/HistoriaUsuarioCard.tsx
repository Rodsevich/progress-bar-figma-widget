import { useWidgetApp } from '../../../../hooks/useWidgetApp';
import { backgroundAndBorderColors } from '../../../../options/style-options';
import { UserStory } from '../../../../types/index';
import { ProgressBar } from './ProgressBar';
const { widget } = figma;

const { AutoLayout, Text, Frame, Rectangle, SVG, Ellipse } = widget;

export const HistoriaUsuarioCard = ({ user_story }: { user_story: UserStory }) => {

  const { calcularAnchoBarraProgreso, calcularPorcentajeProgreso } = useWidgetApp()

  console.log(user_story);


  return (
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
          {/* TECH | Dev |
        Design system |
        Crear componente
        acordeon{" "} */}
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
          {/* <AutoLayout
          name="Bars"
          overflow="visible"
          direction="vertical"
          spacing={4}
          width={500}
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
                width={
                  500
                }
                height={8}
              />
              <SVG
                name="Bar Filled"
                x={{
                  type: "horizontal-scale",
                  leftOffsetPercent: 0,
                  rightOffsetPercent: 50,
                }}
                y={{
                  type: "vertical-scale",
                  topOffsetPercent: 0,
                  bottomOffsetPercent: 0,
                }}
                height={8}
                width={
                  250
                }
                src="<svg width='250' height='8' viewBox='0 0 250 8' fill='none' xmlns='http://www.w3.org/2000/svg'>
<path d='M0 4C0 1.79086 1.79086 0 4 0H246C248.209 0 250 1.79086 250 4V4C250 6.20914 248.209 8 246 8H3.99999C1.79085 8 0 6.20914 0 4V4Z' fill='#AEC42E'/>
</svg>
"
              />
            </Frame>

          </AutoLayout>
        </AutoLayout> */}
          <ProgressBar 
            anchoBarraProgreso={ 
              calcularAnchoBarraProgreso(
                user_story.schedulin_OriginalEstimate,
                user_story.schedulin_CompletedWork
              ) 
            }
            
          />

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
  )
}

