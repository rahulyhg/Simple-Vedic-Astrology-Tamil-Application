/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

function numerelogy_calculate()
{
var numerology=document.NumCalc;

var str="";
var name="";
var d,m,y;
d = numerology.Day.value;
m = numerology.Month.value;
y = numerology.Year.value;
name = numerology.yname.value;
if(name==""){ alert("Please Enter Your Name"); numerology.yname.focus(); return false;}
if(d==""){ alert("Please Select Your Date of Birth"); numerology.Day.focus(); return false;}
if(m==""){ alert("Please Select Your Month of Birth"); numerology.Month.focus(); return false;}
if(y==""){ alert("Please Select Your Year of Birth");  numerology.Year.focus();return false;}
x = d%9;
if (x==0) x=9;
numerology.b1.value= x;
c = d+m+y;
c = c%9;
if (c==0) c=9;
numerology.b2.value= c;
if(x==2)
{
numerology.b3.value = "1,5,6"
numerology.b4.value = "nil"
numerology.b5.value = "11,15,20,22,29,31,38,40,47,56,60,65,74,83"
numerology.b6.value = "திங்கட்கிழமை"
numerology.b7.value = "வெள்ளை, கிரீம் நிறங்கள்"
numerology.b8.value = "சந்திரன்"
numerology.b9.value = "முத்து"
numerology.b10.value= "வெள்ளி"
numerology.b11.value= "நல்லிணக்கம், ஒத்துழைப்பு, இராஜதந்திரம், பாசம், வெளிப்பாடு"
numerology.b12.value= "கோழைத்தனம், ஊசலாடுதல், திறமை அற்ற"
numerology.b13.value= "குடல்கள், வயிறு வலி, கண்கள், ஆஸ்துமா"
}
else if(x==3)
{
numerology.b3.value = "1,2,9"
numerology.b4.value = "5,6"
numerology.b5.value = "9,12,18,21,27,30,36,39,45,48,57,63,75,84"
numerology.b6.value = "வியாழன் "
numerology.b7.value = "மஞ்சள், வெள்ளை"
numerology.b8.value = "வியாழன்"
numerology.b9.value = "மஞ்சள் சபையர்"
numerology.b10.value = "தங்கம்"
numerology.b11.value = "சோசலிசம், நம்பிக்கை, கற்பித்தல், அரசியல், தலைமை"
numerology.b12.value = "சோம்பல், தேக்கம், அவநம்பிக்கைத்தனம்"
numerology.b13.value = "லிவர், செரிமான உறுப்புகள், நீரிழிவு"
}
else if(x==4)
{
numerology.b3.value = "3,6,8"
numerology.b4.value = "2,1,9"
numerology.b5.value = "13,22,30,31,35,40,58,60,67,71,76,85"
numerology.b6.value = "திங்கள்"
numerology.b7.value = "கிரே, நீலம்"
numerology.b8.value = "ராகு (யுரேனஸ்)"
numerology.b9.value = "நவரத்தினங்கள்"
numerology.b10.value = "முன்னணி"
numerology.b11.value = "நடைமுறை, பொருளாதாரம், அமைப்பு, விசுவாசம், கண்டுபிடிப்பு"
numerology.b12.value = "கட்டுப்பாடு, வழக்கத்திற்கு மாறான, கடுமை"
numerology.b13.value = "அனீமியா, மன நோய், தலைவலி, நச்சுகள்"
}
else if(x==5)
{
numerology.b3.value = "1,6,8"
numerology.b4.value = "2,9"
numerology.b5.value = "14,23,26,32,33,41,50,53,59,68,77,80,86"
numerology.b6.value = "புதன்"
numerology.b7.value = "பசுமை"
numerology.b8.value = "மெர்குரி"
numerology.b9.value = "எமரால்டு"
numerology.b10.value = "வெண்கலம்"
numerology.b11.value = "செயலாக்கம், மன ஆர்வம், சுற்றுலா, வணிக, கல்வி, சட்டம்"
numerology.b12.value = "கவனக்குறைவு, மாறக்கூடிய, அமைதியின்மை"
numerology.b13.value = "நரம்பு மற்றும் செரிமான நோய்கள், பேச்சு"
}
else if(x==6)
{
numerology.b3.value = "5,8"
numerology.b4.value = "1,2"
numerology.b5.value = "15,24,31,35,40,42,49,51,58,60,69,78,87"
numerology.b6.value = "வெள்ளி"
numerology.b7.value = "மஞ்சள், வெள்ளை"
numerology.b8.value = "வீனஸ்"
numerology.b9.value = "வைரம்"
numerology.b10.value = "தங்கம், பிளாட்டினம்"
numerology.b11.value = "குடும்ப, கலை, நன்றாக சுவை, கற்பித்தல், பொறுப்பு"
numerology.b12.value = "ஆடம்பரமான, கர்வம், அதிக ஆசை"
numerology.b13.value = "பிறப்பு உறுப்புகள், சிரை நோய்கள், சிறுநீரகம்"
}
else if(x==7)
{numerology.b3.value = "1,2,9"
numerology.b4.value = "6,8"
numerology.b5.value = "16,20,25,29,34,38,43,47,52,56,61,70,79"
numerology.b6.value = "ஞாயிறு"
numerology.b7.value = "கலப்பு நிறங்கள்"
numerology.b8.value = "Kethu (நெப்டியூன்)"
numerology.b9.value = "பூனை கண், புஷ்பராகம்"
numerology.b10.value = "கலப்பு உலோக (அல்லாய்)"
numerology.b11.value = "மறைபொருள் ஆய்வும், மன பகுப்பாய்வு, ஆராய்ச்சி, ஆன்மீகம், ஆய்வு"
numerology.b12.value = "அங்கதம், குளிர், உணர்திறன் நிறைய"
numerology.b13.value = "ஸ்கின், விந்து அல்லது சினைப்பை, குவியல், கண்டுபிடிக்க முடியாத நோய்கள்"
}
else if(x==8)
{numerology.b3.value = "5,6"
numerology.b4.value = "1,2,9"
numerology.b5.value = "8,17,21,26,30,35,44,48,53,57,62,71,80"
numerology.b6.value = "சனி"
numerology.b7.value = "ப்ளூ, பிளாக்"
numerology.b8.value = "சனி"
numerology.b9.value = "ப்ளூ சபையர்"
numerology.b10.value = "இரும்பு, எஃகு"
numerology.b11.value = "செயல் திறன், தீர்ப்பு, தொழிற்சங்க-தலைமை, பொறுமை"
numerology.b12.value = "சக்தியின்மை, மந்தத்தன்மை, தள்ளிவைத்தல்"
numerology.b13.value = "கல்லீரல், பித்த, மலச்சிக்கல், வாத நோய்"
}
else if(x==9)
{numerology.b3.value = "1,2,3"
numerology.b4.value = "5"
numerology.b5.value = "9,10,19,27,28,30,36,37,46,54,63,72,81"
numerology.b6.value = "செவ்வாய்"
numerology.b7.value = "சிவப்பு"
numerology.b8.value = "செவ்வாய்"
numerology.b9.value = "சிவப்பு பவளம்"
numerology.b10.value = "செம்பு"
numerology.b11.value = "சுறுசுறுப்பு, ஆற்றல், தைரியம், சகோதரத்துவம், செயல்"
numerology.b12.value = "தாழ்வு மனப்பான்மை, கோபம், பொறுமை இன்மை"
numerology.b13.value = "ஸ்கின், புண்கள், இரத்த அழுத்தம், கட்டிகள், விபத்துக்கள்"
}
numerelogy_calculate1(name);
}

