---
title: Load Average
description: El "load average" indica el promedio de carga del sistema en un periodo dado.
img: images/load-average.png
alt: nice image
tags:
  - web development
  - reflexiones
---

## Introducción.

Habitualmente me encuentro en la situacion de ingresar a servidores para verificar su rendimiento y me pareció oportuno detenerme en documentar la métrica de uso de load average.

Esta métrica, se consigue con un simple comando y proporciona una informacion vital sobre la salud del sistema.

El load average representa el promedio de carga del sistema, indicando la cantidad de trabajo que el sistema está manejando.
No se trata de verificar solo el uso de CPU, sino de la carga general que incluye procesos esperando por recursos, ya sea CPU o entrada/salida de disco.
Se muestrea como tres números correspondientes a los promedios de carga en los últimos 1, 5 y 15 minutos, proporcionando una visión de la tendencia del rendimiento del sistema.

## ¿Cómo Monitorizar el Load Average ?

Se puede verificar la carga utilizando los siguientes comandos:

```bash
uptime
```

```bash
top
```

```bash
cat /proc/loadavg
```

## ¿Cómo se interpreta Load Average ?

El load average se expresa normalmente con tres números, por ejemplo: 0.85, 0.77, 0.75. Estos números representan el promedio de carga del sistema durante los últimos 1, 5 y 15 minutos, respectivamente.

Aquí está cómo interpretar estos números:

### Comparación con el número de núcleos de CPU:

Primero, debes saber cuántos núcleos de CPU tiene tu sistema. Puedes encontrar esta información usando 
```bash
nproc
```
 o revisando el archivo "cpuinfo":
```bash
cat /proc/cpuinfo.
```
Si el primer número (load average de 1 minuto) es menor que el número de núcleos de CPU, tu sistema no está sobrecargado.
Si el número es igual al número de núcleos de CPU, tu sistema está utilizando su máxima capacidad de manera efectiva.
Si el número es mayor que el número de núcleos de CPU, significa que hay más procesos esperando para ejecutarse que núcleos disponibles, lo que puede resultar en ralentizaciones.


### Tendencias:


Si los números están bajando (1.00, 0.75, 0.50), la carga del sistema está disminuyendo.
Si los números están aumentando (0.50, 0.75, 1.00), la carga del sistema está creciendo.
Si los números son constantes, la carga del sistema es estable.


### Consideraciones:
<br>
 
Es normal que los sistemas tengan picos de carga durante ciertas operaciones. Un load average alto en un momento dado no necesariamente indica un problema a menos que se mantenga alto persistentemente.
El load average incluye todos los procesos que utilizan o esperan recursos del sistema (CPU, entrada/salida de disco), no solo los procesos que están activamente utilizando la CPU en ese momento.



::hero
Default slot text

#description
This will be rendered inside the `description` slot.
::
