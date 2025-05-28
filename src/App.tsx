
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Colleges from "./pages/Colleges";
import CollegeDetails from "./pages/CollegeDetails";
import CourseDetails from "./pages/CourseDetails";
import Articles from "./pages/Articles";
import ArticleDetails from "./pages/ArticleDetails";
import NewsDetails from "./pages/NewsDetails";
import StudentForm from "./pages/StudentForm";
import Exams from "./pages/Exams";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/colleges" element={<Colleges />} />
          <Route path="/college/:id" element={<CollegeDetails />} />
          <Route path="/course/:courseName" element={<CourseDetails />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/article/:id" element={<ArticleDetails />} />
          <Route path="/news/:id" element={<NewsDetails />} />
          <Route path="/student-form" element={<StudentForm />} />
          <Route path="/exams" element={<Exams />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
