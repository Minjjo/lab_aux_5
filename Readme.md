## SOLID
## Introducción
En este artículo, exploraremos los principios **SOLID**, fundamentales en el mundo de la programación orientada a objetos.

La programación orientada a objetos nos brinda la capacidad de encapsular la lógica de las entidades, lo que facilita la reutilización de código en diferentes partes de nuestro software.

Sin embargo, a medida que nuestros desarrollos crecen y pasan por manos de diferentes programadores, la falta de una estructura sólida puede ocasionar problemas. Para minimizar estas situaciones, **Robert C. Martin** introdujo el acrónimo **SOLID**, que representa cinco principios básicos de la programación orientada a objetos.

Al seguir estos principios **SOLID**, se vuelve más sencillo mantener y ampliar nuestros desarrollos, evitando refactorizaciones de código masivas.

A continuación, exploraremos cada uno de los cinco principios **SOLID**.

## Principios SOLID
### S: Single Responsibility Principle (SRP) o Principio de Responsabilidad Única
El **Principio de Responsabilidad Única** establece que «una clase debe tener solo una razón para cambiar».

Esto implica que cada clase debe tener una única responsabilidad y, esta responsabilidad, debe estar contenida en su totalidad en dicha clase.

Si una clase asume más de una responsabilidad, será más sensible al cambio.

### O: Open/Closed Principle (OCP) o Principio de Abierto/Cerrado
El **Principio de Abierto/Cerrado** se refiere a que «una entidad debe estar abierta para su extensión, pero cerrada para su modificación»

Este principio habla de que se debe de poder extender el comportamiento de las entidades, pero sin necesitar modificar el código fuente.

Existen dos enfoques sobre este principio:

- **Principio Abierto/Cerrado de Meyer**.
- **Principio Abierto/Cerrado polimórfico**.

### L: Liskov Substitution Principle (LSP) o Principio de Sustitución de Liskov
El **Principio de Sustitución de Liskov** establece que «las clases derivadas deben poder sustituirse por sus subclases»

Significa que los objetos tienen que poderse reemplazar por instancias de sus subtipos, manteniendo el correcto funcionamiento del sistema.

### I: Interface Segregation Principle (ISP) o Principio de Segregación de Interfaz
El **Principio de Segregación de Interfaz** se refiere a lo siguiente: «Haz interfaces que sean específicas para un tipo de cliente, en lugar de interfaces genéricas»

Es preferible tener muchas interfaces que definan los métodos justos que forzar a implementar métodos innecesarios.

### D: Dependency Inversion Principle(DIP) o Principio de Inversión de Dependencias
El **Principio de Inversión de Dependencias** sugiere lo siguiente: «Depende de abstracciones, no de clases concretas»

Con este principio se busca reducir las dependencias entre los módulos para poder alcanzar un bajo acoplamiento entre clases.
