export default class Translation {
  constructor(locale) {
    this.translation = {};
    if (locale == "gr") {
      // about section
      this.translation.nastya = "ΑΝΑΣΤΑΣΙΑ ΝΤΡΑΓΚΟΥΝΣΚΑΓΙΑ";
      this.translation.about = `ΣΧΕΤΙΚΑ ΜΕ ΕΜΕΝΑ`;
      this.translation.text = `Είμαι progmatic και κινητοποιημένος προγραμματιστής ιστοσελίδων, οι συστάσεις μου είναι οι εξής`;
      this.translation.guides = [
        {
          name: "Εξαιρετικές επικοινωνιακές δεξιότητες και προληπτική στάση ώστε να διασφαλίζεται η επίτευξη των στόχων του πελάτη.",
        },
        {
          name: "Αγάπη για την εκμάθηση νέων πραγμάτων και την ενημέρωση ώστε να παραμένετε επίκαιροι στον κλάδο.",
        },
        {
          name: "Αυτάρκης πρακτική νοοτροπία σε συνδυασμό με τελειομανία και υπομονή",
        },
      ];
      //skills
      this.translation.prof = `ΕΠΑΓΓΕΛΜΑΤΙΚΈΣ ΔΕΞΙΌΤΗΤΕΣ`;
      //work
      this.translation.work = `ΕΡΓΑΣΙΑΚΉ ΕΜΠΕΙΡΊΑ`;
      this.translation.period=`ΠΕΡΙΟΔΟΣ ΕΡΓΑΣΙΑΣ`
      this.translation.position=`ΘΕΣΗ`
      this.translation.resp=`ΑΡΜΟΔΙΌΤΗΤΕΣ`
      this.translation.cards = [
        {
          period: "Δεκέμβριος 2020 - Απρίλιος 2021 ",
          position: "Web Developer ( Freelance )",
          respons: `<li>Δημιουργία προσαρμοσμένου σχεδίου και λογότυπου για το έργο</li><li>Δημιουργία ιστοσελίδας με HTML, CSS, Javascript</li><li>Φιλοξενία της ιστοσελίδας</li>`,
        },
        {
          period: "June 2021 – current",
          position: "Junior Front End Developer ( Freelance )",
          respons:
            "<li>Διατήρηση των δικτυακών τόπων για τους πελάτες και τις επιχειρήσεις</li><li>Κατασκευή και σχεδιασμός δικτυακών τόπων</li><li>Διασφάλιση της σωστής λειτουργίας των διακομιστών ιστού, του υλικού και του λογισμικού</li><li>Δημιουργία και αναθεώρηση ιστοσελίδων</li>",
        },
      ];
      this.translation.contact=`ΕΠΙΚΟΙΝΩΝΉΣΤΕ ΜΑΖΊ ΜΟΥ`
    } else if (locale == "ru") {
      // about section
      this.translation.nastya = "АНАСТАСИЯ ДРАГУНСКАЯ";
      this.translation.about = `обо мне`;
      this.translation.text = `Я прогматичный и целеустремленный веб-разработчик, мои рекомендации `;
      this.translation.guides = [
        {
          name: "Отличные коммуникативные навыки и проактивное отношение для обеспечения достижения целей клиента",
        },
        {
          name: "Любовь к изучению нового и постоянному обновлению, чтобы оставаться актуальным в отрасли",
        },
        {
          name: "Самодостаточный практический менталитет в сочетании с перфекционизмом и терпением",
        },
      ];
      //skills
      this.translation.prof = `ПРОФЕССИОНАЛЬНЫЕ НАВЫКИ`;
      //work
      this.translation.work = `трудовой опыт`;
      this.translation.period=`период работы`
      this.translation.position=`должность`
      this.translation.resp=`обязанности`
      this.translation.cards = [
        {
          period: "Декабрь 2020 - Aпрель 2021 ",
          position: "Веб-разработчик (фриланс)",
          respons: `<li>Создание индивидуального дизайна и логотипа для проекта</li><li>Создание веб-сайта с помощью HTML, CSS, Javascript</li><li>Размещение веб-сайта</li>`,
        },
        {
          period: "Июнь 2021 - настоящее время",
          position: "Младший Front End разработчик (фриланс)",
          respons:
            "<li>Ведение веб-сайтов для клиентов и бизнеса</li><li>Создание и проектирование веб-сайтов</li><li>Обеспечение точной работы веб-серверов, аппаратного и программного обеспечения</li><li>Создание и редактирование веб-страниц</li>",
        },
      ];
      this.translation.contact=`свяжитесь со мной`
    } else {
      // about section
      this.translation.nastya = "anastasia dragunskaya";
      this.translation.about = `about me`;
      this.translation.text = `A progmatic and dedicated web-develoer, my guidelines are`;
      this.translation.guides = [
        {
          name: "Great communication skills and proactice attitude to ensure the client's goals are being met",
        },
        {
          name: "Love of learning new things and staying up to date to remain relevant in the industry",
        },
        {
          name: "A self-sufficient hands-on mentality paired with perfectionism and patience",
        },
      ];
      //skills
      this.translation.prof = `proffesional skills`;
      //work
      this.translation.work = `work experience`;
      this.translation.period=`work period`
      this.translation.position=`position`
      this.translation.resp=`responsibilities`
      this.translation.cards = [
        {
          period: "December 2020 – April 2021 ",
          position: "Web Developer ( Freelance )",
          respons: `<li>Making of a custom design and logo for the project</li><li>Bulding a website with HTML, CSS, Javascript</li><li>Hosting the website</li>`,
        },
        {
          period: "June 2021 – current",
          position: "Junior Front End Developer ( Freelance )",
          respons:
            "<li>Maintainance of the websites for clients and buisiness</li><li>Building and designing websites</li><li>Ensuring the web servers, hardware and software are operatng accurately</li><li>Generate and revise web pages</li>",
        },
      ];
      this.translation.contact=`contact me`
    }
    return this.translation;
  }
}
