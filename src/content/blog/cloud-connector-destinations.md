---
title: 'Cloud Connector y Destinations: cómo SAP BTP llega a tu S/4HANA on-premise'
short: 'Cómo SAP BTP llega a tu S/4HANA on-premise'
summary: 'Las tres piezas que conectan una app en la nube con tu backend sin abrir puertos, con la configuración mínima y los errores que más vas a ver.'
date: 2026-10-08
minutes: 6
tags: ['SAP BTP', 'Cloud Connector', 'Integración']
lang: es
example: true
---

Cuando una app en SAP BTP necesita datos de un S/4HANA on-premise, la primera pregunta suele ser si hay que abrir un puerto en el firewall. No hace falta: el Cloud Connector inicia la conexión desde dentro de la red y BTP la usa en sentido inverso.

## 1. Las tres piezas

- **Cloud Connector (SCC):** agente instalado on-premise que abre un túnel saliente hacia tu subcuenta de BTP.
- **Connectivity Service:** recibe ese túnel en BTP y enruta las llamadas de tus aplicaciones.
- **Destination Service:** guarda URL, autenticación y tipo de proxy, para que la app no lleve credenciales en el código.

## 2. Exponer el backend en el Cloud Connector

En Cloud To On-Premise → Access Control se mapea un host virtual a uno interno. El host virtual es lo único que BTP conoce; el nombre real del servidor nunca sale de tu red.

```txt title="SCC · Access Control"
Back-end Type   : ABAP System
Protocol        : HTTPS
Virtual Host    : s4h-virtual:443
Internal Host   : s4hprd.corp.local:44300
Principal Type  : X.509 Certificate

Resource        : /sap/opu/odata/sap/API_BUSINESS_PARTNER
Access Policy   : Path and all sub-paths
```

> Expón solo los paths que necesitas. Un recurso "/" con "Path and all sub-paths" deja todo el sistema accesible desde la subcuenta.

## 3. Crear la Destination en BTP

```ini title="BTP Cockpit · Connectivity → Destinations"
Name            : S4H_ONPREM
Type            : HTTP
URL             : http://s4h-virtual:443
Proxy Type      : OnPremise
Authentication  : PrincipalPropagation
Location ID     : (vacío, o el definido en el SCC)

# Additional properties
sap-client      : 100
HTML5.DynamicDestination : true
```

Con Proxy Type OnPremise la URL se escribe con http aunque el backend use HTTPS: el tramo BTP → SCC ya viaja cifrado por el túnel, y el protocolo hacia el backend lo define el Access Control.

## 4. Consumirla desde una app CAP

```json title="package.json"
"cds": {
  "requires": {
    "API_BUSINESS_PARTNER": {
      "kind": "odata-v2",
      "model": "srv/external/API_BUSINESS_PARTNER",
      "credentials": {
        "destination": "S4H_ONPREM",
        "path": "/sap/opu/odata/sap/API_BUSINESS_PARTNER"
      }
    }
  }
}
```

## 5. Errores frecuentes

- **503 / "Unable to open connection":** el SCC no está conectado a la subcuenta o el Location ID no coincide.
- **403 desde el backend:** el path no está declarado como recurso en Access Control.
- **401 con Principal Propagation:** revisa la regla de mapeo en CERTRULE y la confianza del certificado del SCC en STRUST.

En el próximo post: Principal Propagation paso a paso, desde el certificado del Cloud Connector hasta el usuario en S/4HANA.
