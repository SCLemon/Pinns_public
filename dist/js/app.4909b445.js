(function(){"use strict";var e={5933:function(e,t,s){var i=s(2856),a=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},r=[],o=function(){var e=this,t=e._self._c;return t("div",{staticClass:"main"},[t("span",{staticClass:"radio"},[t("el-radio-group",{model:{value:e.showType,callback:function(t){e.showType=t},expression:"showType"}},[t("el-radio-button",{attrs:{label:"Preview"}}),t("el-radio-button",{attrs:{label:"Code"}})],1)],1),t("div",{ref:"config",staticClass:"config"},[t("div",{staticClass:"top",on:{click:function(t){return e.back()}}},[t("i",{staticClass:"fa-solid fa-arrow-left arrow"}),e._v("back")]),t("el-popover",{attrs:{placement:"right",width:"400",trigger:"hover","close-delay":"0"}},[t("div",{staticClass:"setting_list"},[t("div",[e._v("Rec Validation Frequency")]),t("el-slider",{staticClass:"slider",attrs:{min:1e3,max:1e5,step:1e3},model:{value:e.hydraTemp.training.rec_validation_freq,callback:function(t){e.$set(e.hydraTemp.training,"rec_validation_freq",t)},expression:"hydraTemp.training.rec_validation_freq"}}),t("div",[e._v("Rec Inference Frequency")]),t("el-slider",{staticClass:"slider",attrs:{min:1e3,max:1e5,step:1e3},model:{value:e.hydraTemp.training.rec_inference_freq,callback:function(t){e.$set(e.hydraTemp.training,"rec_inference_freq",t)},expression:"hydraTemp.training.rec_inference_freq"}}),t("div",[e._v("Rec Monitor Frequency")]),t("el-slider",{staticClass:"slider",attrs:{min:1e3,max:1e5,step:1e3},model:{value:e.hydraTemp.training.rec_monitor_freq,callback:function(t){e.$set(e.hydraTemp.training,"rec_monitor_freq",t)},expression:"hydraTemp.training.rec_monitor_freq"}}),t("div",[e._v("Rec Constraint Frequency")]),t("el-slider",{staticClass:"slider",attrs:{min:1e3,max:1e5,step:1e3},model:{value:e.hydraTemp.training.rec_constraint_freq,callback:function(t){e.$set(e.hydraTemp.training,"rec_constraint_freq",t)},expression:"hydraTemp.training.rec_constraint_freq"}}),t("div",[e._v("Training Max Steps")]),t("el-slider",{staticClass:"slider",attrs:{min:2e3,max:2e6,step:1e3},model:{value:e.hydraTemp.training.max_steps,callback:function(t){e.$set(e.hydraTemp.training,"max_steps",t)},expression:"hydraTemp.training.max_steps"}}),t("div",[e._v("Decay Rate")]),t("el-slider",{staticClass:"slider",attrs:{min:.01,max:1,step:.01},model:{value:e.hydraTemp.scheduler.decay_rate,callback:function(t){e.$set(e.hydraTemp.scheduler,"decay_rate",t)},expression:"hydraTemp.scheduler.decay_rate"}}),t("div",[e._v("Decay Steps")]),t("el-slider",{staticClass:"slider",attrs:{min:1e3,max:1e5,step:1e3},model:{value:e.hydraTemp.scheduler.decay_steps,callback:function(t){e.$set(e.hydraTemp.scheduler,"decay_steps",t)},expression:"hydraTemp.scheduler.decay_steps"}}),t("el-button",{staticClass:"setBtn",attrs:{type:"primary",loading:e.isSending||e.isCreateCode||e.isCreateYaml},on:{click:function(t){return e.collect("setting")}}},[e._v("儲存")])],1),t("div",{staticClass:"setting",attrs:{slot:"reference"},slot:"reference"},[t("i",{staticClass:"fa-solid fa-sliders"})])]),t("div",{staticClass:"geometry"},[t("div",{staticClass:"title"},[e._v("Geometry "),t("div",{staticClass:"wireframe"},[e._v("WireFrame: "),t("el-switch",{staticClass:"normalize_switch",attrs:{"active-color":"#13ce66"},on:{change:function(t){return e.toggleWireFrame()}},model:{value:e.geo.wireframe,callback:function(t){e.$set(e.geo,"wireframe",t)},expression:"geo.wireframe"}})],1)]),t("div",{staticClass:"geo_subTitle"},[e._v("Mesh")]),t("div",{staticClass:"mesh"},[t("el-upload",{staticClass:"upload",attrs:{action:"",accept:".stl","http-request":e.handleUpload,"on-remove":e.handleRemove,"on-preview":e.handlePreview,multiple:"","file-list":e.geo.fileList,drag:""}},[t("i",{staticClass:"el-icon-upload"}),t("div",{staticClass:"el-upload__text"},[e._v("將文件拖到此處，或"),t("em",[e._v("點擊上傳")])]),t("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("只能上傳 STL 文件")])]),t("div",{staticClass:"fileList"},e._l(e.geo.fileDetail,(function(s,i){return t("div",{key:i,staticClass:"fileItem"},[t("div",{staticClass:"fileTitle"},[e._v(e._s(s.file.name)+" ("+e._s((s.file.size/1024).toFixed(2))+" KB)")]),t("div",{staticClass:"fileOption"},[e._v(" name: "),t("input",{directives:[{name:"model",rawName:"v-model",value:s.name,expression:"item.name"}],staticClass:"fileOption_name",attrs:{type:"text"},domProps:{value:s.name},on:{input:function(t){t.target.composing||e.$set(s,"name",t.target.value)}}}),e._v("   airtight: "),t("select",{directives:[{name:"model",rawName:"v-model",value:s.airtight,expression:"item.airtight"}],staticClass:"fileOption_airtight",on:{change:function(t){var i=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(s,"airtight",t.target.multiple?i:i[0])}}},[t("option",{attrs:{value:"True"}},[e._v("True")]),t("option",{attrs:{value:"False"}},[e._v("False")])])])])})),0)],1),t("div",{staticClass:"geo_subTitle"},[e._v("Center")]),t("div",{staticClass:"center"},[t("div",{staticClass:"pos-box"},[t("div",{staticClass:"pos"},[e._v("x: "),t("el-input",{staticClass:"pos-input",attrs:{placeholder:"请输入内容"},model:{value:e.geo.pos.x,callback:function(t){e.$set(e.geo.pos,"x",t)},expression:"geo.pos.x"}})],1),t("div",{staticClass:"pos"},[e._v("y: "),t("el-input",{staticClass:"pos-input",attrs:{placeholder:"请输入内容"},model:{value:e.geo.pos.y,callback:function(t){e.$set(e.geo.pos,"y",t)},expression:"geo.pos.y"}})],1),t("div",{staticClass:"pos"},[e._v("z: "),t("el-input",{staticClass:"pos-input",attrs:{placeholder:"请输入内容"},model:{value:e.geo.pos.z,callback:function(t){e.$set(e.geo.pos,"z",t)},expression:"geo.pos.z"}})],1)]),t("div",{staticClass:"pos_exec"},[e._v(" Normalize:"),t("el-switch",{staticClass:"normalize_switch",attrs:{"active-color":"#13ce66"},model:{value:e.geo.pos_normalize,callback:function(t){e.$set(e.geo,"pos_normalize",t)},expression:"geo.pos_normalize"}}),t("el-button",{staticClass:"normalize_btn",attrs:{type:"primary"},on:{click:function(t){return e.getCenter()}}},[e._v("Get Center")])],1)]),t("div",{staticClass:"geo_subTitle"},[e._v("Scale")]),t("div",{staticClass:"scale"},[e._v(" factor: "),t("el-input-number",{staticClass:"dimension_input",attrs:{"controls-position":"right",min:0,step:.01},on:{change:function(t){return e.changeScale()}},model:{value:e.geo.factor,callback:function(t){e.$set(e.geo,"factor",t)},expression:"geo.factor"}})],1)]),t("div",{staticClass:"function_part"},[t("div",{staticClass:"title"},[e._v("Parameter")]),t("div",{staticClass:"add"},[t("el-select",{staticClass:"add-select",attrs:{placeholder:"请選擇"},model:{value:e.parameter_type,callback:function(t){e.parameter_type=t},expression:"parameter_type"}},[e._l(e.parameter,(function(e){return t("el-option",{key:e,attrs:{label:e,value:e}})})),t("el-option",{attrs:{label:"Code Block",value:"Code Block"}})],2),""!=e.parameter_type&&"Code Block"!=e.parameter_type?t("el-select",{staticClass:"add-select",attrs:{placeholder:"请選擇"},model:{value:e.parameter_selected,callback:function(t){e.parameter_selected=t},expression:"parameter_selected"}},e._l(e.options,(function(e){return t("el-option",{key:e.function,attrs:{label:e.function,value:e.function}})})),1):e._e(),t("el-button",{staticClass:"add-btn",attrs:{type:"primary",icon:"el-icon-plus"},on:{click:function(t){return e.addItem()}}},[e._v("新增")])],1),t("grid-layout",{staticClass:"layout",attrs:{layout:e.layout,"col-num":1,rowHeight:40,"is-draggable":e.isDraggable,"is-resizable":!0,"is-mirrored":!1,"vertical-compact":!0,margin:[10,10],"use-css-transforms":!0},on:{"update:layout":function(t){e.layout=t},"layout-updated":function(t){return e.updateOrder()}}},e._l(e.layout,(function(s){return t("grid-item",{key:s.i,staticClass:"layout-item",attrs:{x:s.x,y:s.y,w:s.w,h:s.h,i:s.i}},["Code Block"!=s.type?t("div",[t("div",{staticClass:"func_name"},[e._v(" "+e._s(s.detail.function)+" "),t("div",{staticClass:"delete",on:{click:function(t){return e.deleteItem(s.i)}}},[t("i",{staticClass:"el-icon-delete"})])]),e._l(s.detail.property,(function(i,a){return t("div",{key:a,staticClass:"property"},[e._v(" "+e._s(i.type)+": "),t("el-input",{staticClass:"property-select",attrs:{placeholder:i.placeholder?i.placeholder:"請輸入內容"},on:{focus:function(t){i.showTips&&e.tips(i.type,i.options)}},model:{value:e.layout_values[`${s.i}_${s.detail.function}_${i.type}`],callback:function(t){e.$set(e.layout_values,`${s.i}_${s.detail.function}_${i.type}`,t)},expression:"layout_values[`${item.i}_${item.detail.function}_${p.type}`]"}})],1)}))],2):t("div",[t("div",{staticClass:"func_name"},[e._v(" "+e._s(s.type)+" "),t("div",{staticClass:"upload_code",on:{click:function(t){return e.uploadCode(s.i)}}},[t("i",{staticClass:"el-icon-upload2"})]),t("div",{staticClass:"delete",on:{click:function(t){return e.deleteItem(s.i)}}},[t("i",{staticClass:"el-icon-delete"})]),t("input",{ref:`${s.i}_code_file`,refInFor:!0,staticClass:"code_file",attrs:{type:"file"},on:{change:function(t){return e.handleUploadCode(s.i,s.type)}}})]),t("div",{staticClass:"inputCode"},[t("textarea",{directives:[{name:"model",rawName:"v-model",value:e.layout_values[`${s.i}_${s.type}`],expression:"layout_values[`${item.i}_${item.type}`]"}],ref:`${s.i}_textArea`,refInFor:!0,staticClass:"textArea",domProps:{value:e.layout_values[`${s.i}_${s.type}`]},on:{keydown:e.handleTab,focus:function(t){e.isDraggable=!1},blur:function(t){e.isDraggable=!0},input:function(t){t.target.composing||e.$set(e.layout_values,`${s.i}_${s.type}`,t.target.value)}}})])])])})),1)],1),t("el-button",{staticClass:"send",attrs:{type:"primary",loading:e.isSending||e.isCreateCode||e.isCreateYaml},on:{click:function(t){!e.isSending&&!e.isCreateCode&&!e.isCreateYaml&&e.init>1&&e.send()}}},[e._v(e._s(e.isSending||e.isCreateCode||e.isCreateYaml?"資料建構中":"確認送出"))])],1),t("div",{staticClass:"content"},[t("stl-viewer",{directives:[{name:"show",rawName:"v-show",value:"Preview"==e.showType,expression:"showType=='Preview'"}]}),t("code-viewer",{directives:[{name:"show",rawName:"v-show",value:"Code"==e.showType,expression:"showType=='Code'"}]})],1)])},n=[],l=(s(4114),s(4603),s(7566),s(8721),s(1176)),c=s.n(l),d=JSON.parse('{"ah":{"NavierStokes":{"function":"NavierStokes","property":[{"type":"name","placeholder":"請輸入內容","showTips":false},{"type":"nu","placeholder":"請輸入內容","showTips":false},{"type":"rho","placeholder":"請輸入內容","showTips":false},{"type":"dim","placeholder":"請輸入內容","showTips":false},{"type":"time","options":["True","False"],"placeholder":"True","showTips":true}]},"NormalDotVec":{"function":"NormalDotVec","property":[{"type":"name","placeholder":"請輸入內容","showTips":false},{"type":"vec","options":["[\'u\',\'v\',\'w\']","[\'u\',\'v\']","[\'u\']"],"placeholder":"[\'u\',\'v\',\'w\']","showTips":true}]}},"o_":{"FullyConnectedArch":{"function":"FullyConnectedArch","property":[{"type":"name","placeholder":"請輸入內容","showTips":false},{"type":"input_keys","options":["[\'x\',\'y\',\'z\']","[\'x\',\'y\']","[\'x\']"],"placeholder":"[\'x\',\'y\',\'z\']","showTips":true},{"type":"output_keys","options":["[\'u\',\'v\',\'w\',\'p\']","[\'u\',\'v\',\'p\']","[\'u\',\'p\']"],"placeholder":"[\'u\',\'v\',\'w\',\'p\']","showTips":true},{"type":"layer_size","placeholder":"請輸入內容","showTips":false},{"type":"nr_layers","placeholder":"請輸入內容","showTips":false},{"type":"adaptive_activations","options":["True","False"],"placeholder":"True","showTips":true}]},"FourierNetArch":{"function":"FourierNetArch","property":[{"type":"name","placeholder":"請輸入內容","showTips":false},{"type":"input_keys","options":["[\'x\',\'y\',\'z\']","[\'x\',\'y\']","[\'x\']"],"placeholder":"[\'x\',\'y\',\'z\']","showTips":true},{"type":"output_keys","options":["[\'u\',\'v\',\'w\',\'p\']","[\'u\',\'v\',\'p\']","[\'u\',\'p\']"],"placeholder":"[\'u\',\'v\',\'w\',\'p\']","showTips":true},{"type":"layer_size","placeholder":"請輸入內容","showTips":false},{"type":"nr_layers","placeholder":"請輸入內容","showTips":false},{"type":"adaptive_activations","options":["True","False"],"placeholder":"True","showTips":true}]}},"_$":{"PointwiseBoundaryConstraint":{"function":"PointwiseBoundaryConstraint","property":[{"type":"name","placeholder":"請輸入內容","showTips":false},{"type":"nodes","placeholder":"請輸入內容","showTips":false},{"type":"geometry","placeholder":"請輸入內容","showTips":false},{"type":"outvar","placeholder":"請輸入內容","showTips":false},{"type":"batch_size","placeholder":"請輸入內容","showTips":false},{"type":"criteria","placeholder":"請輸入內容","showTips":false},{"type":"lambda_weighting","placeholder":"請輸入內容","showTips":false}]},"PointwiseInteriorConstraint":{"function":"PointwiseInteriorConstraint","property":[{"type":"name","placeholder":"請輸入內容","showTips":false},{"type":"nodes","placeholder":"請輸入內容","showTips":false},{"type":"geometry","placeholder":"請輸入內容","showTips":false},{"type":"outvar","placeholder":"請輸入內容","showTips":false},{"type":"batch_size","placeholder":"請輸入內容","showTips":false},{"type":"bounds","placeholder":"請輸入內容","showTips":false},{"type":"criteria","placeholder":"請輸入內容","showTips":false},{"type":"lambda_weighting","placeholder":"請輸入內容","showTips":false}]},"IntegralBoundaryConstraint":{"function":"IntegralBoundaryConstraint","property":[{"type":"name","placeholder":"請輸入內容","showTips":false},{"type":"nodes","placeholder":"請輸入內容","showTips":false},{"type":"geometry","placeholder":"請輸入內容","showTips":false},{"type":"outvar","placeholder":"請輸入內容","showTips":false},{"type":"batch_size","placeholder":"請輸入內容","showTips":false},{"type":"integral_batch_size","placeholder":"請輸入內容","showTips":false},{"type":"criteria","placeholder":"請輸入內容","showTips":false},{"type":"lambda_weighting","placeholder":"請輸入內容","showTips":false}]}},"G9":{"Nodes":{"function":"Nodes","property":[{"type":"name","placeholder":"請輸入內容","showTips":false},{"type":"equations","options":["[\'ns\',\'normal_dot_vel\']"],"placeholder":"[\'ns\',\'normal_dot_vel\']","showTips":true},{"type":"architectures","options":["[\'flow_net\',\'flow_net1\']"],"placeholder":"[\'flow_net\',\'flow_net1\']","showTips":true}]}},"VA":{"PointwiseMonitor":{"function":"PointwiseMonitor","property":[{"type":"name","placeholder":"請輸入內容","showTips":false},{"type":"invar","placeholder":"inlet_mesh.sample_boundary(16)","options":["inlet_mesh.sample_boundary(16)"],"showTips":true},{"type":"output_names","placeholder":"[\'p\']","showTips":false},{"type":"metrics","placeholder":"{\'pressure_drop\': lambda var: torch.mean(var[\'p\'])}","options":["{\'pressure_drop\': lambda var: torch.mean(var[\'p\'])}"],"showTips":true},{"type":"nodes","placeholder":"nodes","showTips":false},{"type":"requires_grad","options":["True","False"],"placeholder":"True","showTips":true}]}}}'),h=function(){var e=this,t=e._self._c;return t("div",{ref:"container",staticClass:"container"})},u=[],p=s(9318),m=s(8857),f=s(5729),y={name:"StlViewer",data(){return{scene:null,camera:null,renderer:null,mesh:null,controls:null}},watch:{"$refs.container.clientWidth":function(e){this.renderer.setSize(e,this.$refs.container.clientHeight),this.camera.aspect=e/this.$refs.container.clientHeight,this.camera.updateProjectionMatrix()},"$refs.container.clientHeight":function(e){this.renderer.setSize(this.$refs.container.clientWidth,e),this.camera.aspect=this.$refs.container.clientWidth/e,this.camera.updateProjectionMatrix()}},mounted(){this.$bus.$on("loadStlFile",this.loadFile),this.$bus.$on("removeStlFile",this.removeMesh),this.$bus.$on("handleStlConfig",this.handleConfig),this.$bus.$on("getStlCenter",this.getCenter),this.$bus.$on("handleWireFrame",this.handleWireFrame);const e=this.$refs.container;this.scene=new p.Z58,this.camera=new p.ubm(75,e.clientWidth/e.clientHeight,.1,1e3),this.camera.position.set(5,10,5),this.camera.lookAt(0,0,0),this.renderer=new p.JeP,this.renderer.setSize(e.clientWidth,e.clientHeight),this.renderer.setClearColor(16777215),e.appendChild(this.renderer.domElement);const t=new p.ZyN(16777215,1);t.position.set(1,1,1).normalize(),this.scene.add(t);const s=new p.$p8(4210752);this.scene.add(s),this.gridHelper=new p.fTw(1e3,1e3),this.scene.add(this.gridHelper);const i=new p.IzY(1e3);this.scene.add(i),this.controls=new f.N(this.camera,this.renderer.domElement),this.controls.enableRotate=!0,this.controls.enablePan=!0,this.controls.addEventListener("change",this.renderScene),this.renderer.render(this.scene,this.camera)},methods:{renderScene(){this.renderer.render(this.scene,this.camera)},handleWireFrame(e){this.scene.traverse((t=>{t instanceof p.eaF&&(t.material.wireframe=e)}))},getCenter(e){const t=[],s=new p.Pq0;this.scene.traverse((e=>{e instanceof p.eaF&&t.push(e)})),t.forEach((e=>{e.geometry.computeBoundingBox();const t=e.geometry.boundingBox,i=new p.Pq0;t.getCenter(i),s.add(i)})),s.divideScalar(t.length),e&&(t.forEach((e=>{e.geometry.translate(-s.x,-s.y,-s.z)})),s.normalize()),isNaN(s.x)||isNaN(s.y)||isNaN(s.z)?this.$bus.$emit("setCenter",0,0,0):this.$bus.$emit("setCenter",s.x,s.y,s.z)},handleConfig(e,t){if("scale"==e){const e=(new p.NRn).setFromObject(this.mesh),s=new p.Pq0;e.getSize(s);const i=Math.max(s.x,s.y,s.z),a=t.factor/i;this.scene.traverse((function(e){e instanceof p.eaF&&(e.scale.x*=a,e.scale.y*=a,e.scale.z*=a)}))}},removeMesh(e){const t=this.scene.getObjectByName(e);t&&(this.scene.remove(t),t.geometry.dispose(),t.material.dispose()),this.getCenter()},loadFile(e,t){if(!e.name.includes(".stl"))return;const s=new FileReader;s.onload=s=>{const i=s.target.result,a=new m.t,r=a.parse(i),o=new p.tXL({color:6316128,specular:1118481,shininess:200,wireframe:t.wireframe});this.mesh=new p.eaF(r,o),this.mesh.name=e.uid,this.scene.add(this.mesh),this.getCenter(t.pos_normalize)},s.readAsArrayBuffer(e)}}},g=y,v=s(1656),_=(0,v.A)(g,h,u,!1,null,"67c43120",null),w=_.exports,C=function(){var e=this,t=e._self._c;return t("div",[""!=e.code?t("div",{staticClass:"codeBlock",domProps:{innerHTML:e._s(e.code)}}):e._e(),t("el-empty",{staticClass:"codeBlock",attrs:{description:"Nothing Here"}})],1)},b=[],x=s(2143),T=(s(3597),{name:"CodeViewer",data(){return{code:""}},mounted(){this.$bus.$on("setCode",this.setCode),x.A.highlightAll()},methods:{setCode(e){this.code=e}},updated(){x.A.highlightAll(),this.$nextTick((()=>{document.querySelector(".codeBlock").classList.add("font")}))}}),$=T,k=(0,v.A)($,C,b,!1,null,"64843ad4",null),N=k.exports,S=s(198),z=s(3347),A=s(417),L=s(5462),F={name:"Main",components:{GridLayout:c().GridLayout,GridItem:c().GridItem,StlViewer:w,CodeViewer:N},mounted(){this.$bus.$on("setCenter",this.setCenter),document.addEventListener("click",(e=>{"INPUT"===e.target.tagName&&(this.isDraggable=!1),"DIV"===e.target.tagName&&(this.isDraggable=!0)}))},data(){return{init:0,showType:"Preview",geo:{wireframe:!0,factor:1,pos_normalize:!1,pos:{x:0,y:0,z:0},fileList:[],fileDetail:[]},hydraTemp:{defaults:{loss:"sum",optimizer:"adam",scheduler:"tf_exponential_lr"},training:{rec_validation_freq:1e3,rec_inference_freq:1e3,rec_monitor_freq:1e3,rec_constraint_freq:1e3,max_steps:2e3},scheduler:{decay_rate:.95,decay_steps:1e3},run_mode:"train"},layout:[],orderedLayout:[],layout_values:{},parameter:["Equations","Neural Network Architecture","Nodes","Constraints","Monitor"],parameter_type:"",parameter_selected:"",outputYaml:"",isCreateCode:!1,isCreateYaml:!1,isSending:!1,output:{},originalCode:"",totalCode:"",isDraggable:!0}},watch:{orderedLayout:{immediate:!1,handler(){this.init&&this.collect(),this.init++}},layout_values:{deep:!0,handler(){this.collect(),this.init++}},geo:{deep:!0,handler(){this.collect(),this.init++}}},computed:{hydra(){return{defaults:{loss:"sum",optimizer:"adam",scheduler:"tf_exponential_lr"},training:{rec_validation_freq:this.hydraTemp.training.rec_validation_freq.toString(),rec_inference_freq:this.hydraTemp.training.rec_inference_freq.toString(),rec_monitor_freq:this.hydraTemp.training.rec_monitor_freq.toString(),rec_constraint_freq:this.hydraTemp.training.rec_constraint_freq.toString(),max_steps:this.hydraTemp.training.max_steps.toString()},scheduler:{decay_rate:this.hydraTemp.scheduler.decay_rate.toString(),decay_steps:this.hydraTemp.scheduler.decay_steps.toString()},run_mode:"train"}},func_structure(){return d.ah},nn_structure(){return d.o_},cs_structure(){return d._$},nd_structure(){return d.G9},mt_structure(){return d.VA},options(){switch(this.parameter_type){case"Equations":return this.func_structure;case"Neural Network Architecture":return this.nn_structure;case"Constraints":return this.cs_structure;case"Nodes":return this.nd_structure;case"Monitor":return this.mt_structure;default:return[]}}},methods:{back(){this.$router.replace("/gate").catch((()=>{}))},tips(e,t){const s=this.$createElement;this.$notify({title:`${e} 填寫格式範例`,message:s("i",{style:"color: teal"},t.join("、"))})},changeScale(){this.$bus.$emit("handleStlConfig","scale",{factor:this.geo.factor})},toggleWireFrame(){this.$bus.$emit("handleWireFrame",this.geo.wireframe)},getCenter(){this.$bus.$emit("getStlCenter",this.geo.pos_normalize)},setCenter(e,t,s){this.geo.pos.x=e,this.geo.pos.y=t,this.geo.pos.z=s},addItem(){if("Code Block"!=this.parameter_type&&(""==this.parameter_type||""==this.parameter_selected)||""==this.parameter_type)return;let e=0;if(this.layout.length>0){const t=this.layout[this.layout.length-1];e=t.y+t.h}if("Code Block"!=this.parameter_type){var t=this.options[this.parameter_selected];this.layout.push({type:this.parameter_type,x:0,y:e,w:1,h:t.property.length+1.25,i:(0,z.Ak)(),detail:t})}else this.layout.push({type:this.parameter_type,x:0,y:e,w:1,h:7.25,i:(0,z.Ak)(),detail:""});this.parameter_type="",this.parameter_selected="",this.$nextTick((()=>{var e=this.$refs.config;this.$nextTick((function(){e.scrollTop=e.scrollHeight+50}))}))},deleteItem(e){this.layout=this.layout.filter((t=>t.i!=e));for(const t in this.layout_values)this.layout_values.hasOwnProperty(t)&&t.includes(e)&&delete this.layout_values[t]},updateOrder(){this.orderedLayout=[...this.layout].sort(((e,t)=>e.y===t.y?e.x-t.x:e.y-t.y))},uploadCode(e){this.$refs[`${e}_code_file`][0].click()},handleUploadCode(e,t){this.$refs[`${e}_textArea`][0].value="";var s=this.$refs[`${e}_code_file`][0].files[0];if(s){const i=new FileReader;i.onload=s=>{const i=s.target.result;this.layout_values[`${e}_${t}`]=i,this.collect()},i.readAsText(s)}},handleTab(e){"Tab"===e.key&&e.preventDefault()},handleUpload(e){e=e.file;this.geo.fileList.push(e),this.geo.fileDetail.push({uid:e.uid,file:e,name:"",airtight:"True"}),this.$bus.$emit("loadStlFile",e,{wireframe:this.geo.wireframe,center_normalize:this.geo.pos_normalize,factor:this.geo.factor})},handleRemove(e,t){this.geo.fileList=t,this.$bus.$emit("removeStlFile",e.uid),this.geo.fileDetail=this.geo.fileDetail.filter((t=>t.uid!=e.uid))},handlePreview(e){},collect(e){this.isCreateCode=!0,this.isCreateYaml=!0,this.output={normalize:{do:!0,scale:1,center:[0,0,0]},hydra:{},meshes:[],blocks:[]},this.output.normalize.do=this.geo.pos_normalize,this.output.normalize.scale=this.geo.factor,this.output.normalize.center=[this.geo.pos.x,this.geo.pos.y,this.geo.pos.z],this.output.hydra=this.hydra,this.geo.fileDetail.forEach((e=>{this.output.meshes.push({uuid:e.file.uid,type:"mesh",name:e.name,filetype:"stl",filename:e.file.name,arguments:["airtight"],airtight:e.airtight})})),this.orderedLayout.forEach((e=>{if("Code Block"!=e.type){var t={uuid:"",type:"",name:"",function:"",arguments:[]};switch(t.uuid=e.i,t.function=e.detail.function,e.detail.property.forEach((e=>{"object"==typeof e?t.arguments.push(e.type):t.arguments.push(e)})),e.type){case"Equations":t.type="equation";break;case"Neural Network Architecture":t.type="architecture";break;case"Constraints":t.type="constraint";break;case"Nodes":t.type="nodes";break;case"Monitor":t.type="monitor";break}t.arguments.forEach((e=>{t[e]=this.layout_values[`${t.uuid}_${t.function}_${e}`]})),t.arguments=t.arguments.filter((e=>"name"!=e)),this.output.blocks.push(t)}else{if(!this.layout_values[`${e.i}_${e.type}`])return;var s=this.layout_values[`${e.i}_${e.type}`].split("\n");this.output.blocks.push({uuid:e.i,type:"manual",codes:s})}})),this.getPreviewCode(),this.getYaml(e)},getPreviewCode(){A.A.post("/run/code",{json:JSON.stringify(this.output)}).then((e=>{if(""==e.data)return;this.originalCode=e.data,this.totalCode="```\n"+e.data+"\n```";const t=(0,S.A)();e.data=t.render(this.totalCode),this.$bus.$emit("setCode",e.data)})).catch((e=>{console.log(e),this.$notify.error({title:"系統提示",message:"預覽代碼生成失敗！"})})).finally((()=>{this.isCreateCode=!1}))},getYaml(e){A.A.post("/run/yaml",{json:JSON.stringify(this.output)}).then((t=>{this.outputYaml=t.data,"setting"==e&&this.$notify({title:"訓練配置儲存提示",message:"訓練配置儲存成功！",type:"success"})})).catch((e=>{this.$notify.error({title:"訓練配置儲存提示",message:"訓練配置儲存失敗！"})})).finally((()=>{this.isCreateYaml=!1}))},send(){this.isSending=!0;const e=new File([this.originalCode],"main.py",{type:"text/plain"}),t=new File([this.outputYaml],"config.yaml",{type:"text/plain"});this.downloadFile(e),this.downloadFile(t);const s=new FormData;for(var i=0;i<this.geo.fileList.length;i++)s.append("stlFiles",this.geo.fileList[i],this.geo.fileList[i].name);s.append("code",e),A.A.post("/run/upload",s,{headers:{"Content-Type":"multipart/form-data","user-token":L.A.get("token")}}).then((e=>{"success"==e.data?(this.$notify({title:"專案發送提示",message:"專案已發送至後端運行！",type:"success"}),window.open("/#/list","_blank")):this.$notify.error({title:"系統提示",message:e.data})})).catch((e=>{this.$notify.error({title:"系統提示",message:"運行代碼失敗！"})})).finally((()=>{this.isSending=!1}))},downloadFile(e){const t=document.createElement("a");t.download=e.name,t.href=URL.createObjectURL(e),t.click(),URL.revokeObjectURL(t.href)}}},q=F,P=(0,v.A)(q,o,n,!1,null,"6e342957",null),D=P.exports,B={name:"App",components:{Main:D}},R=B,E=(0,v.A)(R,a,r,!1,null,null,null),O=E.exports,M=s(1594),I=function(){var e=this,t=e._self._c;return t("div",{ref:"body",staticClass:"body"},[t("div",{staticClass:"title"},[t("div",{staticClass:"top",on:{click:function(t){return e.back()}}},[t("i",{staticClass:"fa-solid fa-arrow-left arrow"}),e._v("back")]),e._v("專案列表")]),t("div",{staticClass:"main"},[t("el-table",{ref:"table",staticClass:"table",staticStyle:{width:"100%"},attrs:{"empty-text":"暫無數據",data:e.tableData.filter((t=>!e.search||t.filename.toLowerCase().includes(e.search.toLowerCase()))),height:550},scopedSlots:e._u([{key:"empty",fn:function(s){return[e.isLoading?t("el-skeleton",{staticClass:"skeleton",attrs:{loading:e.isLoading,animated:""}}):e._e()]}}])},[t("el-table-column",{attrs:{label:"建立時間",prop:"date"}}),t("el-table-column",{attrs:{label:"專案名稱",prop:"filename"}}),t("el-table-column",{attrs:{label:"狀態",prop:"status"}}),t("el-table-column",{attrs:{label:"輸出檔案",prop:"output"}}),t("el-table-column",{attrs:{align:"right"},scopedSlots:e._u([{key:"header",fn:function(s){return[t("el-input",{attrs:{size:"mini",placeholder:"輸入關鍵字搜索"},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})]}},{key:"default",fn:function(s){return[t("el-button",{attrs:{size:"mini",disabled:"Ready"!=s.row.status||e.isDownload[s.$index]},on:{click:function(t){"Ready"==s.row.status&&!e.isDownload[s.$index]&&e.handleDownload(s.row.output,s.row.outputRoute,s.$index)}}},[e._v("下載")]),t("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(t){"Running"!=s.row.status?e.handleDelete(s.row.id,s.row.inputRoute,s.row.outputRoute):e.handleKill(s.row.id)}}},[e._v(e._s("Running"!=s.row.status?"刪除":"中止"))])]}}])})],1)],1)])},j=[],W=s(8655),H=s.n(W),V={name:"List",mounted(){this.vantaEffect=H()({el:this.$refs.body,mouseControls:!0,touchControls:!0,gyroControls:!1,minHeight:200,minWidth:200,scale:1,scaleMobile:1,color:2155775,color2:58339,backgroundColor:16777215}),this.getList(),this.timer=setInterval((()=>{this.getList()}),3e3)},data(){return{isDownload:[],tableData:[],search:"",isLoading:!0,timer:0}},methods:{getList(){A.A.get("/run/findAll",{headers:{"user-token":L.A.get("token")}}).then((e=>{this.tableData=e.data.reverse()})).catch((e=>{console.log(e)})).finally((()=>{this.isLoading=!1}))},back(){this.$router.replace("/gate").catch((()=>{}))},handleDownload(e,t,s){this.isDownload[s]=!0,A.A.post("/run/download",{name:e,route:t},{responseType:"blob"}).then((t=>{const s=new Blob([t.data],{type:e.split(".")[1]}),i=window.URL.createObjectURL(s),a=document.createElement("a");a.style.display="none",a.href=i,a.download=e,document.body.appendChild(a),a.click(),window.URL.revokeObjectURL(i)})).catch((e=>console.log(e))).finally((()=>{this.isDownload[s]=!1}))},handleDelete(e,t,s){this.$confirm("確認刪除?","提示",{confirmButtonText:"確定",cancelButtonText:"取消",type:"warning"}).then((()=>{A.A.delete("/run/delete",{data:{fileId:e,inputRoute:t,outputRoute:s}}).then((e=>{this.$message({type:"success",message:"刪除成功!"}),this.getList()})).catch((e=>console.log(e)))})).catch((()=>{}))},handleKill(e){this.$confirm("確認中止?","提示",{confirmButtonText:"確定",cancelButtonText:"取消",type:"warning"}).then((()=>{A.A.get(`/run/kill/${e}`).then((e=>{this.$message(e.data),this.getList()})).catch((e=>console.log(e)))})).catch((()=>{}))}},beforeDestroy(){this.vantaEffect&&this.vantaEffect.destroy(),clearInterval(this.timer)},updated(){this.$refs.table.style="background:transparent;"}},U=V,Y=(0,v.A)(U,I,j,!1,null,"46ad7fb8",null),G=Y.exports,J=function(){var e=this,t=e._self._c;return t("div",{ref:"main",staticClass:"main"},[t("div",{staticClass:"title"},[e._v("Welcome To Use PINNs Analyzer "),t("div",{staticClass:"out",on:{click:function(t){return e.logout()}}},[t("i",{staticClass:"fa-solid fa-arrow-right-from-bracket"}),e._v(" Log Out")])]),t("div",{staticClass:"blocks"},[t("div",{staticClass:"blk1 block",on:{click:function(t){return e.go("/main")}}},[t("div",{staticClass:"img img1"}),t("div",{staticClass:"text"},[e._v("New Topic")])]),t("div",{staticClass:"blk1 block",on:{click:function(t){return e.go("/list")}}},[t("div",{staticClass:"img img2"}),t("div",{staticClass:"text"},[e._v("Results")])]),t("div",{staticClass:"blk1 block",on:{click:function(t){return e.go("/viewer")}}},[t("div",{staticClass:"img img4"}),t("div",{staticClass:"text"},[e._v("Analyzer")])])])])},K=[],Z=s(1788),X=s.n(Z),Q={name:"Gate",mounted(){this.vantaEffect=X()({el:this.$refs.main,mouseControls:!0,touchControls:!0,gyroControls:!1,minHeight:200,minWidth:200,scale:1,scaleMobile:1})},methods:{go(e){this.$router.replace(e).catch((()=>{}))},logout(){this.$confirm("確認登出?","提示",{confirmButtonText:"確定",cancelButtonText:"取消",type:"warning"}).then((()=>{L.A.set("token",""),this.$router.replace("/login").catch((()=>{})),this.$message({type:"success",message:"登出成功!"})})).catch((()=>{}))}},beforeDestroy(){this.vantaEffect&&this.vantaEffect.destroy()}},ee=Q,te=(0,v.A)(ee,J,K,!1,null,"0a24fc10",null),se=te.exports,ie=function(){var e=this,t=e._self._c;return t("div",{ref:"vantaRef",staticClass:"body"},[t("div",{staticClass:"loginBox"},[t("div",[t("div",{staticClass:"title"},[e._v("Login Form")]),t("div",{staticClass:"inputBox"},[t("div",{staticClass:"input-title"},[e._v("Mail Address")]),t("el-input",{attrs:{placeholder:"请輸入電子信箱"},model:{value:e.mail,callback:function(t){e.mail=t},expression:"mail"}}),t("div",{staticClass:"input-title"},[e._v("Password")]),t("el-input",{attrs:{placeholder:"請輸入密碼","show-password":""},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),t("div",{staticClass:"input-title"},[e._v("Verify Code")]),t("div",{staticClass:"verifyCode"},[t("div",{staticClass:"vc"},[t("el-input",{attrs:{clear:"vc-input",placeholder:"請輸入驗證碼"},model:{value:e.verifyCode,callback:function(t){e.verifyCode=t},expression:"verifyCode"}})],1),t("div",{ref:"canvas",staticClass:"vc vc2"},[t("canvas",{attrs:{id:"canvas"},on:{click:e.handleClick}})])]),t("el-button",{staticClass:"btn",attrs:{type:"primary",loading:e.isLoading},on:{click:function(t){return e.login()}}},[e._v(e._s(e.isLoading?"登入請求中...":"註冊 / 登入"))]),t("div",{staticClass:"subTitle"},[e._v(" Powered By NCHC ")])],1)])])])},ae=[],re=s(9602),oe=s.n(re);class ne{constructor({id:e,width:t,height:s}){this.id=e,this.width=t||90,this.height=s||48,this.bit=4,this.lineNum=5,this.dotNum=40,this.ctx=null,this.pool="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890",this.code="",this.init()}init(){if(!this.id)throw new Error("The id of canvas is required");const e=document.getElementById(this.id);if(!e)throw new Error("Can not find element by id");this.ctx=e.getContext("2d"),this.start()}start(){this.drawBg(),this.drawText(),this.drawLine(),this.drawDot()}drawBg(){this.ctx.save(),this.ctx.fillStyle=this.randomColor(180,230),this.ctx.fillRect(0,0,this.width,this.height),this.ctx.restore()}drawText(){this.code="";for(let e=0;e<this.bit;e++){const t=this.pool[this.randomNum(0,this.pool.length-1)];this.code+=t;const s=this.randomNum(18,35),i=this.randomNum(-30,30);this.ctx.save(),this.ctx.font=`${s}px Simhei`,this.ctx.textBaseline="top",this.ctx.fillStyle=this.randomColor(80,120),this.ctx.translate(20*e+8,this.height/2),this.ctx.rotate(i*Math.PI/180),this.ctx.fillText(t,0,-s/2),this.ctx.restore()}}drawLine(){for(let e=0;e<this.lineNum;e++)this.ctx.save(),this.ctx.beginPath(),this.ctx.moveTo(this.randomNum(0,this.width),this.randomNum(0,this.height)),this.ctx.lineTo(this.randomNum(0,this.width),this.randomNum(0,this.height)),this.ctx.strokeStyle=this.randomColor(150,230),this.ctx.closePath(),this.ctx.stroke(),this.ctx.restore()}drawDot(){for(let e=0;e<this.dotNum;e++)this.ctx.save(),this.ctx.beginPath(),this.ctx.arc(this.randomNum(0,this.width),this.randomNum(0,this.height),1,0,2*Math.PI),this.ctx.closePath(),this.ctx.fillStyle=this.randomColor(150,200),this.ctx.fill(),this.ctx.restore()}randomNum(e,t){return Math.floor(Math.random()*(t-e+1)+e)}randomColor(e,t){const s=this.randomNum(e,t),i=this.randomNum(e,t),a=this.randomNum(e,t);return`rgb(${s},${i},${a})`}}var le=ne,ce={name:"Login",data(){return{mail:"",password:"",verifyCode:"",isLoading:!1,imageVerify:""}},mounted(){this.vantaEffect=oe()({el:this.$refs.vantaRef,mouseControls:!0,touchControls:!0,gyroControls:!1,minHeight:200,minWidth:200,scale:1,scaleMobile:1});var e=this.$refs.canvas.clientWidth;this.imageVerify=new le({id:"canvas",width:e,height:42})},methods:{handleClick(){this.imageVerify.start()},login(){this.verifyCode!=this.imageVerify.code?this.$message({type:"error",message:"驗證碼錯誤"}):""==this.mail.trim()||""==this.password.trim()||""==this.verifyCode.trim()?this.$message({type:"warning",message:"資料不可為空"}):A.A.post("/verify/register",{mail:this.mail,password:this.password}).then((e=>{"object"==typeof e.data?(this.$message({type:"success",message:e.data.message}),L.A.set("token",e.data.token),this.$router.replace("/gate")):this.$message({type:"error",message:e.data})})).catch((e=>{console.log(e)}))}},beforeDestroy(){this.vantaEffect&&this.vantaEffect.destroy()}},de=ce,he=(0,v.A)(de,ie,ae,!1,null,"32ca513a",null),ue=he.exports;i["default"].use(M.Ay);const pe=new M.Ay({routes:[{path:"/main",component:D},{path:"/gate",component:se},{path:"/list",component:G},{path:"/viewer",beforeEnter(){window.open("/vtk_viewer/index.html","_blank")}},{path:"/login",component:ue},{path:"/",redirect:"/gate"}]});pe.beforeEach(((e,t,s)=>{const i=L.A.get("token");"/login"===e.path||i?s():s("/login")}));var me=pe,fe=s(4927),ye=s.n(fe);i["default"].config.productionTip=!1,i["default"].use(ye()),new i["default"]({render:e=>e(O),router:me,beforeCreate(){i["default"].prototype.$bus=this}}).$mount("#app")}},t={};function s(i){var a=t[i];if(void 0!==a)return a.exports;var r=t[i]={id:i,loaded:!1,exports:{}};return e[i].call(r.exports,r,r.exports,s),r.loaded=!0,r.exports}s.m=e,function(){s.amdO={}}(),function(){var e=[];s.O=function(t,i,a,r){if(!i){var o=1/0;for(d=0;d<e.length;d++){i=e[d][0],a=e[d][1],r=e[d][2];for(var n=!0,l=0;l<i.length;l++)(!1&r||o>=r)&&Object.keys(s.O).every((function(e){return s.O[e](i[l])}))?i.splice(l--,1):(n=!1,r<o&&(o=r));if(n){e.splice(d--,1);var c=a();void 0!==c&&(t=c)}}return t}r=r||0;for(var d=e.length;d>0&&e[d-1][2]>r;d--)e[d]=e[d-1];e[d]=[i,a,r]}}(),function(){s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,{a:t}),t}}(),function(){s.d=function(e,t){for(var i in t)s.o(t,i)&&!s.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){s.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){var e={524:0};s.O.j=function(t){return 0===e[t]};var t=function(t,i){var a,r,o=i[0],n=i[1],l=i[2],c=0;if(o.some((function(t){return 0!==e[t]}))){for(a in n)s.o(n,a)&&(s.m[a]=n[a]);if(l)var d=l(s)}for(t&&t(i);c<o.length;c++)r=o[c],s.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return s.O(d)},i=self["webpackChunkpinn_web"]=self["webpackChunkpinn_web"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))}();var i=s.O(void 0,[504],(function(){return s(5933)}));i=s.O(i)})();
//# sourceMappingURL=app.4909b445.js.map