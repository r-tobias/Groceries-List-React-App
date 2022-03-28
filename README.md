# Grocery List App
## Project Link
https://groceries-react-app.netlify.app/

Run the code:
### `npm i`
### `npm start`
### `npm test`


## Deliverables
Build a grocery app that allows users to make a grocery list

## Technical Requirements

    Read over these specs and draw a mockup of your app (don't worry about bonus features at this point)
    Must have grocery items in this shape

{
  item: '',
  brand '',
  units: '',
  quantity: 0,
  isPurchased: false
}

    Make an array of 3 objects using the above shape and render the item, quantity and units (12 pack, 1lb, 2 liters, etc.)
    Make inputs so that new items can be added
    Conditionally render the grocery items based on whether or not they were purchased (ok to have hard coded values for isPurchased)
    Add some style to your app
    Stretch Add a button that says 'remove' and when clicked the value of isPurchased is toggled


## Hungry for more

    Make multiple grocery lists (one for each family member) and have them update independently
    sort your list alphabetically
    create other ways to sort your data (ie by quantity)
    change the 'remove' button's functionality to actually remove the item from the list
    add a 'later' button that toggles the css (gray text, strikeout etc.) if the item should be purchased later
    expand your app to allow for images (the images should be an http url ) and then render the image in your app - some images may take longer to load and not appear correctly, look into react life cycle events and/or lazy loading (if that is too much just keep trying images, some will work and save lifecycles/lazy loading for later)

