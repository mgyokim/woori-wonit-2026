// 8. Object(객체) 
// -1. 배열(Array)
//   - 순서대로 값을 저장
//   - 집합 자료형
//   - 순서대로 값을 꺼낼 수 있다. (index로)
//   - 자바스크립트의 배열 index는 0부터 시작
//   - 배열의 길이는 .length 라는 속성으로 확인
var mixedArray = [1, '가', true, null, undefined, [1, 2, 3]]
console.log('🚀 ~  ~ mixedArray: ', mixedArray)
console.log('🚀 ~  ~ mixedArray[0]: ', mixedArray[0])

// 실습: array1이라는 배열을 만들고 apple, banana, carrot 세개의 문자열을 각 index에 넣어보세요.
var fruits = ['apple', 'banana', 'carrot']
console.log('🚀 ~  ~ fruits: ', fruits)

// 맨뒤에 값을 삽입 push, 맨뒤에값을 삭제 pop, 맨앞에 값을 삽입 unshift, 맨앞에 값을 삭제 shift
fruits.push('daisy')
console.log('🚀 ~  ~ fruits: ', fruits)

fruits.pop()
console.log('🚀 ~  ~ fruits: ', fruits)

fruits.unshift('avocado')
console.log('🚀 ~  ~ fruits: ', fruits)
fruits.shift()
console.log('🚀 ~  ~ fruits: ', fruits)

// 중간 어디에다가 값을 삽입하고 싶다면 splice를 사용합니다.
fruits.splice(1, 0, 'blueberry') // 1번 index에 0개를 삭제하고 blueberry를 삽입
console.log('🚀 ~  ~ fruits: ', fruits)

// 중간 어딘가에 값을 넣어야 하는 경우도 있을 겁니다. (splice)
// splice(시작index, 삭제할개수, 삽입할 값)
fruits.splice(1, 1, 'ban')
console.log('🚀 ~  ~ fruits: ', fruits)

// 맨 뒤에 donut을 추가
fruits.push('donut')
console.log('🚀 ~  ~ fruits: ', fruits)

// ban 를 삭제하고 bee, betray라는 단어를 넣어보세요.
fruits.splice(1, 1, 'bee', 'betray')
console.log('🚀 ~  ~ fruits: ', fruits)

// -2. Set(집합) - 중복을 걸러내는 유형. new Set([1,3,4,5,6,6])
// fruits 은 위 과일 배열이 쓰고 있다. var 는 재선언해도 에러 없이 덮어쓰므로 이름을 나눈다.
var numbersWithDup = [1, 2, 3, 4, 5, 6, 6]
console.log('🚀 ~  ~ numbersWithDup: ', numbersWithDup)
var uniqueNumbers = new Set(numbersWithDup)
console.log('🚀 ~  ~ uniqueNumbers: ', uniqueNumbers)

// JS의 sort는 기본적으로 유니코드로 정렬을 합니다. 숫자는 어떻게 정렬해야 할까요?

/* ■ sort 와 비교함수 (a, b) => a - b
 *
 * 1) sort() 를 인자 없이 쓰면, 원소를 '문자열로 바꿔서' 유니코드 순서로 줄세운다.
 *    숫자여도 문자로 보기 때문에 [10, 9, 1] 이 [1, 10, 9] 가 된다.
 *    '10' 과 '9' 를 비교할 때 첫 글자 '1' 과 '9' 에서 이미 승부가 나서 '10' 이 앞에 온다.
 *
 * 2) 숫자 순서로 정렬하려면 "둘 중 누가 앞이냐" 를 판단하는 함수를 직접 넘겨야 한다.
 *    sort 는 정렬하는 동안 원소를 두 개씩 뽑아 이 함수에 넣고, 돌아온 값의 '부호' 만 본다.
 *
 *        음수(< 0)  ->  a 를 앞으로
 *        0          ->  순서 그대로
 *        양수(> 0)  ->  b 를 앞으로
 *
 *    크기가 아니라 부호만 쓴다. -1 이든 -565 든 똑같이 "a 가 앞" 으로만 취급한다.
 *
 * 3) 그래서 a - b 는
 *        a 가 작으면 a - b 가 음수 -> a 가 앞 -> 작은 값부터  = 오름차순
 *        b - a 로 뒤집으면                                    = 내림차순
 *
 * 4) 화살표함수라 짧아 보이지만 원래 모양은 이것과 같다.
 *        unsortedValues.sort(function (a, b) { return a - b })
 *    a, b 는 sort 가 넣어주는 두 원소라서 이름은 아무거나 써도 된다. (x, y 로 써도 동작 같음)
 *
 * 5) 문자열에 a - b 를 쓰면 안 된다. 문자열끼리 빼면 NaN 이라 정렬이 깨진다.
 *    문자열은 sort() 기본 동작이나 localeCompare 를 쓴다.
 */

