// let obj = {
//     s_id : " : 01" ,
//     s_name : " : Javeria",
//     s_age : " : 20",
//     s_roll : " : GCS1-Cm-E0124sc",
//     s_depart : " : IT",
// }

// document.write(obj)  //  ye print nh hga
// console.log(obj)  // ye console pe print hjaega bt console t hta hi rough work h

// document.write(obj.s_age)  // ab ye thk treeqa h lkn us wqt jb hmn koi ek hi  value print
// krni ho yni jsee hm ( arr[4] ) array ko index se get kre th isi trhn ise key se get krte hn 
// document.write(obj.s_name)  

// lkn ab bt aati h oosi array ki trhn k agr hmn pura array print krwna h t hm kia ek ek krke
// krwaenge nh na islye is kaam k lye loop hte hn ab object ko print krne k lye forIn ka loop
// hta h. acha ab yhn ek confusion h wo ye k jb hm srf key lkh k print krwaenge tb t uski key hi
//  print hgi lkn jb hm obj[key] lkhnge tbkey print nh hgi blke us key ki value print hgi:

// for(var key in obj) {
//     document.write(key, '<br>')
// }

// ab iski value print hgi:

// for(var key in obj) {
//     document.write(obj[key] , '<br>')
// }

// ab jb srf akela key lkha h tb t uski key print hgi lkn jb obj k sth sq braces mn key lkha h
// tb us key ki value print hgi:

// for(var key in obj) {
//     document.write(key, obj[key], '<br>')
// }




// let myObj = {
//     name: 'Javeria',
//     fName: 'Farooq',
//     class: '12',
//     rollNo: '500072',
//     totalMarks: '100',
//     obtMarks: '95',
//     per: '95%'
// }

// document.write(myObj)
// console.log(myObj)

// lkn ab mn chah rh hn k mujhe console pe ye data print nh krna blke document pe krna h or document pe ye ho nh rh t
// ab iska treeqa kia h. iska treeqa ye h k hmare ps ek loop hta h jo srf or srf object k lye hi bna h or isilye bna h
// k ye msla solve ho ske or wo loop h forIn ka loop. iske lgane ka treeqa ye h k hm phle for lkhte hn then round
// brackets mn var lkh k direct jo variable bnana hta h bs uska name lkh dte hn na t equals to aata h or na hi us var
// mn koi value assign krte hn bs srf or srf var lkh k variable ka name lkh dte hn t ye variable bn jta h ab hmne jo
// var bnaya h hm oose kahenge k oo bne we variable undr jao undr bjne k lye hm in lgaenge ab kske undr jna h t zhr h
// mne jo obj bnaya h us obj ka name lkhngi phr whi loop k lye curly braces mn jaake document pe print krwaoungi ab
// print krwne ka treeqa kia h t print krwne ka treeqa whi h jo hm array mn krte th k doc.write krke array ka name
// lkha phr square braces mn whn hm index k var ka name lkhte th yhn bh hmne jo loop k undr var bnaya h uska name lkhn
// ge r kaam hjaega. or obj ki keys jo hngi wo maybe show hn islye wo sahi lkhni pregi. or jb mujhe akela obj print krna
// hga t mn doc.write krke obj ka name lkh k .then uski jo key print krwni h us key ka name lkhngi js trhn loop mn bh
// mne key ka name lkha th t key mn assign hwi v values print hwi th isi trhn jb akele mn .keyName lkhngi t us key
// mn assign hwi v value aayegi.

// for (var key in myObj) {
//     document.write(key, ' : ', myObj[key], '<br>')
// }

// rough work:
// localStorage.clear()
// localStorage.setItem("firstName : ", "Javeria")
// sessionStorage.setItem('lastName : ' , 'Farooq')