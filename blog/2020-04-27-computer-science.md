---
slug: computer-science
title: Computer Science
authors: scientistnik
tags: [programming, beginner, draft]
---

# Физический уровень

В любом участке пространства находится определенное количество электронов. Каждый электрон имеет заряд. Получается, что на данном участке сконцентрирован некий заряд или потенциал.<!--truncate-->

Напряжение (U) - это разность потенциалом между двумя точками. Если эти точки пространства соединить проводящим материалом, электроны из большего потенциала побегут в сторону с меньшим потенциалом, пока оба потенциала не уравняются. Чем выше разность потенциалом этих точек, тем быстрее они будут перемещаться из одной точки в другую. Скорость перемещения называют сила тока (I). Среда в которой перемещаются электроны создает сопротивление, которое уменьшает скорость электронов.

Об этом нам говорит закон Ома:

Сила тока прямо пропорциональна напряжению и обратно пропорциональна сопротивлению
Но электроны не "дураки". Если им предоставить два пути с разным сопротивлением, они преимущественно выберут путь с наименьшим. Фокус в том, что мы умеем изменять сопротивление среды, тем самым определять, какой путь выберут электроны.

Транзистор как раз является примером среды с изменяемым сопротивлением. У транзистора три контакта: в один электроны входят, из другого выходят, а третий управляет сопротивлением.

Видео о работе транзистора:

И еще одно видео о работе транзистора:

Базовые логические элементы
В цифровой электронике, транзистор используется как переключатель. Для описания состояний таких переключателей, отходят от точных значений напряжений и токов, и используют цифры 0 и 1.

0 или логический ноль, означает отсутствие напряжения на контакте. 1 или логическая единица, означает присутствие напряжения на контакте.

На основе транзисторов строят простейшие логические элементы, к которым относят:

Инвертор
Конъюнктор
Дизъюнктор
Описание основных логических элементов можно найти на сайте. Или посмотреть видео о том, как компьютеры складывает числа:

А вот практическое видео:

На основе базовых логических элементов строят более важные для понимания, логические элементы. Вот некоторые из них:

мультиплексор и демультиплексор
триггеры
счетчики
регистры
сумматоры и другие сложные элементы
Отдельным упоминанием стоит отметить оперативно запоминающее устройство или ОЗУ. ОЗУ представляет из себя набор регистров, доступ к которым определяется через мультиплексор и демультиплексор. Иными словами, у каждого регистра в ОЗУ есть свой адрес, и выбрав этот регистр можно считать информацию, которая там хранится, или записать туда информацию.

# Процессор

В основе процессора лежит полный сумматор с регистрами и управляющим автоматом. Такое сочетание блоков делают его универсальным вычислительным устройством, который умеет складывать, отнимать, умножать, делить и многие другие математические операции.

простейшая модель процессора
Шина - логически объединенный пучок проводов. В данном случае, контактов процессора. Шина адреса задает адрес в памяти с которым процессор работает в данный момент. Шина данных служит для передачи данных выбранного адреса. Шина управления служит для задания режима работы: считывания данных или запись.

Регистры процессора используются для сохранения промежуточных результатов вычислений, а также управляют поведением процессора с внешними устройствами. Регистр счетчика команд - счетчик, показывающий текущий адрес исполняемой команды.

Арифметическо-логическое устройство (АЛУ) - в простейшем случае, сумматор. Флаги - набор битов, устанавливаемых после проведения вычислений. Например, бит переполнения устанавливается в 1, когда результат сложения превысил разрядность.

Управляющий автомат (УА) управляет поведением блоков, соединяет различный блоки между собой через общую шину.

Когда включается питание процессора, во всех регистрах установлены 0. Управляющий автомат соединяет регистр счетчика команд с шиной адреса, а в шину управления устанавливает сигнал чтения. Так процессор дает знать, что хочет считать данные из памяти по адресу 0. Когда по шине управления приходит сигнал о готовности данных, управляющий автомат считывает данные из шины данных в свой блок. Полученные данные воспринимаются им как команда.

Допустим, мы получили команды ничего не делать. УА отсчитывает процессорный такт ничего не предпринимая. После этого, он посылает сигнал на регистр счетчика команд для увеличения значения счетчика на +1. Далее цикл повторяется, т.е. УА соединяет СК с ША и режим чтения в ШУ. Таким образом, процессор считывает команду из памяти с адресом 1.

Виды команд:

