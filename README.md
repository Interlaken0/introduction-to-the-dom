# Introduction to the DOM

**A modern React application demonstrating DOM manipulation and interactive web development**

[![React](https://img.shields.io/badge/React-19.2.0-blue.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-7.3.1-646CFF.svg)](https://vitejs.dev/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

## Overview

This project serves as a comprehensive introduction to the Document Object Model (DOM) using modern React patterns. Built with Vite for lightning-fast development and optimized production builds.

## Features

- **Lightning Fast** - Powered by Vite's optimised build tooling
- **Hot Module Replacement** - Instant feedback during development
- **Modern React** - Leveraging React 19's latest features
- **Clean Code** - ESLint configuration for code quality
- **Responsive Design** - Mobile-first approach
- **Modern Styling** - CSS with best practices

## Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| [React](https://reactjs.org/) | 19.2.0 | UI Framework |
| [Vite](https://vitejs.dev/) | 7.3.1 | Build Tool & Dev Server |
| [ESLint](https://eslint.org/) | 9.39.1 | Code Linting |
| [React DOM](https://reactjs.org/docs/react-dom.html) | 19.2.0 | DOM Rendering |

## Quick Start

### Prerequisites

- **Node.js** >= 18.0.0
- **npm** >= 8.0.0 (or yarn/pnpm)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Interlaken0/introduction-to-the-dom.git
   cd introduction-to-the-dom
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## Available Scripts

| Script | Command | Description |
|--------|---------|-------------|
| `dev` | `npm run dev` | Start development server with HMR |
| `build` | `npm run build` | Build for production |
| `preview` | `npm run preview` | Preview production build locally |
| `lint` | `npm run lint` | Run ESLint code analysis |

## Project Structure

```
introduction-to-the-dom/
├── public/                 # Static assets
├── src/                   # Source code
│   ├── components/        # React components
│   ├── styles/           # CSS and styling
│   ├── utils/            # Utility functions
│   ├── App.jsx           # Main application component
│   ├── main.jsx          # Application entry point
│   └── index.css         # Global styles
├── .gitignore            # Git ignore rules
├── eslint.config.js      # ESLint configuration
├── index.html            # HTML template
├── package.json          # Project metadata and dependencies
├── README.md             # This file
└── vite.config.js        # Vite configuration
```

## Learning Objectives

This project demonstrates:

- **DOM Manipulation** - Understanding how React interacts with the DOM
- **Component Architecture** - Building reusable React components
- **State Management** - Managing component state and props
- **Event Handling** - Responding to user interactions
- **Modern Development** - Using Vite for fast development cycles

## Development

### Code Quality

This project uses ESLint with the following configurations:
- **React Hooks** - Enforcing rules of hooks
- **React Refresh** - Ensuring HMR compatibility
- **JavaScript Standards** - Following modern JS best practices

### Browser Support

- Chrome >= 87
- Firefox >= 78
- Safari >= 14
- Edge >= 88

## Deployment

### Build for Production

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [React Team](https://reactjs.org/) for the amazing framework
- [Vite Team](https://vitejs.dev/) for the blazing fast build tool
- The open-source community for inspiration and tools

## Support

If you have any questions or need help, feel free to:
- Open an [issue](https://github.com/Interlaken0/introduction-to-the-dom/issues)
- Start a [discussion](https://github.com/Interlaken0/introduction-to-the-dom/discussions)

---

**Happy Coding!**
