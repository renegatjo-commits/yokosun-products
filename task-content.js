import { INFO_FIELDS, FILE_SLOTS, TRANSLATIONS } from './content.js?v=20261028-tasks1';
export const TASK_ASSIGNEES=[['polina','Полина'],['marina','Марина'],['marsel','Марсель'],['lena','Лена'],['china','Китай'],['alena','Алёна']];
export const TASK_STATUSES={open:'Новая',in_progress:'В работе',done:'Выполнена',cancelled:'Отменена'};
export const TASK_TABS={concept:'Концепция',info:'Информация по товару',competitors:'Конкуренты',files:'Файлы'};
const TASK_CONCEPT_FIELDS=[['title','Название товара'],['brand','Бренд'],['sku','Артикул'],['stage','Этап'],['category','Категория'],['owner','Ответственный'],['purpose','Что это за товар'],['benefit','Наши конкурентные преимущества'],['audience','Целевая аудитория'],['fragrance','Аромат'],['texture','Текстура'],['properties','Другие свойства'],['front_text','Текст лицевой стороны']];
const TASK_INFORMATION_FIELDS=[...INFO_FIELDS,['mark_label','Дополнительная маркировка упаковки'],['mark_carton','Дополнительная маркировка короба'],['packaging_material','Дополнительные сведения об упаковке'],['honest_sign','Честный знак'],['honest_sign_notes','Примечания по нанесению кода'],['dimensions','Размеры продукта'],['mark_container','Маркировка тары'],['mark_lid','Маркировка крышки'],['mark_other','Другие элементы маркировки'],['pre_volume','Предварительный объём или масса'],['pre_pack','Предварительный формат упаковки'],['factories','Заводы на этапе разработки'],['approvers','Согласовали'],['approval_date','Дата согласования'],['changes','Оставшиеся правки']];
export const TASK_TARGETS=Object.fromEntries([
 ['product',{label:'Вся карточка товара',tab:'concept'}],
 ...TASK_CONCEPT_FIELDS.map(([key,label])=>['field:'+key,{label,tab:'concept'}]),
 ...TASK_INFORMATION_FIELDS.map(([key,label])=>['field:'+key,{label,tab:'info'}]),
 ...[['factory_ids','Заводы'],['importer_ids','Импортеры'],['package_marks','Маркировка упаковки'],['carton_marks','Маркировка короба']].map(([key,label])=>['detail:'+key,{label,tab:'info'}]),
 ...Object.entries(TRANSLATIONS).map(([code,value])=>['translation:'+code,{label:code+' · '+value.name,tab:'info'}]),
 ...Object.entries(FILE_SLOTS).map(([key,label])=>['files:'+key,{label,tab:'files'}]),
 ['competitors',{label:'Таблица конкурентов',tab:'competitors'}],
]);
export const taskTarget=key=>Object.hasOwn(TASK_TARGETS,key)?TASK_TARGETS[key]:null;
export const taskIsActive=task=>task.status==='open'||task.status==='in_progress';
