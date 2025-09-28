# Overview

This is a manufacturing company landing page built as a full-stack web application. The site showcases Onyx Industries, a 3D printing and precision manufacturing company. It features a modern, responsive design with multiple sections including hero, services, testimonials, and a contact form. The application uses a React frontend with a Node.js/Express backend and includes a contact form submission system.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **React with TypeScript**: Modern component-based architecture using functional components and hooks
- **Shadcn/ui Component Library**: Pre-built, accessible UI components with Radix UI primitives
- **Tailwind CSS**: Utility-first CSS framework for styling with custom design tokens
- **TanStack Query**: Client-side data fetching and state management for API calls
- **Wouter**: Lightweight client-side routing library
- **Vite**: Fast development server and build tool with HMR support

## Backend Architecture
- **Express.js**: Minimalist web framework for Node.js handling API routes
- **TypeScript**: Type-safe server-side development
- **In-Memory Storage**: Simple storage implementation using Maps for development/demo purposes
- **RESTful API**: Clean API design with proper HTTP status codes and error handling
- **Validation**: Zod schema validation for form data with detailed error messages

## Component Structure
- **Single Page Application**: All content on one scrollable page with smooth navigation
- **Section-based Layout**: Modular components for hero, services, testimonials, contact, etc.
- **Responsive Design**: Mobile-first approach with breakpoint-specific styling
- **Interactive Elements**: Smooth scrolling navigation, hover effects, and form interactions

## Data Management
- **Contact Forms**: Structured data collection with validation and error handling
- **Schema Validation**: Type-safe data models using Drizzle-Zod for both frontend and backend
- **Shared Types**: Common type definitions in `/shared` directory for consistency

## Development Features
- **Hot Module Replacement**: Fast development workflow with instant updates
- **TypeScript Paths**: Clean import paths with @ aliases
- **Error Handling**: Comprehensive error boundaries and user-friendly error messages
- **Toast Notifications**: User feedback for form submissions and actions

# External Dependencies

## Database
- **Drizzle ORM**: Type-safe SQL query builder and schema management
- **PostgreSQL**: Configured for production database (currently using in-memory storage for development)
- **Neon Database**: Cloud PostgreSQL provider integration

## UI Framework
- **Radix UI**: Headless, accessible component primitives
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Icon library with consistent styling
- **Class Variance Authority**: Component variant management

## Development Tools
- **Vite**: Build tool with development server
- **ESBuild**: Fast JavaScript bundler for production builds
- **PostCSS**: CSS processing with Tailwind and Autoprefixer
- **TypeScript**: Static type checking and compilation

## Third-party Services
- **Google Fonts**: Custom typography (Inter, DM Sans, Fira Code, Geist Mono)
- **Unsplash**: Stock photography for hero and section images
- **Replit Integration**: Development environment plugins for error handling and debugging