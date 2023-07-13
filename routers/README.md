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
Router inserts the component that gets matched based on the current browser's
URL.

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

