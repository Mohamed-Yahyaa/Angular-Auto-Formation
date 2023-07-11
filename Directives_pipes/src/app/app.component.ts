import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Directives_pipes';

  // ngIf //
  success_msg = false;

// ngSwitch //
  sopranos = 'Tony Soprano' ;

// ngStyle //
  stylepro = "purple";

  // ngClass //

  styleClsProp = 'C3';

  condClsProp = 'C6';

  getClsName(){
     return 'C3';
  }


// ngFor
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
