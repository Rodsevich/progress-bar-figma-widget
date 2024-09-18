import {useReport, useWidgetApp} from './index';
import { iconoObjectivo, iconoPorcentaje, iconoRestar,iconoConfiguracion, iconoPlay, iconoSaveDay} from '../icons/index';
import { 
    borderRadiusOptions,
    colorOptions,
    progressBarWidthOptions,
    progressTypeOptions,
    progressBarHeightOptions,
} from "../options/style-options";

export const useMenu = () => {

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
		generate,
	} = useWidgetApp();

	const {guardarReporte} = useReport()

	const optionsMenuProgressBar: WidgetPropertyMenuItem[] =   [
		// {
		// 	itemType: 'color-selector',
		// 	propertyName: 'colors',
		// 	tooltip: 'Color selector',
		// 	selectedOption: color,
		// 	options: colorOptions,
		// },
		{
			itemType: 'toggle',
			propertyName: 'generateDay',
			tooltip: 'Generar día',
			isToggled: false,
			icon: iconoPlay,
		},
		{
			itemType: 'action',
			propertyName: 'reset',
			tooltip: 'Reiniciar',
			icon: iconoRestar,
		},
		// {
		// 	itemType: 'dropdown',
		// 	propertyName: 'widths',
		// 	tooltip: 'Width',
		// 	selectedOption: anchoBarraProgreso.toString(),
		// 	options: progressBarWidthOptions,
		// },
		// {
		// 	itemType: 'dropdown',
		// 	propertyName: 'heights',
		// 	tooltip: 'Height',
		// 	selectedOption: largoBarraProgreso.toString(),
		// 	options: progressBarHeightOptions,
		// },
		// {
		// 	itemType: 'dropdown',
		// 	propertyName: 'borderRadius',
		// 	tooltip: 'Border radius',
		// 	selectedOption: borderRadius,
		// 	options: borderRadiusOptions,
		// },
		{
			itemType: 'separator',
		},
		// {
		// 	itemType: 'dropdown',
		// 	propertyName: 'tipoProgreso',
		// 	tooltip: 'Type',
		// 	selectedOption: tipoProgreso,
		// 	options: progressTypeOptions,
		// },
		// {
		// 	itemType: 'toggle',
		// 	propertyName: 'esPorcentajeVisible',
		// 	tooltip: `Change to ${esPorcentajeVisible ? 'Target' : 'Percentage'} `,
		// 	isToggled: false,
		// 	icon: esPorcentajeVisible ? iconoObjectivo : iconoPorcentaje,
		// },
		{
			itemType: 'action',
			propertyName: 'saveDay',
			tooltip: 'Guardar día',
			icon: iconoSaveDay,
		},
		{
			itemType: 'toggle',
			propertyName: 'settings',
			tooltip: 'Configuración',
			isToggled: false,
			icon: iconoConfiguracion,
		},
	]

	const handlePropertyChange = async({ propertyName, propertyValue }: WidgetPropertyEvent ) => {
        if (propertyName === 'colors') {
            setColor(propertyValue ?? '#e06666');
        }
		else if(propertyName === 'generateDay'){
			await generate('new');
		}
		else if(propertyName === 'reset'){
			await generate('reset');
		}
		else if(propertyName === 'saveDay'){
			await guardarReporte()
		}
    };

	return {
		optionsMenuProgressBar,
		handlePropertyChange,
	}
};