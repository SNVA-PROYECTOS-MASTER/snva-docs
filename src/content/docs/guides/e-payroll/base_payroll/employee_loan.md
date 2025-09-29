---
title: "Préstamos y anticipos a empleados"
description: "Módulo para gestionar préstamos y anticipos a empleados en Odoo, con integración automática en la nómina."
---

### 📌 ¿Qué hace este módulo?
El módulo **SNVA - Employee Loan** permite administrar préstamos y anticipos solicitados por los empleados, realizar el seguimiento de pagos y deducir automáticamente las cuotas correspondientes en la nómina.  
Incluye validaciones, flujos de aprobación y reglas salariales que aseguran la correcta integración contable y la coherencia en los cálculos.

### ✅ Características principales
- **Gestión centralizada de préstamos y anticipos** desde la ficha del empleado.
- **Flujo de aprobación** con notificaciones automáticas a los responsables designados.
- **Generación automática de cuotas**, con valores y fechas de vencimiento calculadas por el sistema.
- **Registro de pagos manuales**, con opción de pagos parciales.
- **Integración con nómina**, deduciendo automáticamente las cuotas pendientes en cada liquidación.
- **Reglas salariales preconfiguradas**:  
  - `LOAN` → Préstamos.  
  - `LOANA` → Anticipos.  
- Validación para evitar múltiples solicitudes activas del mismo tipo por empleado.
- Historial de pagos disponible en la vista del préstamo.

### 🔗 Dependencias
Este módulo requiere la instalación previa de:
- **`snva_basepay_payroll`**: Módulo base de gestión de nómina.  
- **`mail`**: Para notificaciones y comunicación interna en Odoo.  

### 💪 Cómo instalar
Para instalar este módulo:

<details>
  <summary><strong>🟢 Odoo 17 e inferiores</strong></summary>

1. Ve al menú **Aplicaciones** en Odoo.  
2. Busca `NBT - Employee Loan` o `nbt_employee_loan`.  
3. Haz clic en **Instalar**.  
</details>

<details open>
  <summary><strong>🔵 Odoo 18 y superiores</strong></summary>

1. Ve al menú **Aplicaciones** en Odoo.  
2. Busca `SNVA - Employee Loan` o `snva_basepay_employee_loan`.  
3. Haz clic en **Instalar**.  
</details>

### ⚙️ Cómo usar
1. **Configuración inicial**  
   - En el menú de empleados, pestaña **Préstamos**, puedes asignar aprobadores desde el grupo `Loan Manager`.  
   - Verifica que las reglas salariales `LOAN` y `LOANA` estén disponibles en las estructuras salariales.  

2. **Solicitud de préstamo o anticipo**  
   - Ruta: **Empleados → Perfil del empleado → Préstamos**.  
   - Completar: tipo (préstamo/anticipo), monto, cuotas, fecha de inicio y razón opcional.  
   - Al confirmar, se notifica automáticamente a los aprobadores.  

3. **Aprobación o rechazo**  
   - Los aprobadores revisan solicitudes en el menú **Préstamos**.  
   - Pueden aprobar o rechazar (indicando motivo si es rechazo).  

4. **Generación de cuotas**  
   - Tras aprobar, generar las cuotas desde la vista del préstamo.  
   - El sistema calcula automáticamente montos y vencimientos.  

5. **Registro de pagos**  
   - Se pueden registrar pagos manuales (totales o parciales).  

6. **Deducción en nómina**  
   - Al calcular la nómina, el sistema descuenta automáticamente las cuotas pendientes del salario neto del empleado.  

### ⚠️ Consideraciones importantes
- Un empleado no puede tener más de **una solicitud activa del mismo tipo** (pendiente, aprobada o rechazada).  
- Las categorías de retención y préstamos deben configurarse correctamente para evitar duplicidad de cálculos.  
- El historial de pagos está disponible en la vista de cada préstamo.

### 📚 Licencia
Este repositorio está licenciado bajo [OPL-1](LICENSE).  

Cada módulo dentro de este repositorio es un desarrollo propietario de **SINOVA S.A.S** y está protegido por la licencia **OPL-1**.  
Esto significa que no puede ser modificado, distribuido ni reutilizado sin la autorización expresa de **SINOVA S.A.S**.  
Para más información sobre los términos de uso, consulta el archivo `LICENSE` incluido en este repositorio.

✍️ **Desarrollado por:** [SINOVA SAS](https://www.sinova.co/)  
📅 **Última actualización:** 29 de septiembre de 2025

---