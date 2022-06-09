const writeCards=(names)=>{
    return names.map(name =>`Thank you, ${name}, for the wonderful surprise gift!`);
}
const countDown=(number)=>{
    let i=number;
    while(i>=0){
        console.log(i)
        i--;
    }
}