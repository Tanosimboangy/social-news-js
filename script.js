// This is my object which contains all of the list of the links.
let linkList = [
    {
        title: "Facebook",
        Url: "https://web.facebook.com/",
        author: "Mark",
    },
    {
        title: "Amazon",
        Url: "https://www.amazon.com/",
        author: "John calmif",
    },
    {
        title: "Twitter",
        Url: "https://twitter.com/explore",
        author: "David brital",
    },
    {
        title: "Sport",
        Url: "https://sport.com/",
        author: "Brod Lari",
    },
];

// This is the input for the user to enter the option.
let menuLinks = `Choose an option:
1 : Show links
2 : Add a link
3 : Remove a link
0 : Quit
`
let menuOption = Number(prompt(menuLinks));

// This is a function for the showing lists.
const listOptions = () => {
    for (let i = 0; i < linkList.length; i++) {
        let listOption = `Title: ${linkList[i].title} \n URL : ${linkList[i].Url} \n Author : ${linkList[i].author}`;
        alert (listOption);
    }
};

// Setting up the function for the adding new link.
const addingLink = () => {
    let newLinkTitle = prompt("Enter the title of the new link");
    let newLinkURL = prompt("Enter the URL of the new link");
    let newLinkauthor = prompt("Enter the author of the new link");

// Check if the new link does start with (`https://`), if so, this codition will add one in front.
    if (!newLinkURL.startsWith("http://") && !newLinkURL.startsWith("https://")) {
        newLinkURL = `https://${newLinkURL}`;
    }

// The new object for user that helps the user for the new object.
    let newObject = {
        title: newLinkTitle,
        Url: newLinkURL,
        author: newLinkauthor
    }
    linkList.push(newObject);
    return;
};

// A function for the deleting part.
const deleteLink = () => {
    let indexDelete = Number(
        prompt(`Enter the index of the link to be removed(Between 1 and ${linkList.length})`));
    let deletelink = linkList.splice(indexDelete--, 1);
    alert(`You deleted ${deletelink[indexDelete].title}\n ${deletelink[indexDelete].Url}\n ${deletelink[indexDelete].author}`);
};

// While loop for the whole condition.
while (menuOption !== 0) {
    if (menuOption === 1) {
        listOptions();
    } else if (menuOption === 2) {
        addingLink();
    } else if (menuOption === 3) {
        deleteLink();
    } else {
        alert("Error, please enter appropriate number, between 1 to 3");
    }
    menuOption = Number(prompt(menuLinks));
}