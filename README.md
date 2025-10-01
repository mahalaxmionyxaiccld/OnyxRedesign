# Onyx Industries - Modern Manufacturing Website

A modern, fully client-side React website for Onyx Industries, featuring advanced 3D printing and precision manufacturing services. This application showcases animated statistics, scroll-triggered animations, and integrates with Google Sheets for contact form submissions.

## Features

- **Pure Client-Side React Application** - No server-side code required for deployment
- **Modern Animations** - Smooth scroll-triggered animations and animated statistics counters
- **Responsive Design** - Fully responsive across all devices
- **Google Sheets Integration** - Contact form submissions directly to Google Sheets
- **Professional UI** - Built with React, TypeScript, Tailwind CSS, and Shadcn/ui components
- **Fast Development** - Hot module replacement with Vite for instant updates

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (version 18 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**
- **Git** - [Download here](https://git-scm.com/)

## Local Installation & Setup

### 1. Clone or Download the Repository

```bash
# If using Git
git clone <repository-url>
cd <project-directory>

# Or download and extract the ZIP file
```

### 2. Install Dependencies

```bash
npm install
```

This will install all required packages including React, TypeScript, Vite, Tailwind CSS, and other dependencies.

### 3. Configure Google Sheets Integration

To receive contact form submissions in Google Sheets, follow these steps:

#### Step 3.1: Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it "Onyx Industries Contact Forms" (or any name you prefer)
4. Add the following headers in the first row:
   - Column A: **Timestamp**
   - Column B: **First Name**
   - Column C: **Last Name**
   - Column D: **Company Name**
   - Column E: **Phone**
   - Column F: **Email**
   - Column G: **Requirements**

#### Step 3.2: Create Google Apps Script

1. In your Google Sheet, click **Extensions** → **Apps Script**
2. Delete any existing code and paste the following script:

```javascript
function doPost(e) {
  try {
    // Get the active spreadsheet
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Parse the incoming data
    var data = JSON.parse(e.postData.contents);
    
    // Append a new row with the form data
    sheet.appendRow([
      data.timestamp || new Date().toISOString(),
      data.firstName || '',
      data.lastName || '',
      data.companyName || '',
      data.phone || '',
      data.email || '',
      data.requirements || ''
    ]);
    
    // Return success response
    return ContentService.createTextOutput(JSON.stringify({
      'status': 'success',
      'message': 'Form submitted successfully'
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    // Return error response
    return ContentService.createTextOutput(JSON.stringify({
      'status': 'error',
      'message': error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}
```

3. Click **Save** (disk icon) and name your project (e.g., "Contact Form Handler")

#### Step 3.3: Deploy the Apps Script as a Web App

1. Click **Deploy** → **New deployment**
2. Click the gear icon ⚙️ next to "Select type" and choose **Web app**
3. Configure the deployment:
   - **Description**: Contact Form Handler (or any description)
   - **Execute as**: Me (your email)
   - **Who has access**: Anyone
4. Click **Deploy**
5. Review the permissions and click **Authorize access**
6. Select your Google account
7. Click **Advanced** → **Go to [Your Project Name] (unsafe)**
8. Click **Allow**
9. **Copy the Web App URL** - it will look like:
   ```
   https://script.google.com/macros/s/AKfycby.../exec
   ```

#### Step 3.4: Configure Environment Variable

1. In your project root directory, create a file named `.env`
2. Add the following line with your Web App URL:

```env
VITE_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
```

Replace `YOUR_SCRIPT_ID` with the actual URL you copied in Step 3.3.

**Important**: 
- The `.env` file is already in `.gitignore` and won't be committed to version control
- Never share your Google Apps Script URL publicly
- Each developer/deployment should have their own `.env` file

### 4. Run the Application Locally

Start the development server:

```bash
npm run dev
```

The application will be available at:
```
http://localhost:5000
```

The development server features:
- Hot Module Replacement (HMR) - instant updates when you edit files
- Express server for the backend (minimal, serves the Vite frontend)
- Automatic recompilation on file changes

## Testing the Contact Form

1. Open the application in your browser: `http://localhost:5000`
2. Scroll down to the "Let's Connect" section
3. Fill out the contact form with test data
4. Click "Submit"
5. Check your Google Sheet - a new row should appear with the form data

## Project Structure

```
.
├── client/                    # Frontend React application
│   └── src/
│       ├── components/        # React components
│       │   ├── animated-counter.tsx
│       │   ├── contact-section.tsx
│       │   ├── hero-section.tsx
│       │   ├── industries-section.tsx
│       │   ├── scroll-reveal.tsx
│       │   ├── services-section.tsx
│       │   ├── statistics-section.tsx
│       │   └── ui/           # Shadcn/ui components
│       ├── lib/              # Utility libraries
│       ├── App.tsx           # Main application component
│       └── index.css         # Global styles and Tailwind config
├── server/                    # Minimal Express server (for dev only)
│   ├── index.ts              # Server entry point
│   ├── routes.ts             # API routes (empty - client-side only)
│   └── vite.ts               # Vite dev server integration
├── shared/                    # Shared TypeScript types
│   └── schema.ts             # Form validation schemas
├── .env                       # Environment variables (create this)
├── package.json              # Dependencies and scripts
├── tsconfig.json             # TypeScript configuration
├── tailwind.config.ts        # Tailwind CSS configuration
├── vite.config.ts            # Vite configuration
└── README.md                 # This file
```

## Available Scripts

- **`npm run dev`** - Start the development server with HMR
- **`npm run build`** - Build the production-ready application
- **`npm run preview`** - Preview the production build locally

## Technologies Used

### Frontend
- **React 18** - Modern UI library with hooks
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Shadcn/ui** - Accessible component library
- **Framer Motion** - Animation library
- **Lucide React** - Icon library
- **TanStack Query** - Data fetching and caching
- **Zod** - TypeScript-first schema validation

### Backend (Development Only)
- **Express** - Minimal web server for development
- **Node.js** - JavaScript runtime

## Deployment

This is a pure client-side application and can be deployed to any static hosting service:

### Option 1: Vercel (Recommended)
1. Install Vercel CLI: `npm install -g vercel`
2. Build the project: `npm run build`
3. Deploy: `vercel --prod`

### Option 2: Netlify
1. Build the project: `npm run build`
2. Drag and drop the `dist` folder to Netlify

### Option 3: GitHub Pages
1. Build the project: `npm run build`
2. Deploy the `dist` folder to GitHub Pages

### Option 4: Any Static Hosting
1. Build the project: `npm run build`
2. Upload the contents of the `dist` folder to your hosting provider

**Note**: Don't forget to add your `VITE_GOOGLE_SCRIPT_URL` environment variable in your hosting platform's settings.

## Environment Variables

The application uses the following environment variable:

| Variable | Description | Required |
|----------|-------------|----------|
| `VITE_GOOGLE_SCRIPT_URL` | Google Apps Script Web App URL for form submissions | Yes |

## Customization

### Update Company Information
Edit the following files to customize company details:

- **Contact Information**: `client/src/components/contact-section.tsx`
- **Hero Section**: `client/src/components/hero-section.tsx`
- **Services**: `client/src/components/services-section.tsx`
- **Statistics**: `client/src/components/statistics-section.tsx`
- **Industries**: `client/src/components/industries-section.tsx`

### Update Styling
- **Colors**: Edit CSS variables in `client/src/index.css`
- **Tailwind Config**: Modify `tailwind.config.ts`
- **Component Styles**: Components use Tailwind utility classes

## Troubleshooting

### Contact Form Not Submitting

1. **Check Console Errors**: Open browser DevTools (F12) and check the Console tab
2. **Verify Environment Variable**: Ensure `.env` file exists with correct `VITE_GOOGLE_SCRIPT_URL`
3. **Restart Dev Server**: After adding `.env`, restart the development server
4. **Check Apps Script**: Verify the Google Apps Script is deployed as a Web App with "Anyone" access
5. **Test the Script URL**: Open the Apps Script URL in a browser - you should see a message (not an error page)

### Application Won't Start

1. **Clear Node Modules**: Delete `node_modules` folder and run `npm install` again
2. **Check Node Version**: Ensure Node.js version is 18 or higher: `node --version`
3. **Port Already in Use**: If port 5000 is busy, stop other applications using that port

### Styles Not Loading

1. **Rebuild Tailwind**: The styles should rebuild automatically, but try restarting the dev server
2. **Check CSS Imports**: Ensure `index.css` is imported in `main.tsx`

## Support

For issues or questions:
- Email: info@onyxindustries.com
- Phone: +1 (555) 123-4567

## License

This project is proprietary software owned by Onyx Industries.

---

**Built with ❤️ using React, TypeScript, and modern web technologies**
