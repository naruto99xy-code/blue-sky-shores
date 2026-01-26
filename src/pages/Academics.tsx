import { motion } from "framer-motion";
import { 
  BookOpen, 
  GraduationCap, 
  Palette, 
  Trophy, 
  Music, 
  Globe,
  Calculator,
  Microscope,
  Languages,
  Monitor
} from "lucide-react";

const classes = [
  { name: "Pre-Primary", grades: "Nursery, LKG, UKG", icon: BookOpen },
  { name: "Primary", grades: "Classes 1 - 5", icon: GraduationCap },
  { name: "Middle School", grades: "Classes 6 - 8", icon: BookOpen },
  { name: "Secondary", grades: "Classes 9 - 10", icon: GraduationCap },
];

const subjects = [
  { name: "Mathematics", icon: Calculator },
  { name: "Science", icon: Microscope },
  { name: "English", icon: Languages },
  { name: "Hindi", icon: Languages },
  { name: "Social Studies", icon: Globe },
  { name: "Computer Science", icon: Monitor },
];

const activities = [
  { 
    name: "Sports", 
    icon: Trophy, 
    items: ["Cricket", "Football", "Basketball", "Athletics", "Yoga"] 
  },
  { 
    name: "Arts", 
    icon: Palette, 
    items: ["Drawing", "Painting", "Craft", "Photography"] 
  },
  { 
    name: "Cultural", 
    icon: Music, 
    items: ["Dance", "Music", "Drama", "Debate", "Quiz"] 
  },
];

const Academics = () => {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-muted">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-4">
              Our <span className="text-gradient">Academics</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              A comprehensive curriculum designed for holistic development
            </p>
          </motion.div>
        </div>
      </section>

      {/* Classes Offered */}
      <section className="section-padding">
        <div className="section-container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading font-bold text-3xl text-foreground text-center mb-10"
          >
            Classes Offered
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {classes.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-elevated p-6 text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                  {item.name}
                </h3>
                <p className="text-sm text-muted-foreground">{item.grades}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Subjects */}
      <section className="section-padding bg-muted">
        <div className="section-container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading font-bold text-3xl text-foreground text-center mb-10"
          >
            Core Subjects
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {subjects.map((subject, index) => (
              <motion.div
                key={subject.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-card rounded-xl p-4 text-center border border-border hover:border-primary/30 transition-colors"
              >
                <subject.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <p className="font-medium text-sm text-foreground">{subject.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Activities */}
      <section className="section-padding">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="font-heading font-bold text-3xl text-foreground mb-4">
              Extra-Curricular Activities
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We believe in the all-round development of our students through various 
              sports, arts, and cultural activities.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {activities.map((activity, index) => (
              <motion.div
                key={activity.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-elevated p-6"
              >
                <div className="w-14 h-14 rounded-xl bg-accent/20 flex items-center justify-center mb-6">
                  <activity.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-heading font-semibold text-xl text-foreground mb-4">
                  {activity.name}
                </h3>
                <ul className="space-y-2">
                  {activity.items.map((item) => (
                    <li key={item} className="text-muted-foreground flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Academics;
