const galleries = {
    "gallery1": {
        "name": "gallery1",
        "figures": [
            ["assets/img/gallery1/galerie1_1-full.jpg", "assets/img/gallery1/galerie1_1.jpg", "Dropping of troops, Mekong Delta", "Dropping of troops, Mekong Delta"],
            ["assets/img/gallery1/galerie1_2-full.jpg", "assets/img/gallery1/galerie1_2.jpg", "Yankee Papa 13", "Yankee Papa 13"],
            ["assets/img/gallery1/galerie1_3-full.jpg", "assets/img/gallery1/galerie1_3.jpg", "Yankee Papa 13", "Yankee Papa 13"],
            ["assets/img/gallery1/galerie1_4-full.jpg", "assets/img/gallery1/galerie1_4.jpg", "Dennis Driscol at front door after Viet Cong Bombings", "Dennis Driscol, Son of LT. Colonel Arthur Driscoll at front door after Viet Cong Bombings"],
            ["assets/img/gallery1/galerie1_5-full.jpg", "assets/img/gallery1/galerie1_5.jpg", "Refugees fleeing from the India-China border war boarding a train", "Refugees fleeing from the India-China border war boarding a train"],
            ["assets/img/gallery1/galerie1_6-full.jpg", "assets/img/gallery1/galerie1_6.jpg", "American helicopter H-21 hovering above soldiers in combat zone during Vietnam War", "American helicopter H-21 hovering above soldiers in combat zone during Vietnam War"],
            ["assets/img/gallery1/galerie1_7-full.jpg", "assets/img/gallery1/galerie1_7.jpg", "Lance Cpl. James C. Farley manning helicopter machine gun of Yankee Papa 13", "Crew chief Lance Cpl. James C. Farley manning helicopter machine gun of Yankee Papa 13"],
            ["assets/img/gallery1/galerie1_8-full.jpg", "assets/img/gallery1/galerie1_8.jpg", "Helicopter crew chief shouting to crew as wounded pilot lay dying, Vietnam", "Helicopter crew chief James C. Farley shouting to crew as wounded pilot Lt. James E. Magel and Billy Owens lay dying, Vietnam"],
            ["assets/img/gallery1/galerie1_9-full.jpg", "assets/img/gallery1/galerie1_9.jpg", "James Farley checking on a wounded crewmate while pilot lies dying at his feet", "Helicopter crew chief James C. Farley (R) checking on a wounded crewmate while wounded pilot, Lt. James E. Magel, lies dying at his feet"],
            ["assets/img/gallery1/galerie1_10-full.jpg", "assets/img/gallery1/galerie1_10.jpg", "Lance Cpl. James Farley putting on helmet aboard Yankee Papa 13", "Lance Cpl. James Farley, helicopter crew chief, putting on helmet aboard Yankee Papa 13"],
            ["assets/img/gallery1/galerie1_11-full.jpg", "assets/img/gallery1/galerie1_11.jpg", "Wayne Holien (PFC - Marine copter gunner in Vietnam)", "Wayne Holien (PFC - Marine copter gunner in Vietnam)"]
        ]
    },
    "gallery2": {
        "name": "gallery2",
        "figures": [
            ["assets/img/gallery2/galerie2_1-full.jpg", "assets/img/gallery2/galerie2_1.jpg", "First-aid station. Mutter Ridge, Nui Cay Tri", "First-aid station. Mutter Ridge, Nui Cay Tri"],
            ["assets/img/gallery2/galerie2_2-full.jpg", "assets/img/gallery2/galerie2_2.jpg", "Helicopter evacuation of the wounded, near hill 400", "Helicopter evacuation of the wounded, near hill 400"],
            ["assets/img/gallery2/galerie2_3-full.jpg", "assets/img/gallery2/galerie2_3.jpg", "a mortar-equipped marine wades through another of the rivers", "Within feet of the DMZ and at constant risk of ambush, a mortar-equipped marine wades through another of the rivers and steams that combined with the hot, jungled and mountainous terrain to make maneuvering on this operation such tough going"],
            ["assets/img/gallery2/galerie2_4-full.jpg", "assets/img/gallery2/galerie2_4.jpg", "At First-Aid Center During Operation Prairie", "At First-Aid Center During Operation Prairie"],
            ["assets/img/gallery2/galerie2_5-full.jpg", "assets/img/gallery2/galerie2_5.jpg", "Casualty of the ultimately successful assault on Hill 484", "Casualty of the ultimately successful assault on Hill 484"],
            ["assets/img/gallery2/galerie2_6-full.jpg", "assets/img/gallery2/galerie2_6.jpg", "F-102's along Vietnam coast", "F-102's along Vietnam coast"],
            ["assets/img/gallery2/galerie2_7-full.jpg", "assets/img/gallery2/galerie2_7.jpg", "First Aid Station, DMZ", "First Aid Station, DMZ"],
            ["assets/img/gallery2/galerie2_8-full.jpg", "assets/img/gallery2/galerie2_8.jpg", "Inspecting 122 MM artillery piece near Laos border", "Inspecting 122 MM artillery piece near Laos border"],
            ["assets/img/gallery2/galerie2_9-full.jpg", "assets/img/gallery2/galerie2_9.jpg", "Wounded GI near DMZ", "Wounded GI near DMZ"],
            ["assets/img/gallery2/galerie2_10-full.jpg", "assets/img/gallery2/galerie2_10.jpg", "An American soldier with a bandage head wound dazed", "An American soldier with a bandage head wound dazed after participating in Operation Prairie"],
            ["assets/img/gallery2/galerie2_11-full.jpg", "assets/img/gallery2/galerie2_11.jpg", "2nd Battalion, 5th Marines making sweep below DMZ, as part of Operation Prairie", "2nd Battalion, 5th Marines making sweep below DMZ, as part of Operation Prairie"],
            ["assets/img/gallery2/galerie2_12-full.jpg", "assets/img/gallery2/galerie2_12.jpg", "US Army soldiers give the thumbs-up signol to helicopters overhead during the Operation Pegasus phase of the Battle of the Sanh, Vietnam", "US Army soldiers give the thumbs-up signol to helicopters overhead during the Operation Pegasus phase of the Battle of the Sanh, Vietnam"],
            ["assets/img/gallery2/galerie2_13-full.jpg", "assets/img/gallery2/galerie2_13.jpg", "On Route 9 during Operation Pegasus, Vietnam", "On Route 9 during Operation Pegasus, Vietnam"],
            ["assets/img/gallery2/galerie2_14-full.jpg", "assets/img/gallery2/galerie2_14.jpg", "Ammunition airlift during the relief of Khe Sanh", "Ammunition airlift during the relief of Khe Sanh"],
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

    $jsonFile.figures.forEach(function(figure) { document.querySelector("div ul").innerHTML += '<li><figure><div class="loader"></div><a href="' + figure[0] + '" title="voir l\'image dans sa résolution originale"><img src="' + figure[1] + '" alt="' + figure[2] + '"></a><figcaption>' + figure[3] + '</figcaption></figure></li>' })

    Array.from(document.querySelectorAll("figure img")).forEach(function($element) {
        $element.addEventListener("load", function() {
            $element.parentNode.parentNode.removeChild($element.parentNode.parentNode.childNodes[0]);
        })
    });

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