function primes1(n) {
  for (let i = 2; i <= n; i++) {
    let premier = true;
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        premier = false;
        break;
      }
    }
    if (premier) alert(i);
  }
}
primes1(10);
