"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ErrorMessage, Field, Form, Formik, FieldProps } from "formik";
import { Eye, EyeOff, Loader2 } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import * as Yup from "yup";

const validationSchema = Yup.object({
  email: Yup.string().required("Username or email is required"),
  password: Yup.string().required("Password is required"),
});
type Props = {};

export default function LoginForm({}: Props) {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (_values: { email: string; password: string }, { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }) => {
    try {
    } catch (error) {
      console.error("Error logging in:", error);
      toast.error("An error occurred during login");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={{
        email: "",
        password: "",
      }}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className="space-y-4 ">
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium leading-none">
              Email
            </label>
            <Field name="email">{({ field }: FieldProps) => <Input {...field} type="email" placeholder="Enter your email" required className="bg-white dark:bg-transparent" />}</Field>
            <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
          </div>

          <div className="space-y-2">
            <label htmlFor="password" className="text-sm font-medium leading-none">
              Password
            </label>
            <Field name="password">
              {({ field }: FieldProps) => (
                <div className="relative">
                  <Input {...field} type={showPassword ? "text" : "password"} placeholder="Enter your password" required className="bg-white pr-10 dark:bg-transparent" />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none dark:text-gray-300 dark:hover:text-gray-200"
                    onClick={() => setShowPassword(!showPassword)}
                    tabIndex={-1}
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              )}
            </Field>
            <ErrorMessage name="password" component="div" className="text-red-500 text-sm" />
          </div>

          <Button type="submit" className="w-full bg-brand hover:!bg-[var(--color-brand-600)] text-brand-foreground" disabled={isSubmitting}>
            {isSubmitting ? <Loader2 className="animate-spin size-4" /> : "Sign In"}
          </Button>
        </Form>
      )}
    </Formik>
  );
}
