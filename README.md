# Curso Angular Avanzado por DevTalles y Fernando Herrera.

## Sección 2: Zoneless Calculator
En esta sección vamos a trabajar con una estructura HTML hecha en Tailwind, que nos enseñe los problemas estructurales a los que vamos a caer cuando queramos recrear un diseño en componentes de Angular.

Puntualmente veremos:

    Tailwind
    Zoneless
    OnPush
    ViewEncapsulation
    ng-deep (Deprecared)
    Content Projection
    input Signals
    Standalone components
    Angular Schematics
    Host bindings
    Entre otros temas


La idea es recrear un diseño que eventualmente haremos funcionar, pero que tenga un nivel de complejidad real para aprender lo que sucede a la hora de crear estructuras en Angular.

## Sección 3: Señales, comportamiento y lógica
En esta sección vamos a trabajar en el funcionamiento de la calculadora, pero pasando por:

    Host Property - Condicional
    Remover Hostlisterners y HostBindings
    Output Emitter Refs
    Signals ViewChild
    Signal ViewChildren
    Servicios con señales
    Computed Signals
    Realizar cálculos y operaciones
    Validaciones y consideraciones


El objetivo es tener funcionando parcialmente la calculadora con ciertos inconvenientes que servirán para pulir el testing en la sección 4.

Esta es nuestra primera sección de testing, la cual puede sentirse abrumadora al inicio, porque hay mucho nuevo que aprender, pero mi recomendación es que vayan practicando poco a poco, y no traten de memorizar cada instrucción, sino, vayan buscando una forma efectiva que les funcione y poco a poco, conforme tengan nuevos panoramas a probar, vayan asimilando nuevas funciones.

Puntualmente veremos:

    Introducción a las pruebas
    AAA
    Unitarias, integración, E2E
    Karma - Jasmine
    Testing en Zoneless apps
    Pruebas generales sobre HTML
    Pruebas de componentes
    Espías
    Mocks
    Mock service implementation
    Done Function
    Pruebas en señales
    Simular document events
    Global KeyPress
    Y más

Es una sección grande en la cual quiero que cubramos todo lo posible de nuestra calculadora para comprender muchos posibles panoramas.
Es importante que hagamos este testing, porque en secciones siguientes, asumiré que pasaron por esta sección para tratar de evitar realizar pruebas iguales una y otra vez.