import { Component, OnInit } from '@angular/core';
import { ActionsService } from './../../../services/actions.service';
import { ConfigService } from './../../../services/config.service';

@Component({
  selector: 'app-resource-management',
  templateUrl: './resource-management.component.html',
  styleUrls: ['./resource-management.component.scss']
})
export class ResourceManagementComponent implements OnInit {
  screenText = {
    key: '资源索引键',
    labelZh: '中　　文',
    labelEn: '英　　文'
  };

  listOriginal = [
    {resourceKey: 'TEXT-KEY-A', language: 'en', id: '10000', editing: false, content: 'this is a text content.', createdOn: '2017-12-21', createdBy: 'Frank Song', lastEditedBy: 'Frank Song', lastEditedOn: '2017-12-21'},
    {resourceKey: 'TEXT-KEY-A', language: 'zh', id: '10001', editing: false, content: 'this is a text content.this is a text content.this is a text content.this is a text content.this is a text content.this is a text content.this is a text content.', createdOn: '2017-12-21', createdBy: 'Frank Song', lastEditedBy: 'Frank Song', lastEditedOn: '2017-12-21'},
    {resourceKey: 'TEXT-KEY-B', language: 'en', id: '10002', editing: false, content: 'this is a text content.', createdOn: '2017-12-21', createdBy: 'Frank Song', lastEditedBy: 'Frank Song', lastEditedOn: '2017-12-21'},
    {resourceKey: 'TEXT-KEY-B', language: 'zh', id: '10003', editing: false, content: 'this is a text content.', createdOn: '2017-12-21', createdBy: 'Frank Song', lastEditedBy: 'Frank Song', lastEditedOn: '2017-12-21'}
  ];

  list = [];

  constructor() {
    ActionsService.onResourceKeyUpdated.subscribe((keys) => {
      this.listOriginal.forEach((item) => {
        if (item.resourceKey === keys.oldKey) {
          item.resourceKey = keys.newKey;
        }
      });

      this.sortResources();
    });

    this.sortResources();
  }

  ngOnInit() {
  }

  sortResources() {
    this.list = [];
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

  editResourceKey(record) {
    if (ConfigService.isLoginned()) {
      ActionsService.openModal('resourcekey', record);
    } else {
      ActionsService.openModal('simple', {
        title: '提醒',
        bodyMessage: '您还没有登录，请登录，然后再试。',
        type: 'not-login-warning',
        cancelBtnText: '确认',
        icon: 'warning'
      });
    }
  }

  editResourceText(resourceRecord) {
    alert('B');

  }

}
