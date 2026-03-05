# Portafolio de Recursos Humanos: The Architectural Ledger 🏛️

Un glosario interactivo y animado de conceptos de Recursos Humanos, diseñado con una cuidada estética **Pixel Art de 16 bits**. En lugar de aburridas tarjetas, esta aplicación transforma el aprendizaje en una experiencia interactiva donde exploras una "ciudad" de 6 misteriosos edificios o facultades, cada uno representando una rama diferente de la administración y los RRHH.

![Preview Placeholder](https://via.placeholder.com/800x400.png?text=The+Architectural+Ledger)

## Características Principales

*   **Estética Pixel Art**: Gráficos generados por CSS/SVG que evocan memorias de sistemas de 16 bits.
*   **6 Edificios Únicos**:
    1.  Depto. Administración (Bridgerton Clásico)
    2.  Torre Cultura (Renacimiento Biológico)
    3.  Economía Inn (Art Deco)
    4.  Diversidad Loft (Industrial)
    5.  Seguridad Hospital (Tudor Madera)
    6.  Sinergia Suites (Moderno Wrought Iron)
*   **Tarjetas Interactivas "Flashcards"**: Las "ventanas" de los hoteles actúan como tarjetas. Al hacer clic, las contraventanas se abren con una animación CSS, encendiendo la luz y revelando una definición en un cuadro de diálogo clásico estilo RPG.
*   **Ciclo Día/Noche (Modo Oscuro)**: Alterna entre el Sol y la Luna. Cambia la atmósfera completa de la aplicación, apagando el escenario y encendiendo las estrellas.
*   **Naturaleza Viva (Animaciones CSS Vivas)**:
    *   Un Pájaro pixelado que migra y se posa aleatoriamente de letrero en letrero.
    *   Una Abeja recolectora que busca sin descanso las macetas en las ventanas de los edificios.
    *   Un misterioso OVNI cósmico en el fondo celeste.
*   **Lectura Dinámica de Datos**: Todo el ecosistema de palabras está controlado a través del archivo `/public/conceptos.json`.

## Tecnologías Empleadas

Este sistema fue desarrollado primando la velocidad, la accesibilidad y el mínimo uso de paquetes pesados:

*   [**Astro.js**](https://astro.build/): El framework web que potencia la estructura modular y ultrarrápida.
*   [**Tailwind CSS**](https://tailwindcss.com/): Todo el estilizado de interfaces, grid de edificios, tooltips interactivos y paleta de colores es renderizado usando utilidades al vuelo.
*   **Vanilla JavaScript**: Las lógicas del OVNI, vuelo de animales, pop-ups estilo RPG y el Theme Toggle operan independientemente de otros frameworks, ejecutando scripts en línea altamente eficientes.
*   **Inline SVG**: Las fachadas, pájaros, estrellas, abejas y mampostería se generan sobre la marcha utilizando fondos SVG `data:image` codificados, eliminando completamente latencias por cargas de imágenes externas pesadas.

## Despliegue Local

Para correr este proyecto en tu entorno local:

1. Clona o descarga el repositorio.
2. Navega al directorio raíz del proyecto (`portafolio-rh/`).
3. Instala las dependencias:
   ```bash
   npm install
   ```
4. Ejecuta el entorno de desarrollo:
   ```bash
   npm run dev
   ```
5. Abre tu navegador y dirígete al localhost listado (generalmente `http://localhost:4321/`).

## Archivos Importantes

*   `src/pages/index.astro`: El "motor" principal. Contiene la ciudad, la carga de `conceptos.json`, el cuadro de diálogo RPG y la barra de navegación de hoteles inferior minimalista.
*   `src/components/Hotel.astro`: Creador avanzado de cada fachada del edificio (utilizando iteraciones de colores y detalles estructurales customizados).
*   `src/components/Window.astro`: Las tarjetas de memoria de la aplicación, programadas con cortinas animadas que se ocultan mutuamente.
*   `src/components/Ambience.astro`: Módulo que introduce el OVNI, la migración de abejas y aves, y la bóveda celeste.
*   `public/conceptos.json`: La "Base de datos" completa del proyecto. Simplemente añade entradas para generar ventanas automáticas en los edificios pre-creados.

## Autoría

**Elaborado por Nancy Berenice Delgado Sion.**
*Derechos Reservados © 2026*
