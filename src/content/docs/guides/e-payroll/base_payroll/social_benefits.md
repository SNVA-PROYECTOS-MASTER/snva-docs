---
title: "Prestaciones sociales"
description: "Este módulo permite la gestión de prestaciones sociales dentro del sistema de nómina de Odoo."
---

### 📌 ¿Qué hace este módulo?
Este módulo permite la gestión de prestaciones sociales dentro del sistema de nómina de Odoo, asegurando el correcto cálculo de bases salariales para primas, cesantías y vacaciones, según la normativa laboral colombiana. Además, automatiza el cálculo del promedio de las prestaciones sociales a pagar por cada empleado.

### ✅ Características principales

- Agrega campos específicos para el cálculo de prestaciones sociales dentro de las reglas salariales:
  - Base de Prima (base_prima)
  - Base de Cesantías (base_cesantias)
  - Base de Vacaciones (base_vacaciones)

- Garantiza la correcta aplicación de las bases salariales a cada empleado.
- Configurable dentro de las reglas salariales existentes en el sistema.
- Compatible con las estructuras salariales de Odoo.


### 🔗 Dependencias
Este módulo requiere que los siguientes módulos estén instalados previamente en Odoo:
- **base** (`base`) - Módulo base de Odoo, necesario para la gestión de datos y configuraciones generales.
- **hr payroll** (`hr_payroll`) - Módulo base para la gestión de la nómina en Odoo.
- **nbt payroll** (`nbt_payroll`) - Maneja el cálculo y pago de cesantías, intereses sobre cesantías y primas.


### 🔧 Paquetes de python
| Paquete        | Versión requerida |
|---------------|----------------|
| `dateutil`      | `>=2.8.2`    |


### 📥 Cómo instalar
Para instalar este módulo:
<details>
  <summary><strong>🟢 Odoo 17 e inferiores</strong></summary>

1. Ve al menú **Aplicaciones** en Odoo.
2. Busca `prestaciones sociales nómina co nbt` o `nbt_pago_prestaciones_sociales_co`.
3. Haz clic en **Instalar**
</details>

<details open>
  <summary><strong>🔵 Odoo 18 y superiores</strong></summary>
  
1. Ve al menú **Aplicaciones** en Odoo.
2. Busca `SNVA - Social Benefits Payroll CO` o `snva_basepay_social_benefits_co`.
3. Haz clic en **Instalar**
</details>

### ⚙️ Cómo usar
1. Dirígete al modulo de **Nomina** en Odoo.
2. Accede a la pestaña de Configuración
3. Gestiona las reglas salariales relacionadas con las prestaciones sociales.
4. Aplica estas bases salariales a los contratos de los empleados para el correcto cálculo de la nómina.

### 📜 Licencia

Este repositorio está licenciado bajo [OPL-1](LICENSE).

Cada módulo dentro de este repositorio es un desarrollo propietario de **SINOVA S.A.S** y está protegido por la licencia **OPL-1**.  
Esto significa que no puede ser modificado, distribuido ni reutilizado sin la autorización expresa de **SINOVA S.A.S**.  
Para más información sobre los términos de uso, consulta el archivo `LICENSE` incluido en este repositorio.

✍️ **Desarrollado por:** [SINOVA SAS](https://www.sinova.co/)  
📅 **Última actualización:** 29 de septiembre de 2025

---
