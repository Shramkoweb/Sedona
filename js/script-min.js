var map,marker,loc,link=document.querySelector(".btn-appointment"),popup=document.querySelector(".modal-form"),arrival=popup.querySelector("[name=arrival-date]"),departure=popup.querySelector("[name=departure-date]"),adult=popup.querySelector("[name=adult]"),kids=popup.querySelector("[name=kids]"),form=popup.querySelector("form"),html=document.querySelector("html");function initMap(){map=new google.maps.Map(document.querySelector(".map-wrapper"),{center:{lat:34.7532446,lng:-111.7555027},zoom:9}),loc={lat:34.8697359,lng:-111.7609978},marker=new google.maps.Marker({position:loc,map:map})}link.addEventListener("click",function(e){popup.classList.toggle("modal-show"),arrival.focus()}),form.addEventListener("submit",function(e){arrival.value&&departure.value&&adult.value&&kids.value||(e.preventDefault(),alert("Нужно ввести все значения"))}),html.classList.remove("no-js"),html.classList.add("js");
