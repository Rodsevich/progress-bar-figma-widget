import { iconoMenos, iconoSumar,} from "./icons/index";
import useBarraProgreso from './hooks/useBarraProgreso';
import {
    backgroundAndBorderColors,
} from './options/style-options';
import useMenu from "./hooks/useMenu";

const { widget } = figma;

const {
    usePropertyMenu,
    useStickable,
    AutoLayout,
    Text,
    SVG,
    Input,
    Image,
    Frame,
} = widget;

const user = figma.currentUser;

function Widget() {


    const {
        contador, setContador,
        objectivo, setObjectivos,
        color,
        tarea, setTareas,
        esPorcentajeVisible,
        tipoProgreso,
        borderRadius,
        configuracionAbierta,
        anchoBarraProgreso,
        largoBarraProgreso,
        calcularAnchoBarraProgreso,
        handleAgregarTarea,
        calcularPorcentajeProgreso,
    } = useBarraProgreso();


    const { handlePropertyChange, optionsMenuProgressBar } = useMenu()

    usePropertyMenu(optionsMenuProgressBar, handlePropertyChange);
    
    const obtenerColors = () => backgroundAndBorderColors.find((b) => b.borderColor === color);
    
    
    useStickable();

    return (
        <AutoLayout
            name='Progress-Bar'
            overflow='visible'
            // width={300}
            direction='vertical'
            spacing={16}
        >
             <AutoLayout
                horizontalAlignItems='center'
                verticalAlignItems='center'
            >
                {/* Image perfil */}
                <Image
                    cornerRadius={100}
                    src={user?.photoUrl || ''}
                    width={50}
                    height={50}
                    />
                    
                <AutoLayout  padding={{ left: 8 }} direction="vertical">
                    <Text fontSize={15} italic>Name</Text>
                    <Text>{user?.name}</Text>

                </AutoLayout>
            </AutoLayout>

           
            {/* Prosress Bar */}
            <AutoLayout
                name='Contain'
                verticalAlignItems={'center'}
                cornerRadius={parseInt(borderRadius) ?? 4}
                fill={
                    obtenerColors()?.backgroundColor ??
                    backgroundAndBorderColors[0].backgroundColor
                }
                stroke={
                    obtenerColors()?.borderColor ?? backgroundAndBorderColors[0].borderColor
                }
                width={anchoBarraProgreso}
                height={largoBarraProgreso}
            >
                {contador !== 0 && (
                    // progress
                    <AutoLayout
                        name='Progress-Color'
                        verticalAlignItems={'center'}
                        horizontalAlignItems={'center'}
                        cornerRadius={parseInt(borderRadius) ?? 4}
                        fill={
                            obtenerColors()?.borderColor ??
                            backgroundAndBorderColors[0].borderColor
                        }
                        width={calcularAnchoBarraProgreso()}
                    ></AutoLayout>
                )}

                {esPorcentajeVisible && (
                    <AutoLayout
                        width={anchoBarraProgreso}
                        height={24}
                        verticalAlignItems='center'
                        horizontalAlignItems='center'
                        positioning='absolute'
                    >
                        <Text>{calcularPorcentajeProgreso().toFixed(0)}%</Text>
                    </AutoLayout>
                )}

                {!esPorcentajeVisible && (
                    <AutoLayout
                        name='Target-Info'
                        width={anchoBarraProgreso}
                        height={largoBarraProgreso}
                        verticalAlignItems='center'
                        horizontalAlignItems='center'
                        positioning='absolute'
                    >
                        <AutoLayout
                            name='Count'
                            positioning='absolute'
                            height={largoBarraProgreso}
                            width={anchoBarraProgreso}
                            horizontalAlignItems='start'
                            verticalAlignItems='center'
                            padding={{ left: 8 }}
                        >
                            <Text>{contador}</Text>
                        </AutoLayout>
                        <AutoLayout
                            name='Target'
                            positioning='absolute'
                            height={largoBarraProgreso}
                            width={anchoBarraProgreso}
                            horizontalAlignItems='end'
                            verticalAlignItems='center'
                            padding={{ right: 8 }}
                        >
                            <Text>{objectivo}</Text>
                        </AutoLayout>
                    </AutoLayout>
                )}
            </AutoLayout>

            {/* Settings */}
            {configuracionAbierta && (
                <AutoLayout
                    name='Progress-Bar__Actions'
                >
                    {tipoProgreso === 'objectivo' && (
                        <AutoLayout
                            name='Progress-Bar-Settings'
                            padding={4}
                            cornerRadius={4}
                            fill={'#FFFFFF'}
                            stroke={'#E6E6E6'}
                            y={32}
                            width={300}
                            direction='horizontal'
                        >
                            {/* Contador input */}
                            <AutoLayout
                                name='Count-Input'
                                verticalAlignItems={'center'} padding={{ left: 3 }} >
                                <Text fontSize={16} horizontalAlignText={'left'}>
                                    Count:
                                </Text>
                                <AutoLayout
                                    name='Actions'
                                    verticalAlignItems={'center'}
                                    padding={{ left: 8, right: 16 }}
                                    horizontalAlignItems='center'
                                >
                                    <SVG
                                        name='Low'
                                        src={iconoMenos}
                                        onClick={() => {
                                            if (contador === 0) return;

                                            setContador(contador - 1);
                                        }}
                                    ></SVG>
                                    <Input
                                        name='countInput'
                                        fontSize={16}
                                        horizontalAlignText='center'
                                        onTextEditEnd={(event) => {
                                            setContador(parseInt(event.characters));
                                        }}
                                        value={contador.toString()}
                                        width={40}
                                        y={100}
                                        verticalAlignText='center'
                                    />
                                    <SVG
                                        name='Plus'
                                        src={iconoSumar}
                                        onClick={() => {
                                            if (contador === objectivo) return;

                                            setContador(contador + 1);
                                        }}
                                    ></SVG>
                                </AutoLayout>
                            </AutoLayout>

                            {/* Input objectivo */}
                            <AutoLayout verticalAlignItems={'center'}>
                                <Text fontSize={16}>Target:</Text>
                                <AutoLayout
                                    verticalAlignItems={'center'}
                                    padding={{ left: 8, right: 16 }}
                                    horizontalAlignItems='center'
                                >
                                    <SVG
                                        name="Menos"
                                        src={iconoMenos}
                                        onClick={() => {
                                            if (objectivo === 0) return;

                                            setObjectivos(objectivo - 1);
                                        }}
                                    ></SVG>
                                    <Input
                                        name='targetInput'
                                        fontSize={16}
                                        horizontalAlignText='center'
                                        onTextEditEnd={(event) => {
                                            setObjectivos(parseInt(event.characters));
                                        }}
                                        value={objectivo.toString()}
                                        width={40}
                                        y={100}
                                        verticalAlignText='center'
                                    />
                                    <SVG
                                        name="mas"
                                        src={iconoSumar}
                                        onClick={() => {
                                            setObjectivos(objectivo + 1);
                                        }}
                                    ></SVG>
                                </AutoLayout>
                            </AutoLayout>
                        </AutoLayout>
                    )}

                    {/* LISTA DE TAREAS */}
                    {tipoProgreso === 'todo' && (
                        <AutoLayout y={32} direction='vertical' spacing={8}>
                            {tarea.map((todo, index) => (
                                <AutoLayout
                                    key={index}
                                    direction='horizontal'
                                    verticalAlignItems='center'
                                    spacing={8}
                                >
                                    <AutoLayout
                                        width={12}
                                        height={12}
                                        cornerRadius={100}
                                        verticalAlignItems='center'
                                        horizontalAlignItems='center'
                                        fill={obtenerColors()?.backgroundColor}
                                        stroke={obtenerColors()?.borderColor}
                                        hoverStyle={{
                                            fill: obtenerColors()?.hover,
                                        }}
                                        onClick={() => {
                                            const filterOtherTodos = tarea.filter(
                                                (_todo) => todo.id !== _todo.id
                                            );

                                            if (!todo.isChecked) {
                                                setContador(contador + 1);
                                            } else if (contador >= 1) {
                                                setContador(contador - 1);
                                            }

                                            setTareas([
                                                ...filterOtherTodos,
                                                {
                                                    ...todo,
                                                    isChecked: !todo.isChecked,
                                                },
                                            ]);
                                        }}
                                    >
                                        {todo.isChecked && (
                                            <SVG
                                                positioning='absolute'
                                                y={1.5}
                                                src={`<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="${obtenerColors()?.borderColor
                                                    }" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check"><path d="M20 6 9 17l-5-5"/></svg>`}
                                            />
                                        )}
                                    </AutoLayout>

                                    <Input
                                        name={'todo-' + index}
                                        fontSize={12}
                                        horizontalAlignText='left'
                                        textDecoration={todo.isChecked ? 'strikethrough' : 'none'}
                                        onTextEditEnd={(event) => {
                                            const updatedTodos = tarea.map((t) =>
                                                t.id === todo.id ? { ...t, value: event.characters } : t
                                            );

                                            setTareas(updatedTodos);
                                        }}
                                        value={todo.value}
                                        width={anchoBarraProgreso - 44}
                                        verticalAlignText='center'
                                        placeholder='Add todo'
                                    />
                                    <SVG
                                        opacity={0.2}
                                        hoverStyle={{
                                            opacity: 0.5,
                                        }}
                                        src={iconoMenos}
                                        onClick={() => {
                                            setTareas(tarea.filter((t) => t.id !== todo.id));
                                            setObjectivos(objectivo - 1);
                                        }}
                                    ></SVG>
                                </AutoLayout>
                            ))}

                            <AutoLayout
                                height={24}
                                cornerRadius={8}
                                fill={obtenerColors()?.backgroundColor}
                                onClick={() => handleAgregarTarea()}
                                stroke={obtenerColors()?.borderColor}
                                horizontalAlignItems='center'
                                verticalAlignItems='center'
                                padding={{
                                    left: 4,
                                    right: 4,
                                }}
                                hoverStyle={{
                                    fill: obtenerColors()?.hover,
                                }}
                            >
                                <Text fontSize={12}>Add Todo</Text>
                            </AutoLayout>
                        </AutoLayout>
                    )}
                </AutoLayout>
            )}
        </AutoLayout>
    );
}

widget.register(Widget);
