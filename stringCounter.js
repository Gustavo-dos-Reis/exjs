
const stringCounter = (letter, string) => {
    var cont = 0;
    for(var i in string){
        if (letter == string[i].toLowerCase()){
            cont++;
        }
    }

    console.log(`Essa letra aparece ${cont} ${cont == 1 ? 'vez' : 'vezes'}` )
};

 
stringCounter("g", "GuStaVo dOS reIs dE CarvaLhO");
