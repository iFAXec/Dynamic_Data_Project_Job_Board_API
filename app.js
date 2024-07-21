var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        let data = JSON.parse(this.responseText);
        console.log(data);
        const jobs = document.querySelector("#container");

        data.slice(1).forEach((item, i) => {
            const div = document.createElement("div");
            div.classList.add("job");

            div.innerHTML = `

        <div class = 'left-section'>
            <h5 class= 'company' >${item.company}</h5>
            <h6 class = 'position' >${item.position}</h6>
            <p class = 'location'>${item.location}</p>
        </div>
        <div class = 'mid-section'>
            ${item.tags.map(tag =>
                `<span class='tag'>${tag}</span>`
            ).join(' ')}

        <div class='right-section'>
            <button class = 'apply'>Apply</button>
        </div>

        </div>
        `
            jobs.appendChild(div);
        });

    }
};
xhttp.open("GET", "https://remoteok.com/api", true);
xhttp.send();