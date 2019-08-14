$(document).ready(function() {
    var count = 0;

    // create a new event
    $("#create-event-button").click(function() {
      // get the flex-container
      
      count++;
      var eventContainer = $(".flex-container");
  
      // create new elements
      var newDiv = $('<div class="flex-item"></div>');
      var form = $('<form></form>')
      // var titleLabel = $('<label for="title">Title</label>')
      var title = $('<input type="text" placeholder="Title" required/>');
      var saveSpan = $('<span class="save-button" onclick=save(this)>Save</span>');
      var tags = $('<div class="tags"><p>some tags</p></div>');
      var textField = $('<textarea type="text" placeholder="Write here...so what happened next?" required></textarea>');
      var editSpan = $('<span class="edit-button" onclick=edit(this)>Edit</span>');
      var deleteSpan = $('<span class="delete-button" onclick="deleteBtn(this)">Delete</span>');

      // make text fields read only
      title.prop("readonly", true);
      textField.prop("readonly", true);
      //append elements to html
      form.append(title);
      form.append(saveSpan);
      form.append(tags);
      form.append(textField);
      form.append(editSpan);
      form.append(deleteSpan);
      newDiv.append(form);
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
    parentElm.children().eq(0).prop("readonly", false);
    parentElm.children().eq(3).animate({"min-height": "250px"}).prop("readonly", false);
    //fading the parent's last child
    parentElm.children().eq(1).fadeIn(1000).css("display", "inline-block");
    parentElm.children().last().fadeIn(1000).css("display", "inline-block");

    // collapse parent siblings
    parentElm.siblings().animate({'min-height': '0px'});
    // parentElm.siblings().eq(3).animate
  };

  // collapse flex-item with save
  const save = e => {
    var parentElm = $(e).parent();
    $(e).fadeOut(1000).css("display", "none");
    parentElm.children().last().fadeOut(1000).css("display", "none");
    parentElm.animate({ "min-height":"0"});
    parentElm.children().eq(0).prop("readonly", true);
    parentElm.children().eq(3).animate({"min-height": "0px"}).prop("readonly", true);
    parentElm.children().eq(4).fadeIn(1000).css("display", "inline-block");
  };

  // update the flex-item in real time and save to the database
  const update = e => {
    
  }
  
  //   delete the event
  const deleteBtn = e => {
    var body = $("body");
    var overlay = $('<div>').attr("id", "overlay");
    var confirmation = $('<div>').attr("id", "confirmation");

    confirmation.html('<p>Are you sure you want to delete?<p><button>Yes</button><button>No</button>');
    overlay.append(confirmation);
    body.append(overlay);
    
    $("#confirmation button").click(function() {
      if($(this).val() === 'No') {
        $(this).parent().remove();
      } else {
        e.closest('div').remove(); //executes function 
        $(this).parent().parent().parent().remove();
      }

    });

  }
