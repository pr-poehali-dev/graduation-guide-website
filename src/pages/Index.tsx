import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadPDF = async () => {
    try {
      const response = await fetch('https://functions.poehali.dev/8af7c4c1-9ca3-432e-956a-577a20fd7487');
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'pamyatka-vypusknika.pdf';
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (error) {
      console.error('Ошибка загрузки PDF:', error);
    }
  };

  return (
    <div className="min-h-screen">
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-primary/90 via-secondary/80 to-accent/70 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: 'url(https://cdn.poehali.dev/projects/5dbb0f6c-21d9-4607-9734-ae2c9c4edd16/files/136911a3-5077-4c83-91b8-5306993c0039.jpg)' }}
        />
        <div className="relative z-10 container mx-auto px-4 text-center text-white animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg">
            Вернуться в Усть-Катав —<br />не шаг назад, а уверенный старт
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-95 font-semibold">
            Узнай, почему твой родной город — идеальное место для качественного образования и яркой студенческой жизни
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 bg-white text-primary hover:bg-gray-100 shadow-xl"
              onClick={downloadPDF}
            >
              <Icon name="Download" className="mr-2" size={20} />
              Скачать памятку (PDF)
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 py-6 border-2 border-white text-white hover:bg-white/20 shadow-xl"
              onClick={() => scrollToSection('advantages')}
            >
              Узнать больше
            </Button>
          </div>
        </div>
        <button 
          onClick={() => scrollToSection('advantages')}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer bg-transparent border-none"
        >
          <Icon name="ChevronDown" size={32} className="text-white" />
        </button>
      </section>

      <section id="advantages" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
            Здесь тебя ждут не только воспоминания,
          </h2>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-primary">
            но и возможности
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="border-2 hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="text-6xl mb-4">💰</div>
                <h3 className="text-2xl font-bold mb-3 text-foreground">Финансовая свобода</h3>
                <h4 className="text-xl font-semibold mb-3 text-primary">Низкие затраты — высокое качество жизни</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Обучение в филиалах и колледжах Челябинска и других городов рядом с домом. 
                  Аренда жилья не съедает весь бюджет. Трати деньги на саморазвитие, а не на выживание в мегаполисе.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="text-6xl mb-4">👨‍🏫</div>
                <h3 className="text-2xl font-bold mb-3 text-foreground">Персональный подход</h3>
                <h4 className="text-xl font-semibold mb-3 text-secondary">Ты — личность, а не номер в списке</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Небольшие группы, доступность преподавателей, индивидуальный подход к обучению. 
                  Здесь действительно знают твое имя и помогают раскрыть потенциал.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="text-6xl mb-4">🚀</div>
                <h3 className="text-2xl font-bold mb-3 text-foreground">Практика с первого курса</h3>
                <h4 className="text-xl font-semibold mb-3 text-accent">Теория + практика = востребованность</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Усть-Катавский вагоностроительный завод и другие предприятия — твоя уникальная производственная база. 
                  Стажировки, практики и трудоустройство рядом с домом.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="text-6xl mb-4">🌳</div>
                <h3 className="text-2xl font-bold mb-3 text-foreground">Жизнь в ритме "ЭКО"</h3>
                <h4 className="text-xl font-semibold mb-3 text-secondary">Здоровый образ жизни как норма</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Чистый воздух, река Юрюзань, леса и горы вместо часов в пробках. 
                  Спортивные секции, турклубы и возможность отдохнуть на природе в 15 минутах от дома.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="steps" className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
            Как построить карьеру, не уезжая?
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-6">
            <Card className="border-l-4 border-l-primary hover:shadow-lg transition-shadow">
              <CardContent className="p-8 flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-foreground">Выбери направление</h3>
                  <p className="text-muted-foreground mb-3">
                    Изучи программы Усть-Катавского филиала ЮУрГУ, местных колледжей и центров профподготовки
                  </p>
                  <Button variant="link" className="p-0 h-auto text-primary">
                    <Icon name="ExternalLink" size={16} className="mr-2" />
                    Посмотреть учебные заведения
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-secondary hover:shadow-lg transition-shadow">
              <CardContent className="p-8 flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center text-xl font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-foreground">Получи поддержку</h3>
                  <p className="text-muted-foreground">
                    Узнай о муниципальных грантах, стипендиях и программах поддержки молодежи в Усть-Катаве
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-accent hover:shadow-lg transition-shadow">
              <CardContent className="p-8 flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-xl font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-foreground">Найди единомышленников</h3>
                  <p className="text-muted-foreground">
                    Присоединяйся к Молодежной палате, волонтерским движениям, IT-сообществу и клубам по интересам
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-primary hover:shadow-lg transition-shadow">
              <CardContent className="p-8 flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold">
                  4
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-foreground">Начни работать</h3>
                  <p className="text-muted-foreground mb-3">
                    Ищи вакансии на портале "Работа в России" и стажировки на УКВЗ для студентов
                  </p>
                  <Button variant="link" className="p-0 h-auto text-primary">
                    <Icon name="ExternalLink" size={16} className="mr-2" />
                    Открыть вакансии
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="myths" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
            Мифы и правда
          </h2>
          <p className="text-xl text-center mb-16 text-muted-foreground">
            Развеиваем сомнения
          </p>
          
          <div className="max-w-5xl mx-auto space-y-8">
            <Card className="border-2 overflow-hidden">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-2">
                  <div className="bg-destructive/10 p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <Icon name="X" className="text-destructive" size={32} />
                      <h3 className="text-2xl font-bold text-foreground">Миф</h3>
                    </div>
                    <p className="text-lg text-foreground font-semibold">
                      "В маленьком городе нет перспектив"
                    </p>
                  </div>
                  <div className="bg-secondary/10 p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <Icon name="Check" className="text-secondary" size={32} />
                      <h3 className="text-2xl font-bold text-foreground">Правда</h3>
                    </div>
                    <p className="text-lg text-foreground">
                      Перспективы есть там, где есть инициатива. Здесь меньше конкуренции и больше шансов проявить себя и быстро занять ответственные позиции
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 overflow-hidden">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-2">
                  <div className="bg-destructive/10 p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <Icon name="X" className="text-destructive" size={32} />
                      <h3 className="text-2xl font-bold text-foreground">Миф</h3>
                    </div>
                    <p className="text-lg text-foreground font-semibold">
                      "Здесь негде отдыхать"
                    </p>
                  </div>
                  <div className="bg-secondary/10 p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <Icon name="Check" className="text-secondary" size={32} />
                      <h3 className="text-2xl font-bold text-foreground">Правда</h3>
                    </div>
                    <p className="text-lg text-foreground">
                      Кино, кафе, мероприятия в ДК, набережная, спорт, походы, сообщества по интересам. А главное — твой круг общения, который ты создаешь сам
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 overflow-hidden">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-2">
                  <div className="bg-destructive/10 p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <Icon name="X" className="text-destructive" size={32} />
                      <h3 className="text-2xl font-bold text-foreground">Миф</h3>
                    </div>
                    <p className="text-lg text-foreground font-semibold">
                      "Я останусь здесь навсегда"
                    </p>
                  </div>
                  <div className="bg-secondary/10 p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <Icon name="Check" className="text-secondary" size={32} />
                      <h3 className="text-2xl font-bold text-foreground">Правда</h3>
                    </div>
                    <p className="text-lg text-foreground">
                      Получив качественное и доступное образование с практикой, ты можешь работать откуда угодно или строить карьеру на местном предприятии. Усть-Катав — это надежный трамплин
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="success-stories" className="py-20 bg-gradient-to-br from-secondary/10 to-primary/10">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
            Истории успеха
          </h2>
          <p className="text-xl text-center mb-16 text-muted-foreground">
            Они остались и не пожалели
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div 
                className="h-64 bg-cover bg-center"
                style={{ backgroundImage: 'url(https://cdn.poehali.dev/projects/5dbb0f6c-21d9-4607-9734-ae2c9c4edd16/files/f3072e2f-e5f5-4a9f-be36-8997dfb6ace1.jpg)' }}
              />
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 text-foreground">Алексей, 26 лет</h3>
                <p className="text-primary font-semibold mb-3">Инженер на УКВЗ</p>
                <p className="text-muted-foreground">
                  "Получил образование в филиале ЮУрГУ, сразу устроился на завод. Сейчас руковожу отделом. Карьерный рост здесь быстрее, чем в большом городе"
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div 
                className="h-64 bg-cover bg-center"
                style={{ backgroundImage: 'url(https://cdn.poehali.dev/projects/5dbb0f6c-21d9-4607-9734-ae2c9c4edd16/files/9f5c0507-fc33-4f84-99ac-1afdea604e01.jpg)' }}
              />
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 text-foreground">Мария, 24 года</h3>
                <p className="text-secondary font-semibold mb-3">IT-специалист на удаленке</p>
                <p className="text-muted-foreground">
                  "Работаю в московской компании из дома. Зарплата столичная, а расходы минимальные. Живу в своем доме с садом, о чем в Москве и мечтать не могла"
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div 
                className="h-64 bg-cover bg-center"
                style={{ backgroundImage: 'url(https://cdn.poehali.dev/projects/5dbb0f6c-21d9-4607-9734-ae2c9c4edd16/files/dde73229-b573-45a4-949b-d9ca2ae67962.jpg)' }}
              />
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 text-foreground">Дмитрий, 29 лет</h3>
                <p className="text-accent font-semibold mb-3">Предприниматель</p>
                <p className="text-muted-foreground">
                  "Открыл свое кафе в центре города. Конкуренция небольшая, аренда доступная. За три года окупил вложения и открываю второе заведение"
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-background py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Твое будущее начинается здесь и сейчас
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Сделай осознанный выбор!
            </p>
            <Button 
              size="lg"
              className="text-lg px-8 py-6 bg-primary text-primary-foreground hover:bg-primary/90"
              onClick={downloadPDF}
            >
              <Icon name="Download" className="mr-2" size={20} />
              Скачать памятку (PDF)
            </Button>
          </div>
          
          <div className="border-t border-background/20 pt-8">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Icon name="Phone" size={20} />
                  Контакты
                </h3>
                <p className="opacity-90 mb-2">Отдел по делам молодежи г. Усть-Катав</p>
                <p className="opacity-90">Телефон: +7 (000) 000-00-00</p>
                <p className="opacity-90">Email: molodezh@ust-katav.ru</p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Icon name="Users" size={20} />
                  Мы в соцсетях
                </h3>
                <div className="flex gap-4">
                  <Button variant="outline" size="icon" className="border-background text-background hover:bg-background hover:text-foreground">
                    <Icon name="MessageCircle" size={20} />
                  </Button>
                  <Button variant="outline" size="icon" className="border-background text-background hover:bg-background hover:text-foreground">
                    <Icon name="Send" size={20} />
                  </Button>
                  <Button variant="outline" size="icon" className="border-background text-background hover:bg-background hover:text-foreground">
                    <Icon name="Globe" size={20} />
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="text-center opacity-75">
              <p className="mb-2">#УстьКатав #ПамяткаВыпускника #ВернутьсяВУК #БудущееЗдесь</p>
              <p className="text-sm">© 2024 Администрация г. Усть-Катав. Все права защищены.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
