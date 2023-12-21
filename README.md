# Integración de Jenkins con Cypress para pruebas automatizadas en GitHub Pages

## Resumen

Este documento detalla los pasos necesarios para integrar Jenkins con Cypress con el fin de realizar pruebas automatizadas en una página estática alojada en GitHub Pages utilizando el framework de pruebas end-to-end Cypress.

## Requisitos previos

- Acceso a un servidor Jenkins
- Repositorio de GitHub con la página estática alojada en GitHub Pages
- Conocimientos básicos de Jenkins y Cypress

## Pasos para la integración

### 1. Configuración del entorno local

- Asegúrate de tener Node.js instalado en tu máquina.
- Inicializa un nuevo proyecto Node.js ejecutando el siguiente comando en tu terminal:

  ```bash
  npm init -y
  
- Instala Cypress ejecutando el siguiente comando en tu terminal:

  ```bash
  npm install --save-dev cypress@9.7.0

### 2. Configuración de las pruebas en Cypress

- Crea archivos de prueba Cypress en el directorio `/cypress/integration` con nombres que terminen en `.spec.js` para realizar pruebas en la página estática de GitHub Pages.
- Asegúrate de que tus pruebas estén funcionando localmente antes de integrarlas con Jenkins.

#### Ejemplo de test en Cypress:

```javascript
// Ejemplo de un test básico en Cypress
context('Nombre del escenario de pruebas', () => {
    beforeEach(() => {
        cy.visit('/');
    })
    
    it('Test #1', () => {
        // Ejemplo de una aserción básica
        expect(true).to.equal(true);
    })
})
```
#### Configuración de Cypress en el archivo package.json:

```json
{
  "name": "practicacorriendoenjenkins",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "test",
    "cypress:open": "cypress open",
    "cypress:runDefault": "cypress run",
    "cypress:chrome": "cypress run --browser chrome",
    "cypress:edge": "cypress run --browser edge"
  },
  "keywords": [
    "e2e",
    "automation",
    "framework",
    "cypress"
  ],
  "author": "Maria del Mar Serra",
  "license": "ISC",
  "devDependencies": {
    "cypress": "^9.7.0"
  }
}
```

- En este ejemplo, se han agregado scripts útiles para trabajar con Cypress:
  - "cypress:open": Abre la interfaz de usuario de Cypress.
  - "cypress:runDefault": Ejecuta las pruebas Cypress en modo headless (sin interfaz gráfica).
  - "cypress:chrome": Ejecuta las pruebas Cypress específicamente en el navegador Chrome.
  - "cypress:edge": Ejecuta las pruebas Cypress específicamente en el navegador Edge.
  - Estos scripts pueden ser ejecutados desde la línea de comandos para realizar diferentes acciones, como correr pruebas en un navegador específico, ejecutar pruebas en modo headless, entre otros.
- Asegúrate de que tu repositorio de GitHub tenga un archivo de configuración `cypress.json` con la configuración adecuada para las pruebas de Cypress.

### 3. Configuración de repositorio local y repositorio remoto
- Crea un archivo .gitignore para evitar que la carpeta node_modules se vincule al repositorio remoto. Puedes crear este archivo manualmente y en el agregar: node_modules/
  
- Realiza los pasos habituales para vincular tu repositorio local con un repositorio remoto en GitHub:
  - Inicializa un repositorio local con 
  ```bash
  git init
  ```
  
  
  - Agrega los archivos al área de preparación con 
  ```bash
  git add .
  ```

  
  - Realiza un commit inicial con 
  ```bash
  git commit -m "Primer commit"
  ```

  
  - Conecta tu repositorio local a un repositorio remoto en GitHub con 
  ```bash
  git remote add origin URL_DEL_REPOSITORIO
  ```

  
  - Finalmente, haz el push de tus archivos al repositorio remoto en GitHub con 
  ```bash
  git push -u origin main
  ```

  
  (esto asume que estás trabajando en la rama 'main'). Asegúrate de reemplazar URL_DEL_REPOSITORIO con la URL de tu repositorio en GitHub.-

### 4. Configuración de Jenkins

- Abre tu servidor Jenkins y crea un nuevo trabajo de estilo libre para el proyecto.
- Puedes establecer un directorio de trabajo personalizado:
  - En la sección "General" o "Avanzado", busca la configuración para "Utilizar directorio de trabajo personalizado".
  - Ingresa la dirección de tu repositorio local en donde quieras que se construya tu proyecto, por ejemplo: `D:\Cypress\JenkinsDirectory`.
- En la sección "General" o "Origen del código fuente", selecciona Git como el origen del código fuente.
  - Agrega el enlace al repositorio de GitHub en el campo de URL del repositorio. Si el repositorio es público, no es necesario agregar credenciales.
  - En la sección "Ramas a construir" o "Branches to build", establece la rama principal (* / main) que es la rama predeterminada de GitHub para construir el proyecto.
- Define los pasos del trabajo de Jenkins para clonar el repositorio, instalar dependencias y ejecutar pruebas de acuerdo con tus necesidades.
