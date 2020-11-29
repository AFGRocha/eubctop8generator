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

            //Fifth place
            ctx.shadowOffsetX = 3;
            ctx.shadowOffsetY = 3;
            ctx.shadowColor = "rgba(0,0,0,0.3)";
            if (data.fifth.team != "" || data.fifth.team != " ") {
                ctx.font = '35px "Gobold"'
                ctx.fillStyle = "#f8cf24";
                ctx.fillText(data.fifth.team, 177, 619);
                ctx.fillStyle = "#FFFFFF";
                ctx.fillText(data.fifth.name, ctx.measureText(data.fifth.team).width + 183, 619);
            }
            else {
                ctx.font = '35px "Gobold"'
                ctx.fillStyle = "#FFFFFF";
                ctx.fillText(data.fifth.name, 177, 619);
            }
            ctx.shadowOffsetX = 0
            ctx.shadowOffsetY = 0
            //stock icons
            const stock5th = require('../assets/stocks/' + data.fifth.char1 + '.png')
            let stock5thImg = new Image()
            stock5thImg.src = stock5th.default
            stock5thImg.onload = function () {
                ctx.drawImage(stock5thImg, 590, 579, 40, 42);
            }

            if (data.fifth.char2 != "") {
                const stock5th2 = require('../assets/stocks/' + data.fifth.char2 + '.png')
                let stock5th2Img = new Image()
                stock5th2Img.src = stock5th2.default
                stock5th2Img.onload = function () {
                    ctx.drawImage(stock5th2Img, 547, 579, 40, 42);
                }

            }
            if (data.fifth.char3 != "") {
                const stock5th3 = require('../assets/stocks/' + data.fifth.char3 + '.png')
                let stock5th3Img = new Image()
                stock5th3Img.src = stock5th3.default
                stock5th3Img.onload = function () {
                    ctx.drawImage(stock5th3Img, 504, 579, 40, 42);
                }

            }
            if (data.fifth.char4 != "") {
                const stock5th4 = require('../assets/stocks/' + data.fifth.char4 + '.png')
                let stock5th4Img = new Image()
                stock5th4Img.src = stock5th4.default
                stock5th4Img.onload = function () {
                    ctx.drawImage(stock5th4Img, 461, 579, 40, 42);
                }

            }

            //flag
            const flag5th = require('../assets/flags/' + data.fifth.country + '.png')
            let flag5thImg = new Image()
            flag5thImg.src = flag5th.default
            flag5thImg.onload = function () {
                ctx.drawImage(flag5thImg, 104, 577);
            }


            //Fifth place 2
            ctx.shadowOffsetX = 3;
            ctx.shadowOffsetY = 3;
            ctx.shadowColor = "rgba(0,0,0,0.3)";
            if (data.fifth2.team != "" || data.fifth2.team != " ") {
                ctx.font = '35px "Gobold"'
                ctx.fillStyle = "#f8cf24";
                ctx.fillText(data.fifth2.team, 177, 676);
                ctx.fillStyle = "#FFFFFF";
                ctx.fillText(data.fifth2.name, ctx.measureText(data.fifth2.team).width + 183, 676);
            }
            else {
                ctx.font = '35px "Gobold"'
                ctx.fillStyle = "#FFFFFF";
                ctx.fillText(data.fifth2.name, 177, 676);
            }
            ctx.shadowOffsetX = 0
            ctx.shadowOffsetY = 0
            //stock icons
            const stock5th21 = require('../assets/stocks/' + data.fifth2.char1 + '.png')
            let stock5th21Img = new Image()
            stock5th21Img.src = stock5th21.default
            stock5th21Img.onload = function () {
                ctx.drawImage(stock5th21Img, 590, 636, 40, 42);
            }

            if (data.fifth2.char2 != "") {
                const stock5th22 = require('../assets/stocks/' + data.fifth2.char2 + '.png')
                let stock5th22Img = new Image()
                stock5th22Img.src = stock5th22.default
                stock5th22Img.onload = function () {
                    ctx.drawImage(stock5th22Img, 547, 636, 40, 42);
                }


            }
            if (data.fifth2.char3 != "") {
                const stock5th23 = require('../assets/stocks/' + data.fifth2.char3 + '.png')
                let stock5th23Img = new Image()
                stock5th23Img.src = stock5th23.default
                stock5th23Img.onload = function () {
                    ctx.drawImage(stock5th23Img, 504, 636, 40, 42);
                }

            }
            if (data.fifth2.char4 != "") {
                const stock5th24 = require('../assets/stocks/' + data.fifth2.char4 + '.png')
                let stock5th24Img = new Image()
                stock5th24Img.src = stock5th24.default
                stock5th24Img.onload = function () {
                    ctx.drawImage(stock5th24Img, 461, 636, 40, 42);
                }

            }

            //flag
            const flag5th2 = require('../assets/flags/' + data.fifth2.country + '.png')
            let flag5th2Img = new Image()
            flag5th2Img.src = flag5th2.default
            flag5th2Img.onload = function () {
                ctx.drawImage(flag5th2Img, 104, 634);
            }


            //Seventh place -----------------------------------------------------------------------------------------------------------------
            ctx.shadowOffsetX = 3;
            ctx.shadowOffsetY = 3;
            ctx.shadowColor = "rgba(0,0,0,0.3)";
            if (data.seventh.team != "" || data.seventh.team != " ") {
                ctx.font = '35px "Gobold"'
                ctx.fillStyle = "#f8cf24";
                ctx.fillText(data.seventh.team, 177, 733);
                ctx.fillStyle = "#FFFFFF";
                ctx.fillText(data.seventh.name, ctx.measureText(data.seventh.team).width + 183, 733);
            }
            else {
                ctx.font = '35px "Gobold"'
                ctx.fillStyle = "#FFFFFF";
                ctx.fillText(data.seventh.name, 177, 619);
            }
            ctx.shadowOffsetX = 0
            ctx.shadowOffsetY = 0
            //stock icons
            const stock7th = require('../assets/stocks/' + data.seventh.char1 + '.png')
            let stock7thImg = new Image()
            stock7thImg.src = stock7th.default
            stock7thImg.onload = function () {
                ctx.drawImage(stock7thImg, 590, 693, 40, 42);
            }

            if (data.seventh.char2 != "") {
                const stock7th2 = require('../assets/stocks/' + data.seventh.char2 + '.png')
                let stock7th2Img = new Image()
                stock7th2Img.src = stock7th2.default
                stock7th2Img.onload = function () {
                    ctx.drawImage(stock7th2Img, 547, 693, 40, 42);
                }

            }
            if (data.seventh.char3 != "") {
                const stock7th3 = require('../assets/stocks/' + data.seventh.char3 + '.png')
                let stock7th3Img = new Image()
                stock7th3Img.src = stock7th3.default
                stock7th3Img.onload = function () {
                    ctx.drawImage(stock7th3Img, 504, 693, 40, 42);
                }

            }
            if (data.seventh.char4 != "") {
                const stock7th4 = require('../assets/stocks/' + data.seventh.char4 + '.png')
                let stock7th4Img = new Image()
                stock7th4Img.src = stock7th4.default
                stock7th4Img.onload = function () {
                    ctx.drawImage(stock7th4Img, 461, 693, 40, 42);
                }


            }

            //flag
            const flag7th = require('../assets/flags/' + data.seventh.country + '.png')
            let flag7thImg = new Image()
            flag7thImg.src = flag7th.default
            flag7thImg.onload = function () {
                ctx.drawImage(flag7thImg, 104, 691);
            }


            //Seventh place 2 -----------------------------------------------------------------------------------------------------------------
            ctx.shadowOffsetX = 3;
            ctx.shadowOffsetY = 3;
            ctx.shadowColor = "rgba(0,0,0,0.3)";
            if (data.seventh2.team != "" || data.seventh2.team != " ") {
                ctx.font = '35px "Gobold"'
                ctx.fillStyle = "#f8cf24";
                ctx.fillText(data.seventh2.team, 177, 790);
                ctx.fillStyle = "#FFFFFF";
                ctx.fillText(data.seventh2.name, ctx.measureText(data.seventh2.team).width + 183, 790);
            }
            else {
                ctx.font = '35px "Gobold"'
                ctx.fillStyle = "#FFFFFF";
                ctx.fillText(data.seventh2.name, 177, 790);
            }
            ctx.shadowOffsetX = 0
            ctx.shadowOffsetY = 0
            //stock icons
            const stock7th21 = require('../assets/stocks/' + data.seventh2.char1 + '.png')
            let stock7th21Img = new Image()
            stock7th21Img.src = stock7th21.default
            stock7th21Img.onload = function () {
                ctx.drawImage(stock7th21Img, 590, 750, 40, 42);
            }

            if (data.seventh2.char2 != "") {
                const stock7th22 = require('../assets/stocks/' + data.seventh2.char2 + '.png')
                let stock7th22Img = new Image()
                stock7th22Img.src = stock7th22.default
                stock7th22Img.onload = function () {
                    ctx.drawImage(stock7th22Img, 547, 750, 40, 42);
                }

            }
            if (data.seventh2.char3 != "") {
                const stock7th23 = require('../assets/stocks/' + data.seventh2.char3 + '.png')
                let stock7th23Img = new Image()
                stock7th23Img.src = stock7th23.default
                stock7th23Img.onload = function () {
                    ctx.drawImage(stock7th23Img, 504, 750, 40, 42);
                }

            }
            if (data.seventh2.char4 != "") {
                const stock7th24 = require('../assets/stocks/' + data.seventh2.char4 + '.png')
                let stock7th24Img = new Image()
                stock7th24Img.src = stock7th24.default
                stock7th24Img.onload = function () {
                    ctx.drawImage(stock7th24Img, 461, 750, 40, 42);
                }

            }

            //flag
            const flag7th2 = require('../assets/flags/' + data.seventh2.country + '.png')
            let flag7th2Img = new Image()
            flag7th2Img.src = flag7th2.default
            flag7th2Img.onload = function () {
                ctx.drawImage(flag7th2Img, 104, 748);
            }


            //Labels
            ctx.font = '21px "Bebas Neue"'
            ctx.fillStyle = "#FFFFFF";
            ctx.fillText(data.date, 33, 842);
            ctx.fillText(`${data.entrants} Entrants`, 297, 842);
            ctx.fillText(data.tournament, 648 - ctx.measureText(data.tournament).width, 842);



        }

    }
    render() {
        return (
            <div>
                <canvas ref="canvas" width={680} height={849} />
            </div>


        );
    }


}

export default Canvas;
