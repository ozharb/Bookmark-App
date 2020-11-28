import $ from 'jquery';

import 'normalize.css';
import './index.css';

import bookmarksList from './bookmarks-list';
import api from './api';
import store from './store';

const main = function () {
  api.getItems()
  
  .then((items) => {
    items.forEach((item) => store.addItem(item));
    items.forEach((item) => item.expanded = false);
    bookmarksList.render();
    console.log(store.bookmarks)
  })
  

  bookmarksList.bindEventListeners();
  bookmarksList.render();
};

$(main);

/*
As a user:

I can add bookmarks to my bookmark list. Bookmarks contain:

-title
-url link
description
rating (1-5)
I can see a list of my bookmarks when I first open the app

All bookmarks in the list default to a "condensed" view showing only title and rating
I can click on a bookmark to display the "detailed" view

Detailed view expands to additionally display description and a "Visit Site" link
I can remove bookmarks from my bookmark list

I receive appropriate feedback when I cannot submit a bookmark

Check all validations in the API documentation (e.g. title and url field required)
I can select from a dropdown (a <select> element) a "minimum rating" to filter the list by all bookmarks rated at or above the chosen selection

(Extension feature - optional) I can edit the rating and description of a bookmark in my list
*/