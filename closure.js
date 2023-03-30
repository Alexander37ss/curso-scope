function greeting() {
    let username = 'Oscar';
  
    function displayUserName() {
      return `Hello ${username}`;
    }
    return displayUserName;
  }
  
  const g = greeting();
  console.log(g); 
  console.log(g());
  

 function sumWithClosure(firstNum = 0) {
    return function (secondNum = 0) {
      return firstNum + secondNum
    }
  }
  