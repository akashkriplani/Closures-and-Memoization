function addTo80(num) {
  return num + 80;
}

function memoizedAddTo80() {
  let cache = {};
  return function(num) {
    if (num in cache) {
        return cache[num];
    } else {
      console.log('calculating...');
      cache[num] = num + 80;
      return cache[num];
    }
  }
}

const memoized = memoizedAddTo80();

console.log(memoized(5));
console.log(memoized(6));
// Memoized version
console.log(memoized(6));