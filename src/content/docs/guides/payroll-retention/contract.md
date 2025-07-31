---
title: Contracto
description: Configuración de contractos en la nómina
---

Ubicación: Empleados → Contratos

Configuración de retención:

### 4.1 Procedimiento de Retención
- Procedimiento 1: Usa tabla de retención estándar (artículo 383)
- Procedimiento 2: Usa porcentaje fijo definido por el empleado
### 4.2 Porcentaje Actual
- Requerido solo para Procedimiento 2
- Debe ser mayor a 0
- Se expresa como porcentaje (ej: 5.5 para 5.5%)
### 4.3 Deducciones y Rentas Exentas
Modelo: deduction.retention.contract

Configuración por deducción:
- Categoría de retención: Seleccionar de las categorías disponibles
- Valor: Monto de la deducción o renta exenta
- Tipo: Deducción o renta exenta

Categorías permitidas:
- Intereses de vivienda (INT_VIVIENDA)
- Medicina prepagada (MED_PREPAGADA)
- Dependientes (DEP)
- Rentas exentas (RENTAS_EXENTAS)
- AFC (AFC)