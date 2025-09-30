# PWA Weather App

A Progressive Web Application (PWA) for weather forecasting built with Next.js, React, and TypeScript. This application provides real-time weather information and forecasts for Vietnamese cities with offline capabilities.

## 🌟 Features

- **Real-time Weather Data**: Get current weather conditions and 12-hour forecasts
- **Location-based Weather**: Use GPS to get weather for your current location
- **City Search**: Search weather for major Vietnamese cities (Hanoi, Da Nang, Ho Chi Minh City)
- **Progressive Web App**: Installable on mobile devices with offline capabilities
- **Responsive Design**: Optimized for mobile and desktop viewing
- **Modern UI**: Clean, intuitive interface built with Tailwind CSS

## 🚀 Tech Stack

- **Framework**: Next.js 15.5.3 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **PWA**: next-pwa for service worker and manifest
- **Weather API**: OpenWeatherMap API
- **Build Tool**: Turbopack for faster development

## 📱 Supported Cities

The application currently supports weather data for these Vietnamese cities:
- **Hanoi** (Hà Nội)
- **Da Nang** (Đà Nẵng) 
- **Ho Chi Minh City** (Thành phố Hồ Chí Minh)

## 🛠️ Installation & Setup

### Prerequisites

- **Node.js**: Version 18.0.0 or higher
- **npm**: Version 8.0.0 or higher (comes with Node.js)
- **Git**: For cloning the repository
- **OpenWeatherMap API Key**: Free account required

### System Requirements

- **Operating System**: Windows 10+, macOS 10.15+, or Linux
- **RAM**: Minimum 4GB (8GB recommended)
- **Storage**: At least 1GB free space
- **Internet Connection**: Required for API calls and package installation

### 1. Clone the Repository

```bash
# Clone the repository
git clone https://github.com/your-username/pwa-weather-next.git

# Navigate to project directory
cd pwa-weather-next

# Verify you're in the correct directory
ls -la
```

### 2. Install Dependencies

```bash
# Install all dependencies
npm install

# Alternative: Use yarn if preferred
yarn install

# Verify installation
npm list --depth=0
```

**Expected Output:**
```
pwa-weather-next@0.1.0 D:\VCODE\pwa\pwa-weather-next
├── next@15.5.3
├── next-pwa@5.6.0
├── react@19.1.0
├── react-dom@19.1.0
└── tailwindcss@4
```

### 3. Environment Setup

Create a `.env.local` file in the root directory:

```bash
# Create environment file
touch .env.local
```

Add the following content to `.env.local`:

```env
# OpenWeatherMap API Configuration
NEXT_PUBLIC_OWM_API_KEY=your_openweathermap_api_key_here

# Optional: Development settings
NODE_ENV=development
```

**Getting OpenWeatherMap API Key:**

