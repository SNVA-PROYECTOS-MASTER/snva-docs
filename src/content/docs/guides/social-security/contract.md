---
title: Contrato
description: A guide in my new Starlight docs site.
---

## 📝 **3. CONFIGURACIÓN DE CONTRATOS**

### **Ubicación:** Empleados → Contratos → Seleccionar Contrato

### **A. Entidades de Seguridad Social:**

#### **EPS (Entidad Promotora de Salud):**
- ✅ **Campo:** `eps`
- ✅ **Requerimiento:** Debe tener `codigo_entidad` configurado

#### **AFP (Administradora de Fondos de Pensiones):**
- ✅ **Campo:** `afp`
- ✅ **Requerimiento:** Debe tener `codigo_entidad` configurado

#### **CCF (Caja de Compensación Familiar):**
- ✅ **Campo:** `ccf`
- ✅ **Requerimiento:** Si está asignada, debe tener `codigo_entidad`

#### **ARL (Administradora de Riesgos Laborales):**
- ✅ **Campo:** `arl`
- ✅ **Requerimiento:** Si está asignada, debe tener `codigo_entidad`

### **B. Configuración de Riesgos:**

#### **Nivel de Riesgo ARL:**
- ✅ **Campo:** `nivel_Arl`
- ✅ **Requerimiento:** Debe tener `clase` definida (1, 2, 3, 4, 5)
- ✅ **Requerimiento:** Debe tener `percentage` (tarifa de riesgo)

#### **Código CIIU:**
- ✅ **Campo:** `codigo_ciiu`
- ✅ **Formato:** Código de actividad económica
- ✅ **Ejemplo:** "4711" para comercio al por menor

### **C. Información Laboral:**

#### **Horario de Trabajo:**
- ✅ **Campo:** `resource_calendar_id`
- ✅ **Requerimiento:** Debe tener `hours_per_day` configurado

#### **Salario:**
- ✅ **Campo:** `wage`
- ✅ **Requerimiento:** No debe ser nulo/vacío

### **Validaciones que evitarás:**
- ❌ "Falta configurar el Código de Entidad en la EPS/AFP/CCF/ARL"
- ❌ "Falta configurar el Nivel de Riesgo ARL"
- ❌ "Falta configurar el Código CIIU"
- ❌ "Falta configurar un Horario Laboral válido"
- ❌ "Falta configurar el Salario"