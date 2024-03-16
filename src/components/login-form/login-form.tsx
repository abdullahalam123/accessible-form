import { LoginFormData, LoginFormProps, loginSchema } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import Button from "../button/button";
import { FormInput } from "../form-input";
import { LinkText } from "../link/link";
import { useLogin } from "@/hooks";

/**
 * Login Form Component
 * @description A form component for user login
 * @param {LoginFormProps} props - Props for the Login Form
 * @returns {React.ReactNode} The rendered Login Form component
 */
export const LoginForm: React.FC<LoginFormProps> = ({ onLogin }) => {
  const {
    register,
    handleSubmit,
    setFocus,
    setError,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    mode: "onChange",
  });

  const { handleLogin } = useLogin();

  const router = useRouter();

  const onSubmit = (data: LoginFormData) => {
    const isLoginSuccessful = handleLogin(data, setError, setFocus);
    if (isLoginSuccessful) {
      onLogin(data.email, data.password);
      router.push("/dashboard");
    }
  };

  useEffect(() => {
    setFocus("email");
  }, [setFocus]);

  return (
    <div className="border rounded-md shadow-sm">
      <form
        onSubmit={handleSubmit(onSubmit)}
        aria-label="Login Form"
        className="flex flex-col gap-4 max-w-md mx-auto p-10"
      >
        <FormInput
          label="Email"
          id="email"
          type="email"
          register={register}
          error={errors.email}
          placeholder="Enter your email address"
          autoComplete="on"
        />

        <FormInput
          label="Password"
          id="password"
          type="password"
          register={register}
          error={errors.password}
          placeholder="Enter your password"
          autoComplete="on"
        />

        <Button type="submit" variant="primary">
          Log in
        </Button>

        <LinkText
          text="Don't have an account?"
          linkText="Sign up"
          href="/signup"
          className="text-gray-600"
        />
      </form>
    </div>
  );
};
