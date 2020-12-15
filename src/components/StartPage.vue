<template>
<div class='container'> 
    <div class='main'> 
        <div class='left_content'> 
            <h1>Sign in to Shortly</h1> 
            <p>You should fill in your telephone number to get an access to system</p>
        </div>
        <div class="right_content"> 
            <img src='../assets/iphonemc.png'>
        </div>
        
    </div>
</div>
</template>
<style> 
.container { 
    color: white;
    width: 100%; 
    height: 100%;
    background: 100% #4f1841;
}
.main { 
display: flex;
justify-content: space-around;
}
.left_content { 
    background: white;
    margin-right: -300px;
}
.left_content h1 { 
    color: black;
    font-size: 35px;
}
.right_content { 
    margin-left: 400px;
height: 100vh;
min-width: 100vh;
margin-top: -40px;
margin-bottom: -50px;

}
.right_content img { 
    height: 470px;
}


</style>

<script>
export default {
    components: {
    }
}
</script>