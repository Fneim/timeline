$(document).ready(function() {
    var count = 0;

    // create a new event
    $("#create-event-button").click(function() {
      // get the flex-container
      
      count++;
      var eventContainer = $(".flex-container");
  
      // create new elements
      var newDiv = $('<div class="flex-item"></div>');
      var title = $("<h3>Title</h3>");
      var saveSpan = $('<span class="save-button" onclick=save(this)>Save</span>');
      var tags = $('<div class="tags"><p>some tags</p></div>');
      var textField = $('<textarea type="text" placeholder="What happened next?..."></textarea>');
      var editSpan = $('<span class="edit-button" onclick=edit(this)>Edit</span>');
      var deleteSpan = $('<span class="delete-button" onclick="deleteBtn(this)">Delete</span>');
  
      //append elements to html
      newDiv.append(title);
      newDiv.append(saveSpan);
      newDiv.append(tags);
      newDiv.append(textField);
      newDiv.append(editSpan);
      newDiv.append(deleteSpan);
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
    parentElm.children().eq(3).animate({"min-height": "250px"});
    //fading the parent's last child
    parentElm.children().eq(1).fadeIn(1000).css("display", "inline-block");
    parentElm.children().last().fadeIn(1000).css("display", "inline-block");
  };

  // collapse flex-item with save
  const save = e => {
    var parentElm = $(e).parent();
    $(e).fadeOut(1000).css("display", "none");
    parentElm.children().last().fadeOut(1000).css("display", "none");
    parentElm.animate({ "min-height":"0"});
    parentElm.children().eq(3).animate({"min-height": "0px"});
    parentElm.children().eq(4).fadeIn(1000).css("display", "inline-block");
  };
  
  //   delete the event
  const deleteBtn = e => {
    var confirmation = prompt("Are you sure you want to delete this event?");
    if(confirmation === null) {
        return; //breaks out of function
    } else {
        e.closest('div').remove(); //executes function 
    }
  }
