## 14.3 Lesson Plan - JavaScript with D3.js (10:00 AM)

### Overview

Today's class will introduce students to DOM selection, manipulation, and events using [D3.js](https://d3js.org/).

### Instructor Notes

* Students will spend today's class working with data in JavaScript and learning how to manipulate the DOM with D3. The material covered today is intended to be a gentle introduction to the DOM using helper methods from D3.

* Because this is the only the third day of a very rapid introduction to JavaScript, many students may be feeling overwhelmed. It is important to take the time to reassure them that it will take time to feel confident in these new skills. The next several classes will provide additional opportunities to learn and practice JavaScript.

* Today's class uses only a subset of D3.js to perform basic DOM manipulation and event handling. Data binding is not covered in this lesson as D3 is only being used as an aid to simplify interaction with the DOM. A full week will be dedicated to further exploring D3 in a future unit.

* Please reference our [Student FAQ](../../../05-Instructor-Resources/README.md#unit-14-intro-to-javascript) for answers to questions frequently asked by students of this program. If you have any recommendations for additional questions, feel free to log an issue or a pull request with your desired additions.

* Lastly, as a reminder these slideshows are for instructor use only - when distributing slides to students, please first export the slides to a PDF file. You may then distribute the PDF file through Slack.

### Sample Class Video (Highly Recommended)

* To view an example class lecture visit (Note video may not reflect latest lesson plan): [Class Video](https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=d5a8583f-2e67-49b4-b689-aa070183724f)

- - -

### Class Objectives

* Students will use D3 for basic DOM manipulation.

* Students will be able to populate a table using static data structures.

* Students will understand events.

* Students will be able to use `this` to reference elements.

* Students will use D3 to attach events to DOM elements.

* Students will dynamically manipulate the DOM through events.

* Students will be able to dynamically filter tables.

- - -

### 1. Instructor Do: Welcome and Slideshow (5 mins) (Critical)

* **Files:**

  * [Slideshow](https://drive.google.com/open?id=19BCLrslKuwole5Jo5lwg0iobC5M7aQcUZxCNcgAv0jA)

* Welcome students to class and explain that today's focus will be on dynamically manipulating HTML with JavaScript.

* Open the slideshow and offer the following words of encouragement:

  * It's ok to feel overwhelmed when learning a new programming language, especially for a complex language like JavaScript.

  * This week is only the first introduction to the language.

  * It will take time and practice to become good at JavaScript.

  * The transformation from JavaScript Jellybean to JavaScript Juggernaut will happen before you know it!

  * Talk to us if you need extra help!

* Show the objectives slide and explain the following points about the D3.js library:

  * D3.js is an incredibly powerful visualization library written in JavaScript.

  * Today's class will cover a subset of D3 used to select and create HTML elements dynamically.

  * A future Unit will be dedicated purely to learning D3.js to build dynamic visualizations in JavaScript.

### 2. Everyone Do: Intro to D3 and Select (25 mins) (Critical)

* **Files:**

  * [Activities/01-Evr_D3_Select/Unsolved/index.html](Activities/01-Evr_D3_Select/Unsolved/index.html)

  * [Activities/01-Evr_D3_Select/Unsolved/static/js/index.js](Activities/01-Evr_D3_Select/Unsolved/static/js/index.js)

* **Activity Notes:**

  * Live code this activity with the class, pausing frequently to allow students to catch up.

  * Periodically slack out the code covered thus far to help students that may have syntax errors.

* Inform students that we will go over using D3 to manipulate DOM elements; that is, the elements of a web page.

* Similar to selecting DOM elements with `soup.find()` when web scraping with Beautiful Soup, D3 can be used to extract information from an HTML document and can change its contents and styling.

* Demonstrate how to import D3 in the script tag, using a CDN link:

  ```javascript
    <script src="https://cdnjs.cloudflare.com/ajax/libs/d3/4.7.3/d3.min.js"></script>
  ```

* Explain that `d3.select()` can be used to get a reference to an element, then capture the text of that element. Open the console and show students the output.

* Emphasize that the element is selected with the class name 'text1'. Then, the text of the element is captured by chaining that reference with the `.text()` method.

  ![Images/select1.png](Images/select1.png)

* Demonstrate that the text of the element can be **changed**. Code the following line, and refresh the browser.

  ```javascript
  s3.select(".text1").text("Hey, I changed this!")
  ```

  * The browser now reflects the change:

    ![Images/select4.png](Images/select4.png)

* Demonstrate how to capture the inner HTML of an element by using the `html()` method.

  ![Images/select4a.png](Images/select4a.png)

* Next, demonstrate how to select the **child** element of an element:

  ```javascript
    // Select an element's child element
    // An object is returned
    var mylinkAnchor = d3.select(".mylink>a");
    console.log(mylinkAnchor);
  ```

  * With `(".mylink>a")`, the anchor element contained within the div with the class name "mylink" is selected.

  * When `mylinkAnchor` is printed to the console, an object is returned with a number of properties of the element.

  ![Images/select6.png](Images/select6.png)

  * Using D3's `attr()` method, the `href` value can be accessed directly.

  ![Images/select7.png](Images/select7.png)

* Code the line below to change the `href`, then demonstrate by clicking on the link to navigate the page to Python's home page.

  ```javascript
  mylinkAnchor.attr("href", "https://python.org")
  ```

* Code the following to demonstrate chaining; which allows the joining of multiple methods sequentially.

  ```javascript
  // Use chaining to join methods
  d3.select(".mylink>a").attr("href", "https://nytimes.org").text("Now this is a link to the NYT!!");
  ```

* Code the following to show that `selectAll()` can be used to select all elements with a certain tag, class, or id, and then change the style of those elements.

  ```javascript
  // Select all list items, then change their font color
  d3.selectAll("li").style("color", "blue");
  ```

* Code the following and show that D3 can be used to first select an element, then append a child element to it.

  ```javascript
  // Create a new element
  var li1 = d3.select("ul").append("li");
  li1.text("A new item has been added!")

  //Use chaining to create a new element and set its text
  var li2 = d3.select("ul").append("li").text("Another new item!");
  ```

* Take a moment to answer any remaining questions before moving on.

### 3. Students Do: D3 Select (20 mins) (High)

* **Files:**

  * [Activities/02-Stu_D3_Select/README.md](Activities/02-Stu_D3_Select/README.md)

  * [Activities/02-Stu_D3_Select/Unsolved/index.html](Activities/02-Stu_D3_Select/Unsolved/index.html)

  * [Activities/02-Stu_D3_Select/Unsolved/static/js/app.js](Activities/02-Stu_D3_Select/Unsolved/static/js/app.js)

### 4. Instructor Do: Review D3 Select (10 mins)

* **Files**:

  * [Activities/02-Stu_D3_Select/Solved/index.html](Activities/02-Stu_D3_Select/Solved/index.html)

  * [Activities/02-Stu_D3_Select/Solved/static/js/app.js](Activities/02-Stu_D3_Select/Solved/static/js/app.js)

* Open the files and be sure to point out the following:

  * The first step is to select the table and add the Bootstrap striped table class.

    ```javascript
    var table = d3.select("table");
    table.attr("class", "table table-striped");
    ```

  * To add the new row of data, select the table body and then add the new table row.

    ```javascript
    var row = tbody.append("tr");
    ```

  * The row reference can be used to add a new table cell for the student name and grade. The student name is index position 0 while the student grade is index position 1.

    ```javascript
    row.append("td").text(newGrade[0]);
    row.append("td").text(newGrade[1]);
    ```

* If time permits, cover the bonus and explain the following:

  * `forEach` can be used to iterate over each item in the array.

  * Arrays can be [destructured](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) in JavaScript assignments. This is similar to unpacking a tuple in Python.

    ```javascript
    // [student, grade] destructures (unpacks) the student name and grade
    // for each item in the array
    grades.forEach(([student, grade]) => {

      // Append one table row per student/grade
      var row = tbody.append("tr");

      // append one cell for the student and one cell for the grade
      row.append("td").text(student);
      row.append("td").text(grade);
    });
    ```

* Ask if there are any questions before proceeding to the next example.

### 5. Everyone Do: D3 Table (20 mins) (Critical)

* **Files:**

  * [Activities/03-Evr_D3_Table/Unsolved/index.html](Activities/03-Evr_D3_Table/Unsolved/index.html)

  * [Activities/03-Evr_D3_Table/Unsolved/static/js/index.js](Activities/03-Evr_D3_Table/Unsolved/static/js/index.js)

  * [Activities/03-Evr_D3_Table/Unsolved/static/js/data.js](Activities/03-Evr_D3_Table/Unsolved/static/js/data.js)

* Open the `index.html` file and show the starter code for the table.

* Show the data structure for the weather report in `data.js`.

* Open the unsolved version of `index.js` and live code each step with the class. Highlight the following points:

  * Use `console.log` at each step to verify the format and structure of the data.

  * Each weather report is stored as an array of objects, so the first step is to iterate through that array with `forEach`.

    ```javascript
    data.forEach(function(weatherReport) {
      console.log(weatherReport);
    });
    ```

  * Each weather report needs its own row in the table.

    ```javascript
    data.forEach(function(weatherReport) {
      console.log(weatherReport);
      var row = tbody.append("tr");
    });
    ```

  * `Object.entries` can be used to create an array of key/value pairs for each weather report object.

    ```javascript
    data.forEach(function(weatherReport) {
      console.log(weatherReport);
      var row = tbody.append("tr");

      Object.entries(weatherReport).forEach(function([key, value]) {
        console.log(key, value);
      });
    });
    ```

  * A cell for each value can then be appended to the row.

    ```javascript
    data.forEach(function(weatherReport) {
      console.log(weatherReport);
      var row = tbody.append("tr");
      Object.entries(weatherReport).forEach(function([key, value]) {
        console.log(key, value);
        // Append a cell to the row for each value in
        // the weather report object
        var cell = tbody.append("td");
        cell.text(value);
      });
    });
    ```

  * Finally, we can refactor the code to use arrow functions.

    ```javascript
    data.forEach((weatherReport) => {
      var row = tbody.append("tr");
      Object.entries(weatherReport).forEach(([key, value]) => {
        var cell = tbody.append("td");
        cell.text(value);
      });
    });
    ```

* Explain that this code snippet will be a key part of the homework solution.

* Answer any questions before moving on.

### 6. Instructor Do: D3 Event Listeners (15 mins) (Critical)

* **Files:**

  * [Activities/04-Ins_Event_Listeners/Solved/index.html](Activities/04-Ins_Event_Listeners/Solved/index.html)

  * [Activities/04-Ins_Event_Listeners/Solved/index.js](Activities/04-Ins_Event_Listeners/Solved/index.js)

* Explain that the activities so far have selected or appended elements in the HTML. This code is executed once upon loading the browser. What makes JavaScript really interesting is that it can listen for user events on the page and execute code when these events are detected. This provides an incredibly powerful mechanism for building dynamic and interactive applications.

* Inform the class that several event types are supported by the browser including:

  * `click`

  * `change`

  * `keydown`

  * `keyup`

  * `scroll`

  * `pointerenter`

  * `pointerleave`

  * and many more!

* Slack out a reference to [web events](https://developer.mozilla.org/en-US/docs/Web/Events).

* Before demonstrating any syntax, explain that events have:

  * A target: a reference to the object that dispatched the event.

  * A handler: a function which should be executed in response to the event occurring.

* Open [Activities/04-Ins_Event_Listeners/Solved/index.html](Activities/04-Ins_Event_Listeners/Solved/index.html).

* Click the **Click Me!** button to show the dynamic nature of the button click.

* Open the Chrome Inspector window and demonstrate the different functions available in [Activities/04-Ins_Event_Listeners/Solved/index.js](Activities/04-Ins_Event_Listeners/Solved/index.js).

* Explain the following:

  * Event handlers are just normal functions that you call when an event occurs.

    ```javascript
    // This function is triggered when the button is clicked
    function handleClick() {
      console.log("A button was clicked!");

      // We can use d3 to see the object that dispatched the event
      console.log(d3.event.target);
    }
    ```

  * Events are attached using the `.on()` function in d3.

    ```javascript
    button.on("click", handleClick);
    ```

  * The event target is the object that triggered the event. This can be referenced with `d3.event.target`.

  * Event handlers can also be defined inline.

    ```javascript
    button.on("click", function() {
      console.log("Hi, a button was clicked!");
      console.log(d3.event.target);
    });
    ```

  * Event handlers are just normal functions that can execute code or call other functions.

    ```javascript
    button.on("click", function() {
      d3.select(".giphy-me").html("<img src='https://gph.to/2Krfn0w' alt='giphy'>");
    });
    ```

  * Input elements can trigger change events. The value of the element can be referenced with `d3.event.target.value`.

    ```javascript
    inputField.on("change", function() {
      var newText = d3.event.target.value;
      console.log(newText);
    });
    ```

### 7. Students Do: On Change (20 mins) (High)

* **Files:**

  * [Activities/05-Stu_onChange/README.md](Activities/05-Stu_onChange/README.md)

  * [Activities/05-Stu_onChange/Unsolved/index.html](Activities/05-Stu_onChange/Unsolved/index.html)

  * [Activities/05-Stu_onChange/Solved/static/js/app.js](Activities/05-Stu_onChange/Solved/static/js/app.js)

### 8. Instructor Do: Review On Change (10 mins)

* **Files**:

  * [Activities/05-Stu_onChange/Solved/index.html](Activities/05-Stu_onChange/Solved/index.html)

  * [Activities/05-Stu_onChange/Solved/static/js/app.js](Activities/05-Stu_onChange/Solved/static/js/app.js)

* Open the files and be sure to point out the following:

  * We first need to select the input and output elements that we need to monitor or update.

    ```javascript
    var text = d3.select("#text");
    var output = d3.select(".output");
    ```

  * We use `.on()` to attach an onChange event to the input field.

    ```javascript
    text.on("change", handleChange);
    ```

  * We select the text using directly from the event target.

    ```javascript
    var inputText = d3.event.target.value;
    ```

  * After reversing the string, we use `.text()` to set the output h1 text to the reversed text.

    ```javascript
    output.text(reversedInput);
    ```

* If time permits, cover the bonus and explain the following:

  * Before we append any new `li` tags, `.html("")` is used to clear any old `li` tags.

  * We use `Object.entries(frequencyCounts)` to create an array of key, value pairs where the key is the character and the value is the count.

  * We can then iterate over that array using `forEach`.

  * Finally, we append each `word: count` pair as a new `li` element.

    ```javascript
    var li = output.append("li").text(`${key}: ${value}`);
    ```

* Ask if there are any questions before proceeding to the next example.

- - -

### 9. BREAK (40 mins)

- - -

### 10. Students Do: Button Clicks (15 mins)

* **Files:**

  * [Activities/06-Stu_Button_Click/README.md](Activities/06-Stu_Button_Click/README.md)

  * [Activities/06-Stu_Button_Click/Unsolved/index.html](Activities/06-Stu_Button_Click/Unsolved/index.html)

  * [Activities/06-Stu_Button_Click/Unsolved/static/js/app.js](Activities/06-Stu_Button_Click/Unsolved/static/js/app.js)

### 11. Instructor Do: Review Button Clicks (5 mins)

* Open [Activities/06-Stu_Button_Click/Solved/static/js/app.js](Activities/06-Stu_Button_Click/Solved/static/js/app.js) and highlight the following points:

  * The Star Wars episode number is created dynamically using `Math.floor` and `Math.random`.

    ```javascript
    var text = d3.select(".star-wars")
      .text(Math.floor(Math.random() * 8) + 1);
    ```

  * The upvote and downvote buttons are selected by their class names.

    ```javascript
    var upvote = d3.select(".upvote");
    var downvote = d3.select(".downvote");
    ```

  * The counter is also selected to get the current vote count.

    ```javascript
    var counter = d3.select(".counter");
    ```

  * Each button has its own click handler. The upvote will increment the count and the downvote will decrement the count.

    ```javascript
    upvote.on("click", function () {
      var currentCount = parseInt(counter.text());
      currentCount += 1;
      counter.text(currentCount);
    });
    ```

  * The counter value needs to be converted from text to an integer.

    ```javascript
    var currentCount = parseInt(counter.text());
    ```

* If time permits show that the bonus uses an array of arrays format to store the vote type and the current vote for each click.

  ```javascript
  var data = [];
  // ...
  data.push(["upvote", currentCount]);
  ```

* Answer any remaining questions before moving on.

### 12. Instructor Do: Introducing `this` (10 mins)

* **Files:**

  * [Activities/07-Ins_This/Solved/index.html](Activities/07-Ins_This/Solved/index.html)

  * [Activities/07-Ins_This/Solved/app.js](Activities/07-Ins_This/Solved/app.js)

* Explain that in JavaScript, the thing called `this` is the object that "owns" the code (i.e. the object that invokes the function where `this` is used).

* Explain that the `this` keyword can be very useful to identify which element triggered an event. For example, `this` inside of an event handler would refer to the specific button that was clicked.

* Open `app.js` and walk through the through the first example:

  ```javascript
  d3.selectAll("button").on("click", function() {
    console.log(this);
  });
  ```

  * `d3.selectAll("button")` is used to select all buttons in the document.

  * When a button is clicked, a function is triggered that will log `this` to the console.

  * In this example, `this` will refer to the specific button that was clicked. There are multiple buttons on the page, but only the button that was clicked will be logged to the console.

* Go over the second code example. Open index.html in a browser and demonstrate the clicking on a list item turns it blue.

* Next, show the second code example and highlight the following points:

  ```javascript
  d3.selectAll("li").on("click", function() {
    var listItem = d3.select(this);
    listItem.style("color", "blue");

    var listItemText = listItem.text();
    console.log(listItemText);
  });
  ```

  * When an item is clicked, that particular `li` element is assigned to the variable `listItem` via `d3.select(this)`.

  * Selecting the element with D3 makes it possible to use D3 functions such as `style` or `text` on the element.

  * For example, its font color is changed to blue with `listItem.style("color", "blue");`.

* Slack out the following reference for students that want to explore the `this` keyword further.

  * [this * object prototypes](https://github.com/getify/You-Dont-Know-JS/tree/master/this%20%26%20object%20prototypes)

### 13. Instructor Do: Forms (10 mins) (Critical)

* **Files:**

  * [Activities/08-Ins_Forms/Solved/index.html](Activities/08-Ins_Forms/Solved/index.html)

  * [Activities/08-Ins_Forms/Solved/index.js](Activities/08-Ins_Forms/Solved/index.js)

* Open `index.html` in the browser and demo the form.

* Explain that forms are used to collect data from users.

* Open the `index.js` file and explain the following:

  * Event listeners can be attached to any element.

  * By default, submitting a form will cause the browser to refresh the webpage.

  * `d3.event.preventDefault()` is a special function that prevents the form from refreshing the page.

    ```javascript
    d3.event.preventDefault();
    ```

  * Input elements store user text in the value property. D3 provides a `property` function to access the value.

    ```javascript
    var inputValue = inputElement.property("value");
    ```

  * Finally, the span tag is selected and updated with the inputValue.

    ```javascript
    d3.select("h1>span").text(inputValue);
    ```

### 14. Partners Do: Form Filter (25 mins) (High)

* **Files:**

  * [Activities/09-Par_Form_Filter/README.md](Activities/09-Par_Form_Filter/README.md)

  * [Activities/09-Par_Form_Filter/Unsolved/index.html](Activities/09-Par_Form_Filter/Unsolved/index.html)

  * [Activities/09-Par_Form_Filter/Unsolved/data.js](Activities/09-Par_Form_Filter/Unsolved/data.js)

  * [Activities/09-Par_Form_Filter/Unsolved/app.js](Activities/09-Par_Form_Filter/Unsolved/app.js)

### 15. Instructor Do: Review Form Filter (10 mins)

* **Files**:

  * [Activities/09-Par_Form_Filter/Solved/index.html](Activities/09-Par_Form_Filter/Solved/index.html)

  * [Activities/09-Par_Form_Filter/Solved/data.js](Activities/09-Par_Form_Filter/Solved/data.js)

  * [Activities/09-Par_Form_Filter/Solved/app.js](Activities/09-Par_Form_Filter/Solved/app.js)

* Open the files and be sure to point out the following:

  * This activity uses roughly the same click handler as the instructor demo.

  * The input id has been changed in this example to `patient-form-input`.

  * The input field is used to filter the data by blood type.

    ```javascript
    var filteredData = people.filter(person => person.bloodType === inputValue);
    ```
* If time permits, cover the bonus:

  * `map` can be used to quickly create an array of age values for the filtered data.

    ```javascript
    var ages = filteredData.map(person => person.age);
    ```

  * The `math.js` library provides functions to calculate all of the required summary statistics.

    ```javascript
    var mean = math.mean(ages);
    var median = math.median(ages);
    var mode = math.mode(ages);
    var variance = math.var(ages);
    var standardDeviation = math.std(ages);
    ```

  * D3 is used to dynamically append the summary statistics to the unordered list.

    ```javascript
    d3.select(".summary")
      .append("li").text(`Mean: ${mean}`)
      .append("li").text(`Median: ${median}`)
      .append("li").text(`Mode: ${mode}`)
      .append("li").text(`Variance: ${variance}`)
      .append("li").text(`Standard Deviation: ${standardDeviation}`);
    ```

* Congratulate students on making it through a very fast-paced unit!

* Ask students to practice these activities and use office hours to really hone their skills.

* Explain that the next two units will provide additional practice with JavaScript and D3.

### End Class

- - -

### LessonPlan & Slideshow Instructor Feedback

* Please click the link which best represents your overall feeling regarding today's class. It will link you to a form which allows you to submit additional (optional) feedback.

* [:heart_eyes: Great](https://www.surveygizmo.com/s3/4381674/DataViz-Instructor-Feedback?section=javascript-day-3&lp_useful=great)

* [:grinning: Like](https://www.surveygizmo.com/s3/4381674/DataViz-Instructor-Feedback?section=javascript-day-3&lp_useful=like)

* [:neutral_face: Neutral](https://www.surveygizmo.com/s3/4381674/DataViz-Instructor-Feedback?section=javascript-day-3&lp_useful=neutral)

* [:confounded: Dislike](https://www.surveygizmo.com/s3/4381674/DataViz-Instructor-Feedback?section=javascript-day-3&lp_useful=dislike)

* [:triumph: Not Great](https://www.surveygizmo.com/s3/4381674/DataViz-Instructor-Feedback?section=javascript-day-3&lp_useful=not%great)

- - -

### Copyright

Trilogy Education Services © 2019. All Rights Reserved.
