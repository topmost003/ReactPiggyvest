import "./footer.css"

function Footer(){

    return(
<div>
  <footer className="footer">

    <main className="footimg">
       <img src="../../../public/piggy logo.svg" alt=""/> 
       <img src="../../../public/compliance.avif" alt=""/>
    </main>

    <main className="footertext1">
        <main>
        <p>Products</p>
        <ul>
        <li><a href="">Piggybank</a></li>
      <li> <a href="">Invest</a></li>
      <li> <a href="">Safelock</a></li>
      <li> <a href="">Target Savings</a></li>
      <li> <a href="">Flex Naira</a></li>
      <li> <a href="">Flex Dollar</a></li>
    </ul>
</main>

    <main>
        <p>Company</p>
           <ul>
             <li> <a href="">About</a></li>
             <li> <a href=""> FAQs </a></li>
             <li> <a href=""> Blog </a></li>
           </ul>
         </main>
    </main>

    <main className="footertext">
        <p>Legal</p>
      <ul>
        <li><a href="">Terms</a></li>
        <li> <a href="">Privacy</a></li>
        <li> <a href="">Security</a></li>
      </ul>
    </main>


    <main  className="address">
<div>
  <img src="../../../public/facebook.png" alt=""/>  
  <img src="../../../public/social (1).png" alt=""/>  
  <img src="../../../public/twitter.png" alt=""/>  
  <img src="../../../public/tik-tok.png" alt=""/>  
  <img src="../../../public/youtube.png" alt=""/>  
</div>

<main>
    <p>Tesmot house, Abdulrahman Okene close, Victoria Island, Lagos, Nigeria.</p>
    <p>contact@piggyvest.com</p>
    <p>+234 700 933 9339</p>
</main>

    </main>
  </footer>






  <main className="foot">
<p>Piggyvest (formerly piggybank.ng) is the leading online savings & investing platform in Nigeria. For over 9 years, our customers have saved and invested billions of Naira that they would normally be tempted to spend.</p>

<p>PV Capital Limited is a fund manager duly licensed by the Securities and Exchange Commission (SEC) of Nigeria.</p>

<p>2016 - 2025 PiggyTech Global Limited - RC 1405222</p>
  </main>


</div>

    )
}


export default Footer