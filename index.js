function run(){
setTimeout(play,1000)
function play(){

    document.getElementById('logo').style.display='block';
    document.getElementById('firstlogo').style.display='none';
    

}


}
function Home(){
    let link1 = `<div id="showmega"> <li><a href="#">mac</a></li>
    <li><a href="#">home</a></li>
    <li><a href="#">service</a></li>
    <li><a href="#">product</a></li>
    <li><a href="#">contact</a></li>
    <li><a href="#">teliviosn</a></li>
    <li><a href="#">watch</a></li>
    <li><a href="#">vision</a></li>
    <li><a href="#">deliver</a></li>
    <li><a href="#">complen</a></li>
    <li><a href="#">ipad</a></li>
    <li><a href="#">iphone</a></li>
    <li><a href="#">computer</a></li></div>`;
    document.getElementById('finaloutput').innerHTML= link1;

}

function hiddennav(){
    document.getElementById(finaloutput).innerHTML="";
}
function tophide(){
    let clienth = window.event.clientY;
    if(clienth<20){
        document.getElementById('finaloutput').innerHTML="";
    }
}
/* ============================seacr ke liye ===========================*/
const product = [{
    product_img:"assest/product-4.jpg",
    p_rate:567,
    p_rating:4.2,
    p_brand:"<h2>BAG</h>",
    p_tems:"8"

},
{
    product_img:"assest/buy-3.jpg",
    p_rate:567,
    p_rating:4.2,
    p_brand:"nike",
    p_tems:"30"

},
{
    product_img:"assest/buy-1.jpg",
    p_rate:567,
    p_rating:4.2,
    p_brand:"nike",
    p_tems:"30"

},
{
    product_img:"assest/product-10.jpg",
    p_rate:567,
    p_rating:4.2,
    p_brand:"nike",
    p_tems:"30"
},
{
    product_img:"assest/product-10.jpg",
    p_rate:567,
    p_rating:4.2,
    p_brand:"nike",
    p_tems:"30"  
},
{
    product_img:"assest/product-10.jpg",
    p_rate:567,
    p_rating:4.2,
    p_brand:"nike",
    p_tems:"30"
},
{
    product_img:"https://rukminim2.flixcart.com/image/612/612/xif0q/track-pant/x/g/y/m-solid-sports-wear-yazole-original-imaghfqbk4dpdxhj.jpeg?q=70",
    p_rate:567,
    p_rating:4.2,
    p_brand:"nike",
    p_tems:"30"
},
{
    product_img:"https://rukminim2.flixcart.com/image/612/612/xif0q/trouser/e/5/x/34-50-trouser-chalodia-original-imagp7wjxa6ymxpn.jpeg?q=70",
    p_rate:567,
    p_rating:4.2,
    p_brand:"nike",
    p_tems:"30"
},
{
    product_img:"https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/7/x/v/xxl-st28-vebnor-original-imagq6a533khqhmq.jpeg?q=70",
    p_rate:567,
    p_rating:4.2,
    p_brand:"nike",
    p_tems:"30"
},
{
    product_img:"https://rukminim2.flixcart.com/image/612/612/xif0q/track-pant/u/j/x/s-solid-men-track-pants-pack-of-2-foxter-original-imagzvpkucbqtmub.jpeg?q=70",
    p_rate:567,
    p_rating:4.2,
    p_brand:"nike",
    p_tems:"30"
}
]
document.getElementById('showcard').innerHTML = product.map(e =>(`

<div class="card">
<div class="card1">
    <img height="300px" src="${e.product_img}">
</div>
<div class="card2">
<div>
${e.p_rate}
</div>
<div>
${e.p_rating}
</div>
</div><br>
<center><button class="button1"> Buy Now </button></center>
</div>`))

