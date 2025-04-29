import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import ProductCard, { ProductProps } from "@/components/ProductCard";
import FeatureCard from "@/components/FeatureCard";
import { Award, BarChart, Truck, UserCheck, Mail, Phone, MapPin } from "lucide-react";

const Index = () => {
  const products: ProductProps[] = [
    {
      id: "pomade",
      name: "BearStyle Помада для волос",
      description: "Сильная фиксация с матовым эффектом",
      price: "От 499 ₽",
      image: "https://images.unsplash.com/photo-1581582786363-39213896315f?auto=format&fit=crop&q=80",
      features: ["Сильная фиксация", "Матовый эффект", "Легко смывается"]
    },
    {
      id: "paste",
      name: "BearStyle Паста для укладки",
      description: "Средняя фиксация с естественным блеском",
      price: "От 449 ₽",
      image: "https://images.unsplash.com/photo-1597854586684-382c1efb48b8?auto=format&fit=crop&q=80",
      features: ["Средняя фиксация", "Естественный блеск", "Подходит для всех типов волос"]
    },
    {
      id: "wax",
      name: "BearStyle Воск для волос",
      description: "Легкая фиксация с глянцевым эффектом",
      price: "От 399 ₽",
      image: "https://images.unsplash.com/photo-1621607510062-ec062a64a99a?auto=format&fit=crop&q=80",
      features: ["Легкая фиксация", "Глянцевый эффект", "Для создания текстуры"]
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero section */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 -z-10">
          <img 
            src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80" 
            alt="BearStyle Hero" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 to-background/80" />
        </div>
        
        <div className="container-custom pt-20">
          <div className="max-w-2xl">
            <h1 className="heading-xl mb-6">
              Стиль, который подчеркивает <span className="text-primary">характер</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Премиальные стайлинговые средства для настоящих мужчин.
              Создавайте безупречные укладки с BearStyle.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" href="#products">Наша продукция</Button>
              <Button size="lg" variant="outline" href="#contact">Оптовые поставки</Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features section */}
      <section id="features" className="section-padding bg-secondary/50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">Почему выбирают BearStyle</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Мы создаём продукты, которые помогают мужчинам выглядеть лучше и чувствовать себя увереннее.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              icon={Award} 
              title="Высокое качество" 
              description="Используем только премиальные ингредиенты для создания наших продуктов"
            />
            <FeatureCard 
              icon={UserCheck} 
              title="Проверено барберами" 
              description="Наши средства рекомендуют профессиональные барберы по всей России"
            />
            <FeatureCard 
              icon={BarChart} 
              title="Растущий бренд" 
              description="Более 500 точек продаж и стабильный рост в категории стайлинга"
            />
          </div>
        </div>
      </section>
      
      {/* Products section */}
      <section id="products" className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">Наша продукция</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Полный ассортимент стайлинговых средств для создания любых мужских укладок
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button variant="outline" size="lg">
              Загрузить каталог
            </Button>
          </div>
        </div>
      </section>
      
      {/* About section */}
      <section id="about" className="section-padding bg-brown-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&q=80" 
                alt="О BearStyle" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            <div>
              <h2 className="heading-lg mb-6">О бренде BearStyle</h2>
              <p className="text-lg mb-4">
                BearStyle - российский бренд мужских стайлинговых средств для волос, основанный в 2018 году группой энтузиастов барберской культуры.
              </p>
              <p className="text-lg mb-6">
                Наша миссия - создавать высококачественные стайлинговые продукты, которые помогают мужчинам выглядеть и чувствовать себя лучше каждый день.
              </p>
              
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Truck className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Оптовые поставки по всей России</h3>
                  <p className="text-muted-foreground">Мы работаем с партнерами во всех регионах РФ</p>
                </div>
              </div>
              
              <Button size="lg">Подробнее о нас</Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact section */}
      <section id="contact" className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">Свяжитесь с нами</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Готовы обсудить оптовые поставки или у вас есть вопросы о нашей продукции?
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6 rounded-lg bg-card hover:shadow-md transition-all">
              <Phone className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Телефон</h3>
              <p className="text-muted-foreground mb-4">Пн-Пт с 9:00 до 18:00</p>
              <a href="tel:+74951234567" className="text-primary font-medium hover:underline">+7 (495) 123-45-67</a>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 rounded-lg bg-card hover:shadow-md transition-all">
              <Mail className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <p className="text-muted-foreground mb-4">Ответим в течение 24 часов</p>
              <a href="mailto:info@bearstyle.ru" className="text-primary font-medium hover:underline">info@bearstyle.ru</a>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 rounded-lg bg-card hover:shadow-md transition-all">
              <MapPin className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Адрес</h3>
              <p className="text-muted-foreground mb-4">Офис и шоурум</p>
              <address className="not-italic">Москва, ул. Примерная, д. 123</address>
            </div>
          </div>
          
          <div className="mt-16 p-8 bg-primary/5 rounded-lg">
            <div className="text-center mb-8">
              <h3 className="heading-md mb-2">Оптовые заказы</h3>
              <p className="text-muted-foreground">
                Заполните форму, и наш менеджер свяжется с вами для обсуждения условий сотрудничества
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h4 className="text-xl font-bold mb-4">Преимущества оптового сотрудничества:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Специальные цены для оптовых клиентов</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Маркетинговая поддержка и POS-материалы</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Быстрая доставка по всей России</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Персональный менеджер</span>
                  </li>
                </ul>
              </div>
              
              <div className="flex flex-col items-center">
                <Button size="lg" className="w-full md:max-w-xs">Запросить оптовый прайс</Button>
                <p className="text-sm text-muted-foreground mt-4">
                  Минимальный оптовый заказ от 10 000 ₽
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-brown-800 text-white py-12">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">BearStyle</h3>
              <p className="text-brown-100">
                Премиальные стайлинговые средства для мужчин
              </p>
            </div>
            
            <div>
              <h4 className="font-medium mb-4">Продукция</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-brown-100 hover:text-white transition-colors">Помада для волос</a></li>
                <li><a href="#" className="text-brown-100 hover:text-white transition-colors">Паста для укладки</a></li>
                <li><a href="#" className="text-brown-100 hover:text-white transition-colors">Воск для волос</a></li>
                <li><a href="#" className="text-brown-100 hover:text-white transition-colors">Все продукты</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium mb-4">Компания</h4>
              <ul className="space-y-2">
                <li><a href="#about" className="text-brown-100 hover:text-white transition-colors">О нас</a></li>
                <li><a href="#contact" className="text-brown-100 hover:text-white transition-colors">Контакты</a></li>
                <li><a href="#" className="text-brown-100 hover:text-white transition-colors">Блог</a></li>
                <li><a href="#" className="text-brown-100 hover:text-white transition-colors">Вакансии</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium mb-4">Контакты</h4>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  <a href="tel:+74951234567" className="text-brown-100 hover:text-white transition-colors">+7 (495) 123-45-67</a>
                </li>
                <li className="flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  <a href="mailto:info@bearstyle.ru" className="text-brown-100 hover:text-white transition-colors">info@bearstyle.ru</a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-brown-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-brown-200 text-sm">© 2025 BearStyle. Все права защищены.</p>
            <div className="mt-4 md:mt-0">
              <div className="flex space-x-4">
                <a href="#" className="text-brown-200 hover:text-white transition-colors">
                  Instagram
                </a>
                <a href="#" className="text-brown-200 hover:text-white transition-colors">
                  VK
                </a>
                <a href="#" className="text-brown-200 hover:text-white transition-colors">
                  Telegram
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
