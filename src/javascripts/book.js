

const Book1 = { title: "Michael Vey", author: "Richard Paul Evans", description: "Running from everything and trying to find the truth. Also cool super powers", genre: "Sci-Fi", publication_year: 2011};

const Book2 = { title: "Hunger Games", author: "Suzanne Collins", description: "Kids murdering each other for the sake of food and enjoyment of others", genre: "Dystopian, science fiction, drama, action", publication_year: 2007};

const Book3 = { title: "The 13th Reality", author: "James Dashner", description: "Kid travels the universe and has fun doing things", genre: "Young adult science fiction", publication_year: 2013};

const Book4 = { title: "Leven Thumps", author: "Obery Skye", description: "People doing magic people things", genre: "Fantasy, Adventure", publication_year: 2005};

const Book5 = { title: "Ranger's Apprentice", author: "John Flanagan", description: "Murder at it's finest", genre: "Fantasy, Adventure", publication_year: 2004};

const Book6 = { title: "The End of Infinity", author: "Matt Myklusch", description: "Person finding his interself", genre: "Fantasy, Adventure", publication_year: 2012};

const Book7 = { title: "The Mortal Instruments", author: "Cassandra Clare", description: "More murder and people doing people things and running from things", genre: "\n" +
        "Urban fantasy, Contemporary fantasy, Paranormal romance, Young adult", publication_year: 2007};

const Book8 = { title: "Ender's Game", author: "Orson Scott Card", description: "A video game that became reality and aliens and murder", genre: "Science fiction", publication_year: 1985};

const Book9 = { title: "Adventures Wanted: Slathbog's Gold", author: "Mark Forman", description: "Person adventuring, meeting new people, and killing monsters", genre: "Fantasy, Adventure", publication_year: 2004};

const Book10 = { title: "Ranger's Apprentice Book 2", author: "John Flanagan", description: "Murder at it's finest", genre: "Fantasy, Adventure", publication_year: 2004};



const BookList = [Book1, Book2, Book3, Book4, Book5, Book6, Book7, Book8, Book9, Book10];
printArray(BookList);
sortByAttribute(BookList, "author");

function printArray(BookList) {
    for (const x of BookList) {
        for (const attribute in x) {
            console.log(`${attribute}: ${x[attribute]}`);
        }
        console.log("\n");
    }
}

function sortByAttribute(BookList, sortAttribute){
    let BookListSorted = [];
    let BookListSorted2 = [];

    for (const x of BookList) {
        if("title" == sortAttribute){
            BookListSorted.push(x.title);
        }else if("author" == sortAttribute){
            BookListSorted.push(x.author);
        }else if("description" == sortAttribute){
            BookListSorted.push(x.description);
        }else if("genre" == sortAttribute){
            BookListSorted.push(x.genre);
        }else if("publication_year" == sortAttribute){
            BookListSorted.push(x.publication_year);
        }else{
            console.log("Unknown Attribute")
        }
    }
    BookListSorted.sort();
   // console.log(BookListSorted);
    for(let i = 0; i < 10; i++){
        for (const x of BookList) {
            if(BookListSorted[i] == x.title || BookListSorted[i] == x.genre|| BookListSorted[i] == x.author|| BookListSorted[i] == x.publication_year|| BookListSorted[i] == x.description) {
                if (!(BookListSorted2.includes(x))) {
                    if (BookListSorted2.length == 0) {
                        BookListSorted2.push(x);
                    } else {
                        BookListSorted2.push(x);
                    }
                }
            }
        }
    }
    //console.log(BookListSorted2)
    printArray(BookListSorted2);


}

