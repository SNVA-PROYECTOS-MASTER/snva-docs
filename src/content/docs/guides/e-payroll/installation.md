---
title: Instalación de nómina electrónica
description: Guía para instalar los módulos de Nómina Electrónica en Odoo desde el menú de aplicaciones.
---

Esta guía explica cómo instalar los módulos de **Nómina Electrónica** en Odoo a través del menú de aplicaciones.

---

## ✅ Requisitos previos

Antes de comenzar, asegúrate de:

- Tener acceso como **Administrador** en tu instancia de Odoo.  
- Contar con conexión a internet para actualizar la lista de aplicaciones.  
- Disponer del paquete de módulos de **SINOVA**, previamente cargado en el servidor por el equipo técnico.  

---

## 🧑‍💻 Activar el modo desarrollador

Para identificar los **nombres técnicos** de los módulos:  

1. Ingresa a **Ajustes → General**.  
2. Desplázate hasta el final y haz clic en **Activar modo desarrollador**.  
3. Una vez activado, en la vista de **Aplicaciones** verás el nombre técnico debajo del nombre amigable.  

![Modo desarrollador](/assets/e_payroll/developer-mode.png)

---

## ⚙️ Pasos de instalación

<details>
  <summary><strong>🟢 Odoo 17 e inferiores</strong></summary>

1. Accede a tu instancia de Odoo con tu usuario **Administrador**.  

2. Dirígete a:  
   **Aplicaciones → Actualizar lista de aplicaciones**.  

3. En la barra de búsqueda, escribe el nombre de los módulos.  

4. Instala los siguientes módulos en este orden:  

   - `hr_contract_fields`  
   - `l10n_co_e_payroll`  
   - `l10n_retencion_nomina_co`  
   - `nbt_employee_loan`  
   - `nbt_l10n_co_e_payroll`  
   - `nbt_pago_prestaciones_sociales_co`  
   - `nbt_pasivo_vacacional`  
   - `nbt_employee_loan`  
   - `nbt_payroll`  
   - `nbt_payroll_data`  
   - `nbt_payroll_social_security`  

![Aplicaciones Odoo 17](/assets/e_payroll/odoo-17-apps.png)

5. En cada módulo haz clic en **Activar**.  
</details>

<details open>
  <summary><strong>🔵 Odoo 18 y superiores</strong></summary>

1. Accede a tu instancia de Odoo con tu usuario **Administrador**.  

2. Dirígete a:  
   **Aplicaciones → Actualizar lista de aplicaciones**.  

3. En la barra de búsqueda, escribe el nombre de los módulos.  

4. Antes de continuar, instala el módulo base compartido por varios paquetes:  
   - `snva_base_l10n_co_partner_names`  

5. Luego, instala los siguientes módulos en este orden:  

   - `snva_basepay_hr_contract_fields`  
   - `snva_basepay_l10n_co_e_payroll`  
   - `snva_basepay_withholding_payroll`  
   - `snva_basepay_l10n_co_e_payroll_plus`  
   - `snva_basepay_social_benefits_co`  
   - `snva_basepay_vacation_liability`  
   - `snva_basepay_employee_loan`  
   - `snva_basepay_payroll`  
   - `snva_basepay_payroll_salary_rules`  
   - `snva_basepay_social_security`  

6. En cada módulo haz clic en **Activar**.  

![Aplicaciones Odoo 18](/assets/e_payroll/odoo-18-apps.png)
</details>

---

## 🛠️ Solución de problemas

- **Un módulo no aparece:**  
  - Ejecuta nuevamente **Actualizar lista de aplicaciones**.  
  - Asegúrate de estar filtrando por **Todos** y no solo por **Aplicaciones Odoo**.  

- **La instalación falla con un error:**  
  - Contacta al **equipo técnico de SINOVA** para recibir asistencia.  

---

✍️ **Autor:** [SINOVA SAS](https://www.sinova.co/)  
📅 **Última actualización:** 29 de septiembre de 2025
