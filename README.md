# Recetas App

Aplicación web de recetas desarrollada con Next.js, TypeScript y Tailwind CSS que consume la API pública de DummyJSON.

## Características

- 📋 Visualización de recetas en tabla interactiva
- 🔍 Filtrado por dificultad (Easy, Medium, Hard)
- 📄 Paginación (10 recetas por página)
- 📱 Diseño responsive con menú hamburguesa en móvil
- 🎯 Página de detalle con ingredientes, instrucciones y valoraciones
- ⚡ Server Components y Server Actions de Next.js
- 🎨 Estilizado con Tailwind CSS

## Tecnologías

- **Next.js 16** - Framework React
- **TypeScript** - Tipado estático
- **Axios** - Cliente HTTP
- **Tailwind CSS** - Framework de estilos
- **React Context** - Gestión de estado global

## Requisitos Previos

- Node.js 18+
- pnpm (gestor de paquetes)

## Instalación

1. Clonar el repositorio:

```bash
git clone <repository-url>
cd next-tech-task
```

2. Instalar dependencias:

```bash
pnpm install
```

3. El archivo de variables de entorno `.env.local` ya está configurado con:

```bash
NEXT_PUBLIC_API_BASE_URL=https://dummyjson.com/recipes
```

## Uso

### Desarrollo

Ejecutar el servidor de desarrollo:

```bash
pnpm dev
```

La aplicación estará disponible en [http://localhost:3000](http://localhost:3000)

## Funcionalidades

### Página Principal

- **Navbar**: Logo, búsqueda (no funcional) y botón de login (no funcional)
- **Sidebar**: Filtros de dificultad (All, Easy, Medium, Hard)
- **Tabla**: Información de recetas con columnas de nombre, cocina, tiempos, raciones y dificultad
- **Paginación**: 10 recetas por página
- **Footer**: Información del desarrollador

### Página de Detalle

- Información completa de la receta
- Lista de ingredientes
- Instrucciones paso a paso
- Valoración y número de reviews
- Botón para volver a la lista

### Responsive Design

- **Desktop**: Sidebar fijo a la izquierda
- **Mobile/Tablet**: Menú hamburguesa con overlay

## Patrones de Diseño

- **Container/Presentational Pattern**: Separación de lógica y presentación en componentes
- **Provider Pattern**: Context API para estado global del filtro
- **Server Actions**: Fetching de datos server-side con Axios

## API

La aplicación consume la API pública de DummyJSON:

- `GET /recipes` - Obtener todas las recetas
- `GET /recipes/{id}` - Obtener receta por ID

Documentación: [https://dummyjson.com/docs/recipes](https://dummyjson.com/docs/recipes)

## Desarrollador

**Julio González** - 2026
