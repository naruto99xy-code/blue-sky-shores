import { motion } from "framer-motion";
import { Target, Eye, CheckCircle2 } from "lucide-react";

const whyChooseUs = [
  "Holistic development approach",
  "State-of-the-art facilities",
  "Small class sizes for personalized attention",
  "Strong parent-teacher collaboration",
  "Focus on values and character building",
  "Extra-curricular activities for all-round growth",
];

const About = () => {
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
              About <span className="text-gradient">Blue Sky School</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Building tomorrow's leaders through quality education and values
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&h=600&fit=crop"
                alt="Students learning in classroom"
                className="rounded-2xl shadow-lg w-full"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="font-heading font-bold text-3xl text-foreground">
                Our Story
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Blue Sky School was founded with a vision to provide quality education 
                that nurtures not just academic excellence but also character development 
                and life skills. We believe that every child is unique and deserves an 
                environment where they can discover their potential and grow into 
                confident, responsible individuals.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our dedicated team of educators works tirelessly to create a learning 
                experience that is engaging, inclusive, and inspiring. We combine 
                traditional teaching methods with modern pedagogical approaches to 
                ensure our students are well-prepared for the challenges of tomorrow.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding bg-muted">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="card-elevated p-8"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading font-bold text-2xl text-foreground mb-4">
                Our Vision
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                To be a leading educational institution that empowers students to 
                become lifelong learners, critical thinkers, and compassionate 
                global citizens who contribute positively to society.
              </p>
            </motion.div>

            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="card-elevated p-8"
            >
              <div className="w-14 h-14 rounded-xl bg-accent/20 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-heading font-bold text-2xl text-foreground mb-4">
                Our Mission
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                To provide a nurturing and stimulating learning environment that 
                fosters academic excellence, creativity, physical fitness, and 
                moral values, preparing students to meet the challenges of an 
                ever-changing world.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="font-heading font-bold text-3xl text-foreground">
                Why Choose <span className="text-gradient">Blue Sky School</span>?
              </h2>
              <p className="text-muted-foreground">
                We go beyond academics to provide a complete educational experience 
                that prepares students for life.
              </p>
              <ul className="space-y-4">
                {whyChooseUs.map((item, index) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&h=600&fit=crop"
                alt="Happy students"
                className="rounded-2xl shadow-lg w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
