import React, {useRef, useEffect} from 'react'
import { scaleLinear,  select, scaleBand, axisLeft, axisBottom} from 'd3'
import {setBars} from './helper'
import { COLORS } from '../../config'

const margin = {
    top: 20,
    left: 60,
    right: 50,
    bottom: 80
}

function Bar({row, title}) {
    let svg = null
    const svgRef = useRef()
    const wrapperRef = useRef()
    const data = row.visualizerData
    const headerHeight = 40
    useEffect(() => {
        const $el = svgRef.current
        const $wrapper = wrapperRef.current
        if($el && $wrapper){
            const height = $wrapper.offsetHeight
            const width = $wrapper.offsetWidth
            const computedHeight = height - (margin.top + margin.bottom + headerHeight)
            const computedWidth = width - (margin.left + margin.right)
            // eslint-disable-next-line react-hooks/exhaustive-deps
            svg = select($el)

            const svgWrapper = svg.append('g').attr('transform', `translate(${margin.left}, ${margin.top})`)

            const y = scaleLinear()
                .range([computedHeight, 0])
                .domain([0, 1])
            const x = scaleBand()
                            .range([0, computedWidth])
                            .domain(data.map(d => d.label))
                            .padding(0.2);

            svg.append('defs')
                .append('clipPath')
                .attr('id', 'clip')
                .attr('data-testid', 'clip')
                .append('rect')
                    .attr('x', 0)
                    .attr('y', 0)
                    .attr('width', computedWidth)
                    .attr('height', computedHeight);

            const plot = svgWrapper
                .append('g')
                .attr('class', 'plot')
                .attr('clip-path', 'url(#clip)');    
            
            plot.append('g')
                .attr('class', 'horizontal__grids')
                .attr('data-testid', 'h-grid')
                .call(
                    axisLeft(y)
                    .ticks(10)
                    .tickFormat("")
                    .tickSize(-computedWidth)
                );

            setBars(plot, x.bandwidth()/2, computedHeight, x, y, data,'value')
            
            svgWrapper.append('g')
                .attr('class', 'vertical__axis')
                .call(
                    axisLeft(y)
                    .ticks(10)
                );

            const xAxis = svgWrapper.append("g")
                .attr('class', 'horizontal__axis')
                .attr('transform', `translate(0,${computedHeight})`)
                .call(
                    axisBottom(x)
                );
            
            xAxis.selectAll("text")
                .attr("y", 0)
                .attr("dx", -10)
                .attr("transform", "rotate(-45)").style("text-anchor", "end");
        

            // Y label
            svgWrapper
                .append('g')
                .attr('transform', 'rotate(-90)')
                .append('text')
                .attr('data-testid', 'y-label')
                .attr('x', -computedHeight/2)
                .attr('y', -40)
                .style('text-anchor', 'middle')
                .text('Score')
                .attr('fill', COLORS.primaryTextColor)

            // X label
            svgWrapper
                .append('g')
                .append('text')
                .attr('data-testid', 'x-label')
                .attr('x', (computedWidth/2) - 20)
                .attr('y', computedHeight + 90)
                .style('text-anchor', 'middle')
                .text('Data Type')
                .attr('fill', COLORS.primaryTextColor)
        }
    })
    return (
        <div style={{height: '100%'}} ref={wrapperRef}>
            <h4 style={{margin: 0, height: '10px', marginBottom: '10px'}}>{title}</h4>
            <svg style={{width: '100%', height: `calc(100% - 20px)`}} ref={svgRef}/>
        </div>
    )
}

export default Bar
