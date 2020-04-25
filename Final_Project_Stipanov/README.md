The goals of my final project were threefold:
1. Gain experience working with a large code repository 
2. Pull data that I have hosted on the web and express it in tabular format
3. Learn how to use the Google Charts library

To make it easier to understand and grade, I have separated out most of the boilerplate code that I started
out with in to the subdirectories, while keeping the main project files in the main directory. The following files 
are the ones to focus on:

page.html - This contains the charts and tables as well as the JS module to download the data from the web. To make
my project directory easier for you to navigate, the code I wrote related to the Google Charts, JS module, and tabular 
data is also in the html file itself.

index.html - Less dynamic from a programming perspective but I did a certain amount of customization to make it
look and feel the way I intended. It's really the landing page wheras the actual functionality of the tables and charts
is in page.html.

data.js - This file is uploaded to my github account and is only included in this for illustrative purposes. This file
contains the raw JSON data being used for the charts as well as a function to export this data to the page.

style.css - Also did some customization to this file, particularly with respect to the table, which needed to scroll
to the left and right while keeping that first column fixed.
