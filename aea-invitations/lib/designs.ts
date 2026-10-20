export const studioThemes = [
 {slug:'botanical-editorial',name:'Botanical Editorial',category:'Wedding',tone:'botanical',names:'Clara & Jules',tag:'OLIVE · BOTANICAL',description:'An olive-green cover, botanical artwork and spacious ivory pages, composed like a favourite book.'},
 {slug:'modern-romantic',name:'Modern Romantic',category:'Wedding',tone:'romantic',names:'Elena & Luca',tag:'BLUSH · PHOTOGRAPHIC',description:'Expressive lettering, soft floral photography and blush paper for a contemporary love story.'},
 {slug:'heritage-celebration',name:'Heritage Celebration',category:'Wedding',tone:'heritage',names:'Amara & Zayn',tag:'BURGUNDY · ORNAMENTAL',description:'Rich burgundy, warm gold and ornamental arches for a joyful, elegantly traditional celebration.'},
];
export const designs=[
 {slug:'the-secret-garden',name:'The Secret Garden',category:'Wedding',tone:'garden',names:'Amelia & Oliver',tag:'BOTANICAL · ROMANTIC',description:'A garden in bloom. An Italian afternoon. A love story beautifully unfolding.'},
 {slug:'modern-romance',name:'Modern Romance',category:'Wedding',tone:'rose',names:'Sophia & James',tag:'EDITORIAL · TIMELESS',description:'Beautiful typography, a touch of blush, and room for your story to take centre stage.'},
 {slug:'golden-hour',name:'Golden Hour',category:'Celebration',tone:'gold',names:'An evening to remember',tag:'WARM · CELEBRATORY',description:'Soft golden light and elegant details for a milestone worth gathering for.'},
 {slug:'midnight-vows',name:'Midnight Vows',category:'Wedding',tone:'night',names:'Isabella & Noah',tag:'DRAMATIC · REFINED',description:'Deep ink, delicate gold, and the intimacy of an evening written in the stars.'},
 {slug:'little-wonder',name:'Little Wonder',category:'Celebration',tone:'sage',names:'A little love is on the way',tag:'SOFT · JOYFUL',description:'A gentle welcome for your newest chapter, from baby showers to first birthdays.'},
 {slug:'a-date-to-remember',name:'A Date to Remember',category:'Save the date',tone:'paper',names:'Charlotte & Henry',tag:'MINIMAL · PERSONAL',description:'A little anticipation for a very special day. Put your date in their diaries.'},
 {slug:'everlasting-grace',name:'Everlasting Grace',category:'Wedding',tone:'grace',names:'Younuz & Amelia',tag:'IVORY · GOLD · NIKKAH',description:'An embossed envelope, a date waiting to be revealed, and a celebration framed in ivory and gold.'},
 {slug:'olive-ivory-wedding',name:'Olive & Ivory Wedding',category:'Wedding',tone:'olive',names:'Anna & Alexander',tag:'OLIVE · IVORY · PALACE',description:'The supplied invitation: script lettering, a gold palace illustration, a framed invitation and a joyful wedding timeline.'},
 ...studioThemes,
];
export const previewHref=(slug:string)=>slug==='olive-ivory-wedding'?'/templates/olive-ivory-wedding/index.html':`/invitation/${slug}`;
