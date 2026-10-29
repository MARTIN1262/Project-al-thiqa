(function () {
  'use strict';

  /* =====================================================================
     CONFIG — عدّل بيانات شركتك هنا فقط / Edit your business details here
     ===================================================================== */
  var CONFIG = {
    brand: { ar: 'الثقة الدولية', en: 'Al Theqa Al Dawliya' },   // اسم الشركة
    phone: '+96569960353',        // للاتصال (صيغة دولية)
    phoneDisplay: '+965 69960353',      // كما يظهر للزائر
    whatsapp: '96569960353',         // رقم واتساب بدون + أو مسافات
    email: 'adsmostafa605@gmail.com',
    url: 'https://al-thiqa.com/',
    hours: { ar: 'نستقبل طلبات الحجز يومياً', en: 'Taking booking requests daily' }
  };

  /* ============================ Data ============================ */
  var SERVICES = [
    {
      id: 'cockroach', icon: '🪳', ar: 'مكافحة الصراصير', en: 'Cockroach control',
      dAr: 'رش وجل مبيد في أماكن الاختباء: المطبخ والحمامات وخلف الأجهزة وفتحات الصرف.',
      dEn: 'Spray and gel treatment where they hide: kitchens, bathrooms, behind appliances and drain openings.',
      urg: 2,
      doAr: 'نعالج مواضع الاختباء بالرش والجل ونقترح سدّ الشقوق وتسريبات المياه.',
      doEn: 'We treat hiding spots with spray and gel and recommend sealing cracks and water leaks.',
      tipAr: 'لا تترك طعاماً أو أطباقاً مكشوفة ليلاً، وأغلق أي تسريب مياه.',
      tipEn: 'Don\'t leave food or dishes out overnight, and fix any water leaks.'
    },
    {
      id: 'ant', icon: '🐜', ar: 'مكافحة النمل', en: 'Ant control',
      dAr: 'تتبّع مسار النمل وعشه ثم معالجة الحواف والمداخل مع طُعوم مناسبة.',
      dEn: 'We trace the trail and the nest, then treat edges and entry points with suitable baits.',
      urg: 1,
      doAr: 'نتتبع المسار إلى العش ونعالج المداخل بالطُعوم والرش الحدودي.',
      doEn: 'We follow the trail to the nest and treat entry points with baits and perimeter spray.',
      tipAr: 'احفظ السكريات والحلويات في علب محكمة، وامسح الأسطح جيداً.',
      tipEn: 'Store sugary food in sealed containers and wipe surfaces well.'
    },
    {
      id: 'termite', icon: '🪵', ar: 'مكافحة النمل الأبيض (الأرضة)', en: 'Termite control',
      dAr: 'فحص الأخشاب والجدران والأساسات ومعالجة التربة أو استخدام محطات الطُعم.',
      dEn: 'Inspection of wood, walls and foundations, with soil treatment or bait stations.',
      urg: 3,
      doAr: 'نفحص الأخشاب والجدران والأساسات ونحدد أسلوب المعالجة المناسب للتربة أو الطُعم.',
      doEn: 'We inspect wood, walls and foundations and choose soil treatment or baiting.',
      tipAr: 'لا تنقل الأخشاب المصابة إلى أماكن أخرى، ولا تعالجها بنفسك قبل الفحص.',
      tipEn: 'Don\'t move infested wood elsewhere and don\'t treat it yourself before inspection.'
    },
    {
      id: 'bedbug', icon: '🛏️', ar: 'مكافحة بق الفراش', en: 'Bed bug control',
      dAr: 'معالجة المراتب والأسرّة والشقوق، وغالباً على زيارتين لكسر دورة حياة الحشرة.',
      dEn: 'Treatment of mattresses, bed frames and cracks, usually over two visits to break the life cycle.',
      urg: 3,
      doAr: 'نعالج المراتب وإطارات الأسرّة والشقوق المجاورة، وغالباً على زيارتين.',
      doEn: 'We treat mattresses, bed frames and nearby cracks, usually over two visits.',
      tipAr: 'اغسل الملايات على حرارة عالية، ولا تنقل الفراش إلى غرف أخرى.',
      tipEn: 'Wash bedding on high heat and don\'t move bedding to other rooms.'
    },
    {
      id: 'rodent', icon: '🐀', ar: 'مكافحة القوارض', en: 'Rodent control',
      dAr: 'فحص منافذ الدخول، ومصائد ومحطات طُعم، وتوصيات لسدّ الفتحات.',
      dEn: 'Entry-point inspection, traps and bait stations, plus advice on sealing gaps.',
      urg: 3,
      doAr: 'نحدد منافذ الدخول ونضع المصائد ومحطات الطُعم ونوصي بسدّ الفتحات.',
      doEn: 'We find entry points, place traps and bait stations, and advise on sealing gaps.',
      tipAr: 'أغلق الأطعمة، أخرج القمامة يومياً، ولا تلمس الفضلات بيديك.',
      tipEn: 'Seal food, take out trash daily, and don\'t touch droppings with bare hands.'
    },
    {
      id: 'flying', icon: '🦟', ar: 'مكافحة البعوض والذباب', en: 'Mosquito & fly control',
      dAr: 'معالجة أماكن التوالد كالمياه الراكدة والمجاري ومناطق النفايات، ورش الحواف الخارجية.',
      dEn: 'Treatment of breeding sites such as standing water, drains and waste areas, plus outdoor perimeter spray.',
      urg: 2,
      doAr: 'نعالج أماكن التوالد والمجاري ومناطق النفايات ونرش الحواف الخارجية.',
      doEn: 'We treat breeding sites, drains and waste areas, and spray outdoor perimeters.',
      tipAr: 'تخلص من المياه الراكدة وغطِّ حاويات القمامة جيداً.',
      tipEn: 'Remove standing water and keep trash bins tightly covered.'
    },
    {
      id: 'flea', icon: '🐾', ar: 'مكافحة البراغيث والقراد', en: 'Flea & tick control',
      dAr: 'علاج المنزل والمفروشات والحديقة، بالتنسيق مع علاج الحيوان الأليف عند الطبيب البيطري.',
      dEn: 'Treatment of the home, furnishings and garden, coordinated with your vet\'s treatment of the pet.',
      urg: 2,
      doAr: 'نعالج المنزل والمفروشات والحديقة، وننسّق معك بشأن علاج الحيوان عند الطبيب البيطري.',
      doEn: 'We treat the home, furnishings and garden, and coordinate with your vet\'s treatment of the pet.',
      tipAr: 'اغسل فراش الحيوان وامسح المفروشات بالمكنسة يومياً.',
      tipEn: 'Wash pet bedding and vacuum furnishings daily.'
    },
    {
      id: 'scorpion', icon: '🦂', ar: 'مكافحة العقارب والزواحف', en: 'Scorpion & crawling pests',
      dAr: 'معالجة الأسوار والحدائق والمخازن وأكوام مواد البناء.',
      dEn: 'Treatment of walls, gardens, storage areas and building-material piles.',
      urg: 3,
      doAr: 'نعالج الأسوار والحدائق والمخازن ونقترح إزالة أماكن الاختباء.',
      doEn: 'We treat walls, gardens and storage areas and suggest removing hiding places.',
      tipAr: 'ارتدِ حذاءً في الحديقة وافحص الأحذية قبل لبسها. وعند اللدغة اطلب الرعاية الطبية فوراً.',
      tipEn: 'Wear shoes in the garden and check them before wearing. If stung, seek medical care immediately.'
    },
    {
      id: 'wasp', icon: '🐝', ar: 'إزالة الدبابير والنحل', en: 'Wasp & bee removal',
      dAr: 'إزالة الأعشاش بأمان بمعدات حماية دون تعريض السكان للخطر.',
      dEn: 'Safe nest removal with protective equipment, without putting residents at risk.',
      urg: 3,
      doAr: 'نزيل العش بأمان بمعدات الحماية المناسبة.',
      doEn: 'We remove the nest safely with the right protective equipment.',
      tipAr: 'ابتعد عن العش ولا تحاول ضربه أو رشه بنفسك.',
      tipEn: 'Keep away from the nest and don\'t try to hit or spray it yourself.'
    },
    {
      id: 'palm', icon: '🌴', ar: 'مكافحة سوسة النخيل', en: 'Palm weevil control',
      dAr: 'فحص النخيل وعلاجه وقائياً أو علاجياً في المزارع والحدائق والشاليهات.',
      dEn: 'Palm inspection with preventive or curative treatment for farms, gardens and chalets.',
      urg: 3,
      doAr: 'نفحص النخيل ونحدد العلاج الوقائي أو العلاجي حسب حالة كل نخلة.',
      doEn: 'We inspect the palms and choose preventive or curative treatment for each one.',
      tipAr: 'اطلب المعاينة فور ظهور نشارة أو سائل بني عند قاعدة السعف؛ فالتدخل المبكر يزيد فرص الإنقاذ.',
      tipEn: 'Call us as soon as you see sawdust or brown fluid at the frond base; early action improves the chances of saving the palm.'
    },
    {
      id: 'disinfect', icon: '🧴', ar: 'التعقيم والتطهير', en: 'Disinfection & sanitizing',
      dAr: 'تعقيم المنازل والمكاتب والمطاعم وأماكن التجمع.',
      dEn: 'Sanitizing of homes, offices, restaurants and public gathering areas.'
    },
    {
      id: 'contract', icon: '📋', ar: 'عقود المكافحة الدورية', en: 'Regular contracts',
      dAr: 'زيارات منتظمة للمنشآت مع سجل زيارات وتقرير بعد كل زيارة.',
      dEn: 'Scheduled visits for businesses with a visit log and a report after each visit.'
    }
  ];

  var SYMPTOMS = [
    { id: 's1', pest: 'cockroach', ar: 'أرى حشرات بنية أو سوداء ليلاً في المطبخ أو الحمام', en: 'I see brown or black insects at night in the kitchen or bathroom' },
    { id: 's2', pest: 'cockroach', ar: 'رائحة زيتية قوية أو حافظات بيض بنية صغيرة خلف الأجهزة', en: 'A strong oily smell or small brown egg cases behind appliances' },
    { id: 's3', pest: 'ant', ar: 'طوابير نمل على الأكل أو الأسطح', en: 'Lines of ants on food or surfaces' },
    { id: 's4', pest: 'termite', ar: 'فتات خشب أو أنفاق طينية رفيعة على الجدران أو الأبواب', en: 'Wood dust or thin mud tunnels on walls or doors' },
    { id: 's5', pest: 'termite', ar: 'أخشاب تبدو مجوّفة عند الطرق عليها، أو أجنحة صغيرة متساقطة قرب النوافذ', en: 'Wood that sounds hollow when tapped, or small shed wings near windows' },
    { id: 's6', pest: 'bedbug', ar: 'لدغات حمراء عند الاستيقاظ أو بقع دم صغيرة على المرتبة', en: 'Red bites on waking or small blood spots on the mattress' },
    { id: 's7', pest: 'rodent', ar: 'أصوات خدش في السقف أو الجدران وفضلات صغيرة سوداء', en: 'Scratching sounds in the ceiling or walls and small dark droppings' },
    { id: 's8', pest: 'rodent', ar: 'أكياس طعام مقضومة أو أسلاك متضررة', en: 'Gnawed food packaging or damaged wires' },
    { id: 's9', pest: 'flying', ar: 'بعوض في المساء أو ذباب كثير حول القمامة والمطبخ', en: 'Mosquitoes in the evening or many flies around trash and the kitchen' },
    { id: 's10', pest: 'flea', ar: 'حكّة عند الحيوان الأليف أو حشرات صغيرة تقفز على المفروشات', en: 'A scratching pet or tiny jumping insects on furnishings' },
    { id: 's11', pest: 'scorpion', ar: 'عقارب أو زواحف في الحديقة أو المخزن أو قرب الجدران', en: 'Scorpions or crawling pests in the garden, storage room or near walls' },
    { id: 's12', pest: 'wasp', ar: 'دبابير أو نحل يبني عشاً قرب النوافذ أو الأسقف', en: 'Wasps or bees building a nest near windows or eaves' },
    { id: 's13', pest: 'palm', ar: 'سعف نخيل يذبل، أو نشارة وسائل بني عند قاعدة السعف', en: 'Wilting palm fronds, or sawdust and brown fluid at the frond base' }
  ];

  /* Seasonal activity 0-3, Jan..Dec — general pattern */
  var CAL = [
    { ar: 'الصراصير', en: 'Cockroaches', v: [1, 1, 1, 2, 2, 3, 3, 3, 3, 2, 1, 1] },
    { ar: 'النمل', en: 'Ants', v: [1, 1, 2, 3, 3, 2, 2, 2, 3, 3, 2, 1] },
    { ar: 'النمل الأبيض', en: 'Termites', v: [1, 1, 2, 3, 3, 2, 1, 1, 2, 3, 2, 1] },
    { ar: 'البعوض والذباب', en: 'Mosquitoes & flies', v: [1, 1, 2, 3, 3, 3, 3, 3, 3, 3, 2, 1] },
    { ar: 'القوارض', en: 'Rodents', v: [3, 3, 2, 1, 1, 1, 1, 1, 2, 2, 3, 3] },
    { ar: 'العقارب والزواحف', en: 'Scorpions', v: [0, 0, 1, 2, 3, 3, 3, 3, 2, 1, 0, 0] },
    { ar: 'البراغيث والقراد', en: 'Fleas & ticks', v: [1, 1, 2, 2, 3, 3, 3, 3, 2, 2, 1, 1] },
    { ar: 'سوسة النخيل', en: 'Palm weevil', v: [1, 1, 2, 3, 3, 3, 2, 2, 3, 3, 2, 1] }
  ];
  var MONTHS = {
    ar: ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'],
    en: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  };

  var GUIDE = {
    b: [
      { ar: 'غطِّ الأطعمة والأواني المكشوفة أو ضعها في الثلاجة والخزائن المغلقة', en: 'Cover exposed food and dishes, or store them in the fridge and closed cabinets' },
      { ar: 'أخرج الأطفال والحيوانات الأليفة من المكان، وانقل النباتات الصغيرة', en: 'Take children and pets out of the property and move small plants away' },
      { ar: 'غطِّ حوض السمك وأوقف مضخة الهواء أثناء الرش', en: 'Cover fish tanks and switch off the air pump during spraying' },
      { ar: 'حرّك الأثاث الخفيف بعيداً عن الجدران ليصل الفني إلى الحواف والزوايا', en: 'Move light furniture away from walls so the technician can reach edges and corners' },
      { ar: 'أوقف المكيفات والمراوح وأغلق النوافذ أثناء الرش', en: 'Switch off ACs and fans and close windows during spraying' },
      { ar: 'لا تمسح الحواف والزوايا قبل الزيارة، واترك الأماكن التي رأيت فيها الحشرات كما هي', en: 'Don\'t wipe edges and corners before the visit; leave the spots where you saw the pests as they are' }
    ],
    a: [
      { ar: 'انتظر المدة التي حددها الفني قبل الدخول (غالباً بضع ساعات)', en: 'Wait for the time the technician gave you before re-entering (often a few hours)' },
      { ar: 'افتح النوافذ وهوِّ المكان جيداً قبل البقاء فيه', en: 'Open the windows and ventilate well before staying inside' },
      { ar: 'امسح الأسطح التي تلامس الطعام أو الأطفال: طاولات الأكل وألعاب الأطفال', en: 'Wipe surfaces that touch food or children: dining tables and toys' },
      { ar: 'لا تمسح الحواف والزوايا المعالجة لعدة أيام حسب توجيه الفني', en: 'Don\'t wipe the treated edges and corners for several days, as the technician advises' },
      { ar: 'توقّع رؤية بعض الحشرات لعدة أيام؛ هذا طبيعي ولا يعني فشل المعالجة', en: 'Expect to see a few insects for several days; that is normal and doesn\'t mean the treatment failed' },
      { ar: 'إن استمر النشاط بعد أسبوعين تقريباً، راسلنا لنرتب زيارة متابعة', en: 'If activity continues after about two weeks, message us to arrange a follow-up visit' }
    ]
  };

  var AREAS = [
    { ar: 'العاصمة', en: 'Capital', list: [['مدينة الكويت', 'Kuwait City'], ['شرق', 'Sharq'], ['القبلة', 'Qibla'], ['دسمان', 'Dasman'], ['الشويخ', 'Shuwaikh'], ['كيفان', 'Kaifan'], ['الخالدية', 'Khaldiya'], ['الروضة', 'Rawda'], ['العديلية', 'Adailiya'], ['قرطبة', 'Qurtuba'], ['السرة', 'Surra'], ['الدعية', 'Daiya']] },
    { ar: 'حولي', en: 'Hawalli', list: [['حولي', 'Hawalli'], ['السالمية', 'Salmiya'], ['الجابرية', 'Jabriya'], ['سلوى', 'Salwa'], ['مشرف', 'Mishref'], ['بيان', 'Bayan'], ['الرميثية', 'Rumaithiya'], ['الشعب', 'Shaab'], ['ميدان حولي', 'Maidan Hawalli'], ['الزهراء', 'Zahra'], ['حطين', 'Hitteen'], ['السلام', 'Salam']] },
    { ar: 'الفروانية', en: 'Farwaniya', list: [['الفروانية', 'Farwaniya'], ['خيطان', 'Khaitan'], ['الأندلس', 'Andalus'], ['الرقعي', 'Riggae'], ['العمرية', 'Omariya'], ['جليب الشيوخ', 'Jleeb Al-Shuyoukh'], ['العارضية', 'Ardiya'], ['صباح الناصر', 'Sabah Al-Nasser'], ['الري', 'Rai'], ['إشبيلية', 'Ishbiliya']] },
    { ar: 'الأحمدي', en: 'Ahmadi', list: [['الأحمدي', 'Ahmadi'], ['الفحيحيل', 'Fahaheel'], ['المنقف', 'Mangaf'], ['أبو حليفة', 'Abu Halifa'], ['الفنطاس', 'Fintas'], ['المهبولة', 'Mahboula'], ['الرقة', 'Riqqa'], ['الصباحية', 'Sabahiya'], ['العقيلة', 'Egaila'], ['هدية', 'Hadiya'], ['الوفرة', 'Wafra'], ['الخيران', 'Khiran']] },
    { ar: 'مبارك الكبير', en: 'Mubarak Al-Kabeer', list: [['صباح السالم', 'Sabah Al-Salem'], ['العدان', 'Adan'], ['القرين', 'Qurain'], ['القصور', 'Qusor'], ['المسيلة', 'Messila'], ['أبو فطيرة', 'Abu Fteira'], ['الفنيطيس', 'Funaitees'], ['مبارك الكبير', 'Mubarak Al-Kabeer']] },
    { ar: 'الجهراء', en: 'Jahra', list: [['الجهراء', 'Jahra'], ['القصر', 'Qasr'], ['الصليبية', 'Sulaibiya'], ['النعيم', 'Naeem'], ['النسيم', 'Nasseem'], ['تيماء', 'Taima'], ['سعد العبدالله', 'Saad Al-Abdullah'], ['العيون', 'Oyoun'], ['الواحة', 'Waha']] }
  ];

  /* ============================ UI strings ============================ */
  var UI = {
    ar: {
      title: 'شركة مكافحة حشرات بالكويت | رش مبيدات حشرية مضمونة | الثقة الدولية',
      desc: 'أفضل شركة متخصصة في مكافحة الحشرات بالكويت. نقدم خدمات رش مبيدات حشرية آمنة ومرخصة للقضاء على الصراصير، البق، النمل الأبيض، والقوارض. خدمة سريعة بضمان. شخّص المشكلة واحجز موعدك الآن.',
      other: 'منطقة أخرى', chooseSvc: 'اختر الخدمة', requestSvc: 'اطلب الخدمة', langBtn: 'English',
      pickHint: 'اختر العلامات التي تلاحظها وسنعرض لك أقرب حشرة لحالتك.',
      pickTitle: 'النتيجة تظهر هنا', likely: 'الأقرب لحالتك', also: 'وقد تكون أيضاً',
      urgL: ['', 'عادية', 'متوسطة', 'عالية — لا تؤجّل'], urgLabel: 'أهمية التحرك: ',
      what: 'ماذا نفعل: ', meanwhile: 'إلى أن نصل: ', reqThis: 'اطلب هذه الخدمة', sendDiag: 'أرسل التشخيص عبر واتساب',
      prog: function (n, t) { return n + ' من ' + t + ' مكتمل'; },
      calLegend: ['لا نشاط يُذكر', 'نشاط منخفض', 'متوسط', 'ذروة'], calPest: 'الحشرة', now: 'الشهر الحالي',
      errName: 'اكتب اسمك.', errPhone: 'اكتب رقماً صحيحاً من ٨ أرقام، مثل 51234567.',
      hello: 'السلام عليكم، أرغب بحجز خدمة مكافحة حشرات:',
      fName: 'الاسم', fPhone: 'الجوال', fArea: 'المنطقة', fProp: 'نوع المكان', fSvc: 'الخدمة', fTime: 'الوقت المفضل', fNote: 'ملاحظات',
      diagHello: 'السلام عليكم، لاحظت في مكاني الآتي وأريد استشارتكم:', diagLikely: 'أقرب تشخيص: ',
      quickHello: 'السلام عليكم، أرغب بأن تتصلوا بي بخصوص: ', quickPhone: 'رقمي: ',
      waGeneric: 'السلام عليكم، أرغب بالاستفسار عن خدمات المكافحة.',
      copied: 'تم النسخ', bookAria: '', menu: 'القائمة'
    },
    en: {
      title: 'Best Pest Control Company in Kuwait | Safe & Guaranteed Pesticides',
      desc: 'Top-rated pest control company in Kuwait. We offer safe, licensed pesticide spraying to eliminate cockroaches, bed bugs, termites, and rodents. Fast service with a guarantee. Diagnose your problem and book now.',
      other: 'Other area', chooseSvc: 'Choose a service', requestSvc: 'Request this service', langBtn: 'العربية',
      pickHint: 'Tick the signs you notice and we\'ll show the closest match for your case.',
      pickTitle: 'Your result appears here', likely: 'Closest match', also: 'Could also be',
      urgL: ['', 'Routine', 'Moderate', 'High — don\'t delay'], urgLabel: 'Urgency: ',
      what: 'What we do: ', meanwhile: 'Until we arrive: ', reqThis: 'Request this service', sendDiag: 'Send diagnosis on WhatsApp',
      prog: function (n, t) { return n + ' of ' + t + ' done'; },
      calLegend: ['No notable activity', 'Low', 'Moderate', 'Peak'], calPest: 'Pest', now: 'Current month',
      errName: 'Please enter your name.', errPhone: 'Enter a valid 8-digit number, e.g. 51234567.',
      hello: 'Hello, I\'d like to book a pest control service:',
      fName: 'Name', fPhone: 'Mobile', fArea: 'Area', fProp: 'Property type', fSvc: 'Service', fTime: 'Preferred time', fNote: 'Notes',
      diagHello: 'Hello, I noticed the following and would like your advice:', diagLikely: 'Closest match: ',
      quickHello: 'Hello, please call me about: ', quickPhone: 'My number: ',
      waGeneric: 'Hello, I\'d like to ask about your pest control services.',
      copied: 'Copied', bookAria: '', menu: 'Menu'
    }
  };

  /* ============================ Helpers ============================ */
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var lang = 'ar';
  try { if (localStorage.getItem('lang') === 'en') lang = 'en'; } catch (e) { }
  var U = function () { return UI[lang]; };
  var svcById = function (id) { return SERVICES.filter(function (s) { return s.id === id; })[0]; };
  var nm = function (o) { return o[lang]; };
  var picked = {};                 // selected symptoms
  var checked = {};                // checked guide items
  var tab = 'b';

  function waLink(text) { return 'https://wa.me/' + CONFIG.whatsapp + '?text=' + encodeURIComponent(text); }
  function validPhone(v) {
    var d = String(v).replace(/\D/g, '');
    if (d.indexOf('965') === 0 && d.length === 11) d = d.slice(3);
    return d.length === 8 ? d : null;
  }
  function esc(s) { return String(s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }

  /* Capture Arabic originals once, before any language swap */
  $$('[data-en]').forEach(function (el) { el.setAttribute('data-ar', el.textContent.trim()); });
  $$('[data-en-ph]').forEach(function (el) { el.setAttribute('data-ar-ph', el.getAttribute('placeholder')); });

  /* ============================ Renderers ============================ */
  function fillConfig() {
    $$('[data-brand]').forEach(function (el) { el.textContent = CONFIG.brand[lang]; });
    $$('[data-phone]').forEach(function (el) { el.textContent = CONFIG.phoneDisplay; });
    $$('[data-tel]').forEach(function (el) { el.href = 'tel:' + CONFIG.phone; });
    $$('[data-wa]').forEach(function (el) { el.href = waLink(U().waGeneric); });
    $$('[data-mail]').forEach(function (el) { el.href = 'mailto:' + CONFIG.email; });
    $$('[data-email]').forEach(function (el) { el.textContent = CONFIG.email; });
    $$('[data-hours]').forEach(function (el) { el.textContent = CONFIG.hours[lang]; });
  }

  function renderServices() {
    var grid = $('#svcGrid');
    if (grid) {
      grid.innerHTML = SERVICES.map(function (s) {
        return '<article class="svc" id="svc-' + s.id + '"><div class="svc-ic" aria-hidden="true">' + s.icon + '</div>' +
          '<h3>' + esc(nm({ ar: s.ar, en: s.en })) + '</h3><p>' + esc(lang === 'ar' ? s.dAr : s.dEn) + '</p>' +
          '<a href="#book" data-book="' + s.id + '">' + esc(U().requestSvc) + '</a></article>';
      }).join('');
    }
    var foot = $('#footSvc');
    if (foot) {
      foot.innerHTML = ['cockroach', 'termite', 'bedbug', 'rodent', 'palm', 'contract'].map(function (id) {
        var s = svcById(id); return '<li><a href="#book" data-book="' + id + '">' + esc(nm({ ar: s.ar, en: s.en })) + '</a></li>';
      }).join('');
    }
  }

  function fillServiceSelects() {
    $$('[data-svc-select]').forEach(function (sel) {
      var cur = sel.value;
      sel.innerHTML = '<option value="">' + esc(U().chooseSvc) + '</option>' + SERVICES.map(function (s) {
        return '<option value="' + s.id + '">' + esc(nm({ ar: s.ar, en: s.en })) + '</option>';
      }).join('');
      sel.value = cur;
    });
  }

  function fillGovernorates() {
    var g = $('#bGov');
    if (!g) return;
    var curG = g.value || '0';
    g.innerHTML = AREAS.map(function (a, i) { return '<option value="' + i + '">' + esc(nm(a)) + '</option>'; }).join('');
    g.value = curG; fillAreaSelect();
  }
  function fillAreaSelect(keep) {
    var bg = $('#bGov'), sel = $('#bArea');
    if (!bg || !sel) return;
    var g = +bg.value || 0, cur = keep !== undefined ? keep : sel.value;
    sel.innerHTML = AREAS[g].list.map(function (a, i) { return '<option value="' + i + '">' + esc(lang === 'ar' ? a[0] : a[1]) + '</option>'; }).join('') +
      '<option value="other">' + esc(U().other) + '</option>';
    if (cur !== undefined && cur !== '') sel.value = cur;
  }

  function renderSymptoms() {
    var list = $('#symList');
    if (!list) return;
    list.innerHTML = SYMPTOMS.map(function (s) {
      return '<button type="button" class="sym" data-sym="' + s.id + '" aria-pressed="' + (picked[s.id] ? 'true' : 'false') + '">' + esc(nm(s)) + '</button>';
    }).join('');
  }

  function ranked() {
    var c = {}; SYMPTOMS.forEach(function (s) { if (picked[s.id]) c[s.pest] = (c[s.pest] || 0) + 1; });
    return Object.keys(c).map(function (k) { return [k, c[k]]; }).sort(function (a, b) {
      return b[1] - a[1] || svcById(b[0]).urg - svcById(a[0]).urg;
    });
  }

  function renderResult() {
    var box = $('#result'), r = ranked(), u = U();
    if (!box) return;
    if (!r.length) {
      box.innerHTML = '<h3>' + esc(u.pickTitle) + '</h3><p class="hint">' + esc(u.pickHint) + '</p>';
      return;
    }
    var html = r.slice(0, 3).map(function (pair, idx) {
      var s = svcById(pair[0]);
      return '<div class="res-item"><div class="res-top"><h4>' + (idx === 0 ? esc(u.likely) + ': ' : esc(u.also) + ': ') + esc(nm({ ar: s.ar, en: s.en })) + '</h4>' +
        '<span class="urg u' + s.urg + '">' + esc(u.urgLabel + u.urgL[s.urg]) + '</span></div>' +
        '<p><b>' + esc(u.what) + '</b>' + esc(lang === 'ar' ? s.doAr : s.doEn) + '</p>' +
        '<p><b>' + esc(u.meanwhile) + '</b>' + esc(lang === 'ar' ? s.tipAr : s.tipEn) + '</p>' +
        '<div class="res-actions"><a class="btn btn--ink" href="#book" data-book="' + s.id + '">' + esc(u.reqThis) + '</a></div></div>';
    }).join('');
    html += '<div class="res-actions" style="margin-top:22px"><button type="button" class="btn btn--wa" id="sendDiag">' + esc(u.sendDiag) + '</button></div>';
    box.innerHTML = html;
  }

  function renderCalendar() {
    var now = new Date().getMonth(), u = U();
    var head = '<thead><tr><th scope="col" style="text-align:start;padding-inline:16px">' + esc(u.calPest) + '</th>' +
      MONTHS[lang].map(function (m, i) { return '<th scope="col"' + (i === now ? ' class="now" title="' + esc(u.now) + '"' : '') + '>' + m + '</th>'; }).join('') + '</tr></thead>';
    var body = '<tbody>' + CAL.map(function (row) {
      return '<tr><th scope="row">' + esc(nm(row)) + '</th>' + row.v.map(function (v) {
        return '<td class="h' + v + '"><span></span><span class="sr">' + esc(u.calLegend[v]) + '</span></td>';
      }).join('') + '</tr>';
    }).join('') + '</tbody>';
    var cTable = $('#calTable'); if (cTable) cTable.innerHTML = head + body;
    var cols = ['#eef4f2', '#b9e3d8', '#f6d961', '#e0663a'];
    var cLegend = $('#calLegend'); if (cLegend) cLegend.innerHTML = u.calLegend.map(function (t, i) { return '<span><i style="background:' + cols[i] + '"></i>' + esc(t) + '</span>'; }).join('');
  }

  function renderGuide() {
    var items = GUIDE[tab];
    var list = $('#checkList');
    if (!list) return;
    list.setAttribute('aria-labelledby', tab === 'b' ? 'tabBefore' : 'tabAfter');
    list.innerHTML = items.map(function (it, i) {
      var key = tab + i;
      return '<li><label><input type="checkbox" data-chk="' + key + '"' + (checked[key] ? ' checked' : '') + '><span>' + esc(nm(it)) + '</span></label></li>';
    }).join('');
    updateProgress();
    $$('.tab').forEach(function (t) { t.setAttribute('aria-selected', t.dataset.tab === tab ? 'true' : 'false'); });
  }
  function updateProgress() {
    var total = GUIDE[tab].length, n = 0;
    GUIDE[tab].forEach(function (_, i) { if (checked[tab + i]) n++; });
    var pText = $('#progText'); if (pText) pText.textContent = U().prog(n, total);
    var pBar = $('#progBar'); if (pBar) pBar.style.width = (n / total * 100) + '%';
  }

  function renderAreas() {
    var grid = $('#areasGrid');
    if (grid) {
      grid.innerHTML = AREAS.map(function (g, gi) {
        return '<div class="gov"><h3>' + esc(nm(g)) + '</h3><div class="chips">' + g.list.map(function (a, ai) {
          return '<button type="button" class="chip" data-gov="' + gi + '" data-area="' + ai + '">' + esc(lang === 'ar' ? a[0] : a[1]) + '</button>';
        }).join('') + '</div></div>';
      }).join('');
    }
  }

  /* ============================ Language ============================ */
  function applyLang() {
    var u = U();
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    $$('[data-en]').forEach(function (el) { el.textContent = lang === 'en' ? el.getAttribute('data-en') : el.getAttribute('data-ar'); });
    $$('[data-en-ph]').forEach(function (el) { el.setAttribute('placeholder', lang === 'en' ? el.getAttribute('data-en-ph') : el.getAttribute('data-ar-ph')); });
    document.title = u.title;
    var md = $('meta[name="description"]'); if (md) md.setAttribute('content', u.desc);
    $('#langBtn').textContent = u.langBtn;
    $('#langBtn').setAttribute('aria-label', lang === 'ar' ? 'Switch to English' : 'التبديل إلى العربية');
    $('#menuBtn').setAttribute('aria-label', u.menu);
    fillConfig(); renderServices(); fillServiceSelects(); fillGovernorates();
    renderSymptoms(); renderResult(); renderCalendar(); renderGuide(); renderAreas();
  }

  /* ============================ Actions ============================ */
  function prefillService(id) {
    var svcName = '';
    if (id === 'contract') {
      svcName = lang === 'ar' ? 'عقد مكافحة' : 'Pest control contract';
    } else {
      var s = svcById(id);
      svcName = s ? nm(s) : '';
    }
    var msg = U().hello + ' ' + svcName;
    window.open(waLink(msg), '_blank', 'noopener');
  }

  function labelOf(sel) { return sel.options[sel.selectedIndex] ? sel.options[sel.selectedIndex].textContent : ''; }

  function setErr(id, msg) { $(id).textContent = msg || ''; }

  /* ---- Event delegation ---- */
  document.addEventListener('click', function (e) {
    var t = e.target;

    if (t.closest('[data-wa-book]')) {
      e.preventDefault();
      var msg = U().hello;
      window.open(waLink(msg), '_blank', 'noopener');
      return;
    }

    var sym = t.closest('[data-sym]');
    if (sym) { var id = sym.dataset.sym; picked[id] = !picked[id]; sym.setAttribute('aria-pressed', picked[id] ? 'true' : 'false'); renderResult(); return; }

    var bk = t.closest('[data-book]');
    if (bk) { prefillService(bk.dataset.book); return; }

    if (t.closest('[data-contract]')) { prefillService('contract'); return; }

    var chip = t.closest('.chip');
    if (chip) {
      var govName = lang === 'ar' ? AREAS[chip.dataset.gov].ar : AREAS[chip.dataset.gov].en;
      var areaName = lang === 'ar' ? AREAS[chip.dataset.gov].list[chip.dataset.area][0] : AREAS[chip.dataset.gov].list[chip.dataset.area][1];
      var msg = U().hello + '\n' + U().fArea + ': ' + govName + ' - ' + areaName;
      window.open(waLink(msg), '_blank', 'noopener');
      return;
    }

    var tb = t.closest('.tab');
    if (tb) { tab = tb.dataset.tab; renderGuide(); return; }

    if (t.closest('#sendDiag')) {
      var u = U(), r = ranked(), lines = [u.diagHello, ''];
      SYMPTOMS.forEach(function (s) { if (picked[s.id]) lines.push('- ' + nm(s)); });
      if (r.length) { var s0 = svcById(r[0][0]); lines.push('', u.diagLikely + nm({ ar: s0.ar, en: s0.en })); }
      window.open(waLink(lines.join('\n')), '_blank', 'noopener'); return;
    }

    if (t.closest('#langBtn')) {
      lang = lang === 'ar' ? 'en' : 'ar';
      try { localStorage.setItem('lang', lang); } catch (_) { }
      applyLang(); return;
    }

    if (t.closest('#menuBtn')) {
      var nav = $('#nav'), open = nav.classList.toggle('open');
      $('#menuBtn').setAttribute('aria-expanded', open ? 'true' : 'false'); return;
    }
    if (t.closest('#nav a')) { $('#nav').classList.remove('open'); $('#menuBtn').setAttribute('aria-expanded', 'false'); }

    if (t.closest('#rcPrev')) {
      var c = $('#reviewsCarousel');
      var s = c ? c.querySelector('.rc-slide-page') : null;
      if (c && s) {
        var dist = s.offsetWidth + 16;
        if (typeof c.scrollBy === 'function') c.scrollBy({ left: dist, behavior: 'smooth' });
        else c.scrollLeft += dist;
      }
      return;
    }
    if (t.closest('#rcNext')) {
      var c = $('#reviewsCarousel');
      var s = c ? c.querySelector('.rc-slide-page') : null;
      if (c && s) {
        var dist = s.offsetWidth + 16;
        if (typeof c.scrollBy === 'function') c.scrollBy({ left: -dist, behavior: 'smooth' });
        else c.scrollLeft -= dist;
      }
      return;
    }
  });

  document.addEventListener('change', function (e) {
    var c = e.target.closest && e.target.closest('[data-chk]');
    if (c) { checked[c.dataset.chk] = c.checked; updateProgress(); }
    if (e.target.id === 'bGov') fillAreaSelect('');
  });

  /* ---- Quick form (hero) ---- */
  $('#quickForm').addEventListener('submit', function (e) {
    e.preventDefault();
    var d = validPhone($('#qPhone').value);
    if (!d) { setErr('#qErr', U().errPhone); $('#qPhone').focus(); return; }
    setErr('#qErr', '');
    var sel = $('#qSvc'), svc = sel.value ? labelOf(sel) : (lang === 'ar' ? 'استفسار عام' : 'General enquiry');
    var msg = U().quickHello + svc + '\n' + U().quickPhone + d;
    window.open(waLink(msg), '_blank', 'noopener');
  });

  /* ---- Booking form ---- */
  var bf = $('#bookForm');
  if (bf) {
    bf.addEventListener('submit', function (e) {
      e.preventDefault();
      var okName = $('#bName').value.trim().length > 1, d = validPhone($('#bPhone').value);
      setErr('#eName', okName ? '' : U().errName);
      setErr('#ePhone', d ? '' : U().errPhone);
      if (!okName) { $('#bName').focus(); return; }
      if (!d) { $('#bPhone').focus(); return; }
      $('#bPhone').value = d;
      $('#done').classList.add('show');
      window.open(waLink(buildBookingMessage()), '_blank', 'noopener');
    });
  }

  /* ============================ Structured data (SEO) ============================ */
  function buildSchema() {
    var faqItems = $$('#faqList details');
    if (!faqItems.length) return;
    var faq = faqItems.map(function (d) {
      return {
        '@type': 'Question', name: (d.querySelector('summary').textContent || '').trim(),
        acceptedAnswer: { '@type': 'Answer', text: (d.querySelector('p').textContent || '').trim() }
      };
    });
    var data = {
      '@context': 'https://schema.org', '@graph': [
        {
          '@type': 'LocalBusiness',
          name: 'الثقة الدولية - مكافحة حشرات',
          alternateName: CONFIG.brand.en + ' Pest Control',
          image: CONFIG.url + 'og-image.jpg',
          url: CONFIG.url,
          telephone: CONFIG.phone,
          email: CONFIG.email,
          address: {
            '@type': 'PostalAddress',
            addressCountry: 'KW'
          },
          areaServed: 'Kuwait',
          priceRange: '$$',
          openingHours: 'Mo-Su 00:00-23:59',
          description: UI.ar.desc,
          makesOffer: SERVICES.map(function (s) { return { '@type': 'Offer', itemOffered: { '@type': 'Service', name: s.ar, description: s.dAr } }; })
        },
        { '@type': 'FAQPage', mainEntity: faq }
      ]
    };
    $('#ld-json').textContent = JSON.stringify(data);
  }

  /* ============================ Init ============================ */
  $('#yr').textContent = new Date().getFullYear();
  buildSchema();
  applyLang();
})();