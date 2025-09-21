import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img 
          src="/img/9c2ff23c-c5fe-44c2-ba12-fb9581192ad9.jpg" 
          alt="Background" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-luxury-burgundy/20 to-black/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center space-y-8 animate-fade-in">
        {/* Portrait */}
        <div className="flex justify-center mb-8">
          <div className="relative group">
            <div className="absolute inset-0 bg-luxury-gold/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300" />
            <img 
              src="/img/d3d50838-c2d7-4f6a-90ab-9f275840305b.jpg" 
              alt="Profile" 
              className="relative w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-luxury-gold/50 shadow-2xl transition-all duration-300 group-hover:scale-105"
            />
          </div>
        </div>

        {/* Main Heading */}
        <div className="space-y-4 animate-slide-up">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold tracking-tight">
            <span className="luxury-text-gradient">Эксклюзив</span>
            <span className="text-white">.</span>
            <span className="luxury-text-gradient"> Страсть</span>
            <span className="text-white">.</span>
          </h1>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-sans font-light text-luxury-gold/80">
            Только для взрослых
          </h2>
        </div>

        {/* Description */}
        <div className="max-w-2xl mx-auto space-y-4 animate-fade-in delay-200">
          <p className="text-lg md:text-xl text-white/80 leading-relaxed">
            Присоединяйтесь к моему закрытому пространству — личные фото и шоу, 
            которые вы не увидите нигде больше
          </p>
          <p className="text-luxury-gold/60 font-light">
            Эстетичный и приватный контент для тех, кто ценит утончённую эротику
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up delay-300">
          <Button className="premium-button group">
            <Icon name="Crown" className="h-5 w-5 mr-2 group-hover:rotate-12 transition-transform" />
            Подписаться сейчас
          </Button>
          
          <Button 
            variant="outline" 
            className="border-luxury-gold/30 text-luxury-gold hover:bg-luxury-gold/10 hover:border-luxury-gold/50 transition-all duration-300"
          >
            <Icon name="Image" className="h-5 w-5 mr-2" />
            Посмотреть галерею
          </Button>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 animate-fade-in delay-500">
          <div className="glass-effect p-6 rounded-lg group hover:scale-105 transition-all duration-300">
            <Icon name="Diamond" className="h-8 w-8 text-luxury-gold mx-auto mb-3" />
            <h3 className="font-serif text-lg text-luxury-gold mb-2">Эксклюзивный контент</h3>
            <p className="text-sm text-white/70">Уникальные фото и видео только для подписчиков</p>
          </div>

          <div className="glass-effect p-6 rounded-lg group hover:scale-105 transition-all duration-300">
            <Icon name="Lock" className="h-8 w-8 text-luxury-gold mx-auto mb-3" />
            <h3 className="font-serif text-lg text-luxury-gold mb-2">Приватность</h3>
            <p className="text-sm text-white/70">Полная конфиденциальность и защита данных</p>
          </div>

          <div className="glass-effect p-6 rounded-lg group hover:scale-105 transition-all duration-300">
            <Icon name="MessageCircle" className="h-8 w-8 text-luxury-gold mx-auto mb-3" />
            <h3 className="font-serif text-lg text-luxury-gold mb-2">Личное общение</h3>
            <p className="text-sm text-white/70">Индивидуальные сообщения и персональные шоу</p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Icon name="ChevronDown" className="h-6 w-6 text-luxury-gold/60" />
      </div>
    </section>
  );
};

export default Hero;