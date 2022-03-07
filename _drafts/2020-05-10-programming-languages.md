Прежде чем начать рассматривать языки программирования, настоятельно рекомендую прочитать статью Что такое программирование.

Для программирования какой-либо системы, нет необходимости знать все детали внутреннего устройства. Программная модель вычислительной системы - это набор представлений, достаточный для начала написания программы. В самом простом случае, программная модель представляет из себя процессор работающий с диапазоном адресов. Весь диапазон адресов разбит на участки, каждый из которых относится к определенному физическому устройству.

простейшая программная модель вычислительной машины
Для примера может предположить, что с адреса 0 по адрес 268435455 - это ПЗУ. Желая работать с ПЗУ, мы обращаемся к этому диапазону адресов. С адреса 268435456, мы уже будем работать с ОЗУ. Если же мы хотим работать с клавиатурой, мы должны знать адрес к которому нужно обратится. Или если мы хотим вывести что-то на экран, мы должны знать диапазон адресов видео памяти.

Однако, если мы программируем под вычислительную систему с ОС, ситуация меняется. ОС организует механизм изолированности и многозадачности. Доступ ко многим физическим устройствам получается только через системные вызовы, а вся доступная для программы память представляет из себя ОЗУ.

0. Машинные коды
   На сколько я в курсе, сейчас практически никто не программирует на машинных кодах. Однако в недалеком прошлом, все программы писались сразу на языке понятном процессору. Для этого бралась документация по процессору и про программной модели электронно-вычислительной машины (ЭВМ). В документации по процессору находилась описание того, как в памяти должна хранится та или иная команда. Программист читал это все, и на основании этого составлял программу. Конечно, 0 и 1 последовательно никто не вводил (это было крайне неудобно). В те времена использовали 8-ричную систему или 16-ричную систему счисления для составления программ.

Пример для 64-разрядного процессора Intel:

КОМАНДА ОПИСАНИЕ
BIN DEC HEX
1001 0000 144 90 ничего не делать
1011 0000 0000 0110 176 6 b0 06 записать число 6 в регистр a
1011 0001 0000 0110 177 6 b1 06 записать число 6 в регистр b
90 - это байт записаный в 16-ричной системе счисления (в 10-тичной это число 144), который воспринимается процессором intel x86_64 как ничего не делать.
b0 06 - это команда (2 байта) записи числа 6 в регистр a. b0 - это команда, которая говорит что следующий байт в памяти следует поместить в регистр a.

b1 06 - команда записи числа 6 в регистр b.

команда записи числа в регистр
Так, в документации по процессору можно найти полный набор инструкций и из расшифровка. Это довольно трудоемкое занятие усложнялось еще тем, что новые процессоры начинали выходить все чаще, каждый из которых отличался своим набором команд. В добавок, тестировать и находить ошибки в бинарном коде, было довольно сложно. Все эти проблемы привели к возникновению языка Assembly.

1. Assembly
   Чтобы программировать было проще, программисты написали программу - assembler (сборщик). Программа assembler читала заданный файл, где были написаны инструкции для процессора символами, и транслировала это в другой файл в бинарном виде.

Продолжение обзора языка Assembly читайте по ссылке.

2. Язык С
   Все программы на assembly пишутся под определенный процессор. К примеру, у одного процессора есть регистр eax, а у другого - нет. Или новый процессор умеет высчитывать sin от числа, а старые - нет. Программа, написанная с использованием регистра eax или специфической команды, будет работать только на определенных процессорах. Брайен Керниган и Деннис Ричи решили создать язык программирования способный решить эту проблему. Так появился язык Си.

Синтаксис языка напрямую не связан с командами процессора. Однако, под каждый новый процессор создается компилятор, который транслирует код программы в бинарный код этого процессора. Таким образом, единожды написанная программа на языке Си может быть скомпилирована в бинарный файл для любого современного процессора для которого есть компилятор!

//TODO link

2. Язык С++
   С++ дополняет язык С ООП и некоторыми новыми механизмами защиты от ошибок.

//TODO

3. Java/C#
   Основной принцип тут - скомпилированное единожды, везде исполняется + сборщик мусора и все - это ссылки.

//TODO

4. Python/Ruby/JavaScript
   //TODO

Ассемблер
Assembler - это язык в котором каждая строка исходного кода, заменяется на одну команду процессора.

Базовый курс

Подробный курс
//TODO

Си/C++

простой курс по си

более качественный, но долгий
Java/C#

//TODO

Python/Ruby/JavaScript

python

хороший курс по JavaScript

Ruby
//TODO