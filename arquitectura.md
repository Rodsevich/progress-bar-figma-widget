
# Arquitectura


En este proyecto, se trabaja de una manera similar a React debido a que la API de Figma adopta convenciones y funcionalidades inspiradas en esta.


## Convenciones
### States

```javascript
  const [contador, setContador] = useSyncedState('contador', 0);
```
Como se ve en el ejemplo, El valor del estado es castellano junto con la funcion que la establece. Permanece el "set" por la convecion que se maneja en React.

### Hooks
```javascript
const {} = useBarraProgreso();
```
En estos ejemplos se aplica la misma convecion que la anterio, pero en este caso permanece el "use"

### Handle

```javascript
    const handleAgregarTarea = () => {
        setObjectivos((prev) => prev + 1);
        setTareas((prevTodos) => [
            ...prevTodos,
            { id: generateUniqueId(), isChecked: false, value: null },
        ]);
    };
```
"handle" Es una funcion manejadora de eventos (event handlers).
es importante que palabra permanezca.


## Carpetas
``` bash
/src
    /hooks 
    /icons
    /options
    /types
    /utils
```
- Hook: Aqui se encapsula toda la funcionalidad del componente, incluyendo states, metodos y logica de negocio que incluya el componente. Los hooks se pueden comunicar entre si para colaborar y reutilizar codigo. 
  ```javascript
    // Ejemplo de creacion de un custom hook
    function useContador() {
        // estado
        const [contador, setContador] = useSyncedState('contador', 0);

        // funcionalidad
        
        const sumar = () => setContador( contador  + 1)
        // se retorna como un objecto
        return {
            contador, 
            sumar
        }
    };
    export default useContador;
    ```
    ```jsx
        // Ejemplo de uso en un componente
        const {contador,sumar} = useContador();
        return(
            <div>
                <Text>{contador}</Text>
                <SVG
                    name='Plus'
                    src={iconoSumar}
                    onClick={sumar}>
                </SVG>
            </div>
        )
    ```

- Iconos: Aqui van todos los iconos svg.
- Options: Aca se encuentran todas las opciones de los menus
    ```javascript
    export const progressTypeOptions = [
        { label: 'Target', option: 'target' },
        { label: 'Todo', option: 'todo' },
    ];
    ```
- Types: Tipos de typescript.
- Utils: Toda funcion helper se encuentra aqui.

