function Television(channel, volume, status,) {
    this.channel= channel;
    this.volume= volume;
    this.status= status;

    this.setChannel= function (newChannel) {
        this.channel= newChannel;
    }
    this.getVolume= function () {
        return this.volume;
    }
    this.getStatus= function () {
        return this.status;
    }
    this.setStatus= function (changeStatus) {
        this.status = changeStatus;
    }

    this.turnOn= function () {
        if( this.getStatus()==true)
            alert("TV bật");
    }
    this.turnOff= function () {
        if( this.getStatus()==false)
            alert("TV tắt");
    }
    this.volumeUp = function () {
        this.volume++;
    }
    this.volumeDown = function () {
        this.volume--;
    }
}

function Remote() {
    this.remoteStatus = function (tivi) {
        if (tivi.getStatus() == true) {
            alert("Bạn vừa bật TV");
        } else {
            alert("Bạn vừa tắt TV");
        }
    }
}

var remote1= new Remote();
var samsung = new Television(7,12,false);


function remoteOn() {
    samsung.setStatus(true);
    samsung.turnOn();
    remote1.remoteStatus(samsung);
}

function remoteOff() {
    samsung.setStatus(false);
    samsung.turnOff();
    remote1.remoteStatus(samsung);
}

function volumeUp() {
    if (samsung.getStatus() == true) {
        samsung.volumeUp();
        if (samsung)
            alert('Âm lượng: ' + samsung.getVolume())
    }
}
function volumeDown() {
    if (samsung.getStatus() == true) {
        samsung.volumeDown();
        if (samsung.getVolume() >= 0) {
            alert('Âm lượng: ' + samsung.getVolume());
        } else {
            alert('Bạn đã giảm âm lượng hết cỡ! ');
        }
    }
}
function changeChannel(code){
    if(samsung.getStatus()==true) {
        samsung.setChannel(code);
        alert('Kênh ' + code);
    }
}