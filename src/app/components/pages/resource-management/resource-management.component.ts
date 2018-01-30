import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resource-management',
  templateUrl: './resource-management.component.html',
  styleUrls: ['./resource-management.component.scss']
})
export class ResourceManagementComponent implements OnInit {
  list = [
    {id: '10000', editing: false, contentZH: 'this is a text content.', contentEN: 'this is a text content.', contentKey: 'TEXT-NEW-PAGE-A', createdOn: 'Dec 21, 2017', createdBy: 'Frank Song', lastEditedBy: 'Frank Song', lastEditedOn: 'Jan 1, 2018'},
    {id: '2000', editing: false, contentZH: 'this is a text content.', contentEN: 'this is a text content.', contentKey: 'TEXT-NEW-PAGE-A', createdOn: 'Dec 21, 2017', createdBy: 'Frank Song', lastEditedBy: 'Frank Song', lastEditedOn: 'Jan 1, 2018'},
    {id: '3', editing: false, contentZH: 'this is a text content.', contentEN: 'this is a text content.', contentKey: 'TEXT-NEW-PAGE-A', createdOn: 'Dec 21, 2017', createdBy: 'Frank Song', lastEditedBy: 'Frank Song', lastEditedOn: 'Jan 1, 2018'},
    {id: '4', editing: false, contentZH: 'this is a text content.', contentEN: 'this is a text content.', contentKey: 'TEXT-NEW-PAGE-A', createdOn: 'Dec 21, 2017', createdBy: 'Frank Song', lastEditedBy: 'Frank Song', lastEditedOn: 'Jan 1, 2018'}
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
