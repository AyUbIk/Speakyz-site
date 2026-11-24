/* practice.js */
(function(){
var API=(window.SZ_API||'')+'/api/chat';
var $=function(s){return document.querySelector(s)};
function el(t,c,x){var e=document.createElement(t);if(c)e.className=c;if(x!=null)e.textContent=x;return e}
function pick(a){return a[Math.floor(Math.random()*a.length)]}
var L='ru';
function readLang(){try{var sv=localStorage.getItem('sz_lang');if(sv==='ru'||sv==='uz'||sv==='en')return sv;var n=(navigator.language||'ru').slice(0,2);if(n==='uz'||n==='en')return n}catch(e){}return 'ru'}
L=readLang();
function setLang(l){L=l;try{localStorage.setItem('sz_lang',l)}catch(e){}}

/* ================= UI TEXT ================= */
var U={
ru:{
 mH:"Пробники IELTS",mP:"Мини-пробники Reading и Listening с таймером и автопроверкой. Writing и Speaking тренируйте на вкладке «Практика».",
 tabs:[["reading","Reading","10 вопросов · 15 мин"],["listening","Listening","9 вопросов · 8 мин"],["writing","Writing","Практика →"],["speaking","Speaking","Практика →"]],
 start:"Начать",submit:"Сдать",again:"Пройти ещё раз",score:"Результат",band:"Примерный Band",of:"из",your:"Ваш ответ",corr:"Правильный ответ",
 bandNote:"Это мини-тест, шкала приблизительная. Официальный балл дадут только на настоящем экзамене.",
 play:"Прослушать",plays:"Прослушиваний осталось",noAudio:"Ваш браузер не умеет озвучивать текст. Попросите преподавателя прочитать транскрипт.",transcript:"Транскрипт",
 readIntro:"Прочитайте текст и ответьте на вопросы. На всё 15 минут.",lisIntro:"Нажмите «Прослушать» (можно 2 раза), затем ответьте. На всё 8 минут.",typeAns:"Ответ (не более двух слов или цифр)",
 mNote:"Тексты, вопросы и задания написаны Speakyz с нуля и не являются материалами настоящего IELTS.",variant:"Вариант",
 pH:"Практика Speaking и Writing",pP:"Темы как на экзамене, с идеями и лексикой. Включите таймер, говорите и сразу прослушайте себя.",
 pTabs:[["speaking","Генератор тем Speaking","Part 1, 2 и 3 с записью голоса"],["writing","Генератор тем Writing","Task 1 и Task 2 с таймером и счётчиком слов"]],
 part:"Часть",newTopic:"Новая тема",hints:"Идеи и лексика",ideas:"Идеи",vocab:"Полезные слова и фразы",
 prep:"Подготовка",talk:"Говорите",rec:"Идёт запись",rStart:"Начать с таймером и записью",rStop:"Остановить",
 listen:"Прослушайте себя",dl:"Скачать запись",noMic:"Микрофон недоступен или запрещён в браузере. Можно просто говорить вслух по таймеру.",
 sTx:"Что вы сказали (подставляется автоматически, если браузер умеет распознавать речь; можно поправить)",
 aiFb:"Разбор от ИИ",aiBusy:"ИИ проверяет...",aiShort:"Нужно хотя бы 20 слов.",aiShortW:"Нужно хотя бы 50 слов.",aiFail:"ИИ-проверка пока недоступна. Покажите работу преподавателю или попробуйте позже.",
 wType1:"Task 1 · 20 мин · от 150 слов",wType2:"Task 2 · 40 мин · от 250 слов",words:"слов",task:"Задание",wStart:"Запустить таймер",wDone:"Время вышло. Можно получить разбор.",
 pNote:"Все темы и задания написаны Speakyz с нуля и не являются материалами настоящего IELTS. Оценки ИИ ориентировочные.",
 tH:"Support Teacher",tP:"Личный ИИ-учитель: объясняет грамматику, исправляет ошибки, тренирует Speaking и Writing на уровне Band 9. Это искусственный интеллект, а не человек.",
 tName:"Support Teacher",tRole:"ИИ-учитель английского и IELTS",
 tModes:[["free","Вопрос учителю"],["grammar","Исправь мой текст"],["speaking","Говорим по-английски"],["writing","Проверь Writing"],["vocab","Слова и фразы"]],
 tHi:{free:"Привет! Я Support Teacher. Спросите про грамматику, IELTS или курс, и я объясню шаг за шагом.",grammar:"Пришлите любой английский текст, и я исправлю ошибки и объясню каждую из них.",speaking:"Давайте поговорим по-английски. Нажмите на микрофон и скажите что-нибудь, а я отвечу голосом и поправлю ошибки. Можно начать с «Hello, can we practise IELTS Speaking Part 1?»",writing:"Вставьте своё эссе вместе с заданием. Я оценю его по четырём критериям IELTS и покажу, как поднять балл.",vocab:"Назовите тему (например, Education или Environment), и я дам слова, коллокации и примеры для band 7+."},
 tSug:{free:["Как поднять Speaking с 6 до 7?","Объясни Present Perfect","Какой курс мне выбрать?"],grammar:["Yesterday I go to the shop and buyed some bread.","I am agree with this opinion."],speaking:["Hello, can we practise IELTS Speaking Part 1?","Ask me a Part 3 question about technology."],writing:["Как построить Task 2 за 40 минут?"],vocab:["Environment","Education","Technology"]},
 tPh:"Напишите сообщение...",tSend:"Отправить",tMic:"Говорить",tMicOn:"Слушаю...",tVoice:"Озвучивать ответы",tSpeak:"Прослушать",tErr:"Учитель временно недоступен. Напишите нам в Telegram: @speakyz_lern_english_bot",tClear:"Начать заново",tNoSR:"Ваш браузер не умеет распознавать речь. Попробуйте Chrome или пишите текстом.",
 tNote:"ИИ может ошибаться. Оценки ориентировочные, а важные вопросы по курсам и оплате решайте через Telegram-бот."},
uz:{
 mH:"IELTS sinov testlari",mP:"Taymer va avtomatik tekshiruvli Reading va Listening mini-testlari. Writing va Speaking ni «Amaliyot» boʻlimida mashq qiling.",
 tabs:[["reading","Reading","10 savol · 15 daq"],["listening","Listening","9 savol · 8 daq"],["writing","Writing","Amaliyot →"],["speaking","Speaking","Amaliyot →"]],
 start:"Boshlash",submit:"Topshirish",again:"Qaytadan",score:"Natija",band:"Taxminiy Band",of:"/",your:"Javobingiz",corr:"Toʻgʻri javob",
 bandNote:"Bu mini-test, shkala taxminiy. Rasmiy ballni faqat haqiqiy imtihon beradi.",
 play:"Eshitish",plays:"Qolgan eshitishlar",noAudio:"Brauzeringiz matnni ovozlashtira olmaydi. Oʻqituvchidan transkriptni oʻqib berishni soʻrang.",transcript:"Transkript",
 readIntro:"Matnni oʻqing va savollarga javob bering. Hammasi uchun 15 daqiqa.",lisIntro:"«Eshitish» tugmasini bosing (2 marta mumkin), keyin javob bering. 8 daqiqa.",typeAns:"Javob (koʻpi bilan ikki soʻz yoki raqam)",
 mNote:"Matnlar, savollar va topshiriqlar Speakyz tomonidan noldan yozilgan va haqiqiy IELTS materiali emas.",variant:"Variant",
 pH:"Speaking va Writing amaliyoti",pP:"Imtihondagidek mavzular, gʻoyalar va lugʻat bilan. Taymerni yoqing, gapiring va oʻzingizni darhol eshiting.",
 pTabs:[["speaking","Speaking mavzulari generatori","1, 2, 3-qism, ovoz yozish bilan"],["writing","Writing mavzulari generatori","Task 1 va Task 2, taymer va soʻz hisoblagich bilan"]],
 part:"Qism",newTopic:"Yangi mavzu",hints:"Gʻoyalar va lugʻat",ideas:"Gʻoyalar",vocab:"Foydali soʻz va iboralar",
 prep:"Tayyorgarlik",talk:"Gapiring",rec:"Yozilmoqda",rStart:"Taymer va yozuv bilan boshlash",rStop:"Toʻxtatish",
 listen:"Oʻzingizni eshiting",dl:"Yozuvni yuklab olish",noMic:"Mikrofon mavjud emas yoki brauzerda taqiqlangan. Taymer bilan ovoz chiqarib gapirishingiz mumkin.",
 sTx:"Nima dedingiz (brauzer nutqni taniy olsa, avtomatik toʻldiriladi; tuzatishingiz mumkin)",
 aiFb:"Sunʼiy intellekt tahlili",aiBusy:"Tekshirilmoqda...",aiShort:"Kamida 20 soʻz kerak.",aiShortW:"Kamida 50 soʻz kerak.",aiFail:"Sunʼiy intellekt tekshiruvi hozircha mavjud emas. Ishni oʻqituvchiga koʻrsating yoki keyinroq urinib koʻring.",
 wType1:"Task 1 · 20 daq · kamida 150 soʻz",wType2:"Task 2 · 40 daq · kamida 250 soʻz",words:"soʻz",task:"Topshiriq",wStart:"Taymerni yoqish",wDone:"Vaqt tugadi. Tahlil olishingiz mumkin.",
 pNote:"Barcha mavzu va topshiriqlar Speakyz tomonidan noldan yozilgan va haqiqiy IELTS materiali emas. Sunʼiy intellekt baholari taxminiy.",
 tH:"Support Teacher",tP:"Shaxsiy sunʼiy intellekt oʻqituvchi: grammatikani tushuntiradi, xatolarni tuzatadi, Speaking va Writing ni Band 9 darajasida mashq qildiradi. Bu sunʼiy intellekt, inson emas.",
 tName:"Support Teacher",tRole:"Ingliz tili va IELTS boʻyicha AI oʻqituvchi",
 tModes:[["free","Oʻqituvchiga savol"],["grammar","Matnimni tuzat"],["speaking","Inglizcha gaplashamiz"],["writing","Writing tekshir"],["vocab","Soʻz va iboralar"]],
 tHi:{free:"Salom! Men Support Teacher. Grammatika, IELTS yoki kurs haqida soʻrang, bosqichma-bosqich tushuntiraman.",grammar:"Istalgan inglizcha matnni yuboring, xatolarni tuzatib, har birini tushuntiraman.",speaking:"Inglizcha gaplashamiz. Mikrofonni bosing va biror narsa ayting, men ovoz bilan javob berib, xatolarni tuzataman. «Hello, can we practise IELTS Speaking Part 1?» dan boshlashingiz mumkin.",writing:"Insho va topshiriqni birga joylang. IELTS ning toʻrt mezoni boʻyicha baholab, ballni qanday oshirishni koʻrsataman.",vocab:"Mavzuni ayting (masalan, Education yoki Environment), men band 7+ uchun soʻzlar, birikmalar va misollar beraman."},
 tSug:{free:["Speaking ni 6 dan 7 ga qanday koʻtaraman?","Present Perfect ni tushuntir","Qaysi kursni tanlay?"],grammar:["Yesterday I go to the shop and buyed some bread.","I am agree with this opinion."],speaking:["Hello, can we practise IELTS Speaking Part 1?","Ask me a Part 3 question about technology."],writing:["Task 2 ni 40 daqiqada qanday tuzaman?"],vocab:["Environment","Education","Technology"]},
 tPh:"Xabar yozing...",tSend:"Yuborish",tMic:"Gapirish",tMicOn:"Tinglayapman...",tVoice:"Javoblarni ovozlashtirish",tSpeak:"Eshitish",tErr:"Oʻqituvchi vaqtincha ishlamayapti. Telegramda yozing: @speakyz_lern_english_bot",tClear:"Qaytadan boshlash",tNoSR:"Brauzeringiz nutqni tanimaydi. Chrome da urinib koʻring yoki matn yozing.",
 tNote:"Sunʼiy intellekt xato qilishi mumkin. Baholar taxminiy, kurs va toʻlov masalalari Telegram-bot orqali hal qilinadi."},
en:{
 mH:"IELTS mock tests",mP:"Mini Reading and Listening mocks with a timer and instant marking. Train Writing and Speaking on the Practice tab.",
 tabs:[["reading","Reading","10 questions · 15 min"],["listening","Listening","9 questions · 8 min"],["writing","Writing","Practice →"],["speaking","Speaking","Practice →"]],
 start:"Start",submit:"Submit",again:"Try again",score:"Score",band:"Approximate Band",of:"of",your:"Your answer",corr:"Correct answer",
 bandNote:"This is a mini test and the scale is approximate. Only the real exam gives an official score.",
 play:"Play audio",plays:"Plays left",noAudio:"Your browser cannot read text aloud. Ask a teacher to read the transcript.",transcript:"Transcript",
 readIntro:"Read the text and answer the questions. You have 15 minutes.",lisIntro:"Press Play (twice at most), then answer. You have 8 minutes.",typeAns:"Answer (no more than two words or numbers)",
 mNote:"All texts, questions and tasks were written by Speakyz from scratch and are not real IELTS material.",variant:"Variant",
 pH:"Speaking and Writing practice",pP:"Exam-style topics with ideas and vocabulary. Start the timer, speak, and listen back to yourself right away.",
 pTabs:[["speaking","Speaking topic generator","Parts 1, 2 and 3 with voice recording"],["writing","Writing topic generator","Task 1 and Task 2 with a timer and word counter"]],
 part:"Part",newTopic:"New topic",hints:"Ideas and vocabulary",ideas:"Ideas",vocab:"Useful words and phrases",
 prep:"Preparation",talk:"Speak",rec:"Recording",rStart:"Start with timer and recording",rStop:"Stop",
 listen:"Listen to yourself",dl:"Download recording",noMic:"The microphone is unavailable or blocked in your browser. You can still speak out loud against the timer.",
 sTx:"What you said (filled in automatically if your browser can recognise speech; you can edit it)",
 aiFb:"AI feedback",aiBusy:"AI is checking...",aiShort:"Write at least 20 words.",aiShortW:"Write at least 50 words.",aiFail:"AI feedback is not available yet. Show your work to a teacher or try later.",
 wType1:"Task 1 · 20 min · 150+ words",wType2:"Task 2 · 40 min · 250+ words",words:"words",task:"Task",wStart:"Start timer",wDone:"Time is up. You can get feedback now.",
 pNote:"All topics and tasks were written by Speakyz from scratch and are not real IELTS material. AI scores are estimates.",
 tH:"Support Teacher",tP:"Your personal AI teacher: explains grammar, corrects mistakes, and coaches Speaking and Writing at a Band 9 level. This is an AI, not a human.",
 tName:"Support Teacher",tRole:"AI teacher for English and IELTS",
 tModes:[["free","Ask the teacher"],["grammar","Fix my text"],["speaking","Let's speak English"],["writing","Check my Writing"],["vocab","Words and phrases"]],
 tHi:{free:"Hi! I am Support Teacher. Ask about grammar, IELTS or choosing a course and I will explain step by step.",grammar:"Send any English text and I will correct the mistakes and explain each one.",speaking:"Let's talk in English. Press the microphone and say something. I will answer out loud and fix your mistakes. You can start with \"Hello, can we practise IELTS Speaking Part 1?\"",writing:"Paste your essay together with the task. I will score it on the four IELTS criteria and show you how to raise the band.",vocab:"Give me a topic (for example Education or Environment) and I will give you words, collocations and examples for band 7+."},
 tSug:{free:["How do I raise my Speaking from 6 to 7?","Explain the Present Perfect","Which course should I choose?"],grammar:["Yesterday I go to the shop and buyed some bread.","I am agree with this opinion."],speaking:["Hello, can we practise IELTS Speaking Part 1?","Ask me a Part 3 question about technology."],writing:["How do I structure Task 2 in 40 minutes?"],vocab:["Environment","Education","Technology"]},
 tPh:"Type a message...",tSend:"Send",tMic:"Speak",tMicOn:"Listening...",tVoice:"Read answers aloud",tSpeak:"Listen",tErr:"The teacher is unavailable right now. Message us on Telegram: @speakyz_lern_english_bot",tClear:"Start over",tNoSR:"Your browser cannot recognise speech. Try Chrome or type instead.",
 tNote:"The AI can make mistakes. Scores are estimates, and for courses and payments use the Telegram bot."}};

/* ================= CONTENT (original, written by Speakyz) ================= */
var TFNG=["True","False","Not Given"];
var READS=[{title:"The Bicycle Library of Marenfield",mins:15,paras:[
"Marenfield, a coastal town of about 40,000 people, opened a bicycle library in 2016. Residents can borrow a bike for up to two weeks, free of charge, with only a library card as identification.",
"The idea came from a retired engineer, Tomas Hale, who noticed that many of the town's shops were losing customers to a large shopping centre ten kilometres away. He believed that cheaper and easier travel within the town centre would help small businesses. The council was doubtful at first and agreed only to a one-year trial, using 60 bicycles donated by local families.",
"Within six months, all 60 bicycles were borrowed continuously and a waiting list of 200 names had formed. A survey of shop owners found that 38 percent had noticed more customers on weekdays, although only a small number said their income had risen. Critics argued that the benefit was hard to measure, since the summer of the trial was unusually warm.",
"The scheme now has 320 bicycles and three part-time mechanics, funded by a small grant and a yearly donation from a local bank. Hale says the biggest surprise was not economic: many older residents who had not cycled for decades returned to it, and several began helping the mechanics as volunteers."],
qs:[
{t:"tf",q:"Borrowers must pay a deposit to take a bicycle.",a:1},
{t:"tf",q:"The council agreed to a permanent scheme straight away.",a:1},
{t:"tf",q:"Tomas Hale used to own a shop in Marenfield.",a:2},
{t:"tf",q:"The summer of the trial was warmer than usual.",a:0},
{t:"mc",q:"What problem did Hale want to address?",o:["Traffic jams in the centre","Small shops losing customers","A lack of public transport"],a:1},
{t:"mc",q:"After six months of the trial,",o:["some bicycles were never used","all bicycles were in use and people were waiting","many bicycles came back damaged"],a:1},
{t:"mc",q:"According to Hale, the biggest surprise was that",o:["shop income rose sharply","older residents started cycling again","the bank doubled its donation"],a:1},
{t:"fill",q:"The scheme currently has ____ bicycles.",a:["320"]},
{t:"fill",q:"The bicycles used in the trial were donated by ____.",a:["local families","families"]},
{t:"fill",q:"The mechanics are paid from a small grant and a yearly donation from a ____.",a:["bank","local bank"]}]}
,{title:"The Seed-Sharing Library",mins:15,paras:[
"In 2014 a small group of gardeners in the town of Hollow Creek began leaving spare vegetable seeds in a wooden box outside the public library. Anyone could take a packet, grow the plants, and return a few seeds from the harvest at the end of the season. Within two years, the box had grown into a shelf, then a dedicated room, staffed entirely by volunteers.",
"The idea is not entirely new. Seed libraries have existed in various forms since the 1970s, but Hollow Creek's version attracted attention because it kept careful records of which varieties grew well in the local soil and climate. This information, freely shared, saved new gardeners years of trial and error.",
"Not every attempt succeeded. In the first summer, almost sixty percent of borrowed seeds were never returned, and the volunteers worried the project would quietly fade away. A university researcher who studied the scheme suggested that people felt embarrassed about failed crops and simply avoided coming back. Once the library began framing the return of seeds as optional rather than expected, participation in the growing seasons that followed rose sharply.",
"Today the library exchanges more than four thousand seed packets a year and has inspired at least a dozen similar projects in nearby towns. The original founder, a retired botanist named Priya Nair, says the project's real success is not the seeds themselves but the conversations between neighbours who might otherwise never have met."],
qs:[
{t:"tf",q:"The seed library began inside a purpose-built room.",a:1},
{t:"tf",q:"Seed libraries were invented in Hollow Creek.",a:1},
{t:"tf",q:"Keeping records of local growing results helped new gardeners.",a:0},
{t:"tf",q:"Participation fell once returning seeds became optional.",a:1},
{t:"mc",q:"Why did many seeds go unreturned in the first summer?",o:["Gardeners moved away from the town","Gardeners felt embarrassed about failed crops","The library lost its records"],a:1},
{t:"mc",q:"What is Priya Nair's profession?",o:["Librarian","Retired botanist","University researcher"],a:1},
{t:"mc",q:"According to Nair, the project's main success is",o:["the number of seed varieties collected","the connections it creates between neighbours","the money it has saved gardeners"],a:1},
{t:"fill",q:"The seed library now exchanges about ____ packets a year.",a:["4000","four thousand"]},
{t:"fill",q:"In the first summer, about ____ percent of seeds were not returned.",a:["60","sixty"]},
{t:"fill",q:"The project has inspired about a dozen similar schemes in nearby ____.",a:["towns"]}]}
,{title:"The Last Telephone Box",mins:15,paras:[
"Across the United Kingdom, thousands of red telephone boxes have stood unused for years, made obsolete by mobile phones. Rather than removing them, many villages have adopted the boxes and converted them into something else entirely: tiny libraries, defibrillator stations, art galleries, and even the smallest art gallery in the country, a converted box in Shropshire that measures barely two square metres.",
"The adoption scheme, run by the phone company that still owns most of the boxes, allows a local community group to take over an unused box for a symbolic fee of one pound. The group then becomes responsible for its maintenance, though the structure itself, including the glass and the frame, must usually be kept in its original condition.",
"Applications rose steadily after the scheme launched, with several thousand boxes adopted within the first decade. Interest was strongest in rural areas, where residents often had the furthest to travel to reach a real library or a shop. Urban councils, by contrast, were sometimes less enthusiastic, citing concerns about vandalism and the cost of monitoring converted boxes in busier neighbourhoods.",
"Supporters argue that the scheme preserves a piece of design history while giving it a genuinely useful second life. Critics counter that it does little to address the decline of real rural services, such as post offices and bus routes, that the boxes cannot replace."],
qs:[
{t:"tf",q:"All adopted telephone boxes are used as libraries.",a:1},
{t:"tf",q:"Communities pay a large fee to adopt a box.",a:1},
{t:"tf",q:"The exterior of an adopted box usually must stay unchanged.",a:0},
{t:"tf",q:"Urban councils were always more enthusiastic than rural ones.",a:1},
{t:"mc",q:"Where is the smallest art gallery mentioned in the passage?",o:["London","Shropshire","Scotland"],a:1},
{t:"mc",q:"Why was interest strongest in rural areas?",o:["Rural boxes were cheaper to adopt","Residents often travelled far for services","Rural councils offered grants"],a:1},
{t:"mc",q:"What is one criticism of the scheme?",o:["It damages the original design of the boxes","It fails to replace declining rural services","It is too expensive for most communities"],a:1},
{t:"fill",q:"A community can adopt a box for a symbolic fee of ____ pound.",a:["1","one"]},
{t:"fill",q:"Several ____ boxes were adopted within the first decade.",a:["thousand","thousands"]},
{t:"fill",q:"Urban councils raised concerns about cost and ____.",a:["vandalism"]}]}
,{title:"Why Some Offices Are Going Quiet",mins:15,paras:[
"A growing number of companies are redesigning their offices around a simple idea: silence should be available on demand. The trend, sometimes called quiet-zoning, divides open-plan floors into sections where conversation and phone calls are discouraged, alongside collaborative areas where noise is expected and accepted.",
"The shift follows years of complaints about open-plan offices, which were originally introduced to encourage collaboration but have instead been blamed by many employees for constant interruption. Surveys conducted by workplace researchers consistently rank noise as one of the top three complaints about modern offices, alongside temperature and a lack of privacy.",
"Early adopters report mixed results. One technology company that introduced strict quiet zones found that focused work improved, measured by a reduction in the average time needed to complete coding tasks, but some staff felt the rules created an atmosphere that was unfriendly and overly formal. In response, the company relaxed its policy, allowing quiet zones to operate only during fixed hours each morning.",
"Architects who design these spaces note that success depends less on signage and more on genuine buy-in from staff. A quiet zone enforced only by posted rules tends to fail within months, whereas one that employees themselves requested and helped to design is far more likely to last."],
qs:[
{t:"tf",q:"Quiet-zoning removes all collaborative spaces from an office.",a:1},
{t:"tf",q:"Open-plan offices were originally designed to encourage teamwork.",a:0},
{t:"tf",q:"Noise is rarely mentioned as a complaint in workplace surveys.",a:1},
{t:"tf",q:"The technology company abandoned quiet zones completely.",a:1},
{t:"mc",q:"What did the technology company's quiet zones improve?",o:["Employee satisfaction scores","The time needed to complete coding tasks","The number of meetings held"],a:1},
{t:"mc",q:"Why did the company later relax its quiet-zone policy?",o:["Staff found the atmosphere unfriendly","The zones cost too much to maintain","Managers preferred open discussion"],a:0},
{t:"mc",q:"According to architects, what makes a quiet zone succeed long-term?",o:["Clear signage throughout the office","Genuine involvement of staff in its design","Strict enforcement by managers"],a:1},
{t:"fill",q:"Noise ranks among the top ____ complaints about modern offices.",a:["3","three"]},
{t:"fill",q:"The company's quiet zones now operate only during fixed hours each ____.",a:["morning"]},
{t:"fill",q:"A quiet zone enforced only by rules tends to fail within ____.",a:["months"]}]}
,{title:"The Rise of the Repair Cafe",mins:15,paras:[
"On the first Saturday of every month, a community hall in Dunford fills with broken toasters, torn jackets, and bicycles with flat tyres. Volunteers with experience in electronics, sewing, and mechanics sit at tables, helping owners fix their own belongings rather than throwing them away. The event, known as a repair cafe, now has thousands of equivalents worldwide.",
"The concept began in Amsterdam in 2009, started by a former journalist who had grown frustrated watching usable appliances end up in landfill simply because repair seemed more expensive or complicated than replacement. The first event attracted only a handful of visitors, but word spread quickly through local environmental groups.",
"Independent studies of repair cafes have found that roughly seventy percent of items brought in are successfully fixed on the spot, with the rest requiring parts that are not available that day. Organisers stress that the goal is not only to save individual items but to rebuild a culture in which people expect things to be mendable rather than disposable.",
"Manufacturers have reacted differently to the movement. Some have begun publishing repair manuals and selling spare parts more openly, partly in response to new laws in several countries that require certain products to be designed for easier repair. Others continue to argue that complex modern electronics are too intricate for amateur repair to be realistic or safe."],
qs:[
{t:"tf",q:"Repair cafes only accept electronic items.",a:1},
{t:"tf",q:"The first repair cafe took place in Amsterdam.",a:0},
{t:"tf",q:"The founder of the repair cafe movement was a former journalist.",a:0},
{t:"tf",q:"All items brought to a repair cafe are always fixed successfully.",a:1},
{t:"mc",q:"Why did the founder start the first repair cafe?",o:["He wanted to start a business","He was frustrated by usable items being thrown away","He needed volunteers for a project"],a:1},
{t:"mc",q:"What proportion of items are typically fixed on the spot?",o:["About thirty percent","About fifty percent","About seventy percent"],a:2},
{t:"mc",q:"How have some manufacturers responded to the movement?",o:["By opposing all new repair laws","By publishing repair manuals and parts","By closing their repair departments"],a:1},
{t:"fill",q:"Dunford's repair cafe meets on the first ____ of every month.",a:["saturday"]},
{t:"fill",q:"The movement began in the city of ____.",a:["amsterdam"]},
{t:"fill",q:"Some countries now require products to be designed for easier ____.",a:["repair"]}]}
,{title:"The Return of the Night Train",mins:15,paras:["For two decades, overnight rail services across Europe shrank steadily, squeezed by low-cost airlines and faster daytime trains. By 2015, several countries had abandoned sleeper routes entirely, and railway companies described the carriages as expensive, old and unprofitable.",
"Then travellers began to change their minds. A growing number of people, worried about the climate impact of short flights, started asking for alternatives. In 2019 a small Austrian operator reopened a sleeper line between Vienna and Brussels, and its first carriages sold out within three days.",
"Supporters point out that a night train saves the cost of one hotel night and delivers passengers to the city centre rather than to an airport far outside it. Critics note that tickets are often more expensive than flights, and that delays on international lines can ruin the schedule.",
"Engineers say the main obstacle is not demand but equipment. Very few factories still build sleeper carriages, and a new one can take four years to deliver. Until that changes, the operator says, the number of routes will grow only slowly."],
qs:[{t:"tf",q:"Overnight services had disappeared from every European country by 2015.",a:1},
{t:"tf",q:"The first carriages of the reopened line sold out quickly.",a:0},
{t:"tf",q:"Night trains are always cheaper than flights.",a:1},
{t:"tf",q:"Railway companies described sleeper carriages as profitable.",a:1},
{t:"tf",q:"Passengers on night trains must book a hotel in advance.",a:2},
{t:"mc",q:"Why did people start asking for alternatives to short flights?",o:["Flights became slower","They were worried about the climate impact","Trains became cheaper"],a:1},
{t:"mc",q:"What do supporters say about night trains?",o:["They arrive at city centres and save a hotel night","They are faster than planes","They are always on time"],a:0},
{t:"mc",q:"According to engineers, the main obstacle is",o:["lack of demand","a shortage of equipment","a lack of stations"],a:1},
{t:"fill",q:"A new sleeper carriage can take ____ years to deliver.",a:["4","four"]},
{t:"fill",q:"The reopened line connects Vienna and ____.",a:["brussels"]}]},
{title:"A Later Start for School",mins:15,paras:["In 2018, a secondary school in the town of Ashby moved its first lesson from 8:00 to 9:30. The head teacher, Mr Collins, had read research suggesting that teenagers naturally fall asleep later than children or adults, and that early starts leave many of them tired for the first hours of the day.",
"Over the following year, the school recorded a fall in late arrivals of almost half. Teachers also reported that pupils were more alert in morning lessons, although exam results in the first year changed very little. Some parents were unhappy, because the later finish at 4:30 made it hard to arrange after-school care.",
"A university team that followed the pupils found that they slept on average 50 minutes longer on school nights. However, the researchers pointed out that the change worked best for pupils who also reduced their evening screen time; those who stayed up late online gained much less.",
"Mr Collins says the school would keep the later start even without proof of higher marks, because attendance and mood have improved."],
qs:[{t:"tf",q:"The school's first lesson now begins at 9:30.",a:0},
{t:"tf",q:"Exam results rose sharply in the first year.",a:1},
{t:"tf",q:"All parents supported the change.",a:1},
{t:"tf",q:"The school day now ends at 4:30.",a:0},
{t:"tf",q:"Pupils who used screens late at night gained a lot of extra sleep.",a:1},
{t:"mc",q:"Why did Mr Collins change the start time?",o:["Teachers asked for it","Research showed teenagers fall asleep later","Parents demanded it"],a:1},
{t:"mc",q:"The university team found that pupils slept",o:["50 minutes longer","50 minutes less","the same amount"],a:0},
{t:"mc",q:"Why were some parents unhappy?",o:["Lessons became shorter","The later finish made after-school care hard","School fees increased"],a:1},
{t:"fill",q:"Late arrivals fell by almost ____.",a:["half","one half"]},
{t:"fill",q:"The head teacher is Mr ____.",a:["collins"]}]},
{title:"The Coral Nursery",mins:15,paras:["Off the coast of a small island, divers spend their mornings tying fragments of broken coral to metal frames. The frames form an underwater nursery where the fragments grow for about a year before being moved onto damaged reefs. The project began in 2017 with only twelve frames and a team of four volunteers.",
"Coral reefs cover less than one percent of the ocean floor, yet they support roughly a quarter of all marine species. Warmer seas have caused repeated bleaching in recent decades, and in some regions more than half of the living coral has been lost.",
"The nursery's founder, marine biologist Elena Ruiz, chose fragments from corals that survived a heatwave, hoping that their offspring would be more heat-tolerant. Early results are encouraging: after three years, 80 percent of transplanted pieces were still alive, compared with 35 percent of pieces moved from unselected sources.",
"Ruiz warns that restoration cannot replace action on climate, because if the sea keeps warming, planting corals only buys time. The team now trains local fishermen to run similar nurseries, which she hopes will create jobs as well as reefs."],
qs:[{t:"tf",q:"The nursery started with more than twenty frames.",a:1},
{t:"tf",q:"Coral reefs support about a quarter of marine species.",a:0},
{t:"tf",q:"Ruiz chose fragments from corals that survived a heatwave.",a:0},
{t:"tf",q:"The project has received government funding.",a:2},
{t:"tf",q:"Restoration alone can solve the problem of warming seas.",a:1},
{t:"mc",q:"How long do fragments grow in the nursery?",o:["About six months","About a year","About three years"],a:1},
{t:"mc",q:"What survival rate did the selected pieces have after three years?",o:["35 percent","50 percent","80 percent"],a:2},
{t:"mc",q:"Who is being trained to run similar nurseries?",o:["Tourists","Local fishermen","University students"],a:1},
{t:"fill",q:"The project began in ____.",a:["2017"]},
{t:"fill",q:"Reefs cover less than ____ percent of the ocean floor.",a:["1","one"]}]},
{title:"The Night Market Revival",mins:15,paras:["For decades the night market in the old quarter of Kestrel City was a place for locals to buy cheap vegetables after work. By 2010 it had shrunk to fewer than twenty stalls, and the city council considered closing it to make room for a car park.", "The market was rescued by an unlikely group: students from the nearby design college. In 2012 they offered to redesign the stalls for free, using lightweight folding frames that could be set up in ten minutes. They also persuaded the council to extend the opening hours from 9 p.m. to midnight on Fridays and Saturdays.", "The results surprised everyone. Within two years the market had more than 120 stalls, and about a third of the new traders were selling street food rather than vegetables. Not everyone welcomed the change. Some long-standing traders complained that rents had doubled and that tourists, who now made up almost half of all visitors, were not interested in basic groceries.", "The council has since introduced a rule reserving thirty stalls for traditional produce at a fixed low rent. Market manager Dana Whitlock believes this compromise is essential: 'A market that only serves visitors becomes a stage set. It needs the people who live here to stay alive.'"],qs:[{"t": "tf", "q": "The council wanted to build a car park on the market site.", "a": 0}, {"t": "tf", "q": "The students were paid for redesigning the stalls.", "a": 1}, {"t": "tf", "q": "Fridays and Saturdays now have longer opening hours.", "a": 0}, {"t": "tf", "q": "Most of the new traders sell traditional vegetables.", "a": 1}, {"t": "mc", "q": "What was special about the new stall frames?", "o": ["They were made of steel", "They could be set up quickly", "They were cheaper than wood"], "a": 1}, {"t": "mc", "q": "Why were some traders unhappy?", "o": ["Opening hours were too long", "Rents had doubled", "There were too few visitors"], "a": 1}, {"t": "mc", "q": "Dana Whitlock thinks that a market serving only visitors", "o": ["makes more profit", "would become artificial", "needs more stalls"], "a": 1}, {"t": "fill", "q": "The market now has more than ____ stalls.", "a": ["120", "one hundred and twenty", "one hundred twenty"]}, {"t": "fill", "q": "Almost half of all visitors are ____.", "a": ["tourists"]}, {"t": "fill", "q": "The council reserved ____ stalls for traditional produce.", "a": ["30", "thirty"]}]},
{title:"Sleep and the Teenage Brain",mins:15,paras:["Most teenagers feel sleepy in the morning, and for a long time adults put this down to laziness. However, research from several universities suggests the cause is biological. During adolescence the body clock shifts so that melatonin, the hormone that makes us sleepy, is released about two hours later than in children or adults.", "One famous experiment took place in a group of schools in the north of England. The schools moved their start time from 8.30 a.m. to 10 a.m. for two years. Attendance improved, and the percentage of students achieving top grades in exams rose by 12 percent. Researchers cautioned, however, that other factors, including a new head teacher in one school, may also have played a part.", "Doctors recommend between eight and ten hours of sleep for teenagers, but surveys show that fewer than a quarter achieve this on school nights. Screens are often blamed, because the blue light from phones can delay melatonin even further. Yet the same studies found that teenagers who left their phones outside the bedroom gained only about 20 minutes of extra sleep.", "Not all experts support later start times. Some parents say they cannot adjust their work schedules, and sports coaches point out that afternoon training would finish in the dark. The researchers' final advice is modest: schools should consider starting no earlier than 8.30 a.m. and avoid scheduling important exams in the first hour of the day."],qs:[{"t": "tf", "q": "Teenagers produce melatonin later than adults.", "a": 0}, {"t": "tf", "q": "The experiment lasted for one year.", "a": 1}, {"t": "tf", "q": "Every school in the experiment improved its exam results.", "a": 2}, {"t": "tf", "q": "Most teenagers sleep the recommended number of hours on school nights.", "a": 1}, {"t": "mc", "q": "According to the researchers, sleepiness in teenagers is mainly", "o": ["a result of laziness", "caused by the body clock", "due to poor diet"], "a": 1}, {"t": "mc", "q": "What happened when phones were left outside the bedroom?", "o": ["Sleep improved a little", "Sleep improved greatly", "Nothing changed"], "a": 0}, {"t": "mc", "q": "What is the researchers' final advice?", "o": ["Start school at 10 a.m.", "Avoid important exams in the first hour", "Ban phones in schools"], "a": 1}, {"t": "fill", "q": "Top grades rose by ____ percent.", "a": ["12", "twelve"]}, {"t": "fill", "q": "Teenagers are advised to sleep between eight and ____ hours.", "a": ["10", "ten"]}, {"t": "fill", "q": "Coaches worry that afternoon training would finish in the ____.", "a": ["dark"]}]},
{title:"The Floating Schools of Basin Lake",mins:15,paras:["Every year the rainy season floods large areas around Basin Lake, and for up to five months many children cannot walk to school. In 2011 an architect named Samir Rahman responded by converting old cargo boats into floating classrooms. Each boat carries about thirty pupils and is powered by solar panels on the roof.", "A typical day begins at eight, when the boat collects children from villages along the shore. Lessons include the national curriculum as well as practical subjects such as water safety and vegetable growing on floating gardens. The boats also carry small libraries, which are open to adults in the evenings.", "The project is funded mainly by donations, but running costs are low because the solar panels remove the need for fuel. The biggest difficulty has been finding qualified teachers willing to live on the water. To solve this, the organisation now trains graduates from the local villages, who already know the community.", "Since the first boat was launched, the number of schools has grown to 22, and the programme has been copied in two other countries. Rahman insists the model is not a permanent solution: 'The real goal is to build roads and schools that survive floods. Until then, the boats keep children learning.'"],qs:[{"t": "tf", "q": "The boats are powered by diesel engines.", "a": 1}, {"t": "tf", "q": "Adults can use the boat libraries.", "a": 0}, {"t": "tf", "q": "Rahman believes the boats are the best long-term answer.", "a": 1}, {"t": "tf", "q": "The programme has been copied in more than five countries.", "a": 1}, {"t": "mc", "q": "Why can children not walk to school during the rainy season?", "o": ["Roads are closed by snow", "Areas are flooded", "Teachers are on holiday"], "a": 1}, {"t": "mc", "q": "What has been the biggest difficulty?", "o": ["Funding", "Finding teachers willing to live on the water", "Repairing the boats"], "a": 1}, {"t": "mc", "q": "How does the organisation solve the teacher problem?", "o": ["It trains local graduates", "It pays higher salaries", "It reduces lessons"], "a": 0}, {"t": "fill", "q": "Each boat carries about ____ pupils.", "a": ["30", "thirty"]}, {"t": "fill", "q": "Lessons begin at ____.", "a": ["8", "eight", "8 00", "8am", "8 am", "eight oclock", "8 oclock"]}, {"t": "fill", "q": "There are now ____ floating schools.", "a": ["22", "twenty two", "twenty-two", "twentytwo"]}]},
{title:"Reading the Mind of a Chess Computer",mins:15,paras:["In 1997 a computer defeated the world chess champion for the first time, and many people predicted that the game would lose its appeal. The opposite happened. Today more people play chess than ever before, and the best human players use computers every day to prepare.", "Early chess programs worked by brute force: they examined millions of positions per second and chose the move with the best score. A newer generation, developed in the 2010s, taught itself by playing millions of games against itself. These programs often make moves that seem strange to humans, such as sacrificing a piece early in the game, yet the moves turn out to be correct many moves later.", "Grandmasters say that studying such moves has changed the way they think. Ideas once considered bad style, such as pushing a side pawn early, are now common. Interestingly, the average age at which players reach grandmaster level has fallen from about 22 to about 17, which many attribute to computer training.", "Not everyone is pleased. Some coaches fear that young players memorise computer lines without understanding them, and cheating in online games has become a serious problem. Tournament organisers now use special software to compare a player's moves with those of the strongest engines."],qs:[{"t": "tf", "q": "A computer first beat the world champion in the 1990s.", "a": 0}, {"t": "tf", "q": "Chess has become less popular since computers improved.", "a": 1}, {"t": "tf", "q": "Older chess programs learned by playing against themselves.", "a": 1}, {"t": "tf", "q": "Computer chess programs are used by amateur players only.", "a": 2}, {"t": "mc", "q": "The newer programs often", "o": ["avoid unusual moves", "make moves that look strange to humans", "copy grandmasters"], "a": 1}, {"t": "mc", "q": "What has happened to the age at which players become grandmasters?", "o": ["It has risen", "It has fallen", "It has stayed the same"], "a": 1}, {"t": "mc", "q": "Some coaches are worried that young players", "o": ["do not study enough", "memorise lines without understanding", "play too slowly"], "a": 1}, {"t": "fill", "q": "Early programs examined millions of ____ per second.", "a": ["positions"]}, {"t": "fill", "q": "The average age for reaching grandmaster level is now about ____.", "a": ["17", "seventeen"]}, {"t": "fill", "q": "Organisers use special ____ to detect cheating.", "a": ["software"]}]},{title:"The Urban Beekeeping Boom",mins:15,paras:["Over the past decade, beehives have appeared on the rooftops of banks, hotels, and museums in cities around the world. Supporters say urban beekeeping helps pollinators survive in places where farmland chemicals are less of a threat, while giving companies an easy way to appear environmentally responsible.","Ecologists are divided on whether the trend actually helps bees. City-kept honeybees are a single managed species, and a rooftop crowded with hives can mean fierce competition for the limited flowers within flying range. Several studies in European capitals found that wild bee species, many of which are solitary and far more effective pollinators per insect, declined in areas where honeybee hives multiplied fastest.","Beekeeping groups respond that honeybees are only part of the picture, and that the publicity around rooftop hives has pushed many city councils to plant more flowering trees and reduce pesticide use on public land, which benefits every pollinator species, not just honeybees. They point to London, where hive numbers roughly tripled between 2008 and 2018, alongside a parallel increase in wildflower verges planted by the city.","Most researchers now recommend a different approach: cities should expand flowering plants first and treat hives as a secondary step, placed only where food sources can support them without crowding out wild species. A small number of cities have already introduced limits on how many hives a single building may keep."],qs:[{t:"tf",q:"Urban beehives are usually found on the ground floor of buildings.",a:1},{t:"tf",q:"All ecologists agree that rooftop hives help bee populations.",a:1},{t:"tf",q:"Solitary wild bees can be more effective pollinators than honeybees.",a:0},{t:"tf",q:"London banned new beehives after 2018.",a:2},{t:"mc",q:"Why might rooftop hives harm wild bee species?",o:["They attract predators to rooftops","They compete with wild bees for limited flowers","They require pesticides to maintain"],a:1},{t:"mc",q:"What do beekeeping groups say is a benefit of the publicity around hives?",o:["It lowered the cost of honey","It encouraged councils to plant more flowers","It reduced the number of wild bee species"],a:1},{t:"mc",q:"What do most researchers now recommend?",o:["Banning hives in all cities","Expanding flowers before adding hives","Replacing honeybees with wild bees"],a:1},{t:"fill",q:"Honeybees are described as a single ____ species.",a:["managed"]},{t:"fill",q:"Between 2008 and 2018, hive numbers in London roughly ____.",a:["tripled"]},{t:"fill",q:"A small number of cities now limit how many ____ a building may keep.",a:["hives"]}]},{title:"The Community Fridge Movement",mins:15,paras:["In towns and cities across several countries, volunteers have installed public refrigerators on street corners, inside community centres, and outside churches, filled with food that would otherwise be thrown away. Anyone may take what they need, and anyone, including shops and individuals, may leave surplus food, with no paperwork and no means test.","The idea builds on older practices of food sharing, but the open community fridge differs in one key respect: it operates without supervision for most of the day, relying entirely on trust. Organisers say this removes the embarrassment that can come with visiting a staffed food bank, where visitors sometimes have to explain their circumstances to a volunteer.","Running a fridge is not free. Electricity, cleaning, and regular checks for spoiled food require a small group of committed volunteers, and several early projects closed within a year once the initial enthusiasm faded. The fridges that have lasted longest tend to share one feature: a rota system with clear daily responsibilities, rather than relying on whoever happens to be available.","Food safety regulators have occasionally raised concerns about unsupervised fridges, particularly regarding food left for long periods or items that need careful temperature control. In response, many projects now display simple guidance cards reminding users to check dates and to avoid leaving raw meat or dairy that has been unrefrigerated for more than a short time."],qs:[{t:"tf",q:"People must prove financial need before using a community fridge.",a:1},{t:"tf",q:"Community fridges are supervised at all times.",a:1},{t:"tf",q:"Some early community fridge projects closed down.",a:0},{t:"tf",q:"Food safety regulators have never commented on community fridges.",a:1},{t:"mc",q:"What is one advantage of a community fridge over a staffed food bank?",o:["It offers a wider variety of food","It avoids the embarrassment of explaining one's circumstances","It is cheaper to run"],a:1},{t:"mc",q:"What feature do the longest-lasting fridges share?",o:["A paid staff member","A rota with clear responsibilities","A strict members-only policy"],a:1},{t:"mc",q:"What have many projects added in response to safety concerns?",o:["Security cameras","Guidance cards about dates and storage","A locked door with a code"],a:1},{t:"fill",q:"Community fridges rely on ____ rather than supervision for most of the day.",a:["trust"]},{t:"fill",q:"Several early fridge projects closed within a ____ of opening.",a:["year"]},{t:"fill",q:"Guidance cards warn against leaving raw meat or ____ unrefrigerated too long.",a:["dairy"]}]},{title:"Dark-Sky Parks and the Fight Against Light Pollution",mins:15,paras:["A growing number of national parks and nature reserves have applied for official dark-sky status, a certification that recognises unusually low levels of artificial light at night. To qualify, a site must meet strict limits on brightness and often must persuade nearby towns to adjust their street lighting.","The push for darker skies is partly about astronomy, since even a modest amount of artificial light can make faint stars invisible, but researchers increasingly emphasise effects on wildlife. Migrating birds can become disoriented by bright coastal lights, sometimes colliding with buildings, while some insect populations have fallen in brightly lit areas, with knock-on effects for the bats and birds that feed on them.","Persuading towns to change lighting is rarely simple. Residents and shop owners often associate brighter streets with safety, and some studies on crime and lighting show mixed results, neither clearly supporting nor contradicting that belief. Dark-sky campaigners usually avoid arguing for turning lights off altogether, proposing instead warmer-coloured, shielded fixtures that direct light downward rather than into the sky.","Early adopters report an unexpected benefit: tourism. Several dark-sky parks have seen a rise in overnight visitors specifically seeking clear views of the Milky Way, a sight unavailable to roughly a third of the world's population due to light pollution near where they live."],qs:[{t:"tf",q:"Dark-sky status only considers whether a site is near a city.",a:1},{t:"tf",q:"Artificial light can disorient migrating birds.",a:0},{t:"tf",q:"Studies clearly prove that brighter streets reduce crime.",a:1},{t:"tf",q:"Dark-sky campaigners generally argue for switching off all outdoor lighting.",a:1},{t:"mc",q:"What is one wildlife effect of artificial light mentioned in the passage?",o:["Birds breed earlier in the year","Insect populations fall in brightly lit areas","Fish migrate to darker rivers"],a:1},{t:"mc",q:"What do dark-sky campaigners usually propose instead of removing lights?",o:["Brighter, whiter lighting","Warmer, shielded fixtures directing light downward","Replacing streetlights with motion sensors only"],a:1},{t:"mc",q:"What unexpected benefit have some dark-sky parks reported?",o:["Lower electricity bills for residents","An increase in overnight tourism","A reduction in insect numbers"],a:1},{t:"fill",q:"To qualify for dark-sky status, a site must meet strict limits on ____.",a:["brightness"]},{t:"fill",q:"Roughly a ____ of the world's population cannot see the Milky Way from home.",a:["third"]},{t:"fill",q:"Migrating birds can collide with ____ when disoriented by coastal lights.",a:["buildings"]}]},{title:"Pop-Up Skating Rinks in Small Towns",mins:15,paras:["Each winter, a number of small towns that lack a permanent ice rink now install temporary outdoor rinks in their main squares, using portable refrigeration units rather than relying on cold weather alone. The rinks are usually open for six to eight weeks and are taken down once the temporary structure's lease ends.","Town councils that have tried the scheme report a clear rise in visits to nearby shops and cafes during the rink's operating weeks, particularly in the evenings, when the rink is lit and often paired with food stalls. One council calculated that local spending during the rink period was around twenty percent higher than the same weeks in a typical year.","The costs, however, are considerable. Renting the refrigeration equipment, insurance, and staff to supervise skaters can make a six-week rink more expensive than some councils expected, and a handful of towns have abandoned the idea after a single season because ticket sales did not cover the costs.","Councils that have kept their rinks running for several years tend to share the expense with a private sponsor, often a local business that gains advertising space around the rink in exchange. Organisers say this arrangement spreads the financial risk and has allowed some towns to extend the rink's season by a further two weeks."],qs:[{t:"tf",q:"Pop-up rinks depend entirely on naturally cold weather.",a:1},{t:"tf",q:"Nearby shops have reported more visits during rink weeks.",a:0},{t:"tf",q:"Every town that has tried a pop-up rink has kept it running.",a:1},{t:"tf",q:"Sponsorship can extend a rink's operating season.",a:0},{t:"mc",q:"What did one council calculate about local spending during the rink period?",o:["It fell by twenty percent","It rose by around twenty percent","It stayed the same as usual"],a:1},{t:"mc",q:"Why have some towns abandoned pop-up rinks after one season?",o:["Complaints from residents about noise","Ticket sales did not cover the costs","A lack of interest from skaters"],a:1},{t:"mc",q:"What do sponsors typically receive in return for funding a rink?",o:["Free entry for all their staff","Advertising space around the rink","Ownership of the refrigeration equipment"],a:1},{t:"fill",q:"Most pop-up rinks stay open for around six to ____ weeks.",a:["eight"]},{t:"fill",q:"Rinks are usually paired in the evenings with lighting and ____.",a:["food stalls"]},{t:"fill",q:"Sponsorship has allowed some towns to extend the season by a further ____ weeks.",a:["two"]}]},{title:"Mobile Post Offices for Rural Villages",mins:15,paras:["As fixed post office branches have closed in thinly populated areas, several national postal services have introduced converted vans that travel a fixed weekly route, stopping for twenty to thirty minutes in each village to offer most of the services once provided by a permanent counter, including parcel collection, bill payment, and basic banking.","The vans were introduced partly in response to complaints from residents, particularly older villagers without their own transport, who had faced journeys of an hour or more to reach the nearest remaining branch after local closures. Early feedback suggested satisfaction was highest among exactly this group, who valued the fixed, predictable schedule as much as the service itself.","Running a mobile service is not without difficulty. A single van breakdown can disrupt an entire week's route, and staff must be trained to carry out the full range of counter duties alone, without the backup available in a larger branch. Several postal services have therefore paired each van with a second, held in reserve for exactly this situation.","Despite these challenges, passenger numbers, meaning villagers using the service, have grown steadily since the vans were introduced, and at least one postal service has announced plans to expand its mobile fleet rather than reopen any of the closed fixed branches, citing the lower cost of a van compared with maintaining a permanent building."],qs:[{t:"tf",q:"The mobile vans visit each village for a full working day.",a:1},{t:"tf",q:"Older villagers without transport reported high satisfaction with the vans.",a:0},{t:"tf",q:"A van breakdown has no effect on the weekly route.",a:1},{t:"tf",q:"One postal service plans to reopen its closed fixed branches instead of expanding vans.",a:1},{t:"mc",q:"Why were the mobile vans introduced?",o:["To reduce staff wages","In response to complaints about long journeys to branches","To test new banking technology"],a:1},{t:"mc",q:"What problem can a single van breakdown cause?",o:["Permanent loss of the service","Disruption to an entire week's route","A rise in postage prices"],a:1},{t:"mc",q:"Why has one postal service chosen to expand its van fleet rather than reopen branches?",o:["Vans are cheaper than maintaining a building","Villagers prefer vans to buildings","Vans can carry more parcels"],a:0},{t:"fill",q:"Each van typically stops in a village for twenty to ____ minutes.",a:["thirty"]},{t:"fill",q:"Staff on the vans must handle the full range of counter duties ____.",a:["alone"]},{t:"fill",q:"Passenger numbers using the mobile service have grown ____ since launch.",a:["steadily"]}]},{title:"Tiny Forests: The Miyawaki Method in Cities",mins:15,paras:["A planting technique developed by the Japanese botanist Akira Miyawaki in the 1970s has found new popularity in cities seeking to add greenery to small, unused plots of land. The method involves planting native tree and shrub species extremely close together, far denser than in a conventional forest, which forces the young plants to compete for light and grow upward quickly.","Supporters claim that Miyawaki forests mature roughly ten times faster than naturally planted woodland of the same size, reaching a self-sustaining state within twenty to thirty years rather than a century or more. The dense planting also means a Miyawaki forest can fit into a plot as small as a tennis court, making it suitable for car parks, schoolyards, and other spaces too small for a conventional park.","Independent researchers have raised some caution about the strongest growth claims, noting that most published studies so far have tracked forests for only ten to fifteen years, too short a period to confirm whether the long-term biodiversity matches that of older, naturally regenerated woodland. Even sceptical researchers, however, generally agree that the tiny forests outperform bare ground or mown grass on almost every measure of urban biodiversity.","Cities that have adopted the method report a secondary benefit beyond ecology: community involvement. Because planting such a dense forest requires many hands for a single intensive day, schools and local groups are often invited to take part, and several cities credit this shared planting day with building lasting interest in maintaining the site afterward."],qs:[{t:"tf",q:"The Miyawaki method plants trees further apart than in a conventional forest.",a:1},{t:"tf",q:"A Miyawaki forest can be planted on a plot as small as a tennis court.",a:0},{t:"tf",q:"All researchers agree the long-term biodiversity claims are fully proven.",a:1},{t:"tf",q:"Community planting days have been linked to continued interest in the site.",a:0},{t:"mc",q:"Who originally developed the Miyawaki method, and when?",o:["A Japanese botanist in the 1970s","A European city council in the 1990s","An American forester in the 1950s"],a:0},{t:"mc",q:"What caution have independent researchers raised?",o:["The forests damage local soil","Most studies so far cover too short a period to confirm long-term claims","The method is too expensive for most cities"],a:1},{t:"mc",q:"What secondary benefit, beyond ecology, is mentioned in the passage?",o:["Lower planting costs","Community involvement through shared planting days","Faster approval from city planners"],a:1},{t:"fill",q:"Miyawaki forests are claimed to mature roughly ____ times faster than natural woodland.",a:["ten","10"]},{t:"fill",q:"A self-sustaining state is reached within twenty to ____ years.",a:["thirty","30"]},{t:"fill",q:"Even sceptical researchers agree tiny forests outperform bare ground or mown ____.",a:["grass"]}]},{title:"The Right to Repair",mins:15,paras:["For decades, manufacturers of phones, laptops, and household appliances have largely controlled who is allowed to fix their products, often requiring an authorised technician and withholding spare parts or repair manuals from independent shops. A growing movement, now backed by new laws in several countries, argues that consumers should have a genuine right to repair what they own.","Supporters point to a simple statistic: electronic waste is the fastest-growing waste stream in the world, and a large share of it consists of devices that could have been repaired cheaply but were instead replaced, often because a repair quote from an authorised centre cost almost as much as a new product. Making spare parts and manuals available to independent repairers, they argue, would cut this waste significantly.","Manufacturers have resisted some proposals, citing safety concerns, particularly around battery repairs, and the risk that a badly performed fix could damage a device beyond recovery. They also argue that releasing detailed design information could help competitors or counterfeiters. Critics of this position note that similar objections were raised, and later dismissed, when car manufacturers were required to share repair information decades ago.","Early results from the first countries to pass right-to-repair laws are mixed but mostly encouraging: independent repair shops report more customers, and at least one major manufacturer has begun selling official spare parts directly to the public for the first time, a change it had previously called impractical."],qs:[{t:"tf",q:"Manufacturers have always freely shared repair manuals with independent shops.",a:1},{t:"tf",q:"Electronic waste is described as the fastest-growing waste stream in the world.",a:0},{t:"tf",q:"All manufacturers support right-to-repair laws without objection.",a:1},{t:"tf",q:"Car manufacturers were once required to share repair information.",a:0},{t:"mc",q:"Why do some repair quotes discourage customers from fixing a device?",o:["They take too long to arrange","They can cost almost as much as a new product","They are only available online"],a:1},{t:"mc",q:"What safety concern do manufacturers raise about repairs?",o:["Risks around battery repairs","Risk of theft during shipping","Risk of software viruses"],a:0},{t:"mc",q:"What has at least one major manufacturer started doing?",o:["Stopping all repairs","Selling official spare parts directly to the public","Closing its repair centres"],a:1},{t:"fill",q:"Critics compare the debate to one that happened decades ago in the ____ industry.",a:["car"]},{t:"fill",q:"Manufacturers worry that design information could help counterfeiters or ____.",a:["competitors"]},{t:"fill",q:"Independent repair shops report more ____ since the new laws.",a:["customers"]}]},{title:"Urban Foraging Maps",mins:15,paras:["A number of smartphone apps now let city residents locate edible plants growing wild in parks, along pavements, and in abandoned lots, from blackberries and wild garlic to apple trees planted decades ago and since forgotten. Users add pins to a shared map, noting the species, the season it fruits, and sometimes a rating of taste or ease of access.","The practice, often called urban foraging, is not new, but the maps have made it far easier for beginners to start, removing much of the plant-identification guesswork that once made foraging risky for the inexperienced. Several apps now include photo-matching tools that compare a user's photo against a database to suggest a likely identification, though all of the apps warn that the suggestion should never replace proper verification before eating anything.","City councils have responded in different ways. A few have welcomed the maps as a low-cost way to encourage residents to notice and value urban nature, while others worry about popular foraging spots becoming overcrowded or plants being stripped before they can seed naturally. One city now publishes its own official map, deliberately leaving out the exact locations of rare or slow-growing species to protect them.","Nutritionists have generally welcomed the trend cautiously, noting that wild food is rarely a significant source of calories for most foragers but can introduce people, especially children, to a wider variety of fresh plants than they might otherwise encounter, alongside a better understanding of where food actually comes from."],qs:[{t:"tf",q:"Urban foraging apps only show fruit trees, not other plants.",a:1},{t:"tf",q:"Photo-matching tools are said to replace the need for verification.",a:1},{t:"tf",q:"Some cities worry about popular foraging spots becoming overcrowded.",a:0},{t:"tf",q:"One city's official map includes the exact locations of all rare species.",a:1},{t:"mc",q:"What has made foraging easier for beginners, according to the passage?",o:["Cheaper foraging equipment","Shared maps reducing plant-identification guesswork","Government training courses"],a:1},{t:"mc",q:"Why does one city leave certain locations off its official map?",o:["To save printing costs","To protect rare or slow-growing species","Because the locations are unknown"],a:1},{t:"mc",q:"What do nutritionists say about wild food for most foragers?",o:["It provides most of their daily calories","It is rarely a significant source of calories","It is dangerous for children"],a:1},{t:"fill",q:"Users add ____ to a shared map to mark where plants grow.",a:["pins"]},{t:"fill",q:"Foraging can introduce people to a wider variety of fresh ____.",a:["plants"]},{t:"fill",q:"All the apps warn that a photo suggestion should never replace proper ____.",a:["verification"]}]},{title:"The Silent Spread of Microplastics in Rivers",mins:15,paras:["Tiny plastic fragments, generally smaller than five millimetres and known as microplastics, have been found in rivers on every continent studied so far, including remote mountain streams far from any obvious source of pollution. Much of the material comes not from litter but from the gradual breakdown of larger plastic items, as well as synthetic clothing fibres released during washing.","Measuring the true scale of the problem has proven difficult, since microplastics vary enormously in size, shape, and chemical composition, and existing filtering methods can miss the smallest particles entirely. Researchers in one widely cited study estimated that a single household's laundry could release several hundred thousand fibres per wash, though the figure depends heavily on the fabric and the washing machine used.","The effects on river wildlife remain an active area of research. Some studies have found microplastics inside the digestive systems of fish and insects, raising concern about the particles moving up the food chain, while others caution that the chemical effects, as opposed to simple physical presence, are still poorly understood and may vary greatly between different types of plastic.","A small number of cities have begun requiring new washing machines to include a basic filter capturing a portion of fibres before they reach the wastewater system, and some clothing brands now sell washing bags designed to trap fibres. Researchers broadly welcome these steps while cautioning that neither measure addresses the plastic already present in rivers and sediment."],qs:[{t:"tf",q:"Microplastics have been found only in rivers near cities.",a:1},{t:"tf",q:"Washing synthetic clothing can release microplastic fibres.",a:0},{t:"tf",q:"All researchers agree on the exact chemical effects of microplastics on wildlife.",a:1},{t:"tf",q:"Washing bags designed to trap fibres are already sold by some brands.",a:0},{t:"mc",q:"Why is measuring the scale of microplastic pollution difficult?",o:["Rivers are too large to study","Particles vary in size, shape and composition, and filters can miss small ones","Governments refuse to fund the research"],a:1},{t:"mc",q:"What have some studies found inside fish and insects?",o:["High levels of chlorine","Microplastics","Synthetic clothing fibres only"],a:1},{t:"mc",q:"What do new washing-machine filters aim to do?",o:["Remove all water pollution","Capture a portion of fibres before they reach wastewater","Clean clothes more thoroughly"],a:1},{t:"fill",q:"Microplastics are generally smaller than ____ millimetres.",a:["5","five"]},{t:"fill",q:"A single household's laundry could release several hundred thousand ____ per wash.",a:["fibres"]},{t:"fill",q:"Neither new measure addresses the plastic already present in rivers and ____.",a:["sediment"]}]},{title:"Community Land Trusts",mins:15,paras:["As housing costs have risen sharply in many cities, a model once considered a niche experiment has drawn renewed attention: the community land trust, in which a non-profit organisation owns land permanently on behalf of a community, while individual homes built on that land are sold or rented at a price kept deliberately below the open market rate.","The arrangement works by separating the ownership of land from the ownership of the building on it. Because the trust, rather than the homeowner, owns the land, resale prices are restricted by a formula agreed in advance, usually linked to local wages rather than general property prices. This prevents a home from becoming a highly profitable investment, but it also means owners cannot expect the large gains in value common in the open market.","Early trusts were often started by residents themselves, frequently in neighbourhoods facing the threat of large-scale redevelopment, but more recent examples have been supported by city governments seeking an alternative to simply building subsidised housing, which can be costly to maintain over decades. Proponents argue that a well-run trust effectively guarantees affordability forever, since land, once placed in a trust, is rarely sold back into the open market.","Sceptics raise a practical concern: finding mortgage lenders willing to finance a home where resale value is capped can be difficult, since the restriction reduces the collateral's value to a bank. Several trusts have overcome this by working with a small number of lenders who specialise in these arrangements, though the number of suitable lenders remains limited in most regions."],qs:[{t:"tf",q:"In a community land trust, the homeowner usually owns the land beneath their home.",a:1},{t:"tf",q:"Resale prices in a trust are usually linked to local wages.",a:0},{t:"tf",q:"All community land trusts were started by city governments.",a:1},{t:"tf",q:"Finding mortgage lenders for trust homes can be difficult.",a:0},{t:"mc",q:"How does a community land trust keep homes affordable?",o:["By subsidising monthly rent payments","By separating land ownership from the building and capping resale prices","By offering free land to any buyer"],a:1},{t:"mc",q:"What have more recent trusts often been supported by?",o:["Private banks","City governments","International charities"],a:1},{t:"mc",q:"Why can trust homes be harder to get a mortgage for?",o:["They are usually smaller than average","The resale cap reduces the home's value as collateral","Trusts refuse to allow mortgages"],a:1},{t:"fill",q:"A trust separates ownership of the land from ownership of the ____.",a:["building"]},{t:"fill",q:"Resale prices are restricted by a formula agreed in ____.",a:["advance"]},{t:"fill",q:"Proponents argue a well-run trust can guarantee affordability ____.",a:["forever"]}]},{title:"The Comeback of the Milk Round",mins:15,paras:["Door-to-door milk delivery in glass bottles, once a daily sight in many towns before supermarkets made it largely obsolete by the 1980s, has been quietly returning in several countries over the past decade, driven partly by concern over single-use plastic packaging and partly by a renewed appetite for locally produced food.","Modern milk rounds differ from their predecessors in several ways. Orders are typically placed through a smartphone app rather than left as a note for the milkman, deliveries often include a wider range of products such as bread, eggs, and juice, and routes are planned using software that adjusts for traffic rather than a fixed schedule memorised over years.","Economically, the model remains a narrow niche. A litre of milk in a reusable glass bottle generally costs noticeably more than the supermarket equivalent, since the dairy must collect, sterilise, and refill each bottle rather than simply recycling plastic, and delivery itself adds a cost that supermarkets avoid by having customers collect their own shopping.","Even so, several dairies running milk rounds report steady growth in customer numbers each year, concentrated particularly among households who cite the convenience of not having to remember milk on a supermarket trip, alongside a smaller group motivated primarily by reducing plastic waste. Industry figures remain cautious about predicting a full return to the scale seen decades ago."],qs:[{t:"tf",q:"Door-to-door milk delivery disappeared completely and has never returned.",a:1},{t:"tf",q:"Modern milk rounds often use a smartphone app for orders.",a:0},{t:"tf",q:"Milk in reusable glass bottles is usually cheaper than supermarket milk.",a:1},{t:"tf",q:"Some dairies report steady growth in customer numbers.",a:0},{t:"mc",q:"What are two reasons given for the return of milk rounds?",o:["Government subsidies and new laws","Concern over plastic packaging and demand for local food","Falling supermarket milk prices"],a:1},{t:"mc",q:"Why does glass-bottle milk usually cost more?",o:["It tastes better","The dairy must collect, sterilise and refill each bottle","Glass bottles are imported"],a:1},{t:"mc",q:"Which customers are particularly drawn to milk rounds, according to the passage?",o:["Only households with children","Those valuing convenience and those reducing plastic waste","Only households without cars"],a:1},{t:"mc",q:"Which decade made traditional milk rounds largely obsolete?",o:["The 1960s","The 1980s","The 2000s"],a:1},{t:"fill",q:"Modern deliveries often include bread, eggs and ____.",a:["juice"]},{t:"fill",q:"Routes are now planned using software that adjusts for ____.",a:["traffic"]}]},{title:"Citizen Scientists and the Annual Bird Count",mins:15,paras:["For one weekend each winter, hundreds of thousands of volunteers across several countries spend an hour or more counting every bird they see or hear in their garden, local park, or a chosen outdoor spot, recording the results through a simple phone app or paper form. The results are combined into one of the largest wildlife datasets collected anywhere in the world.","Scientists value the count not for any single year's results, which can be affected by weather on the day, but for the patterns visible across decades. Several declining species were first flagged as a cause for concern through citizen counts years before formal government surveys, which are more thorough but far more expensive and therefore conducted less frequently, confirmed the trend.","Participation requires no expertise, and organisers deliberately keep the identification guide simple, focusing on the thirty or so species most commonly seen in gardens, since research on past counts found that overly technical guides discouraged first-time participants without meaningfully improving data quality. A small team of expert reviewers checks for unusual or unlikely entries before the data is added to the public dataset.","Participation has grown nearly every year since the count began, and organisers now report it is increasingly used not only for research but to connect people, particularly those in cities with little other contact with nature, to the wildlife living around them. Several volunteers surveyed said the hour spent watching was the only time that week they had sat still outdoors."],qs:[{t:"tf",q:"The bird count happens every weekend throughout the year.",a:1},{t:"tf",q:"A single year's count result is considered the most scientifically important part of the data.",a:1},{t:"tf",q:"Citizen counts have flagged declining species before formal government surveys confirmed it.",a:0},{t:"tf",q:"The identification guide covers every bird species found in the country.",a:1},{t:"mc",q:"Why do scientists value the count mainly for patterns across decades?",o:["Single-year results are affected by weather and other factors","Governments only release data every ten years","Birds migrate too unpredictably"],a:0},{t:"mc",q:"Why does the guide focus on about thirty common species?",o:["Rare birds are protected by law","Overly technical guides discouraged first-time participants","Only thirty species exist in most gardens"],a:1},{t:"mc",q:"What do organisers say the count increasingly does besides supporting research?",o:["Raising funds for bird hospitals","Connecting people, especially in cities, to local wildlife","Training new ornithologists"],a:1},{t:"fill",q:"Volunteers spend an hour or more counting birds in their garden, park, or a chosen outdoor ____.",a:["spot"]},{t:"fill",q:"A small team of expert ____ checks unusual entries before data is published.",a:["reviewers"]},{t:"fill",q:"Participation has grown nearly every ____ since the count began.",a:["year"]}]}
,{title:"The Rise of Silent Discos",mins:15,paras:["At a silent disco, every guest wears a wireless headset instead of listening to speakers, and two or three DJs broadcast on separate channels at once, so each person can switch between them at will. What began as a novelty at a handful of outdoor festivals, partly to get around strict noise curfews, has since spread to museums, libraries, and even office parties.","Venue owners who have adopted the format point to one clear advantage: neighbours stop complaining. A nightclub that once needed expensive soundproofing to operate past midnight in a residential area can instead run a silent disco with almost no noise escaping the building at all, since the only sound outside the headsets is dancers singing along, usually off-key and to the amusement of passers-by.","The format has also opened dancing to venues that could never previously host it. Several museums now run after-hours silent discos among their exhibits, an arrangement that would be unthinkable with a conventional sound system near fragile objects. Libraries have used the same technology for themed study-break events without disturbing readers in nearby rooms.","Not every attempt has succeeded. Some dancers report feeling oddly isolated, since conversation is difficult with headphones on, and a channel that suddenly plays a song nobody recognises can empty a dance floor within seconds. Organisers have responded by printing the evening's rough track list in advance, so guests can choose their channel before arriving rather than switching at random."],qs:[{t:"tf",q:"Silent discos use speakers instead of headsets.",a:1},{t:"tf",q:"Silent discos were partly introduced to deal with noise curfews.",a:0},{t:"tf",q:"Museums have run silent discos among their exhibits.",a:0},{t:"tf",q:"Every dancer has reported enjoying the silent disco format.",a:1},{t:"mc",q:"Why do venue owners like silent discos?",o:["They are cheaper to organise than normal parties","Almost no noise escapes the building","They require fewer DJs"],a:1},{t:"mc",q:"What problem do some dancers experience?",o:["The headsets are uncomfortable","Conversation is difficult while wearing headphones","The music is too quiet"],a:1},{t:"mc",q:"How have organisers responded to the problem of unfamiliar songs clearing the floor?",o:["Banning unfamiliar songs","Printing a rough track list in advance","Reducing the number of channels to one"],a:1},{t:"fill",q:"At a silent disco, two or three DJs broadcast on separate ____.",a:["channels"]},{t:"fill",q:"Libraries have used silent discos for themed ____ events.",a:["study-break","study break"]},{t:"fill",q:"Dancers sometimes sing along ____, to the amusement of passers-by.",a:["off-key","off key"]}]},{title:"Floating Solar Farms",mins:15,paras:["Rather than covering farmland or desert with solar panels, a growing number of energy companies are installing them on water, most often on reservoirs built for drinking water or hydroelectric power. The panels sit on buoyant platforms anchored to the reservoir bed, and cables carry the electricity to shore.","Engineers say water offers two advantages over land. First, the surface naturally cools the panels, and since solar panels lose efficiency as they heat up, floating installations typically generate several percent more electricity than an equivalent land-based array in the same location. Second, the panels reduce evaporation from the reservoir below, an unexpected benefit in regions where water scarcity is already a serious concern.","The approach is not without obstacles. Floating structures must withstand waves, strong winds, and, in some climates, ice, all while keeping delicate electrical components dry. Maintenance also requires boats or walkways rather than simple road access, which raises costs compared with a land-based farm of the same size.","Even so, several countries with large hydroelectric reservoirs have begun combining floating solar with their existing dams, since the dam's transmission lines and grid connection are already in place. Operators report that solar output can be scheduled to complement hydropower, generating electricity during sunny days while water is saved behind the dam for release at night or during cloudy periods."],qs:[{t:"tf",q:"Floating solar panels are installed directly on the seabed.",a:1},{t:"tf",q:"Water helps cool solar panels, improving their efficiency.",a:0},{t:"tf",q:"Floating solar farms increase evaporation from reservoirs.",a:1},{t:"tf",q:"Floating solar farms require boats or walkways for maintenance.",a:0},{t:"mc",q:"Why do floating panels often generate more electricity than land panels?",o:["They receive more direct sunlight","Water keeps them cooler","They are tilted at a better angle"],a:1},{t:"mc",q:"What unexpected benefit do floating panels provide for reservoirs?",o:["Increased fish populations","Reduced evaporation","Cleaner drinking water"],a:1},{t:"mc",q:"Why do countries with hydroelectric dams favour combining them with floating solar?",o:["Dams produce too little electricity alone","Transmission lines and grid connections already exist","Solar panels are cheaper near dams"],a:1},{t:"fill",q:"Floating panels sit on ____ platforms anchored to the reservoir bed.",a:["buoyant"]},{t:"fill",q:"Floating structures must withstand waves, strong winds, and sometimes ____.",a:["ice"]},{t:"fill",q:"Solar output can be scheduled to ____ hydropower.",a:["complement"]}]},{title:"The Return of Vinyl Record Pressing",mins:15,paras:["After nearly disappearing in the 1990s, vinyl record production has grown every year for over a decade, and several pressing plants that closed decades ago have reopened to meet demand. Industry figures suggest vinyl sales, measured by revenue, recently overtook sales of compact discs in a number of major markets for the first time since the 1980s.","Much of the renewed interest comes from listeners too young to remember vinyl's original era, drawn partly by the large album artwork and partly by a sound that many describe as warmer than digital formats, even though audio engineers point out that vinyl objectively has a narrower dynamic range and more background noise than a well-produced digital file.","Manufacturing capacity has struggled to keep pace with demand. Pressing a record requires specialised machines, many of them decades old, and the number of technicians who know how to repair them has shrunk considerably since the format's decline. As a result, popular new releases can take four to six months to be pressed, far longer than the few weeks a digital release requires.","A small number of companies have begun building new pressing machines rather than relying on repaired vintage equipment, hoping to shorten waiting times. Whether this investment pays off depends partly on whether the current wave of interest is a lasting shift in how people enjoy music or simply a passing trend among collectors."],qs:[{t:"tf",q:"Vinyl record sales have fallen every year for the past decade.",a:1},{t:"tf",q:"Vinyl revenue has recently overtaken CD revenue in some markets.",a:0},{t:"tf",q:"Audio engineers agree that vinyl has a wider dynamic range than digital files.",a:1},{t:"tf",q:"New pressing machines are being built to reduce waiting times.",a:0},{t:"mc",q:"What partly explains renewed interest in vinyl among young listeners?",o:["Lower prices than digital music","Large album artwork and a perceived warmer sound","Better sound quality proven by engineers"],a:1},{t:"mc",q:"Why has manufacturing capacity struggled to keep up with demand?",o:["A shortage of raw vinyl material","Few technicians can repair the old pressing machines","Governments have limited production"],a:1},{t:"mc",q:"How long can a popular new release take to be pressed?",o:["A few weeks","Four to six months","Over two years"],a:1},{t:"fill",q:"Audio engineers say vinyl has a narrower dynamic range and more background ____.",a:["noise"]},{t:"fill",q:"Many pressing machines still in use are decades ____.",a:["old"]},{t:"fill",q:"Whether new investment pays off depends on whether interest is lasting or a passing ____.",a:["trend"]}]},{title:"The Guerrilla Gardening Movement",mins:15,paras:["Guerrilla gardeners plant flowers, vegetables, or trees on land they do not own, usually neglected public spaces such as traffic islands, abandoned lots, or the strips of soil beside pavements, often working at night or early morning without seeking permission from the landowner, frequently a local council.","The practice has existed in various forms for decades, but it gained renewed attention after a wave of activity in large cities in the 2000s, when groups began coordinating plantings through online forums rather than acting alone. Some guerrilla gardeners frame their work explicitly as protest, drawing attention to land left derelict for years, while others simply want more greenery in their neighbourhood and see official channels as too slow.","Councils have responded in strikingly different ways. Some treat any unauthorised planting as a minor act of vandalism and remove it, particularly on land earmarked for future building projects. Others have quietly tolerated or even embraced guerrilla gardens that improve the look of neglected sites, occasionally offering informal support such as free compost once a planting has clearly taken root.","A small number of cities have gone further, creating official 'adopt a planter' schemes that effectively legalise the practice within certain boundaries, requiring only basic registration rather than a lengthy application process. Supporters argue this captures the benefits of guerrilla gardening, namely quick, low-cost improvements to neglected spaces, while avoiding the legal uncertainty that surrounds fully unauthorised planting."],qs:[{t:"tf",q:"Guerrilla gardeners always seek permission before planting.",a:1},{t:"tf",q:"Online forums helped coordinate guerrilla gardening activity in the 2000s.",a:0},{t:"tf",q:"All councils remove guerrilla gardens immediately.",a:1},{t:"tf",q:"Some cities have created official schemes that legalise a form of the practice.",a:0},{t:"mc",q:"Where do guerrilla gardeners typically plant?",o:["Private gardens with owner consent","Neglected public spaces such as traffic islands","Farmland rented from councils"],a:1},{t:"mc",q:"How do some guerrilla gardeners frame their work?",o:["As a form of protest against neglected land","As a paid profession","As a tourist attraction"],a:0},{t:"mc",q:"What do 'adopt a planter' schemes require?",o:["A lengthy official application","Basic registration only","A fee paid to the council"],a:1},{t:"mc",q:"What support have some tolerant councils offered to established guerrilla gardens?",o:["Free compost","Cash payments","Legal ownership of the land"],a:0},{t:"fill",q:"Guerrilla gardeners often plant in the strips of soil beside ____.",a:["pavements"]},{t:"fill",q:"'Adopt a planter' schemes effectively ____ the practice within certain boundaries.",a:["legalise","legalize"]}]},{title:"Robotic Lawnmowers and Urban Wildlife",mins:15,paras:["Robotic lawnmowers, small machines that cut grass automatically on a programmed schedule, have become common in parks and private gardens over the past decade, marketed mainly on convenience: owners no longer need to mow by hand, and the machines return to a charging dock between sessions.","Ecologists have recently raised concerns about their effect on garden wildlife. Unlike a human with a traditional mower, who typically cuts grass once every week or two, robotic mowers often run daily or every other day, keeping grass unusually short at all times. Several studies have found fewer flowering weeds, such as clover and daisies, in robotically mowed lawns, since the plants rarely get the chance to flower between cuts, which in turn reduces food available to bees and other pollinating insects.","A more direct harm has also been documented: robotic mowers operating at night, when some models are quietest and therefore preferred by owners, can injure hedgehogs and other small animals that curl into a ball rather than flee from a perceived threat, a defence effective against predators but not against blades. Several wildlife charities have called for mowers to include sensors capable of detecting such animals and stopping automatically.","Manufacturers have responded unevenly. A few newer models now include basic object-detection sensors, though charities argue these are not yet reliable enough to detect a still, silent hedgehog in long grass. In the meantime, the simplest recommendation from ecologists is also the cheapest: schedule mowing for daylight hours only, and leave at least one unmown patch of garden for wildlife."],qs:[{t:"tf",q:"Robotic lawnmowers typically mow less often than traditional mowers.",a:1},{t:"tf",q:"Flowering weeds are less common on robotically mowed lawns.",a:0},{t:"tf",q:"All robotic mowers currently include reliable animal-detection sensors.",a:1},{t:"tf",q:"Hedgehogs tend to flee immediately when a mower approaches.",a:1},{t:"mc",q:"Why do fewer flowering weeds appear on robotically mowed lawns?",o:["The soil is damaged by the robots","The plants rarely get the chance to flower between frequent cuts","Robots use chemicals that kill weeds"],a:1},{t:"mc",q:"Why are hedgehogs particularly at risk from robotic mowers?",o:["They are attracted to the machines' noise","They curl into a ball instead of fleeing","They nest inside the charging dock"],a:1},{t:"mc",q:"What is the simplest recommendation ecologists currently give?",o:["Ban robotic mowers entirely","Mow only during daylight hours and leave a wild patch","Replace blades with brushes"],a:1},{t:"fill",q:"Robotic mowers return to a ____ dock between sessions.",a:["charging"]},{t:"fill",q:"Short grass reduces food available to bees and other ____ insects.",a:["pollinating"]},{t:"fill",q:"Wildlife charities have called for mowers with better detection ____.",a:["sensors"]}]},{title:"Pedestrian Sundays in City Centres",mins:15,paras:["On the first Sunday of each month, a growing number of city centres close selected streets to motor traffic for the entire day, allowing pedestrians, cyclists, and sometimes market stalls to take over roads that are normally filled with cars. The idea began in a handful of Latin American cities decades ago and has since spread widely.","Supporters point to measurable effects on local business. Several city councils have tracked footfall using cameras and phone-location data, finding that pedestrian Sundays can increase visits to nearby shops and cafes by a significant margin compared with a typical Sunday, even though a minority of shopkeepers initially feared the closures would deter customers who usually arrive by car.","Not every business benefits equally. Large stores with their own car parks sometimes report a small drop in sales, since the closure affects access to their parking as much as the street itself, while small independent cafes along the closed route tend to see the biggest gains, often extending their outdoor seating into the newly car-free space.","Transport researchers caution that a single day a month changes little about underlying travel habits, and argue the real value lies elsewhere: giving residents, including children, a rare chance to experience their own streets without traffic, which several studies link to greater public support for making such closures more frequent or even permanent on certain roads."],qs:[{t:"tf",q:"Pedestrian Sundays close streets to traffic for the entire day.",a:0},{t:"tf",q:"The idea originated in European cities.",a:1},{t:"tf",q:"All businesses report increased sales during pedestrian Sundays.",a:1},{t:"tf",q:"Transport researchers believe one day a month greatly changes travel habits.",a:1},{t:"mc",q:"Which businesses tend to see the biggest gains?",o:["Large stores with car parks","Small independent cafes along the route","Petrol stations"],a:1},{t:"mc",q:"Why might large stores with car parks see a small drop in sales?",o:["They close early on Sundays","Access to their parking is affected","They raise prices on pedestrian Sundays"],a:1},{t:"mc",q:"What do transport researchers see as the real value of pedestrian Sundays?",o:["Reducing air pollution permanently","Giving residents a rare traffic-free experience that builds support for more closures","Increasing council tax revenue"],a:1},{t:"fill",q:"Councils track footfall using cameras and ____ data.",a:["phone-location","phone location"]},{t:"fill",q:"Independent cafes often extend their outdoor ____ into the car-free space.",a:["seating"]},{t:"fill",q:"The idea began in a handful of ____ American cities.",a:["Latin"]}]},{title:"Green Roofs at Bus Stops",mins:15,paras:["A simple modification, a thin layer of soil and low-growing plants on top of a bus shelter's roof, has been adopted by a growing number of cities as a low-cost way to support pollinating insects along busy roads. Unlike a full green roof on a building, which requires significant structural support, a bus-stop roof is small enough to retrofit onto existing shelters at relatively little expense.","Early results from cities that have installed hundreds of these 'bee stops' suggest a measurable, if modest, benefit. Surveys found more bee and butterfly sightings near green-roofed shelters than near standard ones, particularly in neighbourhoods with few parks or gardens nearby, where a shelter roof may represent one of the only sources of flowering plants for a considerable distance.","The scheme is not purely about wildlife. City planners note that the plant layer also absorbs rainwater, reducing the amount that drains straight into overloaded sewers during heavy storms, and provides a small amount of natural cooling for waiting passengers during hot weather, since plants and soil absorb less heat than bare metal or glass.","Maintenance remains the main obstacle to wider adoption. The plants need occasional weeding and watering during dry spells, and a small number of cities that rushed to install green roofs without a maintenance plan have seen them become overgrown or die off within a year, suggesting that councils considering the scheme should budget for upkeep from the start."],qs:[{t:"tf",q:"Green bus-stop roofs require the same structural support as building roofs.",a:1},{t:"tf",q:"Surveys found more bee and butterfly sightings near green-roofed shelters.",a:0},{t:"tf",q:"The green roofs have no effect on rainwater drainage.",a:1},{t:"tf",q:"Some cities have seen their green roofs become overgrown due to poor maintenance.",a:0},{t:"mc",q:"Why are bus-stop green roofs cheaper than full building green roofs?",o:["They use artificial plants","They are small and need little structural support","They are funded entirely by advertising"],a:1},{t:"mc",q:"Where is the benefit to pollinators particularly noticeable?",o:["In neighbourhoods with many parks","In neighbourhoods with few parks or gardens","Only in rural areas"],a:1},{t:"mc",q:"What has caused some green roofs to fail within a year?",o:["Extreme weather","A lack of a maintenance plan","Vandalism"],a:1},{t:"fill",q:"The plant layer absorbs rainwater, reducing drainage into overloaded ____.",a:["sewers"]},{t:"fill",q:"Plants and soil provide natural ____ for waiting passengers in hot weather.",a:["cooling"]},{t:"fill",q:"The plants need occasional weeding and ____ during dry spells.",a:["watering"]}]},{title:"Four-Day School Weeks in Rural Districts",mins:15,paras:["Facing budget pressures and difficulty recruiting teachers, a number of rural school districts have shortened the week to four days, lengthening the remaining days to preserve the same total hours of instruction. Advocates say the change, originally adopted mainly to cut transport and heating costs, has become at least as important as a recruitment tool in areas struggling to attract staff.","Early studies produced mixed findings on academic outcomes. Some districts reported little change in test scores after switching, while others, particularly those that shortened the week without extending the remaining four days enough to compensate, saw a modest decline, suggesting the total number of instructional hours matters more than which days they fall on.","The policy creates a genuine challenge for working parents, who must arrange childcare for the fifth day, something rural areas with few childcare providers often struggle to offer. Several districts have responded by opening optional, lightly staffed enrichment programmes on the day off, covering the cost partly through parent fees and partly through savings from the reduced transport schedule.","Researchers tracking the trend note that four-day weeks remain far more common in sparsely populated areas than in cities, where the policy would affect a much larger number of working families and where teacher recruitment, while still difficult, is rarely as acute a problem as in remote districts."],qs:[{t:"tf",q:"The four-day week was originally adopted mainly as a recruitment tool.",a:1},{t:"tf",q:"Every district that switched to a four-day week saw test scores fall.",a:1},{t:"tf",q:"The total number of instructional hours appears to matter more than which days they fall on.",a:0},{t:"tf",q:"Four-day weeks are more common in cities than in rural areas.",a:1},{t:"mc",q:"What was the original main reason districts adopted the four-day week?",o:["Improving test scores","Cutting transport and heating costs","Parent demand"],a:1},{t:"mc",q:"What challenge does the policy create for working parents?",o:["Higher school fees","Arranging childcare for the extra day off","Longer daily commutes"],a:1},{t:"mc",q:"How have some districts responded to the childcare challenge?",o:["Cancelling the four-day week","Opening optional enrichment programmes on the day off","Reducing the school year length"],a:1},{t:"fill",q:"Districts lengthen the remaining days to preserve the same total ____ of instruction.",a:["hours"]},{t:"fill",q:"Enrichment programmes are funded partly through parent ____ and transport savings.",a:["fees"]},{t:"fill",q:"Four-day weeks remain far more common in ____ populated areas.",a:["sparsely"]}]},{title:"Wearable Sensors for Early Flood Warning",mins:15,paras:["In several flood-prone river valleys, residents have begun wearing small waterproof sensors, usually strapped to an ankle or clipped to clothing, that detect sudden changes in air pressure and humidity associated with approaching flash floods, sending an alert to a mobile phone several minutes before water levels rise dangerously.","The devices were developed after researchers noticed that official flood warning systems, which rely mainly on river-level gauges placed at fixed points, often gave residents in narrow side valleys only a few minutes' notice, sometimes too little time to reach higher ground safely, particularly for elderly residents or those with limited mobility.","Trials in a small number of valleys found that the wearable sensors, combined with a simple phone alert, extended the average warning time by several additional minutes compared with the fixed gauge system alone, a difference that emergency planners consider significant given how quickly flash floods can rise in narrow terrain.","Scaling the approach beyond trial areas faces practical obstacles. The sensors require residents to charge and wear them consistently, something uptake surveys suggest many people forget to do during calm, dry periods, and a false alarm, however rare, risks reducing residents' trust in future warnings. Developers are now testing a version built into existing smartwatches, hoping that a device already worn for other reasons will see more consistent daily use."],qs:[{t:"tf",q:"The wearable sensors detect changes in air pressure and humidity.",a:0},{t:"tf",q:"Official flood warning systems rely mainly on wearable sensors.",a:1},{t:"tf",q:"Trials found the sensors extended average warning time compared with gauges alone.",a:0},{t:"tf",q:"All residents in the trial wore the sensors consistently every day.",a:1},{t:"mc",q:"Why did researchers develop the wearable sensors?",o:["Fixed gauge systems sometimes gave too little warning time in side valleys","River gauges were too expensive to maintain","Residents requested a fashionable accessory"],a:0},{t:"mc",q:"What practical obstacle do the sensors face?",o:["They are too expensive to produce","Residents often forget to wear and charge them","They do not work near rivers"],a:1},{t:"mc",q:"What are developers now testing to improve consistent use?",o:["A cheaper disposable sensor","A version built into existing smartwatches","A sensor installed in street lamps"],a:1},{t:"fill",q:"Official systems rely mainly on river-level ____ placed at fixed points.",a:["gauges"]},{t:"fill",q:"A false alarm risks reducing residents' ____ in future warnings.",a:["trust"]},{t:"fill",q:"The sensors are usually strapped to an ankle or clipped to ____.",a:["clothing"]}]}];
/* Listening batch 1: 10 tests, audio text matches questions (validated) */
var LISS_BATCH1 = [
 {
  "title": "Library membership",
  "mins": 6,
  "text": "Good afternoon, Central Library. Hi, I'd like to become a member. Certainly. Could I have your full name? It's Tomas Reyes. Thank you. And your address? Flat twelve, Oak Street. Lovely. Membership is free for residents, but you need one form of ID. Is a passport okay? Yes, a passport is fine. You can borrow up to eight books at a time, and they are due back after three weeks. If you return a book late, the fine is twenty pence per day. Can I renew books online? Yes, through our website, but only once. Great, thanks. Your card will be ready in five minutes at the desk on the ground floor.",
  "qs": [
   {
    "t": "fill",
    "q": "Surname: ____",
    "a": [
     "reyes"
    ]
   },
   {
    "t": "fill",
    "q": "Flat number: ____",
    "a": [
     "12",
     "twelve"
    ]
   },
   {
    "t": "fill",
    "q": "Maximum number of books: ____",
    "a": [
     "8",
     "eight"
    ]
   },
   {
    "t": "fill",
    "q": "Loan period (weeks): ____",
    "a": [
     "3",
     "three"
    ]
   },
   {
    "t": "fill",
    "q": "Fine per day (pence): ____",
    "a": [
     "20",
     "twenty"
    ]
   },
   {
    "t": "mc",
    "q": "Where will the card be collected?",
    "o": [
     "Upstairs office",
     "Ground floor desk",
     "Online"
    ],
    "a": 1
   }
  ]
 },
 {
  "title": "Bike rental",
  "mins": 6,
  "text": "Hello, I'd like to hire a bike for the day. Sure. We have city bikes and mountain bikes. The city bike costs fifteen pounds for the day, and the mountain bike costs twenty-five. I'll take a city bike, please. Good. Do you need a helmet? Helmets are free, but we need a deposit of fifty pounds, which you get back when you return the bike. What time do you close? We close at six, but bikes must be back by five thirty if you want the deposit back in cash. Can I leave it at another branch? Yes, we have one by the station, but a late return costs an extra five pounds.",
  "qs": [
   {
    "t": "mc",
    "q": "Which bike did the customer choose?",
    "o": [
     "City bike",
     "Mountain bike",
     "Electric bike"
    ],
    "a": 0
   },
   {
    "t": "fill",
    "q": "Daily price (£): ____",
    "a": [
     "15",
     "fifteen"
    ]
   },
   {
    "t": "fill",
    "q": "Deposit (£): ____",
    "a": [
     "50",
     "fifty"
    ]
   },
   {
    "t": "fill",
    "q": "Latest return time for cash deposit: ____",
    "a": [
     "5:30",
     "five thirty",
     "5 30",
     "half past five"
    ]
   },
   {
    "t": "fill",
    "q": "Other branch is located by the: ____",
    "a": [
     "station",
     "the station"
    ]
   },
   {
    "t": "fill",
    "q": "Late return charge (£): ____",
    "a": [
     "5",
     "five"
    ]
   }
  ]
 },
 {
  "title": "Dental appointment",
  "mins": 6,
  "text": "Riverside Dental, how can I help? Hi, I need an appointment for a check-up. Of course. Are you a new patient? No, I was here last year with Dr Hughes. Wonderful. We have a free slot on Thursday the twelfth at half past nine, or Friday the thirteenth at two in the afternoon. Friday please. Great, the appointment will take about forty minutes. Please bring your insurance card. Also, the waiting room has moved to the first floor. Thank you, see you on Friday.",
  "qs": [
   {
    "t": "fill",
    "q": "Dentist's name: Dr ____",
    "a": [
     "hughes"
    ]
   },
   {
    "t": "fill",
    "q": "Day of the appointment: ____",
    "a": [
     "friday",
     "friday the thirteenth",
     "thirteenth"
    ]
   },
   {
    "t": "fill",
    "q": "Time: ____",
    "a": [
     "2 pm",
     "2pm",
     "two pm",
     "two in the afternoon",
     "2:00"
    ]
   },
   {
    "t": "fill",
    "q": "Duration (minutes): ____",
    "a": [
     "40",
     "forty"
    ]
   },
   {
    "t": "fill",
    "q": "Document to bring: ____ card",
    "a": [
     "insurance"
    ]
   },
   {
    "t": "mc",
    "q": "Where is the waiting room now?",
    "o": [
     "Ground floor",
     "First floor",
     "Second floor"
    ],
    "a": 1
   }
  ]
 },
 {
  "title": "Car hire",
  "mins": 6,
  "text": "Hello, I booked a car for three days under the name Lena Schmidt. Yes, I see it. A small hatchback, is that right? That's right. The total is one hundred and twenty pounds. Is insurance included? Basic insurance is included, but full cover costs an extra fifteen pounds per day. I'll take the full cover. Fine. Do you need a child seat? No, thank you. Please return the car with a full tank of fuel, otherwise we charge a refuelling fee of forty pounds. The car is in bay seven in the car park.",
  "qs": [
   {
    "t": "fill",
    "q": "Surname: ____",
    "a": [
     "schmidt"
    ]
   },
   {
    "t": "fill",
    "q": "Number of days: ____",
    "a": [
     "3",
     "three"
    ]
   },
   {
    "t": "fill",
    "q": "Total price (£): ____",
    "a": [
     "120",
     "one hundred and twenty",
     "one hundred twenty"
    ]
   },
   {
    "t": "fill",
    "q": "Full insurance cost per day (£): ____",
    "a": [
     "15",
     "fifteen"
    ]
   },
   {
    "t": "fill",
    "q": "Refuelling fee (£): ____",
    "a": [
     "40",
     "forty"
    ]
   },
   {
    "t": "fill",
    "q": "Bay number: ____",
    "a": [
     "7",
     "seven"
    ]
   }
  ]
 },
 {
  "title": "Spanish course enrolment",
  "mins": 6,
  "text": "Hi, I'd like to enrol on the Spanish course for beginners. Great. The beginner course is on Tuesdays and Thursdays, from six to eight thirty in the evening. It starts on the twentieth of January and lasts ten weeks. The fee is one hundred and eighty pounds, but you can pay in two instalments. Can I pay by card? Yes. Do I need a textbook? You can buy the printed book here for twelve pounds, or use the free online version. I'll use the online one. Good. Classes are in room twelve on the top floor.",
  "qs": [
   {
    "t": "fill",
    "q": "Start date: ____ of January",
    "a": [
     "20",
     "twentieth",
     "the twentieth"
    ]
   },
   {
    "t": "fill",
    "q": "Course length (weeks): ____",
    "a": [
     "10",
     "ten"
    ]
   },
   {
    "t": "fill",
    "q": "Fee (£): ____",
    "a": [
     "180",
     "one hundred and eighty",
     "one hundred eighty"
    ]
   },
   {
    "t": "mc",
    "q": "How will the student get the textbook?",
    "o": [
     "Buy the printed book",
     "Use the free online version",
     "Borrow it from the library"
    ],
    "a": 1
   },
   {
    "t": "fill",
    "q": "Room number: ____",
    "a": [
     "12",
     "twelve"
    ]
   }
  ]
 },
 {
  "title": "Museum guided tour",
  "mins": 6,
  "text": "Good morning, is there a guided tour today? Yes, at eleven, and another at two thirty. The eleven o'clock tour lasts ninety minutes and begins in the Egyptian Gallery. How many people are coming? There are six of us. Six is fine, tours are limited to twelve people. Is there a price for adults? Students pay four pounds, adults pay seven. We'll take six adult tickets. Is photography allowed? Only without flash, and not in the temporary exhibition. Please meet the guide at the information desk about ten minutes before.",
  "qs": [
   {
    "t": "fill",
    "q": "Tour start time: ____ o'clock",
    "a": [
     "11",
     "eleven"
    ]
   },
   {
    "t": "fill",
    "q": "Tour length (minutes): ____",
    "a": [
     "90",
     "ninety"
    ]
   },
   {
    "t": "fill",
    "q": "Starting gallery: ____ Gallery",
    "a": [
     "egyptian"
    ]
   },
   {
    "t": "fill",
    "q": "Number of tickets: ____",
    "a": [
     "6",
     "six"
    ]
   },
   {
    "t": "fill",
    "q": "Adult ticket price (£): ____",
    "a": [
     "7",
     "seven"
    ]
   },
   {
    "t": "mc",
    "q": "Where should the group meet the guide?",
    "o": [
     "Main entrance",
     "Information desk",
     "Cafe"
    ],
    "a": 1
   }
  ]
 },
 {
  "title": "Gym membership",
  "mins": 6,
  "text": "Hi, I'm interested in a membership. We have monthly and annual options. Monthly is forty-five pounds, and annual is four hundred and ninety pounds, which saves about sixty pounds. Is there a joining fee? Yes, a one-off payment of twenty pounds. Could I try a free session? Of course, a free induction session is included with every membership, and you can book it online. What are the weekend hours? Saturday and Sunday from eight until eight. I'd like the annual membership. Great, please bring photo ID to the desk on Monday.",
  "qs": [
   {
    "t": "mc",
    "q": "Which membership did the customer choose?",
    "o": [
     "Monthly",
     "Annual",
     "Weekly"
    ],
    "a": 1
   },
   {
    "t": "fill",
    "q": "Monthly price (£): ____",
    "a": [
     "45",
     "forty five",
     "forty-five"
    ]
   },
   {
    "t": "fill",
    "q": "Annual price (£): ____",
    "a": [
     "490",
     "four hundred and ninety"
    ]
   },
   {
    "t": "fill",
    "q": "Joining fee (£): ____",
    "a": [
     "20",
     "twenty"
    ]
   },
   {
    "t": "fill",
    "q": "Weekend closing time: ____ pm",
    "a": [
     "8",
     "eight"
    ]
   },
   {
    "t": "fill",
    "q": "Document to bring: ____",
    "a": [
     "photo id"
    ]
   }
  ]
 },
 {
  "title": "Lost property",
  "mins": 6,
  "text": "Hello, I think I left my umbrella on the number fourteen bus yesterday. What colour is it? It's black with a yellow handle. Did you lose anything else? Yes, a small brown wallet, but I don't know if you have that. What time was the bus? Around six fifteen in the evening. Our lost property office is open Monday to Friday, nine to five. Please bring a description and a photo if you have one. Items are kept for thirty days. Okay, thanks.",
  "qs": [
   {
    "t": "fill",
    "q": "Bus number: ____",
    "a": [
     "14",
     "fourteen"
    ]
   },
   {
    "t": "fill",
    "q": "Colour of the handle: ____",
    "a": [
     "yellow"
    ]
   },
   {
    "t": "fill",
    "q": "Time the bus left: ____ pm",
    "a": [
     "6:15",
     "6.15",
     "six fifteen",
     "quarter past six",
     "615"
    ]
   },
   {
    "t": "fill",
    "q": "Items are kept for ____ days",
    "a": [
     "30",
     "thirty"
    ]
   },
   {
    "t": "mc",
    "q": "What else did the caller lose?",
    "o": [
     "A phone",
     "A wallet",
     "A set of keys"
    ],
    "a": 1
   }
  ]
 },
 {
  "title": "Hotel check-in",
  "mins": 6,
  "text": "Hello, I have a reservation under Kim. Yes, Mr Kim, a double room for two nights. We have you on the third floor, room three-oh-four. Breakfast is included and served from seven until ten thirty. Is there parking? Yes, but it costs twelve pounds per night, and you need to book it in advance. Wi-Fi is free. Can I get a late check-out? Check-out is at eleven, but you can request a late check-out until one, for ten pounds. Here is your key card.",
  "qs": [
   {
    "t": "fill",
    "q": "Surname: Mr ____",
    "a": [
     "kim"
    ]
   },
   {
    "t": "fill",
    "q": "Number of nights: ____",
    "a": [
     "2",
     "two"
    ]
   },
   {
    "t": "fill",
    "q": "Room number: ____",
    "a": [
     "304",
     "three-oh-four",
     "three oh four"
    ]
   },
   {
    "t": "fill",
    "q": "Breakfast ends at: ____",
    "a": [
     "10:30",
     "10 30",
     "half past ten",
     "ten thirty"
    ]
   },
   {
    "t": "fill",
    "q": "Parking cost per night (£): ____",
    "a": [
     "12",
     "twelve"
    ]
   },
   {
    "t": "fill",
    "q": "Late check-out fee (£): ____",
    "a": [
     "10",
     "ten"
    ]
   }
  ]
 },
 {
  "title": "Flat viewing",
  "mins": 6,
  "text": "Hi, I'm calling about the flat on Park Road. It's still available. It has two bedrooms, one bathroom and a balcony. The rent is nine hundred pounds a month, plus bills. Is it furnished? Partly, the kitchen and the living room, but not the bedrooms. Can I view it on Friday? Friday is possible at four, or Saturday morning at ten. Saturday at ten, please. Please bring two forms of ID and proof of income. And the deposit? It's one month's rent. Great, I'll see you then.",
  "qs": [
   {
    "t": "fill",
    "q": "Number of bedrooms: ____",
    "a": [
     "2",
     "two"
    ]
   },
   {
    "t": "fill",
    "q": "Monthly rent (£): ____",
    "a": [
     "900",
     "nine hundred"
    ]
   },
   {
    "t": "mc",
    "q": "Which rooms are furnished?",
    "o": [
     "Kitchen and living room",
     "Bedrooms only",
     "The whole flat"
    ],
    "a": 0
   },
   {
    "t": "fill",
    "q": "Viewing day and time: ____ at ten",
    "a": [
     "saturday"
    ]
   },
   {
    "t": "fill",
    "q": "Deposit: ____ rent",
    "a": [
     "one month's",
     "one month",
     "a month's"
    ]
   },
   {
    "t": "fill",
    "q": "Number of ID forms to bring: ____",
    "a": [
     "2",
     "two"
    ]
   }
  ]
 }
];
var LISS=[{title:"Workshop booking",mins:8,
text:"Good morning, Riverside Community Centre. Hello, I would like to join the photography workshop you advertised. Of course. The workshop runs on Saturdays, starting at ten o'clock and finishing at one. It costs thirty-five pounds, and that includes all materials. Is there a student discount? Yes, students pay twenty-five pounds, but you need to bring your card. Great. Where is it held? In Room Four, on the second floor, next to the cafe. If you arrive early, please do not use the main entrance because it is closed for repairs. Use the side door on Mill Lane. And do I need my own camera? Not necessarily. We have six cameras to borrow, but they go quickly, so reserve one. The teacher is Ms Okafor, and she suggests wearing comfortable shoes, because the group will walk to the river for the second half. Perfect. My name is Daria Petrov, that is P, E, T, R, O, V. Thank you, Ms Petrov. The next workshop starts on the fourteenth of March.",
qs:[
{t:"fill",q:"Workshop day: ____",a:["saturday","saturdays"]},
{t:"fill",q:"Start time: ____",a:["10","ten","10 00","10am","10 am","10 oclock","ten oclock"]},
{t:"fill",q:"Standard price: £ ____",a:["35","thirty five"]},
{t:"fill",q:"Student price: £ ____",a:["25","twenty five"]},
{t:"fill",q:"Room number: ____",a:["4","four"]},
{t:"mc",q:"Which entrance should be used?",o:["The main entrance","The side door on Mill Lane","The cafe door"],a:1},
{t:"fill",q:"Number of cameras to borrow: ____",a:["6","six"]},
{t:"mc",q:"What will the group do in the second half?",o:["Visit a museum","Walk to the river","Edit photos in the cafe"],a:1},
{t:"fill",q:"Booking name (surname): ____",a:["petrov"]}]}
,{title:"Booking a cycling tour",mins:8,
text:"Good morning, Riverside Cycling Tours, how can I help? Hello, I would like to book a tour for this summer. Of course, can I take your name? Daniel Hughes, that is H, U, G, H, E, S. Thank you. And a contact number? It is zero seven seven double oh, nine eight four, three one two. How many people will there be? Three of us, no sorry, four, my brother is coming too. Which date would you like? Saturday the fourteenth of June if possible. I am afraid the fourteenth is fully booked, the next free Saturday is the twenty first. That is fine. The tour starts outside the City Museum at ten o'clock and lasts about three hours, with a stop for refreshments. What is the price? It is thirty pounds per person, but for a group of four or more it comes to twenty five pounds each. Do we need to bring anything? Bikes and helmets are provided, but please bring a waterproof jacket in case the weather changes. One more thing, one of my friends is vegetarian, is that a problem? Not at all, I will make a note. I will send a confirmation by email.",
qs:[
{t:"fill",q:"Customer surname: ____",a:["hughes"]},
{t:"fill",q:"Number of people in the group: ____",a:["4","four"]},
{t:"fill",q:"Date of the tour: Saturday the ____ of June",a:["21","21st","twenty one","twenty first"]},
{t:"fill",q:"Starting point: outside the ____",a:["city museum","museum"]},
{t:"fill",q:"Length of tour: about ____ hours",a:["3","three"]},
{t:"fill",q:"Price per person in a group of four: £ ____",a:["25","twenty five"]},
{t:"mc",q:"What should the group bring themselves?",o:["Bikes","Helmets","A waterproof jacket"],a:2},
{t:"fill",q:"One person in the group is ____.",a:["vegetarian"]},
{t:"mc",q:"How will the booking be confirmed?",o:["By phone","By email","By post"],a:1}]}
,{title:"Joining a gym",mins:8,
text:"Hi, I am calling about membership at Parkview Fitness. Sure, are you interested in a monthly or annual plan? What is the difference in price? Monthly is forty five pounds, and the annual plan works out at thirty two pounds a month if you pay up front. That sounds better. Is there a joining fee? There is usually a joining fee of twenty pounds, but it is waived this month for new members. Great, what facilities are included? The gym floor, both swimming pools, and three weekly classes are included. Classes are extra after that, five pounds each. What are the opening hours? We open at six in the morning and close at eleven at night on weekdays, and on weekends we are open from eight until six. Do I need to book the pool? Only for the smaller pool, which is used for lessons, the main pool is open access. Is parking available? Yes, there are forty spaces at the back of the building, free for members. Can I bring a guest? Members can bring one guest per month for free, after that it is ten pounds per visit.",
qs:[
{t:"fill",q:"Monthly membership price: £ ____",a:["45","forty five"]},
{t:"fill",q:"Annual plan, cost per month: £ ____",a:["32","thirty two"]},
{t:"fill",q:"Joining fee this month: £ ____",a:["0","free","waived","nothing"]},
{t:"fill",q:"Number of weekly classes included: ____",a:["3","three"]},
{t:"mc",q:"Which pool requires booking?",o:["The main pool","The smaller pool","Both pools"],a:1},
{t:"fill",q:"Weekday closing time: ____",a:["11","11pm","eleven","23:00","11 pm"]},
{t:"fill",q:"Number of free parking spaces: ____",a:["40","forty"]},
{t:"mc",q:"How many free guest visits are allowed per month?",o:["None","One","Two"],a:1},
{t:"fill",q:"Extra guest visits cost £ ____ each.",a:["10","ten"]}]}
,{title:"University accommodation enquiry",mins:8,
text:"Good afternoon, Student Housing Office. Hi, I have an offer to study here and I want to ask about accommodation. Congratulations. Are you looking at halls of residence or private housing? Halls, I think, for the first year. We have three halls close to campus, Birchwood, Fenton Court, and Lake View. Birchwood is the cheapest, at ninety eight pounds a week, but it has shared bathrooms. Fenton Court is one hundred and twenty pounds a week with an en suite bathroom. Lake View is the most expensive at one hundred and forty five pounds, but it includes breakfast and dinner. That is helpful, thank you. When is the application deadline? You need to apply by the thirty first of July for the September intake. Is there a deposit? Yes, a deposit of two hundred pounds, which is refunded at the end of the contract if there is no damage. Can I choose my flatmates? You can request to live with up to three named people if they are also applying. Is there a quiet study area in the halls? Each hall has a shared study room, and Lake View also has individual study pods on the ground floor.",
qs:[
{t:"fill",q:"Cheapest hall: ____",a:["birchwood"]},
{t:"fill",q:"Birchwood weekly price: £ ____",a:["98","ninety eight"]},
{t:"fill",q:"Fenton Court weekly price: £ ____",a:["120","one hundred and twenty","one hundred twenty"]},
{t:"mc",q:"Which hall includes meals?",o:["Birchwood","Fenton Court","Lake View"],a:2},
{t:"fill",q:"Application deadline: ____ of July",a:["31","31st","the thirty first","thirty first"]},
{t:"fill",q:"Deposit amount: £ ____",a:["200","two hundred"]},
{t:"mc",q:"When is the deposit refunded?",o:["Before moving in","At the end of the contract","After one term"],a:1},
{t:"fill",q:"Students can request to live with up to ____ named people.",a:["3","three"]},
{t:"fill",q:"Lake View has individual study ____ on the ground floor.",a:["pods"]}]}
,{title:"Reporting a lost bag",mins:8,
text:"Hello, lost property, how can I help? Hi, I left my bag on the number twelve bus yesterday evening. I am sorry to hear that, can you describe it? It is a grey backpack with a red zip on the front pocket. Do you know roughly what time you were travelling? Around half past six, I got on near the train station. Did you keep your ticket? No, I paid by card. That is fine, we can check the records. What was inside the bag? My laptop, a water bottle, and a blue folder with university papers. We do have a grey backpack here, handed in this morning, can you confirm the brand? I think it says Trekster on the strap. Yes, that matches. You will need to bring photo identification to collect it, and it will be held here for fourteen days before it is passed to the main lost property office in town. What are your opening hours? We are open Monday to Friday, nine until five, and Saturday mornings until noon. Is there a fee to collect it? There is a small handling fee of three pounds, payable in cash or by card.",
qs:[
{t:"fill",q:"Bus number: ____",a:["12","twelve"]},
{t:"fill",q:"Colour of the bag: ____",a:["grey","gray"]},
{t:"fill",q:"Approximate time of travel: ____",a:["6:30","half past six","18:30","6.30"]},
{t:"mc",q:"How did the caller pay for the bus?",o:["Cash","By card","Did not pay"],a:1},
{t:"fill",q:"Brand name on the strap: ____",a:["trekster"]},
{t:"fill",q:"The bag will be held for ____ days.",a:["14","fourteen"]},
{t:"mc",q:"What must the caller bring to collect the bag?",o:["A bus ticket","Photo identification","A receipt"],a:1},
{t:"fill",q:"Saturday opening hours: until ____",a:["noon","12","12pm","midday"]},
{t:"fill",q:"Handling fee: £ ____",a:["3","three"]}]}
,{title:"Course enrolment",mins:8,
text:"Hello, Westbridge Language Academy. Hi, I would like to enrol in an evening course. Certainly. We offer Spanish, German and Japanese in the evenings. Which would you prefer? Spanish, please, at beginner level. Classes run on Tuesdays and Thursdays from six thirty until eight o'clock. The course lasts ten weeks and starts on the ninth of September. How much is it? The fee is two hundred and forty pounds, and that includes the textbook. If you register before the end of August, you get a ten percent discount. That is good. Where do the classes take place? In the main building on Harper Street, in room twelve. Is there parking? Only a small car park, so I suggest taking the number nine bus. Can I pay by card? Yes, online or at reception. May I have your name? It is Laura Bennett, B, E, N, N, E, T, T. Thank you. I will email you the registration form tomorrow.",
qs:[{t:"fill",q:"Language chosen: ____",a:["spanish"]},
{t:"fill",q:"Class days: Tuesdays and ____",a:["thursdays","thursday"]},
{t:"fill",q:"Start time: ____",a:["6 30","six thirty","half past six","18 30","630"]},
{t:"fill",q:"Course length: ____ weeks",a:["10","ten"]},
{t:"fill",q:"Start date: ____ of September",a:["9","9th","ninth","nine"]},
{t:"fill",q:"Fee: £ ____",a:["240","two hundred and forty","two hundred forty"]},
{t:"mc",q:"When is the ten percent discount available?",o:["If you register before the end of August","If you pay in cash","If you bring a friend"],a:0},
{t:"fill",q:"Room number: ____",a:["12","twelve"]},
{t:"fill",q:"Surname: ____",a:["bennett"]}]},
{title:"Museum guided tour",mins:8,
text:"Welcome to the Harbour Maritime Museum. I will tell you a few things before we begin. The tour lasts about ninety minutes and we will visit four galleries. First is the Exploration gallery on the ground floor, where you can see the original ship's compass. After that we go up to the first floor for the Trade gallery, which has a collection of old maps. Please do not use flash photography in the maps room, as the light damages them. The third gallery is the Navy gallery, and it is the only one with a talk by a former sailor at eleven thirty. We finish in the Children's gallery, where there are hands-on activities. There is a cafe on the second floor which closes at four, and the gift shop is next to the exit. If anyone needs a wheelchair, please ask at the front desk. Tickets are twelve pounds for adults and seven for children, and children under five are free.",
qs:[{t:"fill",q:"Tour length: about ____ minutes",a:["90","ninety"]},
{t:"fill",q:"Number of galleries: ____",a:["4","four"]},
{t:"mc",q:"What can be seen in the Exploration gallery?",o:["Old maps","The original ship's compass","Navy uniforms"],a:1},
{t:"fill",q:"The Trade gallery has a collection of old ____",a:["maps"]},
{t:"mc",q:"What is not allowed in the maps room?",o:["Talking","Flash photography","Bags"],a:1},
{t:"fill",q:"Talk by a former sailor at ____",a:["11 30","eleven thirty","half past eleven","1130"]},
{t:"fill",q:"The cafe closes at ____",a:["4","four","4pm","4 pm","16 00"]},
{t:"fill",q:"Adult ticket: £ ____",a:["12","twelve"]},
{t:"fill",q:"Children under ____ are free.",a:["5","five"]}]},
{title:"Renting a flat",mins:8,
text:"Good morning, Maple Estates. Hello, I am calling about the flat on Cedar Road. Yes, it is a two-bedroom flat on the third floor. The rent is eight hundred and fifty pounds a month, and the deposit is one month's rent. Are bills included? Water is included, but electricity and internet are not. Is the flat furnished? It comes with a bed, a wardrobe and a sofa, but no washing machine. Can I see it? Yes, viewings are available on Friday at two o'clock or Saturday at ten. Friday suits me. Please bring a passport and proof of income. The tenancy is for a minimum of twelve months. Pets are not allowed, I am afraid. That is fine, I do not have any. May I take your name and number? It is Marco Silva, S, I, L, V, A, and my number is zero seven nine, four four one, six two eight.",
qs:[{t:"fill",q:"Flat location: Cedar ____",a:["road","rd"]},
{t:"fill",q:"Floor: ____",a:["3","third","3rd","third floor"]},
{t:"mc",q:"Number of bedrooms:",o:["One","Two","Three"],a:1},
{t:"fill",q:"Monthly rent: £ ____",a:["850","eight hundred and fifty","eight hundred fifty"]},
{t:"fill",q:"Deposit equals ____ month's rent",a:["1","one"]},
{t:"mc",q:"Which bill is included?",o:["Electricity","Water","Internet"],a:1},
{t:"fill",q:"The flat has no ____ machine.",a:["washing"]},
{t:"fill",q:"Viewing on Friday at ____",a:["2","two","2pm","2 pm","2 o clock","two o clock","14 00"]},
{t:"fill",q:"Customer surname: ____",a:["silva"]}]},
{title:"Joining a gym",mins:8,text:"Good afternoon, Fitwell Gym. Hi, I would like to find out about membership. Certainly. We have two options. The standard membership costs thirty pounds a month and includes the gym and the swimming pool. The premium membership is forty-five pounds and also includes classes such as yoga and spinning. I think I will take the standard one. Is there a joining fee? Yes, a one-off fee of twenty pounds, but it is free if you sign up before the end of March. Great. What are your opening hours? We open at six in the morning and close at ten at night on weekdays. At weekends we close earlier, at eight. Do I need to bring anything for the first visit? Just a photo ID and a padlock for your locker. Could I take a tour on Saturday? Of course. Come to reception at eleven and ask for Helen. Can I have your surname? It's Okonkwo, O-K-O-N-K-W-O. Thank you, Mr Okonkwo, see you on Saturday.",qs:[{"t": "fill", "q": "Standard membership: £ ____ a month", "a": ["30", "thirty"]}, {"t": "fill", "q": "Premium membership: £ ____ a month", "a": ["45", "forty five", "forty-five", "fortyfive"]}, {"t": "mc", "q": "When is the joining fee free?", "o": ["Before the end of March", "On Saturdays", "For students"], "a": 0}, {"t": "fill", "q": "Weekday closing time: ____ p.m.", "a": ["10", "ten", "10pm", "10 pm", "22 00"]}, {"t": "fill", "q": "Weekend closing time: ____ p.m.", "a": ["8", "eight", "8pm", "8 pm", "20 00"]}, {"t": "mc", "q": "What must you bring for the first visit?", "o": ["A towel", "Photo ID and a padlock", "Sports shoes"], "a": 1}, {"t": "fill", "q": "Tour at ____ on Saturday", "a": ["11", "eleven", "11am", "11 am", "11 00"]}, {"t": "fill", "q": "Ask for ____ at reception", "a": ["helen"]}, {"t": "fill", "q": "Surname: ____", "a": ["okonkwo"]}]},
{title:"Orientation for new students",mins:8,text:"Welcome, everyone, and congratulations on starting your studies. I would like to give you some practical information. First, your student cards. You can collect them from the main office between nine and four today and tomorrow. You will need them for the library and for printing. The library is on the second floor of the Hartley Building and is open twenty-four hours during exam periods. Next, the sports centre. It is free for all students, but you must book courts online at least a day in advance. If you have problems with your accommodation, contact Mrs Petrova in the housing office, room one hundred and four. For IT help there is a desk in the entrance hall, open until five. Finally, tomorrow evening there will be a welcome party in the student union, starting at seven thirty. Tickets are five pounds and include a free drink. I hope you all enjoy it.",qs:[{"t": "fill", "q": "Collect student cards between 9 and ____", "a": ["4", "four", "4pm", "4 pm", "16 00"]}, {"t": "mc", "q": "What are student cards needed for?", "o": ["The library and printing", "The sports centre", "The party"], "a": 0}, {"t": "fill", "q": "Library location: ____ floor of the Hartley Building", "a": ["second", "2nd", "2"]}, {"t": "mc", "q": "When is the library open twenty-four hours?", "o": ["Every weekend", "During exam periods", "In the summer"], "a": 1}, {"t": "fill", "q": "Sports courts must be booked ____ in advance.", "a": ["a day", "one day", "1 day", "at least a day"]}, {"t": "fill", "q": "Housing office: Mrs ____", "a": ["petrova"]}, {"t": "fill", "q": "Housing office room: ____", "a": ["104", "one hundred and four", "one hundred four"]}, {"t": "fill", "q": "IT desk open until ____", "a": ["5", "five", "5pm", "5 pm", "17 00"]}, {"t": "fill", "q": "Party tickets cost £ ____", "a": ["5", "five"]}]},
{title:"Planning a school trip",mins:8,text:"Right, let's decide about the school trip. Do you think we should go to the science museum or the nature park? I prefer the science museum, because it has the new space exhibition. But the nature park is cheaper, only eight pounds per student, compared with fourteen for the museum. That's true, but the museum has a free education pack for teachers. How about travel? The museum is ninety kilometres away, so a coach would take about two hours. The park is only thirty kilometres away. Hmm. What about the date? The coach company is free on the fifteenth of May but not on the twenty-second. Then the fifteenth it is. We must send consent forms to parents by the end of next week. And we need one adult for every ten students, so with sixty students that means six adults. I think the science museum is the better choice in the end, even though it costs more. Agreed. I'll book it today.",qs:[{"t": "fill", "q": "Nature park cost per student: £ ____", "a": ["8", "eight"]}, {"t": "fill", "q": "Museum cost per student: £ ____", "a": ["14", "fourteen"]}, {"t": "mc", "q": "What does the museum offer for teachers?", "o": ["A free education pack", "A free lunch", "A guided tour"], "a": 0}, {"t": "fill", "q": "Distance to the museum: ____ km", "a": ["90", "ninety"]}, {"t": "fill", "q": "Journey time by coach: about ____ hours", "a": ["2", "two"]}, {"t": "fill", "q": "Trip date: ____ of May", "a": ["15", "15th", "fifteenth", "fifteen"]}, {"t": "fill", "q": "Number of students: ____", "a": ["60", "sixty"]}, {"t": "fill", "q": "Adults needed: ____", "a": ["6", "six"]}, {"t": "mc", "q": "Which place did they choose?", "o": ["The nature park", "The science museum", "Neither"], "a": 1}]},
{title:"A lecture on urban gardens",mins:8,text:"Today I would like to talk about urban gardens, which have become increasingly popular in many cities. First, why do people create them? Surveys show that the main reason, given by forty percent of participants, is to grow fresh food. The second reason is to meet neighbours. Only about ten percent say they do it to save money. Let me describe one project in Lisbon. It began in two thousand and fifteen on a disused car park, and today it has sixty-five plots. Each family pays just twelve euros a year. The garden is managed by a committee that meets every month. There have been some difficulties, however. The soil in cities is often polluted, so the group had to bring in clean soil, which cost about nine thousand euros. Water is another problem. They collect rainwater from the roof of a nearby school. In the next lecture we will look at rooftop gardens, so please read chapter six before then.",qs:[{"t": "fill", "q": "Main reason for creating gardens: to grow ____ food", "a": ["fresh"]}, {"t": "fill", "q": "Percentage who give the main reason: ____ percent", "a": ["40", "forty"]}, {"t": "fill", "q": "Percentage who want to save money: about ____ percent", "a": ["10", "ten"]}, {"t": "fill", "q": "The Lisbon project began in ____", "a": ["2015", "two thousand and fifteen", "two thousand fifteen"]}, {"t": "mc", "q": "The Lisbon garden was built on", "o": ["a former car park", "a school roof", "a farm"], "a": 0}, {"t": "fill", "q": "Number of plots: ____", "a": ["65", "sixty five", "sixty-five"]}, {"t": "fill", "q": "Yearly fee per family: ____ euros", "a": ["12", "twelve"]}, {"t": "fill", "q": "Clean soil cost about ____ euros", "a": ["9000", "nine thousand", "9 000", "9,000"]}, {"t": "fill", "q": "Read chapter ____ before the next lecture", "a": ["6", "six"]}]}
];

LISS=LISS.concat(LISS_BATCH1);
var LISS_BATCH2 = [{  "title": "Returning a faulty laptop",  "mins": 6,  "text": "Good morning, TechFix support, how can I help? Hi, I bought a laptop from you three weeks ago and the screen keeps going black. Oh, I'm sorry to hear that. Can I get your order number? Yes, it's four four seven one two. Thank you. And your name for the record? Hana Petrov. Right, Ms Petrov, since it's within thirty days you qualify for a free replacement rather than a repair. We'll need the laptop sent back in its original box if you still have it. I do, yes. Good. We'll email a prepaid shipping label today, and the replacement usually arrives within five working days of us receiving the faulty unit. Is there anything else? Could I get a case number for this? Of course, it's TF dash two zero nine.",  "qs": [   {"t":"fill","q":"Order number: ____","a":["44712"]},   {"t":"fill","q":"Customer surname: ____","a":["petrov"]},   {"t":"mc","q":"What will the customer receive instead of a repair?","o":["A refund","A free replacement","A discount voucher"],"a":1},   {"t":"fill","q":"The laptop must be returned in its original ____.","a":["box"]},   {"t":"fill","q":"The replacement arrives within ____ working days.","a":["5","five"]},   {"t":"fill","q":"Case number: TF-____","a":["209"]}  ] },{  "title": "Booking a campsite pitch",  "mins": 6,  "text": "Greenwood Campsite, hello. Hi, I'd like to book a pitch for a tent, please. Certainly, for how many nights? Four nights, starting the fourteenth of June. That's available. Will you need electricity on your pitch? Yes, please, if that's possible. That adds three pounds fifty per night. That's fine. How many people in your party? Three adults and one child. Okay, the standard pitch fee covers up to four people, so there's no extra charge there. Could I take a contact number? Zero seven nine one one, double two three, four four five. Got it. And finally, do you have a dog with you? No, no pets this time. Great, I'll send a confirmation email within the hour.",  "qs": [   {"t":"fill","q":"Number of nights booked: ____","a":["4","four"]},   {"t":"fill","q":"Start date: ____ of June","a":["14th","14","fourteenth"]},   {"t":"fill","q":"Cost of electricity per night: £____","a":["3.50","3.5"]},   {"t":"mc","q":"How many people are in the party?","o":["Two adults, one child","Three adults, one child","Four adults"],"a":1},   {"t":"tf","q":"There is an extra charge because the group has more than two adults.","a":1},   {"t":"tf","q":"The customer is bringing a dog.","a":1}  ] },{  "title": "Joining a choir",  "mins": 6,  "text": "Hello, Riverside Community Choir, is this Dan speaking? Yes, hi, I saw your poster and wanted to ask about joining. Wonderful. We rehearse every Tuesday evening from seven to nine, at the parish hall on Mill Street. Do I need to audition? No formal audition, but we do ask new singers to come fifteen minutes early on their first week for a quick voice check, just so we know which section suits you. What sections are there? Soprano, alto, tenor, and bass. Is there a membership fee? Yes, it's thirty pounds a term, which covers sheet music. Our next term starts on the ninth of September. Should I just turn up? Please email first so we can add you to the register, and bring a pencil for marking your music.",  "qs": [   {"t":"fill","q":"Rehearsal day: ____","a":["Tuesday"]},   {"t":"fill","q":"Venue: the parish hall on ____ Street","a":["Mill"]},   {"t":"fill","q":"New singers should arrive ____ minutes early on their first week.","a":["15","fifteen"]},   {"t":"mc","q":"How many voice sections does the choir have?","o":["Three","Four","Five"],"a":1},   {"t":"fill","q":"Membership fee per term: £____","a":["30","thirty"]},   {"t":"mc","q":"What should a new member bring to the first rehearsal?","o":["A music stand","A pencil","A folder"],"a":1}  ] },{  "title": "Asking about a parking permit",  "mins": 6,  "text": "Council parking services, how can I help? Hi, I just moved to Elm Avenue and wondered how to get a resident's parking permit. Of course. You'll need proof of address, such as a recent utility bill, and your vehicle registration document. Can I apply online? Yes, through the council website, or in person at the town hall. How much does it cost? The first permit for a household is twenty-two pounds a year, and a second vehicle is thirty-five pounds. Is there a visitor option? Yes, residents can also buy a book of twenty visitor scratch cards for twelve pounds. How long does approval take? Usually five working days if applying online, a little longer by post. Thanks, that's really helpful.",  "qs": [   {"t":"mc","q":"What two documents are needed for the application?","o":["Passport and bank statement","Utility bill and vehicle registration document","Driving licence and rental contract"],"a":1},   {"t":"fill","q":"Cost of the first household permit per year: £____","a":["22","twenty-two","twenty two"]},   {"t":"fill","q":"Cost of a second vehicle permit: £____","a":["35","thirty-five","thirty five"]},   {"t":"fill","q":"A book of visitor scratch cards contains ____ cards.","a":["20","twenty"]},   {"t":"fill","q":"Cost of the visitor scratch card book: £____","a":["12","twelve"]},   {"t":"tf","q":"Postal applications are processed faster than online ones.","a":1}  ] },{  "title": "Scheduling a dentist appointment",  "mins": 6,  "text": "Brightsmile Dental, good afternoon. Hello, I'd like to book a check-up, please. Have you visited us before? No, this would be my first time. Welcome. For a new patient we book a slightly longer appointment, forty-five minutes instead of the usual twenty. We have an opening on Thursday at eleven, or Friday at three thirty. Thursday at eleven works for me. Great. Could I take your date of birth? The third of March, nineteen ninety-six. And do you have any dental insurance? Yes, with Valley Health. Please bring your insurance card and arrive ten minutes early to fill in a form. Is there parking? There's a small car park behind the building, but it fills up quickly, so the side street is often easier.",  "qs": [   {"t":"tf","q":"The caller has visited this dentist before.","a":1},   {"t":"fill","q":"Length of appointment for a new patient: ____ minutes","a":["45","forty-five","forty five"]},   {"t":"mc","q":"Which appointment time does the caller choose?","o":["Thursday at 11","Friday at 3:30","Thursday at 3:30"],"a":0},   {"t":"fill","q":"Date of birth: the ____ of March, 1996","a":["3rd","3","third"]},   {"t":"fill","q":"Insurance provider: ____","a":["Valley Health"]},   {"t":"mc","q":"Where does the receptionist suggest parking?","o":["The main car park","The side street","A multi-storey nearby"],"a":1}  ] },{  "title": "Enquiring about evening classes",  "mins": 6,  "text": "Hello, adult education office, Priya speaking. Hi, I'm interested in your evening pottery class. Lovely, that runs on Wednesdays, six to eight, for ten weeks starting the second of October. Is any experience needed? None at all, it's aimed at complete beginners, though we do also run an improvers class on Mondays for people who've done at least one term. What does the course cost? Eighty-five pounds, which includes clay and firing, but you'll need to buy your own set of tools, around fifteen pounds from most art shops. Is the room wheelchair accessible? Yes, it's on the ground floor with a ramp at the entrance. How do I enrol? You can enrol online, but places are limited to twelve students, so I'd recommend booking soon.",  "qs": [   {"t":"fill","q":"Day of the beginners' class: ____","a":["Wednesday","Wednesdays"]},   {"t":"fill","q":"Number of weeks: ____","a":["10","ten"]},   {"t":"fill","q":"Course fee: £____","a":["85","eighty-five","eighty five"]},   {"t":"fill","q":"Approximate cost of tools: £____","a":["15","fifteen"]},   {"t":"mc","q":"Who is the Monday class designed for?","o":["Complete beginners","Improvers with some experience","Children"],"a":1},   {"t":"fill","q":"Maximum number of students on the course: ____","a":["12","twelve"]}  ] }];
LISS=LISS.concat(LISS_BATCH2);
var LISS_BATCH3 = [{  "title": "Renewing a passport",  "mins": 6,  "text": "Passport office, good morning. Hi, I'd like to renew my passport, it expires next month. No problem. Is this a standard adult passport? Yes. The standard renewal fee is eighty-five pounds if you apply online, or ninety-three if you post a paper form. I'll do it online then. Good choice, it's also faster, usually three weeks compared to up to six weeks by post. Do I need a new photo? Yes, a digital photo uploaded through the website, taken within the last month. Can I keep travelling while I wait? Yes, your old passport stays valid until the new one is issued, as long as it hasn't expired yet. One more thing, should I send the old passport back? Only if you apply by post; online applicants simply keep it until the new one arrives.",  "qs": [   {"t":"fill","q":"Online renewal fee: £____","a":["85","eighty-five","eighty five"]},   {"t":"fill","q":"Postal renewal fee: £____","a":["93","ninety-three","ninety three"]},   {"t":"mc","q":"How long does the online application usually take?","o":["One week","Three weeks","Six weeks"],"a":1},   {"t":"fill","q":"The photo must have been taken within the last ____.","a":["month"]},   {"t":"tf","q":"The caller's old passport becomes invalid as soon as they apply.","a":1},   {"t":"tf","q":"Postal applicants must send back their old passport.","a":0}  ] },{  "title": "Booking a yoga retreat",  "mins": 6,  "text": "Hello, Clearwater Retreats. Hi, I'm interested in the weekend yoga retreat in May. Lovely, that one runs from Friday evening to Sunday afternoon, the seventeenth to the nineteenth. How many people attend? We keep it small, a maximum of fourteen guests, so that everyone gets enough attention from the instructor. What's included? All meals, which are vegetarian, two nights' accommodation, and five yoga sessions. Is there a single room option? Yes, for an extra forty pounds on top of the standard price of two hundred and ten pounds. Do I need any experience? None at all, we have a beginner group each morning and a more advanced group in the afternoon. Could I pay a deposit now and the rest later? Yes, fifty pounds now secures your place, with the balance due two weeks before the retreat.",  "qs": [   {"t":"fill","q":"Retreat dates: the ____ to the 19th of May","a":["17th","17","seventeenth"]},   {"t":"fill","q":"Maximum number of guests: ____","a":["14","fourteen"]},   {"t":"fill","q":"Standard price: £____","a":["210"]},   {"t":"fill","q":"Extra cost for a single room: £____","a":["40","forty"]},   {"t":"mc","q":"What meals are provided?","o":["Meat-based meals","Vegetarian meals","Guests bring their own food"],"a":1},   {"t":"fill","q":"Deposit required to secure a place: £____","a":["50","fifty"]}  ] },{  "title": "Signing up for a language exchange",  "mins": 6,  "text": "Hi, is this the language exchange group? Yes, hello. I'd like to join, I'm learning Spanish. Great, we meet every second Wednesday at the Oak Street café, from six to half past seven. Is it free? Yes, completely free, you just buy your own drinks. How does the pairing work? We put people learning a language together with a native or fluent speaker of that language who in turn is learning something from you, so you'll be paired with a Spanish speaker who wants to practise English. Should I bring anything? Some people bring a notebook, but it's informal, mostly conversation. Is there a limit on numbers? We can take up to thirty people before the café gets too noisy to hear each other. How do I confirm my place? Just reply to the group email by the Monday before each session.",  "qs": [   {"t":"fill","q":"Meeting frequency: every ____ Wednesday","a":["second"]},   {"t":"fill","q":"Venue: Oak Street ____","a":["café","cafe"]},   {"t":"mc","q":"How much does it cost to attend?","o":["Five pounds","Free, apart from drinks","Ten pounds per session"],"a":1},   {"t":"mc","q":"How are pairs chosen?","o":["Randomly by computer","By matching learners with speakers of the language they're learning","By age group"],"a":1},   {"t":"fill","q":"Maximum number of attendees: ____","a":["30","thirty"]},   {"t":"fill","q":"Confirmation deadline: the ____ before each session","a":["Monday"]}  ] },{  "title": "Returning a rented car",  "mins": 6,  "text": "Good afternoon, Mayfield Car Hire. Hi, I'm calling about returning my rental a day early. Sure, what's the booking reference? It's R dash seven seven three one. Let me check... yes, I see it, due back Thursday, currently. If you return it tomorrow instead, that's fine, there's no early return fee with your rate. Do I need to refill the fuel tank? Yes, it should be returned full, the same as when you collected it, or we charge a refuelling fee of thirty pounds plus the cost of the fuel itself. Where should I leave the keys? At the main desk if it's during opening hours, eight till six, or in the overnight drop box by the entrance if later. Will I get a receipt by email? Yes, within twenty-four hours of the car being checked back in.",  "qs": [   {"t":"fill","q":"Booking reference: R-____","a":["7731"]},   {"t":"mc","q":"Is there a fee for returning the car a day early?","o":["Yes, twenty pounds","Yes, thirty pounds","No early return fee"],"a":2},   {"t":"fill","q":"Refuelling fee if the tank isn't full: £____ plus fuel cost","a":["30","thirty"]},   {"t":"fill","q":"Desk opening hours: ____ till six","a":["8","eight"]},   {"t":"mc","q":"Where can keys be left outside opening hours?","o":["With a security guard","In the overnight drop box","Left in the car"],"a":1},   {"t":"fill","q":"A receipt is sent by email within ____ hours.","a":["24","twenty-four","twenty four"]}  ] },{  "title": "Enquiring about a community garden plot",  "mins": 6,  "text": "Hello, Elm Park community gardens. Hi, I'd like to find out about getting a plot. Of course. We currently have a waiting list, about eight months at the moment, but you can register your interest today. Is there a fee? Yes, fifteen pounds a year, which covers water and use of the shared tools shed. How big are the plots? Standard ones are five metres by three metres, but we also offer half-plots for beginners, which are a bit easier to manage. Can I grow anything I like? Mostly, yes, though we ask that no plot exceeds one metre in height, so no tall structures that shade neighbouring plots. Is there a rule about keeping the plot tidy? Yes, if a plot looks abandoned for more than two months, we may offer it to someone on the waiting list. How do I register? Just send your name and address to the email on our noticeboard.",  "qs": [   {"t":"fill","q":"Current waiting list length: ____ months","a":["8","eight"]},   {"t":"fill","q":"Annual fee: £____","a":["15","fifteen"]},   {"t":"mc","q":"What does the annual fee cover?","o":["Seeds and plants","Water and shared tools","Fencing materials"],"a":1},   {"t":"fill","q":"Standard plot size: 5 metres by ____ metres","a":["3","three"]},   {"t":"fill","q":"Maximum height for structures on a plot: ____ metre","a":["1","one"]},   {"t":"fill","q":"A plot may be reassigned if it looks abandoned for more than ____ months.","a":["2","two"]}  ] }];
LISS=LISS.concat(LISS_BATCH3);
var SP1=[
{t:"Home",q:["Do you live in a house or a flat?","What is your favourite room at home, and why?","Would you like to move to a different home in the future?"],ideas:["Say what type of home and who you live with","Give one thing you like and one thing you would change","Mention the neighbourhood: quiet, central, close to shops"],vocab:["spacious / cramped","a cosy corner","within walking distance","I'd love to upgrade to...","it has a lot of natural light"]},
{t:"Food",q:["Do you like trying new food?","What did you eat yesterday?","Do you prefer eating at home or in restaurants?"],ideas:["Name one new dish you tried and how it tasted","Compare cooking at home with eating out: cost, time, atmosphere","Mention family recipes or national dishes"],vocab:["mouth-watering","a home-cooked meal","to be a picky eater","I'm keen on spicy food","it's an acquired taste"]},
{t:"Daily routine",q:["What do you usually do in the evenings?","Are you a morning person or a night owl?","Would you like to change your daily routine?"],ideas:["Describe a typical evening in order","Explain why you work better at one time of day","Say what you would change and the benefit"],vocab:["to wind down","to stick to a routine","I'm a night owl","to squeeze in some exercise","hectic / relaxed schedule"]},
{t:"Transport",q:["How do you usually get to work or school?","Is public transport good in your city?","Would you like to have a car?"],ideas:["Say how long the journey takes and the cost","Mention the metro, buses, traffic jams","Give pros and cons of owning a car"],vocab:["to commute","rush hour","a reliable service","congested roads","to avoid the crowds"]},
{t:"Friends and free time",q:["Do you prefer to spend time alone or with friends?","How often do you see your friends?","What do you like doing at weekends?"],ideas:["Choose a side but admit the other has benefits","Give a specific recent example","Mention hobbies, sport, family time"],vocab:["to catch up with","to hang out","a close-knit group","I need some me-time","to recharge my batteries"]},
{t:"Weather and seasons",q:["What is your favourite season?","Does the weather affect your mood?","What do you do on a very hot or very cold day?"],ideas:["Name the season and two reasons","Describe how you feel in bad weather","Mention clothes, food, activities"],vocab:["scorching / freezing","it's pouring with rain","to be under the weather","a breath of fresh air","the weather lifts my spirits"]},{t:"Sport",q:["Do you play any sports?", "Did you do sport at school?", "Do you prefer watching or playing sport?"],ideas:["Name the sport and how often you play", "Compare school sport with now", "Mention health, teamwork, TV matches"],vocab:["to keep fit", "a team player", "to work up a sweat", "I'm a big fan of...", "competitive spirit"]},
{t:"Reading",q:["Do you enjoy reading?", "What kind of books do you like?", "Do you prefer paper books or e-books?"],ideas:["Say how often and when you read", "Give one book or genre and why", "Compare convenience with the feel of paper"],vocab:["a page-turner", "to be hooked on", "a bookworm", "to get lost in a story", "plot and characters"]},
{t:"Holidays",q:["What was your last holiday like?", "Do you prefer the sea or the mountains?", "Do you like travelling with other people?"],ideas:["Tell a short story in order", "Give two reasons for your choice", "Mention advantages of company: cost, safety, fun"],vocab:["to get away from it all", "sightseeing", "a laid-back atmosphere", "off the beaten track", "to recharge my batteries"]},
{t:"Clothes",q:["What kind of clothes do you usually wear?", "Do you like shopping for clothes?", "Do you wear different clothes for work and for relaxing?"],ideas:["Say casual or smart and why", "Mention where you buy", "Compare comfort and style"],vocab:["casual / formal", "to dress up", "comfortable and practical", "to be fashionable", "it suits me"]},
{t:"Neighbours",q:["Do you know your neighbours?", "How often do you talk to them?", "What makes a good neighbour?"],ideas:["Say how well you know them", "Give a recent example", "Mention respect, noise, helping"],vocab:["a friendly neighbourhood", "to keep to oneself", "to lend a hand", "considerate", "a sense of community"]},
{t:"Health",q:["Do you try to stay healthy?", "What do you do to relax when you are stressed?", "Do you think people in your country look after their health?"],ideas:["Mention sleep, food, exercise", "Give one real habit", "Compare older and younger people"],vocab:["a balanced diet", "to get enough sleep", "to be under stress", "to work out", "good for my well-being"]},
{t:"Social media",q:["Do you use social media?", "Which app do you use the most?", "Do you think social media is good for young people?"],ideas:["Say how often and why", "Mention friends, news, entertainment", "Give pros and cons"],vocab:["to scroll through", "to keep in touch", "addictive", "to waste time online", "a source of information"]},
{t:"Birthdays",q:["How do you usually celebrate your birthday?", "Do you remember a special birthday?", "Do you like giving or receiving presents?"],ideas:["Describe a normal celebration", "Tell the story of one special birthday", "Say which you prefer and why"],vocab:["to throw a party", "a surprise", "to make a wish", "thoughtful gift", "it means a lot to me"]},
{t:"Music",q:["What kind of music do you like?", "Do you play any instrument?", "Do you listen to music while studying?"],ideas:["Name a genre and one artist", "Say if you play or would like to learn", "Compare music that helps focus and music that distracts"],vocab:["to be into...", "catchy melody", "background music", "it lifts my mood", "to tune out"]},
{t:"Sport",q:["Do you do any sport?", "Did you play sports as a child?", "Do you prefer watching sport or playing it?"],ideas:["Say how often and where", "Compare childhood and now", "Give one reason for your preference"],vocab:["to work out", "team spirit", "to keep fit", "a competitive person", "I'm a bit out of shape"]},
{t:"Shopping",q:["Do you like shopping?", "Do you prefer online or in-store shopping?", "What was the last thing you bought?"],ideas:["Say how often and what you buy", "Mention price, choice, convenience", "Describe the item and why you needed it"],vocab:["to browse", "a bargain", "to compare prices", "delivery", "to splash out"]},
{t:"Languages",q:["Why did you start learning English?", "What do you find difficult in English?", "Do you want to learn another language?"],ideas:["Mention study, work or travel", "Give a specific difficulty and example", "Name a language and the reason"],vocab:["fluency", "to pick up", "pronunciation", "a native speaker", "to be a bit rusty"]},
{t:"Jobs",q:["What job would you like to do in the future?", "Is salary important when choosing a job?", "Do you prefer working alone or in a team?"],ideas:["Name the job and why", "Balance salary with satisfaction", "Give one example of teamwork or independence"],vocab:["a rewarding career", "job satisfaction", "to climb the career ladder", "a good team player", "work-life balance"]},
{t:"Technology",q:["How often do you use your phone?", "What apps do you use most?", "Could you live without the internet?"],ideas:["Say how many hours and why", "Name two apps and purposes", "Mention what you would miss and what you would not"],vocab:["to be hooked on", "to scroll", "constantly connected", "a useful tool", "to unplug"]}
];
var SP2=[
{t:"A teacher who helped you",q:"Describe a teacher who helped you learn something.\n\nYou should say:\n- who the person was\n- what they taught you\n- how they taught you\n\nand explain why this was helpful.",ideas:["Start with who and when you met","Give one memorable lesson or moment","End with how it still helps you today"],vocab:["to be a source of inspiration","patient and encouraging","to go the extra mile","it boosted my confidence","I owe a lot to..."]},
{t:"A relaxing place",q:"Describe a place where you feel relaxed.\n\nYou should say:\n- where it is\n- how often you go there\n- what you do there\n\nand explain why it makes you relaxed.",ideas:["Describe what you can see and hear","Say who you go with or if you go alone","Link the place to a feeling: calm, free, safe"],vocab:["peaceful and secluded","away from the hustle and bustle","to unwind","a tranquil atmosphere","it takes my mind off work"]},
{t:"A useful app",q:"Describe a useful app on your phone.\n\nYou should say:\n- what it is\n- when you started using it\n- what you use it for\n\nand explain why it is useful.",ideas:["Explain what problem it solves","Mention a time it saved you effort or money","Say whether you would recommend it"],vocab:["user-friendly","I can't live without it","to save time","it keeps me organised","a handy tool"]},
{t:"A memorable trip",q:"Describe a trip you remember well.\n\nYou should say:\n- where you went\n- who you went with\n- what you did there\n\nand explain why it was memorable.",ideas:["Set the scene: when, where, with whom","Tell the story in order, then one surprise","Finish with what you learnt or felt"],vocab:["a once-in-a-lifetime experience","breathtaking scenery","off the beaten track","it was an eye-opener","to make lasting memories"]},{t:"A book you enjoyed",q:"Describe a book that you enjoyed reading.\n\nYou should say:\n- what it was\n- when you read it\n- what it was about\n\nand explain why you enjoyed it.",ideas:["Name the book and the author if you know", "Summarise the story in two or three sentences", "Finish with what it taught you"],vocab:["a gripping plot", "well-written characters", "I couldn't put it down", "thought-provoking", "it left a lasting impression"]},
{t:"A festival",q:"Describe a festival or celebration in your country.\n\nYou should say:\n- what it is\n- when it takes place\n- what people do\n\nand explain why it is important.",ideas:["Give the date and the season", "Describe food, music, clothes", "Say what it means to families"],vocab:["a long-standing tradition", "to get together with relatives", "festive atmosphere", "to be passed down", "it brings people together"]},
{t:"A person you admire",q:"Describe a person you admire.\n\nYou should say:\n- who the person is\n- how you know them\n- what they have done\n\nand explain why you admire them.",ideas:["Start with the relationship", "Give one example of what they did", "Link to what you learned"],vocab:["a role model", "hard-working and determined", "to look up to", "to set an example", "an inspiration"]},
{t:"A time you were late",q:"Describe a time when you were late for something.\n\nYou should say:\n- when it happened\n- where you were going\n- why you were late\n\nand explain how you felt.",ideas:["Set the scene and the reason", "Say what happened next", "End with a lesson"],vocab:["to run late", "to miss the bus", "in a rush", "to be stuck in traffic", "next time I'll leave earlier"]},
{t:"A photo you like",q:"Describe a photograph that you like.\n\nYou should say:\n- where and when it was taken\n- who or what is in it\n- why you took it\n\nand explain why you like it.",ideas:["Describe what is in the picture", "Say the story behind it", "Say how it makes you feel"],vocab:["in the foreground", "a candid shot", "to capture the moment", "it brings back memories", "vivid colours"]},
{t:"A goal",q:"Describe a goal that you would like to achieve in the future.\n\nYou should say:\n- what it is\n- when you want to achieve it\n- what you need to do\n\nand explain why it is important.",ideas:["Say the goal clearly", "List two steps you will take", "Link to your values or career"],vocab:["to set a target", "to be determined to", "a long-term ambition", "to overcome obstacles", "step by step"]},
{t:"A book or film",q:"Describe a book or film you enjoyed.\n\nYou should say:\n- what it was\n- when you read or watched it\n- what it was about\n\nand explain why you enjoyed it.",ideas:["Give the title and the genre", "Summarise the plot in two sentences", "Say what you learned or felt"],vocab:["gripping", "a plot twist", "thought-provoking", "I couldn't put it down", "the main character"]},
{t:"Helping someone",q:"Describe a time when you helped someone.\n\nYou should say:\n- who you helped\n- how you helped\n- why they needed help\n\nand explain how you felt afterwards.",ideas:["Set the scene", "Say what you did step by step", "End with the result and your feelings"],vocab:["to lend a hand", "grateful", "to go out of my way", "it made my day", "a sense of satisfaction"]},
{t:"A piece of technology",q:"Describe a piece of technology you use every day.\n\nYou should say:\n- what it is\n- how long you have had it\n- what you use it for\n\nand explain why it is important to you.",ideas:["Say what it is and when you got it", "List two or three uses", "Imagine life without it"],vocab:["indispensable", "user-friendly", "to rely on", "a time-saver", "up to date"]},
{t:"A memorable meal",q:"Describe a meal you remember well.\n\nYou should say:\n- when you had it\n- where you had it\n- who you were with\n\nand explain why you remember it.",ideas:["Describe the place and the people", "Describe the taste and smell", "Say why it stayed in your memory"],vocab:["mouth-watering", "home-cooked", "a special occasion", "to savour", "the flavour"]},
{t:"An interesting building",q:"Describe a building you find interesting.\n\nYou should say:\n- where it is\n- what it looks like\n- what it is used for\n\nand explain why you find it interesting.",ideas:["Say where and when you first saw it", "Describe the shape, size, materials", "Explain its history or meaning"],vocab:["impressive", "architecture", "a landmark", "dating back to...", "eye-catching"]},
{t:"Waiting",q:"Describe a time when you had to wait for something.\n\nYou should say:\n- what you were waiting for\n- how long you waited\n- what you did while waiting\n\nand explain how you felt.",ideas:["Say what and where", "Describe what you did", "Explain the feeling and the result"],vocab:["to be on edge", "to kill time", "impatient", "it felt like ages", "worth the wait"]}
];
var SP3=[
{q:"Why do some people find it difficult to learn a foreign language?",ideas:["Lack of practice and fear of mistakes","Not enough time or motivation","Different grammar from the mother tongue"],vocab:["to lack confidence","immersion","a steep learning curve","to be reluctant to speak","consistency is key"]},
{q:"How has technology changed the way people study?",ideas:["Online courses and apps make learning flexible","Easy access to information, but also distraction","Teachers' role is shifting to guiding"],vocab:["at one's fingertips","remote learning","a double-edged sword","to be easily distracted","personalised learning"]},
{q:"Should children be taught to manage money at school?",ideas:["Early habits last a lifetime","Parents may not always teach it","It should be practical, not only theory"],vocab:["financial literacy","to budget wisely","to live within one's means","a practical skill","to build good habits"]},
{q:"Do you think people today have enough free time?",ideas:["Long working hours and commuting","Free time is often spent on phones","Quality of rest matters more than quantity"],vocab:["work-life balance","to be tied up with work","to be glued to a screen","to make time for","burnout"]},{q:"Why do people enjoy watching sport?",ideas:["Excitement and national pride", "Social events with friends", "Admiration for athletes"],vocab:["to be a spectator", "a sense of belonging", "to cheer for", "thrilling", "a shared experience"]},
{q:"Is it better to live in a city or in the countryside?",ideas:["City: jobs, services, entertainment", "Countryside: quiet, nature, cheaper", "It depends on age and lifestyle"],vocab:["career opportunities", "peace and quiet", "cost of living", "overcrowded", "a slower pace of life"]},
{q:"How can governments encourage people to use public transport?",ideas:["Cheaper tickets and better routes", "Restricting cars in the centre", "Safe and clean vehicles"],vocab:["to subsidise", "a reliable service", "congestion charge", "to cut emissions", "an incentive"]},
{q:"Why do some people prefer to work for themselves?",ideas:["Freedom and flexible hours", "Higher possible income", "Risk and no stable salary"],vocab:["to be your own boss", "job security", "flexible schedule", "to take a risk", "self-discipline"]},
{q:"Do you think children spend too much time indoors today?",ideas:["Screens and safety concerns", "Benefits of fresh air and play", "Role of parents and schools"],vocab:["a sedentary lifestyle", "outdoor activities", "to be glued to", "physical and mental health", "to encourage"]},
{q:"How important is it to preserve traditional customs?",ideas:["Identity and history", "Customs can change with time", "Teaching young people"],vocab:["cultural heritage", "to pass down", "to fade away", "a sense of identity", "to preserve"]},
{q:"Should people be paid more for dangerous jobs?",ideas:["Risk deserves reward", "Some jobs are valued by society, not pay", "Safety and training matter too"],vocab:["hazardous", "to be fairly compensated", "a vital service", "to risk one's life", "it goes without saying"]},
{q:"What are the benefits of learning about other cultures?",ideas:["Tolerance and fewer stereotypes", "Business and travel opportunities", "Broader worldview"],vocab:["to broaden one's horizons", "mutual respect", "open-minded", "stereotypes", "cultural exchange"]},
{q:"Why do some people enjoy travelling more than others?",ideas:["Curiosity and personality", "Money and free time", "Fear of the unknown"],vocab:["to broaden one's horizons", "adventurous", "a creature of habit", "to step out of one's comfort zone"]},
{q:"Do you think fame is a good thing?",ideas:["Money and opportunities", "Loss of privacy and pressure", "Role models and responsibility"],vocab:["in the public eye", "a role model", "to be under pressure", "a double-edged sword"]},
{q:"Should old buildings be preserved?",ideas:["History and identity", "Cost of maintenance", "Space for new housing"],vocab:["cultural heritage", "to restore", "to demolish", "to strike a balance"]},
{q:"How has technology changed the way people communicate?",ideas:["Faster and cheaper contact", "Less face-to-face talk", "Risk of misunderstanding online"],vocab:["instant messaging", "to keep in touch", "face-to-face", "to be glued to a phone"]},
{q:"Why do people find it hard to be patient?",ideas:["Fast pace of modern life", "Instant access to everything", "Patience can be learned"],vocab:["instant gratification", "to lose one's temper", "a fast-paced world", "self-control"]},
{q:"Is it better to buy expensive things that last or cheap things often?",ideas:["Long-term savings vs. upfront cost", "Quality and the environment", "Fashion and changing needs"],vocab:["durable", "a throwaway culture", "value for money", "to pay off in the long run"]},
{q:"What role does motivation play in learning?",ideas:["Interest keeps people going", "Rewards and goals", "Support from teachers and family"],vocab:["intrinsic motivation", "to stay on track", "a sense of achievement", "to give up easily"]},
{q:"Do public celebrations matter for a community?",ideas:["Bring people together", "Preserve traditions", "Cost and disruption"],vocab:["a sense of belonging", "to bring people together", "time-honoured", "to take part in"]}
];

var WT1=[
{p:"The table shows the average number of hours per week that three age groups spent on different kinds of exercise in a European town. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.",tbl:[["Age group","Walking","Cycling","Gym"],["18-29","3.5","2.0","2.5"],["30-49","3.0","1.5","1.5"],["50+","4.5","0.5","0.5"]],ideas:["Overview first: which activity is most popular and which age group is most active","Compare the highest and lowest figures","Group the data, do not describe every number"],vocab:["the highest figure","by contrast","a marked difference","accounted for","remained the lowest"]},
{p:"The table shows the percentage of households with internet access in four countries in 2010 and 2020. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.",tbl:[["Country","2010","2020"],["Country A","45","92"],["Country B","62","95"],["Country C","20","68"],["Country D","78","98"]],ideas:["Overview: every country rose, the biggest rise and the highest final figure","Compare the starting points of the countries","Use fractions, doubled, tripled where true"],vocab:["rose sharply","almost doubled","stood at","a threefold increase","the gap narrowed"]},
{p:"The table shows the average monthly cost, in dollars, of four household expenses for a family in two cities. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.",tbl:[["Expense","City X","City Y"],["Rent","900","650"],["Food","400","450"],["Transport","120","80"],["Energy","150","110"]],ideas:["Overview: the biggest expense and which city is more expensive overall","Note the one exception where City Y costs more","Compare ratios, not only numbers"],vocab:["the most expensive item","considerably higher than","slightly less","with the exception of","roughly half"]},{p:"The table shows the average number of hours per week that students in four countries spent studying outside lessons. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.",tbl:[["Country", "Boys", "Girls"], ["Country A", "6", "8"], ["Country B", "10", "11"], ["Country C", "4", "5"], ["Country D", "12", "15"]],ideas:["Overview: girls study longer in every country and Country D is highest", "Compare the biggest and smallest gap", "Group countries into high and low study time"],vocab:["on average", "consistently higher", "the gap was widest in", "the lowest figure", "in every country"]},
{p:"The table shows the percentage of people who used four types of transport to get to work in a city in 2000 and 2020. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.",tbl:[["Transport", "2000", "2020"], ["Car", "58", "40"], ["Bus", "22", "25"], ["Bicycle", "5", "15"], ["Walking", "15", "20"]],ideas:["Overview: car use fell while the other three rose", "Bicycle tripled", "Car stayed the most popular choice in both years despite the fall"],vocab:["a steady decline", "to triple", "remained the most popular", "a marked rise", "overtook"]},
{p:"The table shows the monthly sales, in thousands of units, of three products in a company over four months. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.",tbl:[["Product", "Jan", "Feb", "Mar", "Apr"], ["Phone", "40", "45", "52", "60"], ["Tablet", "30", "28", "25", "22"], ["Laptop", "20", "25", "30", "35"]],ideas:["Overview: phones and laptops rose, tablets fell", "Phones were always the top seller", "Compare the start and end figures"],vocab:["consistently", "a downward trend", "peaked at", "an upward trend", "by the end of April"]}
];
var WT2=[
{p:"Some people think that cities should limit the number of private cars in the centre. Others believe this takes away personal freedom. Discuss both views and give your own opinion.",ideas:["View 1: less pollution, less traffic, safer streets","View 2: freedom of movement, people with disabilities, shops","Opinion: limit cars but improve public transport first"],vocab:["to alleviate congestion","carbon emissions","a viable alternative","to restrict access","on balance, I believe"]},
{p:"Many people believe that children spend too much time on screens. What are the causes of this, and what can be done to solve the problem?",ideas:["Causes: cheap devices, busy parents, social media, games","Solutions: time limits, outdoor clubs, parents as role models","Link each solution to a cause"],vocab:["to be addicted to","sedentary lifestyle","to set boundaries","to lead by example","detrimental to health"]},
{p:"Some people say that university education should be free for everyone. To what extent do you agree or disagree?",ideas:["Agree: equal opportunity, skilled workforce","Disagree: costs to taxpayers, less value if free","Give your position clearly in the introduction"],vocab:["equal access","a burden on taxpayers","to pursue higher education","tuition fees","to foster social mobility"]},
{p:"In some countries, young people are encouraged to take a year off between school and university. Do the advantages of this outweigh the disadvantages?",ideas:["Advantages: maturity, work experience, clearer career choice","Disadvantages: losing study habits, cost, falling behind","State whether advantages outweigh and why"],vocab:["a gap year","to gain life experience","to lose momentum","hands-on experience","a well-informed decision"]},{p:"Some people believe that young people should do unpaid community work as part of their education. To what extent do you agree or disagree?",ideas:["Agree: skills, responsibility, social connection", "Disagree: time pressure, should be voluntary", "Take a clear position in the introduction"],vocab:["to give back to society", "a sense of responsibility", "voluntary service", "to be compulsory", "life skills"]},
{p:"In many countries, people are living longer. What problems does this cause, and what can be done about it?",ideas:["Problems: healthcare costs, pensions, fewer workers", "Solutions: later retirement, prevention, support for carers", "Link each solution to a problem"],vocab:["an ageing population", "pension system", "to place pressure on", "preventive healthcare", "life expectancy"]},
{p:"Some people prefer to buy goods online, while others prefer to shop in stores. Discuss both views and give your opinion.",ideas:["Online: price, choice, convenience", "Shops: touch and try, service, community", "State your opinion clearly"],vocab:["at the click of a button", "to compare prices", "to try on", "local businesses", "on balance"]},
{p:"Some people think that tourism has a bad effect on local communities. Do you agree or disagree?",ideas:["Negative: crowds, higher prices, damage", "Positive: jobs and income", "Mention possible solutions"],vocab:["a boost to the economy", "overcrowding", "to damage the environment", "sustainable tourism", "a double-edged sword"]},
{p:"Many people say that learning a foreign language should start at primary school. What are the advantages and disadvantages of this?",ideas:["Advantages: brain flexibility, pronunciation, confidence", "Disadvantages: pressure, lack of teachers, confusion", "Give a balanced view and a conclusion"],vocab:["from an early age", "to acquire a language", "a heavy workload", "qualified teachers", "bilingual"]}
];

/* ================= HELPERS ================= */
var tmr=null;
function stopT(){if(tmr){clearInterval(tmr);tmr=null}}
function fmt(s){var m=Math.floor(s/60),r=s%60;return m+':'+(r<10?'0':'')+r}
function norm(s){return String(s).toLowerCase().replace(/[£.,'’‘:;!?\-]/g,' ').replace(/\s+/g,' ').replace(/^(the|a) /,'').trim()}
function toBand(n,t){var p=n/t;return p>=.95?8.5:p>=.85?7.5:p>=.75?7:p>=.65?6.5:p>=.55?6:p>=.45?5.5:p>=.35?5:p>=.25?4.5:p>=.15?4:3.5}
function countdown(sec,out,done){stopT();var left=sec;out.textContent=fmt(left);out.classList.remove('low');tmr=setInterval(function(){left--;out.textContent=fmt(Math.max(left,0));out.classList.toggle('low',left<=10);if(left<=0){stopT();done&&done()}},1000)}
function words(s){var m=s.trim().match(/\S+/g);return m?m.length:0}
function post(payload,cb){
  /* the teacher must always answer or fail within 25 s, otherwise the chat stays 'busy' and ignores new messages */
  var done=false,ac=typeof AbortController!=='undefined'?new AbortController():null;
  var timer=setTimeout(function(){if(ac)ac.abort();fin(new Error('timeout'))},25000);
  function fin(e,v){if(done)return;done=true;clearTimeout(timer);cb(e,v)}
  var opt={method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(payload)};
  if(ac)opt.signal=ac.signal;
  fetch(API,opt)
  .then(function(r){return r.json().catch(function(){return{}}).then(function(d){if(!r.ok)throw new Error(d.error||'x');return d})})
  .then(function(d){fin(null,d.reply)}).catch(function(e){fin(e)})}
function hintBox(item,d){var dt=el('details','hint');dt.appendChild(el('summary','',d.hints));
  dt.appendChild(el('b','',d.ideas));var ul=el('ul');item.ideas.forEach(function(x){ul.appendChild(el('li','',x))});dt.appendChild(ul);
  dt.appendChild(el('b','',d.vocab));var u2=el('ul');item.vocab.forEach(function(x){u2.appendChild(el('li','',x))});dt.appendChild(u2);return dt}
function tabsRow(host,list,cur,cls,fn){host.textContent='';host.className=cls;list.forEach(function(t){var b=el('button','',t[1]);b.type='button';b.appendChild(el('small','',t[2]));b.setAttribute('aria-pressed',t[0]===cur);b.onclick=function(){fn(t[0])};host.appendChild(b)})}

/* ---- voice recorder (MediaRecorder + optional speech recognition) ---- */
function Recorder(){
  var mr=null,chunks=[],stream=null,rc=null,txt='',active=false;
  var SR=window.SpeechRecognition||window.webkitSpeechRecognition;
  return {
    ok:function(){return !!(navigator.mediaDevices&&navigator.mediaDevices.getUserMedia&&window.MediaRecorder)},
    start:function(cb){
      navigator.mediaDevices.getUserMedia({audio:true}).then(function(s){
        stream=s;chunks=[];txt='';active=true;mr=new MediaRecorder(s);
        mr.ondataavailable=function(e){if(e.data&&e.data.size)chunks.push(e.data)};mr.start();
        if(SR){try{rc=new SR();rc.lang='en-US';rc.continuous=true;rc.interimResults=false;
          rc.onresult=function(e){for(var i=e.resultIndex;i<e.results.length;i++){if(e.results[i].isFinal)txt+=e.results[i][0].transcript+' '}};
          rc.onend=function(){if(active){try{rc.start()}catch(x){}}};rc.onerror=function(){};rc.start()}catch(x){rc=null}}
        cb(null)}).catch(function(e){cb(e)})},
    stop:function(cb){active=false;if(rc){try{rc.stop()}catch(x){}rc=null}
      if(!mr||mr.state==='inactive'){cb(null,'');return}
      mr.onstop=function(){if(stream)stream.getTracks().forEach(function(t){t.stop()});cb(new Blob(chunks,{type:mr.mimeType||'audio/webm'}),txt.trim())};mr.stop()},
    abort:function(){active=false;if(rc){try{rc.abort()}catch(x){}rc=null}if(mr&&mr.state!=='inactive'){mr.onstop=null;try{mr.stop()}catch(x){}}if(stream)stream.getTracks().forEach(function(t){t.stop()})}
  }}
var curRec=null;
function killRec(){if(curRec){curRec.abort();curRec=null}}

/* ================= MOCK TESTS (Reading / Listening) ================= */
var mTab='reading',mBox=$('#mBox'),mReadIdx=0,mLisIdx=0;
function saveProgress(kind,title,score,total,band){
  if(mockViolation){score=0;band=0;title=String(title||'')+' (нарушение режима)'}
  var uid='';try{uid=(window.SZA&&SZA.uid())||''}catch(e){}
  var row={ts:Date.now(),kind:kind,title:title,score:score,total:total,band:band};
  if(uid)row.acc=uid;
  try{var k='sz_progress',a=JSON.parse(localStorage.getItem(k)||'[]');
    a.push(row);
    if(a.length>200)a=a.slice(a.length-200);
    localStorage.setItem(k,JSON.stringify(a))}catch(e){}
  function send(id,tok){var h={'Content-Type':'application/json'};if(tok)h.Authorization='Bearer '+tok;
    return fetch((window.SZ_API||'')+'/api/progress/'+encodeURIComponent(id),{method:'POST',headers:h,body:JSON.stringify({kind:String(kind||'test').slice(0,40),data:row})}).catch(function(){})}
  /* копия в базу данных сервера: в аккаунт (с токеном) или под анонимным id браузера, без имени */
  try{
    if(uid){SZA.token().then(function(tok){if(tok)send(uid,tok)}).catch(function(){})}
    else{var cid=localStorage.getItem('sz_cid');
      if(!cid){cid=((window.crypto&&crypto.randomUUID)?crypto.randomUUID():(Date.now().toString(36)+Math.random().toString(36).slice(2,12))).replace(/[^A-Za-z0-9-]/g,'').slice(0,64);localStorage.setItem('sz_cid',cid)}
      send(cid,'')}
  }catch(e){}}
function quiz(cfg,pre,kind){
  var d=U[L];mBox.textContent='';
  var intro=el('div','pass');intro.appendChild(el('h3','',cfg.title));intro.appendChild(el('p','',pre));
  var go=el('button','btn',d.start);go.type='button';intro.appendChild(go);mBox.appendChild(intro);
  go.onclick=function(){
    mBox.textContent='';var bar=el('div','mt');bar.appendChild(el('b','',cfg.title));var tm=el('span','tm');bar.appendChild(tm);
    var sub=el('button','btn y',d.submit);sub.type='button';bar.appendChild(sub);mBox.appendChild(bar);
    var plays=2;
    if(cfg.text){var ap=el('div','pass');var pb=el('button','btn',d.play);pb.type='button';var pc=el('span','',d.plays+': 2');pc.style.marginLeft='12px';
      ap.appendChild(pb);ap.appendChild(pc);if(!window.szSpeak)ap.appendChild(el('p','note',d.noAudio));
      pb.onclick=function(){if(plays<=0)return;plays--;pc.textContent=d.plays+': '+plays;if(window.szUnlock)szUnlock();if(window.szSpeak)szSpeak(cfg.text,{lang:'en-GB',rate:.92});if(plays<=0)pb.disabled=true};mBox.appendChild(ap)}
    else{var ps=el('div','pass');ps.appendChild(el('h3','',cfg.title));cfg.paras.forEach(function(x){ps.appendChild(el('p','',x))});mBox.appendChild(ps)}
    var cards=cfg.qs.map(function(q,i){
      var c=el('div','qc');c.appendChild(el('p','',(i+1)+'. '+q.q));var g=null;
      if(q.t==='fill'){g=el('input');g.type='text';g.setAttribute('aria-label',d.typeAns);g.autocomplete='off';c.appendChild(g)}
      else{var opts=q.t==='tf'?TFNG:q.o;g=[];opts.forEach(function(o,k){var lb=el('label');var r=el('input');r.type='radio';r.name='q'+i;r.value=k;lb.appendChild(r);lb.appendChild(document.createTextNode(' '+o));c.appendChild(lb);g.push(r)})}
      mBox.appendChild(c);return {c:c,g:g,q:q}});
    var finished=false;
    function finish(){if(finished)return;finished=true;stopT();if(synth)synth.cancel();sub.disabled=true;var sc=0;
      cards.forEach(function(o){var q=o.q,ok=false,mine='',ans='';
        if(q.t==='fill'){mine=o.g.value;ok=q.a.indexOf(norm(mine))>=0;ans=q.a[0];o.g.disabled=true}
        else{var opts=q.t==='tf'?TFNG:q.o,pk=-1;o.g.forEach(function(r,k){if(r.checked)pk=k;r.disabled=true});mine=pk>=0?opts[pk]:'';ok=pk===q.a;ans=opts[q.a]}
        if(ok)sc++;o.c.classList.add(ok?'ok':'bad');
        if(!ok)o.c.appendChild(el('small','',d.your+': '+(mine||'-')+' · '+d.corr+': '+ans))});
      var bandVal=toBand(sc,cfg.qs.length);
      if(kind)saveProgress(kind,cfg.title,sc,cfg.qs.length,bandVal);
      var res=el('div','pass');res.appendChild(el('h3','',d.score+': '+sc+' '+d.of+' '+cfg.qs.length));
      var bn=el('div','big',bandVal.toFixed(1));bn.appendChild(el('small','',d.band));res.appendChild(bn);res.appendChild(el('p','note',d.bandNote));
      if(cfg.text){res.appendChild(el('b','',d.transcript));res.appendChild(el('p','',cfg.text))}
      var ag=el('button','btn g',d.again);ag.type='button';ag.style.color='#1D1D1F';ag.onclick=renderMock;res.appendChild(ag);
      mBox.appendChild(res);res.scrollIntoView({behavior:'smooth',block:'start'})}
    sub.onclick=finish;countdown(cfg.mins*60,tm,finish)}}

/* ---------- best free system voice ---------- */
function bestVoice(lang){
  var s=window.speechSynthesis;if(!s||!s.getVoices)return null;
  var code=lang==='ru'?'ru':'en';
  var vs=s.getVoices().filter(function(v){return(v.lang||'').toLowerCase().indexOf(code)===0});
  if(!vs.length)return null;
  var pref=[/natural/i,/neural/i,/online/i,/aria|jenny|guy|sonia|libby|ryan|natasha|dmitry|svetlana|google/i];
  var best=null,bs=-1;
  vs.forEach(function(v){var sc=0;pref.forEach(function(r,i){if(r.test(v.name))sc+=10-i});if(code==='en'&&/en-GB/i.test(v.lang))sc+=2;if(sc>bs){bs=sc;best=v}});
  return best;
}
/* ---------- mock test lock: fullscreen, AI off, leave warning ---------- */
var mockLive=false,mockViolation=false,mockT=null,mockLeft=30;
function mockOverlay(){var w=document.getElementById('mWarn');if(!w){w=document.createElement('div');w.id='mWarn';w.setAttribute('role','alertdialog');w.style.cssText='position:fixed;inset:0;z-index:99999;display:none;align-items:center;justify-content:center;padding:24px;background:rgba(0,0,0,.86);color:#fff;font:600 18px/1.45 system-ui,sans-serif;text-align:center';document.body.appendChild(w)}return w}
function mockEnterFull(){var e=document.documentElement;try{if(e.requestFullscreen&&!document.fullscreenElement)e.requestFullscreen().catch(function(){})}catch(x){}}
function mockShowWarn(){
  var w=mockOverlay();w.style.display='flex';w.innerHTML='';
  var box=document.createElement('div');box.style.maxWidth='440px';
  box.innerHTML='<p style="font-size:22px;margin:0 0 10px">Вы вышли из полноэкранного режима</p><p style="margin:0 0 16px">Вернитесь в полный экран за <b id="mLeft">30</b> сек. Если не вернётесь, результат пробника будет 0.</p>';
  var b=document.createElement('button');b.textContent='Вернуться в полный экран';
  b.style.cssText='background:#2A3CFF;color:#fff;border:0;border-radius:12px;padding:12px 20px;font-weight:800;font-size:16px;cursor:pointer';
  b.onclick=function(){mockEnterFull()};box.appendChild(b);w.appendChild(box);
}
function mockLeave(){
  if(!mockLive||mockViolation||mockT)return;
  mockLeft=30;mockShowWarn();
  mockT=setInterval(function(){
    mockLeft--;var l=document.getElementById('mLeft');if(l)l.textContent=mockLeft;
    if(mockLeft<=0){clearInterval(mockT);mockT=null;mockViolation=true;
      var w=mockOverlay();w.innerHTML='';var p=document.createElement('p');p.style.fontSize='20px';p.textContent='Пробник завершён. Результат 0 из-за выхода из полноэкранного режима.';w.appendChild(p);w.style.display='flex';
      setTimeout(function(){w.style.display='none'},6000);
    }
  },1000);
}
function mockBack(){if(mockT&&!mockViolation){clearInterval(mockT);mockT=null;mockOverlay().style.display='none'}}
function mockLock(on){
  on=!!on;mockLive=on;
  document.body.classList.toggle('mock-on',on);
  if(on){mockEnterFull()}
  else{
    if(mockT){clearInterval(mockT);mockT=null}
    mockOverlay().style.display='none';
    if(document.fullscreenElement&&document.exitFullscreen)document.exitFullscreen().catch(function(){});
  }
}
document.addEventListener('fullscreenchange',function(){if(!mockLive)return;if(document.fullscreenElement)mockBack();else mockLeave()});
document.addEventListener('visibilitychange',function(){if(!mockLive)return;if(document.hidden)mockLeave();else if(document.fullscreenElement)mockBack()});
['copy','cut','paste','contextmenu'].forEach(function(ev){document.addEventListener(ev,function(e){if(mockLive)e.preventDefault()})});

function renderMock(){
  stopT();mockLock(location.hash==='#mock'&&(mTab==='reading'||mTab==='listening'));var d=U[L];
  $('#mH').textContent=d.mH;$('#mP').textContent=d.mP;$('#mNote').textContent=d.mNote;
  tabsRow($('#mTabs'),d.tabs,mTab,'mk',function(k){if(k==='writing'||k==='speaking'){pTab=k;location.hash='#practice';return}mTab=k;renderMock()});
  var mVar=$('#mVariant');
  if(mTab==='reading'||mTab==='listening'){
    var arr=mTab==='reading'?READS:LISS,idx=mTab==='reading'?mReadIdx:mLisIdx;
    var vtabs=arr.map(function(_,n){return [String(n),String(n+1),'']});
    mVar.hidden=false;mVar.innerHTML='';
    var lbl=el('span','note',d.variant+': ');lbl.style.marginRight='8px';mVar.appendChild(lbl);
    var inner=el('span');mVar.appendChild(inner);
    tabsRow(inner,vtabs,String(idx),'mk',function(k){if(mTab==='reading')mReadIdx=+k;else mLisIdx=+k;renderMock()});
    quiz(arr[idx],mTab==='reading'?d.readIntro:d.lisIntro,mTab)
  } else {mVar.hidden=true;mVar.innerHTML=''}}

/* ================= PRACTICE (Speaking / Writing generators) ================= */
var pTab='speaking',pBox=$('#pBox'),spPart=1;
function speakingGen(){
  killRec();stopT();var d=U[L];pBox.textContent='';
  var sw=el('div','slang');[1,2,3].forEach(function(k){var b=el('button','',d.part+' '+k);b.type='button';b.setAttribute('aria-pressed',k===spPart);b.onclick=function(){spPart=k;speakingGen()};sw.appendChild(b)});pBox.appendChild(sw);
  var item=spPart===1?pick(SP1):spPart===2?pick(SP2):pick(SP3);
  var card=el('div','pass');card.appendChild(el('h3','',d.part+' '+spPart+(item.t?': '+item.t:'')));
  if(spPart===1){var ul=el('ul','qlist');item.q.forEach(function(x){ul.appendChild(el('li','',x))});card.appendChild(ul)}
  else card.appendChild(el('p','qtext',spPart===2?item.q:item.q));
  card.appendChild(hintBox(item,d));pBox.appendChild(card);

  var bar=el('div','mt');var lab=el('b','',d.part+' '+spPart);var tm=el('span','tm');var total=spPart===1?120:spPart===2?120:90;tm.textContent=fmt(spPart===2?60:total);
  var go=el('button','btn y',d.rStart);go.type='button';var stop=el('button','btn',d.rStop);stop.type='button';stop.hidden=true;
  var nq=el('button','btn g',d.newTopic);nq.type='button';nq.style.color='#1D1D1F';nq.onclick=speakingGen;
  bar.appendChild(lab);bar.appendChild(tm);bar.appendChild(go);bar.appendChild(stop);bar.appendChild(nq);pBox.appendChild(bar);
  var st=el('p','note');pBox.appendChild(st);
  var res=el('div');res.hidden=true;pBox.appendChild(res);
  var rec=Recorder(),running=false;
  function finishRec(){
    if(!running)return;running=false;stopT();stop.hidden=true;go.hidden=false;go.disabled=false;lab.textContent=d.part+' '+spPart;
    if(!rec.ok()||!curRec){st.textContent=d.noMic;return}
    rec.stop(function(blob,text){curRec=null;st.textContent='';res.hidden=false;res.textContent='';
      if(blob&&blob.size){var box=el('div','pass');box.appendChild(el('h3','',d.listen));var au=el('audio');au.controls=true;au.src=URL.createObjectURL(blob);box.appendChild(au);
        var a=el('a','btn g',d.dl);a.href=au.src;a.download='speakyz-speaking.'+((blob.type||'').indexOf('mp4')>=0?'m4a':'webm');a.style.cssText='color:#1D1D1F;margin-left:12px';box.appendChild(a);res.appendChild(box);setTimeout(function(){au.focus()},50)}
      res.appendChild(el('p','qn',d.sTx));var ta=el('textarea','wa');ta.style.minHeight='120px';ta.value=text||'';ta.setAttribute('aria-label',d.sTx);res.appendChild(ta);
      var fb=el('button','btn',d.aiFb);fb.type='button';fb.style.marginTop='14px';res.appendChild(fb);var out=el('div','fb');out.hidden=true;res.appendChild(out);
      fb.onclick=function(){if(words(ta.value)<20){out.hidden=false;out.textContent=d.aiShort;return}
        fb.disabled=true;out.hidden=false;out.textContent=d.aiBusy;
        post({mode:'speaking',lang:L,messages:[{role:'user',content:'Question (Part '+spPart+'): '+(item.q.join?item.q.join(' '):item.q)+'\n\nTranscript of the answer:\n'+ta.value}]},function(e,r){fb.disabled=false;out.textContent=e?d.aiFail:r})};
      res.scrollIntoView({behavior:'smooth',block:'nearest'})})}
  function talkPhase(){
    lab.textContent=d.rec;stop.hidden=false;
    if(rec.ok()){curRec=rec;rec.start(function(err){if(err){curRec=null;st.textContent=d.noMic}})}else st.textContent=d.noMic;
    countdown(spPart===2?120:total,tm,finishRec)}
  go.onclick=function(){running=true;res.hidden=true;res.textContent='';st.textContent='';go.hidden=true;
    if(spPart===2){lab.textContent=d.prep;stop.hidden=false;countdown(60,tm,talkPhase)}else talkPhase()};
  stop.onclick=function(){if(lab.textContent===d.prep){stopT();talkPhase();return}finishRec()};
  if(!rec.ok())st.textContent=d.noMic}
function writingGen(){
  killRec();stopT();var d=U[L];pBox.textContent='';
  var type=writingGen.type||1;
  var sw=el('div','slang');[[1,d.wType1],[2,d.wType2]].forEach(function(k){var b=el('button','',k[1]);b.type='button';b.setAttribute('aria-pressed',k[0]===type);b.onclick=function(){writingGen.type=k[0];writingGen()};sw.appendChild(b)});pBox.appendChild(sw);
  var item=type===1?pick(WT1):pick(WT2),mins=type===1?20:40,minW=type===1?150:250;
  var card=el('div','pass');card.appendChild(el('h3','',d.task+' '+type));card.appendChild(el('p','',item.p));
  if(item.tbl){var tb=el('table');tb.style.cssText='border-collapse:collapse;width:100%;margin:6px 0 12px';item.tbl.forEach(function(r,ri){var tr=el('tr');r.forEach(function(c){var td=el(ri?'td':'th','',c);td.style.cssText='border:1px solid #D2D2D7;padding:8px 12px;text-align:left';tr.appendChild(td)});tb.appendChild(tr)});card.appendChild(tb)}
  card.appendChild(hintBox(item,d));pBox.appendChild(card);
  var bar=el('div','mt');var wc=el('b','','0 / '+minW+' '+d.words);var tm=el('span','tm');tm.textContent=fmt(mins*60);
  var st=el('button','btn y',d.wStart);st.type='button';var nq=el('button','btn g',d.newTopic);nq.type='button';nq.style.color='#1D1D1F';nq.onclick=writingGen;
  bar.appendChild(wc);bar.appendChild(tm);bar.appendChild(st);bar.appendChild(nq);pBox.appendChild(bar);
  var ta=el('textarea','wa');ta.setAttribute('aria-label','Essay');pBox.appendChild(ta);
  ta.oninput=function(){var n=words(ta.value);wc.textContent=n+' / '+minW+' '+d.words;wc.style.color=n>=minW?'#1FA463':''};
  st.onclick=function(){st.disabled=true;countdown(mins*60,tm,function(){ta.readOnly=true;out.hidden=false;out.textContent=d.wDone});ta.focus()};
  var fb=el('button','btn',d.aiFb);fb.type='button';fb.style.marginTop='14px';pBox.appendChild(fb);var out=el('div','fb');out.hidden=true;pBox.appendChild(out);
  fb.onclick=function(){if(words(ta.value)<50){out.hidden=false;out.textContent=d.aiShortW;return}
    fb.disabled=true;out.hidden=false;out.textContent=d.aiBusy;
    post({mode:'writing',lang:L,messages:[{role:'user',content:'Task prompt: '+item.p+(item.tbl?'\nTable data: '+JSON.stringify(item.tbl):'')+'\n\nStudent essay:\n'+ta.value}]},function(e,r){fb.disabled=false;out.textContent=e?d.aiFail:r})}}
function renderPractice(){
  stopT();killRec();var d=U[L];
  $('#pH').textContent=d.pH;$('#pP').textContent=d.pP;$('#pNote').textContent=d.pNote;
  tabsRow($('#pTabs'),d.pTabs,pTab,'mk two',function(k){pTab=k;renderPractice()});
  if(pTab==='speaking')speakingGen();else writingGen()}

/* ================= AI TEACHER (full page) ================= */
var tMode='free',tHist=[],tBusy=false,tVoice=false,tRc=null;
var TM=$('#tcM'),TI=$('#tcI'),SR2=window.SpeechRecognition||window.webkitSpeechRecognition;
function bubble(t,c){var b=el('div','am '+c);b.appendChild(el('span','',t));TM.appendChild(b);TM.scrollTop=TM.scrollHeight;
  if(c==='a'&&t!=='...'){var sp=el('button','sp','🔊');sp.type='button';sp.setAttribute('aria-label',U[L].tSpeak);sp.onclick=function(){speak(b.firstChild.textContent)};b.appendChild(sp)}return b}
function speak(text){var av=$('#tcAv');if(av)av.classList.add('talk');if(window.szSpeak)szSpeak(text,{lang:/[Ѐ-ӿ]/.test(text)?'ru-RU':'en-GB',rate:.95}).then(function(){if(av)av.classList.remove('talk')})}
function tChips(){var s=$('#tcS');s.textContent='';if(tHist.length)return;U[L].tSug[tMode].forEach(function(t){var b=el('button','',t);b.type='button';b.onclick=function(){tSend(t)};s.appendChild(b)})}
function tReset(){tHist=[];TM.textContent='';bubble(U[L].tHi[tMode],'a');tChips();if(window.szStop)szStop()}
function tSend(t){t=(t||'').trim();if(!t||tBusy)return;tBusy=true;$('#tcS').textContent='';bubble(t,'u');tHist.push({role:'user',content:t});TI.value='';
  var w=bubble('...','a');
  post({mode:'teacher',sub:tMode,lang:L,messages:tHist.slice(-10)},function(e,r){
    if(e){w.firstChild.textContent=U[L].tErr;tHist.pop()}else{w.firstChild.textContent=r;tHist.push({role:'assistant',content:r});
      var sp=el('button','sp','🔊');sp.type='button';sp.onclick=function(){speak(r)};w.appendChild(sp);if(tVoice)speak(r)}
    tBusy=false;TM.scrollTop=TM.scrollHeight})}
function renderTeacher(){
  var d=U[L];$('#aiH').textContent=d.tH;$('#aiP').textContent=d.tP;$('#tcName').textContent=d.tName;$('#tcRole').textContent=d.tRole;$('#tcNote').textContent=d.tNote;
  TI.placeholder=d.tPh;$('#tcG').textContent=d.tSend;$('#tcMicT').textContent=d.tMic;$('#tcVT').textContent=d.tVoice;$('#tcClr').textContent=d.tClear;
  var md=$('#tcModes');md.textContent='';d.tModes.forEach(function(m){var b=el('button','',m[1]);b.type='button';b.setAttribute('aria-pressed',m[0]===tMode);b.onclick=function(){tMode=m[0];renderTeacher();tReset()};md.appendChild(b)});
  if(!tHist.length){TM.textContent='';bubble(d.tHi[tMode],'a')}tChips()}
$('#tcF').addEventListener('submit',function(e){e.preventDefault();if(window.szUnlock)szUnlock();tSend(TI.value)});
$('#tcV').addEventListener('change',function(e){tVoice=e.target.checked;if(!tVoice&&window.szStop)szStop()});
$('#tcClr').addEventListener('click',tReset);
$('#tcMic').addEventListener('click',function(){
  var d=U[L],lbl=$('#tcMicT');
  if(tRc){try{tRc.stop()}catch(x){}return}
  if(!SR2){bubble(d.tNoSR,'a');return}
  try{tRc=new SR2();tRc.lang=tMode==='speaking'?'en-US':(L==='ru'?'ru-RU':L==='uz'?'uz-UZ':'en-US');tRc.interimResults=false;tRc.continuous=false;
    tRc.onresult=function(e){var s='';for(var i=0;i<e.results.length;i++)s+=e.results[i][0].transcript;TI.value=s};
    tRc.onend=function(){tRc=null;lbl.textContent=U[L].tMic;$('#tcMic').classList.remove('on');if(TI.value.trim()&&tMode==='speaking')tSend(TI.value)};
    tRc.onerror=function(){tRc=null;lbl.textContent=U[L].tMic;$('#tcMic').classList.remove('on')};
    tRc.start();lbl.textContent=d.tMicOn;$('#tcMic').classList.add('on')}catch(x){tRc=null}});

/* ================= language + routing glue ================= */
function renderAll(){renderMock();renderPractice();renderTeacher();[].forEach.call(document.querySelectorAll('[data-ml]'),function(x){x.setAttribute('aria-pressed',x.dataset.ml===L)})}
[].forEach.call(document.querySelectorAll('[data-ml]'),function(x){x.addEventListener('click',function(){setLang(x.dataset.ml);tHist=[];renderAll()})});
addEventListener('hashchange',function(){
  var h=location.hash||'';stopT();killRec();if(h!=='#mock')mockLock(false);if(window.szStop)szStop();
  var nl=readLang();if(nl!==L){L=nl;tHist=[];renderAll()}
  else if(h==='#practice')renderPractice();
  if(h==='#teacher'&&!tHist.length)renderTeacher()});
renderAll();
})();

