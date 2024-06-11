"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { WixClientContext } from "../context/WixClientStoreProvider";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { LoginState } from "@wix/sdk";
import { Loader2 } from "lucide-react";

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters",
  }),
});

enum Mode {
  Login = "login",
  Register = "register",
}

export default function LoginPage() {
  const router = useRouter();
  const wixClient = useContext(WixClientContext);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const [mode, setMode] = useState<Mode>(Mode.Login);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    form.reset();
    form.clearErrors();
  }, []);

  useEffect(() => {
    setError(null);
    form.reset();
    form.clearErrors();
  }, [form, mode]);

  async function onSubmit(data: z.infer<typeof formSchema>) {
    setLoading(true);
    setError(null);

    let response;

    try {
      switch (mode) {
        case Mode.Login:
          response = await wixClient.auth.login({
            email: data.email,
            password: data.password,
          });
          break;
        case Mode.Register:
          response = await wixClient.auth.register({
            email: data.email,
            password: data.password,
          });
          break;
        default:
          break;
      }

      switch (response?.loginState) {
        case LoginState.SUCCESS:
          const tokens = await wixClient.auth.getMemberTokensForDirectLogin(
            response.data.sessionToken,
          );
          Cookies.set("refreshToken", JSON.stringify(tokens.refreshToken), {
            expires: 30,
          });
          wixClient.auth.setTokens(tokens);
          router.push("/");
          break;
        case LoginState.FAILURE:
          switch (response.errorCode) {
            case "invalidEmail":
            case "invalidPassword":
              setError("Invalid email or password");
              break;
            case "emailAlreadyExists":
              setError("Email already exists");
              break;
            case "resetPassword":
              setError("Please reset your password");
              break;
            default:
              break;
          }
          break;
        case LoginState.OWNER_APPROVAL_REQUIRED:
          setError("Owner approval required");
          break;
        case LoginState.EMAIL_VERIFICATION_REQUIRED:
          setError("Email verification required");
          break;
        default:
          setError("Something went wrong");
          break;
      }
    } catch (error) {
      setError("Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mx-auto max-w-80 py-16 md:py-32">
      <h1 className="mb-8 text-2xl font-bold">
        {mode === Mode.Login ? "Login" : "Register"}
      </h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Email" type="email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input placeholder="Password" type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={loading}>
              {loading ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : null}
              {mode === Mode.Login ? "Login" : "Register"}
            </Button>
          </div>
        </form>
      </Form>
      {error && <div className="mt-4 text-sm text-red-600">{error}</div>}
      <div className="my-8 text-right text-sm">
        {mode === Mode.Login && (
          <span>
            Don{"'"}t have an account?{" "}
            <button
              className="underline"
              onClick={() => setMode(Mode.Register)}
            >
              Register
            </button>
          </span>
        )}
        {mode === Mode.Register && (
          <span>
            Already have an account?{" "}
            <button className="underline" onClick={() => setMode(Mode.Login)}>
              Login
            </button>
          </span>
        )}
      </div>
    </div>
  );
}
