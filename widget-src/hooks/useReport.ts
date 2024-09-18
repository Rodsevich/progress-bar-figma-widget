import { createSectionDayHistory } from "../components/report/SectionDayHistory";
import { createReportFrame } from "../components/ReportFrame";
import { useWidgetApp } from "./useWidgetApp";

const { widget } = figma;

export const useReport = () => {

    const {info,reporteDia,statusDia,dateCurrent} = useWidgetApp()


    const guardarReporte = async () => {
        try {
            const existingFrame = figma.currentPage.findOne(node => node.type === 'FRAME' && node.name === "SemanasFrame") as FrameNode;
        
            const data = {
                info,
                reporteDia,
                statusDia,
                day: dateCurrent
            };
    
            let sectionNode;
    
            if (existingFrame) {
                sectionNode = await createSectionDayHistory(data);
                existingFrame.x -= 1350;
                sectionNode.locked = true;
                existingFrame.appendChild(sectionNode);
                figma.notify("Reporte guardado correctamente.");
            } else {
                const newFrameSemanas = await createReportFrame();
                sectionNode = await createSectionDayHistory(data);
                sectionNode.locked = true;
                newFrameSemanas.x = sectionNode.x - 1600;
                newFrameSemanas.y = sectionNode.y;
                newFrameSemanas.appendChild(sectionNode);
                figma.currentPage.appendChild(newFrameSemanas);
                figma.notify("Se ha creado un nuevo frame: SemanasFrame.");
            }
        } catch (error) {
            console.error("Error al guardar el reporte:", error);
            figma.notify("Error al guardar el reporte.");
        }
    };

    return {
        guardarReporte,
    }
}


