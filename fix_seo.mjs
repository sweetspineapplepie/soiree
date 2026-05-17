import fs from 'fs';
import path from 'path';

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(function(file) {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) { 
            results = results.concat(walk(file));
        } else { 
            if (file.endsWith('+page.svelte')) results.push(file);
        }
    });
    return results;
}

const files = walk('./src/routes');

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    
    // Extract title
    let titleMatch = content.match(/<title>([\s\S]*?)<\/title>/);
    let title = titleMatch ? titleMatch[1].trim() : '';

    // Extract description
    let descMatch = content.match(/<meta\s+name=["']description["']\s+content=["']?([\s\S]*?)["']?\s*\/?>/);
    if (!descMatch) {
      // try without quotes around content if it's dynamic
      descMatch = content.match(/<meta\s+name=["']description["']\s+content=({[\s\S]*?})\s*\/?>/);
    }
    let desc = descMatch ? descMatch[1].trim() : '';

    if (!title && !desc) return; // Nothing to replace

    // Determine specific schema type based on path
    let schemas = `[{ type: 'WebSite' }]`;
    if (file.includes('/faq/')) schemas = `[{ type: 'FAQPage' }]`;
    if (file.includes('/details/') || file.includes('/edition-01/')) schemas = `[{ type: 'Product' }]`;
    if (file.includes('/contact/')) schemas = `[{ type: 'Organization' }]`;

    // Ensure Seo import exists
    if (!content.includes(`import Seo from '$lib/seo/Seo.svelte';`)) {
        content = content.replace(/<script lang="ts">/, `<script lang="ts">\n  import Seo from '$lib/seo/Seo.svelte';`);
    }

    // Format props
    let titleProp = title.startsWith('{') ? `title=${title}` : `title="${title}"`;
    let descProp = desc.startsWith('{') ? `description=${desc}` : `description="${desc}"`;

    let seoComponent = `\n<Seo\n  ${titleProp}\n  ${descProp}\n  schemas={${schemas}}\n/>\n`;

    // Replace <svelte:head> block
    let newContent = content.replace(/<svelte:head>[\s\S]*?<\/svelte:head>/, seoComponent);

    if (content !== newContent) {
        fs.writeFileSync(file, newContent, 'utf8');
        console.log('Replaced SEO in', file);
    }
});
