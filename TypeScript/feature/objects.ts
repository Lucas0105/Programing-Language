const profile = {
    enName: 'alex',
    age: 20,
    coords: {
        lat: 0,
        lng: 15
    },
    setAge(age:number):void {
        this.age = age;
    }
}

const {age, enName} : {age:number, enName: string} = profile;
const {coords: {lat, lng}} : {coords: {lat: number; lng:number;}} = profile;