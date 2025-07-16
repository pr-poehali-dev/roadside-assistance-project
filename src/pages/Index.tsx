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
              <a href="#coverage" className="text-gray-700 hover:text-orange-500 transition-colors">Покрытие</a>
            </nav>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white">
              <Icon name="Phone" size={16} className="mr-2" />
              Вызвать
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/10 p-4 rounded-full">
                <Icon name="Wrench" size={48} className="text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Автопомощь на дороге <br />
              <span className="text-yellow-300">24/7</span>
            </h1>
            <p className="text-xl md:text-2xl text-orange-100 mb-8 max-w-3xl mx-auto">
              Легковые, грузовые и спецтехника. Выезд в город, на трассу и шоссе. 
              Быстрое прибытие и профессиональная помощь.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 text-lg px-8 py-4">
                <Icon name="Phone" size={20} className="mr-2" />
                Экстренный вызов
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-600 text-lg px-8 py-4">
                <Icon name="MapPin" size={20} className="mr-2" />
                Определить местоположение
              </Button>
            </div>
            <div className="mt-8 flex justify-center space-x-8 text-orange-100">
              <div className="flex items-center">
                <Icon name="Clock" size={20} className="mr-2" />
                <span>Работаем круглосуточно</span>
              </div>
              <div className="flex items-center">
                <Icon name="Zap" size={20} className="mr-2" />
                <span>Быстрое прибытие</span>
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
              Полный спектр услуг автотехпомощи для легковых, грузовых автомобилей и спецтехники
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="hover:shadow-lg transition-shadow border-l-4 border-orange-500">
              <CardHeader className="text-center">
                <div className="bg-orange-100 p-3 rounded-full w-fit mx-auto mb-4">
                  <Icon name="Truck" size={32} className="text-orange-500" />
                </div>
                <CardTitle className="text-xl">Авто эвакуация</CardTitle>
                <CardDescription>Эвакуация легковых и грузовых автомобилей</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600 mb-2">от 3500₽</div>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• Легковые автомобили</li>
                    <li>• Грузовые автомобили</li>
                    <li>• Спецтехника</li>
                    <li>• Город, трасса, шоссе</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-l-4 border-red-500">
              <CardHeader className="text-center">
                <div className="bg-red-100 p-3 rounded-full w-fit mx-auto mb-4">
                  <Icon name="Mountain" size={32} className="text-red-500" />
                </div>
                <CardTitle className="text-xl">Внедорожная эвакуация</CardTitle>
                <CardDescription>Эвакуация в сложных условиях</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-600 mb-2">от 4000₽</div>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• Бездорожье</li>
                    <li>• Кюветы и канавы</li>
                    <li>• Песок и грязь</li>
                    <li>• Сложные условия</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-l-4 border-blue-500">
              <CardHeader className="text-center">
                <div className="bg-blue-100 p-3 rounded-full w-fit mx-auto mb-4">
                  <Icon name="Fuel" size={32} className="text-blue-500" />
                </div>
                <CardTitle className="text-xl">Подвоз топлива</CardTitle>
                <CardDescription>Доставка топлива на место</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-2">от 1500₽</div>
                  <p className="text-sm text-gray-600 mb-2">+ стоимость топлива</p>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• Бензин всех марок</li>
                    <li>• Дизельное топливо</li>
                    <li>• Быстрая доставка</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-l-4 border-green-500">
              <CardHeader className="text-center">
                <div className="bg-green-100 p-3 rounded-full w-fit mx-auto mb-4">
                  <Icon name="Zap" size={32} className="text-green-500" />
                </div>
                <CardTitle className="text-xl">Автоэлектрик</CardTitle>
                <CardDescription>Ремонт электрооборудования</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <div className="text-lg font-bold text-green-600 mb-2">
                    Легковые: от 3500₽<br />
                    Грузовые: от 10000₽
                  </div>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• Диагностика</li>
                    <li>• Ремонт проводки</li>
                    <li>• Аккумуляторы</li>
                  </ul>
                </div>
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
              Прайс-лист
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Честные цены без скрытых доплат. Минимальная стоимость работ — 2 часа.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6">
              <CardHeader>
                <CardTitle className="text-2xl text-center mb-6">Основные услуги</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                    <div>
                      <span className="font-semibold">Авто эвакуация</span>
                      <p className="text-sm text-gray-600">Легковые, грузовые, спецтехника</p>
                    </div>
                    <Badge className="bg-orange-500">от 3500₽</Badge>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                    <div>
                      <span className="font-semibold">Внедорожная эвакуация</span>
                      <p className="text-sm text-gray-600">Сложные условия</p>
                    </div>
                    <Badge className="bg-red-500">от 4000₽</Badge>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                    <div>
                      <span className="font-semibold">Подвоз топлива</span>
                      <p className="text-sm text-gray-600">+ стоимость топлива</p>
                    </div>
                    <Badge className="bg-blue-500">от 1500₽</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardHeader>
                <CardTitle className="text-2xl text-center mb-6">Автоэлектрик</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                    <div>
                      <span className="font-semibold">Легковые автомобили</span>
                      <p className="text-sm text-gray-600">Диагностика и ремонт</p>
                    </div>
                    <Badge className="bg-green-500">от 3500₽</Badge>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                    <div>
                      <span className="font-semibold">Грузовые автомобили</span>
                      <p className="text-sm text-gray-600">Сложная диагностика</p>
                    </div>
                    <Badge className="bg-green-600">от 10000₽</Badge>
                  </div>
                  <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                    <div className="flex items-center">
                      <Icon name="Clock" size={16} className="text-yellow-600 mr-2" />
                      <span className="text-sm font-medium text-yellow-800">
                        Минимальная стоимость работ: 6000₽ (2 часа)
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Coverage Section */}
      <section id="coverage" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Зоны покрытия
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Работаем во всех районах города и за его пределами
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-blue-100 p-4 rounded-full w-fit mx-auto mb-4">
                  <Icon name="Building" size={40} className="text-blue-500" />
                </div>
                <CardTitle className="text-xl">Город</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Все районы города, включая центр и спальные районы
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Центральный район</li>
                  <li>• Спальные районы</li>
                  <li>• Промышленные зоны</li>
                  <li>• Парковки и дворы</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-green-100 p-4 rounded-full w-fit mx-auto mb-4">
                  <Icon name="Car" size={40} className="text-green-500" />
                </div>
                <CardTitle className="text-xl">Трасса</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Федеральные и региональные трассы в радиусе 100 км
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Федеральные трассы</li>
                  <li>• Региональные дороги</li>
                  <li>• Съезды и развязки</li>
                  <li>• Обочины и стоянки</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-orange-100 p-4 rounded-full w-fit mx-auto mb-4">
                  <Icon name="Route" size={40} className="text-orange-500" />
                </div>
                <CardTitle className="text-xl">Шоссе</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Междугородние шоссе и загородные дороги
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Междугородние шоссе</li>
                  <li>• Загородные дороги</li>
                  <li>• Подъезды к городу</li>
                  <li>• Сложные участки</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Нужна помощь на дороге?
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Звоните прямо сейчас! Работаем 24/7 и готовы помочь в любой ситуации.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 text-lg px-8 py-4">
              <Icon name="Phone" size={20} className="mr-2" />
              Вызвать службу
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-600 text-lg px-8 py-4">
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Написать в мессенджер
            </Button>
          </div>
          <div className="mt-8 flex justify-center space-x-8 text-orange-100">
            <div className="flex items-center">
              <Icon name="Clock" size={20} className="mr-2" />
              <span>24/7 без выходных</span>
            </div>
            <div className="flex items-center">
              <Icon name="MapPin" size={20} className="mr-2" />
              <span>Город, трасса, шоссе</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Truck" className="text-orange-500" size={24} />
                <h3 className="text-xl font-bold">АвтоПомощь 24/7</h3>
              </div>
              <p className="text-gray-400">
                Надежная служба автотехпомощи. Работаем с легковыми, грузовыми и спецтехникой.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Авто эвакуация</li>
                <li>Внедорожная эвакуация</li>
                <li>Подвоз топлива</li>
                <li>Автоэлектрик</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Покрытие</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Город</li>
                <li>Трасса</li>
                <li>Шоссе</li>
                <li>Сложные условия</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center">
                  <Icon name="Phone" size={16} className="mr-2" />
                  <span>Вызов службы</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Clock" size={16} className="mr-2" />
                  <span>Работаем 24/7</span>
                </div>
                <div className="flex items-center">
                  <Icon name="MapPin" size={16} className="mr-2" />
                  <span>Город, трасса, шоссе</span>
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