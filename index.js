function myEach(collection, callback) {
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        callback(collection[i], i, collection);
      }
    } else {
      for (let key in collection) {
        callback(collection[key], key, collection);
      }
    }
    return collection;
  }
  
  function myMap(collection, callback) {
    const result = [];
    myEach(collection, (value, key, coll) => {
      result.push(callback(value, key, coll));
    });
    return result;
  }
  
  function myReduce(collection, callback, acc) {
    let collectionArray = Array.isArray(collection) ? collection : Object.values(collection);
    let initialValue = acc !== undefined ? acc : collectionArray[0];
    let startIndex = acc !== undefined ? 0 : 1;
  
    for (let i = startIndex; i < collectionArray.length; i++) {
      initialValue = callback(initialValue, collectionArray[i]);
    }
  
    return initialValue;
  }
  
  function myFind(collection, predicate) {
    for (let i = 0; i < collection.length; i++) {
      if (predicate(collection[i])) {
        return collection[i];
      }
    }
    return undefined;
  }
  
  function myFilter(collection, predicate) {
    const result = [];
    myEach(collection, (value) => {
      if (predicate(value)) {
        result.push(value);
      }
    });
    return result;
  }
  
  function mySize(collection) {
    if (Array.isArray(collection)) {
      return collection.length;
    } else {
      return Object.keys(collection).length;
    }
  }
  
  // Array Functions
  function myFirst(array, n) {
    if (n === undefined) {
      return array[0];
    } else {
      return array.slice(0, n);
    }
  }
  
  function myLast(array, n) {
    if (n === undefined) {
      return array[array.length - 1];
    } else {
      return array.slice(-n);
    }
  }
  
  // Object Functions
  function myKeys(object) {
    return Object.keys(object);
  }
  
  function myValues(object) {
    const values = [];
    myEach(object, (value) => {
      values.push(value);
    });
    return values;
  }
  
  // Export the functions
  module.exports = {
    myEach,
    myMap,
    myReduce,
    myFind,
    myFilter,
    mySize,
    myFirst,
    myLast,
    myKeys,
    myValues,
  };
  
  