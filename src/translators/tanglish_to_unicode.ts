export const tanglishToUnicode = function (text: string) {
    text = text.replace(/njau/g, "ஞௌ");
    text = text.replace(/njai/g, "ஞை");
    text = text.replace(/njee/g, "ஞே");
    text = text.replace(/njoo/g, "ஞோ");
    text = text.replace(/njaa/g, "ஞா");
    text = text.replace(/njuu/g, "ஞூ");
    text = text.replace(/njii/g, "ஞீ");
    text = text.replace(/nja/g, "ஞ");
    text = text.replace(/nji/g, "ஞி");
    text = text.replace(/njI/g, "ஞீ");
    text = text.replace(/njA/g, "ஞா");
    text = text.replace(/nje/g, "ஞெ");
    text = text.replace(/njE/g, "ஞே");
    text = text.replace(/njo/g, "ஞொ");
    text = text.replace(/njO/g, "ஞோ");
    text = text.replace(/nju/g, "ஞு");
    text = text.replace(/njU/g, "ஞூ");
    text = text.replace(/nj/g, "ஞ்");
    text = text.replace(/ngau/g, "ஙௌ");
    text = text.replace(/ngai/g, "ஙை");
    text = text.replace(/ngee/g, "ஙே");
    text = text.replace(/ngoo/g, "ஙோ");
    text = text.replace(/ngaa/g, "ஙா");
    text = text.replace(/nguu/g, "ஙூ");
    text = text.replace(/ngii/g, "ஙீ");
    text = text.replace(/nga/g, "ங");
    text = text.replace(/ngi/g, "ஙி");
    text = text.replace(/ngI/g, "ஙீ");
    text = text.replace(/ngA/g, "ஙா");
    text = text.replace(/nge/g, "ஙெ");
    text = text.replace(/ngE/g, "ஙே");
    text = text.replace(/ngo/g, "ஙொ");
    text = text.replace(/ngO/g, "ஙோ");
    text = text.replace(/ngu/g, "ஙு");
    text = text.replace(/ngU/g, "ஙூ");
    text = text.replace(/ng/g, "ங்");
    text = text.replace(/shau/g, "ஷௌ");
    text = text.replace(/shai/g, "ஷை");
    text = text.replace(/shee/g, "ஷே");
    text = text.replace(/shoo/g, "ஷோ");
    text = text.replace(/shaa/g, "ஷா");
    text = text.replace(/shuu/g, "ஷூ");
    text = text.replace(/shii/g, "ஷீ");
    text = text.replace(/sha/g, "ஷ");
    text = text.replace(/shi/g, "ஷி");
    text = text.replace(/shI/g, "ஷீ");
    text = text.replace(/shA/g, "ஷா");
    text = text.replace(/she/g, "ஷெ");
    text = text.replace(/shE/g, "ஷே");
    text = text.replace(/sho/g, "ஷொ");
    text = text.replace(/shO/g, "ஷோ");
    text = text.replace(/shu/g, "ஷு");
    text = text.replace(/shU/g, "ஷூ");
    text = text.replace(/sh/g, "ஷ்");
    text = text.replace(/ nau/g, " நௌ");
    text = text.replace(/ nai/g, " நை");
    text = text.replace(/ nee/g, " நே");
    text = text.replace(/ noo/g, " நோ");
    text = text.replace(/ naa/g, " நா");
    text = text.replace(/ nuu/g, " நூ");
    text = text.replace(/ nii/g, " நீ");
    text = text.replace(/ na/g, " ந");
    text = text.replace(/ ni/g, " நி");
    text = text.replace(/ nI/g, " நீ");
    text = text.replace(/ nA/g, " நா");
    text = text.replace(/ ne/g, " நெ");
    text = text.replace(/ nE/g, " நே");
    text = text.replace(/ no/g, " நொ");
    text = text.replace(/ nO/g, " நோ");
    text = text.replace(/ nu/g, " நு");
    text = text.replace(/ nU/g, " நூ");
    text = text.replace(/ nth/g, " ந்");
    text = text.replace(/-nau/g, "நௌ");
    text = text.replace(/-nai/g, "நை");
    text = text.replace(/-nee/g, "நே");
    text = text.replace(/-noo/g, "நோ");
    text = text.replace(/-naa/g, "நா");
    text = text.replace(/-nuu/g, "நூ");
    text = text.replace(/-nii/g, "நீ");
    text = text.replace(/-na/g, "ந");
    text = text.replace(/-ni/g, "நி");
    text = text.replace(/-nI/g, "நீ");
    text = text.replace(/-nA/g, "நா");
    text = text.replace(/-ne/g, "நெ");
    text = text.replace(/-nE/g, "நே");
    text = text.replace(/-no/g, "நொ");
    text = text.replace(/-nO/g, "நோ");
    text = text.replace(/-nu/g, "நு");
    text = text.replace(/-nU/g, "நூ");
    text = text.replace(/n-au/g, "நௌ");
    text = text.replace(/n-ai/g, "நை");
    text = text.replace(/n-ee/g, "நே");
    text = text.replace(/n-oo/g, "நோ");
    text = text.replace(/n-aa/g, "நா");
    text = text.replace(/n-uu/g, "நூ");
    text = text.replace(/n-ii/g, "நீ");
    text = text.replace(/n-a/g, "ந");
    text = text.replace(/n-i/g, "நி");
    text = text.replace(/n-I/g, "நீ");
    text = text.replace(/n-A/g, "நா");
    text = text.replace(/n-e/g, "நெ");
    text = text.replace(/n-E/g, "நே");
    text = text.replace(/n-o/g, "நொ");
    text = text.replace(/n-O/g, "நோ");
    text = text.replace(/n-u/g, "நு");
    text = text.replace(/n-U/g, "நூ");
    text = text.replace(/wau/g, "நௌ");
    text = text.replace(/wai/g, "நை");
    text = text.replace(/wee/g, "நே");
    text = text.replace(/woo/g, "நோ");
    text = text.replace(/waa/g, "நா");
    text = text.replace(/wuu/g, "நூ");
    text = text.replace(/wii/g, "நீ");
    text = text.replace(/wa/g, "ந");
    text = text.replace(/wi/g, "நி");
    text = text.replace(/wI/g, "நீ");
    text = text.replace(/wA/g, "நா");
    text = text.replace(/we/g, "நெ");
    text = text.replace(/wE/g, "நே");
    text = text.replace(/wo/g, "நொ");
    text = text.replace(/wO/g, "நோ");
    text = text.replace(/wu/g, "நு");
    text = text.replace(/wU/g, "நூ");
    text = text.replace(/ n/g, " ந்");
    text = text.replace(/n-/g, "ந்");
    text = text.replace(/-n/g, "ந்");
    text = text.replace(/w/g, "ந்");
    text = text.replace(/nthau/g, "ந்தௌ");
    text = text.replace(/nthai/g, "ந்தை");
    text = text.replace(/nthee/g, "ந்தே");
    text = text.replace(/nthoo/g, "ந்தோ");
    text = text.replace(/nthaa/g, "ந்தா");
    text = text.replace(/nthuu/g, "ந்தூ");
    text = text.replace(/nthii/g, "ந்தீ");
    text = text.replace(/ntha/g, "ந்த");
    text = text.replace(/nthi/g, "ந்தி");
    text = text.replace(/nthI/g, "ந்தீ");
    text = text.replace(/nthA/g, "ந்தா");
    text = text.replace(/nthe/g, "ந்தெ");
    text = text.replace(/nthE/g, "ந்தே");
    text = text.replace(/ntho/g, "ந்தொ");
    text = text.replace(/nthO/g, "ந்தோ");
    text = text.replace(/nthu/g, "ந்து");
    text = text.replace(/nthU/g, "ந்தூ");
    text = text.replace(/nth/g, "ந்");
    text = text.replace(/dhau/g, "தௌ");
    text = text.replace(/dhai/g, "தை");
    text = text.replace(/dhee/g, "தே");
    text = text.replace(/dhoo/g, "தோ");
    text = text.replace(/dhaa/g, "தா");
    text = text.replace(/dhuu/g, "தூ");
    text = text.replace(/dhii/g, "தீ");
    text = text.replace(/dha/g, "த");
    text = text.replace(/dhi/g, "தி");
    text = text.replace(/dhI/g, "தீ");
    text = text.replace(/dhA/g, "தா");
    text = text.replace(/dhe/g, "தெ");
    text = text.replace(/dhE/g, "தே");
    text = text.replace(/dho/g, "தொ");
    text = text.replace(/dhO/g, "தோ");
    text = text.replace(/dhu/g, "து");
    text = text.replace(/dhU/g, "தூ");
    text = text.replace(/dh/g, "த்");
    text = text.replace(/chau/g, "சௌ");
    text = text.replace(/chai/g, "சை");
    text = text.replace(/chee/g, "சே");
    text = text.replace(/choo/g, "சோ");
    text = text.replace(/chaa/g, "சா");
    text = text.replace(/chuu/g, "சூ");
    text = text.replace(/chii/g, "சீ");
    text = text.replace(/cha/g, "ச");
    text = text.replace(/chi/g, "சி");
    text = text.replace(/chI/g, "சீ");
    text = text.replace(/chA/g, "சா");
    text = text.replace(/che/g, "செ");
    text = text.replace(/chE/g, "சே");
    text = text.replace(/cho/g, "சொ");
    text = text.replace(/chO/g, "சோ");
    text = text.replace(/chu/g, "சு");
    text = text.replace(/chU/g, "சூ");
    text = text.replace(/ch/g, "ச்");
    text = text.replace(/zhau/g, "ழௌ");
    text = text.replace(/zhai/g, "ழை");
    text = text.replace(/zhee/g, "ழே");
    text = text.replace(/zhoo/g, "ழோ");
    text = text.replace(/zhaa/g, "ழா");
    text = text.replace(/zhuu/g, "ழூ");
    text = text.replace(/zhii/g, "ழீ");
    text = text.replace(/zha/g, "ழ");
    text = text.replace(/zhi/g, "ழி");
    text = text.replace(/zhI/g, "ழீ");
    text = text.replace(/zhA/g, "ழா");
    text = text.replace(/zhe/g, "ழெ");
    text = text.replace(/zhE/g, "ழே");
    text = text.replace(/zho/g, "ழொ");
    text = text.replace(/zhO/g, "ழோ");
    text = text.replace(/zhu/g, "ழு");
    text = text.replace(/zhU/g, "ழூ");
    text = text.replace(/zh/g, "ழ்");
    text = text.replace(/zau/g, "ழௌ");
    text = text.replace(/zai/g, "ழை");
    text = text.replace(/zee/g, "ழே");
    text = text.replace(/zoo/g, "ழோ");
    text = text.replace(/zaa/g, "ழா");
    text = text.replace(/zuu/g, "ழூ");
    text = text.replace(/zii/g, "ழீ");
    text = text.replace(/za/g, "ழ");
    text = text.replace(/zi/g, "ழி");
    text = text.replace(/zI/g, "ழீ");
    text = text.replace(/zA/g, "ழா");
    text = text.replace(/ze/g, "ழெ");
    text = text.replace(/zE/g, "ழே");
    text = text.replace(/zo/g, "ழொ");
    text = text.replace(/zO/g, "ழோ");
    text = text.replace(/zu/g, "ழு");
    text = text.replace(/zU/g, "ழூ");
    text = text.replace(/z/g, "ழ்");
    text = text.replace(/jau/g, "ஜௌ");
    text = text.replace(/jai/g, "ஜை");
    text = text.replace(/jee/g, "ஜே");
    text = text.replace(/joo/g, "ஜோ");
    text = text.replace(/jaa/g, "ஜா");
    text = text.replace(/juu/g, "ஜூ");
    text = text.replace(/jii/g, "ஜீ");
    text = text.replace(/ja/g, "ஜ");
    text = text.replace(/ji/g, "ஜி");
    text = text.replace(/jI/g, "ஜீ");
    text = text.replace(/jA/g, "ஜா");
    text = text.replace(/je/g, "ஜெ");
    text = text.replace(/jE/g, "ஜே");
    text = text.replace(/jo/g, "ஜொ");
    text = text.replace(/jO/g, "ஜோ");
    text = text.replace(/ju/g, "ஜு");
    text = text.replace(/jU/g, "ஜூ");
    text = text.replace(/j/g, "ஜ்");
    text = text.replace(/thau/g, "தௌ");
    text = text.replace(/thai/g, "தை");
    text = text.replace(/thee/g, "தே");
    text = text.replace(/thoo/g, "தோ");
    text = text.replace(/thaa/g, "தா");
    text = text.replace(/thuu/g, "தூ");
    text = text.replace(/thii/g, "தீ");
    text = text.replace(/tha/g, "த");
    text = text.replace(/thi/g, "தி");
    text = text.replace(/thI/g, "தீ");
    text = text.replace(/thA/g, "தா");
    text = text.replace(/the/g, "தெ");
    text = text.replace(/thE/g, "தே");
    text = text.replace(/tho/g, "தொ");
    text = text.replace(/thO/g, "தோ");
    text = text.replace(/thu/g, "து");
    text = text.replace(/thU/g, "தூ");
    text = text.replace(/th/g, "த்");
    text = text.replace(/-hau/g, "ஹௌ");
    text = text.replace(/-hai/g, "ஹை");
    text = text.replace(/-hee/g, "ஹே");
    text = text.replace(/-hoo/g, "ஹோ");
    text = text.replace(/-haa/g, "ஹா");
    text = text.replace(/-huu/g, "ஹூ");
    text = text.replace(/-hii/g, "ஹீ");
    text = text.replace(/-ha/g, "ஹ");
    text = text.replace(/-hi/g, "ஹி");
    text = text.replace(/-hI/g, "ஹீ");
    text = text.replace(/-hA/g, "ஹா");
    text = text.replace(/-he/g, "ஹெ");
    text = text.replace(/-hE/g, "ஹே");
    text = text.replace(/-ho/g, "ஹொ");
    text = text.replace(/-hO/g, "ஹோ");
    text = text.replace(/-hu/g, "ஹு");
    text = text.replace(/-hU/g, "ஹூ");
    text = text.replace(/-h/g, "ஹ்");
    text = text.replace(/hau/g, "கௌ");
    text = text.replace(/hai/g, "கை");
    text = text.replace(/hee/g, "கே");
    text = text.replace(/hoo/g, "கோ");
    text = text.replace(/haa/g, "கா");
    text = text.replace(/huu/g, "கூ");
    text = text.replace(/hii/g, "கீ");
    text = text.replace(/ha/g, "க");
    text = text.replace(/hi/g, "கி");
    text = text.replace(/hI/g, "கீ");
    text = text.replace(/hA/g, "கா");
    text = text.replace(/he/g, "கெ");
    text = text.replace(/hE/g, "கே");
    text = text.replace(/ho/g, "கொ");
    text = text.replace(/hO/g, "கோ");
    text = text.replace(/hu/g, "கு");
    text = text.replace(/hU/g, "கூ");
    text = text.replace(/h/g, "க்");
    text = text.replace(/kau/g, "கௌ");
    text = text.replace(/kai/g, "கை");
    text = text.replace(/kee/g, "கே");
    text = text.replace(/koo/g, "கோ");
    text = text.replace(/kaa/g, "கா");
    text = text.replace(/kuu/g, "கூ");
    text = text.replace(/kii/g, "கீ");
    text = text.replace(/ka/g, "க");
    text = text.replace(/ki/g, "கி");
    text = text.replace(/kI/g, "கீ");
    text = text.replace(/kA/g, "கா");
    text = text.replace(/ke/g, "கெ");
    text = text.replace(/kE/g, "கே");
    text = text.replace(/ko/g, "கொ");
    text = text.replace(/kO/g, "கோ");
    text = text.replace(/ku/g, "கு");
    text = text.replace(/kU/g, "கூ");
    text = text.replace(/k/g, "க்");
    text = text.replace(/-sau/g, "ஸௌ");
    text = text.replace(/-sai/g, "ஸை");
    text = text.replace(/-see/g, "ஸே");
    text = text.replace(/-soo/g, "ஸோ");
    text = text.replace(/-saa/g, "ஸா");
    text = text.replace(/-suu/g, "ஸூ");
    text = text.replace(/-sii/g, "ஸீ");
    text = text.replace(/-sa/g, "ஸ");
    text = text.replace(/-si/g, "ஸி");
    text = text.replace(/-sI/g, "ஸீ");
    text = text.replace(/-sA/g, "ஸா");
    text = text.replace(/-se/g, "ஸெ");
    text = text.replace(/-sE/g, "ஸே");
    text = text.replace(/-so/g, "ஸொ");
    text = text.replace(/-sO/g, "ஸோ");
    text = text.replace(/-su/g, "ஸு");
    text = text.replace(/-sU/g, "ஸூ");
    text = text.replace(/-s/g, "ஸ்");
    text = text.replace(/Sau/g, "ஸௌ");
    text = text.replace(/Sai/g, "ஸை");
    text = text.replace(/See/g, "ஸே");
    text = text.replace(/Soo/g, "ஸோ");
    text = text.replace(/Saa/g, "ஸா");
    text = text.replace(/Suu/g, "ஸூ");
    text = text.replace(/Sii/g, "ஸீ");
    text = text.replace(/Sa/g, "ஸ");
    text = text.replace(/Si/g, "ஸி");
    text = text.replace(/SI/g, "ஸீ");
    text = text.replace(/SA/g, "ஸா");
    text = text.replace(/Se/g, "ஸெ");
    text = text.replace(/SE/g, "ஸே");
    text = text.replace(/So/g, "ஸொ");
    text = text.replace(/SO/g, "ஸோ");
    text = text.replace(/Su/g, "ஸு");
    text = text.replace(/SU/g, "ஸூ");
    text = text.replace(/S/g, "ஸ்");
    text = text.replace(/rau/g, "ரௌ");
    text = text.replace(/rai/g, "ரை");
    text = text.replace(/ree/g, "ரே");
    text = text.replace(/roo/g, "ரோ");
    text = text.replace(/raa/g, "ரா");
    text = text.replace(/ruu/g, "ரூ");
    text = text.replace(/rii/g, "ரீ");
    text = text.replace(/ra/g, "ர");
    text = text.replace(/ri/g, "ரி");
    text = text.replace(/rI/g, "ரீ");
    text = text.replace(/rA/g, "ரா");
    text = text.replace(/re/g, "ரெ");
    text = text.replace(/rE/g, "ரே");
    text = text.replace(/ro/g, "ரொ");
    text = text.replace(/rO/g, "ரோ");
    text = text.replace(/ru/g, "ரு");
    text = text.replace(/rU/g, "ரூ");
    text = text.replace(/r/g, "ர்");
    text = text.replace(/Rau/g, "றௌ");
    text = text.replace(/Rai/g, "றை");
    text = text.replace(/Ree/g, "றே");
    text = text.replace(/Roo/g, "றோ");
    text = text.replace(/Raa/g, "றா");
    text = text.replace(/Ruu/g, "றூ");
    text = text.replace(/Rii/g, "றீ");
    text = text.replace(/Ra/g, "ற");
    text = text.replace(/Ri/g, "றி");
    text = text.replace(/RI/g, "றீ");
    text = text.replace(/RA/g, "றா");
    text = text.replace(/Re/g, "றெ");
    text = text.replace(/RE/g, "றே");
    text = text.replace(/Ro/g, "றொ");
    text = text.replace(/RO/g, "றோ");
    text = text.replace(/Ru/g, "று");
    text = text.replace(/RU/g, "றூ");
    text = text.replace(/R/g, "ற்");
    text = text.replace(/tau/g, "டௌ");
    text = text.replace(/tai/g, "டை");
    text = text.replace(/tee/g, "டே");
    text = text.replace(/too/g, "டோ");
    text = text.replace(/taa/g, "டா");
    text = text.replace(/tuu/g, "டூ");
    text = text.replace(/tii/g, "டீ");
    text = text.replace(/ta/g, "ட");
    text = text.replace(/ti/g, "டி");
    text = text.replace(/tI/g, "டீ");
    text = text.replace(/tA/g, "டா");
    text = text.replace(/te/g, "டெ");
    text = text.replace(/tE/g, "டே");
    text = text.replace(/to/g, "டொ");
    text = text.replace(/tO/g, "டோ");
    text = text.replace(/tu/g, "டு");
    text = text.replace(/tU/g, "டூ");
    text = text.replace(/t/g, "ட்");
    text = text.replace(/sau/g, "சௌ");
    text = text.replace(/sai/g, "சை");
    text = text.replace(/see/g, "சே");
    text = text.replace(/soo/g, "சோ");
    text = text.replace(/saa/g, "சா");
    text = text.replace(/suu/g, "சூ");
    text = text.replace(/sii/g, "சீ");
    text = text.replace(/sa/g, "ச");
    text = text.replace(/si/g, "சி");
    text = text.replace(/sI/g, "சீ");
    text = text.replace(/sA/g, "சா");
    text = text.replace(/se/g, "செ");
    text = text.replace(/sE/g, "சே");
    text = text.replace(/so/g, "சொ");
    text = text.replace(/sO/g, "சோ");
    text = text.replace(/su/g, "சு");
    text = text.replace(/sU/g, "சூ");
    text = text.replace(/s/g, "ச்");
    text = text.replace(/pau/g, "பௌ");
    text = text.replace(/pai/g, "பை");
    text = text.replace(/pee/g, "பே");
    text = text.replace(/poo/g, "போ");
    text = text.replace(/paa/g, "பா");
    text = text.replace(/puu/g, "பூ");
    text = text.replace(/pii/g, "பீ");
    text = text.replace(/pa/g, "ப");
    text = text.replace(/pi/g, "பி");
    text = text.replace(/pI/g, "பீ");
    text = text.replace(/pA/g, "பா");
    text = text.replace(/pe/g, "பெ");
    text = text.replace(/pE/g, "பே");
    text = text.replace(/po/g, "பொ");
    text = text.replace(/pO/g, "போ");
    text = text.replace(/pu/g, "பு");
    text = text.replace(/pU/g, "பூ");
    text = text.replace(/p/g, "ப்");
    text = text.replace(/bau/g, "பௌ");
    text = text.replace(/bai/g, "பை");
    text = text.replace(/bee/g, "பே");
    text = text.replace(/boo/g, "போ");
    text = text.replace(/baa/g, "பா");
    text = text.replace(/buu/g, "பூ");
    text = text.replace(/bii/g, "பீ");
    text = text.replace(/ba/g, "ப");
    text = text.replace(/bi/g, "பி");
    text = text.replace(/bI/g, "பீ");
    text = text.replace(/bA/g, "பா");
    text = text.replace(/be/g, "பெ");
    text = text.replace(/bE/g, "பே");
    text = text.replace(/bo/g, "பொ");
    text = text.replace(/bO/g, "போ");
    text = text.replace(/bu/g, "பு");
    text = text.replace(/bU/g, "பூ");
    text = text.replace(/b/g, "ப்");
    text = text.replace(/mau/g, "மௌ");
    text = text.replace(/mai/g, "மை");
    text = text.replace(/mee/g, "மே");
    text = text.replace(/moo/g, "மோ");
    text = text.replace(/maa/g, "மா");
    text = text.replace(/muu/g, "மூ");
    text = text.replace(/mii/g, "மீ");
    text = text.replace(/ma/g, "ம");
    text = text.replace(/mi/g, "மி");
    text = text.replace(/mI/g, "மீ");
    text = text.replace(/mA/g, "மா");
    text = text.replace(/me/g, "மெ");
    text = text.replace(/mE/g, "மே");
    text = text.replace(/mo/g, "மொ");
    text = text.replace(/mO/g, "மோ");
    text = text.replace(/mu/g, "மு");
    text = text.replace(/mU/g, "மூ");
    text = text.replace(/m/g, "ம்");
    text = text.replace(/yau/g, "யௌ");
    text = text.replace(/yai/g, "யை");
    text = text.replace(/yee/g, "யே");
    text = text.replace(/yoo/g, "யோ");
    text = text.replace(/yaa/g, "யா");
    text = text.replace(/yuu/g, "யூ");
    text = text.replace(/yii/g, "யீ");
    text = text.replace(/ya/g, "ய");
    text = text.replace(/yi/g, "யி");
    text = text.replace(/yI/g, "யீ");
    text = text.replace(/yA/g, "யா");
    text = text.replace(/ye/g, "யெ");
    text = text.replace(/yE/g, "யே");
    text = text.replace(/yo/g, "யொ");
    text = text.replace(/yO/g, "யோ");
    text = text.replace(/yu/g, "யு");
    text = text.replace(/yU/g, "யூ");
    text = text.replace(/y/g, "ய்");
    text = text.replace(/dau/g, "டௌ");
    text = text.replace(/dai/g, "டை");
    text = text.replace(/dee/g, "டே");
    text = text.replace(/doo/g, "டோ");
    text = text.replace(/daa/g, "டா");
    text = text.replace(/duu/g, "டூ");
    text = text.replace(/dii/g, "டீ");
    text = text.replace(/da/g, "ட");
    text = text.replace(/di/g, "டி");
    text = text.replace(/dI/g, "டீ");
    text = text.replace(/dA/g, "டா");
    text = text.replace(/de/g, "டெ");
    text = text.replace(/dE/g, "டே");
    text = text.replace(/do/g, "டொ");
    text = text.replace(/dO/g, "டோ");
    text = text.replace(/du/g, "டு");
    text = text.replace(/dU/g, "டூ");
    text = text.replace(/d/g, "ட்");
    text = text.replace(/nau/g, "னௌ");
    text = text.replace(/nai/g, "னை");
    text = text.replace(/nee/g, "னே");
    text = text.replace(/noo/g, "னோ");
    text = text.replace(/naa/g, "னா");
    text = text.replace(/nuu/g, "னூ");
    text = text.replace(/nii/g, "னீ");
    text = text.replace(/na/g, "ன");
    text = text.replace(/ni/g, "னி");
    text = text.replace(/nI/g, "னீ");
    text = text.replace(/nA/g, "னா");
    text = text.replace(/ne/g, "னெ");
    text = text.replace(/nE/g, "னே");
    text = text.replace(/no/g, "னொ");
    text = text.replace(/nO/g, "னோ");
    text = text.replace(/nu/g, "னு");
    text = text.replace(/nU/g, "னூ");
    text = text.replace(/n/g, "ன்");
    text = text.replace(/Nau/g, "ணௌ");
    text = text.replace(/Nai/g, "ணை");
    text = text.replace(/Nee/g, "ணே");
    text = text.replace(/Noo/g, "ணோ");
    text = text.replace(/Naa/g, "ணா");
    text = text.replace(/Nuu/g, "ணூ");
    text = text.replace(/Nii/g, "ணீ");
    text = text.replace(/Na/g, "ண");
    text = text.replace(/Ni/g, "ணி");
    text = text.replace(/NI/g, "ணீ");
    text = text.replace(/NA/g, "ணா");
    text = text.replace(/Ne/g, "ணெ");
    text = text.replace(/NE/g, "ணே");
    text = text.replace(/No/g, "ணொ");
    text = text.replace(/NO/g, "ணோ");
    text = text.replace(/Nu/g, "ணு");
    text = text.replace(/NU/g, "ணூ");
    text = text.replace(/N/g, "ண்");
    text = text.replace(/lau/g, "லௌ");
    text = text.replace(/lai/g, "லை");
    text = text.replace(/lee/g, "லே");
    text = text.replace(/loo/g, "லோ");
    text = text.replace(/laa/g, "லா");
    text = text.replace(/luu/g, "லூ");
    text = text.replace(/lii/g, "லீ");
    text = text.replace(/la/g, "ல");
    text = text.replace(/li/g, "லி");
    text = text.replace(/lI/g, "லீ");
    text = text.replace(/lA/g, "லா");
    text = text.replace(/le/g, "லெ");
    text = text.replace(/lE/g, "லே");
    text = text.replace(/lo/g, "லொ");
    text = text.replace(/lO/g, "லோ");
    text = text.replace(/lu/g, "லு");
    text = text.replace(/lU/g, "லூ");
    text = text.replace(/l/g, "ல்");
    text = text.replace(/Lau/g, "ளௌ");
    text = text.replace(/Lai/g, "ளை");
    text = text.replace(/Lee/g, "ளே");
    text = text.replace(/Loo/g, "ளோ");
    text = text.replace(/Laa/g, "ளா");
    text = text.replace(/Luu/g, "ளூ");
    text = text.replace(/Lii/g, "ளீ");
    text = text.replace(/La/g, "ள");
    text = text.replace(/Li/g, "ளி");
    text = text.replace(/LI/g, "ளீ");
    text = text.replace(/LA/g, "ளா");
    text = text.replace(/Le/g, "ளெ");
    text = text.replace(/LE/g, "ளே");
    text = text.replace(/Lo/g, "ளொ");
    text = text.replace(/LO/g, "ளோ");
    text = text.replace(/Lu/g, "ளு");
    text = text.replace(/LU/g, "ளூ");
    text = text.replace(/L/g, "ள்");
    text = text.replace(/vau/g, "வௌ");
    text = text.replace(/vai/g, "வை");
    text = text.replace(/vee/g, "வே");
    text = text.replace(/voo/g, "வோ");
    text = text.replace(/vaa/g, "வா");
    text = text.replace(/vuu/g, "வூ");
    text = text.replace(/vii/g, "வீ");
    text = text.replace(/va/g, "வ");
    text = text.replace(/vi/g, "வி");
    text = text.replace(/vI/g, "வீ");
    text = text.replace(/vA/g, "வா");
    text = text.replace(/ve/g, "வெ");
    text = text.replace(/vE/g, "வே");
    text = text.replace(/vo/g, "வொ");
    text = text.replace(/vO/g, "வோ");
    text = text.replace(/vu/g, "வு");
    text = text.replace(/vU/g, "வூ");
    text = text.replace(/v/g, "வ்");
    text = text.replace(/gau/g, "கௌ");
    text = text.replace(/gai/g, "கை");
    text = text.replace(/gee/g, "கே");
    text = text.replace(/goo/g, "கோ");
    text = text.replace(/gaa/g, "கா");
    text = text.replace(/guu/g, "கூ");
    text = text.replace(/gii/g, "கீ");
    text = text.replace(/ga/g, "க");
    text = text.replace(/gi/g, "கி");
    text = text.replace(/gI/g, "கீ");
    text = text.replace(/gA/g, "கா");
    text = text.replace(/ge/g, "கெ");
    text = text.replace(/gE/g, "கே");
    text = text.replace(/go/g, "கொ");
    text = text.replace(/gO/g, "கோ");
    text = text.replace(/gu/g, "கு");
    text = text.replace(/gU/g, "கூ");
    text = text.replace(/g/g, "க்");
    text = text.replace(/au/g, "ஔ");
    text = text.replace(/ai/g, "ஐ");
    text = text.replace(/aa/g, "ஆ");
    text = text.replace(/ee/g, "ஏ");
    text = text.replace(/ii/g, "ஈ");
    text = text.replace(/uu/g, "ஊ");
    text = text.replace(/oo/g, "ஓ");
    text = text.replace(/-1000/g, "௲");
    text = text.replace(/-100/g, "௱");
    text = text.replace(/-10/g, "௰");
    text = text.replace(/-1/g, "௧");
    text = text.replace(/-2/g, "௨");
    text = text.replace(/-3/g, "௩");
    text = text.replace(/-4/g, "௪");
    text = text.replace(/-5/g, "௫");
    text = text.replace(/-6/g, "௬");
    text = text.replace(/-7/g, "௭");
    text = text.replace(/-8/g, "௮");
    text = text.replace(/-9/g, "௯");
    text = text.replace(/i/g, "இ");
    text = text.replace(/I/g, "ஈ");
    text = text.replace(/a/g, "அ");
    text = text.replace(/A/g, "ஆ");
    text = text.replace(/e/g, "எ");
    text = text.replace(/E/g, "ஏ");
    text = text.replace(/i/g, "இ");
    text = text.replace(/I/g, "ஈ");
    text = text.replace(/u/g, "உ");
    text = text.replace(/U/g, "ஊ");
    text = text.replace(/o/g, "ஒ");
    text = text.replace(/O/g, "ஓ");
    text = text.replace(/x/g, "௯");
    text = text.replace(/q/g, "ஃ");
    return text
}