// 1) 비교함수 없이 - 숫자인데도 문자열로 비교해서 10 이 9 앞에 온다
console.log('🚀 ~  ~ sort() 기본: ', [10, 9, 1].sort()) // [ 1, 10, 9 ]

// 2) a - b : 오름차순 / b - a : 내림차순
console.log('🚀 ~  ~ a - b (오름차순): ', [10, 9, 1].sort((a, b) => a - b)) // [ 1, 9, 10 ]
console.log('🚀 ~  ~ b - a (내림차순): ', [10, 9, 1].sort((a, b) => b - a)) // [ 10, 9, 1 ]

// 3) 화살표함수를 안 쓴 원래 모양 - 결과는 위와 같다
console.log('🚀 ~  ~ function 으로 쓴 것: ', [10, 9, 1].sort(function (a, b) { return a - b })) // [ 1, 9, 10 ]

var unsortedValues = [-565, -3, 556, 1.3, NaN, null, true, undefined,]
unsortedValues.sort((a, b) => a - b) // 숫자 오름차순 정렬은 비교함수 (a, b) => a - b
// 주의: 이 배열엔 NaN, null, true, undefined 가 섞여 있어 a - b 가 NaN 을 반환한다.
//       NaN 은 음수도 0도 양수도 아니라 "누가 앞" 을 판정할 수 없고, 결과는 오름차순이 아니다.
//       (undefined 는 비교함수를 거치지 않고 항상 맨 뒤로 간다)
console.log('🚀 ~  ~ unsortedValues: ', unsortedValues) // sort 는 원본을 정렬하므로 배열을 찍는다 (unsortedValues.sort 는 함수 자체)

// -3. Object(일반 객체) - key(기본 자료형)로 value를 부르는 종류의 dictionary 타입
//   - key는 기본자료형만 사용 가능합니다. (object, array, function은 불가)
//   - key는 중복될 수 없습니다. (중복된 key로 삽입하면 나중에 삽입한 값으로 덮어씌워집니다.)
//   - key의 순서는 보장되지 않습니다. (입력한 순서대로 출력되지 않습니다.)
//   - key 중심으로 움직입니다. value로 key를 찾을 수 없습니다.
//   - key의 자료형은 string, number, boolean, null, undefined, symbol이 가능합니다.
//   - value는 모든 자료형이 가능합니다. (기본자료형, 참조자료형 모두 가능)
var customer = { 'name': '김민교', 'age': 20, 'hobby': ['자전거타기', '책 읽기'] }
console.log('🚀 ~  ~ customer: ', customer)

// 실습: wordDict 를 만들어주시고, 가:가위, 나:나비, 라:라디오, 다:다람쥐
//       key 2 는 일부러 숫자로 넣었다. 어떻게 저장되는지는 아래 Object.keys() 에서 확인.
var wordDict = { 2: 100, '가': '가위', '나': '나비', '라': '라디오', '다': '다람쥐' }
console.log('🚀 ~  ~ wordDict: ', wordDict)

// key 로 value 를 꺼내는 방법 두 가지
//   1) 점 표기법  wordDict.가     - key 를 이름처럼 쓴다. 공백이 있거나 숫자로 시작하는 key 에는 못 쓴다.
//   2) 대괄호     wordDict['가']  - key 를 문자열로 넘긴다. key 를 변수로 받아야 할 땐 이쪽만 된다.
var wordByDot = wordDict.가
console.log('🚀 ~  ~ wordByDot: ', wordByDot)
var wordByBracket = wordDict['가']
console.log('🚀 ~  ~ wordByBracket: ', wordByBracket)

