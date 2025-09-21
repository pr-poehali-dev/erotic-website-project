import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    content: [
      { name: 'Галерея', href: '/gallery' },
      { name: 'Видео', href: '/videos' },
      { name: 'Прямые эфиры', href: '/live' },
      { name: 'VIP Подписка', href: '/vip' },
    ],
    support: [
      { name: 'Контакты', href: '/contacts' },
      { name: 'FAQ', href: '/faq' },
      { name: 'Поддержка', href: '/support' },
      { name: 'Сотрудничество', href: '/partnership' },
    ],
    legal: [
      { name: 'Правовая информация', href: '/legal' },
      { name: 'Политика конфиденциальности', href: '/privacy' },
      { name: 'Условия использования', href: '/terms' },
      { name: 'Политика возврата', href: '/refund' },
    ],
  };

  const socialLinks = [
    { icon: 'Instagram', href: '#', label: 'Instagram' },
    { icon: 'Twitter', href: '#', label: 'Twitter' },
    { icon: 'MessageCircle', href: '#', label: 'Telegram' },
  ];

  return (
    <footer className="glass-effect border-t border-luxury-gold/20 mt-20">
      <div className="container mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <Icon name="Diamond" className="h-10 w-10 text-luxury-gold" />
              <span className="font-serif text-2xl luxury-text-gradient">Exclusive</span>
            </Link>
            
            <p className="text-white/70 max-w-sm">
              Эксклюзивный контент для ценителей утончённой эротики. 
              Подписывайтесь для доступа к приватным материалам.
            </p>

            {/* Social Links */}
            <div className="flex gap-3 pt-4">
              {socialLinks.map((social) => (
                <a
                  key={social.icon}
                  href={social.href}
                  aria-label={social.label}
                  className="glass-effect w-10 h-10 rounded-full flex items-center justify-center text-luxury-gold hover:bg-luxury-gold/20 transition-all"
                >
                  <Icon name={social.icon as any} className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Content Links */}
          <div>
            <h3 className="font-serif text-luxury-gold mb-4">Контент</h3>
            <ul className="space-y-2">
              {footerLinks.content.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-white/60 hover:text-luxury-gold transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="font-serif text-luxury-gold mb-4">Поддержка</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-white/60 hover:text-luxury-gold transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-serif text-luxury-gold mb-4">Правовая информация</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-white/60 hover:text-luxury-gold transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="glass-effect p-6 rounded-lg mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <h3 className="font-serif text-luxury-gold mb-1">Эксклюзивные предложения</h3>
              <p className="text-white/60 text-sm">Подпишитесь на рассылку для специальных скидок</p>
            </div>
            <div className="flex gap-2 w-full md:w-auto">
              <input
                type="email"
                placeholder="Ваш email"
                className="px-4 py-2 bg-black/50 border border-luxury-gold/30 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:border-luxury-gold flex-1 md:w-64"
              />
              <Button className="premium-button">
                Подписаться
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-luxury-gold/10">
          <p className="text-white/40 text-sm text-center md:text-left">
            © {currentYear} Exclusive. Все права защищены. Только для взрослых 18+
          </p>
          
          <div className="flex items-center gap-4 text-sm">
            <span className="text-white/40">Безопасные платежи:</span>
            <div className="flex gap-2">
              <Icon name="CreditCard" className="h-5 w-5 text-white/60" />
              <Icon name="Shield" className="h-5 w-5 text-white/60" />
              <Icon name="Lock" className="h-5 w-5 text-white/60" />
            </div>
          </div>
        </div>

        {/* Age Warning */}
        <div className="mt-8 text-center">
          <p className="text-xs text-white/40">
            Данный сайт содержит материалы для взрослых. Посещая сайт, вы подтверждаете, что вам исполнилось 18 лет.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;