Команда сохранить значение по адресу X в регистр Y. УА в этом случае устанавливает адрес Х на ША, на ШУ - чтение, а ШД соединяет с регистром Y. Регистр Y может быть регистр СК. Таким образом, командами в памяти можно управлять последовательностью исполнения команд.
Команда сложения значений из регистра X и Y. УА соединяет регистр X c блоком А АЛУ, и регистр Y с блоком B АЛУ. Подает сигнал АЛУ на сложение чисел. Результат сложения из A+B сохраняет в регистр X.
Команда условной записи в регистр СК. УА проверяет, к примеру, установлен ли флаг переполнения в АЛУ. Если установлен, записать в регистр СК соответствующее значение.
Почитать о работе процессора можно тут.

# Архитектура ЭВМ

ЭВМ - электронно вычислительная машина.

В основе архитектуре ЭВМ лежат три шины: шина адреса, данных и управления.

Оперативно-запоминающее устройство (ОЗУ) - быстрая, но энергозависимая память (т.е. хранит информацию только пока есть питание).

Постоянно-запоминающее устройство (ПЗУ) - медленная, но энергонезависимая память. Т.е. сохраняет информацию даже при отсутствии питания.

Шина адреса (ША) определяет адрес с которым хочет работать в данный момент процессор. Шина данных (ШД) используется как транспорт данных. Шина управления (ШУ) - как набор управляющих сигналов от процессора, например: чтение адреса или запись в него.

Процессор взаимодействует с внешним миром через 3 шины: адреса, данных и управления. Все устройства подключаются в этим шинам, так, чтобы за каждым устройством был закреплен свой, непересекающиеся с другими, диапазон адресов.

Например, если подключить ПЗУ к диапазону от 0 по 255 адресам, а ОЗУ подключить от 256 по 511 адресам. Таким образом, если процессор установит на шине адреса число 56, он будет работать с ячейкой №56 из ПЗУ. Однако, когда процессор установит на ША адрес 256, работать он будет уже с ячейкой под №0 из ОЗУ, т.к. для ОЗУ адрес 256 - это ячейка №0. Согласование адресов реализуется с помощью мультиплексоров.

Таким образом, можно подключать сколько угодно устройств к общим шинам, ограниченные диапазоном доступных адресов.

Про архитектуру ЭВМ можно почитать тут.

# Операционная система

Операционная система - это программа. У современной операционной системы, есть масса задач, которые она решает. Попробуем кратко рассказать о них.

Первоначальная идея операционной системы (ОС) - упростить запуск других программ. Первые ОС только этим и занимались: предоставляли интерфейс для запуска других программ в виде командной строки. Пользователь просто вводит название программы, и ОС запускала ее. После завершения программы, управление передавалось обратно ОС, которая снова была готова к запуску следующей команды.

Таким образом любая запущенная программа имела полный доступ к компьютеру. В том числе, она могла изменить память, где хранилась сама ОС. Когда такое происходило, ОС зависала, и это никому не нравилось. Поэтому, в ОС начали внедрять изолированность самой ОС от запускаемых программ. Теперь, запускаемые программы могли работать только с выделенной для них памятью.

Позже, всем вдруг захотелось запускать несколько программ одновременно. И в ОС реализовали многозадачность. При этом нужно понимать, что многозадачность довольно сложная задача: мало того, что эти запущенные программы должны быть изолированны не только по отношению к ОС, но и к друг другу, так еще и к устройствам ввода/вывода, к которым они возможно захотят обращаться одновременно, например к клавиатуре, чтобы считать что ввел пользователь или монитору, чтобы отобразить что-то пользователю. Для разделения доступа в ОС ввели понятие системного вызова, который может разрешать читать или записывать программе на какое-то физическое устройство. Иными словами, запущенная программа, чтобы получить доступ к определенному устройству, должна вызвать определенный системный вызов ОС. И только после того, когда ОС ответит на этот вызов, доступ будет получен.

Надежность - еще одна функции ОС. Ведь если из 10 запущенных программ, в одной закралась ошибка, мы не хотим чтобы весь компьютер из-за этого завис. ОС отлавливает ошибку, обрабатывает ее, и аварийно завершает только проблемную программу.

В добавок к этому, в ОС внедрили многопользовательский режим, чтобы ей могли пользоваться несколько пользователей, у каждого свой набор программ и данных с разными типами доступа.

# Языки программирования

Прежде чем начать рассматривать языки программирования, настоятельно рекомендую прочитать статью Что такое программирование.

Более подробно рассматриваю языки программирования в материале по ссылке.

# Компьютерные сети и интернет

В основе компьютерных сетей лежит сетевая модель OSI ISO.

//TODO

# Заключение

Это только упрощенные основы CS. Каждая из озвученных тем стоит более подробного изучения. Да и из этих тем выводится перечить не менее важных. Данная подборка должна мотивировать к выбору направления творческого поиска.
