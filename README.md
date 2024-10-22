## Getting Started

To run this Next.js app locally, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2.Create your `.env` fie in the root folder (`TrendFit`) with the following content. Replace placeholders with your actual Firebase keys:

   ```dotenv
   NEXT_PUBLIC_FIREBASE_API_KEY=your-firebase-api-key
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-firebase-project-id
   NEXT_PUBLIC_FIREBASE_APP_ID=your-firebase-app-id
   ```
3. install dependency:
   ```bash
   npm install
   ```
4. Run project locally:
   ```bash
   npm run dev
   ```
## Future Improvements

- **Search Functionality:** Allow users to search products by name, category.
- **Sorting:** Enable sorting products by price, popularity, or other relevant attributes.
- **Filters:** Implement filters based on categories, price range, sizes, colors, and other attributes.
- **Payment Gateways:** Integrate Stripe, PayPal, or other secure payment gateways.
- **Performance Optimization:** Implement caching, lazy loading for images, and optimize frontend and backend code.
- **Product Recommendations:** Use AI to offer personalized product suggestions.
- **Wishlist and Comparison:** Allow users to save products and compare multiple items.
- **Enhanced Checkout:** Streamline checkout with guest checkout, address autofill, and order tracking.

## Stack Used

- **Next.js:** Framework for building React applications with server-side rendering and static site generation capabilities.
- **Firebase:** Database and storage solution provided by Google.
  - **Firestore:** NoSQL database within Firebase used for scalable, flexible data storage.
  - **Storage:** Firebase service for storing user-generated content like images, videos, and other files.
- **Google Auth:** Authentication service provided by Google for user sign-in and sign-up.
  - **Passwordless Sign-In/Sign-Up:** Authentication method allowing users to sign in or sign up without passwords, typically using email or phone number verification.

     
