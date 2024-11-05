# X Clone 🐦

A full-featured Twitter/X clone built with the MERN stack (MongoDB, Express.js, React.js, Node.js) and modern web technologies.

## ✨ Features

- **Authentication**
  - Secure user authentication using JWT (JSON Web Tokens)
  - Protected routes and user sessions
  
- **Post Management**
  - Create, read, update, and delete posts
  - Rich text support
  - Image uploads via Cloudinary
  - Like and comment functionality
  
- **User Experience**
  - Suggested users to follow
  - Real-time notifications
  - Fully responsive design
  - Infinite scroll for posts
  
- **Profile Management**
  - Edit profile information
  - Update profile and cover images
  - View user statistics

## 🚀 Tech Stack

- **Frontend**: React.js, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **State Management**: TanStack Query
- **Image Storage**: Cloudinary
- **Authentication**: JWT

## 📝 Prerequisites

Before running this project, make sure you have:
- Node.js (v14 or higher)
- MongoDB installed locally or a MongoDB Atlas account
- Cloudinary account for image uploads

## ⚙️ Installation

1. Clone the repository
```bash
git clone https://github.com/Pradhyumnaatmakur/x-twitter-clone
cd x-clone
```

2. Install dependencies
```bash
# Install backend dependencies
npm install

# Install frontend dependencies
cd client
npm install
```

3. Create a `.env` file in the root directory with the following variables:
```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
JWT_SECRET=your_jwt_secret
NODE_ENV=development
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

## 🔧 Development

To run the application in development mode:

1. Start the backend server
```bash
npm run dev
```

2. In a separate terminal, start the frontend
```bash
cd client
npm start
```

## 🏗️ Production Build

To create a production build:

```bash
# Build the frontend
cd client
npm run build

# Start the production server
cd ..
npm start
```

## 📁 Project Structure

```
x-clone/
├── client/             # React frontend
├── controllers/        # Route controllers
├── middleware/         # Custom middleware
├── models/            # MongoDB models
├── routes/            # API routes
├── utils/             # Utility functions
└── server.js          # Entry point
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👏 Acknowledgments

- Inspired by Twitter/X
- Built with modern web development best practices
- Special thanks to the open-source community
