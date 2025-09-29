---
title: "SNVA - Payroll"
description: "Módulo avanzado para la gestión de nómina en Odoo. Incluye cálculos automáticos, apartado de Datos Anuales y reglas salariales personalizables."
---

### 📌 ¿Qué hace este módulo?
El módulo **SNVA - Payroll** amplía las funcionalidades estándar de Odoo para la **gestión de nómina avanzada**.  
Entre sus principales aportes se encuentran:  

- La incorporación de un apartado denominado **“Datos Anuales”**, diseñado para centralizar y administrar información general de la nómina.  
- Ajustes en los cálculos de las **reglas salariales** y en las **entradas de trabajo**, garantizando mayor precisión en la liquidación.  
- Generación de reportes anuales y soporte para reglas personalizadas que se adaptan a las necesidades de cada empresa.  

---

### ✅ Características principales
- **Liquidación de nómina avanzada**: Cálculos automatizados conforme a la legislación colombiana.  
- **Apartado de Datos Anuales**: Registro centralizado para consolidar información de largo plazo.  
- **Reglas salariales personalizables**: Flexibilidad para adaptarse a escenarios específicos.  
- **Gestión de contratos y entradas**: Integración directa con `hr_contract` y `hr_payroll`.  
- **Reportes anuales en Excel**: Compatible con `report_xlsx` para exportar información de nómina.  
- **Interfaz amigable en Odoo**: Nuevas vistas y menús que facilitan la administración de la nómina.  

---

### 🔗 Dependencias
Este módulo depende de los siguientes módulos de Odoo:  
- `hr_contract`  
- `hr_payroll`  
- `hr_payroll_account`  
- `report_xlsx`  
- `snva_basepay_hr_contract_fields`  
- `l10n_co`  
- `l10n_latam_base`  
- `snva_base_l10n_co_partner_names`  

📌 **Nota**: No requiere dependencias externas de Python adicionales.  

---

### 💪 Cómo instalar
<details>
  <summary><strong>🟢 Odoo 17 e inferiores</strong></summary>

1. Ve al menú **Aplicaciones** en Odoo.  
2. Busca `NBT - Payroll` o `nbt_payroll`.  
3. Haz clic en **Instalar**.  
</details>

<details open>
  <summary><strong>🔵 Odoo 18 y superiores</strong></summary>
  
1. Ve al menú **Aplicaciones** en Odoo.  
2. Busca `SNVA - Payroll` o `snva_basepay_payroll`.  
3. Haz clic en **Instalar**.  
</details>

---

### ⚙️ Cómo usar
1. **Acceso al módulo**  
   - Desde el panel inicial, accede a la aplicación **“Nómina”**.  
   - Dentro del menú, encontrarás el apartado **“Datos Anuales”**.  

2. **Gestión de Datos Anuales**  
   - Registra información general que servirá como base para el cálculo y consolidación de la nómina.  

3. **Liquidación de nómina**  
   - Configura las reglas salariales personalizadas.  
   - Crea las nóminas y valida los cálculos automáticos ajustados por el módulo.  

4. **Exportación de reportes**  
   - Genera reportes en Excel (`.xlsx`) con información detallada de la nómina.  

---

### 📜 Licencia

Este repositorio está licenciado bajo [OPL-1](LICENSE).

Cada módulo dentro de este repositorio es un desarrollo propietario de **SINOVA S.A.S** y está protegido por la licencia **OPL-1**.  
Esto significa que no puede ser modificado, distribuido ni reutilizado sin la autorización expresa de **SINOVA S.A.S**.  
Para más información sobre los términos de uso, consulta el archivo `LICENSE` incluido en este repositorio. 

✍️ **Desarrollado por:** [SINOVA SAS](https://www.sinova.co/)  
📅 **Última actualización:** 29 de septiembre de 2025 

---