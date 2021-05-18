// ? 기본 방식
test("2 + 2 = 4", () => {
    expect(2 + 2).toEqual(4);
});

/**
 * test("테스트에 대한 설명", () => {
 *   expect("검증 대상").toBe("기대 결과");
 * });
 * 
 * 여기서 `toEqual` 부분을 Test Matcher 라고 함.
 */


// * 아래는 자주 사용되는 Test Matcher

/**
 * 1.
 * toBe -> 같은지 체크. 허나 primative 자료형만 비교가능
 * 따라서 toBe 보다는 toEqual을 권장
 * 둘의 실제적인 차이는 아래 예시로 확인가능
 */

const getUser = (id) => {
    if(id <= 0) throw new Error("Invalid ID");
    return {
        id,
        email: `user${id}@test.com`,
    };
};

test("return a user object", () => {
    expect(getUser(1)).not.toBe({
        id: 1,
        email: "user1@test.com",
    });
    expect(getUser(1)).toEqual({
        id: 1,
        email: "user1@test.com",
    });
});

/**
 * 2.
 * toBeTruthy() -> truthy 한 값인지 체크
 * toBeFalsy() -> falsy 한 값인지 체크
 */

test("number 0 is falsy but string 0 is truthy", () => {
    expect(0).toBeFalsy();
    expect("0").toBeTruthy();
});

/**
 * 3.
 * toHaveLength() -> 배열의 길이를 체크
 * toContain() -> 배열 내부에 특정 element가 존재하는지 체크
 */

test("array with car example", () => {
    const cars = ["BMW", "Benz", "Honda"];
    expect(cars).toHaveLength(3);
    expect(cars).toContain("Benz");
    expect(cars).not.toContain("Hyundai");
});

/**
 * 4.
 * toBe() -> 일반적인 문자열 체크
 * toMatch() -> 정규표현식으로 체크
 */

test("string with toBe and toMatch", () => {
    expect(getUser(1).email).toBe("user1@test.com");
    expect(getUser(1).email).toMatch(/.*test.com$/);
})

/**
 * 5.
 * toThrow() -> 예외 상황 발생 여부 체크
 * paramater를 받을 수도 있는데
 * 문자열을 받으면 예외 메세지를 비교하고,
 * 정규표현식을 받으면 정규표현식 체크를 해줌
 * 
 * 이때, 예외가 발생하는 부분을 함수로 감싸주어야 함.
 * 감싸주지 않으면 예외 발생 여부를 체크하는 것이 아니라
 * 실제로 그 예외가 발생되어 항상 실패함.
 */

test("throw when id is non negative", () => {
    // expect(getUser(-1)).toThrow();
    // expect(getUser(-1)).toThrow("Invalid ID");

    expect(() => getUser(-1)).toThrow();
    expect(() => getUser(-1)).toThrow("Invalid");
})