// 숫자 2 로 넣은 key 를 숫자 2 로 꺼내도 나온다 -> 100
var wordByNumberKey = wordDict[2]
console.log('🚀 ~  ~ wordByNumberKey: ', wordByNumberKey)

// key 를 모두 꺼내기: Object.keys(객체)
// 결과가 [ '2', '가', ... ] -> 숫자로 넣은 key 2 가 문자열 '2' 로 저장돼 있다.
var wordDictKeys = Object.keys(wordDict)
console.log('🚀 ~  ~ wordDictKeys: ', wordDictKeys)

// 요소 삭제: delete 객체[key]
delete wordDict['가'] // dict2에서 key가 '가'인 요소를 삭제합니다.
console.log('🚀 ~  ~ wordDict: ', wordDict)

// value 자리에는 배열도 객체도 들어간다. key 는 불리언 true 로 넣어본다.
var customerDetail = { 'name': '김민교', 'age': 20, 'hobby': ['자전거타기', '책 읽기'], true: { '참': true } }
console.log('🚀 ~  ~ customerDetail: ', customerDetail)

// in 연산자는 key 만 찾는다. value 로는 key 를 찾을 수 없다.
console.log('🚀 ~  ~ \'name\' in customerDetail: ', 'name' in customerDetail)   // true  - key 에 있다
console.log('🚀 ~  ~ \'김민교\' in customerDetail: ', '김민교' in customerDetail) // false - customerDetail 의 value 인데도 못 찾는다
console.log('🚀 ~  ~ \'나비\' in customerDetail: ', '나비' in customerDetail)   // false - customerDetail 에 아예 없는 값 (wordDict 의 value 였다)

// Object.keys()   - key 만 배열로
console.log('🚀 ~  ~ Object.keys(customerDetail): ', Object.keys(customerDetail))
// Object.values() - value 만 배열로
console.log('🚀 ~  ~ Object.values(customerDetail): ', Object.values(customerDetail))
// ==> key 로 어느 자료형이든 넣을 수 있지만, 내부적으로는 문자열로 바꿔서 저장한다. value 는 그대로 저장.
//     customerDetail 의 key true(불리언)는 'true' 로, wordDict 의 key 2(숫자)는 '2' 로 찍힌다.

// Object.entries() - [key, value] 쌍의 배열로. key 와 value 를 같이 돌 때 쓴다.
console.log('🚀 ~  ~ Object.entries(customerDetail): ', Object.entries(customerDetail))

// key 목록을 돌면서 value 를 꺼내는 반복
Object.keys(customerDetail).forEach(key => {
  console.log(`key: ${key}, value: ${customerDetail[key]}`)
})

// JSON - JavaScript Object Notation
// - 자바스크립트 객체를 문자열로 변환할 수 있습니다.
// - JSON.stringify() : 객체를 JSON 문자열로 변환
// - JSON.parse() : JSON 문자열을 객체로 변환
// 서버와 데이터를 주고받을 때는 객체를 그대로 못 보내고 문자열로 바꿔서 보낸다.
var customerJson = JSON.stringify(customer) // 객체 -> 문자열
console.log('🚀 ~  ~ customerJson: ', customerJson)
console.log('🚀 ~  ~ typeof customerJson: ', typeof customerJson) // string

var restoredCustomer = JSON.parse(customerJson) // 문자열 -> 객체
console.log('🚀 ~  ~ restoredCustomer: ', restoredCustomer)
console.log('🚀 ~  ~ typeof restoredCustomer: ', typeof restoredCustomer) // object

// 되돌린 것은 값만 같을 뿐 '다른 객체' 다. 주소를 비교하는 === 는 false.
console.log('🚀 ~  ~ restoredCustomer === customer: ', restoredCustomer === customer) // false

// JSON 이 담을 수 있는 자료형은 제한적이다. undefined 와 함수는 통째로 사라진다.
console.log('🚀 ~  ~ 손실: ', JSON.stringify({ a: 1, b: undefined, c: function () {} })) // {"a":1}

