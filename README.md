# Developer Portfolio

![App Preview](https://imgix.cosmicjs.com/69022b90-3c31-11f1-9a36-6beee623c5b3-autopilot-photo-1677442136019-21780ecad995-1776631833791.jpeg?w=1200&h=630&fit=crop&auto=format,compress)

A stunning developer portfolio with 3D animated shapes, built with Next.js 16 and Cosmic CMS.

## Features
- 🎭 Interactive 3D animated shapes using Three.js
- 💼 Dynamic project showcase with screenshots
- 🛠️ Skills organized by category with proficiency levels
- 🏢 Work experience timeline
- 📧 Contact form with email integration
- 🌙 Beautiful dark theme with gradient effects
- 📱 Fully responsive design

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=69e53fab1e803e708f6ac411&clone_repository=69e540d21e803e708f6ac48a)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create content models for a developer portfolio with projects (including screenshots, tech stack, and live URLs), skills, and work experience.
>
> User instructions: A developer portfolio with projects, skills, work experience, and contact info with email contact with vistor and i want 3d anmited shape as a progremeer website"

### Code Generation Prompt

> Build a Next.js application for a creative portfolio called "My Portfolio". The content is managed in Cosmic CMS with the following object types: projects, skills, work-experience, profile. Create a beautiful, modern, responsive design with a homepage and pages for each content type. A developer portfolio with projects, skills, work experience, and contact info with email contact with visitor and I want 3d animated shape as a programmer website.

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies
- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS
- Three.js / React Three Fiber
- Cosmic CMS SDK
- Resend (Email)

## Getting Started

### Prerequisites
- Bun installed
- Cosmic account with bucket configured

### Installation
```bash
bun install
bun run dev
```

## Cosmic SDK Examples

```typescript
// Fetch all projects with tech stack
const { objects } = await cosmic.objects
  .find({ type: 'projects' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)
```

## Cosmic CMS Integration
This app integrates with 4 object types: projects, skills, work-experience, and profile.

## Deployment Options
Deploy to Vercel or Netlify with environment variables configured.

<!-- README_END -->