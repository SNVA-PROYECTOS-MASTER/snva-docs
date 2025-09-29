---
title: "Portal de nómina"
description: "Este módulo amplía la funcionalidad del portal de usuarios de Odoo, permitiendo a los empleados consultar directamente desde su cuenta dos nuevas opciones."
---

### 📌 ¿Qué hace este módulo?
Este módulo amplía la funcionalidad del portal de usuarios de Odoo, permitiendo a los empleados consultar directamente desde su cuenta dos nuevas opciones:

1. 📄 **Desprendibles de nómina**  
2. 🧾 **Certificados laborales**

Ambas funcionalidades están disponibles desde el portal, facilitando el autoservicio y reduciendo la carga operativa del área de talento humano.

### ✅ Características principales
- Habilita dos accesos en el portal del usuario:  
  - Visualización y descarga de **Desprendibles de nómina** asociados al usuario.
  - Solicitud y descarga de **Certificados laborales**.
- Para la generación del certificado laboral se utiliza **una plantilla única predefinida**.
- La generación del certificado depende de que el empleado tenga un **contrato vigente o en progreso**.
- Los desprendibles disponibles corresponden a todos aquellos **asociados al empleado autenticado**.

### 🔗 Dependencias
Este módulo requiere la instalación previa de:
- **`portal`** - Manejo del portal de usuarios en Odoo.
- **`hr_payroll`** - Manejo de la nómina en Odoo.
- **`hr_contract`** - Este módulo permite administrar cada uno de los contratos del empleado, donde se definen el tipo de contrato, fechainicio y fin del mismo.
- **`sign`** - Esté módulo permite firmar documentos electrónicamente de forma legal y segura. Facilita la recolección de firmas digitales en contratos, acuerdos u otros documentos PDF directamente desde Odoo.

### 💪 Cómo instalar
Para instalar este módulo:
<details>
  <summary><strong>🟢 Odoo 17 e inferiores</strong></summary>

1. Ve al menú **Aplicaciones** en Odoo.
2. Busca `Nomina Portal` o `nbt_payroll_portal`.
3. Haz clic en **Instalar**.
</details>

<details open>
  <summary><strong>🔵 Odoo 18 y superiores</strong></summary>

1. Ve al menú **Aplicaciones** en Odoo.
2. Busca `SNVA - Payroll Portal` o `snva_pluspay_payroll_portal`.
3. Haz clic en **Instalar**.  
</details>

### ⚙️ Cómo usar
El funcionamiento de este módulo se describe a continuación:

<iframe src="https://drive.google.com/file/d/1x1YaSuit1lBjKIDJ3rCQzJ1XyGYOVCMf/preview"
        width="100%"
        height="320"
        allow="autoplay">
</iframe>

### 📚 Licencia

Este repositorio está licenciado bajo [OPL-1](LICENSE).

Cada módulo dentro de este repositorio es un desarrollo propietario de **SINOVA S.A.S** y está protegido por la licencia **OPL-1**.  
Esto significa que no puede ser modificado, distribuido ni reutilizado sin la autorización expresa de **SINOVA S.A.S**.  
Para más información sobre los términos de uso, consulta el archivo `LICENSE` incluido en este repositorio.

✍️ **Desarrollado por:** [SINOVA SAS](https://www.sinova.co/)  
📅 **Última actualización:** 29 de septiembre de 2025

---