export const COLORS = {
    barColors: [
        '#ec7d20',
        '#f4ac4a',
        '#f6d74a',
        '#cedc7e',
        '#83a45a',
        '#16868b',
        '#2c63a0',
        '#412960',
    ],
    primaryTextColor: '#412960',
    secondaryTextColor: '#2c63a0',
    darkGray: '#333',
    gray: '#666',
    lightGray: '#999',
    lineColors: 'rgba(65, 41, 96, 0.3)'
}

export const initialDataTypes = {
    'literature': {
        label: 'Literature',
        color: COLORS.barColors[0]
    },
    'rna_expression': {
        label:'RNA Expression',
        color: COLORS.barColors[1]
    },
    'genetic_association': {
        label:'Genetic Association',
        color: COLORS.barColors[2]
    },
    'somatic_mutation': {
        label:'Somatic Mutation',
        color: COLORS.barColors[3]
    },
    'known_drug': {
        label:'Known Drug',
        color: COLORS.barColors[4]
    },
    'animal_model': {
        label: 'Animal Model',
        color: COLORS.barColors[5]
    },
    'affected_pathway': {
        label: 'Affected Pathway',
        color: COLORS.barColors[6]
    }
}

export const totalItemsFromTo = [0, 5]