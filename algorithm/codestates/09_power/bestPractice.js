function power(base, exponent) {
  if (exponent === 0) return 1;

  const half = parseInt(exponent / 2);
  const temp = power(base, half);
  const result = (temp * temp) % 1000000009;

  if (exponent % 2 === 1) return (base * result) % 1000000009;
  else return result;
}

let output = power(4, 15);
console.log(output); // --> 73741815