import React, { useState, useEffect } from "react";
import { supabase } from "../lib/supabaseClient";
import { X } from "lucide-react";
import { toast } from "sonner";

export function AuthModal({ isOpen, onClose, onAuthSuccess }) {
  const [mode, setMode] = useState<"login" | "signup">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [step, setStep] = useState<"email" | "code">("email");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen) {
      setStep("email");
      setEmail("");
      setVerificationCode("");
      setError(null);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleGoogleSignIn = async () => {
    setLoading(true);
    setError(null);
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: "google",
      });
      if (error) throw error;
    } catch (err: any) {
      setError(err.message || "Something went wrong");
      toast.error(err.message || "Failed to sign in with Google");
    } finally {
      setLoading(false);
    }
  };

  const handleSendCode = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      if (mode === "signup") {
        const { data, error: signUpError } = await supabase.auth.signUp({
          email,
          password,
          options: {
            emailRedirectTo: `${window.location.origin}`,
          },
        });

        if (!data.user?.identities?.length) {
          throw new Error('This email is already registered. Please log in instead.');
        }

        if (signUpError) throw signUpError;
        toast.success("Verification link sent to your email!");
        onClose();
      } else {
        const { error: signInError } = await supabase.auth.signInWithOtp({
          email,
        });

        if (signInError) throw signInError;
        setStep("code");
        toast.success("6-digit verification code sent to your email");
      }
    } catch (err: any) {
      setError(err.message || "Something went wrong");
      toast.error(err.message || "Failed to send verification code");
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyCode = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const { error: verifyError } = await supabase.auth.verifyOtp({
        email,
        token: verificationCode,
        type: "email",
      });

      if (verifyError) throw verifyError;

      onAuthSuccess?.();
      onClose();
      toast.success("Successfully logged in!");
    } catch (err: any) {
      setError(err.message || "Invalid verification code");
      toast.error(err.message || "Failed to verify code");
    } finally {
      setLoading(false);
    }
  };

  const handleResendCode = async () => {
    setLoading(true);
    setError(null);

    try {
      const { error: resendError } = await supabase.auth.signInWithOtp({
        email,
        options: {
          shouldCreateUser: mode === "signup",
        },
      });

      if (resendError) throw resendError;

      toast.success("New 6-digit verification code sent!");
    } catch (err: any) {
      setError(err.message || "Failed to resend code");
      toast.error(err.message || "Failed to resend code");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 overflow-y-auto">
      <div className="min-h-screen px-4 py-8 flex items-center justify-center">
        <div className="w-[min(95vw,440px)] bg-card border rounded-2xl shadow-2xl p-6 sm:p-8 relative">
          <button
            className="absolute top-4 right-4 p-2 rounded-full hover:bg-muted transition"
            onClick={onClose}
          >
            <X size={20} className="text-muted-foreground" />
          </button>

          <h2 className="text-2xl font-bold mb-6 text-center">
            {mode === "login" ? "Login" : "Sign Up"}
          </h2>

          <button
            type="button"
            onClick={handleGoogleSignIn}
            className="w-full flex items-center justify-center gap-2 py-2 mb-4 rounded bg-white text-black border hover:bg-gray-100 transition font-semibold"
            disabled={loading}
          >
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              className="w-5 h-5"
            />
            Continue with Google
          </button>

          <div className="flex items-center my-4">
            <hr className="flex-grow border-t" />
            <span className="px-2 text-xs text-muted-foreground">OR</span>
            <hr className="flex-grow border-t" />
          </div>

          {step === "email" ? (
            <form className="space-y-4" onSubmit={handleSendCode}>
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-muted-foreground mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full px-3 py-2 sm:px-4 sm:py-3 border rounded-lg bg-card text-card-foreground focus:ring-2 focus:ring-primary focus:border-transparent"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    autoFocus
                    autoComplete="email"
                  />
                </div>

                {mode === "signup" && (
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-muted-foreground mb-1">
                      Create Password
                    </label>
                    <input
                      type="password"
                      className="w-full px-3 py-2 sm:px-4 sm:py-3 border rounded-lg bg-card text-card-foreground focus:ring-2 focus:ring-primary focus:border-transparent"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      minLength={6}
                      placeholder="At least 6 characters"
                    />
                  </div>
                )}
              </div>

              {error && (
                <div className="text-red-500 text-sm text-center py-2">{error}</div>
              )}

              <button
                type="submit"
                className="w-full py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                disabled={loading}
              >
                {loading 
                  ? mode === "signup" ? "Creating Account..." : "Sending Code..."
                  : mode === "signup" ? "Create Account" : "Send Verification Code"
                }
              </button>
            </form>
          ) : (
            <form className="space-y-4" onSubmit={handleVerifyCode}>
              <div className="text-center text-sm text-muted-foreground mb-6">
                Enter the 6-digit verification code sent to your email
              </div>
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-2">
                  Verification Code
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 sm:px-4 sm:py-3 border rounded-lg bg-card text-card-foreground font-mono tracking-widest text-center focus:ring-2 focus:ring-primary focus:border-transparent"
                  value={verificationCode}
                  onChange={(e) => {
                    const value = e.target.value.replace(/\D/g, "").slice(0, 6);
                    setVerificationCode(value);
                  }}
                  required
                  autoFocus
                  maxLength={6}
                  pattern="\d{6}"
                  inputMode="numeric"
                  placeholder="0 0 0 0 0 0"
                />
              </div>

              {error && (
                <div className="text-red-500 text-sm text-center py-2">{error}</div>
              )}

              <div className="flex flex-col space-y-3">
                <button
                  type="submit"
                  className="w-full py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  disabled={loading || verificationCode.length !== 6}
                >
                  {loading ? "Verifying..." : "Verify Code"}
                </button>
                <button
                  type="button"
                  className="w-full py-2.5 text-sm font-medium rounded-lg border border-input bg-transparent hover:bg-accent hover:text-accent-foreground transition"
                  onClick={handleResendCode}
                  disabled={loading}
                >
                  {loading ? "Sending..." : "Resend Code"}
                </button>
                <button
                  type="button"
                  className="text-sm text-muted-foreground hover:text-foreground transition underline"
                  onClick={() => setStep("email")}
                  disabled={loading}
                >
                  Use a different email
                </button>
              </div>
            </form>
          )}

          <div className="mt-6 text-center text-sm">
            {mode === "login" ? (
              <>
                Don't have an account?{" "}
                <button
                  className="text-primary underline"
                  onClick={() => {
                    setMode("signup");
                    setStep("email");
                    setError(null);
                  }}
                  type="button"
                >
                  Sign Up
                </button>
              </>
            ) : (
              <>
                Already have an account?{" "}
                <button
                  className="text-primary underline"
                  onClick={() => {
                    setMode("login");
                    setStep("email");
                    setError(null);
                  }}
                  type="button"
                >
                  Login
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