/* -4. Map: dictionary와 마찬가지로 키-값으로 쌍을 저장합니다. 키로 값을 꺼내 씁니다.
    - 키로 모든 데이터 타입을 받아줍니다.
    - 삽입 순서대로 요소를 반복할 수 있습니다.
    - size 속성을 사용해서 요소의 개수를 확인할 수 있습니다.
    - set() get()으로 삽입, 조회를 할 수 있습니다.
    - 뎁스가 복잡하거나, 데이터의 입력 순서, 양이 많을 때 
*/
var customerMap = new Map()

// 권장되는 방법 아님(직접접근) - 이렇게 넣으면 Map 의 요소가 되지 않는다.
// 에러는 안 나지만 '가' 는 그냥 객체 속성으로 붙을 뿐이라, size 에 안 세어지고
// get() 으로도 못 꺼내고 for...of 로 돌 때도 안 나온다.
customerMap['가'] = '가위'

// 권장되는 방법임.
customerMap.set('name', '김민교')
customerMap.set('age', 20)
customerMap.set('hobby', ['자전거타기', '책 읽기'])
// 출력을 보면 set() 으로 넣은 건 'name' => '김민교' (화살표),
// 직접 넣은 건 '가': '가위' (콜론) 로 구분돼서 찍힌다.
console.log('🚀 ~  ~ customerMap: ', customerMap)
console.log('🚀 ~  ~ customerMap.size: ', customerMap.size)            // 3 - '가' 는 안 세어진다
console.log('🚀 ~  ~ customerMap.get(\'가\'): ', customerMap.get('가'))  // undefined - Map 안에는 없다

// 프로그래밍에서의 함수는 따지고보면 딱 2개다. getter, setter

// 실습: 나, 나비 / 다, 다람쥐
var wordMap = new Map() // var 를 빼먹으면 선언 없이 전역에 만들어진다 ('use strict' 였다면 에러)
wordMap.set('나', '나비')
wordMap.set('다', '다람쥐')
console.log('🚀 ~  ~ wordMap: ', wordMap)

// get(key) 로 값을 꺼낸다. (백틱 `나` 도 문자열이라 '나' 와 같은 key)
console.log('🚀 ~  ~ wordMap.get(`나`): ', wordMap.get(`나`))
console.log('🚀 ~  ~ wordMap.get(\'다\'): ', wordMap.get('다'))

// set 으로 삽입시 순서 보장 (맨뒤)
wordMap.set('가', '가위')
console.log('🚀 ~  ~ wordMap: ', wordMap)

// map 에서 데이터 삭제
wordMap.delete('다')
console.log('🚀 ~  ~ wordMap: ', wordMap)

wordMap.set(1, 100)

// entries() 는 [key, value] 쌍을 도는 iterator 를 돌려준다. 배열이 아니라서
// 그대로 찍으면 [Map Entries] 로 보이고, ... 로 펼쳐야 배열로 보인다.
console.log('🚀 ~  ~ wordMap.entries(): ', wordMap.entries())
console.log('🚀 ~  ~ [...wordMap.entries()]: ', [...wordMap.entries()])

// map 에서 key 1 로 value 를 꺼내보세요.
// -> Map 은 key 의 자료형을 그대로 유지한다. 위의 일반 객체(wordDict)가 숫자 key 2 를
//    문자열 '2' 로 바꿔 저장했던 것과 정반대다. Map 과 Object 의 가장 큰 차이.
console.log('🚀 ~  ~ wordMap.get(\'1\'): ', wordMap.get('1')) // undefined - 문자열 '1' 은 아예 다른 key
console.log('🚀 ~  ~ wordMap.get(1): ', wordMap.get(1)) // 100 - 숫자 1 로 넣었으니 숫자 1 로 꺼낸다

/*
9. 반복문: for/while
-1. for (초기값; 조건; 증감식) {
  반복되어야 할 실행문
}
*/
for (var i = 0; i < 3; i++) {
  console.log('🚀 ~  ~ i: ', i)
}

// iterator: 반복자, 반복할 수 있는 객체
// keys() / values() 도 배열이 아니라 iterator 라서, ... 으로 펼쳐야 값이 보인다.
console.log('🚀 ~  ~ wordMap.keys(): ', ...wordMap.keys())
console.log('🚀 ~  ~ wordMap.values(): ', ...wordMap.values())

