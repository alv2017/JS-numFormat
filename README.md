# JS-numFormat
Basic Number Formatter in JS

I needed a simple number formatter for my application. A very basic one, that simply converts a number
to a required format. I googled for solutions and didn't find anything suitable weighing less than 1000 lines.
It was a good motivation to write something on my own.

Usage:
numFormat(number, decimal_separator, thousands_separator, number_or_decimals);

Output: 
a string containing formatted number.

<b>Examples:</b>
<pre>
Example 1:
numFormat(100.553, ".", ",", 2); //returns 100.55

Example 2:
numFormat(1000.553, ".", ",", 4); //returns 1,000.5530

Example 3: 
numFormat(-200450, ",", " ", 2); //returns -200 450,00
</pre>


<b>Implementation</b>: http://www.vitalija-alisauskaite.com/demo-projects/charts/index.html

![Tabular-Report-Example](https://github.com/alv2017/Images/blob/master/Js-numFormat/tabular_report.png)
