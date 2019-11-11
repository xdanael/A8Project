import {Injectable} from '@angular/core';

export class Note {
    id: number;
    idQuestion: number;
    testo: string;
}

export class Risultato {
    id: number;
    idDomanda: number;
    tipoDomanda: string;
    radioval: number;
    evidenza: string;
}

export class Option {
    id: number;
    idQuestion: number;
    testo: string;
    risultato?: Risultato;      // RADIO   SI 1,NO 2 ,NA 3,NV 4
}

export class Question {
    id: number;
    idSection: number;
    child: number;
    reference: string;
    testo: string;
    risultato?: Risultato;      // RADIO   SI 1,NO 2 ,NA 3,NV 4
    options?: Option[] = [];   // OPZIONI A,B,C
    notes?: Note[] = [];
}

export class Section {
    id: number;
    idCertificazione: number;
    capitolo: number;
    testo: string;
    questions: Question[] = [];
}

export class Checklist {
    id: number;
    sections: Section[];
    constructor() {
        this.id = 0;
        this.sections = [];
    }
}


const CHECKLIST = [
    {
        id: 2,
        idCertificazione: 1,
        capitolo: 2,
        testo: '2.1 Comprendere lâ€™organizzazione e il suo contesto',
        questions: [
            {
                id: 1,
                idSection: 2,
                testo: 'Lâ€™organizzazione:  ha determinato i fattori esterni e interni rilevanti per le sue finalitÃ  e indirizzi ' +
                    'strategici e che influenzano la sua capacitÃ  di conseguire i risultati attesi per il proprio sistema di gestione' +
                    'per la qualitÃ ?',
                child: 0,
                reference: '4.1.1',
                risultato: {
                    id: 1,
                    idDomanda: 1,
                    tipoDomanda: 'q',
                    radioval: 0,
                    evidenza: ''
                },
                options: [],
                notes: []
            },
            {
                id: 2,
                idSection: 2,
                testo: 'Lorganizzazione:  monitora e riesamina le informazioni che riguardano tali fattori esterni e interni?',
                child: 0,
                reference: '4.1.2',
                risultato: {
                    id: 2,
                    idDomanda: 2,
                    tipoDomanda: 'q',
                    radioval: 0,
                    evidenza: ''
                },
                options: [],
                notes: [
                    {
                        id: 2,
                        idQuestion: 2,
                        lettera: '1',
                        testo: 'Nota 1 I fattori possono comprendere fattori positivi e negativi, o condizioni da considerare.'
                    },
                    {
                        id: 3,
                        idQuestion: 2,
                        lettera: '2',
                        testo: 'Nota 2 La comprensione del contesto esterno puÃ² essere facilitata considerando i fattori che emergono ' +
                            'dagli ambienti ' +
                            'legale, tecnologico, competitivo, di mercato, culturale, sociale ed economico, sia esso internazionale, ' +
                            'nazionale, ' +
                            'regionale o locale.'
                    },
                    {
                        id: 4,
                        idQuestion: 2,
                        lettera: '3',
                        testo: 'Nota 3 La comprensione del contesto interno puÃ² essere facilitata considerando i fattori relativi a valori'
                    }
                ]
            }
        ]
    },
    {
        id: 3,
        idCertificazione: 1,
        capitolo: 2,
        testo: '2.2 Comprendere le esigenze e le aspettative delle parti interessate',
        questions: [
            {
                id: 3,
                idSection: 3,
                testo: 'Lâ€™organizzazione:  ha determinato le parti interessate rilevanti per il sistema di gestione per la qualitÃ ?\r\n',
                child: 0,
                reference: '4.2.1',
                risultato: {
                    id: 3,
                    idDomanda: 3,
                    tipoDomanda: 'q',
                    radioval: 0,
                    evidenza: ''
                },
                options: [],
                notes: []
            },
            {
                id: 4,
                idSection: 3,
                testo: 'L organizzazione:  ha determinato i requisiti di tali parti interessate che sono rilevanti per il sistema ' +
                    'di gestione ' +
                    'per la qualitÃ ?',
                child: 0,
                reference: '4.2.2',
                risultato: {
                    id: 4,
                    idDomanda: 4,
                    tipoDomanda: 'q',
                    radioval: 0,
                    evidenza: ''
                },
                options: [],
                notes: []
            },
            {
                id: 5,
                idSection: 3,
                testo: 'L organizzazione:  monitora e riesamina le informazioni che riguardano tali parti interessate e i loro ' +
                    'requisiti rilevanti?',
                child: 0,
                reference: '4.2.3',
                risultato: {
                    id: 5,
                    idDomanda: 5,
                    tipoDomanda: 'q',
                    radioval: 0,
                    evidenza: ''
                },
                options: [],
                notes: []
            }
        ]
    },
    {
        id: 4,
        idCertificazione: 1,
        capitolo: 2,
        testo: '2.3 Determinare il campo di applicazione del sistema di gestione per la qualitÃ ',
        questions: [
            {
                id: 6,
                idSection: 4,
                testo: 'Lâ€™organizzazione ha determinato i confini e lâ€™applicabilitÃ  del sistema di gestione per la qualitÃ  per ' +
                    'stabilirne il campo di applicazione?',
                child: 0,
                reference: '4.3.1',
                risultato: {
                    id: 6,
                    idDomanda: 6,
                    tipoDomanda: 'q',
                    radioval: 0,
                    evidenza: ''
                },
                options: [],
                notes: []
            },
            {
                id: 7,
                idSection: 4,
                testo: 'Nel determinare il campo di applicazione: ',
                child: 1,
                reference: '4.3.2',
                risultato: null,
                options: [
                    {
                        id: 1,
                        idQuestion: 7,
                        testo: 'a) i fattori esterni e interni di cui al punto 4.1?',
                        risultato: {
                            id: 121,
                            idDomanda: 1,
                            tipoDomanda: 'o',
                            radioval: 0,
                            evidenza: ''
                        }
                    },
                    {
                        id: 2,
                        idQuestion: 7,
                        testo: 'b) i requisiti delle parti interessate rilevanti di cui al punto 4.2?',
                        risultato: {
                            id: 122,
                            idDomanda: 2,
                            tipoDomanda: 'o',
                            radioval: 0,
                            evidenza: ''
                        }
                    },
                    {
                        id: 3,
                        idQuestion: 7,
                        testo: 'c) i prodotti e i servizi dellâ€™organizzazione?',
                        risultato: {
                            id: 123,
                            idDomanda: 3,
                            tipoDomanda: 'o',
                            radioval: 0,
                            evidenza: ''
                        }
                    }
                ],
                notes: []
            },
            {
                id: 8,
                idSection: 4,
                testo: 'Il campo di applicazione del sistema di gestione per la qualitÃ  dellâ€™organizzazione Ã¨ disponibile e mantenuto',
                child: 0,
                reference: '4.3.3',
                risultato: {
                    id: 8,
                    idDomanda: 8,
                    tipoDomanda: 'q',
                    radioval: 0,
                    evidenza: ''
                },
                options: [],
                notes: []
            },
            {
                id: 9,
                idSection: 4,
                testo: 'Il campo di applicazione del sistema dichiara i tipi di prodotti e servizi coperti?',
                child: 0,
                reference: '4.3.4',
                risultato: {
                    id: 9,
                    idDomanda: 9,
                    tipoDomanda: 'q',
                    radioval: 0,
                    evidenza: ''
                },
                options: [],
                notes: []
            },
            {
                id: 10,
                idSection: 4,
                testo: 'Il campo di applicazione del sistema fornisce giustificazione adeguata per ogni requisito della presente norma ' +
                    'internazionale che lâ€™organizzazione determina non applicabile?',
                child: 0,
                reference: '4.3.5',
                risultato: {
                    id: 10,
                    idDomanda: 10,
                    tipoDomanda: 'q',
                    radioval: 0,
                    evidenza: ''
                },
                options: [],
                notes: []
            }
        ]
    },
    {
        id: 5,
        idCertificazione: 1,
        capitolo: 2,
        testo: '2.4 Sistema di gestione per la qualitÃ  e relativi processi',
        questions: [
            {
                id: 11,
                idSection: 5,
                testo: 'Lâ€™organizzazione ha determinato i processi necessari per il sistema di gestione per la qualitÃ  e la ' +
                    'loro applicazione ' +
                    'nellâ€™ambito di tutta lâ€™organizzazione: ',
                child: 1,
                reference: '4.4.1',
                risultato: null,
                options: [
                    {
                        id: 4,
                        idQuestion: 11,
                        testo: 'a) determinando gli input necessari e gli output attesi da',
                        risultato: {
                            id: 124,
                            idDomanda: 4,
                            tipoDomanda: 'o',
                            radioval: 0,
                            evidenza: ''
                        }
                    },
                    {
                        id: 5,
                        idQuestion: 11,
                        testo: 'b) determinando la sequenza e lâ€™interazione di tali processi?',
                        risultato: {
                            id: 125,
                            idDomanda: 5,
                            tipoDomanda: 'o',
                            radioval: 0,
                            evidenza: ''
                        }
                    },
                    {
                        id: 6,
                        idQuestion: 11,
                        testo: 'c) determinando e applicando i criteri e i metodi (compresi il monitoraggio',
                        risultato: {
                            id: 126,
                            idDomanda: 6,
                            tipoDomanda: 'o',
                            radioval: 0,
                            evidenza: ''
                        }
                    },
                    {
                        id: 7,
                        idQuestion: 11,
                        testo: 'd) determinando le risorse necessarie per tali processi e',
                        risultato: {
                            id: 127,
                            idDomanda: 7,
                            tipoDomanda: 'o',
                            radioval: 0,
                            evidenza: ''
                        }
                    },
                    {
                        id: 8,
                        idQuestion: 11,
                        testo: 'e) attribuendo le responsabilitÃ  e le autoritÃ  per tali processi?',
                        risultato: {
                            id: 128,
                            idDomanda: 8,
                            tipoDomanda: 'o',
                            radioval: 0,
                            evidenza: ''
                        }
                    },
                    {
                        id: 9,
                        idQuestion: 11,
                        testo: 'f) affrontando i rischi e le opportunitÃ  come determinati',
                        risultato: {
                            id: 129,
                            idDomanda: 9,
                            tipoDomanda: 'o',
                            radioval: 0,
                            evidenza: ''
                        }
                    },
                    {
                        id: 10,
                        idQuestion: 11,
                        testo: 'g) valutando tali processi e attuando ogni modifica necessaria per assicurare che tali processi ' +
                            'conseguano ' +
                            'i risultati attesi?',
                        risultato: {
                            id: 130,
                            idDomanda: 10,
                            tipoDomanda: 'o',
                            radioval: 0,
                            evidenza: ''
                        }
                    },
                    {
                        id: 11,
                        idQuestion: 11,
                        testo: 'h) migliorando i processi e il sistema di gestione per la',
                        risultato: {
                            id: 131,
                            idDomanda: 11,
                            tipoDomanda: 'o',
                            radioval: 0,
                            evidenza: ''
                        }
                    }
                ],
                notes: []
            },
            {
                id: 12,
                idSection: 5,
                testo: 'Lâ€™organizzazione: ',
                child: 1,
                reference: '4.4.2',
                risultato: null,
                options: [
                    {
                        id: 12,
                        idQuestion: 12,
                        testo: 'a) mantiene informazioni documentate per supportare il funzionamento dei propri processi?',
                        risultato: {
                            id: 132,
                            idDomanda: 12,
                            tipoDomanda: 'o',
                            radioval: 0,
                            evidenza: ''
                        }
                    },
                    {
                        id: 13,
                        idQuestion: 12,
                        testo: 'b) conserva informazioni documentate affinchÃ© si',
                        risultato: {
                            id: 133,
                            idDomanda: 13,
                            tipoDomanda: 'o',
                            radioval: 0,
                            evidenza: ''
                        }
                    }
                ],
                notes: []
            }
        ]
    }
];


@Injectable()
export class ChecklistServiceMock {
    getAll(): Section[] {
        return CHECKLIST;
    }
}
