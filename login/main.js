
const apiURL = "https://api.oldrecroom.com/"
const imgURL = "https://img.oldrecroom.com/"

let num = Math.floor(Math.random() * 5)

var Img

function UpdateImg() {
  console.log("Running")
  Imgl = document.getElementsByTagName("body")[0]
  Imgl.style.backgroundImage = "url(" + Img + ")"
}

function Getimg() {
  f = fetch(apiURL + "LoginBackGround.json",).then((a) => 
    {a.json().then((response) => {
      console.log("te")
      Img = imgURL + response.Images[num].ImageName
      console.log(Img)
      console.log("Done")
      UpdateImg()
    })
  })
}
