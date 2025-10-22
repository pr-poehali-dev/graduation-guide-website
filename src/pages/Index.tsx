import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen">
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-primary/90 via-secondary/80 to-accent/70 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: 'url(https://cdn.poehali.dev/projects/5dbb0f6c-21d9-4607-9734-ae2c9c4edd16/files/793b2ea4-80fc-497a-a498-545928d37a25.jpg)' }}
        />
        <div className="relative z-10 container mx-auto px-4 text-center text-white animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg">
            Вернуться в Усть-Катав —<br />не шаг назад, а уверенный старт
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-95 font-semibold">
            Узнай, почему твой родной город — идеальное место для качественного образования и яркой студенческой жизни
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6 bg-white text-primary hover:bg-gray-100 shadow-xl">
              <Icon name="Download" className="mr-2" size={20} />
              Скачать памятку (PDF)
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-2 border-white text-white hover:bg-white/20 shadow-xl">
              Узнать больше
            </Button>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={32} className="text-white" />
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Здесь тебя ждут не только воспоминания, но и возможности
          </h2>
          <p className="text-center text-xl text-muted-foreground mb-16">Почему Усть-Катав для учебы?</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-2 border-primary/20 hover:border-primary hover:shadow-xl transition-all duration-300 animate-fade-in">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-5xl">💰</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-primary">Финансовая свобода</h3>
                <p className="text-lg font-semibold mb-2">Низкие затраты — высокое качество жизни</p>
                <p className="text-muted-foreground">
                  Обучение в филиалах и колледжах Челябинска рядом с домом. Аренда жилья не съедает весь бюджет. Трать деньги на саморазвитие, а не на выживание.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-secondary/20 hover:border-secondary hover:shadow-xl transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 mx-auto mb-6 bg-secondary/10 rounded-full flex items-center justify-center">
                  <span className="text-5xl">👨‍🏫</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-secondary">Персональный подход</h3>
                <p className="text-lg font-semibold mb-2">Ты — личность, а не номер в списке</p>
                <p className="text-muted-foreground">
                  Небольшие группы, доступность преподавателей, индивидуальный подход. Здесь действительно знают твое имя и помогают раскрыть потенциал.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-accent/20 hover:border-accent hover:shadow-xl transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 mx-auto mb-6 bg-accent/10 rounded-full flex items-center justify-center">
                  <span className="text-5xl">🚀</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-accent">Практика с первого курса</h3>
                <p className="text-lg font-semibold mb-2">Теория + практика = востребованность</p>
                <p className="text-muted-foreground">
                  УКВЗ и другие предприятия — твоя уникальная производственная база. Стажировки, практики и трудоустройство рядом с домом.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-secondary/20 hover:border-secondary hover:shadow-xl transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 mx-auto mb-6 bg-secondary/10 rounded-full flex items-center justify-center">
                  <span className="text-5xl">🌳</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-secondary">Жизнь в ритме "ЭКО"</h3>
                <p className="text-lg font-semibold mb-2">Здоровый образ жизни как норма</p>
                <p className="text-muted-foreground">
                  Чистый воздух, река Юрюзань, леса и горы вместо пробок. Спортивные секции, турклубы и отдых на природе в 15 минутах от дома.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Как построить карьеру, не уезжая?
          </h2>
          <p className="text-center text-xl text-muted-foreground mb-16">Твои шаги к успеху в Усть-Катаве</p>
          
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="flex gap-6 items-start group">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-2xl font-bold flex-shrink-0 group-hover:scale-110 transition-transform">
                1
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2 flex items-center gap-2">
                  <Icon name="GraduationCap" className="text-primary" size={28} />
                  Выбери направление
                </h3>
                <p className="text-lg text-muted-foreground">
                  Усть-Катавский филиал ЮУрГУ, местные колледжи, центры профподготовки — множество вариантов для твоего развития.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start group">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center text-white text-2xl font-bold flex-shrink-0 group-hover:scale-110 transition-transform">
                2
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2 flex items-center gap-2">
                  <Icon name="Award" className="text-secondary" size={28} />
                  Получи поддержку
                </h3>
                <p className="text-lg text-muted-foreground">
                  Муниципальные гранты, стипендии и программы поддержки молодежи помогут тебе на старте.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start group">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center text-white text-2xl font-bold flex-shrink-0 group-hover:scale-110 transition-transform">
                3
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2 flex items-center gap-2">
                  <Icon name="Users" className="text-accent" size={28} />
                  Найди единомышленников
                </h3>
                <p className="text-lg text-muted-foreground">
                  Молодежная палата, волонтерские движения, IT-сообщество, клубы предпринимателей — найди свою команду.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start group">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-2xl font-bold flex-shrink-0 group-hover:scale-110 transition-transform">
                4
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2 flex items-center gap-2">
                  <Icon name="Briefcase" className="text-primary" size={28} />
                  Начни работать
                </h3>
                <p className="text-lg text-muted-foreground">
                  Портал "Работа в России" и вакансии УКВЗ для студентов — старт твоей карьеры уже здесь.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Развеиваем сомнения
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-6">
            <Card className="border-l-4 border-l-primary hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <Icon name="X" className="text-destructive flex-shrink-0" size={28} />
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2 text-destructive">Миф: "В маленьком городе нет перспектив"</h3>
                  </div>
                </div>
                <div className="flex items-start gap-4 mt-4">
                  <Icon name="Check" className="text-secondary flex-shrink-0" size={28} />
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2 text-secondary">Правда:</h3>
                    <p className="text-muted-foreground text-lg">
                      Перспективы есть там, где есть инициатива. Здесь меньше конкуренции и больше шансов проявить себя и быстро занять ответственные позиции.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-primary hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <Icon name="X" className="text-destructive flex-shrink-0" size={28} />
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2 text-destructive">Миф: "Здесь негде отдыхать"</h3>
                  </div>
                </div>
                <div className="flex items-start gap-4 mt-4">
                  <Icon name="Check" className="text-secondary flex-shrink-0" size={28} />
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2 text-secondary">Правда:</h3>
                    <p className="text-muted-foreground text-lg">
                      Кино, кафе, мероприятия в ДК, набережная, спорт, походы, сообщества по интересам. А главное — твой круг общения, который ты создаешь сам.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-primary hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <Icon name="X" className="text-destructive flex-shrink-0" size={28} />
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2 text-destructive">Миф: "Я останусь здесь навсегда"</h3>
                  </div>
                </div>
                <div className="flex items-start gap-4 mt-4">
                  <Icon name="Check" className="text-secondary flex-shrink-0" size={28} />
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2 text-secondary">Правда:</h3>
                    <p className="text-muted-foreground text-lg">
                      Получив качественное и доступное образование с практикой, ты можешь работать откуда угодно или строить карьеру на местном предприятии. Усть-Катав — это надежный трамплин.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-secondary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Они остались и не пожалели
          </h2>
          <p className="text-center text-xl text-muted-foreground mb-16">Истории успеха</p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white text-4xl">
                  <Icon name="Wrench" size={40} />
                </div>
                <h3 className="text-2xl font-bold mb-2">Алексей, 25 лет</h3>
                <p className="text-primary font-semibold mb-4">Инженер на УКВЗ</p>
                <p className="text-muted-foreground">
                  "Получил образование в местном филиале ЮУрГУ. Уже на 3 курсе начал практику на заводе. Сейчас — ведущий инженер. Работа интересная, зарплата достойная!"
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center text-white text-4xl">
                  <Icon name="Laptop" size={40} />
                </div>
                <h3 className="text-2xl font-bold mb-2">Мария, 23 года</h3>
                <p className="text-accent font-semibold mb-4">IT-специалист на удаленке</p>
                <p className="text-muted-foreground">
                  "Училась программированию онлайн, живу в Усть-Катаве. Работаю на московскую компанию удаленно. Живу у реки, хожу в походы — это счастье!"
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center text-white text-4xl">
                  <Icon name="Store" size={40} />
                </div>
                <h3 className="text-2xl font-bold mb-2">Дмитрий, 27 лет</h3>
                <p className="text-secondary font-semibold mb-4">Предприниматель</p>
                <p className="text-muted-foreground">
                  "Открыл свое кафе в центре города. Небольшие стартовые вложения, лояльные клиенты. Бизнес растет, город развивается вместе с нами!"
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-16 bg-gradient-to-r from-primary via-secondary to-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Твое будущее начинается здесь и сейчас.<br />Сделай осознанный выбор!
          </h2>
          
          <div className="mb-8">
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-6">
              <Icon name="Download" className="mr-2" size={20} />
              Скачать полную памятку
            </Button>
          </div>

          <div className="max-w-2xl mx-auto mb-8">
            <h3 className="text-xl font-bold mb-4">Контакты</h3>
            <p className="flex items-center justify-center gap-2 mb-2">
              <Icon name="Phone" size={20} />
              <span>+7 (XXX) XXX-XX-XX</span>
            </p>
            <p className="flex items-center justify-center gap-2">
              <Icon name="Mail" size={20} />
              <span>молодежь@усть-катав.рф</span>
            </p>
          </div>

          <div className="flex justify-center gap-6 mb-8">
            <a href="#" className="hover:scale-110 transition-transform">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30">
                <Icon name="MessageCircle" size={24} />
              </div>
            </a>
            <a href="#" className="hover:scale-110 transition-transform">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30">
                <Icon name="Instagram" size={24} />
              </div>
            </a>
            <a href="#" className="hover:scale-110 transition-transform">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30">
                <Icon name="Facebook" size={24} />
              </div>
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span>#УстьКатав</span>
            <span>#ПамяткаВыпускника</span>
            <span>#ВернутьсяВУК</span>
            <span>#БудущееЗдесь</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
