    // const generateDay = async()=>{
 
    //     await getEpics();

    //     const sectionNode = figma.createSection();
        
    //     const date = dateNow()
    //     sectionNode.name = date;

    //     sectionNode.fills = [figma.util.solidPaint("#FFFFF")]
        
    //     sectionNode.x = 0;
    //     sectionNode.y = 0;
        
    //     figma.currentPage.appendChild(sectionNode);
    //     figma.currentPage.selection = [sectionNode];
        
    //     figma.viewport.scrollAndZoomIntoView([sectionNode]);
    
    //     // Create text nodes for each epic and append them to the section
    //     epics.forEach((epic, index) => {
    //         const textNode = figma.createText();
    //         textNode.characters = `${epic.subject}: ${epic.description}`;
    //         textNode.x = 10;
    //         textNode.y = 30 * index; // Adjust the y position for each epic
    //         sectionNode.appendChild(textNode);
    //     });
    // }

        // // CONTENEDOR
        // const frameCard = figma.createFrame();
        // frameCard.name = infoItem.user.full_name;
        // frameCard.resize(542, 1000  );
        // frameCard.fills = [{ type: 'SOLID', color: { r: 0.9, g: 0.9, b: 0.9 } }];
        // frameCard.cornerRadius = 8;
        // frameCard.res


     // // CONTENDOR TOP INFO
        // const container__top = figma.createFrame();
        // container__top.name = 'container__top';
        // container__top.resize(540, 306);
        // container__top.cornerRadius = 8;
        // container__top.clipsContent = false;
        // // auto layout
        // container__top.layoutMode = 'HORIZONTAL'
        // container__top.primaryAxisAlignItems = 'MIN'
        // container__top.counterAxisAlignItems = 'MIN'
        // container__top.paddingLeft = 20
        // container__top.paddingRight = 20
        // container__top.paddingTop = 32
        // container__top.paddingBottom = 16
        // container__top.itemSpacing = 24
        // container__top.fills = [
        //     {
        //         "type": "GRADIENT_LINEAR",
        //         "visible": true,
        //         "opacity": 0.11999999731779099,
        //         "blendMode": "NORMAL",
        //         "gradientStops": [
        //             {
        //                 "color": {
        //                     "r": 0.21960784494876862,
        //                     "g": 0.9372549057006836,
        //                     "b": 0.6274510025978088,
        //                     "a": 1
        //                 },
        //                 "position": 0,
        //                 // "boundVariables": {}
        //             },
        //             {
        //                 "color": {
        //                     "r": 0.5882353186607361,
        //                     "g": 0.9725490212440491,
        //                     "b": 0.529411792755127,
        //                     "a": 1
        //                 },
        //                 "position": 0.5,
        //                 // "boundVariables": {}
        //             },
        //             {
        //                 "color": {
        //                     "r": 0.7529411911964417,
        //                     "g": 0.9843137264251709,
        //                     "b": 0.45098039507865906,
        //                     "a": 1
        //                 },
        //                 "position": 1,
        //                 // "boundVariables": {}
        //             }
        //         ],
        //         "gradientTransform": [
        //             [
        //                 1.2121212482452393,
        //                 3.1457323412809046e-9,
        //                 -0.11223345249891281
        //             ],
        //             [
        //                 5.63044144641367e-9,
        //                 0.13618075847625732,
        //                 0.46350955963134766
        //             ]
        //         ]
        //     }
        // ]
        // container__top.strokes = [
        //     {
        //         "type": "SOLID",
        //         "visible": true,
        //         "opacity": 1,
        //         "blendMode": "NORMAL",
        //         "color": {
        //             "r": 0.9215686321258545,
        //             "g": 0.9529411792755127,
        //             "b": 0.7490196228027344
        //         },
        //         "boundVariables": {}
        //     }
        // ]


        // const container__top__info = figma.createFrame()
        // container__top__info.name = 'container__top__info'
        // container__top__info.x = 167
        // container__top__info.y = 32
        // container__top__info.resize(353, 258)
        // container__top__info.clipsContent = false
        // // auto layout
        // container__top__info.layoutMode = 'VERTICAL'
        // container__top__info.primaryAxisAlignItems = 'MIN'
        // container__top__info.counterAxisAlignItems = 'MIN'
        // container__top__info.paddingLeft = 0
        // container__top__info.paddingRight = 0
        // container__top__info.paddingTop = 0
        // container__top__info.paddingBottom = 0
        // container__top__info.itemSpacing = 20


        // // FOTO USER
        // const container__top__photo_user = figma.createEllipse();
        // container__top__photo_user.resize(123, 123);
        // container__top__photo_user.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }];
        // const imageUrl = infoItem.user.avatar_url;
        // try {
        //     const image = await figma.createImageAsync(imageUrl);
        //     container__top__photo_user.fills = [{ type: 'IMAGE', scaleMode: 'FILL', imageHash: image.hash }];
        // } catch (error) {
        //     console.error('Error al cargar la imagen:', error);
        // }


        // // CONTAINER INFO
        // const container_top__hours__info = figma.createFrame();
        // container_top__hours__info.name = 'container_top__hours__info';
        // container_top__hours__info.x = 167;
        // container_top__hours__info.y = 32;
        // container_top__hours__info.resize(355, 237);
        // container_top__hours__info.clipsContent = false;
        // container_top__hours__info.fills = [];
        // // auto layout
        // container_top__hours__info.layoutMode = 'VERTICAL';
        // container_top__hours__info.primaryAxisAlignItems = 'MIN';
        // container_top__hours__info.counterAxisAlignItems = 'MIN';
        // container_top__hours__info.paddingLeft = 0;
        // container_top__hours__info.paddingRight = 0;
        // container_top__hours__info.paddingTop = 0;
        // container_top__hours__info.paddingBottom = 0;


        // // container_top__hours__info__name
        // const container_top__hours__info__name = figma.createText()
        // container_top__hours__info__name.name = 'container_top__hours__info__name'
        // container_top__hours__info__name.x = 0
        // container_top__hours__info__name.y = 0
        // const characters_text = capitalizeFirstLetter(infoItem.user.username);
        // container_top__hours__info__name.characters = characters_text
        // container_top__hours__info__name.setRangeFontSize(0, characters_text.length, 20)
        // container_top__hours__info__name.setRangeFontName(0, characters_text.length, {"family":"Heebo","style":"Medium"})
        // container_top__hours__info__name.setRangeLineHeight(0, characters_text.length, {"unit":"AUTO"})
        // container_top__hours__info__name.fills = [
        //     {
        //         "type": "SOLID",
        //         "visible": true,
        //         "opacity": 1,
        //         "blendMode": "NORMAL",
        //         "color": {
        //             "r": 0,
        //             "g": 0.11372549086809158,
        //             "b": 0.12941177189350128
        //         },
        //         "boundVariables": {}
        //     }
        // ]


        // // INFO
        // const container_top__hours__info__hours = figma.createFrame()
        // container_top__hours__info__hours.name = 'container_top__hours__info__hours'
        // container_top__hours__info__hours.x = 0
        // container_top__hours__info__hours.y = 30
        // container_top__hours__info__hours.fills = [];
        // container_top__hours__info__hours.resize(355, 32)
        // container_top__hours__info__hours.clipsContent = false
        // // auto layout
        // container_top__hours__info__hours.layoutMode = 'HORIZONTAL'
        // container_top__hours__info__hours.layoutSizingHorizontal = 'FIXED'; 
        // container_top__hours__info__hours.primaryAxisAlignItems = 'SPACE_BETWEEN'
        // container_top__hours__info__hours.counterAxisAlignItems = 'CENTER'
        // container_top__hours__info__hours.paddingLeft = 0
        // container_top__hours__info__hours.paddingRight = 0
        // container_top__hours__info__hours.paddingTop = 0
        // container_top__hours__info__hours.paddingBottom = 0
        // container_top__hours__info__hours.itemSpacing = 33


        // const container_top__hours__info__hours__text = figma.createText()
        // container_top__hours__info__hours__text.name = 'container_top__hours__info__hours__text';
        // container_top__hours__info__hours__text.x = 0;
        // container_top__hours__info__hours__text.y = 1;
        // const characters_container_top__hours__info__hours__text = 'Horas del sprint';
        // container_top__hours__info__hours__text.characters = characters_container_top__hours__info__hours__text;
        // container_top__hours__info__hours__text.setRangeFontSize(0, characters_container_top__hours__info__hours__text.length, 16);
        // // container_top__hours__info__hours__text.setRangeFontName(0, characters_container_top__hours__info__hours__text.length, {"family":"Heebo","style":"Regular"});
        // container_top__hours__info__hours__text.setRangeLineHeight(0, characters_container_top__hours__info__hours__text.length, {"unit":"AUTO"});
        // container_top__hours__info__hours__text.fills = [
        //     {
        //         "type": "SOLID",
        //         "visible": true,
        //         "opacity": 1,
        //         "blendMode": "NORMAL",
        //         "color": {
        //             "r": 0,
        //             "g": 0.11372549086809158,
        //             "b": 0.12941177189350128
        //         },
        //         "boundVariables": {}
        //     }
        // ];


        // const container_top__hours__info__hours__pill_hour = figma.createFrame();
        // container_top__hours__info__hours__pill_hour.name = 'container_top__hours__info__hours__pill_hour';
        // container_top__hours__info__hours__pill_hour.x = 441;
        // container_top__hours__info__hours__pill_hour.y = 0;
        // container_top__hours__info__hours__pill_hour.resize(59, 32);
        // container_top__hours__info__hours__pill_hour.cornerRadius = 16;
        // container_top__hours__info__hours__pill_hour.clipsContent = false;
        // // auto layout
        // container_top__hours__info__hours__pill_hour.layoutMode = 'HORIZONTAL';
        // container_top__hours__info__hours__pill_hour.primaryAxisAlignItems = 'CENTER';
        // container_top__hours__info__hours__pill_hour.counterAxisAlignItems = 'CENTER';
        // container_top__hours__info__hours__pill_hour.paddingLeft = 8;
        // container_top__hours__info__hours__pill_hour.paddingRight = 8;
        // container_top__hours__info__hours__pill_hour.paddingTop = 4;
        // container_top__hours__info__hours__pill_hour.paddingBottom = 4;
        // container_top__hours__info__hours__pill_hour.itemSpacing = 8;
        // container_top__hours__info__hours__pill_hour.fills = [
        //     {
        //         "type": "SOLID",
        //         "visible": true,
        //         "opacity": 1,
        //         "blendMode": "NORMAL",
        //         "color": {
        //             "r": 0.7568627595901489,
        //             "g": 0.9803921580314636,
        //             "b": 0.886274516582489
        //         },
        //         "boundVariables": {}
        //     }
        // ];

        // const container_top__hours__info__hours__pill_hour__text = figma.createText();
        // container_top__hours__info__hours__pill_hour__text.name = 'container_top__hours__info__hours__pill_hour__text';
        // container_top__hours__info__hours__pill_hour__text.x = 8;
        // container_top__hours__info__hours__pill_hour__text.y = 4;
        // const characters =  '47/62';
        // container_top__hours__info__hours__pill_hour__text.characters = characters;
        // container_top__hours__info__hours__pill_hour__text.setRangeFontSize(0, characters.length, 16);
        // // container_top__hours__info__hours__pill_hour__text.setRangeFontName(0, characters.length, {"family":"Heebo","style":"Medium"});
        // container_top__hours__info__hours__pill_hour__text.setRangeLineHeight(0, characters.length, {"unit":"AUTO"});
        // container_top__hours__info__hours__pill_hour__text.fills = [
        //     {
        //         "type": "SOLID",
        //         "visible": true,
        //         "opacity": 1,
        //         "blendMode": "NORMAL",
        //         "color": {
        //             "r": 0,
        //             "g": 0.06666667014360428,
        //             "b": 0.07450980693101883
        //         },
        //         "boundVariables": {}
        //     }
        // ];

        // const container__top__progress = figma.createFrame();
        // container__top__progress.name = 'container__top__progress';
        // container__top__progress.x = 0;
        // container__top__progress.y = 82;
        // container__top__progress.resize(353, 176);
        // container__top__progress.clipsContent = false;
        // // auto layout
        // container__top__progress.layoutMode = 'VERTICAL';
        // container__top__progress.primaryAxisAlignItems = 'MIN';
        // container__top__progress.counterAxisAlignItems = 'MIN';
        // container__top__progress.paddingLeft = 0;
        // container__top__progress.paddingRight = 0;
        // container__top__progress.paddingTop = 0;
        // container__top__progress.paddingBottom = 0;
        // container__top__progress.itemSpacing = 12;


        /**
         * #container__top
         *   o container__top__photo_user
         *   # container__top__info
         *      # container_top__hours__info
         *          T container_top__hours__info__name
         *          # container_top__hours__info__hours
         *              T container_top__hours__info__hours__text
         *              # container_top__hours__info__hours__pill_hour
         *              T container_top__hours__info__hours__pill_hour__text
         *      # container__top__progress
         *         # container__top__progress__bar
         *      

         */


               // container__top.appendChild(container__top__photo_user);
                // container__top.appendChild(container__top__info);
                //     container__top__info.appendChild(container_top__hours__info);
                //         container_top__hours__info.appendChild(container_top__hours__info__name);
                //         container_top__hours__info.appendChild(container_top__hours__info__hours);
                //             container_top__hours__info__hours.appendChild(container_top__hours__info__hours__text);
                //             container_top__hours__info__hours.appendChild(container_top__hours__info__hours__pill_hour);
                //                 container_top__hours__info__hours__pill_hour.appendChild(container_top__hours__info__hours__pill_hour__text);
                //     container__top__info.appendChild(container__top__progress)
                //     container__top__progress.appendChild(await createProgressBarComponent());
        //;
        //     frameCard.appendChild(container__hours__top);
        //     container__hours__top.appendChild(container__top__photo_user);
        

        // pill_hours.appendChild(text_pill_hours)
        // container__hours.appendChild(container_top__hours__info__hours__text)
        // container__hours.appendChild(pill_hours)

        /**
         * container top
         */

        
        
        // container_top__hours__info.appendChild(container__hours);

    

        // const epicFrame = figma.createFrame();
        // epicFrame.name = 'df';
        // epicFrame.resize(300, 400);
        // epicFrame.fills = [{ type: 'SOLID', color: { r: 0.9, g: 0.9, b: 0.9 } }];
        
        // // Añadir título de la épica
        // const titleNode = figma.createText();
        // titleNode.characters = 'dfdf';
        // titleNode.fontSize = 20;
        // titleNode.y = 20;
        // epicFrame.appendChild(titleNode);



            // const getEpics = async()=>{
    //     // if (!dataFetched) {
    //         try {
    //             const data = await getAllEpics();
    //             console.log(data);
    //             setEpics(data);
    //             // setDataFetched(true);
    //         } catch (error) {
    //             console.error('Error fetching epics:', error);
    //         }
    //     // }
    // }

     {/* {epics.length > 0 ? (
                epics.map((infoItem) =>
                    <>
                        <Text>Titulo: {epic.subject }</Text>
                        <Text>Owner:  {epic.owner?.username }</Text>

                    </>
                )
            ) : (
                <Text>No hay epics disponibles.</Text>
            )}
            <UserProfile user={user}/> */}

       


            {/* Settings */}
            {/* {configuracionAbierta && (
                 <Settings
                    tipoProgreso={tipoProgreso}
                    contador={contador}
                    setContador={setContador}
                    objectivo={objectivo}
                    setObjectivos={setObjectivos}
                    iconoMenos={iconoMenos}
                    iconoSumar={iconoSumar}
                    obtenerColors={obtenerColors}
                    backgroundAndBorderColors={backgroundAndBorderColors}
                    tarea={tarea}
                    setTareas={setTareas}
                    anchoBarraProgreso={anchoBarraProgreso}
                />
            )} */}