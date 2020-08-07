<template>
  <div>
      <div class="tou">
<van-tabs v-model="active">
    
  <van-tab title="新人必读">

      <div class="neitao2">
 <div class="e1">
<div></div>
<div>全网热门小说</div>
</div>

          <div class="r">
<div><img src="../assets/d1.gif" ></div>
<div class="r1">
    <div>都市超级雇佣兵王</div>
    <div>千百万年，这片天地无人能达到九神经，玉峰三经修为，敢为“废物”，饱受耻辱，唾骂，只</div>
    <div>为...女生有气质</div>
    
    <div class="ca3">完结</div>
    <div class="ca4">爽文</div>
</div>
</div>

<div class="y">
<div class="y1"><img src="../assets/d2.gif" ></div>
<div class="y2"><img src="../assets/d3.gif" ></div>
<div class="y2"><img src="../assets/d4.gif" ></div>
<div class="y2"><img src="../assets/d5.gif" ></div>
</div>
<div class="dushi">
    <div class="dushi1">重生闺蜜呀</div>
    <div class="dushi2">异事厨神王</div>
    <div class="dushi2">邪王追妻王</div>
    <div class="dushi2">都市逍遥仙</div>
</div>

<div class="e1">
<div></div>
<div>优质榜单</div>
</div>

<div class="ttyy">
<van-tabs type="card">
  <van-tab title="男频人气好文" class="qian1">
      <div class="qian3">
<img src="../assets/d6.gif" >
      </div>
      
  </van-tab>
  <van-tab title="女频人气好文" class="qian2">
       <div class="qian4">
<img src="../assets/d7.gif" >
      </div>
  </van-tab>
  
</van-tabs>
</div>




      </div>
     
  </van-tab>
  <van-tab title="男生">
      <div class="neitao">
<div class="lunbo">
          <van-swipe :autoplay="2000" >
  <van-swipe-item v-for="(image, index) in images" :key="index">
    <img v-lazy="image" width="100%" height="100%" />
  </van-swipe-item>
</van-swipe>

      </div>
      <div class="tubiao">
<div class="tubiao1"><van-icon name="label" class="ca1" /></div>
<div class="tubiao1"><van-icon name="bookmark" class="ca1" /></div>
<div class="tubiao1"><van-icon name="bill" class="ca1" /></div>
<div class="tubiao1"><van-icon name="hot" class="ca1" /></div>
</div>
<div class="zai">
<span class="zai1">分类</span ><span class="zai1">榜单</span><span class="zai1">完结</span><span class="zai1">新书</span>
</div>
<div class="e">
<div></div>
<div>今日必读</div>
<div>查看更多</div>
<div><van-icon name="arrow" /></div>
</div>
<div class="r">
<div><img src="../assets/a2.gif" ></div>
<div class="r1">
    <div>九龙诛魔</div>
    <div>千百万年，这片天地无人能达到九神经，玉峰三经修为，敢为“废物”，饱受耻辱，唾骂，只</div>
    <div>为...女生有气质</div>
    
    <div class="ca3">完结</div>
    <div class="ca4">玄幻</div>
</div>
</div>
<div class="y">
<div class="y1"><img src="../assets/a3.gif" ></div>
<div class="y2"><img src="../assets/a4.gif" ></div>
<div class="y2"><img src="../assets/a5.gif" ></div>
<div class="y2"><img src="../assets/a6.gif" ></div>
</div>
<div class="dushi">
    <div class="dushi1">都市霸天龙帝</div>
    <div class="dushi2">西游家里有矿</div>
    <div class="dushi2">都市小花医</div>
    <div class="dushi2">重生都是天尊</div>
</div>
<div class="e">
<div></div>
<div>本期主打</div>
<div>换一换</div>
<div><van-icon name="replay" /></div>
</div>
<div class="r">
<div><img src="../assets/a7.gif" ></div>
<div class="r1">
    <div>九阳神王</div>
    <div>千百万年，这片天地无人能达到九神经，玉峰三经修为，敢为“废物”，饱受耻辱，唾骂，只</div>
    <div>为...女生有气质</div>
    
    <div class="ca3">完结</div>
    <div class="ca4">玄幻</div>
