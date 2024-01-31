import {
  backgroundAndBorderColors,
  borderRadiusOptions,
  colorOptions,
  progressBarWidthOptions,
} from './style-options';

const { widget } = figma;

const {
  useSyncedState,
  usePropertyMenu,
  useStickable,
  AutoLayout,
  Text,
  SVG,
  Input,
} = widget;

function Widget() {
  const [isPercentVisible, setIsPercentVisible] = useSyncedState(
    'isPercentVisible',
    false
  );
  const [progressType, setProgressType] = useSyncedState(
    'progressType',
    'target'
  );
  const [count, setCount] = useSyncedState('count', 0);
  const [target, setTarget] = useSyncedState(
    'target',
    progressType === 'target' ? 100 : 0
  );
  const [color, setColor] = useSyncedState('theme', '#9746ff');
  const [borderRadius, setBorderRadius] = useSyncedState('borderRadius', '4');
  const [isSettingsOpen, setIsSettingsOpen] = useSyncedState(
    'isSettingsOpen',
    true
  );
  const [progressBarWidth, setProgressBarWidth] = useSyncedState(
    'progressBarWidth',
    300
  );
  const [todos, setTodos] = useSyncedState<
    { id: string; isChecked: boolean; value: string | null }[]
  >('todos', []);

  useStickable();

  usePropertyMenu(
    [
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
        selectedOption: progressBarWidth.toString(),
        options: progressBarWidthOptions,
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
        propertyName: 'progressType',
        tooltip: 'Type',
        selectedOption: progressType,
        options: [
          { label: 'Target', option: 'target' },
          { label: 'Todo', option: 'todo' },
        ],
      },
      {
        itemType: 'toggle',
        propertyName: 'isPercentVisible',
        tooltip: `Change to ${isPercentVisible ? 'Target' : 'Percentage'} `,
        isToggled: false,
        icon: isPercentVisible
          ? `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-target"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>`
          : `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-percent"><line x1="19" x2="5" y1="5" y2="19"/><circle cx="6.5" cy="6.5" r="2.5"/><circle cx="17.5" cy="17.5" r="2.5"/></svg>`,
      },
      {
        itemType: 'action',
        propertyName: 'reset',
        tooltip: 'Reset',
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-rotate-ccw"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>`,
      },
      {
        itemType: 'toggle',
        propertyName: 'settings',
        tooltip: 'Settings',
        isToggled: false,
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-settings"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>`,
      },
    ],
    ({ propertyName, propertyValue }) => {
      if (propertyName === 'colors') {
        setColor(propertyValue ?? '#e06666');
      } else if (propertyName === 'borderRadius') {
        setBorderRadius(propertyValue ?? '4');
      } else if (propertyName === 'widths') {
        setProgressBarWidth(parseInt(propertyValue ?? '100'));
      } else if (propertyName === 'reset') {
        setCount(0);

        if (progressType === 'todo') {
          setTarget(0);
          setTodos([]);
        } else {
          setTarget(100);
        }
      } else if (propertyName === 'progressType') {
        setCount(0);
        setTarget(0);
        setProgressType(propertyValue ?? 'target');
      } else if (propertyName === 'isPercentVisible') {
        setIsPercentVisible(!isPercentVisible);
      } else if (propertyName === 'settings') {
        setIsSettingsOpen(!isSettingsOpen);
      }
    }
  );

  const generateUniqueId = () => {
    const timestamp = new Date().getTime();
    const random = Math.floor(Math.random() * 1000); // Adjust the range as needed
    return `${timestamp}-${random}`;
  };

  const progressPercentage = () => {
    if (count === 0 && target === 0) return 0;

    return (count / target) * 100;
  };

  const calculateProgressBarWidth = () => {
    if (target === 0) {
      return 0;
    }

    const maxWidth = progressBarWidth;
    const width = (progressPercentage() / 100) * maxWidth;

    return width;
  };

  const getColors = () =>
    backgroundAndBorderColors.find((b) => b.borderColor === color);

  const handleAddTodo = () => {
    setTarget((prev) => prev + 1);
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: generateUniqueId(), isChecked: false, value: null },
    ]);
  };

  return (
    <AutoLayout
      name='Progress-Bar'
      overflow='visible'
      width={300}
      direction='vertical'
      spacing={16}
    >
      {/* Prosress Bar */}
      <AutoLayout
        verticalAlignItems={'center'}
        cornerRadius={parseInt(borderRadius) ?? 4}
        fill={
          getColors()?.backgroundColor ??
          backgroundAndBorderColors[0].backgroundColor
        }
        stroke={
          getColors()?.borderColor ?? backgroundAndBorderColors[0].borderColor
        }
        width={progressBarWidth}
        height={24}
      >
        {count !== 0 && (
          <AutoLayout
            verticalAlignItems={'center'}
            cornerRadius={parseInt(borderRadius) ?? 4}
            fill={
              getColors()?.borderColor ??
              backgroundAndBorderColors[0].borderColor
            }
            width={calculateProgressBarWidth()}
            height={24}
          ></AutoLayout>
        )}

        {isPercentVisible && (
          <AutoLayout
            width={progressBarWidth}
            height={24}
            horizontalAlignItems='center'
            verticalAlignItems='center'
            positioning='absolute'
          >
            <Text>{progressPercentage().toFixed(0)}%</Text>
          </AutoLayout>
        )}

        {!isPercentVisible && (
          <AutoLayout
            width={progressBarWidth}
            height={24}
            verticalAlignItems='center'
            positioning='absolute'
          >
            <AutoLayout
              positioning='absolute'
              height={24}
              width={progressBarWidth}
              horizontalAlignItems='start'
              verticalAlignItems='center'
              padding={{ left: 8 }}
            >
              <Text>{count}</Text>
            </AutoLayout>
            <AutoLayout
              positioning='absolute'
              height={24}
              width={progressBarWidth}
              horizontalAlignItems='end'
              verticalAlignItems='center'
              padding={{ right: 8 }}
            >
              <Text>{target}</Text>
            </AutoLayout>
          </AutoLayout>
        )}
      </AutoLayout>

      {/* Settings */}
      {isSettingsOpen && (
        <AutoLayout>
          {progressType === 'target' && (
            <AutoLayout
              padding={4}
              cornerRadius={4}
              fill={'#FFFFFF'}
              stroke={'#E6E6E6'}
              y={32}
              width={300}
              direction='vertical'
            >
              {/* Count Input */}
              <AutoLayout verticalAlignItems={'center'} padding={{ left: 3 }}>
                <Text fontSize={16} horizontalAlignText={'left'}>
                  Count:
                </Text>
                <AutoLayout
                  verticalAlignItems={'center'}
                  padding={{ left: 8, right: 16 }}
                  horizontalAlignItems='center'
                >
                  <SVG
                    src={`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-minus-circle"><circle cx="12" cy="12" r="10"/><path d="M8 12h8"/></svg>`}
                    onClick={() => {
                      if (count === 0) return;

                      setCount(count - 1);
                    }}
                  ></SVG>
                  <Input
                    name='countInput'
                    fontSize={16}
                    horizontalAlignText='center'
                    onTextEditEnd={(event) => {
                      setCount(parseInt(event.characters));
                    }}
                    value={count.toString()}
                    width={40}
                    y={100}
                    verticalAlignText='center'
                  />
                  <SVG
                    src={`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus-circle"><circle cx="12" cy="12" r="10"/><path d="M8 12h8"/><path d="M12 8v8"/></svg>`}
                    onClick={() => {
                      if (count === target) return;

                      setCount(count + 1);
                    }}
                  ></SVG>
                </AutoLayout>
              </AutoLayout>

              {/* Target Input */}
              <AutoLayout verticalAlignItems={'center'}>
                <Text fontSize={16}>Target:</Text>
                <AutoLayout
                  verticalAlignItems={'center'}
                  padding={{ left: 8, right: 16 }}
                  horizontalAlignItems='center'
                >
                  <SVG
                    src={`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-minus-circle"><circle cx="12" cy="12" r="10"/><path d="M8 12h8"/></svg>`}
                    onClick={() => {
                      if (target === 0) return;

                      setTarget(target - 1);
                    }}
                  ></SVG>
                  <Input
                    name='targetInput'
                    fontSize={16}
                    horizontalAlignText='center'
                    onTextEditEnd={(event) => {
                      setTarget(parseInt(event.characters));
                    }}
                    value={target.toString()}
                    width={40}
                    y={100}
                    verticalAlignText='center'
                  />
                  <SVG
                    src={`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus-circle"><circle cx="12" cy="12" r="10"/><path d="M8 12h8"/><path d="M12 8v8"/></svg>`}
                    onClick={() => {
                      setTarget(target + 1);
                    }}
                  ></SVG>
                </AutoLayout>
              </AutoLayout>
            </AutoLayout>
          )}

          {/* TODO LIST */}
          {progressType === 'todo' && (
            <AutoLayout y={32} direction='vertical' spacing={8}>
              {todos.map((todo, index) => (
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
                    fill={getColors()?.backgroundColor}
                    stroke={getColors()?.borderColor}
                    hoverStyle={{
                      fill: getColors()?.hover,
                    }}
                    onClick={() => {
                      const filterOtherTodos = todos.filter(
                        (_todo) => todo.id !== _todo.id
                      );

                      if (!todo.isChecked) {
                        setCount(count + 1);
                      } else if (count >= 1) {
                        setCount(count - 1);
                      }

                      setTodos([
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
                        src={`<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="${
                          getColors()?.borderColor
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
                      const updatedTodos = todos.map((t) =>
                        t.id === todo.id ? { ...t, value: event.characters } : t
                      );

                      setTodos(updatedTodos);
                    }}
                    value={todo.value}
                    width={progressBarWidth - 44}
                    verticalAlignText='center'
                    placeholder='Add todo'
                  />
                  <SVG
                    opacity={0.2}
                    hoverStyle={{
                      opacity: 0.5,
                    }}
                    src={`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2c2c2c" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x-circle"><circle cx="12" cy="12" r="10"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/></svg>`}
                    onClick={() => {
                      setTodos(todos.filter((t) => t.id !== todo.id));

                      setTarget(target - 1);
                    }}
                  ></SVG>
                </AutoLayout>
              ))}

              <AutoLayout
                height={24}
                cornerRadius={8}
                fill={getColors()?.backgroundColor}
                onClick={() => handleAddTodo()}
                stroke={getColors()?.borderColor}
                horizontalAlignItems='center'
                verticalAlignItems='center'
                padding={{
                  left: 4,
                  right: 4,
                }}
                hoverStyle={{
                  fill: getColors()?.hover,
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
