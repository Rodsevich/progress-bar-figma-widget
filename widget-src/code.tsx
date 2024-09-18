import { iconoMenos, iconoSumar, } from "./icons/index";
import { useWidgetApp, useMenu } from './hooks/index';
import { SectionDay, UserProfile } from "./components/index"
import { dateNow, generateDate } from "./utils/index";
import { ReporteDia, ReportUserStories, User } from "./types/index";
// import { getAllInfo } from "./services/user_stories";

const { widget } = figma;

const {
  usePropertyMenu,
  useStickable,
  AutoLayout,
  Text,
  useEffect,
  Image
} = widget;


function Widget() {

  const {
    color,
    info,
  } = useWidgetApp();


  const { handlePropertyChange, optionsMenuProgressBar } = useMenu();
  usePropertyMenu(optionsMenuProgressBar, handlePropertyChange);

  // async function loadFont() {
  //     await figma.loadFontAsync({ family: "Inter", style: "Regular" });
  //     await figma.loadFontAsync({ family: "Heebo", style: "Regular" });
  //     await figma.loadFontAsync({ family: "Heebo", style: "Medium" });
  //     await figma.loadFontAsync({ family: "Heebo", style: "SemiBold" });
  //     await figma.loadFontAsync({ family: "Heebo", style: "Bold" });
  // }

  useStickable();


  return (
    <AutoLayout
      name='Grello App'
      direction='vertical'
      spacing={16}
    >
      {
        info.length > 0
          ?
          <SectionDay infoItems={info} />
          : <AutoLayout
            name="Grello"
            fill="#EAF6E9"
            stroke="#9DD69C"
            cornerRadius={4}
            spacing={8}
            padding={{
              vertical: 14,
              horizontal: 16,
            }}
            width={344}
          >
            <Text
              name="WELCOME TO GRELLO"
              fill="#404040"
              width={312}
              height={42}
              verticalAlignText="center"
              horizontalAlignText="center"
              fontFamily="Heebo"
              fontSize={24}
              fontWeight={500}
            >
              Bienvenido a Grello
            </Text>
          </AutoLayout>
      }
    </AutoLayout>
  );
}

widget.register(Widget);