1. **Visit OpenWeatherMap**: Go to [https://openweathermap.org/api](https://openweathermap.org/api)
2. **Create Account**: Sign up for a free account
3. **Verify Email**: Check your email and verify your account
4. **Generate API Key**: 
   - Go to "My API Keys" section
   - Click "Generate" to create a new API key
   - Copy the generated key
5. **Add to Environment**: Paste the key in your `.env.local` file

**API Key Limits (Free Tier):**
- 1,000 calls per day
- 60 calls per minute
- Perfect for development and small projects

### 4. Verify Installation

```bash
# Check if all dependencies are installed correctly
npm run build

# If build succeeds, start development server
npm run dev
```

### 5. Run Development Server

```bash
# Start development server with Turbopack (faster builds)
npm run dev

# Alternative: Start without Turbopack
npm run dev -- --no-turbopack
```

**Expected Output:**
```
▲ Next.js 15.5.3 (turbopack)
- Local:        http://localhost:3000
- Network:      http://192.168.1.100:3000

✓ Ready in 2.3s
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## 📦 Build & Deployment

### Local Production Build

```bash
# Build the application for production
npm run build

# Expected output:
# ✓ Compiled successfully
# ✓ Linting and checking validity of types
# ✓ Collecting page data
# ✓ Generating static pages (3/3)
# ✓ Collecting build traces
# ✓ Finalizing page optimization
```

### Start Production Server Locally

```bash
# Start production server
npm start

# Expected output:
# ▲ Next.js 15.5.3
# - Local:        http://localhost:3000
# - Network:      http://192.168.1.100:3000
# ✓ Ready in 1.2s
```

The application will be available at `http://localhost:3000`

### Build Analysis

```bash
# Analyze bundle size (if @next/bundle-analyzer is installed)
npm run build -- --analyze

# Check build output
ls -la .next/
```

## 🚀 Vercel Deployment

### Prerequisites for Vercel

- **Vercel Account**: Sign up at [vercel.com](https://vercel.com)
- **GitHub Account**: For automatic deployments
- **OpenWeatherMap API Key**: Same key used locally

### Method 1: Deploy via Vercel Dashboard (Recommended)

#### Step 1: Prepare Your Repository

```bash
# Ensure your code is committed and pushed to GitHub
git add .
git commit -m "Prepare for Vercel deployment"
git push origin main
```

#### Step 2: Connect to Vercel

1. **Visit Vercel Dashboard**: Go to [vercel.com/dashboard](https://vercel.com/dashboard)
2. **Import Project**: Click "Add New..." → "Project"
3. **Import Git Repository**: Select your GitHub repository
4. **Configure Project**:
   - **Framework Preset**: Next.js (auto-detected)
   - **Root Directory**: `./` (default)
   - **Build Command**: `npm run build` (default)
   - **Output Directory**: `.next` (default)
   - **Install Command**: `npm install` (default)

#### Step 3: Environment Variables

In the Vercel dashboard:

1. **Go to Project Settings** → **Environment Variables**
2. **Add Variable**:
   - **Name**: `NEXT_PUBLIC_OWM_API_KEY`
   - **Value**: Your OpenWeatherMap API key
   - **Environment**: Production, Preview, Development (select all)

#### Step 4: Deploy

1. **Click "Deploy"**
2. **Wait for Build**: Typically takes 2-5 minutes
3. **Get Live URL**: Your app will be available at `https://your-project-name.vercel.app`

### Method 2: Deploy via Vercel CLI

#### Step 1: Install Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Verify installation
vercel --version
```

#### Step 2: Login to Vercel

```bash
# Login to your Vercel account
vercel login

# Follow the authentication process
```

#### Step 3: Deploy

```bash
# Deploy from project directory
vercel

# Follow the prompts:
# ? Set up and deploy "~/pwa-weather-next"? [Y/n] y
# ? Which scope do you want to deploy to? Your Account
# ? Link to existing project? [y/N] n
# ? What's your project's name? pwa-weather-next
# ? In which directory is your code located? ./
```

#### Step 4: Set Environment Variables

```bash
# Set environment variable
vercel env add NEXT_PUBLIC_OWM_API_KEY

# Enter your API key when prompted
# Select environments: Production, Preview, Development
```

#### Step 5: Redeploy with Environment Variables

```bash
# Redeploy to apply environment variables
vercel --prod
```

### Method 3: GitHub Integration (Automatic Deployments)

#### Step 1: Connect GitHub Repository

1. **Vercel Dashboard** → **Import Project**
2. **Select GitHub Repository**
3. **Configure Auto-Deployments**:
   - ✅ Deploy automatically when you push to `main` branch
   - ✅ Deploy previews for pull requests

#### Step 2: Configure Branch Settings

```bash
# Create vercel.json for custom configuration (optional)
touch vercel.json
```

Add to `vercel.json`:

```json
{
  "framework": "nextjs",
  "buildCommand": "npm run build",
  "outputDirectory": ".next",
  "installCommand": "npm install",
  "devCommand": "npm run dev",
  "regions": ["sin1"],
  "functions": {
    "src/app/api/**/*.ts": {
      "runtime": "nodejs18.x"
    }
  }
}
```

### Vercel Deployment Configuration

#### Custom Domain (Optional)

1. **Vercel Dashboard** → **Your Project** → **Settings** → **Domains**
2. **Add Domain**: Enter your custom domain
3. **Configure DNS**: Update your DNS records as instructed
4. **SSL Certificate**: Automatically provisioned by Vercel

#### Environment-Specific Deployments

```bash
# Deploy to preview environment
vercel

# Deploy to production
vercel --prod

# Deploy specific branch
vercel --target production
```

### Post-Deployment Verification

#### 1. Test Your Live Application

```bash
# Test the deployed application
curl https://your-project-name.vercel.app

# Check PWA manifest
curl https://your-project-name.vercel.app/manifest.json

# Verify service worker
curl https://your-project-name.vercel.app/service-worker.js
```

#### 2. PWA Testing

- **Mobile**: Open in mobile browser and test "Add to Home Screen"
- **Desktop**: Test installation prompt in Chrome/Edge
- **Offline**: Test offline functionality
- **Performance**: Use Lighthouse to test PWA score

#### 3. Monitor Deployment

```bash
# Check deployment logs
vercel logs

# View deployment status
vercel ls

# Get deployment URL
vercel inspect
```

### Troubleshooting Vercel Deployment

#### Common Issues and Solutions

**Build Failures:**
```bash
# Check build logs in Vercel dashboard
# Common fixes:
npm run build  # Test locally first
```

**Environment Variables Not Working:**
```bash
# Verify environment variables are set
vercel env ls

# Redeploy after adding variables
vercel --prod
```

**PWA Not Working:**
- Ensure `next-pwa` is properly configured
- Check that `manifest.json` is accessible
- Verify service worker is generated

**API Rate Limits:**
- Monitor OpenWeatherMap API usage
- Consider upgrading API plan for production

### Performance Optimization for Vercel

#### 1. Enable Edge Functions (Optional)

```javascript
// next.config.js
module.exports = {
  experimental: {
    runtime: 'edge',
  },
}
```

#### 2. Optimize Images

```javascript
// next.config.js
module.exports = {
  images: {
    domains: ['openweathermap.org'],
    formats: ['image/webp', 'image/avif'],
  },
}
```

#### 3. Enable Compression

Vercel automatically enables gzip compression, but you can optimize further:

```javascript
// next.config.js
module.exports = {
  compress: true,
  poweredByHeader: false,
}
```

## 🔧 Available Scripts

### Development Scripts

| Script | Command | Description | Usage |
|--------|---------|-------------|-------|
| **Development** | `npm run dev` | Start development server with Turbopack | Local development |
| **Build** | `npm run build` | Build application for production | Production deployment |
| **Start** | `npm start` | Start production server | Run built application |

### Script Details

#### Development Server
```bash
npm run dev
```
- **Port**: 3000 (default)
- **Features**: Hot reload, Turbopack for faster builds
- **URL**: http://localhost:3000
- **Auto-restart**: On file changes

#### Production Build
```bash
npm run build
```
- **Output**: `.next/` directory
- **Optimization**: Code splitting, minification, tree shaking
- **PWA**: Generates service worker and manifest
- **Type Checking**: Validates TypeScript

#### Production Server
```bash
npm start
```
- **Port**: 3000 (configurable)
- **Host**: 0.0.0.0 (all interfaces)
- **Features**: Optimized for production

### Additional Commands

```bash
# Check TypeScript types
npx tsc --noEmit

# Run linting (if configured)
npm run lint

# Analyze bundle size
npm run build -- --analyze

# Clean build cache
rm -rf .next

# Install dependencies
npm install

# Update dependencies
npm update
```

## 🚀 Development Workflow

### 1. Initial Setup
```bash
# Clone repository
git clone <repository-url>
cd pwa-weather-next

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your API key

# Start development server
npm run dev
```

### 2. Daily Development
```bash
# Start development server
npm run dev

# Make changes to code
# Hot reload will automatically update the browser

# Test PWA features
# Open DevTools → Application → Service Workers
# Test offline functionality
```

### 3. Testing & Quality Assurance
```bash
# Build locally to test production build
npm run build

# Start production server locally
npm start

# Test PWA installation
# Chrome: Install button in address bar
# Mobile: Add to Home Screen

# Test offline functionality
# Disable network in DevTools
# Verify cached content loads
```

### 4. Deployment Preparation
```bash
# Ensure all changes are committed
git add .
git commit -m "Feature: Add new functionality"

# Test production build
npm run build

# Push to repository
git push origin main

# Deploy to Vercel (if using GitHub integration)
# Or use Vercel CLI: vercel --prod
```

### 5. Post-Deployment Verification
```bash
# Test live application
curl https://your-app.vercel.app

# Verify PWA manifest
curl https://your-app.vercel.app/manifest.json

# Check service worker
curl https://your-app.vercel.app/service-worker.js

# Test on mobile devices
# Open in mobile browser
# Test "Add to Home Screen"
# Verify offline functionality
```

## 🛠️ Development Environment Setup

### IDE Recommendations

**VS Code (Recommended)**
```bash
# Install VS Code extensions
code --install-extension ms-vscode.vscode-typescript-next
code --install-extension bradlc.vscode-tailwindcss
code --install-extension esbenp.prettier-vscode
code --install-extension ms-vscode.vscode-eslint
```

**Useful VS Code Settings** (`.vscode/settings.json`)
```json
{
  "typescript.preferences.importModuleSpecifier": "relative",
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "tailwindCSS.includeLanguages": {
    "typescript": "typescript",
    "typescriptreact": "typescriptreact"
  }
}
```

### Browser DevTools Setup

**Chrome DevTools**
- **Application Tab**: Test PWA features, service workers, storage
- **Network Tab**: Monitor API calls, test offline mode
- **Lighthouse Tab**: Test PWA score and performance
- **Console Tab**: Debug JavaScript errors

**Mobile Testing**
- **Chrome DevTools**: Device emulation
- **Real Device**: USB debugging or remote debugging
- **PWA Testing**: Install app, test offline functionality

### Environment Management

**Development Environment**
```env
# .env.local
NEXT_PUBLIC_OWM_API_KEY=your_development_api_key
NODE_ENV=development
```

**Production Environment**
```env
# Vercel Environment Variables
NEXT_PUBLIC_OWM_API_KEY=your_production_api_key
NODE_ENV=production
```

### Git Workflow

**Branch Strategy**
```bash
# Main branch for production
git checkout main

# Feature branches for development
git checkout -b feature/new-weather-feature
git add .
git commit -m "feat: add new weather feature"
git push origin feature/new-weather-feature

# Create pull request
# Merge to main after review
```

**Commit Convention**
```bash
# Feature
git commit -m "feat: add geolocation support"

# Bug fix
git commit -m "fix: resolve API error handling"

# Documentation
git commit -m "docs: update README with deployment guide"

# Style
git commit -m "style: improve mobile responsiveness"

# Refactor
git commit -m "refactor: optimize weather API calls"
```

## 📱 PWA Features

### Installation
- **Mobile**: Add to home screen from browser menu
- **Desktop**: Install prompt will appear in supported browsers

### Offline Capabilities
- Service worker caches weather data
- App works offline with cached data
- Automatic updates when connection is restored

### App Manifest
- Standalone display mode
- Custom icons (192x192, 512x512)
- Theme colors and branding

## 🎨 UI Components

### WeatherCard
Displays current weather information including:
- City name and country
- Weather description
- Temperature (current and feels-like)
- Humidity percentage
- Wind speed

### ForecastCard
Shows 12-hour weather forecast with:
- Time stamps
- Weather conditions
- Temperature
- Precipitation probability

## 🌐 API Integration

The application integrates with OpenWeatherMap API:

- **Current Weather**: `/data/2.5/weather`
- **5-Day Forecast**: `/data/2.5/forecast`
- **Units**: Metric (Celsius)
- **Language**: English

## 📁 Project Structure

```
pwa-weather-next/
├── 📁 public/                          # Static assets (served directly)
│   ├── 📁 icons/                       # PWA application icons
│   │   ├── icon-192.png               # 192x192 icon for mobile
│   │   └── icon-512.png               # 512x512 icon for desktop
│   ├── 📄 manifest.json               # PWA manifest configuration
│   ├── 📄 service-worker.js           # Service worker for offline functionality
│   ├── 📄 next.svg                    # Next.js logo
│   ├── 📄 vercel.svg                  # Vercel logo
│   ├── 📄 file.svg                    # File icon
│   ├── 📄 globe.svg                   # Globe icon
│   └── 📄 window.svg                  # Window icon
├── 📁 src/                            # Source code directory
│   ├── 📁 app/                        # Next.js 13+ App Router
│   │   ├── 📄 layout.tsx             # Root layout component
│   │   ├── 📄 page.tsx               # Home page component
│   │   ├── 📄 globals.css            # Global CSS styles
│   │   └── 📄 favicon.ico            # Site favicon
│   ├── 📁 components/                 # Reusable React components
│   │   ├── 📄 WeatherCard.tsx        # Current weather display component
│   │   └── 📄 ForeCastCard.tsx       # Weather forecast display component
│   ├── 📁 lib/                        # Utility functions and configurations
│   │   └── 📄 weather.ts             # Weather API integration functions
│   └── 📁 public/                     # Additional public assets (if any)
├── 📄 .env.local                      # Environment variables (not in git)
├── 📄 .gitignore                      # Git ignore rules
├── 📄 next-env.d.ts                   # Next.js TypeScript declarations
├── 📄 next.config.js                  # Next.js configuration with PWA
├── 📄 package.json                    # Project dependencies and scripts
├── 📄 package-lock.json               # Dependency lock file
├── 📄 postcss.config.mjs              # PostCSS configuration for Tailwind
├── 📄 README.md                       # Project documentation
└── 📄 tsconfig.json                   # TypeScript configuration
```

### 📋 File Descriptions

#### Core Configuration Files

| File | Purpose | Description |
|------|---------|-------------|
| `package.json` | Dependencies & Scripts | Defines project metadata, dependencies, and npm scripts |
| `next.config.js` | Next.js Config | Configures Next.js with PWA plugin and build settings |
| `tsconfig.json` | TypeScript Config | TypeScript compiler options and path mappings |
| `postcss.config.mjs` | PostCSS Config | Tailwind CSS processing configuration |

#### PWA Files

| File | Purpose | Description |
|------|---------|-------------|
| `public/manifest.json` | PWA Manifest | Defines app metadata, icons, and display settings |
| `public/service-worker.js` | Service Worker | Handles offline functionality and caching |
| `public/icons/` | App Icons | PWA icons in multiple sizes for different devices |

#### Source Code Structure

| Directory | Purpose | Contents |
|-----------|---------|----------|
| `src/app/` | App Router | Next.js 13+ app directory with pages and layouts |
| `src/components/` | React Components | Reusable UI components |
| `src/lib/` | Utilities | Helper functions, API integrations, and configurations |

#### Component Details

**WeatherCard.tsx**
- Displays current weather information
- Shows temperature, humidity, wind speed
- Includes weather description and location

**ForeCastCard.tsx**
- Displays 12-hour weather forecast
- Shows hourly temperature and precipitation
- Scrollable horizontal layout for mobile

**weather.ts**
- OpenWeatherMap API integration
- City name to ID mapping
- Error handling and data validation
- Supports both city search and geolocation

### 🔧 Configuration Breakdown

#### Next.js Configuration (`next.config.js`)
```javascript
const withPWA = require('next-pwa')({
  dest: 'public',        // Service worker output directory
  register: true,        // Auto-register service worker
  skipWaiting: true,     // Skip waiting for service worker update
});

module.exports = withPWA({
  reactStrictMode: true, // Enable React strict mode
});
```

#### PWA Manifest (`public/manifest.json`)
```json
{
  "name": "PWA Weather",
  "short_name": "Weather",
  "description": "Ứng dụng dự báo thời tiết PWA cho điện thoại",
  "start_url": "/",
  "display": "standalone",    // Full-screen app experience
  "background_color": "#ffffff",
  "theme_color": "#2563eb",   // App theme color
  "orientation": "portrait"   // Preferred orientation
}
```

#### TypeScript Configuration (`tsconfig.json`)
- Strict type checking enabled
- Path mapping for `@/` imports
- Next.js specific configurations
- ES2020 target for modern JavaScript features

### 🎯 Key Directories Explained

#### `/src/app/` - Next.js App Router
- **layout.tsx**: Root layout with metadata and global styles
- **page.tsx**: Main application page with weather search functionality
- **globals.css**: Tailwind CSS imports and global styles

#### `/src/components/` - React Components
- Modular, reusable components
- TypeScript interfaces for props
- Tailwind CSS for styling
- Responsive design patterns

#### `/src/lib/` - Utilities
- API integration functions
- Data transformation utilities
- Error handling patterns
- Type definitions

#### `/public/` - Static Assets
- PWA manifest and service worker
- Application icons
- Static images and SVGs
- Files served directly by Next.js

## 🔒 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_OWM_API_KEY` | OpenWeatherMap API key | Yes |

## 🚨 Error Handling

The application includes comprehensive error handling for:
- Invalid city names
- API rate limits
- Network connectivity issues
- Geolocation permission denied
- Invalid coordinates

## 🌍 Browser Support

- **Chrome**: Full PWA support
- **Firefox**: Full PWA support  
- **Safari**: Limited PWA support
- **Edge**: Full PWA support

## 📄 License

This project is private and proprietary.

## 🤝 Contributing

This is a private project. For any issues or suggestions, please contact the development team.

## 📞 Support

For technical support or questions about this application, please reach out to the development team.

---

**Note**: This application requires an active internet connection for weather data. Some features may be limited in offline mode.