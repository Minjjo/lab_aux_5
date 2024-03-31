(() => {

  /* NOMBRE CORRECTAMETE LAS SIGUIENTES VARIABLES 
     ADEMAS DE COMPROBAR SI USA LET O CONST,
    SE PUEDE REFACTORIZAR, ETC.
  */

  //lista de emails de usuarios de Meta-X
  const listOfEmails: Array<string> = [
    "email1@gmail.com", 
    "email1@gmail.com", 
    "email1@gmail.com"
  ];

  console.log(listOfEmails);

  //Lista de compras de un carrito
  const listShoppingTrolley: Array<Object> = [
    {product: "switch"},
    {product: "X-box Controller"},
    {product: "steam-gift-card"},
  ];

  console.log(listShoppingTrolley);
  

  //funcion para sumar mas 3 a un numero y retornarlo
  const addThreeToNumber  = (addNumber: number): number => {
    return addNumber + 3;
  }

  console.log(addThreeToNumber (2));
  
  
  //funcion para capitalizar una palabra pasara por params
  //idente o refactorice de ser necesario
  //el resultado no deberia cambiar
  function capitalizeWord(word: string): string {
    const capitalizedWord = word.toLowerCase().charAt(0).toUpperCase().toString().concat(word.substring(1, word.length));
    return capitalizedWord;
  }

  console.log(capitalizeWord("capricorn"));
  
  //variable que alerta en caso de que algun evento suceda
  let eventOccurred: boolean = false;
    if(eventOccurred) 
    console.log('event Ocurred');

  //variable que se encarga de verificar 
  //si un usuario puede acceder o no
  let userAccess: boolean = true;
    if(userAccess) 
    console.log('welcome');
  

  //variable para hallar el promedio de 3 numeros
  const averageOfThreeNumbers: number = (1 + 2 + 3) / 3;
  console.log(averageOfThreeNumbers);
  
  //variable que almacena el valor de PI
  const numberPi: number = 3.141592654;
  console.log(numberPi);
  

  //variabel que controla si un archivo es modificable 
  let isFileModifiable: boolean = false;
  if(isFileModifiable)
    console.log('edit this file?') 

  //variable para almacenar el valor de e
  const NUMBER_E: number = 2.718281828; 
  console.log(NUMBER_E);
})();