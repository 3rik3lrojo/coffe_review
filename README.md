# ☕ Coffee Review

Registro de cafés con almacenamiento correcto de fechas sin problemas de zona horaria.

---

## 🧠 Modelo de fecha

Se guardan tres campos:

- `fechaHoraLocal` → lo que introduce el usuario (hora España)
- `fechaHoraUTC` → fecha en UTC (para cálculos)
- `timezone` → "Europe/Madrid"

Esto evita errores con horario de verano (DST).

---

## ⚙️ Requisitos

- Node.js
- MongoDB local

---

## 🚀 Instalación

### 1. Clonar repo

```bash
git clone <repo>
cd coffe_review
