$(document).ready(function() {
    var count = 0;

    // create a new event
    $("#create-event-button").click(function() {
      // get the flex-container
      
      count++;
      var eventContainer = $(".flex-container");
  
      // create new elements
      var newDiv = $('<div id="item' + count + '" class="flex-item"></div>');
      var title = $("<h3>Title</h3>");
      var saveSpan = $('<span class="save-button" onclick=save(this)>Save</span>');
      var tags = $('<div class="tags"><span>some tags</span></div>');
      var textField = $('<input type="text" />');
      var editSpan = $('<span class="edit-button" onclick=edit(this)>Edit</span>');
  
      //append elements to html
      newDiv.append(title);
      newDiv.append(saveSpan);
      newDiv.append(tags);
      newDiv.append(textField);
      newDiv.append(editSpan);
      eventContainer.append(newDiv);
    });
    
  });


  // expand flex-item to edit
  //passing a reference to the flex-item's edit button
  const edit = e => {
    //grabbing the elm's parent
    var parentElm = $(e).parent();
    $(e).fadeOut(1000).css("display", "none");
    parentElm.animate({"min-height": "300px"});
    //fading the parent's last child
    parentElm.children().eq(1).fadeIn(1000).css("display", "inline-block");
  };

  // collapse flex-item with save
  const save = e => {
    var parentElm = $(e).parent();
    $(e).fadeOut(1000).css("display", "none");
    parentElm.animate({ "min-height":"0"});
    parentElm.children().last().fadeIn(1000).css("display", "inline-block");
  };