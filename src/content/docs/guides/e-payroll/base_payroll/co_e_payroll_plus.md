---
title: "Nómina electrónica plus"
description: "Este módulo complementa la Nómina Electrónica, incorporando nuevas funcionalidades que permiten gestionar el proceso de nómina de forma más eficiente y garantizar el cumplimiento de las normas establecidas por la DIAN."
---

### 📌 ¿Qué hace este módulo?
Este módulo complementa la **Nómina Electrónica**, incorporando nuevas funcionalidades que permiten gestionar el proceso de nómina de forma más eficiente y garantizar el cumplimiento de las normas establecidas por la DIAN.

### ✅ Características principales
- **Nómina por lotes**: Agrega la funcionalidad de procesar varios recibo de nómina.
- **Nuevos campos requeridos por la DIAN**: Adiciona nuevos campos requeridos por la DIAN al momento de procesar un recibo de nómina.
- **Nuevos conceptos**: Se adicionan nuevos conceptos a ciertas reglas salariales.

### 🔗 Dependencias
- **`hr_contract`**: Módulo que permite gestionar los contratos de un empleado.
- **`hr_holidays`**: Gestión de tiempo libre.
- **`hr_appraisal`**: Permite gestionar la evaluación de desempeño.

Además, el módulo requiere las siguientes dependencias externas de Python:
- `validators>=0.34.0`
- `pyOpenSSL>=23.2.0`
- `xades>=1.0.0`
- `cryptography>=41.0.7`

### 💪 Cómo instalar
Para instalar este módulo:
<details>
  <summary><strong>🟢 Odoo 17 e inferiores</strong></summary>

1. Ve al menú **Aplicaciones** en Odoo.
2. Busca `NBT - EDI Payroll` o `nbt_l10n_co_e_payroll`.
3. Haz clic en **Instalar**
</details>

<details open>
  <summary><strong>🔵 Odoo 18 y superiores</strong></summary>
  
1. Ve al menú **Aplicaciones** en Odoo.
2. Busca `SNVA - Electronic Payroll Colombia EDI` o `snva_basepay_l10n_co_e_payroll_plus`.
3. Haz clic en **Instalar**
</details>

### 📚 Licencia

Este repositorio está licenciado bajo [OPL-1](LICENSE).

Cada módulo dentro de este repositorio es un desarrollo propietario de **SINOVA S.A.S** y está protegido por la licencia **OPL-1**.  
Esto significa que no puede ser modificado, distribuido ni reutilizado sin la autorización expresa de **SINOVA S.A.S**.  
Para más información sobre los términos de uso, consulta el archivo `LICENSE` incluido en este repositorio.

✍️ **Desarrollado por:** [SINOVA SAS](https://www.sinova.co/)  
📅 **Última actualización:** 29 de septiembre de 2025

---
