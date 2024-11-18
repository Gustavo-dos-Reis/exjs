var persons = [
    {itsme: false, admin: true, name:"Erick"},
    {itsme: true, admin: true, name:"Gustavo"},
    {itsme: false, admin: false, name:"João"},
];

const organizar = (personsList) => {
    //se retornar <0 a vem antes de b
    //se retornar >0 b vem antes de a
   personsList.sort((a, b) => {
    if (a.itsme === true && b.itsme === false){
        return -1;
    }
   });
 

   personsList.sort((a, b) => {
    if (a.admin === true && b.admin === false){
        return -1;
    }
   });
   console.log(personsList)
};


organizar(persons);

