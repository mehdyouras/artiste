const galleries = {
    "gallery1": {
        "name": "gallery1",
        "figures": [
            ["assets/img/gallery1/galerie1_1-full.jpg", "assets/img/gallery1/galerie1_1.jpg", "First-aid station. Mutter Ridge, Nui Cay Tri", "First-aid station. Mutter Ridge, Nui Cay Tri"],
            ["assets/img/gallery1/galerie1_2-full.jpg", "assets/img/gallery1/galerie1_2.jpg", "Helicopter evacuation of the wounded, near hill 400", "Helicopter evacuation of the wounded, near hill 400"],
            ["assets/img/gallery1/galerie1_3-full.jpg", "assets/img/gallery1/galerie1_3.jpg", "a mortar-equipped marine wades through another of the rivers", "Within feet of the DMZ and at constant risk of ambush, a mortar-equipped marine wades through another of the rivers and steams that combined with the hot, jungled and mountainous terrain to make maneuvering on this operation such tough going"],
            ["assets/img/gallery1/galerie1_4-full.jpg", "assets/img/gallery1/galerie1_4.jpg", "At First-Aid Center During Operation Prairie", "At First-Aid Center During Operation Prairie"],
            ["assets/img/gallery1/galerie1_5-full.jpg", "assets/img/gallery1/galerie1_5.jpg", "Casualty of the ultimately successful assault on Hill 484", "Casualty of the ultimately successful assault on Hill 484"],
            ["assets/img/gallery1/galerie1_6-full.jpg", "assets/img/gallery1/galerie1_6.jpg", "Ammunition airlift during the relief of Khe Sanh", "Ammunition airlift during the relief of Khe Sanh"],
            ["assets/img/gallery1/galerie1_7-full.jpg", "assets/img/gallery1/galerie1_7.jpg", "Lance Cpl. James C. Farley manning helicopter machine gun of Yankee Papa 13", "Crew chief Lance Cpl. James C. Farley manning helicopter machine gun of Yankee Papa 13"],
            ["assets/img/gallery1/galerie1_8-full.jpg", "assets/img/gallery1/galerie1_8.jpg", "Helicopter crew chief shouting to crew as wounded pilot lay dying, Vietnam", "Helicopter crew chief James C. Farley shouting to crew as wounded pilot Lt. James E. Magel and Billy Owens lay dying, Vietnam"],
            ["assets/img/gallery1/galerie1_9-full.jpg", "assets/img/gallery1/galerie1_9.jpg", "James Farley checking on a wounded crewmate while pilot lies dying at his feet", "Helicopter crew chief James C. Farley (R) checking on a wounded crewmate while wounded pilot, Lt. James E. Magel, lies dying at his feet"],
            ["assets/img/gallery1/galerie1_10-full.jpg", "assets/img/gallery1/galerie1_10.jpg", "Lance Cpl. James Farley putting on helmet aboard Yankee Papa 13", "Lance Cpl. James Farley, helicopter crew chief, putting on helmet aboard Yankee Papa 13"],
            ["assets/img/gallery1/galerie1_11-full.jpg", "assets/img/gallery1/galerie1_11.jpg", "Wayne Holien (PFC - Marine copter gunner in Vietnam)", "Wayne Holien (PFC - Marine copter gunner in Vietnam)"]
        ]
    }
}





const fHandleGalleryTab = function(oEvent) {
    oEvent.preventDefault();
    let $elt = oEvent.currentTarget,
        $jsonFile,
        $data;
    if ($elt.classList.contains("active-top")) {
        return;
    }

    document.querySelector(".galerie .active-top").classList.remove("active-top");
    $elt.classList.add("active-top");
    document.querySelector("div ul").innerHTML = "";

    $jsonFile = galleries[$elt.id];

    $jsonFile.figures.forEach(function(figure) { document.querySelector("div ul").innerHTML += '<li><figure><a href="' + figure[0] + '" title="voir l\'image dans sa résolution originale"><img src="' + figure[1] + '" alt="' + figure[2] + '"></a><figcaption>' + figure[3] + '</figcaption></figure></li>' })

    Array.from(document.querySelectorAll(".galerie nav a")).forEach(function($element) {
        $element.addEventListener("click", fHandleGalleryTab);
    });
    Array.from(document.querySelectorAll("figure")).forEach(function($elt) {
        $elt.addEventListener("click", fHandleLightbox);
    });
    Array.from(document.querySelectorAll("figure a")).forEach(function($elt) {
        $elt.addEventListener("click", fHandleFigureLinks);
    });
}