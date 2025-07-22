import { motion } from 'framer-motion';
import { FileText, Microscope, MessageSquare, MapPin, Camera, Smartphone } from 'lucide-react';

const IncludedSection = () => {
  const items = [
    {
      icon: FileText,
      title: "Arquivo completo em PDF",
      description: "39 páginas de investigação detalhada",
      delay: 0.1
    },
    {
      icon: Microscope,
      title: "Laudos forenses reais",
      description: "Análises científicas autênticas do caso",
      delay: 0.2
    },
    {
      icon: MessageSquare,
      title: "Entrevistas e transcrições policiais",
      description: "Depoimentos originais dos envolvidos",
      delay: 0.3
    },
    {
      icon: FileText,
      title: "Fragmentos de anotações ocultas",
      description: "Documentos que nunca vieram à tona",
      delay: 0.4
    },
    {
      icon: MapPin,
      title: "Mapas do condado + evidências visuais",
      description: "Localização precisa dos crimes",
      delay: 0.5
    },
    {
      icon: Smartphone,
      title: "Produto digital",
      description: "Para imprimir ou jogar direto no celular/notebook",
      delay: 0.6
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 vhs-noise opacity-15"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-typewriter text-vhs-red mb-8">
            O que está incluso:
          </h2>
          
          {/* Evidence label */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="inline-block stamp text-sm mb-8"
          >
            ARQUIVO DE EVIDÊNCIAS
          </motion.div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.8, delay: item.delay }}
              viewport={{ once: true }}
              className="evidence-card p-6 rounded-lg relative group transform-gpu"
            >
              {/* Background scanlines */}
              <div className="absolute inset-0 vhs-scanlines opacity-10 rounded-lg"></div>
              
              {/* Icon */}
              <motion.div 
                className="mb-6"
                whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                transition={{ duration: 0.5 }}
              >
                <item.icon className="w-10 h-10 text-evidence-gold" />
              </motion.div>

              {/* Title */}
              <h3 className="text-xl font-typewriter text-aged-paper mb-3 font-bold group-hover:text-evidence-gold transition-colors duration-300">
                {item.title}
              </h3>

              {/* Description */}
              <p className="font-mono text-muted-foreground text-sm leading-relaxed">
                {item.description}
              </p>

              {/* Corner tear effect */}
              <motion.div 
                className="absolute top-0 right-0 w-0 h-0 border-l-[20px] border-l-transparent border-t-[20px] border-t-evidence-gold opacity-20"
                whileHover={{ opacity: 40, scale: 1.2 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>

        {/* Featured Preview */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <div className="case-file rounded-lg p-8 text-center relative">
            {/* Confidential watermark */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-6xl md:text-8xl font-typewriter text-vhs-red opacity-5 transform rotate-12">
                CONFIDENCIAL
              </div>
            </div>
            
            <motion.div 
              className="relative z-10"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Camera className="w-16 h-16 text-evidence-gold mx-auto mb-6" />
              <h3 className="text-2xl md:text-3xl font-typewriter text-evidence-gold mb-4">
                Evidência Visual Exclusiva
              </h3>
              <p className="text-lg font-mono text-aged-paper leading-relaxed">
                Fotos da cena do crime, documentos manuscritos, mapas detalhados e muito mais. 
                Tudo em alta resolução para uma experiência investigativa imersiva.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default IncludedSection;