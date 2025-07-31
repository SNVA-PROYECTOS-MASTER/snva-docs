---
title: Pasos de Configuración Inicial
description: Guía paso a paso para configurar la retención nómina en Odoo
---

### Paso 1: Configurar Datos Anuales
1. Ir a Nómina → Configuración → Datos anuales
2. Crear registro para el año actual
3. Completar todos los campos obligatorios
### Paso 2: Verificar Tabla de Retención
1. Los datos se cargan automáticamente
2. Verificar que existan los rangos del artículo 383
### Paso 3: Ejecutar Creación de Categorías y Reglas
1. Ejecutar el método create_hr_salary_rule_category()
2. Verificar que se crearon todas las categorías y reglas
### Paso 4: Configurar Contratos
1. Para cada empleado, configurar:
   - Procedimiento de retención
   - Porcentaje (si es Procedimiento 2)
   - Deducciones y rentas exentas
### Paso 5: Verificar Estructura Salarial
1. Confirmar que todas las reglas estén en la estructura
2. Verificar secuencias y categorías