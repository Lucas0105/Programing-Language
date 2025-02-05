# TypeScript 개요

TypeScript = JavaScript + TypeSystem 으로 자바스크립트의 모든 기능에 TypeSystem을 추가 적용한 것입니다.

## TypeSystem 특징

- 개발 도중 오류를 알 수 있도록 도와줌 (JavaScript는 실행해야만 오류를 알 수 있음)
- Type Annotaion을 통해 분석하여 오류 표시
- 개발시에만 활용됨 => 브라우저는 타입스크립트에 대해 알지 못함 TypeScript인지...
- 코드 최적화를 하지 않음 Like 컴파일

## 실행 과정

1. TypeScript Code 작성(JavaScript + Type Annotation)
2. TypeScript Compiler
3. Plain Old JavaScript
4. Browser 실행

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
