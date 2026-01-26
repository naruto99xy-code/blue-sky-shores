import { motion } from "framer-motion";
import { BookOpen, Users, Shield } from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Quality Education",
    description:
      "Comprehensive curriculum designed to foster critical thinking, creativity, and academic excellence in every student.",
  },
  {
    icon: Users,
    title: "Experienced Teachers",
    description:
      "Our dedicated faculty brings years of experience and passion for teaching, ensuring personalized attention for each child.",
  },
  {
    icon: Shield,
    title: "Safe & Friendly Environment",
    description:
      "A secure campus with a nurturing atmosphere where students feel comfortable to learn, grow, and express themselves.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
            Why Choose <span className="text-gradient">Blue Sky School</span>?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We are committed to providing an exceptional educational experience that 
            prepares students for a bright future.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card-elevated p-6 lg:p-8"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-xl text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
