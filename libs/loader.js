
const headerMenu = document.querySelectorAll('.menu--main .menu a')
const footerMenu = document.querySelectorAll('footer .menu a')

const base_url = window.location.origin
const xhr = new XMLHttpRequest()
const links = [...headerMenu, ...footerMenu]

for (link of links) {
  console.log('+++++++++++++ LINK ++++++++++++++++++')
console.log(link)
  console.log('+++++++++++++ LINK ++++++++++++++++++')
link.addEventListener('click', loadPageContent)
}

function loadPageContent(e) {
  e.preventDefault()
//update url TODO
  //TODO:: remember some assets are only loaded on some pages
  let url = base_url+ this.getAttribute('href')
  xhr.open('GET', url, true)
  xhr.setRequestHeader("Cache-Control", "no-cache, no-store, max-age=0")
  console.log(this.getAttribute('href'))

  xhr.onprogress = function () {
        console.log(xhr.readyState) // === 3
      }

      // readyState === 4 onload
  xhr.onload = function () {

        if (this.status === 200) {

//TODO
//document.open();
        //document.write(this.responseText);
        //document.close();
          //console.log(document.createElement(this.responseText))

        }
      }

  xhr.onerror = function () {
        //console.log('ERRor')
      }

  xhr.send()
alert('HELLO')
}


