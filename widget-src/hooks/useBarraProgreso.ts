import { generateUniqueId } from '../utils/progress-bar.utils';
const { widget } = figma;

const {
    useSyncedState,
} = widget;


function useBarraProgreso() {


    const [esPorcentajeVisible, setEsPorcentajeVisible] = useSyncedState(
        'esPorcentajeVisible',
        false
    );

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


    const calcularPorcentajeProgreso = () => {
        if (contador === 0 && objectivo === 0) return 0;
        return (contador / objectivo) * 100;
    };

    const calcularAnchoBarraProgreso = () => {
        if (objectivo === 0) return 0;
        const maxWidth = anchoBarraProgreso;
        const width = (calcularPorcentajeProgreso() / 100) * maxWidth;
        return width;
    };


    const handleAgregarTarea = () => {
        setObjectivos((prev) => prev + 1);
        setTareas((prevTodos) => [
            ...prevTodos,
            { id: generateUniqueId(), isChecked: false, value: null },
        ]);
    };

    return {
        contador, setContador,
        objectivo, setObjectivos,
        color, setColor,
        tarea, setTareas,
        esPorcentajeVisible, setEsPorcentajeVisible,
        tipoProgreso, setTipoProgreso,
        borderRadius, setBorderRadius,
        configuracionAbierta, setConfiguracionAbierta,
        anchoBarraProgreso, setAnchoBarraProgreso,
        largoBarraProgreso, setLargoBarraProgreso,
        calcularPorcentajeProgreso,
        calcularAnchoBarraProgreso,
        handleAgregarTarea,
    }
}

export default useBarraProgreso;
