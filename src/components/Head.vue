<template>
    <div class='Header_background'> 
        <div>
        <div class='container'>
        <div class='main_page'> 
            <div class='logo'><h1>Shortly</h1></div>
            <ul class="menu_list"> 
                <li><a>About us</a>
                <li><a>Features</a></li>
                <li><a>Plans</a></li>
                <li><a>Help</a></li>
            </ul>
        </div>
         <ul class='sign_in'> 
                <li> Sign in 
                </li>
                <li> 
                    Sign up
                </li>
            </ul>
        </div>
    </div>
    <div class='main_content'> 
        <div class='left_content'> 
            <h1>Earn money easy </h1>
            <p>Analize differents shares easy and quickly. Shortly has a smart <br> 
               machine learning that can help you to make a right decision!</p>
            <div class="calling_block"> 
                <div> </div>
            </div>
        </div>
        <div class='right_content'>
            <div class='main_image'> 
                <img class='iphone_main' src="../assets/iphone.png"> 
            </div>
        </div>
    </div>
    </div>
</template>
<style>
.Header_background { 
background-color: white;
width: 100%; 
height: 500px; 
}
.container { 
    margin: 30px 120px;
    display: flex; 
    justify-content: space-between;

}
.main_page { 
    display: flex; 
    justify-content: flex-start;
    max-width: 1400px;
}
.menu_list { 
    display: flex;
    justify-content: space-between;
    padding-left: px; 
    margin-top: 35px;
}
.menu_list li{ 
    text-decoration: none;
    list-style-type: none;
    margin-right: 15px;
} 
.sign_in { 
    
    margin-top: 35px;
    display: flex;
    justify-content: space-between;
}
.sign_in li { 
    font-size: 18px;
    text-decoration: none;
    list-style-type: none;
    margin-right: 30px; 
}

.main_content { 
    margin-left: 200px;
    margin-top: 150px; 
    display: flex;
    flex-direction: space-around;
}
.left_content h1 { 
    font-size: 60px;
}
.left_content p { 
    font-size: 17px; 
    color: lightslategrey; 
}
.iphone_main{ 
    height: 650px;
    margin-left: 90px;  
}
.main_image { 
    margin-left: 60px; 
}
</style>

<script>
export default {
    components: {

    }
}
</script>