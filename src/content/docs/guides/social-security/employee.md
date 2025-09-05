---
title: Empleado
description: A guide in my new Starlight docs site.
---

## 👥 **2. CONFIGURACIÓN DE EMPLEADOS**

### **Ubicación:** Empleados → Empleados → Seleccionar Empleado

### **A. Datos Básicos del Empleado:**
- ✅ **Tipo de Cotizante DIAN:** `employee_type_dian`
- ✅ **Subtipo de Cotizante DIAN:** `employee_subtype_dian`

### **B. Contacto Privado (Dirección Privada):**

#### **Ubicación:** En el empleado → Pestaña "Información Privada" → Dirección

#### **Campos Obligatorios:**
- ✅ **Tipo de Documento:** Debe tener código DIAN válido (12=TI, 13=CC, 21=CE, etc.)
- ✅ **Número de Documento:** Cédula/documento de identidad
- ✅ **Ubicación (Ciudad):** Debe tener código DANE configurado
- ✅ **Nombres y Apellidos:** Primer nombre, segundo nombre, primer apellido, segundo apellido

### **Tipos de Cotizante DIAN más comunes:**
| Código | Descripción |
|--------|-------------|
| 01 | Empleado |
| 02 | Obrero |
| 03 | Pensionado por vejez |
| 12 | Aprendiz SENA (etapa lectiva) |
| 19 | Aprendiz SENA (etapa productiva) |
| 21 | Estudiante |
| 23 | Docente |

### **Subtipos de Cotizante comunes:**
| Código | Descripción |
|--------|-------------|
| 00 | Sin subtipo |
| 01 | Asociado |
| 03 | Cooperado |
| 09 | Pensionado con mesada ≥ 25 SMLMV |
| 10 | Residente en el exterior |

### **Validaciones que evitarás:**
- ❌ "Falta configurar el Tipo de Cotizante DIAN"
- ❌ "Falta configurar el Subtipo de Cotizante DIAN"
- ❌ "Falta configurar un Tipo de Documento válido con código DIAN"
- ❌ "Falta configurar la Ubicación con Código DANE válido"