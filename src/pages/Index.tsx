import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [cartItems, setCartItems] = useState(0);
  const [selectedCandle, setSelectedCandle] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const candles = [
    {
      id: 1,
      name: "Элегантная коллекция",
      price: 2450,
      image: "/img/518e28ef-761b-4e74-8680-e0ee40a3e37f.jpg",
      description: "Роскошные ароматические свечи в стеклянных банках",
      category: "Премиум",
      details: "Изысканная коллекция премиальных свечей ручной работы. Изготовлены из натурального соевого воска с добавлением эфирных масел высшего качества. Время горения: 45-50 часов.",
      ingredients: "Соевый воск, эфирные масла лаванды и бергамота, хлопковый фитиль",
      size: "Высота: 10 см, Диаметр: 8 см"
    },
    {
      id: 2,
      name: "Ароматная серия",
      price: 1890,
      image: "/img/c53151a7-f0f1-4b74-acc1-066fcd699d2a.jpg",
      description: "Коллекция свечей разных форм и размеров",
      category: "Классика",
      details: "Универсальная коллекция для создания уютной атмосферы в любом интерьере. Разнообразие форм позволяет подобрать идеальный вариант. Время горения: 30-35 часов.",
      ingredients: "Парафин премиум класса, натуральные ароматизаторы, хлопковый фитиль",
      size: "Различные размеры от 6 до 12 см"
    },
    {
      id: 3,
      name: "Ручная работа",
      price: 3200,
      image: "/img/1228c966-9a29-454f-ac61-eb5c14055529.jpg",
      description: "Эксклюзивные свечи из натурального воска",
      category: "Эксклюзив",
      details: "Уникальные свечи, созданные мастерами вручную. Каждая свеча неповторима и имеет свой особенный характер. Время горения: 60+ часов.",
      ingredients: "100% натуральный пчелиный воск, органические эфирные масла, деревянный фитиль",
      size: "Высота: 12 см, Диаметр: 10 см"
    },
    {
      id: 4,
      name: "Ванильный рай",
      price: 1650,
      image: "/img/fca53f30-ed2c-43f8-ac78-50907b21e687.jpg",
      description: "Свечи с ароматом ванили в янтарном стекле",
      category: "Ароматные",
      details: "Нежный аромат ванили создаст атмосферу тепла и комфорта. Янтарное стекло добавляет элегантности интерьеру. Время горения: 40 часов.",
      ingredients: "Соевый воск, натуральный экстракт ванили, хлопковый фитиль",
      size: "Высота: 9 см, Диаметр: 7 см"
    },
    {
      id: 5,
      name: "Цветные столбики",
      price: 890,
      image: "/img/6bdfd0bc-56fb-4d9f-9157-23f38374d3b8.jpg",
      description: "Набор разноцветных свечей-столбиков",
      category: "Декор",
      details: "Яркий набор декоративных свечей для особых случаев и праздничного настроения. В наборе 6 свечей разных цветов. Время горения каждой: 8-10 часов.",
      ingredients: "Цветной парафин, хлопковый фитиль, безопасные красители",
      size: "Высота: 15 см, Диаметр: 2 см (каждая)"
    },
    {
      id: 6,
      name: "Лофт стиль",
      price: 2780,
      image: "/img/7d6feed5-40dd-463a-bcb1-b9e5e12846c0.jpg",
      description: "Свечи с деревянным фитилём в бетонных сосудах",
      category: "Дизайнерские",
      details: "Индустриальный дизайн в стиле лофт. Деревянный фитиль создаёт приятное потрескивание. Бетонные сосуды можно использовать как декор. Время горения: 50+ часов.",
      ingredients: "Натуральный соевый воск, эфирные масла, деревянный фитиль",
      size: "Высота: 8 см, Диаметр: 12 см"
    },
    {
      id: 7,
      name: "Чайные огоньки",
      price: 450,
      image: "/img/e7abfdd1-9694-4224-8d3b-2f256df32581.jpg",
      description: "Набор чайных свечей в геометрических подсвечниках",
      category: "Мини",
      details: "Компактные чайные свечи в стильных подсвечниках. Идеально подходят для создания романтической атмосферы. В наборе 12 свечей. Время горения каждой: 4 часа.",
      ingredients: "Парафин, хлопковые фитили, металлические подсвечники",
      size: "Диаметр свечи: 3.8 см, Высота: 1.5 см"
    },
    {
      id: 8,
      name: "Тройное пламя",
      price: 3890,
      image: "/img/943ed579-dfda-42d3-9ef8-1592f2a0592d.jpg",
      description: "Большие свечи с тремя фитилями в матовом стекле",
      category: "Премиум",
      details: "Премиальные свечи с трёмя фитилями для максимального аромата и света. Матовое стекло создаёт мягкое свечение. Время горения: 80+ часов.",
      ingredients: "Премиум соевый воск, комплекс эфирных масел, три хлопковых фитиля",
      size: "Высота: 11 см, Диаметр: 14 см"
    }
  ];

  const addToCart = () => {
    setCartItems(cartItems + 1);
  };

  const openCandleModal = (candle: any) => {
    setSelectedCandle(candle);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Навигация */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-8">
              <h1 className="text-2xl font-heading font-bold text-foreground">CANDLE STORE</h1>
              <div className="hidden md:flex space-x-6">
                <a href="#home" className="text-muted-foreground hover:text-primary transition-colors">Главная</a>
                <a href="#catalog" className="text-muted-foreground hover:text-primary transition-colors">Каталог</a>
                <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">О нас</a>
                <a href="#delivery" className="text-muted-foreground hover:text-primary transition-colors">Доставка</a>
                <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Контакты</a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Button variant="outline" size="sm" className="relative">
                  <Icon name="ShoppingCart" size={20} />
                  {cartItems > 0 && (
                    <Badge className="absolute -top-2 -right-2 min-w-[20px] h-5 flex items-center justify-center bg-primary text-primary-foreground text-xs">
                      {cartItems}
                    </Badge>
                  )}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Героический блок */}
      <section id="home" className="relative py-20 px-4 bg-gradient-to-br from-coral/10 to-sky-blue/10">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-heading font-bold text-foreground mb-6">
            Создаём уют <br />
            <span className="text-primary">своими руками</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Коллекция премиальных ароматических свечей ручной работы. 
            Превратите свой дом в оазис спокойствия и тепла.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3">
            <Icon name="Flame" size={20} className="mr-2" />
            Смотреть каталог
          </Button>
        </div>
      </section>

      {/* Каталог свечей */}
      <section id="catalog" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-heading font-bold text-foreground mb-4">Наша коллекция</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Каждая свеча создана с любовью и вниманием к деталям
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {candles.map((candle) => (
              <Card key={candle.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="aspect-square overflow-hidden cursor-pointer" onClick={() => openCandleModal(candle)}>
                  <img 
                    src={candle.image} 
                    alt={candle.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="font-heading text-xl">{candle.name}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {candle.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-primary">{candle.price.toLocaleString()} ₽</span>
                    <Button onClick={addToCart} className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                      <Icon name="Plus" size={16} className="mr-2" />
                      В корзину
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* О нас */}
      <section id="about" className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-4xl font-heading font-bold text-foreground mb-6">О нашей мастерской</h3>
              <p className="text-lg text-muted-foreground mb-6">
                Мы создаём свечи уже более 10 лет. Каждая свеча изготавливается вручную 
                из натурального соевого воска с добавлением эфирных масел высочайшего качества.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Наша миссия — наполнить ваш дом теплом, уютом и незабываемыми ароматами, 
                которые создают особую атмосферу для каждого момента жизни.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4">
                  <div className="text-3xl font-bold text-primary mb-2">10+</div>
                  <div className="text-sm text-muted-foreground">лет опыта</div>
                </div>
                <div className="text-center p-4">
                  <div className="text-3xl font-bold text-secondary mb-2">5000+</div>
                  <div className="text-sm text-muted-foreground">довольных клиентов</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-coral/20 to-sky-blue/20 flex items-center justify-center">
                <Icon name="Heart" size={120} className="text-primary/30" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Доставка */}
      <section id="delivery" className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h3 className="text-4xl font-heading font-bold text-foreground mb-12">Доставка и оплата</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <Icon name="Truck" size={48} className="text-primary mx-auto mb-4" />
              <CardTitle className="font-heading mb-4">Быстрая доставка</CardTitle>
              <CardDescription>
                Доставляем по всей России в течение 2-5 рабочих дней
              </CardDescription>
            </Card>
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <Icon name="Shield" size={48} className="text-secondary mx-auto mb-4" />
              <CardTitle className="font-heading mb-4">Безопасная упаковка</CardTitle>
              <CardDescription>
                Каждая свеча упакована в защитную коробку с мягким наполнителем
              </CardDescription>
            </Card>
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <Icon name="CreditCard" size={48} className="text-accent mx-auto mb-4" />
              <CardTitle className="font-heading mb-4">Удобная оплата</CardTitle>
              <CardDescription>
                Принимаем карты, переводы и наложенный платеж
              </CardDescription>
            </Card>
          </div>
        </div>
      </section>

      {/* Контакты */}
      <section id="contact" className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto text-center">
          <h3 className="text-4xl font-heading font-bold text-foreground mb-12">Свяжитесь с нами</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 text-center">
              <Icon name="Phone" size={32} className="text-primary mx-auto mb-3" />
              <div className="font-semibold mb-2">Телефон</div>
              <div className="text-muted-foreground">+7 (495) 123-45-67</div>
            </Card>
            <Card className="p-6 text-center">
              <Icon name="Mail" size={32} className="text-secondary mx-auto mb-3" />
              <div className="font-semibold mb-2">Email</div>
              <div className="text-muted-foreground">info@candlestore.ru</div>
            </Card>
            <Card className="p-6 text-center">
              <Icon name="MapPin" size={32} className="text-accent mx-auto mb-3" />
              <div className="font-semibold mb-2">Адрес</div>
              <div className="text-muted-foreground">Москва, ул. Арбат, 15</div>
            </Card>
            <Card className="p-6 text-center">
              <Icon name="Clock" size={32} className="text-primary mx-auto mb-3" />
              <div className="font-semibold mb-2">Режим работы</div>
              <div className="text-muted-foreground">Пн-Вс: 10:00-22:00</div>
            </Card>
          </div>
        </div>
      </section>

      {/* Подвал */}
      <footer className="bg-foreground text-background py-12 px-4">
        <div className="container mx-auto text-center">
          <h4 className="text-2xl font-heading font-bold mb-4">CANDLE STORE</h4>
          <p className="text-muted mb-6">Создаём уют в каждом доме</p>
          <div className="flex justify-center space-x-6 mb-8">
            <Icon name="Instagram" size={24} className="hover:text-primary cursor-pointer transition-colors" />
            <Icon name="Facebook" size={24} className="hover:text-primary cursor-pointer transition-colors" />
            <Icon name="Twitter" size={24} className="hover:text-primary cursor-pointer transition-colors" />
          </div>
          <div className="border-t border-muted pt-6">
            <p className="text-sm text-muted">© 2024 Candle Store. Все права защищены.</p>
          </div>
        </div>
      </footer>

      {/* Модальное окно с информацией о свече */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-2xl">
          {selectedCandle && (
            <>
              <DialogHeader>
                <DialogTitle className="font-heading text-2xl">{selectedCandle.name}</DialogTitle>
                <DialogDescription>
                  <Badge variant="secondary" className="mb-4">{selectedCandle.category}</Badge>
                </DialogDescription>
              </DialogHeader>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="aspect-square overflow-hidden rounded-lg">
                  <img 
                    src={selectedCandle.image} 
                    alt={selectedCandle.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center">
                      <Icon name="Info" size={16} className="mr-2" />
                      Описание
                    </h4>
                    <p className="text-muted-foreground text-sm">{selectedCandle.details}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center">
                      <Icon name="Leaf" size={16} className="mr-2" />
                      Состав
                    </h4>
                    <p className="text-muted-foreground text-sm">{selectedCandle.ingredients}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center">
                      <Icon name="Ruler" size={16} className="mr-2" />
                      Размеры
                    </h4>
                    <p className="text-muted-foreground text-sm">{selectedCandle.size}</p>
                  </div>
                  
                  <div className="pt-4 border-t">
                    <div className="flex justify-between items-center">
                      <span className="text-3xl font-bold text-primary">{selectedCandle.price.toLocaleString()} ₽</span>
                      <Button onClick={addToCart} className="bg-primary hover:bg-primary/90 text-primary-foreground">
                        <Icon name="ShoppingCart" size={16} className="mr-2" />
                        Добавить в корзину
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;