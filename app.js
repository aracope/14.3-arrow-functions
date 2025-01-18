// function squareAndFindEvens(numbers){
//     var squares = numbers.map(function(num){
//       return num ** 2;
//     });
//     var evens = squares.filter(function(square){
//       return square % 2 === 0;
//     });
//     return evens;
//   }

  function squareAndFindEvens(numbers){
    var squares = numbers.map(num =>  num ** 2);
    var evens = squares.filter(square => square % 2 === 0);
    }
