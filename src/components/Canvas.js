import React from 'react';
import background from '../assets/eubc_imgs/background.png'

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

            //Second Place
            ctx.shadowOffsetX = 3;
            ctx.shadowOffsetY = 3;
            ctx.shadowColor = "rgba(0,0,0,0.3)";
            if (data.second.team != "") {
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

            //flag Netherlands
            const flag = require('../assets/flags/' + data.second.country + '.png');
            let flagImg = new Image()
            flagImg.src = flag.default
            flagImg.onload = function () {
                ctx.drawImage(flagImg, 104, 406);
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
