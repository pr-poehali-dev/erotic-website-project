import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface AgeGateProps {
  onConfirm: () => void;
}

const AgeGate = ({ onConfirm }: AgeGateProps) => {
  const [isConfirming, setIsConfirming] = useState(false);

  const handleConfirm = () => {
    setIsConfirming(true);
    setTimeout(() => {
      onConfirm();
    }, 500);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/95 age-gate-bg flex items-center justify-center p-4">
      <Card className="w-full max-w-md glass-effect border-luxury-gold/30 animate-scale-in">
        <CardHeader className="text-center space-y-4">
          <div className="flex justify-center">
            <Icon name="Shield" className="h-12 w-12 text-luxury-gold" />
          </div>
          <CardTitle className="text-2xl font-serif luxury-text-gradient">
            Подтверждение возраста
          </CardTitle>
          <CardDescription className="text-muted-foreground">
            Данный сайт содержит контент для взрослых. Для продолжения подтвердите, что вам исполнилось 18 лет.
          </CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <div className="text-center text-sm text-muted-foreground space-y-2">
            <p>• Я подтверждаю, что мне исполнилось 18 лет</p>
            <p>• Я согласен с условиями использования</p>
            <p>• Я понимаю характер представленного контента</p>
          </div>

          <div className="flex flex-col gap-3">
            <Button 
              onClick={handleConfirm}
              disabled={isConfirming}
              className="premium-button w-full"
            >
              {isConfirming ? (
                <div className="flex items-center gap-2">
                  <Icon name="Loader2" className="h-4 w-4 animate-spin" />
                  Проверка...
                </div>
              ) : (
                'Да, мне исполнилось 18 лет'
              )}
            </Button>
            
            <Button 
              variant="outline" 
              onClick={() => window.location.href = 'https://google.com'}
              className="w-full border-luxury-gold/30 text-luxury-gold hover:bg-luxury-gold/10"
            >
              Нет, мне меньше 18 лет
            </Button>
          </div>

          <div className="text-xs text-center text-muted-foreground">
            Нажимая "Да", вы подтверждаете своё совершеннолетие согласно законодательству вашей страны
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AgeGate;