import {sortRowByOverallScore, dataToRow} from '../services/'
import data from '../config/mock.data';
import Row from '../services/Row'

describe('services', () => {

    it('Should create 10 rows', () => {
        const rows = ((data() && data().data) || []).map(dataToRow)
		expect(rows[0] instanceof Row).toBe(true);
    });

    it('Should sort', () => {
        const rows = ((data() && data().data) || [])
                        .map(dataToRow)
                        .sort(sortRowByOverallScore)
		expect(rows[0].overallScore).toBe(1);
    });

})
 