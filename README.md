# ¿Me perdonas? 🌻

Página interactiva con tarjeta de "perdón", botón "No" escurridizo y una sorpresa con un girasol animado en CSS puro.

## Estructura del proyecto

```
.
├── index.html   → estructura HTML
├── style.css    → estilos y animaciones
└── app.js       → lógica interactiva (botón escurridizo, transición, redirección a WhatsApp)
```

## Cómo publicarlo en GitHub Pages

1. Crea un repositorio nuevo en GitHub (público).
2. Sube estos 3 archivos (`index.html`, `style.css`, `app.js`) a la raíz del repositorio.
3. Ve a **Settings → Pages**.
4. En "Branch", selecciona `main` (o la rama donde subiste los archivos) y la carpeta `/ (root)`.
5. Guarda. GitHub te dará una URL como:
   `https://tu-usuario.github.io/nombre-del-repo/`
6. Espera 1-2 minutos y abre el enlace. ¡Listo!

## Personalización

- **Texto y emojis**: edita directamente en `index.html`.
- **Colores y animaciones**: edita `style.css`.
- **Número y mensaje de WhatsApp**: edita la constante `WHATSAPP_URL` en `app.js`.
