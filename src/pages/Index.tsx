import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Calendar } from '@/components/ui/calendar';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import Icon from '@/components/ui/icon';

const Index = () => {
  const { toast } = useToast();
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const handleBooking = () => {
    if (!date || !selectedTime || !formData.name || !formData.phone) {
      toast({
        title: 'Заполните все поля',
        description: 'Пожалуйста, укажите дату, время и ваши контакты',
        variant: 'destructive',
      });
      return;
    }

    toast({
      title: 'Заявка отправлена! 🎉',
      description: 'Мы свяжемся с вами в ближайшее время',
    });

    setDate(undefined);
    setSelectedTime('');
    setFormData({ name: '', phone: '', email: '', message: '' });
  };

  const timeSlots = [
    '10:00',
    '12:00',
    '14:00',
    '16:00',
    '18:00',
    '20:00',
  ];

  const masterClasses = [
    {
      title: 'Базовый курс тафтинга',
      duration: '3 часа',
      price: '4 500 ₽',
      description: 'Научитесь основам тафтинга и создайте свой первый ковер',
      icon: 'Sparkles',
    },
    {
      title: 'Продвинутый уровень',
      duration: '5 часов',
      price: '7 000 ₽',
      description: 'Освойте сложные техники и создайте уникальную композицию',
      icon: 'Zap',
    },
    {
      title: 'Мастер-класс для двоих',
      duration: '3 часа',
      price: '8 000 ₽',
      description: 'Творите вместе с другом или партнером',
      icon: 'Heart',
    },
  ];

  const gallery = [
    { color: 'from-purple-500 to-pink-500' },
    { color: 'from-orange-500 to-blue-500' },
    { color: 'from-green-500 to-teal-500' },
    { color: 'from-yellow-500 to-red-500' },
    { color: 'from-indigo-500 to-purple-500' },
    { color: 'from-pink-500 to-rose-500' },
  ];

  const reviews = [
    {
      name: 'Анна Петрова',
      text: 'Потрясающая атмосфера! Создала свой первый ковер, и это было невероятно. Преподаватели очень внимательные.',
      rating: 5,
    },
    {
      name: 'Дмитрий Иванов',
      text: 'Отличное место для творчества. Все материалы предоставляются, нужно только прийти и наслаждаться процессом.',
      rating: 5,
    },
    {
      name: 'Мария Смирнова',
      text: 'Ходила с подругой на парный мастер-класс. Провели время замечательно, результат превзошёл ожидания!',
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-lg z-50 border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold gradient-text">TuftStudio</div>
          <div className="hidden md:flex gap-6 items-center">
            <a href="#about" className="hover:text-primary transition-colors">О студии</a>
            <a href="#classes" className="hover:text-primary transition-colors">Мастер-классы</a>
            <a href="#gallery" className="hover:text-primary transition-colors">Галерея</a>
            <a href="#schedule" className="hover:text-primary transition-colors">Расписание</a>
            <a href="#reviews" className="hover:text-primary transition-colors">Отзывы</a>
            <a href="#contacts" className="hover:text-primary transition-colors">Контакты</a>
          </div>
          <Button className="gradient-primary">
            <Icon name="Phone" size={18} className="mr-2" />
            Позвонить
          </Button>
        </div>
      </nav>

      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute top-20 right-10 w-96 h-96 gradient-primary opacity-20 blur-3xl rounded-full"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 gradient-secondary opacity-20 blur-3xl rounded-full"></div>
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6 px-6 py-2 bg-primary/10 border border-primary/30 rounded-full">
              <span className="text-primary font-semibold">✨ Тафтинг-студия в Санкт-Петербурге</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Создай свой{' '}
              <span className="gradient-text">уникальный</span>
              <br />
              ковер своими руками
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Погрузись в мир современного искусства тафтинга. Мастер-классы для всех уровней подготовки в центре Петербурга.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gradient-primary text-lg px-8">
                <Icon name="Calendar" size={20} className="mr-2" />
                Записаться на МК
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 border-2">
                <Icon name="Play" size={20} className="mr-2" />
                Смотреть видео
              </Button>
            </div>
          </div>
        </div>

        <div className="container mx-auto mt-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-card/50 backdrop-blur border-2 border-primary/20 hover:border-primary/50 transition-all hover:scale-105">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 gradient-primary rounded-2xl flex items-center justify-center rotate-12">
                  <Icon name="Users" size={32} className="text-white -rotate-12" />
                </div>
                <h3 className="text-xl font-bold mb-2">Опытные мастера</h3>
                <p className="text-muted-foreground">Профессиональные художники с опытом 5+ лет</p>
              </CardContent>
            </Card>
            
            <Card className="bg-card/50 backdrop-blur border-2 border-secondary/20 hover:border-secondary/50 transition-all hover:scale-105">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 gradient-secondary rounded-2xl flex items-center justify-center -rotate-12">
                  <Icon name="Palette" size={32} className="text-white rotate-12" />
                </div>
                <h3 className="text-xl font-bold mb-2">Все материалы</h3>
                <p className="text-muted-foreground">Предоставляем инструменты и пряжу премиум-класса</p>
              </CardContent>
            </Card>
            
            <Card className="bg-card/50 backdrop-blur border-2 border-accent/20 hover:border-accent/50 transition-all hover:scale-105">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 gradient-primary rounded-2xl flex items-center justify-center rotate-12">
                  <Icon name="MapPin" size={32} className="text-white -rotate-12" />
                </div>
                <h3 className="text-xl font-bold mb-2">Центр города</h3>
                <p className="text-muted-foreground">5 минут от метро Невский проспект</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 relative">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 gradient-primary opacity-10 blur-3xl rounded-full"></div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              О нашей <span className="gradient-text">студии</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              TuftStudio — это современное креативное пространство в сердце Санкт-Петербурга, где каждый может прикоснуться к искусству тафтинга.
            </p>
            <p className="text-lg text-muted-foreground">
              Мы создали атмосферу, где творчество встречается с технологией. Наши мастер-классы подходят как для новичков, так и для опытных мастеров. Используем только профессиональное оборудование и материалы премиум-класса.
            </p>
          </div>
        </div>
      </section>

      <section id="classes" className="py-20 px-4 bg-card/30">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Наши <span className="gradient-text">мастер-классы</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12">Выберите программу по своему уровню</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {masterClasses.map((item, index) => (
              <Card key={index} className="bg-card border-2 border-border hover:border-primary/50 transition-all hover:scale-105">
                <CardContent className="p-6">
                  <div className="w-14 h-14 mb-4 gradient-primary rounded-xl flex items-center justify-center">
                    <Icon name={item.icon as any} size={28} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                  <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Icon name="Clock" size={16} />
                      {item.duration}
                    </span>
                    <span className="text-2xl font-bold text-primary">{item.price}</span>
                  </div>
                  <p className="text-muted-foreground mb-6">{item.description}</p>
                  <Button className="w-full gradient-primary">
                    Записаться
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20 px-4 relative overflow-hidden">
        <div className="absolute top-1/2 right-1/4 w-96 h-96 gradient-secondary opacity-10 blur-3xl rounded-full"></div>
        <div className="container mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="gradient-text">Галерея</span> работ
          </h2>
          <p className="text-center text-muted-foreground mb-12">Вдохновляйтесь работами наших учеников</p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {gallery.map((item, index) => (
              <div
                key={index}
                className={`aspect-square rounded-2xl bg-gradient-to-br ${item.color} hover:scale-105 transition-transform cursor-pointer relative overflow-hidden group`}
              >
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Icon name="ZoomIn" size={40} className="text-white" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="schedule" className="py-20 px-4 bg-card/30">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Запись на <span className="gradient-text">мастер-класс</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12">Выберите удобные дату и время</p>
          
          <Card className="bg-card border-2 border-border">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <Label className="text-lg mb-4 block">Выберите дату</Label>
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="rounded-xl border border-border"
                  />
                </div>
                
                <div className="space-y-6">
                  <div>
                    <Label className="text-lg mb-4 block">Выберите время</Label>
                    <Select value={selectedTime} onValueChange={setSelectedTime}>
                      <SelectTrigger className="w-full h-12">
                        <SelectValue placeholder="Выберите время" />
                      </SelectTrigger>
                      <SelectContent>
                        {timeSlots.map((time) => (
                          <SelectItem key={time} value={time}>
                            {time}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="name">Ваше имя *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Введите ваше имя"
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">Телефон *</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+7 (999) 123-45-67"
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your@email.com"
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Комментарий</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Дополнительные пожелания"
                      className="mt-2"
                      rows={3}
                    />
                  </div>

                  <Button onClick={handleBooking} className="w-full gradient-primary h-12 text-lg">
                    <Icon name="Check" size={20} className="mr-2" />
                    Отправить заявку
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="reviews" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="gradient-text">Отзывы</span> наших учеников
          </h2>
          <p className="text-center text-muted-foreground mb-12">Что говорят о нас</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {reviews.map((review, index) => (
              <Card key={index} className="bg-card border-2 border-border hover:border-primary/50 transition-all">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={20} className="fill-yellow-500 text-yellow-500" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">{review.text}</p>
                  <p className="font-semibold">{review.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4 bg-card/30">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Контакты</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 mb-4 gradient-primary rounded-2xl flex items-center justify-center">
                <Icon name="MapPin" size={28} className="text-white" />
              </div>
              <h3 className="font-bold text-lg mb-2">Адрес</h3>
              <p className="text-muted-foreground">Невский проспект, 100</p>
              <p className="text-muted-foreground">Санкт-Петербург</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 mb-4 gradient-secondary rounded-2xl flex items-center justify-center">
                <Icon name="Phone" size={28} className="text-white" />
              </div>
              <h3 className="font-bold text-lg mb-2">Телефон</h3>
              <p className="text-muted-foreground">+7 (812) 123-45-67</p>
              <p className="text-muted-foreground">Ежедневно 10:00 - 22:00</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 mb-4 gradient-primary rounded-2xl flex items-center justify-center">
                <Icon name="Mail" size={28} className="text-white" />
              </div>
              <h3 className="font-bold text-lg mb-2">Email</h3>
              <p className="text-muted-foreground">info@tuftstudio.ru</p>
              <p className="text-muted-foreground">Ответим в течение часа</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 border-t border-border">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>© 2024 TuftStudio. Все права защищены.</p>
          <div className="flex justify-center gap-6 mt-4">
            <a href="#" className="hover:text-primary transition-colors">
              <Icon name="Instagram" size={24} />
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              <Icon name="MessageCircle" size={24} />
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              <Icon name="Send" size={24} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
