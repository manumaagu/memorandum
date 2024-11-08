# DEMO Streaming Application

## Descripción
Este proyecto es una aplicación React basada en la estructura vista en las imágenes proporcionadas. La aplicación incluye una página de inicio, una página de series y una página de películas. Cada página muestra una lista de series o películas según lo especificado en el archivo JSON proporcionado.

## Estructura de la Aplicación
La aplicación se compone de los siguientes componentes principales:
- **Header**: Contiene la navegación principal y muestra el título de la página.
- **HomePage**: Página de inicio que enlaza a las secciones de series y películas.
- **SeriesPage**: Página que muestra una lista de series filtradas y ordenadas.
- **MoviesPage**: Página que muestra una lista de películas filtradas y ordenadas.
- **Card**: Componente reutilizable para mostrar cada elemento (serie o película).
- **Footer**: Pie de página con enlaces y botones de redes sociales.

## Instrucciones de Configuración/Ejecución
1. Clona el repositorio en tu máquina local:
```bash
    git clone https://github.com/manumaagu/memorandum
    cd memorandum
```

2. Instala las dependencias del proyecto
```bash 
    npm install
```

3. Inicia la aplicacion en modo desarrollo:
```bash
    npm start
```

4. Ejecuta las pruebas unitarias:
```bash
    npm test
```

# Opciones Técnicas y Arquitectónicas
En cuanto al diseño se ha usado `TailwindCSS`. Es un framwork con el que ya he trabajado y con el que tengo algo de soltura. Además ofrece diseño responsive.
Para el manejo de estados y efectos se usa `React Hooks`, ya que proporcionan de forma clara y concisa de manejar la lógica de los componentes.

# Mejoras potenciales
- **Integración API:** Sustituir el archiv JSON local por una integración con una API real para datos dinámicos.
- **Mejoras en la UI/UX:** Trabajar en una mejor animación y transición entre páginas para una experiencia más fluida.

# Más tiempo
- **Paginación:** Implementar paginación para mostrar más de 20 elementos.
- **Búsqueda y filtro:** Añadir filtros para buscar las películas o series que queramos.
- **Optimización de imágenes:** Añadir carga diferida para mejorar el rendimiento.
- **Más pruebas:** Ampliar las pruebas unitarias para garantizar un comportamiento más robusto.
