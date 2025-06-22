import "./header.css"


function Header(){

    return(
<nav class="navbar">

    <main class="navleft" >

        <div >
        <img src="../../../public/piggy logo.svg" alt=""/>
      </div>

        <div class="navleft1">
<ul>
    <li><a href="">Save</a></li>
    <li><a href="">Invest</a></li>
    <li><a href="">Stories</a></li>
    <li><a href="">FAQs</a></li>
    <li><a href="">Resourses</a></li>
</ul>
        </div>
    
    </main>

    <main class="navright">
        <button>Sign in</button>
        <button>Create free account</button>
    </main>

    <div class="hamburger">
        <img src="../../../public/menu.png" alt=""/>
    </div>

</nav>

    )
}

export default Header