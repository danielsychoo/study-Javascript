# language: ko

기능: 로그인 버튼을 통한 큐컴버 테스트
    
    시나리오: 로그인 클릭시 id와 pw가 console에 출력
        조건 크롬브라우저로 localhost 접속
        만일 아이디에 "choo" 입력
        그리고 비밀번호에 "1234" 입력
        그리고 로그인 버튼 클릭
        그러면 "choo" 와 "1234" 가 콘솔에 출력
        그리고 크롬브라우저 닫기