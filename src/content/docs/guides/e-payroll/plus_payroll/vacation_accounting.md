---
title: "Contabilización de pasivo por vacaciones"
description: "El módulo amplía la funcionalidad de nómina en Odoo al agregar reglas salariales específicas para la contabilización del pasivo por vacaciones."
---

### 📌 ¿Qué hace este módulo?
El módulo amplía la funcionalidad de nómina en Odoo al agregar reglas salariales específicas para la contabilización del pasivo por vacaciones. Estas reglas son esenciales para cálculos precisos en la nómina y el cumplimiento de los requisitos de nómina electrónica.

### ✅ Características clave
- **Reglas salariales para vacaciones**: Agrega configuraciones específicas para la correcta contabilización del pasivo de vacaciones.
- **Cálculos automatizados**: Genera automáticamente los valores relacionados con las vacaciones en la nómina electrónica.
- **Integración con nómina electrónica**: Garantiza que la información de vacaciones se incluya correctamente en los reportes enviados a la DIAN.
- **Cumplimiento normativo**: Diseñado para ajustarse a las regulaciones contables y fiscales aplicables.

### 🔗 Dependencias
Este módulo requiere los siguientes módulos de Odoo:
- **`hr_payroll`**: Gestión de nómina en Odoo.
- **`snva_basepay_vacation_liability`**: Base para la contabilización del pasivo de vacaciones.
- **`snva_basepay_payroll`**: Módulo base de nómina extendida para SINOVA.

### 💪 Instalación
Para instalar este módulo:
<details>
  <summary><strong>🟢 Odoo 17 e inferiores</strong></summary>

1. Ve al menú **Aplicaciones** en Odoo.
2. Busca `Contabilizacion pasivo de vacaciones` o `nbt_contabilidad_vacaciones`.
3. Haz clic en **Instalar**.
</details>

<details open>
  <summary><strong>🔵 Odoo 18 y superiores</strong></summary>

1. Ve al menú **Aplicaciones** en Odoo.
2. Busca `SNVA - Vacation Liability Accounting` o `snva_pluspay_vacation_accounting`.
3. Haz clic en **Instalar**.  
</details>

### ⚙️ Cómo usar
1. **Configuración inicial**:
   - Accede al menú de **Nómina** y revisa las reglas salariales asociadas a vacaciones.
   - Verifica que los parámetros de la empresa estén correctamente configurados para reflejar el pasivo de vacaciones.
2. **Procesamiento de nómina**:
   - Al procesar la nómina, las reglas salariales incluidas en este módulo calcularán automáticamente los valores asociados a las vacaciones.
   - Se reflejarán los pasivos correspondientes en la contabilidad.
3. **Integración con nómina electrónica**:
   - Los valores generados se incluirán automáticamente en los reportes de nómina electrónica enviados a la DIAN.

### 📚 Licencia

Este repositorio está licenciado bajo [OPL-1](LICENSE).

Cada módulo dentro de este repositorio es un desarrollo propietario de **SINOVA S.A.S** y está protegido por la licencia **OPL-1**.  
Esto significa que no puede ser modificado, distribuido ni reutilizado sin la autorización expresa de **SINOVA S.A.S**.  
Para más información sobre los términos de uso, consulta el archivo `LICENSE` incluido en este repositorio.

✍️ **Desarrollado por:** [SINOVA SAS](https://www.sinova.co/)  
📅 **Última actualización:** 29 de septiembre de 2025

---