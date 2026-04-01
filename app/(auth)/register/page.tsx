"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/lib/auth-store";
import { RegisterForm } from "./register-form";
import { GraduationCap, Shield, BookOpen, Users } from "lucide-react";

export default function RegisterPage() {
  const router = useRouter();
  const user = useAuthStore((state) => state.user);

  useEffect(() => {
    if (user) {
      router.replace("/dashboard");
    }
  }, [user, router]);

  return (
    <div className="flex min-h-screen">
      <div className="hidden lg:flex lg:w-120 xl:w-135 flex-col justify-between bg-blue-600 p-10 text-white">
        <div className="flex items-center gap-3">
          <div className="flex size-12 items-center justify-center rounded-lg bg-white/15">
            <GraduationCap className="size-6" />
          </div>
          <div>
            <p className="text-2xl font-semibold leading-tight">WTMS</p>
            <p className="text-sm text-blue-100">Wing Training Management System</p>
          </div>
        </div>

        <div className="space-y-6">
          <h1 className="text-3xl font-bold leading-tight">
            Empower Your Team with Structured Training
          </h1>
          <p className="text-sm text-blue-50/80">
            Wing Bank&apos;s internal training platform for managing sessions,
            materials, and tracking employee progress across all departments.
          </p>
          <div className="flex flex-col gap-3 text-sm text-blue-100/70">
            <div className="flex items-center gap-2">
              <Shield className="size-4" />
              <span>Secure internal platform</span>
            </div>
            <div className="flex items-center gap-2">
              <BookOpen className="size-4" />
              <span>Manage training sessions & materials</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="size-4" />
              <span>Track employee progress & attendance</span>
            </div>
          </div>
        </div>

        <p className="text-xs text-blue-200/50">
          Wing (Cambodia) Limited Specialised Bank
        </p>
      </div>

      <div className="flex flex-1 flex-col items-center justify-center bg-white px-6 py-10">
        <div className="mb-8 flex items-center gap-2 lg:hidden">
          <div className="flex size-9 items-center justify-center rounded-lg bg-blue-600 text-white">
            <GraduationCap className="size-5" />
          </div>
          <span className="text-lg font-semibold">WTMS</span>
        </div>

        <div className="w-full max-w-lg space-y-6">
          <RegisterForm onSwitchToLoginAction={() => router.push("/login")} />
        </div>
      </div>
    </div>
  );
}