function numerelogy_calculate1(name)
{
var arr1 = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O',
'P','Q','R','S','T','U','V','W','X','Y','Z'];
var arr2 = [1,2,3,4,5,8,3,5,1,1,2,3,4,5,7,8,1,2,3,4,6,6,6,5,1,7];

var str=name.toUpperCase();
var msg="";
var num1=0;
var flag =0;
var n = str.length;
var str1="";
for(var i=0; i<n; i++)
{
msg = str.charAt(i);
	for(var x=0; x<26; x++)
	{
    	if(msg == arr1[x]) num1 = num1+ arr2[x];
	}
}
if(num1>=55) 
{
num1 = num1% 54;
}
str1="Hello "+str+", "+"Your Name number is "+num1+"."+"\n";
if(num1==33) num1=24;
if(num1==34) num1=25;
if(num1==35) num1=26;
if(num1==36) num1=27;
if(num1==38) num1=29;
if(num1==39) num1=30;
if(num1==40) num1=31;
if(num1==41) num1=32;
if(num1==42) num1=24;
if(num1==44) num1=26;
if(num1==45) num1=27;
if(num1==46) num1=37;
if(num1==47) num1=29;
if(num1==48) num1=30;
if(num1==49) num1=31;
if(num1==50) num1=32;
if(num1==52) num1=43;
if(num1==53) num1=8;
if(num1==54) num1=9;


