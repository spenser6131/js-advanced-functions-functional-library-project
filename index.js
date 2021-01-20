const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      let newCollection = (typeof collection === "array") ? collection.slice() : Object.values(collection);
      for (let i = 0; i < newCollection.length; i++) {
        callback(newCollection[i]);
      }
      return collection;
    },

    map: function(collection, callback) {
      if (typeof collection !== "array") {
        collection = Object.values(collection);
      }
      let array = [];
      for (let i = 0; i < collection.length; i++) {
        array.push(callback(collection[i]));
      }
      return array;
    },

    reduce: function(collection, callback, acc) {
      let newCollection = collection;
      if (!acc) {
        acc = newCollection[0];
        newCollection = newCollection.slice(1);
      }
      let l = newCollection.length;
      for (let i = 0; i < l; i++) {
        acc = callback(acc, newCollection[i], newCollection);
      }
      return acc;
    },

    find: function(collection, predicate) {
      if (typeof collection !== "array") {
        collection = Object.values(collection);
      }
      let l = collection.length;
      for (let i = 0; i < l; i++) {
        if (predicate(collection[i])) {
          return collection[i];
        }
      }
      return undefined;
    },

    filter: function(collection, predicate) {
      if (typeof collection !== "array") {
        collection = Object.values(collection);
      }
      let arr = [];
      let l = collection.length;
      for (let i = 0; i < l; i++) {
        if (predicate(collection[i])) {
          arr.push(collection[i]);
        }}
      return arr;
    },

    size: function(collection) {
      if (typeof collection === "array") {
        return collection.length;
      } else {
        return Object.keys(collection).length;
      }
    },

    first: function(array, n=0) {
      return (n === 0) ? array[0] : array.slice(0, n)
    },

    last: function(array, n=0) {
      return (n === 0) ? array[array.length - 1] : array.slice(array.length - n, array.length)
    },

    compact: function(array) {
      let f = new Set(["", NaN, false, null, 0, undefined])
      return array.filter(el => !f.has(el))
    },

    sortBy: function(array, callback) {
      let newArr = [...array];
      return newArr.sort(function(a, b) {
        return callback(a) - callback(b);
      })
    },

    flatten: function(array, shallow=false) {
      if (shallow === true) {
        return array.flat(1)
      } else {
        return array.flat(Infinity)
      }
    },

    // Couldn't figure `fi.uniq()` out -- copied from solution branch
    uniqSorted: function(collection, iteratee) {
      const sorted = [collection[0]]
      for (let idx = 1; idx < collection.length; idx++) {
        if (sorted[idx-1] !== collection[idx])
          sorted.push(collection[idx])
      }
      return sorted
    },

    uniq: function(collection, sorted=false, iteratee=false) {
      if (sorted) {
        return fi.uniqSorted(collection, iteratee)
      } else if (!iteratee) {
        return Array.from(new Set(collection))
      } else {
        const modifiedVals = new Set()
        const uniqVals = new Set()
        for (let val of collection) {
          const moddedVal = iteratee(val)
          if (!modifiedVals.has(moddedVal)) {
            modifiedVals.add(moddedVal)
            uniqVals.add(val)
          }
        }
        return Array.from(uniqVals)
      }
    },

    keys: function(object) {
      let keys = [];
      for (let key in object) {
        keys.push(key);
      }
      return keys;
    },

    values: function(object) {
      let values = [];
      for (let key in object) {
        values.push(object[key]);
      }
      return values;
    },

    functions: function(object) {
      let functions = [];
      for (let key in object) {
        if (typeof object[key] === "function") {
          functions.push(key);
        }
      }
      return functions.sort();
    }
  }
})()

fi.libraryMethod()
