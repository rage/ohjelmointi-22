(self.webpackChunkohjelmoinnin_mooc=self.webpackChunkohjelmoinnin_mooc||[]).push([[422],{62451:function(e,t,n){"use strict";n.r(t);var r=n(92137),o=n(41788),i=n(87757),a=n.n(i),s=n(67294),l=n(35414),c=n(3772),u=n(52311),m=n(25444),p=n(1097),h=n(83332),d=n(50238),f=n(84119),g=n(54021),w=n(86810),v=f.ZP.div.withConfig({displayName:"sign-in__Row",componentId:"sc-1r0lptz-0"})(["margin-bottom:1.5rem;"]),b=f.ZP.form.withConfig({displayName:"sign-in__Form",componentId:"sc-1r0lptz-1"})([""]),E=f.ZP.div.withConfig({displayName:"sign-in__InfoBox",componentId:"sc-1r0lptz-2"})(["margin-bottom:2rem;"]),k=f.ZP.div.withConfig({displayName:"sign-in__FormContainer",componentId:"sc-1r0lptz-3"})(["height:100%;margin-top:2rem;"]),y=function(e){function t(){for(var t,n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(t=e.call(this,...o)||this).componentDidMount=function(){t.fallbackRedirector=setInterval((function(){(0,u.Pl)()&&setTimeout((function(){"/sign-in/"!==window.location.pathname&&"/sign-in"!==window.location.pathname||(window.location="/")}),2e3)}),1e3)},t.onClick=function(){var e=(0,r.Z)(a().mark((function e(n){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),!(t.state.submitting||0===t.state.email.length&&0===t.state.password.length)){e.next=3;break}return e.abrupt("return");case 3:return t.setState({submitting:!0,error:!1}),e.prev=4,e.next=7,(0,u.YR)({username:t.state.email,password:t.state.password});case 7:setTimeout((function(){try{if("undefined"!=typeof window)return void window.history.go(-1);(0,m.navigate)("/")}catch(e){(0,m.navigate)("/")}}),100),e.next=14;break;case 10:return e.prev=10,e.t0=e.catch(4),t.setState({error:!0,submitting:!1}),e.abrupt("return");case 14:case"end":return e.stop()}}),e,null,[[4,10]])})));return function(t){return e.apply(this,arguments)}}(),t.state={email:"",password:"",submitting:!1,error:!1},t}(0,o.Z)(t,e);var n=t.prototype;return n.componentWillUnmount=function(){clearInterval(this.fallbackRedirector)},n.render=function(){var e=this;return this.context.loggedIn&&!this.state.submitting?((0,m.navigate)("/"),s.createElement("div",null,"Redirecting....")):s.createElement(c.Z,null,s.createElement(w.Z,null,s.createElement(l.Z,{title:this.props.t("common:login")}),s.createElement(k,null,s.createElement("h1",null,this.props.t("common:login")),s.createElement(b,null,s.createElement(E,null,this.props.t("user:courseUses")," ",s.createElement("a",{href:"https://mooc.fi",target:"_blank",rel:"noopener noreferrer"},"mooc.fi")," ",this.props.t("user:courseUses2")),s.createElement(v,null,s.createElement(p.Z,{id:"outlined-adornment-email",variant:"outlined",type:"text",label:this.props.t("user:emailUsername"),fullWidth:!0,value:this.state.email,onChange:function(t){return e.setState({email:t.target.value})}})),s.createElement(v,null,s.createElement(p.Z,{id:"outlined-adornment-password",variant:"outlined",type:this.state.showPassword?"text":"password",label:this.props.t("user:password"),fullWidth:!0,value:this.state.password,onChange:function(t){return e.setState({password:t.target.value})}})),s.createElement(v,null,s.createElement(h.Z,{onClick:this.onClick,disabled:this.state.submitting,variant:"contained",color:"primary",fullWidth:!0,type:"submit"},this.props.t("common:login")))),this.state.error&&s.createElement(E,null,s.createElement("b",null,this.props.t("user:wrongDetails"))),s.createElement(v,null,s.createElement(m.Link,{to:"/sign-up"},this.props.t("user:createAccount"))),s.createElement(v,null,s.createElement("a",{href:"https://tmc.mooc.fi/password_reset_keys/new",target:"_blank",rel:"noopener noreferrer"},this.props.t("user:forgottenPW"))))))},t}(s.Component);y.contextType=g.ZP,t.default=(0,d.Z)(["common","user"])((0,g._N)(y))}}]);
//# sourceMappingURL=component---src-pages-sign-in-js-c5ca6591e83cc6f38f9f.js.map