import Axios from "axios"
import Row from './Row'
import {totalItemsFromTo} from '../config/'

export const dataToRow = d => new Row(d)

export const transformDataToRows  = data => ((data && data.data) || [])
    .map(dataToRow)
    .sort(sortRowByOverallScore)
    .slice(...totalItemsFromTo)

export const sortRowByOverallScore = (a, b) => {
    if(a.overallScore > b.overallScore) return -1;
    if(a.overallScore < b.overallScore) return 1;
    return 0;
}

export const getInitialData = (cb) => {
    Axios.get('https://demo6922545.mockable.io/')
        .then(({data}) => cb(transformDataToRows (data)))
        .catch(e => {
            console.log(e)
        })
}