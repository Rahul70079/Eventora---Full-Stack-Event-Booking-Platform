# Eventora - Full-Stack Event Booking Platform

Eventora is a modern full-stack MERN event booking platform that enables users to discover, register, and manage events with a seamless and secure experience.

The platform includes advanced authentication, OTP verification, role-based access control, and an administrative dashboard for managing free and paid events.

---

## 📸 Application Preview
<img width="1894" height="831" alt="Screenshot 2026-05-10 195939" src="https://github.com/user-attachments/assets/ce91f686-dfaa-4913-ab7f-80734296c44f" />
<img width="1907" height="890" alt="Screenshot 2026-05-10 195743" src="https://github.com/user-attachments/assets/890ceb6d-38e5-4175-849e-fbe38cc4671c" />
<img width="1917" height="882" alt="Screenshot 2026-05-10 195835" src="https://github.com/user-attachments/assets/08ae3016-6aef-4c96-8939-756948a26a8d" />
<img width="1916" height="880" alt="Screenshot 2026-05-10 195907" src="https://github.com/user-attachments/assets/d684fcd9-0f83-42e3-9ce0-0fe3b456e4ef" />
<img width="1894" height="831" alt="Screenshot 2026-05-10 195939" src="https://github.com/user-attachments/assets/2155fa77-90ca-4df4-8523-bd1c28f67f30" />
<img width="1515" height="869" alt="Screenshot 2026-05-10 200019" src="https://github.com/user-attachments/assets/a54d1132-4ceb-44fc-90dd-5b941ed995f3" />
<img width="1817" height="768" alt="Screenshot 2026-05-10 200042" src="https://github.com/user-attachments/assets/4112c0d0-15d8-4b6c-ab55-81473179403d" />
<img width="1809" height="873" alt="Screenshot 2026-05-10 200145" src="https://github.com/user-attachments/assets/607af05e-c774-4f7d-933c-697c2b210c14" />
<img width="1460" height="869" alt="Screenshot 2026-05-10 200231" src="https://github.com/user-attachments/assets/62998284-59f3-4f19-8a2d-ffc9eaeded42" />
<img width="1415" height="868" alt="Screenshot 2026-05-10 200301" src="https://github.com/user-attachments/assets/86ddf503-5d10-4dd0-81c5-f27325205fe0" />
<img width="1428" height="842" alt="Screenshot 2026-05-10 200359" src="https://github.com/user-attachments/assets/82a09676-bd53-49a3-baa2-c1cb06f9852b" />
<img width="1833" height="841" alt="Screenshot 2026-05-10 200421" src="https://github.com/user-attachments/assets/87880ffd-eb00-4b02-8ab3-f53680fefd12" />
<img width="1600" height="860" alt="Screenshot 2026-05-10 200527" src="https://github.com/user-attachments/assets/b55ba97e-94d8-4776-a124-e1c9618f9a15" />
<img width="1627" height="958" alt="Screenshot 2026-05-10 200600" src="https://github.com/user-attachments/assets/fc55fb4d-212f-4732-a3da-1cf67ec2707d" />
<img width="1246" height="921" alt="Screenshot 2026-05-10 200629" src="https://github.com/user-attachments/assets/a182e3d2-9072-43f1-b4e4-206b8eae67fa" />
<img width="1463" height="908" alt="Screenshot 2026-05-10 200807" src="https://github.com/user-attachments/assets/d6fe1795-bb16-43b5-b4ef-3ca5e3fb3432" />


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
