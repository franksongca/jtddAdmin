import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resource-management',
  templateUrl: './resource-management.component.html',
  styleUrls: ['./resource-management.component.scss']
})
export class ResourceManagementComponent implements OnInit {
  screenText = {
    id: '序号',
    key: '资源索引键',
    space: '　　',
    createdBy: '建立人',
    createdOn: '建立日期',
    lastEditedOn: '编辑人',
    lastEditedBy: '编辑日期'
  };


  listOriginal = [
    {resourceKey: 'TEXT-NEW-PAGE-A', language: 'en', id: '10000', editing: false, content: 'this is a text content.', createdOn: '2017-12-21', createdBy: 'Frank Song', lastEditedBy: 'Frank Song', lastEditedOn: '2017-12-21'},
    {resourceKey: 'TEXT-NEW-PAGE-A', language: 'zh', id: '10001', editing: false, content: 'this is a text content.', createdOn: '2017-12-21', createdBy: 'Frank Song', lastEditedBy: 'Frank Song', lastEditedOn: '2017-12-21'},
    {resourceKey: 'TEXT-NEW-PAGE-B', language: 'en', id: '10002', editing: false, contentZH: 'this is a text content.', createdOn: '2017-12-21', createdBy: 'Frank Song', lastEditedBy: 'Frank Song', lastEditedOn: '2017-12-21'},
    {resourceKey: 'TEXT-NEW-PAGE-B', language: 'zh', id: '10003', editing: false, contentZH: 'this is a text content.', createdOn: '2017-12-21', createdBy: 'Frank Song', lastEditedBy: 'Frank Song', lastEditedOn: '2017-12-21'}
  ];

  list = [];

  constructor() {
    this.listOriginal.sort((a, b) => {
      if (a.resourceKey < b.resourceKey) {
        return -1;
      }
      if (a.resourceKey > b.resourceKey) {
        return 1;
      }
      return 0;
    });

    for (let i = 0; i <= this.listOriginal.length / 2; i += 2) {
      const key1 = this.listOriginal[i].language;
      const key2 = this.listOriginal[i + 1].language;
      const item: any = {[key1]: this.listOriginal[i], [key2]: this.listOriginal[i + 1]};
      item['key'] = this.listOriginal[i]['resourceKey'];
      this.list.push(item);
    }
  }

  ngOnInit() {
  }

  toggleEditing(item) {
    this.list.forEach((listItem) => {
      listItem.zh.editing = false;
      listItem.en.editing = false;
    });
    item.editing = true;
  }
}
