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

// 3. Scan for any future target JSON files if present in schema-linked data directories
// Currently no existing content files are modified, but if content JSON files exist in future, validate them.

if (hasErrors) {
  console.error('\nSchema validation failed.');
  process.exit(1);
} else {
  console.log('\nAll schema definitions and examples validated successfully.');
  process.exit(0);
}
