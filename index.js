function run(){
setTimeout(play,1000)
function play(){

    document.getElementById('logo').style.display='block';
    document.getElementById('firstlogo').style.display='none';
    

}


}

/* ============================menubar about ke shops ===========================*/

function shops(){
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

/* ============================menubar about ke liye ===========================*/

function about(){
    let link2 = `<div id="showmega2">
    <li><a href="#">Free Shipping</a></li>
    <li><a href="#">Money Guarantee</a></li>
    <li><a href="#">Online Support</a></li>
    <li><a href="#">Flexible Payment</a></li>`;
    document.getElementById('finaloutput').innerHTML= link2;

}

/* ============================menubar about ke contact ke liye===========================*/

function contact(){
    let link3 = `<div id="showmega3">
    <li><a href="#">Information</a></li>
    <li><a href="#">Quicks Links</a></li>
    <li><a href="#">Our Stores</a></li>
    <li><a href="#">Store Address</a></li>
    <li><a href="#">Bhopal(MP)</a></li>
    <li><a href="#">Mobile No</a></li>
    <li><a href="#">9918129499</a></li>



     </div> `;
    document.getElementById('finaloutput').innerHTML= link3;

}

/* ============================menubar LOgin ke liye===========================*/

function Profile(){
    let link4 = `<div id="showmega4">
    <li><a href="login.html">Login</a></li>
    <li><a href="login.html">Signup</a></li>

     </div> `;
    document.getElementById('finaloutput').innerHTML= link4;

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
    product_img:"https://rukminim2.flixcart.com/image/832/832/kwgpz0w0/sweatshirt/s/j/h/11-12-years-134158701-jack-jones-junior-original-imag94s44sr6g3hm.jpeg?q=70",
    p_rate:"567Rs",
    p_rating:4.2,
    p_brand:"Tshirt",
    p_tems:"8"

},
{
    product_img:"assest/buy-3.jpg",
    p_rate:"867Rs",
    p_rating:4.2,
    p_brand:"Lover",
    p_tems:"30"

},
{
    product_img:"assest/buy-1.jpg",
    p_rate:"367Rs",
    p_rating:4.2,
    p_brand:"Tsirt",
    p_tems:"30"

},
{
    product_img:"assest/product-10.jpg",
    p_rate:"767Rs",
    p_rating:4.2,
    p_brand:"Shoes",
    p_tems:"30"
},
{
    product_img:"assest/product-10.jpg",
    p_rate:"1567Rs",
    p_rating:4.2,
    p_brand:"Shoes",
    p_tems:"30"  
},
{
    product_img:"assest/product-10.jpg",
    p_rate:"597Rs",
    p_rating:4.2,
    p_brand:"nike",
    p_tems:"30"
},
{
    product_img:"https://rukminim2.flixcart.com/image/612/612/xif0q/track-pant/x/g/y/m-solid-sports-wear-yazole-original-imaghfqbk4dpdxhj.jpeg?q=70",
    p_rate:"507Rs",
    p_rating:4.2,
    p_brand:"nike",
    p_tems:"30"
},
{
    product_img:"https://rukminim2.flixcart.com/image/612/612/xif0q/trouser/e/5/x/34-50-trouser-chalodia-original-imagp7wjxa6ymxpn.jpeg?q=70",
    p_rate:"967Rs",
    p_rating:4.2,
    p_brand:"nike",
    p_tems:"30"
},
{
    product_img:"https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/7/x/v/xxl-st28-vebnor-original-imagq6a533khqhmq.jpeg?q=70",
    p_rate:"1111Rs",
    p_rating:4.2,
    p_brand:"nike",
    p_tems:"30"
},
{
    product_img:"https://rukminim2.flixcart.com/image/612/612/xif0q/track-pant/u/j/x/s-solid-men-track-pants-pack-of-2-foxter-original-imagzvpkucbqtmub.jpeg?q=70",
    p_rate:"997Rs",
    p_rating:4.2,
    p_brand:"Jacket",
    p_tems:"30"
},
{
    product_img:"https://tseshopping.vercel.app/images/portion2/im6.webp",
    p_rate:"399Rs",
    p_rating:4.2,
    p_brand:"Maxy",
    p_tems:"30" 
},
{
    product_img:"https://tseshopping.vercel.app/images/portion2/im5.webp",
    p_rate:"499Rs",
    p_rating:4.2,
    p_brand:"Jacket",
    p_tems:"30"   
},
{
    product_img:"https://tseshopping.vercel.app/images/portion2/im3.webp",
    p_rate:"597Rs",
    p_rating:4.2,
    p_brand:"Jeans",
    p_tems:"30" 
},
{
    product_img:"https://tseshopping.vercel.app/images/portion2/im9.webp",
    p_rate:"1067Rs",
    p_rating:4.2,
    p_brand:"Jacket",
    p_tems:"30" 
},
{
    product_img:"https://tseshopping.vercel.app/images/portion2/im7.webp",
    p_rate:"560Rs",
    p_rating:4.2,
    p_brand:"Blazers",
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
${e.p_brand}
</div>
<div>
${e.p_rate}
</div>
<div>
${e.p_rating}
</div>

</div><br>
<center><a href="image.html"><button class="button1"> Buy Now </button></a></center>
</div>`))
function addcard(){
    
}

/* ============================cart add===========================*/

function cart(){
    
    document.getElementById('finaloutput').innerHTML= cart;  
}