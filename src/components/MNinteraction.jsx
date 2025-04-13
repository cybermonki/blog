import { useEffect, useState } from "preact/hooks";

function beamGeometry(thk, width, compBar, compBarNo, tensBar, tensBarNo) {

    const boundary = {
    x: [0, width, width, 0],
    y: [0, 0, thk, thk],
    mode: 'lines',
    type: 'scatter',
    name: 'section',
    fill: 'tozeroy',
    fillcolor: 'gray'
    };
    
    const compBarSpacing = width / compBarNo; 
    const tensBarSpacing = width / tensBarNo;
    
    let x = [];
    let y = [];
    for (let i=1; i < compBarNo + 1; i++){
    if (i==1){ x.push(compBarSpacing / 2);
    } else if (i == compBarNo) {x.push(width - compBarSpacing / 2);
    } else { x.push( (i-0.5)*compBarSpacing )}
    y.push(thk - 50); //cover fixed at 50
    }
    
    const compBars = {x: x, y: y,
    name: 'compression bars',
    mode: 'markers',
    type: 'scatter',
    marker: {
        size: compBar,
        color: 'white',
        line: {
            color: 'blue',
            width: 2}
        }
    }
    
    x = [];
    y = [];
    for (let i=1; i < tensBarNo + 1; i++){
    if (i==1){ x.push(tensBarSpacing / 2);
    } else if (i == tensBarNo) { x.push(width - tensBarSpacing / 2);
    } else { x.push( (i-0.5) * tensBarSpacing );
    }
    y.push(50); //cover fixed at 50
    }
    
    const tensBars = {x: x, y: y,
    name: 'tension bars',
    mode: 'markers',
    type: 'scatter',
    marker: {
        size: tensBar,
        color: 'white',
        line: {
            color: 'red',
            width: 2}
        }
    }

    return [boundary, compBars, tensBars]
}

function strain(na, div){
const strainCurve = [];
return strainCurve
}

const MNInteraction = () => {
    useEffect(() => {
        import ('plotly.js-dist-min').then((Plotly) => {
        const layout = { title: 'Beam Section' };
        const [boundary, compBars, tensBars] = beamGeometry(400, 200, 16, 4, 25, 4);
        // Create the plot once component is mounted
        Plotly.newPlot('beamPlot', [boundary, compBars, tensBars]);
      
        return () => {
            // Clean up plot if the component unmounts
            // Plotly.purge('plotly-plot');
        }; })

    }, []); // Empty dependency array ensures this effect runs once
    
    return (
      <div id="beamPlot" style={{ width: '100%', height: '400px' }}></div>
    );
};
  
export default MNInteraction;