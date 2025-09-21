import { useState } from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

interface Video {
  id: string;
  title: string;
  description: string;
  duration: string;
  price: number;
  category: string;
  thumbnail: string;
  isPremium: boolean;
  isUnlocked: boolean;
  views: number;
}

const Videos = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Все видео', count: 12 },
    { id: 'solo', name: 'Solo', count: 6 },
    { id: 'dance', name: 'Танцы', count: 3 },
    { id: 'special', name: 'Специальные', count: 3 },
  ];

  const videos: Video[] = [
    {
      id: '1',
      title: 'Вечерняя элегантность',
      description: 'Чувственное видео в вечернем наряде',
      duration: '15:23',
      price: 599,
      category: 'solo',
      thumbnail: '/img/d3d50838-c2d7-4f6a-90ab-9f275840305b.jpg',
      isPremium: true,
      isUnlocked: false,
      views: 1234,
    },
    {
      id: '2',
      title: 'Танец страсти',
      description: 'Эротический танец под медленную музыку',
      duration: '8:45',
      price: 399,
      category: 'dance',
      thumbnail: '/img/fbe163e1-6ae3-440f-8625-d5b621cc4e32.jpg',
      isPremium: false,
      isUnlocked: false,
      views: 892,
    },
    {
      id: '3',
      title: 'Персональное шоу',
      description: 'Эксклюзивное видео для VIP подписчиков',
      duration: '22:10',
      price: 999,
      category: 'special',
      thumbnail: '/img/9c2ff23c-c5fe-44c2-ba12-fb9581192ad9.jpg',
      isPremium: true,
      isUnlocked: false,
      views: 567,
    },
  ];

  const filteredVideos = selectedCategory === 'all' 
    ? videos 
    : videos.filter(v => v.category === selectedCategory);

  const PlayButton = ({ video }: { video: Video }) => {
    if (video.isUnlocked) {
      return (
        <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="bg-luxury-gold text-black rounded-full p-4 hover:scale-110 transition-transform">
            <Icon name="Play" className="h-8 w-8" />
          </div>
        </div>
      );
    }

    return (
      <div className="absolute inset-0 flex items-center justify-center bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="text-center space-y-4">
          <Icon name="Lock" className="h-12 w-12 text-luxury-gold mx-auto" />
          <Button className="premium-button">
            <Icon name="ShoppingCart" className="h-4 w-4 mr-2" />
            Купить за {video.price}₽
          </Button>
        </div>
      </div>
    );
  };

  return (
    <Layout>
      <div className="min-h-screen py-20">
        <div className="container mx-auto px-6 max-w-6xl">
          {/* Header */}
          <div className="text-center mb-16 space-y-4 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif">
              <span className="luxury-text-gradient">Видео контент</span>
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Эксклюзивные видео высочайшего качества для истинных ценителей
            </p>
          </div>

          {/* Categories Tabs */}
          <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="mb-12">
            <TabsList className="glass-effect border-luxury-gold/20 p-1">
              {categories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="data-[state=active]:bg-luxury-gold data-[state=active]:text-black"
                >
                  {category.name}
                  <Badge variant="secondary" className="ml-2 bg-black/20">
                    {category.count}
                  </Badge>
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value={selectedCategory} className="mt-8">
              {/* Videos Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredVideos.map((video, index) => (
                  <Card 
                    key={video.id}
                    className="glass-effect border-luxury-gold/20 overflow-hidden group hover:scale-105 transition-all duration-300 animate-fade-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="relative aspect-video overflow-hidden">
                      <img 
                        src={video.thumbnail} 
                        alt={video.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      
                      {/* Play Button Overlay */}
                      <PlayButton video={video} />

                      {/* Duration Badge */}
                      <div className="absolute bottom-3 right-3 bg-black/80 backdrop-blur px-2 py-1 rounded text-sm text-white">
                        {video.duration}
                      </div>

                      {/* Premium Badge */}
                      {video.isPremium && (
                        <div className="absolute top-3 left-3">
                          <Badge className="bg-luxury-burgundy text-white">
                            <Icon name="Crown" className="h-3 w-3 mr-1" />
                            Premium
                          </Badge>
                        </div>
                      )}

                      {/* Lock Icon */}
                      {!video.isUnlocked && (
                        <div className="absolute top-3 right-3">
                          <div className="bg-black/60 backdrop-blur rounded-full p-2">
                            <Icon name="Lock" className="h-4 w-4 text-luxury-gold" />
                          </div>
                        </div>
                      )}
                    </div>

                    <CardHeader className="pb-2">
                      <CardTitle className="text-luxury-gold font-serif">
                        {video.title}
                      </CardTitle>
                      <CardDescription className="text-white/70">
                        {video.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="pt-0">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2 text-sm text-white/60">
                          <Icon name="Eye" className="h-4 w-4" />
                          {video.views.toLocaleString()} просмотров
                        </div>
                        {!video.isUnlocked && (
                          <div className="text-luxury-gold font-bold">
                            {video.price}₽
                          </div>
                        )}
                      </div>

                      <Button 
                        className="w-full premium-button"
                        disabled={video.isUnlocked}
                      >
                        {video.isUnlocked ? (
                          <>
                            <Icon name="Play" className="h-4 w-4 mr-2" />
                            Смотреть
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
            </TabsContent>
          </Tabs>

          {/* Special Offer Section */}
          <Card className="glass-effect border-luxury-gold/30 mt-12">
            <div className="p-8 text-center space-y-6">
              <div className="flex justify-center">
                <div className="h-20 w-20 rounded-full bg-luxury-gold/20 flex items-center justify-center">
                  <Icon name="Video" className="h-10 w-10 text-luxury-gold" />
                </div>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-2xl font-serif luxury-text-gradient">
                  Пакет видео контента
                </h3>
                <p className="text-white/80">
                  Получите доступ ко всем видео с огромной скидкой
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <div>
                  <div className="text-white/50 line-through text-sm">5,999₽</div>
                  <div className="text-4xl font-bold luxury-text-gradient">2,999₽</div>
                  <div className="text-sm text-white/60">Экономия 50%</div>
                </div>
                
                <Button className="premium-button">
                  <Icon name="Package" className="h-4 w-4 mr-2" />
                  Купить всё видео
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-white/70 pt-4">
                <div className="flex items-center gap-2 justify-center">
                  <Icon name="Check" className="h-4 w-4 text-luxury-gold" />
                  {videos.length} эксклюзивных видео
                </div>
                <div className="flex items-center gap-2 justify-center">
                  <Icon name="Check" className="h-4 w-4 text-luxury-gold" />
                  Пожизненный доступ
                </div>
                <div className="flex items-center gap-2 justify-center">
                  <Icon name="Check" className="h-4 w-4 text-luxury-gold" />
                  Новые видео бесплатно
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Videos;