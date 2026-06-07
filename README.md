# Professional Portfolio Website

A fully responsive, modern portfolio website built with HTML, CSS, and JavaScript.

## Features

✨ **Modern Design**
- Clean, professional layout with gradient accents
- Smooth animations and transitions
- Fully responsive (mobile, tablet, desktop)

📱 **Responsive Layout**
- Mobile-first design approach
- Hamburger menu for mobile devices
- Optimized for all screen sizes

⚡ **Interactive Features**
- Smooth scroll navigation
- Active navigation highlighting
- Mobile menu toggle
- Contact form validation
- Scroll animations
- Social media links

🎨 **Sections Included**
- **Hero** - Eye-catching introduction
- **About** - Professional background with stats
- **Skills** - Showcase your expertise with progress bars
- **Projects** - Featured portfolio projects with descriptions
- **Contact** - Contact information and contact form
- **Footer** - Professional footer with copyright

## Files

- `index.html` - Main HTML structure
- `styles.css` - Complete styling and responsive design
- `script.js` - Interactive JavaScript functionality

## How to Use

1. Open `index.html` in a web browser
2. Customize the content with your own information:
   - Replace "Your Name" with your actual name
   - Update email, phone, and location
   - Modify project descriptions and technologies
   - Add your social media links
   - Update skills and experience

## Customization Guide

### Personal Information
In `index.html`, find these lines and replace with your details:
- Line 46: Change "Your Name" to your name
- Line 47: Update your professional title
- Line 231: Replace email address
- Line 237: Update phone number
- Line 243: Add your location
- Line 300: Add copyright information

### Add Your Projects
Edit the project cards (lines 158-206) with:
- Project title
- Project description
- Technologies used
- Project link

### Customize Colors
In `styles.css`, modify the CSS variables (lines 1-8):
```css
--primary-color: #6366f1;      /* Main color */
--secondary-color: #ec4899;    /* Accent color */
--dark-bg: #0f172a;            /* Dark background */
--text-dark: #1e293b;          /* Text color */
```

### Add Real Images
Replace placeholder icons with actual images:
- Add image files to the folder
- Update `index.html` with `<img>` tags instead of `<i>` icons

### Social Media Links
In `index.html` (lines 293-297), update the social links:
```html
<a href="https://linkedin.com/in/yourprofile" class="social-icon">
<a href="https://github.com/yourprofile" class="social-icon">
```

## Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Advanced styling with gradients and animations
- **JavaScript** - Interactive functionality
- **Font Awesome** - Icons (via CDN)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Performance Optimizations

- Lazy loading support
- Smooth scroll behavior
- Debounced scroll events
- Optimized animations
- Minimal external dependencies

## Responsive Breakpoints

- Desktop: 1200px and above
- Tablet: 768px to 1199px
- Mobile: Below 768px
- Small Mobile: Below 480px

## Tips for Best Results

1. **Professional Photo**: Add a high-quality profile photo to the About section
2. **Project Screenshots**: Replace placeholder icons with actual project screenshots
3. **SEO**: Update the title and meta description in `<head>`
4. **Hosting**: Deploy to platforms like:
   - GitHub Pages (free)
   - Netlify (free)
   - Vercel (free)
   - Traditional web hosting

5. **Domain**: Consider using a custom domain for professionalism

## Features You Can Add

- Blog section with articles
- Testimonials from clients
- Downloadable resume/CV
- Dark mode toggle
- Multi-language support
- Newsletter signup
- Lightbox gallery for projects

## Contact Form Setup

The contact form currently shows an alert. To send emails, integrate:
- EmailJS (frontend)
- Formspree (backend)
- Netlify Forms
- Your own backend API

## License

Free to use and customize for your portfolio.

---

**Ready to showcase your work!** 🚀

For questions or improvements, feel free to modify the code to match your needs.
