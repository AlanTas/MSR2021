    const tableLayer = new Konva.Layer();
    
    const scale = 1.0; // position scale factor
    
    const mockData = [
        {
            label: "45",
            shape: "circle",
            x: 100,
            y: 150,
            w: 100,
            h: 100,
            r: 0
        },
        {
            label: "46",
            shape: "rect",
            x: 200,
            y: 170,
            w: 150,
            h: 100,
            r: -30
        },
        {
            label: "47",
            shape: "rect",
            x: 70,
            y: 200,
            w: 50,
            h: 100,
            r: 15
        },
        {
            label: "48",
            shape: "ellipse",
            x: 400,
            y: 300,
            w: 250,
            h: 150,
            r: 30
        }
    ];


    function createShapeElement( data ) {
        // Create container group
        let element = new Konva.Group( {
            x: data.x * scale,
            y: data.y * scale,
            draggable: true,
            listening: true,
        } );

        // Create background shape
        let shape;
        switch ( data.shape ) {
            case "circle": // fall-through
            case "ellipse": // fall-through
            case "longellipse":
                shape = new Konva.Ellipse( {
                    x: 0,
                    y: 0,
                    radiusX: data.w * 0.5,
                    radiusY: data.h * 0.5,
                    rotation: data.r,
                    fill: "gray",
                    stroke: "black",
                    strokeWidth: 4,
                    draggable: false,
                    listening: true
                } );
                break;

            default:
                shape = new Konva.Rect( {
                    x: 0,
                    y: 0,
                    offsetX: data.w * 0.5,
                    offsetY: data.h * 0.5,
                    width: data.w,
                    height: data.h,
                    rotation: data.r,
                    fill: "gray",
                    stroke: "black",
                    strokeWidth: 4,
                    draggable: false,
                    listening: true
                } );
                break;
        } // End switch

        // Create label
        let label = new Konva.Text( {
            x: data.w * -0.5,
            y: data.h * -0.5,
            width: data.w,
            height: data.h,
            text: data.label,
            fontSize: 24,
            fill: "black",
            align: "center",
            verticalAlign: "middle",
            draggable: false,
            listening: false
        } );

        element.add( shape, label );

        return element;
    }


    // Loop your data and call the creation method for each data item.
    mockData.forEach( itemData => {
        tableLayer.add( createShapeElement( itemData ) );
    } );
