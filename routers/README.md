# Routers


- In Angular, routers are used to navigate between different views of an application. The router is responsible for mapping URLs to components and displaying the appropriate component when the user navigates to a certain URL.



  ● Routing is a mechanism used by Angular framework to manage the "paths" and
    "routes" of our Angular applications

  ● Routing strategy helps in navigation between various views in our Angular
     application

  ● Angular framework comes with "Router" Module which has everything we need to
     design, develop and implement routes and navigation links
      Router is a singleton - which means there is ONLY one instance of the router in
        our Angular application


##  Component Routing

- Component routing is implemented using the Angular Router module, which is a powerful and flexible library for handling client-side navigation. The Angular Router allows you to define routes for different components in your application, and it handles the navigation between them.

  ● Each component can have its own Routes

Various examples of component routes are:

   ● /products

   ● /products/view

   ● /products/add

   ● /users



- Example :  
                                       

                                   {
                                         path: 'loans',
                                         component: LoansComponent
                                        // Output // loans works! //
   
                                    },

                                    {
                                         path: 'loan-types',
                                          component:LoanTypesComponent
                                        // Output // loan-types works! //
                                    },

                                    {
                                         path: 'loan/add-loan',
                                         component: AddLoanComponent
                                       // Output // >add-loan works! //
                                    }
   




## Router Outlet
  
- The router-outlet directive is used to display the component associated with the current route. It acts as a placeholder where the current component is dynamically loaded based on the URL path.


   ● The Router-Outlet is a directive that's available from the router library where the
      Router inserts the component that gets matched based on the current browser's URL.

   ● You can add multiple outlets in your Angular application which enables you to
      implement advanced routing scenarios.

   ● By default there is always one router outlet defined - in app.component.html
 
            
                                      <router-outlet></router-outlet>          




## Multiple Router Outlets

- In Angular, multiple router-outlet directives can be used to display components associated with different named outlets. This can be useful if you have multiple sections of your application that need to be updated independently based on different routes.


- Example : 
                                      
                                     

                                            <h2>Multiple Router Outlets</h2>

                                      <router-outlet name="addLoan"></router-outlet>

                                           <!-- Output // Routers Tutorial -->


                                      <router-outlet name="editLoan"></router-outlet>

                                      <!--http://localhost:4200/loans(addLoan:add)--> 

           <!-- Output // 1- Routers Tutorial 2- loans works! 3- Multiple Router Outlets 4- add-loan works! -->







## Routing Strategy

- In Angular, there are two routing strategies for navigating between routes: the hash-based strategy and the path-based strategy.

The hash-based strategy uses the URL hash to navigate between routes. When a user navigates to a different route, the URL hash changes, but the browser does not reload the page. This strategy is useful for applications that need to support older browsers that do not support the HTML5 pushState API.


                    import {LocationStrategy } from '@angular/common';
                    import { HashLocationStrategy } from '@angular/common';
                    
                    providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy}],
        
- Example : 

                                        . Angular provies 2 routing strategies

                                                PathLocationStrategy

                                        - Default routing strategy for Angular apps
                                        - HTML 5 push state URL
                                        - Examples
                                        - http://myapp.com/dashboard
                                          http://myapp.com/user/10
                                          http://myapp.com/user/10/photos
                                          http://myapp.com/search?query=abc&state=ka&city=bengaluru

                                           
                                                HashLocationStrategy 
        
                                        - Examples
                                        - http://myapp.com/#/dashboard
                                        - http://myapp.com/#/user/10
                                          http://myapp.com/#/user/10/photos
                                          http://myapp.com/#/search?query=abc&state=ka&city=bengaluru






##  Base Href 


- In Angular, the base href is a tag that is added to the head section of the HTML file and specifies the base URL for all relative URLs in the application. This tag is used to ensure that all resources (such as images, stylesheets, and scripts) are loaded correctly, and that routing between components works as expected.


● Every Angular application has MANDATORY base href

 • Angular application is a SPA (Single Page Architecture) which means there will be
         only one HTML file

 •  The default base href is set to "/" the root folder

 • The Base HREF is present in index.html file for all Angular applications




                     
                      import {LocationStrategy, PathLocationStrategy } from '@angular/common';
                      providers: [{ provide: LocationStrategy, useClass: PathLocationStrategy}],

