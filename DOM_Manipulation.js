function showFilter() {
    var filter = document.getElementById("filterContent");
    if (filter.style.display == "none") {
        filter.style.display = "block";
    } else {
        filter.style.display = "none";
    }
}

function showAddNew() {
    var newContent = document.getElementById("newContent");
    if (newContent.style.display == "none") {
        newContent.style.display = "flex";
    } else {
        newContent.style.display = "none";
    }
}

function filterArticles() {
    var check1 = document.getElementById("opinionCheckbox").checked;
    var check2 = document.getElementById("recipeCheckbox").checked;
    var check3 = document.getElementById("updateCheckbox").checked;

    var list1 = document.getElementsByClassName("opinion");
    var list2 = document.getElementsByClassName("recipe");
    var list3 = document.getElementsByClassName("update");

    for (var i = 0; i < list1.length; i++) {
        if (check1 == true) {
            list1[i].style.display = "block";
        } else {
            list1[i].style.display = "none";
        }
    }

    for (var i = 0; i < list2.length; i++) {
        if (check2 == true) {
            list2[i].style.display = "block";
        } else {
            list2[i].style.display = "none";
        }
    }

    for (var i = 0; i < list3.length; i++) {
        if (check3 == true) {
            list3[i].style.display = "block";
        } else {
            list3[i].style.display = "none";
        }
    }
}

function addNewArticle() {
    var title = document.getElementById("inputHeader").value;
    var text = document.getElementById("inputArticle").value;
    var type = "";

    if (document.getElementById("opinionRadio").checked) {
        type = "Opinion";
    }
    if (document.getElementById("recipeRadio").checked) {
        type = "Recipe";
    }
    if (document.getElementById("lifeRadio").checked) {
        type = "Life Update";
    }

    if (title == "" || text == "" || type == "") {
        alert("Please fill in all fields.");
        return;
    }

    var list = document.getElementById("articleList");
    var article = document.createElement("article");

    var cName = "";
    if (type == "Life Update") {
        cName = "update";
    } else {
        cName = type.toLowerCase();
    }
    article.className = cName;

    article.innerHTML = "<span class='marker'>" + type + "</span>" +
                        "<h2>" + title + "</h2>" +
                        "<p>" + text + "</p>" +
                        "<p><a href='moreDetails.html'>Read more...</a></p>";
                        /* did this cause its easier to visualize/read it in my head idk why */
    list.appendChild(article);

    document.getElementById("inputHeader").value = "";
    document.getElementById("inputArticle").value = "";
    document.getElementById("opinionRadio").checked = false;
    document.getElementById("recipeRadio").checked = false;
    document.getElementById("lifeRadio").checked = false;

    filterArticles();
}

window.onload = function () {
    document.getElementById("filterContent").style.display = "none";
    document.getElementById("newContent").style.display = "none";
}
