import React from 'react'
import SmileyFace from "./Components/SmileyFace.jsx";
import D3Selecet from "./Components/d3selecet.jsx";
import DataDatum from "./Components/DataDatum.jsx";
import BarChartNormal from "./Components/BarChartNormal.jsx";
import DyncamicRectBarChart from "./Components/DyncamicRectBarChart.jsx";
import StyledBarGraph from "./Components/StyledBarGraph.jsx";
import LineChart from "./Components/LineChart.jsx";
import LineChart2 from "./Components/LineChart2.jsx";
import LineChartCSV from "./Components/LineChartCSV.jsx";

const App = () => {
    return (
        <div>
            {/*<SmileyFace />*/}
            {/*<D3Selecet/>*/}
            {/*<DataDatum/>*/}
            {/*<BarChartNormal/>*/}
            {/*<DyncamicRectBarChart/>*/}
            {/*<StyledBarGraph/>        */}



            <LineChartCSV/>

        </div>
    )
}
export default App
