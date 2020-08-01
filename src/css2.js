const string = `/*
 * 首先，我们画一个皮卡丘的皮 
 */
.skin {
  background: #fee600;
  min-height: 100vh;
  position: relative;
}

/*
 * 一双水汪汪的眼睛
 */
.eye {
  border: 2px solid #000000;
  width: 49px;
  height: 49px;
  position: absolute;
  left: 50%;
  top: 100px;
  margin-left: -32px;
  background: #2d2d2d;
  border-radius: 50%;
}
/*
 * 加个漂亮的眼球 
 */
.eye::before {
  content: '';
  display: block;
  border: 3px solid #000;
  width: 26px;
  height: 26px;
  background: #ffffff;
  border-radius: 50%;
  position: relative;
  left: 6px;
  top: 1px;
  animation: eyesMove 300ms infinite ;
}
.eye.left {
  transform: translateX(-103px);
}

.eye.right {
  transform: translateX(120px);
}
/*
 * 让眼睛动起来吧
 */
@keyframes eyesMove {
  0%{
    top: 1px;
    left: 1px;
  }
  50%{
    top: -1px;
    left: 4px;
  }
  100% {
    top: 1px;
    left: 2px;
  }
}
/*
 * 给它一个小鼻子 
 */
.nose {
  width: 0px;
  height: 0px;
  border-style: solid;
  border-width: 12px;
  border-color: black transparent transparent;
  border-radius: 12px;
  position: absolute;
  left: 50%;
  top: 145px;
  margin-left: -10px;
  z-index: 10;
  transform-origin: center bottom;
  animation: wave 200ms infinite linear;
}
/*
 * 让鼻子动起来吧
 */
@keyframes wave {
  0% {
    transform: rotate(0deg);
  }
  33% {
    transform: rotate(3deg);
  }
  66% {
    transform: rotate(-3deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
/*
 * 皮卡丘的嘴巴
 */
.mouth {
  width: 200px;
  height: 200px;
  position: absolute;
  left: 50%;
  top: 170px;
  margin-left: -100px;
}
.mouth .up {
  position: relative;
  top: -20px;
  z-index: 1;
}
/*
 * 皮卡丘的嘴唇
 */
.mouth .up .lip {
  border: 2px solid black;
  height: 29px;
  width: 84px;
  background: #fee600;
  border-top-color: transparent;
  border-right-color: transparent;
  position: absolute;
  left: 58%;
  margin-left: -50px;
}
/*
 * 左边一个
 */
.mouth .up .lip.left {
  border-radius: 0 0 0 50px;
  transform: rotate(-18deg) translateX(-54px);;
}
/*
 * 右边一个
 */
.mouth .up .lip.right {
  border-radius: 0 0 50px 0;
  transform: rotate(18deg) translateX(54px);;
  left: 50%;
}
/*
 * 可爱的小舌头 
 */
.mouth .down .yuan1 {
  border: 2px solid black;
  width: 150px;
  height: 1000px;
  position: absolute;
  bottom: 52px;
  left: 50%;
  margin-left: -75px;
  border-radius: 75px/300px;
  background: #9b0109;
  overflow: hidden;
}
.mouth .down .yuan1 .yuan2 {
  position: absolute;
  width: 200px;
  height: 300px;
  bottom: -217px;
  left: 50%;
  margin-left: -100px;
  border-radius: 100px;
  background: #ff485f;
}
/*
 * 红红的小脸蛋
 */
.face {
  position: absolute;
  left: 50%;
  border: 2px solid black;
  width: 70px;
  height: 70px;
  top: 200px;
  margin-left: -44px;
  z-index: 3;
}
/*
 * 左边一个 
 */
.face.left {
  transform: translateX(-140px);
  background: #ff0000;
  border-radius: 50%;
}
/*
 * 右边一个 
 */
.face.right {
  transform: translateX(157px);
  background: #ff0000;
  border-radius: 50%;
}
/*
 * 好了，到这里就结束了，这只可爱的皮卡丘送个你 
 */
`
export default string