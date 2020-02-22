import {initialDataTypes} from '../config/'

export default class Row {
    constructor(data){
        this.data = data 
        this.setupDataTypes()
    }

    setupDataTypes(data){
        const self = this
        this.dataTypeKeyValues = (Object.keys(initialDataTypes)|| []).map( key => {
            return {...initialDataTypes[key], value: self.data.association_score.datatypes[key]}
        })
    }

    get geneId(){
        return this.data.target.id
    }

    get symbol(){
        return this.data.target.gene_info.symbol
    }

    get name(){
        return this.data.target.gene_info.name
    }

    get overallScore(){
        return this.data.association_score.overall
    }

    get visualizerData(){
        return this.dataTypeKeyValues
    }

    set dataType(dataType){
        this.dataTypeKeyValues.push(dataType)
    }
}