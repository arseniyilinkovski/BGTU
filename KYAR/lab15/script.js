const image1 = document.getElementById("img1");
const image3 = document.getElementById("img3");
const image4 = document.getElementById("img4");

img1.addEventListener("mouseover", () => {
  TextImage.innerHTML =
    "BMW - немецкий производитель автомобилей, мотоциклов, двигателей, а также велосипедов. Более 45 % акций принадлежит семье Квандт[4]. Председателем правления компании является Оливер Ципсе. Главный дизайнер — Йозеф Кабан ";
});
img1.addEventListener("mouseout", () =>{
    TextImage.innerHTML=' '
});
img2.addEventListener("click", () => {
    img2.style.border= '10px solid red'
});
img2.addEventListener("dblclick", () => {
    img2.style.border='none'
});
img4.addEventListener("mouseout", () =>{
    img4.src='bmw_x5.jpg'
});
img4.addEventListener("mouseover", () =>{
    img4.src='bmwM5.jpg'
});
submit1.addEventListener('click', () => {
    event.preventDefault()
    let surname = document.getElementById('surname').value
    let name = document.getElementById('name1').value
    let nomer = document.getElementById('nomer').value
    let fathername = document.getElementById('fathername').value
    let email =document.getElementById('email').value
    let faculty =document.getElementById('faculty').value
    let group =document.getElementById('group').value
    let course =document.getElementById('course').value
   footerBlock.innerHTML = `<div>
        <p><b>Имя</b>: ${name}</p>
        <p><b>Отчество</b>: ${fathername}</p>
        <p><b>Фамилия:</b>: ${surname} </p>
        <p><b>Адрес почты:</b>${email}</p>
        <p><b>Контактный номер</b>: ${nomer}</p>
        <p><b>Факультет</b> ${faculty}</p>
        <p><b>Группа:</b>${group}</p>
        <p><b>Курс:</b>${course}</p>
   </div>`
})