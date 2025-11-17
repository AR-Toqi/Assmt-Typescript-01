
const formatValue = (value: string | number | boolean): string | number | boolean => {
    if (typeof value === 'string') {
        return value.toUpperCase();
    } else if (typeof value === 'number') {
        return value * 10;
    } else if (typeof value === 'boolean') {
        return !value;
    } else {
        return value;
    }
};


const getLength = (value: string | any[]): number => {
    if (typeof value === 'string') {
        return value.length;
    } else if (Array.isArray(value)) {
        return value.length;
    } else {
        return 0;
    }
};



class Person {
    name: string;
    age: number;

    constructor(name: string, age: number){
        this.name = name;
        this.age = age
    };

    getDetails(): string{
        return `'Name: ${this.name}, Age: ${this.age}'`
    }
};

const person1 = new Person('John Doe', 30);  
const person2 = new Person('Alice', 25);



const rating = (value: number): number=>{
    if (value >= 0 && value <= 5){
        return +(value.toFixed(1))
    } else{
        throw new Error('rating not valid')
    }
}
type Item = {
    title: string;
    rating: number;
};

const filterByRating = (items: Item[]): Item[] => {
    const result = items.filter(item => item.rating >= 4)
    .map(item => ({
        ...item,
        rating: rating(item.rating)
    }));
    return result;
};

const books: Item[] = [
    { title: 'Book A', rating: 4.5 },
    { title: 'Book B', rating: 3.2 },
    { title: 'Book C', rating: 5.0 },
];  


type User = {
    id: number;
    name: string;
    email: string;
    isActive: boolean;
}
const filterActiveUsers = (users: User[]): User[] => {
       return users.filter(user => user.isActive === true)
};

const users: User[] = [
  { id: 1, name: 'Rakib', email: 'rakib@example.com', isActive: true },
  { id: 2, name: 'Asha', email: 'asha@example.com', isActive: false },
  { id: 3, name: 'Rumi', email: 'rumi@example.com', isActive: true },
];



interface Book {
    title: string;
    author: string;
    publishedYear: number;
    isAvailable: boolean;
}

const printBookDetails = (books: Book): void => {
    console.log(`Title: ${books.title}, Author: ${books.author}, Published: ${books.publishedYear}, Available: ${books.isAvailable ? 'Yes' : 'No'}`);
};

const myBook: Book = {
  title: 'The Great Gatsby',
  author: 'F. Scott Fitzgerald',
  publishedYear: 1925,
  isAvailable: true,
};
// printBookDetails(myBook);


const getUniqueValues = (arr1: (string | number)[], arr2: (string | number)[]): (string | number)[]=> {
    const uniqueValues: (string | number)[] = [];

    for (let i = 0; i < arr1.length; i++){
        let matchValue = false;
        for (let j = 0; j < uniqueValues.length; j++){
            if (arr1[i] === uniqueValues[j]){
                matchValue = true;
                break;
            }
        }
        if (!matchValue){
            uniqueValues[uniqueValues.length] = arr1[i];
        }
    }
    for (let i = 0; i < arr2.length; i++){
        let matchValue = false;    
        for (let j = 0; j < uniqueValues.length; j++){
            if (arr2[i] === uniqueValues[j]){
                matchValue = true;
                break;
            }
        }
        if (!matchValue){
            uniqueValues[uniqueValues.length] = arr2[i];
        }
    }
    return uniqueValues;

};

const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7]; 


type Product = {
    name: string;
    price: number;
    quantity: number;
    discount?: number; 
};

const calculateTotalPrice = (arr: Product[]): number => {
    if (arr.length === 0) return 0;
    
    const countTotal = arr.map(product =>{
        const {price, quantity, discount} = product;
        const baseTotal = price * quantity;
        if(discount){
            const discountPrice = (baseTotal * discount / 100);
            return baseTotal - discountPrice;
        }
        return baseTotal;
    });

    return countTotal.reduce((acc, total) => acc + total, 0);
}

const products: Product[] = [
  { name: 'Pen', price: 10, quantity: 2 },
  { name: 'Notebook', price: 25, quantity: 3, discount: 10 },
  { name: 'Bag', price: 50, quantity: 1, discount: 20 },
];
