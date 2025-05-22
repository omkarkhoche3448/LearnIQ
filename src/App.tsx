import { ThemeProvider } from "@/components/ThemeProvider";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import { TeacherRoute } from "@/components/TeacherRoute";
import { StudentRoute } from "@/components/StudentRoute";
import NotFound from "./pages/NotFound";
import { lazy, Suspense, ReactNode } from "react";

// Landing page
const Landing = lazy(() => import("./pages/Landing"));

// Existing pages
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Assignment = lazy(() => import("./pages/Assignment"));
const BatchDetails = lazy(() => import("./pages/BatchDetails"));

// Auth pages
const Login = lazy(() => import("./pages/Login"));
const Register = lazy(() => import("./pages/Register"));
const ForgotPassword = lazy(() => import("./pages/ForgotPassword"));
const ResetPassword = lazy(() => import("./pages/ResetPassword"));
const Profile = lazy(() => import("./pages/Profile"));