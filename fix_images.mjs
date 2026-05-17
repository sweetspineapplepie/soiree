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
            if (file.endsWith('.svelte')) results.push(file);
        }
    });
    return results;
}

const files = walk('./src');
files.forEach(file => {
    if (file.includes('Hero.svelte')) return; // Skip Hero to keep it eager
    let content = fs.readFileSync(file, 'utf8');
    
    // Add loading="lazy" and decoding="async" to img tags if they don't have it
    let newContent = content.replace(/<img\s/g, (match) => {
        return '<img loading="lazy" decoding="async" ';
    });
    
    // De-duplicate if it was already there (just in case)
    newContent = newContent.replace(/loading="lazy" loading="lazy"/g, 'loading="lazy"');
    newContent = newContent.replace(/decoding="async" decoding="async"/g, 'decoding="async"');

    if (content !== newContent) {
        fs.writeFileSync(file, newContent, 'utf8');
        console.log('Optimized images in', file);
    }
});
