# Answers

## Bugs found

### Add a computer:

 1. When I try to create a computer without entering the required data, when clicking on "Create" it is displaying an unfriendly error message on the user's screen: "Failed to refine type : Predicate isEmpty() did not fail." - We need to think about the user experience and display a friendly message.

 2. The same behavior happens when I try to put a date in the invalid format, the error "Failed to decode date : java.time.format.DateTimeParseException: Text 'test' could not be parsed at index 0" is displayed. We also need to think about a user-friendly message. A tip would be to create a mask for the the acceptable date format and lock the input to only receive data in number format

 3. We need to make a small adjustment to the date field tip that is bringing the text like "Date ('yyyy-MM-dd')" the MM needs to be lowercase to maintain the standard format.

 4. When I put a discontinued date equal to introduced data, it displays the error message "Discontinued date is before introduction date" but the message is wrong because the values are the same.

 5. I can create a record with an Introduced date in the future.

 6. I can create a record with a Discontinued date in the future.

 7. the computer's registration is not persisting in the DB, when I access the list and consult, the registration is not displayed, even with the success message. I noticed that on the network the request is making a post but the status is 303 and it is just making a redirect to the home page.

### Edit computer:

 1. When I access the edit and delete the record, the bank record is not being deleted, when I access the list and consult it, the value is still being displayed. I noticed that on the network the request is making a post and the status is 303 and it is just making a redirect to the home page.

## Automation Answers

### package.json:

 1. I created an execution shortcut in the scripts to make it easier to run tests in different environments. As the environments are parameterized, simply add, for example, production urls or other environments to reuse the same code.

### cypress.config.js: 

 1. I added the "retries" parameter to allow the test scenario to be re-executed if a failure occurs. This practice is good because when we have the test cycle running in a pipeline.

 ### support/e2e.js:

 1. This is the file where I am importing custom commands.

 ### commands/:

 1. Inside the commands folder I created the site directories using the page objects pattern, each folder has the element map and its file with custom commands.

 ### e2e:

 1. in the e2e folder are the test scenarios

NOTE: I'm doing basic validations, such as: whether the elements are visible on the pages when they are loaded, when a redirect happens, whether the displayed url is correct, typing a value, saving it in a variable, and validating whether the variable is being displayed on other pages, text validations, intercept to monitor requests made to the page, among other things. hope you like. I took a total of 3 and a half hours to do the automation and another 1 hour to complete the README and ANSWERS files.