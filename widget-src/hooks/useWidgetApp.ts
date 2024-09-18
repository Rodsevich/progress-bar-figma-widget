import { getAllInfo } from '../services/user_stories';
import { StatusDia, EpicaResponse, ReporteDia, ReportUserStories, ReportUserStoriesReponse, UserStoryReponse, UserStory } from '../types/index';
import { generateDate, generateUniqueId } from '../utils/index';
const { widget } = figma;

const {
    useSyncedState,
} = widget;


export const useWidgetApp = () => {


    const [esPorcentajeVisible, setEsPorcentajeVisible] = useSyncedState(
        'esPorcentajeVisible',
        false
    );

    const [epics, setEpics] = useSyncedState<EpicaResponse[]>('epics', []);
    const [info, setInfo] = useSyncedState<ReportUserStories[]>('info', []);

    const [tipoProgreso, setTipoProgreso] = useSyncedState(
        'tipoProgreso',
        'objectivo'
    );
    const [tarea, setTareas] = useSyncedState<
        { id: string; isChecked: boolean; value: string | null }[]
    >('tarea', []);
    const [contador, setContador] = useSyncedState('contador', 0);
    const [objectivo, setObjectivos] = useSyncedState('objectivo', tipoProgreso === 'objectivo' ? 100 : 0);
    const [color, setColor] = useSyncedState('theme', '#9746ff');
    const [borderRadius, setBorderRadius] = useSyncedState('borderRadius', '4');
    const [configuracionAbierta, setConfiguracionAbierta] = useSyncedState('configuracionAbierta', true);
    const [anchoBarraProgreso, setAnchoBarraProgreso] = useSyncedState('anchoBarraProgreso', 300);
    const [largoBarraProgreso, setLargoBarraProgreso] = useSyncedState('largoBarraProgreso', 24);
    const [reporteDia, setReporteDia] = useSyncedState<ReporteDia[]>('reportDia', []);
    const [statusDia, setStatusDia] = useSyncedState<StatusDia[]>('statusDia', [])
    const [dateCurrent,setDateCurrent] = useSyncedState<string>('dateCurrent','')


    const calcularPorcentajeProgreso = (original_estimate:number, completed:number) => {
        if (original_estimate === 0) return 0;
        return Math.floor((completed / original_estimate) * 100);
    };
    
    const calcularAnchoBarraProgreso = (original_estimate:number, completed:number, maxWidth:number = 500) => {
        const porcentajeProgreso = calcularPorcentajeProgreso(original_estimate, completed);
        const width = (porcentajeProgreso / 100) * maxWidth;
        return width;
    };

    const handleAgregarTarea = () => {
        setObjectivos((prev) => prev + 1);
        setTareas((prevTodos) => [
            ...prevTodos,
            { id: generateUniqueId(), isChecked: false, value: null },
        ]);
    };

    const getInfo = async () => {
        try {
            const data:ReportUserStoriesReponse[] = await getAllInfo();
            console.log('info back',data);
            const info = await mappingInfo(data)
            setInfo(info);
            await obtenerReportDia(info);
        } catch (error) {
            console.error('Error fetching epics:', error);
        }
    };

    const generate = async (action:string) => {

        setDateCurrent(generateDate());
        await getInfo();
        figma.notify(`Día ${action === 'reset' ? 'actualizado' : 'generado'} correctamente (●'◡'●)`);
    };

    const mappingInfo = async(info:ReportUserStoriesReponse[]):Promise<ReportUserStories[]> =>{

        const newInfoMapping:ReportUserStories[] = [];

        for (const infoItem of info) {

            const mappingUserStory:UserStory[] = [];

            infoItem.user_stories.map((user_story)=>{
                mappingUserStory.push({
                    id:user_story.id,
                    title:user_story['System.Title'],
                    areaPath:user_story['System.AreaPath'],
                    teamProject:user_story['System.TeamProject'],
                    iterationPath:user_story['System.IterationPath'],
                    description:user_story['System.description'],
                    state:user_story['System.State'],
                    createdBy:user_story['System.CreatedBy'].displayName,
                    url:user_story['System.Url'],
                    schedulin_RemainingWork:user_story['Microsoft.VSTS.Scheduling.RemainingWork'],
                    schedulin_OriginalEstimate:user_story['Microsoft.VSTS.Scheduling.OriginalEstimate'],
                    schedulin_CompletedWork:user_story['Microsoft.VSTS.Scheduling.CompletedWork'],
                })
            })

            newInfoMapping.push({
                user:infoItem.user,
                user_stories:mappingUserStory
            })

        }
        console.log('info mapeada',newInfoMapping);
        return newInfoMapping;

    };

    const obtenerReportDia = async (info: ReportUserStories[]) => {
        try {
            console.log('se generó el dia');
            for (const infoItem of info) {
                
                await setReporteDia((prev) => {
                    // const existingReportIndex = prev.findIndex(report => report.id === infoItem.user.id);
                    const newReport = {
                        id: infoItem.user.id,
                        report: ''
                    };
                    // if (existingReportIndex !== -1) {
                    //     const newPrev = [...prev];
                    //     newPrev[existingReportIndex] = newReport;
                    //     return newPrev;
                    // } else {
                        return [...prev, newReport];
                    // }
                });
    
                await setStatusDia((prev) => {
                    const newStatus = {
                        id: infoItem.user.id,
                        bloqueo_description: null,
                        bloqueo: false,
                        levantada_mano: false,
                    };
                    return [...prev, newStatus];
                });
            }
        } catch (error) {
            console.error('Error en obtenerReportDia:', error);
        }
    };


    return {
        contador, setContador,
        objectivo, setObjectivos,
        color, setColor,
        tarea, setTareas,
        epics, setEpics,
        info, setInfo,
        statusDia, setStatusDia,
        reporteDia, setReporteDia,
        dateCurrent, setDateCurrent,
        esPorcentajeVisible, setEsPorcentajeVisible,
        tipoProgreso, setTipoProgreso,
        borderRadius, setBorderRadius,
        configuracionAbierta, setConfiguracionAbierta,
        anchoBarraProgreso, setAnchoBarraProgreso,
        largoBarraProgreso, setLargoBarraProgreso,
        calcularPorcentajeProgreso,
        calcularAnchoBarraProgreso,
        handleAgregarTarea,
        generate,
    }
}
