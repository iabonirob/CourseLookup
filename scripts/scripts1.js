"use strict";
let data = [
    {
        CourseId: "19SUM100",
        Title: "Introduction to HTML/CSS/Git",
        Location: "Classroom 7",
        StartDate: "07/08/19",
        Fee: 100.00
    },
    {
        CourseId: "19SUM200",
        Title: "Introduction to JavaScript",
        Location: "Classroom 7",
        StartDate: "07/22/19",
        Fee: 350.00
    },
    {
        CourseId: "19SUM300",
        Title: "Introduction to Node.JS and Express",
        Location: "Classroom 7",
        StartDate: "09/09/19",
        Fee: 50.00
    },
    {
        CourseId: "19SUM400",
        Title: "Introduction to SQL and Databases",
        Location: "Classroom 7",
        StartDate: "09/16/19",
        Fee: 50.00
    },
    {
        CourseId: "19SUM500",
        Title: "Introduction to Angular",
        Location: "Classroom 7",
        StartDate: "09/23/19",
        Fee: 50.00
    },
    {
        CourseId: "18SUM100",
        Title: "Microeconomics",
        Location: "Classroom 2",
        StartDate: "07/08/19",
        Fee: 100.00
    },
    {
        CourseId: "18SUM200",
        Title: "Macroeconomics",
        Location: "Classroom 7",
        StartDate: "07/22/19",
        Fee: 350.00
    },
    {
        CourseId: "18SUM300",
        Title: "Financial Economics",
        Location: "Classroom 1",
        StartDate: "09/09/19",
        Fee: 50.00
    },
    {
        CourseId: "18SUM400",
        Title: "Political Science",
        Location: "Classroom 7",
        StartDate: "09/16/19",
        Fee: 50.00
    },
    {
        CourseId: "18SUM500",
        Title: "French 101",
        Location: "Classroom 2",
        StartDate: "09/23/19",
        Fee: 50.00
    }
];


window.onload = function () {
    loadTitlesDropdown();
}



function loadTitlesDropdown() {
    const titlesDropdown = document.getElementById("classesDropdown");

    //create <option value = "">Select One... </option>
    let select1OneOption = new Option("Select One...", "");
    titlesDropdown.appendChild(select1OneOption);

    for (let i = 0; i < data.length; i++) {
        let theOption = new Option(data[i].Title,data[i].CourseId);
        //add that option to the <select> elemnt
        titlesDropdown.appendChild(theOption);
    }
}