import React from 'react';
import background from '../assets/eubc_imgs/background.png'
import FirstIMG from '../assets/eubc_imgs/1st.png'

class Canvas extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            link: ""
        };
    }
    onSubmit() {
        var canvas = this.refs.canvas;
        var img = canvas.toDataURL("image/png");
        console.log(img)
        this.setState({ link: img })
        var iframe = "<img src='" + img + "'></img>"
        var x = window.open();
        x.document.open();
        x.document.write(iframe);
        x.document.close();
    }
    componentDidMount() {
        this.updateCanvas();
        console.log("Mounted")
        console.log(this.props.data)

    }
    componentWillReceiveProps() {
        this.updateCanvas();
    }
    updateCanvas() {
        const data = this.props.data;
        const ctx = this.refs.canvas.getContext('2d');

        //use this later
        //const test = require('../assets/eubc_imgs/background.png')
        //console.log(test.default)
        const img = new Image();

        img.src = background;

        img.onload = function () {
            ctx.drawImage(img, 0, 0, 680, 849);

            //First place
            ctx.shadowOffsetX = 3;
            ctx.shadowOffsetY = 3;
            ctx.shadowColor = "rgba(0,0,0,0.3)";
            if (data.first.team != "") {
                ctx.font = '35px "Gobold"'
                ctx.fillStyle = "#f8cf24";
                ctx.fillText(data.first.team, 177, 389);
                ctx.fillStyle = "#FFFFFF";
                ctx.fillText(data.first.name, ctx.measureText(data.first.team).width + 183, 389);
            }
            else {
                ctx.font = '35px "Gobold"'
                ctx.fillStyle = "#FFFFFF";
                ctx.fillText(data.first.name, 177, 389);
            }
            ctx.shadowOffsetX = 0
            ctx.shadowOffsetY = 0
            //stock icons
            //const fullImg = await Canvas.loadImage(`./assets/renders/${req.body.first.char1} (1).png`);
            //ctx.drawImage(fullImg, 570 - ((fullImg.width / 5.5) / 2), 250, fullImg.width / 5.5, fullImg.height / 5.5);
            //ctx.drawImage(fullImg, 570 - ((fullImg.width/(fullImg.width/315.63))/2), 400 - ((fullImg.height/(fullImg.height/326.36))/2), fullImg.width/(fullImg.width/315.63), fullImg.height/(fullImg.height/326.36));

            /*
            if (data.first.char2 != "") {
                const firstStock2 = require('../assets/stocks/' + data.first.char2 + '.png')
                let firstStock2IMG = new Image();
                firstStock2IMG.src = firstStock2.default
                firstStock2IMG.onload = function () {
                    ctx.drawImage(firstStock2IMG, 547, 408, 40, 42);
                }
            }
            if (data.first.char3 != "") {
                const firstStock3 = require('../assets/stocks/' + data.first.char2 + '.png')
                let firstStock3IMG = new Image();
                firstStock3IMG.src = firstStock3.default
                firstStock3IMG.onload = function () {
                    ctx.drawImage(firstStock3IMG, 504, 408, 40, 42);
                }
                
            }*/

            //flag
            const flag1st = require('../assets/flags/' + data.first.country + '.png');
            let flag1stImg = new Image()
            flag1stImg.src = flag1st.default
            flag1stImg.onload = function () {
                ctx.drawImage(flag1stImg, 104, 349);
            }

            //Number 1 image
            const one = new Image()
            one.src = FirstIMG;
            one.onload = function () {
                ctx.drawImage(one, 15, 320);
            }

            //Second Place
            ctx.shadowOffsetX = 3;
            ctx.shadowOffsetY = 3;
            ctx.shadowColor = "rgba(0,0,0,0.3)";
            if (data.second.team != "" || data.second.team != " ") {
                ctx.font = '35px Gobold'
                ctx.fillStyle = "#f8cf24";
                ctx.fillText(data.second.team, 177, 446);
                ctx.fillStyle = "#FFFFFF";
                ctx.fillText(data.second.name, ctx.measureText(data.second.team).width + 183, 446);
            }
            else {
                ctx.font = '35px Gobold'
                ctx.fillStyle = "#FFFFFF";
                ctx.fillText(data.second.team, 177, 446);
            }
            ctx.shadowOffsetX = 0
            ctx.shadowOffsetY = 0

            let stockImg = new Image();
            //stock icons
            const stock = require('../assets/stocks/' + data.second.char1 + '.png')
            stockImg.src = stock.default
            stockImg.onload = function () {
                ctx.drawImage(stockImg, 590, 408, 40, 42);
            }

            if (data.second.char2 != "") {
                const stock2 = require('../assets/stocks/' + data.second.char2 + '.png')
                let stock2Img = new Image();
                stock2Img.src = stock2.default
                stock2Img.onload = function () {
                    ctx.drawImage(stock2Img, 547, 408, 40, 42);
                }

            }

            if (data.second.char3 != "") {
                const stock3 = require('../assets/stocks/' + data.second.char3 + '.png')
                let stock3Img = new Image();
                stock3Img.src = stock3.default
                stock3Img.onload = function () {
                    ctx.drawImage(stock3Img, 504, 408, 40, 42);
                }
            }
            if (data.second.char4 != "") {
                const stock4 = require('../assets/stocks/' + data.second.char4 + '.png')
                let stock4Img = new Image();
                stock4Img.src = stock4.default
                stock4Img.onload = function () {
                    ctx.drawImage(stock4Img, 461, 408, 40, 42);
                }
            }

            //flag 
            const flag = require('../assets/flags/' + data.second.country + '.png');
            let flagImg = new Image()
            flagImg.src = flag.default
            flagImg.onload = function () {
                ctx.drawImage(flagImg, 104, 406);
            }


            //Third place
            ctx.shadowOffsetX = 3;
            ctx.shadowOffsetY = 3;
            ctx.shadowColor = "rgba(0,0,0,0.3)";
            if (data.third.team != "" || data.third.team != " ") {
                ctx.font = '35px "Gobold"'
                ctx.fillStyle = "#f8cf24";
                ctx.fillText(data.third.team, 177, 505);
                ctx.fillStyle = "#FFFFFF";
                ctx.fillText(data.third.name, ctx.measureText(data.third.team).width + 183, 505);
            }
            else {
                ctx.font = '35px "Gobold"'
                ctx.fillStyle = "#FFFFFF";
                ctx.fillText(data.third.name, 177, 505);
            }
            ctx.shadowOffsetX = 0
            ctx.shadowOffsetY = 0
            //stock icons
            const stock3rd = require('../assets/stocks/' + data.third.char1 + '.png')
            let stock3rdImg = new Image();
            stock3rdImg.src = stock3rd.default
            stock3rdImg.onload = function () {
                ctx.drawImage(stock3rdImg, 590, 465, 40, 42);
            }

            if (data.third.char2 != "") {
                const stock3rd2 = require('../assets/stocks/' + data.third.char2 + '.png')
                let stock3rdImg2 = new Image();
                stock3rdImg2.src = stock3rd2.default
                stock3rdImg2.onload = function () {
                    ctx.drawImage(stock3rdImg2, 547, 465, 40, 42);
                }

            }
            if (data.third.char3 != "") {
                const stock3rd3 = require('../assets/stocks/' + data.third.char3 + '.png')
                let stock3rdImg3 = new Image();
                stock3rdImg3.src = stock3rd3.default
                stock3rdImg3.onload = function () {
                    ctx.drawImage(stock3rdImg3, 504, 465, 40, 42);
                }


            }
            if (data.third.char4 != "") {
                const stock3rd4 = require('../assets/stocks/' + data.third.char4 + '.png')

                let stock3rdImg4 = new Image();
                stock3rdImg4.src = stock3rd4.default
                stock3rdImg4.onload = function () {
                    ctx.drawImage(stock3rdImg4, 461, 465, 40, 42);;
                }


            }

            //flag
            const flag3rd = require('../assets/flags/' + data.third.country + '.png');
            let flag3rdImg = new Image()
            flag3rdImg.src = flag3rd.default
            flag3rdImg.onload = function () {
                ctx.drawImage(flag3rdImg, 104, 463);
            }


            //Fourth place
            ctx.shadowOffsetX = 3;
            ctx.shadowOffsetY = 3;
            ctx.shadowColor = "rgba(0,0,0,0.3)";
            if (data.fourth.team != "" || data.fourth.team != " ") {
                ctx.font = '35px "Gobold"'
                ctx.fillStyle = "#f8cf24";
                ctx.fillText(data.fourth.team, 177, 562);
                ctx.fillStyle = "#FFFFFF";
                ctx.fillText(data.fourth.name, ctx.measureText(data.fourth.team).width + 183, 562);
            }
            else {
                ctx.font = '35px "Gobold"'
                ctx.fillStyle = "#FFFFFF";
                ctx.fillText(data.fourth.name, 177, 562);
            }
            ctx.shadowOffsetX = 0
            ctx.shadowOffsetY = 0
            //stock icons
            const stock4th = require('../assets/stocks/' + data.fourth.char1 + '.png')
            let stock4thImg = new Image()
            stock4thImg.src = stock4th.default
            stock4thImg.onload = function () {
                ctx.drawImage(stock4thImg, 590, 522, 40, 42);
            }

            if (data.fourth.char2 != "") {
                const stock4th2 = require('../assets/stocks/' + data.fourth.char2 + '.png')
                let stock4th2Img = new Image()
                stock4th2Img.src = stock4th2.default
                stock4th2Img.onload = function () {
                    ctx.drawImage(stock4th2Img, 547, 522, 40, 42);
                }
               
            }
            if (data.fourth.char3 != "") {
                const stock4th3 = require('../assets/stocks/' + data.fourth.char4 + '.png')
                let stock4th3Img = new Image()
                stock4th3Img.src = stock4th3.default
                stock4th3Img.onload = function () {
                    ctx.drawImage(stock4th3Img, 504, 522, 40, 42);
                }
                
            }
            if (data.fourth.char4 != "") {
                const stock4th4 = require('../assets/stocks/' + data.fourth.char4 + '.png')
                let stock4th4Img = new Image()
                stock4th4Img.src = stock4th4.default
                stock4th4Img.onload = function () {
                    ctx.drawImage(stock4th4Img, 461, 522, 40, 42);
                }
                
               
            }

            //flag
            const flag4th = require('../assets/flags/' + data.fourth.country + '.png')
            let flag4thImg = new Image()
            flag4thImg.src = flag4th.default
            flag4thImg.onload = function () {
                ctx.drawImage(flag4thImg, 104, 520);
            }
            



        }

    }
    render() {
        return (
            <div>
                <canvas ref="canvas" width={680} height={849} />
                <br />
                <a href={this.state.link} onClick={this.onSubmit.bind(this)}>If you cant right click and save, click here</a>
            </div>


        );
    }
}

export default Canvas;
