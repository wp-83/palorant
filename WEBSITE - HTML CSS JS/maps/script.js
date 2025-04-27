const mapsIdx = document.querySelectorAll("#mapIdx"); 

mapsIdx.forEach((map, idx) => {
    map.addEventListener("click", function(){
        document.querySelector(".active-map-index")?.classList.remove("active-map-index");
        map.classList.add("active-map-index");

        document.querySelector(".video-background").innerHTML = 
        `
            <video muted autoplay loop>
                <source src="${maps[idx].video}" alt="map-video-bg" type="video/mp4" class="video-bg">
            </video>
        `;

        let containerData = ``;
        containerData += 
        `   
            <div class="information">
                <div class="vertical-line"></div>
                <div class="map-identity">
                    <p class="map-name">${maps[idx].name.toUpperCase()}</p>
                    <p class="map-description">${maps[idx].description}</p>
                </div>
            </div>
            <div class="map-picture">
                <div class="carousel-container">
                    <div class="carousel" style="--amount: 5">
                        <div class="image" style="--currPos: 1">
                            <img src="${maps[idx].image[0]}" alt="picture-1">
                        </div>
                        <div class="image" style="--currPos: 2">
                            <img src="${maps[idx].image[2]}" alt="picture-2">
                        </div>
                        <div class="image" style="--currPos: 3">
                            <img src="${maps[idx].image[3]}" alt="picture-3">
                        </div>
                        <div class="image" style="--currPos: 4">
                            <img src="${maps[idx].image[4]}" alt="picture-4">
                        </div>
                        <div class="image" style="--currPos: 5">
                            <img src="${maps[idx].image[5]}" alt="picture-5">
                        </div>
                    </div>
                </div>
                <div class="map-pattern">
                    <img src="${maps[idx].image[1]}" alt="map-pattern">
                </div>
            </div>
        `;

        document.querySelector(".second-section").innerHTML = containerData;
    });
});