if(num1== 1) str1 = str1+ "It indicates that you are ambitious and independent with a creative bent of mind. You will excel in professions where managerial qualities are required. You will see any work completed. You are worried about name and fame and do not yield to flattery. You want to lead others and do not want to follow. You will excuse others if they bend before you.";

if(num1== 2) str1 = str1 + "It indicates that you are romantic, emotional, imaginative and inventive. You love to change and this leads to frequent travels.  You change your decisions. You like good food and drinks. You will have two sources of income. You will earn name and fame elsewhere outside your native place.  You are family- oriented and respect old customs.";

if(num1== 3) str1 = str1 + "This number indicates that idealism, religion, expansion and optimism. You can easily spot any deception and dishonesty. You feel responsible in your work. You are a leader and good organizer. You do not want to be a subordinate to others. You will excel in a government sector where power and authority is important.";
if(num1== 4) str1 = str1 + "This number indicates that you view everything from an opposite angle. This mentality will make secrete enemies for you. You will concentrate more on future than on present. You are unconventional and become a revolutionist. You excel in mathematics and law. You are more prone to skin dieses.";

if(num1== 5) str1 = str1 + "It indicates versatility and communication. You will have skill in different subjects and very tactful in your speech. You are calculative in spending money. You love commerce, finance and banking related subjects. Since your analysis will be generally correct, you will excel in stock exchange and shares.";

if(num1== 6) str1 = str1 +  "It indicates magnetism and love You like to dress neatly and attractive to others. You are soft with sweet voice. You involve into love affairs and spend money on luxurious articles. You are fit for professions where artistic nature involved. You should control jealousy.";

if(num1== 7) str1 = str1 + "This number indicates spirituality, mystery and sensitivity. You are sympathetic to the feelings of others. Your dreams often come true. You have interest in mysterious things like gods and devils. Your philosophical outlook will become an obstacle in earning money. You love reading books and enjoy indoor sports.";

if(num1== 8) str1 = str1 + "It indicates patience and duty. You are misunderstood most often by others. You have a warm heart but you appear cold and undemonstrative to others. You will see either great failures or great success in your life. You maintain limitations in every thing. Your spouse will have a dominating nature.";

if(num1== 9) str1 = str1 + "This number represents stubborn nature, courage and aggressiveness. You are action-oriented and do not want to waste time in thinking. You are straight forward and you do not care even your superiors. You feel life is a battle and hence you make enemies quickly. You should control your anger and be diplomatic.";

if(num1== 10) str1 = str1 + "This number denotes wheel of fortune. So, you will have sometimes luck and sometimes bad luck. Both will be in extreme. Remember, you will be successful only if you carry out your plans with determination and hard work. Since you cannot realize your inner potential, you will face frustration.";

if(num1== 11) str1 = str1 + "This number is a symbol of warnings of hidden dangers, trial and treachery from others. You will face difficulty in uniting many separated things. There would be conflict in every sphere of life. There would be a third party involvement in your personal affairs which ruin your life.";

if(num1== 12) str1 = str1 + "The symbolism of this number is suffering and anxiety of mind. You should be alert in every situation and beware of false flattery from others. You will become victim of others misdeeds. You will suffer from emotional stress and mental anguish as a result of bitter lessons you will learn.";

if(num1== 13) str1 = str1 + "This number indicates change of plans, place and regeneration of new ideas. It is a symbol of power which if wrongly used will wreak destruction upon itselnumerology. Unknown and sudden misfortunes will fall on you. Financial loss and ill health are indicated.";

if(num1== 14) str1 = str1 + "It indicates danger from natural forces such as storms, water, air, fire etc. You will have success in communication, writing, publishing and all media related matters. You will lose in betting, speculation and stock market. You should rely on your intuition.";

if(num1== 15) str1 = str1 +  "It represents magic and mystery. You will talk convincingly. You love music, art and drama. You can obtain money, gifts and favors from others. Do not use your mystical powers for selfish purpose. With them, you can bring great happiness to others.";

if(num1== 16) str1 = str1 + "This number indicates danger of accidents and the defeat of one plans. If you follow your inner voice, you can escape from dangers. You may reach top most position in your profession, but there would be sudden fall from that position. You should heed the warning signs and plan the things to avoid misfortunes.";

if(num1== 17) str1 = str1 + "It is a spiritual number that represents love and peace. By experiencing difficulties in life, finally your soul will rise to higher planes. Always try to help others. People will slowly realize your philanthropic nature. Your name will live after you for a long time.";

if(num1== 18) str1 = str1 + "It indicates tensions and quarrels. You will involve into bitter quarrels with others. There is a warning of dangers and treachery from others. There may be accidents from air, fire and storms. Do not try to make money through wars or revolutionary methods.";

