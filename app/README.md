# ContentCraft-AI

**ContentCraft-AI** is an AI-powered SaaS application designed to enhance productivity by providing customizable templates for various services. Whether you're generating content, creating code, or optimizing SEO, ContentCraft-AI streamlines your workflow with over 15+ customizable templates. Our intuitive platform offers a seamless user experience and efficient solutions to meet diverse needs.

# 🚀 Features

- **Blog Title Generation**: Quickly create engaging titles for your blog posts.
- **YouTube SEO Titles**: Boost your video rankings with optimized SEO-friendly titles.
- **Code Explainer**: Understand complex code with simple explanations.
- **Instagram Post Creator**: Generate creative and engaging captions for your Instagram posts.
- **Product Description Generator**: Craft compelling product descriptions effortlessly.
- **English Grammar Check**: Ensure your content is grammatically perfect.
- **And many more...**

# 🛠 Tech Stack

### Frontend:
- **TypeScript**
- **Next.js**
- **Tailwind CSS**
- **Shadcn**
- **Toast UI**

### Backend:
- **Drizzle ORM**
- **PostgreSQL**

### Payment Gateway:
- **Razorpay**

### Authentication:
- **Clerk**

### Deployment:
- **Vercel**

### AI Model:
- **Gemini AI-Flash 1.5**

# 🎯 How to Use

1. Clone the repository:
   ```bash
   git clone https://github.com/SahiLmb/contentcraft-ai.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables for the backend and frontend, including:

Create a new file named `.env` in the root of your project and add the following content:

   ```env
   #CLERK
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
   CLERK_SECRET_KEY=
   
   NEXT_PUBLIC_CLERK_SIGN_IN_URL=
   NEXT_PUBLIC_CLERK_SIGN_UP_URL=
   
   #GEMINI API
   NEXT_PUBLIC_GOOGLE_API_KEY=
   
   # DRIZZLE ORM
   NEXT_PUBLIC_DRIBBLE_DB_URL=
   
   # RAZORPAY
   SUBSCRIPTION_PLAN_ID=
   
   RAZORPAY_KEY_ID=
   RAZORPAY_SECRET_KEY=
   
   NEXT_PUBLIC_RAZORPAY_KEY_ID=
   ```
Replace the placeholder values with your actual credentials
   - Database connection
   - Razorpay API keys
   - Clerk authentication setup
4. Run the development server:
   ```bash
   npm run dev
   ```
5. To Access the database : 
   ```bash
   npm run db:studio
   ```
6. To Update database : 
```bash
npm run db:push
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

# Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

# Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

Happy Crafting!
