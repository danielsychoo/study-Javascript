# 1-2번 문제
개쉽죠? 넘어가도 되죠?

-------------------------------------------

# 3번 문제
## 이런 문제들은 가정을 보고 **문장을 먼저 작성**해본다.

users, comments
사용자, 댓글

- 한 명의 사용자는 여러개의 댓글을 작성할 수 있다.
- 하나의 댓글은 한 명의 사용자가 쓴다.

따라서 사용자와 댓글은 (1 : N)의 관계이다.
이런 경우에 field는 N(댓글)쪽에 추가해야 한다.

-------------------------------------------

# 4번 문제
## 테이블이 나오면 **테이블을 먼저 만들고 시작**해본다.

### innerJoin과 outerJoin의 구분
(SQL join 다이어그램 구글링ㄱㄱ)
(다이어그램 그림에 query 예시도 적혀있음 개이득)
교집합만 찾아낼 때는 innerJoin
그 외 나머지는 outerJoin

### 문제에서 '최소 하나 이상의 pet을 가진'이 교집합을 의미하는 문장이다.
'owner를 선택하는' 이니까 [select * from users]
'교집합'이므로 [inner join pets]
연결해야 하는 값들 '연결' [on users.id = pets.owner_id]

### 결과 query
```sql
select * from users
inner join pets
on users.id = pets.owner_id;
```

-------------------------------------------

# 5번 문제
'pet의 이름과 owner의 이름을 선택하는' 이므로 [outer join]
정확히는 outer join 중에서도 right join...이지만, 복잡해지니까
우리는 이제부터 그림에서 다이어그램 우측은 버리는겁니다 ㅇㅋ?
따라서 좌측 다이어그램인 [left join]

'owner가 없더라'도', pet은 결과로 출력' 이므로 [outer join]
우측 버리기로 한거 기억하져? ㅇㅋ? [left join]
이때, owner가 없더라도 이니까 기준은 pet (pet은 무조건 다 나와야 하므로)

pet이 기준이므로 [select * from pets]
교집합'도' [left join users]
이건 순서 상관음슴 [on users.id = pets.owner_id]

### 결과 query
```sql
select * from pets
left join users
on users.id = pets.owner_id;
```

## 추가사항
select * from pets as p
로 하고나면 이 query에서 pets는 p만 적으면 된당 유후~
(as가 rename을 하는 것이기 때문)

-------------------------------------------

# 6번 문제
유저, 음식 (문장 만들어봅세)
- 유저 한 명은 여러 음식을 좋아한다.
- 음식 하나는 여러 사람이 좋아한다.

따라서 이것은 N : N 임...

N : N 은 **두 테이블의 join 테이블을 만들어서**
**거기에 user_id, food_id column을 추가**하는 것이 답.

중요한 것은 이렇게 해야겠다고 **생각해내는 것**.

-------------------------------------------

# 7번 문제
우선 그림만 봐도 N : N 이라는 것을 알 수 있음.
세 개의 테이블인데 N : N 이면
2번 join 해야 한다는 것을 생각해내야 함. (도대체가..)
따라서 이건 테이블이 3개이므로 join 2번 해야함ㅋ. ㅇㅋ?

'모든 유저와'이므로 관점은 users [select * from users]
조건에 유저가 좋아하는 음식이 없더라'도' 결과에 나타나야 하므로
[outer join] 이 중 우린 우측 안보기로 했으니까 [left join]

따라서
모든유저 셀렉 [select * from users]
-> 1번째 join
**users와 foods의 관계를 위해 favorites_foods가 먼저 join**
(**왜냐면 favorites_foods가 교집합에 들어가 있으니께**)
[left join favorites_foods]
[on users.id = favorites_foods.user_id]
-> 2번째 join
[left join foods]
[on food.id = favorites_foods.food_id]

### 결과 query
```sql
select * from users
left join favorites_foods
on users.id = favorites_foods.user_id
left join foods
on food.id = favorites_foods.food_id
```