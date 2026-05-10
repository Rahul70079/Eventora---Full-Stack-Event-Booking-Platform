# Eventora - Full-Stack Event Booking Platform

![Home Page](./screenshots/home.png)

Eventora is a modern full-stack MERN event booking platform that enables users to discover, register, and manage events with a seamless and secure experience.

The platform includes advanced authentication, OTP verification, role-based access control, and an administrative dashboard for managing free and paid events.

---

## 📸 Application Preview

### 🏠 Home Page
![Home](./screenshots/home.png)

### 🎟️ Events Page
![Events](./screenshots/events.png)

### 🔐 Authentication Page
![Authentication](./screenshots/auth.png)

### 👨‍💻 Admin Dashboard
![Dashboard](./screenshots/dashboard.png)

### 📩 OTP Verification
![OTP](./screenshots/otp.png)

### 👤 User Dashboard
![User Dashboard](./screenshots/user-dashboard.png)

---

## ✨ Features

### 🔐 Authentication & Security
- Secure user registration and login using JWT authentication and bcrypt
- Mandatory Email OTP verification for account activation
- 2FA OTP verification for secure event booking confirmation

---

### 👥 Role-Based Access

#### Admin
- Create, edit, and delete events
- Manage booking requests and payment status
- Access a powerful analytics dashboard

#### User
- Browse and discover upcoming events
- Book free and paid events securely
- Manage bookings directly from the personal dashboard

---

## 🎟️ Event Management
Create free and paid events with:
- Event descriptions
- Categories
- Dates & timing
- External image URLs
- Seating capacity

---

## ⚡ Smart Booking System
- OTP-secured booking requests
- Pending verification workflow for admin approval
- Automatic seat validation to prevent overbooking

---

## 📊 Admin Dashboard
Track platform activity with real-time analytics:
- Pending booking requests
- Confirmed bookings
- Revenue tracking
- User management

---

## 📧 Email Notifications
Automated email services powered by Nodemailer:
- OTP verification emails
- Booking confirmation emails
- Status update notifications

---

## 🎨 Modern UI/UX
Built with:
- React.js
- Tailwind CSS
- Responsive design
- Smooth micro-interactions

---

# 🚀 Setup Instructions

## 📋 Prerequisites

Make sure you have the following installed on your machine:

- Node.js
- MongoDB Atlas or Local MongoDB Database
- Git

---

## 1️⃣ Environment Variables Configuration

Navigate to:

```bash
server/.env
```

Add the following environment variables:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=supersecretjwtkey_eventora
EMAIL_USER=your_gmail_address
EMAIL_PASS=your_gmail_app_password
PORT=5000
```

> ⚠️ Note:  
> For `EMAIL_PASS`, generate a Google App Password.  
> Your normal Gmail password will not work because of 2FA security.

---

## 2️⃣ Install Dependencies

Run the following command from the project root:

```bash
npm install
npm run install:all
```

---

## 3️⃣ Start Development Server

```bash
npm run dev
```

This command starts both:
- Frontend client
- Backend server

using `concurrently`.

---

## 4️⃣ Production Preview

To run the backend and frontend preview together:

```bash
npm run start
```

---

## 📁 Project Structure

```bash
Eventora/
│
├── client/         # React Frontend
├── server/         # Node.js Backend
├── screenshots/   # Project Screenshots
├── README.md
└── package.json
```

---

## 🛠️ Tech Stack

### Frontend
- React.js
- Tailwind CSS
- Axios
- React Router DOM

### Backend
- Node.js
- Express.js
- MongoDB
- JWT Authentication
- Nodemailer

---

## ✅ Features Included

- Secure JWT Authentication
- Email OTP Verification
- Role-Based Access Control
- Event Booking System
- Admin Dashboard
- Real-Time Seat Validation
- Responsive UI/UX
- Email Notifications

---

## 📌 Future Enhancements

- Payment Gateway Integration
- QR Ticket Verification
- Real-Time Notifications
- AI-Based Event Recommendations