// 1~5까지 출력되도록 변경
for (var i = 1; i < 6; i++) {
  console.log('🚀 ~  ~ i: ', i)
}

// 5~1까지 출력되도록 변경
for (var i = 5; i > 0; i--) {
  console.log('🚀 ~  ~ i: ', i)
}

// 실습: 5, 3, 1이 출력되도록 변경
// i 를 2씩 줄이면서 문자열에 이어 붙인다. 마지막(1)에만 쉼표를 안 붙이려고 if 로 나눴다.
var oddText = ''
for (var i = 5; i > 0; i -= 2) {
  if (i != 1) {
    oddText = oddText + i + ', '
  } else {
    oddText = oddText + i
  }
}
console.log('🚀 ~  ~ oddText: ', oddText)

// ==> 숏코드 버전: 배열에 담아두고 join(', ') 으로 한 번에 잇는다.
//     "마지막에만 쉼표 빼기" 예외 처리가 통째로 없어진다.
const oddList = []

for (let i = 5; i > 0; i -= 2) {
  oddList.push(i)
}
console.log('🚀 ~  ~ oddList: ', oddList.join(', '))

// 배열의 길이는 .length 라는 속성으로 확인
var friendNames = ['짱구', '철수', '유리']
console.log('🚀 ~  ~ friendNames: ', friendNames)

// 실습: ~야, 안녕? 이라는 글귀를 더해서 3명한테 인사를 해주세요.
// 같은 결과를 두 가지로 — 그래서 이름마다 두 번씩 찍힌다.
for (var i = 0; i < friendNames.length; i++) {
  console.log(friendNames[i] + '야, 안녕?')  // 1) + 로 문자열 잇기
  console.log(`${friendNames[i]}야, 안녕?`)   // 2) 템플릿 리터럴(백틱) - ${} 안에 값을 넣는다
}

// wordDict 의 key, value 를 for문으로 출력해보세요.
// Object.keys() 로 key 배열을 만든 뒤 index 로 도는 방법
for (var i = 0; i < Object.keys(wordDict).length; i++) {
  var key = Object.keys(wordDict)[i]
  var value = wordDict[key]
  console.log(`key: ${key}, value: ${value}`)
}

// wordDict 의 key 자체를 for 문
// for ... of 는 '값' 을 하나씩 꺼낸다. Object.keys(wordDict) 가 배열이라 그 값(=key)이 들어온다.
for (var key of Object.keys(wordDict)) {
  var value = wordDict[key]
  console.log(`key: ${key}, value: ${value}`)
}

// map 은 .size 라는 '속성' 으로 방의 개수를 구할 수 있습니다. (메서드가 아니라 () 를 안 붙인다)
// map1에 들어있는 key - value 를 출력해보세요.
console.log('🚀 ~  ~ [...customerMap.keys()]: ', [...customerMap.keys()]) // ... 없이 [customerMap.keys()] 로 쓰면 iterator 가 통째로 담긴다

// key, value 를 for ... of 로 출력
// Map 은 그 자체가 반복 가능해서 바로 돌 수 있고, 한 번에 [key, value] 로 구조분해된다.
// 앞에서 직접 넣은 '가' 는 여기서도 안 나온다.
for (var [key, value] of customerMap) {
  console.log(`key: ${key} - value: ${value}`)
}

// 일반 객체는 for ... in - key 를 하나씩 꺼낸다. (일반 객체에는 for ... of 를 쓸 수 없다)
for (var key in wordDict) {
  console.log(`key: ${key}, value: ${wordDict[key]}`)
}

// -2. while문 - 반복할 횟수가 정해지지 않았을 때
// 1. while문 바깥에 조건을 끝낼 실마리를 만들어주기
// 2. 무한반복으로 작성하고 break, continue로 강제로 흐름을 제어

// 방법 1) 조건을 끝낼 실마리(i)를 바깥에 두고, 조건이 거짓이 되면 스스로 멈춘다.

// 실습: while 문으로 1~5까지 console.log
var i = 1
while (i < 6) {
  console.log(i)
  i++ // 이 줄을 빼먹으면 조건이 영원히 참이라 무한반복이 된다
}

