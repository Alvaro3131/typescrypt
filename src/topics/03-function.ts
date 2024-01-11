function addNumbers(a:number,b:number){
    return a+b;
}

const addNumbersArrow = (a:number,b:number):string=>{
    return `${a+b}`;
}

function multiply(firsNumber:number, secondNumber?:number, base:number=2){
    return firsNumber*base;

}
interface Character{
    name:string;
    hp:number;
    showHp:()=>void;
}
/* const result = addNumbers(1,2)
const result2 = addNumbersArrow(1,2)
const resultmultiplyResult:number = multiply(5)
console.log({result})
console.log({result2})
console.log({resultmultiplyResult}) */

const healCharacter = (character:Character, amount:number)=>{
    character.hp += amount;
}

const strider={
    name:'Aragorn',
    hp:50,
    showHp(){
        console.log(`Puntos de vida: ${this.hp}`)
    }
}
healCharacter(strider,20);
healCharacter(strider,20);
strider.showHp();
export {}