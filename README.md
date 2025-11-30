# IED Kennedy - Aplicación Web para Asistencia y Uniformes

IED_KENNEDY_SAMPLEAPP es una aplicación web full-stack diseñada para gestionar la asistencia y el control de uniformes de estudiantes de manera interactiva. Cuenta con un **frontend** desarrollado en React.js y un **backend** implementado con Node.js y Express, comunicados mediante una API REST documentada con Swagger.


## Tecnologías utilizadas

- **Frontend:** React.js (Hooks, Context API, React Router, Axios)  
- **Backend:** Node.js, Express.js  
- **Documentación API:** Swagger (OpenAPI)  

## Estructura del proyecto

- **frontend/`**: Código fuente del frontend en React.js  
- **backend/`**: Código fuente del backend en Node.js con API REST  
- **IED_Kennedy_APA7_Document.docx`**: Documento en formato Word con definiciones y ejemplos bajo formato APA 7

## Ejecutar localmente
### Backend
cd backend
npm install
npm start
La API estará disponible en: http://localhost:4000
Documentación Swagger: http://localhost:4000/api-docs

### Frontend
cd frontend
npm install
npm start
La aplicación se ejecutará en: http://localhost:3000/panel
Nota: Configurar proxy o URL del API en .env si es necesario para conectar frontend y backend.

## Publicar en GitHub
1. Crear repositorio en GitHub.
2. git init
3. git add .
4. git commit -m "Initial commit"
5. git branch -M main
6. git remote add origin https://github.com/<usuario>/<repo>.git
7. git push -u origin main

Este repositorio es un ejemplo educativo; para producción se requiere validación, seguridad, autenticación y almacenamiento persistente.

Para más información, revisar el documento IED_Kennedy_APA7_Document.docx.
