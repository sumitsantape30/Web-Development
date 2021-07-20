Profile Lookup
We have an array of objects representing different people in our contacts lists.

A lookUpProfile function that takes name and a property (prop) as arguments has been pre-written for you.

The function should check if name is an actual contact's firstName and the given property (prop) is a property of that contact.

If both are true, then return the "value" of that property.

If name does not correspond to any contacts then return the string No such contact.

If prop does not correspond to any valid properties of a contact found to match name then return the string No such property.

Code:

function lookUpProfile(name, prop) {
  for (let x = 0; x < contacts.length; x++) {
    if (contacts[x].firstName === name) {
      if (contacts[x].hasOwnProperty(prop)) {
        return contacts[x][prop];
      } else {
        return "No such property";
      }
    }
  }
  return "No such contact";
}


Code Explanation:

The for loop runs, starting at the first object in the contacts list.
If the firstName parameter passed into the function matches the value of the "firstName" key in the first object, the if statement passes.
Then, we use .hasOwnProperty() method (checks if there’s a given property and returns a boolean) with prop as an argument. If it’s true, the value of prop is returned.
If the second if statement fails, No such property is returned.
If the first if statement fails, the for loop continues on to the next object in the contacts list.
If the firstName parameter isn’t matched by the final contacts object, the for loop exits and No such contact is returned.
