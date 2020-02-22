import {getRadian, getScalableMethod} from '../components/charts/helper'
import {scaleLinear} from 'd3'

describe('getRadian', () => {

    test('should return PI value', () => {
        expect(getRadian(1)).toBe(3.141592653589793)
    })

    test('should return 2PI value', () => {
        expect(getRadian(2)).toBe(6.283185307179586)
    })
})

describe('getScalableMethod', () => {
    test('should return 500 for scale 2', () => {
        const tenLogScale = getScalableMethod(scaleLinear, [1,3], [0, 1000])
        expect(tenLogScale(2)).toBe(500)
    })
})