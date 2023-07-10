import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Directives_pipes';

  success_msg = false;

  contacts =[
    {
      'FirstName' : 'El mliki ',
      'LastName' : 'Hicham ',
      'Job' : 'Full Stack Developer '

    },

    {
      'FirstName' : 'Yahya ',
      'LastName' : 'Mohammed ',
      'Job' : 'Full Stack Developer '
    },
    {

      'FirstName' : 'Tebbaa ',
      'LastName' : 'Adnane',
      'Job' : 'Full Stack Developer '

    }
  ]
}
