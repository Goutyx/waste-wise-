(function () {
    const DEFAULT_LANG = 'en';
    const STORAGE_KEY = 'language';

    const translations = {
        hi: {
            'splash.title': 'वेस्टवाइज़',
            'splash.tagline': 'कचरे को मूल्य में बदलें',
            'nav.home': 'होम',
            'nav.about': 'परिचय',
            'nav.modules': 'मॉड्यूल',
            'nav.contact': 'संपर्क',
            'nav.back': 'होम पर लौटें',
            'hero.title': 'कचरे को मूल्य में बदलें',
            'hero.subtitle': 'प्रबंधन करें, मापें और कम करें!',
            'hero.desc': 'किसानों, उद्योगों और नागरिकों को टिकाऊ और प्रभावी कचरा प्रबंधन के लिए सक्षम बनाएं।',
            'hero.explore': 'एक्सप्लोर करें',
            'hero.learn': 'और जानें',
            'welcome.title': 'वेस्टवाइज़ में आपका स्वागत है',
            'welcome.desc': 'हमारा प्लेटफ़ॉर्म समाज के विभिन्न क्षेत्रों के लिए उपयुक्त कचरा प्रबंधन समाधान प्रदान करता है। किसान, उद्योगपति या नागरिक—सभी के लिए उपयुक्त उपकरण उपलब्ध हैं।',
            'welcome.sustainable': 'सतत',
            'welcome.sustainable.desc': 'पर्यावरण-अनुकूल कचरा प्रबंधन को बढ़ावा दें',
            'welcome.data': 'डेटा आधारित',
            'welcome.data.desc': 'कचरा उत्पादन के पैटर्न को ट्रैक और विश्लेषण करें',
            'welcome.community': 'समुदाय',
            'welcome.community.desc': 'जुड़ें और सर्वोत्तम तरीकों को साझा करें',
            'modules.title': 'अपना मॉड्यूल चुनें',
            'module.farmer': 'किसान',
            'module.farmer.desc': 'फसल अवशेष और पशु अपशिष्ट सहित कृषि कचरे का प्रबंधन करें। कंपोस्टिंग और बायोगैस के सुझाव प्राप्त करें।',
            'module.farmer.li1': 'फसल अवशेष प्रबंधन',
            'module.farmer.li2': 'पशु अपशिष्ट ट्रैकिंग',
            'module.farmer.li3': 'कंपोस्टिंग सुझाव',
            'module.farmer.li4': 'बायोगैस की संभावना',
            'module.industrialist': 'उद्योगपति',
            'module.industrialist.desc': 'औद्योगिक कचरे को ट्रैक करें, पैटर्न का विश्लेषण करें और कमी की रणनीतियाँ पाएँ।',
            'module.industrialist.li1': 'उत्पादन कचरा ट्रैकिंग',
            'module.industrialist.li2': 'दृश्य विश्लेषण',
            'module.industrialist.li3': 'मासिक रिपोर्ट',
            'module.industrialist.li4': 'लागत विश्लेषण',
            'module.citizen': 'नागरिक',
            'module.citizen.desc': 'घरेलू कचरे की निगरानी करें, पृथक्करण सीखें और पर्यावरणीय प्रभाव घटाएँ।',
            'module.citizen.li1': 'घर का कचरा ट्रैकिंग',
            'module.citizen.li2': 'कचरा पृथक्करण सुझाव',
            'module.citizen.li3': 'दृश्य रिपोर्ट',
            'module.citizen.li4': 'पर्यावरण-अनुकूल सुझाव',
            'module.access': 'प्रवेश करें',
            'footer.tagline': 'स्वच्छ भविष्य के लिए टिकाऊ कचरा प्रबंधन को सक्षम बनाना।',
            'footer.quicklinks': 'त्वरित लिंक',
            'footer.modules': 'मॉड्यूल',
            'footer.contact': 'संपर्क जानकारी',
            'footer.rights': '&copy; 2025 वेस्टवाइज़. सर्वाधिकार सुरक्षित. | टिकाऊ भविष्य के लिए <i class="fas fa-heart text-red-500"></i> के साथ निर्मित',
            'about.hero.title': 'वेस्टवाइज़ के बारे में',
            'about.hero.subtitle': 'विभिन्न क्षेत्रों में कचरा प्रबंधन को समझें',
            'about.whatIs.title': 'कचरा प्रबंधन क्या है?',
            'about.whatIs.p1': 'कचरा प्रबंधन ठोस कचरे के उपचार और पुनर्चक्रण समाधानों की प्रक्रिया है। इसमें संग्रह, परिवहन, उपचार, और निपटान के साथ-साथ पूरे तंत्र की निगरानी और विनियमन शामिल है।',
            'about.whatIs.p2': 'सतत और रहने योग्य शहर बनाने के लिए उचित कचरा प्रबंधन आवश्यक है, लेकिन यह अभी भी कई विकासशील क्षेत्रों के लिए चुनौती बना हुआ है। प्रभावी प्रबंधन महंगा होता है, इसलिए एकीकृत, कुशल और सामाजिक रूप से समर्थित प्रणालियों की जरूरत है।',
            'about.mission': '<strong>हमारा मिशन:</strong> समाज के विभिन्न वर्गों को ऐसे समाधान देना जो उन्हें कचरे को कम करने, पुन: उपयोग करने और पुनर्चक्रण करने में सक्षम बनाएं, ताकि भविष्य अधिक स्वच्छ हो।',
            'about.approach.title': 'विभिन्न दृष्टिकोण क्यों जरूरी हैं',
            'about.farmers.title': 'किसान',
            'about.farmers.desc': 'कृषि कचरे में फसल अवशेष, पशु मल और प्रोसेसिंग अवशेष शामिल होते हैं जिनके लिए विशेष रणनीतियाँ चाहिए।',
            'about.farmers.li1': 'फसल अवशेष प्रबंधन',
            'about.farmers.li2': 'पशु अपशिष्ट से ऊर्जा',
            'about.farmers.li3': 'कंपोस्टिंग सुझाव',
            'about.farmers.li4': 'मृदा उर्वरता तकनीकें',
            'about.industrialists.title': 'उद्योगपति',
            'about.industrialists.desc': 'औद्योगिक कचरा क्षेत्र पर निर्भर करता है और इसमें खतरनाक सामग्री, विनिर्माण उपोत्पाद तथा पैकेजिंग शामिल हैं।',
            'about.industrialists.li1': 'खतरनाक कचरे का प्रबंधन',
            'about.industrialists.li2': 'उत्पादन सामग्रियों का पुनर्चक्रण',
            'about.industrialists.li3': 'कचरा न्यूनकरण रणनीतियाँ',
            'about.industrialists.li4': 'नियमों का पालन',
            'about.citizens.title': 'नागरिक',
            'about.citizens.desc': 'घरेलू कचरे में भोजन के अवशेष, पैकेजिंग और प्लास्टिक शामिल हैं जिन्हें सही प्रकार से अलग करना जरूरी है।',
            'about.citizens.li1': 'घरेलू कचरा ट्रैकिंग',
            'about.citizens.li2': 'कचरा पृथक्करण सुझाव',
            'about.citizens.li3': 'प्लास्टिक और कागज़ का पुनर्चक्रण',
            'about.citizens.li4': 'पर्यावरण-अनुकूल सुझाव',
            'about.stats.title': 'वैश्विक कचरा आँकड़े',
            'about.stats.card1': 'अरब टन वार्षिक वैश्विक कचरा',
            'about.stats.card2': 'वैश्विक औसत पुनर्चक्रण दर',
            'about.stats.card3': 'जैविक कचरे की कंपोस्टिंग दर',
            'about.stats.card4': 'ऊर्जा पुनर्प्राप्ति के लिए दहन दर',
            'about.benefits.title': 'उचित कचरा प्रबंधन के लाभ',
            'about.benefits.environment.title': 'पर्यावरण संरक्षण',
            'about.benefits.environment.desc': 'प्रदूषण कम करके पारिस्थितिक तंत्र की रक्षा करता है और मिट्टी व जल को सुरक्षित रखता है।',
            'about.benefits.health.title': 'सार्वजनिक स्वास्थ्य',
            'about.benefits.health.desc': 'खतरनाक और जैविक कचरे को सही ढंग से सँभाल कर रोगों के प्रसार को रोकता है।',
            'about.benefits.economic.title': 'आर्थिक लाभ',
            'about.benefits.economic.desc': 'रोज़गार पैदा करता है और पुनर्चक्रण व ऊर्जा उत्पादन से मूल्यवान संसाधन वापस लाता है।',
            'about.benefits.energy.title': 'ऊर्जा उत्पादन',
            'about.benefits.energy.desc': 'कचरे को ऊर्जा में बदलने के लिए दहन, बायोगैस और उन्नत प्रक्रियाओं का उपयोग करें।',
            'about.benefits.water.title': 'जल संरक्षण',
            'about.benefits.water.desc': 'कचरे को जल स्रोतों से दूर रखकर प्रदूषण घटाता और जल की बचत करता है।',
            'about.benefits.climate.title': 'जलवायु कार्रवाई',
            'about.benefits.climate.desc': 'लैंडफिल से मीथेन उत्सर्जन घटाकर ग्रीनहाउस गैसों में कमी लाता है।',
            'about.values.title': 'हमारे मूल मूल्य',
            'about.values.sustainable.title': 'सतत',
            'about.values.sustainable.desc': 'हम भावी पीढ़ियों के लिए पर्यावरण की रक्षा करने वाले तरीकों को बढ़ावा देते हैं।',
            'about.values.data.title': 'डेटा-आधारित',
            'about.values.data.desc': 'हम कचरा उत्पत्ति के पैटर्न का विश्लेषण कर क्रियाशील जानकारियाँ देते हैं।',
            'about.values.community.title': 'समुदाय',
            'about.values.community.desc': 'हम समुदायों को जोड़कर सर्वोत्तम प्रथाओं को साझा करने के लिए प्रेरित करते हैं।',
            'contact.hero.title': 'हमसे संपर्क करें',
            'contact.hero.subtitle': 'हमें आपकी प्रतिक्रिया और प्रश्न सुनकर खुशी होगी।',
            'contact.form.title': 'हमें संदेश भेजें',
            'contact.form.name': 'आपका नाम *',
            'contact.form.email': 'ईमेल पता *',
            'contact.form.phone': 'फ़ोन नंबर',
            'contact.form.subject': 'विषय *',
            'contact.form.message': 'आपका संदेश *',
            'contact.form.submit': 'संदेश भेजें',
            'contact.form.success': 'धन्यवाद! आपका संदेश सफलतापूर्वक भेज दिया गया है।',
            'contact.form.placeholder.name': 'अपना नाम लिखें',
            'contact.form.placeholder.email': 'name@example.com',
            'contact.form.placeholder.phone': '+91 90000 00000',
            'contact.form.placeholder.message': 'अपना संदेश यहाँ लिखें...',
            'contact.form.subject.placeholder': 'कोई विषय चुनें',
            'contact.form.subject.general': 'सामान्य पूछताछ',
            'contact.form.subject.support': 'तकनीकी सहायता',
            'contact.form.subject.partnership': 'भागीदारी',
            'contact.form.subject.feedback': 'सुझाव/प्रतिक्रिया',
            'contact.form.subject.bug': 'बग रिपोर्ट',
            'contact.info.title': 'संपर्क जानकारी',
            'contact.info.address.title': 'पता',
            'contact.info.address.desc': '123 ग्रीन स्ट्रीट<br>इलेक्ट्रॉनिक सिटी, EC 12345<br> बेंगलुरु',
            'contact.info.phone.title': 'फ़ोन',
            'contact.info.phone.hours': 'सोम-शुक्र: सुबह 9 - शाम 6',
            'contact.info.email.title': 'ईमेल',
            'contact.info.hours.title': 'कार्यालय समय',
            'contact.info.hours.weekday': 'सोमवार - शुक्रवार: सुबह 9:00 - शाम 6:00',
            'contact.info.hours.saturday': 'शनिवार: सुबह 10:00 - दोपहर 4:00',
            'contact.info.hours.sunday': 'रविवार: अवकाश',
            'contact.info.follow.title': 'हमें फॉलो करें',
            'contact.info.follow.desc': 'हमारी नवीनतम खबरें, टिप्स और कचरा प्रबंधन की जानकारी प्राप्त करें।',
            'contact.faq.title': 'अक्सर पूछे जाने वाले प्रश्न',
            'contact.faq.q1': 'मैं कैसे शुरू करूँ?',
            'contact.faq.a1': 'होमपेज पर जाएँ, अपना श्रेणी मॉड्यूल चुनें और फॉर्म भरें। आपको तुरंत व्यक्तिगत सुझाव मिलेंगे।',
            'contact.faq.q2': 'क्या मेरा डेटा सुरक्षित है?',
            'contact.faq.a2': 'हाँ, सभी डेटा आपके ब्राउज़र में लोकल ही प्रोसेस होता है। हम आपकी व्यक्तिगत जानकारी संग्रहीत नहीं करते।',
            'contact.faq.q3': 'क्या वेस्टवाइज़ मोबाइल पर चलता है?',
            'contact.faq.a3': 'बिल्कुल! वेस्टवाइज़ पूरी तरह प्रतिक्रियाशील है और सभी उपकरणों पर काम करता है।',
            'contact.faq.q4': 'मुझे अपने कचरे के साथ क्या करना चाहिए?',
            'contact.faq.a4': 'हमारा प्लेटफ़ॉर्म आपके कचरे के प्रकार के आधार पर निर्देश देता है। प्रत्येक मॉड्यूल के परिणाम पृष्ठ का पालन करें।',
            'contact.faq.q5': 'क्या वेस्टवाइज़ का उपयोग करने के लिए शुल्क है?',
            'contact.faq.a5': 'नहीं! वेस्टवाइज़ पूरी तरह निःशुल्क है। हम मानते हैं कि कचरा प्रबंधन सभी के लिए सुलभ होना चाहिए।',
            'contact.faq.q6': 'क्या व्यवसाय वेस्टवाइज़ का उपयोग कर सकते हैं?',
            'contact.faq.a6': 'हाँ! हमारा उद्योगपति मॉड्यूल व्यवसायों और कारखानों के लिए बनाया गया है।',
            'citizen.hero.title': 'नागरिक मॉड्यूल',
            'citizen.hero.subtitle': 'अपने घरेलू कचरे की निगरानी करें और उसे कम करें',
            'citizen.form.title': 'घरेलू कचरा मूल्यांकन',
            'citizen.form.fullName': 'पूर्ण नाम *',
            'citizen.form.placeholder.name': 'अपना नाम दर्ज करें',
            'citizen.form.city': 'शहर *',
            'citizen.form.placeholder.city': 'अपने शहर का नाम लिखें',
            'citizen.form.family': 'परिवार के सदस्य *',
            'citizen.form.placeholder.family': 'परिवार के सदस्यों की संख्या',
            'citizen.form.houseType': 'घर का प्रकार *',
            'citizen.form.houseType.placeholder': 'घर का प्रकार चुनें',
            'citizen.form.houseType.apartment': 'अपार्टमेंट',
            'citizen.form.houseType.independent': 'स्वतंत्र मकान',
            'citizen.form.houseType.villa': 'विला',
            'citizen.form.houseType.townhouse': 'टाउनहाउस',
            'citizen.form.dailyLabel': 'दैनिक कचरा उत्पादन (किलोग्राम)',
            'citizen.form.dailyDesc': 'प्रत्येक श्रेणी के लिए अपना दैनिक कचरा दर्ज करें',
            'citizen.form.wet': 'गीला कचरा *',
            'citizen.form.wetHint': 'भोजन अवशेष, छिलके',
            'citizen.form.dry': 'सूखा कचरा *',
            'citizen.form.dryHint': 'कागज़, गत्ता',
            'citizen.form.plastic': 'प्लास्टिक कचरा *',
            'citizen.form.plasticHint': 'बोतलें, बैग',
            'citizen.form.submit': 'मेरे कचरे का विश्लेषण करें',
            'citizen.results.title': 'आपकी कचरा विश्लेषण रिपोर्ट',
            'citizen.results.name': 'नाम',
            'citizen.results.city': 'शहर',
            'citizen.results.family': 'परिवार का आकार',
            'citizen.results.daily': 'दैनिक कुल',
            'citizen.results.monthly': 'मासिक कुल',
            'citizen.results.yearly': 'वार्षिक कुल',
            'citizen.results.perPerson': 'प्रति व्यक्ति/दिन',
            'citizen.results.kgDay': 'किग्रा/दिन',
            'citizen.results.kgMonth': 'किग्रा/माह',
            'citizen.results.kgYear': 'किग्रा/वर्ष',
            'citizen.results.kgPerPerson': 'किग्रा/व्यक्ति/दिन',
            'citizen.breakdown.title': 'आपका कचरा विभाजन',
            'citizen.breakdown.wet': 'गीला कचरा',
            'citizen.breakdown.dry': 'सूखा कचरा',
            'citizen.breakdown.plastic': 'प्लास्टिक कचरा',
            'citizen.recommend.title': 'कचरा कम करने के तरीके',
            'citizen.recommend.segregation.title': 'सही कचरा पृथक्करण',
            'citizen.recommend.segregation.desc': 'उचित निपटान और पुनर्चक्रण के लिए कचरे को अलग-अलग श्रेणियों में बाँटें।',
            'citizen.recommend.segregation.li1': 'गीले, सूखे और प्लास्टिक कचरे के लिए अलग डिब्बे रखें',
            'citizen.recommend.segregation.li2': 'अपने शहर की कचरा प्रबंधन दिशा-निर्देशों का पालन करें',
            'citizen.recommend.segregation.li3': 'पर्यावरणीय प्रभाव को 50% तक कम करें',
            'citizen.recommend.compost.title': 'गीले कचरे की कंपोस्टिंग',
            'citizen.recommend.compost.desc': 'भोजन के अवशेषों को पोषक कंपोस्ट में बदलें।',
            'citizen.recommend.compost.li1': 'घर पर छोटा कंपोस्ट बिन शुरू करें',
            'citizen.recommend.compost.li2': 'कंपोस्ट को पौधों और बगीचे में इस्तेमाल करें',
            'citizen.recommend.compost.li3': 'लैंडफिल कचरा 30-40% तक घटाएँ',
            'citizen.recommend.recycle.title': 'सूखे कचरे का पुनर्चक्रण',
            'citizen.recommend.recycle.desc': 'कागज़, गत्ता और अन्य सूखी सामग्रियों को पुनर्चक्रित करें।',
            'citizen.recommend.recycle.li1': 'सूखा कचरा पुनर्चक्रण केंद्रों पर जमा करें',
            'citizen.recommend.recycle.li2': 'पुनर्चक्रण योग्य सामग्री से आय अर्जित करें',
            'citizen.recommend.recycle.li3': 'परिपत्र अर्थव्यवस्था को समर्थन दें',
            'citizen.recommend.plastic.title': 'प्लास्टिक उपयोग घटाएँ',
            'citizen.recommend.plastic.desc': 'प्लास्टिक की खपत कम करें और टिकाऊ विकल्प अपनाएँ।',
            'citizen.recommend.plastic.li1': 'पुन: प्रयोज्य बैग, बोतलें और कंटेनर अपनाएँ',
            'citizen.recommend.plastic.li2': 'कम प्लास्टिक पैकेजिंग वाले उत्पाद खरीदें',
            'citizen.recommend.plastic.li3': 'लक्ष्य: प्लास्टिक कचरे में 50% की कमी',
            'citizen.recommend.shopping.title': 'स्मार्ट शॉपिंग आदतें',
            'citizen.recommend.shopping.desc': 'खरीदारी करते समय सजग निर्णय लें ताकि कचरा कम हो।',
            'citizen.recommend.shopping.li1': 'पैकेजिंग कम करने के लिए थोक में खरीदें',
            'citizen.recommend.shopping.li2': 'पर्यावरण-अनुकूल पैकेजिंग वाले उत्पाद चुनें',
            'citizen.recommend.shopping.li3': 'एक बार उपयोग वाली वस्तुओं से बचें',
            'citizen.recommend.community.title': 'समुदाय पहल',
            'citizen.recommend.community.desc': 'समुदाय आधारित कचरा प्रबंधन कार्यक्रमों से जुड़ें।',
            'citizen.recommend.community.li1': 'स्थानीय सफाई अभियानों में भाग लें',
            'citizen.recommend.community.li2': 'पड़ोसियों के साथ कचरा घटाने के टिप्स साझा करें',
            'citizen.recommend.community.li3': 'समुदाय कंपोस्टिंग कार्यक्रमों को समर्थन दें',
            'citizen.tips.title': 'त्वरित इको टिप्स',
            'citizen.tips.tip1': 'भोजन योजना बनाएँ ताकि फूड वेस्ट और खर्च दोनों घटें',
            'citizen.tips.tip2': 'नए कंटेनर खरीदने के बजाय पुराने डिब्बे पुन: उपयोग करें',
            'citizen.tips.tip3': 'फेंकने के बजाय उपयोग की हुई वस्तुएँ दान करें',
            'citizen.tips.tip4': 'कागज़ की खपत घटाने के लिए डिजिटल विकल्प अपनाएँ',
            'citizen.footer': '&copy; 2025 वेस्टवाइज़. सर्वाधिकार सुरक्षित. | घरों को कचरा-स्मार्ट बनाना',
            'farmer.hero.title': 'किसान मॉड्यूल',
            'farmer.hero.subtitle': 'कृषि कचरे का कुशल प्रबंधन करें',
            'farmer.form.title': 'कृषि कचरा आकलन',
            'farmer.form.nameLabel': 'पूरा नाम *',
            'farmer.form.namePlaceholder': 'अपना नाम दर्ज करें',
            'farmer.form.locationLabel': 'स्थान *',
            'farmer.form.locationPlaceholder': 'शहर, राज्य',
            'farmer.form.contactLabel': 'संपर्क नंबर *',
            'farmer.form.contactPlaceholder': '+91 90000 00000',
            'farmer.form.farmingTypeLabel': 'खेती का प्रकार *',
            'farmer.form.farmingTypePlaceholder': 'खेती का प्रकार चुनें',
            'farmer.form.optionCrop': 'फसल खेती',
            'farmer.form.optionLivestock': 'पशुपालन',
            'farmer.form.optionMixed': 'मिश्रित खेती',
            'farmer.form.optionDairy': 'डेयरी खेती',
            'farmer.form.optionPoultry': 'पोल्ट्री खेती',
            'farmer.form.farmAreaLabel': 'खेती का क्षेत्र (एकड़) *',
            'farmer.form.farmAreaPlaceholder': 'खेती क्षेत्र दर्ज करें',
            'farmer.form.cropResidueLabel': 'फसल अवशेष (किग्रा/दिन) *',
            'farmer.form.cropResiduePlaceholder': 'दैनिक फसल अवशेष दर्ज करें',
            'farmer.form.animalWasteLabel': 'पशु अपशिष्ट (किग्रा/दिन) *',
            'farmer.form.animalWastePlaceholder': 'दैनिक पशु अपशिष्ट दर्ज करें',
            'farmer.form.submit': 'कचरा गणना करें और सुझाव पाएँ',
            'farmer.results.title': 'आपके कचरा आकलन के परिणाम',
            'farmer.results.dailyLabel': 'दैनिक कचरा',
            'farmer.results.dailyUnit': 'किग्रा/दिन',
            'farmer.results.monthlyLabel': 'मासिक कचरा',
            'farmer.results.monthlyUnit': 'किग्रा/माह',
            'farmer.results.yearlyLabel': 'वार्षिक कचरा',
            'farmer.results.yearlyUnit': 'किग्रा/वर्ष',
            'farmer.recommendations.title': 'कचरा घटाने के सुझाव',
            'farmer.recommendations.composting.title': 'कंपोस्टिंग कार्यक्रम',
            'farmer.recommendations.composting.description': 'फसल अवशेष और पशु अपशिष्ट को पोषक कंपोस्ट में बदलें।',
            'farmer.recommendations.composting.tip1': 'जैविक कचरे के लिए कंपोस्ट गड्ढे तैयार करें',
            'farmer.recommendations.composting.tip2': 'मिट्टी की सेहत सुधारने व लागत घटाने के लिए कंपोस्ट का उपयोग करें',
            'farmer.recommendations.composting.tip3': 'रासायनिक उर्वरकों में 40-50% तक कमी',
            'farmer.recommendations.biogas.title': 'बायोगैस उत्पादन',
            'farmer.recommendations.biogas.description': 'पशु अपशिष्ट से खाना बनाने और बिजली के लिए बायोगैस बनाएं।',
            'farmer.recommendations.biogas.tip1': 'अपशिष्ट रूपांतरण के लिए बायोगैस डाइजेस्टर लगाएँ',
            'farmer.recommendations.biogas.tip2': 'कचरे को संभालते हुए स्वच्छ ऊर्जा उत्पन्न करें',
            'farmer.recommendations.cropRotation.title': 'फसल चक्र व मल्चिंग',
            'farmer.recommendations.cropRotation.description': 'फसल अवशेष को मल्च और फसल चक्र से प्रभावी ढंग से प्रबंधित करें।',
            'farmer.recommendations.cropRotation.tip1': 'मिट्टी की नमी बनाए रखने के लिए अवशेष को मल्च बनाएं',
            'farmer.recommendations.cropRotation.tip2': 'कीट कम करने के लिए फसल चक्र अपनाएँ',
            'farmer.recommendations.cropRotation.tip3': 'रासायनिक कीटनाशकों की जरूरत 30% तक घटाएँ',
            'farmer.recommendations.vermiculture.title': 'वर्मीकल्चर',
            'farmer.recommendations.vermiculture.description': 'केंचुओं की मदद से कार्बनिक कचरे को वर्मी-कंपोस्ट में बदलें।',
            'farmer.recommendations.vermiculture.tip1': 'पारंपरिक कंपोस्टिंग से तेज अपघटन',
            'farmer.recommendations.vermiculture.tip2': 'जैविक खेती के लिए उच्च गुणवत्ता उर्वरक',
            'farmer.recommendations.vermiculture.tip3': 'वर्मी-कंपोस्ट बेचकर अतिरिक्त आमदनी',
            'farmer.recommendations.sustainable.title': 'सतत खेती प्रथाएँ',
            'farmer.recommendations.sustainable.description': 'कचरा उत्पादन कम करने के लिए इको-फ्रेंडली तरीके अपनाएँ।',
            'farmer.recommendations.sustainable.tip1': 'फसल अवशेष जलाने से बचें ताकि वायु प्रदूषण घटे',
            'farmer.recommendations.sustainable.tip2': 'जल बचत के लिए ड्रिप सिंचाई अपनाएँ',
            'farmer.recommendations.sustainable.tip3': 'प्रिसिजन फार्मिंग तकनीक अपनाएँ',
            'farmer.userInfo.title': 'आपकी जानकारी',
            'farmer.userInfo.nameLabel': 'नाम:',
            'farmer.userInfo.locationLabel': 'स्थान:',
            'farmer.userInfo.contactLabel': 'संपर्क:',
            'farmer.userInfo.farmTypeLabel': 'खेती का प्रकार:',
            'farmer.userInfo.farmAreaLabel': 'खेती का क्षेत्र:',
            'farmer.userInfo.farmAreaUnit': 'एकड़',
            'farmer.footer': '&copy; 2025 वेस्टवाइज़. सर्वाधिकार सुरक्षित. | सतत खेती के लिए डिज़ाइन किया गया',
            'industrial.hero.title': 'उद्योगपति मॉड्यूल',
            'industrial.hero.subtitle': 'औद्योगिक कचरे को ट्रैक और अनुकूलित करें',
            'industrial.form.title': 'औद्योगिक कचरा आकलन',
            'industrial.form.companyLabel': 'कंपनी का नाम *',
            'industrial.form.companyPlaceholder': 'कंपनी का नाम दर्ज करें',
            'industrial.form.industryLabel': 'उद्योग का प्रकार *',
            'industrial.form.industryPlaceholder': 'उद्योग का प्रकार चुनें',
            'industrial.form.industry.food': 'खाद्य प्रसंस्करण',
            'industrial.form.industry.manufacturing': 'मैन्युफैक्चरिंग',
            'industrial.form.industry.textile': 'टेक्सटाइल',
            'industrial.form.industry.chemical': 'केमिकल',
            'industrial.form.industry.metal': 'धातु और इस्पात',
            'industrial.form.industry.pharma': 'फार्मास्यूटिकल',
            'industrial.form.industry.electronics': 'इलेक्ट्रॉनिक्स',
            'industrial.form.industry.construction': 'निर्माण',
            'industrial.form.dailyProductionLabel': 'दैनिक उत्पादन (इकाइयाँ) *',
            'industrial.form.dailyProductionPlaceholder': 'दैनिक उत्पादन दर्ज करें',
            'industrial.form.wasteTypeLabel': 'कचरे का प्रकार *',
            'industrial.form.wasteTypePlaceholder': 'कचरे का प्रकार चुनें',
            'industrial.form.wasteType.solid': 'ठोस कचरा',
            'industrial.form.wasteType.liquid': 'तरल कचरा',
            'industrial.form.wasteType.hazardous': 'खतरनाक कचरा',
            'industrial.form.wasteType.mixed': 'मिश्रित कचरा',
            'industrial.form.wasteType.organic': 'जैविक कचरा',
            'industrial.form.dailyWasteLabel': 'दैनिक कचरा मात्रा (किग्रा) *',
            'industrial.form.dailyWastePlaceholder': 'दैनिक कचरा मात्रा दर्ज करें',
            'industrial.form.submit': 'कचरा रिपोर्ट तैयार करें',
            'industrial.results.title': 'आपकी औद्योगिक कचरा रिपोर्ट',
            'industrial.results.companyLabel': 'कंपनी',
            'industrial.results.industryLabel': 'उद्योग प्रकार',
            'industrial.results.wasteLabel': 'कचरे का प्रकार',
            'industrial.results.daily': 'दैनिक कचरा',
            'industrial.results.monthly': 'मासिक कचरा',
            'industrial.results.yearly': 'वार्षिक कचरा',
            'industrial.results.perUnit': 'प्रति इकाई कचरा',
            'industrial.results.unitLabel': 'किग्रा/निर्मित इकाई',
            'industrial.results.kgDay': 'किग्रा/दिन',
            'industrial.results.kgMonth': 'किग्रा/माह',
            'industrial.results.kgYear': 'किग्रा/वर्ष',
            'industrial.recommendations.title': 'कचरा कमी रणनीतियाँ',
            'industrial.recommendations.segregation.title': 'कचरा पृथक्करण',
            'industrial.recommendations.segregation.description': 'स्रोत पर उचित कचरा पृथक्करण लागू करें।',
            'industrial.recommendations.segregation.tip1': 'खतरनाक और गैर-खतरनाक कचरे को अलग करें',
            'industrial.recommendations.segregation.tip2': 'मूल्यवान सामग्रियों के पुनर्चक्रण व रिकवरी को सक्षम करें',
            'industrial.recommendations.segregation.tip3': 'निपटान लागत को 30-40% तक घटाएँ',
            'industrial.recommendations.recycling.title': 'रीसाइक्लिंग कार्यक्रम',
            'industrial.recommendations.recycling.description': 'व्यापक पुनर्चक्रण पहलों को विकसित करें।',
            'industrial.recommendations.recycling.tip1': 'उत्पादन से धातु, प्लास्टिक और कागज़ का पुनर्चक्रण करें',
            'industrial.recommendations.recycling.tip2': 'पुनर्चक्रित सामग्रियों से राजस्व उत्पन्न करें',
            'industrial.recommendations.recycling.tip3': 'कच्चे माल की खरीद लागत घटाएँ',
            'industrial.recommendations.optimization.title': 'प्रक्रिया अनुकूलन',
            'industrial.recommendations.optimization.description': 'कचरा उत्पादन कम करने के लिए प्रक्रियाओं को अनुकूलित करें।',
            'industrial.recommendations.optimization.tip1': 'उत्पादन वर्कफ़्लो की समीक्षा और सुधार करें',
            'industrial.recommendations.optimization.tip2': 'लीन मैन्युफैक्चरिंग सिद्धांत अपनाएँ',
            'industrial.recommendations.optimization.tip3': 'लक्ष्य: 6 महीनों में 25-35% कचरा कमी',
            'industrial.recommendations.compliance.title': 'अनुपालन और मानक',
            'industrial.recommendations.compliance.description': 'कचरा प्रबंधन नियमों का पालन सुनिश्चित करें।',
            'industrial.recommendations.compliance.tip1': 'ISO 14001 पर्यावरण प्रबंधन मानकों का पालन करें',
            'industrial.recommendations.compliance.tip2': 'कचरा निपटान दस्तावेज़ीकरण बनाए रखें',
            'industrial.recommendations.compliance.tip3': 'नियमित पर्यावरण ऑडिट कराएँ',
            'industrial.recommendations.training.title': 'कर्मचारी प्रशिक्षण',
            'industrial.recommendations.training.description': 'कर्मचारियों को कचरा प्रबंधन की सर्वोत्तम प्रक्रियाएँ सिखाएँ।',
            'industrial.recommendations.training.tip1': 'त्रैमासिक प्रशिक्षण सत्र आयोजित करें',
            'industrial.recommendations.training.tip2': 'पर्यावरणीय जिम्मेदारी पर जागरूकता बढ़ाएँ',
            'industrial.recommendations.training.tip3': 'कचरा घटाने की पहलों को प्रोत्साहन दें',
            'industrial.recommendations.energy.title': 'ऊर्जा पुनर्प्राप्ति',
            'industrial.recommendations.energy.description': 'कचरे से ऊर्जा बनाने के विकल्प तलाशें।',
            'industrial.recommendations.energy.tip1': 'ऊर्जा रिकवरी के साथ दहन विकल्प का मूल्यांकन करें',
            'industrial.recommendations.energy.tip2': 'लैंडफिल पर निर्भरता कम करें',
            'industrial.recommendations.energy.tip3': 'संचालन के लिए अतिरिक्त ऊर्जा उत्पन्न करें',
            'industrial.monthly.title': 'मासिक कचरा वितरण (नमूना)',
            'industrial.monthly.week1': 'सप्ताह 1',
            'industrial.monthly.week2': 'सप्ताह 2',
            'industrial.monthly.week34': 'सप्ताह 3 और 4',
            'industrial.footer': '&copy; 2025 वेस्टवाइज़. सर्वाधिकार सुरक्षित. | सतत उद्योग के लिए डिज़ाइन किया गया'
        }
    };

    const cachedDefaults = new Map();

    function cacheDefaultValue(element, key) {
        if (cachedDefaults.has(key)) {
            return;
        }
        const attr = element.dataset.i18nAttr;
        const type = element.dataset.i18nType;
        let value = '';

        if (attr) {
            value = element.getAttribute(attr) ?? '';
        } else if (type === 'html') {
            value = element.innerHTML;
        } else {
            value = element.textContent ?? '';
        }

        cachedDefaults.set(key, value);
    }

    function updateToggleLabel(lang) {
        const toggle = document.getElementById('langToggle');
        if (!toggle) {
            return;
        }
        const nextLabel = lang === 'en' ? 'HI' : 'EN';
        toggle.innerHTML = `<i class="fas fa-language mr-1"></i> ${nextLabel}`;
    }

    function applyTranslation(lang) {
        const targetLang = translations[lang] ? lang : DEFAULT_LANG;
        document.querySelectorAll('[data-i18n]').forEach((element) => {
            const key = element.getAttribute('data-i18n');
            if (!key) {
                return;
            }

            cacheDefaultValue(element, key);
            const attr = element.dataset.i18nAttr;
            const type = element.dataset.i18nType;
            const defaultValue = cachedDefaults.get(key) ?? '';
            const translation = translations[targetLang]?.[key];
            const valueToApply = targetLang === DEFAULT_LANG || !translation ? defaultValue : translation;

            if (attr) {
                element.setAttribute(attr, valueToApply);
            } else if (type === 'html') {
                element.innerHTML = valueToApply;
            } else {
                element.textContent = valueToApply;
            }
        });

        document.documentElement.lang = targetLang;
        localStorage.setItem(STORAGE_KEY, targetLang);
        updateToggleLabel(targetLang);
    }

    function initToggle() {
        const toggle = document.getElementById('langToggle');
        if (!toggle) {
            return;
        }
        toggle.addEventListener('click', () => {
            const current = localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG;
            const nextLang = current === 'en' ? 'hi' : 'en';
            applyTranslation(nextLang);
        });
    }

    document.addEventListener('DOMContentLoaded', () => {
        const savedLang = localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG;
        applyTranslation(savedLang);
        initToggle();
    });

    window.WasteWiseTranslations = {
        setLanguage: applyTranslation,
        getCurrentLanguage: () => localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG
    };
})();
