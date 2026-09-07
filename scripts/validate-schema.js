#!/usr/bin/env node

/**
 * Validate JSON schemas in `schema/` and any content JSON files against them.
 */

const fs = require('fs');
const path = require('path');
const Ajv = require('ajv');

const ROOT_DIR = path.resolve(__dirname, '..');
const SCHEMA_DIR = path.join(ROOT_DIR, 'schema');

const ajv = new Ajv({ allErrors: true, strict: false });

if (!fs.existsSync(SCHEMA_DIR)) {
  console.error(`Schema directory missing: ${SCHEMA_DIR}`);
  process.exit(1);
}

const schemaFiles = fs.readdirSync(SCHEMA_DIR).filter(f => f.endsWith('.schema.json'));

if (schemaFiles.length === 0) {
  console.error(`No .schema.json files found in ${SCHEMA_DIR}`);
  process.exit(1);
}

let hasErrors = false;

// 1. Compile all schemas into Ajv
const schemas = [];
for (const file of schemaFiles) {
  const filePath = path.join(SCHEMA_DIR, file);
  try {
    const rawContent = fs.readFileSync(filePath, 'utf8');
    const jsonSchema = JSON.parse(rawContent);
    ajv.addSchema(jsonSchema, file);
    schemas.push({ file, filePath, jsonSchema });
    console.log(`✓ Loaded schema: ${file}`);
  } catch (err) {
    console.error(`✗ Invalid JSON schema structure in ${file}: ${err.message}`);
    hasErrors = true;
  }
}

if (hasErrors) {
  process.exit(1);
}

// 2. Extract and validate embedded examples from schema/README.md if present
const readmePath = path.join(SCHEMA_DIR, 'README.md');
if (fs.existsSync(readmePath)) {
  const readmeContent = fs.readFileSync(readmePath, 'utf8');
  const jsonBlocks = readmeContent.match(/```json\n([\s\S]*?)\n```/g);

  if (jsonBlocks) {
    jsonBlocks.forEach((block, index) => {
      const cleanJson = block.replace(/^```json\n/, '').replace(/\n```$/, '');
      try {
        const parsed = JSON.parse(cleanJson);
        // Determine which schema matches
        let validated = false;

        if (parsed.ccq !== undefined) {
          const validate = ajv.getSchema('ccq.schema.json');
          if (validate && !validate(parsed)) {
            console.error(`✗ README Example #${index + 1} failed ccq.schema.json validation:`);
            console.error(validate.errors);
            hasErrors = true;
          } else {
            console.log(`✓ README Example #${index + 1} validated against ccq.schema.json`);
          }
          validated = true;
        } else if (parsed.infinitive !== undefined) {
          const validate = ajv.getSchema('verb-pattern.schema.json');
          if (validate && !validate(parsed)) {
            console.error(`✗ README Example #${index + 1} failed verb-pattern.schema.json validation:`);
            console.error(validate.errors);
            hasErrors = true;
          } else {
            console.log(`✓ README Example #${index + 1} validated against verb-pattern.schema.json`);
          }
          validated = true;
        } else if (parsed.unitId !== undefined) {
          const validate = ajv.getSchema('lesson-stage.schema.json');
          if (validate && !validate(parsed)) {
            console.error(`✗ README Example #${index + 1} failed lesson-stage.schema.json validation:`);
            console.error(validate.errors);
            hasErrors = true;
          } else {
            console.log(`✓ README Example #${index + 1} validated against lesson-stage.schema.json`);
          }
          validated = true;
        }

        if (!validated) {
          console.warn(`! README Example #${index + 1} did not match a known schema type`);
        }
      } catch (e) {
        console.error(`✗ README Example #${index + 1} failed to parse JSON: ${e.message}`);
        hasErrors = true;
      }
    });
  }
}

// 3. Scan live schema-linked data directories for real content files.
//    Conventions:
//      reference-grammar/<lang>/lessons/*.json      -> lesson-stage.schema.json
//      reference-grammar/<lang>/ccq/*.json          -> ccq.schema.json
//      reference-grammar/<lang>/verb-patterns/*.json -> verb-pattern.schema.json
//    Files are matched by data shape, not path alone, so a lesson-stage
//    file with inline CCQs validates both the outer unit and each inline CCQ.
function walkDir(dir) {
  const results = [];
  if (!fs.existsSync(dir)) return results;
  for (const entry of fs.readdirSync(dir)) {
    const full = path.join(dir, entry);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      results.push(...walkDir(full));
    } else if (entry.endsWith('.json')) {
      results.push(full);
    }
  }
  return results;
}

const lessonStageValidator = ajv.getSchema('lesson-stage.schema.json');
const ccqValidator = ajv.getSchema('ccq.schema.json');
const verbPatternValidator = ajv.getSchema('verb-pattern.schema.json');

let scanned = 0;
for (const dataDir of [path.join(ROOT_DIR, 'reference-grammar')]) {
  const jsonFiles = walkDir(dataDir).filter((f) => {
    const parts = f.split(path.sep);
    return parts.includes('lessons') || parts.includes('ccq') || parts.includes('verb-patterns');
  });
  for (const file of jsonFiles) {
    const rel = path.relative(ROOT_DIR, file);
    let parsed;
    try {
      parsed = JSON.parse(fs.readFileSync(file, 'utf8'));
    } catch (e) {
      console.error(`✗ ${rel}: failed to parse JSON: ${e.message}`);
      hasErrors = true;
      continue;
    }
    scanned++;
    if (parsed.unitId !== undefined) {
      if (lessonStageValidator && !lessonStageValidator(parsed)) {
        console.error(`✗ ${rel}: failed lesson-stage.schema.json`);
        console.error(lessonStageValidator.errors);
        hasErrors = true;
      } else {
        console.log(`✓ ${rel}: validated against lesson-stage.schema.json`);
      }
      const meaningChecks = Array.isArray(parsed.meaningCheck) ? parsed.meaningCheck : [];
      meaningChecks.forEach((mc, i) => {
        if (mc && typeof mc === 'object' && mc.targetItem !== undefined) {
          if (ccqValidator && !ccqValidator(mc)) {
            console.error(`✗ ${rel}: inline meaningCheck[${i}] failed ccq.schema.json`);
            console.error(ccqValidator.errors);
            hasErrors = true;
          }
        }
      });
    } else if (parsed.targetItem !== undefined) {
      if (ccqValidator && !ccqValidator(parsed)) {
        console.error(`✗ ${rel}: failed ccq.schema.json`);
        console.error(ccqValidator.errors);
        hasErrors = true;
      } else {
        console.log(`✓ ${rel}: validated against ccq.schema.json`);
      }
    } else if (parsed.infinitive !== undefined) {
      if (verbPatternValidator && !verbPatternValidator(parsed)) {
        console.error(`✗ ${rel}: failed verb-pattern.schema.json`);
        console.error(verbPatternValidator.errors);
        hasErrors = true;
      } else {
        console.log(`✓ ${rel}: validated against verb-pattern.schema.json`);
      }
    } else {
      console.warn(`! ${rel}: did not match a known schema type, skipped`);
    }
  }
}

if (scanned > 0) {
  console.log(`Scanned ${scanned} live schema-linked data file(s).`);
} else {
  console.log('No live schema-linked data files found yet (conventions: reference-grammar/<lang>/lessons, /ccq, /verb-patterns).');
}

if (hasErrors) {
  console.error('\nSchema validation failed.');
  process.exit(1);
} else {
  console.log('\nAll schema definitions and examples validated successfully.');
  process.exit(0);
}
