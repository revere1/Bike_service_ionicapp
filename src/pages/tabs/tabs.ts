import { Component } from '@angular/core';

import { SigninPage } from '../signin/signin';
import { ListPage } from '../list/list';
import { HomePage } from '../home/home';
import { MyprofilePage } from '../myprofile/myprofile';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = SigninPage;
  tab3Root = MyprofilePage;

  constructor() {

  }
}
