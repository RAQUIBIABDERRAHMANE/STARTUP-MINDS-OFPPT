# STARTUP MINDS - OFPPT Event Registration

![STARTUP MINDS](https://img.shields.io/badge/STARTUP-MINDS-blue?style=for-the-badge)
![Next.js](https://img.shields.io/badge/Next.js-16.1.6-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19.2.3-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)

A modern, animated landing page for the **STARTUP MINDS** event at OFPPT Campus. This website provides an elegant registration system for students to sign up for this exciting technology and innovation gathering.

## 🚀 Features

- **Beautiful Animated UI**: Smooth animations powered by Framer Motion
- **Registration Form**: Complete form validation with Zod and React Hook Form
- **Real-time Validation**: Instant feedback on form inputs
- **Webhook Integration**: Automatic submission to n8n webhook for data processing
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern Tech Stack**: Built with Next.js 16, React 19, and TypeScript
- **Dark Mode UI**: Stunning dark theme with gradient accents
- **Class Selection**: Pre-configured list of OFPPT classes (DEV, ID, WFS, IDoSR, IDoCC, IDoCS)

## 🛠️ Technology Stack

- **Framework**: [Next.js 16.1.6](https://nextjs.org/) with App Router
- **UI Library**: [React 19.2.3](https://react.dev/)
- **Language**: [TypeScript 5](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Form Management**: [React Hook Form](https://react-hook-form.com/)
- **Validation**: [Zod](https://zod.dev/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Fonts**: Geist Sans and Geist Mono from Vercel

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js 20.x or higher
- npm, yarn, pnpm, or bun package manager

## 🔧 Installation

1. **Clone the repository**
```bash
git clone https://github.com/RAQUIBIABDERRAHMANE/STARTUP-MINDS-OFPPT.git
cd STARTUP-MINDS-OFPPT
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

## 🚀 Development

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

The page will auto-reload as you edit files. Start by modifying `src/app/page.tsx`.

## 📁 Project Structure

```
STARTUP-MINDS-OFPPT/
├── src/
│   ├── app/
│   │   ├── actions.ts          # Server actions for form submission
│   │   ├── globals.css         # Global styles
│   │   ├── layout.tsx          # Root layout component
│   │   └── page.tsx            # Main landing page
│   ├── components/
│   │   ├── ClientWrapper.tsx   # Client-side wrapper for animations
│   │   └── RegistrationForm.tsx # Main registration form component
│   └── lib/
│       └── utils.ts            # Utility functions
├── public/                     # Static assets
├── package.json               # Project dependencies
├── next.config.ts            # Next.js configuration
├── tsconfig.json             # TypeScript configuration
├── tailwind.config.ts        # Tailwind CSS configuration
└── README.md                 # This file
```

## 🔧 Configuration

### Webhook Configuration

The form submissions are sent to a webhook endpoint configured in `src/app/actions.ts`:

```typescript
const WEBHOOK_URL = "https://n8n.raquibi.com/webhook/bb535f86-8cbd-488a-b71e-8b0d33fae87d";
```

To change the webhook endpoint, update the `WEBHOOK_URL` constant in the `submitRegistration` function.

### Available Classes

The registration form includes the following OFPPT classes:
- **DEV Series**: DEV101-DEV110 (Development)
- **ID Series**: ID101-ID109 (Infrastructure Digitale)
- **WFS Series**: WFS201-WFS208 (Web Full Stack)
- **IDoSR Series**: IDoSR201-IDoSR205 (Infrastructure DevOps et Sécurité Réseau)
- **Special Classes**: IDoCC, IDoCS

To modify the class list, edit the `CLASSES` array in `src/components/RegistrationForm.tsx`.

## 🏗️ Build

Create an optimized production build:

```bash
npm run build
# or
yarn build
# or
pnpm build
# or
bun build
```

## 🚀 Production

Start the production server:

```bash
npm run start
# or
yarn start
# or
pnpm start
# or
bun start
```

## 🧪 Linting

Run ESLint to check for code quality issues:

```bash
npm run lint
# or
yarn lint
# or
pnpm lint
# or
bun lint
```

## 🌐 Deployment

### Deploy on Vercel

The easiest way to deploy this Next.js application is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Import your repository to Vercel
3. Vercel will automatically detect Next.js and configure the build settings
4. Click "Deploy"

For more details, check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).

### Other Platforms

This Next.js application can be deployed to any platform that supports Node.js:
- Netlify
- AWS Amplify
- DigitalOcean App Platform
- Railway
- Render

## 📝 Form Validation Schema

The registration form uses Zod for validation with the following rules:

- **Full Name**: Minimum 3 characters
- **Phone Number**: Minimum 10 characters
- **Email**: Valid email format
- **Class**: Must select from available classes

## 🎨 Customization

### Styling

The project uses Tailwind CSS with a custom dark theme. Global styles are defined in `src/app/globals.css`. The design features:
- Mesh gradient background
- Glass morphism effects
- Custom color palette with indigo/blue gradients
- Responsive design with mobile-first approach

### Animations

Animations are implemented using Framer Motion. Key animation features:
- Fade-in effects on page load
- Smooth transitions between form states
- Loading spinners
- Success/error state animations

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is part of the OFPPT Innovation Hub initiative.

## 👥 Authors

- OFPPT Innovation Hub Team
- Powered by STARTUP MINDS @ OFPPT

## 📞 Support

For support, please reach out to the OFPPT Innovation Hub team.

## 🙏 Acknowledgments

- OFPPT Campus for hosting the event
- All contributors and participants
- Next.js and React teams for the amazing frameworks
- Vercel for the fonts and deployment platform

---

**© 2026 STARTUP MINDS. Powered by OFPPT Innovation Hub.** 
