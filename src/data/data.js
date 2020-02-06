export const paciente = [
    {
        text: 'Samantha Bright',
        id: 1,
        color: '#727bd2'
    }, {
        text: 'John Heart',
        id: 2,
        color: '#32c9ed'
    }, {
        text: 'Todd Hoffman',
        id: 3,
        color: '#2a7ee4'
    }, {
        text: 'Sandra Johnson',
        id: 4,
        color: '#7b49d3'
    }
];

export const profissional = [
    {
        text: 'Zé',
        id: 1,
        color: '#727bd2'
    }, {
        text: 'José',
        id: 2,
        color: '#32c9ed'
    }, {
        text: 'Bruno',
        id: 3,
        color: '#2a7ee4'
    }, {
        text: 'Weber',
        id: 4,
        color: '#7b49d3'
    }
];

export const rooms = [
    {
        text: 'Room 1',
        id: 1,
        color: '#00af2c'
    }, {
        text: 'Room 2',
        id: 2,
        color: '#56ca85'
    }, {
        text: 'Room 3',
        id: 3,
        color: '#8ecd3c'
    }
];

export const appointments = [
    {
        title: "Teste",
        startDate: new Date(2020, 1, 2, 9, 30),
        endDate: new Date(2020, 1, 2, 11, 30),
        id: 0,
        locationId: 1,
        pacienteId: 1,
        profissionalId: 1,
        profissional: "Bruno Weber",
        paciente: "Luan da Silva",
    },
]

export const dataFinanceiro = [
    {
        Uid: 1,
        entrada: 2,
        "valor a pagar/receber": 100,
        "pago/recebido" : 50,
        cliente: "Bruno",
    },
    {
        Uid: 4,
        entrada: 2,
        "valor a pagar/receber": 70,
        "pago/recebido" : 70,
        cliente: "Bruno",
    },
    {
        Uid: 2,
        entrada: 1,
        "valor a pagar/receber": 120,
        "pago/recebido" : 120,
        Fornecedor: "Bruno LTDA",
    },
    {
        Uid: 3,
        entrada: 1,
        "valor a pagar/receber": 250,
        "pago/recebido" : 0,
        Fornecedor: "Bruno LTDA",
    },
]

export const tiposEntrada = [
    { name: 'Contas a Pagar', value: 1 },
    { name: 'Contas a Receber', value: 2 },
  ];