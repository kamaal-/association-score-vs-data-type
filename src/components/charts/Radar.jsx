import React, {useRef, useEffect} from 'react'
import { select, range, scaleLinear} from 'd3'
import { getRadian, getScalableMethod, getX1Angle, getY1Angle, setSvgLines } from './helper'
import {COLORS} from '../../config/'

function Radar({row, title}) {
    const svgRef = useRef()
    const wrapperRef = useRef()
    let svg = null // to bind d3 svg el
    const marginTop = 30

    useEffect(() => {
        const $el = svgRef.current
        const $wrapper = wrapperRef.current
        if($el && $wrapper){
            const originalHeight = $wrapper.offsetHeight
            const originalWidth = $wrapper.offsetWidth
            const radarHeight = originalHeight - 50;
            // eslint-disable-next-line react-hooks/exhaustive-deps
            svg = select($el)
            const data = row.visualizerData
            // axis
            const radius = radarHeight/2;
            const steps = range(5)
            const scaleSteps = scaleLinear().range([0,1]).domain([0,4])
            const axisAngle = getScalableMethod(scaleLinear, [0, 7], [0, getRadian(2)]);
            const measureScale = getScalableMethod(scaleLinear, [0, 1], [0, radius]);
            const stepScale = getScalableMethod(scaleLinear, [0, 4], [0, radius]);

            // create svg group to hold radar axis
            const svgWrapper = svg
                .append('g')
                .attr('transform', `translate(${originalWidth/2}, ${(radarHeight/2) + marginTop}) rotate(-90)`)

            setSvgLines(svgWrapper, data, 'lines', COLORS.lineColors, '1', getX1Angle.bind(null, axisAngle, radius), getY1Angle.bind(null, axisAngle, radius))
            
            const textX = i => (Math.cos(axisAngle(i)) * radius)
            const textY = i => (Math.sin(axisAngle(i)) * radius)
            const RADIAN_OFFSET = Math.PI/2;
            
            const labelAnchor = (d, i) => {
                const topAngle = 0 - Math.PI/2;
                const bottomAngle = 0 + Math.PI/2;
                const the_angle = axisAngle(i) - RADIAN_OFFSET;
                let anchor = "";
                if (the_angle === topAngle || the_angle === bottomAngle)
                  anchor = "middle"
                else if(the_angle > topAngle && the_angle < bottomAngle)
                  anchor = "start"
                else
                  anchor = "end"
                return anchor;
            }

            svgWrapper.selectAll('axis_labels')
                .data(data)
                .enter()
                .append('g')
                .attr("transform", (_, i) => {
                    const x = textX(i)
                    const y = textY(i)
                    const topAngle = 0 - Math.PI/2;
                    const bottomAngle = 0 + Math.PI/2;
                    const the_angle = axisAngle(i) - RADIAN_OFFSET;
                    const d = {
                        dx: -7,
                        dy: -10
                    }
                    if (the_angle === topAngle || the_angle === bottomAngle){
                        d.dx = 10
                        d.dy = 10
                    }
                    if(the_angle > topAngle && the_angle < bottomAngle){
                        d.dx = -7
                        d.dy = 10
                    }
                    return `translate(${x+y + d.dx},${-x + y + d.dy}) rotate(90)`
                })
                .append('text')
                .attr('x', (d,i) => (Math.cos(axisAngle(i)) * radius))
                .style('text-anchor', labelAnchor)
                .attr('fill', COLORS.primaryTextColor)
                .attr('data-testid', 'radar-axis-labels')
                .style("font-size",12)
                .attr('y', (d,i) => (Math.sin(axisAngle(i)) * radius))
                .text((d) => d.label)

            const polygonWrapper = svgWrapper.append('g')
            const stepTextWrapper = svgWrapper.append('g').attr('transform', 'rotate(90)')

            // adding rings
            steps.forEach(s => {
                const rad = stepScale(s);

                // rings
                polygonWrapper.selectAll('polygon__ring')
                    .data([data]).enter()
                    .append('polygon')
                    .classed('ring',true)
                    .attr('fill', 'transparent')
                    .attr('stroke', COLORS.lineColors)
                    .attr('data-testid', 'radar-steps-poly')
                    .attr('points', function(d) {
                    return d.map(function(d,i) {
                        return [Math.cos(axisAngle(i)) * rad, Math.sin(axisAngle(i)) * rad];
                    }).join(' ');
                    })
                
                // ring value labels
                stepTextWrapper
                    .append('text')
                    .attr('y', () =>  (-stepScale(s) + 5))
                    .attr('x', 5)
                    .attr('data-testid', 'radar-steps-text')
                    .text(() => scaleSteps(s))
                    .attr('fill', COLORS.primaryTextColor)
                    .style("font-size",12)
            })

            // plot
            svgWrapper.selectAll('polygon__area')
                .data([data]).enter()
                .append('polygon')
                .classed('area',true)
                .attr('fill', 'rgba(65, 41, 96, 0.7)')
                .attr('stroke', 'transparent')
                .attr('stroke-width', '0')
                .attr('stroke-linejoin', "bevel" )
                .attr('data-testid', 'radar-poly')
                .attr('points', function(d) {
                  return d.map(function(d,i) {
                    const rad = measureScale(d.value);
                    return [Math.cos(axisAngle(i)) * rad, Math.sin(axisAngle(i)) * rad];
                  }).join(' ');
                })
        }
    }, [])

    return (
        <div style={{height: '100%'}} ref={wrapperRef}>
            <h4 style={{margin: 0, height: '20px', marginBottom: '10px'}}>{title}</h4>
            <svg style={{width: '100%', height: `100%`}} ref={svgRef}/>
        </div>
    )
}

export default Radar