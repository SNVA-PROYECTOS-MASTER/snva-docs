---
title: "Reportes DIAN"
description: "Este módulo permite a los usuarios generar el documento DIAN 220 de forma automática, basado en la nómina asociada al empleado autenticado en el sistema."
---

### 📌 ¿Qué hace este módulo?
Este módulo permite a los usuarios generar el **documento DIAN 220** de forma automática, basado en la nómina asociada al empleado autenticado en el sistema.  
A través de un asistente, el usuario puede especificar los siguientes datos:

- Año y mes de generación del documento.
- Empleado o grupo de empleados.
- Empresas relacionadas.
- Tipo de estructura salarial.

Esto facilita el cumplimiento de los requerimientos fiscales definidos por la **Dirección de Impuestos y Aduanas Nacionales (DIAN)** en Colombia.

### ✅ Características principales
- Generación automática del **Certificado de Ingresos y Retenciones - Formato DIAN 220**.
- Compatible con múltiples empleados y empresas.
- Permite seleccionar el año, mes y estructura salarial a considerar.
- Interfaz amigable a través de un **asistente (wizard)**.
- Total integración con la **nómina de Odoo**.
- Cumplimiento con las regulaciones fiscales vigentes en Colombia.
- Exportación del reporte en formato **PDF**.

### 🔗 Dependencias
Este módulo requiere la instalación previa de:

- **`hr_payroll`** – Módulo base de nómina en Odoo.
- **`report_xlsx`** – Permite la exportación de reportes en formato Excel.
- **`base`** – Módulo base de Odoo, requerido para toda funcionalidad estructural.

### 💪 Cómo instalar
Para instalar este módulo:
<details>
  <summary><strong>🟢 Odoo 17 e inferiores</strong></summary>

1. Ve al menú **Aplicaciones** en Odoo.
2. Busca `NBT - Dian Reports` o `l10n_co_dian_reports`.
3. Haz clic en **Instalar**.
</details>

<details open>
  <summary><strong>🔵 Odoo 18 y superiores</strong></summary>

1. Ve al menú **Aplicaciones** en Odoo.
2. Busca `SNVA - Dian Reports` o `snva_pluspay_dian_report`.
3. Haz clic en **Instalar**.  
</details>

### ⚙️ Cómo usar
El funcionamiento de este módulo se describe a continuación:

<iframe src="https://drive.google.com/file/d/1pA-YIHldBU8OYPoWL6h7t85RKPmPiWVj/preview" width="100%" height="320" allow="autoplay">
</iframe>

### 📚 Licencia

Este repositorio está licenciado bajo [OPL-1](LICENSE).

Cada módulo dentro de este repositorio es un desarrollo propietario de **SINOVA S.A.S** y está protegido por la licencia **OPL-1**.  
Esto significa que no puede ser modificado, distribuido ni reutilizado sin la autorización expresa de **SINOVA S.A.S**.  
Para más información sobre los términos de uso, consulta el archivo `LICENSE` incluido en este repositorio.

✍️ **Desarrollado por:** [SINOVA SAS](https://www.sinova.co/)  
📅 **Última actualización:** 29 de septiembre de 2025

---