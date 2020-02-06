const Canvas = require('canvas')
const Buffer = require('buffer').Buffer;
const path = require('path');
const fs = require('fs');

async function top8(req, res) {
    //console.log(this.second);
    Canvas.registerFont('./assets/BebasNeue Bold_0.ttf', { family: 'Bebas' })
    Canvas.registerFont('./assets/Gobold Bold Italic.otf', { family: 'Gobold' })
    const canvas = Canvas.createCanvas(680, 849);
    const ctx = canvas.getContext("2d");
    const background = await Canvas.loadImage('./assets/eubc_imgs/background.png');
    console.log(background)
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);


    //Second place
    ctx.shadowOffsetX = 3;
    ctx.shadowOffsetY = 3;
    ctx.shadowColor = "rgba(0,0,0,0.3)";
    if (req.body.second.team != "") {
        ctx.font = '35px "Gobold"'
        ctx.fillStyle = "#f8cf24";
        ctx.fillText(req.body.second.team, 177, 446);
        ctx.fillStyle = "#FFFFFF";
        ctx.fillText(req.body.second.name, ctx.measureText(req.body.second.team).width + 183, 446);
    }
    else {
        ctx.font = '35px "Gobold"'
        ctx.fillStyle = "#FFFFFF";
        ctx.fillText(req.body.second.name, 177, 446);
    }
    ctx.shadowOffsetX = 0
    ctx.shadowOffsetY = 0
    //stock icons
    const stock = await Canvas.loadImage(`./assets/stocks/${req.body.second.char1}.png`);
    ctx.drawImage(stock, 590, 408, 40, 42);
    if (req.body.second.char2 != "") {
        const stock2 = await Canvas.loadImage(`./assets/stocks/${req.body.second.char2}.png`);
        ctx.drawImage(stock2, 547, 408, 40, 42);
    }
    if (req.body.second.char3 != "") {
        const stock3 = await Canvas.loadImage(`./assets/stocks/${req.body.second.char3}.png`);
        ctx.drawImage(stock3, 504, 408, 40, 42);
    }
    if (req.body.second.char4 != "") {
        const stock4 = await Canvas.loadImage(`./assets/stocks/${req.body.second.char4}.png`);
        ctx.drawImage(stock4, 461, 408, 40, 42);;
    }

    //flag
    const flag = await Canvas.loadImage(`./assets/flags/${req.body.second.country}.png`);
    ctx.drawImage(flag, 104, 406);



    //Labels
    ctx.font = '21px "Bebas"'
    ctx.fillStyle = "#FFFFFF";
    ctx.fillText(req.body.labels.date, 33, 842);
    ctx.fillText(`${req.body.labels.entrants} Entrants`, 297, 842);
    ctx.fillText(req.body.labels.tourney, 648 - ctx.measureText(req.body.labels.tourney).width, 842);


    console.log(canvas.toDataURL());
    let img = canvas.toDataURL();
    var data = img.replace(/^data:image\/\w+;base64,/, "");
    var buf = Buffer.from(data, 'base64');
    console.log(buf);
    fs.writeFile(path.join(__dirname, `${req.body.labels.tourney}.png`), buf, function (error) {
        if (error) {
            throw error;
        } else {
            console.log('File created from base64 string!');
            return true;
        }
    });
    console.log(req.body)
    console.log("directory: " + __dirname)
    res.status(201).send("dirname: " + __dirname)

}


module.exports = { top8 }