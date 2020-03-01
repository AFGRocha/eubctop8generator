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



    //Third place
    ctx.shadowOffsetX = 3;
    ctx.shadowOffsetY = 3;
    ctx.shadowColor = "rgba(0,0,0,0.3)";
    if (req.body.third.team != "") {
        ctx.font = '35px "Gobold"'
        ctx.fillStyle = "#f8cf24";
        ctx.fillText(req.body.third.team, 177, 505);
        ctx.fillStyle = "#FFFFFF";
        ctx.fillText(req.body.third.name, ctx.measureText(req.body.third.team).width + 183, 505);
    }
    else {
        ctx.font = '35px "Gobold"'
        ctx.fillStyle = "#FFFFFF";
        ctx.fillText(req.body.third.name, 177, 505);
    }
    ctx.shadowOffsetX = 0
    ctx.shadowOffsetY = 0
    //stock icons
    const stock3rd = await Canvas.loadImage(`./assets/stocks/${req.body.third.char1}.png`);
    ctx.drawImage(stock3rd, 590, 465, 40, 42);
    if (req.body.third.char2 != "") {
        const stock3rd2 = await Canvas.loadImage(`./assets/stocks/${req.body.third.char2}.png`);
        ctx.drawImage(stock3rd2, 547, 465, 40, 42);
    }
    if (req.body.third.char3 != "") {
        const stock3rd3 = await Canvas.loadImage(`./assets/stocks/${req.body.third.char3}.png`);
        ctx.drawImage(stock3rd3, 504, 465, 40, 42);
    }
    if (req.body.third.char4 != "") {
        const stock3rd4 = await Canvas.loadImage(`./assets/stocks/${req.body.third.char4}.png`);
        ctx.drawImage(stock3rd4, 461, 465, 40, 42);;
    }

    //flag
    const flag3rd = await Canvas.loadImage(`./assets/flags/${req.body.third.country}.png`);
    ctx.drawImage(flag3rd, 104, 463);

    //Fourth place
    ctx.shadowOffsetX = 3;
    ctx.shadowOffsetY = 3;
    ctx.shadowColor = "rgba(0,0,0,0.3)";
    if (req.body.fourth.team != "") {
        ctx.font = '35px "Gobold"'
        ctx.fillStyle = "#f8cf24";
        ctx.fillText(req.body.fourth.team, 177, 562);
        ctx.fillStyle = "#FFFFFF";
        ctx.fillText(req.body.fourth.name, ctx.measureText(req.body.fourth.team).width + 183, 562);
    }
    else {
        ctx.font = '35px "Gobold"'
        ctx.fillStyle = "#FFFFFF";
        ctx.fillText(req.body.fourth.name, 177, 562);
    }
    ctx.shadowOffsetX = 0
    ctx.shadowOffsetY = 0
    //stock icons
    const stock4th = await Canvas.loadImage(`./assets/stocks/${req.body.fourth.char1}.png`);
    ctx.drawImage(stock4th, 590, 522, 40, 42);
    if (req.body.fourth.char2 != "") {
        const stock4th2 = await Canvas.loadImage(`./assets/stocks/${req.body.fourth.char2}.png`);
        ctx.drawImage(stock4th2, 547, 522, 40, 42);
    }
    if (req.body.fourth.char3 != "") {
        const stock4th3 = await Canvas.loadImage(`./assets/stocks/${req.body.fourth.char3}.png`);
        ctx.drawImage(stock4th3, 504, 522, 40, 42);
    }
    if (req.body.fourth.char4 != "") {
        const stock4th4 = await Canvas.loadImage(`./assets/stocks/${req.body.fourth.char4}.png`);
        ctx.drawImage(stock4th4, 461, 522, 40, 42);;
    }

    //flag
    const flag4th = await Canvas.loadImage(`./assets/flags/${req.body.fourth.country}.png`);
    ctx.drawImage(flag4th, 104, 520);


    //Fifth place
    ctx.shadowOffsetX = 3;
    ctx.shadowOffsetY = 3;
    ctx.shadowColor = "rgba(0,0,0,0.3)";
    if (req.body.fifth.team != "") {
        ctx.font = '35px "Gobold"'
        ctx.fillStyle = "#f8cf24";
        ctx.fillText(req.body.fifth.team, 177, 619);
        ctx.fillStyle = "#FFFFFF";
        ctx.fillText(req.body.fifth.name, ctx.measureText(req.body.fifth.team).width + 183, 619);
    }
    else {
        ctx.font = '35px "Gobold"'
        ctx.fillStyle = "#FFFFFF";
        ctx.fillText(req.body.fifth.name, 177, 619);
    }
    ctx.shadowOffsetX = 0
    ctx.shadowOffsetY = 0
    //stock icons
    const stock5th = await Canvas.loadImage(`./assets/stocks/${req.body.fifth.char1}.png`);
    ctx.drawImage(stock5th, 590, 579, 40, 42);
    if (req.body.fifth.char2 != "") {
        const stock5th2 = await Canvas.loadImage(`./assets/stocks/${req.body.fifth.char2}.png`);
        ctx.drawImage(stock5th2, 547, 579, 40, 42);
    }
    if (req.body.fifth.char3 != "") {
        const stock5th3 = await Canvas.loadImage(`./assets/stocks/${req.body.fifth.char3}.png`);
        ctx.drawImage(stock5th3, 504, 579, 40, 42);
    }
    if (req.body.fifth.char4 != "") {
        const stock5th4 = await Canvas.loadImage(`./assets/stocks/${req.body.fifth.char4}.png`);
        ctx.drawImage(stock5th4, 461, 579, 40, 42);
    }

    //flag
    const flag5th = await Canvas.loadImage(`./assets/flags/${req.body.fifth.country}.png`);
    ctx.drawImage(flag5th, 104, 577);

    //Fifth place 2
    ctx.shadowOffsetX = 3;
    ctx.shadowOffsetY = 3;
    ctx.shadowColor = "rgba(0,0,0,0.3)";
    if (req.body.fifth.team != "") {
        ctx.font = '35px "Gobold"'
        ctx.fillStyle = "#f8cf24";
        ctx.fillText(req.body.fifth2.team, 177, 676);
        ctx.fillStyle = "#FFFFFF";
        ctx.fillText(req.body.fifth2.name, ctx.measureText(req.body.fifth2.team).width + 183, 676);
    }
    else {
        ctx.font = '35px "Gobold"'
        ctx.fillStyle = "#FFFFFF";
        ctx.fillText(req.body.fifth2.name, 177, 676);
    }
    ctx.shadowOffsetX = 0
    ctx.shadowOffsetY = 0
    //stock icons
    const stock5th21 = await Canvas.loadImage(`./assets/stocks/${req.body.fifth2.char1}.png`);
    ctx.drawImage(stock5th21, 590, 636, 40, 42);
    if (req.body.fifth2.char2 != "") {
        const stock5th22 = await Canvas.loadImage(`./assets/stocks/${req.body.fifth2.char2}.png`);
        ctx.drawImage(stock5th22, 547, 636, 40, 42);
    }
    if (req.body.fifth2.char3 != "") {
        const stock5th23 = await Canvas.loadImage(`./assets/stocks/${req.body.fifth2.char3}.png`);
        ctx.drawImage(stock5th23, 504, 636, 40, 42);
    }
    if (req.body.fifth2.char4 != "") {
        const stock5th24 = await Canvas.loadImage(`./assets/stocks/${req.body.fifth2.char4}.png`);
        ctx.drawImage(stock5th24, 461, 636, 40, 42);;
    }

    //flag
    const flag5th2 = await Canvas.loadImage(`./assets/flags/${req.body.fifth2.country}.png`);
    ctx.drawImage(flag5th2, 104, 634);


    //Seventh place -----------------------------------------------------------------------------------------------------------------
    ctx.shadowOffsetX = 3;
    ctx.shadowOffsetY = 3;
    ctx.shadowColor = "rgba(0,0,0,0.3)";
    if (req.body.seventh.team != "") {
        ctx.font = '35px "Gobold"'
        ctx.fillStyle = "#f8cf24";
        ctx.fillText(req.body.seventh.team, 177, 733);
        ctx.fillStyle = "#FFFFFF";
        ctx.fillText(req.body.seventh.name, ctx.measureText(req.body.seventh.team).width + 183, 733);
    }
    else {
        ctx.font = '35px "Gobold"'
        ctx.fillStyle = "#FFFFFF";
        ctx.fillText(req.body.seventh.name, 177, 619);
    }
    ctx.shadowOffsetX = 0
    ctx.shadowOffsetY = 0
    //stock icons
    const stock7th = await Canvas.loadImage(`./assets/stocks/${req.body.seventh.char1}.png`);
    ctx.drawImage(stock7th, 590, 693, 40, 42);
    if (req.body.seventh.char2 != "") {
        const stock7th2 = await Canvas.loadImage(`./assets/stocks/${req.body.seventh.char2}.png`);
        ctx.drawImage(stock7th2, 547, 693, 40, 42);
    }
    if (req.body.seventh.char3 != "") {
        const stock7th3 = await Canvas.loadImage(`./assets/stocks/${req.body.seventh.char3}.png`);
        ctx.drawImage(stock7th3, 504, 693, 40, 42);
    }
    if (req.body.seventh.char4 != "") {
        const stock7th4 = await Canvas.loadImage(`./assets/stocks/${req.body.seventh.char4}.png`);
        ctx.drawImage(stock7th4, 461, 693, 40, 42);;
    }

    //flag
    const flag7th = await Canvas.loadImage(`./assets/flags/${req.body.seventh.country}.png`);
    ctx.drawImage(flag7th, 104, 691);


    //Seventh place 2 -----------------------------------------------------------------------------------------------------------------
    ctx.shadowOffsetX = 3;
    ctx.shadowOffsetY = 3;
    ctx.shadowColor = "rgba(0,0,0,0.3)";
    if (req.body.seventh2.team != "") {
        ctx.font = '35px "Gobold"'
        ctx.fillStyle = "#f8cf24";
        ctx.fillText(req.body.seventh2.team, 177, 790);
        ctx.fillStyle = "#FFFFFF";
        ctx.fillText(req.body.seventh2.name, ctx.measureText(req.body.seventh2.team).width + 183, 790);
    }
    else {
        ctx.font = '35px "Gobold"'
        ctx.fillStyle = "#FFFFFF";
        ctx.fillText(req.body.seventh2.name, 177, 790);
    }
    ctx.shadowOffsetX = 0
    ctx.shadowOffsetY = 0
    //stock icons
    const stock7th21 = await Canvas.loadImage(`./assets/stocks/${req.body.seventh2.char1}.png`);
    ctx.drawImage(stock7th21, 590, 750, 40, 42);
    if (req.body.seventh2.char2 != "") {
        const stock7th22 = await Canvas.loadImage(`./assets/stocks/${req.body.seventh2.char2}.png`);
        ctx.drawImage(stock7th22, 547, 750, 40, 42);
    }
    if (req.body.seventh2.char3 != "") {
        const stock7th23 = await Canvas.loadImage(`./assets/stocks/${req.body.seventh2.char3}.png`);
        ctx.drawImage(stock7th23, 504, 750, 40, 42);
    }
    if (req.body.seventh2.char4 != "") {
        const stock7th24 = await Canvas.loadImage(`./assets/stocks/${req.body.seventh2.char4}.png`);
        ctx.drawImage(stock7th24, 461, 750, 40, 42);;
    }

    //flag
    const flag7th2 = await Canvas.loadImage(`./assets/flags/${req.body.seventh2.country}.png`);
    ctx.drawImage(flag7th2, 104, 748);

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