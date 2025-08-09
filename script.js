let isDark = false;
let isAdmin = false;

document.getElementById("themeBtn").addEventListener("click", () => {
    isDark = !isDark;
    if (isDark) {
        document.documentElement.style.setProperty("--bg", "#121212");
        document.documentElement.style.setProperty("--text", "#ffffff");
    } else {
        document.documentElement.style.setProperty("--bg", "white");
        document.documentElement.style.setProperty("--text", "black");
    }
});

document.getElementById("loginBtn").addEventListener("click", () => {
    let user = prompt("Kullanıcı adı:");
    let pass = prompt("Şifre:");
    if (user === "admin" && pass === "1234") {
        alert("Giriş başarılı!");
        isAdmin = true;
        document.getElementById("addGameBtn").style.display = "inline-block";
        document.getElementById("noteBtn").style.display = "inline-block";
        document.getElementById("notes").style.display = "block";
    } else {
        alert("Hatalı giriş!");
    }
});

document.getElementById("addGameBtn").addEventListener("click", () => {
    let name = prompt("Oyun adı:");
    let url = prompt("Oyun URL:");
    if (name && url) {
        addGame(name, url);
    }
});

document.getElementById("noteBtn").addEventListener("click", () => {
    let note = prompt("Not girin:");
    if (note) {
        let li = document.createElement("li");
        li.textContent = note;
        document.getElementById("noteList").appendChild(li);
    }
});

function addGame(name, url) {
    let div = document.createElement("div");
    div.className = "game-card";
    div.innerHTML = `<a href="${url}" target="_blank">${name}</a>`;
    document.getElementById("games").appendChild(div);
}
