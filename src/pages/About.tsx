import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const About = () => {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(0);

  const images = [
    '/img/d3d50838-c2d7-4f6a-90ab-9f275840305b.jpg',
    '/img/fbe163e1-6ae3-440f-8625-d5b621cc4e32.jpg',
  ];

  const stats = [
    { label: 'Подписчиков', value: '15K+', icon: 'Users' },
    { label: 'Эксклюзивных фото', value: '500+', icon: 'Image' },
    { label: 'Видео контента', value: '100+', icon: 'Video' },
    { label: 'Личных шоу', value: '50+', icon: 'Radio' },
  ];

  const interests = ['Фотография', 'Искусство', 'Путешествия', 'Мода', 'Танцы', 'Фитнес'];

  return (
    <Layout>
      <div className="min-h-screen py-20">
        <div className="container mx-auto px-6 max-w-6xl">
          {/* Hero Section */}
          <div className="text-center mb-16 space-y-4 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif">
              <span className="luxury-text-gradient">Обо мне</span>
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Добро пожаловать в мой мир эстетики и соблазна
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Images Section */}
            <div className="space-y-6">
              {/* Main Image */}
              <div className="relative group overflow-hidden rounded-lg">
                <img 
                  src={images[selectedImage]} 
                  alt="Profile" 
                  className="w-full aspect-[3/4] object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Thumbnail Navigation */}
              <div className="grid grid-cols-2 gap-4">
                {images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative overflow-hidden rounded-lg transition-all duration-300 ${
                      selectedImage === index 
                        ? 'ring-2 ring-luxury-gold scale-95' 
                        : 'hover:scale-95'
                    }`}
                  >
                    <img 
                      src={img} 
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full aspect-square object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30" />
                  </button>
                ))}
              </div>
            </div>

            {/* Bio Section */}
            <div className="space-y-8">
              {/* Introduction */}
              <Card className="glass-effect border-luxury-gold/20">
                <CardContent className="p-8 space-y-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="h-16 w-16 rounded-full bg-luxury-gold/20 flex items-center justify-center">
                      <Icon name="Sparkles" className="h-8 w-8 text-luxury-gold" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-serif luxury-text-gradient">Александра</h2>
                      <p className="text-white/60">Создатель эксклюзивного контента</p>
                    </div>
                  </div>

                  <div className="space-y-4 text-white/80 leading-relaxed">
                    <p className="first-letter:text-5xl first-letter:font-serif first-letter:text-luxury-gold first-letter:float-left first-letter:mr-3 first-letter:mt-1">
                      Привет, дорогой! Я — Александра, и я создаю эстетичный и приватный контент 
                      для тех, кто ценит утончённую эротику и индивидуальный подход.
                    </p>
                    
                    <p>
                      В моём закрытом пространстве ты найдёшь то, что не увидишь нигде больше — 
                      искренность, страсть и настоящую связь. Каждая фотография, каждое видео 
                      создано с любовью и вниманием к деталям.
                    </p>
                    
                    <p>
                      Подписывайся, чтобы получить доступ к личным фото, эксклюзивным видео 
                      и возможности персонального общения. Давай откроем новые грани удовольствия вместе.
                    </p>
                  </div>

                  <div className="pt-4">
                    <Button 
                      onClick={() => navigate('/vip')}
                      className="premium-button w-full"
                    >
                      <Icon name="Crown" className="h-5 w-5 mr-2" />
                      Стать VIP подписчиком
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <Card 
                    key={stat.label}
                    className="glass-effect border-luxury-gold/20 p-4 hover:scale-105 transition-transform duration-300 animate-fade-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-center gap-3">
                      <Icon name={stat.icon as any} className="h-6 w-6 text-luxury-gold" />
                      <div>
                        <div className="text-2xl font-bold luxury-text-gradient">{stat.value}</div>
                        <div className="text-sm text-white/60">{stat.label}</div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              {/* Interests */}
              <Card className="glass-effect border-luxury-gold/20">
                <CardContent className="p-6">
                  <h3 className="font-serif text-xl text-luxury-gold mb-4">Мои интересы</h3>
                  <div className="flex flex-wrap gap-2">
                    {interests.map((interest) => (
                      <Badge 
                        key={interest}
                        className="bg-luxury-gold/20 text-luxury-gold border-luxury-gold/30"
                      >
                        {interest}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Special Offer */}
              <Card className="glass-effect border-luxury-gold/30 bg-gradient-to-br from-luxury-burgundy/20 to-transparent">
                <CardContent className="p-6 text-center space-y-4">
                  <Icon name="Gift" className="h-12 w-12 text-luxury-gold mx-auto" />
                  <h3 className="font-serif text-xl luxury-text-gradient">
                    Специальное предложение
                  </h3>
                  <p className="text-white/80 text-sm">
                    Новым подписчикам — скидка 30% на первый месяц VIP доступа!
                  </p>
                  <Button 
                    onClick={() => navigate('/vip')}
                    variant="outline" 
                    className="border-luxury-gold/50 text-luxury-gold hover:bg-luxury-gold/10"
                  >
                    Получить скидку
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Bottom CTA Section */}
          <div className="mt-20 text-center glass-effect p-12 rounded-lg space-y-6">
            <h2 className="text-3xl font-serif luxury-text-gradient">
              Готов к эксклюзивному опыту?
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              Присоединяйся к моему закрытому сообществу и получи доступ к контенту, 
              который создан специально для тебя
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => navigate('/gallery')}
                className="premium-button"
              >
                <Icon name="Image" className="h-5 w-5 mr-2" />
                Смотреть галерею
              </Button>
              <Button 
                onClick={() => navigate('/live')}
                variant="outline"
                className="border-luxury-gold/50 text-luxury-gold hover:bg-luxury-gold/10"
              >
                <Icon name="Radio" className="h-5 w-5 mr-2" />
                Персональные шоу
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;