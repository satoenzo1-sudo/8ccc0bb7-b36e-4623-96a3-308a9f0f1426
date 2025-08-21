import { motion } from 'framer-motion';
import { FileText, Microscope, MessageSquare, MapPin, Camera, Smartphone } from 'lucide-react';

const IncludedSection = () => {
  const items = [
    {
      icon: FileText,
      title: "📼 Arquivo secreto em estilo policial",
      description: "com páginas manchadas e relatos escondidos.",
      delay: 0.1
    },
    {
      icon: Microscope,
      title: "🩸 Laudos forenses digitalizados",
      description: "como se tivessem saído de uma investigação real.",
      delay: 0.2
    },
    {
      icon: MessageSquare,
      title: "🕵️‍♂️ Relatórios confidenciais dos detetives",
      description: "que falharam antes de você.",
      delay: 0.3
    },
    {
      icon: Camera,
      title: "📷 Fotografias reveladas e documentos escaneados",
      description: "direto dos anos 70.",
      delay: 0.4
    },
    {
      icon: MapPin,
      title: "🔍 Pistas e enigmas ocultos",
      description: "para você e seu parceiro(a) desvendar.",
      delay: 0.5
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
          
          {/* Limited access trigger */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-8 bg-vhs-red/10 border border-vhs-red px-6 py-4 rounded-lg max-w-md mx-auto"
          >
            <p className="font-mono text-vhs-red font-bold text-lg">
              🔒 ARQUIVOS CONFIDENCIAIS
            </p>
            <p className="font-mono text-aged-paper text-sm mt-2">
              Acesso limitado a apenas 500 investigadores por mês
            </p>
          </motion.div>
          
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

        {/* Video Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-typewriter text-evidence-gold mb-8 px-4">
            Assista ao depoimento abaixo de quem já adquiriu o Caso Red Ridge - VHS 13 ↓
          </h3>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          viewport={{ once: true }}
          className="max-w-md mx-auto"
        >
          <div 
            className="relative overflow-hidden rounded-2xl shadow-lg"
            style={{ paddingBottom: '177.78%', height: 0 }}
          >
            <iframe 
              src="https://www.youtube.com/embed/FI7qlIjCgsM" 
              title="Assista ao vídeo abaixo de quem já adiquiriu o Caso Red Ridge - VHS 13 ↓"
              className="absolute top-0 left-0 w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default IncludedSection;