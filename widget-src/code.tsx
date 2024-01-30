const { widget } = figma;

const {
  useSyncedState,
  usePropertyMenu,
  useStickable,
  useEffect,
  waitForTask,
  AutoLayout,
  Text,
  SVG,
  Input,
  Frame,
  Rectangle,
} = widget;

function Widget() {
  const [count, setCount] = useSyncedState('count', 0);
  const [isPercentVisible, setIsPercentVisible] = useSyncedState(
    'isPercentVisible',
    false
  );
  const [progressType, setProgressType] = useSyncedState(
    'progressType',
    'target'
  );
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

  const colorOptions = [
    { option: '#e6e6e6', tooltip: 'Light-grey' },
    { option: '#f24822', tooltip: 'Red' },
    { option: '#ffcd29', tooltip: 'Yellow' },
    { option: '#15ae5c', tooltip: 'Green' },
    { option: '#0d9aff', tooltip: 'Blue' },
    { option: '#9746ff', tooltip: 'Violet' },
    { option: '#2c2c2c', tooltip: 'Black' },
  ];

  const borderRadiusOptions = [
    { option: '4', label: '4px' },
    { option: '8', label: '8px' },
    { option: '16', label: '16px' },
  ];

  const backgroundAndBorderColors = [
    {
      label: 'light-grey',
      backgroundColor: '#fbfbf9',
      borderColor: '#e6e6e6',
      hover: '#e2e2e2',
    },
    {
      label: 'red',
      backgroundColor: '#fee4de',
      borderColor: '#f24822',
      hover: '#ffd0c5',
    },
    {
      label: 'yellow',
      backgroundColor: '#fffcf1',
      borderColor: '#ffcd29',
      hover: '#f9f2d6',
    },
    {
      label: 'green',
      backgroundColor: '#dcf3e6',
      borderColor: '#15ae5c',
      hover: '#caf2db',
    },
    {
      label: 'blue',
      backgroundColor: '#dbf1ff',
      borderColor: '#0d9aff',
      hover: '#c6e9ff',
    },
    {
      label: 'violet',
      backgroundColor: '#efe3ff',
      borderColor: '#9746ff',
      hover: '#dfcafb',
    },
    {
      label: 'black',
      backgroundColor: '#dddddd',
      borderColor: '#2c2c2c',
      hover: '#c4c4c4',
    },
  ];

  const progressBarWidthOptions = [
    { option: '100', label: 'Tiny' },
    { option: '125', label: 'Small' },
    { option: '150', label: 'Medium' },
    { option: '200', label: 'Large' },
    { option: '300', label: 'Extra Large' },
    { option: '500', label: 'Huge' },
  ];

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
        itemType: 'action',
        propertyName: 'reset',
        tooltip: 'Reset',
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-rotate-ccw"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>`,
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
        tooltip: 'Percentage',
        isToggled: false,
      },
      {
        itemType: 'toggle',
        propertyName: 'settings',
        tooltip: 'Settings',
        isToggled: false,
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
                      const filterOtherTodos = todos.filter(
                        (_todo) => todo.id !== _todo.id
                      );

                      setTodos([
                        ...filterOtherTodos,
                        {
                          id: todo.id,
                          isChecked: false,
                          value: event.characters,
                        },
                      ]);
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