if(num1== 19) str1 = str1 + "This number is regarded as fortunate and extremely favorable. You will be successful in all of your endeavors. Happiness and honor will be yours. There are chances of reaching to top position in your career. There may be benefits from Government people and projects.";

if(num1== 20) str1 = str1 + "It represents the awakening of new purpose, new plans and new ambitions. There would be delays and obstacles in your undertakings. You should take the help of your mind to achieve success. Gods will help you, so have faith. But there may be dissatisfaction in monetary gains.";

if(num1== 21) str1 = str1 + "It promises general success, advancement, honors and awards. Even though there is a struggle, you will gain victory at the end. You will have elevation in your career and life. You will have sweet speech, active thinking and a magnetic personality.";

if(num1== 22) str1 = str1 + "This number indicates a person who cannot resist the attacks from others. You will trust in people who are not trust-worthy. This leads to backstabbing and cheating. Even though, you are a good person, people will try to throw stones against you. So, be watchful.";

if(num1== 23) str1 = str1 + "This number represents success by the help of friends and superiors. You will receive all kinds of prosperity and wealth. You can make your plans successful with the cooperation of people in high position.";

if(num1== 24) str1 = str1 + "It is a favorable number to enjoy success and luxuries in life. You will receive help from people in high position. There will be gains through love and the opposite sex. You will have original thoughts, good logic and eloquent speech. There may be fickle mindedness.";

if(num1== 25) str1 = str1 +  "This number represents spiritual wisdom gained through careful observation of people and things. You can also gain worldly success by learning through experience. There would be difficulties in early life but you will be successful finally. Control your wavering mind.";

if(num1==26) str1 = str1 + "This number represents dangers and failures. You may see failures through bad advice or association with bad people. Your spouse or partner may not cooperate. You should be careful in analysis before starting any venture. Speculation and stock market will bring you losses.";

if(num1== 27) str1 = str1 + "This number promises authority, power and command. You will receive great rewards in your work. Your creative ability and imagination will give you success. You should control short temper and try to keep your mind peaceful.";

if(num1== 28) str1 = str1 + "This number is full of contradiction. You can not take wise decisions and hence you will meet with failures. You may face losses through trust in others, powerful opposition from enemies and competitors in business. Court litigations are also indicated.";

if(num1==29) str1 = str1 + "This number indicates uncertainties and deception from others. You will have unreliable friends. There may be grief caused by opposite sex. Your mind will be restless and your speech will be harsh. Personal life will not be good.";

if(num1==30) str1 = str1 + "This number represents mental superiority over others. By proper control of your mind, you can achieve success. You will not be interested in material success. This leads to setbacks in your earnings. You should not try to dominate others.";

if(num1==31) str1 = str1 + "This number represents a lonely and isolated person. You may be a genius with high intelligence but you can not get material success. There may be some revolutionary ideas which will not materialize. You will have difficulties in profession and there may be loss of prestige.";

if(num1== 32) str1 = str1 + "This number represents excellent communication. You will receive benefits from people in high positions. You will have good education and superior knowledge. Advertising, writing, publishing and mass media will help you. It is advised that you should stick to your own judgment.";

if(num1== 37) str1 = str1 + "This number represents good and fortunate friendships in love. You may receive help and benefits from partners and opposite sex. There will be harmony in life. You can get steady progress and finally reach a high position in life. There may be help from enlightened people.";

if(num1== 43) str1 = str1 + "It indicates revolution, strife, conflict and war. You will see failures in most of the events in life. This is because of your wrong judgment. You may go to high position but there may be sudden loss of position and money. Try to avoid company of bad people.";

if(num1== 51) str1 = str1 + "This number represents a warrior and hence favorable for military and navy people. You will get help from people in high position. You should control your anger. You may have enemies and may be cheated by others. Business may be good.";
document.NumCalc.b14.value=str1;

}
function set(){
	document.getElementById(show).style.display='block';
}
function initrFields()
{
           var d = new Date();
           document.forms[0].Year.value = d.getFullYear();
           document.forms[0].Day.value = d.getDate();
           document.forms[0].Month.selectedIndex = d.getMonth();
           document.forms[0].Hour.value = d.getHours();
           document.forms[0].Min.value = d.getMinutes();
           var zmins = d.getTimezoneOffset();
           var zsign = -1;
           zmins /= 60;
           if(zmins < 0.0)zsign = 1;
           zmins = Math.abs(zmins);
           document.forms[0].ZHour.value = Math.floor(zmins) * zsign;
           document.forms[0].ZMin.value = (zmins - Math.floor(zmins)) * 60;
}