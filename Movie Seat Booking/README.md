## Introduction

A UI is built which is like a movie theatre website where we can pick up our seats 
when we pick the movie.
We have different prices for different movies, 
a legend where blue shows already occupied seats and white shows 'not-yet-occupied'.
The number of seats you filled for, shows your total bill.

We will use local storage for storing the seats that you filled.


### HTML file description

The title of the page is given to be Movie seat booking , and the linking to the css file and javascript file are made.

#### Select Movie part

A div container of class "movie-container" is made. Label of 'Select a Movie' is added.
There is a select box inside this container. It has id="movie" so that we can use it through the script file.
Inside the select box there are 4 options where the value is the cost of a ticket for that particular movie.
#### Showcase 

Next, we have created a showcase container. It has classes of occupied, not occupied and selected seats.
This is basically a legend.
----------Rows of seats--------
A container class is used which consists of a screen and also the rows of seats.The screen container is empty; it is just used for css styling.Next we add all divs with class "seat" or
"seat occupied".
In the end, we show the count of seats that is selected dynamically.

### Styling

The styling is given in mycss.css file. 
First, a suitable font has been chosen from the google font api.
The 'box-sizing:border-box' ensures that there is no added width.
Next, we use "display:flex" to place the box in the centre both horizontally and vertically. flex-direction is changed from default row to column.Contents are aligned centrally.
For the movie-container, design is done according to pixels so that in every operating system and every browser the design looks same.
//Code snippet:
```
.movie-container select {
  background-color: #fff;
  border: 0;
  border-radius: 5px;
  font-size: 14px;
  margin-left: 10px;
  padding: 5px 15px 5px 15px;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
}
```

The seats are designed in a similar manner and to make them display row-wise, we use :----
           ``` .row {
              display: flex;
            }```
To add gap between the second and third row we used css pseudoselector 
```.seat:n-th-of-type(2)```










