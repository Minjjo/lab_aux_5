(() => {

  /* APLICA DRY */
  
  //EX - 1
  
  //SIN DRY
  function calculateOperation1(a: number, b: number, c: number): number {
    let sumResult = a + b;
    let multiplicationResult = sumResult * c;
    return multiplicationResult;
  }

  function calculateOperation2(x: number, y: number, z: number): number {
    let sumResult = x + y;
    let multiplicationResult = sumResult * z;
    return multiplicationResult;
  }

  //CON DRY
  function calculateOperation (a: number, b: number, c: number):  {a: number, b: number, c: number} {
    return {a: a, b: b, c: c};    
  }


  // EX - 2
  function calculateRectangleArea(length: number, width: number): number {
    return length * width;
  }

  function calculateCircleArea(radius: number): number {
    return Math.PI * square(radius);
  }
  //DRY PARA num de calculateCircleArea
  function square(num: number): number{
    return num * num;
  }

  // EX - 3
  //No es necesario aumentar codigo en este ejercicio

  // SIN DRY
  function validateEmail(email: string): boolean {
    //...some code for validate here
    return false;
  }

  function validateUsername(username: string): boolean {
    //...some code for validate here
    return false;
  }

// CON DRY
  function validateEmailAndUsername(email: string, username: string): boolean {
    return false;
  }
  
})();