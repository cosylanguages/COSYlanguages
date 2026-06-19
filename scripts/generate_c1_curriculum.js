const fs = require('fs');
const path = require('path');

const languages = [
    { code: 'en', name: 'English', titles: ['Science, Tech & Society', 'Power & Institutions', 'Social Structures', 'Knowledge & Truth', 'Discourse & Argument'] },
    { code: 'fr', name: 'French', titles: ['Science, Tech et Société', 'Pouvoir et Institutions', 'Structures Sociales', 'Connaissance et Vérité', 'Discours et Argumentation'] },
    { code: 'it', name: 'Italian', titles: ['Scienza, Tecnologia e Società', 'Potere e Istituzioni', 'Strutture Sociali', 'Conoscenza e Verità', 'Discorso e Argomentazione'] },
    { code: 'es', name: 'Spanish', titles: ['Ciencia, Tecnología y Sociedad', 'Poder e Instituciones', 'Estructuras Sociales', 'Conocimiento y Verdad', 'Discurso y Argumentación'] },
    { code: 'de', name: 'German', titles: ['Wissenschaft, Technik und Gesellschaft', 'Macht und Institutionen', 'Soziale Strukturen', 'Wissen und Wahrheit', 'Diskurs und Argumentation'] },
    { code: 'ru', name: 'Russian', titles: ['Наука, технологии и общество', 'Власть и институты', 'Социальные структуры', 'Знание и истина', 'Дискурс и аргументация'] },
    { code: 'pt', name: 'Portuguese', titles: ['Ciência, Tecnologia e Sociedade', 'Poder e Instituições', 'Estruturas Sociais', 'Conhecimento e Verdade', 'Discurso e Argumentação'] },
    { code: 'el', name: 'Greek', titles: ['Επιστήμη, Τεχνολογία και Κοινωνία', 'Εξουσία και Θεσμοί', 'Κοινωνικές Δομές', 'Γνώση και Αλήθεια', 'Λόγος και Επιχειρηματολογία'] },
    { code: 'hy', name: 'Armenian', titles: ['Գիտություն, տեխնիկա և հասարակություն', 'Իշխանություն և ինստիտուտներ', 'Սոցիալական կառուցվածքներ', 'Գիտելիք և ճշմարտություն', 'Դիսկուրս և փաստարկում'] },
    { code: 'ka', name: 'Georgian', titles: ['მეცნიერება, ტექნიკა და საზოგადოება', 'ძალაუფლება და ინსტიტუტები', 'სოციალური სტრუქტურები', 'ცოდნა და ჭეშმარიტება', 'დისკურსი და არგუმენტაცია'] },
    { code: 'tt', name: 'Tatar', titles: ['Фән, технология һәм җәмгыять', 'Хакимият һәм институтлар', 'Социаль структуралар', 'Белем һәм хакыйкать', 'Дискурс һәм аргументация'] },
    { code: 'ba', name: 'Bashkir', titles: ['Фән, технология һәм йәмғиәт', 'Хакимиәт һәм институттар', 'Социаль структуралар', 'Белем һәм хаҡлыҡ', 'Дискурс һәм аргументация'] },
    { code: 'br', name: 'Breton', titles: ['Skiant, Teknik ha Kevredigezh', 'Galloud hag Ensavadurioù', 'Frammoù Kevredigezhel', 'Gouiziegezh ha Gwirionez', 'Prezeg hag Arguzennerezh'] }
];

function generateC1(lang) {
    const curriculum = {
        language: lang.code,
        course_type: lang.code === 'el' ? 'exam' : 'general',
        level: 'C1',
        units: lang.titles.map((title, i) => ({
            unit: i + 1,
            title: title,
            lessons: [
                {
                    lesson: 1,
                    type: 'vocab',
                    title: `${title} - Vocabulary I`,
                    duration_minutes: 60,
                    vocabulary: ["C1 terminology"],
                    teacher_notes: `Focus on advanced ${title.toLowerCase()} vocabulary and registers.`
                },
                {
                    lesson: 2,
                    type: 'grammar',
                    title: `${title} - Advanced Grammar`,
                    duration_minutes: 60,
                    grammar: ["Complex structures"],
                    teacher_notes: "Focus on stylistic inversion and advanced connectors."
                },
                {
                    lesson: 3,
                    type: 'spoken',
                    title: `${title} - Seminar & Debate`,
                    duration_minutes: 90,
                    teacher_notes: "Critical discussion and presentation skills."
                }
            ]
        }))
    };
    return curriculum;
}

languages.forEach(lang => {
    const dir = lang.code === 'el' ? 'curriculum/el/exam' : `curriculum/${lang.code}/general`;
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
    const filepath = path.join(dir, 'C1.json');
    const content = JSON.stringify(generateC1(lang), null, 2);
    fs.writeFileSync(filepath, content);
    console.log(`Generated: ${filepath}`);
});
