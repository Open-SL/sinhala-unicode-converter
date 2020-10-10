export const thibusToUnicode = function (text: string) {
    text = text.replace(/Ý/g, "À");
    text = text.replace(/μ/g, "µ");
    text = text.replace(/´/g, "ÿ");
    text = text.replace(/ÁÛ/g, "ශ්‍රී");
    text = text.replace(/µµùÜß/g, "ත්‍රෛ");
    text = text.replace(/µûÜß\[/g, "ප්‍රෞ");
    text = text.replace(/µµÁ/g, "ශෛ");
    text = text.replace(/µµë/g, "චෛ");
    text = text.replace(/µµí/g, "ජෛ");
    text = text.replace(/µµõ/g, "නෛ");
    text = text.replace(/µµæ/g, "කෛ");
    text = text.replace(/µµÿ/g, "මෛ");
    text = text.replace(/µµû/g, "පෛ");
    text = text.replace(/µµõ/g, "තෛ");
    text = text.replace(/µµø/g, "ධෛ");
    text = text.replace(/µµ</g, "වෛ");
    text = text.replace(/µÂ\]\$ß/g, "ෂ්‍යෝ");
    text = text.replace(/µí\]\$ß/g, "ඡ්‍යෝ");
    text = text.replace(/µò\]\$ß/g, "ඪ්‍යෝ");
    text = text.replace(/µé\]\$ß/g, "ඝ්‍යෝ");
    text = text.replace(/µç\]\$ß/g, "ඛ්‍යෝ");
    text = text.replace(/µ}\]\$ß/g, "ළ්‍යෝ");
    text = text.replace(/µü\]\$ß/g, "ඵ්‍යෝ");
    text = text.replace(/µñ\]\$ß/g, "ඨ්‍යෝ");
    text = text.replace(/µÁ\]\$ß/g, "ශ්‍යෝ");
    text = text.replace(/µ†\]\$ß/g, "ක්‍ෂ්යෝ");
    text = text.replace(/µý\]\$ß/g, "බ්‍යෝ");
    text = text.replace(/µë\]\$ß/g, "ච්‍යෝ");
    text = text.replace(/µò\]\$ß/g, "ඩ්‍යෝ");
    text = text.replace(/µ\\]\$ß/g, "ෆ්‍යෝ");
    text = text.replace(/µè\]\$ß/g, "ග්‍යෝ");
    text = text.replace(/µí\]\$ß/g, "ජ්‍යෝ");
    text = text.replace(/µæ\]\$ß/g, "ක්‍යෝ");
    text = text.replace(/µÙ\]\$ß/g, "ල්‍යෝ");
    text = text.replace(/µÿ\]\$ß/g, "ම්‍යෝ");
    text = text.replace(/µù\]\$ß/g, "න්‍යෝ");
    text = text.replace(/µû\]\$ß/g, "ප්‍යෝ");
    text = text.replace(/µ÷À\$ß/g, "ද්‍යෝ");
    text = text.replace(/µ&\]\$ß/g, "ස්‍යෝ");
    text = text.replace(/µð\]\$ß/g, "ට්‍යෝ");
    text = text.replace(/µ<\]\$ß/g, "ව්‍යෝ");
    text = text.replace(/µõ\]\$ß/g, "ත්‍යෝ");
    text = text.replace(/µþ\]\$ß/g, "භ්‍යෝ");
    text = text.replace(/µø\]\$ß/g, "ධ්‍යෝ");
    text = text.replace(/µö\]\$ß/g, "ථ්‍යෝ");
    text = text.replace(/µé\]\$/g, "ෂ්‍යො");
    text = text.replace(/µÁ\]\$/g, "ශ්‍යො");
    text = text.replace(/µç\]\$/g, "ඛ්‍යො");
    text = text.replace(/µ†\$/g, "ක්‍ෂ්‍යො");
    text = text.replace(/µý\]\$/g, "බ්‍යො");
    text = text.replace(/µ<\]\$/g, "ව්‍යො");
    text = text.replace(/µò\]\$/g, "ඩ්‍යො");
    text = text.replace(/µ\\\]\$/g, "ෆ්යො");
    text = text.replace(/µè\]\$/g, "ග්‍යො");
    text = text.replace(/µí\]\$/g, "ජ්‍යො");
    text = text.replace(/µæ\]\$/g, "ක්‍යො");
    text = text.replace(/µÿ\]\$/g, "ම්‍යො");
    text = text.replace(/µû\]\$/g, "ප්‍යො");
    text = text.replace(/µ÷À\]\$/g, "ද්‍යො");
    text = text.replace(/µ&\]\$/g, "ස්‍යො");
    text = text.replace(/µð\]\$/g, "ට්‍යො");
    text = text.replace(/µ<\]\$/g, "ව්‍යො");
    text = text.replace(/µõ\]\$/g, "ත්‍යො");
    text = text.replace(/µþ\]\$/g, "භ්‍යො");
    text = text.replace(/µø\]\$/g, "ධ්‍යො");
    text = text.replace(/µö\]\$/g, "ථ්‍යො");
    text = text.replace(/µÂ\]/g, "ෂ්‍යෙ");
    text = text.replace(/µì\]/g, "ඡ්‍යෙ");
    text = text.replace(/µ}\]/g, "ළ්‍යෙ");
    text = text.replace(/µó\]/g, "ණ්‍යෙ");
    text = text.replace(/µë\]/g, "ච්‍යෙ");
    text = text.replace(/µÙ\]/g, "ල්‍යෙ");
    text = text.replace(/µù\]/g, "න්යෙ");
    text = text.replace(/µÁ\]/g, "ශ්‍යෙ");
    text = text.replace(/µç\]/g, "ඛ්‍යෙ");
    text = text.replace(/µ†\]/g, "ක්‍ෂ්‍යෙ");
    text = text.replace(/µý\]/g, "බ්‍යෙ");
    text = text.replace(/µò\]/g, "ඩ්‍යෙ");
    text = text.replace(/µ\\\]/g, "ෆ්‍යෙ");
    text = text.replace(/µè\]/g, "ග්‍යෙ");
    text = text.replace(/µí\]/g, "ජ්‍යෙ");
    text = text.replace(/µæ\]/g, "ක්‍යෙ");
    text = text.replace(/µÿ\]/g, "ම්‍යෙ");
    text = text.replace(/µû\]/g, "ප්‍යෙ");
    text = text.replace(/µ÷À\]/g, "ද්‍යෙ");
    text = text.replace(/µ&\]/g, "ස්‍යෙ");
    text = text.replace(/µð\]/g, "ට්‍යෙ");
    text = text.replace(/µ<\]/g, "ව්‍යෙ");
    text = text.replace(/µõ\]/g, "ත්‍යෙ");
    text = text.replace(/µþ\]/g, "භ්‍යෙ");
    text = text.replace(/µø\]/g, "ධ්‍යෙ");
    text = text.replace(/µö\]/g, "ථ්‍යෙ");
    text = text.replace(/µÂÜ\$ß/g, "ෂ්‍රෝ");
    text = text.replace(/µéÜ\$ß/g, "ඝ්‍රෝ");
    text = text.replace(/µÁÜ\$ß/g, "ශ්‍රෝ");
    text = text.replace(/µ†\$ß/g, "ක්‍ෂ්‍රෝ");
    text = text.replace(/µçÜ\$ß/g, "බ්‍රෝ");
    text = text.replace(/µòÜ\$ß/g, "ඩ්‍රෝ");
    text = text.replace(/µ\\Ü\$ß/g, "ෆ්‍රෝ");
    text = text.replace(/µèÜ\$ß/g, "ග්‍රෝ");
    text = text.replace(/µæÜ\$ß/g, "ක්‍රෝ");
    text = text.replace(/µûÜ\$ß/g, "ප්‍රෝ");
    text = text.replace(/µ÷À\$ß/g, "ද්‍රෝ");
    text = text.replace(/µûÜ\$ß/g, "ස්‍රෝ");
    text = text.replace(/µðÜ\$ß/g, "ට්‍රෝ");
    text = text.replace(/µõÜ\$ß/g, "ත්‍රෝ");
    text = text.replace(/µÁÜ\$/g, "ශ්‍රො");
    text = text.replace(/µòÜ\$/g, "ඩ්‍රො");
    text = text.replace(/µ\\Ü\$/g, "ෆ්‍රො");
    text = text.replace(/µèÜ\$/g, "ග්‍රො");
    text = text.replace(/µæÜ\$/g, "ක්‍රො");
    text = text.replace(/µûÜ\$/g, "ප්‍රො");
    text = text.replace(/µ&Ü\$/g, "ස්‍රො");
    text = text.replace(/µðÜ\$/g, "ට්‍රො");
    text = text.replace(/µõÜ\$/g, "ත්‍රො");
    text = text.replace(/µÁßÜ/g, "ශ්‍රේ");
    text = text.replace(/µçßÜ/g, "බ්‍රේ");
    text = text.replace(/µòßÜ/g, "ඩ්‍රේ");
    text = text.replace(/µ\\ßÜ/g, "ෆ්‍රේ");
    text = text.replace(/µèßÜ/g, "ග්‍රේ");
    text = text.replace(/µæßÜ/g, "ක්‍රේ");
    text = text.replace(/µûßÜ/g, "ප්‍රේ");
    text = text.replace(/µ÷Üß/g, "ද්‍රේ");
    text = text.replace(/µ&ßÜ/g, "ස්‍රේ");
    text = text.replace(/µõßÜ/g, "ත්‍රේ");
    text = text.replace(/µøßÜ/g, "ධ්‍රේ");
    text = text.replace(/µÂßÜ/g, "ෂ්‍රෙ");
    text = text.replace(/µÁßÜ/g, "ශ්‍රෙ");
    text = text.replace(/µýßÜ/g, "බ්‍රෙ");
    text = text.replace(/µ\\Ü/g, "ෆ‍රෙ");
    text = text.replace(/µèÜ/g, "ග‍රෙ");
    text = text.replace(/µæÜ/g, "කරෙ");
    text = text.replace(/µûÜ/g, "පරෙ");
    text = text.replace(/µ÷Ü/g, "දරෙ");
    text = text.replace(/µ&Ü/g, "සරෙ");
    text = text.replace(/µõÜ/g, "තරෙ");
    text = text.replace(/µþÜ/g, "භරෙ");
    text = text.replace(/µøÜ/g, "ධරෙ");
    text = text.replace(/µÂ\[/g, "ෂෞ");
    text = text.replace(/µì\[/g, "ඡෞ");
    text = text.replace(/µÁ\[/g, "ශෞ");
    text = text.replace(/µç\[/g, "බෞ");
    text = text.replace(/µë\[/g, "චෞ");
    text = text.replace(/µò\[/g, "ඩෞ");
    text = text.replace(/µ\\\[/g, "ෆෞ");
    text = text.replace(/µè\[/g, "ගෞ");
    text = text.replace(/µí\[/g, "ජෞ");
    text = text.replace(/µæ\[/g, "කෞ");
    text = text.replace(/µÙ\[/g, "ලෞ");
    text = text.replace(/µÿ\[/g, "මෞ");
    text = text.replace(/µù\[/g, "නෞ");
    text = text.replace(/µû\[/g, "පෞ");
    text = text.replace(/µ÷À\[/g, "දෞ");
    text = text.replace(/µØ\[/g, "රෞ");
    text = text.replace(/µ\&\[/g, "සෞ");
    text = text.replace(/µð\[/g, "ටෞ");
    text = text.replace(/µõ\[/g, "තෞ");
    text = text.replace(/µþ\[/g, "භෞ");
    text = text.replace(/µîÀ\[/g, "ඤෞ");
    text = text.replace(/µÂ\$ß/g, "ෂෝ");
    text = text.replace(/µÖ\$ß/g, "ඹෝ");
    text = text.replace(/µì\$ß/g, "ඡෝ");
    text = text.replace(/µñ\$ß/g, "ඪෝ");
    text = text.replace(/µé\$ß/g, "ඝෝ");
    text = text.replace(/µç\$ß/g, "ඛෝ");
    text = text.replace(/μ\}\$ß/g, "ළෝ");
    text = text.replace(/µÙ\$ß/g, "ලෝ");
    text = text.replace(/µê\$ß/g, "ඟෝ");
    text = text.replace(/µó\$ß/g, "ණෝ");
    text = text.replace(/µö\$ß/g, "ඵෝ");
    text = text.replace(/µñ\$ß/g, "ඨෝ");
    text = text.replace(/µô\$ß/g, "ඬෝ");
    text = text.replace(/µÁ\$ß/g, "ශෝ");
    text = text.replace(/µïÀ\$ß/g, "ඥෝ");
    text = text.replace(/µúÀ\$ß/g, "ඳෝ");
    text = text.replace(/µÂ\$ß/g, "ෂෝ");
    text = text.replace(/µý\$ß/g, "බෝ");
    text = text.replace(/µë\$ß/g, "චෝ");
    text = text.replace(/µò\$ß/g, "ඩෝ");
    text = text.replace(/µ\\\$ß/g, "ෆෝ");
    text = text.replace(/µè\$ß/g, "ගෝ");
    text = text.replace(/µ\{\$ß/g, "හෝ");
    text = text.replace(/µí\$ß/g, "ජෝ");
    text = text.replace(/µæ\$ß/g, "කෝ");
    text = text.replace(/µ\}\$ß/g, "ලෝ");
    text = text.replace(/µÿ\$ß/g, "මෝ");
    text = text.replace(/µù\$ß/g, "නෝ");
    text = text.replace(/µû\$ß/g, "පෝ");
    text = text.replace(/µ÷À\$ß/g, "දෝ");
    text = text.replace(/µØ\$ß/g, "රෝ");
    text = text.replace(/µ&\$ß/g, "සෝ");
    text = text.replace(/µð\$ß/g, "ටෝ");
    text = text.replace(/µ<\$ß/g, "වෝ");
    text = text.replace(/µõ\$ß/g, "තෝ");
    text = text.replace(/µþ\$ß/g, "භෝ");
    text = text.replace(/µ×\$ß/g, "යෝ");
    text = text.replace(/µîÀ\$ß/g, "ඤෝ");
    text = text.replace(/µø\$ß/g, "ධෝ");
    text = text.replace(/µö\$ß/g, "ථෝ");
    text = text.replace(/µÂ\$/g, "ෂො");
    text = text.replace(/µÖ\$/g, "ඹො");
    text = text.replace(/µì\$/g, "ඡො");
    text = text.replace(/µé\$/g, "ඝො");
    text = text.replace(/µç\$/g, "ඛො");
    text = text.replace(/µ\}\$/g, "ළො");
    text = text.replace(/µê\$/g, "ඟො");
    text = text.replace(/µó\$/g, "ණො");
    text = text.replace(/µü\$/g, "ඵො");
    text = text.replace(/µñ\$/g, "ඨො");
    text = text.replace(/µô\$/g, "ඬො");
    text = text.replace(/µÁ\$/g, "ශො");
    text = text.replace(/µïÀ\$/g, "ඥො");
    text = text.replace(/µúÀ\$/g, "ඳො");
    text = text.replace(/µÂ\$/g, "ෂො");
    text = text.replace(/µý\$/g, "බො");
    text = text.replace(/µë\$/g, "චො");
    text = text.replace(/µò\$/g, "ඩො");
    text = text.replace(/µ\\\$/g, "ෆො");
    text = text.replace(/µè\$/g, "ගො");
    text = text.replace(/µ\{\$/g, "හො");
    text = text.replace(/µí\$/g, "ජො");
    text = text.replace(/µæ\$/g, "කො");
    text = text.replace(/µÙ\$/g, "ලො");
    text = text.replace(/µÿ\$/g, "මො");
    text = text.replace(/µù\$/g, "නො");
    text = text.replace(/µû\$/g, "පො");
    text = text.replace(/µ÷À\$/g, "දො");
    text = text.replace(/µØ\$/g, "රො");
    text = text.replace(/µ\&\$/g, "සො");
    text = text.replace(/µð\$/g, "ටො");
    text = text.replace(/µ<\$/g, "වො");
    text = text.replace(/µõ\$/g, "තො");
    text = text.replace(/µþ\$/g, "භො");
    text = text.replace(/µ×\$/g, "යො");
    text = text.replace(/µîÀ\$/g, "ඤො");
    text = text.replace(/µø\$/g, "ධො");
    text = text.replace(/µö\$/g, "ථො");
    text = text.replace(/µÂß/g, "ෂේ");
    text = text.replace(/µ¡/g, "ඹේ");
    text = text.replace(/µ¨/g, "ඡේ");
    text = text.replace(/µìß/g, "ඡේ");
    text = text.replace(/µéß/g, "ඝේ");
    text = text.replace(/µ¤/g, "ඛේ");
    text = text.replace(/µÙß/g, "ලේ");
    text = text.replace(/µ}ß/g, "ළේ");
    text = text.replace(/µêß/g, "ඟේ");
    text = text.replace(/µóß/g, "ණේ");
    text = text.replace(/µüß/g, "ඵේ");
    text = text.replace(/µøß/g, "ඨේ");
    text = text.replace(/µ¹/g, "ඬේ");
    text = text.replace(/µÁß/g, "ශේ");
    text = text.replace(/µïÀß/g, "ඥේ");
    text = text.replace(/µúÀß/g, "ඳේ");
    text = text.replace(/µ†ß/g, "ක්‍ෂේ");
    text = text.replace(/µÅ/g, "බේ");
    text = text.replace(/µ§/g, "චේ");
    text = text.replace(/µ³/g, "ඩේ");
    text = text.replace(/µ\\ß/g, "ෆේ");
    text = text.replace(/µèß/g, "ගේ");
    text = text.replace(/µ\{ß/g, "හේ");
    text = text.replace(/µíß/g, "ජේ");
    text = text.replace(/µÊ/g, "ජේ");
    text = text.replace(/µæß/g, "කේ");
    text = text.replace(/µÈ/g, "මේ");
    text = text.replace(/µùß/g, "නේ");
    text = text.replace(/µûß/g, "පේ");
    text = text.replace(/µ÷Àß/g, "දේ");
    text = text.replace(/µÌ/g, "රේ");
    text = text.replace(/µØß/g, "රේ");
    text = text.replace(/µ\&ß/g, "සේ");
    text = text.replace(/µ>/g, "ටේ");
    text = text.replace(/µÓ/g, "වේ");
    text = text.replace(/µõß/g, "තේ");
    text = text.replace(/µþß/g, "භේ");
    text = text.replace(/µ×ß/g, "යේ");
    text = text.replace(/µîÀß/g, "ඤේ");
    text = text.replace(/µøß/g, "ධේ");
    text = text.replace(/µöß/g, "ථේ");
    text = text.replace(/µíß/g, "ජේ");
    text = text.replace(/wE/g, "ඈ");
    text = text.replace(/à\|/g, "ඈ");
    text = text.replace(/µÂ/g, "ෂෙ");
    text = text.replace(/µÖ/g, "ඹෙ");
    text = text.replace(/µü/g, "ඓ");
    text = text.replace(/µì/g, "ඡෙ");
    text = text.replace(/µé/g, "ඝෙ");
    text = text.replace(/µç/g, "ඛෙ");
    text = text.replace(/µ\}/g, "ළෙ");
    text = text.replace(/µÙ/g, "ලෙ");
    text = text.replace(/µê/g, "ඟෙ");
    text = text.replace(/µó/g, "ණෙ");
    text = text.replace(/µü/g, "ඵෙ");
    text = text.replace(/µñ/g, "ඨෙ");
    text = text.replace(/µô/g, "ඬෙ");
    text = text.replace(/µÁ/g, "ශෙ");
    text = text.replace(/µïÀ/g, "ඥෙ");
    text = text.replace(/µúÀ/g, "ඳෙ");
    text = text.replace(/µ†/g, "ක්‍ෂෙ");
    text = text.replace(/µý/g, "බෙ");
    text = text.replace(/µë/g, "චෙ");
    text = text.replace(/µò/g, "ඩෙ");
    text = text.replace(/µ\\/g, "ෆෙ");
    text = text.replace(/µè/g, "ගෙ");
    text = text.replace(/µþ/g, "හෙ");
    text = text.replace(/µ\{/g, "භෙ");
    text = text.replace(/µí/g, "ජෙ");
    text = text.replace(/µæ/g, "කෙ");
    text = text.replace(/µ´/g, "මෙ");
    text = text.replace(/µù/g, "නෙ");
    text = text.replace(/µû/g, "පෙ");
    text = text.replace(/µ÷À/g, "දෙ");
    text = text.replace(/µØ/g, "රෙ");
    text = text.replace(/µ\&/g, "සෙ");
    text = text.replace(/µð/g, "ටෙ");
    text = text.replace(/µ</g, "වෙ");
    text = text.replace(/µõ/g, "තෙ");
    text = text.replace(/µ×/g, "යෙ");
    text = text.replace(/µîÀ/g, "ඤෙ");
    text = text.replace(/µø/g, "ධෙ");
    text = text.replace(/µö/g, "ථෙ");
    text = text.replace(/úÞÀ/g, "ඳැ");
    text = text.replace(/à`/g, "ඇ");
    text = text.replace(/’/g, "රැ");
    text = text.replace(/Â##/g, "ෂෲ");
    text = text.replace(/Á##/g, "ශෲ");
    text = text.replace(/ç##/g, "බෲ");
    text = text.replace(/ò##/g, "ඩෲ");
    text = text.replace(/\\##/g, "ෆෲ");
    text = text.replace(/è##/g, "ගෲ");
    text = text.replace(/æ##/g, "කෲ");
    text = text.replace(/û##/g, "පෲ");
    text = text.replace(/&##/g, "සෲ");
    text = text.replace(/ð##/g, "ටෲ");
    text = text.replace(/õ##/g, "තෲ");
    text = text.replace(/þ##/g, "භෲ");
    text = text.replace(/ø##/g, "ධෲ");
    text = text.replace(/Ø\|/g, "රූ");
    text = text.replace(/~/g, "රූ");
    text = text.replace(/õÞ/g, "තූ");
    text = text.replace(/ÁÞ/g, "ශූ");
    text = text.replace(/æÞ/g, "කූ");
    text = text.replace(/þÞ/g, "භූ");
    text = text.replace(/èÞ/g, "ගූ");
    text = text.replace(/úÕ/g, "ඳු");
    text = text.replace(/úÔ/g, "ඳු");
    text = text.replace(/÷Õ/g, "දු");
    text = text.replace(/÷¼/g, "දූ");
    text = text.replace(/Ð/g, "ලූ");
    text = text.replace(/&#/g, "ඍ");
    text = text.replace(/ã\[/g, "ඌ");
    text = text.replace(/å\[/g, "ඖ");
    text = text.replace(/ã/g, "උ");
    text = text.replace(/õÀ/g, "තු");
    text = text.replace(/èÀ/g, "ගු");
    text = text.replace(/æÀ/g, "කු");
    text = text.replace(/þÀ/g, "භු");
    text = text.replace(/Ø`/g, "රු");
    text = text.replace(/ú¸/g, "ඳු");
    text = text.replace(/úÔ/g, "ඳු");
    text = text.replace(/÷¸/g, "දු");
    text = text.replace(/÷¼/g, "දූ");
    text = text.replace(/÷Ô/g, "දු");
    text = text.replace(/÷Ü/g, "දු");
    text = text.replace(/Ï-/g, "ලු");
    text = text.replace(/Ï/g, "ලු");
    text = text.replace(/äß/g, "ඒ");
    text = text.replace(/¡/g, "ඕ");
    text = text.replace(/¤/g, "ඛ්");
    text = text.replace(/§/g, "ච්");
    text = text.replace(/¨/g, "ඡ්");
    text = text.replace(/³/g, "ඩ්");
    text = text.replace(/¹/g, "ඬ්");
    text = text.replace(/¿/g, "ධ්");
    text = text.replace(/Å/g, "බ්");
    text = text.replace(/È/g, "ම්");
    text = text.replace(/Ê/g, "ජ්");
    text = text.replace(/Ë/g, "ඹ්");
    text = text.replace(/Ì/g, "ර්");
    text = text.replace(/\^/g, "ඬ්");
    text = text.replace(/Ó/g, "ව්");
    text = text.replace(/>/g, "ට්");
    text = text.replace(/\£/g, "ඛී");
    text = text.replace(/\¦/g, "චී");
    text = text.replace(/ª/g, "ඡී");
    text = text.replace(/«/g, "ඹී");
    text = text.replace(/¯/g, "ටී");
    text = text.replace(/²/g, "ඩී");
    text = text.replace(/¶/g, "ජී");
    text = text.replace(/»/g, "ඬී");
    text = text.replace(/¾/g, "ධී");
    text = text.replace(/Ä/g, "බී");
    text = text.replace(/Ç/g, "මී");
    text = text.replace(/Î/g, "රී");
    text = text.replace(/÷ÀÛ/g, "දී");
    text = text.replace(/â/g, "ඊ");
    text = text.replace(/Ò/g, "වී");
    text = text.replace(/á/g, "ඉ");
    text = text.replace(/¢/g, "ඛි");
    text = text.replace(/\¥/g, "චි");
    text = text.replace(/©/g, "ඡි");
    text = text.replace(/¬/g, "ජි");
    text = text.replace(/®/g, "ටි");
    text = text.replace(/±/g, "ඩි");
    text = text.replace(/½/g, "ධි");
    text = text.replace(/Ã/g, "බි");
    text = text.replace(/Æ/g, "මි");
    text = text.replace(/É/g, "ඹි");
    text = text.replace(/Í/g, "රි");
    text = text.replace(/Ñ/g, "වි");
    text = text.replace(/à\$/g, "ආ");
    text = text.replace(/&/g, "ස");
    text = text.replace(/</g, "ව");
    text = text.replace(/\\/g, "ෆ");
    text = text.replace(/_/g, "ළු");
    text = text.replace(/\{/g, "හ");
    text = text.replace(/\}/g, "ළ");
    text = text.replace(/†/g, "ක්‍ෂ");
    text = text.replace(/´/g, "ම");
    text = text.replace(/Á/g, "ශ");
    text = text.replace(/Â/g, "ෂ");
    text = text.replace(/Ö/g, "ඹ");
    text = text.replace(/×/g, "ය");
    text = text.replace(/Ø/g, "ර");
    text = text.replace(/Ù/g, "ල");
    text = text.replace(/à/g, "අ");
    text = text.replace(/ä/g, "එ");
    text = text.replace(/å/g, "ඔ");
    text = text.replace(/æ/g, "ක");
    text = text.replace(/ç/g, "ඛ");
    text = text.replace(/è/g, "ග");
    text = text.replace(/é/g, "ඝ");
    text = text.replace(/ê/g, "ඟ");
    text = text.replace(/ë/g, "ච");
    text = text.replace(/ì/g, "ඡ");
    text = text.replace(/í/g, "ජ");
    text = text.replace(/ð/g, "ට");
    text = text.replace(/ñ/g, "ඨ");
    text = text.replace(/ò/g, "ඩ");
    text = text.replace(/ó/g, "ණ");
    text = text.replace(/ô/g, "ඬ");
    text = text.replace(/õ/g, "ත");
    text = text.replace(/ö/g, "ථ");
    text = text.replace(/ø/g, "ධ");
    text = text.replace(/ù/g, "න");
    text = text.replace(/û/g, "ප");
    text = text.replace(/ü/g, "එ");
    text = text.replace(/ý/g, "බ");
    text = text.replace(/þ/g, "භ");
    text = text.replace(/ÿ/g, "ම");
    text = text.replace(/÷À/g, "ද");
    text = text.replace(/úÀ/g, "ඳ");
    text = text.replace(/ïÀ/g, "ඥ");
    text = text.replace(/÷º/g, "ද්‍ර");
    text = text.replace(/Ü/g, "‍්‍ර");
    text = text.replace(/º/g, "‍්‍ර");
    text = text.replace(/`/g, "ැ");
    text = text.replace(/\|/g, "ෑ");
    text = text.replace(/Ô/g, "ු");
    text = text.replace(/Õ/g, "ූ");
    text = text.replace(/¸/g, "ු");
    text = text.replace(/¼/g, "ූ");
    text = text.replace(/Ú/g, "ි");
    text = text.replace(/Û/g, "ී");
    text = text.replace(/#/g, "ෘ");
    text = text.replace(/\[/g, "ෟ");
    text = text.replace(/\$/g, "ා");
    text = text.replace(/ß/g, "්");
    text = text.replace(/‘/g, "ං");
    text = text.replace(/\]/g, "්‍ය");
    text = text.replace(/À/g, "ු");
    return text
}