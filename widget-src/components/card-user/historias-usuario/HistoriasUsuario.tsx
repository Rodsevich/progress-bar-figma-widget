import { ReportUserStories, User } from "../../../types/index";
import { DividerHistorias } from "./components/DividerHistorias";
import { HistoriaUsuarioCard } from "./components/HistoriaUsuarioCard";
import { TextTarea } from "./components/TextTarea";


const { widget } = figma;
const { AutoLayout, Text, Frame, Rectangle, SVG, Ellipse } = widget;

export const HistoriasUsuario = ({ infoItem }: { infoItem: ReportUserStories }) => {
  return (
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
            <HistoriaUsuarioCard user_story={user_story} />
            <DividerHistorias />
          </AutoLayout>


        ))


      }
      <TextTarea id_user={infoItem.user.id} />



    </AutoLayout>
  )
}

