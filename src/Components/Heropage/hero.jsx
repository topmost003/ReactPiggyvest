import "./hero.css"

function Hero(){
    return(
<section className="hero">

<main  className="heroleft">

    <div>
        <p>The 2024 PiggyVest Savings Report</p>
    </div>

    <div>
        <h1>The Better Way to Save & Invest</h1>
        <p>Piggyvest helps over 5 million customers achieve their financial 
            goals by helping them save and invest with ease</p>
    </div>


    <main className="btn">
<div class="btn1">
    <img src="../../../../public/apple (1).png" alt=""/>
    <a href="">Get on iPhone</a>
</div>

<div className="btn2">
    <img src="../../../../public/google-play.png" alt=""/>
    <a href="">Get on Android</a>
</div>
    </main>

</main>

<div className="heroright">
    <img alt="card-img" src="https://storage.googleapis.com/piggyvestwebsite/piggywebsite2020/pexels_ketut_subiyanto_4350099_bc5e069ebe/pexels_ketut_subiyanto_4350099_bc5e069ebe.avif" class="bounce"/>
</div>
</section>
 

    )
}

export default Hero