- Example :                       
                                        
                                            <base href="/app">                

                                         http://localhost:4200/app/




##  Router Module 

 - In Angular, the RouterModule module is a key part of the Angular Router, which is used to handle client-side navigation in single-page applications. The RouterModule module provides a set of APIs for defining routes, handling navigation events, and rendering components based on the current route.



1. Its a single module and placeholder where all our routes are configured for that particular module 

2. Each module can have its own routes 

3. During the angular app installation 
    - we get an option - Do you want to have routing in yoru application? 
        - it will automatically create the app-routing module file for us 

4. ng g module app-routing --flat --module=app

5. • We need to import modules from the package import { Routes, RouterModule } from '@angular/router";

   • We need to configure route path array in the file const routes: Routes = []; 

   • Then we need to define our module 

   • @NgModule({ 

   • imports: [RouterModule. forRoot(routes)],
   
   • exports: [RouterModule] 

   • }) We need to export the module export class AppRoutingModule { } 

   • Import the module in the AppModule file

We can configure routes to redirect route for various paths : Path, Component, redirect To, Children, Outlet, pathMatch
 


##  Configure Component Routes

- In Angular, you can configure component routes using the Angular Router module. Component routes define the mapping between URL paths and Angular components, allowing you to navigate between different views in your application without requiring a full page reload.



                               
                                  {
                                       path: 'loan-types',
                                       children:[
                                  {
                                       path: 'add-loan',component: AddLoanComponent
                                  },

                                  {
                                       path: 'edit-loan',component: AddLoanComponent
                                  },
 
                                  {
                                       path: 'delete-loan',component: AddLoanComponent
                                  },

                                  ]

                                  {
                                       path: 'add-new-loan',
                                       redirectTo: 'add-loan'
                                  },
                                  {
    
                                       path: 'add-loan',
                                       component:AddLoanComponent
                                  },
                                  },




## Parametrized Routes

- Parametrized routes in Angular allow us to define dynamic routes that can contain variable segments. These variable segments are used to capture dynamic values from the URL, which can then be used by the application to render the appropriate content.

In Angular, parametrized routes are defined using the RouterModule and the Routes array. Each route in the Routes array consists of a path property and a component property. The path property defines the URL pattern for the route, and can contain variable segments that are enclosed in parentheses. These variable segments are then mapped to route parameters, which can be accessed by the application.


- Example :   
  
                                     
                                       const routes: Routes = [
  
                               {path:'product/:id' , component:ProductComponent}

                                       ]
                


## RouterLink 

- In Angular, RouterLink is a directive that allows us to create links that navigate to different routes in our application. Instead of using the traditional href attribute, we use the routerLink attribute to specify the route we want to navigate to.


   • When applied to an element in a template, makes that element a link that initiates navigation to a route.

   • Navigation opens one or more routed components in one or more locations on the page.

   • For e.g



                                
                                <a [routerLink]="['/user/bob']"> Some link



- Example : 

                              // compenent.html //

                            <table>
                                 <th>Client Id </th>
                                 <th>FirstName </th>
                                 <th>LastName </th>

                              <tr *ngFor="let client of clientList">
                                 <td>{{ client.clientId }}</td>
                                 <td>{{ client.firstName }}</td>
                                 <td>{{ client.lastName }}</td>
                              </tr>

                            </table>   


                               // compenent.ts //                             
                                                
                            clientList = [
                            {clientId: 10 , firstName: 'yahya', lastName: 'Med'},
                            {clientId: 11 , firstName: 'Adnane', lastName: 'Tebbaa'},
                            {clientId: 12 , firstName: 'Hicham', lastName: 'El Mliki'},
                            {clientId: 13 , firstName: 'Merraadou', lastName: 'Abderahmane'},
                            {clientId: 14 , firstName: 'Lharrak', lastName: 'Boutaina'}
                             ]
 
                               // routing.module.ts //      


                               {
                                path:'client',

                               component: ClientComponent

                               }                       
                               

