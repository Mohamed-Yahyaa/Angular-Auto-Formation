# Pipes 


- In Angular, pipes are a feature that allows you to transform data in your templates before displaying it.   Pipes are used by placing a pipe character (|) followed by the name of the pipe and any parameters inside     interpolation curly braces ({{ }}) in your template.


## - Built-In Pipes

  - date: Formats a date object into a string representation.
  - uppercase and lowercase: Converts a string to uppercase or lowercase, respectively.
  - currency: Formats a number as a currency using the specified currency code and symbol.
  - decimal: Formats a number as a decimal using a specified number of digits after the decimal point.
  - percent: Formats a number as a percentage.
  
   - Examples :              
                             
                               <div>{{ lowerCaseExample | lowercase}}</div>

                               <div>{{ upperCaseExample | uppercase}}</div>

                               <div>{{ dateExample | date}}</div>

                               <div>{{ jsonExample | json}}</div>

                               <div>{{ currencyExample | currency}}</div>

                               <div>{{ percentExample | percent}}</div>

                               <div>{{ decimalExample | number}}</div>



## 
