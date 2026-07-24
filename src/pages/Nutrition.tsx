import { motion } from "motion/react";
import { 
  Utensils, 
  Sprout, 
  Leaf, 
  CheckCircle2, 
  Clock, 
  Calendar,
  Apple,
  Clock3
} from "lucide-react";

interface MenuRow {
  monday: string[];
  tuesday: string[];
  wednesday: string[];
  thursday: string[];
  friday: string[];
}

const menuData: { [key: string]: MenuRow[] } = {
  "Week 1": [
    {
      monday: ["Roti", "Bhindi Sabzi", "Rice", "Mangalore Sautekai Sambar"],
      tuesday: ["Vegetable Pulao", "Raitha", "Atta Sheera"],
      wednesday: ["Roti", "Khol Sabzi", "Rice", "Bhindi Sambar"],
      thursday: ["Methi Roti", "Coconut Chutney", "Rice", "Majjigehulli"],
      friday: ["Rice", "Vegetable Sambar", "Beans Kalu Palya", "Banana Chips", "Moongdal Kheer"]
    }
  ],
  "Week 2": [
    {
      monday: ["Roti", "Beetroot Sabzi", "Rice", "Lemon Rasam"],
      tuesday: ["Roti", "Ivy Gourd Sabzi", "Rice", "Green Moong Dal", "Besan Ladoo"],
      wednesday: ["Rice", "Vegetable Sambar", "Papad"],
      thursday: ["Roti", "Black Chana Masala", "Puliyogare Rice"],
      friday: ["Roti", "Tomato Gojju", "Rice", "Doodhi Chana", "Fruit Custard"]
    }
  ],
  "Week 3": [
    {
      monday: ["Vangi Bath", "Raita"],
      tuesday: ["Roti", "White Lobia Usli", "Rice", "Majjigehulli", "Rava Ladoo"],
      wednesday: ["Roti", "Chayote Sabzi", "Rice", "Dal Palak Sambar"],
      thursday: ["Roti", "Raw Mango Chutney", "Orange Masoor Dal"],
      friday: ["Roti", "Horse Gram", "Sprouts & Spinach Sabzi", "Rice", "Bassaru Sambar", "Kesaribath"]
    }
  ],
  "Week 4": [
    {
      monday: ["Roti", "Cabbage Sabzi", "Rice", "Dal Methi Sambar"],
      tuesday: ["Roti", "Mixed Vegetable Sabzi", "Jeera Rice", "Sabudana Kheer"],
      wednesday: ["Vegetable Pulao", "Raitha"],
      thursday: ["Roti", "Black Chana Usli", "Rice", "Rasam Masala Vada"],
      friday: ["Roti", "Jeera Rice", "Moong Dal Sambar", "Modak"]
    }
  ],
  "Week 5": [
    {
      monday: ["Roti", "Brinjal & Methi Sabzi", "Rice", "Black Masoor Dal"],
      tuesday: ["Poori", "Aloo Sabzi", "Coconut Rice", "Vermicelli Kheer"],
      wednesday: ["Tomato Bhat", "Raita"],
      thursday: ["Roti", "Cluster Bean Sabzi", "Rice", "Red Lobia Sambar"],
      friday: ["Roti", "Papaya Sabzi", "Rice", "Dantu Soppu Sambar", "Gulab Jamun"]
    }
  ],
  "Week 6": [
    {
      monday: ["Roti", "Long Beans Sabzi", "Rice", "Alasandalu Pulusu"],
      tuesday: ["Roti", "Ennegayi", "Jeera Rice", "Sabudana Kheer"],
      wednesday: ["Roti", "Tomato Gojju", "Rice", "Dudhi Chana"],
      thursday: ["Roti", "Ridge Gourd Sabzi", "Rice", "Rasam"],
      friday: ["Roti", "Corn Palak Sabzi", "Khara Pongal", "Sweet Pongal"]
    }
  ]
};

