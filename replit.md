# Cottage Olga - Mountain Retreat Rental Website

## Overview

This is a single-property vacation rental website for "Cottage Olga," a mountain retreat located in Terchová, Slovakia near the Malá Fatra mountains. The site is designed to showcase the property with immersive imagery and provide booking information for potential guests. The cottage offers year-round accommodation with 20+ beds across two distinct sections (original and new annex).

The project follows a full-stack TypeScript architecture with a React frontend and Express backend, using the Replit development workflow.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight React router)
- **Styling**: Tailwind CSS with shadcn/ui component library (New York style)
- **State Management**: TanStack React Query for server state
- **Build Tool**: Vite with hot module replacement

The frontend follows a component-based architecture with:
- Pages in `client/src/pages/`
- Reusable UI components in `client/src/components/ui/` (shadcn/ui primitives)
- Custom hooks in `client/src/hooks/`
- Utility functions in `client/src/lib/`

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Server**: Node.js with tsx for development
- **API Pattern**: RESTful endpoints prefixed with `/api`
- **Build**: esbuild for production bundling

The backend uses a modular structure:
- `server/index.ts` - Main entry point with middleware setup
- `server/routes.ts` - API route definitions
- `server/storage.ts` - Data access layer with interface abstraction
- `server/vite.ts` - Vite dev server integration
- `server/static.ts` - Static file serving for production

### Data Layer
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema**: Defined in `shared/schema.ts` using Drizzle table definitions
- **Validation**: Zod schemas generated from Drizzle schemas via drizzle-zod
- **Storage Abstraction**: IStorage interface allows swapping between MemStorage (development) and database implementations

### Design System
The project includes detailed design guidelines (`design_guidelines.md`) specifying:
- Typography using Inter/Google Fonts
- Tailwind spacing conventions (4, 8, 12, 16, 20, 24 units)
- Page structure with hero section, introduction, accommodation overview, and photo gallery
- Responsive grid patterns for different screen sizes

## External Dependencies

### Database
- **PostgreSQL**: Primary database (configured via `DATABASE_URL` environment variable)
- **Drizzle Kit**: Database migrations and schema push (`db:push` script)

### UI Component Libraries
- **shadcn/ui**: Complete component library with Radix UI primitives
- **Radix UI**: Accessible component primitives (dialog, accordion, tabs, etc.)
- **Lucide React**: Icon library

### Frontend Libraries
- **TanStack React Query**: Data fetching and caching
- **React Hook Form + Zod**: Form handling with validation
- **Embla Carousel**: Image carousel functionality
- **date-fns**: Date manipulation
- **class-variance-authority**: Component variant management
- **tailwind-merge + clsx**: Utility class merging

### Development Tools
- **Vite**: Frontend build tool with HMR
- **tsx**: TypeScript execution for Node.js
- **esbuild**: Production bundling for server
- **Replit plugins**: Runtime error overlay, cartographer, dev banner