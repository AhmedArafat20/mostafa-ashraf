/* ===== الإعدادات / Settings ===== */
const PROFILE_PHOTO = "img/profile.jpg";          // صورتك الشخصية
const PROJECT_COUNT = 51;                          // عدد صور المشاريع
const projectImg = i => `img/projects/${i + 1}.jpg`; // 1.jpg ... 52.jpg

/* ===== النصوص / Content (ar + en) ===== */
const T = {
    ar: {
        n_about: "نبذة", n_exp: "الخبرات", n_skills: "المهارات", n_proj: "الأعمال", n_contact: "تواصل",
        name: "مصطفى أشرف", role: "متخصص تسويق إلكتروني",
        bio: "أطوّر مهاراتي باستمرار، وأثق في قدرتي على ابتكار أفكار لحملات تسويقية لا تُنسى.",
        c_work: "شاهد أعمالي", c_talk: "تواصل معي", s_years: "سنوات خبرة", s_roles: "محطات مهنية", s_ads: "منصات إعلانية",
        edu_t: "بكالوريوس تجارة", edu_d: "جامعة سوهاج", about_t: "من أنا",
        about_d: "مسوّق رقمي من سوهاج، مصر. أعمل بشكل مستقل منذ 2017، وأجمع بين الإعلانات المدفوعة والتحليلات وبناء الخطط التسويقية، وأعمل بكفاءة تحت الضغط وفي فريق.",
        sk1: "الإعلانات المدفوعة", sk2: "الأدوات والتحليل", sk3: "مهارات شخصية", courses_t: "الدورات والشهادات",
        mail: "البريد الإلكتروني", phone: "الهاتف", loc: "الموقع", city: "سوهاج، مصر",
        exp: [["مسوّق رقمي مستقل", "2017 – حتى الآن", "إدارة حملات إعلانية وخطط محتوى لعملاء متنوعين."],
        ["شركة وادي النيل للمواسير", "2022", "مسؤول التسويق."],
        ["شركة الحمد للعمالة المنزلية", "2022", "مسؤول التسويق."],
        ["شركة The Dress للأزياء", "2022", "مسؤول التسويق."],
        ["مدير التسويق، مهرجان عمالقة العالم العربي", "2021", "قيادة الحملة التسويقية للمهرجان."],
        ["مقدّم خدمة، الاتحاد العربي للشباب", "2021", "خدمة وتنظيم فعاليات."],
        ["شركة سياحة", "2019", "عمل ميداني ومكتبي."],
        ["تدريب في مكتب محاسبة", "2019", "عمليات محاسبية."],
        ["بائع في متجر ملابس", "2016", "خدمة العملاء والمبيعات."]],
        s1: ["Facebook Ads", "Instagram Ads", "Twitter Ads", "Google Ads", "TikTok Ads", "Snapchat Ads"],
        s2: ["Google Analytics", "Google Tag Manager", "Search Console", "AdSense", "YouTube", "Blogger", "Word", "Excel", "خطة تسويقية", "تحليل SWOT", "Target Persona", "تقويم المحتوى"],
        s3: ["التسويق عبر السوشيال ميديا", "القيادة والإدارة", "حل المشكلات", "إدارة الوقت", "العمل تحت الضغط", "العمل الجماعي", "تتبع الأداء والتوقعات", "العمليات المحاسبية"],
        cr: ["Mind Shift", "دبلومة التسويق المتكامل", "دبلومة التسويق، د. إيهاب مسلم", "كورس لغة إنجليزية موثق من وزارتي التعليم والخارجية", "تدريب تسويق رقمي من Google", "شهادة من إدراك", "شهادة تقدير من الأمانة العامة للاتحاد العربي للشباب", "شهادة تكريم من مهرجان عمالقة العالم العربي", "شهادة تسويق المحتوى"]
    },
    en: {
        n_about: "About", n_exp: "Experience", n_skills: "Skills", n_proj: "Work", n_contact: "Contact",
        name: "Mostafa Ashraf", role: "Digital Marketing Specialist",
        bio: "I keep building my skills, and I trust my ability to come up with ideas for memorable marketing campaigns.",
        c_work: "View my work", c_talk: "Get in touch", s_years: "Years of experience", s_roles: "Career roles", s_ads: "Ad platforms",
        edu_t: "Bachelor of Commerce", edu_d: "Sohag University", about_t: "Who I am",
        about_d: "A digital marketer from Sohag, Egypt. Freelancing since 2017, I combine paid advertising, analytics and marketing strategy, and I work well under pressure, alone or in a team.",
        sk1: "Paid advertising", sk2: "Tools & analytics", sk3: "Personal skills", courses_t: "Courses & certificates",
        mail: "Email", phone: "Phone", loc: "Location", city: "Sohag, Egypt",
        exp: [["Freelance Digital Marketer", "2017 – Present", "Ad campaigns and content plans for a range of clients."],
        ["Nile Valley Polypropylene Pipes", "2022", "Marketing role."],
        ["Al Hamd Household Labor Company", "2022", "Marketing role."],
        ["The Dress Company for Fashion", "2022", "Marketing role."],
        ["Marketing Director, Giants of the Arab World Festival", "2021", "Led the festival's marketing campaign."],
        ["Service Provider, Arab Youth Union", "2021", "Event service and organization."],
        ["Tourism company", "2019", "Field and office work."],
        ["Accounting office trainee", "2019", "Accounting operations."],
        ["Clothing store sales", "2016", "Customer service and sales."]],
        s1: ["Facebook Ads", "Instagram Ads", "Twitter Ads", "Google Ads", "TikTok Ads", "Snapchat Ads"],
        s2: ["Google Analytics", "Google Tag Manager", "Search Console", "AdSense", "YouTube", "Blogger", "Word", "Excel", "Marketing plan", "SWOT analysis", "Target persona", "Content calendar"],
        s3: ["Social media marketing", "Leadership & management", "Problem solving", "Time management", "Works under pressure", "Teamwork", "Performance tracking & forecasting", "Accounting operations"],
        cr: ["Mind Shift", "Integrated Marketing Diploma", "Marketing Diploma, Dr. Ihab Muslim", "English course certified by the Ministries of Education and Foreign Affairs", "Google digital marketing course", "Edraak certificate", "Certificate of appreciation, Arab Youth Union", "Certificate of honor, Arab World Labor Festival", "Content Marketing certificate"]
    }
};