export function Nutrition() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-24">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover" 
            alt="Healthy Food" 
          />
          <div className="absolute inset-0 bg-brand-navy/60 backdrop-blur-[2px]" />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-gold/20 text-brand-gold text-xs font-bold mb-6 uppercase tracking-widest border border-brand-gold/30"
          >
            <Apple className="w-4 h-4" /> Healthy Living
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-heading text-5xl sm:text-7xl font-bold text-white mb-8 tracking-tight"
          >
            Nutrition <span className="text-brand-gold">@ VVP</span>
          </motion.h1>
          <div className="w-24 h-1.5 bg-brand-gold mx-auto rounded-full mb-8" />
        </div>
      </section>

      {/* Core Philosophy */}
      <section className="py-24 px-6 sm:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-3xl sm:text-5xl font-bold text-brand-navy mb-8 leading-tight">
                Fueling Growth with <br />
                <span className="text-brand-crimson">Balanced Nutrition</span>
              </h2>
              <p className="text-xl text-text-medium leading-relaxed mb-8">
                Food and nutrition are integral to ensuring the children's overall growth. The in-house catered vegetarian lunch is mandatory for every student. It features a balanced diet that provides a nutritious and tasty breakfast.
              </p>
              <div className="space-y-4">
                {[
                  "Mandatory in-house catered vegetarian lunch",
                  "Balanced diet with nutritious breakfast",
                  "Vegetables grown in the school garden",
                  "Strict 'no waste of food' policy"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4">
                    <CheckCircle2 className="w-6 h-6 text-brand-gold" />
                    <span className="text-lg font-bold text-brand-navy">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-brand-gold -rotate-2 rounded-[60px] opacity-10" />
              <img 
                src="https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&q=80&w=1200" 
                className="relative rounded-[60px] shadow-2xl object-cover aspect-[4/3] w-full" 
                alt="School Cooking" 
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Nutrition Week Section */}
      <section className="py-24 px-6 sm:px-12 bg-brand-ivory/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl sm:text-6xl font-bold text-brand-navy mb-6 tracking-tight">
              Nutrition Week <span className="text-brand-crimson">2026</span>
            </h2>
            <p className="text-xl text-text-medium max-w-3xl mx-auto leading-relaxed">
              Every year, we celebrate Nutrition Week to raise awareness about food. This year, it promoted traditional millet-based food. As a result, students were instructed to bring a specific millet on a specific day of the week.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { day: "Foxtail Millet Day", icon: Sprout },
              { day: "Ragi Day", icon: Leaf },
              { day: "Bajra Day", icon: Calendar },
              { day: "Jowar Day", icon: Clock },
              { day: "Barnyard Day", icon: Utensils }
            ].map((mil, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-[40px] shadow-lg text-center flex flex-col items-center border border-gray-100"
              >
                <div className="w-16 h-16 rounded-2xl bg-brand-gold/10 flex items-center justify-center text-brand-gold mb-6">
                  <mil.icon className="w-8 h-8" />
                </div>
                <h4 className="font-bold text-brand-navy leading-tight">{mil.day}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lunch Menu Section */}
      <section className="py-24 px-6 sm:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div>
              <div className="flex items-center gap-3 text-brand-crimson font-black uppercase tracking-[0.3em] text-xs mb-4">
                <Clock3 className="w-4 h-4" /> Freshly Prepared
              </div>
              <h2 className="font-heading text-4xl sm:text-6xl font-bold text-brand-navy tracking-tight">
                Student <span className="text-brand-crimson">Lunch Menu</span>
              </h2>
            </div>
            <div className="flex items-center gap-4 p-4 bg-brand-ivory rounded-3xl border-l-4 border-brand-gold">
               <p className="text-sm font-bold text-brand-navy leading-relaxed italic max-w-sm">
                 "Our menu is rotated weekly to ensure variety and a complete nutritional profile for growing students."
               </p>
            </div>
          </div>

          <div className="space-y-24">
            {Object.entries(menuData).map(([week, rows]) => (
              <div key={week} className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="h-0.5 w-12 bg-brand-crimson" />
                  <h3 className="font-heading text-3xl font-bold text-brand-navy">{week}</h3>
                </div>
                
                <div className="overflow-x-auto rounded-[40px] shadow-2xl border border-gray-100 bg-white">
                  <table className="w-full min-w-[800px] border-collapse">
                    <thead>
                      <tr className="bg-brand-navy text-white">
                        <th className="py-8 px-6 text-left font-bold uppercase tracking-widest text-xs border-r border-white/10">Monday</th>
                        <th className="py-8 px-6 text-left font-bold uppercase tracking-widest text-xs border-r border-white/10">Tuesday</th>
                        <th className="py-8 px-6 text-left font-bold uppercase tracking-widest text-xs border-r border-white/10">Wednesday</th>
                        <th className="py-8 px-6 text-left font-bold uppercase tracking-widest text-xs border-r border-white/10">Thursday</th>
                        <th className="py-8 px-6 text-left font-bold uppercase tracking-widest text-xs">Friday</th>
                      </tr>
                    </thead>
                    <tbody>
                      {rows.map((row, idx) => (
                        <tr key={idx} className="group hover:bg-zinc-50 transition-colors">
                          <td className="py-8 px-6 align-top border-r border-gray-100">
                            <ul className="space-y-3">
                              {row.monday.map((item, i) => (
                                <li key={i} className="text-brand-navy font-medium flex items-start gap-2">
                                  <div className="w-1.5 h-1.5 rounded-full bg-brand-gold mt-2 shrink-0" />
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </td>
                          <td className="py-8 px-6 align-top border-r border-gray-100">
                            <ul className="space-y-3">
                              {row.tuesday.map((item, i) => (
                                <li key={i} className="text-brand-navy font-medium flex items-start gap-2">
                                  <div className="w-1.5 h-1.5 rounded-full bg-brand-crimson mt-2 shrink-0" />
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </td>
                          <td className="py-8 px-6 align-top border-r border-gray-100">
                            <ul className="space-y-3">
                              {row.wednesday.map((item, i) => (
                                <li key={i} className="text-brand-navy font-medium flex items-start gap-2">
                                  <div className="w-1.5 h-1.5 rounded-full bg-brand-navy mt-2 shrink-0" />
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </td>
                          <td className="py-8 px-6 align-top border-r border-gray-100">
                            <ul className="space-y-3">
                              {row.thursday.map((item, i) => (
                                <li key={i} className="text-brand-navy font-medium flex items-start gap-2">
                                  <div className="w-1.5 h-1.5 rounded-full bg-brand-gold mt-2 shrink-0" />
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </td>
                          <td className="py-8 px-6 align-top">
                            <ul className="space-y-3">
                              {row.friday.map((item, i) => (
                                <li key={i} className="text-brand-navy font-medium flex items-start gap-2">
                                  <div className="w-1.5 h-1.5 rounded-full bg-brand-crimson mt-2 shrink-0" />
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Banner */}
      <section className="py-24 bg-brand-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Utensils className="absolute top-0 right-0 w-96 h-96 -translate-y-1/2 translate-x-1/2" />
          <Sprout className="absolute bottom-0 left-0 w-96 h-96 translate-y-1/2 -translate-x-1/2" />
        </div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <div className="w-20 h-1 bg-brand-gold mx-auto rounded-full mb-12" />
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-8 italic">
            "Food and nutrition are integral to ensuring the children's overall growth."
          </h2>
          <p className="text-brand-gold font-bold uppercase tracking-[0.3em] text-sm">
            Nourishing Mind, Body & Spirit
          </p>
        </div>
      </section>
    </main>
  );
}
