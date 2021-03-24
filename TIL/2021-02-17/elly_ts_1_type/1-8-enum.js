{
    /**
     * Enum
     */
    // JavaScript 💩
    var MAX_NUM = 6;
    var MAX_STUDENTS_PER_CLASS = 10;
    var MONDAY = 0;
    var TUESDAY = 1;
    var WEDNESDAY = 2;
    // Object.freeze()로 하면 한번 정의 후 수정이 안되게 할 수 있다.
    var DAYS_ENUM = Object.freeze({ "MONDAY": 0, "TUESDAY": 1, "WEDNESDAY": 2 });
    var dayOfToday = DAYS_ENUM.MONDAY;
    // TypeScript (그러나 TS에서는 가능한한 쓰지 말아야 할 enum)
    var Days = void 0;
    (function (Days) {
        Days[Days["Monday"] = 1] = "Monday";
        Days[Days["Tuesday"] = 2] = "Tuesday";
        Days[Days["Wednesday"] = 3] = "Wednesday";
        Days[Days["Thursday"] = 4] = "Thursday";
        Days[Days["Friday"] = 5] = "Friday";
        Days[Days["Saturday"] = 6] = "Saturday";
        Days[Days["Sunday"] = 7] = "Sunday";
    })(Days || (Days = {}));
    console.log(Days.Monday);
    var day = Days.Saturday;
    day = Days.Tuesday;
    day = 10; // TS에서 enum을 쓰지 말아야 할 이유
    console.log(day);
}
