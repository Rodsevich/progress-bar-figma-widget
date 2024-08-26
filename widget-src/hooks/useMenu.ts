import useBarraProgreso from "./useBarraProgreso"
import { 
    borderRadiusOptions,
    colorOptions,
    progressBarWidthOptions,
    progressTypeOptions,
    progressBarHeightOptions,
} from "../options/style-options";
import { iconoObjectivo, iconoPorcentaje, iconoRestar,iconoConfiguracion} from '../icons/index';

const useMenu = () => {

	const {
		setContador,
   		setObjectivos,
        color, setColor,
     	setTareas,
        esPorcentajeVisible, setEsPorcentajeVisible,
        tipoProgreso, setTipoProgreso,
        borderRadius, setBorderRadius,
        configuracionAbierta, setConfiguracionAbierta,
        anchoBarraProgreso, setAnchoBarraProgreso,
        largoBarraProgreso, setLargoBarraProgreso,
	} = useBarraProgreso();


	const optionsMenuProgressBar: WidgetPropertyMenuItem[] =   [
		{
			itemType: 'color-selector',
			propertyName: 'colors',
			tooltip: 'Color selector',
			selectedOption: color,
			options: colorOptions,
		},
		{
			itemType: 'dropdown',
			propertyName: 'widths',
			tooltip: 'Width',
			selectedOption: anchoBarraProgreso.toString(),
			options: progressBarWidthOptions,
		},
		{
			itemType: 'dropdown',
			propertyName: 'heights',
			tooltip: 'Height',
			selectedOption: largoBarraProgreso.toString(),
			options: progressBarHeightOptions,
		},
		{
			itemType: 'dropdown',
			propertyName: 'borderRadius',
			tooltip: 'Border radius',
			selectedOption: borderRadius,
			options: borderRadiusOptions,
		},
		{
			itemType: 'separator',
		},
		{
			itemType: 'dropdown',
			propertyName: 'tipoProgreso',
			tooltip: 'Type',
			selectedOption: tipoProgreso,
			options: progressTypeOptions,
		},
		{
			itemType: 'toggle',
			propertyName: 'esPorcentajeVisible',
			tooltip: `Change to ${esPorcentajeVisible ? 'Target' : 'Percentage'} `,
			isToggled: false,
			icon: esPorcentajeVisible ? iconoObjectivo : iconoPorcentaje,
		},
		{
			itemType: 'action',
			propertyName: 'reset',
			tooltip: 'Reset',
			icon: iconoRestar,
		},
		{
			itemType: 'toggle',
			propertyName: 'settings',
			tooltip: 'Settings',
			isToggled: false,
			icon: iconoConfiguracion,
		},
	]

	const handlePropertyChange = ({ propertyName, propertyValue }: WidgetPropertyEvent ):void => {
        if (propertyName === 'colors') {
            setColor(propertyValue ?? '#e06666');
        } else if (propertyName === 'borderRadius') {
            setBorderRadius(propertyValue ?? '4');
        } else if (propertyName === 'widths') {
            setAnchoBarraProgreso(parseInt(propertyValue ?? '100'));
        } else if (propertyName === 'heights') {
            setLargoBarraProgreso(parseInt(propertyValue ?? '24'));
        } else if (propertyName === 'reset') {
            setContador(0);
            if (tipoProgreso === 'todo') {
                setObjectivos(0);
                setTareas([]);
            } else {
                setObjectivos(100);
            }
        } else if (propertyName === 'tipoProgreso') {
            setContador(0);
            setObjectivos(0);
            setTipoProgreso(propertyValue ?? 'objectivo');
        } else if (propertyName === 'esPorcentajeVisible') {
            setEsPorcentajeVisible(!esPorcentajeVisible);
        } else if (propertyName === 'settings') {
            setConfiguracionAbierta(!configuracionAbierta);
        }
    };

	return {
		optionsMenuProgressBar,
		handlePropertyChange,
	}
}

export default useMenu;
