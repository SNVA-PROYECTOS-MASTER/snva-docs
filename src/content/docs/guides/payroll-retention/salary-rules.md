---
title: Reglas Salariales
description: Configuración de reglas salariales en Odoo
---

Ubicación: Nómina → Configuración → Reglas

Reglas creadas automáticamente:

### 6.1 Totales para Retención (TPRTF)
- Código: TPRTF
- Secuencia: 300
- Fórmula: result = categories_retention['PAGOS_RET']
### 6.2 Total No Renta para Retención (TNRRTF)
- Código: TNRRTF
- Secuencia: 301
- Fórmula: Suma pagos no constitutivos de renta + auxilio de transporte
### 6.3 Total Deducciones para Retención (TDRTF)
- Código: TDRTF
- Secuencia: 302
- Fórmula: Suma deducciones con límites por UVT y porcentaje
### 6.4 Total Rentas Exentas para Retención (TRERTF)
- Código: TRERTF
- Secuencia: 303
- Fórmula: Suma rentas exentas con límites
### 6.5 Retención en la Fuente (RTF)
- Código: RTF
- Secuencia: 305
- Condición: Base gravable >= límite mínimo en UVTs O Procedimiento 2
- Fórmula: Cálculo complejo según procedimiento seleccionado
### 6.6 Retención Prima (PRIMARTF)
- Código: PRIMARTF
- Secuencia: 306
- Fórmula: Cálculo específico para prima