---
title: 'De R/1 a Joule: la historia de SAP y hacia dónde va'
short: 'La historia de SAP y hacia dónde va'
summary: 'Más de 50 años en cinco etapas: del sistema contable en tiempo real de 1972 al ERP en la nube con IA. Qué cambió en cada salto y qué significa hoy para clientes y consultores.'
date: 2026-10-10
minutes: 6
tags: ['SAP', 'S/4HANA', 'SAP BTP', 'Historia']
lang: es
---

Trabajo con SAP todos los días, y casi siempre en sistemas que conviven con varias generaciones de la misma empresa: un ECC con desarrollos ABAP de hace quince años, un S/4HANA recién migrado, una app Fiori desplegada en BTP. Entender de dónde viene cada pieza ayuda a decidir mejor hacia dónde llevarla. Este es un recorrido por esa historia, desde un contrato con una química británica hasta los agentes de IA.

![Línea de tiempo de SAP: 1972 R/1, 1979 R/2, 1992 R/3, 2004 ECC, 2015 S/4HANA y 2023 Joule](/images/blog/historia-sap/portada.svg)

## 1972 – 1991: un sistema contable en tiempo real

En 1972, cinco ingenieros que dejaban IBM —Dietmar Hopp, Hasso Plattner, Claus Wellenreuther, Klaus Tschira y Hans-Werner Hector— fundaron en Weinheim, Alemania, una empresa llamada *Systemanalyse und Programmentwicklung* (análisis de sistemas y desarrollo de programas).

Su primer cliente fue la filial alemana de Imperial Chemical Industries (ICI). Para ella construyeron un sistema de contabilidad financiera que procesaba los datos **en el momento**, cuando lo habitual era acumular tarjetas perforadas y procesarlas por lotes durante la noche. Esa idea, el tiempo real, es el hilo que atraviesa toda la historia de SAP.

- **R/1 (1973):** el sistema contable, que corría en los mainframes del cliente. La "R" viene de *real-time*.
- **R/2 (1979):** la versión para mainframe que integró contabilidad, compras, inventario y producción en una sola base de datos. Ahí nace el concepto de ERP integrado.
- **1988:** SAP sale a bolsa en Fráncfort.

Muchas empresas europeas grandes funcionaron sobre R/2 durante los años 80, pero el modelo tenía un límite claro: necesitaba un mainframe, y eso dejaba fuera a la mayoría de empresas medianas.

## 1992 – 2003: R/3 y la arquitectura cliente-servidor

**SAP R/3**, lanzado en 1992, fue el salto que convirtió a SAP en el estándar mundial del ERP. Separó el sistema en tres capas —presentación (SAP GUI), aplicación y base de datos— y lo hizo funcionar sobre servidores Unix y Windows en lugar de mainframes.

Ese diseño de tres capas sigue presente hoy, y de esta época vienen muchas cosas que un consultor usa a diario:

- **ABAP** como lenguaje para extender el estándar sin modificarlo.
- Los **módulos funcionales**: FI, CO, SD, MM, PP, PM, HR…
- Las **transacciones** y el sistema de transporte entre entornos (desarrollo → calidad → producción).

En 1999, con la llegada de internet, SAP lanzó **mySAP.com**, su primer intento de llevar los procesos al navegador y conectar empresas entre sí.

## 2004 – 2010: NetWeaver, ECC y la integración

A comienzos de los 2000 el problema ya no era tener un ERP, sino conectarlo con todo lo demás. SAP respondió con **SAP NetWeaver** (2004), una plataforma tecnológica sobre la que corrían el ERP, los portales, el BI y la integración.

- **SAP ERP Central Component (ECC):** el sucesor de R/3. Su versión **ECC 6.0** se convirtió en una de las más instaladas de la historia, y es el sistema que muchas empresas siguen usando hoy.
- **SAP BW:** el data warehouse de SAP, para reportes y análisis sobre los datos del ERP.
- **SAP PI/PO:** la capa de integración entre SAP y sistemas externos.
- **Business Objects (2007–2008):** su adquisición trajo herramientas de reporting y BI que el mercado ya conocía.

En 2007 SAP también presentó **SAP Business ByDesign**, un ERP en la nube para empresas medianas. Llegó antes de que el mercado estuviera listo, pero anticipaba hacia dónde iba la industria.

## 2010 – 2015: HANA y el regreso del tiempo real

