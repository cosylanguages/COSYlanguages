const fs = require('fs');
const path = require('path');

const legacyRoot = path.join(__dirname, '..', 'js', 'data');
const families = ['armenian', 'celtic', 'germanic', 'hellenic', 'kartvelian', 'romance', 'slavic', 'turkic'];

const langMap = {
    en: 'germanic/en', fr: 'romance/fr', it: 'romance/it', ru: 'slavic/ru',
    el: 'hellenic/el', es: 'romance/es', de: 'germanic/de', pt: 'romance/pt',
    hy: 'armenian/hy', ka: 'kartvelian/ka', tt: 'turkic/tt', ba: 'turkic/ba',
    br: 'celtic/br'
};

const levels = ['starter', 'elementary', 'intermediate', 'upper-intermediate', 'advanced', 'proficiency'];

function auditLegacy() {
    let report = '# Legacy Data Audit (js/data/)\n\n';
    report += '| Lang | Level | Files Found | Est. Items |\n';
    report += '| --- | --- | --- | --- |\n';

    for (const [lang, relPath] of Object.entries(langMap)) {
        const langDir = path.join(legacyRoot, relPath);
        if (!fs.existsSync(langDir)) {
            report += `| ${lang.toUpperCase()} | ALL | NOT FOUND | 0 |\n`;
            continue;
        }

        levels.forEach(lvl => {
            const lvlDir = path.join(langDir, lvl);
            if (fs.existsSync(lvlDir)) {
                const files = fs.readdirSync(lvlDir).filter(f => f.endsWith('.js'));
                let totalItems = 0;
                files.forEach(f => {
                    const content = fs.readFileSync(path.join(lvlDir, f), 'utf8');
                    const matches = content.match(/\{[\s\S]*?\}/g);
                    if (matches) totalItems += matches.length;
                });
                report += `| ${lang.toUpperCase()} | ${lvl} | ${files.join(', ')} | ${totalItems} |\n`;
            }
        });
    }

    fs.writeFileSync(path.join(__dirname, '..', 'scripts', 'output', 'legacy-data-audit.md'), report);
    console.log('Legacy audit generated in scripts/output/legacy-data-audit.md');
}

auditLegacy();
