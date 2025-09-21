import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface GalleryItem {
  id: string;
  title: string;
  description: string;
  preview: string;
  price: number;
  type: 'photo' | 'video';
  isPremium: boolean;
  isUnlocked: boolean;
}

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'photo' | 'video'>('all');

  const galleryItems: GalleryItem[] = [
    {
      id: '1',
      title: 'Элегантность в чёрном',
      description: 'Эстетичная фотосессия в студии',
      preview: '/img/d3d50838-c2d7-4f6a-90ab-9f275840305b.jpg',
      price: 299,
      type: 'photo',
      isPremium: false,
      isUnlocked: false
    },
    {
      id: '2',
      title: 'Золотой час',
      description: 'Интимная атмосфера заката',
      preview: '/img/9c2ff23c-c5fe-44c2-ba12-fb9581192ad9.jpg',
      price: 499,
      type: 'photo',
      isPremium: true,
      isUnlocked: false
    },
    {
      id: '3',
      title: 'Персональное видео',
      description: 'Эксклюзивный контент для VIP',
      preview: '/img/d3d50838-c2d7-4f6a-90ab-9f275840305b.jpg',
      price: 999,
      type: 'video',
      isPremium: true,
      isUnlocked: false
    }
  ];

  const filteredItems = galleryItems.filter(item => 
    selectedCategory === 'all' || item.type === selectedCategory
  );

  const categories = [
    { id: 'all', name: 'Всё', icon: 'Grid3X3' },
    { id: 'photo', name: 'Фото', icon: 'Image' },
    { id: 'video', name: 'Видео', icon: 'Video' }
  ];

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-4xl md:text-5xl font-serif luxury-text-gradient">
            Галерея
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Эксклюзивные фото и видео материалы, доступные только для подписчиков
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center mb-12">
          <div className="glass-effect p-2 rounded-lg inline-flex gap-2">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "ghost"}
                onClick={() => setSelectedCategory(category.id as any)}
                className={`flex items-center gap-2 ${
                  selectedCategory === category.id 
                    ? 'bg-luxury-gold text-luxury-black' 
                    : 'text-luxury-gold hover:bg-luxury-gold/10'
                }`}
              >
                <Icon name={category.icon as any} className="h-4 w-4" />
                {category.name}
              </Button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredItems.map((item, index) => (
            <Card 
              key={item.id} 
              className="glass-effect border-luxury-gold/20 overflow-hidden group hover:scale-105 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative aspect-square overflow-hidden">
                <img 
                  src={item.preview} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    {!item.isUnlocked && (
                      <Icon name="Lock" className="h-12 w-12 text-luxury-gold mx-auto" />
                    )}
                    <Button className="premium-button">
                      {item.isUnlocked ? (
                        <>
                          <Icon name="Eye" className="h-4 w-4 mr-2" />
                          Смотреть
                        </>
                      ) : (
                        <>
                          <Icon name="ShoppingCart" className="h-4 w-4 mr-2" />
                          Купить за {item.price}₽
                        </>
                      )}
                    </Button>
                  </div>
                </div>

                {/* Badges */}
                <div className="absolute top-3 left-3 flex gap-2">
                  {item.isPremium && (
                    <Badge className="bg-luxury-burgundy text-white">
                      <Icon name="Crown" className="h-3 w-3 mr-1" />
                      VIP
                    </Badge>
                  )}
                  <Badge variant="secondary" className="bg-luxury-gold/20 text-luxury-gold border-luxury-gold/30">
                    {item.type === 'video' ? (
                      <Icon name="Video" className="h-3 w-3 mr-1" />
                    ) : (
                      <Icon name="Image" className="h-3 w-3 mr-1" />
                    )}
                    {item.type === 'video' ? 'Видео' : 'Фото'}
                  </Badge>
                </div>

                {/* Price */}
                {!item.isUnlocked && (
                  <div className="absolute bottom-3 right-3">
                    <Badge className="bg-luxury-gold text-luxury-black font-bold">
                      {item.price}₽
                    </Badge>
                  </div>
                )}
              </div>

              <CardHeader className="pb-2">
                <CardTitle className="text-luxury-gold font-serif">
                  {item.title}
                </CardTitle>
                <CardDescription className="text-white/70">
                  {item.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="pt-0">
                <Button 
                  className="w-full premium-button"
                  disabled={item.isUnlocked}
                >
                  {item.isUnlocked ? (
                    <>
                      <Icon name="CheckCircle" className="h-4 w-4 mr-2" />
                      Куплено
                    </>
                  ) : (
                    <>
                      <Icon name="CreditCard" className="h-4 w-4 mr-2" />
                      Купить доступ
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* VIP Subscription CTA */}
        <Card className="glass-effect border-luxury-gold/30 text-center p-8">
          <div className="space-y-6">
            <div className="flex justify-center">
              <Icon name="Crown" className="h-16 w-16 text-luxury-gold" />
            </div>
            
            <div className="space-y-2">
              <h3 className="text-2xl font-serif luxury-text-gradient">
                VIP Подписка
              </h3>
              <p className="text-white/80">
                Получите неограниченный доступ ко всему контенту
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="text-center">
                <div className="text-3xl font-bold luxury-text-gradient">1,999₽</div>
                <div className="text-sm text-white/60">в месяц</div>
              </div>
              
              <Button className="premium-button">
                <Icon name="Star" className="h-4 w-4 mr-2" />
                Стать VIP подписчиком
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-white/70">
              <div className="flex items-center gap-2">
                <Icon name="Check" className="h-4 w-4 text-luxury-gold" />
                Весь контент галереи
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Check" className="h-4 w-4 text-luxury-gold" />
                Личные сообщения
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Check" className="h-4 w-4 text-luxury-gold" />
                Эксклюзивные шоу
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Gallery;