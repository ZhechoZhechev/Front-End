function extract(content) {
    let elementText = document.getElementById(content).textContent;
    const regex = /\(([^)]+)\)/g;

    let matches = elementText.match(regex);

    if (matches) {
        matches = matches.map(match => match.slice(1, -1));
    }

    console.log(matches);

    return result = matches.join("; ");
}