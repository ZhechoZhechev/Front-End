function colorize() {
    
    let rowsToColorize = Array.from(document.querySelectorAll("tr:nth-child(even)"));

    rowsToColorize.forEach(row => row.style.backgroundColor = "Teal");
}