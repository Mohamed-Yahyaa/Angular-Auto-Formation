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



      - ngIf :   is a structural directive in Angular that allows you to conditionally render an element or a group of elements based on a boolean expression. If the expression is true, the element is displayed, otherwise it is removed from the DOM.


      - ngIf -> done
             -> logical opeartors
                        OR (11)
                        AND (&&)
                        NOT (!)
                 ngIf else ->
                 ngIf then else


      - ngIf : <div *ngIf="isLoggedIn">Welcome, user!</div>




      - ngFor :   is a structural directive in Angular that allows you to iterate over a collection and render a template for each element. The directive provides a way to access the current item, the index, and the total count of items.


      - ngFor :         <ul>
                             <li *ngFor="let item of items; let i = index; let total = count">{{item.name}} ({{i+1}} of {{total}})</li>
                         </ul>




      - ngSwitch :  is a structural directive in Angular that allows you to conditionally render an element or a group of elements based on a value. The directive evaluates the value against a set of case statements and renders the matching template.   


      - ngSwitch :   <div [ngSwitch]="userRole">
                     <div *ngSwitchCase="'admin'">Welcome, admin!</div>
                     <div *ngSwitchCase="'user'">Welcome, user!</div>
                     <div *ngSwitchDefault>Welcome, guest!</div>
                     </div>  




      - ngStyle :  is a built-in directive in Angular that allows you to dynamically set CSS styles for an element based on values in your component's class. It can be used to apply styles based on conditions or to provide a more dynamic user experience.

                   The ngStyle directive takes an object literal as its value, where the keys are CSS property names and the values are the values for those properties. For example, you could use the ngStyle directive to set the background color of an element based on a condition  


                             
                  <div [ngStyle]="{'background-color':'green','color': '#fff'}"> this is green div   </div>

                  <div [ngStyle]="{'background-color':stylepro}"> this is purbel div   </div>




      - ngClass :   is a built-in directive in Angular that allows you to dynamically add or remove CSS classes for an element based on values in your component's class. It can be used to apply styles based on conditions or to provide a more dynamic user experience.

            In this case, myClasses is a property in the component class that returns a string or an array of strings representing the CSS classes that should be applied to the element.

            ngClass is a powerful tool for creating dynamic styles in your Angular application, but it can also lead to performance issues if used improperly. It's important to consider the number of elements being updated and the frequency of those updates when using ngClass.


            The ngClass directive takes an object literal as its value, where the keys are CSS class names and the values are boolean expressions that determine whether the class should be applied. For example, you could use the ngClass directive to add a class to an element based on a condition like this:     

                   <div [ngClass]="'C1'"> this is class   </div>

                   <div [ngClass]="styleClsProp"> this is class dynamic  </div>

                   <div [ngClass]="condClsProp === 'C4'? 'C4' : 'C5'"> this is class dynamic  </div>

                   <div [ngClass]="{C4 : true, C5: false}"> this is class dynamic  </div>

                   <div [ngClass]="[getClsName()]" > this is get class  </div>
 


      - In all of these examples, the * symbol before the directive name is a shorthand notation that allows you to apply the directive to the host element without wrapping it in an additional element. For example, *ngIf is equivalent to <ng-template [ngIf]="condition"><div>...</div></ng-template>, but without the need for the additional ng-template element.              
