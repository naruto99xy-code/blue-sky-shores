import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { GraduationCap, ArrowRight, BookOpen, Users, Shield } from "lucide-react";
import CursorTrailLine from "./CursorFollowLine";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background">
      {/* Cursor Trail Effect - Desktop Only */}
      <CursorTrailLine />

      {/* Light Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Soft gradient orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-32 right-20 w-96 h-96 bg-accent/8 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-primary/3 rounded-full blur-3xl" />
        
        {/* Decorative shapes */}
        <div className="absolute top-32 right-32 w-4 h-4 bg-accent rounded-full opacity-60" />
        <div className="absolute bottom-40 left-1/4 w-3 h-3 bg-primary rounded-full opacity-40" />
        <div className="absolute top-1/2 left-20 w-2 h-2 bg-secondary rounded-full opacity-30" />
      </div>

      <div className="section-container relative z-10 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6"
            >
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm font-medium text-primary">Admissions Open 2025-26</span>
            </motion.div>

            {/* School Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-4"
            >
              Welcome to{" "}
              <span className="text-gradient">Blue Sky School</span>
            </motion.h1>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl text-primary font-medium mb-6"
            >
              "Education is the Only Solution"
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8"
            >
              Nurturing young minds with quality education, experienced teachers, and a safe, 
              friendly environment. Join our community of lifelong learners.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <Link to="/admissions" className="btn-accent group">
                Apply for Admission
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link to="/about" className="btn-outline">
                Learn More About Us
              </Link>
            </motion.div>
          </div>

          {/* Right Content - Feature Cards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="grid gap-4"
          >
            {/* Main Card */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-border">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center">
                  <GraduationCap className="w-7 h-7 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-lg text-foreground">Blue Sky School</h3>
                  <p className="text-sm text-muted-foreground">Excellence in Education</p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { icon: BookOpen, label: "Quality Education", color: "bg-primary/10 text-primary" },
                  { icon: Users, label: "Expert Teachers", color: "bg-accent/20 text-accent-foreground" },
                  { icon: Shield, label: "Safe Environment", color: "bg-secondary/10 text-secondary" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center text-center p-3 rounded-xl bg-muted/50"
                  >
                    <div className={`w-10 h-10 rounded-lg ${item.color} flex items-center justify-center mb-2`}>
                      <item.icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-medium text-foreground">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { value: "500+", label: "Students" },
                { value: "50+", label: "Teachers" },
                { value: "15+", label: "Years" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="bg-white rounded-xl p-4 text-center shadow-md border border-border"
                >
                  <div className="font-heading font-bold text-2xl text-primary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-primary/30 flex items-start justify-center p-1">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1.5 h-1.5 bg-primary rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
