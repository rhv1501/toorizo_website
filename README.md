# Toorizo - Premium Travel Experience Platform

> A sophisticated travel booking platform specializing in South Indian destinations with curated packages for honeymoons, families, and groups.

## 🌟 Overview

Toorizo is a modern, responsive travel website built with React and TypeScript, offering premium travel experiences across South India's most beautiful destinations. The platform features an elegant design with comprehensive package management, dynamic routing, and intelligent contact form prefilling.

## ✨ Key Features

### 🏖️ **Destination Management**

- **6 Major Destinations**: Ooty, Coorg, Kodaikanal, Chikmagalur, Wayanad, Mysore
- **Dynamic Routing**: Individual package pages for each destination
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Interactive UI**: Hover effects, smooth transitions, and modern animations

### 📦 **Package System**

- **3 Package Types**: Honeymoon, Family, and Group (10+ people)
- **Detailed Information**: Features, inclusions, duration for each package
- **Smart Navigation**: Seamless flow from destinations to packages to contact
- **No Pricing Display**: Focus on experience quality over cost

### 📞 **Intelligent Contact System**

- **Auto-prefilled Forms**: Contact forms automatically populate with destination and package details
- **Dynamic Messages**: Context-aware inquiry messages based on user selection
- **Multiple Inquiry Types**: Custom packages, general booking, travel information
- **Form Validation**: Email and phone number validation with user-friendly error messages

### 🎨 **UI/UX Excellence**

- **Modern Design**: Clean, professional aesthetic with golden accent color
- **Accessibility**: Proper ARIA labels, keyboard navigation, screen reader support
- **Loading States**: Suspense-based lazy loading with elegant loading spinners
- **Responsive Navigation**: Adaptive header with mobile-friendly menu

## 🛠️ Tech Stack

### **Frontend**

- **React 18** - Modern React with hooks and functional components
- **TypeScript** - Type-safe development with full IntelliSense
- **Vite** - Lightning-fast build tool and development server
- **React Router Dom** - Client-side routing with lazy loading

### **Styling**

- **Tailwind CSS** - Utility-first CSS framework
- **Shadcn/ui** - High-quality React components
- **Radix UI** - Accessible component primitives
- **Lucide React** - Beautiful, customizable icons

### **State Management & Utils**

- **TanStack Query** - Powerful data fetching and caching
- **React Hook Form** - Performant, flexible form management
- **Sonner** - Elegant toast notifications
- **Class Variance Authority** - Type-safe component variants

## 🏗️ Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── ui/              # Shadcn/ui components
│   ├── Header.tsx       # Navigation header with responsive design
│   ├── Footer.tsx       # Site footer with links
│   ├── ContactForm.tsx  # Intelligent contact form
│   ├── Layout.tsx       # Page layout wrapper
│   └── ...
├── pages/               # Route components (lazy loaded)
│   ├── HomePage.tsx     # Landing page with hero and destinations
│   ├── DestinationsPage.tsx    # Destinations overview
│   ├── PackagesPage.tsx         # Packages overview
│   ├── DestinationPackagesPage.tsx  # Individual destination packages
│   ├── ContactUsPage.tsx        # Contact page
│   └── ...
├── hooks/               # Custom React hooks
├── services/            # API services and external integrations
├── utils/               # Utility functions and helpers
└── lib/                 # Configuration and setup
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18+ and npm
- **Git** for version control

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/toorizo.git

# Navigate to project directory
cd toorizo

# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Scripts

```bash
# Development server with HMR
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run TypeScript type checking
npm run type-check

# Lint code
npm run lint
```

## 🎯 Key Functionality

### **Smart Routing System**

```typescript
// Dynamic destination routing
/packages/:destination  // e.g., /packages/ooty, /packages/coorg

// Automatic parameter handling
const { destination } = useParams();
```

### **Intelligent Form Prefilling**

```typescript
// URL parameter-based form prefilling
/contact-us?destination=Ooty&package=Honeymoon%20Package&duration=3-5%20Days

// Automatic message generation
"I am interested in the Honeymoon Package for Ooty. Duration: 3-5 Days.
Please provide more details and help me with the booking process."
```

### **Performance Optimization**

- **Code Splitting**: Pages lazy loaded for optimal performance
- **Chunk Optimization**: Vendor dependencies split into logical chunks
- **Image Optimization**: Responsive images with lazy loading
- **Bundle Analysis**: Build warnings eliminated with manual chunking

## 🔧 Configuration

### **Vite Configuration**

```typescript
// Optimized build with manual chunking
manualChunks: {
  'react-vendor': ['react', 'react-dom', 'react-router-dom'],
  'ui-vendor': ['@radix-ui/*', 'lucide-react'],
  'utils-vendor': ['clsx', 'tailwind-merge', 'class-variance-authority']
}
```

### **Tailwind Customization**

```css
// Custom brand colors and utilities
.toorizo-gold: #d4af37
.toorizo-dark: #2c2c2c
.toorizo-cream: #faf9f6
```

## 📱 Responsive Design

- **Mobile First**: Designed for mobile, enhanced for larger screens
- **Breakpoints**: Optimized for all device sizes (sm, md, lg, xl)
- **Touch Friendly**: Large touch targets and swipe gestures
- **Performance**: Optimized images and lazy loading

## 🔐 SEO & Accessibility

- **Semantic HTML**: Proper heading hierarchy and semantic elements
- **Meta Tags**: Dynamic meta tags for each page
- **Alt Text**: Descriptive alt text for all images
- **Keyboard Navigation**: Full keyboard accessibility
- **Screen Readers**: ARIA labels and descriptions

## 🚀 Deployment

### **Production Build**

```bash
npm run build
# Generates optimized static files in /dist
```

### **Deployment Options**

- **Vercel**: Zero-config deployment with GitHub integration
- **Netlify**: Automatic builds with branch previews
- **AWS S3 + CloudFront**: Scalable CDN deployment
- **Docker**: Containerized deployment for any cloud platform

## 🤝 Contributing

We welcome contributions! Please see our contributing guidelines:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For support, email support@toorizo.com or create an issue in this repository.

---

**Built with ❤️ by the Rudresh Vyas & Manoj V**
