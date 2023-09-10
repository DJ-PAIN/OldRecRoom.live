
const apiURL = "https://api.oldrecroom.com"
const imgURL = "https://img.oldrecroom.com"



var instagram1
var instagram2
var instagram3
var instagram4
var instagram5
var instagram6
var instagram7
var instagram8
var instagram9
var instagram10
var instagram11
var instagram12

function UpdateVideos() {
    console.log("Running")
    div1 = document.getElementById("1")

    imgle1 = div1.getElementsByTagName("img")[0]
    imgle2 = div1.getElementsByTagName("img")[1]
    imgle3 = div1.getElementsByTagName("img")[2]
    imgle4 = div1.getElementsByTagName("img")[3]
    imgle5 = div1.getElementsByTagName("img")[4]
    imgle6 = div1.getElementsByTagName("img")[5]
    imgle7 = div1.getElementsByTagName("img")[6]
    imgle8 = div1.getElementsByTagName("img")[7]
    imgle9 = div1.getElementsByTagName("img")[8]
    imgle10 = div1.getElementsByTagName("img")[9]
    imgle11 = div1.getElementsByTagName("img")[10]
    imgle12 = div1.getElementsByTagName("img")[11]

    
    imgle1.src = instagram1
    imgle2.src = instagram2
    imgle3.src = instagram3
    imgle4.src = instagram4
    imgle5.src = instagram5
    imgle6.src = instagram6
    imgle7.src = instagram7
    imgle8.src = instagram8
    imgle9.src = instagram9
    imgle10.src = instagram10
    imgle11.src = instagram11
    imgle12.src = instagram12
  

}

function GetInstagram() {
    f = fetch(apiURL + "CommunityBoard.json",).then((a)=>{a.json().then((response) => {
        instagram1 = imgURL + response.InstagramImages[0].ImageName
        instagram2 = imgURL + response.InstagramImages[1].ImageName
        instagram3 = imgURL + response.InstagramImages[2].ImageName
        instagram4 = imgURL + response.InstagramImages[3].ImageName
        instagram5 = imgURL + response.InstagramImages[4].ImageName
        instagram6 = imgURL + response.InstagramImages[5].ImageName
        instagram7 = imgURL + response.InstagramImages[6].ImageName
        instagram8 = imgURL + response.InstagramImages[7].ImageName
        instagram9 = imgURL + response.InstagramImages[8].ImageName
        instagram10 = imgURL + response.InstagramImages[9].ImageName
        instagram11 = imgURL + response.InstagramImages[10].ImageName
        instagram12 = imgURL + response.InstagramImages[11].ImageName

        console.log("Done")
        UpdateVideos()
    })})
}
