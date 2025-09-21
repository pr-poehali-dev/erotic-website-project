import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Icon from '@/components/ui/icon';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Главная', href: '/', icon: 'Home' },
    { name: 'Обо мне', href: '/about', icon: 'User' },
    { name: 'Галерея', href: '/gallery', icon: 'Image' },
    { name: 'Видео', href: '/videos', icon: 'Video' },
    { name: 'VIP Подписка', href: '/vip', icon: 'Crown' },
    { name: 'Прямые эфиры', href: '/live', icon: 'Radio' },
    { name: 'Контакты', href: '/contacts', icon: 'Mail' },
  ];

  const legalItems = [
    { name: 'Правовая информация', href: '/legal' },
    { name: 'Политика конфиденциальности', href: '/privacy' },
    { name: 'Условия использования', href: '/terms' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 glass-effect border-b border-luxury-gold/20">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Icon name="Diamond" className="h-8 w-8 text-luxury-gold" />
            <span className="font-serif text-xl luxury-text-gradient">Exclusive</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <NavigationMenu>
              <NavigationMenuList>
                {navItems.slice(0, 5).map((item) => (
                  <NavigationMenuItem key={item.href}>
                    <Link to={item.href}>
                      <NavigationMenuLink
                        className={`flex items-center gap-2 px-4 py-2 rounded-md transition-all ${
                          isActive(item.href)
                            ? 'bg-luxury-gold/20 text-luxury-gold'
                            : 'text-white/80 hover:text-luxury-gold hover:bg-luxury-gold/10'
                        }`}
                      >
                        <Icon name={item.icon as any} className="h-4 w-4" />
                        {item.name}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                ))}
                
                {/* More Menu */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-white/80 hover:text-luxury-gold">
                    <Icon name="MoreHorizontal" className="h-4 w-4 mr-2" />
                    Ещё
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="glass-effect p-4 w-48 space-y-2">
                      {navItems.slice(5).map((item) => (
                        <Link
                          key={item.href}
                          to={item.href}
                          className={`flex items-center gap-2 px-3 py-2 rounded-md transition-all text-sm ${
                            isActive(item.href)
                              ? 'bg-luxury-gold/20 text-luxury-gold'
                              : 'text-white/80 hover:text-luxury-gold hover:bg-luxury-gold/10'
                          }`}
                        >
                          <Icon name={item.icon as any} className="h-4 w-4" />
                          {item.name}
                        </Link>
                      ))}
                      
                      <hr className="border-luxury-gold/20 my-2" />
                      
                      {legalItems.map((item) => (
                        <Link
                          key={item.href}
                          to={item.href}
                          className="block px-3 py-2 rounded-md text-sm text-white/60 hover:text-luxury-gold hover:bg-luxury-gold/10 transition-all"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <Button className="premium-button">
              <Icon name="Star" className="h-4 w-4 mr-2" />
              VIP Доступ
            </Button>
          </div>

          {/* Mobile Menu Trigger */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="text-luxury-gold">
                <Icon name="Menu" className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="glass-effect border-luxury-gold/20">
              <div className="space-y-4 mt-8">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-md transition-all ${
                      isActive(item.href)
                        ? 'bg-luxury-gold/20 text-luxury-gold'
                        : 'text-white/80 hover:text-luxury-gold hover:bg-luxury-gold/10'
                    }`}
                  >
                    <Icon name={item.icon as any} className="h-5 w-5" />
                    {item.name}
                  </Link>
                ))}
                
                <hr className="border-luxury-gold/20" />
                
                {legalItems.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-2 text-sm text-white/60 hover:text-luxury-gold transition-all"
                  >
                    {item.name}
                  </Link>
                ))}
                
                <Button className="premium-button w-full mt-6">
                  <Icon name="Star" className="h-4 w-4 mr-2" />
                  VIP Доступ
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;