// 실습: while문 으로 1, 3, 5 만 출력
// 증감식을 2씩 주면 조건문 없이도 홀수만 걸러진다
var i = 1
while (i <= 5) {
  console.log(i)
  i += 2
}


// 방법 2) while (true) 로 무한반복을 만들고 break 로 직접 끊는다.
//         조건을 맨 위에서 못 쓰고 "한 번 실행한 뒤에 판단" 해야 할 때 쓴다.

// 실습: break 로 1~5 출력
var i = 1
while (true) {
  console.log('🚀 ~  ~ i: ', i)
  if (i >= 5) {
    break // 조건을 만족하면 반복문을 완전히 빠져나간다
  }
  i++
}

// 실습: 5 ~ 1 까지 출력 (거꾸로 세려면 증감식을 i-- 로)
var i = 5
while (true) {
  console.log('🚀 ~  ~ i: ', i)
  if (i <= 1) {
    break
  }
  i--
}

// 실습: 1 2 3 5 6 7 만 출력 — continue 와 break 를 같이 쓴다
//   continue : 이번 회차만 건너뛰고 다음 반복으로 (4를 안 찍는 이유)
//   break    : 반복문 자체를 끝냄 (8부터 안 찍는 이유)
var i = 0
while (i < 10) {
  i++

  if (i === 4) {
    continue // 4는 출력하지 않고 다음 반복
  }

  if (i === 8) {
    break // 반복문 종료
  }

  console.log(i)
}
// friendNames 와 .length 속성을 이용해서 arr의 모든 원소를 출력하는 while문을 만들어보세요.
var i = 0
while (i < friendNames.length) {
  console.log('🚀 ~  ~ friendNames[i]: ', friendNames[i])
  i++
}

// forEach (인덱스를 경유하지 않고 바로 값만 출력하는 메서드)
friendNames.forEach((value, index, array) => {
  /*
  * 콜백 파라미터 관련
  * */
  // console.log('🚀 ~  ~ value: ', value)
  // console.log('🚀 ~  ~ index: ', index)
  // console.log('🚀 ~  ~ array: ', array)

  console.log('🚀 ~  ~ value: ', value)
})

// for ... of : 인덱스를 경유하지 않고 각 원소에 직접 접근

/* 10. 함수 : 코드를 재사용하기 위해 씁니다.
 *     같은 로직이 여러 곳에 흩어지면 규칙이 바뀔 때 전부 찾아 고쳐야 한다.
 *     함수로 묶으면 한 곳만 고치면 된다.
 *
 * -1. 기본형
 *     function 함수명(파라미터1, 파라미터2, 파라미터3 ...) {
 *         파라미터를 받아서 실행할 실행문
 *         return 달고 돌아갈 덩어리 하나
 *     }
 *
 * -2. 익명함수 : lambda처럼 쓰고 버리는 걸 기본으로 합니다.
 *     var 함수명 = function (파라미터1, 파라미터2, 파라미터3 ...) {
 *         파라미터를 받아서 실행할 실행문
 *         return 달고 돌아갈 덩어리 하나
 *     }
 *
 * -3. 화살표함수 : (파라미터) => { 동작 }
 */

// ---------- -1. 기본형 ----------

// 입력도 결과도 없는 함수
function printHello() {
  console.log('🚀 ~ printHello ~ hello')
}
printHello()

// 입력만 있는 함수. name 은 이 함수 안에서만 쓰는 지역변수다.
function printName(name) {
  console.log('🚀 ~ printName ~ name: ', name)
}
printName('김민')

// 입력도 결과도 있는 함수 - 배열을 받아 이어붙여서 돌려준다
var familyNames = ['짱구', '짱아', '훈이']

function joinNames(friendNames) { // 매개변수 이름이 바깥의 friendNames 와 같아도 서로 다른 변수다
  var joined = ''
  var nameCount = friendNames.length
  console.log('🚀 ~ joinNames ~ nameCount: ', nameCount)

  for (var i = 0; i < nameCount; i++) {
    console.log('🚀 ~ joinNames ~ friendNames[i]: ', friendNames[i])
    joined = joined + friendNames[i]
  }
  return joined
}
console.log('🚀 ~  ~ joinNames(familyNames): ', joinNames(familyNames))


