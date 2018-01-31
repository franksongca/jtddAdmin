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


  list = [
    {id: '10000', editing: false, contentZH: 'this is a text content.', contentEN: 'this is a text content.', contentKey: 'TEXT-NEW-PAGE-A', createdOn: '2017-12-21', createdBy: 'Frank Song', lastEditedBy: 'Frank Song', lastEditedOn: '2017-12-21'},
    {id: '2000', editing: false, contentZH: 'this is a text content.', contentEN: 'this is a text content.', contentKey: 'TEXT-NEW-PAGE-A', createdOn: '2017-12-21', createdBy: 'Frank Song', lastEditedBy: 'Frank Song', lastEditedOn: '2017-12-21'},
    {id: '3', editing: false, contentZH: 'this is a text content.', contentEN: 'this is a text content.', contentKey: 'TEXT-NEW-PAGE-A', createdOn: '2017-12-21', createdBy: 'Frank Song', lastEditedBy: 'Frank Song', lastEditedOn: '2017-12-21'},
    {id: '4', editing: false, contentZH: 'this is a text content.', contentEN: 'this is a text content.', contentKey: 'TEXT-NEW-PAGE-A', createdOn: '2017-12-21', createdBy: 'Frank Song', lastEditedBy: 'Frank Song', lastEditedOn: '2017-12-21'}
  ];
  constructor() { }

  ngOnInit() {
  }

  toggleEditing(item) {
    this.list.forEach((listItem) => {
      listItem.editing = false;
    });
    item.editing = true;
  }
}
