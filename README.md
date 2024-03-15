# Accessible Login/Signup Form

## Description

This project provides an accessible login/signup form solution. It includes components for the dashboard, login, and signup pages, as well as reusable components such as buttons, form inputs, and links. Mock user data is provided for user validation. The types folder contains props interfaces for components and Zod schemas for form validation. Utils folder includes functions for handling login and signup validation.

---

## Installation

1. Clone the repository:

```
git clone https://github.com/abdullahalam123/accessible-form.git
```

2. Navigate to the project directory:

```
cd accessible-form
```

3. Install dependencies:

```
npm install
```

4. Run the development server

```
npm run dev
```

---

## Accessible Form Directory Structure

```bash
accessible-form/
│
├── src/
│   ├── app/
│   │   ├── dashboard/          # Dashboard page
│   │   ├── login/              # Login page
│   │   └── signup/             # Signup page
│   │
│   ├── components/
│   │   ├── button/             # Custom button component
│   │   ├── form-input/         # Custom form input component
│   │   ├── link/               # Navigation link component
│   │   ├── login-form/         # Login form component
│   │   └── signup-form/        # Signup form component
│   │
│   ├── constants/
│   │   └── users/              # Mock users data for user validation
│   │
│   ├── context/
│   │   └── auth-context/       # Mock authentication context
│   │
│   ├── types/
│   │   ├── auth-context/       # Props interface for auth context
│   │   ├── button/             # Props interface for button component
│   │   ├── form-input/         # Props interface for form input component
│   │   ├── link/               # Props interface for link component
│   │   ├── login-form/         # Props interface for login form component
│   │   ├── signup-form/        # Props interface for signup form component
│   │   ├── login-schema.ts     # Zod schema for login
│   │   └── signup-schema.ts    # Zod schema for signup
│   │
│   └── utils/
│       ├── handle-login.ts     # Function to validate user login
│       └── handle-signup.ts    # Function to validate user signup
│
├── .gitignore
├── package.json
└── README.md
```
