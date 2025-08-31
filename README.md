# Atlantis Telkoms Website

## Overview

This is a modern, responsive business website for Atlantis Telkoms, an ICT and AI innovation company. The application is built as a full-stack web application with a React frontend and Express backend, featuring a professional design with animations, contact forms, and service showcases.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

The application follows a monorepo structure with clear separation between client, server, and shared code:

- **Frontend**: React with TypeScript, using Vite as the build tool
- **Backend**: Express.js server with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Styling**: Tailwind CSS with shadcn/ui components
- **State Management**: TanStack Query for server state
- **Routing**: Wouter for client-side routing

## Key Components

### Frontend Architecture
- **Component Library**: Built on shadcn/ui with Radix UI primitives
- **Styling**: Tailwind CSS with custom design system and animations
- **Animations**: Framer Motion for smooth transitions and interactions
- **Form Handling**: React Hook Form with Zod validation
- **Icons**: Lucide React and React Icons
- **Routing**: Wouter for client-side routing with dedicated About page

### Backend Architecture
- **Web Framework**: Express.js with TypeScript
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Validation**: Zod schemas shared between frontend and backend
- **Development**: Hot reload with Vite integration in development mode

### Database Schema
- **Contacts Table**: Stores contact form submissions with fields for name, email, phone, service, and message
- **Storage Interface**: Abstracted storage layer with in-memory implementation for development

### UI Components
The application uses a comprehensive set of reusable UI components including:
- Forms (Input, Textarea, Select, Button)
- Layout components (Card, Separator, Accordion)
- Feedback components (Toast, Alert, Loading Screen)
- Navigation components (Navbar with smooth scrolling)

## Data Flow

1. **Contact Form Submission**: 
   - Frontend validates form data using Zod schema
   - Data is sent to `/api/contact` endpoint
   - Backend validates and stores contact information
   - Success/error feedback displayed via toast notifications

2. **Page Navigation**:
   - Multi-page application with smooth scrolling between sections on home page
   - Dedicated About page with comprehensive team information
   - Navbar highlights active section/page and handles cross-page navigation

3. **Content Management**:
   - Static content managed through React components
   - Team profiles with professional photos and detailed descriptions
   - Dynamic styling with Tailwind CSS custom properties
   - Responsive design with mobile-first approach

## External Dependencies

### Frontend Dependencies
- **UI Framework**: React 18 with TypeScript
- **Component Library**: Radix UI primitives with shadcn/ui
- **Styling**: Tailwind CSS with PostCSS
- **Animation**: Framer Motion
- **HTTP Client**: TanStack Query with native fetch
- **Form Management**: React Hook Form with Hookform Resolvers
- **Validation**: Zod with drizzle-zod integration

### Backend Dependencies
- **Database**: Neon serverless PostgreSQL
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Session Management**: connect-pg-simple for PostgreSQL sessions
- **Utilities**: Date-fns for date handling

### Development Tools
- **Build Tool**: Vite with React plugin
- **Development**: tsx for TypeScript execution
- **Database Migration**: Drizzle Kit
- **Linting**: TypeScript compiler for type checking

## Deployment Strategy

### Development Environment
- **Development Server**: Vite dev server with HMR
- **Backend**: tsx for running TypeScript directly
- **Database**: Uses DATABASE_URL environment variable
- **Hot Reload**: Integrated Vite middleware in Express for seamless development

### Production Build
- **Frontend**: Vite builds to `dist/public` directory
- **Backend**: esbuild bundles server code to `dist/index.js`
- **Static Assets**: Served directly by Express in production
- **Database Migrations**: Managed through Drizzle Kit

### Environment Configuration
- **Database**: PostgreSQL connection via DATABASE_URL
- **Session Management**: PostgreSQL-backed sessions
- **Static Files**: Served from built frontend in production

