(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,n){e.exports=n(20)},16:function(e,t,n){},18:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(8),i=n.n(r),l=(n(16),n(2)),c=n(3),s=n(5),m=n(4),u=n(6),d=n(9),h=n.n(d),p=(n(18),n(10)),f=n(1),g=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(s.a)(this,Object(m.a)(t).call(this,e))).getInfo=function(){fetch("https://walkingdeadperso.firebaseio.com/perso.json").then(function(e){return e.json()}).then(function(e){n.setState({isLoaded:!0,items:e})},function(e){n.setState({isLoaded:!0,error:e})})},n.state={error:null,isLoaded:!1,items:[],nom:"",photo:"",prenom:""},n.onChange=n.onChange.bind(Object(f.a)(Object(f.a)(n))),n.submitForm=n.submitForm.bind(Object(f.a)(Object(f.a)(n))),n}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.getInfo()}},{key:"componentDidUpdate",value:function(){this.getInfo()}},{key:"onChange",value:function(e){this.setState(Object(p.a)({},e.target.name,e.target.value))}},{key:"submitForm",value:function(e){e.preventDefault();var t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({nom:this.state.nom,prenom:this.state.prenom,photo:this.state.photo})};fetch("https://walkingdeadperso.firebaseio.com/perso.json",t).then(function(e){return e.json()}).then(function(e){e.error?alert(e.error):alert("Le perso a \xe9t\xe9 ajout\xe9 avec l'ID ".concat(e,"!"))}).catch(function(e){console.error(e),alert("Erreur lors de l'ajout d'un perso")})}},{key:"render",value:function(){var e=this,t=this.state,n=t.error,a=t.isLoaded,r=t.items;return n?o.a.createElement("div",null,"Error: ",n.message):a?o.a.createElement("div",null,o.a.createElement("div",{className:"FormPerso"},o.a.createElement("h1",null,"Ajoutez un Perso de WalkingDead"),o.a.createElement("form",{onSubmit:this.submitForm},o.a.createElement("fieldset",null,o.a.createElement("legend",null,"Walking Dead"),o.a.createElement("div",{className:"form-data"},o.a.createElement("label",{htmlFor:"nom"},"Nom du Perso : "),o.a.createElement("input",{type:"text",id:"nom",name:"nom",onChange:this.onChange,value:this.state.nom,required:!0})),o.a.createElement("div",{className:"form-data"},o.a.createElement("label",{htmlFor:"photo"},"Image du Perso : "),o.a.createElement("input",{type:"text",id:"photo",name:"photo",onChange:this.onChange,value:this.state.photo,required:!0})),o.a.createElement("div",{className:"form-data"},o.a.createElement("label",{htmlFor:"prenom"},"Prenom du Perso : "),o.a.createElement("input",{type:"text",id:"prenom",name:"prenom",onChange:this.onChange,value:this.state.prenom,required:!0})),o.a.createElement("hr",null),o.a.createElement("div",{className:"form-data"},o.a.createElement("input",{type:"submit",value:"Envoyer",onClick:function(){return e.componentDidUpdate}}))))),o.a.createElement("ul",null,Object.keys(r).map(function(e,t){return o.a.createElement("li",{key:t},o.a.createElement("p",null,r[e].nom," ",r[e].prenom),o.a.createElement("img",{src:r[e].photo,alt:r[e].nom}))}))):o.a.createElement("div",null,"Loading...")}}]),t}(a.Component),E=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement("img",{src:h.a,className:"App-logo",alt:"logo"})),o.a.createElement(g,null))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"}},[[11,2,1]]]);
//# sourceMappingURL=main.b9fee1be.chunk.js.map