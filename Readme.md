# TaskMaster - Professional Task Management Platform

A modern, intuitive task management platform designed for teams who demand excellence. TaskMaster combines elegant design with powerful features to streamline collaboration and boost productivity.

## Features

- **Lightning Fast**: Experience instant responses with our optimized architecture
- **Team Harmony**: Real-time collaboration with shared workspaces and intelligent notifications
- **Privacy First**: Enterprise-grade encryption and zero-knowledge architecture
- **Intuitive Interface**: Clean, Apple-style design that feels natural to use
- **Advanced Analytics**: Comprehensive reporting and insights for teams
- **Role-Based Access**: Different dashboards for admins and team members

## Project Structure

\`\`\`
TaskMaster/
├── admin/                      # Admin dashboard pages
│   ├── admin-dashboard.html
│   ├── admin-notifications.html
│   ├── admin-profile.html
│   ├── admin-projects.html
│   ├── admin-tasks.html
│   └── admin-team.html
├── client/                     # User dashboard pages
│   ├── user-dashboard.html
│   ├── user-notifications.html
│   ├── user-profile.html
│   ├── user-projects.html
│   ├── user-tasks.html
│   └── user-time-tracking.html
├── landing/                    # Landing pages
│   ├── about.html
│   ├── contact.html
│   └── features.html
├── public/                     # Static assets
│   ├── icon-dark-32x32.png
│   ├── icon-light-32x32.png
│   ├── icon.svg
│   └── placeholder-*
├── components/                 # React components (shadcn/ui)
├── app/                        # Next.js app directory
├── img/                        # Images and media
├── index.html                  # Landing page home
├── login.html                  # User login
├── register.html               # User registration
├── forgot-password.html        # Password recovery
├── styles.css                  # Global styles
└── validation.js               # Form validation logic
\`\`\`

## Technology Stack

- **Frontend**: HTML5, CSS3, JavaScript
- **Framework**: Bootstrap 5 & Next.js
- **Icons**: Font Awesome 6
- **Fonts**: Inter, SF Pro Display (via Google Fonts)
- **Validation**: Custom JavaScript validation

## Getting Started

### Prerequisites
- Git (for GitHub deployment)

### Installation

1. **Clone the repository**
   \`\`\`bash
   git clone https://github.com/yourusername/taskmaster.git
   cd taskmaster
   \`\`\`

2. **Install dependencies** (if using Next.js features)
   \`\`\`bash
   npm install
   \`\`\`

3. **Run locally**
   \`\`\`bash
   npm run dev
   \`\`\`
   Navigate to `http://localhost:3000`

### Project Features

- **User Authentication**: Secure login and registration with validation
- **Dashboard**: Real-time overview of tasks and projects
- **Admin Panel**: Comprehensive management tools for administrators
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile
- **Form Validation**: Comprehensive validation for all user inputs
- **Notifications**: Real-time alerts and updates for team members

## Form Validation

All forms include comprehensive validation:

- **Registration**: Email, password, DOB, phone, company, address, language, role, and profile picture
- **Login**: Email and password verification
- **Password Reset**: Email verification
- **Custom Fields**: All user inputs are validated for format and requirements

## Pages & Routes

### Public Pages
- `/` - Landing page with features and pricing
- `/login.html` - User login
- `/register.html` - User registration
- `/forgot-password.html` - Password recovery
- `/landing/features.html` - Features overview
- `/landing/about.html` - About TaskMaster
- `/landing/contact.html` - Contact page

### Admin Dashboard
- `/admin/admin-dashboard.html` - Admin overview
- `/admin/admin-tasks.html` - Task management
- `/admin/admin-projects.html` - Project management
- `/admin/admin-team.html` - Team management
- `/admin/admin-notifications.html` - Notifications
- `/admin/admin-profile.html` - Profile settings

### User Dashboard
- `/client/user-dashboard.html` - User overview
- `/client/user-tasks.html` - Task list
- `/client/user-projects.html` - Projects
- `/client/user-time-tracking.html` - Time tracking
- `/client/user-notifications.html` - Notifications
- `/client/user-profile.html` - Profile

## Deployment

### Deploy to GitHub

1. **Initialize Git** (if not already done)
   \`\`\`bash
   git init
   git add .
   git commit -m "Initial commit: TaskMaster project"
   \`\`\`

2. **Create a GitHub repository**
   - Go to [GitHub](https://github.com/new)
   - Create a new repository named `taskmaster`
   - Do NOT initialize with README, .gitignore, or license

3. **Push to GitHub**
   \`\`\`bash
   git branch -M main
   git remote add origin https://github.com/yourusername/taskmaster.git
   git push -u origin main
   \`\`\`

4. **Enable GitHub Pages** (for static hosting)
   - Go to your repository → Settings → Pages
   - Under "Source", select `main` branch and `/root` folder
   - Your site will be published at `https://yourusername.github.io/taskmaster/`

### Deploy to Vercel (Recommended)

1. **Install Vercel CLI**
   \`\`\`bash
   npm install -g vercel
   \`\`\`

2. **Deploy**
   \`\`\`bash
   vercel
   \`\`\`
   Follow the prompts to connect your GitHub and deploy

3. Your app will be live at `https://taskmaster-yourusername.vercel.app`

### Deploy to Other Platforms

- **Netlify**: Drag and drop the project folder or connect your GitHub repo
- **Firebase Hosting**: Push to Firebase for free static hosting
- **AWS Amplify**: Connect your GitHub repository for CI/CD

## Configuration

### Environment Variables

Create a `.env.local` file for any backend services:
\`\`\`env
NEXT_PUBLIC_API_URL=your_api_url
DATABASE_URL=your_database_url
\`\`\`

### Styling

- Primary colors defined in `styles.css`
- Bootstrap 5 classes for responsive layouts
- Custom CSS variables for theming

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support, contact us at:
- Email: jd.thakrar05@gmail.com
- Phone: +91 96244 49764
- Location: San Francisco, California

## Roadmap

- [ ] Backend API integration
- [ ] Real-time notifications with WebSockets
- [ ] Mobile app (React Native)
- [ ] Advanced reporting dashboard
- [ ] AI-powered task suggestions
- [ ] Integration with third-party tools

## Acknowledgments

- Bootstrap 5 for responsive framework
- Font Awesome for icons
- shadcn/ui for component library
- Next.js for modern React framework

---

**Last Updated**: November 2025
**Version**: 1.0.0
