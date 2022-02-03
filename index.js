
function shuffleChoices() {
    var listItems = document.querySelectorAll(".choice");
    var listItemsContents = [];
    var index = [0, 1, 2, 3];
    var indexNew = [];
    for(var i = 0; i < listItems.length; i++) {
        listItemsContents.push(listItems[i].innerHTML);
        var randIndex = Math.floor(Math.random()*(4-i));
        indexNew[i] = index[randIndex];
        index.splice(randIndex, 1);
    }
    var tempContents = listItemsContents;
    for(var j = 0; j < indexNew.length; j++) {
        listItems[j].innerHTML = tempContents[indexNew[j]];

    }

}
