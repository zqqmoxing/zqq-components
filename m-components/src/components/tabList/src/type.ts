//列表单项类型
export interface ListItem {
  title: string;
  time?: string;
  avatar?: string;
  desc?: string;
  tag?: string;
  tagType?: any;
}
//列表
export interface List {
  title: string;
  content: ListItem[];
}
//操作选项
export interface ActionOptions {
  text: string;
  icon: string;
}