</div>

</div>

<div class="r">
<div><img src="../assets/a8.gif" ></div>
<div class="r1">
    <div>漫威：从文字开始进化</div>
    <div>千百万年，这片天地无人能达到九神经，玉峰三经修为，敢为“废物”，饱受耻辱，唾骂，只</div>
    <div>为...女生有气质</div>
    
    <div class="ca3">完结</div>
    <div class="ca4">热血</div>
</div>

</div>

<div class="r">
<div><img src="../assets/a9.gif" ></div>
<div class="r1">
    <div>从小蝌蚪开始无敌</div>
    <div>千百万年，这片天地无人能达到九神经，玉峰三经修为，敢为“废物”，饱受耻辱，唾骂，只</div>
    <div>为...女生有气质</div>
    
    <div class="ca3">完结</div>
    <div class="ca4">爽文</div>
</div>

</div>
      </div>
      
  </van-tab>
  <van-tab title="女生">

      <div class="neitao">
<div class="lunbo">
          <van-swipe :autoplay="2000" >
  <van-swipe-item v-for="(image, index) in img" :key="index">
    <img v-lazy="image" width="100%" height="100%" />
  </van-swipe-item>
</van-swipe>

      </div>
      <div class="tubiao">
<div class="tubiao2"><van-icon name="label" class="ca1" /></div>
<div class="tubiao2"><van-icon name="bookmark" class="ca1" /></div>
<div class="tubiao2"><van-icon name="bill" class="ca1" /></div>
<div class="tubiao2"><van-icon name="hot" class="ca1" /></div>
</div>
<div class="zai">
<span class="zai1">分类</span ><span class="zai1">榜单</span><span class="zai1">完结</span><span class="zai1">新书</span>
</div>
<div class="e">
<div></div>
<div>今日必读</div>
<div>查看更多</div>
<div><van-icon name="arrow" /></div>
</div>
<div class="r">
<div><img src="../assets/b4.gif" ></div>
<div class="r1">
    <div>穿成破产大佬妻</div>
    <div>千百万年，这片天地无人能达到九神经，玉峰三经修为，敢为“废物”，饱受耻辱，唾骂，只</div>
    <div>为...女生有气质</div>
    
    <div class="ca3">完结</div>
    <div class="ca4">玄幻</div>
</div>
</div>
<div class="y">
<div class="y1"><img src="../assets/b5.gif" ></div>
<div class="y2"><img src="../assets/b6.gif" ></div>
<div class="y2"><img src="../assets/b7.gif" ></div>
<div class="y2"><img src="../assets/b8.gif" ></div>
</div>
<div class="dushi">
    <div class="dushi1">他是人间妄想</div>
    <div class="dushi2">一宠到底</div>
    <div class="dushi2">都市小花医</div>
    <div class="dushi2">腹黑王爷</div>
</div>
<div class="e">
<div></div>
<div>本期主打</div>
<div>换一换</div>
<div><van-icon name="replay" /></div>
</div>
<div class="r">
<div><img src="../assets/b9.gif" ></div>
<div class="r1">
    <div>终究觉得你最好</div>
    <div>千百万年，这片天地无人能达到九神经，玉峰三经修为，敢为“废物”，饱受耻辱，唾骂，只</div>
    <div>为...女生有气质</div>
    
    <div class="ca3">完结</div>
    <div class="ca4">玄幻</div>
</div>

</div>

<div class="r">
<div><img src="../assets/b10.gif" ></div>
<div class="r1">
    <div>叹春闺</div>
    <div>千百万年，这片天地无人能达到九神经，玉峰三经修为，敢为“废物”，饱受耻辱，唾骂，只</div>
    <div>为...女生有气质</div>
    
    <div class="ca3">完结</div>
    <div class="ca4">热血</div>
</div>

</div>

<div class="r">
<div><img src="../assets/b11.gif" ></div>
<div class="r1">
    <div>相爱何须问流年</div>
    <div>千百万年，这片天地无人能达到九神经，玉峰三经修为，敢为“废物”，饱受耻辱，唾骂，只</div>
    <div>为...女生有气质</div>
    
    <div class="ca3">完结</div>
    <div class="ca4">爽文</div>
