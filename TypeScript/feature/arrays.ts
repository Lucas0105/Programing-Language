// 타입 추론 => 자동 타입 할당
const carMakers = ['str1', 'str2'];
const dates = [new Date(), new Date()];

const carsByMake: string[][] = [];

// 타입 추론에 도움이 됨
const car = carMakers[0];
const myCar = carMakers.pop();

// 다른 타입 저장 방지
carMakers.push(0);

// 타입에 맞는 함수 사용 가능
carMakers.map((car:string):string => {
    return car.toUpperCase();
})

// 여러 타입 배열로 지정 가능
const importantDates:(string|Date)[] = [new Date()];
importantDates.push('2030-10-10');
importantDates.push(new Date());
importantDates.push(0);