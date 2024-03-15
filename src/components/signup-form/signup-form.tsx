import { SignupFormData, SignupFormProps, signupSchema } from "@/types";
import { handleSignup } from "@/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import Button from "../button/button";
import { FormInput } from "../form-input";
import { LinkText } from "../link/link";

/**
 * Signup Form Component
 * @description A form component for user signup
 * @param {SignupFormProps} props - Props for the Signup Form
 * @returns {React.ReactNode} The rendered Signup Form component
 */
export const SignupForm: React.FC<SignupFormProps> = ({ onSignup }) => {
  const {
    register,
    handleSubmit,
    setFocus,
    setError,
    formState: { errors },
  } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
  });

  const router = useRouter();

  const onSubmit = (data: SignupFormData) => {
    const isSignupSuccessful = handleSignup(data, setError);
    if (isSignupSuccessful) {
      onSignup(data.email, data.password);
      router.push("/login");
    }
  };

  useEffect(() => {
    setFocus("email");
  }, [setFocus]);

  return (
    <div className="border rounded-md shadow-sm">
      <form
        onSubmit={handleSubmit(onSubmit)}
        aria-label="Signup Form"
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
          Sign up
        </Button>

        <LinkText
          text="Already have an account? "
          linkText="Log in"
          href="/login"
          className="text-gray-600"
        />
      </form>
    </div>
  );
};
