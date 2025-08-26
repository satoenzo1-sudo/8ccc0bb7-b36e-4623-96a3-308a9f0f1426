import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 24,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime.seconds > 0) {
          return { ...prevTime, seconds: prevTime.seconds - 1 };
        } else if (prevTime.minutes > 0) {
          return { ...prevTime, minutes: prevTime.minutes - 1, seconds: 59 };
        } else if (prevTime.hours > 0) {
          return { hours: prevTime.hours - 1, minutes: 59, seconds: 59 };
        } else {
          // Reset to 24 hours when timer ends
          return { hours: 24, minutes: 0, seconds: 0 };
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-vhs-red/20 border-2 border-vhs-red rounded-lg p-6 mt-6"
    >
      <div className="text-center">
        <p className="font-mono text-vhs-red font-bold text-sm mb-3">
          ⏰ TEMPO RESTANTE DA OFERTA:
        </p>
        
        <div className="flex justify-center space-x-4 mb-4">
          <div className="bg-carbon-black/50 rounded-lg p-3 min-w-[60px]">
            <div className="text-2xl font-typewriter text-evidence-gold font-bold">
              {timeLeft.hours.toString().padStart(2, '0')}
            </div>
            <div className="text-xs font-mono text-aged-paper">HORAS</div>
          </div>
          
          <div className="bg-carbon-black/50 rounded-lg p-3 min-w-[60px]">
            <div className="text-2xl font-typewriter text-evidence-gold font-bold">
              {timeLeft.minutes.toString().padStart(2, '0')}
            </div>
            <div className="text-xs font-mono text-aged-paper">MIN</div>
          </div>
          
          <div className="bg-carbon-black/50 rounded-lg p-3 min-w-[60px]">
            <div className="text-2xl font-typewriter text-evidence-gold font-bold">
              {timeLeft.seconds.toString().padStart(2, '0')}
            </div>
            <div className="text-xs font-mono text-aged-paper">SEG</div>
          </div>
        </div>
        
        <p className="font-mono text-aged-paper text-sm">
          Oferta de lançamento, pode acabar a qualquer momento
        </p>
      </div>
    </motion.div>
  );
};

export default CountdownTimer;