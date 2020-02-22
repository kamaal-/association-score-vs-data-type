
/** 
 * @param scaleMethod {Function} d3 scale function 
 * @param domain {[number]} domain array
 * @param range {[number]} range array
 * @returns {Function} scalable function
 */
export const getScalableMethod = (scaleMethod, domain, range) => scaleMethod().domain(domain).range(range)

/** 
 * @param num {number} times of PI
 * @returns {number} PI multiplication
 */
export const getRadian = num => num * Math.PI

/** 
 * @param num {number} times of PI
 * @returns {number} PI multiplication
 */
export const getX1Angle = (angleScaleMethod, radius, _, angleNumber) => radius * Math.cos(angleScaleMethod(angleNumber))

/** 
 * @param num {number} times of PI
 * @returns {number} PI multiplication
 */
export const getY1Angle = (angleScaleMethod, radius, _, angleNumber) => radius * Math.sin(angleScaleMethod(angleNumber))


/** 
 * @param d3Element {Object} d3 element 
 * @param data {[Object]} datum
 * @param className {string} line html class attr
 * @param strokeColor {string} line color
 * @param strokeWidth {string|number} line width
 * @param x1Method {Function} scaleFunction to gete x1 position
 * @param y1Method {Function} scaleFunction to gete y1 position
 * @param radius {number} scaleFunction to gete y1 position
 * @returns {Object} d3 selection
 */
export const setSvgLines = (d3Element, data, className, strokeColor, strokeWidth, x1Method, x2Method) => {
    return d3Element
        .selectAll('lineaxis')
        .data(data)
        .enter()
        .append('line')
        .classed(className,true)
        .attr('x0',0)
        .attr('y0',0)
        .attr('stroke', strokeColor)
        .attr('data-testid', 'axis-lines')
        .attr('stroke-width', strokeWidth)
        .attr('x1', x1Method)
        .attr('y1', x2Method) 
}

export const yAxis = (svg, y, axisLeft) => {
    return svg.append("g")
                .attr("class", "area-axis")
                .call(axisLeft(y));
               
}

export const xAxis = (svg, x, axisBottom) => {
    const xa = axisBottom(x)
    const xAxis = svg.append("g")
            .attr("class", "area-axis area-axis__x")
            .call(xa);
    
    return xAxis
}

export const setBars = (svg, radius, height, x, y, data, yKey, fill = '#F00') => {
    return svg.selectAll()
        .data(data)
        .enter()
        .append('rect')
        .attr("fill", ({color}) => color )
        .attr('data-testid', 'bar')
        .attr("class", "area__plot")
        .attr("x", function(i) { return x(i.label); })
        .attr("width", x.bandwidth())
        .attr("y", function(d) { return y(d[yKey]); })
        .attr("height", function(d) { return (height) - y(d[yKey]); });
}

export const setXAxisLabel = (svg, width, height) => {

}