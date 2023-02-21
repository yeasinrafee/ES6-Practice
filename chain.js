
const user = [
    {
        name: 'rafee',
        serial: 01,
        country: 'bd',
        lang: [
            {
                vocal: ['bangla', 'english', 'hindi'],
                programming: ['C', 'C++', 'JS', 'Python']
            }
        ]
    },
    {
        name: 'yeasin',
        serial: 02,
        country: 'us',
        lang:
            {
                vocal: ['bangla', 'english', 'hindi'],
                programming: ['C', 'C++', 'JS', 'Python']
            }
    }
];

const python = user[1].long?.programming[3];
console.log(python);