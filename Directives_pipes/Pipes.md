# Pipes 


- In Angular, pipes are a feature that allows you to transform data in your templates before displaying it.   Pipes are used by placing a pipe character (|) followed by the name of the pipe and any parameters inside     interpolation curly braces ({{ }}) in your template.


##  Built-In Pipes

  - date: Formats a date object into a string representation.
  - uppercase and lowercase: Converts a string to uppercase or lowercase, respectively.
  - currency: Formats a number as a currency using the specified currency code and symbol.
  - decimal: Formats a number as a decimal using a specified number of digits after the decimal point.
  - percent: Formats a number as a percentage.
  
   - Examples :              
                             
                                <div>{{ lowerCaseExample | lowercase}}</div>     
                                   <!--Output // angular tutorial -->

                                <div>{{ upperCaseExample | uppercase}}</div>     
                                <!--Output // LEARNING ANGULAR FRAMEWORK -->

                                <div>{{ dateExample | date}}</div>
                                  <!--Output // Jul 12, 2023 -->

                                <div>{{ jsonExample | json}}</div>
                   <!--Output // { "username": "Tony Soprano", "job": " Boos the Mafia", "experience": 20 } -->

                                <div>{{ currencyExample | currency}}</div>
                                       <!--Output // $250.00 -->

                                <div>{{ percentExample | percent}}</div>
                                       <!--Output // 55% -->

                                <div>{{ decimalExample | number}}</div>
                                       <!--Output // 2,016 -->




##  Parametrized Pipes

- Parametrized pipes are a type of Angular pipe that allow you to pass additional parameters to the pipe to modify its behavior. To use a parametrized pipe, you can pass the parameters as additional arguments to the pipe in your template.

- Example :                 
        
                               <div>{{ currencyExample | currency : 'MAD'}}</div>
                                           <!--Output // MAD250.00 -->

                               <div>{{ dateExample | date : 'short'}}</div>
                                   <!--Output // 7/12/23, 3:33 PM -->




##  Chaining Pipes 


- Using multiple pipes on a data input is called as Chaining Pipes

- We can pass one or more pipes to a data input     {{ dob | date | uppercase }}

- Example :          

                               <div>{{ dateExample | date  | uppercase }}</div>
                                        <!--Output // JUL 12, 2023 -->

                               <div>{{ currencyExample | currency : 'MAD' | lowercase }}</div>
                                        <!--Output // mad250.00 -->


                                            