</div>

</div>
      </div>

  </van-tab>
  <van-tab title="推荐">
      <div class="neitao1">
<div class="lunbo">
          <van-swipe :autoplay="2000" >
  <van-swipe-item v-for="(image, index) in img1" :key="index">
    <img v-lazy="image" width="100%" height="100%" />
  </van-swipe-item>
</van-swipe>
      </div>
<div class="e1">
<div></div>
<div>为你推荐好书</div>
</div>

<div class="y">
<div class="y1"><img src="../assets/c4.gif" ></div>
<div class="y2"><img src="../assets/c5.gif" ></div>
<div class="y2"><img src="../assets/c6.gif" ></div>
<div class="y2"><img src="../assets/c7.gif" ></div>
</div>
<div class="dushi">
    <div class="dushi1">重生闺蜜呀</div>
    <div class="dushi2">异事厨神王</div>
    <div class="dushi2">邪王追妻王</div>
    <div class="dushi2">都市逍遥仙</div>
</div>
<div class="r">
<div><img src="../assets/c8.gif" ></div>
<div class="r1">
    <div>超级生钱系统</div>
    <div>千百万年，这片天地无人能达到九神经，玉峰三经修为，敢为“废物”，饱受耻辱，唾骂，只</div>
    <div>为...女生有气质</div>
    
    <div class="ca3">完结</div>
    <div class="ca4">爽文</div>
</div>
</div>

<div class="r">
<div><img src="../assets/c9.gif" ></div>
<div class="r1">
    <div>农门辣妻：洋洋包子</div>
    <div>千百万年，这片天地无人能达到九神经，玉峰三经修为，敢为“废物”，饱受耻辱，唾骂，只</div>
    <div>为...女生有气质</div>
    
    <div class="ca3">完结</div>
    <div class="ca4">爽文</div>
</div>
</div>

<div class="r">
<div><img src="../assets/c10.gif" ></div>
<div class="r1">
    <div>无上征服系统</div>
    <div>千百万年，这片天地无人能达到九神经，玉峰三经修为，敢为“废物”，饱受耻辱，唾骂，只</div>
    <div>为...女生有气质</div>
    
    <div class="ca3">完结</div>
    <div class="ca4">爽文</div>
</div>
</div>

<div class="r">
<div><img src="../assets/c11.gif" ></div>
<div class="r1">
    <div>农门娇长妻</div>
    <div>千百万年，这片天地无人能达到九神经，玉峰三经修为，敢为“废物”，饱受耻辱，唾骂，只</div>
    <div>为...女生有气质</div>
    
    <div class="ca3">完结</div>
    <div class="ca4">爽文</div>
</div>
</div>

<div class="y">
<div class="y1"><img src="../assets/c12.gif" ></div>
<div class="y2"><img src="../assets/c13.gif" ></div>
<div class="y2"><img src="../assets/c14.gif" ></div>
<div class="y2"><img src="../assets/c15.gif" ></div>
</div>

<div class="dushi">
    <div class="dushi1">超级掌门系统</div>
    <div class="dushi2">末日最强召唤</div>
    <div class="dushi2">农门仇富：</div>
    <div class="dushi2">我能无线召唤</div>
</div>
          </div>
  </van-tab>
</van-tabs>
      </div>


  </div>
</template>

<script>
export default {
 data() {
    return {
      active: 2,
     
       images: [
        require('../assets/a1.gif'),
        require('../assets/a10.gif'),
        require('../assets/a11.gif'),
      ],
       img: [
        require('../assets/b1.gif'),
        require('../assets/b2.gif'),
        require('../assets/b3.gif'),
      ],
        img1: [
        require('../assets/c1.gif'),
        require('../assets/c2.gif'),
        require('../assets/c3.gif'),
      ],
    };
  },
}
</script>

<style  scoped>
.qian3{
    width: 100%;
}
.qian3>img{
    margin-left: 5%;
    margin-top: 1rem;
    width: 90%;
}
.qian4{
    width: 100%;
    
}
.qian4>img{
    
    margin-top: 1rem;
    width: 100%;
}

