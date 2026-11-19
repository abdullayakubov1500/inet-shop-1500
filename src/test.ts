let val = 100;
let val1: string = 'sfds';
let val2: boolean = true;
let val3: number = NaN;
let val4: undefined = undefined;
let val5: null = null;
let val6: object = {};
let val7: number | string = 50;
val7 = 'dsfgfd';
let val8: string[] = ['sdfws', 'sdfsd', 'sdfsdf'];
// val8.push(true)
let val9: Array<string | number> = ['fgh', 'dfgfd', 50];
let tuple: [number, string, boolean] = [25, 'sdfsd', true];
type strType = string | string[];
let text: strType = 'fsdfs';
text = ['sdfsd', 'sdfsd'];

type User = {
    id: number,
    name: string,
    age: number,
    alive?: boolean
}

type Prof = {
    skills: string[]
}

type Admin = User & Prof;

const vasya: Admin = {
    id: 1,
    name: 'Вася',
    age: 25,
    alive: true,
    skills: ['react', 'html', 'css', 'js']
    // surname: 'Васильев'
}

interface IProduct {
    id: number;
    title: string,
    desc: string | string[],
    price: number,
    info?: ()=>void
}

interface IBonus {
    discount?: string
}

interface ISale extends IProduct, IBonus {}

const apple: ISale = {
    id: 25,
    title: 'Яблоко',
    desc: 'Голден',
    price: 10000,
    info(){
        console.log(this.title, this.desc);
    },
    discount: '20%'
}

// function find(val:string): void {
// function find(val:string): string[] {
function find <T> (val:T): T[] {
    return [val]
}

find('sdfs')
find(5)
find(true)
find<Admin>(vasya)