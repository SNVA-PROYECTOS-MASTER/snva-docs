---
title: Cómo Funciona el Sistema de Retención en la Fuente
description: Este módulo permite configurar la retención nómina de una manera sencilla y eficiente.
---

## Explicación General del Funcionamiento
El sistema de retención en la fuente funciona como un calculador automático que determina cuánto dinero debe retenerse del salario de un empleado para cumplir con las obligaciones tributarias colombianas. Es como tener un contador digital que sigue las reglas exactas de la DIAN.

## El Proceso Paso a Paso
### 1. Recolección de Información
Cuando se procesa una nómina, el sistema primero recopila todos los datos necesarios :

- Los pagos que ha recibido el empleado en el mes
- Los descuentos de seguridad social
- Las deducciones especiales (como intereses de vivienda)
- Las rentas exentas (como medicina prepagada)
- El valor actual de la UVT (Unidad de Valor Tributario)
### 2. Clasificación de Ingresos
El sistema separa los ingresos en categorías :

- Pagos gravables : Salario básico, horas extras, comisiones
- Pagos no gravables : Auxilio de transporte (hasta el límite legal)
- Rentas exentas : Medicina prepagada, intereses de vivienda
- Deducciones : Aportes a fondos de pensión, AFC
### 3. Cálculo de la Base Gravable
Aquí es donde ocurre la "magia matemática" :

**Paso A:** Suma todos los pagos del mes 

**Paso B:** Resta los pagos no constitutivos de renta 

**Paso C:** Resta las deducciones (con sus límites legales) 

**Paso D:** Resta las rentas exentas (con sus límites) 

**Paso E:** Aplica la renta exenta del 25% (máximo 790 UVTs anuales) 

**Paso F:** Aplica el límite del 40% de los ingresos (máximo 1340 UVTs anuales)

El resultado es la "base gravable" - el dinero sobre el cual se calcula la retención.

### 4. Aplicación de la Tabla de Retención
El sistema consulta la tabla del artículo 383 de la normativa tributaria:

- Si la base gravable está entre 0-150 UVTs → No hay retención
- Si está entre 150-360 UVTs → Retiene 19% + 10 UVTs adicionales
- Si está entre 360-640 UVTs → Retiene 28% + 69 UVTs adicionales
- Y así sucesivamente...

### 5. Dos Procedimientos Diferentes
Procedimiento 1 (Automático):

- El sistema usa la tabla oficial de retención
- Es el método estándar para la mayoría de empleados
- Se basa en los rangos de UVTs
Procedimiento 2 (Porcentaje Fijo):

- El empleado puede solicitar un porcentaje específico
- Útil cuando el empleado tiene otras rentas o quiere ajustar su retención
- Se aplica directamente sobre la base gravable

## Ejemplo Práctico
Imagina que Juan gana $3,000,000 al mes:

1. Ingresos totales : $3,000,000
2. Menos auxilio de transporte no gravable : -$140,606
3. Menos aportes pensión : -$120,000
4. Menos medicina prepagada : -$200,000
5. Base inicial : $2,539,394
6. Menos renta exenta 25% : -$634,849
7. Base gravable final : $1,904,545

Si la UVT vale $47,065, la base en UVTs es: 40.5 UVTs

Como está en el rango 0-150 UVTs, no hay retención .

## La Inteligencia del Sistema
### Acumulación Mensual
El sistema "recuerda" lo que ha pasado en el mes:

- Si es la segunda quincena, suma lo de la primera
- Evita duplicar retenciones
- Mantiene un control acumulado

### Validación de Límites
Cada deducción tiene límites inteligentes :

- Medicina prepagada: Máximo 16 UVTs mensuales
- Intereses vivienda: Máximo 100 UVTs anuales
- AFC: Máximo 2,500 UVTs anuales

### Cálculo Proporcional
Si un empleado entra a mitad de mes, el sistema calcula proporcionalmente todos los límites y valores.

## Lo Que Hace Especial Este Sistema
### Automatización Total
- No requiere cálculos manuales
- Se actualiza automáticamente con los cambios normativos
- Reduce errores humanos

### Flexibilidad
- Permite configuraciones específicas por empleado
- Maneja casos especiales (procedimiento 2)
- Adapta límites según la normativa vigente

### Trazabilidad
- Cada cálculo queda registrado
- Se puede auditar paso a paso
- Genera reportes detallados

## En Resumen
El sistema funciona como un "robot contador" que:

1. Recopila todos los datos del empleado
2. Clasifica cada tipo de ingreso según la ley
3. Calcula la base gravable aplicando todas las deducciones
4. Consulta la tabla oficial de retención
5. Determina el monto exacto a retener
6. Registra todo el proceso para auditorías
