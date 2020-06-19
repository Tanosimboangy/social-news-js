// This is my object which contains all of the list of the links
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
// This is the input for the user to enter the option
let menuLinks = `Choose an option:
1 : Show links
2 : Add a link
3 : Remove a link
0 : Quit
`
let menuOption = Number(prompt(menuLinks));

const listOptions = () => {
    for (let i = 0; i < linkList.length; i++) {
        let listOption = `Title: ${linkList[i].title} \n URL : ${linkList[i].Url} \n Author : ${linkList[i].author}`;
        alert (listOption);
    }
}
const addingLink = () => {
    const newLinkTitle = prompt("Enter the title of the new link");
    const newLinkURL = prompt("Enter the URL of the new link");
    const newLinkauthor = prompt("Enter the author of the new link");

    if (!newLinkURL.startsWith("http://") && !newLinkURL.startsWith("https://")) {
        newLinkURL = `https://${newLinkURL}`;
        }

    let newObject = {
        title: newLinkTitle,
        Url: newLinkURL,
        author: newLinkauthor
    }

    linkList.push(newObject);
}
const deleteLink = () => {
    let indexDelete = Number(
        prompt(`Enter the index of the link to be removed(Between 1 and ${linkList.length})`));
    let deletelink = linkList.splice(indexDelete--, 1);
    alert(`You deleted ${deletelink[indexDelete].title}\n ${deletelink[indexDelete].Url}\n ${deletelink[indexDelete].author}`);
}

while (menuOption !== 0) {
    if (menuOption === 1) {
        listOptions();
    } else if (menuOption === 2) {
        addingLink();
    } else if (menuOption === 3) {
        deleteLink();
    }
    menuOption = Number(prompt(menuLinks));
}