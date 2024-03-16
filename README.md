# Accessible Login/Signup Form

## Description

This project offers a comprehensive solution for implementing accessible login and signup forms. It includes components for the dashboard, login, and signup pages, along with reusable components like buttons, form inputs, and links. It incorporates mock user data for user validation and stores locally signed-up users. The types folder contains props interfaces for components and Zod schemas for form validation. Additionally, the hooks folder includes functions for managing login and signup validation, as well as for saving users to local storage..

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
│   │   └── users.ts            # Mock users data for user validation
│   │   └── userStorage.ts      # Key to store user in localStorage
│   │
│   ├── context/
│   │   └── auth-context.tsx     # Mock authentication context
│   │
│   ├── hooks/
│   │   └── useLocalStorage.tsx  # Custom hook to store and retrieve users from local storage
│   │   └── useLogin.tsx         # Custom hook for handling user login
│   │   └── useSignup.tsx        # Custom hook for handling user signup
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
│
│
├── .gitignore
├── package.json
└── README.md
```
