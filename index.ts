const add = (a: number, b: number): number => {
    
     return a + b;
 }

//anonymous funciton

 const joinString = function (a: string, b: string): string{
    
     return a + b;
}

//      --------------------------------------------------------------------------

interface Post{

    title: string;
    dayold: number;
    published: boolean;
    
}

const post1 = {
     title: 'aa',
    dayold:33,
    published:true
    
}

const printPost = (p: Post) => {
    
    console.log(`${p.dayold} && ${p.published} `);
}

printPost(post1);

//  classes and properties    --------------------------------------------------------------------------

const Component = (target:any) => {
    
    console.log(target);

}

@Component
class Car{

    constructor(private color: string, private model: string) { }
    
    drive() {
        console.log(this.color);
    }
}

const car1 = new Car('red', 'ferrari');

// ---------------------------------------------------------------------------------------------------

//Generics

class hilder<T>{

    value: T;
}



const valueWrapper = <T>(value: T): T[]{
    
    return [value];
}

valueWrapper<number>(10);




