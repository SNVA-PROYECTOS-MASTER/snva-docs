---
title: "Retención en la fuente - nómina"
description: "Módulo para calcular y gestionar la retención en la fuente sobre la nómina en Odoo, cumpliendo con el Artículo 385 del ET en Colombia."
---

### 📌 ¿Qué hace este módulo?
Este módulo permite calcular automáticamente la **retención en la fuente** sobre las nóminas de los empleados, siguiendo lo establecido en el **Artículo 385 del Estatuto Tributario (ET)**.  
Adicionalmente, brinda herramientas para administrar deducciones, rentas exentas y parámetros anuales como salario mínimo, auxilio de transporte y UVT.

### ✅ Características principales
- **Cálculo automático de retención** en cada nómina.
- **Liquidación de la retención en la prima** y otros conceptos especiales.
- Configuración de **deducciones** y **rentas exentas** aplicables al cálculo.
- Parametrización de **datos anuales**: salario mínimo, auxilio de transporte y valor del UVT.
- Creación de **categorías de retención** que permiten agrupar pagos y aplicar límites en los cálculos.
- Integración con los **contratos de empleados**, donde se define el procedimiento, porcentaje y deducciones aplicables.

### 🔗 Dependencias
Este módulo requiere la instalación previa de:
- **`hr_payroll`**: Gestión de nómina en Odoo.
- **`snva_basepay_hr_contract_fields`**: Campos personalizados para contratos.
- **`snva_base_l10n_co_partner_names`**: Identificación de empleados según normativa colombiana.

### 💪 Cómo instalar
Para instalar este módulo:

<details>
  <summary><strong>🟢 Odoo 17 e inferiores</strong></summary>

1. Ve al menú **Aplicaciones** en Odoo.
2. Busca `Retención Nómina Colombia` o `l10n_retencion_nomina_co`.
3. Haz clic en **Instalar**.
</details>

<details open>
  <summary><strong>🔵 Odoo 18 y superiores</strong></summary>

1. Ve al menú **Aplicaciones** en Odoo.
2. Busca `SNVA - Payroll Withholding Colombia` o `snva_basepay_withholding_payroll`.
3. Haz clic en **Instalar**.  
</details>

### ⚙️ Cómo usar
1. **Configurar en Contratos**  
   - Ruta: **Nómina → Contratos → Contratos**.  
   - Allí puedes definir el procedimiento de retención, porcentaje, deducciones y rentas exentas por empleado.

2. **Configurar Datos Anuales**  
   - Ruta: **Nómina → Configuración → Datos Anuales**.  
   - Aquí se definen los valores de salario mínimo, auxilio de transporte y UVT.

3. **Categorías de Retención**  
   - Se recomienda crear categorías salariales específicas (ejemplo: aportes voluntarios a pensiones).
   - Estas deben tener como padre la categoría **Deducciones**, para que sean tomadas en el total de deducciones.
   - En la **regla salarial** correspondiente, selecciona la categoría creada.

   👉 Así, al generar la nómina, el sistema aplicará correctamente las reglas asociadas a esa categoría.  

### ⚠️ Consideraciones importantes
- Si la nómina es **quincenal** y deseas que se tome todo el valor mensual, la **primera nómina del mes** debe estar en estado *Hecha* o *Pagada*.  
- No debes asociar directamente una categoría de retención a una principal (ejemplo: **Deducciones** o categorías padre de otras), ya que esto generaría **duplicidad en los totales**.

### 📚 Licencia
Este repositorio está licenciado bajo [OPL-1](LICENSE).  

Cada módulo dentro de este repositorio es un desarrollo propietario de **SINOVA S.A.S** y está protegido por la licencia **OPL-1**.  
Esto significa que no puede ser modificado, distribuido ni reutilizado sin la autorización expresa de **SINOVA S.A.S**.  
Para más información sobre los términos de uso, consulta el archivo `LICENSE` incluido en este repositorio.

✍️ **Desarrollado por:** [SINOVA SAS](https://www.sinova.co/)  
📅 **Última actualización:** 29 de septiembre de 2025

---