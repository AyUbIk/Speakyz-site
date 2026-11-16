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
