export const people = [
  {
    id: 0,
    name: "Daniel",
    age: 32,
    gender: "male",
  },
  {
    id: 1,
    name: "Nicolas",
    age: 18,
    gender: "male",
  },
  {
    id: 2,
    name: "Japan Guy",
    age: 18,
    gender: "male",
  },
  {
    id: 3,
    name: "German Guy",
    age: 40,
    gender: "male",
  },
  {
    id: 4,
    name: "Franch Boy",
    age: 14,
    gender: "male",
  },
];

// ! 아래의 getById와 같이 client에서 어떤 query를 사용하게 할지 만들 수 있음!
export const getById = (id) => {
  // 전체 중 query의 id와 같은 person을 찾음. (filter이므로 array에 담겨서 나옴)
  const filteredPeople = people.filter((person) => person.id === id);
  return filteredPeople[0]; // 따라서 array의 0번째 index를 return. 어차피 하나밖에..
};
