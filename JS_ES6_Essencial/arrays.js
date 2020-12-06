const users = ['Joao','Guilherme','Maria'];
const age = {
    Under_Age: Symbol ('U'),
    Of_Age: Symbol ('A')
}

const persons = [
    {
        name: 'Joao',
        lastName: 'Dias',
        age: age.Of_Age 
    },
    {
        name: 'Guilherme',
        lastName: 'Freitas',
        age: age.Under_Age
    },
    {
        name: 'Maria',
        lastName: 'Cavalcanti',
        age: age.Of_Age
    }
];

console.log('Itens:', persons.length);
console.log('É Array?', Array.isArray(persons));

persons.forEach((person, index, arr) =>{
    console.log(`Nome: ${person.name} Index: ${index}`, persons);
});

const OfAge = persons.filter(person => person.age === age.Of_Age);
console.log('Lista de pessoa maiores de idade:', OfAge);

const PersonsWithTicket = persons.map(person => {
    person.Ticket = 'Ingresso Valido';
    return person;
});
console.log(PersonsWithTicket);

