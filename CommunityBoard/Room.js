
const communityBoardURL = "https://oldrecroom.github.io/API-test/CommunityBoard.json"
const imgURL = "https://oldrecroom.github.io/img/"

var room1
var room2
var room3

var FeaturedRoomGroup

var roomIMG1
var roomIMG2
var roomIMG3

function UpdateRoom() {
    console.log("Running")
    div1 = document.getElementById("1")

    FeaturedRoomGrouph1 = div1.getElementsByTagName("h1")[0]

    roomle1 = div1.getElementsByTagName("h1")[1]
    roomle2 = div1.getElementsByTagName("h1")[2]
    roomle3 = div1.getElementsByTagName("h1")[3]

    roomIMGle1 = div1.getElementsByTagName("img")[0]
    roomIMGle2 = div1.getElementsByTagName("img")[1]
    roomIMGle3 = div1.getElementsByTagName("img")[2]

    FeaturedRoomGrouph1.innerHTML = FeaturedRoomGroup

    roomle1.innerHTML = room1
    roomle2.innerHTML = room2
    roomle3.innerHTML = room3

    roomIMGle1.src = roomIMG1
    roomIMGle2.src = roomIMG2
    roomIMGle3.src = roomIMG3
}

function GetRoom() {
    f = fetch(communityBoardURL,).then((a)=>{a.json().then((response) => {

        roomIMG1 = imgURL + response.FeaturedRooms[0].ImageName
        roomIMG2 = imgURL + response.FeaturedRooms[1].ImageName
        roomIMG3 = imgURL + response.FeaturedRooms[2].ImageName

        FeaturedRoomGroup = response.FeaturedRoomGroup[0].Name

        room1 = response.FeaturedRooms[0].RoomName
        room2 = response.FeaturedRooms[1].RoomName
        room3 = response.FeaturedRooms[2].RoomName
        console.log("Done")
        UpdateVideos()
    })})
}
