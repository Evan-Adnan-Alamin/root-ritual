const fs=require('fs'),p='outputs/index.html';let s=fs.readFileSync(p,'utf8');
const edits=[
['<a href="#faq">FAQ</a>','<a href="#faq">প্রশ্নোত্তর</a>'],
['আপনার ব্যাগ is waiting for a little ritual.','আপনার ব্যাগে এখনো কোনো পণ্য নেই।'],
['placeholder="আপনার ইমেইল ঠিকানা ঠিকানা"','placeholder="আপনার ইমেইল ঠিকানা"'],
['alt="${p.name} product photograph"','alt="${p.name} পণ্যের ছবি"'],
['— Amina R. · যাচাইকৃত ক্রেতা','— আমিনা · যাচাইকৃত ক্রেতা'],['— Nadia K. · যাচাইকৃত ক্রেতা','— নাদিয়া · যাচাইকৃত ক্রেতা'],['— T. S. · যাচাইকৃত ক্রেতা','— তাসনিম · যাচাইকৃত ক্রেতা'],
['textContent=count;document.querySelector(\'#drawerCount\').textContent=count?`(${count})`:','textContent=count.toLocaleString(\'bn-BD\');document.querySelector(\'#drawerCount\').textContent=count?`(${count.toLocaleString(\'bn-BD\')})`:'],
['${q+1} এর মধ্যে ${questions.length}','${questions.length.toLocaleString(\'bn-BD\')}টির মধ্যে ${ (quizStep+1).toLocaleString(\'bn-BD\')} নম্বর প্রশ্ন'],
['আপনার রুটিন · ${quizStep+1} এর মধ্যে ${questions.length}','আপনার রুটিন · ${questions.length.toLocaleString(\'bn-BD\')}টির মধ্যে ${(quizStep+1).toLocaleString(\'bn-BD\')} নম্বর প্রশ্ন'],
['Math.floor(10000+Math.random()*89999).toLocaleString(\'bn-BD\').toLocaleString(\'bn-BD\')','Math.floor(10000+Math.random()*89999).toLocaleString(\'bn-BD\')'],
['</b>. আসল স্টোরে','</b>। আসল স্টোরে'],
['The 5-minute quiz','এক মিনিটের কুইজ']
];for(const [a,b] of edits){if(!s.includes(a))console.log('Not found:',a);s=s.split(a).join(b)}fs.writeFileSync(p,s,'utf8');
