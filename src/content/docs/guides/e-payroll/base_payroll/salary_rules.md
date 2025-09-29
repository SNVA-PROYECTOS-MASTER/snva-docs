---
title: "Reglas salariales"
description: "Este módulo permite la creación y gestión de estructuras salariales en Odoo, facilitando la configuración de reglas salariales."
---

### 📌 ¿Qué hace este módulo?
Este módulo permite la creación y gestión de estructuras salariales en Odoo, facilitando la configuración de reglas salariales, categorías y tipos de estructuras utilizadas en la nómina. Está diseñado para cumplir con la normativa laboral colombiana, asegurando precisión en la liquidación de pagos y cumplimiento normativo.

### ✅ Características principales
- Permite la creación dinámica de:
  - Tipos de estructuras salariales
  - Estructuras salariales
  - Categorías de reglas salariales
  - Reglas aplicadas a los contratos

- Soporta diferentes estructuras salariales:
  - **Contrato Laboral**: Define las reglas para el pago mensual de salarios, deducciones y aportes, con 51 reglas salariales.
  - **Liquidación de Contrato**: Facilita el cálculo de pagos al finalizar el contrato, con 5 reglas salariales.
  - **SENA**: Gestiona la nómina de aprendices según convenios con el SENA, diferenciando entre SENA Lectivo (3 reglas salariales) y SENA Productivo (3 reglas salariales).

- Garantiza la persistencia de reglas salariales tras la desinstalación del módulo, evitando la pérdida de cálculos en las nóminas previas.
Automatiza la generación de liquidaciones, asegurando precisión y cumplimiento de la legislación laboral colombiana.

### 🔗 Dependencias
Este módulo requiere que los siguientes módulos estén instalados previamente en Odoo:
- **hr payroll** (`hr_payroll`) - Módulo base de nómina en Odoo, permite la gestión de contratos, reglas salariales y generación de pagos.

<!-- PUEDE USARSE SI ES NECESARIO

### 🔧 Paquetes de Python
| Paquete        | Versión requerida |
|---------------|----------------|
| `pandas`      | `>=1.3.0`      |
| `xlsxwriter`  | `>=3.0.0`      |
-->

### 📥 Cómo instalar
Para instalar este módulo:
<details>
  <summary><strong>🟢 Odoo 17 e inferiores</strong></summary>

1. Ve al menú **Aplicaciones** en Odoo.
2. Busca `NBT - Payroll Data` o `nbt_payroll_data`.
3. Haz clic en **Instalar**
</details>

<details open>
  <summary><strong>🔵 Odoo 18 y superiores</strong></summary>
  
1. Ve al menú **Aplicaciones** en Odoo.
2. Busca `SNVA -  Payroll Salary Rules` o `snva_basepay_payroll_salary_rules`.
3. Haz clic en **Instalar**
</details>

### ⚙️ Cómo usar
1. Dirígete al modulo de **Nomina** en Odoo.
2. Accede a la pestaña de Configuración
3. Gestiona las estructuras y reglas salariales en las siguientes secciones:
  - Tipos de estructuras
  - Estructuras salariales
  - Categorías de reglas salariales
  - Reglas 
4. Aplica las estructuras a los contratos de empleados para el cálculo automatizado de la nómina.

![Funcionamiento](/src/assets/e_payroll/salary-rules.gif)

### 📜 Licencia

Este repositorio está licenciado bajo [OPL-1](LICENSE).

Cada módulo dentro de este repositorio es un desarrollo propietario de **SINOVA S.A.S** y está protegido por la licencia **OPL-1**.  
Esto significa que no puede ser modificado, distribuido ni reutilizado sin la autorización expresa de **SINOVA S.A.S**.  
Para más información sobre los términos de uso, consulta el archivo `LICENSE` incluido en este repositorio.

✍️ **Desarrollado por:** [SINOVA SAS](https://www.sinova.co/)  
📅 **Última actualización:** 29 de septiembre de 2025

---
