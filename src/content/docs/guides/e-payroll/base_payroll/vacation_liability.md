---
title: "Pasivo vacacional"
description: "Este módulo permite la gestión del pasivo vacacional dentro del sistema de nómina de Odoo."
---

### 📌 ¿Qué hace este módulo?
Este módulo permite la gestión del pasivo vacacional dentro del sistema de nómina de Odoo. Su función principal es automatizar el cálculo de las vacaciones pendientes de los empleados y el pasivo acumulado asociado a estas. Además, facilita la integración con la nómina para reflejar correctamente los valores en los contratos y pagos.

### ✅ Características principales

- Cálculo automático del pasivo vacacional de los empleados.
- Integración con el sistema de nómina para reflejar montos adeudados por vacaciones.
- Modificaciones en las vistas de contratos, vacaciones y nómina para una mejor gestión.
- Configurable dentro de las estructuras salariales existentes en Odoo. 


### 🔗 Dependencias
Este módulo requiere que los siguientes módulos estén instalados previamente en Odoo:
- **Contrato de empleados** (`hr_contract`) - Gestión de contratos laborales.
- **Recurso** (`resource`)  - Manejo de recursos y calendarios.
- **Nomina** (`hr_payroll`) - Módulo base para la gestión de la nómina en Odoo.
- **Tiempo personal** (`hr_holidays`) - Administración de días de vacaciones.


### 🔧 Paquetes de python
| Paquete        | Versión requerida |
|---------------|----------------|
| `pytz`      | `>=2024.2`      |


### 📥 Cómo instalar
Para instalar este módulo:
<details>
  <summary><strong>🟢 Odoo 17 e inferiores</strong></summary>

1. Ve al menú **Aplicaciones** en Odoo.
2. Busca `Pasivo Vacacional` o `nbt_pasivo_vacacional`.
3. Haz clic en **Instalar**
</details>

<details open>
  <summary><strong>🔵 Odoo 18 y superiores</strong></summary>
  
1. Ve al menú **Aplicaciones** en Odoo.
2. Busca `SNVA - Vacation Liability` o `snva_basepay_vacation_liability`.
3. Haz clic en **Instalar**
</details>

### ⚙️ Cómo usar
1. Dirígete al modulo de **Nomina** en Odoo.
2. Accede a la pestaña de Reportes y revisa los registros de pasivos vacacionales.
3. Accede a contratos en la sección de pasivo vacacional 
4. Aplica los montos calculados en los contratos y pagos de empleados.

![Elementos gráficos](/src/assets/e_payroll/vacation-liability.gif)

### 📜 Licencia

Este repositorio está licenciado bajo [OPL-1](LICENSE).

Cada módulo dentro de este repositorio es un desarrollo propietario de **SINOVA S.A.S** y está protegido por la licencia **OPL-1**.  
Esto significa que no puede ser modificado, distribuido ni reutilizado sin la autorización expresa de **SINOVA S.A.S**.  
Para más información sobre los términos de uso, consulta el archivo `LICENSE` incluido en este repositorio.

✍️ **Desarrollado por:** [SINOVA SAS](https://www.sinova.co/)  
📅 **Última actualización:** 29 de septiembre de 2025

---