El siguiente cambio vino de la base de datos. Hasta entonces, el ERP guardaba los datos en disco y para analizarlos había que copiarlos a otro sistema, como BW. **SAP HANA**, lanzada comercialmente en 2011, es una base de datos **en memoria** y **columnar**: puede procesar transacciones y análisis sobre los mismos datos, al momento.

En paralelo, SAP compró empresas nativas de la nube para cubrir áreas donde el ERP tradicional no llegaba:

- **SuccessFactors (2012):** gestión de personas.
- **Ariba (2012):** compras y relación con proveedores.
- **Concur (2014):** viajes y gastos.

Y en 2013 apareció **SAP Fiori**, un nuevo lenguaje de diseño que reemplazaba las pantallas de SAP GUI por aplicaciones web pensadas para cada rol.

## 2015 – hoy: S/4HANA, la nube y BTP

En 2015 SAP lanzó **SAP S/4HANA**, un ERP reescrito para funcionar solo sobre HANA. No es un ECC con otra base de datos: simplifica el modelo de datos (por ejemplo, la tabla única de documentos contables, ACDOCA), usa Fiori como interfaz y está pensado para ejecutarse tanto on-premise como en la nube.

![Evolución de la arquitectura de SAP: R/2 en mainframe, R/3 en tres capas (presentación, aplicación y base de datos) y S/4HANA sobre HANA con extensiones en SAP BTP](/images/blog/historia-sap/arquitecturas.svg)

Junto a S/4HANA creció la plataforma para extenderlo e integrarlo. Primero se llamó HANA Cloud Platform, luego SAP Cloud Platform, y desde 2021 es **SAP Business Technology Platform (BTP)**. Ahí viven hoy:

- **CAP** (Cloud Application Programming Model) y **Fiori** para construir aplicaciones.
- **Integration Suite**, el sucesor de PI/PO en la nube.
- **SAP Analytics Cloud** y **Datasphere** para análisis y datos.
- **SAP Build**, para automatizar y crear apps con poco código.

La idea de fondo es el **clean core**: dejar el ERP lo más cercano posible al estándar y construir lo propio fuera, en BTP, para que las actualizaciones no rompan los desarrollos.

![Clean core: el núcleo estándar de S/4HANA dentro de SAP BTP, con CAP, Fiori, Integration y Joule como extensiones, conectado a sistemas no-SAP, AWS, Azure y GCP](/images/blog/historia-sap/clean-core.svg)

En 2021 SAP lanzó **RISE with SAP**, un paquete que agrupa S/4HANA en la nube, infraestructura, BTP y servicios en un solo contrato. Y en 2023 llegó **GROW with SAP**, su versión para empresas medianas.

> El soporte estándar de SAP ECC 6.0 termina en 2027, con mantenimiento extendido opcional hasta 2030. Para muchas empresas, la migración a S/4HANA ya no es una opción sino un proyecto con fecha.

## Hacia dónde apunta SAP

Hoy el mensaje de SAP gira en torno a tres ideas:

- **IA en los procesos de negocio:** **Joule**, el copiloto de SAP presentado en 2023, permite consultar datos y ejecutar tareas en lenguaje natural dentro de las aplicaciones. La apuesta más reciente son los **agentes de Joule**, que no solo responden preguntas sino que ejecutan procesos completos entre varios sistemas.
- **Datos unificados:** **SAP Business Data Cloud** (2025) reúne Datasphere, Analytics Cloud y BW en una sola capa de datos, con integración con Databricks, para que la IA y el análisis trabajen sobre datos de negocio con su contexto.
- **La nube como punto de partida:** las nuevas funcionalidades llegan primero, y a veces solo, a S/4HANA Cloud y a BTP. Quien se quede en ECC on-premise se queda también fuera de la innovación.

## Qué significa para un consultor

Cada etapa dejó algo que sigue en producción en algún cliente. Por eso hoy un consultor SAP necesita moverse en varias capas a la vez:

- **El núcleo:** ABAP, ECC y S/4HANA, porque la mayoría de empresas todavía está migrando o recién migró.
- **La extensión:** BTP, CAP y Fiori, para construir sin tocar el núcleo.
- **La integración:** conectar SAP con sistemas que no son SAP, y con nubes como AWS, Azure o GCP.
- **Los datos y la IA:** entender cómo llegan los datos de SAP a la capa de análisis y qué pueden hacer los agentes con ellos.

En cincuenta años SAP pasó del mainframe al cliente-servidor, del disco a la memoria y del data center a la nube, pero la promesa es la misma de 1972: que el negocio vea sus datos en el momento en que ocurren.
