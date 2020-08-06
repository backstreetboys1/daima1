<template>
    <div class="yu1">
        <div class="daohang">
<h2>{{list1.name}}</h2>
<van-icon name="search" class="sosuo" />
<van-icon name="ellipsis" class="dian" />
        </div>
        <div class="zhong">
<div class="zhong1" ><img src="../assets/1.gif"/></div>
<div class="zhong2"><img src="../assets/2.gif"/></div>
        </div>
        <div class="nei">
<div class="nei1">
<div class="tu1"><img src="../assets/3.gif" ></div>
<div class="tu2"><img src="../assets/4.gif" ></div>
<div class="tu3"><img src="../assets/5.gif" ></div>
</div>
<div class="zi1">
<div class="wenzi1">
<div>太古龙尊</div><span>完结</span><span class="cao1">未读</span>
</div>
<div class="wenzi2">
<div>超级神豪科技...</div><span>连载</span><span class="cao1">未读</span>
</div>
<div class="wenzi3">
<div>第一狂妃：废...</div><span>连载</span><span class="cao1">未读</span>
</div>
</div>
<div class="nei1">
<div class="tu1"><img src="../assets/6.gif" ></div>
<div class="tu2"><img src="../assets/7.gif" ></div>
<div class="tu3"><img src="../assets/8.gif" ></div>
</div>

<div class="zi1">
<div class="wenzi1">
<div>娇妻捧上天</div><span>完结</span><span class="cao1">未读</span>
</div>
<div class="wenzi2">
<div>农门娇妻：将...</div><span>完结</span><span class="cao1">已读0.1%</span>
</div>
<div class="wenzi3">
<div>王者归来</div><span>连载</span><span class="cao1">未读</span>
</div>
</div>

<div class="nei1">
<div class="tu1"><img src="../assets/9.gif" ></div>
<div class="tu2"><img src="../assets/10.gif" ></div>
<div class="tu3"><img src="../assets/11.gif" ></div>
</div>

<div class="zi1">
<div class="wenzi1">
<div>薛小冉的古代...</div><span>完结</span><span class="cao1">未读</span>
</div>
<div class="wenzi2">
<div>天才双包：巨...</div><span>完结</span><span class="cao1">未读</span>
</div>
<div class="wenzi3">
<div>绝品神医</div><span>连载</span><span class="cao1">未读</span>
</div>
</div>

<div class="nei1">
<div class="tu1"><img src="../assets/12.gif" ></div>
<div class="tu2"><img src="../assets/13.gif" ></div>
<div class="tu3"><img src="../assets/14.gif" ></div>
</div>

<div class="zi1">
<div class="wenzi1">
<div>高考失利后,...</div><span>连载</span><span class="cao1">未读</span>
</div>
<div class="wenzi2">
<div>重生之都市仙...</div><span>连载</span><span class="cao1">未读</span>
</div>
<div class="wenzi3">
<div>带着热武闯异</div><span>完结</span><span class="cao1">未读</span>
</div>
</div>

<div class="nei1">
<div class="tu1"><img src="../assets/15.gif" ></div>
<div class="tu2"><img src="../assets/16.gif" ></div>
<div class="cao2"><van-icon name="plus" class="cao3" /></div>
</div>

<div class="zi1">
<div class="wenzi1">
<div>高考失利后,...</div><span>连载</span><span class="cao1">未读</span>
</div>
<div class="wenzi2">
<div>重生之都市仙...</div><span>连载</span><span class="cao1">未读</span>
</div>
<div class="wenzi3">

</div>
</div>
        </div>

    </div>
</template>
<script>

export default {
    data(){
        return{
            info:'',
            
            list1:''
        }
    },
    created() {
          
      this.$axios.get('https://www.fastmock.site/mock/9a7ba3b112ae0ccfeeb5740494bf7f0f/sqxs/api')
      .then(res=>{
          this.list1=res.data.data.list1
      })
    },
}
</script>

<style scoped>
.cao3{
    font-size: 2rem;
}
.cao2{
    text-align: center;
    line-height: 8rem;
        margin-top: 1.5rem;
width: 25%;
margin-left: 6%;
height: 8rem;
    background-color: #f7f7f7;
}
.zi1{
    display: flex;
}
.wenzi1{
    width: 25%;
    margin-left: 6%;
}
.wenzi1>div{
    font-size: 0.5rem;
}
.wenzi1>span{
    color: #b2b1b6;
    font-size: 0.5rem;
}
.wenzi2{
    width: 25%;
    margin-left: 6%;
}
.wenzi2>div{
    font-size: 0.5rem;
}
.wenzi2>span{
    color: #b2b1b6;
    font-size: 0.5rem;
}
.wenzi3{
    width: 25%;
    margin-left: 6%;
}
.wenzi3>div{
    font-size: 0.5rem;
}
.wenzi3>span{
    color: #b2b1b6;
    font-size: 0.5rem;
}
.cao1{
    margin-left: 10%;
}
.daohang{
    float: left;
    margin-top: 2rem;
    width: 100%;
    display: flex;

}
.daohang>h2{
    margin-left: 5%;
}
.yu1{
    height: 72rem;
    background-color: #f7f7f7;
}
.sosuo{
    
    margin-left: 25%;
    line-height:4.5rem;
    font-size: 2rem;
}
.dian{
font-size: 2rem;
margin-left: 5%;
line-height:4.5rem;
}
.zhong{
    display: flex;
    width: 100%;
}
.zhong1{
    margin-left: 5%;
    height: 5rem;
    width: 50%;
    
}
.zhong1>img{
    border-radius: 0.5rem;
width: 100%;
height: 100%;
}
.zhong2{
    margin-left: 3%;
    height: 5rem;
    width: 38%;
}
.zhong2>img{
    border-radius: 0.5rem;
width: 100%;
height: 100%;
}
.nei{
    background-color: #ffffff;
    width: 90%;
    height: 56rem;
    margin-left: 5%;
    margin-top: 1rem;
}
.nei1{
    
    display: flex;
width: 100%;

}
.tu1{
    margin-top: 1.5rem;
width: 25%;
margin-left: 6%;
}
.tu1>img{
    width: 100%;
    height: 100%;
}
.tu2{
    margin-top: 1.5rem;
width: 25%;
margin-left: 6%;
}
.tu2>img{
    width: 100%;
    height: 100%;
}
.tu3{
    margin-top: 1.5rem;
width: 25%;
margin-left: 6%;
}
.tu3>img{
    width: 100%;
    height: 100%;
}
</style>
