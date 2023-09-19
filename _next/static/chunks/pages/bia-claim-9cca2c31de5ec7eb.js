(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[655],{74348:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/bia-claim",function(){return t(64581)}])},887:function(e,s,t){"use strict";t.d(s,{I:function(){return l}});var n=t(85893),i=t(98064),a=t(39618),r=t(9324);let l=e=>{let{splitId:s,recipients:t,withdrawalAddress:l,account:o}=e,d=s===l?"Principal & Rewards":"Rewards";return(0,n.jsxs)(a.W2,{className:"withdrawal-section",css:{gap:"$xl"},alignItems:"start",children:[(0,n.jsx)(a.xv,{variant:"h4",children:"Split Details"}),(0,n.jsx)(i.I,{recipients:t,type:d}),"Rewards"===d&&(0,n.jsxs)(a.W2,{variant:"card",className:"enr-section",alignItems:"start",css:{gap:"$sm",p:"$sm"},children:[(0,n.jsx)(a.xv,{color:"body",variant:"subline",css:{lineHeight:"$lg",textTransform:"uppercase",letterSpacing:"1px"},children:"Optimistic Withdrawal Recipient Address"}),(0,n.jsx)(a.IK,{readOnly:!0,value:l}),(0,n.jsxs)(a.rU,{href:"https://".concat(r.pn,".etherscan.io/address/").concat(l,"#code"),target:"_blank",children:["View on Etherscan ",(0,n.jsx)(a.ZJ,{})]})]}),(0,n.jsxs)(a.W2,{variant:"card",className:"enr-section",alignItems:"start",css:{gap:"$sm",p:"$sm"},children:[(0,n.jsx)(a.xv,{color:"body",variant:"subline",css:{lineHeight:"$lg",textTransform:"uppercase",letterSpacing:"1px"},children:"Splitter Address"}),(0,n.jsx)(a.IK,{readOnly:!0,value:s}),(0,n.jsxs)(a.rU,{href:"https://".concat(r.pn,".etherscan.io/address/").concat(s,"#code"),target:"_blank",children:["View on Etherscan ",(0,n.jsx)(a.ZJ,{})]})]})]})}},64581:function(e,s,t){"use strict";t.r(s);var n=t(85893),i=t(67294),a=t(59734),r=t(30120),l=t(39618),o=t(71866),d=t(11163),c=t(77136),h=t(2504),x=t(80050),u=t(23500),p=t(19485),m=t(9324),v=t(21237),g=t(887),j=t(37005);let f=(0,l.zo)(l.kC,{flexDirection:"column",width:"auto",gap:"$2xl",px:"10%",py:"$5xl","@sm":{px:"10%",py:"$5xl"}}),b=e=>{let{heading:s,linkTitle:t,link:i}=e;return(0,n.jsxs)(l.mh,{children:[(0,n.jsx)(l.xu,{children:(0,n.jsx)(l.nQ,{})}),(0,n.jsxs)(l.xu,{css:{display:"flex",fd:"column",gap:"$sm"},children:[(0,n.jsx)(l.xu,{css:{display:"flex",fd:"column",gap:"$xs"},children:(0,n.jsx)(l.xv,{variant:"body",css:{color:"white"},children:s})}),i&&(0,n.jsxs)(l.rU,{css:{fontSize:"$4",fontWeight:"$normal"},target:"_blank",href:i,children:[t,(0,n.jsx)(l._j,{size:"sm"})]})]})]})},y=()=>(0,n.jsxs)(l.W2,{css:{gap:"$lg",alignItems:"flex-start",gridColumn:"1/3"},children:[(0,n.jsx)(l.xv,{variant:"h4",children:"Exit Validator"}),(0,n.jsx)(l.xv,{css:{width:"50%"},variant:"body",children:"In order to exit your validators, action the following step. A threshold of the cluster’s operators will need to execute this command."}),(0,n.jsxs)(l.rU,{href:"https://docs.obol.tech/docs/next/int/quickstart/quickstart-exit",target:"_blank",children:["Guide in docs ",(0,n.jsx)(l.ZJ,{})]}),(0,n.jsx)(c.DM,{heading:"Exit command",content:'docker exec -ti charon-distributed-validator-node-teku-1 /opt/teku/bin/teku voluntary-exit --beacon-node-api-endpoint="http://charon:3600"\n--confirmation-enabled=false\n--validator-keys="/opt/charon/validator_keys:/opt/charon/validator_keys"\n--epoch=${EXIT_EPOCH:-162304}'})]}),w=()=>{var e,s,t,c,w;let C=(0,d.useRouter)(),{account:k,provider:$,chainId:_}=(0,h.kR)(),[I,T]=(0,i.useState)(),[E,H]=(0,i.useState)(),D=(0,v.xs)(C,"configHash"),{data:L,error:F,isLoading:N}=(0,a.ZP)("/dv/".concat(D),x.FU);console.log(L);let O=(null==L?void 0:L.fee_recipient_address)||((null==L?void 0:L.validators)?null===(e=null==L?void 0:L.validators[0])||void 0===e?void 0:e.fee_recipient_address:null),R=(0,h.DS)(O),W=(0,h.F0)(O),S=(0,h.F0)(k,null==E?void 0:E.completed),z=async()=>{console.log("handleOnDistributeETH"),H(e=>({...e,loading:!0})),(0,u.Np)({chainId:_,splitId:O,provider:$}).then(e=>{console.log("distribute tx",e),H(s=>({...s,loading:!1,txHash:e,completed:!0}))}).catch(e=>{H(s=>({...s,loading:!1,errorMessage:e.message})),console.log("error",e)})},A=async()=>{console.log("handleOnWithdrawFunds"),T(e=>({...e,loading:!0})),(0,u.h_)({chainId:_,provider:$,address:k}).then(e=>{console.log("withdraw tx",e),T(s=>({...s,loading:!1,txHash:e,completed:!0}))}).catch(e=>{T(s=>({...s,loading:!1,errorMessage:e.message})),console.log("error",e)})},P=(null==E?void 0:E.loading)?{variant:"tx"}:{},U=(null==I?void 0:I.loading)?{variant:"tx"}:{};return D||L?F&&!L?(0,n.jsx)(l.kC,{direction:"column",css:{alignItems:"center",gap:"$md",py:"$7xl"},children:(0,n.jsx)(l.xv,{size:"5",children:null==F?void 0:null===(c=F.response)||void 0===c?void 0:null===(w=c.data)||void 0===w?void 0:w.message})}):!L||N?(0,n.jsxs)(f,{children:[(0,n.jsx)(l.xv,{variant:"subline",children:"Loading cluster data..."}),";"]}):O?(0,j.c)("biaClaimPage")?(0,n.jsxs)(f,{children:[(0,n.jsxs)(l.kC,{direction:"column",css:{gap:"$xxs"},children:[(0,n.jsx)(l.xv,{variant:"h3",children:null==L?void 0:L.name}),(0,n.jsx)(l.xv,{variant:"metadata",color:"body",children:"Created ".concat(r.ou.fromISO(null==L?void 0:L.timestamp).toRelativeCalendar()," on ").concat(r.ou.fromISO(null==L?void 0:L.timestamp).toFormat("yyyy LLL dd"))})]}),(0,n.jsx)(l.xu,{css:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"$xl","& .card-heading":{textAlign:"center"},"@md":{gridTemplateColumns:"repeat(2, 1fr)"},"@sm":{gridTemplateColumns:"1fr"},"& button:disabled:hover":{background:"$bg03"},"& button:disabled":{"& .card-heading":{color:"$muted"}}},children:(0,n.jsx)(l.Zb,{image:(0,n.jsx)(l.xv,{variant:"h4",color:"obolGreen",glow:!0,children:(null==L?void 0:L.operators.length)||"N/A"}),heading:"Operators"})}),(null==R?void 0:R.recipients.length)>0&&k?(0,n.jsx)(g.I,{recipients:null==R?void 0:R.recipients,splitId:O}):k&&(0,n.jsx)(l.xv,{variant:"subline",children:"Loading cluster health information..."}),k?(0,n.jsxs)(l.xu,{css:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"$xl"},children:[(0,n.jsx)(y,{}),(0,n.jsxs)(l.W2,{css:{gap:"$lg",alignItems:"flex-start",justifyContent:"flex-start",gridColumn:"span 1"},children:[(0,n.jsxs)(l.kC,{css:{justifyContent:"space-between",alignItems:"center"},children:[(0,n.jsx)(l.xv,{variant:"h4",children:"Distribute ETH"}),(0,n.jsx)(l.xv,{variant:"metadata",children:"Balance: ".concat(W," ETH")||0})]}),(null==E?void 0:E.completed)?(0,n.jsx)(b,{heading:"ETH successfully distributed",linkTitle:"View on Etherscan",link:"https://".concat(m.pn,".etherscan.io/tx/").concat(null==E?void 0:E.txHash)}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l.xv,{variant:"body",children:"In order to claim rewards you must first activate the splitter contract."}),(0,n.jsx)(l.sQ,{heading:"There is an exit queue (minimum 27 hours). Check the status of your validator on Beaconcha.in before continuing. "}),(0,n.jsxs)(l.rU,{href:"https://app.0xsplits.xyz/accounts/".concat(O,"/?chainId=").concat(_),target:"_blank",children:["V1 0xsplits ",(0,n.jsx)(l._j,{})]}),(0,n.jsx)(o.fl,{...P,color:"primary",type:"button",disabled:!(0,p.isAddress)(O)||"0"===W||!(null==R?void 0:R.recipients.some(e=>e.address.toLowerCase()===(null==k?void 0:k.toLowerCase()))),onClick:()=>z(),children:(null==E?void 0:E.loading)?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l.yC,{}),"Transaction in progress"]}):(0,n.jsx)(n.Fragment,{children:"Distribute"})}),!(null==R?void 0:R.recipients.some(e=>e.address.toLowerCase()===(null==k?void 0:k.toLowerCase())))&&(0,n.jsx)(l.xv,{variant:"metadata",color:"test",children:"You are not a recipient of this split and cannot distribute"})]})]}),(0,n.jsxs)(l.W2,{css:{gap:"$lg",alignItems:"flex-start",justifyContent:"flex-start",gridColumn:"span 1"},children:[(0,n.jsxs)(l.kC,{css:{justifyContent:"space-between",alignItems:"center"},children:[(0,n.jsx)(l.xv,{variant:"h4",children:"Claim ETH"}),(0,n.jsx)(l.xv,{variant:"metadata",children:"Rewards: ".concat(S," ETH")})]}),(null==I?void 0:I.completed)?(0,n.jsx)(b,{heading:"Rewards successfully claimed ".concat(S," ETH"),linkTitle:"View on Etherscan",link:"https://".concat(m.pn,".etherscan.io/tx/").concat(null==I?void 0:I.txHash)}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.fl,{...U,color:"primary",type:"button",disabled:!(0,p.isAddress)(k)||"0"===S||!(null==R?void 0:R.recipients.some(e=>e.address.toLowerCase()===(null==k?void 0:k.toLowerCase()))),onClick:()=>A(),fullWidth:!0,children:(null==I?void 0:I.loading)?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l.yC,{}),"Transaction in progress"]}):(0,n.jsx)(n.Fragment,{children:"Claim Rewards"})}),!(null==R?void 0:R.recipients.some(e=>e.address.toLowerCase()===(null==k?void 0:k.toLowerCase())))&&(0,n.jsx)(l.xv,{variant:"metadata",color:"test",children:"You are not a recipient of this split and cannot claim"})]})]})]}):(0,n.jsx)(l.kC,{direction:"column",css:{alignItems:"center",gap:"$md",py:"$7xl"},children:(0,n.jsx)(l.xv,{size:"5",children:"To load the split metadata, please connect your wallet"})})]}):(0,n.jsxs)(l.kC,{direction:"column",css:{alignItems:"center",gap:"$md",py:"$7xl"},children:[(0,n.jsx)(l.xv,{variant:"h4",children:"This page is not available on this env \uD83D\uDE25"}),";"]}):(0,n.jsxs)(l.W2,{css:{borderRadius:0,marginTop:"$7xl"},children:[(0,n.jsx)(l.xv,{variant:"h4",children:"Error \uD83D\uDE25"}),(0,n.jsx)(l.xv,{variant:"body",children:"The fee recipient address is not set. Please contact the operator of the cluster."})]}):(0,n.jsx)(l.kC,{direction:"column",css:{alignItems:"center",gap:"$md",py:"$7xl"},children:(0,n.jsx)(l.xv,{size:"5",children:(null==F?void 0:null===(s=F.response)||void 0===s?void 0:null===(t=s.data)||void 0===t?void 0:t.message)||"Error: No config-hash information provided, please double check the\n          link you followed or return to the home page."})})};s.default=w}},function(e){e.O(0,[120,10,338,774,888,179],function(){return e(e.s=74348)}),_N_E=e.O()}]);