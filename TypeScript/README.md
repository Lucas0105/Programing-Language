# TypeScript 개요

TypeScript = JavaScript + TypeSystem 으로 자바스크립트의 모든 기능에 TypeSystem을 추가 적용한 것입니다.

## TypeSystem 특징

- 개발 도중 오류를 알 수 있도록 도와줌 (JavaScript는 실행해야만 오류를 알 수 있음)
- Type Annotaion을 통해 분석하여 오류 표시
- 개발시에만 활용됨 => 브라우저는 타입스크립트에 대해 알지 못함 TypeScript인지...
- 코드 최적화를 하지 않음 Like 컴파일

## 실행 과정

1. TypeScript Code 작성(JavaScript + Type Annotation)
2. TypeScript Compiler에 의해 Plain Old JavaScript로 변환환
3. JavaScript Browser에서 실행

## 환경 설정

- CMD

```
// TypeScript Compiler 설치
npm install -g typescript ts-node

// 설치 확인
tsc --help
```

## 권장 Extension

- Prettier - Code formatter  
  FIle - Preferences - Settings - format on save check

## Compiler 사용 명령어

```
// fileName.js 파일 생성
tsc [fileName.ts]

// js 파일 실행
node fileName.js

// 두 명령어를 합친 명령어
ts-node fileName.ts
```

## Type 설정

```
interface [Name]{
  id: number;
  title: string;
  ...
}
```

## Type Annotation vs Type Inference (타입 추론)

- 공통점: 변수의 타입을 지정해주는 것

- Type Inference: typescript가 타입을 지정해주는 것 (권장)

```
const color = 'red' => type is red
선언과 초기화가 같은 줄에서 진행될 시 변수의 타입을 typesciprt가 지정
```

- Type Annotation: 사용자가 typescript 한테 해당 변수가 어떤 타입인지 명시적으로 지정해주는 것

```
Type Inference를 통해 typeScript가 자동으로 타입을 선언해주는데 Type Annotation이 필요한가?
언제 사용되는가?

3가지 경우
1. any 타입으로 반환 되는 경우 ex: JSON.parse() => 타입을 TypeScript가 추론할 수 없는 경우

2. 지연된 초기화, 선언한 다음에 다른 줄에서 초기화하는 경우
 Any 타입은 없는 것이 좋음 타입을 통해 오류를 파악할 수 없기 때문

 3. 선언과 초기화를 한 줄에 했지만 타입을 추론하기 어려운 경우 (코너 케이스)
한 변수에 타입이 여러개 가능한 경우
```

## 함수 Type Annotation 과과 Type Inference

함수의 경우 return 값을 대상으로 함  
**하지만 항상 return 값에 대해 사용자가 Type Annotation을 명시할 것을 권장 **  
그 이유는 함수에 대한 return 값을 작성하지 않거나 잘 못작성한 경우에 대한 오류를 찾기 위함
