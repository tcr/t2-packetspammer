var fs = require('fs');
var execSync = require('child_process').execSync;

console.log(execSync('echo starting').toString());

/*
We need to be able to send a constant stream of pins on a certain wifi channel. Task items for this are:
    * Be able to set the channel. Apparently this is doable from AP mode 

 http://wiki.openwrt.org/doc/uci/wireless
*/

/*
TODO fix these commands
console.log(execSync('uci set system.@system[0].hostname=test_ap').toString());
console.log(execSync('uci set network.lan.ipaddr=192.168.1.1').toString());
console.log(execSync('uci set wireless.@wifi-iface[0].mode=ap').toString());
console.log(execSync('uci set wireless.@wifi-iface[0].ssid=OpenWrt').toString());
console.log(execSync('uci set wireless.@wifi-iface[0].encryption=none').toString());
console.log(execSync('uci set wireless.@wifi-iface[0].wds=1').toString());
console.log(execSync('uci set wireless.radio0.disabled=0').toString());
console.log(execSync('uci set wireless.radio0.macaddr=').toString());
console.log(execSync('uci set wireless.radio0.phy=phy0').toString());
console.log(execSync('uci commit').toString());
*/

/*

* Force it to send packets from AP mode
 
 https://wireless.wiki.kernel.org/en/users/documentation/packetspammer
*/

var main = require('bindings')('packetspammer').hello;

var exitcode = main('packetspammer'); // TODO add args to the end of this a la the packetspammer program

/*
* Packet spammer also listens, so it might be a good way to test
* that the spam is working with two tessels (`iwconfig wlan0 channel 2`).
* or listen for the packets on a specific channel using a mac
*/
