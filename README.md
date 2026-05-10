Eventora - Full-Stack Event Booking Platform
Eventora is a full-stack MERN application that allows users to seamlessly browse, register, and pay natively without any third party tools. It features an administrative dashboard for event organizers to create and manage free and paid events. All bookings can be managed manually by an admin to handle payments directly.


Features
User Authentication: Secure login & registration with JWT and bcrypt.
2FA OTP Verification:
Mandatory Email OTP to activate your account upon Registration (or delayed login attempts).
Mandatory Email OTP to finalize and secure event ticket booking.
Role-Based Access:
Admin: Create, edit, and delete events. Confirm and reject all incoming booking requests, mark them as 'Paid' or 'Not Paid'. Access is strictly locked to database-flagged users only.
User: Browse events, submit ticket booking requests via OTP, view personal dashboard pending status, and cancel bookings.
Event Management: Create free and paid events with detailed descriptions, external image URLs, dates, categories, and seating capacity.
Smart Booking System:
Mandatory 2FA OTP to authorize a booking request.
All booking requests (both free and paid) enter a secure 'Pending' queue for Admin verification.
Seat availability accurately updates and securely validates against overbooking logic.
Admin Analytics Dashboard: Track live data such as Pending Requests, Total Revenue, and Total Confirmed Paid Clients directly from the admin panel.
Email Notifications: Automated email delivery upon successful booking confirmation using Nodemailer.
Sleek UI/UX: Built entirely with React, Tailwind CSS, and polished with micro-interactions.
