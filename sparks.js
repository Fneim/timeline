$(document).ready(function() {
    
});

const linkCharacter = () => {
    var character = $("#link-characters").val();
    var characterSpan = $( `<span><i class="fas fa-user-circle">${character}</i></span>`);
    console.log(character);
    $("#characters-container div").append(characterSpan);
    $("#link-characters").prop("selected", false);
}