// ---------- -2. 익명함수 ----------

// 이름 없이 만들어서 변수에 담는다. 변수 이름이 곧 함수 이름 역할을 한다.
var greetByAnonymous = function (name) {
  return name + '님, 안녕하세요.'
}
console.log('🚀 ~  ~ greetByAnonymous: ', greetByAnonymous('짱구'))


// ---------- -3. 화살표함수 ----------

// 익명함수를 더 짧게 쓴 것. 위 forEach 에 넘겼던 것도 화살표함수였다.
var greetByArrow = (name) => {
  return name + '님, 안녕하세요.'
}
console.log('🚀 ~  ~ greetByArrow: ', greetByArrow('훈이'))

// 실행문이 return 한 줄뿐이면 { } 와 return 을 같이 생략할 수 있다
var greetByArrowShort = (name) => name + '님, 안녕하세요.'
console.log('🚀 ~  ~ greetByArrowShort: ', greetByArrowShort('철수'))

// 셋 다 결과가 같다. 모양만 다르고 하는 일은 같다.
console.log('🚀 ~  ~ 같은가: ', greetByAnonymous('맹구') === greetByArrow('맹구'), greetByArrow('맹구') === greetByArrowShort('맹구'))


/* ■ 함수의 네 가지 꼴 (위 -1 ~ -3 이 '모양' 이라면, 이건 '입출력' 기준 분류다)
 *     "입력(매개변수)을 받느냐" x "결과(return)를 돌려주느냐" 두 축으로 나눈다.
 *
 *     | # | 입력 | 결과 | 언제 쓰나                    | 위 예시  |
 *     |---|------|------|------------------------------|----------|
 *     | 1 |  X   |  X   | 부르면 늘 같은 동작만 할 때   | printHello   |
 *     | 2 |  O   |  X   | 받은 값으로 동작만 할 때      | printName   |
 *     | 3 |  X   |  O   | 입력 없이 값을 만들어 줄 때   | 아래 3)  |
 *     | 4 |  O   |  O   | 받아서 계산해 돌려줄 때       | joinNames   |
 *
 *     return 이 없는 함수(1, 2번)를 실행하면 결과는 undefined 다.
 *     "동작을 시키는 함수" 와 "값을 얻는 함수" 를 구분하는 게 이 표의 핵심.
 */

// 1) 입력 X, 결과 X - 부르면 정해진 동작만 한다
function printGreeting() {
  console.log('안녕하세요, 우리은행입니다.')
}
printGreeting()
console.log("🚀 ~  ~ printGreeting(): ", printGreeting()); // undefined - return 이 없다

// 2) 입력 O, 결과 X - 받은 값으로 동작만 한다. 값을 돌려주지 않으니 변수에 담을 게 없다
function printCustomer(name) {
  console.log(name + '님, 안녕하세요.')
}
printCustomer('김민교')

// 3) 입력 X, 결과 O - 부를 때마다 값을 만들어 돌려준다
function getToday() {
  var date = new Date()
  return date.getFullYear() + '년 ' + (date.getMonth() + 1) + '월 ' + date.getDate() + '일'
}
var today = getToday() // 결과가 있으니 변수에 담아서 계속 쓸 수 있다
console.log("🚀 ~  ~ today: ", today);

// 4) 입력 O, 결과 O - 받아서 계산해 돌려준다. 실무에서 제일 많이 쓰는 꼴
function calculateFee(amount) {
  return Math.round(amount * 0.005) // 이체 금액의 0.5% 를 수수료로
}
console.log("🚀 ~  ~ calculateFee(300000): ", calculateFee(300000));
// 결과를 돌려주니 다른 함수에 그대로 넘길 수 있다 (함수를 조립할 수 있다)
console.log("🚀 ~  ~ 수수료 문자열: ", calculateFee(300000).toLocaleString() + '원');

