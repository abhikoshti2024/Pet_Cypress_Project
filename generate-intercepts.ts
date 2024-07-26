import axios from 'axios';
import fs from 'fs';
import path from 'path';

const API_DOCS_URL = 'https://pet-shop.buckhill.com.hr/docs/api-docs.json';
const OUTPUT_FILE = path.join(__dirname, 'cypress', 'support', 'intercepts.ts');

axios.get(API_DOCS_URL)
  .then(response => {
    const paths = response.data.paths;
    const intercepts = Object.keys(paths).map(endpoint => {
      const methods = Object.keys(paths[endpoint]);
      return methods.map(method => {
        const alias = `${method.toUpperCase()}_${endpoint.replace(/[\/{}]/g, '_')}`;
        return `cy.intercept('${method.toUpperCase()}', '${endpoint}').as('${alias}');`;
      }).join('\n');
    }).join('\n\n');

    const fileContent = `// Auto-generated intercepts\n${intercepts}`;
    fs.writeFileSync(OUTPUT_FILE, fileContent, 'utf8');
    console.log(`Intercepts generated and saved to ${OUTPUT_FILE}`);
  })
  .catch(error => {
    console.error('Error fetching API documentation:', error);
  });
