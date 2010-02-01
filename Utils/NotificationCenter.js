/*
* NotificationCenter for MooTools (c) 2009 Tobias Svensson
*
* License: MIT
*
*/
 
var notificationCenter = new Class({
  initialize: function() {
    this.observers = [];
  },
  
  addObserver: function(observer, name, selector, sender) {
    if (!observer || !name || !selector)
      return;
 
    var newObserver = {
      'observer' : observer,
      'name' : name,
      'selector' : selector,
      'sender' : sender
    };
    this.observers.include(newObserver);
  },
  
  postNotification: function(name, sender, object) {
    if (!name || !sender || !object)
      return;
    
    this.observers.each(function(o, index) {
      if (o.name === name) {
        if ((o.sender && o.sender === sender) || (!o.sender)) {
          o.selector(name, sender, object);
        }
      }
    });
  },
  
  removeObserver: function(observer) {
    if (!observer)
      return;
 
    this.observers.each(function(o, index) {
      if (o.observer === observer) {
        this.observers.erase(o);
      }
    });    
  }
});
 
window.addEvent('domready', function() {
  defaultCenter = new notificationCenter();
});
