import React, {useEffect, useRef} from 'react'
import * as d3 from 'd3';
const LineChart2 = () => {
    const chartRef=useRef();
    // creating padding dimensions
    const margin = {top:70, right:30, bottom:40,left:80};
    // declaring the dimensions for the chart inside the svg
    const width = 1200 - margin.left - margin.right;
    const height = 500 - margin.top - margin.bottom;
    const dataset = [
        { date: new Date("2022-01-01"), value: 200 },
        { date: new Date("2022-02-01"), value: 250 },
        { date: new Date("2022-03-01"), value: 180 },
        { date: new Date("2022-04-01"), value: 300 },
        { date: new Date("2022-05-01"), value: 280 },
        { date: new Date("2022-06-01"), value: 220 },
        { date: new Date("2022-07-01"), value: 400 },
        { date: new Date("2022-08-01"), value: 450 },
        { date: new Date("2022-09-01"), value: 600 },
        { date: new Date("2022-10-01"), value: 680 },
        { date: new Date("2022-11-01"), value: 780 },
        { date: new Date("2022-12-01"), value: 320 }
    ];
    console.log(dataset)

    useEffect(() => {
        //setting up the x-axis and y-axis
        const x = d3.scaleTime() // for scaling time series data
            .range([0, width]); // it will put the oldest date and left and the latest at right
        const y = d3.scaleLinear()//for scaling linear data
            .range([height, 0]);//put the smallest number to height(bottom ) and highest number to top since svg's use reverse coordinate system

        //creating the svg setting up the dimensions
        const svg = d3.select(chartRef.current) // ❌ Fixed: Should target chartRef.current, not '.lineChart'
            .append('svg')
            .attr('width', width+margin.left + margin.right)// the total width of svg
            .attr('height', height+margin.top + margin.bottom)
            .append('g')// create a group in the svg
            .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')'); // shift everything within the margin

        // define x and y domains
        x.domain(d3.extent(dataset,d => d.date))
        y.domain([0,d3.max(dataset,d => d.value)]);

        svg.append('g')
            .attr('transform', `translate(0, ${height})`)
            .call(d3.axisBottom(x)
                .ticks(d3.timeMonth.every(1))
                .tickFormat(d3.timeFormat('%b %Y')));
        // add the y axis
        svg.append('g')
            .call(d3.axisLeft(y))
        const line = d3.line() // Define line generator
            .x(d => x(d.date))
            .y(d => y(d.value));


        svg.append('path')
            .datum(dataset)
            .attr('fill', 'none')
            .attr('stroke', 'steelblue')
            .attr('stroke-width',1)
            .attr('d', line);

    },[]);

    return (
        <div>
            <div  ref={chartRef} className='lineChart'/>
        </div>
    )
}
export default LineChart2
