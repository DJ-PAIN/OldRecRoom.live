
const communityBoardURL = "https://oldrecroom.github.io/API-test/CommunityBoard.json"
const imgURL = "https://oldrecroom.github.io/img/"
const videoURL = "https://oldrecroom.github.io/CDN/Video/"

var video1
var video2
var video3

var Title1
var Title2
var Title3

function UpdateVideos() {
    console.log("Running")
    div1 = document.getElementById("1")
    div2 = document.getElementById("2")
    div3 = document.getElementById("3")

    titleele1 = div1.getElementsByTagName("h1")[0]
    titleele2 = div2.getElementsByTagName("h1")[0]
    titleele3 = div3.getElementsByTagName("h1")[0]

    videoele1 = div1.getElementsByTagName("video")[0]
    videoele2 = div2.getElementsByTagName("video")[0]
    videoele3 = div3.getElementsByTagName("video")[0]

    titleele1.innerHTML = Title1
    titleele2.innerHTML = Title2
    titleele3.innerHTML = Title3
    
    videoele1.src = video1
    videoele2.src = video2
    videoele3.src = video3
}

function GetVideos() {
    f = fetch(communityBoardURL,).then((a)=>{a.json().then((response) => {
        video1 = videoURL + response.Videos[0].BlobName
        video2 = videoURL + response.Videos[1].BlobName
        video3 = videoURL + response.Videos[2].BlobName

        Title1= response.Videos[0].Title
        Title2 = response.Videos[1].Title
        Title3 = response.Videos[2].Title
        console.log("Done")
        UpdateVideos()
    })})
}
