import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Icon name="Truck" className="text-orange-500" size={32} />
              <h1 className="text-xl font-bold text-gray-900">АвтоПомощь 24/7</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#services" className="text-gray-700 hover:text-orange-500 transition-colors">Услуги</a>
              <a href="#pricing" className="text-gray-700 hover:text-orange-500 transition-colors">Цены</a>
              <a href="#reviews" className="text-gray-700 hover:text-orange-500 transition-colors">Отзывы</a>
            </nav>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white">
              <Icon name="Phone" size={16} className="mr-2" />
              Вызвать
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/10 p-4 rounded-full">
                <Icon name="Clock" size={48} className="text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Экстренная помощь <br />
              <span className="text-orange-400">24/7</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Быстрое прибытие на место. Эвакуатор, слесарные работы, заправка топливом.
              Работаем круглосуточно по всему городу.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white text-lg px-8 py-4">
                <Icon name="Phone" size={20} className="mr-2" />
                Экстренный вызов
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-4">
                <Icon name="MapPin" size={20} className="mr-2" />
                Определить местоположение
              </Button>
            </div>
            <div className="mt-8 flex justify-center space-x-8 text-blue-100">
              <div className="flex items-center">
                <Icon name="Clock" size={20} className="mr-2" />
                <span>Прибытие за 15-30 мин</span>
              </div>
              <div className="flex items-center">
                <Icon name="Shield" size={20} className="mr-2" />
                <span>Лицензированная служба</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Наши услуги
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Полный спектр услуг автотехпомощи для решения любых проблем на дороге
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="bg-orange-100 p-3 rounded-full w-fit mx-auto mb-4">
                  <Icon name="Truck" size={32} className="text-orange-500" />
                </div>
                <CardTitle className="text-xl">Эвакуатор</CardTitle>
                <CardDescription>Быстрая эвакуация любых автомобилей</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-green-500 mr-2" />
                    Легковые и грузовые автомобили
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-green-500 mr-2" />
                    Мотоциклы и квадроциклы
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-green-500 mr-2" />
                    Автомобили после ДТП
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-green-500 mr-2" />
                    Эвакуация с парковки
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="bg-blue-100 p-3 rounded-full w-fit mx-auto mb-4">
                  <Icon name="Wrench" size={32} className="text-blue-500" />
                </div>
                <CardTitle className="text-xl">Слесарные работы</CardTitle>
                <CardDescription>Ремонт и техническая помощь на месте</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-green-500 mr-2" />
                    Аварийное вскрытие замков
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-green-500 mr-2" />
                    Запуск двигателя
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-green-500 mr-2" />
                    Замена колес
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-green-500 mr-2" />
                    Мелкий ремонт
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="bg-green-100 p-3 rounded-full w-fit mx-auto mb-4">
                  <Icon name="Fuel" size={32} className="text-green-500" />
                </div>
                <CardTitle className="text-xl">Заправка</CardTitle>
                <CardDescription>Доставка топлива прямо на дорогу</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-green-500 mr-2" />
                    Бензин АИ-92, АИ-95, АИ-98
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-green-500 mr-2" />
                    Дизельное топливо
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-green-500 mr-2" />
                    Минимальный заказ 5 литров
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-green-500 mr-2" />
                    Качественное топливо
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Цены на услуги
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Честные цены без скрытых доплат. Окончательная стоимость рассчитывается после оценки ситуации
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-lg">Эвакуатор</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-blue-600 mb-2">от 2000₽</div>
                <p className="text-sm text-gray-600">За первые 10 км</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-lg">Вскрытие замков</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-blue-600 mb-2">от 1500₽</div>
                <p className="text-sm text-gray-600">Без повреждений</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-lg">Запуск двигателя</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-blue-600 mb-2">от 800₽</div>
                <p className="text-sm text-gray-600">С наших проводов</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-lg">Доставка топлива</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-blue-600 mb-2">от 500₽</div>
                <p className="text-sm text-gray-600">+ стоимость топлива</p>
              </CardContent>
            </Card>
          </div>
          <div className="mt-12 text-center">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
              <Icon name="Calculator" size={20} className="mr-2" />
              Рассчитать стоимость
            </Button>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Отзывы клиентов
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Что говорят о нас наши клиенты
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" size={16} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                <CardTitle className="text-lg">Алексей М.</CardTitle>
                <CardDescription>Заказал эвакуатор</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  "Приехали быстро, работали аккуратно. Машину доставили без единой царапины. 
                  Цена соответствует качеству. Рекомендую!"
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center space-x-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" size={16} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                <CardTitle className="text-lg">Мария С.</CardTitle>
                <CardDescription>Вскрытие замков</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  "Заперла ключи в машине поздно вечером. Мастер приехал через 20 минут, 
                  вскрыл замок без повреждений. Спасибо за оперативность!"
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center space-x-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" size={16} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                <CardTitle className="text-lg">Дмитрий К.</CardTitle>
                <CardDescription>Заправка на трассе</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  "Закончилось топливо на трассе. Привезли качественный бензин за разумную цену. 
                  Сервис на высоте, обязательно обращусь еще!"
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Нужна помощь на дороге?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Звоните прямо сейчас! Наша служба работает круглосуточно и готова помочь в любой ситуации.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white text-lg px-8 py-4">
              <Icon name="Phone" size={20} className="mr-2" />
              +7 (999) 123-45-67
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-4">
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Написать в WhatsApp
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Truck" className="text-orange-500" size={24} />
                <h3 className="text-xl font-bold">АвтоПомощь 24/7</h3>
              </div>
              <p className="text-gray-400">
                Надежная служба автотехпомощи. Работаем круглосуточно по всему городу.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Эвакуатор</li>
                <li>Слесарные работы</li>
                <li>Заправка топливом</li>
                <li>Техническая помощь</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center">
                  <Icon name="Phone" size={16} className="mr-2" />
                  <span>+7 (999) 123-45-67</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Clock" size={16} className="mr-2" />
                  <span>Круглосуточно</span>
                </div>
                <div className="flex items-center">
                  <Icon name="MapPin" size={16} className="mr-2" />
                  <span>Весь город</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 АвтоПомощь 24/7. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;