.ttyy >>> .van-tabs__nav--card .van-tab.van-tab--active{
background: #2ec799;
}



.ttyy{
    margin-top: 1rem;
}

.e1{
    width: 100%;
    display: flex;
    margin-top: 1.5rem;
}
.e1>div:nth-child(1){
    border-radius: 1rem;
    width: 2%;
    height: 2rem;
    background: #61efbf;
    margin-left: 5%;
}
.e1>div:nth-child(2){
    line-height: 2rem;
    width: 30%;
    height: 1rem;
   margin-left: 3%;
}

.neitao1{
    width: 100%;
    height: 66rem;
}
.neitao2{
    width: 100%;
    height: 57rem;
}
.neitao{
    width: 100%;
    height: 64rem;
}
.dushi{
   margin-top: 0.5rem;
    display: flex;
    width: 100%;

}
.dushi1{
    width: 20%;
    margin-left: 5%;
    font-size: 0.7rem;
}
.dushi2{
    width: 20%;
    margin-left: 3%;
    font-size: 0.7rem;
}
.y{
    margin-top: 1rem;
    display: flex;
    width: 100%;
}
.y1{
    width: 20%;
    
    margin-left: 5%;
    height: 7rem;
}
.y1>img{
    border-radius: 0.5rem;
    width: 100%;
    height: 100%;
}
.y2{
    width: 20%;
    margin-left: 3%;
    height: 7rem;
}
.y2>img{
    border-radius: 0.5rem;
    width: 100%;
    height: 100%;
}
.ca3{
width: 2rem;
height: 1rem;
float: left;
text-align: center;
margin-left: 30%;
margin-top: 0.5rem;
font-size: 0.7rem;
line-height: 1rem;
color: green;
border: 1px green solid;
}
.ca4{
width: 2rem;
height: 1rem;
float: left;
text-align: center;
margin-left: 3%;
margin-top: 0.5rem;
font-size: 0.7rem;
line-height: 1rem;
color: #a2a1a9;
border: 1px #a2a1a9 solid;
}

.r1>div:nth-child(1){
    float: left;
    font-size: 1rem;

}
.r1>div:nth-child(2){
    line-height: 1.9rem;
    font-size: 0.7rem;
    color: #b2b1b7;
    float: left;
}
.r1>div:nth-child(3){
    line-height: 1.9rem;
    font-size: 0.7rem;
    color: #b2b1b7;
    float: left;
}
.r1{
    margin-left: 5%;
    width: 65%;
    height: 7rem;
}
.r{
    display: flex;
    width: 100%;
    margin-top: 1rem;
}
.r>div:nth-child(1){
    width: 20%;
    margin-left: 5%;
    height: 7rem;
}
.r>div:nth-child(1)>img{
    width: 100%;
    height: 100%;
}
.e{
    width: 100%;
    display: flex;
    margin-top: 1.5rem;
}
.e>div:nth-child(1){
    width: 1%;
    height: 1rem;
    background: #63c1fe;
    margin-left: 5%;
}
.e>div:nth-child(2){
    width: 20%;
    height: 1rem;
   margin-left: 3%;
}
.e>div:nth-child(3){
    width: 20%;
    height: 1rem;
    margin-left: 40%;
}
.e>div:nth-child(4){
    text-align: center;
    line-height: 1.9rem;
    font-size: 1.3rem;
    width: 5%;
    height: 1rem;
   
}
.zai{
   
    display: flex;
    width: 100%;
}
.zai1{
     width: 17%;
    margin-left: 6%;
    text-align: center;
    color: #cdccd4;
}
.tubiao{
    margin-top: 1rem;
    display: flex;
    width: 100%;
}
.tubiao1{
    width: 17%;
    margin-left: 6%;
    text-align: center;
    font-size: 2rem;
    color: green;
}
.tubiao2{
    width: 17%;
    margin-left: 6%;
    text-align: center;
    font-size: 2rem;
    color: #ffd2d7;
}
.lunbo{
    display: flex;
    width: 100%;
    margin-top: 1rem;
}
.van-swipe{
    width: 90%;
    margin-left: 5%;
    height: 7rem;
}
.van-swipe-item{
    width: 100%;
    height: 100%;
}

</style>