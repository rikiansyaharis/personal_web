const myCanvas2 = document.getElementById('myCanvas2');
myCanvas2.width = 1120;
myCanvas2.height = 350;
let ctx = myCanvas2.getContext('2d');

let imageData = ctx.getImageData(0, 0, myCanvas2.width, myCanvas2.height);

let lingkaran2 = new lingkaran(200, 100, 75, "yellow", false, true, true, false);
let lingkaran3 = new lingkaran(150, 50, 25, "green", true, false, false, true);
let lingkaran4 = new lingkaran(100, 50, 50, "blue", false, true, true, false);
let lingkaran5 = new lingkaran(250, 150, 80, "purple", true, false, false, true);

function animasi() {
ctx.save();
ctx.clearRect(0, 0, myCanvas2.width, myCanvas2.height);

ctx.globalAlpha = 0.4;

//memanggil obj
lingkaran2.lingkaran();
lingkaran3.lingkaran();
lingkaran4.lingkaran();
lingkaran5.lingkaran();

ctx.restore();
}
setInterval(animasi, 0.1);

function lingkaran(x, y, r, w, kanan, kiri, atas, bawah) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.w = w;
        this.kanan = kanan;
        this.kiri = kiri;
        this.atas = atas;
        this.bawah = bawah;

        this.lingkaran = function () {
        ctx.fillStyle = this.w;
        ctx.beginPath();
        ctx.arc(this.x + r, this.y + r, this.r, 0, Math.PI * 2);
        ctx.fill();

        if (this.kanan) {
        this.x++;
        }
        if (this.kiri) {
        this.x--;
        }
        if (this.bawah) {
        this.y++;
        }
        if (this.atas) {
        this.y--;
        }

        if (this.x + this.r > myCanvas2.width - this.r) {
        this.kanan = false;
        this.kiri = true;
        } else if (this.x == 0) {
        this.kanan = true;
        this.kiri = false;
        }
        if (this.y + this.r > myCanvas2.height - this.r) {
        this.bawah = false;
        this.atas = true;
        } else if (this.y == 0) {
        this.bawah = true;
        this.atas = false;
        }
    };
}



// function roket() {
//     ctx.putImageData(imageData, 0, 0);
//     //badan
//     ctx.fillStyle = "#0E6966";
//     ctx.beginPath();
//     ctx.moveTo(200, 75);
//     ctx.lineTo(200, 275);
//     ctx.lineTo(300, 275);
//     ctx.lineTo(300, 75);
//     ctx.fill();

//     //Kepala Roket
//     ctx.fillStyle = "#474747";
//     ctx.beginPath();
//     ctx.moveTo(250, 10);
//     ctx.lineTo(200, 75);
//     ctx.lineTo(300, 75);
//     ctx.lineTo(250, 10);
//     ctx.fill();


//     //Bagian bawa roket
//     ctx.fillStyle = "#212121";
//     ctx.beginPath();
//     ctx.moveTo(200, 275);
//     ctx.lineTo(200, 350);
//     ctx.lineTo(130, 350);
//     ctx.fill();

//     //sayap atas
//     ctx.beginPath();
//     ctx.moveTo(300, 275);
//     ctx.lineTo(300, 350);
//     ctx.lineTo(370, 350);
//     ctx.fill();

//     //badan api
//     ctx.fillStyle = "#474747";
//     ctx.beginPath();
//     ctx.moveTo(300, 275);
//     ctx.lineTo(200, 275);
//     ctx.lineTo(200, 350);
//     ctx.lineTo(300, 350);
//     ctx.fill();

//     //badan api 2
//     ctx.fillStyle = "#474747";
//     ctx.beginPath();
//     ctx.arc(250, 345, 50, 50, 0, Math.PI * 2);
//     ctx.fill();

//     //api
//     ctx.fillStyle = "#ff0000";
//     ctx.beginPath();
//     ctx.moveTo(203, 363);
//     ctx.bezierCurveTo(190, 500, 160, 500, 230, 390);
//     ctx.fill();

//     ctx.beginPath();
//     ctx.moveTo(270, 390);
//     ctx.bezierCurveTo(330, 500, 315, 500, 295, 363);
//     ctx.fill();

//     ctx.beginPath();
//     ctx.moveTo(230, 390);
//     ctx.bezierCurveTo(260, 600, 250, 590, 270, 390);
//     ctx.fill();

//     ctx.beginPath();
//     ctx.moveTo(203, 363);
//     ctx.bezierCurveTo(240, 500, 220, 500, 235, 390);
//     ctx.fill();

//     ctx.beginPath();
//     ctx.moveTo(266, 390);
//     ctx.bezierCurveTo(290, 600, 280, 300, 290, 390);
//     ctx.fill();
// }

// var Maju = -75;

// function animasi1() {
//     ctx.save();
//     ctx.rotate(90 * Math.PI / 180);
//     ctx.scale(-1, 1);
//     ctx.translate(-370, Maju);
//     roket();
//     Maju--;

//     ctx.restore();
// }

// setInterval(animasi1, 10);
