import './App.css'
import Card from './components/Card/Card'
import Nav from './components/Nav/Nav'

import {
  heroImg,crmImg,
  multipleEcommerceImg,privateEcommerceImg,
  TssImg,wposImg,
  iframeImg,ceaImg,
  hbmsImg,
  gbtsImg
} from "./assets/img/index"

function App() {
  const cardData = [
    {img:crmImg,title:"CRM System",link:"http://tiktukcrm.atwebpages.com",techs:["PHP","Laravel","Bootstrap ","Username: yourcompany@gmail.com","Password: 123456"],desc:"Our CRM system helps you manage customer relationships, track sales, and improve team productivity—all in one intuitive platform. It's scalable for startups or established businesses, ensuring every customer gets exceptional service.",},
    {img:iframeImg,title:"CMS System",link:"https://iframecms.vercel.app/",techs:["PHP","Laravel","Bootstrap "],desc:"Our CMS platform makes it easy to create, edit, and publish content without technical complexity. From blogs to business websites, it offers flexible tools and a user-friendly interface for fast, reliable content management.",},
    {img:multipleEcommerceImg,title:"Multiple Ecommerce",link:"https://multiple-ecommerce.vercel.app/",techs:["PHP","Laravel","Bootstrap "],desc:"Join our multi-vendor marketplace to create your shop, showcase products, chat with buyers, and accept secure online payments—all in a fully responsive design that works beautifully on mobile, tablet, and laptop.",},
    {img:privateEcommerceImg,title:"Private Ecommerce",link:"https://private-ecommerce-sandy.vercel.app/",techs:["React","Bootstrap"],desc:"Take full control of your brand with a single-vendor shop that's responsive, easy to manage, and designed to give your customers a seamless shopping experience.",},
    {img:TssImg,title:"Technical Support System",link:"https://tiktuk-tss.vercel.app/",techs:["PHP","Laravel","Bootstrap"],desc:"A responsive eCommerce system where customers can add items to their cart, adjust quantities with ease, and enjoy a smooth checkout experience.",},
    {img:wposImg,title:"Wpos",link:"https://wpos-lite.vercel.app/",techs:["PHP","Laravel","Bootstrap"],desc:"A point-of-sale management application that works on computers and smartphones, helping you monitor and manage your business seamlessly and continuously.",},
    {img:ceaImg,title:"CEA",link:"https://cea-liart.vercel.app",techs:["PHP","Laravel","Bootstrap"],desc:"Automate invoices, track inventory, and keep supplier and customer accounts perfectly organized."},
    {img:hbmsImg,title:"HBMS",link:"https://hbms-bice.vercel.app/",techs:["PHP","Laravel","Bootstrap"],desc:"Handle reservations, guests, and operations in one powerful, easy-to-use platform."},
    {img:gbtsImg,title:"GBTS",link:"https://gbts.vercel.app/",techs:["PHP","Laravel","Bootstrap"],desc:"Book flights, hotels, and tours effortlessly with an all-in-one travel management platform."},
    {img:tosImg,title:"Toms",link:"https://tos-mvp.vercel.app/",techs:["PHP","Laravel","js"],desc:"The system aims to manage the administrative operations of the tourism company in an integrated manner."}
  ]

  return (
    <>
      <Nav />
      <div className="CP heroContainer g-btn">
        <div className="heroLeft">
          <p className="heroTitle">Showcasing Inspiring Web Projects & Designs</p>
          <p className="heroDesc">Explore professional project demos and visuals crafted to spark new digital ideas.</p>
        </div>
        <div className="heroRight">
          <img src={heroImg} alt="" />
        </div>
      </div>
      <div className="main_c">
        <p className="mainTitle text-2xl md:text-3xl font-medium text-center my-6">All Software Product Model</p>
        <div className="main grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 gap-12">
        {
          cardData.map((item,i)=>{
            return <Card key={i} img={item.img} title={item.title} desc={item.desc} techs={item.techs} link={item.link}/>
          })
        }
        </div>
      </div>
      <footer className='g-btn'><p className="footerText"> All Rights Reserved {new Date().getFullYear().toString()} &copy;</p></footer>
    </>
  )
}

export default App
