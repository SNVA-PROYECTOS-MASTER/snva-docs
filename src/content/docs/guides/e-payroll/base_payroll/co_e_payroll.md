---
title: "Nómina electrónica base"
description: "El módulo extiende la funcionalidad de la nómina en Odoo para cumplir con los requisitos de la normativa colombiana."
---

### 📌 ¿Qué hace este módulo?
El módulo extiende la funcionalidad de la nómina en Odoo para cumplir con los requisitos de la normativa colombiana. Implementa procesos de liquidación, generación de reportes y validaciones específicas de la legislación local, además de integrarse con la facturación electrónica para el reporte de nómina.

### ✅ Características principales
- **Liquidación de nómina**: Implementa cálculos específicos de acuerdo con la legislación colombiana.
- **Generación y validación de reportes**: Automatiza la creación de documentos requeridos para la nómina electrónica.
- **Integración con facturación electrónica**: Compatible con el módulo `l10n_co_edi` para el envío de reportes a la DIAN.
- **Control de acceso y permisos**: Define roles y restricciones para proteger la información sensible.
- **Interfaz amigable en Odoo**: Agrega vistas personalizadas para la gestión de la nómina electrónica.

### 🔗 Dependencias
- **`account`**: Módulo contable de Odoo.
- **`hr`**: Gestión de empleados.
- **`l10n_latam_base`**: Base para localización en Latinoamérica.
- **`l10n_co_edi`**: Facturación electrónica para Colombia.
- **`hr_payroll`**: Gestión de nómina en Odoo.

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
2. Busca `Nómina electrónica Colombia nbt` o `l10n_co_e_payroll`.
3. Haz clic en **Instalar**
</details>

<details open>
  <summary><strong>🔵 Odoo 18 y superiores</strong></summary>
  
1. Ve al menú **Aplicaciones** en Odoo.
2. Busca `SNVA - Electronic Payroll Colombia` o `snva_basepay_l10n_co_e_payroll`.
3. Haz clic en **Instalar**
</details>

### ⚙️ Cómo usar
1. **Configuración Inicial**:
   - Por cada compañía se generará una pestaña llamada **"E-Payroll"** o **"Nómina Electrónica"** donde se parametrizan los datos del set de pruebas o producción de la DIAN, como el certificado y set de pruebas.
   - Configurar la empresa con la información requerida por la DIAN.
2. **Acceso al Módulo**:
   - Se habilita una aplicación en la ventana inicial llamada **"E-Payroll"** o **"Nómina Electrónica"**, donde se puede visualizar la lista de Documentos DIAN y registros de nómina.
3. **Gestión de Nómina**:
   - Permite crear registros de nómina y enviarlos a la DIAN.
   - Cuenta con la funcionalidad de obtener el estado del envío de documentos.
4. **Envío a la DIAN**:
   - Validar la información y enviar los reportes a través del módulo `l10n_co_edi`.
   - Confirmar la aceptación de los documentos por parte de la DIAN.

### 📚 Licencia

Este repositorio está licenciado bajo [OPL-1](LICENSE).

Cada módulo dentro de este repositorio es un desarrollo propietario de **SINOVA S.A.S** y está protegido por la licencia **OPL-1**.  
Esto significa que no puede ser modificado, distribuido ni reutilizado sin la autorización expresa de **SINOVA S.A.S**.  
Para más información sobre los términos de uso, consulta el archivo `LICENSE` incluido en este repositorio.

✍️ **Desarrollado por:** [SINOVA SAS](https://www.sinova.co/)  
📅 **Última actualización:** 29 de septiembre de 2025

---
