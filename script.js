linkList = [
    {
        title: "Facebook",
        URL: "https://web.facebook.com/",
        author: "Mark",
    },
    {
        title: "Amazon",
        URL: "https://www.amazon.com/",
        author: "John calmif",
    },
    {
        title: "Twitter",
        URL: "https://twitter.com/explore",
        author: "David brital",
    },
    {
        title: "Sport",
        URL: "https://sport.com/",
        author: "Brod Lari",
    },
];

let menuLinks = `Choose an option:
1 : Show links
2 : Add a link
3 : Remove a link
0 : Quit
`
let menuOption = prompt(menuLinks);

while (menuOption !== 0) {
    switch (linkList) {
        case 1:
            for (let i = 0; i < linkList.lenghth; i++) {
                let menuString = (`Title: ${linkList[i].title} \n URL : ${linkList[i].URL} \n Author : ${linkList[i].author}`);
                alert (menuString);
            }
            break;
        case 2:
            break;
        case 3:
            break;
    }
}
