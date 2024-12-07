const posts =  [
    {
        id: 1,
        title: "My first post",
        body: "This is my <strong>first</strong> post."
    },
    {
        id: 2,
        title: "My second post",
        body: "This is my <i>second</i> post"
    },
    {
        id: 3,
        title: "My third post",
        body: "This is my third post"
    }
];

const links = [
    {
        id: 1,
        name: "home",
        url: "index.html"
    },
    {
        id: 2,
        name: "portfolio",
        url: "portfolio.html"
    },
    {
        id: 3,
        name: "contact me",
        url: "contact.html"
    }
];
/*Vue.createApp({
    data(){
        return{
            // Here we declare all of our data properties


        }
    }
}).mount("header");*/
// Independent apps can have their own data.
// Options can be specified to createApp() inside of the args using objects.
// Data is the state of the application
// The data property is a function that returns an object
// THIS IS A PLACE TO STORE THE INFORMATION THIS APPLICATION NEEDS.







Vue.createApp({
    data(){
        return{
            name: "Kaci Craycraft",
            // This property is NOT AVAILABLE OUTSIDE OF THE HEADER
            links,
            posts,
            // Since ECMA6 - we can use property hand syntax. simplify when name and value are the same to just one word rather than a key value pair.
            // Data properties are reactive.
            // If we had thousands of blog posts and deleted one, what happens
                /*A vue's key allows indexing objects. put key in html
                * This better identifies which objects need updated/deleted
                * Without keys, we would need an algorithm to determine this shtuff
                * Key should be unique (prod_id, teacher_id)
                * Here, we have post.id key="post.id"*/
            darkModeSet: true,
            // The names and capitalization here need to be named just like they are in JS editing of style properties before.
            darkMode: {
                backgroundColor: "#38383A",
                color: "whitesmoke"
            },
            baseStyle: {
                fontFamily: "monospace"
            }
        }
    },
    methods:{
        toggleDarkMode(){
            this.darkModeSet = !this.darkModeSet;
            // Both the data and the method sections are part of the options API
            // This is the most common way to create a VUe app
            // There is also a composition API
                // It is newer and more flexible.
        }
    }
}).mount("body"); // Inside the "" is a query selector format
// We can only target unique elements.



// Create the application
// First, we need to mount our vue app to our HTMLm -> index.html

