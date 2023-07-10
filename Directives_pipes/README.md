# Derictives 

- Directives in Angular are a type of component that allow you to extend or modify the behavior of existing   HTML elements or attributes. There are three types of directives in Angular


## Component Directives 

These are the most common type of directive in Angular, which are used to create reusable UI components. Component directives have their own view, which can contain other directives and components.

## Attribute Directives 

These are used to modify the behavior or appearance of existing elements by applying custom behavior or styles. Attribute directives are typically used with the ngClass, ngStyle, and ngModel directives.

## Structural Directives 

These are used to modify the structure of the DOM by adding or removing elements based on a condition. The most common structural directives are ngIf, ngFor, and ngSwitch.


##   First command 
    
   - ng g directive highlight



##  Structural Directives 

      - Structural directives are a type of directive in Angular that allow you to modify the structure of the DOM by adding, removing, or manipulating elements based on a condition. The most commonly used structural directives are *ngIf, *ngFor, and *ngSwitch.

      - ngIf : <div *ngIf="isLoggedIn">Welcome, user!</div>

      - ngFor :         <ul>
                             <li *ngFor="let item of items; let i = index; let total = count">{{item.name}} ({{i+1}} of {{total}})</li>
                         </ul>

      - ngSwitch :   <div [ngSwitch]="userRole">
                     <div *ngSwitchCase="'admin'">Welcome, admin!</div>
                     <div *ngSwitchCase="'user'">Welcome, user!</div>
                     <div *ngSwitchDefault>Welcome, guest!</div>
                     </div>   


      - In all of these examples, the * symbol before the directive name is a shorthand notation that allows you to apply the directive to the host element without wrapping it in an additional element. For example, *ngIf is equivalent to <ng-template [ngIf]="condition"><div>...</div></ng-template>, but without the need for the additional ng-template element.              
