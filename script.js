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

    let newObject = {
        title: newLinkTitle,
        URL: newLinkURL,
        author: newLinkauthor
    }
    linkList.push(newObject);
}
if (menuOption !== 0) {
    switch (menuOption) {
        case 1:
            listOptions();
            break;
        case 2:
            addingLink();
            break;
    }
}