// 5) 입력 개수가 정해지지 않은 경우 - 나머지 매개변수 ...args 로 배열처럼 묶어 받는다
function sumAll(...args) {
  var total = 0
  for (var num of args) {
    total = total + num
  }
  return total
}
console.log("🚀 ~  ~ sumAll(1, 2, 3): ", sumAll(1, 2, 3));
console.log("🚀 ~  ~ sumAll(1, 2, 3, 4, 5): ", sumAll(1, 2, 3, 4, 5));


/* 위 네 가지는 '입출력' 으로 나눈 것이고, 이것과 별개로 '쓰는 모양' 으로 나눈 분류가 따로 있다.
 *   기본형   function calculateFee(amount) { ... }
 *   익명함수 var calculateFee = function (amount) { ... }
 *   화살표   var calculateFee = (amount) => { ... }
 * 셋 다 하는 일은 같고, 나누는 축이 다를 뿐이다. 차이는 아래 스코프/호이스팅에서 이어진다.
 */


// -4. 함수의 스코프
//     1. 스코프 : 변수나 함수가 어디까지 접근해서 사용할 수 있는지. 
//     2. 호이스팅(Hoisting): 변수나 함수의 선언이 스코프의 최상단에서 먼저 읽은 것처럼 동작하는 것. 
//         - 호이스팅은 선언만 끌어올려지고, 값은 끌어올려지지 않습니다.           
//     3. TDZ(Temporal Dead Zone): 변수가 선언되기 전까지 접근할 수 없는 구간
// | 키워드 | 스코프 범위   | 재선언 | 재할당 | 호이스팅     | 특징 요약                           |
// |--------|----------------|--------|--------|--------------|----------------------------------|
// | `var`  | 함수 스코프     | O      | O      | O            | 블록 무시, 중복 선언 가능        |
// | `let`  | 블록 스코프     | X      | O      | O (TDZ)      | 블록 안에서만 유효, 중복 선언 불가|
// | `const`| 블록 스코프     | X      | X      | O (TDZ)      | 상수 선언, 객체 내부 변경 가능    |

//         변수를 선언하는 방법 : 
//     1) var : 함수 단위(스코프)에서 사용이 됨.(블록스코프는 무시)
//                 변수를 새로 만들고 값을 새로 쓸 수 있음.
//     2) let: 블록 단위에서 사용이 됨. { } 
//                 같은 블록 안에서 변수를 중복해 만들 수는 없지만 값은 바꿀 수 있음.
//     3) const : 블록 단위에서 사용이 됨. { } 
//                 한번 값을 넣으면 바꿀 수 없음. 그러나 객체 내부의 속성 등은 수정 가능

// scope : 변수에 접근할 수 있는 위치를 제어
// var x = '가'; // 함수 범위
// let y = '나'; // 블록 범위
// const z = '다'; // 블록 범위, 상수 (값 변경 불가)

// function variableExample() {
//     var x = 10; // 함수 범위
//     let y = 20; // 블록 범위
//     const z = 30; // 블록 범위, 상수 (값 변경 불가)

//     if (true) {
//         var x = 40; // 같은 함수 내에서 var 변수는 덮어씌워짐
//         let y = 50; // 블록 내에서만 유효
//         const z = 60; // 블록 내에서만 유효

//         console.log('if문 내부:', x, y, z); // 40, 50, 60
//     }

//     console.log('if문 외부:', x, y, z); // 40, 20, 30 (var는 재할당되었지만, let과 const는 블록 범위를 가짐)
// }

/* 11.  클래스: 같은 형식으로 사용하기 위한 자료형을 미리 만들어놓고 계속 객체를 찍어서 재사용
 - 실제로는 function 으로 만들어집니다.
 - sugar coated 문법: 다른 언어와 호환되다 보니까 class 클래스명으로 만들면 내부적으로 코드를 변환해서 동작시켜줍니다. 
*/

function Person (name, age) {
  this.name = name
  this.age = age
}

Person.prototype.greet = function () {
  console.log('안녕하세요!' + this.name)
}

// static: 클래스를 통해 접근하는 클래스 변수, 클래스 메서드
// 인스턴스를 통해 접근하는 인스턴스 변수(this로 전달), 인스턴스 메서드
// 은닉성 구현: #을 붙인 private 변수를 사용하여 외부에서 접근하지 못하도록 숨길 수 있습니다.


