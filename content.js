export const FILE_SLOTS={safety:'Паспорт безопасности',contract:'Договор',sgr:'СГР',draft:'Предварительный макет',final:'Итоговый макет',product_photo:'Фото продукта',pack_photo:'Фото тары и крышки',pack_dieline:'Вырубка упаковки',carton_dieline:'Вырубка короба',other:'Дополнительные материалы'};
export const IMPORTER_PREFIX='Разработано в Японии. Изготовлено с использованием японских материалов по заказу и под контролем ООО «Азия Лайф». Официальные импортеры и уполномоченные производителем организации в РФ и странах Таможенного союза:';
export const IMPORTERS=[
 {id:'asia-life',number:'1',name:'ООО «Азия Лайф»',text:'1 — ООО «Азия Лайф». 115516, Российская Федерация, г. Москва, Кавказский бульвар, дом 57, строение 2, помещение 319. Тел.: +7 (499) 963-31-35. Сайт: www.yokosun.ru'},
 {id:'vesta',number:'2',name:'ООО «Веста»',text:'2 — ООО «Веста». 680045, Российская Федерация, Хабаровский край, г. о. город Хабаровск, г. Хабаровск, улица Путевая, дом 1А. Тел.: +7 (4212) 61-88-77.'},
];
export const IMPORTER_NOTE='Обозначение импортера указано цифрой рядом с номером партии';
export const QUALITY_FOOTER='Бесплатный телефон Горячей линии Службы заботы о качестве YokoSun: 8 800 555-68-38. Предложения и замечания по качеству пишите на эл.почту: help@yokosun.ru. Уполномоченная организация по принятию претензий в России – ООО «Азия Лайф».';
export const ASSORTMENT='ПОЛНЫЙ АССОРТИМЕНТ СМОТРИТЕ НА САЙТЕ:\nwww.yokosun.ru';
export const ORIGIN='Страна происхождения: Китай.';
export const TRANSLATIONS={
 KZ:{name:'Казахский',footer:'Ресей Федерациясы мен Кеден одағы елдеріндегі өндіруші рұқсат берген ресми импортер және ұйым: LLC «Азия Лайф». 115516, Ресей, Мәскеу, Кавказ бульвары, 57, 2 корпус, 319 бөлме. ҚР аймағында шағымдарды қабылдауға уәкілетті ұйым және ресми дистрибьютор: «CAT Qazaqstan» ЖШС. Мекен-жайы: Қазақстан Республикасы, 050054, Алматы қ., Бұқтырма көш.24/3. Call-орталық +7 (708) 888-3000, вебсайт: www.yokosun.kz, электронды мекен-жайы: info@yokosun.kz.'},
 KG:{name:'Кыргызский',footer:'«Азия Лайф» ЖЧК көзөмөлүндө жана буюртмасы менен япон материалдарын колдонуу менен даярдалган. Импортер в Республику Кыргызстан: ООО «Фэмили Дистрибьюшн», Республика Кыргызстан, г. Бишкек, ул. Асаналиева 13. Тел.: +996 312 351 939. Жарамдуулугу: каптамды карагыла. Импорттоочу жана дооматтарды кабыл алуучу уюм: Кыргыз Республикасы, Бишкек ш. Асаналиев к 13, «Фэмили Дистрибьюшн» ЖЧКсы.'},
 UZ:{name:'Узбекский',footer:'Rossiya Federatsiyasi va Bojxona Ittifoqi mamlakatlarida rasmiy importyor va iste’molchilardan murojaatlarni qabul qiluvchi vakolatli tashkilot: OOO «Aziya Layf», Rossiya Federatsiyasi, Moskva shahri, Kavkazskiy bulvar, 57-uy, 2-bino, 319-xona. Tel.: +7 (499) 963-31-35. Veb-sayt: www.yokosun.ru Oʻzbekiston Respublikasidagi importyor va isteʼmolchilardan shikoyatlarni qabul qiluvchi tashkilot: SP OOO «SUNNY ALLIANCE» MCHJ QK. Yuridik manzil: Oʻzbekiston Respublikasi, Toshkent viloyati, Zangiota tumani, Erkin MFY, Yangiovul ko‘chasi, 16-uy. INN: 311199885. Roʻyxat raqami: 2421802. Telefon: +998 99 575 77 77 E-mail: sunnyalliance7@gmail.com'},
 AZ:{name:'Азербайджанский',footer:'YokoSun FZ-LLC və OOO Asia Life arasındakı müqaviləyə əsasən ООО «Asia Life» tərəfindən sifarişlə istehsal edilmiş və nəzarət olunmuşdur. Azərbaycan Respublikasına idxal edən: “My Grocery” MMC Hüquqi ünvan: Bakı şəhəri, Yasamal rayonu, H.Cavid prospekti, ev 528, mənzil 47 Əlaqə nömrəsi: *8989'},
};
export const DEFAULT_FACTORIES=[{id:'factory-xiamen-sunrise',name:'XIAMEN SUNRISE IMPORT AND EXPORT CO., LTD.',address:'ROOM 2601-2, NO. 66, NINGHAI YILI, JIMEI DISTRICT, XIAMEN, CHINA.',contact:''}];
export const INFO_FIELDS=[
 ['official_name','Наименование товара по СГР'],['barcode','ШК'],['carton_barcode','ШК короба'],['units_per_pack','Вложимость в упаковку'],['packs_per_carton','Вложимость в короб'],['intended_use','Назначение'],['application','Способ применения'],['precautions','Меры предосторожности'],['storage_conditions','Условия хранения'],['composition','Состав'],['shelf_life','Срок годности'],['mass','Масса'],
];
export const COMPETITOR_COLUMNS=[['brand','Бренд'],['url','Ссылка на товар'],['advantages','Конкурентные преимущества'],['packaging','Что пишут на упаковке'],['stores','Где продаются'],['price','Цена']];
export const LAYOUT_SLOTS=['draft','final','pack_dieline','carton_dieline'];
export const VARIANT_CLEAR_FIELDS=['barcode','carton_barcode','article','carton_article','units_per_pack','packs_per_carton','pre_pack'];
const cleanString=(v,max=5000)=>{if(typeof v!=='string'||v.length>max)throw new Error('Проверьте заполненные поля');return v;};
const idList=v=>{if(v===undefined)return [];if(!Array.isArray(v)||v.length>100)throw new Error('Слишком много выбранных значений');return [...new Set(v.map(x=>{if(typeof x!=='string'||!/^[a-zA-Z0-9_-]{1,100}$/.test(x))throw new Error('Некорректное выбранное значение');return x;}))];};
export function normaliseDetails(v={}){
 if(!v||typeof v!=='object'||Array.isArray(v))throw new Error('Некорректная информация по товару');
 const out={factory_ids:idList(v.factory_ids),importer_ids:idList(v.importer_ids),package_marks:idList(v.package_marks),carton_marks:idList(v.carton_marks),translations:{},competitors:[]};
 if(out.importer_ids.some(id=>!IMPORTERS.some(x=>x.id===id)))throw new Error('Выберите импортера из списка');
 const translations=v.translations||{};if(typeof translations!=='object'||Array.isArray(translations))throw new Error('Некорректные переводы');
 for(const code of Object.keys(TRANSLATIONS)){const t=translations[code]||{};out.translations[code]={enabled:t.enabled===true,text:cleanString(t.text??'',30000)};}
 if(v.competitors!==undefined){if(!Array.isArray(v.competitors)||v.competitors.length>50)throw new Error('Не более 50 конкурентов в карточке');out.competitors=v.competitors.map((r,i)=>{if(!r||typeof r!=='object'||Array.isArray(r))throw new Error('Проверьте таблицу конкурентов');const id=cleanString(r.id||'row-'+i,100);if(!/^[a-zA-Z0-9_-]+$/.test(id))throw new Error('Некорректная строка конкурента');const row={id};for(const [k]of COMPETITOR_COLUMNS)row[k]=cleanString(r[k]??'',2000);if(row.url&&!/^https?:\/\/[^\s]+$/i.test(row.url))throw new Error('Ссылка на товар должна начинаться с https:// или http://');return row;});}
 return out;
}
export function importerText(ids=[]){const chosen=IMPORTERS.filter(x=>ids.includes(x.id));return [IMPORTER_PREFIX,...chosen.map(x=>x.text),...(chosen.length>1?[IMPORTER_NOTE]:[]),QUALITY_FOOTER,ASSORTMENT].join('\n\n');}
export function translationText(code,value={}){return [code,value.text?.trim(),TRANSLATIONS[code]?.footer].filter(Boolean).join('\n\n');}
export function factoriesText(product,catalog=[]){const selected=catalog.filter(x=>(product.details?.factory_ids||[]).includes(x.id));const values=selected.map((x,i)=>[selected.length>1?String(i+1)+' —':'',x.name,x.address,x.contact].filter(Boolean).join(' '));if(!values.length&&product.fields?.factory)values.push(product.fields.factory);return [...values,ORIGIN].join('\n\n');}
export function fieldValue(product,key){const f=product.fields||{};const aliases={front_text:'pre_claims',composition:'material',mass:'volume'};return Object.hasOwn(f,key)?f[key]:(f[aliases[key]]||'');}
export function cloneVariantFields(fields={}){const f={...fields};for(const key of VARIANT_CLEAR_FIELDS)delete f[key];for(const slot of LAYOUT_SLOTS)f['doc_'+slot]='required';delete f.approvers;delete f.approval_date;return f;}
export function chosenLayout(files=[]){for(const slot of ['final','draft']){const group=files.filter(f=>f.slot===slot).sort((a,b)=>b.revision-a.revision);const file=group.find(f=>f.is_current)||group[0];if(file)return file;}return null;}
