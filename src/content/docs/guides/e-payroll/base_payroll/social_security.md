---
title: "Seguridad social"
description: "Lo que hace es aprovechar la configuración de los campos de seguridad social y generar los datos de pila para cada una de las nóminas ya pagadas."
---

### 📌 ¿Qué hace este módulo?
Lo que hace es aprovechar la configuración de los campos de seguridad social y generar los datos de pila para cada una de las nóminas ya pagadas. 
El reporte generado por este módulo aparece en el módulo de **Nómina**, dentro de la sección **Reportes**.

### ✅ Características principales
- Aprovecha el módulo `campo personalizados del contrato`.
- Agrega un nuevo menú llamado **Seguridad Social**.
- Permite agregar un registro donde se define el **año, mes y empresa**.
- Calcula las líneas asociadas a los empleados con nómina pagada.
- Permite la descarga del archivo en formato **TXT** según el anexo técnico de **PILA**.

### 🔗 Dependencias
Este módulo requiere que los siguientes módulos estén instalados previamente en Odoo:
- **`base:`** Módulo principal de Odoo.
- **`snva_basepay_hr_contract_fields:`** Información de los contratos de los empleados.
- **`hr_payroll:`** Contactos del sistema.
- **`snva_basepay_withholding_payroll:`** Módulo para el manejo de empleados.
- **`snva_basepay_payroll:`** Módulo para el manejo de empleados.
- **`hr_appraisal:`** Módulo para el manejo de empleados.
- **`l10n_co_edi:`** Módulo para el manejo de empleados.

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
2. Busca `Seguridad social nomina co nbt` o `nbt_payroll_social_security`.
3. Haz clic en **Instalar**
</details>

<details open>
  <summary><strong>🔵 Odoo 18 y superiores</strong></summary>
  
1. Ve al menú **Aplicaciones** en Odoo.
2. Busca `SNVA - Social Security & ARL` o `snva_basepay_social_security`.
3. Haz clic en **Instalar**
</details>

### ⚙️ Cómo usar
<iframe src="https://drive.google.com/file/d/1LtMD2NDVRbFq5-vF5U3WJ_xmgzdRT6hl/preview"
        width="100%"
        height="320"
        allow="autoplay">
</iframe>

### 📜 Licencia

Este repositorio está licenciado bajo [OPL-1](LICENSE).

Cada módulo dentro de este repositorio es un desarrollo propietario de **SINOVA S.A.S** y está protegido por la licencia **OPL-1**.  
Esto significa que no puede ser modificado, distribuido ni reutilizado sin la autorización expresa de **SINOVA S.A.S**.  
Para más información sobre los términos de uso, consulta el archivo `LICENSE` incluido en este repositorio.

✍️ **Desarrollado por:** [SINOVA SAS](https://www.sinova.co/)  
📅 **Última actualización:** 29 de septiembre de 2025

---
