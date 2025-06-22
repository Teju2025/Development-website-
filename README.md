# Netguru Clone Website

A modern, responsive website clone of Netguru built with React, Tailwind CSS, and modern web technologies. Features a sleek black theme with professional design and full functionality.

## 🚀 Features

- **Modern Design**: Sleek black theme with professional aesthetics
- **Responsive Layout**: Fully responsive design that works on all devices
- **Interactive Navigation**: Multi-level dropdown menus with smooth animations
- **Multiple Pages**: Complete website with all major sections
- **Contact Forms**: Functional contact forms with validation
- **Case Studies**: Showcase of client projects and testimonials
- **Services & Industries**: Comprehensive service offerings and industry expertise

## 📋 Pages Included

- **Home**: Hero section, case studies, testimonials, statistics
- **Services**: Ideation, Development, Design, AI, Maintenance, Cooperation Models
- **Industries**: Finance, Commerce, Healthcare, Education, Proptech, Greentech
- **Clients**: Case studies and client testimonials
- **About**: Company values, culture, team information
- **Insights**: Blog posts and newsletters
- **Contact**: Contact forms and office locations

## 🛠️ Technologies Used

- **React 18**: Modern React with hooks and functional components
- **Tailwind CSS**: Utility-first CSS framework for styling
- **React Router**: Client-side routing
- **Lucide React**: Beautiful icons
- **Framer Motion**: Smooth animations (ready for implementation)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Teju2025/Development-website-.git
   cd Development-website-
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

## 🚀 Deployment

### Netlify Deployment

This project is configured for easy deployment on Netlify:

1. **Connect to Netlify**:
   - Go to [Netlify](https://netlify.com)
   - Connect your GitHub account
   - Select this repository

2. **Build Settings**:
   - **Build command**: `npm run build`
   - **Publish directory**: `build`
   - **Node version**: 18 (or latest LTS)

3. **Environment Variables** (if needed):
   - Add any environment variables in Netlify dashboard

4. **Deploy**:
   - Netlify will automatically deploy on every push to main branch

### Manual Deployment

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Deploy the `build` folder** to your hosting provider

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.js          # Navigation component
│   └── Footer.js          # Footer component
├── pages/
│   ├── Home.js            # Homepage
│   ├── Services.js        # Services page
│   ├── Industries.js      # Industries page
│   ├── Clients.js         # Clients page
│   ├── About.js           # About page
│   ├── Insights.js        # Insights/Blog page
│   └── Contact.js         # Contact page
├── App.js                 # Main app component
├── index.js              # Entry point
└── index.css             # Global styles
```

## 🎨 Customization

### Colors
The theme uses a black color scheme defined in `tailwind.config.js`:
- Primary: Black (#000000)
- Secondary: Dark grays (#111111, #1a1a1a)
- Text: White (#ffffff) and light grays

### Styling
- All styles are in `src/index.css` using Tailwind CSS
- Custom components defined in the CSS file
- Responsive design with mobile-first approach

## 🔧 Available Scripts

- `npm start`: Runs the app in development mode
- `npm run build`: Builds the app for production
- `npm test`: Launches the test runner
- `npm run eject`: Ejects from Create React App (not recommended)

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Design inspired by [Netguru](https://www.netguru.com/)
- Icons from [Lucide React](https://lucide.dev/)
- Images from [Unsplash](https://unsplash.com/)

## 📞 Support

For support, email support@example.com or create an issue in this repository.

---

**Made with ❤️ by [Your Name]** 