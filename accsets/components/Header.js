const Header = (text) => {
    const header = document.getElementById("header");
    return header.innerHTML = `<span>${text}</span>`;
}