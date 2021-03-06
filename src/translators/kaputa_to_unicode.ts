export const kaputaToUnicode = function(text: string) {
    text = text.replace(/@@wY/g, "ත්‍රෛ");
    text = text.replace(/@@X/g, "ශෛ");
    text = text.replace(/@@c/g, "චෛ");
    text = text.replace(/@@j/g, "ජෛ");
    text = text.replace(/@@n/g, "නෛ");
    text = text.replace(/@@k/g, "කෛ");
    text = text.replace(/@@m/g, "මෛ");
    text = text.replace(/@@p/g, "පෛ");
    text = text.replace(/@@q/g, "දෛ");
    text = text.replace(/@@w/g, "තෛ");
    text = text.replace(/@@{/g, "ධෛ");
    text = text.replace(/@@v/g, "වෛ");
    text = text.replace(/@pY_/g, "ප්‍රෞ");
    text = text.replace(/@;&`~/g, "ෂ්‍යෝ");
    text = text.replace(/@C&`~/g, "ඡ්‍යෝ");
    text = text.replace(/@D&`~/g, "ඪ්‍යෝ");
    text = text.replace(/@G&`~/g, "ඝ්‍යෝ");
    text = text.replace(/@K&`~/g, "ඛ්‍යෝ");
    text = text.replace(/@L&`~/g, "ළ්‍යෝ");
    text = text.replace(/@P&`~/g, "ඵ්‍යෝ");
    text = text.replace(/@T&`~/g, "ඨ්‍යෝ");
    text = text.replace(/@X&`~/g, "ශ්‍යෝ");
    text = text.replace(/@]&`~/g, "ක්‍ෂ්‍යෝ");
    text = text.replace(/@b&`~/g, "බ්‍යෝ");
    text = text.replace(/@c&`~/g, "ච්‍යෝ");
    text = text.replace(/@d&`~/g, "ඩ්‍යෝ");
    text = text.replace(/@f&`~/g, "ෆ්‍යෝ");
    text = text.replace(/@g&`~/g, "ග්‍යෝ");
    text = text.replace(/@j&`~/g, "ජ්‍යෝ");
    text = text.replace(/@k&`~/g, "ක්‍යෝ");
    text = text.replace(/@l&`~/g, "ල්‍යෝ");
    text = text.replace(/@m&`~/g, "ම්‍යෝ");
    text = text.replace(/@n&`~/g, "න්‍යෝ");
    text = text.replace(/@p&`~/g, "ප්‍යෝ");
    text = text.replace(/@q&`~/g, "ද්‍යෝ");
    text = text.replace(/@s&`~/g, "ස්‍යෝ");
    text = text.replace(/@t&`~/g, "ට්‍යෝ");
    text = text.replace(/@v&`~/g, "ව්‍යෝ");
    text = text.replace(/@w&`~/g, "ත්‍යෝ");
    text = text.replace(/@x&`~/g, "භ්‍යෝ");
    text = text.replace(/@{&`~/g, "ධ්‍යෝ");
    text = text.replace(/@}&`~/g, "ථ්‍යෝ");
    text = text.replace(/@;&`/g, "ෂ්‍යො");
    text = text.replace(/@X&`/g, "ශ්‍යො");
    text = text.replace(/@K&`/g, "ඛ්‍යො");
    text = text.replace(/@]&`/g, "ක්‍ෂ්‍යො");
    text = text.replace(/@b&`/g, "බ්‍යො");
    text = text.replace(/@c&`/g, "ව්‍යො");
    text = text.replace(/@d&`/g, "ඩ්‍යො");
    text = text.replace(/@f&`/g, "ෆ්‍යො");
    text = text.replace(/@g&`/g, "ග්‍යො");
    text = text.replace(/@j&`/g, "ජ්‍යො");
    text = text.replace(/@k&`/g, "ක්‍යො");
    text = text.replace(/@m&`/g, "ම්‍යො");
    text = text.replace(/@p&`/g, "ප්‍යො");
    text = text.replace(/@q&`/g, "ද්‍යො");
    text = text.replace(/@s&`/g, "ස්‍යො");
    text = text.replace(/@t&`/g, "ට්‍යො");
    text = text.replace(/@v&`/g, "ව්‍යො");
    text = text.replace(/@w&`/g, "ත්‍යො");
    text = text.replace(/@x&`/g, "භ්‍යො");
    text = text.replace(/@{&`/g, "ධ්‍යො");
    text = text.replace(/@}&`/g, "ථ්‍යො");
    text = text.replace(/@;&/g, "ෂ්‍යෙ");
    text = text.replace(/@C&/g, "ඡ්‍යෙ");
    text = text.replace(/@L&/g, "ළ්‍යෙ");
    text = text.replace(/@N&/g, "ණ්‍යෙ");
    text = text.replace(/@c&/g, "ච්‍යෙ");
    text = text.replace(/@l&/g, "ල්‍යෙ");
    text = text.replace(/@n&/g, "න්‍යෙ");
    text = text.replace(/@X&/g, "ශ්‍යෙ");
    text = text.replace(/@K&/g, "ඛ්‍යෙ");
    text = text.replace(/@]&/g, "ක්‍ෂ්‍යෙ");
    text = text.replace(/@b&/g, "බ්‍යෙ");
    text = text.replace(/@d&/g, "ඩ්‍යෙ");
    text = text.replace(/@f&/g, "ෆ්‍යෙ");
    text = text.replace(/@g&/g, "ග්‍යෙ");
    text = text.replace(/@j&/g, "ජ්‍යෙ");
    text = text.replace(/@k&/g, "ක්‍යෙ");
    text = text.replace(/@m&/g, "ම්‍යෙ");
    text = text.replace(/@p&/g, "ප්‍යෙ");
    text = text.replace(/@q&/g, "ද්‍යෙ");
    text = text.replace(/@s&/g, "ස්‍යෙ");
    text = text.replace(/@t&/g, "ට්‍යෙ");
    text = text.replace(/@v&/g, "ව්‍යෙ");
    text = text.replace(/@w&/g, "ත්‍යෙ");
    text = text.replace(/@x&/g, "භ්‍යෙ");
    text = text.replace(/@{&/g, "ධ්‍යෙ");
    text = text.replace(/@}&/g, "ථ්‍යෙ");
    text = text.replace(/@;Y`~/g, "ෂ්‍රෝ");
    text = text.replace(/@GY`~/g, "ඝ්‍රෝ");
    text = text.replace(/@XY`~/g, "ශ්‍රෝ");
    text = text.replace(/@]Y`~/g, "ක්‍ෂ්‍රෝ");
    text = text.replace(/@bY`~/g, "බ්‍රෝ");
    text = text.replace(/@dY`~/g, "ඩ්‍රෝ");
    text = text.replace(/@fY`~/g, "ෆ්‍රෝ");
    text = text.replace(/@gY`~/g, "ග්‍රෝ");
    text = text.replace(/@kY`~/g, "ක්‍රෝ");
    text = text.replace(/@pY`~/g, "ප්‍රෝ");
    text = text.replace(/@qY`~/g, "ද්‍රෝ");
    text = text.replace(/@sY`~/g, "ස්‍රෝ");
    text = text.replace(/@tY`~/g, "ට්‍රෝ");
    text = text.replace(/@wY`~/g, "ත්‍රෝ");
    text = text.replace(/@XY`/g, "ශ්‍රො");
    text = text.replace(/@dY`/g, "ඩ්‍රො");
    text = text.replace(/@fY`/g, "ෆ්‍රො");
    text = text.replace(/@gY`/g, "ග්‍රො");
    text = text.replace(/@kY`/g, "ක්‍රො");
    text = text.replace(/@pY`/g, "ප්‍රො");
    text = text.replace(/@qY`/g, "ද්‍රො");
    text = text.replace(/@sY`/g, "ස්‍රො");
    text = text.replace(/@tY`/g, "ට්‍රො");
    text = text.replace(/@wY`/g, "ත්‍රො");
    text = text.replace(/@XY~/g, "ශ්‍රේ");
    text = text.replace(/@bY\|/g, "බ්‍රේ");
    text = text.replace(/@dY\|/g, "ඩ්‍රේ");
    text = text.replace(/@fY~/g, "ෆ්‍රේ");
    text = text.replace(/@gY~/g, "ග්‍රේ");
    text = text.replace(/@kY~/g, "ක්‍රේ");
    text = text.replace(/@pY~/g, "ප්‍රේ");
    text = text.replace(/@qY~/g, "ද්‍රේ");
    text = text.replace(/@sY~/g, "ස්‍රේ");
    text = text.replace(/@wY~/g, "ත්‍රේ");
    text = text.replace(/@{Y\|/g, "ධ්‍රේ");
    text = text.replace(/@;Y/g, "ෂ්‍රෙ");
    text = text.replace(/@XY/g, "ශ්‍රෙ");
    text = text.replace(/@bY/g, "බ්‍රෙ");
    text = text.replace(/@fY/g, "ෆ්‍රෙ");
    text = text.replace(/@gY/g, "ග්‍රෙ");
    text = text.replace(/@kY/g, "ක්‍රෙ");
    text = text.replace(/@pY/g, "ප්‍රෙ");
    text = text.replace(/@qY/g, "ද්‍රෙ");
    text = text.replace(/@sY/g, "ස්‍රෙ");
    text = text.replace(/@wY/g, "ත්‍රෙ");
    text = text.replace(/@xY/g, "භ්‍රෙ");
    text = text.replace(/@{Y/g, "ධ්‍රෙ");
    text = text.replace(/@;_/g, "ෂෞ");
    text = text.replace(/@C_/g, "ඡෞ");
    text = text.replace(/@X_/g, "ශෞ");
    text = text.replace(/@b_/g, "බෞ");
    text = text.replace(/@c_/g, "චෞ");
    text = text.replace(/@d_/g, "ඩෞ");
    text = text.replace(/@f_/g, "ෆෞ");
    text = text.replace(/@g_/g, "ගෞ");
    text = text.replace(/@j_/g, "ජෞ");
    text = text.replace(/@k_/g, "කෞ");
    text = text.replace(/@l_/g, "ලෞ");
    text = text.replace(/@m_/g, "මෞ");
    text = text.replace(/@n_/g, "නෞ");
    text = text.replace(/@p_/g, "පෞ");
    text = text.replace(/@q_/g, "දෞ");
    text = text.replace(/@r_/g, "රෞ");
    text = text.replace(/@s_/g, "සෞ");
    text = text.replace(/@t_/g, "ටෞ");
    text = text.replace(/@w_/g, "තෞ");
    text = text.replace(/@x_/g, "භෞ");
    text = text.replace(/@z_/g, "ඤෞ");
    text = text.replace(/@;`~/g, "ෂෝ");
    text = text.replace(/@B`~/g, "ඹෝ");
    text = text.replace(/@C`~/g, "ඡෝ");
    text = text.replace(/@D`~/g, "ඪෝ");
    text = text.replace(/@G`~/g, "ඝෝ");
    text = text.replace(/@K`~/g, "ඛෝ");
    text = text.replace(/@L`~/g, "ළෝ");
    text = text.replace(/@M`~/g, "ඟෝ");
    text = text.replace(/@N`~/g, "ණෝ");
    text = text.replace(/@P`~/g, "ඵෝ");
    text = text.replace(/@T`~/g, "ඨෝ");
    text = text.replace(/@V`~/g, "ඬෝ");
    text = text.replace(/@X`~/g, "ශෝ");
    text = text.replace(/@Z`~/g, "ඥෝ");
    text = text.replace(/@\[`~/g, "ඳෝ");
    text = text.replace(/@]`~/g, "ක්‍ෂෝ");
    text = text.replace(/@b`~/g, "බෝ");
    text = text.replace(/@c`~/g, "චෝ");
    text = text.replace(/@d`~/g, "ඩෝ");
    text = text.replace(/@f`~/g, "ෆෝ");
    text = text.replace(/@g`~/g, "ගෝ");
    text = text.replace(/@h`~/g, "හෝ");
    text = text.replace(/@j`~/g, "ජෝ");
    text = text.replace(/@k`~/g, "කෝ");
    text = text.replace(/@l`~/g, "ලෝ");
    text = text.replace(/@m`~/g, "මෝ");
    text = text.replace(/@n`~/g, "නෝ");
    text = text.replace(/@p`~/g, "පෝ");
    text = text.replace(/@q`~/g, "දෝ");
    text = text.replace(/@r`~/g, "රෝ");
    text = text.replace(/@s`~/g, "සෝ");
    text = text.replace(/@t`~/g, "ටෝ");
    text = text.replace(/@v`~/g, "වෝ");
    text = text.replace(/@w`~/g, "තෝ");
    text = text.replace(/@x`~/g, "භෝ");
    text = text.replace(/@y`~/g, "යෝ");
    text = text.replace(/@z`~/g, "ඤෝ");
    text = text.replace(/@{`~/g, "ධෝ");
    text = text.replace(/@}`~/g, "ථෝ");
    text = text.replace(/@;`/g, "ෂො");
    text = text.replace(/@B`/g, "ඹො");
    text = text.replace(/@C`/g, "ඡො");
    text = text.replace(/@D`/g, "ඪො");
    text = text.replace(/@G`/g, "ඝො");
    text = text.replace(/@K`/g, "ඛො");
    text = text.replace(/@L`/g, "ළො");
    text = text.replace(/@M`/g, "ඟො");
    text = text.replace(/@N`/g, "ණො");
    text = text.replace(/@P`/g, "ඵො");
    text = text.replace(/@T`/g, "ඨො");
    text = text.replace(/@V`/g, "ඬො");
    text = text.replace(/@X`/g, "ශො");
    text = text.replace(/@Z`/g, "ඥො");
    text = text.replace(/@\[`/g, "ඳො");
    text = text.replace(/@]`/g, "ක්‍ෂො");
    text = text.replace(/@b`/g, "බො");
    text = text.replace(/@c`/g, "චො");
    text = text.replace(/@d`/g, "ඩො");
    text = text.replace(/@f`/g, "ෆො");
    text = text.replace(/@g`/g, "ගො");
    text = text.replace(/@h`/g, "හො");
    text = text.replace(/@j`/g, "ජො");
    text = text.replace(/@k`/g, "කො");
    text = text.replace(/@l`/g, "ලො");
    text = text.replace(/@m`/g, "මො");
    text = text.replace(/@n`/g, "නො");
    text = text.replace(/@p`/g, "පො");
    text = text.replace(/@q`/g, "දො");
    text = text.replace(/@r`/g, "රො");
    text = text.replace(/@s`/g, "සො");
    text = text.replace(/@t`/g, "ටො");
    text = text.replace(/@v`/g, "වො");
    text = text.replace(/@w`/g, "තො");
    text = text.replace(/@x`/g, "භො");
    text = text.replace(/@y`/g, "යො");
    text = text.replace(/@z`/g, "ඤො");
    text = text.replace(/@{`/g, "ධො");
    text = text.replace(/@}`/g, "ථො");
    text = text.replace(/@;~/g, "ෂේ");
    text = text.replace(/@B\|/g, "ඹේ");
    text = text.replace(/@C~/g, "ඡේ");
    text = text.replace(/@D~/g, "ඪේ");
    text = text.replace(/@G~/g, "ඝේ");
    text = text.replace(/@K\|/g, "ඛේ");
    text = text.replace(/@L~/g, "ළේ");
    text = text.replace(/@M~/g, "ඟේ");
    text = text.replace(/@N~/g, "ණේ");
    text = text.replace(/@P~/g, "ඵේ");
    text = text.replace(/@T~/g, "ඨේ");
    text = text.replace(/@V\|/g, "ඬේ");
    text = text.replace(/@X~/g, "ශේ");
    text = text.replace(/@Z~/g, "ඥේ");
    text = text.replace(/@\[~/g, "ඳේ");
    text = text.replace(/@]~/g, "ක්‍ෂේ");
    text = text.replace(/@b\|/g, "බේ");
    text = text.replace(/@c\|/g, "චේ");
    text = text.replace(/@d\|/g, "ඩේ");
    text = text.replace(/@f~/g, "ෆේ");
    text = text.replace(/@g~/g, "ගේ");
    text = text.replace(/@h~/g, "හේ");
    text = text.replace(/@j~/g, "ජේ");
    text = text.replace(/@k~/g, "කේ");
    text = text.replace(/@l~/g, "ලේ");
    text = text.replace(/@m\|/g, "මේ");
    text = text.replace(/@n~/g, "නේ");
    text = text.replace(/@p~/g, "පේ");
    text = text.replace(/@q~/g, "දේ");
    text = text.replace(/@r~/g, "රේ");
    text = text.replace(/@s~/g, "සේ");
    text = text.replace(/@t\|/g, "ටේ");
    text = text.replace(/@v\|/g, "වේ");
    text = text.replace(/@w~/g, "තේ");
    text = text.replace(/@x~/g, "භේ");
    text = text.replace(/@y~/g, "යේ");
    text = text.replace(/@z~/g, "ඤේ");
    text = text.replace(/@{\|/g, "ධේ");
    text = text.replace(/@}~/g, "ථේ");
    text = text.replace(/@;/g, "ෂෙ");
    text = text.replace(/@B/g, "ඹෙ");
    text = text.replace(/@e/g, "ඓ");
    text = text.replace(/@C/g, "ඡෙ");
    text = text.replace(/@D/g, "ඪෙ");
    text = text.replace(/@G/g, "ඝෙ");
    text = text.replace(/@K/g, "ඛෙ");
    text = text.replace(/@L/g, "ළෙ");
    text = text.replace(/@M/g, "ඟෙ");
    text = text.replace(/@N/g, "ණෙ");
    text = text.replace(/@P/g, "ඵෙ");
    text = text.replace(/@T/g, "ඨෙ");
    text = text.replace(/@V/g, "ඬෙ");
    text = text.replace(/@X/g, "ශෙ");
    text = text.replace(/@Z/g, "ඥෙ");
    text = text.replace(/@\[/g, "ඳෙ");
    text = text.replace(/@]/g, "ක්‍ෂෙ");
    text = text.replace(/@b/g, "බෙ");
    text = text.replace(/@c/g, "චෙ");
    text = text.replace(/@d/g, "ඩෙ");
    text = text.replace(/@f/g, "ෆෙ");
    text = text.replace(/@g/g, "ගෙ");
    text = text.replace(/@h/g, "හෙ");
    text = text.replace(/@j/g, "ජෙ");
    text = text.replace(/@k/g, "කෙ");
    text = text.replace(/@l/g, "ලෙ");
    text = text.replace(/@m/g, "මෙ");
    text = text.replace(/@n/g, "නෙ");
    text = text.replace(/@p/g, "පෙ");
    text = text.replace(/@q/g, "දෙ");
    text = text.replace(/@r/g, "රෙ");
    text = text.replace(/@s/g, "සෙ");
    text = text.replace(/@t/g, "ටෙ");
    text = text.replace(/@v/g, "වෙ");
    text = text.replace(/@w/g, "තෙ");
    text = text.replace(/@x/g, "භෙ");
    text = text.replace(/@y/g, "යෙ");
    text = text.replace(/@z/g, "ඤෙ");
    text = text.replace(/@{/g, "ධෙ");
    text = text.replace(/@}/g, "ථෙ");
    text = text.replace(/;\^\^/g, "ෂෲ");
    text = text.replace(/X\^\^/g, "ශෲ");
    text = text.replace(/b\^\^/g, "බෲ");
    text = text.replace(/d\^\^/g, "ඩෲ");
    text = text.replace(/f\^\^/g, "ෆෲ");
    text = text.replace(/g\^\^/g, "ගෲ");
    text = text.replace(/k\^\^/g, "කෲ");
    text = text.replace(/p\^\^/g, "පෲ");
    text = text.replace(/s\^\^/g, "සෲ");
    text = text.replace(/t\^\^/g, "ටෲ");
    text = text.replace(/w\^\^/g, "තෲ");
    text = text.replace(/x\^\^/g, "භෲ");
    text = text.replace(/{\^\^/g, "ධෲ");
    text = text.replace(/r#/g, "රු");
    text = text.replace(/r\$/g, "රූ");
    text = text.replace(/a`/g, "ආ");
    text = text.replace(/a#/g, "ඇ");
    text = text.replace(/a\$/g, "ඈ");
    text = text.replace(/u_/g, "ඌ");
    text = text.replace(/o_/g, "ඖ");
    text = text.replace(/e~/g, "ඒ");
    text = text.replace(/o\|/g, "ඕ");
    text = text.replace(/;/g, "ෂ");
    text = text.replace(/A/g, "ං");
    text = text.replace(/:/g, "ඃ");
    text = text.replace(/B/g, "ඹ");
    text = text.replace(/C/g, "ඡ");
    text = text.replace(/D/g, "ඪ");
    text = text.replace(/G/g, "ඝ");
    text = text.replace(/I/g, "ඊ");
    text = text.replace(/J/g, "ඣ");
    text = text.replace(/K/g, "ඛ");
    text = text.replace(/L/g, "ළ");
    text = text.replace(/M/g, "ඟ");
    text = text.replace(/N/g, "ණ");
    text = text.replace(/P/g, "ඵ");
    text = text.replace(/T/g, "ඨ");
    text = text.replace(/U/g, "ළු");
    text = text.replace(/V/g, "ඬ");
    text = text.replace(/X/g, "ශ");
    text = text.replace(/Z/g, "ඥ");
    text = text.replace(/\[/g, "ඳ");
    text = text.replace(/]/g, "ක්‍ෂ");
    text = text.replace(/e/g, "එ");
    text = text.replace(/a/g, "අ");
    text = text.replace(/b/g, "බ");
    text = text.replace(/c/g, "ච");
    text = text.replace(/d/g, "ඩ");
    text = text.replace(/e/g, "ඵ");
    text = text.replace(/f/g, "ෆ");
    text = text.replace(/g/g, "ග");
    text = text.replace(/h/g, "හ");
    text = text.replace(/i/g, "ඉ");
    text = text.replace(/j/g, "ජ");
    text = text.replace(/k/g, "ක");
    text = text.replace(/l/g, "ල");
    text = text.replace(/m/g, "ම");
    text = text.replace(/n/g, "න");
    text = text.replace(/o/g, "ඔ");
    text = text.replace(/p/g, "ප");
    text = text.replace(/q/g, "ද");
    text = text.replace(/r/g, "ර");
    text = text.replace(/s/g, "ස");
    text = text.replace(/t/g, "ට");
    text = text.replace(/u/g, "උ");
    text = text.replace(/v/g, "ව");
    text = text.replace(/w/g, "ත");
    text = text.replace(/x/g, "භ");
    text = text.replace(/y/g, "ය");
    text = text.replace(/z/g, "ඤ");
    text = text.replace(/{/g, "ධ");
    text = text.replace(/}/g, "ථ");
    text = text.replace(/QY/g, "YQ");
    text = text.replace(/QW/g, "WQ");
    text = text.replace(/&/g, "්‍ය");
    text = text.replace(/Y/g, "්‍ර");
    text = text.replace(/#/g, "ැ");
    text = text.replace(/\$/g, "ෑ");
    text = text.replace(/@/g, "ෙ");
    text = text.replace(/E/g, "ු");
    text = text.replace(/F/g, "ැ");
    text = text.replace(/H/g, "ෑ");
    text = text.replace(/O/g, "ු");
    text = text.replace(/Q/g, "ි");
    text = text.replace(/R/g, "ූ");
    text = text.replace(/S/g, "ූ");
    text = text.replace(/W/g, "ී");
    text = text.replace(/\^/g, "ෘ");
    text = text.replace(/_/g, "ෟ");
    text = text.replace(/`/g, "ා");
    text = text.replace(/\|/g, "්");
    text = text.replace(/~/g, "්");
    text = text.replace(/\\/g, "්");
    return text
}