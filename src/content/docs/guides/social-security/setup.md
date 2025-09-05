---
title: Introducción
description: A guide in my new Starlight docs site.
---

El **Reporte de Seguridad Social** es el mecanismo estandarizado y unificado para que las empresas y aportantes cumplan con su obligación de **liquidar y pagar las contribuciones al Sistema de Seguridad Social Integral y Parafiscales**. En el contexto de Odoo, esto representaría la salida de información crucial de tu módulo de nómina hacia las entidades de seguridad social. Su objetivo principal es garantizar la recaudación de estos aportes.

Este proceso se gestiona principalmente a través de la **Planilla Integrada de Liquidación de Aportes (PILA)**, que es el medio por el cual se suministra la información detallada de los cotizantes y se efectúan los pagos.

En Odoo, este reporte se traduciría en la generación y gestión de archivos que contienen la información necesaria, estructurados en dos componentes principales:

1.  **Archivo Tipo 1: Datos Generales del Aportante**:
    *   Este archivo contiene la **información básica e identificativa de tu empresa o del aportante**. Incluye datos como el nombre o razón social, tipo y número de identificación (NIT), dígito de verificación, clase de aportante (por ejemplo, "Empleador" o "Independiente"), naturaleza jurídica (pública, privada, mixta), tipo de persona (natural o jurídica), dirección de correspondencia, códigos DANE de ubicación y actividad económica, y detalles del representante legal.
    *   En Odoo, esta información sería alimentada desde la configuración general de tu compañía y los datos maestros de tu entidad.

2.  **Archivo Tipo 2: Información Planilla Integrada**:
    *   Este es el archivo más detallado, que contiene la **información completa de cada uno de los cotizantes** (empleados, independientes, etc.) asociados a tu empresa. Se compone de dos registros clave:
        *   **Registro Tipo 1. Encabezado**: Contiene datos generales de la planilla, como el tipo de planilla que se está utilizando (por ejemplo, "E" para empleados, "N" para correcciones), el período de pago (año y mes) para los diferentes sistemas (salud, pensión, etc.), y la fecha de pago.
        *   **Registro Tipo 2. Liquidación Detallada de Aportes**: Este es el corazón del reporte. Aquí se consignan las **variables de novedades generales** y la **autoliquidación de aportes para cada subsistema**.

**Conceptos Clave del Registro Tipo 2:**

*   **Ingreso Base de Cotización (IBC)**: Este es un campo obligatorio y fundamental. Representa el valor sobre el cual se calculan los aportes a cada subsistema (pensión, salud, riesgos laborales, parafiscales). Generalmente, no puede ser inferior a un Salario Mínimo Legal Mensual Vigente (SMLMV) o su proporción por días cotizados.
*   **Novedades**: Son eventos que afectan la situación del cotizante en un período específico y deben ser reportadas. Pueden incluir **ingresos (ING)**, **retiros (RET)**, **suspensiones de contrato por licencia no remunerada (SLN)**, **incapacidades por enfermedad general (IGE)**, **licencias de maternidad o paternidad (LMA)**, **variaciones salariales (VST)**, **incapacidades por accidente de trabajo o enfermedad laboral (IRL)**, y, como mencionamos anteriormente, **vacaciones o licencia remunerada (VAC-LR)**. Estas novedades se registran en campos específicos del Registro Tipo 2.

**Subsistemas Involucrados**:
El reporte de seguridad social abarca aportes a:
*   Sistema General de **Pensiones**.
*   Sistema General de **Seguridad Social en Salud**.
*   Sistema General de **Riesgos Laborales (ARL)**.
*   Parafiscales:
    *   **Cajas de Compensación Familiar (CCF)**.
    *   **Servicio Nacional de Aprendizaje (SENA)**.
    *   **Instituto Colombiano de Bienestar Familiar (ICBF)**.
    *   **Escuela Superior de Administración Pública (ESAP)**.
    *   **Ministerio de Educación Nacional (MEN)**.

**Manejo de Correcciones (Planilla Tipo N)**:
Si se omite alguna novedad o se necesita corregir información de períodos ya pagados, se utiliza la **Planilla tipo N - Planilla de Correcciones**.
*   Esta planilla permite ajustar el IBC, la tarifa, el tipo de cotizante, las novedades o los días reportados.
*   Requiere reportar un **Registro "A"** con la información original y un **Registro "C"** con la información corregida. La suma del IBC y los días en los registros "C" debe ser mayor o igual que en los "A".
*   Es importante saber que la PILA **no es un medio para solicitar devoluciones de valores pagados en exceso**; para esto, debes dirigirte directamente a cada administradora.
*   La presentación de una Planilla N **generalmente liquidará intereses de mora**, a menos que la corrección sea por ciertas novedades (como retiro, variación salarial, suspensiones, incapacidades, licencias o vacaciones) y se realice a más tardar el último día hábil del mes en que debió hacerse el pago.

**Validaciones y Coherencia de Datos**:
Los operadores de información de PILA aplican estrictas reglas de validación para asegurar la coherencia de los datos y el cumplimiento normativo. Estas validaciones verifican las relaciones entre el tipo de aportante, la clase de aportante, el tipo de persona, el tipo de cotizante, el tipo de planilla y las novedades que se reportan. Si tu módulo de Odoo genera un reporte que no cumple estas reglas, no pasará la validación y el operador te informará del error.

**Archivos de Salida**:
Una vez que el reporte se procesa, los operadores de información generan archivos de salida que se envían a las diferentes administradoras (AFP, EPS, ARL, CCF, SENA, ICBF, ESAP, MEN). Estos archivos contienen el encabezado, la liquidación detallada por cotizante y los totales.