import { Component, OnInit } from '@angular/core';
import { linkSync } from 'fs';
import { element } from 'protractor';
import { SettingsService } from 'src/app/services/settings.service';


@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: [
  ]
})
export class AccountSettingsComponent implements OnInit {


  public links:NodeListOf<Element>;
  
  constructor(private settinsService: SettingsService) { }

  ngOnInit(): void {

    this.settinsService.checkCurrentTheme();
  }

  changeTheme(theme: string){
    this.settinsService.changeTheme(theme);
  }

}
