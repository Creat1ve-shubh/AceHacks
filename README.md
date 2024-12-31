

# AceHack Cyberpunk Landing Page 🚀  

Welcome to the **AceHack Cyberpunk Landing Page** repository! This project is designed to showcase a futuristic and immersive landing page experience for the upcoming AceHack event. Built with **Next.js**, **Tailwind CSS**, and **shadcn**, this project adheres to the cutting-edge **Cyberpunk** aesthetic.

## 🖥️ **Features**
- **Dynamic Countdown Timer**: Displays the time left until the event date.
- **AceHack Branding**: Includes the AceHack logo and tagline: *"Innovate. Elevate. Transform."*
- **Interactive Buttons**:
  - **Register Now** button to direct users to the registration form.
  - **Join Our Community** button for community engagement.
- **About Us Section**: A brief introduction to AceHack and its mission.
- **Cyberpunk Theme**: A visually striking and tech-inspired design, incorporating neon gradients, grids, and glowing effects.

---

## ⚡ **Tech Stack**
- **Framework**: [Next.js](https://nextjs.org/) (JavaScript, no TypeScript).
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) for modern, responsive styling.
- **Component Library**: [shadcn](https://shadcn.dev/) for consistent and customizable UI components.

---



---

## 🛠️ **Installation & Setup**

Follow these steps to run the project locally:

1. **Clone the Repository**:
   ```bash
   git clone <repository_url>
   cd ace
   ```

2. **Install Dependencies**:
   Ensure Node.js and npm are installed on your system. Then, run:
   ```bash
   npm install
   ```

3. **Run the Development Server**:
   Start the local server:
   ```bash
   npm run dev
   ```
   Visit `http://localhost:3000` to view the landing page.

4. **Build for Production**:
   To generate a production build:
   ```bash
   npm run build
   ```

5. **Start Production Server**:
   Serve the optimized build:
   ```bash
   npm run start
   ```

---

## 🧩 **Usage**
### **Dynamic Timer**
The countdown timer dynamically updates to show the time remaining until the event date. To change the event date, modify the following line in `CountdownTimer.jsx`:
```javascript
const eventDate = new Date("YYYY-MM-DDTHH:mm:ss").getTime();
```

### **About Section**
Customize the content in the `AboutUs.js` component to reflect AceHack’s mission and values.

### **Buttons**
- Update the `href` in the buttons located in the `button.js` component:
   - **Register Now**: Link to your registration page.
   - **Join Our Community**: Link to a Discord server or community platform.

---


---

## 🚀 **Deployment**
You can deploy this project using platforms like [Vercel](https://vercel.com/) or [Netlify](https://www.netlify.com/). Here’s how to deploy to Vercel:

1. Install the Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Deploy your project:
   ```bash
   vercel
   ```

---


