(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{295:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return Z}));n(451);var a=n(4),i=n(465),o=n(458),r=n(18),c=n.n(r),l=n(6),s=n(110),u=n(0),d=n(160),h=n(42),f=n(133),j=(n(436),n(437),(0===f.default.apps.length?f.default.initializeApp({apiKey:"AIzaSyBPGyPbdFzIZKC4LoMBDBW9vIoKxNHAaA0",authDomain:"chatme-2-dec45.firebaseapp.com",projectId:"chatme-2-dec45",storageBucket:"chatme-2-dec45.appspot.com",messagingSenderId:"513826774514",appId:"1:513826774514:web:c5af3e13d1703746601f6b"}):f.default.app()).firestore()),p=f.default.auth(),b=n(2),g=function(e){var t=e.navigation,n=Object(u.useState)(""),a=c()(n,2),i=a[0],o=a[1],r=Object(u.useState)(""),f=c()(r,2),j=f[0],g=f[1];return Object(u.useEffect)((function(){return p.onAuthStateChanged((function(e){console.log(e),e&&t.replace("Home")}))}),[]),Object(b.jsxs)(s.default,{behavior:"padding",style:m.container,children:[Object(b.jsx)(d.StatusBar,{style:"light"}),Object(b.jsx)(h.Image,{source:{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr6XJONfJud7_7E214FbaOAGPv--vjYl-5tJkIkIMntfJliGfZ"},style:{width:200,height:200,borderRadius:30}}),Object(b.jsx)(l.default,{style:{height:20}}),Object(b.jsxs)(l.default,{style:m.inputContainer,children:[Object(b.jsx)(h.Input,{placeholder:"Type your Email",autoFocus:!0,type:"email",value:i,onChangeText:function(e){return o(e)}}),Object(b.jsx)(h.Input,{placeholder:"Type your Password",secureTextEntry:!0,type:"password",value:j,onChangeText:function(e){return g(e)}})]}),Object(b.jsx)(h.Button,{containerStyle:m.button,type:"outline",onPress:function(){p.signInWithEmailAndPassword(i,j).catch((function(e){return alert(e)}))},title:"SIGN IN",titleStyle:{color:"white"}}),Object(b.jsx)(h.Button,{onPress:function(){return t.navigate("Register")},containerStyle:{backgroundColor:"white",width:200},type:"outline",title:"REGISTER",titleStyle:{color:"#4B0082"}}),Object(b.jsx)(l.default,{style:{height:30}})]})},m=a.default.create({container:{flex:1,alignItems:"center",justifyContent:"center",padding:10,backgroundColor:"white"},inputContainer:{width:300},button:{width:200,marginTop:10,backgroundColor:"#4B0082"}}),O=function(e){var t=e.navigation,n=Object(u.useState)(""),a=c()(n,2),i=a[0],o=a[1],r=Object(u.useState)(""),f=c()(r,2),j=f[0],g=f[1],m=Object(u.useState)(""),O=c()(m,2),y=O[0],v=O[1],C=Object(u.useState)(""),w=c()(C,2),S=w[0],I=w[1];Object(u.useLayoutEffect)((function(){t.setOptions({headerBackTitle:"Login"})}),[t]);var T=function(){p.createUserWithEmailAndPassword(j,y).then((function(e){e.user.updateProfile({displayName:i,photoURL:S||"https://cencup.com/wp-content/uploads/2019/07/avatar-placeholder.png"})})).catch((function(e){return alert(e.message)}))};return Object(b.jsxs)(s.default,{behavior:"padding",style:x.container,children:[Object(b.jsx)(d.StatusBar,{style:"light"}),Object(b.jsx)(h.Image,{source:{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr6XJONfJud7_7E214FbaOAGPv--vjYl-5tJkIkIMntfJliGfZ"},style:{width:150,height:150,borderRadius:30}}),Object(b.jsx)(l.default,{style:{height:20}}),Object(b.jsxs)(l.default,{style:x.inputContainer,children:[Object(b.jsx)(h.Input,{placeholder:"Put you full Name",autoFocus:!0,type:"text",value:i,onChangeText:function(e){return o(e)}}),Object(b.jsx)(h.Input,{placeholder:"Put your Email",type:"email",value:j,onChangeText:function(e){return g(e)}}),Object(b.jsx)(h.Input,{placeholder:"Put your password",secureTextEntry:!0,type:"password",value:y,onChangeText:function(e){return v(e)}}),Object(b.jsx)(h.Input,{placeholder:"Put your Profile photo",type:"file",value:S,onChangeText:function(e){return I(e)},onSubmitEditing:T})]}),Object(b.jsx)(h.Button,{containerStyle:x.button,type:"outline",onPress:T,title:"SIGN UP",titleStyle:{color:"white"}})]})},x=a.default.create({container:{flex:1,alignItems:"center",justifyContent:"center",padding:-50,backgroundColor:"white"},inputContainer:{width:300},button:{width:200,marginBottom:10,backgroundColor:"#4B0082"}}),y=n(109),v=n(67),C=n(33),w=function(e){var t,n,a,i=e.id,o=e.chatName,r=e.enterChat,l=Object(u.useState)([]),s=c()(l,2),d=s[0],f=s[1];return Object(u.useEffect)((function(){return j.collection("chats").doc(i).collection("messages").orderBy("timestamp","desc").onSnapshot((function(e){return f(e.docs.map((function(e){return e.data()})))}))}),[]),Object(b.jsxs)(h.ListItem,{bottomDivider:!0,onPress:function(){return r(i,o)},children:[Object(b.jsx)(h.Avatar,{rounded:!0,source:{uri:(null==d||null==(t=d[0])?void 0:t.photoUrl)||"https://toppng.com/uploads/preview/roger-berry-avatar-placeholder-11562991561rbrfzlng6h.png"}}),Object(b.jsxs)(h.ListItem.Content,{children:[Object(b.jsx)(h.ListItem.Title,{style:{fontWeight:"800"},children:o}),Object(b.jsx)(h.ListItem.Subtitle,{numberOfLines:1,ellipsizeMode:"tail",children:d[0]?(null==d||null==(n=d[0])?void 0:n.displayName)+" : "+(null==d||null==(a=d[0])?void 0:a.message):"Start chatting"})]})]},i)},S=(a.default.create({}),n(272)),I=n(266),T=function(e){var t=e.navigation,n=Object(u.useState)([]),a=c()(n,2),i=a[0],o=a[1],r=function(){p.signOut().then((function(){t.replace("Login")}))};Object(u.useEffect)((function(){return j.collection("chats").onSnapshot((function(e){o(e.docs.map((function(e){return{id:e.id,data:e.data()}})))}))}),[]),Object(u.useLayoutEffect)((function(){t.setOptions({title:"ChatMe",headerStyle:{backgroundColor:"#9932CC"},headerTitleStyle:{color:"white"},headerTintColor:"black",headerLeft:function(){var e;return Object(b.jsx)(l.default,{style:{marginLeft:20},children:Object(b.jsx)(C.default,{onPress:r,activeOpacity:.5,children:Object(b.jsx)(h.Avatar,{rounded:!0,source:{uri:null==p||null==(e=p.currentUser)?void 0:e.photoURL}})})})},headerRight:function(){return Object(b.jsxs)(l.default,{style:{flexDirection:"row",justifyContent:"space-between",width:80,marginRight:20},children:[Object(b.jsx)(C.default,{activeOpacity:.5,children:Object(b.jsx)(S.default,{name:"camerao",size:24,color:"white"})}),Object(b.jsx)(C.default,{onPress:function(){return t.navigate("AddChat")},activeOpacity:.5,children:Object(b.jsx)(I.default,{name:"pencil",size:24,color:"white"})})]})}})}),[t]);var s=function(e,n){t.navigate("Chats",{id:e,chatName:n})};return Object(b.jsx)(y.default,{children:Object(b.jsx)(v.default,{children:i.map((function(e){var t=e.id,n=e.data.chatName;return Object(b.jsx)(w,{id:t,chatName:n,enterChat:s},t)}))})})},k=(a.default.create({}),n(37)),L=n.n(k),R=n(177),B=function(e){var t=e.navigation,n=Object(u.useState)(""),a=c()(n,2),i=a[0],o=a[1];Object(u.useLayoutEffect)((function(){t.setOptions({title:"Add a new Chat",headerBackTitle:"Chats"})}),[t]);var r=function(){var e=L()((function*(){yield j.collection("chats").add({chatName:i}).then((function(){t.goBack()})).catch((function(e){return alert(e)}))}));return function(){return e.apply(this,arguments)}}();return Object(b.jsxs)(l.default,{style:N.container,children:[Object(b.jsx)(h.Input,{placeholder:"Enter a chat name",value:i,onChangeText:function(e){return o(e)},onSubmitEditing:r,leftIcon:Object(b.jsx)(R.default,{name:"wechat",type:"antdesign",size:24,color:"black"})}),Object(b.jsx)(h.Button,{disabled:!i,onPress:r,title:"Create a new chat",type:"outline",titleStyle:{color:"white"},containerStyle:{backgroundColor:"#4B0082"}})]})},N=a.default.create({container:{backgroundColor:"white",padding:30,height:"100%"}}),P=n(30),E=n(49),A=n(13),z=n(94),U=n(83),G=n(95),J=n(257),W=n(248),D=n(293),F=function(e){var t=e.navigation,n=e.route,a=Object(u.useState)(""),i=c()(a,2),o=i[0],r=i[1],d=Object(u.useState)([]),f=c()(d,2),g=f[0],m=f[1];Object(u.useLayoutEffect)((function(){return j.collection("chats").doc(n.params.id).collection("messages").orderBy("timestamp","desc").onSnapshot((function(e){return m(e.docs.map((function(e){return{id:e.id,data:e.data()}})))}))}),[]),Object(u.useLayoutEffect)((function(){t.setOptions({title:"Discussion",headerStyle:{backgroundColor:"#9932CC"},headerTitleStyle:{color:"white"},headerTintColor:"black",headerTitleAlign:"left",headerTitle:function(){var e;return Object(b.jsxs)(l.default,{style:{flexDirection:"row",alignItems:"center"},children:[Object(b.jsx)(h.Avatar,{rounded:!0,source:{uri:(null==(e=g[g.length-1])?void 0:e.data.photoURL)||"https://cencup.com/wp-content/uploads/2019/07/avatar-placeholder.png"}}),Object(b.jsx)(P.default,{style:{color:"white",marginLeft:10,fontWeight:"700"},children:n.params.chatName})]})},headerLeft:function(){return Object(b.jsx)(C.default,{style:{marginLeft:10},onPress:t.goBack,children:Object(b.jsx)(S.default,{name:"arrowleft",size:24,color:"white"})})},headerRight:function(){return Object(b.jsxs)(l.default,{style:{flexDirection:"row",justifyContent:"space-between",width:80,marginRight:20},children:[Object(b.jsx)(C.default,{activeOpacity:.5,children:Object(b.jsx)(J.default,{name:"video-camera",size:24,color:"white"})}),Object(b.jsx)(C.default,{children:Object(b.jsx)(W.default,{name:"call",size:24,color:"white"})})]})}})}),[t,g]);var O=function(){U.default.dismiss(),j.collection("chats").doc(n.params.id).collection("messages").add({timestamp:D.default.firestore.FieldValue.serverTimestamp(),message:o,displayName:p.currentUser.displayName,email:p.currentUser.email,photoURL:p.currentUser.photoURL}),r("")};return Object(b.jsxs)(y.default,{style:{flex:1,backgroundColor:"white"},children:[Object(b.jsx)(E.default,{style:"light"}),Object(b.jsx)(s.default,{behavior:"ios"===A.default.OS?"padding":"height",style:M.container,keyboardVerticalOffset:90,children:Object(b.jsx)(G.default,{onPress:U.default.dismiss,children:Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(v.default,{contentContainerStyle:{paddingTop:15},children:g.map((function(e){var t=e.id,n=e.data;return n.email===p.currentUser.email?Object(b.jsxs)(l.default,{style:M.reciever,children:[Object(b.jsx)(h.Avatar,{containerStyle:{position:"absolute",bottom:-15,right:-5},position:"absolute",bottom:-15,right:-5,rounded:!0,size:30,source:{uri:n.photoURL}}),Object(b.jsx)(P.default,{style:M.recieverText,children:n.message})]},t):Object(b.jsxs)(l.default,{style:M.sender,children:[Object(b.jsx)(h.Avatar,{containerStyle:{position:"absolute",bottom:-15,left:-5},position:"absolute",bottom:-15,left:-5,rounded:!0,size:30,source:{uri:n.photoURL}}),Object(b.jsx)(P.default,{style:M.senderText,children:n.message}),Object(b.jsx)(P.default,{style:M.senderName,children:n.displayName})]},t)}))}),Object(b.jsxs)(l.default,{style:M.footer,children:[Object(b.jsx)(C.default,{children:Object(b.jsx)(J.default,{name:"emoji-happy",size:24,color:"#9932CC"})}),Object(b.jsx)(z.default,{value:o,onChangeText:function(e){return r(e)},onSubmitEditing:O,placeholder:"Type a Message",style:M.TextInput}),Object(b.jsx)(C.default,{onPress:O,activeOpacity:.5,children:Object(b.jsx)(W.default,{name:"send",size:24,color:"#9932CC"})})]})]})})})]})},M=a.default.create({container:{flex:1},TextInput:{bottom:0,height:40,flex:1,marginRight:15,marginLeft:15,backgroundColor:"#ececec",padding:10,color:"black",borderRadius:30},footer:{flexDirection:"row",alignItems:"center",width:"100%",padding:15,justifyContent:"space-between"},reciever:{padding:15,backgroundColor:"#ececec",alignSelf:"flex-end",borderRadius:20,marginRight:15,marginBottom:20,maxWidth:"80%",position:"relative"},recieverText:{color:"black",fontWeight:"500",marginRight:10},sender:{padding:15,backgroundColor:"#9932CC",alignSelf:"flex-start",borderRadius:20,margin:15,marginBottom:20,maxWidth:"80%",position:"relative"},senderText:{color:"white",fontWeight:"500",marginLeft:10},senderName:{left:10,paddingRight:10,fontSize:10,color:"white"}}),H=Object(o.default)(),K={headerStyle:{backgroundColor:"#4B0082"},headerTitleStyle:{color:"white"},headerTintColor:"white"};function Z(){return Object(b.jsx)(i.default,{children:Object(b.jsxs)(H.Navigator,{initialRouteName:"Login",screenOptions:K,children:[Object(b.jsx)(H.Screen,{options:{title:"Welcome to ChatMe"},name:"Login",component:g}),Object(b.jsx)(H.Screen,{options:{title:"Register page"},name:"Register",component:O}),Object(b.jsx)(H.Screen,{options:{title:"Chats"},name:"Home",component:T}),Object(b.jsx)(H.Screen,{options:{title:"Add Chats"},name:"AddChat",component:B}),Object(b.jsx)(H.Screen,{options:{title:"Discussion"},name:"Chats",component:F})]})})}a.default.create({container:{flex:1,backgroundColor:"#fff",alignItems:"center",justifyContent:"center"}})},304:function(e,t,n){e.exports=n(452)}},[[304,1,2]]]);
//# sourceMappingURL=app.5b48dc44.chunk.js.map