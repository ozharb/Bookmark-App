

const bookmarks = [];
let adding = false;
let error = null;
let filter = 0;

const findById = function (id) {
  return this.bookmarks.find(currentItem => currentItem.id === id);
};

const addBookmark= function (item) {
  this.bookmarks.push(item);
};



const findAndDelete = function (id) {
  this.bookmarks = this.bookmarks.filter(bookmarks => bookmarks.id !== id);
};


function findAndUpdate(id, newData){
  const updateItem = this.bookmarks.find(item => item.id==id)
    Object.assign(updateItem, newData)
  }
  const addItem = function (item) {
    this.bookmarks.push(item);
  };
  const setError = function (error) {
    this.error = error;
  };

export default {
error,
findById,
addItem,
findAndDelete,
findAndUpdate,
setError,
bookmarks,
adding,
filter 
};