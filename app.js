const container = document.getElementById("container")
//ดึงข้อมูลจาก API https://restcountries.com
const getCountries = async()=>{ //เนื่องจากใน API จะมีข้อมูลอยู่มาก เราต้องทำการรอข้อมูลให้ครบถ้วนก่อน
    const url = 'https://restcountries.com/v2/all' //ตำแหน่งที่จะดึงข้อมูล
    const res = await fetch(url) //เริ่มต้นดึงข้อมูล เราจะได้อาร์เรย์ object JSON ออกมา กำหนดตัวแปร res เพื่อตอบกลับข้อมูลออก
    const items = await res.json() //จัดformmat เป็นรูปแบบ JSON 
    //กรองข้อมูลจากAPI เพื่อดึงเอาแค่บางตัวมาใช้ มี flag, name, capital
    items.forEach(element =>{ //ทำการ วนลูปเพื่อเข้าถึง element แต่ละตัว
        createCard(element) //โยนอากิวเมนท์ element ที่เคยอยู่ใน พารามิเตอร์ data ออกมา
    })
}
//แสดงผลบนหน้าเว็บ เรียกใช้เมื่อมีการวนลูปอาร์เรย์ 
const createCard=(data)=>{
    const cardEl = document.createElement("div") //ยัดข้อมูลการ์ดไว้ที่ div
    cardEl.classList.add('country') //เพิ่มคลาสเพื่อใส่ style
    //ทำการดึงข้อมูลมาแสดงผล
    const contentHTML =`
        <div class="img-container">
            <img src="${data.flag}"/>
        </div>
        <div class="info">
            <h3 class="name">${data.name}</h3>
            <small>เมืองหลวง : <span>${data.capital}</span></small>
        </div>
    `
    cardEl.innerHTML = contentHTML //เอาคอนเท้นไปใส่ในการ์ด
    container.appendChild(cardEl) //ใส่การ์ดไว้ในคอนเท้นเนอร์ของ html
}

getCountries()