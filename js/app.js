"use strict";
var main;(function(){
var $rt_seed=2463534242;function $rt_nextId(){var x=$rt_seed;x^=x<<13;x^=x>>17;x^=x<<5;$rt_seed=x;return x;}function $rt_compare(a,b){return a>b?1:a<b? -1:a===b?0:1;}function $rt_isInstance(obj,cls){return obj!==null&&!!obj.constructor.$meta&&$rt_isAssignable(obj.constructor,cls);}function $rt_isAssignable(from,to){if(from===to){return true;}if(to.$meta.item!==null){return from.$meta.item!==null&&$rt_isAssignable(from.$meta.item,to.$meta.item);}var supertypes=from.$meta.supertypes;for(var i=0;i<supertypes.length;i
=i+1|0){if($rt_isAssignable(supertypes[i],to)){return true;}}return false;}function $rt_createArray(cls,sz){var data=new Array(sz);var arr=new $rt_array(cls,data);if(sz>0){var i=0;do {data[i]=null;i=i+1|0;}while(i<sz);}return arr;}function $rt_wrapArray(cls,data){return new $rt_array(cls,data);}function $rt_createUnfilledArray(cls,sz){return new $rt_array(cls,new Array(sz));}function $rt_createLongArray(sz){var data=new Array(sz);var arr=new $rt_array($rt_longcls(),data);for(var i=0;i<sz;i=i+1|0){data[i]=Long_ZERO;}return arr;}function $rt_createNumericArray(cls,
nativeArray){return new $rt_array(cls,nativeArray);}function $rt_createCharArray(sz){return $rt_createNumericArray($rt_charcls(),new Uint16Array(sz));}function $rt_createByteArray(sz){return $rt_createNumericArray($rt_bytecls(),new Int8Array(sz));}function $rt_createShortArray(sz){return $rt_createNumericArray($rt_shortcls(),new Int16Array(sz));}function $rt_createIntArray(sz){return $rt_createNumericArray($rt_intcls(),new Int32Array(sz));}function $rt_createBooleanArray(sz){return $rt_createNumericArray($rt_booleancls(),
new Int8Array(sz));}function $rt_createFloatArray(sz){return $rt_createNumericArray($rt_floatcls(),new Float32Array(sz));}function $rt_createDoubleArray(sz){return $rt_createNumericArray($rt_doublecls(),new Float64Array(sz));}function $rt_arraycls(cls){var result=cls.$array;if(result===null){var arraycls={};var name="["+cls.$meta.binaryName;arraycls.$meta={item:cls,supertypes:[$rt_objcls()],primitive:false,superclass:$rt_objcls(),name:name,binaryName:name,enum:false};arraycls.classObject=null;arraycls.$array
=null;result=arraycls;cls.$array=arraycls;}return result;}function $rt_createcls(){return {$array:null,classObject:null,$meta:{supertypes:[],superclass:null}};}function $rt_createPrimitiveCls(name,binaryName){var cls=$rt_createcls();cls.$meta.primitive=true;cls.$meta.name=name;cls.$meta.binaryName=binaryName;cls.$meta.enum=false;cls.$meta.item=null;return cls;}var $rt_booleanclsCache=null;function $rt_booleancls(){if($rt_booleanclsCache===null){$rt_booleanclsCache=$rt_createPrimitiveCls("boolean","Z");}return $rt_booleanclsCache;}var $rt_charclsCache
=null;function $rt_charcls(){if($rt_charclsCache===null){$rt_charclsCache=$rt_createPrimitiveCls("char","C");}return $rt_charclsCache;}var $rt_byteclsCache=null;function $rt_bytecls(){if($rt_byteclsCache===null){$rt_byteclsCache=$rt_createPrimitiveCls("byte","B");}return $rt_byteclsCache;}var $rt_shortclsCache=null;function $rt_shortcls(){if($rt_shortclsCache===null){$rt_shortclsCache=$rt_createPrimitiveCls("short","S");}return $rt_shortclsCache;}var $rt_intclsCache=null;function $rt_intcls(){if($rt_intclsCache
===null){$rt_intclsCache=$rt_createPrimitiveCls("int","I");}return $rt_intclsCache;}var $rt_longclsCache=null;function $rt_longcls(){if($rt_longclsCache===null){$rt_longclsCache=$rt_createPrimitiveCls("long","J");}return $rt_longclsCache;}var $rt_floatclsCache=null;function $rt_floatcls(){if($rt_floatclsCache===null){$rt_floatclsCache=$rt_createPrimitiveCls("float","F");}return $rt_floatclsCache;}var $rt_doubleclsCache=null;function $rt_doublecls(){if($rt_doubleclsCache===null){$rt_doubleclsCache=$rt_createPrimitiveCls("double",
"D");}return $rt_doubleclsCache;}var $rt_voidclsCache=null;function $rt_voidcls(){if($rt_voidclsCache===null){$rt_voidclsCache=$rt_createPrimitiveCls("void","V");}return $rt_voidclsCache;}function $rt_throw(ex){throw $rt_exception(ex);}function $rt_exception(ex){var err=ex.$jsException;if(!err){err=new Error("Java exception thrown");if(typeof Error.captureStackTrace==="function"){Error.captureStackTrace(err);}err.$javaException=ex;ex.$jsException=err;$rt_fillStack(err,ex);}return err;}function $rt_fillStack(err,
ex){if(typeof $rt_decodeStack==="function"&&err.stack){var stack=$rt_decodeStack(err.stack);var javaStack=$rt_createArray($rt_objcls(),stack.length);var elem;var noStack=false;for(var i=0;i<stack.length;++i){var element=stack[i];elem=$rt_createStackElement($rt_str(element.className),$rt_str(element.methodName),$rt_str(element.fileName),element.lineNumber);if(elem==null){noStack=true;break;}javaStack.data[i]=elem;}if(!noStack){$rt_setStack(ex,javaStack);}}}function $rt_createMultiArray(cls,dimensions){var first
=0;for(var i=dimensions.length -1;i>=0;i=i -1|0){if(dimensions[i]===0){first=i;break;}}if(first>0){for(i=0;i<first;i=i+1|0){cls=$rt_arraycls(cls);}if(first===dimensions.length -1){return $rt_createArray(cls,dimensions[first]);}}var arrays=new Array($rt_primitiveArrayCount(dimensions,first));var firstDim=dimensions[first]|0;for(i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createArray(cls,firstDim);}return $rt_createMultiArrayImpl(cls,arrays,dimensions,first);}function $rt_createByteMultiArray(dimensions){var arrays
=new Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_bytecls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createByteArray(firstDim);}return $rt_createMultiArrayImpl($rt_bytecls(),arrays,dimensions);}function $rt_createCharMultiArray(dimensions){var arrays=new Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_charcls(),dimensions);}var firstDim=dimensions[0]|0;for
(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createCharArray(firstDim);}return $rt_createMultiArrayImpl($rt_charcls(),arrays,dimensions,0);}function $rt_createBooleanMultiArray(dimensions){var arrays=new Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_booleancls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createBooleanArray(firstDim);}return $rt_createMultiArrayImpl($rt_booleancls(),arrays,dimensions,0);}function $rt_createShortMultiArray(dimensions)
{var arrays=new Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_shortcls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createShortArray(firstDim);}return $rt_createMultiArrayImpl($rt_shortcls(),arrays,dimensions,0);}function $rt_createIntMultiArray(dimensions){var arrays=new Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_intcls(),dimensions);}var firstDim=dimensions[0]
|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createIntArray(firstDim);}return $rt_createMultiArrayImpl($rt_intcls(),arrays,dimensions,0);}function $rt_createLongMultiArray(dimensions){var arrays=new Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_longcls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createLongArray(firstDim);}return $rt_createMultiArrayImpl($rt_longcls(),arrays,dimensions,0);}function $rt_createFloatMultiArray(dimensions)
{var arrays=new Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_floatcls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createFloatArray(firstDim);}return $rt_createMultiArrayImpl($rt_floatcls(),arrays,dimensions,0);}function $rt_createDoubleMultiArray(dimensions){var arrays=new Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_doublecls(),dimensions);}var firstDim
=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createDoubleArray(firstDim);}return $rt_createMultiArrayImpl($rt_doublecls(),arrays,dimensions,0);}function $rt_primitiveArrayCount(dimensions,start){var val=dimensions[start+1]|0;for(var i=start+2;i<dimensions.length;i=i+1|0){val=val*(dimensions[i]|0)|0;if(val===0){break;}}return val;}function $rt_createMultiArrayImpl(cls,arrays,dimensions,start){var limit=arrays.length;for(var i=start+1|0;i<dimensions.length;i=i+1|0){cls=$rt_arraycls(cls);var dim
=dimensions[i];var index=0;var packedIndex=0;while(index<limit){var arr=$rt_createUnfilledArray(cls,dim);for(var j=0;j<dim;j=j+1|0){arr.data[j]=arrays[index];index=index+1|0;}arrays[packedIndex]=arr;packedIndex=packedIndex+1|0;}limit=packedIndex;}return arrays[0];}function $rt_assertNotNaN(value){if(typeof value==='number'&&isNaN(value)){throw "NaN";}return value;}var $rt_stdoutBuffer="";var $rt_putStdout=typeof $rt_putStdoutCustom==="function"?$rt_putStdoutCustom:function(ch){if(ch===0xA){if(console){console.info($rt_stdoutBuffer);}$rt_stdoutBuffer
="";}else {$rt_stdoutBuffer+=String.fromCharCode(ch);}};var $rt_stderrBuffer="";var $rt_putStderr=typeof $rt_putStderrCustom==="function"?$rt_putStderrCustom:function(ch){if(ch===0xA){if(console){console.error($rt_stderrBuffer);}$rt_stderrBuffer="";}else {$rt_stderrBuffer+=String.fromCharCode(ch);}};var $rt_packageData=null;function $rt_packages(data){var i=0;var packages=new Array(data.length);for(var j=0;j<data.length;++j){var prefixIndex=data[i++];var prefix=prefixIndex>=0?packages[prefixIndex]:"";packages[j]
=prefix+data[i++]+".";}$rt_packageData=packages;}function $rt_metadata(data){var packages=$rt_packageData;var i=0;while(i<data.length){var cls=data[i++];cls.$meta={};var m=cls.$meta;var className=data[i++];m.name=className!==0?className:null;if(m.name!==null){var packageIndex=data[i++];if(packageIndex>=0){m.name=packages[packageIndex]+m.name;}}m.binaryName="L"+m.name+";";var superclass=data[i++];m.superclass=superclass!==0?superclass:null;m.supertypes=data[i++];if(m.superclass){m.supertypes.push(m.superclass);cls.prototype
=Object.create(m.superclass.prototype);}else {cls.prototype={};}var flags=data[i++];m.enum=(flags&8)!==0;m.flags=flags;m.primitive=false;m.item=null;cls.prototype.constructor=cls;cls.classObject=null;m.accessLevel=data[i++];var clinit=data[i++];cls.$clinit=clinit!==0?clinit:function(){};var virtualMethods=data[i++];if(virtualMethods!==0){for(var j=0;j<virtualMethods.length;j+=2){var name=virtualMethods[j];var func=virtualMethods[j+1];if(typeof name==='string'){name=[name];}for(var k=0;k<name.length;++k){cls.prototype[name[k]]
=func;}}}cls.$array=null;}}function $rt_threadStarter(f){return function(){var args=Array.prototype.slice.apply(arguments);$rt_startThread(function(){f.apply(this,args);});};}function $rt_mainStarter(f){return function(args,callback){if(!args){args=[];}var javaArgs=$rt_createArray($rt_objcls(),args.length);for(var i=0;i<args.length;++i){javaArgs.data[i]=$rt_str(args[i]);}$rt_startThread(function(){f.call(null,javaArgs);},callback);};}var $rt_stringPool_instance;function $rt_stringPool(strings){$rt_stringPool_instance
=new Array(strings.length);for(var i=0;i<strings.length;++i){$rt_stringPool_instance[i]=$rt_intern($rt_str(strings[i]));}}function $rt_s(index){return $rt_stringPool_instance[index];}function $rt_eraseClinit(target){return target.$clinit=function(){};}var $rt_numberConversionView=new DataView(new ArrayBuffer(8));function $rt_doubleToLongBits(n){$rt_numberConversionView.setFloat64(0,n,true);return new Long($rt_numberConversionView.getInt32(0,true),$rt_numberConversionView.getInt32(4,true));}function $rt_longBitsToDouble(n)
{$rt_numberConversionView.setInt32(0,n.lo,true);$rt_numberConversionView.setInt32(4,n.hi,true);return $rt_numberConversionView.getFloat64(0,true);}function $rt_floatToIntBits(n){$rt_numberConversionView.setFloat32(0,n);return $rt_numberConversionView.getInt32(0);}function $rt_intBitsToFloat(n){$rt_numberConversionView.setInt32(0,n);return $rt_numberConversionView.getFloat32(0);}function $rt_javaException(e){return e instanceof Error&&typeof e.$javaException==='object'?e.$javaException:null;}function $rt_jsException(e)
{return typeof e.$jsException==='object'?e.$jsException:null;}function $rt_wrapException(err){var ex=err.$javaException;if(!ex){ex=$rt_createException($rt_str("(JavaScript) "+err.toString()));err.$javaException=ex;ex.$jsException=err;$rt_fillStack(err,ex);}return ex;}function $dbg_class(obj){var cls=obj.constructor;var arrayDegree=0;while(cls.$meta&&cls.$meta.item){++arrayDegree;cls=cls.$meta.item;}var clsName="";if(cls===$rt_booleancls()){clsName="boolean";}else if(cls===$rt_bytecls()){clsName="byte";}else if
(cls===$rt_shortcls()){clsName="short";}else if(cls===$rt_charcls()){clsName="char";}else if(cls===$rt_intcls()){clsName="int";}else if(cls===$rt_longcls()){clsName="long";}else if(cls===$rt_floatcls()){clsName="float";}else if(cls===$rt_doublecls()){clsName="double";}else {clsName=cls.$meta?cls.$meta.name||"a/"+cls.name:"@"+cls.name;}while(arrayDegree-->0){clsName+="[]";}return clsName;}function Long(lo,hi){this.lo=lo|0;this.hi=hi|0;}Long.prototype.__teavm_class__=function(){return "long";};Long.prototype.toString
=function(){var result=[];var n=this;var positive=Long_isPositive(n);if(!positive){n=Long_neg(n);}var radix=new Long(10,0);do {var divRem=Long_divRem(n,radix);result.push(String.fromCharCode(48+divRem[1].lo));n=divRem[0];}while(n.lo!==0||n.hi!==0);result=(result.reverse()).join('');return positive?result:"-"+result;};Long.prototype.valueOf=function(){return Long_toNumber(this);};var Long_ZERO=new Long(0,0);var Long_MAX_NORMAL=1<<18;function Long_fromInt(val){return val>=0?new Long(val,0):new Long(val, -1);}function Long_fromNumber(val)
{if(val>=0){return new Long(val|0,val/0x100000000|0);}else {return Long_neg(new Long( -val|0, -val/0x100000000|0));}}function Long_toNumber(val){var lo=val.lo;var hi=val.hi;if(lo<0){lo+=0x100000000;}return 0x100000000*hi+lo;}var $rt_imul=Math.imul||function(a,b){var ah=a>>>16&0xFFFF;var al=a&0xFFFF;var bh=b>>>16&0xFFFF;var bl=b&0xFFFF;return al*bl+(ah*bl+al*bh<<16>>>0)|0;};var $rt_udiv=function(a,b){if(a<0){a+=0x100000000;}if(b<0){b+=0x100000000;}return a/b|0;};var $rt_umod=function(a,b){if(a<0){a+=0x100000000;}if
(b<0){b+=0x100000000;}return a%b|0;};function $rt_setCloneMethod(target, f){target.gE=f;}
function $rt_cls(cls){return Tw(cls);}
function $rt_str(str) {if (str === null) {return null;}var characters = $rt_createCharArray(str.length);var charsBuffer = characters.data;for (var i = 0; i < str.length; i = (i + 1) | 0) {charsBuffer[i] = str.charCodeAt(i) & 0xFFFF;}return AHE(characters);}
function $rt_ustr(str) {if (str === null) {return null;}var data = str.bK.data;var result = "";for (var i = 0; i < data.length; i = (i + 1) | 0) {result += String.fromCharCode(data[i]);}return result;}
function $rt_objcls() { return C; }
function $rt_nullCheck(val) {if (val === null) {$rt_throw(A_n());}return val;}
function $rt_intern(str) {return str;}function $rt_getThread(){return AOP();}
function $rt_setThread(t){return FU(t);}
function $rt_createException(message){return Rs(message);}
function $rt_createStackElement(className,methodName,fileName,lineNumber){return null;}
function $rt_setStack(e,stack){}
var A=Object.create(null);
var J=$rt_throw;var Bw=$rt_compare;var A_o=$rt_nullCheck;var D=$rt_cls;var H=$rt_createArray;var Jb=$rt_isInstance;var Dh=$rt_nativeThread;var I=$rt_suspending;var F7=$rt_resuming;var F2=$rt_invalidPointer;var B=$rt_s;var Bl=$rt_eraseClinit;var K=$rt_imul;var Bh=$rt_wrapException;
function C(){this.cr=null;this.$id$=0;}
function A_p(){var a=new C();Y9(a);return a;}
function A9C(b){var c;if(b.cr===null)XK(b);if(b.cr.d7===null)b.cr.d7=A_q;else if(b.cr.d7!==A_q){c=new DE;Bd(c,B(0));J(c);}b=b.cr;b.fd=b.fd+1|0;}
function A_f(b){var c,d;if(!IL(b)&&b.cr.d7===A_q){c=b.cr;d=c.fd-1|0;c.fd=d;if(!d)b.cr.d7=null;IL(b);return;}b=new Lp;Z(b);J(b);}
function AEM(b){if(b.cr===null)XK(b);if(b.cr.d7===null)b.cr.d7=A_q;if(b.cr.d7!==A_q)ATD(b,1);else{b=b.cr;b.fd=b.fd+1|0;}}
function XK(b){var c;c=new Rm;c.d7=A_q;b.cr=c;}
function ATD(b,c){var thread=$rt_nativeThread();var javaThread=$rt_getThread();if(thread.isResuming()){thread.status=0;var result=thread.attribute;if(result instanceof Error){throw result;}return result;}var callback=function(){};callback.Hp=function(val){thread.attribute=val;$rt_setThread(javaThread);thread.resume();};callback.J4=function(e){thread.attribute=$rt_exception(e);$rt_setThread(javaThread);thread.resume();};callback=A9g(callback);return thread.suspend(function(){try{A$C(b,c,callback);}catch($e){callback.J4($rt_exception($e));}});}
function A$C(b,c,d){var e,f,g;e=A_q;if(b.cr===null){XK(b);FU(e);b=b.cr;b.fd=b.fd+c|0;CY(d,null);return;}if(b.cr.d7===null){b.cr.d7=e;FU(e);b=b.cr;b.fd=b.fd+c|0;CY(d,null);return;}f=b.cr;if(f.gZ===null)f.gZ=ATE();f=f.gZ;g=new Tb;g.AD=e;g.AE=b;g.AB=c;g.AC=d;d=g;f.push(d);}
function Pd(b){var c;if(!IL(b)&&b.cr.d7===A_q){c=b.cr;c.fd=c.fd-1|0;if(c.fd<=0){c.d7=null;if(c.gZ!==null&&!KX(c.gZ)){c=new U4;c.Eh=b;S0(c);}else IL(b);}return;}b=new Lp;Z(b);J(b);}
function IL(a){var b;b=a.cr;if(b===null)return 1;a:{if(b.d7===null&&!(b.gZ!==null&&!KX(b.gZ))){if(b.rK===null)break a;if(KX(b.rK))break a;}return 0;}a.cr=null;return 1;}
function Y9(a){return;}
function B5(a){return Tw(a.constructor);}
function A1i(a){return Vw(a);}
function S3(a,b){return a!==b?0:1;}
function AQx(a){var b,c,d,e,f,g,h,i;b=new S;V(b);b=G(G(b,H8(B5(a))),B(1));c=Vw(a);if(!c)d=B(2);else{e=(((32-VW(c)|0)+4|0)-1|0)/4|0;f=$rt_createCharArray(e);g=f.data;e=(e-1|0)*4|0;h=0;while(e>=0){i=h+1|0;g[h]=J6(c>>>e&15,16);e=e-4|0;h=i;}d=AHE(f);}return R(G(b,d));}
function Vw(a){var b,c;b=a;if(!b.$id$){c=$rt_nextId();b.$id$=c;}return a.$id$;}
function ADQ(a){var b,c,d;if(!Jb(a,DF)&&a.constructor.$meta.item===null){b=new Nq;Z(b);J(b);}b=AO$(a);c=b;d=$rt_nextId();c.$id$=d;return b;}
function ZQ(a){var b,c;if(!(a.cr!==null&&a.cr.d7===A_q?1:0)){b=new Lp;Z(b);J(b);}b=a.cr.rK;if(b===null)return;while(!KX(b)){c=ALU(b);if(!c.ZZ())S0(c);}a.cr.rK=null;}
function OA(){C.call(this);}
var A_r=null;var A_s=0;function ADz(b){var c,d,e,f,g,h,$$je,$p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:AAM();AGk();AM$();AH$();ADq();AAQ();ACa();AJx();AAO();AJK();AOu();AJN();AMZ();ACE();ABP();ABn();ADj();AOf();AOw();AEg();AJh();ANC();ABU();AGJ();ABR();ABh();AFL();AMp();ANT();ALH();AJ4();ALB();AMK();AMv();AEX();AIK();AHw();ANv();AGF();AGV();ALq();ADa();AFx();AM7();AEc();AK$();ALu();AMh();AFR();AM4();ALe();AG$();ACL();AKD();AD8();AHX();ABN();AKj();AJu();AFq();AG9();AJq();ACj();ABW();AIr();AER();c
=window.classicConfig;if(c===null)d=null;else{d=H(BC,c.length);b=d.data;e=0;f=b.length;while(e<f){b[e]=$rt_str(c[e]);e=e+1|0;}}a:{try{b=d.data;c=window.document;g=b[0];c=c.getElementById($rt_ustr(g));A_r=c;g=b[1];$p=1;continue _;}catch($$e){$$je=Bh($$e);if($$je instanceof Os){}else if($$je instanceof FR){c=$$je;break a;}else{throw $$e;}}return;}g=new MG;g.m6=g;h=new Kh;Hh(h,16);g.ql=h;g.m6=g.ql;h=new Mz;h.m6=g;h.y8=0;h.mZ=g;PV(c,h);return;case 1:b:{c:{d:{try{AOj(c,g);if(I()){break _;}break d;}catch($$e){$$je
=Bh($$e);if($$je instanceof Os){}else if($$je instanceof FR){c=$$je;break c;}else{throw $$e;}}return;}try{break b;}catch($$e){$$je=Bh($$e);if($$je instanceof FR){c=$$je;}else{throw $$e;}}}g=new MG;g.m6=g;h=new Kh;Hh(h,16);g.ql=h;g.m6=g.ql;h=new Mz;h.m6=g;h.y8=0;h.mZ=g;PV(c,h);return;}e:{Cm(Dr(),B(3));d=Vj(B(4));b=Vj(B(5));if(d!==null)try{c=Nh(Qs(Ju(d)));if(c!==null&&c instanceof Kc)A_t=c;break e;}catch($$e){$$je=Bh($$e);if($$je instanceof BA){}else{throw $$e;}}}f:{if(b!==null)try{c=Nh(Qs(Ju(b)));if(c!==null
&&c instanceof Kc)A_u=c;break f;}catch($$e){$$je=Bh($$e);if($$je instanceof BA){}else{throw $$e;}}}if(A_t===null)A_t=DG();if(A_u===null)A_u=DG();c=B(6);g=A_v;$p=2;case 2:$z=AQd(g,c);if(I()){break _;}c=$z;if(c===null)b=null;else{b=$rt_createByteArray(c.byteLength);d=b.data;c=new Uint8Array(c);e=0;f=d.length;while(e<f){d[e]=c[e]<<24>>24;e=e+1|0;}}if(b!==null){c=Nh(Qs(Ju(b)));if(c!==null&&c instanceof Kc)A_w=c;if(A_w.b2===null)A_w=null;else if(!A_w.b2.dC)A_w=null;}c=A9M(Jz(),JK());h=new Mq;A$v();h.sM=B(7);h.Is
=B(8);c.ga=h;$p=3;case 3:AG4(c);if(I()){break _;}return;default:F2();}}Dh().s(b,c,d,e,f,g,h,$p);}
function XS(b){var c,d,e,f,g;c=$rt_str(A_r.getAttribute("style"));d=A_r;e=new S;V(e);if(c===null)c=B(9);c=R(G(G(e,c),B(10)));d.setAttribute("style",$rt_ustr(c));f=window.document;g=f.createElement("div");g.setAttribute("style","z-index:100;position:absolute;top:135px;left:10%;right:10%;bottom:30px;background-color:white;border:1px solid #cccccc;overflow-x:hidden;overflow-y:scroll;overflow-wrap:break-word;white-space:pre-wrap;font: 24px sans-serif;padding:10px;");A_r.appendChild(g);b=f.createTextNode($rt_ustr(b));g.appendChild(b);}
function AAM(){A_r=null;A_s=0;}
function AER(){window.minecraftError=null;window.onerror=function(message,file,line,column,errorObj){if(errorObj){window.minecraftError=errorObj;window.minecraftErrorL=""+line+":"+column;AY2();}else {alert("a native browser exception was thrown but your browser does not support fith argument in onerror");}};}
function AY2(){var b,c;b=window.minecraftError;c=new S;V(c);G(c,B(11));G(c,B(12));Ce(G(G(c,B(13)),$rt_str(window.minecraftErrorL)),10);Ce(G(G(c,B(14)),$rt_str(b.name)),10);Ce(G(G(c,B(15)),$rt_str(b.message)),10);G(c,B(16));Ce(G(c,$rt_str(b.stack)),10);}
function VI(){}
function Zn(){var a=this;C.call(a);a.uM=null;a.hX=null;}
function Tw(b){var c,d;if(b===null)return null;c=b.classObject;if(c===null){c=new Zn;c.hX=b;d=c;b.classObject=d;}return c;}
function A0l(a){return a.hX;}
function AI8(a,b){var c;b=b;c=a.hX;return b!==null&&!(typeof b.constructor.$meta==='undefined'?1:0)&&Yl(b.constructor,c)?1:0;}
function RQ(a,b){return Yl(b.hX,a.hX);}
function H8(a){if(a.uM===null)a.uM=$rt_str(a.hX.$meta.name);return a.uM;}
function Ku(a){return a.hX.$meta.primitive?1:0;}
function Ly(a){return Tw(a.hX.$meta.item);}
function Nl(a){return Tw(a.hX.$meta.superclass);}
function AIN(){C.call(this);}
function Cs(b,c){var name='jso$functor$'+c;if(!b[name]){var fn=function(){return b[c].apply(b,arguments);};b[name]=function(){return fn;};}return b[name]();}
function Na(b,c){if(typeof b!=="function")return b;var result={};result[c]=b;return result;}
function AIE(){C.call(this);}
function AO$(b){var copy=new b.constructor();for(var field in b){if(!b.hasOwnProperty(field)){continue;}copy[field]=b[field];}return copy;}
function Yl(b,c){var d,e;if(b===c)return 1;d=b.$meta.supertypes;e=0;while(e<d.length){if(Yl(d[e],c))return 1;e=e+1|0;}return 0;}
function AVX(b){return setTimeout(function(){$rt_threadStarter(A0a)(b);},0);}
function A0a(b){var $p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();b=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:b.hK();if(I()){break _;}return;default:F2();}}Dh().s(b,$p);}
function S0(b){AFV(b,0);}
function AFV(b,c){return setTimeout(function(){A0a(b);},c);}
function AMT(b){return String.fromCharCode(b);}
function ATE(){return [];}
function Ci(){}
function Dk(){}
function LV(){}
function BC(){var a=this;C.call(a);a.bK=null;a.qJ=0;}
var A_x=null;function AHE(a){var b=new BC();NX(b,a);return b;}
function IJ(a,b,c){var d=new BC();AOH(d,a,b,c);return d;}
function A_y(a,b,c,d){var e=new BC();MM(e,a,b,c,d);return e;}
function AUw(a,b){var c=new BC();AFS(c,a,b);return c;}
function AHK(a,b){var c=new BC();Qr(c,a,b);return c;}
function A7d(a,b,c){var d=new BC();AAb(d,a,b,c);return d;}
function NX(a,b){var c,d;b=b.data;c=b.length;a.bK=$rt_createCharArray(c);d=0;while(d<c){a.bK.data[d]=b[d];d=d+1|0;}}
function AOH(a,b,c,d){var e,f;a.bK=$rt_createCharArray(d);e=0;while(e<d){f=b.data;a.bK.data[e]=f[e+c|0];e=e+1|0;}}
function MM(a,b,c,d,e){e=AK4(e,AKg(b,c,d));if(AID(e)&&!e.O&&e.cv==e.i$)a.bK=AMg(e);else{a.bK=$rt_createCharArray(BV(e));AFl(e,a.bK);}}
function AFS(a,b,c){MM(a,b,0,b.data.length,Hc(c));}
function Qr(a,b,c){MM(a,b,0,b.data.length,c);}
function AAb(a,b,c,d){var e,f,g,h,i,j;a.bK=$rt_createCharArray(d*2|0);e=0;f=0;while(f<d){g=b.data;h=c+1|0;i=g[c];if(i<65536){g=a.bK.data;j=e+1|0;g[e]=i&65535;}else{g=a.bK.data;c=e+1|0;g[e]=JJ(i);g=a.bK.data;j=c+1|0;g[c]=Jg(i);}f=f+1|0;c=h;e=j;}if(e<a.bK.data.length)a.bK=QA(a.bK,e);}
function P(a,b){var c;if(b>=0&&b<a.bK.data.length)return a.bK.data[b];c=new Iq;Z(c);J(c);}
function Q(a){return a.bK.data.length;}
function Eb(a){return a.bK.data.length?0:1;}
function ANM(a,b){var c,d,e;if(a===b)return 0;c=B4(Q(a),Q(b));d=0;while(true){if(d>=c)return Q(a)-Q(b)|0;e=P(a,d)-P(b,d)|0;if(e)break;d=d+1|0;}return e;}
function Pg(a,b,c){var d,e,f;if((c+Q(b)|0)>Q(a))return 0;d=0;while(d<Q(b)){e=P(b,d);f=c+1|0;if(e!=P(a,c))return 0;d=d+1|0;c=f;}return 1;}
function EG(a,b){if(a===b)return 1;return Pg(a,b,0);}
function Ou(a,b){var c,d,e,f;if(a===b)return 1;if(Q(b)>Q(a))return 0;c=0;d=Q(a)-Q(b)|0;while(d<Q(a)){e=P(a,d);f=c+1|0;if(e!=P(b,c))return 0;d=d+1|0;c=f;}return 1;}
function Eo(a,b,c){var d,e,f,g;d=Df(0,c);if(b<65536){e=b&65535;while(true){if(d>=a.bK.data.length)return (-1);if(a.bK.data[d]==e)break;d=d+1|0;}return d;}f=JJ(b);g=Jg(b);while(true){if(d>=(a.bK.data.length-1|0))return (-1);if(a.bK.data[d]==f&&a.bK.data[d+1|0]==g)break;d=d+1|0;}return d;}
function Fx(a,b){return Eo(a,b,0);}
function Ft(a,b,c){var d,e,f,g,h;d=B4(c,Q(a)-1|0);if(b<65536){e=b&65535;while(true){if(d<0)return (-1);if(a.bK.data[d]==e)break;d=d+(-1)|0;}return d;}f=JJ(b);g=Jg(b);while(true){if(d<1)return (-1);if(a.bK.data[d]==g){h=a.bK.data;b=d-1|0;if(h[b]==f)break;}d=d+(-1)|0;}return b;}
function Gt(a,b){return Ft(a,b,Q(a)-1|0);}
function Op(a,b,c){var d,e,f;d=Df(0,c);e=Q(a)-Q(b)|0;a:while(true){if(d>e)return (-1);f=0;while(true){if(f>=Q(b))break a;if(P(a,d+f|0)!=P(b,f))break;f=f+1|0;}d=d+1|0;}return d;}
function LI(a,b){return Op(a,b,0);}
function RG(a,b,c){var d,e;d=B4(c,Q(a)-Q(b)|0);a:while(true){if(d<0)return (-1);e=0;while(true){if(e>=Q(b))break a;if(P(a,d+e|0)!=P(b,e))break;e=e+1|0;}d=d+(-1)|0;}return d;}
function AC8(a,b){return RG(a,b,Q(a));}
function BO(a,b,c){var d;if(b<=c)return IJ(a.bK,b,c-b|0);d=new BE;Z(d);J(d);}
function DO(a,b){return BO(a,b,Q(a));}
function ARX(a,b,c){return BO(a,b,c);}
function Pq(a,b,c){var d,e,f,g;d=new S;V(d);e=Q(a)-Q(b)|0;f=0;while(f<=e){g=0;a:{while(true){if(g>=Q(b)){JL(d,c);f=f+(Q(b)-1|0)|0;break a;}if(P(a,f+g|0)!=P(b,g))break;g=g+1|0;}Ce(d,P(a,f));}f=f+1|0;}JL(d,DO(a,f));return R(d);}
function GX(a){var b,c;b=0;c=Q(a)-1|0;a:{while(b<=c){if(P(a,b)>32)break a;b=b+1|0;}}while(b<=c&&P(a,c)<=32){c=c+(-1)|0;}return BO(a,b,c+1|0);}
function AQu(a){return a;}
function H5(a){var b,c,d,e;b=$rt_createCharArray(a.bK.data.length);c=b.data;d=0;e=c.length;while(d<e){c[d]=a.bK.data[d];d=d+1|0;}return b;}
function WJ(b){return b===null?B(17):b.eM();}
function XE(b){var c,d;c=new BC;d=$rt_createCharArray(1);d.data[0]=b;NX(c,d);return c;}
function Yi(b){var c;c=new S;V(c);return R(Bf(c,b));}
function BW(a,b){var c,d;if(a===b)return 1;if(!(b instanceof BC))return 0;c=b;if(Q(c)!=Q(a))return 0;d=0;while(d<Q(c)){if(P(a,d)!=P(c,d))return 0;d=d+1|0;}return 1;}
function AEt(a,b){return Yk(a,Hc(b));}
function Yk(a,b){var c,d;c=AGL(b,Tf(a.bK));if(!c.O&&c.cv==c.i$)return c.cV;d=$rt_createByteArray(BV(c));AEK(c,d);return d;}
function O8(a){var b,c,d,e;a:{if(!a.qJ){b=a.bK.data;c=b.length;d=0;while(true){if(d>=c)break a;e=b[d];a.qJ=(31*a.qJ|0)+e|0;d=d+1|0;}}}return a.qJ;}
function Oh(a){var b,c,d,e,f,g,h;if(Eb(a))return a;b=$rt_createIntArray(a.bK.data.length);c=b.data;d=0;e=0;while(e<a.bK.data.length){a:{if(e!=(a.bK.data.length-1|0)&&Dw(a.bK.data[e])){f=a.bK.data;g=e+1|0;if(D1(f[g])){h=d+1|0;c[d]=Hy(E3(a.bK.data[e],a.bK.data[g]));e=g;break a;}}h=d+1|0;c[d]=Gg(a.bK.data[e]);}e=e+1|0;d=h;}return A7d(b,0,d);}
function ALg(a){var b,c,d,e,f,g,h;if(Eb(a))return a;b=$rt_createIntArray(a.bK.data.length);c=b.data;d=0;e=0;while(e<a.bK.data.length){a:{if(e!=(a.bK.data.length-1|0)&&Dw(a.bK.data[e])){f=a.bK.data;g=e+1|0;if(D1(f[g])){h=d+1|0;c[d]=Hw(E3(a.bK.data[e],a.bK.data[g]));e=g;break a;}}h=d+1|0;c[d]=F1(a.bK.data[e]);}e=e+1|0;d=h;}return A7d(b,0,d);}
function AKE(a,b){var c,d;if(b===null){b=new Eg;Bd(b,B(18));J(b);}A_z=1;c=new Xq;c.uz=H(D6,10);c.iz=(-1);c.ku=(-1);c.dh=(-1);d=new I0;d.h4=1;d.eG=b;d.bR=$rt_createCharArray(Q(b)+2|0);CT(H5(b),0,d.bR,0,Q(b));d.bR.data[d.bR.data.length-1|0]=0;d.bR.data[d.bR.data.length-2|0]=0;d.ER=d.bR.data.length;d.mv=0;Hg(d);Hg(d);c.h=d;c.fL=0;c.vo=U8(c,(-1),c.fL,null);if(!EE(c.h))J(CC(B(9),c.h.eG,c.h.ic));if(c.z5)c.vo.i7();return AH8(c,a);}
function AR$(a,b){return ANM(a,b);}
function AGk(){A_x=new Yr;}
function FR(){var a=this;C.call(a);a.vW=null;a.jL=null;a.rP=0;a.sn=0;a.q5=null;}
function A_A(){var a=new FR();Z(a);return a;}
function A_B(a){var b=new FR();Bd(b,a);return b;}
function Z(a){a.rP=1;a.sn=1;}
function Bd(a,b){a.rP=1;a.sn=1;a.vW=b;}
function A2b(a){return a;}
function AWq(a){return a.vW;}
function ASx(a){return a.kR();}
function ANh(a){var b,c,d;b=a.kR();c=new S;V(c);c=G(c,H8(B5(a)));if(b===null)b=B(9);else{d=new S;V(d);b=R(G(G(d,B(19)),b));}return R(G(c,b));}
function DA(a){U9(a,Ez());}
function U9(a,b){var c,d,e,f,g;Lq(b,H8(B5(a)));c=a.kR();if(c!==null){d=new S;V(d);Lq(b,R(G(G(d,B(19)),c)));}a:{AMt(b);if(a.q5!==null){e=a.q5.data;f=e.length;g=0;while(true){if(g>=f)break a;d=e[g];Lq(b,B(20));ADG(b,d);g=g+1|0;}}}if(a.jL!==null&&a.jL!==a){Lq(b,B(21));U9(a.jL,b);}}
function PV(a,b){var c,d,e,f,g;Ih(b,H8(B5(a)));c=a.kR();if(c!==null){d=new S;V(d);Ih(b,R(G(G(d,B(19)),c)));}a:{U0(b);if(a.q5!==null){e=a.q5.data;f=e.length;g=0;while(true){if(g>=f)break a;d=e[g];Ih(b,B(22));ACx(b,d);g=g+1|0;}}}if(a.jL!==null&&a.jL!==a){Ih(b,B(21));PV(a.jL,b);}}
function EF(){FR.call(this);}
function J8(){EF.call(this);}
function AJV(){J8.call(this);}
function IR(){var a=this;C.call(a);a.bp=null;a.b5=0;}
function A_C(){var a=new IR();V(a);return a;}
function A_c(a){var b=new IR();Hh(b,a);return b;}
function V(a){Hh(a,16);}
function Hh(a,b){a.bp=$rt_createCharArray(b);}
function VQ(a,b,c){return AKb(a,a.b5,b,c);}
function AKb(a,b,c,d){var e,f,g,h,i,j,k;e=1;if(c<0){e=0;c= -c;}a:{if(c<d){if(e)D2(a,b,b+1|0);else{D2(a,b,b+2|0);f=a.bp.data;g=b+1|0;f[b]=45;b=g;}a.bp.data[b]=J6(c,d);}else{h=1;i=1;j=2147483647/d|0;b:{while(true){k=K(h,d);if(k>c){k=h;break b;}i=i+1|0;if(k>j)break;h=k;}}if(!e)i=i+1|0;D2(a,b,b+i|0);if(e)e=b;else{f=a.bp.data;e=b+1|0;f[b]=45;}while(true){if(k<=0)break a;f=a.bp.data;b=e+1|0;f[e]=J6(c/k|0,d);c=c%k|0;k=k/d|0;e=b;}}}return a;}
function AEj(a,b,c,d){var e,f,g,h,i,j,k;e=1;if(Long_lt(c,Long_ZERO)){e=0;c=Long_neg(c);}a:{f=Long_fromInt(d);if(Long_lt(c,f)){if(e)D2(a,b,b+1|0);else{D2(a,b,b+2|0);g=a.bp.data;h=b+1|0;g[b]=45;b=h;}a.bp.data[b]=J6(c.lo,d);}else{i=1;j=Long_fromInt(1);while(true){k=Long_mul(j,f);if(Long_le(k,j))break;if(Long_gt(k,c))break;i=i+1|0;j=k;}if(!e)i=i+1|0;D2(a,b,b+i|0);if(e)i=b;else{g=a.bp.data;i=b+1|0;g[b]=45;}while(true){if(Long_le(j,Long_ZERO))break a;g=a.bp.data;b=i+1|0;g[i]=J6(Long_div(c,j).lo,d);c=Long_rem(c,j);j
=Long_div(j,f);i=b;}}}return a;}
function ALr(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o;d=Bw(c,0.0);if(!d){D2(a,b,b+3|0);e=a.bp.data;d=b+1|0;e[b]=48;e=a.bp.data;b=d+1|0;e[d]=46;a.bp.data[b]=48;return a;}if(!d){D2(a,b,b+4|0);e=a.bp.data;d=b+1|0;e[b]=45;e=a.bp.data;b=d+1|0;e[d]=48;e=a.bp.data;d=b+1|0;e[b]=46;a.bp.data[d]=48;return a;}if(isNaN(c)?1:0){D2(a,b,b+3|0);e=a.bp.data;d=b+1|0;e[b]=78;e=a.bp.data;b=d+1|0;e[d]=97;a.bp.data[b]=78;return a;}if(!isFinite(c)?1:0){if(d>0){D2(a,b,b+8|0);d=b;}else{D2(a,b,b+9|0);e=a.bp.data;d=b+1|0;e[b]=45;}e=a.bp.data;b
=d+1|0;e[d]=73;e=a.bp.data;d=b+1|0;e[b]=110;e=a.bp.data;b=d+1|0;e[d]=102;e=a.bp.data;d=b+1|0;e[b]=105;e=a.bp.data;b=d+1|0;e[d]=110;e=a.bp.data;d=b+1|0;e[b]=105;e=a.bp.data;b=d+1|0;e[d]=116;a.bp.data[b]=121;return a;}f=A_D;AK_(c,f);d=f.uW;g=f.uI;h=f.Ab;i=1;j=1;if(h){h=1;j=2;}k=9;l=AW7(d);if(l>0)k=k-l|0;if(g<7&&g>=(-3)){if(g>=0){i=g+1|0;k=Df(k,i+1|0);g=0;}else if(g<0){d=d/A_E.data[ -g]|0;k=k-g|0;g=0;}}if(g){j=j+2|0;if(!(g>(-10)&&g<10))j=j+1|0;if(g<0)j=j+1|0;}if(g&&k==i)k=k+1|0;D2(a,b,b+(j+k|0)|0);if(!h)h=b;else
{e=a.bp.data;h=b+1|0;e[b]=45;}m=100000000;n=0;while(n<k){if(m<=0)o=0;else{o=d/m|0;d=d%m|0;}e=a.bp.data;b=h+1|0;e[h]=(48+o|0)&65535;i=i+(-1)|0;if(i)h=b;else{e=a.bp.data;h=b+1|0;e[b]=46;}m=m/10|0;n=n+1|0;}if(g){e=a.bp.data;b=h+1|0;e[h]=69;if(g>=0)d=b;else{g= -g;e=a.bp.data;d=b+1|0;e[b]=45;}if(g<10)l=d;else{e=a.bp.data;l=d+1|0;e[d]=(48+(g/10|0)|0)&65535;}a.bp.data[l]=(48+(g%10|0)|0)&65535;}return a;}
function AW7(b){var c,d,e;if(!(b%1000000000|0))return 9;c=0;d=1;if(!(b%100000000|0)){c=8;d=100000000;}e=d*10000|0;if(b%e|0)e=d;else c=c|4;d=e*100|0;if(b%d|0)d=e;else c=c|2;if(!(b%(d*10|0)|0))c=c|1;return c;}
function Ce(a,b){return a.zb(a.b5,b);}
function J4(a,b,c){D2(a,b,b+1|0);a.bp.data[b]=c;return a;}
function N5(a,b){var c;if(a.bp.data.length>=b)return;c=a.bp.data.length>=1073741823?2147483647:Df(b,Df(a.bp.data.length*2|0,5));a.bp=QA(a.bp,c);}
function R(a){return IJ(a.bp,0,a.b5);}
function J3(a,b,c,d){return a.yC(a.b5,b,c,d);}
function K_(a,b,c,d,e){var f,g,h,i;D2(a,b,b+e|0);f=e+d|0;while(d<f){g=c.data;h=a.bp.data;e=b+1|0;i=d+1|0;h[b]=g[d];b=e;d=i;}return a;}
function Ib(a,b){return a.xT(b,0,b.data.length);}
function D2(a,b,c){var d,e;d=a.b5-b|0;a.nX((a.b5+c|0)-b|0);e=d-1|0;while(e>=0){a.bp.data[c+e|0]=a.bp.data[b+e|0];e=e+(-1)|0;}a.b5=a.b5+(c-b|0)|0;}
function JA(){}
function S(){IR.call(this);}
function Cd(){var a=new S();A7V(a);return a;}
function A7V(a){V(a);}
function G(a,b){OM(a,a.b5,b);return a;}
function Bf(a,b){VQ(a,b,10);return a;}
function DZ(a,b){W6(a,a.b5,b);return a;}
function ASJ(a,b){Zf(a,a.b5,b);return a;}
function AO9(a,b){Ce(a,b);return a;}
function ARd(a,b,c,d){J3(a,b,c,d);return a;}
function A6v(a,b){Ib(a,b);return a;}
function JL(a,b){Z1(a,a.b5,b);return a;}
function W6(a,b,c){AEj(a,b,c,10);return a;}
function Zf(a,b,c){ALr(a,b,c);return a;}
function A5Y(a,b,c,d,e){K_(a,b,c,d,e);return a;}
function Z1(a,b,c){OM(a,b,c===null?B(17):c.eM());return a;}
function AVd(a,b,c){J4(a,b,c);return a;}
function AGv(a,b,c){var d,e,f,g,h,i,j;d=Bw(b,c);if(d<=0&&b<=a.b5){if(d){e=a.b5-c|0;a.b5=a.b5-(c-b|0)|0;d=0;while(d<e){f=a.bp.data;g=b+1|0;h=a.bp.data;i=c+1|0;f[b]=h[c];d=d+1|0;b=g;c=i;}}return a;}j=new Iq;Z(j);J(j);}
function Us(a,b){var c,d,e,f;if(b>=0&&b<a.b5){a.b5=a.b5-1|0;while(b<a.b5){c=a.bp.data;d=a.bp.data;e=b+1|0;c[b]=d[e];b=e;}return a;}f=new Iq;Z(f);J(f);}
function OM(a,b,c){var d,e,f;if(b>=0&&b<=a.b5){a:{if(c===null)c=B(17);else if(Eb(c))break a;N5(a,a.b5+Q(c)|0);d=a.b5-1|0;while(d>=b){a.bp.data[d+Q(c)|0]=a.bp.data[d];d=d+(-1)|0;}a.b5=a.b5+Q(c)|0;d=0;while(d<Q(c)){e=a.bp.data;f=b+1|0;e[b]=P(c,d);d=d+1|0;b=f;}}return a;}c=new Iq;Z(c);J(c);}
function AKB(a,b){a.b5=b;}
function ACs(a,b,c,d,e){var f,g,h,i,j;if(b>c){f=new BE;Bd(f,B(23));J(f);}while(b<c){g=d.data;h=e+1|0;i=a.bp.data;j=b+1|0;g[e]=i[b];e=h;b=j;}}
function A3v(a,b,c,d,e){K_(a,b,c,d,e);return a;}
function ARw(a,b,c,d){J3(a,b,c,d);return a;}
function Lg(a){return a.b5;}
function B3(a){return R(a);}
function ATU(a,b){N5(a,b);}
function A4o(a,b,c){return Z1(a,b,c);}
function A3Y(a,b,c){J4(a,b,c);return a;}
function A2H(a,b,c){return Zf(a,b,c);}
function AQO(a,b,c){return W6(a,b,c);}
function AYP(a,b,c){return OM(a,b,c);}
function Fw(){C.call(this);}
function GS(){Fw.call(this);this.fz=0;}
var A_F=null;var A_G=null;function ANq(a){var b=new GS();Mv(b,a);return b;}
function Mv(a,b){a.fz=b;}
function Kg(b,c){var d,e,f,g,h,i,j;if(c>=2&&c<=36){if(b!==null&&!Eb(b)){a:{d=0;e=0;switch(P(b,0)){case 43:e=1;break a;case 45:d=1;e=1;break a;default:}}f=0;if(e==Q(b)){b=new ES;Z(b);J(b);}while(e<Q(b)){g=e+1|0;h=Ww(P(b,e));if(h<0){i=new ES;j=new S;V(j);Bd(i,R(G(G(j,B(24)),b)));J(i);}if(h>=c){i=new ES;j=new S;V(j);Bd(i,R(G(G(Bf(G(j,B(25)),c),B(19)),b)));J(i);}f=K(c,f)+h|0;if(f<0){if(g==Q(b)&&f==(-2147483648)&&d)return (-2147483648);i=new ES;j=new S;V(j);Bd(i,R(G(G(j,B(26)),b)));J(i);}e=g;}if(d)f= -f;return f;}b
=new ES;Bd(b,B(27));J(b);}i=new ES;b=new S;V(b);Bd(i,R(Bf(G(b,B(28)),c)));J(i);}
function C0(b){var c;if(b>=(-128)&&b<=127){a:{if(A_G===null){A_G=H(GS,256);c=0;while(true){if(c>=A_G.data.length)break a;A_G.data[c]=ANq(c-128|0);c=c+1|0;}}}return A_G.data[b+128|0];}return ANq(b);}
function AIf(a){return a.fz;}
function ND(a){var b;b=a.fz;return VQ(A_c(20),b,10).eM();}
function AZe(a){return a.fz>>>4^a.fz<<28^a.fz<<8^a.fz>>>24;}
function ZV(a,b){if(a===b)return 1;return b instanceof GS&&b.fz==a.fz?1:0;}
function ACt(a,b){return Bw(a.fz,b.fz);}
function VW(b){var c,d;if(!b)return 32;c=0;d=b>>>16;if(d)c=16;else d=b;b=d>>>8;if(!b)b=d;else c=c|8;d=b>>>4;if(!d)d=b;else c=c|4;b=d>>>2;if(!b)b=d;else c=c|2;if(b>>>1)c=c|1;return (32-c|0)-1|0;}
function KR(b){var c,d;if(!b)return 32;c=0;d=b<<16;if(d)c=16;else d=b;b=d<<8;if(!b)b=d;else c=c|8;d=b<<4;if(!d)d=b;else c=c|4;b=d<<2;if(!b)b=d;else c=c|2;if(b<<1)c=c|1;return (32-c|0)-1|0;}
function XF(a,b){return ACt(a,b);}
function AM$(){A_F=D($rt_intcls());}
function JX(){J8.call(this);}
function A_H(a){var b=new JX();RX(b,a);return b;}
function RX(a,b){Bd(a,b);}
function ALJ(){JX.call(this);}
function A_I(a){var b=new ALJ();AQD(b,a);return b;}
function AQD(a,b){RX(a,b);}
function AJC(){JX.call(this);}
function A_J(a){var b=new AJC();AQR(b,a);return b;}
function AQR(a,b){RX(a,b);}
function Cq(){FR.call(this);}
function BT(){Cq.call(this);}
function Rs(a){var b=new BT();A7z(b,a);return b;}
function A7z(a,b){Bd(a,b);}
function Dl(){}
function H_(){}
function WK(){}
function Sb(){}
function Xu(){}
function Tu(){}
function YH(){}
function Q$(){}
function Mn(){}
function AA3(){C.call(this);}
function AUe(a,b,c){a.Xn($rt_str(b),Na(c,"handleEvent"));}
function AUt(a,b,c){a.U_($rt_str(b),Na(c,"handleEvent"));}
function APO(a,b){return a.IX(b);}
function AVn(a,b,c,d){a.LN($rt_str(b),Na(c,"handleEvent"),d?1:0);}
function AXU(a,b){return !!a.Xt(b);}
function AQL(a){return a.Kc();}
function AO7(a,b,c,d){a.Ot($rt_str(b),Na(c,"handleEvent"),d?1:0);}
function Bn(){C.call(this);}
var A_K=0;var A_L=null;var A_M=null;var A_N=null;var A_O=null;var A_P=null;var A_Q=null;var A_R=null;var A_S=null;var A_T=null;var A_U=null;var A_V=null;var A_W=null;var A_X=null;var A_Y=null;var A_Z=null;var A_0=null;var A_1=null;var A_2=null;var A_3=null;var A_4=0;var A_5=0;var A_6=0.0;var A_7=0.0;var A_8=0;var A_9=0;var A_$=0;var A__=0;var Baa=0;var Bab=null;var Bac=null;var Bad=null;var Bae=null;var Baf=null;var Bag=0;var Bah=null;var Bai=null;var Baj=null;var Bak=null;var Bal=null;var Bam=null;var Ban=
Long_ZERO;var Bao=0;var Bap=0;var Baq=0;var Bar=null;var Bas=null;var Bat=null;var Bau=null;var Bav=0;var Baw=0;var Bax=0;var Bay=null;var Baz=null;var BaA=null;var BaB=0;var BaC=null;var BaD=null;var BaE=0.0;var BaF=null;var BaG=0;var BaH=null;var BaI=null;var BaJ=0;var BaK=null;var BaL=0;function Be(){Be=Bl(Bn);AX$();}
function XQ(){Be();return B(29);}
function I9(b){Be();if(EG(b,B(30)))b=DO(b,1);return Co(BaM,b);}
function ADW(b){var c;Be();c=I9(b);if(c===null)return null;return AHK(c,Hc(B(31)));}
function AC7(b){var thread=$rt_nativeThread();var javaThread=$rt_getThread();if(thread.isResuming()){thread.status=0;var result=thread.attribute;if(result instanceof Error){throw result;}return result;}var callback=function(){};callback.Hp=function(val){thread.attribute=val;$rt_setThread(javaThread);thread.resume();};callback.J4=function(e){thread.attribute=$rt_exception(e);$rt_setThread(javaThread);thread.resume();};callback=A9g(callback);return thread.suspend(function(){try{ASm(b,callback);}catch($e){callback.J4($rt_exception($e));}});}
function ASm(b,c){var d,e;Be();d=new XMLHttpRequest();e="arraybuffer";d.responseType=e;d.open("GET",$rt_ustr(b),!!1);b=new Yp;b.vL=d;b.Ba=c;b=Cs(b,"stateChanged");d.onreadystatechange=b;d.send();}
function AOj(b,c){var d,e,f,$$je,$p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:Be();A_M=b;d=$rt_str(A_M.getAttribute("style"));e=A_M;f=Cd();if(d===null)d=B(9);f=B3(G(G(f,d),B(32)));e.setAttribute("style",$rt_ustr(f));A_R=window;A_L=A_R.document;A_N=A_L.createElement("canvas");A_8=b.clientWidth;A_9=b.clientHeight;f=A_N;e=A_8;f.width=e;f=A_N;e=A_9;f.height=e;A_O=A_N.getContext("2d");A_N.setAttribute("id","deevis589723589");f=A_N;b.appendChild(f);A_P
=A_L.createElement("canvas");b=A_P;f=A_8;b.width=f;b=A_P;f=A_9;b.height=f;b=A_P;e=ABc();A_Q=b.getContext("webgl2",e);if(A_Q===null)J(Rs(B3(G(G(G(Cd(),B(33)),$rt_str(window.navigator.userAgent)),B(34)))));AC9(A_Q);A_Q.getExtension("EXT_texture_filter_anisotropic");b=A_R;e=A9I();A_T=e;b.addEventListener("contextmenu",Cs(e,"handleEvent"));b=A_N;e=A$s();A_U=e;b.addEventListener("mousedown",Cs(e,"handleEvent"));b=A_N;e=A$R();A_V=e;b.addEventListener("mouseup",Cs(e,"handleEvent"));b=A_N;e=A$L();A_W=e;b.addEventListener("mousemove",
Cs(e,"handleEvent"));b=A_R;e=A$E();A_X=e;b.addEventListener("keydown",Cs(e,"handleEvent"));b=A_R;e=A$M();A_Y=e;b.addEventListener("keyup",Cs(e,"handleEvent"));b=A_R;e=A$w();A_Z=e;b.addEventListener("keypress",Cs(e,"handleEvent"));b=A_N;e=A9O();A_0=e;b.addEventListener("wheel",Cs(e,"handleEvent"));b=A_R;e=A9S();b.addEventListener("blur",Cs(e,"handleEvent"));b=A_R;e=A8M();b.addEventListener("focus",Cs(e,"handleEvent"));AEl();AL0();$p=1;case 1:$z=AKL();if(I()){break _;}f=$z;if(f!==BaN){if(f===BaO)XS(B(35));else XS(B3(G(G(Cd(),
B(36)),AIp())));J(A$Y());}$p=2;case 2:AC7(c);if(I()){break _;}a:{try{AJT(A_S);break a;}catch($$e){$$je=Bh($$e);if($$je instanceof BA){e=$$je;}else{throw $$e;}}DA(e);}PK(A_2);PK(A_3);return;default:F2();}}Dh().s(b,c,d,e,f,$p);}
function LE(b){Be();A_Q.enable(b);}
function KO(b){Be();A_Q.disable(b);}
function AJ6(){var b,c;Be();b=new Sn;b.i9=A_Q.createProgram();c=Baa+1|0;Baa=c;b.x5=c;return b;}
function TH(b){var c;Be();c=new XZ;c.ju=A_Q.createShader(b);return c;}
function Z6(b,c){var d;Be();d=A_Q;b=b.i9;c=c.ju;d.attachShader(b,c);}
function Wm(b,c){var d;Be();d=A_Q;b=b.i9;c=c.ju;d.detachShader(b,c);}
function V8(b){var c;Be();c=A_Q;b=b.ju;c.compileShader(b);}
function ABw(b){var c;Be();c=A_Q;b=b.i9;c.linkProgram(b);}
function Zl(b,c){var d;Be();d=A_Q;b=b.ju;d.shaderSource(b,$rt_ustr(c));}
function XI(b){var c;Be();c=A_Q;b=b.ju;return $rt_str(c.getShaderInfoLog(b));}
function AOh(b){var c;Be();c=A_Q;b=b.i9;return $rt_str(c.getProgramInfoLog(b));}
function TJ(b){var c;Be();c=A_Q;b=b.ju;return c.getShaderParameter(b,35713)!=1?0:1;}
function AJt(b){var c;Be();c=A_Q;b=b.i9;return c.getProgramParameter(b,35714)!=1?0:1;}
function W3(b){var c;Be();c=A_Q;b=b.ju;c.deleteShader(b);}
function Ms(){var b;Be();b=new XO;b.BI=A_Q.createBuffer();return b;}
function HY(b,c){var d;Be();d=A_Q;c=c!==null?c.BI:null;d.bindBuffer(b,c);}
function TE(b,c,d){var e;Be();e=A_Q;c=c;e.bufferData(b,c,d);}
function Kv(b){Be();A_Q.enableVertexAttribArray(b);}
function Du(b,c){var d;Be();d=A_Q;b=b.i9;d=d.getUniformLocation(b,$rt_ustr(c));if(d===null)b=null;else{b=new VX;b.lT=d;}return b;}
function LM(b,c,d){var e;Be();e=A_Q;b=b.i9;e.bindAttribLocation(b,c,$rt_ustr(d));}
function I5(b,c){var d;Be();if(b!==null){d=A_Q;b=b.lT;d.uniform1f(b,c);}}
function NL(b,c,d,e){var f;Be();if(b!==null){f=A_Q;b=b.lT;f.uniform3f(b,c,d,e);}}
function Tc(b,c,d,e,f){var g,h;Be();if(b!==null){g=A_Q;h=b.lT;g.uniform4f(h,c,d,e,f);}}
function Qt(b,c){var d;Be();if(b!==null){d=A_Q;b=b.lT;d.uniform1i(b,c);}}
function Nc(b,c){var d,e;Be();Baf.set(c.data);if(b!==null){d=A_Q;e=b.lT;b=Baf;d.uniformMatrix4fv(e,!!0,b);}}
function Tv(b){var c;Be();if(b!==null&&Bag!=b.x5){Bag=b.x5;c=A_Q;b=b.i9;c.useProgram(b);}}
function Kn(b,c,d,e,f,g){Be();A_Q.vertexAttribPointer(b,c,d,!!e,f,g);}
function Z2(){var b;Be();b=new Zp;b.Cx=A_Q.createVertexArray();b.u$=0;return b;}
function Rx(b){var c;Be();c=A_Q;b=b!==null?b.Cx:null;c.bindVertexArray(b);}
function AC5(b){var c,$p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:Be();c=new ArrayBuffer(b.data.length);(new Uint8Array(c)).set(b.data);$p=1;case 1:$z=AJw(c);if(I()){break _;}c=$z;return c;default:F2();}}Dh().s(b,c,$p);}
function AJw(b){var thread=$rt_nativeThread();var javaThread=$rt_getThread();if(thread.isResuming()){thread.status=0;var result=thread.attribute;if(result instanceof Error){throw result;}return result;}var callback=function(){};callback.Hp=function(val){thread.attribute=val;$rt_setThread(javaThread);thread.resume();};callback.J4=function(e){thread.attribute=$rt_exception(e);$rt_setThread(javaThread);thread.resume();};callback=A9g(callback);return thread.suspend(function(){try{AZs(b,callback);}catch($e){callback.J4($rt_exception($e));}});}
function AZs(b,c){var d,e,f;Be();d=A_L.createElement("img");e=new Yb;e.fQ=d;e.wF=c;d.addEventListener("load",Cs(e,"handleEvent"));f=new Ya;f.DH=d;f.Cz=c;d.addEventListener("error",Cs(f,"handleEvent"));e=$rt_str(AJd(b,"image/png"));if(e===null)CY(c,null);else{b=$rt_ustr(e);d.src=b;}}
function Dg(){var b,c;Be();a:{Baj=null;if(!Ko(A_2)){b=VE(A_2,0);Baj=b;if(b!==null){c=1;break a;}}c=0;}return c;}
function C3(){var b;Be();if(Baj===null)return (-1);b=Baj.button;if(b==1)b=2;else if(b==2)b=1;return b;}
function Cv(){Be();return Baj===null?0:BW($rt_str(Baj.type),B(37));}
function Cb(b){Be();return Bal.data[b];}
function Hb(){Be();return !BW(B(38),$rt_str(Baj.type))?0:Baj.deltaY===0.0?0:Baj.deltaY<=0.0?1:(-1);}
function Lt(b){Be();Bap=b;if(b){A_6=0.0;A_7=0.0;setTimeout(Cs(new Yc,"onTimer"),200);}else{Ban=CF();if(Bao)clearTimeout(Bao);Bao=0;A_L.exitPointerLock();}}
function Qy(){Be();return Baj===null?(-1):Baj.clientX;}
function SM(){Be();return Baj===null?(-1):A_N.clientHeight-Baj.clientY|0;}
function CQ(){var b,c;Be();if(!BaL){a:{Bak=null;if(!Ko(A_3)){b=VE(A_3,0);Bak=b;if(b!==null){c=1;break a;}}c=0;}return c;}PK(A_3);Bak=null;Bam.data[29]=0;Bam.data[157]=0;Bam.data[28]=0;Bam.data[219]=0;Bam.data[220]=0;BaL=0;return 0;}
function Bi(){Be();return Bak===null?(-1):Q9(Bak.which);}
function C6(){Be();return Bak===null?0:BW($rt_str(Bak.type),B(39))?0:1;}
function Cn(b){Be();if(BaL){Bam.data[28]=0;Bam.data[29]=0;Bam.data[157]=0;Bam.data[219]=0;Bam.data[220]=0;}return Bam.data[b];}
function ADw(){var b,c,d,e,f,g,h,i,$$je,$p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:Be();AN_(A_Q);b=A_O;c=A_P;d=A_N.width;e=A_N.height;b.drawImage(c,0.0,0.0,d,e);f=A_N.clientWidth;g=A_N.clientHeight;if(!(f==A_8&&g==A_9)){A_8=f;A_9=g;c=A_P;h=f;c.width=h;c=A_P;h=g;c.height=h;}try{i=Long_fromInt(1);$p=1;continue _;}catch($$e){$$je=Bh($$e);if($$je instanceof Ds){}else{throw $$e;}}return;case 1:a:{try{AI7(i);if
(I()){break _;}break a;}catch($$e){$$je=Bh($$e);if($$je instanceof Ds){}else{throw $$e;}}}return;default:F2();}}Dh().s(b,c,d,e,f,g,h,i,$p);}
function Ur(b){Be();A_$=b;}
function KA(){var b,c;Be();b=document.pointerLockElement!=null?1:0;c=Baq;Baq=b;if(!c&&b){A_6=0.0;A_7=0.0;}a:{b:{if(A__){if(!c)break b;if(b)break b;}c=0;break a;}c=1;}return c;}
function Jz(){var b,c,d;Be();b=A_M.clientWidth;if(b!=A_8){c=A_N;d=b;c.width=d;c=A_P;d=b;c.width=d;A_8=b;}return b;}
function JK(){var b,c,d;Be();b=A_M.clientHeight;if(b!=A_9){c=A_N;d=b;c.height=d;c=A_P;d=b;c.height=d;A_9=b;}return b;}
function Vj(b){var c,d;Be();c=A_R.localStorage;d=new S;V(d);d=R(G(G(d,B(40)),b));d=$rt_str(c.getItem($rt_ustr(d)));if(d===null)return null;return ADd(AWT(0,BaP,0),d);}
function Ze(b,c){var d,e,f,g;Be();d=A_R.localStorage;e=new S;V(e);f=R(G(G(e,B(40)),b));b=new BC;if(c!==null&&c.data.length){e=AWT(0,BaP,0);g=AM8(e,c);if(Long_gt(g,Long_fromInt(2147483647))){b=new BB;e=new S;V(e);Bd(b,R(Bf(G(DZ(G(e,B(41)),g),B(42)),2147483647)));J(b);}c=AKF(e,c);}Qr(b,c,Hc(B(31)));d.setItem($rt_ustr(f),$rt_ustr(b));}
function Ne(){Be();return Long_fromInt(1073741824);}
function NR(){Be();return Long_fromInt(1073741824);}
function MI(){Be();return Long_ZERO;}
function YL(b){Be();return b.byteLength;}
function Q9(b){Be();return b<=BaI.data.length&&b>=0?BaI.data[b]:(-1);}
function XW(){Be();return A_S;}
function Sp(){Be();return Bal;}
function Mp(){Be();return A_2;}
function N_(){Be();if(Long_gt(Long_sub(CF(),Ban),Long_fromInt(3000))&&Bap&&!(document.pointerLockElement!=null?1:0)){A_N.requestPointerLock();if(document.pointerLockElement!=null?1:0)Bap=0;}}
function Y3(){Be();return Bam;}
function ZA(b){Be();return b.which;}
function Rn(b){Be();return Q9(b);}
function Pn(){Be();return A_3;}
function Uh(b){Be();A__=b;return b;}
function H6(){Be();return Bah;}
function Lm(){Be();return Bai;}
function RE(b){Be();URL.revokeObjectURL($rt_ustr(b));}
function YQ(){Be();return Bao;}
function O5(b){Be();Bao=b;return b;}
function Xl(){Be();return Ban;}
function AX$(){var b,c;A_K=0;A_L=null;A_M=null;A_N=null;A_O=null;A_P=null;A_Q=null;A_R=null;A_S=null;A_T=null;A_U=null;A_V=null;A_W=null;A_X=null;A_Y=null;A_Z=null;A_0=null;A_1=H(BC,0);A_2=SR();A_3=SR();A_4=0;A_5=0;A_6=0.0;A_7=0.0;A_8=0;A_9=0;A_$=0;A__=1;Baa=0;Bab=$rt_createIntArray(4);Bac=new Uint8Array(new ArrayBuffer(4194304));Bad=new Float32Array(4);Bae=new Float32Array(9);Baf=new Float32Array(16);Bag=(-1);Bah=null;Bai=null;Baj=null;Bak=null;Bal=$rt_createBooleanArray(8);Bam=$rt_createBooleanArray(256);Ban
=Long_ZERO;Bao=0;Bap=0;Baq=0;Bar=A$J(B(43));Bas=AG6();Bat=AG6();Bau=null;Bav=0;Baw=0;Bax=0;Bay=SR();Baz=null;BaA=null;BaB=0;BaC=CZ();BaD=null;BaE=0.029999999329447746;BaF=CZ();BaG=0;b=H(BC,256);c=b.data;c[0]=B(44);c[1]=B(45);c[2]=B(46);c[3]=B(47);c[4]=B(48);c[5]=B(49);c[6]=B(50);c[7]=B(51);c[8]=B(52);c[9]=B(53);c[10]=B(54);c[11]=B(2);c[12]=B(55);c[13]=B(56);c[14]=B(57);c[15]=B(58);c[16]=B(59);c[17]=B(60);c[18]=B(61);c[19]=B(62);c[20]=B(63);c[21]=B(64);c[22]=B(65);c[23]=B(66);c[24]=B(67);c[25]=B(68);c[26]=B(69);c[27]
=B(70);c[28]=B(71);c[29]=B(72);c[30]=B(73);c[31]=B(74);c[32]=B(75);c[33]=B(76);c[34]=B(77);c[35]=B(78);c[36]=B(79);c[37]=B(80);c[38]=B(81);c[39]=B(82);c[40]=B(83);c[41]=B(84);c[42]=B(85);c[43]=B(86);c[44]=B(87);c[45]=B(88);c[46]=B(89);c[47]=B(90);c[48]=B(91);c[49]=B(92);c[50]=B(93);c[51]=B(94);c[52]=B(95);c[53]=B(96);c[54]=B(97);c[55]=B(98);c[56]=B(99);c[57]=B(100);c[58]=B(101);c[59]=B(102);c[60]=B(103);c[61]=B(104);c[62]=B(105);c[63]=B(106);c[64]=B(107);c[65]=B(108);c[66]=B(109);c[67]=B(110);c[68]=B(111);c[69]
=B(112);c[70]=B(113);c[71]=B(114);c[72]=B(115);c[73]=B(116);c[74]=B(117);c[75]=B(118);c[76]=B(119);c[77]=B(120);c[78]=B(121);c[79]=B(122);c[80]=B(123);c[81]=B(124);c[82]=B(125);c[83]=B(126);c[84]=B(17);c[85]=B(17);c[86]=B(17);c[87]=B(127);c[88]=B(128);c[89]=B(17);c[90]=B(17);c[91]=B(17);c[92]=B(17);c[93]=B(17);c[94]=B(17);c[95]=B(17);c[96]=B(17);c[97]=B(17);c[98]=B(17);c[99]=B(17);c[100]=B(129);c[101]=B(130);c[102]=B(131);c[103]=B(132);c[104]=B(133);c[105]=B(134);c[106]=B(17);c[107]=B(17);c[108]=B(17);c[109]
=B(17);c[110]=B(17);c[111]=B(17);c[112]=B(135);c[113]=B(136);c[114]=B(17);c[115]=B(17);c[116]=B(17);c[117]=B(17);c[118]=B(17);c[119]=B(17);c[120]=B(17);c[121]=B(137);c[122]=B(17);c[123]=B(138);c[124]=B(17);c[125]=B(139);c[126]=B(17);c[127]=B(17);c[128]=B(17);c[129]=B(17);c[130]=B(17);c[131]=B(17);c[132]=B(17);c[133]=B(17);c[134]=B(17);c[135]=B(17);c[136]=B(17);c[137]=B(17);c[138]=B(17);c[139]=B(17);c[140]=B(17);c[141]=B(140);c[142]=B(17);c[143]=B(17);c[144]=B(141);c[145]=B(142);c[146]=B(143);c[147]=B(144);c[148]
=B(145);c[149]=B(146);c[150]=B(147);c[151]=B(148);c[152]=B(17);c[153]=B(17);c[154]=B(17);c[155]=B(17);c[156]=B(149);c[157]=B(150);c[158]=B(17);c[159]=B(17);c[160]=B(17);c[161]=B(17);c[162]=B(17);c[163]=B(17);c[164]=B(17);c[165]=B(17);c[166]=B(17);c[167]=B(151);c[168]=B(17);c[169]=B(17);c[170]=B(17);c[171]=B(17);c[172]=B(17);c[173]=B(17);c[174]=B(17);c[175]=B(17);c[176]=B(17);c[177]=B(17);c[178]=B(17);c[179]=B(152);c[180]=B(17);c[181]=B(153);c[182]=B(17);c[183]=B(154);c[184]=B(155);c[185]=B(17);c[186]=B(17);c[187]
=B(17);c[188]=B(17);c[189]=B(17);c[190]=B(17);c[191]=B(17);c[192]=B(17);c[193]=B(17);c[194]=B(17);c[195]=B(17);c[196]=B(156);c[197]=B(157);c[198]=B(17);c[199]=B(158);c[200]=B(159);c[201]=B(160);c[202]=B(17);c[203]=B(161);c[204]=B(17);c[205]=B(162);c[206]=B(17);c[207]=B(163);c[208]=B(164);c[209]=B(165);c[210]=B(166);c[211]=B(167);c[212]=B(17);c[213]=B(17);c[214]=B(17);c[215]=B(17);c[216]=B(17);c[217]=B(17);c[218]=B(168);c[219]=B(169);c[220]=B(170);c[221]=B(171);c[222]=B(172);c[223]=B(173);c[224]=B(17);c[225]
=B(17);c[226]=B(17);c[227]=B(17);c[228]=B(17);c[229]=B(17);c[230]=B(17);c[231]=B(17);c[232]=B(17);c[233]=B(17);c[234]=B(17);c[235]=B(17);c[236]=B(17);c[237]=B(17);c[238]=B(17);c[239]=B(17);c[240]=B(17);c[241]=B(17);c[242]=B(17);c[243]=B(17);c[244]=B(17);c[245]=B(17);c[246]=B(17);c[247]=B(17);c[248]=B(17);c[249]=B(17);c[250]=B(17);c[251]=B(17);c[252]=B(17);c[253]=B(17);c[254]=B(17);c[255]=B(17);BaH=b;b=$rt_createIntArray(224);c=b.data;c[0]=(-1);c[1]=(-1);c[2]=(-1);c[3]=(-1);c[4]=(-1);c[5]=(-1);c[6]=(-1);c[7]
=(-1);c[8]=14;c[9]=15;c[10]=(-1);c[11]=(-1);c[12]=(-1);c[13]=28;c[14]=(-1);c[15]=(-1);c[16]=42;c[17]=29;c[18]=56;c[19]=(-1);c[20]=(-1);c[21]=(-1);c[22]=(-1);c[23]=(-1);c[24]=(-1);c[25]=(-1);c[26]=(-1);c[27]=1;c[28]=(-1);c[29]=(-1);c[30]=(-1);c[31]=(-1);c[32]=57;c[33]=210;c[34]=201;c[35]=207;c[36]=199;c[37]=203;c[38]=200;c[39]=205;c[40]=208;c[41]=205;c[42]=208;c[43]=(-1);c[44]=(-1);c[45]=210;c[46]=211;c[47]=211;c[48]=11;c[49]=2;c[50]=3;c[51]=4;c[52]=5;c[53]=6;c[54]=7;c[55]=8;c[56]=9;c[57]=10;c[58]=(-1);c[59]
=(-1);c[60]=(-1);c[61]=(-1);c[62]=(-1);c[63]=(-1);c[64]=(-1);c[65]=30;c[66]=48;c[67]=46;c[68]=32;c[69]=18;c[70]=33;c[71]=34;c[72]=35;c[73]=23;c[74]=36;c[75]=37;c[76]=38;c[77]=50;c[78]=49;c[79]=24;c[80]=25;c[81]=16;c[82]=19;c[83]=31;c[84]=20;c[85]=22;c[86]=47;c[87]=17;c[88]=45;c[89]=21;c[90]=44;c[91]=(-1);c[92]=(-1);c[93]=(-1);c[94]=(-1);c[95]=(-1);c[96]=(-1);c[97]=(-1);c[98]=(-1);c[99]=(-1);c[100]=(-1);c[101]=(-1);c[102]=(-1);c[103]=(-1);c[104]=(-1);c[105]=(-1);c[106]=(-1);c[107]=(-1);c[108]=(-1);c[109]=12;c[110]
=52;c[111]=53;c[112]=(-1);c[113]=(-1);c[114]=(-1);c[115]=(-1);c[116]=(-1);c[117]=(-1);c[118]=(-1);c[119]=(-1);c[120]=(-1);c[121]=(-1);c[122]=(-1);c[123]=(-1);c[124]=(-1);c[125]=(-1);c[126]=(-1);c[127]=(-1);c[128]=(-1);c[129]=(-1);c[130]=(-1);c[131]=(-1);c[132]=(-1);c[133]=(-1);c[134]=(-1);c[135]=(-1);c[136]=(-1);c[137]=(-1);c[138]=(-1);c[139]=(-1);c[140]=(-1);c[141]=(-1);c[142]=(-1);c[143]=(-1);c[144]=(-1);c[145]=(-1);c[146]=(-1);c[147]=(-1);c[148]=(-1);c[149]=(-1);c[150]=(-1);c[151]=(-1);c[152]=(-1);c[153]
=(-1);c[154]=(-1);c[155]=(-1);c[156]=(-1);c[157]=(-1);c[158]=(-1);c[159]=(-1);c[160]=(-1);c[161]=(-1);c[162]=(-1);c[163]=(-1);c[164]=(-1);c[165]=(-1);c[166]=(-1);c[167]=(-1);c[168]=(-1);c[169]=(-1);c[170]=(-1);c[171]=(-1);c[172]=(-1);c[173]=(-1);c[174]=(-1);c[175]=(-1);c[176]=(-1);c[177]=(-1);c[178]=(-1);c[179]=(-1);c[180]=(-1);c[181]=(-1);c[182]=(-1);c[183]=(-1);c[184]=(-1);c[185]=(-1);c[186]=39;c[187]=13;c[188]=51;c[189]=12;c[190]=52;c[191]=53;c[192]=(-1);c[193]=(-1);c[194]=(-1);c[195]=(-1);c[196]=(-1);c[197]
=(-1);c[198]=(-1);c[199]=(-1);c[200]=(-1);c[201]=(-1);c[202]=(-1);c[203]=(-1);c[204]=(-1);c[205]=(-1);c[206]=(-1);c[207]=(-1);c[208]=(-1);c[209]=(-1);c[210]=(-1);c[211]=(-1);c[212]=(-1);c[213]=(-1);c[214]=(-1);c[215]=(-1);c[216]=(-1);c[217]=(-1);c[218]=(-1);c[219]=(-1);c[220]=26;c[221]=43;c[222]=27;c[223]=40;BaI=b;BaJ=0;BaK=new Int32Array(new ArrayBuffer(2100000));BaL=0;}
function AEl(){window.onbeforeunload=function(){A2J();return false;};}
function A2J(){var b;Be();P3();b=O0();MN(A_u,ACQ(b));Ze(B(5),HP(b));}
function AC9(b){window.currentContext=b;}
function AL0(){if (!AL0.$native){
AL0.$native=function(){return (function(){window.eagsFileChooser = {
inputElement: null,
openFileChooser: function(ext, mime){
var el = window.eagsFileChooser.inputElement = document.createElement("input");
el.type = "file";
el.multiple = false;
el.addEventListener("change", function(evt){
var f = window.eagsFileChooser.inputElement.files;
if(f.length == 0){
window.eagsFileChooser.getFileChooserResult = null;
}else{
(async function(){
window.eagsFileChooser.getFileChooserResult = await f[0].arrayBuffer();
window.eagsFileChooser.getFileChooserResultName = f[0].name;
})();
}
});
window.eagsFileChooser.getFileChooserResult = null;
window.eagsFileChooser.getFileChooserResultName = null;
el.accept = mime;
el.click();
},
getFileChooserResult: null,
getFileChooserResultName: null
};})();};AL0=AL0.$native;}return AL0();}
function ABc(){return {antialias:false,depth:true,powerPreference:"high-performance",desynchronized:false,preserveDrawingBuffer:false,premultipliedAlpha:false,alpha:false};}
function AJd(b,c){return URL.createObjectURL(new Blob([b],{type:c}));}
function AN_(b){if(b.commit)b.commit();}
function Os(){BT.call(this);}
function A$Y(){var a=new Os();A1W(a);return a;}
function A1W(a){Z(a);}
function U5(){}
function IY(){}
function Pj(){}
function IC(){C.call(this);this.m6=null;}
function MG(){IC.call(this);this.ql=null;}
function AJr(a){return;}
function AE8(a,b,c,d){var e,f;if(c>=0){e=b.data.length;if(c<=e&&d>=0&&d<=(e-c|0)){if(!d)return;J3(a.ql,b,c,d);return;}}f=new BE;Z(f);J(f);}
function Mz(){var a=this;IC.call(a);a.mZ=null;a.GO=0;a.y8=0;}
function AFP(a){var $$je;a:{if(a.mZ===null)Lj(a);else{try{AJr(a.mZ);break a;}catch($$e){$$je=Bh($$e);if($$je instanceof BA){}else{throw $$e;}}Lj(a);}}}
function Ih(a,b){if(b===null)b=WJ(null);AAN(a,b);}
function U0(a){Ih(a,B(174));if(a.y8)AFP(a);}
function ACx(a,b){ADi(a,WJ(b));}
function ADi(a,b){Ih(a,b);U0(a);}
function Lj(a){a.GO=1;}
function AOe(a,b){ACg(a,b,0,b.data.length);}
function ACg(a,b,c,d){var $$je;a:{if(a.mZ===null)Lj(a);else{try{AE8(a.mZ,b,c,d);break a;}catch($$e){$$je=Bh($$e);if($$je instanceof BA){}else{throw $$e;}}Lj(a);}}}
function AAN(a,b){AOe(a,H5(b));}
function AFE(){C.call(this);}
function AF0(){C.call(this);}
function Nb(){C.call(this);}
var BaQ=null;var BaR=null;function Dr(){if(BaQ===null)BaQ=AUU(new ZN,0);return BaQ;}
function Ez(){if(BaR===null)BaR=AUU(new Ru,0);return BaR;}
function CT(b,c,d,e,f){var g,h,i,j,k,l,m;if(b!==null&&d!==null){if(c>=0&&e>=0&&f>=0&&(c+f|0)<=AMb(b)&&(e+f|0)<=AMb(d)){a:{b:{if(b!==d){g=Ly(B5(b));h=Ly(B5(d));if(g!==null&&h!==null){if(g===h)break b;if(!Ku(g)&&!Ku(h)){i=b;j=0;k=c;while(j<f){l=i.data;m=k+1|0;if(!AI8(h,l[k])){XB(b,c,d,e,j);b=new K4;Z(b);J(b);}j=j+1|0;k=m;}XB(b,c,d,e,f);return;}if(!Ku(g))break a;if(Ku(h))break b;else break a;}b=new K4;Z(b);J(b);}}XB(b,c,d,e,f);return;}b=new K4;Z(b);J(b);}b=new BE;Z(b);J(b);}d=new Eg;Bd(d,B(175));J(d);}
function XB(b,c,d,e,f){if (b !== d || e < c) {
for (var i = 0; i < f; i = (i + 1) | 0) {d.data[e++] = b.data[c++];}} else {c = (c + f) | 0;e = (e + f) | 0;for (var i = 0; i < f; i = (i + 1) | 0) {d.data[--e] = b.data[--c];}}}
function CF(){return Long_fromNumber(new Date().getTime());}
function AFi(){return Long_fromNumber(performance.now()*1000000.0);}
function Pc(){C.call(this);}
var A_t=null;var A_u=null;function P3(){var b;b=O0();MN(A_t,ACQ(b));Ze(B(4),HP(b));}
function AJN(){A_t=null;A_u=null;}
function V6(){C.call(this);}
var A_w=null;function AEG(){var b,c,d,e,f,$p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:b=O0();MN(A_w,ACQ(b));c=B(6);d=HP(b);Be();e=Gt(c,47);if(e>0){b=BO(c,0,e);$p=2;continue _;}f=new Uint8Array(d.data.length);f.set(d.data);b=A_v;e=0;f=f.buffer;$p=1;case 1:A28(b,c,e,f);if(I()){break _;}if(A_w.b2===null)A_w=null;else if(!A_w.b2.dC)A_w=null;return;case 2:AId(b);if(I()){break _;}f=new Uint8Array(d.data.length);f.set(d.data);b=A_v;e=0;f=f.buffer;$p
=1;continue _;default:F2();}}Dh().s(b,c,d,e,f,$p);}
function AMZ(){A_w=null;}
function DY(){}
function ALM(){C.call(this);}
function A9I(){var a=new ALM();A01(a);return a;}
function A01(a){return;}
function AEL(a,b){b.preventDefault();b.stopPropagation();}
function ACm(a,b){AEL(a,b);}
function AZd(a,b){ACm(a,b);}
function ALP(){C.call(this);}
function A$s(){var a=new ALP();A7T(a);return a;}
function A7T(a){return;}
function ACr(a,b){var c,d;c=b.button;d=Sp();if(c==1)c=2;else if(c==2)c=1;d.data[c]=1;HF(Mp(),b);b.preventDefault();b.stopPropagation();N_();}
function AHV(a,b){ACr(a,b);}
function A8r(a,b){AHV(a,b);}
function ALQ(){C.call(this);}
function A$R(){var a=new ALQ();A6Q(a);return a;}
function A6Q(a){return;}
function AIj(a,b){var c,d;c=b.button;d=Sp();if(c==1)c=2;else if(c==2)c=1;d.data[c]=0;HF(Mp(),b);b.preventDefault();b.stopPropagation();}
function ACH(a,b){AIj(a,b);}
function A0f(a,b){ACH(a,b);}
function ALN(){C.call(this);}
function A$L(){var a=new ALN();ARZ(a);return a;}
function ARZ(a){return;}
function AAy(a,b){var c;Be();A_4=b.offsetX;A_5=A_N.clientHeight-b.offsetY|0;c=b.movementX;A_6=A_6+c;c= -b.movementY;A_7=A_7+c;b.preventDefault();b.stopPropagation();}
function AD4(a,b){AAy(a,b);}
function APX(a,b){AD4(a,b);}
function ALO(){C.call(this);}
function A$E(){var a=new ALO();AVI(a);return a;}
function AVI(a){return;}
function ABO(a,b){Y3().data[Rn(ZA(b))]=1;HF(Pn(),b);b.preventDefault();b.stopPropagation();N_();}
function AMX(a,b){ABO(a,b);}
function A6_(a,b){AMX(a,b);}
function ALS(){C.call(this);}
function A$M(){var a=new ALS();AU5(a);return a;}
function AU5(a){return;}
function AD0(a,b){Y3().data[Rn(ZA(b))]=0;HF(Pn(),b);b.preventDefault();b.stopPropagation();}
function AAm(a,b){AD0(a,b);}
function ATJ(a,b){AAm(a,b);}
function ALT(){C.call(this);}
function A$w(){var a=new ALT();AVe(a);return a;}
function AVe(a){return;}
function AKA(a,b){Be();if(A_$&&(b.repeat?1:0))HF(Pn(),b);b.preventDefault();b.stopPropagation();}
function AMV(a,b){AKA(a,b);}
function AWC(a,b){AMV(a,b);}
function ALR(){C.call(this);}
function A9O(){var a=new ALR();AVa(a);return a;}
function AVa(a){return;}
function ABu(a,b){HF(Mp(),b);b.preventDefault();b.stopPropagation();}
function AD2(a,b){ABu(a,b);}
function ART(a,b){AD2(a,b);}
function ALk(){C.call(this);}
function A9S(){var a=new ALk();AZ4(a);return a;}
function AZ4(a){return;}
function ADX(a,b){Uh(0);}
function AD1(a,b){ADX(a,b);}
function A2w(a,b){AD1(a,b);}
function ALj(){C.call(this);}
function A8M(){var a=new ALj();APQ(a);return a;}
function APQ(a){return;}
function AKf(a,b){Uh(1);N_();}
function ACI(a,b){AKf(a,b);}
function AYv(a,b){ACI(a,b);}
function Mw(){C.call(this);}
var BaS=null;var A_v=null;function AKL(){var b,$p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();b=$T.l();}_:while(true){switch($p){case 0:b=B(176);$p=1;case 1:$z=A1C(b);if(I()){break _;}b=$z;if(b===null){BaS=B(177);return BaT;}if(b.DV)return BaO;if(!b.AA&&b.zA!==null){A_v=b.zA;return BaN;}BaS=b.xS!==null?b.xS:B(178);return BaT;default:F2();}}Dh().s(b,$p);}
function AIp(){return BaS;}
function AId(b){var c,d,e,$p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:c=A_v;$p=1;case 1:$z=A63(c,b);if(I()){break _;}c=$z;if(c!==BaU?0:1)return;d=Gt(b,47);if(d>0){c=BO(b,0,d);$p=3;continue _;}c=A_v;d=1;e=new ArrayBuffer(0);$p=2;case 2:A28(c,b,d,e);if(I()){break _;}return;case 3:AId(c);if(I()){break _;}c=A_v;d=1;e=new ArrayBuffer(0);$p=2;continue _;default:F2();}}Dh().s(b,c,d,e,$p);}
function ACE(){BaS=B(9);A_v=null;}
function Fc(){var a=this;C.call(a);a.IN=null;a.tC=0;}
function BaV(a,b){var c=new Fc();FJ(c,a,b);return c;}
function FJ(a,b,c){a.IN=b;a.tC=c;}
function AWZ(a){return a.tC;}
function APz(a,b){return a!==b?0:1;}
function K5(a){var b;b=B5(a);if(!S3(Nl(b),D(Fc)))b=Nl(b);return b;}
function AAj(a,b){var c,d;if(K5(b)===K5(a))return Bw(a.tC,b.tC);c=new BB;d=new S;V(d);Bd(c,R(G(G(G(G(d,B(179)),H8(K5(a))),B(180)),H8(K5(b)))));J(c);}
function ATH(a,b){return AAj(a,b);}
function Fq(){Fc.call(this);}
var BaN=null;var BaO=null;var BaT=null;var BaW=null;function ABP(){var b,c,d;b=new Fq;FJ(b,B(181),0);BaN=b;b=new Fq;FJ(b,B(182),1);BaO=b;b=new Fq;FJ(b,B(183),2);BaT=b;c=H(Fq,3);d=c.data;d[0]=BaN;d[1]=BaO;d[2]=BaT;BaW=c;}
function Xf(){C.call(this);}
var BaM=null;function AJT(b){var c,d,e,f,g,h,i,j,k,l,m;c=Ju(b);d=Qs(c);e=$rt_createByteArray(8);O6(d,e);if(!BW(B(184),AHK(e,Hc(B(31))))){c=new BA;Bd(c,B(185));J(c);}KV(d);f=new RJ;d=new Zt;g=new WB;g.f4=A6s();g.wS=0;h=AFC(g,15,0);if(h){c=new RN;f=new S;V(f);Bd(c,R(G(G(Bf(f,h),B(19)),g.ca)));J(c);}Ua(d,c);d.qF=0;d.ph=0;d.Fv=1;d.Fb=0;d.wZ=$rt_createByteArray(1);d.H9=$rt_createByteArray(512);d.gQ=g;d.oT=$rt_createByteArray(512);d.Fv=1;d.Fb=1;AHY(f,d);g=new Td;g.h9=$rt_createByteArray(4);g.jw=0;g.d$=$rt_createIntArray(80);Qb(g);while
(true){d=KV(f);if(!BW(B(186),d)){if(AI5(f)<=0&&BW(B(187),d))return;c=new BA;Bd(c,B(185));J(c);}i=KV(f);j=$rt_createByteArray(20);k=$rt_createByteArray(20);O6(f,j);h=I$(f);l=$rt_createByteArray(h);O6(f,l);if(Dx(BaM,i))continue;a:{AEH(g,l,0,h);AJQ(g,k,0);if(j===k)h=1;else{if(j!==null&&k!==null){b=j.data;e=k.data;h=b.length;if(h==e.length){m=0;while(m<h){if(b[m]!=e[m]){h=0;break a;}m=m+1|0;}h=1;break a;}}h=0;}}if(!h){c=new BA;f=new S;V(f);Bd(c,R(G(G(f,B(188)),i)));J(c);}BI(BaM,i,l);if(!BW(B(189),KV(f)))break;}c
=new BA;Bd(c,B(185));J(c);}
function ABn(){BaM=CZ();}
function BA(){Cq.call(this);}
function Kh(){IR.call(this);}
function AW4(a,b){Ce(a,b);return a;}
function AYo(a,b,c,d){J3(a,b,c,d);return a;}
function ARL(a,b){Ib(a,b);return a;}
function A4h(a,b,c,d,e){K_(a,b,c,d,e);return a;}
function A7w(a,b,c){J4(a,b,c);return a;}
function AR7(a,b,c,d,e){K_(a,b,c,d,e);return a;}
function A0v(a,b,c,d){J3(a,b,c,d);return a;}
function AHO(a,b){var c;if(b>=0&&b<a.b5)return a.bp.data[b];c=new BE;Z(c);J(c);}
function PP(a){return a.b5;}
function A0E(a){return R(a);}
function A0O(a,b){N5(a,b);}
function A6K(a,b,c){J4(a,b,c);return a;}
function E4(){}
function Yr(){C.call(this);}
function FE(){C.call(this);this.ml=0;}
var BaX=null;var BaY=null;var BaZ=null;var Ba0=null;var Ba1=null;var Ba2=null;function AYu(a){var b=new FE();ACJ(b,a);return b;}
function ACJ(a,b){a.ml=b;}
function BX(b){var c;if(b>=Ba0.data.length)return AYu(b);c=Ba0.data[b];if(c===null){c=AYu(b);Ba0.data[b]=c;}return c;}
function A7D(a,b){if(a===b)return 1;return b instanceof FE&&b.ml==a.ml?1:0;}
function A7m(a){return a.ml;}
function UO(b){var c,d;c=new BC;d=$rt_createCharArray(1);d.data[0]=b;NX(c,d);return c;}
function NC(b){return b>=65536&&b<=1114111?1:0;}
function Dw(b){return (b&64512)!=55296?0:1;}
function D1(b){return (b&64512)!=56320?0:1;}
function PD(b){return !Dw(b)&&!D1(b)?0:1;}
function K$(b,c){return Dw(b)&&D1(c)?1:0;}
function E3(b,c){return ((b&1023)<<10|c&1023)+65536|0;}
function JJ(b){return (55296|(b-65536|0)>>10&1023)&65535;}
function Jg(b){return (56320|b&1023)&65535;}
function Gg(b){return Hy(b)&65535;}
function Hy(b){return AMT(b).toLowerCase().charCodeAt(0);}
function F1(b){return Hw(b)&65535;}
function Hw(b){return AMT(b).toUpperCase().charCodeAt(0);}
function LL(b,c){if(c>=2&&c<=36){b=Ww(b);if(b>=c)b=(-1);}else b=(-1);return b;}
function Ww(b){var c,d,e,f,g,h,i,j,k;if(BaY===null){if(Ba1===null)Ba1=AJ1();c=(Ba1.value!==null?$rt_str(Ba1.value):null);d=AFI(H5(c));e=L9(d);f=$rt_createIntArray(e);g=f.data;h=0;while(h<e){g[h]=L9(d);h=h+1|0;}BaY=f;}f=BaY.data;h=0;i=(f.length/2|0)-1|0;while(i>=h){j=(h+i|0)/2|0;e=j*2|0;k=Bw(b,f[e]);if(k>0)h=j+1|0;else{if(k>=0)return f[e+1|0];i=j-1|0;}}return (-1);}
function J6(b,c){if(c>=2&&c<=36&&b<c)return b<10?(48+b|0)&65535:((97+b|0)-10|0)&65535;return 0;}
function JE(b){var c,d;if(b<65536){c=$rt_createCharArray(1);c.data[0]=b&65535;return c;}c=$rt_createCharArray(2);d=c.data;d[0]=JJ(b);d[1]=Jg(b);return c;}
function Dp(b){var c,d,e,f,g;c=b>0&&b<=65535?1:0;if(c&&PD(b&65535))return 19;if(BaZ===null){if(Ba2===null)Ba2=AHi();BaZ=AYS((Ba2.value!==null?$rt_str(Ba2.value):null));}d=BaZ.data;e=0;c=d.length-1|0;while(e<=c){f=(e+c|0)/2|0;g=d[f];if(b>=g.Br)e=f+1|0;else{if(b>=g.xH)return g.D8.data[b-g.xH|0];c=f-1|0;}}return 0;}
function Me(b){a:{switch(Dp(b)){case 1:case 2:case 3:case 4:case 5:case 9:break;case 6:case 7:case 8:break a;default:break a;}return 1;}return 0;}
function JB(b){a:{if(!(b>=0&&b<=8)&&!(b>=14&&b<=27)){if(b<127)break a;if(b>159)break a;}return 1;}return Dp(b)!=16?0:1;}
function WT(b){switch(Dp(b)){case 12:case 13:case 14:break;default:return 0;}return 1;}
function R4(b){switch(b){case 9:case 10:case 11:case 12:case 13:case 28:case 29:case 30:case 31:break;case 160:case 8199:case 8239:return 0;default:return WT(b);}return 1;}
function AEk(a,b){return a.ml-b.ml|0;}
function AZg(a,b){return AEk(a,b);}
function AH$(){BaX=D($rt_charcls());Ba0=H(FE,128);}
function AJ1(){return {"value":"oD#*% .%%2%)6%-:%1>%5B%9F%=J%AN%Eo%Is%Mw%Q{%U!\'Y&\'^*\'b.\'f2\'j6\'n:\'r>\'vB\'zF\'!#J\'&#N\'*#R\'.#V\'2#Z\'6#_\':#c\'>#g\'B#k\'F#o\'J#s\'N#w\'R#6)I:)M>)QB)UF)YJ)^N)bR)fV)jZ)n_)rc)vg)zk)!#o)&#s)*#w).#{)2#!+6#&+:#*+>#.+B#2+F#6+J#:+N#>+R#{R# !T#%&T#)*T#-.T#12T#56T#9:T#=>T#ABT#E6a# :a#%>a#)Ba#-Fa#1Ja#5Na#9Ra#=Va#AZa#E:s# >s#%Bs#)Fs#-Js#1Ns#5Rs#9Vs#=Zs#A_s#EZ:% _:%%c:%)g:%-k:%1o:%5s:%9w:%={:%A!<%E2F% 6F%%:F%)>F%-BF%1FF%5JF%9NF%=RF%AVF%EgP% kP%%oP%)sP%-wP%1{P%5!R%9&R%=*R%A.R%E>]% B]%%F]%)J]%-N]%1R]%5V]%9Z]%=_]%Ac]%Esg% wg%%{g%)!i%-&"
+"i%1*i%5.i%92i%=6i%A:i%EJs% Ns%%Rs%)Vs%-Zs%1_s%5cs%9gs%=ks%Aos%E!!\' &!\'%*!\').!\'-2!\'16!\'5:!\'9>!\'=B!\'AF!\'EV,\' Z,\'%_,\')c,\'-g,\'1k,\'5o,\'9s,\'=w,\'A{,\'E.8\' 28\'%68\'):8\'->8\'1B8\'5F8\'9J8\'=N8\'AR8\'EcB\' gB\'%kB\')oB\'-sB\'1wB\'5{B\'9!D\'=&D\'A*D\'E>L\' BL\'%FL\')JL\'-NL\'1RL\'5VL\'9ZL\'=_L\'AcL\'EsV\' wV\'%{V\')!X\'-&X\'1*X\'5.X\'92X\'=6X\'A:X\'EB_\' F_\'%J_\')N_\'-R_\'1V_\'5Z_\'9__\'=c_\'Ag_\'Esw\' ww\'%{w\')!y\'-&y\'1*y\'5.y\'92y\'=6y\'A:y\'EB!) F!)%J!))N!)-R!)1V!)5Z!)9_!)=c!)Ag!)Egi+ ki+%oi+)si+-wi+1{i+5!k+9&k+=*k+A.k+Eom+ sm+%wm+){m+-!o+1&o+5*o+9.o+=2o+A6o+E>,- B,-%F"
+",-)J,--N,-1R,-5V,-9Z,-=_,-Ac,-E>8- B8-%F8-)J8--N8-1R8-5V8-9Z8-=_8-Ac8-E{F- !H-%&H-)*H--.H-12H-56H-9:H-=>H-ABH-E_H- cH-%gH-)kH--oH-1sH-5wH-9{H-=!J-A&J-E!Z- &Z-%*Z-).Z--2Z-16Z-5:Z-9>Z-=BZ-AFZ-E2c- 6c-%:c-)>c--Bc-1Fc-5Jc-9Nc-=Rc-AVc-EJo- No-%Ro-)Vo--Zo-1_o-5co-9go-=ko-Aoo-E.q- 2q-%6q-):q-->q-1Bq-5Fq-9Jq-=Nq-ARq-E&4r *4r%.4r)24r-64r1:4r5>4r9B4r=F4rAJ4rE{or !qr%&qr)*qr-.qr12qr56qr9:qr=>qrABqrE&ur *ur%.ur)2ur-6ur1:ur5>ur9Bur=FurAJurE**t .*t%2*t)6*t-:*t1>*t5B*t9F*t=J*tAN*tEN,t R,t%V,t)Z,t-_,t1c,t5g,t9k,t=o,tAs,tE_"
+"4t c4t%g4t)k4t-o4t1s4t5w4t9{4t=!6tA&6tEgXt kXt%oXt)sXt-wXt1{Xt5!Zt9&Zt=*ZtA.ZtE{c@# !e@#%&e@#)*e@#-.e@#12e@#56e@#9:e@#=>e@#ABe@#Ece@#Ige@#Mke@#Qoe@#Use@#Ywe@#^{e@#b!g@#f&g@#j*g@#n.g@#r2g@#v6g@#z:g@#!#>g@#&#Bg@#*#Fg@#.#Jg@#2#Ng@#6#Rg@#:#Vg@#>#Zg@#B#_g@#F#cg@#J#gg@#N#kg@#R#*i@#I.i@#M2i@#Q6i@#U:i@#Y>i@#^Bi@#bFi@#fJi@#jNi@#nRi@#rVi@#vZi@#z_i@#!#ci@#&#gi@#*#ki@#.#oi@#2#si@#6#wi@#:#{i@#>#!k@#B#&k@#F#*k@#J#.k@#N#2k@#R#s&D# w&D#%{&D#)!(D#-&(D#1*(D#5.(D#92(D#=6(D#A:(D#E2.H# 6.H#%:.H#)>.H#-B.H#1F.H#5J.H#9N.H#=R.H#AV."
+"H#EwuH# {uH#%!wH#)&wH#-*wH#1.wH#52wH#96wH#=:wH#A>wH#Ew$J# {$J#%!&J#)&&J#-*&J#1.&J#52&J#96&J#=:&J#A>&J#E{*J# !,J#%&,J#)*,J#-.,J#12,J#56,J#9:,J#=>,J#AB,J#E_8J# c8J#%g8J#)k8J#-o8J#1s8J#5w8J#9{8J#=!:J#A&:J#E2RJ# 6RJ#%:RJ#)>RJ#-BRJ#1FRJ#5JRJ#9NRJ#=RRJ#AVRJ#ENqJ# RqJ#%VqJ#)ZqJ#-_qJ#1cqJ#5gqJ#9kqJ#=oqJ#AsqJ#E&}J# *}J#%.}J#)2}J#-6}J#1:}J#5>}J#9B}J#=F}J#AJ}J#Eg@L# k@L#%o@L#)s@L#-w@L#1{@L#5!BL#9&BL#=*BL#A.BL#EZJL# _JL#%cJL#)gJL#-kJL#1oJL#5sJL#9wJL#={JL#A!LL#ENTL# RTL#%VTL#)ZTL#-_TL#1cTL#5gTL#9kTL#=oTL#AsTL#E:{L# >{L#"
+"%B{L#)F{L#-J{L#1N{L#5R{L#9V{L#=Z{L#A_{L#ERkN# VkN#%ZkN#)_kN#-ckN#1gkN#5kkN#9okN#=skN#AwkN#E_$P# c$P#%g$P#)k$P#-o$P#1s$P#5w$P#9{$P#=!&P#A&&P#E.,P# 2,P#%6,P#):,P#->,P#1B,P#5F,P#9J,P#=N,P#AR,P#EFau# Jau#%Nau#)Rau#-Vau#1Zau#5_au#9cau#=gau#Akau#Eouu# suu#%wuu#){uu#-!wu#1&wu#5*wu#9.wu#=2wu#A6wu#EF0N% J0N%%N0N%)R0N%-V0N%1Z0N%5_0N%9c0N%=g0N%Ak0N%Eo0N% s0N%%w0N%){0N%-!2N%1&2N%5*2N%9.2N%=22N%A62N%E:2N% >2N%%B2N%)F2N%-J2N%1N2N%5R2N%9V2N%=Z2N%A_2N%Ec2N% g2N%%k2N%)o2N%-s2N%1w2N%5{2N%9!4N%=&4N%A*4N%E.4N% 24N%%64N%):4N%->"
+"4N%1B4N%5F4N%9J4N%=N4N%AR4N%ERJR% VJR%%ZJR%)_JR%-cJR%1gJR%5kJR%9oJR%=sJR%AwJR%E>qR% BqR%%FqR%)JqR%-NqR%1RqR%5VqR%9ZqR%=_qR%AcqR%E:FV% >FV%%BFV%)FFV%-JFV%1NFV%5RFV%9VFV%=ZFV%A_FV%E"};}
function AHi(){return {"value":"PA-Y$;Y$679:95Y#J+Y#Z$Y#B;697<8<C;6:7:PB-9[%=9<=&>:1=<=:L#<#Y#<,&?L$9B8:B(C9:C)!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#B##!#!C$B##!#B##B$C#B%#B##B$C$B##B##!#!#B##!C#!#B##B$#!#B#C#&!C$F%!$#!$#!$#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!C#!$#!#B$#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C(B##B#C#!#B%#!#!#!#!Cg&C<E3]%E-]/E&](%<%]2b\'Q! !#!#%<!#A#%C$9!A%]#!9B$ ! B##B2 B*CD!C#B$C$!#!#!#!#!#!#!#!#!#!#!#!C&!#:!#B#C#BTCQ!#!#!#!#"
+"!#!#!#!#!#!#!#!#!#!#!#!#!#=G&H#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#B##!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!# BGA#%Y\'CJ95A#^#; GN5\'9G#9G#9\'A)F<A%F%Y#A,Q\'Z$Y#;Y#^#G,91 Y#FA%F+G6J+Y%F#\'b&D! 9&G(1=G\'E#G#=G%F#J+F$^#&Y/ 1&\'F?G<A#b&:! G,&A/J+FBG*E#=Y$%A#\'[#F7G%%G*%G$%G&A#Y0 F:G$A#9 F,AVF6 F)A6G01GA)FW\')\'&I$G)I%\'I#&G(F+G#Y#J+9%F0\'I# F)A#F#A#F7 F( &A$F%A#\'&I$G%A#I#A#I#\'&A))A%F# F$G#A#J+F#[#L\'=;&9\'A#G#) F\'A%F#A#F7 F( F# F# F#A#\' "
+"I$G#A%G#A#G$A$\'A(F% &A(J+G#F$\'9A+G#) F* F$ F7 F( F# F&A#\'&I$G& G#) I#\'A#&A0F#G#A#J+9;A(&G\' \'I# F)A#F#A#F7 F( F# F&A#\'&)\')G%A#I#A#I#\'A)\')A%F# F$G#A#J+=&L\'A+\'& F\'A$F$ F%A$F# & F#A$F#A$F$A$F-A%I#\'I#A$I$ I$\'A#&A\')A/J+L$^\';=A&\'I$\'F) F$ F8 F1A$&G$I% G$ G%A(G# F$A&F#G#A#J+A(9L(=&\'I#9F) F$ F8 F+ F&A#\'&)\'I& \'I# I#G#A(I#A(& F#G#A#J+ F#A.G#I# F) F$ FJG#&I$G% I$ I$\'&=A%F$)L(F$G#A#J+L*=F\'A#I# F3A$F9 F* &A#F(A$\'A%I$G$ \' I)A\'J+A#I#9A-FQ\'F#G(A%;F\'%G)9J+Y#AFF# & F& F9 & F+\'F#G*&A#F& % G\'A#J+A#F%AA&^$Y0=9^$G#^\'J+L+=\'=\'=\'6767"
+"I#F) FEA%G/)G&9G#F&G, GE ^)\'^\' ^#Y&^%Y#AFFLI#G%)G\')G#I#G#&J+Y\'F\'I#G#F%G$&I$F#I(F$G%F.\'I#G#I\'\'&)J+I$\'^#BG !A&!A#CL9%C$b&*&  F%A#F( & F%A#FJ F%A#FB F%A#F( & F%A#F0 FZ F%A#FeA#G$Y*L5A$F1^+A\'b!7! A#C\'A#5b&M* =9F2-F;67A$FmY$K$F)A(F. F%G$A,F3G$Y#A*F3G#A-F. F$ G#A-FUG#)G(I)\'I#G,Y$%Y$;&\'A#J+A\'L+A\'Y\'5Y%G$1 J+A\'FD%FVA(F&G#FC\'&A&FhA+F@ G$I%G#I$A%I#\'I\'G$A%=A$Y#J+F?A#F&A,FMA%F;A\'J+,A$^CF8G#I#\'A#Y#FV)\')G( \')\'I#G)I\'G+A#\'J+A\'J+A\'Y(%Y\'A#G/(AcG%)FP\')G&)\'I&\'I#F(A%J+Y(^+G*^*A$G#)F?)G%I#G#)G$F#J+FM\')G#I$\')G$I#A)Y%FEI)G)I#G#A$Y&"
+"J+A$F$J+F?E\'Y#C*A(BLA#B$Y)A)G$9G.)G(F%\'F\'\'F#)G#&A&CMEaC.%CCEFG[ G&!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C*!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C*B)C\'A#B\'A#C)B)C)B)C\'A#B\'A#C) ! ! ! !C)B)C/A#C)D)C)D)C)D)C& C#B%$<#]$C$ C#B%$]$C%A#C#B% ]$C)B&]$A#C$ C#B%$]# M,Q&U\'Y#>?6_#?6>Y)./Q&-Y*>?Y%X#Y$:67Y,:98Y+-Q& Q+,%A#L\'Z$67%L+Z$67 E.A$[AA1G.H%\'H$G-A0^#"
+"!^%!^##B$C#B$#=!^#:B&^\'!=!=!=B%=#B%#F%#^#C#B#Z&!C%=:^##=L1KD!#K%,^#A%Z&^&Z#^%:^#:^#:^(:^@Z#^#:=:^@b:-% ^)6767^5Z#^(67b=2! :^?Z:^IZ\'^gA:^,A6L^^pL7b=X# :^*:^WZ)b=P! :b=Y$ 67676767676767L?^MZ&67Z@6767676767Z1b= % b:$# 6767676767676767676767Za6767ZA67b:#% ^QZ6^#Z\'^HA#^AA#b=I! BP CP !#B$C#!#!#!#B%#!C#!C\'E#B$#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C#^\'!#!#G$!#A&Y%,Y#CG #A&#A#FYA(%9A/\'F8A*F( F( F( F( F( F( F( F( GAY#>?>?Y$>?9>?Y*5Y#59>?Y#>?67676767Y&%Y+U#Y%"
+"596Y.AQ^; b=:! A-b=7$ A;^-A%-Y$=%&+6767676767^#6767676756W#=K*G%I#5E&^#K$%&9^# b&7! A#G#]#E#&5b&;! 9E$&A&FL b&?!  ^#L%^+F<A&^EA-F1^@ L+^?L)=L0^AL+^HL0b= & &b UG!&A+^b&b   %b O(!&A1F6%b&X2 A$^XA*FIE\'Y#b&-% %Y$F1J+F#A5!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#&\'H$9G+9%!#!#!#!#!#!#!#!#!#!#!#!#!#!#E#G#FhK+G#Y\'A)]8E*]#!#!#!#!#!#!#!C$!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#%C)!#!#B##!#!#!#!#%]#!#!#&!#!C$!#!#!#!#!#!#!#!#!#!#B&#B&#!#!#!#!#!#A#!#B$AQ&E##F(\'F$\'F%\'F8I#G#)^%A%L\'^#;=A\'FUY%A)I#F"
+"SI1G#A)Y#J+A\'G3F\'Y$&9F#\'J+F=G)Y#F8G,I#A,9F>A$G$)FP\'I#G%I#G#I$Y. %J+A%Y#F&\'%F*J+F& FJG\'I#G#I#G#A*F$\'F)\')A#J+A#Y%F1%F\'^$&)\')FS\'&G$F#G#F&G#&\'&A9F#%Y#F,)G#I#Y#&E#)\'A+F\'A#F\'A#F\'A*F( F( CL<E%C)A)b#1! FDI#\'I#\'I#9)\'A#J+A\'&b CO#&A-F8A%FRA%4b `. T#b `! T#b `0 43b `D!3b&O& A#b&K! AGC(A-C&A&&\'F+:F. F& & F# F# b&M! ]1A2b&L& 76A1FbA#FWAIF-;=A#G1Y(679A\'G19U#X#6767676767676767Y#67Y%X$Y$ Y%5676767Y$:5Z$ 9;Y#A%F& b&(# A#1 Y$;Y$679:95Y#J+Y#Z$Y#B;697<8<C;6:7:67967Y#F+%FNE#F@A$F\'A#F\'A#F\'A#F$A$[#:<=[# =Z%^#A+Q$^#A#F- F; F4 F# F0"
+"A#F/ACb&]! A&Y$A%LNA$^*KVL%^2L#^$ ^-A%=AP^N\'b ## F>A$FRA0\'L<A%FAL%A*F5+F)+A&FGG&A&F? 9FEA%F)9K&AKBICIFpA#J+A\'BEA%CEA%FIA)FUA,9b 1# b&X% A*F7A+F)b 9# F\'A#& FM F#A$&A#F8 9L)F8^#L(F@A)L*AQF4 F#A&L&F7L\'A$9F;A&9AbFYA%L#F#L1A#LO&G$ G#A&G%F% F$ F>A#G$A%\'L*A(Y*A(F>L#9F>L$AAF)=F=G#A%L&Y(A*FWA$Y(F7A#L)F4A&L)F3A(Y%A-L(b 1! FkAXBTA.CTA(L\'FEG%A)J+b G% L@b !# F>L+&A)F7G,L%Y&b \'# F8A*)\')FVG0Y(A%L5J+A0G$)FNI$G%I#G#Y#1Y%A,1A#F:A(J+A\'G$FEG&)G) J+Y%&I#A*FD\'Y#&A*G#)FQI$G*I#F%Y%G%9A#J+&9&Y$ L5A,F3 F:I$G$I#\')G#Y\'\'AcF( & F% F0 F+"
+"9A\'FP\'I$G)A&J+A\'G#I# F)A#F#A#F7 F( F# F& G#&I#\'I%A#I#A#I$A#&A\')A&F&I#A#G(A$G&b ,# FVI$G)I#G$)\'F%Y&J+ 9 9\'&AAFQI$G\')\'I%G#)G#F#9&A)J+b G# FPI$G%A#I%G#)G#Y8F%G#ACFQI$G)I#\')G#Y$&A,J+A\'Y.A4FL\')\'I#G\')\'&A(J+AWF<A#G$I#G%)G&A%J+L#Y$=b  $ FMI$G*)G#9b E! BACAJ+L*A-&b A# F)A#FHI$G%A#G#I%\'&9&)A<&G+FIG\')&G%Y)\'A)&G\'I#G$FOG.)G#Y$&Y&A>FZb (% F* FF)G( G\')\'&Y&A+J+L4A$Y#F?A#G7 )G()G#)G#AkF( F# FGG\'A$\' G# G(&\'A)J+A\'F\' F# FAI& G# I#\')\'&A(J+b W% F4G#I#Y#b ($ L6^)[%^2A.9b&;/ b G! b+P!  Y&A,b&%$ b ^K b&P1  Q*b (a b&(* b Z\'#b&Z) A(F"
+"@ J+A%Y#b A! F?A#G&9A+FQG(Y&^%E%9=A+J+ L( F6A&F4b Q+ BACAL8Y%b F! FmA%\'&IXA(G%E.AbE#9%A=&b W@!&A)b&T, b .5#b&@% ARF$A2F%A)b&-\' b %E b&L! A&F.A$F*A(F+A#=G#9Q%b =.!b=W$ A+^HA#^^I#G$^$I\'Q)G)^#G(^?G%^]A8^dG$=b ;# L5A-b=8! A*L:b (# B;C;B;C( C3B;C;! B#A#!A#B#A#B% B)C% # C( C,B;C;B# B%A#B) B( C;B# B% B& !A$B( C;B;C;B;C;B;C;B;C;B;C;B;C=A#B::C::C\'B::C::C\'B::C::C\'B::C::C\'B::C::C\'!#A#JSb= ) GX^%GS^)\'^/\'^#Y&A0G& G0b 16 G( G2A#G( G# G&b 6$ FNA$G(E(A#J+A%&=b Q& FMG%J+A&;b  5 b&&$ A#L*G(AJBCCCG(%A%J+A%Y#b 2- L]=L$;L%AnLN="
+"L0b #$ F% F< F# &A#& F+ F% & &A\'&A%& & & F$ F# &A#& & & & & F# &A#F% F( F% F% & F+ F2A&F$ F& F2AUZ#b /% ^MA%b=E! A-^0A#^0 ^0 ^FA+L.A$b=>! A$^_AZ^>A.^MA%^*A(^#A/^\'b ;# b=]$ ]&b=7, A+^.A$^,A&b=U! A-b=:! A(^-A5^-A%^YA)^+A\'^IA)^?b 3! ^- b=F!  ^%A$^JA#^\'A$^>A#b=(# A-^/A#^%A%^$A&^$A.^\'b K6 &b   %b   %b 6<#&AJ&b T !&A,&b =$ &A#&b  ;!&A/&b PU!&b @Q b&?) b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   "
+"%b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b D8 1A?b1A! b  # b\'Q$ b   %b   %b   %b 1Y$3b   %b   %b   %b ^a$3A#3b   %b   %b   %b ^a$3"};}
function Ev(){C.call(this);}
function Ye(a,b){S_(a,b,0,b.data.length);}
function APk(a,b,c,d){var e,f,g;e=0;while(e<d){f=b.data;g=c+1|0;a.qS(f[c]);e=e+1|0;c=g;}}
function Jo(){Ev.call(this);this.kP=null;}
function Ba3(a){var b=new Jo();Qf(b,a);return b;}
function Qf(a,b){a.kP=b;}
function ACR(){var a=this;Jo.call(a);a.HG=0;a.u8=0;a.ht=null;a.or=null;a.B9=null;}
function AUU(a,b){var c=new ACR();A7e(c,a,b);return c;}
function A7e(a,b,c){Qf(a,b);b=new S;V(b);a.ht=b;a.or=$rt_createCharArray(32);a.HG=c;a.B9=AGy();}
function Yf(a,b,c,d){var $$je;if(a.kP===null)a.u8=1;if(!(a.u8?0:1))return;a:{try{a.kP.jz(b,c,d);break a;}catch($$e){$$je=Bh($$e);if($$je instanceof BA){}else{throw $$e;}}a.u8=1;}}
function V1(a,b,c,d){var e,f,g,h,i;e=b.data;f=AKv(b,c,d-c|0);e=$rt_createByteArray(Df(16,B4(e.length,1024)));g=My(e);h=UU(SO(UW(a.B9),Ba4),Ba4);while(true){i=G9(N4(h,f,g,1));Yf(a,e,0,g.O);DM(g);if(!i)break;}while(true){i=G9(Qa(h,g));Yf(a,e,0,g.O);DM(g);if(!i)break;}}
function AI9(a,b){a.or.data[0]=b;V1(a,a.or,0,1);}
function Lq(a,b){G(a.ht,b);Ld(a);}
function ADg(a,b){Ce(Bf(a.ht,b),10);Ld(a);}
function Cm(a,b){Ce(G(a.ht,b),10);Ld(a);}
function ADG(a,b){Ce(JL(a.ht,b),10);Ld(a);}
function AMt(a){AI9(a,10);}
function Ld(a){var b;b=a.ht.b5<=a.or.data.length?a.or:$rt_createCharArray(a.ht.b5);ACs(a.ht,0,a.ht.b5,b,0);V1(a,b,0,a.ht.b5);AKB(a.ht,0);}
function ZN(){Ev.call(this);}
function AUs(a,b){$rt_putStdout(b);}
function Gz(){C.call(this);}
function J0(){Gz.call(this);this.kF=null;}
function Ba5(a){var b=new J0();Ua(b,a);return b;}
function Ua(a,b){a.kF=b;}
function AI5(a){return a.kF.xn();}
function QY(){}
function RJ(){J0.call(this);this.dX=null;}
function Qs(a){var b=new RJ();AHY(b,a);return b;}
function AHY(a,b){Ua(a,b);a.dX=$rt_createByteArray(8);}
function O6(a,b){var c;c=b.data;return a.kF.oK(b,0,c.length);}
function Pk(a){var b,c;b=a.kF.Du();if(b>=0)return b<<24>>24;c=new F4;Z(c);J(c);}
function Lc(a,b){var c,d;c=0;while(c<b){d=a.kF.oK(a.dX,c,b-c|0);if(d==(-1))return d;c=c+d|0;}return c;}
function AMj(a){return $rt_longBitsToDouble(VD(a));}
function ACP(a){return $rt_intBitsToFloat(I$(a));}
function OH(a,b){SE(a,b,0,b.data.length);}
function SE(a,b,c,d){var e,f;if(d<0){e=new BE;Z(e);J(e);}if(!d)return;if(a.kF===null){e=new Eg;Z(e);J(e);}if(b===null){e=new Eg;Z(e);J(e);}if(c>=0&&c<=(b.data.length-d|0)){while(d>0){f=a.kF.oK(b,c,d);if(f<0){e=new F4;Z(e);J(e);}c=c+f|0;d=d-f|0;}return;}e=new BE;Z(e);J(e);}
function I$(a){var b;if(Lc(a,4)<0){b=new F4;Z(b);J(b);}return (a.dX.data[0]&255)<<24|(a.dX.data[1]&255)<<16|(a.dX.data[2]&255)<<8|a.dX.data[3]&255;}
function VD(a){var b;if(Lc(a,8)<0){b=new F4;Z(b);J(b);}return Long_or(Long_shl(Long_and(Long_fromInt((a.dX.data[0]&255)<<24|(a.dX.data[1]&255)<<16|(a.dX.data[2]&255)<<8|a.dX.data[3]&255),new Long(4294967295, 0)),32),Long_and(Long_fromInt((a.dX.data[4]&255)<<24|(a.dX.data[5]&255)<<16|(a.dX.data[6]&255)<<8|a.dX.data[7]&255),new Long(4294967295, 0)));}
function L1(a){var b;if(Lc(a,2)<0){b=new F4;Z(b);J(b);}return ((a.dX.data[0]&255)<<24>>16|a.dX.data[1]&255)<<16>>16;}
function AMx(a){var b;if(Lc(a,2)<0){b=new F4;Z(b);J(b);}return ((a.dX.data[0]&255)<<8|a.dX.data[1]&255)&65535;}
function KV(a){return AJA(a,AMx(a));}
function AJA(a,b){var c,d;c=$rt_createByteArray(b);d=$rt_createCharArray(b);SE(a,c,0,b);return ATa(c,d,0,b);}
function ATa(b,c,d,e){var f,g,h,i,j,k,l,m,n,o;f=0;g=0;a:{while(f<e){h=b.data;i=c.data;j=f+1|0;k=h[d+f|0]&65535;i[g]=k;l=i[g];if(k<128)g=g+1|0;else if((l&224)==192){if(j>=e){m=new Ir;Bd(m,B(190));J(m);}k=j+1|0;j=h[d+j|0];if((j&192)!=128){m=new Ir;Bd(m,B(191));J(m);}n=g+1|0;i[g]=((l&31)<<6|j&63)&65535;g=n;j=k;}else{if((l&240)!=224){m=new Ir;Bd(m,B(191));J(m);}f=j+1|0;if(f>=e){m=new Ir;Bd(m,B(191));J(m);}n=h[d+j|0];j=f+1|0;o=h[d+f|0];if((n&192)!=128)break a;if((o&192)!=128)break a;f=g+1|0;i[g]=((l&15)<<12|(n&63)
<<6|o&63)&65535;g=f;}f=j;}return IJ(c,0,g);}m=new Ir;Bd(m,B(191));J(m);}
function AM6(){var a=this;Gz.call(a);a.xz=null;a.kB=0;a.G$=0;a.q4=0;}
function Ju(a){var b=new AM6();AQb(b,a);return b;}
function AQb(a,b){var c;c=b.data.length;a.xz=b;a.kB=0;a.G$=0;a.q4=0+c|0;}
function A0V(a){var b,c,d;if(a.kB>=a.q4)b=(-1);else{c=a.xz.data;d=a.kB;a.kB=d+1|0;b=c[d]&255;}return b;}
function AOi(a,b,c,d){var e,f,g,h,i;e=B4(d,a.q4-a.kB|0);f=0;while(f<e){g=b.data;d=c+1|0;h=a.xz.data;i=a.kB;a.kB=i+1|0;g[c]=h[i];f=f+1|0;c=d;}if(e<=0)e=(-1);return e;}
function A10(a){return a.q4-a.kB|0;}
function CI(){C.call(this);this.e1=null;}
function Ba6(){var a=new CI();C5(a);return a;}
function C5(a){a.e1=null;}
function SW(a){return a.e1!==null?a.e1:B(9);}
function AXl(a,b){a.e1=b;return a;}
function Nh(b){var c,d,e;c=Pk(b);if(!c){b=new Nj;C5(b);return b;}d=Z_(c);e=$rt_createByteArray(L1(b));OH(b,e);d.e1=AUw(e,B(31));d.gu(b);return d;}
function MN(b,c){LO(c,b.e4());if(!b.e4())return;AOx(c,SW(b));b.gB(c);}
function Z_(b){var c;switch(b){case 0:c=new Nj;C5(c);return c;case 1:c=new OK;C5(c);return c;case 2:c=new UJ;C5(c);return c;case 3:c=new Mh;C5(c);return c;case 4:c=new LZ;C5(c);return c;case 5:c=new Y2;C5(c);return c;case 6:c=new QT;C5(c);return c;case 7:c=new MW;C5(c);return c;case 8:c=new OW;C5(c);return c;case 9:return Gu();case 10:return DG();default:}return null;}
function Kc(){CI.call(this);this.b2=null;}
function DG(){var a=new Kc();AYJ(a);return a;}
function AYJ(a){C5(a);a.b2=CZ();}
function APf(a,b){var c;c=WY(Xe(a.b2));while(La(c)){MN(T9(c),b);}LO(b,0);}
function AXL(a,b){var c;Xr(a.b2);while(true){c=Nh(b);if(!c.e4())break;BI(a.b2,SW(c),c);}}
function AZR(a){return 10;}
function Ff(a,b,c){var d;d=a.b2;c.e1=b;BI(d,b,c);}
function DW(a,b,c){var d,e;d=a.b2;e=new OK;C5(e);e.r$=c;e.e1=b;BI(d,b,e);}
function CH(a,b,c){var d,e;d=a.b2;e=Vf(c);e.e1=b;BI(d,b,e);}
function E0(a,b,c){var d,e;d=a.b2;e=new Mh;C5(e);e.qR=c;e.e1=b;BI(d,b,e);}
function ANg(a,b,c){var d,e;d=a.b2;e=new LZ;C5(e);e.rO=c;e.e1=b;BI(d,b,e);}
function Le(a,b,c){var d,e;d=a.b2;e=A6F(c);e.e1=b;BI(d,b,e);}
function HM(a,b,c){var d,e;d=a.b2;e=new OW;C5(e);e.rS=c;e.e1=b;BI(d,b,e);}
function V_(a,b,c){var d,e;d=a.b2;e=new MW;C5(e);e.nT=c;e.e1=b;BI(d,b,e);}
function Ka(a,b,c){var d;d=a.b2;c.e1=b;BI(d,b,c);}
function Gc(a,b,c){DW(a,b,(!c?0:1)<<24>>24);}
function Ex(a,b){return Dx(a.b2,b);}
function EV(a,b){return !Dx(a.b2,b)?0:Co(a.b2,b).r$;}
function Ck(a,b){return !Dx(a.b2,b)?0:Co(a.b2,b).h8;}
function DJ(a,b){return !Dx(a.b2,b)?0:Co(a.b2,b).qR;}
function V4(a,b){return !Dx(a.b2,b)?Long_ZERO:Co(a.b2,b).rO;}
function G4(a,b){return !Dx(a.b2,b)?0.0:Co(a.b2,b).gx;}
function Fg(a,b){return !Dx(a.b2,b)?B(9):Co(a.b2,b).rS;}
function LW(a,b){return !Dx(a.b2,b)?$rt_createByteArray(0):Co(a.b2,b).nT;}
function Gw(a,b){return !Dx(a.b2,b)?DG():Co(a.b2,b);}
function Ee(a,b){return !Dx(a.b2,b)?Gu():Co(a.b2,b);}
function Gb(a,b){return !EV(a,b)?0:1;}
function ABL(a){return AOo(a.b2);}
function Bm(){Bn.call(this);}
var Ba7=0;var Ba8=null;var Ba9=0;var Ba$=0;var Ba_=0;var Bba=0.0;var Bbb=0;var Bbc=null;var Bbd=0;var Bbe=0;var Bbf=0;var Bbg=0.0;var Bbh=0.0;var Bbi=0.0;var Bbj=0.0;var Bbk=0.0;var Bbl=0.0;var Bbm=0.0;var Bbn=0.0;var Bbo=0.0;var Bbp=0;var Bbq=0.0;var Bbr=0.0;var Bbs=0.0;var Bbt=0.0;var Bbu=0;var Bbv=0;var Bbw=0;var Bbx=0.0;var Bby=0.0;var Bbz=0.0;var BbA=0;var BbB=0;var BbC=0;var BbD=0;var BbE=null;var BbF=0;var BbG=null;var BbH=0;var BbI=null;var BbJ=0;var BbK=null;var BbL=null;var BbM=null;var BbN=null;var BbO
=null;var BbP=null;var BbQ=null;var BbR=null;var BbS=null;var BbT=0;var BbU=null;var BbV=null;var BbW=null;var BbX=null;var BbY=null;var BbZ=null;var Bb0=null;var Bb1=null;var Bb2=null;var Bb3=null;var Bb4=null;var Bb5=null;var Bb6=null;var Bb7=null;var Bb8=Long_ZERO;var Bb9=0;function BS(){BS=Bl(Bm);A4E();}
function Y(b){BS();a:{switch(b){case 2884:LE(2884);break a;case 2896:Ba$=1;break a;case 2903:Bbp=1;break a;case 2912:Bbv=1;break a;case 2929:LE(2929);break a;case 3008:Ba_=1;break a;case 3042:LE(3042);break a;case 3553:Ba9=1;break a;case 32823:LE(32823);break a;case 32826:break;default:break a;}}}
function GM(b){var c;BS();a:{c=518;switch(b){case 514:c=514;break a;case 515:c=518;break a;case 516:c=513;break a;default:}}Be();A_Q.depthFunc(c);}
function CB(b){BS();BbD=b;}
function Hr(){BS();switch(BbD){case 5888:break;case 5889:return BbG.data[BbH];case 5890:return BbI.data[BbJ];default:}return BbE.data[BbF];}
function Cp(){BS();Zz(Hr());}
function FI(b,c,d,e){BS();Be();Bab.data[0]=b;Bab.data[1]=c;Bab.data[2]=d;Bab.data[3]=e;A_Q.viewport(b,c,d,e);}
function Db(b){BS();Be();A_Q.clear(b);}
function N3(b,c,d,e,f,g){var h,i,j,k;BS();h=Hr();i=c-b;h.ej=2.0/i;h.eh=0.0;h.ei=0.0;h.ek=0.0;h.en=0.0;j=e-d;h.eo=2.0/j;h.el=0.0;h.em=0.0;h.ep=0.0;h.er=0.0;k=g-f;h.es=2.0/k;h.eq=0.0;h.gK= -(c+b)/i;h.gL= -(e+d)/j;h.gM=(g+f)/k;h.gN=1.0;}
function Bj(b,c,d){var e;BS();O3(BbO,b,c,d);e=Hr();VC(e,BbO,e);if(!Bbb)return;e=new BB;Bd(e,B(192));J(e);}
function Pr(b,c,d,e){BS();Be();A_Q.clearColor(b,c,d,e);}
function Bb(b){BS();a:{switch(b){case 2884:KO(2884);break a;case 2896:Ba$=0;break a;case 2903:Bbp=0;break a;case 2912:Bbv=0;break a;case 2929:KO(2929);break a;case 3008:Ba_=0;break a;case 3042:KO(3042);break a;case 3553:Ba9=0;break a;case 32823:KO(32823);break a;case 32826:break;default:break a;}}}
function BJ(b,c,d,e){BS();Bbg=b;Bbh=c;Bbi=d;Bbj=e;}
function BN(){BS();BbR.hz= -BbR.hz;BbS.hz= -BbS.hz;BbR.hy= -BbR.hy;BbS.hy= -BbS.hy;BbR.hA= -BbR.hA;BbS.hA= -BbS.hA;}
function Ca(){BS();a:{switch(BbD){case 5888:break;case 5889:if(BbH>=(BbG.data.length-1|0)){Cm(Ez(),B(193));break a;}BbH=BbH+1|0;Hn(BbG.data[BbH],BbG.data[BbH-1|0]);break a;case 5890:if(BbJ>=(BbI.data.length-1|0)){Cm(Ez(),B(194));break a;}BbJ=BbJ+1|0;Hn(BbI.data[BbJ],BbI.data[BbJ-1|0]);break a;default:}if(BbF>=(BbE.data.length-1|0))Cm(Ez(),B(195));else{BbF=BbF+1|0;Hn(BbE.data[BbF],BbE.data[BbF-1|0]);}}}
function Bs(b,c,d,e){var f;BS();O3(BbO,c,d,e);f=Hr();VK(f,b*0.01745329238474369,BbO,f);if(!Bbb)return;f=new BB;Bd(f,B(192));J(f);}
function BR(){BS();a:{switch(BbD){case 5888:break;case 5889:if(BbH<=0){Cm(Ez(),B(196));break a;}BbH=BbH-1|0;break a;case 5890:if(BbJ<=0){Cm(Ez(),B(197));break a;}BbJ=BbJ-1|0;break a;default:}if(BbF<=0)Cm(Ez(),B(198));else BbF=BbF-1|0;}}
function PX(b,c){BS();a:{switch(b){case 2982:break;case 2983:Yy(BbG.data[BbH],c);break a;default:}Yy(BbE.data[BbF],c);}}
function C7(b,c,d){var e;BS();O3(BbO,b,c,d);ADC(Hr(),BbO);if(!Bbb)return;e=new BB;Bd(e,B(192));J(e);}
function Dy(b,c){BS();Bbw=b==1&&c==771?1:0;Be();A_Q.blendFunc(b,c);}
function EJ(b){BS();Be();A_Q.depthMask(!!b);}
function Cz(b,c,d,e){BS();Be();A_Q.colorMask(!!b,!!c,!!d,!!e);}
function Cj(b,c){var d,e;BS();d=ADE(Ba8,c);Be();e=A_Q;d=d!==null?d.FC:null;e.bindTexture(3553,d);}
function FX(b,c,d){BS();if(!(d!=33071&&d!=10496))d=33071;Be();A_Q.texParameteri(b,c,d);}
function IT(b,c,d){var e;BS();e=Iu(b*b+c*c+d*d);Bbk=b/e;Bbl=c/e;Bbm=d/e;}
function JF(b){var c,d,e,f,g,h;BS();c=BbT+1|0;d=0;while(d<b){e=BbT+1|0;BbT=e;f=BbM;g=C0(e);h=new SG;h.AH=e;h.s6=null;h.po=null;h.lh=(-1);h.kK=0;BI(f,g,h);d=d+1|0;}return c;}
function MC(b){BS();BbL=b;Rx(b);}
function FF(b){var c;BS();if(!Bbb){c=Co(BbN,C0(b));if(c!==null&&c.kK>0){Si(c.lh|0|(Bbp&&Ba$?8:0)|(!Bbv?0:16)|(!Ba_?0:32)|(!Ba9?0:64));MC(c.s6);Y0(0,c.kK);BbB=BbB+((c.kK*6|0)/4|0)|0;BbC=BbC+(c.kK/2|0)|0;}}}
function EX(b,c){BS();if(!Bbb){Bbc=Co(BbM,C0(b));if(Bbc!==null){Bbc.lh=(-1);Bbc.kK=0;Bbb=1;}}}
function E5(){var b,c,d,e;BS();if(Bbb){Bbb=0;Be();b=BaK.buffer;c=BaJ;d=new Int32Array(b,0,c);BaJ=0;e=YL(d);if(e>0){if(Bbc.po===null){BI(BbN,C0(Bbc.AH),Bbc);Bbc.s6=Z2();Bbc.po=Ms();b=Xz(Bbc.lh);MC(Bbc.s6);HY(34962,Bbc.po);QH(b);}HY(34962,Bbc.po);TE(34962,d,35044);BbA=BbA+e|0;}}}
function Mg(b,c,d){BS();Bbg=b;Bbh=c;Bbi=d;Bbj=1.0;}
function Vg(b){BS();while(DH(b)){FF(UA(b));}}
function Pe(b){BS();a:{switch(b){case 32885:break;case 32886:Bbd=1;break a;case 32887:break a;case 32888:Bbf=1;break a;default:break a;}Bbe=1;}}
function OD(b){BS();a:{switch(b){case 32885:break;case 32886:Bbd=0;break a;case 32887:break a;case 32888:Bbf=0;break a;default:break a;}Bbe=0;}}
function VM(){BS();return 0|(!Bbd?0:1)|(!Bbe?0:2)|(!Bbf?0:4);}
function Si(b){var c;BS();c=Xz(b);BbU=c;AGr(c);if(Ba_)AF9(c,Bba);AHu(c,Bbg,Bbh,Bbi,Bbj);if(Bbv){ANF(c,(!Bbw?0:2)+Bbu|0);AGW(c,Bbq,Bbr,Bbs,Bbt);AJj(c,Bbz);AAg(c,Bbx,Bby);}AHr(c,BbE.data[BbF]);ABC(c,BbG.data[BbH]);AAB(c,BbI.data[BbJ]);if(Bbp&&Ba$){AMn(c,Bbk,Bbl,Bbm);ABt(c,BbR,BbS);}AIP(c,Bbn,Bbo);}
function AFB(b,c,d,e){var f;BS();if(Bbb){if(b!=7)Cm(Ez(),B(199));else{if(Bbc.lh==(-1))Bbc.lh=VM();else if(Bbc.lh!=VM())Cm(Ez(),B(200));f=Bbc;f.kK=f.kK+d|0;Be();e=e;if((BaJ+e.length|0)<BaK.length){f=BaK;b=BaJ;f.set(e,b);BaJ=BaJ+e.length|0;}}}else{BbA=BbA+YL(e)|0;BbB=BbB+d|0;Si(0|(!Bbd?0:1)|(!Bbe?0:2)|(!Bbf?0:4)|(Bbp&&Ba$?8:0)|(!Bbv?0:16)|(!Ba_?0:32)|(!Ba9?0:64));MC(BbU.wd);HY(34962,BbU.vD);if(!BbU.uR){BbU.uR=1;TE(34962,BbV,35048);}f=A_Q;e=e;f.bufferSubData(34962,0,e);if(b==7){Y0(c,d);BbC=BbC+(d/2|0)|0;}else{a:
{b:{switch(b){case 1:break;case 2:case 4:break b;case 3:b=3;BbC=BbC+(d-1|0)|0;break a;case 5:b=5;BbC=BbC+(d-2|0)|0;break a;case 6:b=6;BbC=BbC+(d-2|0)|0;break a;default:break b;}b=1;BbC=BbC+(d/2|0)|0;break a;}b=4;BbC=BbC+(d/3|0)|0;}A_Q.drawArrays(b,c,d);}}}
function Y0(b,c){var d,e,f,g,h,i,j,k;BS();if(BbK===null){if(Ba7)d=AJG($rt_createIntArray(49200));else{e=A3G(196800,1);e.oO=Bb$;d=AHh(e);}f=0;while(f<16384){g=f*4|0;h=g+1|0;i=g+2|0;j=g+3|0;k=h<<16;O2(d,g|k);O2(d,j|k);O2(d,i|j<<16);f=f+1|0;}Ec(d);BbK=Ms();HY(34963,BbK);i=BV(d);e=new Int32Array(Bac.buffer);j=0;while(j<i){k=UA(d);e[j]=k;j=j+1|0;}d=Bac.buffer;i=i*4|0;e=new Uint8Array(d,0,i);A_Q.bufferData(34963,e,35044);}if(!BbL.u$){BbL.u$=1;HY(34963,BbK);}i=(c*6|0)/4|0;b=(b*6|0)/4|0;Be();A_Q.drawElements(4,i,5123,
b);}
function Y7(b,c){BS();a:{if(b==2917){b:{switch(c){case 2048:break;case 9729:break b;default:break b;}Bbu=2;break a;}Bbu=1;}}}
function KW(b,c){BS();a:{switch(b){case 2914:break;case 2915:Bbx=c;break a;case 2916:Bby=c;break a;default:break a;}Bbz=c;}}
function Hu(b,c,d,e){var f,g,h;BS();f=Hr();g=b*0.01745329238474369*0.5;h=Qx(g)/LR(g);f.ej=h/c;f.eh=0.0;f.ei=0.0;f.ek=0.0;f.en=0.0;f.eo=h;f.el=0.0;f.em=0.0;f.ep=0.0;f.er=0.0;b=e+d;c=e-d;f.es=b/c;f.eq=(-1.0);f.gK=0.0;f.gL=0.0;f.gM=2.0*e*d/c;f.gN=0.0;}
function A4E(){var b;Be();Ba7=1;Ba8=APC(256);Ba9=0;Ba$=0;Ba_=0;Bba=0.10000000149011612;Bbb=0;Bbc=null;Bbd=0;Bbe=0;Bbf=0;Bbg=1.0;Bbh=1.0;Bbi=1.0;Bbj=1.0;Bbk=1.0;Bbl=0.0;Bbm=0.0;Bbn=0.0;Bbo=0.0;Bbp=0;Bbq=1.0;Bbr=1.0;Bbs=1.0;Bbt=1.0;Bbu=1;Bbv=0;Bbw=0;Bbx=1.0;Bby=1.0;Bbz=1.0;BbA=0;BbB=0;BbC=0;BbD=5888;BbE=H(Jm,32);BbF=0;BbG=H(Jm,6);BbH=0;BbI=H(Jm,16);BbJ=0;b=0;while(b<BbE.data.length){BbE.data[b]=FH();b=b+1|0;}b=0;while(b<BbG.data.length){BbG.data[b]=FH();b=b+1|0;}b=0;while(b<BbI.data.length){BbI.data[b]=FH();b
=b+1|0;}BbK=null;BbL=null;BbM=CZ();BbN=CZ();BbO=new X$;BbP=new Id;BbQ=new Id;BbR=new Id;BbS=new Id;BbT=0;BbU=null;BbV=new Int32Array(525000);BbW=null;BbX=null;BbY=null;BbZ=null;Bb0=null;Bb1=APC(256);Bb2=LJ(FH());Bb3=$rt_createFloatArray(16);Bb4=$rt_createFloatArray(16);Bb5=FH();Bb6=FH();Bb7=new Id;Bb8=Long_ZERO;Bb9=0;}
function AG8(){Bm.call(this);}
function I1(){}
function Mj(){var a=this;C.call(a);a.P=null;a.vA=0;a.cn=0;a.cp=0;a.bm=null;a.i=null;a.cw=null;a.a=null;a.bI=null;a.ga=null;a.Ig=null;a.D=0;a.cd=null;a.ji=null;a.k=null;a.f$=null;a.cH=null;a.bn=0;a.cm=0;a.Gx=0;a.H3=0;a.Hh=null;a.KJ=0;a.pb=null;a.vg=0;a.n=null;a.d=null;a.rq=null;a.Ah=null;a.uu=null;a.yl=null;a.h7=0;a.oo=null;a.M=0;a.b$=0;a.Ii=0;a.lA=0;a.tJ=0;a.oG=null;}
var Bb_=null;var Bca=0;function A9M(a,b){var c=new Mj();ABZ(c,a,b);return c;}
function ABZ(a,b,c){var d,e;a.P=A0x(a);a.vA=0;d=new R8;d.dy=20.0;d.CP=1.0;d.ls=0.0;d.tz=CF();d.sb=Long_div(AFi(),Long_fromInt(1000000));d.pM=1.0;a.bm=d;a.ga=null;a.D=0;a.k=null;d=new Xw;d.qL=B(9);d.sA=B(9);d.n$=CF();d.fX=a;a.f$=d;d=new QZ;d.s2=0;d.fa=0.0;d.qh=null;d.ol=HE(16);d.c=a;e=new U7;e.eE=null;e.iU=0.0;e.r_=0.0;e.iB=0;e.j2=0;e.BH=AAq();e.e3=a;d.e9=e;a.cH=d;a.bn=0;a.cm=0;a.Hh=null;a.KJ=0;a.vg=0;a.lA=6000;a.tJ=100;a.oG=HE(16);P1(new JV,0.0);a.n=null;a.Ah=null;d=new QU;L();S2(d,Bcb.bk);d.KX=$rt_createFloatArray(256);d.Kj
=$rt_createFloatArray(256);d.JT=$rt_createFloatArray(256);d.HQ=$rt_createFloatArray(256);d.G9=0;a.uu=d;d=new Ta;S2(d,Bcc.bk);d.Hb=$rt_createFloatArray(256);d.JL=$rt_createFloatArray(256);d.H$=$rt_createFloatArray(256);d.HD=$rt_createFloatArray(256);a.yl=d;a.h7=0;a.oo=B(9);a.M=0;a.b$=0;a.Ii=0;a.Gx=b;a.H3=c;a.vA=0;d=new ZG;V9(d,B(201));d.Fd=1;VG(d);a.cn=b;a.cp=c;a.vA=0;Bb_=a;}
function AOJ(a,b){var c,$$je,$p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!(a.k instanceof Uu)){if(a.k!==null)a.k.pT();if(b===null&&a.i===null)b=ASV();else if(b===null&&a.a.b0<=0){b=new Tx;Fo(b);A_w=DG();try{$p=2;continue _;}catch($$e){$$je=Bh($$e);if($$je instanceof BA){c=$$je;}else{throw $$e;}}DA(c);}a.k=b;if(b===null){$p=1;continue _;}if(a.M){if(a.a!==null)Xp(a.a.eU);a.M=0;}c=G8(a.cn,a.cp);OX(b,a,c.fY,c.fR);a.vg=0;}return;case 1:AEh(a);if(I()){break _;}return;case 2:a:
{try{AEG();if(I()){break _;}break a;}catch($$e){$$je=Bh($$e);if($$je instanceof BA){c=$$je;}else{throw $$e;}}DA(c);}a.k=b;if(b!==null){if(a.M){if(a.a!==null)Xp(a.a.eU);a.M=0;}c=G8(a.cn,a.cp);OX(b,a,c.fY,c.fR);a.vg=0;return;}$p=1;continue _;default:F2();}}Dh().s(a,b,c,$p);}
function AG4(a){var b,c,d,e,f,g,h,i,j,k,$$je,$p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.h7=1;a.cn=Jz();a.cp=JK();a.rq=new Z0;Y(3553);A_Q.clearDepth((-1.0));Y(2929);GM(515);Y(3008);Bba=0.10000000149011612;A_Q.cullFace(1029);CB(5889);Cp();CB(5888);a.d=A_g();b=new Sy;c=a.d;b.pN=CZ();b.Ck=CZ();b.lP=KZ(1);d=My($rt_createByteArray(1048576));d.oO=Bb$;b.pA=d;b.r2=0;b.tw=0;b.xo=c;a.cd=
b;c=new SK;d=a.d;b=B(202);e=a.cd;$p=1;case 1:AIq(c,d,b,e);if(I()){break _;}a.ji=c;b=KZ(256);DM(b);H0(b,256);a.cw=A8V(a,a.cd);FI(0,0,a.cn,a.cp);if(a.Ah!==null&&a.ga!==null){c=XU();K2(c,8,8,8,$rt_createByteArray(512),$rt_createByteArray(512));$p=3;continue _;}if(a.i===null){b=ASV();$p=2;continue _;}b=new Kx;c=a.i;d=a.cd;b.cu=H(HQ,3);b.nn=new Dd;if(c!==null)b.kH=c;b.hl=d;f=0;while(f<3){b.cu.data[f]=BU();f=f+1|0;}a.bI=b;b=new Jd;JH(b);b.hr=BU();b.n5=new Dd;b.nZ=0;b.ci=a;a.pb=b;g=CF();f=0;if(!a.h7)return;if(a.i!==
null)HN(a.i);if(!a.D)EU(a.bm);else{h=a.bm.da;EU(a.bm);a.bm.da=h;}i=0;if(i<a.bm.id){a.bn=a.bn+1|0;$p=5;continue _;}Y(3553);HI(a.P,a.bm.da);b=a.cH;h=a.bm.da;$p=4;continue _;case 2:AOJ(a,b);if(I()){break _;}b=new Kx;c=a.i;d=a.cd;b.cu=H(HQ,3);b.nn=new Dd;if(c!==null)b.kH=c;b.hl=d;f=0;while(f<3){b.cu.data[f]=BU();f=f+1|0;}a.bI=b;b=new Jd;JH(b);b.hr=BU();b.n5=new Dd;b.nZ=0;b.ci=a;a.pb=b;g=CF();f=0;if(!a.h7)return;if(a.i!==null)HN(a.i);if(!a.D)EU(a.bm);else{h=a.bm.da;EU(a.bm);a.bm.da=h;}i=0;if(i<a.bm.id){a.bn=a.bn
+1|0;$p=5;continue _;}Y(3553);HI(a.P,a.bm.da);b=a.cH;h=a.bm.da;$p=4;continue _;case 3:AC$(a,c);if(I()){break _;}b=new Kx;c=a.i;d=a.cd;b.cu=H(HQ,3);b.nn=new Dd;if(c!==null)b.kH=c;b.hl=d;f=0;while(f<3){b.cu.data[f]=BU();f=f+1|0;}a.bI=b;b=new Jd;JH(b);b.hr=BU();b.n5=new Dd;b.nZ=0;b.ci=a;a.pb=b;g=CF();f=0;if(!a.h7)return;if(a.i!==null)HN(a.i);if(!a.D)EU(a.bm);else{h=a.bm.da;EU(a.bm);a.bm.da=h;}i=0;if(i<a.bm.id){a.bn=a.bn+1|0;$p=5;continue _;}Y(3553);HI(a.P,a.bm.da);b=a.cH;h=a.bm.da;$p=4;case 4:ALK(b,h);if(I()){break _;}if
(!(Jz()==a.cn&&JK()==a.cp)){a.cn=Jz();a.cp=JK();AGs(a,a.cn,a.cp);}if(a.d.k6){try{j=Long_fromInt(5);$p=6;continue _;}catch($$e){$$je=Bh($$e);if($$je instanceof Ds){d=$$je;}else{throw $$e;}}d.iK();}f=f+1|0;a.D=a.k!==null&&a.k.rp()?1:0;while(true){j=CF();k=Long_add(g,Long_fromInt(1000));if(Long_lt(j,k))break;b=new S;V(b);b=G(Bf(G(b,B(203)),f),B(204));AKo();a.oo=R(Bf(b,Bcd));Bcd=0;f=0;g=k;}if(!a.h7)return;if(a.i!==null)HN(a.i);if(!a.D)EU(a.bm);else{h=a.bm.da;EU(a.bm);a.bm.da=h;}i=0;if(i<a.bm.id){a.bn=a.bn+1|0;$p
=5;continue _;}Y(3553);HI(a.P,a.bm.da);b=a.cH;h=a.bm.da;continue _;case 5:AAl(a);if(I()){break _;}i=i+1|0;if(i<a.bm.id){a.bn=a.bn+1|0;continue _;}Y(3553);HI(a.P,a.bm.da);b=a.cH;h=a.bm.da;$p=4;continue _;case 6:a:{try{AI7(j);if(I()){break _;}break a;}catch($$e){$$je=Bh($$e);if($$je instanceof Ds){d=$$je;}else{throw $$e;}}d.iK();}f=f+1|0;a.D=a.k!==null&&a.k.rp()?1:0;while(true){j=CF();k=Long_add(g,Long_fromInt(1000));if(Long_lt(j,k))break;b=new S;V(b);b=G(Bf(G(b,B(203)),f),B(204));AKo();a.oo=R(Bf(b,Bcd));Bcd=
0;f=0;g=k;}if(!a.h7)return;if(a.i!==null)HN(a.i);if(!a.D)EU(a.bm);else{h=a.bm.da;EU(a.bm);a.bm.da=h;}i=0;if(i<a.bm.id){a.bn=a.bn+1|0;$p=5;continue _;}Y(3553);HI(a.P,a.bm.da);b=a.cH;h=a.bm.da;$p=4;continue _;default:F2();}}Dh().s(a,b,c,d,e,f,g,h,i,j,k,$p);}
function AEh(a){var b,$p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(KA()&&!a.M){a.M=1;RP(a.rq);b=null;$p=1;continue _;}return;case 1:AOJ(a,b);if(I()){break _;}a.b$=a.bn+10000|0;return;default:F2();}}Dh().s(a,b,$p);}
function AEn(a){var b,c,$p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.k!==null)return;b=new Yz;Fo(b);c=new FO;$p=1;case 1:AND(c);if(I()){break _;}$p=2;case 2:AOJ(a,b);if(I()){break _;}return;default:F2();}}Dh().s(a,b,c,$p);}
function AKu(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,$p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a:{if(!(!b&&a.cm>0)){if(!b)N0(a.cH.e9);b:{if(b==1){c=F0(a.a.F);if(c!==null){d=c.s;e=a.a;f=a.i;g=BZ(c).t2(c,f,e);if(g===c){if(g===null)break b;if(g.s==d)break b;}a.a.F.br.data[a.a.F.J]=g;AFn(a.cH.e9);if(!g.s)a.a.F.br.data[a.a.F.J]=null;}}}if
(a.n!==null){if(a.n.e7==1){if(b)break a;h=a.n.tN;i=a.a;j=i.F;k=R2(j,j.J);if(k===null)l=1;else{B2();l=Bce.data[k.bX].xb();}if(l>0){h.eX(i,l);c=F0(i.F);if(c!==null&&h instanceof F8){B2();Bce.data[c.bX].xi(c);if(c.s<=0)S$(i);}}return;}if(!a.n.e7){m=a.n.c6;d=a.n.c7;n=a.n.c8;o=a.n.c2;L();p=Bcf.data[O(a.i,m,d,n)];if(!b){AD$(a.i,m,d,n,a.n.c2);if(p===Bcg)break a;ACK(a.P,m,d,n);return;}k=F0(a.a.F);q=O(a.i,m,d,n);if(q>0){p=Bcf.data[q];h=a.i;f=a.a;$p=1;continue _;}if(k===null)return;b=k.s;f=a.i;if(BZ(k).lf(k,f,m,d,n,o))N0(a.cH.e9);if
(!k.s){a.a.F.br.data[a.a.F.J]=null;return;}if(k.s!=b)Qh(a.cH.e9);}}else if(!b&&!(a.P instanceof CK))a.cm=10;}}return;case 1:$z=p.r4(h,m,d,n,f);if(I()){break _;}b=$z;if(b)return;if(k===null)return;b=k.s;f=a.i;if(BZ(k).lf(k,f,m,d,n,o))N0(a.cH.e9);if(k.s){if(k.s!=b)Qh(a.cH.e9);return;}a.a.F.br.data[a.a.F.J]=null;return;default:F2();}}Dh().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,$p);}
function AGs(a,b,c){var d;a.cn=b;a.cp=c;if(a.k!==null){d=G8(b,c);c=d.fY;b=d.fR;OX(a.k,a,c,b);}}
function AAl(a){var b,c,d,e,f,g,h,i,j,$p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:Bb_=a;$p=1;case 1:a:{ABj(a);if(I()){break _;}if(a.P instanceof CK){b=0;while(true){if(b>=9)break a;a.a.F.br.data[b].s=64;b=b+1|0;}}}if(!a.M){ALp(a.rq);Lt(0);}ADx(a.pb);if(!a.D&&a.i!==null)ACl(a.P);c=3553;d=a.cd;e=B(205);$p=2;case 2:$z=AB2(d,e);if(I()){break _;}f=$z;Cj(c,f);if(a.k===null&&a.a!==null&&a.a.b0<=
0){e=null;$p=3;continue _;}b:{if(!(a.k!==null&&!a.k.n6)){while(true){if(!Dg()){if(a.cm>0)a.cm=a.cm-1|0;while(true){if(!CQ()){if(a.k===null){if(Cb(0)&&(a.bn-a.b$|0)>=a.bm.dy/4.0&&a.M){c=0;$p=11;continue _;}if(Cb(1)&&(a.bn-a.b$|0)>=a.bm.dy/4.0&&a.M){c=1;$p=14;continue _;}}f=a.k===null&&Cb(0)&&a.M?1:0;if(a.P.gU)break b;if(a.cm>0)break b;if(f&&a.n!==null&&!a.n.e7){g=a.n.c6;h=a.n.c7;i=a.n.c8;Ew(a.P,g,h,i,a.n.c2);EK(a.bI,g,h,i,a.n.c2);break b;}EL(a.P);break b;}e=a.a;c=Bi();f=C6();FD(e.eU,c,f);if(!C6())continue;if
(a.k!==null){e=a.k;$p=5;continue _;}if(Bi()==1)break;if(a.P instanceof CK&&a.M){if(Bi()==a.d.ha.bt)C_(a.a);if(Bi()==a.d.hi.bt){Fy(a.i,a.a.f|0,a.a.j|0,a.a.g|0,a.a.I);C_(a.a);}}if(Bi()==33&&Cn(6))a.d.ce=a.d.ce?0:1;if(Bi()==a.d.gw.bt&&!(a.P instanceof CK)){e=Gl(a.a.F);$p=15;continue _;}if(Bi()==a.d.g2.bt&&a.M)EZ(a.a,Fr(a.a.F,a.a.F.J,1),0);b=0;while(b<9){if(Bi()==(b+2|0))a.a.F.J=b;b=b+1|0;}if(Bi()!=a.d.g6.bt)continue;if(!a.M)continue;Fa(a.d,4,!Cn(42)&&!Cn(54)?1:(-1));}$p=8;continue _;}c:{b=Hb();if(b){d=a.a.F;if
(b>0)b=1;if(b<0)b=(-1);d.J=d.J-b|0;while(d.J<0){d.J=d.J+9|0;}while(true){if(d.J<9)break c;d.J=d.J-9|0;}}}if(a.k!==null){if(a.k===null)continue;else{e=a.k;$p=4;continue _;}}if(!a.M&&Cv())break;if(!C3()&&Cv()){c=0;$p=9;continue _;}if(C3()==1&&Cv()){c=1;$p=12;continue _;}if(C3()!=2)continue;if(!Cv())continue;if(a.n===null)continue;g=O(a.i,a.n.c6,a.n.c7,a.n.c8);L();if(g==Bch.b)g=Bci.b;if(g==Bcj.b)g=Bck.b;if(g==Bcg.b)g=Bcl.b;H$(a.a.F,g);}$p=6;continue _;}}if(a.k!==null)a.b$=a.bn+10000|0;if(a.k!==null){j=a.k;if(Dg())
{$p=7;continue _;}if(CQ()){$p=10;continue _;}if(a.k!==null){e=a.k;$p=13;continue _;}}if(a.i!==null){a.i.c1=a.d.dG;if(!a.D)DQ(a.cH);if(!a.D)DX(a.cw);if(!a.D)DI(a.i);if(!a.D)DL(a.i);if(!a.D)DN(a.i,a.a.f|0,a.a.j|0,a.a.g|0);if(!a.D)DS(a.bI);}return;case 3:AOJ(a,e);if(I()){break _;}d:{if(!(a.k!==null&&!a.k.n6)){while(true){if(!Dg()){if(a.cm>0)a.cm=a.cm-1|0;while(true){if(!CQ()){if(a.k===null){if(Cb(0)&&(a.bn-a.b$|0)>=a.bm.dy/4.0&&a.M){c=0;$p=11;continue _;}if(Cb(1)&&(a.bn-a.b$|0)>=a.bm.dy/4.0&&a.M){c=1;$p=14;continue _;}}f
=a.k===null&&Cb(0)&&a.M?1:0;if(a.P.gU)break d;if(a.cm>0)break d;if(f&&a.n!==null&&!a.n.e7){g=a.n.c6;h=a.n.c7;i=a.n.c8;Ew(a.P,g,h,i,a.n.c2);EK(a.bI,g,h,i,a.n.c2);break d;}EL(a.P);break d;}e=a.a;c=Bi();f=C6();FD(e.eU,c,f);if(!C6())continue;if(a.k!==null){e=a.k;$p=5;continue _;}if(Bi()==1)break;if(a.P instanceof CK&&a.M){if(Bi()==a.d.ha.bt)C_(a.a);if(Bi()==a.d.hi.bt){Fy(a.i,a.a.f|0,a.a.j|0,a.a.g|0,a.a.I);C_(a.a);}}if(Bi()==33&&Cn(6))a.d.ce=a.d.ce?0:1;if(Bi()==a.d.gw.bt&&!(a.P instanceof CK)){e=Gl(a.a.F);$p=15;continue _;}if
(Bi()==a.d.g2.bt&&a.M)EZ(a.a,Fr(a.a.F,a.a.F.J,1),0);b=0;while(b<9){if(Bi()==(b+2|0))a.a.F.J=b;b=b+1|0;}if(Bi()!=a.d.g6.bt)continue;if(!a.M)continue;Fa(a.d,4,!Cn(42)&&!Cn(54)?1:(-1));}$p=8;continue _;}e:{b=Hb();if(b){d=a.a.F;if(b>0)b=1;if(b<0)b=(-1);d.J=d.J-b|0;while(d.J<0){d.J=d.J+9|0;}while(true){if(d.J<9)break e;d.J=d.J-9|0;}}}if(a.k!==null){if(a.k===null)continue;else{e=a.k;$p=4;continue _;}}if(!a.M&&Cv())break;if(!C3()&&Cv()){c=0;$p=9;continue _;}if(C3()==1&&Cv()){c=1;$p=12;continue _;}if(C3()!=2)continue;if
(!Cv())continue;if(a.n===null)continue;g=O(a.i,a.n.c6,a.n.c7,a.n.c8);L();if(g==Bch.b)g=Bci.b;if(g==Bcj.b)g=Bck.b;if(g==Bcg.b)g=Bcl.b;H$(a.a.F,g);}$p=6;continue _;}}if(a.k!==null)a.b$=a.bn+10000|0;if(a.k!==null){j=a.k;if(Dg()){$p=7;continue _;}if(CQ()){$p=10;continue _;}if(a.k!==null){e=a.k;$p=13;continue _;}}if(a.i!==null){a.i.c1=a.d.dG;if(!a.D)DQ(a.cH);if(!a.D)DX(a.cw);if(!a.D)DI(a.i);if(!a.D)DL(a.i);if(!a.D)DN(a.i,a.a.f|0,a.a.j|0,a.a.g|0);if(!a.D)DS(a.bI);}return;case 4:ALy(e);if(I()){break _;}while(true)
{if(!Dg()){if(a.cm>0)a.cm=a.cm-1|0;while(true){if(!CQ()){if(a.k===null){if(Cb(0)&&(a.bn-a.b$|0)>=a.bm.dy/4.0&&a.M){c=0;$p=11;continue _;}if(Cb(1)&&(a.bn-a.b$|0)>=a.bm.dy/4.0&&a.M){c=1;$p=14;continue _;}}f=a.k===null&&Cb(0)&&a.M?1:0;if(!a.P.gU&&a.cm<=0){if(f&&a.n!==null&&!a.n.e7){g=a.n.c6;h=a.n.c7;i=a.n.c8;Ew(a.P,g,h,i,a.n.c2);EK(a.bI,g,h,i,a.n.c2);}else EL(a.P);}if(a.k!==null)a.b$=a.bn+10000|0;if(a.k!==null){j=a.k;if(Dg()){$p=7;continue _;}if(CQ()){$p=10;continue _;}if(a.k!==null){e=a.k;$p=13;continue _;}}if
(a.i!==null){a.i.c1=a.d.dG;if(!a.D)DQ(a.cH);if(!a.D)DX(a.cw);if(!a.D)DI(a.i);if(!a.D)DL(a.i);if(!a.D)DN(a.i,a.a.f|0,a.a.j|0,a.a.g|0);if(!a.D)DS(a.bI);}return;}e=a.a;c=Bi();f=C6();FD(e.eU,c,f);if(!C6())continue;if(a.k!==null){e=a.k;$p=5;continue _;}if(Bi()==1)break;if(a.P instanceof CK&&a.M){if(Bi()==a.d.ha.bt)C_(a.a);if(Bi()==a.d.hi.bt){Fy(a.i,a.a.f|0,a.a.j|0,a.a.g|0,a.a.I);C_(a.a);}}if(Bi()==33&&Cn(6))a.d.ce=a.d.ce?0:1;if(Bi()==a.d.gw.bt&&!(a.P instanceof CK)){e=Gl(a.a.F);$p=15;continue _;}if(Bi()==a.d.g2.bt
&&a.M)EZ(a.a,Fr(a.a.F,a.a.F.J,1),0);b=0;while(b<9){if(Bi()==(b+2|0))a.a.F.J=b;b=b+1|0;}if(Bi()!=a.d.g6.bt)continue;if(!a.M)continue;Fa(a.d,4,!Cn(42)&&!Cn(54)?1:(-1));}$p=8;continue _;}f:{b=Hb();if(b){d=a.a.F;if(b>0)b=1;if(b<0)b=(-1);d.J=d.J-b|0;while(d.J<0){d.J=d.J+9|0;}while(true){if(d.J<9)break f;d.J=d.J-9|0;}}}if(a.k!==null){if(a.k===null)continue;else{e=a.k;continue _;}}if(!a.M&&Cv())break;if(!C3()&&Cv()){c=0;$p=9;continue _;}if(C3()==1&&Cv()){c=1;$p=12;continue _;}if(C3()!=2)continue;if(!Cv())continue;if
(a.n===null)continue;g=O(a.i,a.n.c6,a.n.c7,a.n.c8);L();if(g==Bch.b)g=Bci.b;if(g==Bcj.b)g=Bck.b;if(g==Bcg.b)g=Bcl.b;H$(a.a.F,g);}$p=6;continue _;case 5:AEp(e);if(I()){break _;}while(true){b=0;while(b<9){if(Bi()==(b+2|0))a.a.F.J=b;b=b+1|0;}if(Bi()==a.d.g6.bt&&a.M)Fa(a.d,4,!Cn(42)&&!Cn(54)?1:(-1));while(true){if(!CQ()){if(a.k===null){if(Cb(0)&&(a.bn-a.b$|0)>=a.bm.dy/4.0&&a.M){c=0;$p=11;continue _;}if(Cb(1)&&(a.bn-a.b$|0)>=a.bm.dy/4.0&&a.M){c=1;$p=14;continue _;}}f=a.k===null&&Cb(0)&&a.M?1:0;if(!a.P.gU&&a.cm<=0)
{if(f&&a.n!==null&&!a.n.e7){g=a.n.c6;h=a.n.c7;i=a.n.c8;Ew(a.P,g,h,i,a.n.c2);EK(a.bI,g,h,i,a.n.c2);}else EL(a.P);}if(a.k!==null)a.b$=a.bn+10000|0;if(a.k!==null){j=a.k;if(Dg()){$p=7;continue _;}if(CQ()){$p=10;continue _;}if(a.k!==null){e=a.k;$p=13;continue _;}}if(a.i!==null){a.i.c1=a.d.dG;if(!a.D)DQ(a.cH);if(!a.D)DX(a.cw);if(!a.D)DI(a.i);if(!a.D)DL(a.i);if(!a.D)DN(a.i,a.a.f|0,a.a.j|0,a.a.g|0);if(!a.D)DS(a.bI);}return;}e=a.a;c=Bi();f=C6();FD(e.eU,c,f);if(!C6())continue;else break;}if(a.k!==null){e=a.k;continue _;}if
(Bi()==1)break;if(a.P instanceof CK&&a.M){if(Bi()==a.d.ha.bt)C_(a.a);if(Bi()==a.d.hi.bt){Fy(a.i,a.a.f|0,a.a.j|0,a.a.g|0,a.a.I);C_(a.a);}}if(Bi()==33&&Cn(6))a.d.ce=a.d.ce?0:1;if(Bi()==a.d.gw.bt&&!(a.P instanceof CK)){e=Gl(a.a.F);$p=15;continue _;}if(Bi()!=a.d.g2.bt)continue;if(!a.M)continue;EZ(a.a,Fr(a.a.F,a.a.F.J,1),0);}$p=8;continue _;case 6:AEh(a);if(I()){break _;}while(true){if(!Dg()){if(a.cm>0)a.cm=a.cm-1|0;while(true){if(!CQ()){if(a.k===null){if(Cb(0)&&(a.bn-a.b$|0)>=a.bm.dy/4.0&&a.M){c=0;$p=11;continue _;}if
(Cb(1)&&(a.bn-a.b$|0)>=a.bm.dy/4.0&&a.M){c=1;$p=14;continue _;}}f=a.k===null&&Cb(0)&&a.M?1:0;if(!a.P.gU&&a.cm<=0){if(f&&a.n!==null&&!a.n.e7){g=a.n.c6;h=a.n.c7;i=a.n.c8;Ew(a.P,g,h,i,a.n.c2);EK(a.bI,g,h,i,a.n.c2);}else EL(a.P);}if(a.k!==null)a.b$=a.bn+10000|0;if(a.k!==null){j=a.k;if(Dg()){$p=7;continue _;}if(CQ()){$p=10;continue _;}if(a.k!==null){e=a.k;$p=13;continue _;}}if(a.i!==null){a.i.c1=a.d.dG;if(!a.D)DQ(a.cH);if(!a.D)DX(a.cw);if(!a.D)DI(a.i);if(!a.D)DL(a.i);if(!a.D)DN(a.i,a.a.f|0,a.a.j|0,a.a.g|0);if(!a.D)DS(a.bI);}return;}e
=a.a;c=Bi();f=C6();FD(e.eU,c,f);if(!C6())continue;if(a.k!==null){e=a.k;$p=5;continue _;}if(Bi()==1)break;if(a.P instanceof CK&&a.M){if(Bi()==a.d.ha.bt)C_(a.a);if(Bi()==a.d.hi.bt){Fy(a.i,a.a.f|0,a.a.j|0,a.a.g|0,a.a.I);C_(a.a);}}if(Bi()==33&&Cn(6))a.d.ce=a.d.ce?0:1;if(Bi()==a.d.gw.bt&&!(a.P instanceof CK)){e=Gl(a.a.F);$p=15;continue _;}if(Bi()==a.d.g2.bt&&a.M)EZ(a.a,Fr(a.a.F,a.a.F.J,1),0);b=0;while(b<9){if(Bi()==(b+2|0))a.a.F.J=b;b=b+1|0;}if(Bi()!=a.d.g6.bt)continue;if(!a.M)continue;Fa(a.d,4,!Cn(42)&&!Cn(54)?
1:(-1));}$p=8;continue _;}f:{b=Hb();if(b){d=a.a.F;if(b>0)b=1;if(b<0)b=(-1);d.J=d.J-b|0;while(d.J<0){d.J=d.J+9|0;}while(true){if(d.J<9)break f;d.J=d.J-9|0;}}}if(a.k!==null){if(a.k===null)continue;else{e=a.k;$p=4;continue _;}}if(!a.M&&Cv())break;if(!C3()&&Cv()){c=0;$p=9;continue _;}if(C3()==1&&Cv()){c=1;$p=12;continue _;}if(C3()!=2)continue;if(!Cv())continue;if(a.n===null)continue;g=O(a.i,a.n.c6,a.n.c7,a.n.c8);L();if(g==Bch.b)g=Bci.b;if(g==Bcj.b)g=Bck.b;if(g==Bcg.b)g=Bcl.b;H$(a.a.F,g);}continue _;case 7:ALy(j);if
(I()){break _;}if(Dg()){continue _;}if(CQ()){$p=10;continue _;}if(a.k===null){if(a.i!==null){a.i.c1=a.d.dG;if(!a.D)DQ(a.cH);if(!a.D)DX(a.cw);if(!a.D)DI(a.i);if(!a.D)DL(a.i);if(!a.D)DN(a.i,a.a.f|0,a.a.j|0,a.a.g|0);if(!a.D)DS(a.bI);}return;}e=a.k;$p=13;continue _;case 8:AEn(a);if(I()){break _;}while(true){if(a.P instanceof CK&&a.M){if(Bi()==a.d.ha.bt)C_(a.a);if(Bi()==a.d.hi.bt){Fy(a.i,a.a.f|0,a.a.j|0,a.a.g|0,a.a.I);C_(a.a);}}if(Bi()==33&&Cn(6))a.d.ce=a.d.ce?0:1;if(Bi()==a.d.gw.bt&&!(a.P instanceof CK)){e=Gl(a.a.F);$p
=15;continue _;}if(Bi()==a.d.g2.bt&&a.M)EZ(a.a,Fr(a.a.F,a.a.F.J,1),0);b=0;while(b<9){if(Bi()==(b+2|0))a.a.F.J=b;b=b+1|0;}if(Bi()==a.d.g6.bt&&a.M)Fa(a.d,4,!Cn(42)&&!Cn(54)?1:(-1));while(true){if(!CQ()){if(a.k===null){if(Cb(0)&&(a.bn-a.b$|0)>=a.bm.dy/4.0&&a.M){c=0;$p=11;continue _;}if(Cb(1)&&(a.bn-a.b$|0)>=a.bm.dy/4.0&&a.M){c=1;$p=14;continue _;}}f=a.k===null&&Cb(0)&&a.M?1:0;if(!a.P.gU&&a.cm<=0){if(f&&a.n!==null&&!a.n.e7){g=a.n.c6;h=a.n.c7;i=a.n.c8;Ew(a.P,g,h,i,a.n.c2);EK(a.bI,g,h,i,a.n.c2);}else EL(a.P);}if(a.k
!==null)a.b$=a.bn+10000|0;if(a.k!==null){j=a.k;if(Dg()){$p=7;continue _;}if(CQ()){$p=10;continue _;}if(a.k!==null){e=a.k;$p=13;continue _;}}if(a.i!==null){a.i.c1=a.d.dG;if(!a.D)DQ(a.cH);if(!a.D)DX(a.cw);if(!a.D)DI(a.i);if(!a.D)DL(a.i);if(!a.D)DN(a.i,a.a.f|0,a.a.j|0,a.a.g|0);if(!a.D)DS(a.bI);}return;}e=a.a;c=Bi();f=C6();FD(e.eU,c,f);if(!C6())continue;else break;}if(a.k!==null){e=a.k;$p=5;continue _;}if(Bi()!=1)continue;else break;}continue _;case 9:AKu(a,c);if(I()){break _;}a.b$=a.bn;while(true){if(C3()==1&&
Cv()){c=1;$p=12;continue _;}if(C3()==2&&Cv()&&a.n!==null){g=O(a.i,a.n.c6,a.n.c7,a.n.c8);L();if(g==Bch.b)g=Bci.b;if(g==Bcj.b)g=Bck.b;if(g==Bcg.b)g=Bcl.b;H$(a.a.F,g);}while(true){if(!Dg()){if(a.cm>0)a.cm=a.cm-1|0;while(true){if(!CQ()){if(a.k===null){if(Cb(0)&&(a.bn-a.b$|0)>=a.bm.dy/4.0&&a.M){c=0;$p=11;continue _;}if(Cb(1)&&(a.bn-a.b$|0)>=a.bm.dy/4.0&&a.M){c=1;$p=14;continue _;}}f=a.k===null&&Cb(0)&&a.M?1:0;if(!a.P.gU&&a.cm<=0){if(f&&a.n!==null&&!a.n.e7){g=a.n.c6;h=a.n.c7;i=a.n.c8;Ew(a.P,g,h,i,a.n.c2);EK(a.bI,
g,h,i,a.n.c2);}else EL(a.P);}if(a.k!==null)a.b$=a.bn+10000|0;if(a.k!==null){j=a.k;if(Dg()){$p=7;continue _;}if(CQ()){$p=10;continue _;}if(a.k!==null){e=a.k;$p=13;continue _;}}if(a.i!==null){a.i.c1=a.d.dG;if(!a.D)DQ(a.cH);if(!a.D)DX(a.cw);if(!a.D)DI(a.i);if(!a.D)DL(a.i);if(!a.D)DN(a.i,a.a.f|0,a.a.j|0,a.a.g|0);if(!a.D)DS(a.bI);}return;}e=a.a;c=Bi();f=C6();FD(e.eU,c,f);if(!C6())continue;if(a.k!==null){e=a.k;$p=5;continue _;}if(Bi()==1)break;if(a.P instanceof CK&&a.M){if(Bi()==a.d.ha.bt)C_(a.a);if(Bi()==a.d.hi.bt)
{Fy(a.i,a.a.f|0,a.a.j|0,a.a.g|0,a.a.I);C_(a.a);}}if(Bi()==33&&Cn(6))a.d.ce=a.d.ce?0:1;if(Bi()==a.d.gw.bt&&!(a.P instanceof CK)){e=Gl(a.a.F);$p=15;continue _;}if(Bi()==a.d.g2.bt&&a.M)EZ(a.a,Fr(a.a.F,a.a.F.J,1),0);b=0;while(b<9){if(Bi()==(b+2|0))a.a.F.J=b;b=b+1|0;}if(Bi()!=a.d.g6.bt)continue;if(!a.M)continue;Fa(a.d,4,!Cn(42)&&!Cn(54)?1:(-1));}$p=8;continue _;}g:{b=Hb();if(b){d=a.a.F;if(b>0)b=1;if(b<0)b=(-1);d.J=d.J-b|0;while(d.J<0){d.J=d.J+9|0;}while(true){if(d.J<9)break g;d.J=d.J-9|0;}}}if(a.k===null)break;if
(a.k===null)continue;else{e=a.k;$p=4;continue _;}}if(!a.M&&Cv())break;if(C3())continue;if(!Cv())continue;else{c=0;continue _;}}$p=6;continue _;case 10:AEp(j);if(I()){break _;}if(CQ()){continue _;}if(a.k===null){if(a.i!==null){a.i.c1=a.d.dG;if(!a.D)DQ(a.cH);if(!a.D)DX(a.cw);if(!a.D)DI(a.i);if(!a.D)DL(a.i);if(!a.D)DN(a.i,a.a.f|0,a.a.j|0,a.a.g|0);if(!a.D)DS(a.bI);}return;}e=a.k;$p=13;continue _;case 11:AKu(a,c);if(I()){break _;}a.b$=a.bn;if(Cb(1)&&(a.bn-a.b$|0)>=a.bm.dy/4.0&&a.M){c=1;$p=14;continue _;}f=a.k===
null&&Cb(0)&&a.M?1:0;if(!a.P.gU&&a.cm<=0){if(f&&a.n!==null&&!a.n.e7){g=a.n.c6;h=a.n.c7;i=a.n.c8;Ew(a.P,g,h,i,a.n.c2);EK(a.bI,g,h,i,a.n.c2);}else EL(a.P);}if(a.k!==null)a.b$=a.bn+10000|0;if(a.k!==null){j=a.k;if(Dg()){$p=7;continue _;}if(CQ()){$p=10;continue _;}if(a.k!==null){e=a.k;$p=13;continue _;}}if(a.i!==null){a.i.c1=a.d.dG;if(!a.D)DQ(a.cH);if(!a.D)DX(a.cw);if(!a.D)DI(a.i);if(!a.D)DL(a.i);if(!a.D)DN(a.i,a.a.f|0,a.a.j|0,a.a.g|0);if(!a.D)DS(a.bI);}return;case 12:AKu(a,c);if(I()){break _;}a.b$=a.bn;while(true)
{if(C3()==2&&Cv()&&a.n!==null){g=O(a.i,a.n.c6,a.n.c7,a.n.c8);L();if(g==Bch.b)g=Bci.b;if(g==Bcj.b)g=Bck.b;if(g==Bcg.b)g=Bcl.b;H$(a.a.F,g);}while(true){if(!Dg()){if(a.cm>0)a.cm=a.cm-1|0;while(true){if(!CQ()){if(a.k===null){if(Cb(0)&&(a.bn-a.b$|0)>=a.bm.dy/4.0&&a.M){c=0;$p=11;continue _;}if(Cb(1)&&(a.bn-a.b$|0)>=a.bm.dy/4.0&&a.M){c=1;$p=14;continue _;}}f=a.k===null&&Cb(0)&&a.M?1:0;if(!a.P.gU&&a.cm<=0){if(f&&a.n!==null&&!a.n.e7){g=a.n.c6;h=a.n.c7;i=a.n.c8;Ew(a.P,g,h,i,a.n.c2);EK(a.bI,g,h,i,a.n.c2);}else EL(a.P);}if
(a.k!==null)a.b$=a.bn+10000|0;if(a.k!==null){j=a.k;if(Dg()){$p=7;continue _;}if(CQ()){$p=10;continue _;}if(a.k!==null){e=a.k;$p=13;continue _;}}if(a.i!==null){a.i.c1=a.d.dG;if(!a.D)DQ(a.cH);if(!a.D)DX(a.cw);if(!a.D)DI(a.i);if(!a.D)DL(a.i);if(!a.D)DN(a.i,a.a.f|0,a.a.j|0,a.a.g|0);if(!a.D)DS(a.bI);}return;}e=a.a;c=Bi();f=C6();FD(e.eU,c,f);if(!C6())continue;if(a.k!==null){e=a.k;$p=5;continue _;}if(Bi()==1)break;if(a.P instanceof CK&&a.M){if(Bi()==a.d.ha.bt)C_(a.a);if(Bi()==a.d.hi.bt){Fy(a.i,a.a.f|0,a.a.j|0,a.a.g
|0,a.a.I);C_(a.a);}}if(Bi()==33&&Cn(6))a.d.ce=a.d.ce?0:1;if(Bi()==a.d.gw.bt&&!(a.P instanceof CK)){e=Gl(a.a.F);$p=15;continue _;}if(Bi()==a.d.g2.bt&&a.M)EZ(a.a,Fr(a.a.F,a.a.F.J,1),0);b=0;while(b<9){if(Bi()==(b+2|0))a.a.F.J=b;b=b+1|0;}if(Bi()!=a.d.g6.bt)continue;if(!a.M)continue;Fa(a.d,4,!Cn(42)&&!Cn(54)?1:(-1));}$p=8;continue _;}h:{b=Hb();if(b){d=a.a.F;if(b>0)b=1;if(b<0)b=(-1);d.J=d.J-b|0;while(d.J<0){d.J=d.J+9|0;}while(true){if(d.J<9)break h;d.J=d.J-9|0;}}}if(a.k===null)break;if(a.k===null)continue;else{e=
a.k;$p=4;continue _;}}if(!a.M&&Cv())break;if(!C3()&&Cv()){c=0;$p=9;continue _;}if(C3()!=1)continue;if(!Cv())continue;else{c=1;continue _;}}$p=6;continue _;case 13:e.vY();if(I()){break _;}if(a.i!==null){a.i.c1=a.d.dG;if(!a.D)DQ(a.cH);if(!a.D)DX(a.cw);if(!a.D)DI(a.i);if(!a.D)DL(a.i);if(!a.D)DN(a.i,a.a.f|0,a.a.j|0,a.a.g|0);if(!a.D)DS(a.bI);}return;case 14:AKu(a,c);if(I()){break _;}a.b$=a.bn;f=a.k===null&&Cb(0)&&a.M?1:0;if(!a.P.gU&&a.cm<=0){if(f&&a.n!==null&&!a.n.e7){g=a.n.c6;h=a.n.c7;i=a.n.c8;Ew(a.P,g,h,i,a.n.c2);EK(a.bI,
g,h,i,a.n.c2);}else EL(a.P);}if(a.k!==null)a.b$=a.bn+10000|0;if(a.k!==null){j=a.k;if(Dg()){$p=7;continue _;}if(CQ()){$p=10;continue _;}if(a.k!==null){e=a.k;$p=13;continue _;}}if(a.i!==null){a.i.c1=a.d.dG;if(!a.D)DQ(a.cH);if(!a.D)DX(a.cw);if(!a.D)DI(a.i);if(!a.D)DL(a.i);if(!a.D)DN(a.i,a.a.f|0,a.a.j|0,a.a.g|0);if(!a.D)DS(a.bI);}return;case 15:AOJ(a,e);if(I()){break _;}while(true){if(Bi()==a.d.g2.bt&&a.M)EZ(a.a,Fr(a.a.F,a.a.F.J,1),0);b=0;while(b<9){if(Bi()==(b+2|0))a.a.F.J=b;b=b+1|0;}if(Bi()==a.d.g6.bt&&a.M)Fa(a.d,
4,!Cn(42)&&!Cn(54)?1:(-1));while(true){if(!CQ()){if(a.k===null){if(Cb(0)&&(a.bn-a.b$|0)>=a.bm.dy/4.0&&a.M){c=0;$p=11;continue _;}if(Cb(1)&&(a.bn-a.b$|0)>=a.bm.dy/4.0&&a.M){c=1;$p=14;continue _;}}f=a.k===null&&Cb(0)&&a.M?1:0;if(!a.P.gU&&a.cm<=0){if(f&&a.n!==null&&!a.n.e7){g=a.n.c6;h=a.n.c7;i=a.n.c8;Ew(a.P,g,h,i,a.n.c2);EK(a.bI,g,h,i,a.n.c2);}else EL(a.P);}if(a.k!==null)a.b$=a.bn+10000|0;if(a.k!==null){j=a.k;if(Dg()){$p=7;continue _;}if(CQ()){$p=10;continue _;}if(a.k!==null){e=a.k;$p=13;continue _;}}if(a.i!==
null){a.i.c1=a.d.dG;if(!a.D)DQ(a.cH);if(!a.D)DX(a.cw);if(!a.D)DI(a.i);if(!a.D)DL(a.i);if(!a.D)DN(a.i,a.a.f|0,a.a.j|0,a.a.g|0);if(!a.D)DS(a.bI);}return;}e=a.a;c=Bi();f=C6();FD(e.eU,c,f);if(!C6())continue;else break;}if(a.k!==null){e=a.k;$p=5;continue _;}if(Bi()==1)break;if(a.P instanceof CK&&a.M){if(Bi()==a.d.ha.bt)C_(a.a);if(Bi()==a.d.hi.bt){Fy(a.i,a.a.f|0,a.a.j|0,a.a.g|0,a.a.I);C_(a.a);}}if(Bi()==33&&Cn(6))a.d.ce=a.d.ce?0:1;if(Bi()!=a.d.gw.bt)continue;if(a.P instanceof CK)continue;else{e=Gl(a.a.F);continue _;}}$p
=8;continue _;default:F2();}}Dh().s(a,b,c,d,e,f,g,h,i,j,$p);}
function ABj(a){var b,$p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.i===null){a.lA=a.bn+6000|0;a.tJ=a.bn+100|0;}if(a.bn>=a.tJ&&a.i!==null&&a.k instanceof Eu){a.tJ=a.bn+100|0;b=new FO;$p=2;continue _;}if(a.bn<a.lA)return;b=new FO;$p=1;case 1:AND(b);if(I()){break _;}a.lA=a.bn+6000|0;return;case 2:AND(b);if(I()){break _;}if(a.bn<a.lA)return;b=new FO;$p=1;continue _;default:F2();}}Dh().s(a,b,$p);}
function AMa(a,b,c,d,e){var f,g,h,i,j,$p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=null;$p=1;case 1:AC$(a,f);if(I()){break _;}g=a.ga===null?B(206):a.ga.sM;h=new R6;i=a.f$;h.z=new Dd;h.qp=0;h.li=0;h.qa=0;h.ED=0.0;h.ee=$rt_createIntArray(1048576);h.c4=i;h.qp=d!=1?0:1;h.li=d!=2?0:1;h.qa=d!=3?0:1;h.eT=e;b=128<<b;j=64;if(c==1){c=b/2|0;b=b<<1;}else if(c!=2)c=b;else{b=b/2|0;j=256;c=b;}$p=2;case 2:$z
=AG0(h,g,c,b,j);if(I()){break _;}f=$z;$p=3;case 3:AC$(a,f);if(I()){break _;}return;default:F2();}}Dh().s(a,b,c,d,e,f,g,h,i,j,$p);}
function AC$(a,b){var c,d,e,f,g,$p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.i=b;if(a.i!==null)AFz(a.i);if(b===null){if(a.a!==null&&A_w!==null)Rw(a.a,A_w);return;}TG(b);a.P=A0x(a);ALo(a.P,b);a.a=AFA(b,D(Mk));b.cU=a.a;if(a.a===null){c=new Mk;d=a.ga;Rh(c,b);e=new Ti;e.br=H(C9,36);e.c$=H(C9,4);e.J=0;e.Gl=c;c.F=e;c.Jd=0;c.rR=0;c.xq=0;b.cU=c;AIy(b,c);Jy(c,b.g4,b.gY,b.hv,0.0,0.0);c.dO=1.6200000047683716;c.b0=20;c.rt=20;c.hx
=B(207);c.mH=a;if(d!==null){e=new S;V(e);c.JE=R(G(G(G(e,B(208)),d.sM),B(209)));}a.a=c;C_(a.a);De(b,a.a);b.cU=a.a;}if(a.a!==null){c=a.a;e=new Y4;d=a.d;e.lt=0.0;e.lB=0.0;e.vZ=0;e.kz=$rt_createBooleanArray(10);e.mJ=d;c.eU=e;}if(a.cw!==null)ACM(a.cw,b);if(a.bI!==null)AKU(a.bI,b);a.uu.n7=0;a.yl.n7=0;c=a.cd;e=B(210);$p=1;case 1:$z=AB2(c,e);if(I()){break _;}f=$z;g=b.jo;L();if(g!=Bcb.b)a.yl.n7=f;else a.uu.n7=f;if(a.a!==null&&A_w!==null)Rw(a.a,A_w);return;default:F2();}}Dh().s(a,b,c,d,e,f,g,$p);}
function IQ(a,b){var c;if(!b){Bb(2896);Bb(16384);}else{Y(2896);Y(16384);Y(2903);c=J_(BF(0.0,(-1.0),0.5));Ln(a,c.U,c.R,c.S,0.0);Ln(a,0.30000001192092896,0.30000001192092896,0.30000001192092896,1.0);Ln(a,0.0,0.0,0.0,1.0);Ln(a,0.699999988079071,0.699999988079071,0.699999988079071,1.0);}}
function Ln(a,b,c,d,e){DM(a.oG);Ch(Ch(Ch(Ch(a.oG,b),c),d),e);Ec(a.oG);return a.oG;}
function ADj(){Bca=0;}
function Mq(){var a=this;C.call(a);a.sM=null;a.Is=null;}
var Bcm=null;function A$v(){A$v=Bl(Mq);A7$();}
function A7$(){var b;b=BU();Bcm=b;L();M(b,Bcl);M(Bcm,Bcn);M(Bcm,Bco);M(Bcm,Bci);M(Bcm,Bcp);M(Bcm,Bcq);M(Bcm,Bcr);M(Bcm,Bcs);M(Bcm,Bck);M(Bcm,Bct);M(Bcm,Bcu);M(Bcm,Bcv);M(Bcm,Bcw);M(Bcm,Bcx);M(Bcm,Bcy);M(Bcm,Bcz);M(Bcm,BcA);M(Bcm,BcB);M(Bcm,BcC);M(Bcm,BcD);M(Bcm,BcE);M(Bcm,BcF);M(Bcm,BcG);M(Bcm,BcH);M(Bcm,BcI);M(Bcm,BcJ);M(Bcm,BcK);M(Bcm,BcL);M(Bcm,BcM);M(Bcm,BcN);M(Bcm,BcO);M(Bcm,BcP);M(Bcm,BcQ);M(Bcm,BcR);M(Bcm,BcS);M(Bcm,BcT);M(Bcm,BcU);M(Bcm,BcV);M(Bcm,BcW);M(Bcm,BcX);M(Bcm,BcY);M(Bcm,BcZ);M(Bcm,Bc0);ADg(Dr(),
Bcm.q);}
function Ut(){}
function Jq(){}
function FA(){C.call(this);}
function Ko(a){return a.eW()?0:1;}
function HW(a,b){var c,d,e,f,g;c=b.data;d=a.q;e=c.length;if(e<d)b=AFg(Ly(B5(b)),d);else while(d<e){c[d]=null;d=d+1|0;}e=0;f=Hq(a);while(JO(f)){c=b.data;g=e+1|0;c[e]=Il(f);e=g;}return b;}
function Yt(a,b){var c,d;c=0;d=b.gy();while(d.jr()){if(!M(a,d.hm()))continue;c=1;}return c;}
function HQ(){}
function Fu(){FA.call(this);this.d2=0;}
function HF(a,b){a.wI(a.eW(),b);return 1;}
function Hq(a){var b;b=new VS;b.pF=a;b.FH=b.pF.d2;b.Ee=b.pF.eW();b.ES=(-1);return b;}
function A62(a,b,c){c=new Hs;Z(c);J(c);}
function ACV(a,b){var c,d,e;c=a.q;d=0;a:{while(d<c){b:{e=Bc(a,d);if(b!==null){if(!b.cI(e))break b;else break a;}if(e===null)break a;}d=d+1|0;}return (-1);}return d;}
function AUW(a,b){var c,d;if(!Jb(b,HQ))return 0;c=b;if(a.eW()!=c.eW())return 0;d=0;while(d<c.eW()){if(!LH(a.mI(d),c.mI(d)))return 0;d=d+1|0;}return 1;}
function Nz(){Fu.call(this);}
function AV4(a,b,c){if(b>=0){AC3(YJ(a,b),c);return;}c=new BE;Z(c);J(c);}
function VE(a,b){var c,d;if(b>=0){c=YJ(a,b);d=ABg(c);AGR(c);return d;}c=new BE;Z(c);J(c);}
function L0(){}
function ZW(){}
function AFd(){var a=this;Nz.call(a);a.s4=null;a.qI=null;a.jc=0;}
function SR(){var a=new AFd();AYY(a);return a;}
function AYY(a){return;}
function A5Z(a){return a.jc;}
function PK(a){a.s4=null;a.qI=null;a.jc=0;a.d2=a.d2+1|0;}
function YJ(a,b){var c,d,e;if(b<0){c=new BE;Z(c);J(c);}if(b<=(a.jc/2|0)){d=a.s4;e=0;while(e<b){d=d.hc;e=e+1|0;}return A0L(a,d,d===null?null:d.iD,b);}if(b>a.jc){c=new BE;Z(c);J(c);}c=a.qI;e=b;while(e<a.jc){c=c.iD;e=e+1|0;}return A0L(a,c===null?null:c.hc,c,b);}
function AK8(){C.call(this);}
function Fp(){C.call(this);}
function AC_(){Fp.call(this);}
function AI$(){Fp.call(this);}
function DF(){}
function L5(){C.call(this);}
function Mo(){L5.call(this);this.I1=null;}
function AHe(){var a=this;Mo.call(a);a.An=null;a.G_=null;a.Aq=null;a.xB=null;}
function A$J(a){var b=new AHe();A4t(b,a);return b;}
function A4t(a,b){var c,d,e,f,g;c=Bc1;d=AT2(c);e=new GF;f=Bc1;if(Bc2===null){g=AE_();if(g===null)Bc2=Zr(B(211));else Bc2=YN(g);}L8(e,IX(Bc2),f);a.I1=e;a.An=AGd(d);a.xB=Bc1;ADo(a,b);a.xB=c;}
function ADo(a,b){var c,d;a.Aq=b;b=new Uo;c=a.An;d=a.xB;b.cA=BU();b.ot=c;b.xP=d;AF_(b,a.Aq);a.G_=HW(b.cA,H(C2,0));}
function Kj(){}
function Dn(){FA.call(this);}
function A2r(a,b){var c,d;if(a===b)return 1;if(!Jb(b,Kj))return 0;c=b;if(AMQ(a)!=c.eW())return 0;d=c.gy();while(d.jr()){if(AM3(a,d.hm()))continue;else return 0;}return 1;}
function AM9(){Dn.call(this);this.ow=null;}
function AG6(){var a=new AM9();AXh(a);return a;}
function AXh(a){a.ow=CZ();}
function AOk(a,b){return BI(a.ow,b,a)!==null?0:1;}
function AM3(a,b){return Dx(a.ow,b);}
function ANR(a,b){return M4(a.ow,b)===null?0:1;}
function AMQ(a){return a.ow.dC;}
function KP(){}
function AHJ(a,b,c){var d,e;d=Co(a,b);if(d!==null)return d;e=AEU(c,b);if(e!==null)BI(a,b,e);return e;}
function Fh(){var a=this;C.call(a);a.nk=null;a.xC=null;}
function AGf(a){var b;if(a.nk===null){b=new ZT;b.E4=a;a.nk=b;}return a.nk;}
function MS(){var a=this;Fh.call(a);a.dC=0;a.cP=null;a.fM=0;a.F8=0.0;a.oE=0;}
function CZ(){var a=new MS();ACk(a);return a;}
function A2C(a,b){return H(LA,b);}
function ACk(a){var b;b=AGG(16);a.dC=0;a.cP=a.xd(b);a.F8=0.75;TX(a);}
function AGG(b){var c;if(b>=1073741824)return 1073741824;if(!b)return 16;c=b-1|0;b=c|c>>1;b=b|b>>2;b=b|b>>4;b=b|b>>8;return (b|b>>16)+1|0;}
function Xr(a){var b;if(a.dC>0){a.dC=0;b=a.cP;ABF(b,0,b.data.length,null);a.fM=a.fM+1|0;}}
function TX(a){a.oE=a.cP.data.length*a.F8|0;}
function Dx(a,b){return X6(a,b)===null?0:1;}
function AMy(a){var b;b=new TY;b.EB=a;return b;}
function Co(a,b){var c;c=X6(a,b);if(c===null)return null;return c.fq;}
function X6(a,b){var c,d;if(b===null)c=KH(a);else{d=b.lY();c=Kq(a,b,d&(a.cP.data.length-1|0),d);}return c;}
function Kq(a,b,c,d){var e;e=a.cP.data[c];while(e!==null&&!(e.tf==d&&AIi(b,e.ik))){e=e.gg;}return e;}
function KH(a){var b;b=a.cP.data[0];while(b!==null&&b.ik!==null){b=b.gg;}return b;}
function AOo(a){return a.dC?0:1;}
function WE(a){var b;if(a.nk===null){b=new Rp;b.Dw=a;a.nk=b;}return a.nk;}
function M8(a,b,c){return BI(a,b,c);}
function BI(a,b,c){var d,e,f,g;if(b===null){d=KH(a);if(d===null){a.fM=a.fM+1|0;d=TU(a,null,0,0);e=a.dC+1|0;a.dC=e;if(e>a.oE)LN(a);}}else{e=b.lY();f=e&(a.cP.data.length-1|0);d=Kq(a,b,f,e);if(d===null){a.fM=a.fM+1|0;d=TU(a,b,f,e);e=a.dC+1|0;a.dC=e;if(e>a.oE)LN(a);}}g=d.fq;d.fq=c;return g;}
function TU(a,b,c,d){var e;e=A9J(b,d);e.gg=a.cP.data[c];a.cP.data[c]=e;return e;}
function AJB(a,b){var c,d,e,f,g,h,i;c=AGG(!b?1:b<<1);d=a.xd(c);e=0;c=c-1|0;while(e<a.cP.data.length){f=a.cP.data[e];a.cP.data[e]=null;while(f!==null){g=d.data;h=f.tf&c;i=f.gg;f.gg=g[h];g[h]=f;f=i;}e=e+1|0;}a.cP=d;TX(a);}
function LN(a){AJB(a,a.cP.data.length);}
function M4(a,b){var c;c=TP(a,b);if(c===null)return null;return c.fq;}
function TP(a,b){var c,d,e,f,g;a:{c=0;d=null;if(b===null){e=a.cP.data[0];while(e!==null){if(e.ik===null)break a;f=e.gg;d=e;e=f;}}else{g=b.lY();c=g&(a.cP.data.length-1|0);e=a.cP.data[c];while(e!==null&&!(e.tf==g&&AIi(b,e.ik))){f=e.gg;d=e;e=f;}}}if(e===null)return null;if(d!==null)d.gg=e.gg;else a.cP.data[c]=e.gg;a.fM=a.fM+1|0;a.dC=a.dC-1|0;return e;}
function A0Z(a){return a.dC;}
function Xe(a){var b;if(a.xC===null){b=new Rq;b.CU=a;a.xC=b;}return a.xC;}
function AIi(b,c){return b!==c&&!b.cI(c)?0:1;}
function AIS(){Fp.call(this);}
function AG7(){C.call(this);}
function A1C(b){var thread=$rt_nativeThread();var javaThread=$rt_getThread();if(thread.isResuming()){thread.status=0;var result=thread.attribute;if(result instanceof Error){throw result;}return result;}var callback=function(){};callback.Hp=function(val){thread.attribute=val;$rt_setThread(javaThread);thread.resume();};callback.J4=function(e){thread.attribute=$rt_exception(e);$rt_setThread(javaThread);thread.resume();};callback=A9g(callback);return thread.suspend(function(){try{A8J(b,callback);}catch($e){callback.J4($rt_exception($e));}});}
function A8J(b,c){var d,e;d=typeof indexedDB!=='undefined'?indexedDB:null;if(d===null){CY(c,YW(0,0,B(212),null));return;}e=d.open($rt_ustr(b),1);b=new SS;b.Ev=c;b=Cs(b,"handleEvent");e.onBlocked=b;b=new ST;b.E8=c;b.El=e;b=Cs(b,"handleEvent");e.onsuccess=b;b=new SU;b.Cr=c;b=Cs(b,"handleEvent");e.onerror=b;b=new SV;b.AO=e;b=Cs(b,"handleEvent");e.onupgradeneeded=b;}
function AQd(b,c){var thread=$rt_nativeThread();var javaThread=$rt_getThread();if(thread.isResuming()){thread.status=0;var result=thread.attribute;if(result instanceof Error){throw result;}return result;}var callback=function(){};callback.Hp=function(val){thread.attribute=val;$rt_setThread(javaThread);thread.resume();};callback.J4=function(e){thread.attribute=$rt_exception(e);$rt_setThread(javaThread);thread.resume();};callback=A9g(callback);return thread.suspend(function(){try{A9K(b,c,callback);}catch($e){callback.J4($rt_exception($e));}});}
function A9K(b,c,d){var e;b=b.transaction("filesystem","readonly").objectStore("filesystem");c=AOg($rt_ustr(c));e=b.get(c);b=new SX;b.A0=d;b.wy=e;b=Cs(b,"handleEvent");e.onsuccess=b;b=new SY;b.EQ=d;b=Cs(b,"handleEvent");e.onerror=b;}
function A63(b,c){var thread=$rt_nativeThread();var javaThread=$rt_getThread();if(thread.isResuming()){thread.status=0;var result=thread.attribute;if(result instanceof Error){throw result;}return result;}var callback=function(){};callback.Hp=function(val){thread.attribute=val;$rt_setThread(javaThread);thread.resume();};callback.J4=function(e){thread.attribute=$rt_exception(e);$rt_setThread(javaThread);thread.resume();};callback=A9g(callback);return thread.suspend(function(){try{A8K(b,c,callback);}catch($e){callback.J4($rt_exception($e));}});}
function A8K(b,c,d){var e;b=b.transaction("filesystem","readonly").objectStore("filesystem");c=AOg($rt_ustr(c));e=b.get(c);b=new Vu;b.Fl=d;b.yh=e;b=Cs(b,"handleEvent");e.onsuccess=b;b=new Vt;b.Bw=d;b=Cs(b,"handleEvent");e.onerror=b;}
function A28(b,c,d,e){var thread=$rt_nativeThread();var javaThread=$rt_getThread();if(thread.isResuming()){thread.status=0;var result=thread.attribute;if(result instanceof Error){throw result;}return result;}var callback=function(){};callback.Hp=function(val){thread.attribute=val;$rt_setThread(javaThread);thread.resume();};callback.J4=function(e){thread.attribute=$rt_exception(e);$rt_setThread(javaThread);thread.resume();};callback=A9g(callback);return thread.suspend(function(){try{A91(b,c,d,e,callback);}catch($e)
{callback.J4($rt_exception($e));}});}
function A91(b,c,d,e,f){var g,h;b=b.transaction("filesystem","readwrite").objectStore("filesystem");g=Long_sub(CF(),new Long(596067632, 383)).lo;c=A2F($rt_ustr(c),!!d,g,e);h=b.put(c);c=new Vs;c.A5=f;b=Cs(c,"handleEvent");h.onsuccess=b;b=new WH;b.Dh=f;b=Cs(b,"handleEvent");h.onerror=b;}
function A2B(b){return typeof b==='undefined'?null:typeof b.data==='undefined'?null:b.data;}
function ADu(b){return typeof b==='undefined'?false:typeof b.directory==='undefined'?false:b.directory;}
function AOg(b){return [b];}
function A2F(b,c,d,e){return {path:b,directory:c,lastModified:d,data:e};}
function AKy(){var a=this;C.call(a);a.AA=0;a.DV=0;a.xS=null;a.zA=null;}
function YW(a,b,c,d){var e=new AKy();A0Q(e,a,b,c,d);return e;}
function A0Q(a,b,c,d,e){a.AA=b;a.DV=c;a.xS=d;a.zA=e;}
function Sc(){}
function Xo(){C.call(this);this.zD=null;}
function A9g(b){var c;c=new Xo;c.zD=b;return c;}
function CY(a,b){a.zD.Hp(b);}
function AYm(a,b){a.zD.J4(b);}
function ANk(){C.call(this);}
function PO(){}
function Yp(){var a=this;C.call(a);a.vL=null;a.Ba=null;}
function AFa(a){var b,c,d;if(a.vL.readyState==4){b=new Uint8Array(a.vL.response);c=$rt_createByteArray(b.byteLength);Be();A_S=c;d=0;while(d<XW().data.length){XW().data[d]=b[d]<<24>>24;d=d+1|0;}CY(a.Ba,B(213));}}
function AYr(a){AFa(a);}
function NZ(){var a=this;C.call(a);a.IC=null;a.Ji=null;}
function T8(b){var c,d;if(Eb(b))J(AJy(b));if(!AMF(P(b,0)))J(AJy(b));c=1;while(c<Q(b)){a:{d=P(b,c);switch(d){case 43:case 45:case 46:case 58:case 95:break;default:if(AMF(d))break a;else J(AJy(b));}}c=c+1|0;}}
function AMF(b){return !(b>=48&&b<=57)&&!(b>=97&&b<=122)&&b<65&&b>90?0:1;}
function Hc(b){var c;if(b===null){b=new BB;Bd(b,B(214));J(b);}T8(b);c=Co(Bc3,ALg(b));if(c!==null)return c;c=new Xv;Z(c);c.JG=b;J(c);}
function AK4(a,b){var c,$$je;a:{try{b=AIH(Tt(Zu(Uj(a),Ba4),Ba4),b);}catch($$e){$$je=Bh($$e);if($$je instanceof GH){c=$$je;break a;}else{throw $$e;}}return b;}J(A1$(B(215),c));}
function AGL(a,b){var c,$$je;a:{try{b=AJe(UU(SO(UW(a),Ba4),Ba4),b);}catch($$e){$$je=Bh($$e);if($$je instanceof GH){c=$$je;break a;}else{throw $$e;}}return b;}J(A1$(B(215),c));}
function Zt(){var a=this;J0.call(a);a.gQ=null;a.oT=null;a.qF=0;a.ph=0;a.Fv=0;a.Fb=0;a.wZ=null;a.H9=null;}
function AO8(a){var b;if(a.qF){b=new BA;Bd(b,B(216));J(b);}return AJJ(a,a.wZ,0,1)==(-1)?(-1):a.wZ.data[0]&255;}
function AJJ(a,b,c,d){var e,f,g;if(a.qF){e=new BA;Bd(e,B(216));J(e);}if(b===null){e=new Eg;Z(e);J(e);}if(c>=0&&d>=0&&d<=(b.data.length-c|0)){if(!d)return 0;if(a.ph)return (-1);f=0;ACy(a.gQ,b,c,d);a:{while(!a.ph){if(!a.gQ.E)AC1(a);b:{g=AF8(a.gQ,0);f=f+(a.gQ.p_-c|0)|0;c=a.gQ.p_;switch(g){case -3:e=new BA;Bd(e,a.gQ.ca);J(e);case 1:case 2:break;default:break b;}a.ph=1;if(g==2)return (-1);}if(!a.gQ.ia)break a;}}return f;}e=new BE;Z(e);J(e);}
function AWt(a){var b;if(!a.qF){if(!a.ph)return 1;return 0;}b=new BA;Bd(b,B(216));J(b);}
function AC1(a){var b,c;if(a.qF){b=new BA;Bd(b,B(216));J(b);}a:{c=a.kF.oK(a.oT,0,a.oT.data.length);if(c==(-1)){if(a.gQ.jE.dN)break a;if(AAH(a.gQ))break a;a.oT.data[0]=0;c=1;}AIO(a.gQ,a.oT,0,c,1);return;}if(Long_ne(a.gQ.jE.sy,Long_fromInt(-1))){b=new BA;Bd(b,B(217));J(b);}b=new F4;Bd(b,B(218));J(b);}
function Og(){var a=this;C.call(a);a.h9=null;a.jw=0;a.nH=Long_ZERO;}
function Ki(a,b){var c,d;c=a.h9.data;d=a.jw;a.jw=d+1|0;c[d]=b;if(a.jw==a.h9.data.length){Vm(a,a.h9,0);a.jw=0;}a.nH=Long_add(a.nH,Long_fromInt(1));}
function AEH(a,b,c,d){a:{while(a.jw){if(d<=0)break a;Ki(a,b.data[c]);c=c+1|0;d=d+(-1)|0;}}while(d>a.h9.data.length){Vm(a,b,c);c=c+a.h9.data.length|0;d=d-a.h9.data.length|0;a.nH=Long_add(a.nH,Long_fromInt(a.h9.data.length));}while(d>0){Ki(a,b.data[c]);c=c+1|0;d=d+(-1)|0;}}
function AMf(a){var b;b=Long_shl(a.nH,3);Ki(a,(-128));while(a.jw){Ki(a,0);}AJp(a,b);NJ(a);}
function Td(){var a=this;Og.call(a);a.pU=0;a.pV=0;a.pW=0;a.pX=0;a.pY=0;a.d$=null;a.ng=0;}
function Vm(a,b,c){var d,e;d=b.data;b=a.d$.data;e=a.ng;a.ng=e+1|0;b[e]=(d[c]&255)<<24|(d[c+1|0]&255)<<16|(d[c+2|0]&255)<<8|d[c+3|0]&255;if(a.ng==16)NJ(a);}
function IO(a,b,c,d){c=c.data;c[d]=b>>>24<<24>>24;c[d+1|0]=b>>>16<<24>>24;c[d+2|0]=b>>>8<<24>>24;c[d+3|0]=b<<24>>24;}
function AJp(a,b){if(a.ng>14)NJ(a);a.d$.data[14]=b.hi;a.d$.data[15]=Long_and(b,Long_fromInt(-1)).lo;}
function AJQ(a,b,c){AMf(a);IO(a,a.pU,b,c);IO(a,a.pV,b,c+4|0);IO(a,a.pW,b,c+8|0);IO(a,a.pX,b,c+12|0);IO(a,a.pY,b,c+16|0);Qb(a);return 20;}
function Qb(a){var b;a.nH=Long_ZERO;a.jw=0;b=0;while(b<a.h9.data.length){a.h9.data[b]=0;b=b+1|0;}a.pU=1732584193;a.pV=(-271733879);a.pW=(-1732584194);a.pX=271733878;a.pY=(-1009589776);a.ng=0;b=0;while(b!=a.d$.data.length){a.d$.data[b]=0;b=b+1|0;}}
function Xy(a,b,c,d){return b^c^d;}
function Fz(a,b,c){return b<<c|b>>>(32-c|0);}
function NJ(a){var b,c,d,e,f,g,h,i,j;b=16;while(b<=79){a.d$.data[b]=Fz(a,a.d$.data[b-3|0]^a.d$.data[b-8|0]^a.d$.data[b-14|0]^a.d$.data[b-16|0],1);b=b+1|0;}c=a.pU;d=a.pV;e=a.pW;f=a.pX;g=a.pY;h=0;while(h<=19){i=(((Fz(a,c,5)+(d&e|(d^(-1))&f)|0)+g|0)+a.d$.data[h]|0)+1518500249|0;b=Fz(a,d,30);h=h+1|0;g=f;f=e;e=b;d=c;c=i;}j=20;while(j<=39){i=(((Fz(a,c,5)+Xy(a,d,e,f)|0)+g|0)+a.d$.data[j]|0)+1859775393|0;b=Fz(a,d,30);j=j+1|0;g=f;f=e;e=b;d=c;c=i;}h=40;while(h<=59){i=(((Fz(a,c,5)+(d&e|d&f|e&f)|0)+g|0)+a.d$.data[h]|0)
+(-1894007588)|0;b=Fz(a,d,30);h=h+1|0;g=f;f=e;e=b;d=c;c=i;}j=60;while(j<=79){i=(((Fz(a,c,5)+Xy(a,d,e,f)|0)+g|0)+a.d$.data[j]|0)+(-899497514)|0;b=Fz(a,d,30);j=j+1|0;g=f;f=e;e=b;d=c;c=i;}a.pU=a.pU+c|0;a.pV=a.pV+d|0;a.pW=a.pW+e|0;a.pX=a.pX+f|0;a.pY=a.pY+g|0;a.ng=0;b=0;while(b!=a.d$.data.length){a.d$.data[b]=0;b=b+1|0;}}
function AIm(){C.call(this);}
function QA(b,c){var d,e,f,g;b=b.data;d=$rt_createCharArray(c);e=d.data;f=B4(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function LT(b,c){var d,e,f,g;b=b.data;d=$rt_createByteArray(c);e=d.data;f=B4(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function Ea(b,c){var d,e,f,g;d=b.data;e=AFg(Ly(B5(b)),c);f=B4(c,d.length);g=0;while(g<f){e.data[g]=d[g];g=g+1|0;}return e;}
function Js(b,c){var d,e,f,g;b=b.data;d=0;e=b.length;if(d>e){f=new BB;Z(f);J(f);}while(d<e){g=d+1|0;b[d]=c;d=g;}}
function AFG(b,c){var d,e,f,g;b=b.data;d=0;e=b.length;if(d>e){f=new BB;Z(f);J(f);}while(d<e){g=d+1|0;b[d]=c;d=g;}}
function ABF(b,c,d,e){var f,g;if(c>d){e=new BB;Z(e);J(e);}while(c<d){f=b.data;g=c+1|0;f[c]=e;c=g;}}
function ACu(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;d=b.data.length;if(!d)return;e=H(C,d);f=1;g=b;while(f<d){h=0;while(true){i=g.data;j=i.length;if(h>=j)break;k=B4(j,h+f|0);l=h+(2*f|0)|0;m=B4(j,l);n=h;j=k;a:{b:{while(h!=k){if(j==m)break b;o=i[h];p=i[j];if(c.iH(o,p)>0){q=e.data;r=n+1|0;q[n]=p;j=j+1|0;}else{q=e.data;r=n+1|0;q[n]=o;h=h+1|0;}n=r;}while(true){if(j>=m)break a;q=e.data;h=n+1|0;r=j+1|0;q[n]=i[j];n=h;j=r;}}while(true){if(h>=k)break a;q=e.data;j=n+1|0;r=h+1|0;q[n]=i[h];n=j;h=r;}}h=l;}f=f*2|0;i=g;g=e;e
=i;}c:{if(g!==b){n=0;while(true){b=g.data;if(n>=b.length)break c;e.data[n]=b[n];n=n+1|0;}}}}
function MF(b,c){var d,e,f,g,h;b=b.data;d=0;e=b.length;if(d>e){f=new BB;Z(f);J(f);}g=e-1|0;a:{while(true){e=(d+g|0)/2|0;h=Long_compare(b[e],c);if(!h)break;if(h<=0){d=e+1|0;if(d>g){e= -e-2|0;break a;}}else{g=e-1|0;if(g<d){e= -e-1|0;break a;}}}}return e;}
function JU(b,c){var d,e;if(b===c)return 1;if(b!==null&&c!==null){c=c.data;b=b.data;d=b.length;if(d==c.length){e=0;while(e<d){if(!LH(b[e],c[e]))return 0;e=e+1|0;}return 1;}}return 0;}
function AHf(){NZ.call(this);}
function AGy(){var a=new AHf();AX4(a);return a;}
function AX4(a){var b,c,d,e;b=H(BC,0);c=b.data;T8(B(31));d=c.length;e=0;while(e<d){T8(c[e]);e=e+1|0;}a.IC=B(31);a.Ji=b.gE();}
function Uj(a){var b;b=new Tr;b.lF=B(219);b.ni=Bc4;b.r0=Bc4;b.I$=a;b.C7=0.3333333432674408;b.G7=0.5;return b;}
function UW(a){var b,c,d,e,f;b=new Rz;c=$rt_createByteArray(1);d=c.data;d[0]=63;b.vS=Bc4;b.vc=Bc4;e=d.length;if(e&&e>=b.C4){b.IL=a;b.uZ=c.gE();b.BS=2.0;b.C4=4.0;return b;}f=new BB;Bd(f,B(220));J(f);}
function KG(){var a=this;C.call(a);a.HF=61;a.mV=0;a.u6=0;a.FS=0;a.jI=0;a.Eb=0;a.B_=null;}
var BaP=null;function VL(b,c){b=Bw(b+(-2147483648)|0,c+(-2147483648)|0);return b<0?(-1):b?1:0;}
function ABQ(a,b){return b.gJ===null?0:b.bE-b.lR|0;}
function AKI(a,b){var c,d,e;if(b===null)return 0;b=b.data;c=b.length;d=0;a:{while(d<c){e=b[d];if(a.mV==e)break a;if(AFQ(a,e))break a;d=d+1|0;}return 0;}return 1;}
function AOa(a,b){var c,d,e;if(b!==null){c=b.data.length;if(c){d=new Nm;VF(a,b,0,c,d);VF(a,b,0,(-1),d);e=$rt_createByteArray(d.bE);Vq(a,e,0,e.data.length,d);return e;}}return b;}
function ADd(a,b){return AOa(a,Yk(b,Hc(B(31))));}
function AKF(a,b){var c;if(b!==null){c=b.data.length;if(c)return AE3(a,b,0,c);}return b;}
function AE3(a,b,c,d){var e,f;if(b!==null&&b.data.length){e=new Nm;Yj(a,b,c,d,e);Yj(a,b,c,(-1),e);f=$rt_createByteArray(e.bE-e.lR|0);Vq(a,f,0,f.data.length,e);return f;}return b;}
function Ls(a,b,c){var d,e,f;if(c.gJ===null){c.gJ=$rt_createByteArray(Df(b,8192));c.bE=0;c.lR=0;}else if(((c.bE+b|0)-c.gJ.data.length|0)>0){b=c.bE+b|0;d=c.gJ.data.length*2|0;if(VL(d,b)<0)d=b;if(VL(d,2147483639)<=0)b=d;else{if(b<0){e=new Yw;c=new S;V(c);Bd(e,R(DZ(G(c,B(221)),Long_and(Long_fromInt(b),new Long(4294967295, 0)))));J(e);}if(b<=2147483639)b=2147483639;}f=$rt_createByteArray(b);CT(c.gJ,0,f,0,c.gJ.data.length);c.gJ=f;return f;}return c.gJ;}
function A3U(a){return 8192;}
function AM8(a,b){var c;c=Long_mul(Long_fromInt(((b.data.length+a.u6|0)-1|0)/a.u6|0),Long_fromInt(a.FS));if(a.jI>0)c=Long_add(c,Long_mul(Long_div(Long_sub(Long_add(c,Long_fromInt(a.jI)),Long_fromInt(1)),Long_fromInt(a.jI)),Long_fromInt(a.Eb)));return c;}
function Q_(a){return a.B_!==Bc5?0:1;}
function Vq(a,b,c,d,e){var f;if(e.gJ===null)return !e.lq?0:(-1);f=B4(ABQ(a,e),d);CT(e.gJ,e.lR,b,c,f);e.lR=e.lR+f|0;if(e.lR>=e.bE)e.gJ=null;return f;}
function AGJ(){var b,c;b=$rt_createByteArray(2);c=b.data;c[0]=13;c[1]=10;BaP=b;}
function KL(){var a=this;KG.call(a);a.gT=null;a.x2=null;a.h_=null;a.y$=0;a.nS=0;}
var Bc6=null;var Bc7=null;var Bc8=null;function AWT(a,b,c){var d=new KL();AAS(d,a,b,c);return d;}
function AAS(a,b,c,d){var e,f,g,h,i;e=Bc9;f=c===null?0:c.data.length;a.HF=61;a.u6=3;a.FS=4;a.jI=!(b>0&&f>0?1:0)?0:(b/4|0)*4|0;a.Eb=f;a.mV=61;a.B_=e;a.x2=Bc8;if(c===null){a.nS=4;a.h_=null;}else{if(AKI(a,c)){e=AHK(c,Hc(B(31)));g=new BB;h=new S;V(h);Bd(g,R(G(G(G(h,B(222)),e),B(223))));J(g);}if(b<=0){a.nS=4;a.h_=null;}else{i=c.data.length;a.nS=4+i|0;a.h_=$rt_createByteArray(i);CT(c,0,a.h_,0,i);}}a.y$=a.nS-1|0;a.gT=!d?Bc6:Bc7;}
function VF(a,b,c,d,e){var f,g,h,i,j,k,l,m;if(e.lq)return;if(d<0)e.lq=1;f=0;a:{while(true){if(f>=d)break a;g=b.data;h=Ls(a,a.y$,e);i=c+1|0;j=g[c];if(j==a.mV)break;if(j>=0&&j<Bc8.data.length){k=Bc8.data[j];if(k>=0){e.gG=(e.gG+1|0)%4|0;e.c5=(e.c5<<6)+k|0;if(!e.gG){h=h.data;c=e.bE;e.bE=c+1|0;h[c]=(e.c5>>16&255)<<24>>24;c=e.bE;e.bE=c+1|0;h[c]=(e.c5>>8&255)<<24>>24;j=e.bE;e.bE=j+1|0;h[j]=(e.c5&255)<<24>>24;}}}f=f+1|0;c=i;}e.lq=1;}b:{if(e.lq&&e.gG){h=Ls(a,a.y$,e);switch(e.gG){case 1:break;case 2:b=h.data;VT(a,15,
e);e.c5=e.c5>>4;d=e.bE;e.bE=d+1|0;b[d]=(e.c5&255)<<24>>24;break b;case 3:b=h.data;VT(a,3,e);e.c5=e.c5>>2;i=e.bE;e.bE=i+1|0;b[i]=(e.c5>>8&255)<<24>>24;c=e.bE;e.bE=c+1|0;b[c]=(e.c5&255)<<24>>24;break b;default:l=new DE;m=new S;V(m);Bd(l,R(Bf(G(m,B(224)),e.gG)));J(l);}if(Q_(a)){l=new BB;Bd(l,B(225));J(l);}}}}
function Yj(a,b,c,d,e){var f,g,h,i,j,k,l,m,n;if(e.lq)return;a:{if(d>=0){f=0;while(true){if(f>=d)break a;g=b.data;h=Ls(a,a.nS,e);e.gG=(e.gG+1|0)%3|0;i=c+1|0;j=g[c];if(j<0)j=j+256|0;e.c5=(e.c5<<8)+j|0;if(0==e.gG){k=h.data;c=e.bE;e.bE=c+1|0;k[c]=a.gT.data[e.c5>>18&63];c=e.bE;e.bE=c+1|0;k[c]=a.gT.data[e.c5>>12&63];c=e.bE;e.bE=c+1|0;k[c]=a.gT.data[e.c5>>6&63];c=e.bE;e.bE=c+1|0;k[c]=a.gT.data[e.c5&63];e.lj=e.lj+4|0;if(a.jI>0&&a.jI<=e.lj){CT(a.h_,0,h,e.bE,a.h_.data.length);e.bE=e.bE+a.h_.data.length|0;e.lj=0;}}f=f
+1|0;c=i;}}e.lq=1;if(0==e.gG&&!a.jI)return;b:{c:{g=Ls(a,a.nS,e);l=e.bE;switch(e.gG){case 0:break b;case 1:k=g.data;c=e.bE;e.bE=c+1|0;k[c]=a.gT.data[e.c5>>2&63];c=e.bE;e.bE=c+1|0;k[c]=a.gT.data[e.c5<<4&63];if(a.gT!==Bc6)break b;c=e.bE;e.bE=c+1|0;k[c]=a.mV;c=e.bE;e.bE=c+1|0;k[c]=a.mV;break b;case 2:break c;default:}m=new DE;n=new S;V(n);Bd(m,R(Bf(G(n,B(224)),e.gG)));J(m);}k=g.data;c=e.bE;e.bE=c+1|0;k[c]=a.gT.data[e.c5>>10&63];c=e.bE;e.bE=c+1|0;k[c]=a.gT.data[e.c5>>4&63];c=e.bE;e.bE=c+1|0;k[c]=a.gT.data[e.c5<<
2&63];if(a.gT===Bc6){c=e.bE;e.bE=c+1|0;k[c]=a.mV;}}e.lj=e.lj+(e.bE-l|0)|0;if(a.jI>0&&e.lj>0){CT(a.h_,0,g,e.bE,a.h_.data.length);e.bE=e.bE+a.h_.data.length|0;}}}
function AFQ(a,b){return b>=0&&b<a.x2.data.length&&a.x2.data[b]!=(-1)?1:0;}
function VT(a,b,c){var d;if(Q_(a)&&c.c5&b){d=new BB;Bd(d,B(226));J(d);}}
function ABU(){var b,c;b=$rt_createByteArray(64);c=b.data;c[0]=65;c[1]=66;c[2]=67;c[3]=68;c[4]=69;c[5]=70;c[6]=71;c[7]=72;c[8]=73;c[9]=74;c[10]=75;c[11]=76;c[12]=77;c[13]=78;c[14]=79;c[15]=80;c[16]=81;c[17]=82;c[18]=83;c[19]=84;c[20]=85;c[21]=86;c[22]=87;c[23]=88;c[24]=89;c[25]=90;c[26]=97;c[27]=98;c[28]=99;c[29]=100;c[30]=101;c[31]=102;c[32]=103;c[33]=104;c[34]=105;c[35]=106;c[36]=107;c[37]=108;c[38]=109;c[39]=110;c[40]=111;c[41]=112;c[42]=113;c[43]=114;c[44]=115;c[45]=116;c[46]=117;c[47]=118;c[48]=119;c[49]
=120;c[50]=121;c[51]=122;c[52]=48;c[53]=49;c[54]=50;c[55]=51;c[56]=52;c[57]=53;c[58]=54;c[59]=55;c[60]=56;c[61]=57;c[62]=43;c[63]=47;Bc6=b;b=$rt_createByteArray(64);c=b.data;c[0]=65;c[1]=66;c[2]=67;c[3]=68;c[4]=69;c[5]=70;c[6]=71;c[7]=72;c[8]=73;c[9]=74;c[10]=75;c[11]=76;c[12]=77;c[13]=78;c[14]=79;c[15]=80;c[16]=81;c[17]=82;c[18]=83;c[19]=84;c[20]=85;c[21]=86;c[22]=87;c[23]=88;c[24]=89;c[25]=90;c[26]=97;c[27]=98;c[28]=99;c[29]=100;c[30]=101;c[31]=102;c[32]=103;c[33]=104;c[34]=105;c[35]=106;c[36]=107;c[37]=108;c[38]
=109;c[39]=110;c[40]=111;c[41]=112;c[42]=113;c[43]=114;c[44]=115;c[45]=116;c[46]=117;c[47]=118;c[48]=119;c[49]=120;c[50]=121;c[51]=122;c[52]=48;c[53]=49;c[54]=50;c[55]=51;c[56]=52;c[57]=53;c[58]=54;c[59]=55;c[60]=56;c[61]=57;c[62]=45;c[63]=95;Bc7=b;b=$rt_createByteArray(123);c=b.data;c[0]=(-1);c[1]=(-1);c[2]=(-1);c[3]=(-1);c[4]=(-1);c[5]=(-1);c[6]=(-1);c[7]=(-1);c[8]=(-1);c[9]=(-1);c[10]=(-1);c[11]=(-1);c[12]=(-1);c[13]=(-1);c[14]=(-1);c[15]=(-1);c[16]=(-1);c[17]=(-1);c[18]=(-1);c[19]=(-1);c[20]=(-1);c[21]=
(-1);c[22]=(-1);c[23]=(-1);c[24]=(-1);c[25]=(-1);c[26]=(-1);c[27]=(-1);c[28]=(-1);c[29]=(-1);c[30]=(-1);c[31]=(-1);c[32]=(-1);c[33]=(-1);c[34]=(-1);c[35]=(-1);c[36]=(-1);c[37]=(-1);c[38]=(-1);c[39]=(-1);c[40]=(-1);c[41]=(-1);c[42]=(-1);c[43]=62;c[44]=(-1);c[45]=62;c[46]=(-1);c[47]=63;c[48]=52;c[49]=53;c[50]=54;c[51]=55;c[52]=56;c[53]=57;c[54]=58;c[55]=59;c[56]=60;c[57]=61;c[58]=(-1);c[59]=(-1);c[60]=(-1);c[61]=(-1);c[62]=(-1);c[63]=(-1);c[64]=(-1);c[65]=0;c[66]=1;c[67]=2;c[68]=3;c[69]=4;c[70]=5;c[71]=6;c[72]
=7;c[73]=8;c[74]=9;c[75]=10;c[76]=11;c[77]=12;c[78]=13;c[79]=14;c[80]=15;c[81]=16;c[82]=17;c[83]=18;c[84]=19;c[85]=20;c[86]=21;c[87]=22;c[88]=23;c[89]=24;c[90]=25;c[91]=(-1);c[92]=(-1);c[93]=(-1);c[94]=(-1);c[95]=63;c[96]=(-1);c[97]=26;c[98]=27;c[99]=28;c[100]=29;c[101]=30;c[102]=31;c[103]=32;c[104]=33;c[105]=34;c[106]=35;c[107]=36;c[108]=37;c[109]=38;c[110]=39;c[111]=40;c[112]=41;c[113]=42;c[114]=43;c[115]=44;c[116]=45;c[117]=46;c[118]=47;c[119]=48;c[120]=49;c[121]=50;c[122]=51;Bc8=b;}
function Nj(){CI.call(this);}
function AYy(a,b){return;}
function A3p(a,b){return;}
function AS0(a){return 0;}
function IZ(){var a=this;C.call(a);a.e5=null;a.gU=0;}
function AIG(a){return 1;}
function AVD(a,b){return;}
function AEm(){var a=this;IZ.call(a);a.wt=0;a.wu=0;a.wv=0;a.ie=0.0;a.mk=0.0;a.qB=0.0;a.mE=0;a.EW=null;}
function A0x(a){var b=new AEm();AY6(b,a);return b;}
function AY6(a,b){a.gU=0;a.e5=b;a.wt=(-1);a.wu=(-1);a.wv=(-1);a.ie=0.0;a.mk=0.0;a.qB=0.0;a.mE=0;}
function VV(a,b,c,d){var e,f,g,h,i,j;e=O(a.e5.i,b,c,d);f=Cr(a.e5.i,b,c,d);AN3(a.e5.bI,b,c,d);g=a.e5.i;L();h=Bcf.data[O(g,b,c,d)];i=Cr(g,b,c,d);j=By(g,b,c,d,0);if(h!==null&&j)h.rD(g,b,c,d,i);h=F0(a.e5.a.F);if(h!==null){B2();Bce.data[h.bX].xI(h);if(!h.s)S$(a.e5.a);}if(j&&Tn(a.e5.a,Bcf.data[e]))Ja(Bcf.data[e],a.e5.i,b,c,d,f);return j;}
function ACK(a,b,c,d){var e;e=O(a.e5.i,b,c,d);if(e>0){L();if(Uk(Bcf.data[e],a.e5.a)>=1.0)VV(a,b,c,d);}}
function EL(a){a.ie=0.0;a.mE=0;}
function Ew(a,b,c,d,e){var f;if(a.mE>0)a.mE=a.mE-1|0;else if(b==a.wt&&c==a.wu&&d==a.wv){e=O(a.e5.i,b,c,d);if(e){L();f=Bcf.data[e];a.ie=a.ie+Uk(f,a.e5.a);a.qB=a.qB+1.0;if(a.ie>=1.0){VV(a,b,c,d);a.ie=0.0;a.mk=0.0;a.qB=0.0;a.mE=5;}}}else{a.ie=0.0;a.mk=0.0;a.qB=0.0;a.wt=b;a.wu=c;a.wv=d;}}
function HI(a,b){if(a.ie<=0.0)a.e5.cw.ra=0.0;else a.e5.cw.ra=a.mk+(a.ie-a.mk)*b;}
function AIu(a){return 4.0;}
function ALo(a,b){a.EW=AVZ(b);}
function ACl(a){a.mk=a.ie;X0(a.EW);}
function R8(){var a=this;C.call(a);a.dy=0.0;a.BL=0.0;a.id=0;a.da=0.0;a.CP=0.0;a.ls=0.0;a.tz=Long_ZERO;a.sb=Long_ZERO;a.pM=0.0;}
function EU(a){var b,c,d,e,f;b=CF();c=Long_sub(b,a.tz);d=Long_div(AFi(),Long_fromInt(1000000));if(Long_gt(c,Long_fromInt(1000))){e=Long_toNumber(c)/Long_toNumber(Long_sub(d,a.sb));a.pM=a.pM+(e-a.pM)*0.20000000298023224;a.tz=b;a.sb=d;}if(Long_lt(c,Long_ZERO)){a.tz=b;a.sb=d;}f=Long_toNumber(d)/1000.0;e=(f-a.BL)*a.pM;a.BL=f;if(e<0.0)e=0.0;if(e>1.0)e=1.0;a.ls=a.ls+e*a.CP*a.dy;a.id=a.ls|0;a.ls=a.ls-a.id;if(a.id>10)a.id=10;a.da=a.ls;}
function Xb(){}
function Xw(){var a=this;C.call(a);a.qL=null;a.fX=null;a.sA=null;a.n$=Long_ZERO;}
function Zg(a,b){var c,d,e;if(!a.fX.h7)J(AKw());a.sA=b;c=G8(a.fX.cn,a.fX.cp);d=c.fY;e=c.fR;Db(256);CB(5889);Cp();N3(0.0,d,e,0.0,100.0,300.0);CB(5888);Cp();Bj(0.0,0.0,(-200.0));}
function ANb(a,b){var c,$p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!a.fX.h7)J(AKw());a.n$=Long_ZERO;a.qL=b;c=(-1);$p=1;case 1:ALI(a,c);if(I()){break _;}a.n$=Long_ZERO;return;default:F2();}}Dh().s(a,b,c,$p);}
function ALI(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,$$je,$p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!a.fX.h7)J(AKw());c=CF();if(Long_lt(Long_sub(c,a.n$),Long_fromInt(20)))return;a.n$=c;d=G8(a.fX.cn,a.fX.cp);e=d.fY;f=d.fR;Db(256);CB(5889);Cp();N3(0.0,e,f,0.0,100.0,300.0);CB(5888);Cp();Bj(0.0,0.0,(-200.0));Db(16640);BD();g=Bc$;d=a.fX.cd;h
=B(227);$p=1;case 1:$z=AB2(d,h);if(I()){break _;}i=$z;Cj(3553,i);Bx(g);Ii(g,4210752);j=f;k=j;l=j/32.0;F(g,0.0,k,0.0,0.0,l);j=e;m=j;n=j/32.0;F(g,m,k,0.0,n,l);F(g,m,0.0,0.0,n,0.0);F(g,0.0,0.0,0.0,0.0,0.0);Bt(g);if(b>=0){i=(e/2|0)-50|0;o=(f/2|0)+16|0;Bb(3553);Bx(g);Ii(g,8421504);m=i;p=o;Bo(g,m,p,0.0);n=o+2|0;Bo(g,m,n,0.0);k=i+100|0;Bo(g,k,n,0.0);Bo(g,k,p,0.0);Ii(g,8454016);Bo(g,m,p,0.0);Bo(g,m,n,0.0);m=i+b|0;Bo(g,m,n,0.0);Bo(g,m,p,0.0);Bt(g);Y(3553);}d=a.fX.ji;g=a.sA;b=(e-Ei(a.fX.ji,a.sA)|0)/2|0;i=(f/2|0)-4|0;CG(d,
g,b,i-16|0,16777215);CG(a.fX.ji,a.qL,(e-Ei(a.fX.ji,a.qL)|0)/2|0,i+8|0,16777215);$p=2;case 2:ADw();if(I()){break _;}try{$p=3;continue _;}catch($$e){$$je=Bh($$e);if($$je instanceof Cq){}else{throw $$e;}}return;case 3:a:{try{AAe();if(I()){break _;}break a;}catch($$e){$$je=Bh($$e);if($$je instanceof Cq){}else{throw $$e;}}}return;default:F2();}}Dh().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,$p);}
function QZ(){var a=this;C.call(a);a.c=null;a.s2=0;a.fa=0.0;a.e9=null;a.qh=null;a.ol=null;a.fI=0.0;a.f7=0.0;a.gc=0.0;a.xk=0.0;a.pE=0.0;}
function DQ(a){var b,c;a.xk=a.pE;b=DT(a.c.i,a.c.a.f|0,a.c.a.j|0,a.c.a.g|0);c=(3-a.c.d.fx|0)/3.0;b=b*(1.0-c)+c;a.pE=a.pE+(b-a.pE)*0.10000000149011612;AH4(a.e9);}
function NI(a,b){var c;c=a.c.a;return BF(c.cs+(c.f-c.cs)*b,c.cx+(c.j-c.cx)*b,c.ct+(c.g-c.ct)*b);}
function EW(a,b){var c,d,e;c=a.c.a;d=c.hk-b;if(c.b0<=0)Bs(40.0-8000.0/(b+c.dA+200.0),0.0,0.0,1.0);if(d>=0.0){b=d/c.BA;b=Bv(b*b*b*b*3.1415927410125732);e=c.lr;Bs( -e,0.0,1.0,0.0);Bs( -b*14.0,0.0,0.0,1.0);Bs(e,0.0,1.0,0.0);}}
function DU(a,b){var c,d,e,f;if(!a.c.d.ce){c=a.c.a;d=c.kZ-c.uF;d=c.kZ+d*b;e=c.xE+(c.pc-c.xE)*b;b=c.y4+(c.n8-c.y4)*b;f=d*3.1415927410125732;Bj(Bv(f)*e*0.5, -I3(Bp(f)*e),0.0);Bs(Bv(f)*e*3.0,0.0,0.0,1.0);Bs(I3(Bp(f+0.20000000298023224)*e)*5.0,1.0,0.0,0.0);Bs(b,1.0,0.0,0.0);}}
function ALK(a,b){var c,d,e,f,g,h,i,$p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.s2&&!KA()){c=a.c;$p=1;continue _;}a.s2=KA();d=A_6;A_6=0.0;e=d|0;d=A_7;A_7=0.0;f=d|0;g=1;if(a.c.d.jC)g=(-1);if(a.c.M&&a.c.i!==null)T6(a.c.a,e,K(f,g));c=G8(a.c.cn,a.c.cp);h=c.fY;i=c.fR;g=K(A_4,h)/a.c.cn|0;f=(i-(K(A_5,i)/a.c.cp|0)|0)-1|0;if(a.c.i!==null){$p=2;continue _;}FI(0,0,a.c.cn,a.c.cp);Pr(0.0,0.0,0.0,0.0);Db(16640);CB(5889);Cp();CB(5888);Cp();O9(a);if
(a.c.k===null){$p=4;continue _;}Db(256);c=a.c.k;$p=6;continue _;case 1:AEn(c);if(I()){break _;}a.s2=KA();d=A_6;A_6=0.0;e=d|0;d=A_7;A_7=0.0;f=d|0;g=1;if(a.c.d.jC)g=(-1);if(a.c.M&&a.c.i!==null)T6(a.c.a,e,K(f,g));c=G8(a.c.cn,a.c.cp);h=c.fY;i=c.fR;g=K(A_4,h)/a.c.cn|0;f=(i-(K(A_5,i)/a.c.cp|0)|0)-1|0;if(a.c.i!==null){$p=2;continue _;}FI(0,0,a.c.cn,a.c.cp);Pr(0.0,0.0,0.0,0.0);Db(16640);CB(5889);Cp();CB(5888);Cp();O9(a);if(a.c.k===null){$p=4;continue _;}Db(256);c=a.c.k;$p=6;continue _;case 2:AJ5(a,b);if(I()){break _;}c
=a.c.pb;$p=3;case 3:ADB(c,b);if(I()){break _;}if(a.c.k===null){$p=4;continue _;}Db(256);c=a.c.k;$p=6;continue _;case 4:AAe();if(I()){break _;}$p=5;case 5:ADw();if(I()){break _;}return;case 6:c.iI(g,f,b);if(I()){break _;}$p=4;continue _;default:F2();}}Dh().s(a,b,c,d,e,f,g,h,i,$p);}
function AJ5(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,$p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();bm=$T.l();bl=$T.l();bk=$T.l();bj=$T.l();bi=$T.l();bh=$T.l();bg=$T.l();bf=$T.l();be=$T.l();bd=$T.l();bc=$T.l();bb=$T.l();ba=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:
while(true){switch($p){case 0:c=a.c.a;d=c.b1+(c.X-c.b1)*b;e=c.bN+(c.I-c.bN)*b;f=NI(a,b);g= -e*0.01745329238474369-3.1415927410125732;h=Bp(g);g=Bv(g);i= -d*0.01745329238474369;j= -Bp(i);i=Bv(i);k=g*j;l=h*j;m=AIu(a.c.P);n=Je(f,k*m,i*m,l*m);a.c.n=E1(a.c.i,f,n);n=NI(a,b);if(a.c.n!==null)m=C$(a.c.n.d4,n);if(a.c.P instanceof CK)m=32.0;else if(m>3.0)m=3.0;g=k*m;h=i*m;i=l*m;o=Je(n,g,h,i);a.qh=null;p=Ht(a.c.i.dl,c,K3(c.Y,g,h,i));q=0.0;r=0;while(r<CE(p)){s=Bc(p,r);if(s.qf()){t=Qg(FK(s.Y,0.10000000149011612,0.10000000149011612,
0.10000000149011612),n,o);if(t!==null){g=C$(n,t.d4);if(!(g>=q&&q!==0.0)){a.qh=s;q=g;}}}r=r+1|0;}if(a.qh!==null&&!(a.c.P instanceof CK))a.c.n=ATd(a.qh);u=0;if(u>=2){Cz(1,1,1,0);return;}if(a.c.d.b4){if(u)Cz(1,0,0,0);else Cz(0,1,1,0);}o=a.c.a;v=a.c.i;w=a.c.cw;x=a.c.bI;FI(0,0,a.c.cn,a.c.cp);H4(a,b);Db(16640);Y(2884);a.fa=512>>(a.c.d.fx<<1);CB(5889);Cp();if(a.c.d.b4)Bj( -((u<<1)-1|0)*0.07000000029802322,0.0,0.0);y=a.c.a;i=70.0;if(D4(y))i=60.0;if(y.b0<=0)i=i/((1.0-500.0/(y.dA+b+500.0))*2.0+1.0);Hu(i,a.c.cn/a.c.cp,
0.05000000074505806,a.fa);CB(5888);Cp();if(a.c.d.b4)Bj(((u<<1)-1|0)*0.10000000149011612,0.0,0.0);EW(a,b);if(a.c.d.ds)DU(a,b);c=a.c.a;g=c.cs+(c.f-c.cs)*b;d=c.cx+(c.j-c.cx)*b;q=c.ct+(c.g-c.ct)*b;if(!a.c.d.ce){Bj(0.0,0.0,(-0.10000000149011612));z=b;}else{e=4.0;z= -Bv(c.I/180.0*3.1415927410125732)*Bp(c.X/180.0*3.1415927410125732)*4.0;h=Bp(c.I/180.0*3.1415927410125732)*Bp(c.X/180.0*3.1415927410125732)*4.0;j= -Bv(c.X/180.0*3.1415927410125732)*4.0;ba=0;i=g-z;j=d-j;l=q-h;z=b;while(ba<8){h=((ba&1)<<1)-1|0;m=((ba>>1&
1)<<1)-1|0;bb=((ba>>2&1)<<1)-1|0;k=h*0.10000000149011612;z=m*0.10000000149011612;m=bb*0.10000000149011612;bc=E1(a.c.i,BF(g+k,d+z,q+m),BF(i+k+m,j+z,l+m));if(bc!==null){bb=C$(bc.d4,BF(g,d,q));if(bb<e)e=bb;}ba=ba+1|0;}Bj(0.0,0.0, -e);}Bs(c.b1+(c.X-c.b1)*z,1.0,0.0,0.0);Bs(c.bN+(c.I-c.bN)*z+180.0,0.0,1.0,0.0);Bj( -g, -d, -q);G7();EM(a);Y(2912);$p=1;case 1:AHF(w,b);if(I()){break _;}EM(a);bd=A$3();AE$(a.c.cw,bd);AJH(a.c.cw,o);EM(a);Y(2912);r=3553;c=a.c.cd;n=B(205);$p=2;case 2:a:{$z=AB2(c,n);if(I()){break _;}be=$z;Cj(r,
be);D9();S8(w,o,0);if(AOc(v,o.f,o.j,o.g,0.10000000149011612)){be=o.f|0;bf=o.j|0;bg=o.g|0;bh=AFs(v);bi=be-1|0;be=be+1|0;ba=bf-1|0;bf=bf+1|0;bj=bg-1|0;bg=bg+1|0;while(true){if(bi>be)break a;bk=ba;while(bk<=bf){bl=bj;while(bl<=bg){bm=O(v,bi,bk,bl);if(bm>0){L();AG_(bh,Bcf.data[bm],bi,bk,bl);}bl=bl+1|0;}bk=bk+1|0;}bi=bi+1|0;}}}I4();c=NI(a,b);$p=3;case 3:AMM(w,c,bd,b);if(I()){break _;}$p=4;case 4:AIM(x,b);if(I()){break _;}D9();EM(a);$p=5;case 5:ABB(x,o,b);if(I()){break _;}$p=6;case 6:ALV(w);if(I()){break _;}if(a.c.n
!==null&&D4(o)){Bb(3008);c=a.c.n;r=0;n=F0(o.F);$p=8;continue _;}Dy(770,771);EM(a);$p=7;case 7:ABS(w);if(I()){break _;}Y(3042);Bb(2884);Cz(0,0,0,0);be=S8(w,o,1);Cz(1,1,1,1);if(a.c.d.b4){if(u)Cz(1,0,0,0);else Cz(0,1,1,0);}if(be>0){$p=9;continue _;}EJ(1);Y(2884);Bb(3042);if(a.c.n!==null&&!D4(o)){Bb(3008);c=a.c.n;r=0;n=F0(o.F);$p=10;continue _;}Bb(2912);Db(256);Cp();if(a.c.d.b4)Bj(((u<<1)-1|0)*0.10000000149011612,0.0,0.0);Ca();EW(a,b);if(a.c.d.ds)DU(a,b);if(!a.c.d.ce){BN();c=a.e9;$p=11;continue _;}BR();if(!a.c.d.ce)
{BN();c=a.e9;$p=12;continue _;}if(a.c.d.ds)DU(a,b);if(!a.c.d.b4)return;u=u+1|0;if(u>=2){Cz(1,1,1,0);return;}if(a.c.d.b4){if(u)Cz(1,0,0,0);else Cz(0,1,1,0);}o=a.c.a;v=a.c.i;w=a.c.cw;x=a.c.bI;FI(0,0,a.c.cn,a.c.cp);H4(a,b);Db(16640);Y(2884);a.fa=512>>(a.c.d.fx<<1);CB(5889);Cp();if(a.c.d.b4)Bj( -((u<<1)-1|0)*0.07000000029802322,0.0,0.0);y=a.c.a;i=70.0;if(D4(y))i=60.0;if(y.b0<=0)i=i/((1.0-500.0/(y.dA+b+500.0))*2.0+1.0);Hu(i,a.c.cn/a.c.cp,0.05000000074505806,a.fa);CB(5888);Cp();if(a.c.d.b4)Bj(((u<<1)-1|0)*0.10000000149011612,
0.0,0.0);EW(a,b);if(a.c.d.ds)DU(a,b);c=a.c.a;g=c.cs+(c.f-c.cs)*b;d=c.cx+(c.j-c.cx)*b;q=c.ct+(c.g-c.ct)*b;if(!a.c.d.ce){Bj(0.0,0.0,(-0.10000000149011612));z=b;}else{e=4.0;z= -Bv(c.I/180.0*3.1415927410125732)*Bp(c.X/180.0*3.1415927410125732)*4.0;h=Bp(c.I/180.0*3.1415927410125732)*Bp(c.X/180.0*3.1415927410125732)*4.0;j= -Bv(c.X/180.0*3.1415927410125732)*4.0;ba=0;i=g-z;j=d-j;l=q-h;z=b;while(ba<8){h=((ba&1)<<1)-1|0;m=((ba>>1&1)<<1)-1|0;bb=((ba>>2&1)<<1)-1|0;k=h*0.10000000149011612;z=m*0.10000000149011612;m=bb*0.10000000149011612;bc
=E1(a.c.i,BF(g+k,d+z,q+m),BF(i+k+m,j+z,l+m));if(bc!==null){bb=C$(bc.d4,BF(g,d,q));if(bb<e)e=bb;}ba=ba+1|0;}Bj(0.0,0.0, -e);}Bs(c.b1+(c.X-c.b1)*z,1.0,0.0,0.0);Bs(c.bN+(c.I-c.bN)*z+180.0,0.0,1.0,0.0);Bj( -g, -d, -q);G7();EM(a);Y(2912);$p=1;continue _;case 8:AOn(w,c,r,n);if(I()){break _;}Xa(w,a.c.n,0);Y(3008);Dy(770,771);EM(a);$p=7;continue _;case 9:AIJ(w);if(I()){break _;}EJ(1);Y(2884);Bb(3042);if(a.c.n!==null&&!D4(o)){Bb(3008);c=a.c.n;r=0;n=F0(o.F);$p=10;continue _;}Bb(2912);Db(256);Cp();if(a.c.d.b4)Bj(((u<<
1)-1|0)*0.10000000149011612,0.0,0.0);Ca();EW(a,b);if(a.c.d.ds)DU(a,b);if(!a.c.d.ce){BN();c=a.e9;$p=11;continue _;}BR();if(!a.c.d.ce){BN();c=a.e9;$p=12;continue _;}if(a.c.d.ds)DU(a,b);if(!a.c.d.b4)return;u=u+1|0;if(u>=2){Cz(1,1,1,0);return;}if(a.c.d.b4){if(u)Cz(1,0,0,0);else Cz(0,1,1,0);}o=a.c.a;v=a.c.i;w=a.c.cw;x=a.c.bI;FI(0,0,a.c.cn,a.c.cp);H4(a,b);Db(16640);Y(2884);a.fa=512>>(a.c.d.fx<<1);CB(5889);Cp();if(a.c.d.b4)Bj( -((u<<1)-1|0)*0.07000000029802322,0.0,0.0);y=a.c.a;i=70.0;if(D4(y))i=60.0;if(y.b0<=0)i=i
/((1.0-500.0/(y.dA+b+500.0))*2.0+1.0);Hu(i,a.c.cn/a.c.cp,0.05000000074505806,a.fa);CB(5888);Cp();if(a.c.d.b4)Bj(((u<<1)-1|0)*0.10000000149011612,0.0,0.0);EW(a,b);if(a.c.d.ds)DU(a,b);c=a.c.a;g=c.cs+(c.f-c.cs)*b;d=c.cx+(c.j-c.cx)*b;q=c.ct+(c.g-c.ct)*b;if(!a.c.d.ce){Bj(0.0,0.0,(-0.10000000149011612));z=b;}else{e=4.0;z= -Bv(c.I/180.0*3.1415927410125732)*Bp(c.X/180.0*3.1415927410125732)*4.0;h=Bp(c.I/180.0*3.1415927410125732)*Bp(c.X/180.0*3.1415927410125732)*4.0;j= -Bv(c.X/180.0*3.1415927410125732)*4.0;ba=0;i=g-z;j
=d-j;l=q-h;z=b;while(ba<8){h=((ba&1)<<1)-1|0;m=((ba>>1&1)<<1)-1|0;bb=((ba>>2&1)<<1)-1|0;k=h*0.10000000149011612;z=m*0.10000000149011612;m=bb*0.10000000149011612;bc=E1(a.c.i,BF(g+k,d+z,q+m),BF(i+k+m,j+z,l+m));if(bc!==null){bb=C$(bc.d4,BF(g,d,q));if(bb<e)e=bb;}ba=ba+1|0;}Bj(0.0,0.0, -e);}Bs(c.b1+(c.X-c.b1)*z,1.0,0.0,0.0);Bs(c.bN+(c.I-c.bN)*z+180.0,0.0,1.0,0.0);Bj( -g, -d, -q);G7();EM(a);Y(2912);$p=1;continue _;case 10:AOn(w,c,r,n);if(I()){break _;}Xa(w,a.c.n,0);Y(3008);Bb(2912);Db(256);Cp();if(a.c.d.b4)Bj(((u
<<1)-1|0)*0.10000000149011612,0.0,0.0);Ca();EW(a,b);if(a.c.d.ds)DU(a,b);if(!a.c.d.ce){BN();c=a.e9;$p=11;continue _;}BR();if(!a.c.d.ce){BN();c=a.e9;$p=12;continue _;}if(a.c.d.ds)DU(a,b);if(!a.c.d.b4)return;u=u+1|0;if(u>=2){Cz(1,1,1,0);return;}if(a.c.d.b4){if(u)Cz(1,0,0,0);else Cz(0,1,1,0);}o=a.c.a;v=a.c.i;w=a.c.cw;x=a.c.bI;FI(0,0,a.c.cn,a.c.cp);H4(a,b);Db(16640);Y(2884);a.fa=512>>(a.c.d.fx<<1);CB(5889);Cp();if(a.c.d.b4)Bj( -((u<<1)-1|0)*0.07000000029802322,0.0,0.0);y=a.c.a;i=70.0;if(D4(y))i=60.0;if(y.b0<=0)i
=i/((1.0-500.0/(y.dA+b+500.0))*2.0+1.0);Hu(i,a.c.cn/a.c.cp,0.05000000074505806,a.fa);CB(5888);Cp();if(a.c.d.b4)Bj(((u<<1)-1|0)*0.10000000149011612,0.0,0.0);EW(a,b);if(a.c.d.ds)DU(a,b);c=a.c.a;g=c.cs+(c.f-c.cs)*b;d=c.cx+(c.j-c.cx)*b;q=c.ct+(c.g-c.ct)*b;if(!a.c.d.ce){Bj(0.0,0.0,(-0.10000000149011612));z=b;}else{e=4.0;z= -Bv(c.I/180.0*3.1415927410125732)*Bp(c.X/180.0*3.1415927410125732)*4.0;h=Bp(c.I/180.0*3.1415927410125732)*Bp(c.X/180.0*3.1415927410125732)*4.0;j= -Bv(c.X/180.0*3.1415927410125732)*4.0;ba=0;i=g
-z;j=d-j;l=q-h;z=b;while(ba<8){h=((ba&1)<<1)-1|0;m=((ba>>1&1)<<1)-1|0;bb=((ba>>2&1)<<1)-1|0;k=h*0.10000000149011612;z=m*0.10000000149011612;m=bb*0.10000000149011612;bc=E1(a.c.i,BF(g+k,d+z,q+m),BF(i+k+m,j+z,l+m));if(bc!==null){bb=C$(bc.d4,BF(g,d,q));if(bb<e)e=bb;}ba=ba+1|0;}Bj(0.0,0.0, -e);}Bs(c.b1+(c.X-c.b1)*z,1.0,0.0,0.0);Bs(c.bN+(c.I-c.bN)*z+180.0,0.0,1.0,0.0);Bj( -g, -d, -q);G7();EM(a);Y(2912);$p=1;continue _;case 11:ADl(c,b);if(I()){break _;}BN();BR();if(!a.c.d.ce){BN();c=a.e9;$p=12;continue _;}if(a.c.d.ds)DU(a,
b);if(!a.c.d.b4)return;u=u+1|0;if(u>=2){Cz(1,1,1,0);return;}if(a.c.d.b4){if(u)Cz(1,0,0,0);else Cz(0,1,1,0);}o=a.c.a;v=a.c.i;w=a.c.cw;x=a.c.bI;FI(0,0,a.c.cn,a.c.cp);H4(a,b);Db(16640);Y(2884);a.fa=512>>(a.c.d.fx<<1);CB(5889);Cp();if(a.c.d.b4)Bj( -((u<<1)-1|0)*0.07000000029802322,0.0,0.0);y=a.c.a;i=70.0;if(D4(y))i=60.0;if(y.b0<=0)i=i/((1.0-500.0/(y.dA+b+500.0))*2.0+1.0);Hu(i,a.c.cn/a.c.cp,0.05000000074505806,a.fa);CB(5888);Cp();if(a.c.d.b4)Bj(((u<<1)-1|0)*0.10000000149011612,0.0,0.0);EW(a,b);if(a.c.d.ds)DU(a,b);c
=a.c.a;g=c.cs+(c.f-c.cs)*b;d=c.cx+(c.j-c.cx)*b;q=c.ct+(c.g-c.ct)*b;if(!a.c.d.ce){Bj(0.0,0.0,(-0.10000000149011612));z=b;}else{e=4.0;z= -Bv(c.I/180.0*3.1415927410125732)*Bp(c.X/180.0*3.1415927410125732)*4.0;h=Bp(c.I/180.0*3.1415927410125732)*Bp(c.X/180.0*3.1415927410125732)*4.0;j= -Bv(c.X/180.0*3.1415927410125732)*4.0;ba=0;i=g-z;j=d-j;l=q-h;z=b;while(ba<8){h=((ba&1)<<1)-1|0;m=((ba>>1&1)<<1)-1|0;bb=((ba>>2&1)<<1)-1|0;k=h*0.10000000149011612;z=m*0.10000000149011612;m=bb*0.10000000149011612;bc=E1(a.c.i,BF(g+k,d
+z,q+m),BF(i+k+m,j+z,l+m));if(bc!==null){bb=C$(bc.d4,BF(g,d,q));if(bb<e)e=bb;}ba=ba+1|0;}Bj(0.0,0.0, -e);}Bs(c.b1+(c.X-c.b1)*z,1.0,0.0,0.0);Bs(c.bN+(c.I-c.bN)*z+180.0,0.0,1.0,0.0);Bj( -g, -d, -q);G7();EM(a);Y(2912);$p=1;continue _;case 12:AKX(c,b);if(I()){break _;}BN();EW(a,b);if(a.c.d.ds)DU(a,b);if(!a.c.d.b4)return;u=u+1|0;if(u>=2){Cz(1,1,1,0);return;}if(a.c.d.b4){if(u)Cz(1,0,0,0);else Cz(0,1,1,0);}o=a.c.a;v=a.c.i;w=a.c.cw;x=a.c.bI;FI(0,0,a.c.cn,a.c.cp);H4(a,b);Db(16640);Y(2884);a.fa=512>>(a.c.d.fx<<1);CB(5889);Cp();if
(a.c.d.b4)Bj( -((u<<1)-1|0)*0.07000000029802322,0.0,0.0);y=a.c.a;i=70.0;if(D4(y))i=60.0;if(y.b0<=0)i=i/((1.0-500.0/(y.dA+b+500.0))*2.0+1.0);Hu(i,a.c.cn/a.c.cp,0.05000000074505806,a.fa);CB(5888);Cp();if(a.c.d.b4)Bj(((u<<1)-1|0)*0.10000000149011612,0.0,0.0);EW(a,b);if(a.c.d.ds)DU(a,b);c=a.c.a;g=c.cs+(c.f-c.cs)*b;d=c.cx+(c.j-c.cx)*b;q=c.ct+(c.g-c.ct)*b;if(!a.c.d.ce){Bj(0.0,0.0,(-0.10000000149011612));z=b;}else{e=4.0;z= -Bv(c.I/180.0*3.1415927410125732)*Bp(c.X/180.0*3.1415927410125732)*4.0;h=Bp(c.I/180.0*3.1415927410125732)
*Bp(c.X/180.0*3.1415927410125732)*4.0;j= -Bv(c.X/180.0*3.1415927410125732)*4.0;ba=0;i=g-z;j=d-j;l=q-h;z=b;while(ba<8){h=((ba&1)<<1)-1|0;m=((ba>>1&1)<<1)-1|0;bb=((ba>>2&1)<<1)-1|0;k=h*0.10000000149011612;z=m*0.10000000149011612;m=bb*0.10000000149011612;bc=E1(a.c.i,BF(g+k,d+z,q+m),BF(i+k+m,j+z,l+m));if(bc!==null){bb=C$(bc.d4,BF(g,d,q));if(bb<e)e=bb;}ba=ba+1|0;}Bj(0.0,0.0, -e);}Bs(c.b1+(c.X-c.b1)*z,1.0,0.0,0.0);Bs(c.bN+(c.I-c.bN)*z+180.0,0.0,1.0,0.0);Bj( -g, -d, -q);G7();EM(a);Y(2912);$p=1;continue _;default:F2();}}Dh().s(a,
b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,$p);}
function O9(a){var b,c,d;b=G8(a.c.cn,a.c.cp);c=b.fY;d=b.fR;Db(256);CB(5889);Cp();N3(0.0,c,d,0.0,1000.0,3000.0);CB(5888);Cp();Bj(0.0,0.0,(-2000.0));}
function H4(a,b){var c,d,e,f,g,h,i,j,k,l,m,n;c=a.c.i;d=a.c.a;e=1.0-AYX(1.0/(4-a.c.d.fx|0),0.25);f=UM(c,b);g=f.U;h=f.R;i=f.S;j=ABv(c,b);a.fI=j.U;a.f7=j.R;a.gc=j.S;a.fI=a.fI+(g-a.fI)*e;a.f7=a.f7+(h-a.f7)*e;a.gc=a.gc+(i-a.gc)*e;L();k=Bcf.data[O(c,d.f|0,d.j+0.11999999731779099|0,d.g|0)];if(k!==null&&k.ck!==Bc_){l=k.ck;if(l===Bda){a.fI=0.019999999552965164;a.f7=0.019999999552965164;a.gc=0.20000000298023224;}else if(l===Bdb){a.fI=0.6000000238418579;a.f7=0.10000000149011612;a.gc=0.0;}}m=a.xk+(a.pE-a.xk)*b;a.fI=a.fI
*m;a.f7=a.f7*m;a.gc=a.gc*m;if(a.c.d.b4){b=(a.fI*30.0+a.f7*59.0+a.gc*11.0)/100.0;e=(a.fI*30.0+a.f7*70.0)/100.0;n=(a.fI*30.0+a.gc*70.0)/100.0;a.fI=b;a.f7=e;a.gc=n;}Pr(a.fI,a.f7,a.gc,0.0);}
function EM(a){var b,c,d,e,f,g,h;b=a.c.i;c=a.c.a;d=a.gc;e=a.f7;f=a.fI;DM(a.ol);Ch(Ch(Ch(Ch(a.ol,f),e),d),1.0);Ec(a.ol);g=a.ol;BS();Bbq=Kz(g);Bbr=Kz(g);Bbs=Kz(g);Bbt=Kz(g);IT(0.0,(-1.0),0.0);BJ(1.0,1.0,1.0,1.0);L();g=Bcf.data[O(b,c.f|0,c.j+0.11999999731779099|0,c.g|0)];if(g!==null&&g.ck.l$()){h=g.ck;Y7(2917,2048);if(h===Bda)KW(2914,0.10000000149011612);else if(h===Bdb)KW(2914,2.0);}else{Y7(2917,9729);KW(2915,a.fa/4.0);KW(2916,a.fa);}Y(2903);}
function Iy(){C.call(this);}
var Bdc=null;var Bdd=null;function AOv(b){var c;A9C(D(Iy));try{c=JF(b);M(Bdc,C0(c));M(Bdc,C0(b));return c;}finally{A_f(D(Iy));}}
function P9(b){var c,d,e,f,g;A9C(D(Iy));try{c=b.O;while(c<b.cv){BS();d=Ba8;Be();e=new WN;f=A_Q.createTexture();e.Hu=(-1);e.Hr=(-1);e.IS=1;e.Jg=0;e.FC=f;g=SJ(d,e);ANw(b,c,g);M(Bdd,C0(g));c=c+1|0;}}finally{A_f(D(Iy));}}
function HE(b){var c,d,e,f;c=$rt_createFloatArray(b);d=c.data.length;e=new Zo;f=0+d|0;LQ(e,d);e.O=0;e.cv=f;e.zh=0;e.yf=0;e.x3=c;return e;}
function ABR(){Bdc=BU();Bdd=BU();}
function Fv(){C.call(this);}
function JV(){var a=this;Fv.call(a);a.i0=null;a.k2=null;a.qg=null;a.dS=null;a.dH=null;a.iL=null;a.g$=null;}
function A90(){var a=new JV();KF(a);return a;}
function AMY(a){var b=new JV();P1(b,a);return b;}
function Bde(a,b){var c=new JV();AMr(c,a,b);return c;}
function KF(a){P1(a,0.0);}
function P1(a,b){AMr(a,b,0.0);}
function AMr(a,b,c){a.i0=BK(0,0);BH(a.i0,(-4.0),(-8.0),(-4.0),8,8,8,b);BG(a.i0,0.0,0.0,0.0);a.k2=BK(32,0);BH(a.k2,(-4.0),(-8.0),(-4.0),8,8,8,b+0.5);BG(a.k2,0.0,0.0,0.0);a.qg=BK(16,16);BH(a.qg,(-4.0),0.0,(-2.0),8,12,4,b);BG(a.qg,0.0,0.0,0.0);a.dS=BK(40,16);BH(a.dS,(-3.0),(-2.0),(-2.0),4,12,4,b);BG(a.dS,(-5.0),2.0,0.0);a.dH=BK(40,16);a.dH.lX=1;BH(a.dH,(-1.0),(-2.0),(-2.0),4,12,4,b);BG(a.dH,5.0,2.0,0.0);a.iL=BK(0,16);BH(a.iL,(-2.0),0.0,(-2.0),4,12,4,b);BG(a.iL,(-2.0),12.0,0.0);a.g$=BK(0,16);a.g$.lX=1;BH(a.g$,(-2.0),
0.0,(-2.0),4,12,4,b);BG(a.g$,2.0,12.0,0.0);}
function A8m(a,b,c,d,e,f,g){a.oS(b,c,d,e,f,1.0);B8(a.i0,1.0);B8(a.qg,1.0);B8(a.dS,1.0);B8(a.dH,1.0);B8(a.iL,1.0);B8(a.g$,1.0);B8(a.k2,1.0);}
function ABk(a,b,c,d,e,f,g){var h;a.i0.cc=e/57.2957763671875;a.i0.b7=f/57.2957763671875;a.k2.cc=a.i0.cc;a.k2.b7=a.i0.b7;h=a.dS;e=b*0.6661999821662903;f=e+3.1415927410125732;h.b7=Bp(f)*2.0*c;a.dS.bY=(Bp(b*0.23119999468326569)+1.0)*c;a.dH.b7=Bp(e)*2.0*c;a.dH.bY=(Bp(b*0.28119999170303345)-1.0)*c;a.iL.b7=Bp(e)*1.399999976158142*c;a.g$.b7=Bp(f)*1.399999976158142*c;h=a.dS;b=h.bY;c=d*0.09000000357627869;h.bY=b+Bp(c)*0.05000000074505806+0.05000000074505806;h=a.dH;h.bY=h.bY-(Bp(c)*0.05000000074505806+0.05000000074505806);h
=a.dS;b=h.b7;c=d*0.06700000166893005;h.b7=b+Bv(c)*0.05000000074505806;h=a.dH;h.b7=h.b7-Bv(c)*0.05000000074505806;}
function I2(){var a=this;C.call(a);a.IP=null;a.G6=0;a.Hs=0;a.n7=0;}
function Bdf(a){var b=new I2();S2(b,a);return b;}
function S2(a,b){a.IP=$rt_createByteArray(1024);a.Hs=0;a.n7=0;a.G6=b;}
function QU(){var a=this;I2.call(a);a.KX=null;a.Kj=null;a.JT=null;a.HQ=null;a.G9=0;}
function Ta(){var a=this;I2.call(a);a.Hb=null;a.JL=null;a.H$=null;a.HD=null;}
function F_(){var a=this;C.call(a);a.KK=Long_ZERO;a.Fd=0;a.EK=Long_ZERO;a.xt=0;a.nc=null;a.DS=null;a.GN=null;a.wY=0;a.zC=null;}
var Bdg=null;var A_q=null;var Bdh=Long_ZERO;var Bdi=0;function A$F(a){var b=new F_();V9(b,a);return b;}
function A$k(a){var b=new F_();Te(b,a);return b;}
function Bdj(a,b){var c=new F_();Pp(c,a,b);return c;}
function V9(a,b){Pp(a,null,b);}
function Te(a,b){Pp(a,b,null);}
function Pp(a,b,c){var d;a.nc=new C;a.wY=1;a.GN=c;a.zC=b;d=Bdh;Bdh=Long_add(d,Long_fromInt(1));a.KK=d;}
function VG(a){var b;b=new YY;b.AR=a;AVX(b);}
function FU(b){if(A_q!==b)A_q=b;A_q.EK=CF();}
function ANK(a){var b,$p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.zC===null)return;b=a.zC;$p=1;case 1:b.hK();if(I()){break _;}return;default:F2();}}Dh().s(a,b,$p);}
function AOP(){return A_q;}
function AXw(a,b){a.Fd=b;}
function AAe(){var b,c,$p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:b=A_q;c=b.xt+1|0;b.xt=c;if(c<30)return;A_q.xt=0;if(Long_ge(Long_add(b.EK,Long_fromInt(100)),CF()))return;$p=1;case 1:AJF(b);if(I()){break _;}return;default:F2();}}Dh().s(b,c,$p);}
function AJF(b){var thread=$rt_nativeThread();var javaThread=$rt_getThread();if(thread.isResuming()){thread.status=0;var result=thread.attribute;if(result instanceof Error){throw result;}return result;}var callback=function(){};callback.Hp=function(val){thread.attribute=val;$rt_setThread(javaThread);thread.resume();};callback.J4=function(e){thread.attribute=$rt_exception(e);$rt_setThread(javaThread);thread.resume();};callback=A9g(callback);return thread.suspend(function(){try{AZ5(b,callback);}catch($e){callback.J4($rt_exception($e));}});}
function AZ5(b,c){var d;d=new U$;d.Dg=b;d.Df=c;S0(d);}
function AI7(b){var thread=$rt_nativeThread();var javaThread=$rt_getThread();if(thread.isResuming()){thread.status=0;var result=thread.attribute;if(result instanceof Error){throw result;}return result;}var callback=function(){};callback.Hp=function(val){thread.attribute=val;$rt_setThread(javaThread);thread.resume();};callback.J4=function(e){thread.attribute=$rt_exception(e);$rt_setThread(javaThread);thread.resume();};callback=A9g(callback);return thread.suspend(function(){try{ARy(b,callback);}catch($e){callback.J4($rt_exception($e));}});}
function ARy(b,c){var d,e;d=A_q;e=new QQ;e.wN=d;e.Cn=c;e.Kw=AFV(e,Long_ge(b,Long_fromInt(2147483647))?2147483647:b.lo);d.DS=e;}
function ABh(){Bdg=A$F(B(228));A_q=Bdg;Bdh=Long_fromInt(1);Bdi=1;}
function ZG(){F_.call(this);}
function AGp(a){var b,$$je,$p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:while(true){try{b=Long_fromInt(2147483647);$p=1;continue _;}catch($$e){$$je=Bh($$e);if($$je instanceof Ds){}else{throw $$e;}}}case 1:a:{try{AI7(b);if(I()){break _;}break a;}catch($$e){$$je=Bh($$e);if($$je instanceof Ds){}else{throw $$e;}}}while(true){try{b=Long_fromInt(2147483647);continue _;}catch($$e){$$je=Bh($$e);if($$je instanceof Ds){}else{throw $$e;}}}default:F2();}}Dh().s(a,b,$p);}
function Ct(){var a=this;C.call(a);a.fU=null;a.f6=null;a.q9=null;}
var Bc1=null;var Bdk=null;var Bdl=null;var Bdm=null;var Bdn=null;var Bdo=null;var Bdp=null;var Bdq=null;var Bdr=null;var Bds=null;var Bdt=null;var Bdu=null;var Bdv=null;var Bdw=null;var Bdx=null;var Bdy=null;var Bdz=null;var BdA=null;var BdB=null;var BdC=null;var BdD=null;var BdE=null;var BdF=null;function C1(a,b){var c=new Ct();AKz(c,a,b);return c;}
function A9t(a,b,c){var d=new Ct();YM(d,a,b,c);return d;}
function AKz(a,b,c){YM(a,b,c,B(9));}
function YM(a,b,c,d){if(b!==null&&c!==null&&d!==null){if(!Q(b)&&!Q(c)){a.f6=B(9);a.fU=B(9);a.q9=d;return;}a.f6=b;a.fU=c;a.q9=d;return;}b=new Eg;Z(b);J(b);}
function A2f(a,b){var c;if(b===a)return 1;if(!(b instanceof Ct))return 0;c=b;return BW(a.f6,c.f6)&&BW(a.fU,c.fU)&&BW(a.q9,c.q9)?1:0;}
function ASQ(a){return a.fU;}
function AUZ(a){return a.f6;}
function ADq(){var b,c;Bdk=C1(B(229),B(230));Bdl=C1(B(231),B(230));Bdm=C1(B(232),B(233));Bdn=C1(B(232),B(9));Bdo=C1(B(229),B(9));Bdp=C1(B(231),B(234));Bdq=C1(B(231),B(9));Bdr=C1(B(235),B(9));Bds=C1(B(235),B(236));Bdt=C1(B(237),B(9));Bdu=C1(B(237),B(238));Bdv=C1(B(239),B(240));Bdw=C1(B(239),B(9));Bdx=C1(B(241),B(242));Bdy=C1(B(241),B(9));Bdz=C1(B(232),B(233));BdA=C1(B(232),B(233));BdB=C1(B(232),B(243));BdC=C1(B(232),B(243));BdD=C1(B(229),B(244));BdE=C1(B(229),B(245));BdF=C1(B(9),B(9));if(BdG===null)BdG=AU$();b
=(BdG.value!==null?$rt_str(BdG.value):null);c=Fx(b,95);Bc1=A9t(BO(b,0,c),DO(b,c+1|0),B(9));}
function EQ(){}
function SS(){C.call(this);this.Ev=null;}
function AAU(a){CY(a.Ev,YW(0,1,null,null));}
function AW2(a){AAU(a);}
function ST(){var a=this;C.call(a);a.E8=null;a.El=null;}
function AAL(a){CY(a.E8,YW(0,0,null,a.El.result));}
function ATt(a){AAL(a);}
function SU(){C.call(this);this.Cr=null;}
function AGm(a){CY(a.Cr,YW(1,0,B(246),null));}
function A4r(a){AGm(a);}
function SV(){C.call(this);this.AO=null;}
function AOq(a,b){var c,d,e,f,g,h,i;c=a.AO.result;d=A6z();e=H(BC,1).data;e[0]=B(247);f=e.length;g=new Array(f);h=0;while(h<f){i=$rt_ustr(e[h]);g[h]=i;h=h+1|0;}d.keyPath=g;c.createObjectStore("filesystem",d);}
function AIa(a,b){AOq(a,b);}
function A6Y(a,b){AIa(a,b);}
function UN(){C.call(this);}
var Bc3=null;function AFL(){Bc3=CZ();BI(Bc3,B(31),AGy());}
function BB(){BT.call(this);}
function DB(){var a=new BB();AQk(a);return a;}
function BdH(a){var b=new BB();AOE(b,a);return b;}
function AQk(a){Z(a);}
function AOE(a,b){Bd(a,b);}
function Xv(){BB.call(this);this.JG=null;}
function Eg(){BT.call(this);}
function OK(){CI.call(this);this.r$=0;}
function A3W(a,b){LO(b,a.r$);}
function AQo(a,b){a.r$=Pk(b);}
function A5D(a){return 1;}
function UJ(){CI.call(this);this.h8=0;}
function Vf(a){var b=new UJ();AP2(b,a);return b;}
function AP2(a,b){C5(a);a.h8=b;}
function A7t(a,b){Ry(b,a.h8);}
function AYk(a,b){a.h8=L1(b);}
function AR_(a){return 2;}
function Mh(){CI.call(this);this.qR=0;}
function AV8(a,b){K0(b,a.qR);}
function APH(a,b){a.qR=I$(b);}
function AT3(a){return 3;}
function LZ(){CI.call(this);this.rO=Long_ZERO;}
function A2V(a,b){W1(b,a.rO);}
function A1O(a,b){a.rO=VD(b);}
function AWg(a){return 4;}
function Y2(){CI.call(this);this.gx=0.0;}
function A6F(a){var b=new Y2();A4K(b,a);return b;}
function A4K(a,b){C5(a);a.gx=b;}
function A3j(a,b){AMd(b,a.gx);}
function APL(a,b){a.gx=ACP(b);}
function A0p(a){return 5;}
function QT(){CI.call(this);this.F4=0.0;}
function A2P(a,b){AMl(b,a.F4);}
function AZ1(a,b){a.F4=AMj(b);}
function AX7(a){return 6;}
function MW(){CI.call(this);this.nT=null;}
function A1q(a,b){K0(b,a.nT.data.length);Ye(b,a.nT);}
function A5d(a,b){a.nT=$rt_createByteArray(I$(b));OH(b,a.nT);}
function A5g(a){return 7;}
function OW(){CI.call(this);this.rS=null;}
function ARB(a,b){var c;c=AEt(a.rS,B(31));Ry(b,c.data.length);Ye(b,c);}
function A16(a,b){var c;c=$rt_createByteArray(L1(b));OH(b,c);a.rS=AUw(c,B(31));}
function A7I(a){return 8;}
function AHb(){var a=this;CI.call(a);a.hu=null;a.mq=0;}
function Gu(){var a=new AHb();A1e(a);return a;}
function A1e(a){C5(a);a.hu=BU();}
function A4S(a,b){var c;if(a.hu.q<=0)a.mq=1;else a.mq=Bc(a.hu,0).e4();LO(b,a.mq);K0(b,a.hu.q);c=0;while(c<a.hu.q){Bc(a.hu,c).gB(b);c=c+1|0;}}
function APY(a,b){var c,d,e;a.mq=Pk(b);c=I$(b);a.hu=BU();d=0;while(d<c){e=Z_(a.mq);e.gu(b);M(a.hu,e);d=d+1|0;}}
function AZf(a){return 9;}
function EP(a,b){a.mq=b.e4();M(a.hu,b);}
function CS(a,b){return Bc(a.hu,b);}
function GU(a){return a.hu.q;}
function AG3(){Iy.call(this);}
function KZ(b){return AJG($rt_createIntArray(b));}
function U7(){var a=this;C.call(a);a.e3=null;a.eE=null;a.iU=0.0;a.r_=0.0;a.iB=0;a.j2=0;a.BH=null;}
function ADl(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,$p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.r_+(a.iU-a.r_)*b;d=a.e3.a;Ca();Bs(d.b1+(d.X-d.b1)*b,1.0,0.0,0.0);Bs(d.bN+(d.I-d.bN)*b,0.0,1.0,0.0);BN();I4();BN();BR();e=DT(a.e3.i,d.f|0,d.j|0,d.g|0);BJ(e,e,e,1.0);if(a.eE===
null){Ca();if(a.j2){e=(a.iB+b)/8.0;f=Bv(e*3.1415927410125732);Bj( -Bv(B$(e)*3.1415927410125732)*0.30000001192092896,Bv(B$(e)*3.1415927410125732*2.0)*0.4000000059604645, -f*0.4000000059604645);}Bj(0.64000004529953,(-0.6000000238418579)-(1.0-c)*0.6000000238418579,(-0.7199999690055847));Bs(45.0,0.0,1.0,0.0);Y(2977);if(a.j2){b=(a.iB+b)/8.0;f=Bv(b*b*3.1415927410125732);Bs(Bv(B$(b)*3.1415927410125732)*70.0,0.0,1.0,0.0);Bs( -f*20.0,0.0,0.0,1.0);}g=3553;d=a.e3.cd;h=AMi(a.e3.a);$p=1;continue _;}Ca();if(a.j2){e=(a.iB
+b)/8.0;f=Bv(e*3.1415927410125732);Bj( -Bv(B$(e)*3.1415927410125732)*0.4000000059604645,Bv(B$(e)*3.1415927410125732*2.0)*0.20000000298023224, -f*0.20000000298023224);}Bj(0.5600000023841858,(-0.5199999809265137)-(1.0-c)*0.6000000238418579,(-0.7199999690055847));Bs(45.0,0.0,1.0,0.0);Y(2977);if(a.j2){b=(a.iB+b)/8.0;f=Bv(b*b*3.1415927410125732);i=Bv(B$(b)*3.1415927410125732);Bs( -f*20.0,0.0,1.0,0.0);b= -i;Bs(b*20.0,0.0,0.0,1.0);Bs(b*80.0,1.0,0.0,0.0);}C7(0.4000000059604645,0.4000000059604645,0.4000000059604645);if
(a.eE.bX<256){L();if(!Bcf.data[a.eE.bX].ig()){g=3553;d=a.e3.cd;h=B(205);$p=4;continue _;}}if(a.eE.bX>=256){g=3553;d=a.e3.cd;h=B(248);$p=2;continue _;}g=3553;d=a.e3.cd;h=B(205);$p=3;continue _;case 1:$z=AJo(d,h);if(I()){break _;}j=$z;Cj(g,j);Bj((-0.20000000298023224),(-0.30000001192092896),0.10000000149011612);Bs(120.0,0.0,0.0,1.0);Bs(200.0,1.0,0.0,0.0);Bs((-135.0),0.0,1.0,0.0);C7(0.0625,0.0625,0.0625);Bj(6.0,0.0,0.0);k=Qz(BdI,a.e3.a);BN();ALf(k);BN();BR();Bb(2977);BN();D9();BN();return;case 2:$z=AB2(d,h);if
(I()){break _;}j=$z;Cj(g,j);BD();h=Bc$;i=((Gh(BZ(a.eE))%16|0)<<4)/256.0;b=(((Gh(BZ(a.eE))%16|0)<<4)+16|0)/256.0;l=((Gh(BZ(a.eE))/16|0)<<4)/256.0;m=(((Gh(BZ(a.eE))/16|0)<<4)+16|0)/256.0;Y(2977);Bj(0.0,(-0.30000001192092896),0.0);C7(1.5,1.5,1.5);Bs(50.0,0.0,1.0,0.0);Bs(335.0,0.0,0.0,1.0);Bj((-0.9375),(-0.0625),0.0);B0(h,0.0,0.0,1.0);Bx(h);n=b;o=m;F(h,0.0,0.0,0.0,n,o);p=i;F(h,1.0,0.0,0.0,p,o);q=l;F(h,1.0,1.0,0.0,p,q);F(h,0.0,1.0,0.0,n,q);Bt(h);B0(h,0.0,0.0,(-1.0));Bx(h);F(h,0.0,1.0,(-0.0625),n,q);F(h,1.0,1.0,(-0.0625),
p,q);F(h,1.0,0.0,(-0.0625),p,o);F(h,0.0,0.0,(-0.0625),n,o);Bt(h);B0(h,(-1.0),0.0,0.0);Bx(h);j=0;f=i-b;while(j<16){r=j/16.0;s=b+f*r-0.001953125;t=r*1.0;u=s;F(h,t,0.0,(-0.0625),u,o);F(h,t,0.0,0.0,u,o);F(h,t,1.0,0.0,u,q);F(h,t,1.0,(-0.0625),u,q);j=j+1|0;}Bt(h);B0(h,1.0,0.0,0.0);Bx(h);g=0;while(g<16){r=g/16.0;s=b+f*r-0.001953125;t=r*1.0+0.0625;u=s;F(h,t,1.0,(-0.0625),u,q);F(h,t,1.0,0.0,u,q);F(h,t,0.0,0.0,u,o);F(h,t,0.0,(-0.0625),u,o);g=g+1|0;}Bt(h);B0(h,0.0,1.0,0.0);Bx(h);g=0;f=l-m;while(g<16){r=g/16.0;s=m+f*r-
0.001953125;v=r*1.0+0.0625;u=s;F(h,0.0,v,0.0,n,u);F(h,1.0,v,0.0,p,u);F(h,1.0,v,(-0.0625),p,u);F(h,0.0,v,(-0.0625),n,u);g=g+1|0;}Bt(h);B0(h,0.0,(-1.0),0.0);Bx(h);g=0;while(g<16){r=g/16.0;s=m+f*r-0.001953125;v=r*1.0;u=s;F(h,1.0,v,0.0,p,u);F(h,0.0,v,0.0,n,u);F(h,0.0,v,(-0.0625),n,u);F(h,1.0,v,(-0.0625),p,u);g=g+1|0;}BN();Bt(h);BN();Bb(2977);BR();Bb(2977);BN();D9();BN();return;case 3:$z=AB2(d,h);if(I()){break _;}j=$z;Cj(g,j);BD();h=Bc$;i=((Gh(BZ(a.eE))%16|0)<<4)/256.0;b=(((Gh(BZ(a.eE))%16|0)<<4)+16|0)/256.0;l=((Gh(BZ(a.eE))
/16|0)<<4)/256.0;m=(((Gh(BZ(a.eE))/16|0)<<4)+16|0)/256.0;Y(2977);Bj(0.0,(-0.30000001192092896),0.0);C7(1.5,1.5,1.5);Bs(50.0,0.0,1.0,0.0);Bs(335.0,0.0,0.0,1.0);Bj((-0.9375),(-0.0625),0.0);B0(h,0.0,0.0,1.0);Bx(h);n=b;o=m;F(h,0.0,0.0,0.0,n,o);p=i;F(h,1.0,0.0,0.0,p,o);q=l;F(h,1.0,1.0,0.0,p,q);F(h,0.0,1.0,0.0,n,q);Bt(h);B0(h,0.0,0.0,(-1.0));Bx(h);F(h,0.0,1.0,(-0.0625),n,q);F(h,1.0,1.0,(-0.0625),p,q);F(h,1.0,0.0,(-0.0625),p,o);F(h,0.0,0.0,(-0.0625),n,o);Bt(h);B0(h,(-1.0),0.0,0.0);Bx(h);j=0;f=i-b;while(j<16){r=j/16.0;s
=b+f*r-0.001953125;t=r*1.0;u=s;F(h,t,0.0,(-0.0625),u,o);F(h,t,0.0,0.0,u,o);F(h,t,1.0,0.0,u,q);F(h,t,1.0,(-0.0625),u,q);j=j+1|0;}Bt(h);B0(h,1.0,0.0,0.0);Bx(h);g=0;while(g<16){r=g/16.0;s=b+f*r-0.001953125;t=r*1.0+0.0625;u=s;F(h,t,1.0,(-0.0625),u,q);F(h,t,1.0,0.0,u,q);F(h,t,0.0,0.0,u,o);F(h,t,0.0,(-0.0625),u,o);g=g+1|0;}Bt(h);B0(h,0.0,1.0,0.0);Bx(h);g=0;f=l-m;while(g<16){r=g/16.0;s=m+f*r-0.001953125;v=r*1.0+0.0625;u=s;F(h,0.0,v,0.0,n,u);F(h,1.0,v,0.0,p,u);F(h,1.0,v,(-0.0625),p,u);F(h,0.0,v,(-0.0625),n,u);g=g+1
|0;}Bt(h);B0(h,0.0,(-1.0),0.0);Bx(h);g=0;while(g<16){r=g/16.0;s=m+f*r-0.001953125;v=r*1.0;u=s;F(h,1.0,v,0.0,p,u);F(h,0.0,v,0.0,n,u);F(h,0.0,v,(-0.0625),n,u);F(h,1.0,v,(-0.0625),p,u);g=g+1|0;}BN();Bt(h);BN();Bb(2977);BR();Bb(2977);BN();D9();BN();return;case 4:$z=AB2(d,h);if(I()){break _;}j=$z;Cj(g,j);IU(a.BH,Bcf.data[a.eE.bX]);BR();Bb(2977);BN();D9();BN();return;default:F2();}}Dh().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,$p);}
function AKX(a,b){var c,d,e,f,g,h,i,j,k,$p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:Bb(3008);if(!D4(a.e3.a)){Y(3008);return;}c=a.e3.cd;d=B(210);$p=1;case 1:$z=AB2(c,d);if(I()){break _;}e=$z;Cj(3553,e);BD();d=Bc$;f=EC(a.e3.a,b);BJ(f,f,f,0.5);Y(3042);Dy(770,771);Ca();g= -a.e3.a.I/64.0;h=a.e3.a.X/64.0;Bx(d);i=g+4.0;j=h+4.0;F(d,(-1.0),(-1.0),(-0.5),i,j);k=g+0.0;F(d,1.0,(-1.0),(-0.5),
k,j);j=h+0.0;F(d,1.0,1.0,(-0.5),k,j);F(d,(-1.0),1.0,(-0.5),i,j);BN();Bt(d);BN();BR();BJ(1.0,1.0,1.0,1.0);Bb(3042);Y(3008);return;default:F2();}}Dh().s(a,b,c,d,e,f,g,h,i,j,k,$p);}
function AH4(a){var b,c;a.r_=a.iU;if(a.j2){a.iB=a.iB+1|0;if(a.iB==8){a.iB=0;a.j2=0;}}b=F0(a.e3.a.F);c=(b!==a.eE?0.0:1.0)-a.iU;if(c<(-0.4000000059604645))c=(-0.4000000059604645);if(c>0.4000000059604645)c=0.4000000059604645;a.iU=a.iU+c;if(a.iU<0.10000000149011612)a.eE=b;}
function Qh(a){a.iU=0.0;}
function N0(a){a.iB=(-1);a.j2=1;}
function AFn(a){a.iU=0.0;}
function FG(){var a=this;C.call(a);a.i$=0;a.O=0;a.cv=0;a.jn=0;}
function BdJ(a){var b=new FG();LQ(b,a);return b;}
function LQ(a,b){a.jn=(-1);a.i$=b;a.cv=b;}
function ARH(a){return a.i$;}
function A47(a){return a.O;}
function Dz(a,b){var c,d;if(b>=0&&b<=a.cv){a.O=b;if(b<a.jn)a.jn=0;return a;}c=new BB;d=new S;V(d);Bd(c,R(G(Bf(G(Bf(G(d,B(249)),b),B(250)),a.cv),B(223))));J(c);}
function AXg(a){return a.cv;}
function H0(a,b){var c,d;if(b>=0&&b<=a.i$){if(a.jn>b)a.jn=(-1);a.cv=b;if(a.O>a.cv)a.O=a.cv;return a;}c=new BB;d=new S;V(d);Bd(c,R(G(Bf(G(Bf(G(d,B(251)),b),B(250)),a.i$),B(223))));J(c);}
function DM(a){a.O=0;a.cv=a.i$;a.jn=(-1);return a;}
function Ec(a){a.cv=a.O;a.O=0;a.jn=(-1);return a;}
function BV(a){return a.cv-a.O|0;}
function DH(a){return a.O>=a.cv?0:1;}
function Nd(){FG.call(this);}
function AEo(a,b,c,d){var e,f,g,h,i,j,k;if(c>=0){e=b.data;f=e.length;if(c<f){g=c+d|0;if(g>f){h=new BE;i=new S;V(i);Bd(h,R(Bf(G(Bf(G(i,B(252)),g),B(253)),f)));J(h);}if(BV(a)<d){h=new G6;Z(h);J(h);}if(d<0){h=new BE;i=new S;V(i);Bd(h,R(G(Bf(G(i,B(254)),d),B(255))));J(h);}g=a.O;j=0;while(j<d){k=c+1|0;f=g+1|0;e[c]=TS(a,g);j=j+1|0;c=k;g=f;}a.O=a.O+d|0;return a;}}b=b.data;i=new BE;h=new S;V(h);Bd(i,R(G(Bf(G(Bf(G(h,B(256)),c),B(250)),b.length),B(34))));J(i);}
function X4(a,b){return AEo(a,b,0,b.data.length);}
function M1(a){DM(a);return a;}
function V2(a){Ec(a);return a;}
function RV(a,b){H0(a,b);return a;}
function U(){var a=this;C.call(a);a.bk=0;a.b=0;a.tG=0.0;a.qP=0.0;a.ew=0.0;a.ch=0.0;a.ev=0.0;a.fC=0.0;a.cD=0.0;a.fB=0.0;a.bl=null;a.DG=0.0;a.ck=null;}
var BdK=null;var BdL=null;var BdM=null;var BdN=null;var BdO=null;var BdP=null;var BdQ=null;var BdR=null;var BdS=null;var Bcf=null;var BdT=null;var BdU=null;var BdV=null;var BdW=null;var BdX=null;var BdY=null;var Bcl=null;var Bch=null;var Bci=null;var Bcn=null;var Bcp=null;var Bcv=null;var Bcg=null;var Bcb=null;var BdZ=null;var Bcc=null;var Bd0=null;var BcA=null;var BcB=null;var BcV=null;var BcU=null;var BcT=null;var Bcq=null;var Bcr=null;var BcC=null;var Bct=null;var BcD=null;var BcE=null;var BcF=null;var BcG
=null;var BcH=null;var BcI=null;var BcJ=null;var BcK=null;var BcL=null;var BcM=null;var BcN=null;var BcO=null;var BcP=null;var BcQ=null;var BcR=null;var BcS=null;var Bcw=null;var Bcx=null;var Bcy=null;var Bcz=null;var BcX=null;var BcW=null;var Bcj=null;var Bck=null;var Bco=null;var BcZ=null;var BcY=null;var Bcu=null;var Bc0=null;var Bcs=null;var Bd1=null;var Bd2=null;var Bd3=null;var Bd4=null;var Bd5=null;var Bd6=null;var Bd7=null;var Bd8=null;var Bd9=null;var Bd$=null;var Bd_=null;var Bea=null;function L()
{L=Bl(U);A5q();}
function Beb(a,b){var c=new U();Ep(c,a,b);return c;}
function C8(a,b,c){var d=new U();DR(d,a,b,c);return d;}
function Ep(a,b,c){var d,e,f;L();a.bl=BdK;a.DG=1.0;if(Bcf.data[b]!==null){c=new BB;d=new S;V(d);Bd(c,R(JL(G(JL(G(Bf(G(d,B(257)),b),B(258)),Bcf.data[b]),B(259)),a)));J(c);}a.ck=c;Bcf.data[b]=a;a.b=b;D3(a,0.0,0.0,0.0,1.0,1.0,1.0);BdU.data[b]=a.fJ();e=BdV;f=!a.fJ()?0:255;e.data[b]=f;BdW.data[b]=a.iv();BdX.data[b]=0;}
function DR(a,b,c,d){L();Ep(a,b,d);a.bk=c;}
function G_(a,b){BdV.data[a.b]=b;return a;}
function Hd(a,b){BdY.data[a.b]=15.0*b|0;return a;}
function Di(a,b){a.qP=b*3.0;return a;}
function AWF(a){return 1;}
function AZG(a){return 0;}
function Br(a,b){var c;a.tG=b;c=a.qP;b=b*5.0;if(c<b)a.qP=b;return a;}
function EA(a,b){BdT.data[a.b]=b;}
function D3(a,b,c,d,e,f,g){a.ew=b;a.ch=c;a.ev=d;a.fC=e;a.cD=f;a.fB=g;}
function ASr(a,b,c,d,e){return DT(b,c,d,e);}
function Kb(a,b,c,d,e,f){return BM(b,c,d,e)?0:1;}
function A2I(a,b,c,d,e,f){return a.qt(f,Cr(b,c,d,e));}
function AZM(a,b,c){return a.cO(b);}
function A69(a,b){return a.bk;}
function AL2(a,b,c,d){var e,f,g,h,i,j;e=new PM;f=b;g=f+a.ew;h=c;i=h+a.ch;j=d;Ra(e,g,i,j+a.ev,f+a.fC,h+a.cD,j+a.fB);return e;}
function APb(a,b,c,d){var e,f,g,h,i,j;e=new PM;f=b;g=f+a.ew;h=c;i=h+a.ch;j=d;Ra(e,g,i,j+a.ev,f+a.fC,h+a.cD,j+a.fB);return e;}
function AWE(a){return 1;}
function ATZ(a){return 1;}
function A7B(a,b,c,d,e,f){return;}
function AYe(a,b,c,d,e,f){return;}
function A38(a,b,c,d,e,f){return;}
function A48(a,b,c,d,e,f){return;}
function A5j(a){return 5;}
function AP_(a,b,c,d,e){return;}
function APn(a,b,c,d,e){return;}
function ASY(a,b){return 1;}
function AVj(a,b,c){return a.b;}
function Uk(a,b){var c,d;if(a.tG<0.0)return 0.0;if(!Tn(b,a))return 1.0/a.tG/100.0;c=b.F;d=1.0;if(c.br.data[c.J]!==null)d=1.0*BZ(c.br.data[c.J]).yy(a);if(D4(b))d=d/5.0;if(!b.dE)d=d/5.0;return d/a.tG/30.0;}
function Ja(a,b,c,d,e,f){YT(a,b,c,d,e,f,1.0);}
function YT(a,b,c,d,e,f,g){var h,i,j,k,l,m,n;h=a.gk(b.bo);i=0;j=c;k=d;l=e;while(i<h){if(N(b.bo)<=g){m=a.gp(f,b.bo);if(m>0){n=Sz(b,j+N(b.bo)*0.699999988079071+0.15000000596046448,k+N(b.bo)*0.699999988079071+0.15000000596046448,l+N(b.bo)*0.699999988079071+0.15000000596046448,OC(m,1));n.iZ=10;De(b,n);}}i=i+1|0;}}
function ABo(a){return a.qP/5.0;}
function ALb(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q;h= -c;i= -d;j= -e;b=Je(f,h,i,j);f=Je(g,h,i,j);k=Ks(b,f,a.ew);l=Ks(b,f,a.fC);m=Kw(b,f,a.ch);n=Kw(b,f,a.cD);o=Kf(b,f,a.ev);f=Kf(b,f,a.fB);if(!W_(a,k))k=null;if(!W_(a,l))l=null;if(!R_(a,m))m=null;if(!R_(a,n))n=null;if(!ZI(a,o))o=null;if(!ZI(a,f))f=null;p=null;if(k!==null)p=k;if(l!==null&&!(p!==null&&C$(b,l)>=C$(b,p)))p=l;if(m!==null&&!(p!==null&&C$(b,m)>=C$(b,p)))p=m;if(n!==null&&!(p!==null&&C$(b,n)>=C$(b,p)))p=n;if(o!==null&&!(p!==null&&C$(b,o)>=C$(b,p)))p=o;if
(f!==null&&!(p!==null&&C$(b,f)>=C$(b,p)))p=f;if(p===null)return null;q=(-1);if(p===k)q=4;if(p===l)q=5;if(p===m)q=0;if(p===n)q=1;if(p===o)q=2;if(p===f)q=3;return A5Q(c,d,e,q,Je(p,c,d,e));}
function W_(a,b){return b===null?0:b.R>=a.ch&&b.R<=a.cD&&b.S>=a.ev&&b.S<=a.fB?1:0;}
function R_(a,b){return b===null?0:b.U>=a.ew&&b.U<=a.fC&&b.S>=a.ev&&b.S<=a.fB?1:0;}
function ZI(a,b){return b===null?0:b.U>=a.ew&&b.U<=a.fC&&b.R>=a.ch&&b.R<=a.cD?1:0;}
function ARJ(a,b,c,d,e){return;}
function A46(a){return 0;}
function A0e(a,b,c,d,e){return 1;}
function AAJ(a,b,c,d,e,f){return 0;}
function AVb(a,b,c,d,e){return;}
function AQ$(a,b,c,d,e,f){return;}
function A5q(){var b,c;BdK=Iw(B(260),1.0,1.0);BdL=Iw(B(261),1.0,1.0);BdM=Iw(B(262),1.0,1.0);BdN=Iw(B(263),1.0,1.0);BdO=Iw(B(260),1.0,1.0);BdP=Iw(B(260),1.0,1.5);BdQ=A_e(B(260),1.0,1.0);BdR=Iw(B(264),1.0,1.0);BdS=A$X(B(265),1.0,1.0);Bcf=H(U,256);BdT=$rt_createBooleanArray(256);BdU=$rt_createBooleanArray(256);BdV=$rt_createIntArray(256);BdW=$rt_createBooleanArray(256);BdX=$rt_createBooleanArray(256);BdY=$rt_createIntArray(256);b=Di(Br(AWM(1,1),1.5),10.0);b.bl=BdO;Bcl=b;b=Br(A9f(2),0.6000000238418579);b.bl=BdN;Bch
=b;b=Br(A$8(3,2),0.5);b.bl=BdM;Bci=b;b=Di(Br(C8(4,16,Bec),2.0),10.0);b.bl=BdO;Bcn=b;b=Di(Br(C8(5,4,Bed),2.0),5.0);b.bl=BdL;Bcp=b;b=Br(A$c(6,15),0.0);b.bl=BdN;Bcv=b;b=Di(Br(C8(7,17,Bec),(-1.0)),6000000.0);b.bl=BdO;Bcg=b;Bcb=G_(Br(A6J(8,Bda),100.0),3);BdZ=G_(Br(AXW(9,Bda),100.0),3);Bcc=G_(Hd(Br(A6J(10,Bdb),0.0),1.0),255);Bd0=G_(Hd(Br(AXW(11,Bdb),100.0),1.0),255);b=Br(A9V(12,18),0.5);b.bl=BdS;BcA=b;b=Br(A$x(13,19),0.6000000238418579);b.bl=BdM;BcB=b;b=Di(Br(TO(14,32),3.0),5.0);b.bl=BdO;BcV=b;b=Di(Br(TO(15,33),3.0),
5.0);b.bl=BdO;BcU=b;b=Di(Br(TO(16,34),3.0),5.0);b.bl=BdO;BcT=b;b=Br(A9x(17),2.0);b.bl=BdL;Bcq=b;b=G_(Br(A9l(18,52),0.20000000298023224),1);b.bl=BdN;Bcr=b;b=Br(A$A(19),0.6000000238418579);b.bl=BdN;BcC=b;b=Br(A83(20,49,Bee,0),0.30000001192092896);b.bl=BdQ;Bct=b;b=Br(C8(21,64,Bef),0.800000011920929);b.bl=BdR;BcD=b;b=Br(C8(22,65,Bef),0.800000011920929);b.bl=BdR;BcE=b;b=Br(C8(23,66,Bef),0.800000011920929);b.bl=BdR;BcF=b;b=Br(C8(24,67,Bef),0.800000011920929);b.bl=BdR;BcG=b;b=Br(C8(25,68,Bef),0.800000011920929);b.bl
=BdR;BcH=b;b=Br(C8(26,69,Bef),0.800000011920929);b.bl=BdR;BcI=b;b=Br(C8(27,70,Bef),0.800000011920929);b.bl=BdR;BcJ=b;b=Br(C8(28,71,Bef),0.800000011920929);b.bl=BdR;BcK=b;b=Br(C8(29,72,Bef),0.800000011920929);b.bl=BdR;BcL=b;b=Br(C8(30,73,Bef),0.800000011920929);b.bl=BdR;BcM=b;b=Br(C8(31,74,Bef),0.800000011920929);b.bl=BdR;BcN=b;b=Br(C8(32,75,Bef),0.800000011920929);b.bl=BdR;BcO=b;b=Br(C8(33,76,Bef),0.800000011920929);b.bl=BdR;BcP=b;b=Br(C8(34,77,Bef),0.800000011920929);b.bl=BdR;BcQ=b;b=Br(C8(35,78,Bef),0.800000011920929);b.bl
=BdR;BcR=b;b=Br(C8(36,79,Bef),0.800000011920929);b.bl=BdR;BcS=b;b=Br(A1g(37,13),0.0);b.bl=BdN;Bcw=b;b=Br(A1g(38,12),0.0);b.bl=BdN;Bcx=b;b=Br(A1y(39,29),0.0);b.bl=BdN;Bcy=Hd(b,0.125);b=Br(A1y(40,28),0.0);b.bl=BdN;Bcz=b;b=Di(Br(AMc(41,39),3.0),10.0);b.bl=BdP;BcX=b;b=Di(Br(AMc(42,38),5.0),10.0);b.bl=BdP;BcW=b;b=Di(Br(AYV(43,1),2.0),10.0);b.bl=BdO;Bcj=b;b=Di(Br(AYV(44,0),2.0),10.0);b.bl=BdO;Bck=b;b=Di(Br(C8(45,7,Bec),2.0),10.0);b.bl=BdO;Bco=b;b=Br(A9B(46,8),0.0);b.bl=BdN;BcZ=b;b=Br(A_b(47,35),1.5);b.bl=BdL;BcY=
b;b=Di(Br(C8(48,36,Bec),2.0),10.0);b.bl=BdO;Bcu=b;b=Di(Br(AWM(49,37),10.0),10.0);b.bl=BdO;Bc0=b;b=Hd(Br(A$a(50,80),0.0),0.875);b.bl=BdL;Bcs=b;b=Hd(Br(A$g(51,31),0.0),1.0);b.bl=BdL;Bd1=b;b=Br(A2E(52,Bcb.b),0.0);b.bl=BdL;Bd2=b;b=Br(A2E(53,Bcc.b),0.0);b.bl=BdL;Bd3=b;b=Br(A9_(54),2.5);b.bl=BdL;Bd4=b;b=Br(A$t(55,62),0.5);b.bl=BdP;Bd5=b;b=Di(Br(TO(56,50),3.0),5.0);b.bl=BdO;Bd6=b;b=Di(Br(AMc(57,40),5.0),10.0);b.bl=BdP;Bd7=b;b=Br(A_k(58),2.5);b.bl=BdL;Bd8=b;b=Br(A85(59,88),0.0);b.bl=BdN;Bd9=b;b=Br(A_m(60),0.6000000238418579);b.bl
=BdM;Bd$=b;b=Br(A2p(61,0),3.5);b.bl=BdO;Bd_=b;b=Br(A2p(62,1),3.5);b.bl=BdO;Bea=Hd(b,0.875);c=0;while(c<256){if(Bcf.data[c]!==null){B2();Bce.data[c]=A8Z(c-256|0);}c=c+1|0;}}
function TL(){}
function VY(){var a=this;Fu.call(a);a.dt=null;a.q=0;}
function BU(){var a=new VY();ASe(a);return a;}
function Beg(a){var b=new VY();P7(b,a);return b;}
function A9W(a){var b=new VY();A04(b,a);return b;}
function ASe(a){P7(a,10);}
function P7(a,b){a.dt=H(C,b);}
function A04(a,b){var c,d;P7(a,b.q);c=Hq(b);d=0;while(d<a.dt.data.length){a.dt.data[d]=Il(c);d=d+1|0;}a.q=a.dt.data.length;}
function VP(a,b){var c;if(a.dt.data.length<b){c=a.dt.data.length>=1073741823?2147483647:Df(b,Df(a.dt.data.length*2|0,5));a.dt=Ea(a.dt,c);}}
function Bc(a,b){L4(a,b);return a.dt.data[b];}
function CE(a){return a.q;}
function M6(a,b,c){var d;L4(a,b);d=a.dt.data[b];a.dt.data[b]=c;return d;}
function M(a,b){var c,d;VP(a,a.q+1|0);c=a.dt.data;d=a.q;a.q=d+1|0;c[d]=b;a.d2=a.d2+1|0;return 1;}
function AKi(a,b,c){var d;if(b>=0&&b<=a.q){VP(a,a.q+1|0);d=a.q;while(d>b){a.dt.data[d]=a.dt.data[d-1|0];d=d+(-1)|0;}a.dt.data[b]=c;a.q=a.q+1|0;a.d2=a.d2+1|0;return;}c=new BE;Z(c);J(c);}
function Ej(a,b){var c,d,e,f;L4(a,b);c=a.dt.data[b];a.q=a.q-1|0;while(b<a.q){d=a.dt.data;e=a.dt.data;f=b+1|0;d[b]=e[f];b=f;}a.dt.data[a.q]=null;a.d2=a.d2+1|0;return c;}
function GD(a,b){var c;c=ACV(a,b);if(c<0)return 0;Ej(a,c);return 1;}
function ER(a){ABF(a.dt,0,a.q,null);a.q=0;}
function L4(a,b){var c;if(b>=0&&b<a.q)return;c=new BE;Z(c);J(c);}
function AIe(){var a=this;C.call(a);a.fO=null;a.lW=null;a.lL=null;a.ln=null;a.l3=null;a.lJ=null;a.k3=null;a.k0=null;}
function AT2(a){var b=new AIe();ASg(b,a);return b;}
function ASg(a,b){a.fO=b;}
function AGd(a){var b,c;b=AT2(a.fO);if(a.lW!==null)b.lW=Ea(a.lW,a.lW.data.length);if(a.lL!==null)b.lL=Ea(a.lL,a.lL.data.length);if(a.ln!==null)b.ln=Ea(a.ln,a.ln.data.length);if(a.l3!==null)b.l3=Ea(a.l3,a.l3.data.length);if(a.lJ!==null)b.lJ=Ea(a.lJ.gE(),a.lJ.data.length);if(a.k3!==null)b.k3=Ea(a.k3,a.k3.data.length);a:{if(a.k0!==null){b.k0=H($rt_arraycls(BC),a.k0.data.length);c=0;while(true){if(c>=a.k0.data.length)break a;b.k0.data[c]=Ea(a.k0.data[c],a.k0.data[c].data.length);c=c+1|0;}}}return b;}
function AA8(a){var b,c;if(a.lW===null){b=a.fO.f6;c=a.fO.fU;if(Beh===null)Beh=A6T();a.lW=IE(Beh,b,c);}return a.lW.gE();}
function AIT(a){var b,c;if(a.lL===null){b=a.fO.f6;c=a.fO.fU;if(Bei===null)Bei=A0s();a.lL=IE(Bei,b,c);}return a.lL.gE();}
function AEe(a){var b,c;if(a.ln===null){b=a.fO.f6;c=a.fO.fU;if(Bej===null)Bej=A6o();a.ln=IE(Bej,b,c);}return a.ln.gE();}
function AMm(a){var b,c;if(a.l3===null){b=a.fO.f6;c=a.fO.fU;if(Bek===null)Bek=AUL();a.l3=IE(Bek,b,c);}return a.l3.gE();}
function AD6(a){var b,c;if(a.lJ===null){b=a.fO.f6;c=a.fO.fU;if(Bel===null)Bel=AVE();a.lJ=IE(Bel,b,c);}return a.lJ.gE();}
function AIA(a){var b,c;if(a.k3===null){b=a.fO.f6;c=a.fO.fU;if(Bem===null)Bem=A52();a.k3=IE(Bem,b,c);}return a.k3.gE();}
function AOl(){var a=this;Ev.call(a);a.jt=null;a.l6=0;}
function O0(){var a=new AOl();ATT(a);return a;}
function ATT(a){a.jt=$rt_createByteArray(32);}
function A4v(a,b){var c,d;TD(a,a.l6+1|0);c=a.jt.data;d=a.l6;a.l6=d+1|0;c[d]=b<<24>>24;}
function TB(a,b,c,d){var e,f,g,h,i;TD(a,a.l6+d|0);e=0;while(e<d){f=b.data;g=a.jt.data;h=a.l6;a.l6=h+1|0;i=c+1|0;g[h]=f[c];e=e+1|0;c=i;}}
function TD(a,b){if(a.jt.data.length<b){b=Df(b,(a.jt.data.length*3|0)/2|0);a.jt=LT(a.jt,b);}}
function HP(a){return LT(a.jt,a.l6);}
function Ub(){}
function AF$(){var a=this;Jo.call(a);a.ip=0;a.dZ=null;}
function ACQ(a){var b=new AF$();A3F(b,a);return b;}
function A3F(a,b){Qf(a,b);a.dZ=$rt_createByteArray(8);}
function S_(a,b,c,d){var e;if(b!==null){a.kP.jz(b,c,d);a.ip=a.ip+d|0;return;}e=new Eg;Z(e);J(e);}
function LO(a,b){a.kP.qS(b);a.ip=a.ip+1|0;}
function AMl(a,b){W1(a,$rt_doubleToLongBits(b));}
function AMd(a,b){K0(a,$rt_floatToIntBits(b));}
function K0(a,b){a.dZ.data[0]=b>>24<<24>>24;a.dZ.data[1]=b>>16<<24>>24;a.dZ.data[2]=b>>8<<24>>24;a.dZ.data[3]=b<<24>>24;a.kP.jz(a.dZ,0,4);a.ip=a.ip+4|0;}
function W1(a,b){a.dZ.data[0]=Long_shr(b,56).lo<<24>>24;a.dZ.data[1]=Long_shr(b,48).lo<<24>>24;a.dZ.data[2]=Long_shr(b,40).lo<<24>>24;a.dZ.data[3]=b.hi<<24>>24;a.dZ.data[4]=Long_shr(b,24).lo<<24>>24;a.dZ.data[5]=Long_shr(b,16).lo<<24>>24;a.dZ.data[6]=Long_shr(b,8).lo<<24>>24;a.dZ.data[7]=b.lo<<24>>24;a.kP.jz(a.dZ,0,8);a.ip=a.ip+8|0;}
function Ry(a,b){a.dZ.data[0]=b>>8<<24>>24;a.dZ.data[1]=b<<24>>24;a.kP.jz(a.dZ,0,2);a.ip=a.ip+2|0;}
function AK9(a,b,c,d){var e;c=c.data;e=d+1|0;c[d]=b>>8<<24>>24;d=e+1|0;c[e]=b<<24>>24;return d;}
function AOx(a,b){var c,d,e;c=AGc(a,b);if(Long_gt(c,Long_fromInt(65535))){b=new BA;Bd(b,B(266));J(b);}d=c.lo;e=$rt_createByteArray(d+2|0);S_(a,e,0,AL3(a,b,e,AK9(a,d,e,0)));}
function AGc(a,b){var c,d,e,f;c=0;d=Q(b);e=0;while(e<d){f=P(b,e);c=f>0&&f<=127?c+1|0:f>2047?c+3|0:c+2|0;e=e+1|0;}return Long_fromInt(c);}
function AL3(a,b,c,d){var e,f,g,h,i,j,k;e=Q(b);f=0;while(f<e){g=P(b,f);if(g>0&&g<=127){h=c.data;i=d+1|0;h[d]=g<<24>>24;}else if(g<=2047){h=c.data;j=d+1|0;h[d]=(192|31&g>>6)<<24>>24;i=j+1|0;h[j]=(128|63&g)<<24>>24;}else{h=c.data;i=d+1|0;h[d]=(224|15&g>>12)<<24>>24;k=i+1|0;h[i]=(128|63&g>>6)<<24>>24;i=k+1|0;h[k]=(128|63&g)<<24>>24;}f=f+1|0;d=i;}return d;}
function AFD(){BB.call(this);this.Gr=null;}
function AJy(a){var b=new AFD();AXe(b,a);return b;}
function AXe(a,b){Z(a);a.Gr=b;}
function NY(){var a=this;C.call(a);a.cl=null;a.r=0;a.E=0;a.y=Long_ZERO;a.vl=null;a.p_=0;a.ia=0;a.nM=Long_ZERO;a.ca=null;a.jE=null;a.f4=null;}
function ACy(a,b,c,d){a.vl=b;a.p_=c;a.ia=d;}
function AIO(a,b,c,d,e){var f;if(d<=0&&e&&a.cl!==null)return;if(a.E>0&&e){f=$rt_createByteArray(a.E+d|0);CT(a.cl,a.r,f,0,a.E);CT(b,c,f,a.E,d);a.cl=f;a.r=0;a.E=a.E+d|0;}else{a.cl=b;a.r=c;a.E=d;}}
function WB(){NY.call(this);this.wS=0;}
function AFC(a,b,c){var d;a.wS=0;d=new MR;d.sy=Long_fromInt(-1);d.iN=(-1);d.yu=$rt_createByteArray(4);d.cC=null;d.fS=null;d.v=a;a.jE=d;d=a.jE;if(c)b= -b;return AAc(d,b);}
function AF8(a,b){var c;if(a.jE===null)return (-2);c=AGu(a.jE,b);if(c==1)a.wS=1;return c;}
function AAH(a){return a.jE.bV!=12?0:1;}
function Rv(){}
function ANI(){C.call(this);}
function SX(){var a=this;C.call(a);a.A0=null;a.wy=null;}
function AGX(a){CY(a.A0,(ADu(a.wy.result)?1:0)?null:A2B(a.wy.result));}
function AQ_(a){AGX(a);}
function SY(){C.call(this);this.EQ=null;}
function AFN(a){CY(a.EQ,null);}
function A8b(a){AFN(a);}
function ACS(){C.call(this);}
function ZM(){var a=this;C.call(a);a.bA=null;a.cQ=0;a.eS=0;}
function AFs(a){var b=new ZM();A77(b,a);return b;}
function AAq(){var a=new ZM();AMO(a);return a;}
function A77(a,b){a.cQ=(-1);a.eS=0;a.bA=b;}
function AMO(a){a.cQ=(-1);a.eS=0;}
function AK1(a,b,c,d,e,f){a.cQ=f;Ow(a,b,c,d,e);a.cQ=(-1);}
function AG_(a,b,c,d,e){a.eS=1;Ow(a,b,c,d,e);a.eS=0;}
function Ow(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,bo,bp,bq,br;f=b.ig();if(f){if(f!=4){if(f==1){BD();g=Bc$;h=b.dW(a.bA,c,d,e);CW(g,h,h,h);UD(a,b,Cr(a.bA,c,d,e),c,d,e);return 1;}if(f==6){BD();g=Bc$;h=b.dW(a.bA,c,d,e);CW(g,h,h,h);QI(a,b,Cr(a.bA,c,d,e),c,d-0.0625,e);return 1;}if(f==2){i=Cr(a.bA,c,d,e);BD();j=Bc$;k=b.dW(a.bA,c,d,e);if(BdY.data[b.b]>0)k=1.0;CW(j,k,k,k);if(i==1)It(a,b,c-0.09999999403953552,d+0.20000000298023224,e,(-0.4000000059604645),0.0);else if
(i==2)It(a,b,c+0.09999999403953552,d+0.20000000298023224,e,0.4000000059604645,0.0);else if(i==3)It(a,b,c,d+0.20000000298023224,e-0.09999999403953552,0.0,(-0.4000000059604645));else if(i!=4)It(a,b,c,d,e,0.0,0.0);else It(a,b,c,d+0.20000000298023224,e+0.09999999403953552,0.0,0.4000000059604645);return 1;}if(f!=3){if(f!=5)return 0;BD();g=Bc$;l=b.cO(0);if(a.cQ>=0)l=a.cQ;k=b.dW(a.bA,c,d,e);CW(g,k,k,k);f=(l&15)<<4;m=f+16|0;n=l&240;if((((c+d|0)+e|0)&1)!=1){l=f;f=m;m=l;}k=f;o=k/256.0;p=(k+15.989999771118164)/256.0;k
=n;h=k/256.0;q=(k+15.989999771118164)/256.0;k=m;r=k/256.0;s=(k+15.989999771118164)/256.0;if(BM(a.bA,c-1|0,d,e)){t=c+0.05000000074505806;u=(d+1|0)+0.125;v=(e+1|0)+0.125;w=o;x=h;F(g,t,u,v,w,x);y=d-0.125;z=q;F(g,t,y,v,w,z);v=e-0.125;w=p;F(g,t,y,v,w,z);F(g,t,u,v,w,x);}b=a.bA;l=c+1|0;if(BM(b,l,d,e)){t=l-0.05000000074505806;u=d-0.125;v=(e+1|0)+0.125;w=p;x=q;F(g,t,u,v,w,x);y=(d+1|0)+0.125;z=h;F(g,t,y,v,w,z);v=e-0.125;w=o;F(g,t,y,v,w,z);F(g,t,u,v,w,x);}if(BM(a.bA,c,d,e-1|0)){t=l+0.125;u=d-0.125;w=e+0.05000000074505806;v
=s;x=q;F(g,t,u,w,v,x);y=(d+1|0)+0.125;z=h;F(g,t,y,w,v,z);t=c-0.125;v=r;F(g,t,y,w,v,z);F(g,t,u,w,v,x);}b=a.bA;e=e+1|0;if(BM(b,c,d,e)){t=l+0.125;u=(d+1|0)+0.125;v=e-0.05000000074505806;w=r;x=h;F(g,t,u,v,w,x);y=d-0.125;z=q;F(g,t,y,v,w,z);t=c-0.125;w=s;F(g,t,y,v,w,z);F(g,t,u,v,w,x);}return 1;}BD();g=Bc$;l=b.cO(0);if(a.cQ>=0)l=a.cQ;k=b.dW(a.bA,c,d,e);CW(g,k,k,k);f=(l&15)<<4;m=l&240;k=f;ba=k/256.0;o=(k+15.989999771118164)/256.0;k=m;bb=k/256.0;r=k+15.989999771118164;bc=r/256.0;b=a.bA;l=d-1|0;if(!BM(b,c,l,e)&&!C4(Bd1,
a.bA,c,l,e)){if((((c+d|0)+e|0)&1)!=1){s=ba;bd=o;be=bb;bf=bc;}else{be=(m+16|0)/256.0;bf=(r+16.0)/256.0;s=ba;bd=o;}if(((((c/2|0)+(d/2|0)|0)+(e/2|0)|0)&1)!=1){k=s;s=bd;bd=k;}if(C4(Bd1,a.bA,c-1|0,d,e)){k=c;t=k+0.20000000298023224;p=d;u=p+1.399999976158142+0.0625;v=e+1|0;w=s;x=be;F(g,t,u,v,w,x);y=k;z=p+0.0625;bg=bf;F(g,y,z,v,w,bg);bh=e;bi=bd;F(g,y,z,bh,bi,bg);F(g,t,u,bh,bi,x);F(g,t,u,bh,bi,x);F(g,y,z,bh,bi,bg);F(g,y,z,v,w,bg);F(g,t,u,v,w,x);}b=Bd1;j=a.bA;f=c+1|0;if(C4(b,j,f,d,e)){k=f;t=k-0.20000000298023224;p=d;u
=p+1.399999976158142+0.0625;v=e;w=bd;x=be;F(g,t,u,v,w,x);y=k;z=p+0.0625;bg=bf;F(g,y,z,v,w,bg);bh=e+1|0;bi=s;F(g,y,z,bh,bi,bg);F(g,t,u,bh,bi,x);F(g,t,u,bh,bi,x);F(g,y,z,bh,bi,bg);F(g,y,z,v,w,bg);F(g,t,u,v,w,x);}if(C4(Bd1,a.bA,c,d,e-1|0)){t=c;k=d;u=k+1.399999976158142+0.0625;p=e;v=p+0.20000000298023224;w=s;x=be;F(g,t,u,v,w,x);y=k+0.0625;z=p;bg=bf;F(g,t,y,z,w,bg);bh=f;bi=bd;F(g,bh,y,z,bi,bg);F(g,bh,u,v,bi,x);F(g,bh,u,v,bi,x);F(g,bh,y,z,bi,bg);F(g,t,y,z,w,bg);F(g,t,u,v,w,x);}b=Bd1;j=a.bA;l=e+1|0;if(C4(b,j,c,d,l))
{t=f;k=d;u=k+1.399999976158142+0.0625;p=l;v=p-0.20000000298023224;w=bd;x=be;F(g,t,u,v,w,x);y=k+0.0625;z=p;bg=bf;F(g,t,y,z,w,bg);bh=c;bi=s;F(g,bh,y,z,bi,bg);F(g,bh,u,v,bi,x);F(g,bh,u,v,bi,x);F(g,bh,y,z,bi,bg);F(g,t,y,z,w,bg);F(g,t,u,v,w,x);}b=Bd1;j=a.bA;n=d+1|0;if(C4(b,j,c,n,e)){q=c;k=q+0.5;bf=k+0.5;bj=k-0.5;k=e;p=k+0.5;bd=p+0.5;be=p-0.5;if(((c+n|0)+e|0)&1){t=q;k=n;u=k+(-0.20000000298023224);v=bd;w=o;x=bb;F(g,t,u,v,w,x);y=k;z=be;bg=bc;F(g,t,y,z,w,bg);bh=f;bi=ba;F(g,bh,y,z,bi,bg);F(g,bh,u,v,bi,x);k=(m+16|0)/256.0;o
=(r+16.0)/256.0;x=k;F(g,bh,u,z,w,x);bg=o;F(g,bh,y,v,w,bg);F(g,t,y,v,bi,bg);F(g,t,u,z,bi,x);}else{t=bj;p=n;u=p+(-0.20000000298023224);v=k;w=o;x=bb;F(g,t,u,v,w,x);y=bf;z=p;bg=bc;F(g,y,z,v,w,bg);bh=l;bi=ba;F(g,y,z,bh,bi,bg);F(g,t,u,bh,bi,x);k=(m+16|0)/256.0;o=(r+16.0)/256.0;x=k;F(g,y,u,bh,w,x);bg=o;F(g,t,z,bh,w,bg);F(g,t,z,v,bi,bg);F(g,y,u,v,bi,x);}}}else{k=c;p=k+0.5;bk=p+0.20000000298023224;s=p-0.20000000298023224;h=e;q=h+0.5;bf=q+0.20000000298023224;bj=q-0.20000000298023224;bd=p-0.30000001192092896;be=p+0.30000001192092896;bl
=q-0.30000001192092896;bm=q+0.30000001192092896;t=bd;bd=d;u=bd+1.399999976158142;v=e+1|0;w=o;x=bb;F(g,t,u,v,w,x);y=bk;z=bd;bg=bc;F(g,y,z,v,w,bg);bh=h;bi=ba;F(g,y,z,bh,bi,bg);F(g,t,u,bh,bi,x);t=be;F(g,t,u,bh,w,x);y=s;F(g,y,z,bh,w,bg);F(g,y,z,v,bi,bg);F(g,t,u,v,bi,x);o=(m+16|0)/256.0;h=(r+16.0)/256.0;t=c+1|0;y=bm;bn=o;F(g,t,u,y,w,bn);bo=bj;bp=h;F(g,t,z,bo,w,bp);bq=k;F(g,bq,z,bo,bi,bp);F(g,bq,u,y,bi,bn);y=bl;F(g,bq,u,y,w,bn);bo=bf;F(g,bq,z,bo,w,bp);F(g,t,z,bo,bi,bp);F(g,t,u,y,bi,bn);k=p-0.5;o=p+0.5;h=q-0.5;r=q
+0.5;s=p-0.4000000059604645;p=p+0.4000000059604645;ba=q-0.4000000059604645;q=q+0.4000000059604645;y=s;F(g,y,u,bh,bi,bn);bo=k;F(g,bo,z,bh,bi,bp);F(g,bo,z,v,w,bp);F(g,y,u,v,w,bn);y=p;F(g,y,u,v,bi,bn);bo=o;F(g,bo,z,v,bi,bp);F(g,bo,z,bh,w,bp);F(g,y,u,bh,w,bn);v=q;F(g,bq,u,v,bi,x);y=r;F(g,bq,z,y,bi,bg);F(g,t,z,y,w,bg);F(g,t,u,v,w,x);v=ba;F(g,t,u,v,bi,x);y=h;F(g,t,z,y,bi,bg);F(g,bq,z,y,w,bg);F(g,bq,u,v,w,x);}return 1;}BD();g=Bc$;br=0;o=b.ch;p=b.cD;b.cD=p-JP(a,c,d,e);if(!(!a.eS&&!b.d8(a.bA,c,d-1|0,e,0))){k=0.5*b.dW(a.bA,
c,d-1|0,e);CW(g,k,k,k);PF(a,b,c,d,e,b.cO(0));br=1;}if(!(!a.eS&&!b.d8(a.bA,c,d+1|0,e,1))){k=b.dW(a.bA,c,d+1|0,e)*1.0;CW(g,k,k,k);MO(a,b,c,d,e,b.cO(1));br=1;}l=e-1|0;b.ch=p-JP(a,c,d,l);if(!(!a.eS&&b.cD<=b.ch&&!b.d8(a.bA,c,d,l,2))){k=0.800000011920929*b.dW(a.bA,c,d,l);CW(g,k,k,k);Mt(a,b,c,d,e,b.cO(2));br=1;}l=e+1|0;b.ch=p-JP(a,c,d,l);if(!(!a.eS&&b.cD<=b.ch&&!b.d8(a.bA,c,d,l,3))){k=0.800000011920929*b.dW(a.bA,c,d,l);CW(g,k,k,k);Nu(a,b,c,d,e,b.cO(3));br=1;}l=c-1|0;b.ch=p-JP(a,l,d,e);if(!(!a.eS&&b.cD<=b.ch&&!b.d8(a.bA,
l,d,e,4))){k=0.6000000238418579*b.dW(a.bA,l,d,e);CW(g,k,k,k);NF(a,b,c,d,e,b.cO(4));br=1;}l=c+1|0;b.ch=p-JP(a,l,d,e);if(!(!a.eS&&b.cD<=b.ch&&!b.d8(a.bA,l,d,e,5))){k=0.6000000238418579*b.dW(a.bA,l,d,e);CW(g,k,k,k);Nr(a,b,c,d,e,b.cO(5));br=1;}b.ch=o;b.cD=p;return br;}BD();g=Bc$;br=0;if(!(!a.eS&&!b.d8(a.bA,c,d-1|0,e,0))){o=b.dW(a.bA,c,d-1|0,e);if(BdY.data[b.b]>0)o=1.0;k=0.5*o;CW(g,k,k,k);PF(a,b,c,d,e,b.jA(a.bA,c,d,e,0));br=1;}if(!(!a.eS&&!b.d8(a.bA,c,d+1|0,e,1))){o=b.dW(a.bA,c,d+1|0,e);if(BdY.data[b.b]>0)o=1.0;k
=o*1.0;CW(g,k,k,k);MO(a,b,c,d,e,b.jA(a.bA,c,d,e,1));br=1;}if(!(!a.eS&&!b.d8(a.bA,c,d,e-1|0,2))){o=b.dW(a.bA,c,d,e-1|0);if(BdY.data[b.b]>0)o=1.0;k=0.800000011920929*o;CW(g,k,k,k);Mt(a,b,c,d,e,b.jA(a.bA,c,d,e,2));br=1;}if(!(!a.eS&&!b.d8(a.bA,c,d,e+1|0,3))){o=b.dW(a.bA,c,d,e+1|0);if(BdY.data[b.b]>0)o=1.0;k=0.800000011920929*o;CW(g,k,k,k);Nu(a,b,c,d,e,b.jA(a.bA,c,d,e,3));br=1;}if(!(!a.eS&&!b.d8(a.bA,c-1|0,d,e,4))){o=b.dW(a.bA,c-1|0,d,e);if(BdY.data[b.b]>0)o=1.0;k=0.6000000238418579*o;CW(g,k,k,k);NF(a,b,c,d,e,b.jA(a.bA,
c,d,e,4));br=1;}if(!(!a.eS&&!b.d8(a.bA,c+1|0,d,e,5))){o=b.dW(a.bA,c+1|0,d,e);if(BdY.data[b.b]>0)o=1.0;k=0.6000000238418579*o;CW(g,k,k,k);Nr(a,b,c,d,e,b.jA(a.bA,c,d,e,5));br=1;}return br;}
function It(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj;BD();h=Bc$;i=b.cO(0);if(a.cQ>=0)i=a.cQ;j=(i&15)<<4;i=i&240;k=j;l=k/256.0;k=(k+15.989999771118164)/256.0;m=i;n=m/256.0;m=(m+15.989999771118164)/256.0;o=l+0.02734375;p=n+0.0234375;q=l+0.03515625;r=n+0.03125;s=c+0.5;t=e+0.5;u=s-0.5;v=s+0.5;w=t-0.5;x=t+0.5;y=s+f*0.375;z=y-0.0625;ba=d+0.625;c=t+g*0.375;bb=c-0.0625;bc=o;bd=p;F(h,z,ba,bb,bc,bd);be=c+0.0625;bf=r;F(h,z,ba,be,bc,bf);bc=y+0.0625;z=q;F(h,bc,ba,be,z,bf);F(h,
bc,ba,bb,z,bd);c=s-0.0625;bc=c;z=d+1.0;ba=w;bd=l;be=n;F(h,bc,z,ba,bd,be);bb=c+f;bf=d;bg=w+g;bh=m;F(h,bb,bf,bg,bd,bh);bi=x+g;bj=k;F(h,bb,bf,bi,bj,bh);bb=x;F(h,bc,z,bb,bj,be);bc=s+0.0625;F(h,bc,z,bb,bd,be);bb=s+f+0.0625;F(h,bb,bf,bi,bd,bh);F(h,bb,bf,bg,bj,bh);F(h,bc,z,ba,bj,be);bc=u;c=t+0.0625;ba=c;F(h,bc,z,ba,bd,be);bb=u+f;bg=c+g;F(h,bb,bf,bg,bd,bh);bi=v+f;F(h,bi,bf,bg,bj,bh);bg=v;F(h,bg,z,ba,bj,be);c=t-0.0625;ba=c;F(h,bg,z,ba,bd,be);bg=c+g;F(h,bi,bf,bg,bd,bh);F(h,bb,bf,bg,bj,bh);F(h,bc,z,ba,bj,be);}
function UD(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x;BD();g=Bc$;h=b.qt(0,c);if(a.cQ>=0)h=a.cQ;c=(h&15)<<4;h=h&240;i=c;j=i/256.0;k=(i+15.989999771118164)/256.0;i=h;l=i/256.0;i=(i+15.989999771118164)/256.0;d=d+0.5;m=d-0.44999998807907104;d=d+0.44999998807907104;f=f+0.5;n=f-0.44999998807907104;f=f+0.44999998807907104;o=m;p=e+1.0;q=n;r=j;s=l;F(g,o,p,q,r,s);t=e;u=i;F(g,o,t,q,r,u);v=d;w=f;x=k;F(g,v,t,w,x,u);F(g,v,p,w,x,s);F(g,v,p,w,r,s);F(g,v,t,w,r,u);F(g,o,t,q,x,u);F(g,o,p,q,x,s);F(g,o,p,w,r,s);F(g,o,
t,w,r,u);F(g,v,t,q,x,u);F(g,v,p,q,x,s);F(g,v,p,q,r,s);F(g,v,t,q,r,u);F(g,o,t,w,x,u);F(g,o,p,w,x,s);}
function QI(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba;BD();g=Bc$;h=b.qt(0,c);if(a.cQ>=0)h=a.cQ;i=(h&15)<<4;c=h&240;j=i;k=j/256.0;j=(j+15.989999771118164)/256.0;l=c;m=l/256.0;l=(l+15.989999771118164)/256.0;d=d+0.5;n=d-0.25;o=d+0.25;p=f+0.5;q=p-0.5;r=p+0.5;s=n;t=e+1.0;u=q;v=k;w=m;F(g,s,t,u,v,w);x=e;y=l;F(g,s,x,u,v,y);z=r;ba=j;F(g,s,x,z,ba,y);F(g,s,t,z,ba,w);F(g,s,t,z,v,w);F(g,s,x,z,v,y);F(g,s,x,u,ba,y);F(g,s,t,u,ba,w);s=o;F(g,s,t,z,v,w);F(g,s,x,z,v,y);F(g,s,x,u,ba,y);F(g,s,t,u,ba,w);F(g,s,t,
u,v,w);F(g,s,x,u,v,y);F(g,s,x,z,ba,y);F(g,s,t,z,ba,w);e=d-0.5;d=d+0.5;f=p-0.25;j=p+0.25;u=e;z=f;F(g,u,t,z,v,w);F(g,u,x,z,v,y);s=d;F(g,s,x,z,ba,y);F(g,s,t,z,ba,w);F(g,s,t,z,v,w);F(g,s,x,z,v,y);F(g,u,x,z,ba,y);F(g,u,t,z,ba,w);z=j;F(g,s,t,z,v,w);F(g,s,x,z,v,y);F(g,u,x,z,ba,y);F(g,u,t,z,ba,w);F(g,u,t,z,v,w);F(g,u,x,z,v,y);F(g,s,x,z,ba,y);F(g,s,t,z,ba,w);}
function JP(a,b,c,d){return CR(a.bA,b,c,d)!==Bda?1.0:Cr(a.bA,b,c,d)/9.0;}
function PF(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v;BD();g=Bc$;if(a.cQ>=0)f=a.cQ;h=(f&15)<<4;f=f&240;i=h;j=i/256.0;k=(i+15.989999771118164)/256.0;l=f;m=l/256.0;l=(l+15.989999771118164)/256.0;i=c+b.ew;c=c+b.fC;d=d+b.ch;n=e+b.ev;o=e+b.fB;p=i;q=d;r=o;s=j;t=l;F(g,p,q,r,s,t);u=n;v=m;F(g,p,q,u,s,v);p=c;s=k;F(g,p,q,u,s,v);F(g,p,q,r,s,t);}
function MO(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v;BD();g=Bc$;if(a.cQ>=0)f=a.cQ;h=(f&15)<<4;f=f&240;i=h;j=i/256.0;k=(i+15.989999771118164)/256.0;i=f;l=i/256.0;m=(i+15.989999771118164)/256.0;i=c+b.ew;c=c+b.fC;d=d+b.cD;n=e+b.ev;o=e+b.fB;p=c;q=d;r=o;s=k;t=m;F(g,p,q,r,s,t);u=n;v=l;F(g,p,q,u,s,v);p=i;s=j;F(g,p,q,u,s,v);F(g,p,q,r,s,t);}
function Mt(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x;BD();g=Bc$;if(a.cQ>=0)f=a.cQ;h=(f&15)<<4;f=f&240;i=h;j=i/256.0;k=(i+15.989999771118164)/256.0;if(b.ch>=0.0&&b.cD<=1.0){l=f;m=(l+b.ch*15.989999771118164)/256.0;n=(l+b.cD*15.989999771118164)/256.0;}else{i=f;m=i/256.0;n=(i+15.989999771118164)/256.0;}i=c;o=i+b.ew;i=i+b.fC;l=d;p=l+b.ch;q=l+b.cD;l=e+b.ev;r=o;s=q;t=l;u=k;v=m;F(g,r,s,t,u,v);w=i;x=j;F(g,w,s,t,x,v);s=p;v=n;F(g,w,s,t,x,v);F(g,r,s,t,u,v);}
function Nu(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x;BD();g=Bc$;if(a.cQ>=0)f=a.cQ;h=(f&15)<<4;f=f&240;i=h;j=i/256.0;k=(i+15.989999771118164)/256.0;if(b.ch>=0.0&&b.cD<=1.0){l=f;m=(l+b.ch*15.989999771118164)/256.0;n=(l+b.cD*15.989999771118164)/256.0;}else{i=f;m=i/256.0;n=(i+15.989999771118164)/256.0;}i=c;o=i+b.ew;i=i+b.fC;p=d;q=p+b.ch;l=p+b.cD;p=e+b.fB;r=o;s=l;t=p;u=j;v=m;F(g,r,s,t,u,v);w=q;x=n;F(g,r,w,t,u,x);r=i;u=k;F(g,r,w,t,u,x);F(g,r,s,t,u,v);}
function NF(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y;BD();g=Bc$;if(a.cQ>=0)f=a.cQ;h=(f&15)<<4;i=f&240;j=h;k=j/256.0;l=(j+15.989999771118164)/256.0;if(b.ch>=0.0&&b.cD<=1.0){m=i;n=(m+b.ch*15.989999771118164)/256.0;o=(m+b.cD*15.989999771118164)/256.0;}else{j=i;n=j/256.0;o=(j+15.989999771118164)/256.0;}j=c+b.ew;p=d;m=p+b.ch;p=p+b.cD;q=e;r=q+b.ev;q=q+b.fB;s=j;t=p;u=q;v=l;w=n;F(g,s,t,u,v,w);x=r;y=k;F(g,s,t,x,y,w);t=m;w=o;F(g,s,t,x,y,w);F(g,s,t,u,v,w);}
function Nr(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y;BD();g=Bc$;if(a.cQ>=0)f=a.cQ;h=(f&15)<<4;i=f&240;j=h;k=j/256.0;l=(j+15.989999771118164)/256.0;if(b.ch>=0.0&&b.cD<=1.0){m=i;n=(m+b.ch*15.989999771118164)/256.0;o=(m+b.cD*15.989999771118164)/256.0;}else{j=i;n=j/256.0;o=(j+15.989999771118164)/256.0;}j=c+b.fC;p=d;m=p+b.ch;p=p+b.cD;q=e;r=q+b.ev;q=q+b.fB;s=j;t=m;u=q;v=k;w=o;F(g,s,t,u,v,w);x=r;y=l;F(g,s,t,x,y,w);t=p;w=n;F(g,s,t,x,y,w);F(g,s,t,u,v,w);}
function IU(a,b){var c,d;BD();c=Bc$;d=b.ig();if(d){if(d==1){Bx(c);B0(c,0.0,(-1.0),0.0);UD(a,b,(-1),(-0.5),(-0.5),(-0.5));Bt(c);}else if(d==6){Bx(c);B0(c,0.0,(-1.0),0.0);QI(a,b,(-1),(-0.5),(-0.5),(-0.5));Bt(c);}else if(d==2){Bx(c);B0(c,0.0,(-1.0),0.0);It(a,b,(-0.5),(-0.5),(-0.5),0.0,0.0);Bt(c);}}else{Bj((-0.5),(-0.5),(-0.5));Bx(c);B0(c,0.0,(-1.0),0.0);PF(a,b,0.0,0.0,0.0,b.cO(0));Bt(c);Bx(c);B0(c,0.0,1.0,0.0);MO(a,b,0.0,0.0,0.0,b.cO(1));Bt(c);Bx(c);B0(c,0.0,0.0,(-1.0));Mt(a,b,0,0,0,b.cO(2));Bt(c);Bx(c);B0(c,0.0,
0.0,1.0);Nu(a,b,0,0,0,b.cO(3));Bt(c);Bx(c);B0(c,(-1.0),0.0,0.0);NF(a,b,0,0,0,b.cO(4));Bt(c);Bx(c);B0(c,1.0,0.0,0.0);Nr(a,b,0,0,0,b.cO(5));Bt(c);Bj(0.5,0.5,0.5);}}
function ADp(){var a=this;C.call(a);a.iY=null;a.g1=null;a.fV=0;a.fW=0;a.oW=0.0;a.oX=0.0;a.oV=0.0;a.b7=0.0;a.cc=0.0;a.bY=0.0;a.wR=0;a.mS=0;a.lX=0;a.jp=0;a.It=0;}
function BK(a,b){var c=new ADp();A7v(c,a,b);return c;}
function A7v(a,b,c){a.wR=0;a.mS=0;a.lX=0;a.jp=1;a.It=0;a.fV=b;a.fW=c;}
function BH(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z;a.iY=H(E2,8);a.g1=H(Gd,6);i=b+e;j=c+f;k=d+g;l=b-h;c=c-h;d=d-h;i=i+h;j=j+h;h=k+h;if(!a.lX){b=l;l=i;i=b;}a:{m=Hx(i,c,d,0.0,0.0);n=Hx(l,c,d,0.0,8.0);o=Hx(l,j,d,8.0,8.0);p=Hx(i,j,d,8.0,0.0);q=Hx(i,c,h,0.0,0.0);r=Hx(l,c,h,0.0,8.0);s=Hx(l,j,h,8.0,8.0);t=Hx(i,j,h,8.0,0.0);a.iY.data[0]=m;a.iY.data[1]=n;a.iY.data[2]=o;a.iY.data[3]=p;a.iY.data[4]=q;a.iY.data[5]=r;a.iY.data[6]=s;a.iY.data[7]=t;u=a.g1.data;v=new Gd;w=H(E2,4);x=w.data;x[0]=r;x[1]=n;x[2]
=o;x[3]=s;HG(v,w,(a.fV+g|0)+e|0,a.fW+g|0,((a.fV+g|0)+e|0)+g|0,(a.fW+g|0)+f|0);u[0]=v;u=a.g1.data;v=new Gd;w=H(E2,4);x=w.data;x[0]=m;x[1]=q;x[2]=t;x[3]=p;HG(v,w,a.fV,a.fW+g|0,a.fV+g|0,(a.fW+g|0)+f|0);u[1]=v;x=a.g1.data;v=new Gd;w=H(E2,4);u=w.data;u[0]=r;u[1]=q;u[2]=m;u[3]=n;HG(v,w,a.fV+g|0,a.fW,(a.fV+g|0)+e|0,a.fW+g|0);x[2]=v;u=a.g1.data;v=new Gd;w=H(E2,4);x=w.data;x[0]=o;x[1]=p;x[2]=t;x[3]=s;HG(v,w,(a.fV+g|0)+e|0,a.fW,((a.fV+g|0)+e|0)+e|0,a.fW+g|0);u[3]=v;u=a.g1.data;v=new Gd;w=H(E2,4);x=w.data;x[0]=n;x[1]=
m;x[2]=p;x[3]=o;HG(v,w,a.fV+g|0,a.fW+g|0,(a.fV+g|0)+e|0,(a.fW+g|0)+f|0);u[4]=v;w=a.g1.data;v=new Gd;x=H(E2,4);u=x.data;u[0]=q;u[1]=r;u[2]=s;u[3]=t;HG(v,x,((a.fV+g|0)+e|0)+g|0,a.fW+g|0,(((a.fV+g|0)+e|0)+g|0)+e|0,(a.fW+g|0)+f|0);w[5]=v;if(a.lX){y=0;while(true){if(y>=a.g1.data.length)break a;v=a.g1.data[y];w=H(E2,v.hh.data.length);z=w.data;e=0;while(e<v.hh.data.length){z[e]=v.hh.data[(v.hh.data.length-e|0)-1|0];e=e+1|0;}v.hh=w;y=y+1|0;}}}}
function BG(a,b,c,d){a.oW=b;a.oX=c;a.oV=d;}
function B8(a,b){var c,d,e,f,g,h,i;if(a.jp){if(!a.wR){a.mS=JF(1);EX(a.mS,4864);BD();c=Bc$;d=0;while(d<a.g1.data.length){Bx(c);e=a.g1.data[d];f=J_(ZS(e.hh.data[1].hN,e.hh.data[0].hN));g=J_(ZS(e.hh.data[1].hN,e.hh.data[2].hN));h=J_(BF(f.R*g.S-f.S*g.R,f.S*g.U-f.U*g.S,f.U*g.R-f.R*g.U));B0(c, -h.U, -h.R, -h.S);i=0;while(i<4){h=e.hh.data[i];F(c,h.hN.U*b,h.hN.R*b,h.hN.S*b,h.v4,h.v6);i=i+1|0;}Bt(c);d=d+1|0;}E5();a.wR=1;}if(a.b7===0.0&&a.cc===0.0&&a.bY===0.0){if(a.oW===0.0&&a.oX===0.0&&a.oV===0.0)FF(a.mS);else{Bj(a.oW
*b,a.oX*b,a.oV*b);FF(a.mS);Bj( -a.oW*b, -a.oX*b, -a.oV*b);}}else{Ca();Bj(a.oW*b,a.oX*b,a.oV*b);if(a.bY!==0.0)Bs(a.bY*57.2957763671875,0.0,0.0,1.0);if(a.cc!==0.0)Bs(a.cc*57.2957763671875,0.0,1.0,0.0);if(a.b7!==0.0)Bs(a.b7*57.2957763671875,1.0,0.0,0.0);FF(a.mS);BR();}}}
function Es(){C.call(this);}
var Ben=null;var Bei=null;var Beh=null;var Bej=null;var Bek=null;var Bem=null;var Bel=null;var BdG=null;var Beo=null;var Bep=null;function AB$(b,c){var d;if(Eb(c)){if(Ben===null)Ben=ARo();c=Ben;if(c.hasOwnProperty($rt_ustr(b)))b=(c[$rt_ustr(b)].value!==null?$rt_str(c[$rt_ustr(b)].value):null);d=Gt(b,95);c=d<=0?B(9):DO(b,d+1|0);}return c;}
function IE(b,c,d){var e,f,g,h,i,j;if(Eb(d))e=c;else{e=new S;V(e);e=R(G(G(G(e,c),B(267)),d));}f=b.hasOwnProperty($rt_ustr(e))?b[$rt_ustr(e)]:b.hasOwnProperty($rt_ustr(c))?b[$rt_ustr(c)]:b.root;g=H(BC,f.length);h=g.data;i=0;j=h.length;while(i<j){h[i]=(f[i].value!==null?$rt_str(f[i].value):null);i=i+1|0;}return g;}
function ARo(){return {"ksh":{"value":"ksh-Latn-DE"},"ksj":{"value":"ksj-Latn-ZZ"},"cch":{"value":"cch-Latn-NG"},"und-Khar":{"value":"pra-Khar-PK"},"gkn":{"value":"gkn-Latn-ZZ"},"ksr":{"value":"ksr-Latn-ZZ"},"und-Mani":{"value":"xmn-Mani-CN"},"gkp":{"value":"gkp-Latn-ZZ"},"xmf":{"value":"xmf-Geor-GE"},"ccp":{"value":"ccp-Cakm-BD"},"ted":{"value":"ted-Latn-ZZ"},"und-Mand":{"value":"myz-Mand-IR"},"ktb":{"value":"ktb-Ethi-ZZ"},"xmn":{"value":"xmn-Mani-CN"},"sd-Sind":{"value":"sd-Sind-IN"},"xmr":{"value":"xmr-Merc-SD"}
,"tem":{"value":"tem-Latn-SL"},"und-Mroo":{"value":"mro-Mroo-BD"},"teo":{"value":"teo-Latn-UG"},"tet":{"value":"tet-Latn-TL"},"ktm":{"value":"ktm-Latn-ZZ"},"glk":{"value":"glk-Arab-IR"},"kto":{"value":"kto-Latn-ZZ"},"und-Soyo":{"value":"cmg-Soyo-MN"},"xna":{"value":"xna-Narb-SA"},"tfi":{"value":"tfi-Latn-ZZ"},"kub":{"value":"kub-Latn-ZZ"},"kue":{"value":"kue-Latn-ZZ"},"kud":{"value":"kud-Latn-ZZ"},"xnr":{"value":"xnr-Deva-IN"},"ceb":{"value":"ceb-Latn-PH"},"kuj":{"value":"kuj-Latn-ZZ"},"kum":{"value":"kum-Cyrl-RU"}
,"kun":{"value":"kun-Latn-ZZ"},"gmm":{"value":"gmm-Latn-ZZ"},"kup":{"value":"kup-Latn-ZZ"},"kus":{"value":"kus-Latn-ZZ"},"gmv":{"value":"gmv-Ethi-ZZ"},"tgc":{"value":"tgc-Latn-ZZ"},"xog":{"value":"xog-Latn-UG"},"und-Arab-YT":{"value":"swb-Arab-YT"},"und-Latn-ET":{"value":"en-Latn-ET"},"xon":{"value":"xon-Latn-ZZ"},"ha-CM":{"value":"ha-Arab-CM"},"gnd":{"value":"gnd-Latn-ZZ"},"kvg":{"value":"kvg-Latn-ZZ"},"tgo":{"value":"tgo-Latn-ZZ"},"cfa":{"value":"cfa-Latn-ZZ"},"gng":{"value":"gng-Latn-ZZ"},"tgu":{"value":
"tgu-Latn-ZZ"},"und-Latn-GE":{"value":"ku-Latn-GE"},"kvr":{"value":"kvr-Latn-ID"},"kvx":{"value":"kvx-Arab-PK"},"und-Gujr":{"value":"gu-Gujr-IN"},"thl":{"value":"thl-Deva-NP"},"xpr":{"value":"xpr-Prti-IR"},"thq":{"value":"thq-Deva-NP"},"god":{"value":"god-Latn-ZZ"},"gof":{"value":"gof-Ethi-ZZ"},"kwj":{"value":"kwj-Latn-ZZ"},"ky-Arab":{"value":"ky-Arab-CN"},"thr":{"value":"thr-Deva-NP"},"goi":{"value":"goi-Latn-ZZ"},"cgg":{"value":"cgg-Latn-UG"},"kwo":{"value":"kwo-Latn-ZZ"},"gom":{"value":"gom-Deva-IN"},"gon":
{"value":"gon-Telu-IN"},"gos":{"value":"gos-Latn-NL"},"gor":{"value":"gor-Latn-ID"},"und-Latn-CY":{"value":"tr-Latn-CY"},"got":{"value":"got-Goth-UA"},"tif":{"value":"tif-Latn-ZZ"},"tig":{"value":"tig-Ethi-ER"},"kxa":{"value":"kxa-Latn-ZZ"},"kxc":{"value":"kxc-Ethi-ZZ"},"pag":{"value":"pag-Latn-PH"},"tik":{"value":"tik-Latn-ZZ"},"tim":{"value":"tim-Latn-ZZ"},"pal":{"value":"pal-Phli-IR"},"tio":{"value":"tio-Latn-ZZ"},"pam":{"value":"pam-Latn-PH"},"und-Marc":{"value":"bo-Marc-CN"},"pap":{"value":"pap-Latn-AW"}
,"und-Latn-CN":{"value":"za-Latn-CN"},"tiv":{"value":"tiv-Latn-NG"},"kxm":{"value":"kxm-Thai-TH"},"kxp":{"value":"kxp-Arab-PK"},"pau":{"value":"pau-Latn-PW"},"chk":{"value":"chk-Latn-FM"},"chm":{"value":"chm-Cyrl-RU"},"xrb":{"value":"xrb-Latn-ZZ"},"chp":{"value":"chp-Latn-CA"},"cho":{"value":"cho-Latn-US"},"kxw":{"value":"kxw-Latn-ZZ"},"und-Latn-DZ":{"value":"fr-Latn-DZ"},"chr":{"value":"chr-Cher-US"},"kxz":{"value":"kxz-Latn-ZZ"},"und-Batk":{"value":"bbc-Batk-ID"},"und-Bass":{"value":"bsq-Bass-LR"},"kye":{"value"
:"kye-Latn-ZZ"},"pbi":{"value":"pbi-Latn-ZZ"},"und-Deva-MU":{"value":"bho-Deva-MU"},"und-Sgnw":{"value":"ase-Sgnw-US"},"xsa":{"value":"xsa-Sarb-YE"},"kyx":{"value":"kyx-Latn-ZZ"},"xsi":{"value":"xsi-Latn-ZZ"},"pcd":{"value":"pcd-Latn-FR"},"und-Latn-AM":{"value":"ku-Latn-AM"},"xsm":{"value":"xsm-Latn-ZZ"},"tkl":{"value":"tkl-Latn-TK"},"und-Thai-CN":{"value":"lcp-Thai-CN"},"grb":{"value":"grb-Latn-ZZ"},"xsr":{"value":"xsr-Deva-NP"},"und-Latn-AF":{"value":"tk-Latn-AF"},"grc":{"value":"grc-Cprt-CY"},"tkr":{"value"
:"tkr-Latn-AZ"},"cja":{"value":"cja-Arab-KH"},"pcm":{"value":"pcm-Latn-NG"},"tkt":{"value":"tkt-Deva-NP"},"und-Olck":{"value":"sat-Olck-IN"},"kzr":{"value":"kzr-Latn-ZZ"},"cjm":{"value":"cjm-Cham-VN"},"grt":{"value":"grt-Beng-IN"},"und-Arab-TJ":{"value":"fa-Arab-TJ"},"und-Arab-TG":{"value":"apd-Arab-TG"},"und-Arab-TH":{"value":"mfa-Arab-TH"},"und-Deva-PK":{"value":"btv-Deva-PK"},"grw":{"value":"grw-Latn-ZZ"},"cjv":{"value":"cjv-Latn-ZZ"},"pdc":{"value":"pdc-Latn-US"},"tlf":{"value":"tlf-Latn-ZZ"},"und-Arab-TR":
{"value":"az-Arab-TR"},"ckb":{"value":"ckb-Arab-IQ"},"tly":{"value":"tly-Latn-AZ"},"pdt":{"value":"pdt-Latn-CA"},"tlx":{"value":"tlx-Latn-ZZ"},"ckl":{"value":"ckl-Latn-ZZ"},"cko":{"value":"cko-Latn-ZZ"},"gsw":{"value":"gsw-Latn-CH"},"ped":{"value":"ped-Latn-ZZ"},"tmh":{"value":"tmh-Latn-NE"},"cky":{"value":"cky-Latn-ZZ"},"kk-Arab":{"value":"kk-Arab-CN"},"und-Runr":{"value":"non-Runr-SE"},"cla":{"value":"cla-Latn-ZZ"},"peo":{"value":"peo-Xpeo-IR"},"tmy":{"value":"tmy-Latn-ZZ"},"pex":{"value":"pex-Latn-ZZ"},"ky-TR":
{"value":"ky-Latn-TR"},"tnh":{"value":"tnh-Latn-ZZ"},"guc":{"value":"guc-Latn-CO"},"gub":{"value":"gub-Latn-BR"},"gud":{"value":"gud-Latn-ZZ"},"pfl":{"value":"pfl-Latn-DE"},"cme":{"value":"cme-Latn-ZZ"},"cmg":{"value":"cmg-Soyo-MN"},"gur":{"value":"gur-Latn-GH"},"xwe":{"value":"xwe-Latn-ZZ"},"guw":{"value":"guw-Latn-ZZ"},"tof":{"value":"tof-Latn-ZZ"},"gux":{"value":"gux-Latn-ZZ"},"guz":{"value":"guz-Latn-KE"},"tog":{"value":"tog-Latn-MW"},"gvf":{"value":"gvf-Latn-ZZ"},"toq":{"value":"toq-Latn-ZZ"},"gvr":{"value"
:"gvr-Deva-NP"},"und-Guru":{"value":"pa-Guru-IN"},"gvs":{"value":"gvs-Latn-ZZ"},"tpi":{"value":"tpi-Latn-PG"},"tpm":{"value":"tpm-Latn-ZZ"},"und-Tfng":{"value":"zgh-Tfng-MA"},"gwc":{"value":"gwc-Arab-ZZ"},"und-Arab-PK":{"value":"ur-Arab-PK"},"phl":{"value":"phl-Arab-ZZ"},"und-Aghb":{"value":"lez-Aghb-RU"},"phn":{"value":"phn-Phnx-LB"},"gwi":{"value":"gwi-Latn-CA"},"tpz":{"value":"tpz-Latn-ZZ"},"cop":{"value":"cop-Copt-EG"},"gwt":{"value":"gwt-Arab-ZZ"},"lab":{"value":"lab-Lina-GR"},"lad":{"value":"lad-Hebr-IL"}
,"lah":{"value":"lah-Arab-PK"},"pil":{"value":"pil-Latn-ZZ"},"lag":{"value":"lag-Latn-TZ"},"tqo":{"value":"tqo-Latn-ZZ"},"laj":{"value":"laj-Latn-UG"},"pip":{"value":"pip-Latn-ZZ"},"und-Khmr":{"value":"km-Khmr-KH"},"las":{"value":"las-Latn-ZZ"},"sd-Deva":{"value":"sd-Deva-IN"},"und-Khoj":{"value":"sd-Khoj-IN"},"cps":{"value":"cps-Latn-PH"},"kk-AF":{"value":"kk-Arab-AF"},"und-Arab-MU":{"value":"ur-Arab-MU"},"lbe":{"value":"lbe-Cyrl-RU"},"und-Arab-NG":{"value":"ha-Arab-NG"},"gyi":{"value":"gyi-Latn-ZZ"},"tru":
{"value":"tru-Latn-TR"},"trw":{"value":"trw-Arab-ZZ"},"trv":{"value":"trv-Latn-TW"},"lbu":{"value":"lbu-Latn-ZZ"},"lbw":{"value":"lbw-Latn-ID"},"tsd":{"value":"tsd-Grek-GR"},"tsf":{"value":"tsf-Deva-NP"},"pka":{"value":"pka-Brah-IN"},"tsg":{"value":"tsg-Latn-PH"},"tsj":{"value":"tsj-Tibt-BT"},"und-Deva-FJ":{"value":"hif-Deva-FJ"},"pko":{"value":"pko-Latn-KE"},"lcm":{"value":"lcm-Latn-ZZ"},"crh":{"value":"crh-Cyrl-UA"},"lcp":{"value":"lcp-Thai-CN"},"tsw":{"value":"tsw-Latn-ZZ"},"crj":{"value":"crj-Cans-CA"},
"crl":{"value":"crl-Cans-CA"},"und-Arab-MN":{"value":"kk-Arab-MN"},"crk":{"value":"crk-Cans-CA"},"crm":{"value":"crm-Cans-CA"},"und-Arab-MM":{"value":"rhg-Arab-MM"},"pla":{"value":"pla-Latn-ZZ"},"tte":{"value":"tte-Latn-ZZ"},"crs":{"value":"crs-Latn-SC"},"ttd":{"value":"ttd-Latn-ZZ"},"ldb":{"value":"ldb-Latn-ZZ"},"ttj":{"value":"ttj-Latn-UG"},"kk-CN":{"value":"kk-Arab-CN"},"und-Yiii":{"value":"ii-Yiii-CN"},"tts":{"value":"tts-Thai-TH"},"csb":{"value":"csb-Latn-PL"},"ttr":{"value":"ttr-Latn-ZZ"},"ttt":{"value"
:"ttt-Latn-AZ"},"csw":{"value":"csw-Cans-CA"},"tuh":{"value":"tuh-Latn-ZZ"},"led":{"value":"led-Latn-ZZ"},"tul":{"value":"tul-Latn-ZZ"},"lee":{"value":"lee-Latn-ZZ"},"tum":{"value":"tum-Latn-MW"},"und-Arab-KH":{"value":"cja-Arab-KH"},"tuq":{"value":"tuq-Latn-ZZ"},"ctd":{"value":"ctd-Pauc-MM"},"lem":{"value":"lem-Latn-ZZ"},"lep":{"value":"lep-Lepc-IN"},"pms":{"value":"pms-Latn-IT"},"leq":{"value":"leq-Latn-ZZ"},"und-Pauc":{"value":"ctd-Pauc-MM"},"und-Sogo":{"value":"sog-Sogo-UZ"},"leu":{"value":"leu-Latn-ZZ"}
,"lez":{"value":"lez-Cyrl-RU"},"tvd":{"value":"tvd-Latn-ZZ"},"mn-CN":{"value":"mn-Mong-CN"},"sr-TR":{"value":"sr-Latn-TR"},"png":{"value":"png-Latn-ZZ"},"tvl":{"value":"tvl-Latn-TV"},"und-Brah":{"value":"pka-Brah-IN"},"und-Brai":{"value":"fr-Brai-FR"},"pnn":{"value":"pnn-Latn-ZZ"},"tvu":{"value":"tvu-Latn-ZZ"},"pnt":{"value":"pnt-Grek-GR"},"uz-CN":{"value":"uz-Cyrl-CN"},"ha-SD":{"value":"ha-Arab-SD"},"twh":{"value":"twh-Latn-ZZ"},"und-Takr":{"value":"doi-Takr-IN"},"lgg":{"value":"lgg-Latn-ZZ"},"pon":{"value"
:"pon-Latn-FM"},"twq":{"value":"twq-Latn-NE"},"und-Arab-ID":{"value":"ms-Arab-ID"},"und-Arab-IN":{"value":"ur-Arab-IN"},"txg":{"value":"txg-Tang-CN"},"yam":{"value":"yam-Latn-ZZ"},"und-Talu":{"value":"khb-Talu-CN"},"yao":{"value":"yao-Latn-MZ"},"yap":{"value":"yap-Latn-FM"},"yas":{"value":"yas-Latn-ZZ"},"yat":{"value":"yat-Latn-ZZ"},"ppo":{"value":"ppo-Latn-ZZ"},"yav":{"value":"yav-Latn-CM"},"yay":{"value":"yay-Latn-ZZ"},"yaz":{"value":"yaz-Latn-ZZ"},"und-Tale":{"value":"tdd-Tale-CN"},"ybb":{"value":"ybb-Latn-CM"}
,"yba":{"value":"yba-Latn-ZZ"},"tya":{"value":"tya-Latn-ZZ"},"lia":{"value":"lia-Latn-ZZ"},"lid":{"value":"lid-Latn-ZZ"},"und-Latn-TW":{"value":"trv-Latn-TW"},"lif":{"value":"lif-Deva-NP"},"lih":{"value":"lih-Latn-ZZ"},"lig":{"value":"lig-Latn-ZZ"},"lij":{"value":"lij-Latn-IT"},"hag":{"value":"hag-Latn-ZZ"},"und-Latn-TN":{"value":"fr-Latn-TN"},"tyv":{"value":"tyv-Cyrl-RU"},"yby":{"value":"yby-Latn-ZZ"},"und-Arab-GB":{"value":"ks-Arab-GB"},"hak":{"value":"hak-Hans-CN"},"und-Taml":{"value":"ta-Taml-IN"},"ham":
{"value":"ham-Latn-ZZ"},"lis":{"value":"lis-Lisu-CN"},"und-Latn-SY":{"value":"fr-Latn-SY"},"ky-Latn":{"value":"ky-Latn-TR"},"pra":{"value":"pra-Khar-PK"},"haw":{"value":"haw-Latn-US"},"haz":{"value":"haz-Arab-AF"},"ku-LB":{"value":"ku-Arab-LB"},"prd":{"value":"prd-Arab-IR"},"prg":{"value":"prg-Latn-001"},"tzm":{"value":"tzm-Latn-MA"},"hbb":{"value":"hbb-Latn-ZZ"},"und-Latn-UA":{"value":"pl-Latn-UA"},"ljp":{"value":"ljp-Latn-ID"},"und-Tang":{"value":"txg-Tang-CN"},"yue-Hans":{"value":"yue-Hans-CN"},"und-Latn-RU":
{"value":"krl-Latn-RU"},"lki":{"value":"lki-Arab-IR"},"pss":{"value":"pss-Latn-ZZ"},"lkt":{"value":"lkt-Latn-US"},"sr-RO":{"value":"sr-Latn-RO"},"und-Arab-CN":{"value":"ug-Arab-CN"},"lle":{"value":"lle-Latn-ZZ"},"und-Cyrl":{"value":"ru-Cyrl-RU"},"uz-AF":{"value":"uz-Arab-AF"},"yer":{"value":"yer-Latn-ZZ"},"und-Beng":{"value":"bn-Beng-BD"},"ptp":{"value":"ptp-Latn-ZZ"},"lln":{"value":"lln-Latn-ZZ"},"sr-RU":{"value":"sr-Latn-RU"},"hdy":{"value":"hdy-Ethi-ZZ"},"unr-NP":{"value":"unr-Deva-NP"},"und-Mend":{"value"
:"men-Mend-SL"},"lmn":{"value":"lmn-Telu-IN"},"lmp":{"value":"lmp-Latn-ZZ"},"lmo":{"value":"lmo-Latn-IT"},"puu":{"value":"puu-Latn-GA"},"und-Arab-CC":{"value":"ms-Arab-CC"},"pal-Phlp":{"value":"pal-Phlp-CN"},"ygr":{"value":"ygr-Latn-ZZ"},"ygw":{"value":"ygw-Latn-ZZ"},"lns":{"value":"lns-Latn-ZZ"},"ky-CN":{"value":"ky-Arab-CN"},"lnu":{"value":"lnu-Latn-ZZ"},"pwa":{"value":"pwa-Latn-ZZ"},"und-Mahj":{"value":"hi-Mahj-IN"},"rif-NL":{"value":"rif-Latn-NL"},"loj":{"value":"loj-Latn-ZZ"},"lol":{"value":"lol-Latn-CD"}
,"lok":{"value":"lok-Latn-ZZ"},"lor":{"value":"lor-Latn-ZZ"},"und-Sora":{"value":"srb-Sora-IN"},"los":{"value":"los-Latn-ZZ"},"loz":{"value":"loz-Latn-ZM"},"und-202":{"value":"en-Latn-NG"},"und-Latn-MR":{"value":"fr-Latn-MR"},"hhy":{"value":"hhy-Latn-ZZ"},"hia":{"value":"hia-Latn-ZZ"},"hif":{"value":"hif-Latn-FJ"},"dad":{"value":"dad-Latn-ZZ"},"hih":{"value":"hih-Latn-ZZ"},"hig":{"value":"hig-Latn-ZZ"},"daf":{"value":"daf-Latn-ZZ"},"ubu":{"value":"ubu-Latn-ZZ"},"dah":{"value":"dah-Latn-ZZ"},"hil":{"value":"hil-Latn-PH"}
,"dag":{"value":"dag-Latn-ZZ"},"und-Mero":{"value":"xmr-Mero-SD"},"dak":{"value":"dak-Latn-US"},"und-Merc":{"value":"xmr-Merc-SD"},"dar":{"value":"dar-Cyrl-RU"},"dav":{"value":"dav-Latn-KE"},"lrc":{"value":"lrc-Arab-IR"},"yko":{"value":"yko-Latn-ZZ"},"und-Latn-MK":{"value":"sq-Latn-MK"},"und-Latn-MM":{"value":"kac-Latn-MM"},"dbd":{"value":"dbd-Latn-ZZ"},"und-Latn-MO":{"value":"pt-Latn-MO"},"und-Latn-MA":{"value":"fr-Latn-MA"},"und-Bali":{"value":"ban-Bali-ID"},"und-Tavt":{"value":"blt-Tavt-VN"},"dbq":{"value"
:"dbq-Latn-ZZ"},"yle":{"value":"yle-Latn-ZZ"},"ylg":{"value":"ylg-Latn-ZZ"},"und-Maka":{"value":"mak-Maka-ID"},"yll":{"value":"yll-Latn-ZZ"},"udm":{"value":"udm-Cyrl-RU"},"dcc":{"value":"dcc-Arab-IN"},"yml":{"value":"yml-Latn-ZZ"},"hla":{"value":"hla-Latn-ZZ"},"und-Latn-IR":{"value":"tk-Latn-IR"},"ltg":{"value":"ltg-Latn-LV"},"und-Latn-KM":{"value":"fr-Latn-KM"},"ddn":{"value":"ddn-Latn-ZZ"},"hlu":{"value":"hlu-Hluw-TR"},"lua":{"value":"lua-Latn-CD"},"und-Bamu":{"value":"bax-Bamu-CM"},"hmd":{"value":"hmd-Plrd-CN"}
,"ded":{"value":"ded-Latn-ZZ"},"luo":{"value":"luo-Latn-KE"},"und-142":{"value":"zh-Hans-CN"},"und-143":{"value":"uz-Latn-UZ"},"den":{"value":"den-Latn-CA"},"und-Gran":{"value":"sa-Gran-IN"},"hmt":{"value":"hmt-Latn-ZZ"},"uga":{"value":"uga-Ugar-SY"},"luz":{"value":"luz-Arab-IR"},"luy":{"value":"luy-Latn-KE"},"und-145":{"value":"ar-Arab-SA"},"und-Cakm":{"value":"ccp-Cakm-BD"},"und-Dupl":{"value":"fr-Dupl-FR"},"yon":{"value":"yon-Latn-ZZ"},"ug-MN":{"value":"ug-Cyrl-MN"},"hne":{"value":"hne-Deva-IN"},"hnd":{"value"
:"hnd-Arab-PK"},"hnj":{"value":"hnj-Hmng-LA"},"hno":{"value":"hno-Arab-PK"},"hnn":{"value":"hnn-Latn-PH"},"ug-KZ":{"value":"ug-Cyrl-KZ"},"und-154":{"value":"en-Latn-GB"},"und-155":{"value":"de-Latn-DE"},"und-150":{"value":"ru-Cyrl-RU"},"und-151":{"value":"ru-Cyrl-RU"},"und-Sylo":{"value":"syl-Sylo-BD"},"hoc":{"value":"hoc-Deva-IN"},"dga":{"value":"dga-Latn-ZZ"},"lwl":{"value":"lwl-Thai-TH"},"und-Ital":{"value":"ett-Ital-IT"},"hoj":{"value":"hoj-Deva-IN"},"dgh":{"value":"dgh-Latn-ZZ"},"dgi":{"value":"dgi-Latn-ZZ"}
,"dgl":{"value":"dgl-Arab-ZZ"},"hot":{"value":"hot-Latn-ZZ"},"dgr":{"value":"dgr-Latn-CA"},"dgz":{"value":"dgz-Latn-ZZ"},"yrb":{"value":"yrb-Latn-ZZ"},"yre":{"value":"yre-Latn-ZZ"},"und-Lyci":{"value":"xlc-Lyci-TR"},"und-Cans":{"value":"cr-Cans-CA"},"und-Hluw":{"value":"hlu-Hluw-TR"},"und-Nand":{"value":"sa-Nand-IN"},"yrl":{"value":"yrl-Latn-BR"},"dia":{"value":"dia-Latn-ZZ"},"und-Grek":{"value":"el-Grek-GR"},"und-Mong":{"value":"mn-Mong-CN"},"und-Lydi":{"value":"xld-Lydi-TR"},"yss":{"value":"yss-Latn-ZZ"},
"und-Newa":{"value":"new-Newa-NP"},"lzh":{"value":"lzh-Hans-CN"},"dje":{"value":"dje-Latn-NE"},"lzz":{"value":"lzz-Latn-TR"},"uli":{"value":"uli-Latn-FM"},"hsb":{"value":"hsb-Latn-DE"},"und-Xsux":{"value":"akk-Xsux-IQ"},"hsn":{"value":"hsn-Hans-CN"},"und-Cari":{"value":"xcr-Cari-TR"},"und-Syrc":{"value":"syr-Syrc-IQ"},"yua":{"value":"yua-Latn-MX"},"yue":{"value":"yue-Hant-HK"},"umb":{"value":"umb-Latn-AO"},"yuj":{"value":"yuj-Latn-ZZ"},"yut":{"value":"yut-Latn-ZZ"},"yuw":{"value":"yuw-Latn-ZZ"},"und-Bopo":{"value"
:"zh-Bopo-TW"},"und":{"value":"en-Latn-US"},"und-Egyp":{"value":"egy-Egyp-EG"},"und-Tglg":{"value":"fil-Tglg-PH"},"unr":{"value":"unr-Beng-IN"},"hui":{"value":"hui-Latn-ZZ"},"und-Elba":{"value":"sq-Elba-AL"},"unx":{"value":"unx-Beng-IN"},"und-Narb":{"value":"xna-Narb-SA"},"pa-PK":{"value":"pa-Arab-PK"},"und-Hebr-CA":{"value":"yi-Hebr-CA"},"und-Geor":{"value":"ka-Geor-GE"},"und-Shrd":{"value":"sa-Shrd-IN"},"dnj":{"value":"dnj-Latn-CI"},"dob":{"value":"dob-Latn-ZZ"},"und-Mymr-TH":{"value":"mnw-Mymr-TH"},"doi":
{"value":"doi-Arab-IN"},"dop":{"value":"dop-Latn-ZZ"},"und-Sund":{"value":"su-Sund-ID"},"dow":{"value":"dow-Latn-ZZ"},"sr-ME":{"value":"sr-Latn-ME"},"und-Hung":{"value":"hu-Hung-HU"},"mad":{"value":"mad-Latn-ID"},"mag":{"value":"mag-Deva-IN"},"maf":{"value":"maf-Latn-CM"},"mai":{"value":"mai-Deva-IN"},"mak":{"value":"mak-Latn-ID"},"man":{"value":"man-Latn-GM"},"mas":{"value":"mas-Latn-KE"},"maw":{"value":"maw-Latn-ZZ"},"maz":{"value":"maz-Latn-MX"},"uri":{"value":"uri-Latn-ZZ"},"mbh":{"value":"mbh-Latn-ZZ"}
,"urt":{"value":"urt-Latn-ZZ"},"mbo":{"value":"mbo-Latn-ZZ"},"urw":{"value":"urw-Latn-ZZ"},"mbq":{"value":"mbq-Latn-ZZ"},"mbu":{"value":"mbu-Latn-ZZ"},"und-Hebr-GB":{"value":"yi-Hebr-GB"},"usa":{"value":"usa-Latn-ZZ"},"mbw":{"value":"mbw-Latn-ZZ"},"mci":{"value":"mci-Latn-ZZ"},"dri":{"value":"dri-Latn-ZZ"},"mcq":{"value":"mcq-Latn-ZZ"},"mcp":{"value":"mcp-Latn-ZZ"},"mcr":{"value":"mcr-Latn-ZZ"},"mcu":{"value":"mcu-Latn-ZZ"},"drs":{"value":"drs-Ethi-ZZ"},"mda":{"value":"mda-Latn-ZZ"},"mdf":{"value":"mdf-Cyrl-RU"}
,"mde":{"value":"mde-Arab-ZZ"},"mdh":{"value":"mdh-Latn-PH"},"dsb":{"value":"dsb-Latn-DE"},"mdj":{"value":"mdj-Latn-ZZ"},"utr":{"value":"utr-Latn-ZZ"},"mdr":{"value":"mdr-Latn-ID"},"mdx":{"value":"mdx-Ethi-ZZ"},"mee":{"value":"mee-Latn-ZZ"},"med":{"value":"med-Latn-ZZ"},"mek":{"value":"mek-Latn-ZZ"},"men":{"value":"men-Latn-SL"},"az-RU":{"value":"az-Cyrl-RU"},"mis-Medf":{"value":"mis-Medf-NG"},"mer":{"value":"mer-Latn-KE"},"dtm":{"value":"dtm-Latn-ML"},"meu":{"value":"meu-Latn-ZZ"},"met":{"value":"met-Latn-ZZ"}
,"dtp":{"value":"dtp-Latn-MY"},"dts":{"value":"dts-Latn-ZZ"},"uvh":{"value":"uvh-Latn-ZZ"},"dty":{"value":"dty-Deva-NP"},"mfa":{"value":"mfa-Arab-TH"},"uvl":{"value":"uvl-Latn-ZZ"},"mfe":{"value":"mfe-Latn-MU"},"dua":{"value":"dua-Latn-CM"},"dud":{"value":"dud-Latn-ZZ"},"duc":{"value":"duc-Latn-ZZ"},"mfn":{"value":"mfn-Latn-ZZ"},"dug":{"value":"dug-Latn-ZZ"},"mfo":{"value":"mfo-Latn-ZZ"},"mfq":{"value":"mfq-Latn-ZZ"},"und-Phag":{"value":"lzh-Phag-CN"},"dva":{"value":"dva-Latn-ZZ"},"mgh":{"value":"mgh-Latn-MZ"}
,"mgl":{"value":"mgl-Latn-ZZ"},"mgo":{"value":"mgo-Latn-CM"},"mgp":{"value":"mgp-Deva-NP"},"mgy":{"value":"mgy-Latn-TZ"},"zag":{"value":"zag-Latn-SD"},"mhi":{"value":"mhi-Latn-ZZ"},"mhl":{"value":"mhl-Latn-ZZ"},"dww":{"value":"dww-Latn-ZZ"},"mif":{"value":"mif-Latn-ZZ"},"und-Mymr-IN":{"value":"kht-Mymr-IN"},"min":{"value":"min-Latn-ID"},"mis":{"value":"mis-Hatr-IQ"},"ian":{"value":"ian-Latn-ZZ"},"miw":{"value":"miw-Latn-ZZ"},"iar":{"value":"iar-Latn-ZZ"},"uz-Arab":{"value":"uz-Arab-AF"},"ibb":{"value":"ibb-Latn-NG"}
,"iba":{"value":"iba-Latn-MY"},"dyo":{"value":"dyo-Latn-SN"},"dyu":{"value":"dyu-Latn-BF"},"iby":{"value":"iby-Latn-ZZ"},"zdj":{"value":"zdj-Arab-KM"},"ica":{"value":"ica-Latn-ZZ"},"mki":{"value":"mki-Arab-ZZ"},"und-Wcho":{"value":"nnp-Wcho-IN"},"ich":{"value":"ich-Latn-ZZ"},"mkl":{"value":"mkl-Latn-ZZ"},"dzg":{"value":"dzg-Latn-ZZ"},"mkp":{"value":"mkp-Latn-ZZ"},"zea":{"value":"zea-Latn-NL"},"mkw":{"value":"mkw-Latn-ZZ"},"mle":{"value":"mle-Latn-ZZ"},"idd":{"value":"idd-Latn-ZZ"},"idi":{"value":"idi-Latn-ZZ"}
,"lif-Limb":{"value":"lif-Limb-IN"},"mlp":{"value":"mlp-Latn-ZZ"},"mls":{"value":"mls-Latn-SD"},"idu":{"value":"idu-Latn-ZZ"},"quc":{"value":"quc-Latn-GT"},"qug":{"value":"qug-Latn-EC"},"und-Jamo":{"value":"ko-Jamo-KR"},"mmo":{"value":"mmo-Latn-ZZ"},"mmu":{"value":"mmu-Latn-ZZ"},"mmx":{"value":"mmx-Latn-ZZ"},"zgh":{"value":"zgh-Tfng-MA"},"mna":{"value":"mna-Latn-ZZ"},"mnf":{"value":"mnf-Latn-ZZ"},"ife":{"value":"ife-Latn-TG"},"mni":{"value":"mni-Beng-IN"},"mnw":{"value":"mnw-Mymr-MM"},"moa":{"value":"moa-Latn-ZZ"}
,"moe":{"value":"moe-Latn-CA"},"igb":{"value":"igb-Latn-ZZ"},"ige":{"value":"ige-Latn-ZZ"},"moh":{"value":"moh-Latn-CA"},"und-Hebr-SE":{"value":"yi-Hebr-SE"},"zhx":{"value":"zhx-Nshu-CN"},"mos":{"value":"mos-Latn-BF"},"und-Shaw":{"value":"en-Shaw-GB"},"zia":{"value":"zia-Latn-ZZ"},"mox":{"value":"mox-Latn-ZZ"},"vag":{"value":"vag-Latn-ZZ"},"vai":{"value":"vai-Vaii-LR"},"van":{"value":"van-Latn-ZZ"},"mpp":{"value":"mpp-Latn-ZZ"},"mpt":{"value":"mpt-Latn-ZZ"},"mps":{"value":"mps-Latn-ZZ"},"mpx":{"value":"mpx-Latn-ZZ"}
,"und-Hebr-US":{"value":"yi-Hebr-US"},"mql":{"value":"mql-Latn-ZZ"},"und-Hebr-UA":{"value":"yi-Hebr-UA"},"mrd":{"value":"mrd-Deva-NP"},"mrj":{"value":"mrj-Cyrl-RU"},"ijj":{"value":"ijj-Latn-ZZ"},"mro":{"value":"mro-Mroo-BD"},"und-Modi":{"value":"mr-Modi-IN"},"ebu":{"value":"ebu-Latn-KE"},"zlm":{"value":"zlm-Latn-TG"},"arc-Palm":{"value":"arc-Palm-SY"},"ikk":{"value":"ikk-Latn-ZZ"},"ikt":{"value":"ikt-Latn-CA"},"ikw":{"value":"ikw-Latn-ZZ"},"vec":{"value":"vec-Latn-IT"},"ikx":{"value":"ikx-Latn-ZZ"},"zmi":{"value"
:"zmi-Latn-MY"},"mtc":{"value":"mtc-Latn-ZZ"},"mtf":{"value":"mtf-Latn-ZZ"},"vep":{"value":"vep-Latn-RU"},"zh-Bopo":{"value":"zh-Bopo-TW"},"mti":{"value":"mti-Latn-ZZ"},"und-Ethi":{"value":"am-Ethi-ET"},"mtr":{"value":"mtr-Deva-IN"},"und-Thai-LA":{"value":"kdt-Thai-LA"},"ilo":{"value":"ilo-Latn-PH"},"zne":{"value":"zne-Latn-ZZ"},"mua":{"value":"mua-Latn-CM"},"und-Thai-KH":{"value":"kdt-Thai-KH"},"imo":{"value":"imo-Latn-ZZ"},"mus":{"value":"mus-Latn-US"},"mur":{"value":"mur-Latn-ZZ"},"mva":{"value":"mva-Latn-ZZ"}
,"inh":{"value":"inh-Cyrl-RU"},"mvn":{"value":"mvn-Latn-ZZ"},"efi":{"value":"efi-Latn-NG"},"mvy":{"value":"mvy-Arab-PK"},"und-Java":{"value":"jv-Java-ID"},"mwk":{"value":"mwk-Latn-ML"},"mwr":{"value":"mwr-Deva-IN"},"und-021":{"value":"en-Latn-US"},"egl":{"value":"egl-Latn-IT"},"mww":{"value":"mww-Hmnp-US"},"mwv":{"value":"mwv-Latn-ID"},"iou":{"value":"iou-Latn-ZZ"},"und-029":{"value":"es-Latn-CU"},"vic":{"value":"vic-Latn-SX"},"egy":{"value":"egy-Egyp-EG"},"und-Ugar":{"value":"uga-Ugar-SY"},"mxc":{"value":"mxc-Latn-ZW"}
,"raj":{"value":"raj-Deva-IN"},"rai":{"value":"rai-Latn-ZZ"},"rao":{"value":"rao-Latn-ZZ"},"viv":{"value":"viv-Latn-ZZ"},"mxm":{"value":"mxm-Latn-ZZ"},"und-034":{"value":"hi-Deva-IN"},"und-030":{"value":"zh-Hans-CN"},"und-039":{"value":"it-Latn-IT"},"und-035":{"value":"id-Latn-ID"},"ug-Cyrl":{"value":"ug-Cyrl-KZ"},"myk":{"value":"myk-Latn-ZZ"},"mym":{"value":"mym-Ethi-ZZ"},"aai":{"value":"aai-Latn-ZZ"},"aak":{"value":"aak-Latn-ZZ"},"myw":{"value":"myw-Latn-ZZ"},"myv":{"value":"myv-Cyrl-RU"},"myx":{"value":"myx-Latn-UG"}
,"myz":{"value":"myz-Mand-IR"},"und-Sinh":{"value":"si-Sinh-LK"},"und-Sind":{"value":"sd-Sind-IN"},"aau":{"value":"aau-Latn-ZZ"},"rcf":{"value":"rcf-Latn-RE"},"und-Orkh":{"value":"otk-Orkh-MN"},"mzk":{"value":"mzk-Latn-ZZ"},"mzn":{"value":"mzn-Arab-IR"},"iri":{"value":"iri-Latn-ZZ"},"mzm":{"value":"mzm-Latn-ZZ"},"mzp":{"value":"mzp-Latn-ZZ"},"und-053":{"value":"en-Latn-AU"},"abi":{"value":"abi-Latn-ZZ"},"und-054":{"value":"en-Latn-PG"},"mzw":{"value":"mzw-Latn-ZZ"},"mzz":{"value":"mzz-Latn-ZZ"},"abr":{"value"
:"abr-Latn-GH"},"abq":{"value":"abq-Cyrl-ZZ"},"abt":{"value":"abt-Latn-ZZ"},"und-057":{"value":"en-Latn-GU"},"aby":{"value":"aby-Latn-ZZ"},"eka":{"value":"eka-Latn-ZZ"},"vls":{"value":"vls-Latn-BE"},"ace":{"value":"ace-Latn-ID"},"acd":{"value":"acd-Latn-ZZ"},"ach":{"value":"ach-Latn-UG"},"vmf":{"value":"vmf-Latn-DE"},"eky":{"value":"eky-Kali-MM"},"rej":{"value":"rej-Latn-ID"},"rel":{"value":"rel-Latn-ZZ"},"ada":{"value":"ada-Latn-GH"},"res":{"value":"res-Latn-ZZ"},"vmw":{"value":"vmw-Latn-MZ"},"ade":{"value"
:"ade-Latn-ZZ"},"adj":{"value":"adj-Latn-ZZ"},"und-Hira":{"value":"ja-Hira-JP"},"adz":{"value":"adz-Latn-ZZ"},"ady":{"value":"ady-Cyrl-RU"},"ema":{"value":"ema-Latn-ZZ"},"und-Deva":{"value":"hi-Deva-IN"},"aeb":{"value":"aeb-Arab-TN"},"emi":{"value":"emi-Latn-ZZ"},"und-009":{"value":"en-Latn-AU"},"aey":{"value":"aey-Latn-ZZ"},"und-002":{"value":"en-Latn-NG"},"und-003":{"value":"en-Latn-US"},"und-005":{"value":"pt-Latn-BR"},"rgn":{"value":"rgn-Latn-IT"},"vot":{"value":"vot-Latn-RU"},"enn":{"value":"enn-Latn-ZZ"}
,"enq":{"value":"enq-Latn-ZZ"},"und-011":{"value":"en-Latn-NG"},"rhg":{"value":"rhg-Arab-MM"},"und-017":{"value":"sw-Latn-CD"},"und-018":{"value":"en-Latn-ZA"},"und-019":{"value":"en-Latn-US"},"und-013":{"value":"es-Latn-MX"},"und-014":{"value":"sw-Latn-TZ"},"und-015":{"value":"ar-Arab-EG"},"agc":{"value":"agc-Latn-ZZ"},"und-Zanb":{"value":"cmg-Zanb-MN"},"iwm":{"value":"iwm-Latn-ZZ"},"agd":{"value":"agd-Latn-ZZ"},"agg":{"value":"agg-Latn-ZZ"},"iws":{"value":"iws-Latn-ZZ"},"agm":{"value":"agm-Latn-ZZ"},"ago":
{"value":"ago-Latn-ZZ"},"agq":{"value":"agq-Latn-CM"},"ria":{"value":"ria-Latn-IN"},"rif":{"value":"rif-Tfng-MA"},"nac":{"value":"nac-Latn-ZZ"},"naf":{"value":"naf-Latn-ZZ"},"nak":{"value":"nak-Latn-ZZ"},"nan":{"value":"nan-Hans-CN"},"aha":{"value":"aha-Latn-ZZ"},"nap":{"value":"nap-Latn-IT"},"naq":{"value":"naq-Latn-NA"},"zza":{"value":"zza-Latn-TR"},"nas":{"value":"nas-Latn-ZZ"},"ahl":{"value":"ahl-Latn-ZZ"},"en-Shaw":{"value":"en-Shaw-GB"},"und-Copt":{"value":"cop-Copt-EG"},"aho":{"value":"aho-Ahom-IN"},
"vro":{"value":"vro-Latn-EE"},"rjs":{"value":"rjs-Deva-NP"},"nca":{"value":"nca-Latn-ZZ"},"ncf":{"value":"ncf-Latn-ZZ"},"nce":{"value":"nce-Latn-ZZ"},"nch":{"value":"nch-Latn-MX"},"izh":{"value":"izh-Latn-RU"},"izi":{"value":"izi-Latn-ZZ"},"rkt":{"value":"rkt-Beng-BD"},"nco":{"value":"nco-Latn-ZZ"},"eri":{"value":"eri-Latn-ZZ"},"ajg":{"value":"ajg-Latn-ZZ"},"ncu":{"value":"ncu-Latn-ZZ"},"ndc":{"value":"ndc-Latn-MZ"},"esg":{"value":"esg-Gonm-IN"},"nds":{"value":"nds-Latn-DE"},"akk":{"value":"akk-Xsux-IQ"},"esu":
{"value":"esu-Latn-US"},"neb":{"value":"neb-Latn-ZZ"},"rmf":{"value":"rmf-Latn-FI"},"und-061":{"value":"sm-Latn-WS"},"und-Limb":{"value":"lif-Limb-IN"},"vun":{"value":"vun-Latn-TZ"},"ff-Adlm":{"value":"ff-Adlm-GN"},"vut":{"value":"vut-Latn-ZZ"},"rmo":{"value":"rmo-Latn-CH"},"ala":{"value":"ala-Latn-ZZ"},"rmt":{"value":"rmt-Arab-IR"},"rmu":{"value":"rmu-Latn-SE"},"ali":{"value":"ali-Latn-ZZ"},"nex":{"value":"nex-Latn-ZZ"},"new":{"value":"new-Deva-NP"},"aln":{"value":"aln-Latn-XK"},"etr":{"value":"etr-Latn-ZZ"}
,"und-Rohg":{"value":"rhg-Rohg-MM"},"ett":{"value":"ett-Ital-IT"},"rna":{"value":"rna-Latn-ZZ"},"etu":{"value":"etu-Latn-ZZ"},"alt":{"value":"alt-Cyrl-RU"},"etx":{"value":"etx-Latn-ZZ"},"rng":{"value":"rng-Latn-MZ"},"und-Linb":{"value":"grc-Linb-GR"},"und-Lina":{"value":"lab-Lina-GR"},"und-Jpan":{"value":"ja-Jpan-JP"},"man-GN":{"value":"man-Nkoo-GN"},"nfr":{"value":"nfr-Latn-ZZ"},"amm":{"value":"amm-Latn-ZZ"},"und-Arab":{"value":"ar-Arab-EG"},"amo":{"value":"amo-Latn-NG"},"amn":{"value":"amn-Latn-ZZ"},"rob":
{"value":"rob-Latn-ID"},"amp":{"value":"amp-Latn-ZZ"},"ngb":{"value":"ngb-Latn-ZZ"},"rof":{"value":"rof-Latn-TZ"},"nga":{"value":"nga-Latn-ZZ"},"ngl":{"value":"ngl-Latn-MZ"},"roo":{"value":"roo-Latn-ZZ"},"anc":{"value":"anc-Latn-ZZ"},"ank":{"value":"ank-Latn-ZZ"},"ann":{"value":"ann-Latn-ZZ"},"und-Bhks":{"value":"sa-Bhks-IN"},"nhb":{"value":"nhb-Latn-ZZ"},"nhe":{"value":"nhe-Latn-MX"},"any":{"value":"any-Latn-ZZ"},"und-Orya":{"value":"or-Orya-IN"},"ewo":{"value":"ewo-Latn-CM"},"nhw":{"value":"nhw-Latn-MX"},
"aoj":{"value":"aoj-Latn-ZZ"},"aom":{"value":"aom-Latn-ZZ"},"zh-Hanb":{"value":"zh-Hanb-TW"},"jab":{"value":"jab-Latn-ZZ"},"nif":{"value":"nif-Latn-ZZ"},"aoz":{"value":"aoz-Latn-ID"},"nij":{"value":"nij-Latn-ID"},"nii":{"value":"nii-Latn-ZZ"},"zh-PH":{"value":"zh-Hant-PH"},"nin":{"value":"nin-Latn-ZZ"},"zh-Hant":{"value":"zh-Hant-TW"},"zh-PF":{"value":"zh-Hant-PF"},"und-Ahom":{"value":"aho-Ahom-IN"},"apd":{"value":"apd-Arab-TG"},"apc":{"value":"apc-Arab-ZZ"},"ape":{"value":"ape-Latn-ZZ"},"jam":{"value":"jam-Latn-JM"}
,"zh-PA":{"value":"zh-Hant-PA"},"niu":{"value":"niu-Latn-NU"},"niz":{"value":"niz-Latn-ZZ"},"niy":{"value":"niy-Latn-ZZ"},"ext":{"value":"ext-Latn-ES"},"apr":{"value":"apr-Latn-ZZ"},"aps":{"value":"aps-Latn-ZZ"},"apz":{"value":"apz-Latn-ZZ"},"rro":{"value":"rro-Latn-ZZ"},"njo":{"value":"njo-Latn-IN"},"jbo":{"value":"jbo-Latn-001"},"jbu":{"value":"jbu-Latn-ZZ"},"zh-MO":{"value":"zh-Hant-MO"},"nkg":{"value":"nkg-Latn-ZZ"},"zh-MY":{"value":"zh-Hant-MY"},"arc":{"value":"arc-Armi-IR"},"nko":{"value":"nko-Latn-ZZ"}
,"arh":{"value":"arh-Latn-ZZ"},"pa-Arab":{"value":"pa-Arab-PK"},"und-Mtei":{"value":"mni-Mtei-IN"},"arn":{"value":"arn-Latn-CL"},"aro":{"value":"aro-Latn-BO"},"und-Cyrl-RO":{"value":"bg-Cyrl-RO"},"arq":{"value":"arq-Arab-DZ"},"arz":{"value":"arz-Arab-EG"},"ary":{"value":"ary-Arab-MA"},"rtm":{"value":"rtm-Latn-FJ"},"asa":{"value":"asa-Latn-TZ"},"und-Grek-TR":{"value":"bgx-Grek-TR"},"ase":{"value":"ase-Sgnw-US"},"asg":{"value":"asg-Latn-ZZ"},"aso":{"value":"aso-Latn-ZZ"},"ast":{"value":"ast-Latn-ES"},"rue":{"value"
:"rue-Cyrl-UA"},"rug":{"value":"rug-Latn-SB"},"nmg":{"value":"nmg-Latn-CM"},"ata":{"value":"ata-Latn-ZZ"},"jen":{"value":"jen-Latn-ZZ"},"atg":{"value":"atg-Latn-ZZ"},"atj":{"value":"atj-Latn-CA"},"nmz":{"value":"nmz-Latn-ZZ"},"unr-Deva":{"value":"unr-Deva-NP"},"nnf":{"value":"nnf-Latn-ZZ"},"nnh":{"value":"nnh-Latn-CM"},"nnk":{"value":"nnk-Latn-ZZ"},"nnm":{"value":"nnm-Latn-ZZ"},"nnp":{"value":"nnp-Wcho-IN"},"az-IR":{"value":"az-Arab-IR"},"und-Adlm":{"value":"ff-Adlm-GN"},"az-IQ":{"value":"az-Arab-IQ"},"und-Nbat":
{"value":"arc-Nbat-JO"},"sd-Khoj":{"value":"sd-Khoj-IN"},"nod":{"value":"nod-Lana-TH"},"auy":{"value":"auy-Latn-ZZ"},"noe":{"value":"noe-Deva-IN"},"rwk":{"value":"rwk-Latn-TZ"},"und-Cyrl-MD":{"value":"uk-Cyrl-MD"},"rwo":{"value":"rwo-Latn-ZZ"},"non":{"value":"non-Runr-SE"},"nop":{"value":"nop-Latn-ZZ"},"jgk":{"value":"jgk-Latn-ZZ"},"jgo":{"value":"jgo-Latn-CM"},"und-Vaii":{"value":"vai-Vaii-LR"},"nou":{"value":"nou-Latn-ZZ"},"avl":{"value":"avl-Arab-ZZ"},"avn":{"value":"avn-Latn-ZZ"},"wae":{"value":"wae-Latn-CH"}
,"avt":{"value":"avt-Latn-ZZ"},"avu":{"value":"avu-Latn-ZZ"},"waj":{"value":"waj-Latn-ZZ"},"wal":{"value":"wal-Ethi-ET"},"wan":{"value":"wan-Latn-ZZ"},"zh-HK":{"value":"zh-Hant-HK"},"war":{"value":"war-Latn-PH"},"awa":{"value":"awa-Deva-IN"},"und-Plrd":{"value":"hmd-Plrd-CN"},"awb":{"value":"awb-Latn-ZZ"},"awo":{"value":"awo-Latn-ZZ"},"und-Knda":{"value":"kn-Knda-IN"},"zh-ID":{"value":"zh-Hant-ID"},"jib":{"value":"jib-Latn-ZZ"},"awx":{"value":"awx-Latn-ZZ"},"wbp":{"value":"wbp-Latn-AU"},"und-Sidd":{"value":
"sa-Sidd-IN"},"fab":{"value":"fab-Latn-ZZ"},"wbr":{"value":"wbr-Deva-IN"},"faa":{"value":"faa-Latn-ZZ"},"wbq":{"value":"wbq-Telu-IN"},"und-Kali":{"value":"eky-Kali-MM"},"fag":{"value":"fag-Latn-ZZ"},"nqo":{"value":"nqo-Nkoo-GN"},"fai":{"value":"fai-Latn-ZZ"},"ryu":{"value":"ryu-Kana-JP"},"fan":{"value":"fan-Latn-GQ"},"wci":{"value":"wci-Latn-ZZ"},"nrb":{"value":"nrb-Latn-ZZ"},"und-Phlp":{"value":"pal-Phlp-CN"},"ayb":{"value":"ayb-Latn-ZZ"},"und-Phli":{"value":"pal-Phli-IR"},"cu-Glag":{"value":"cu-Glag-BG"},
"und-Cyrl-XK":{"value":"sr-Cyrl-XK"},"az-Arab":{"value":"az-Arab-IR"},"und-Thai":{"value":"th-Thai-TH"},"nsk":{"value":"nsk-Cans-CA"},"nsn":{"value":"nsn-Latn-ZZ"},"nso":{"value":"nso-Latn-ZA"},"und-Thaa":{"value":"dv-Thaa-MV"},"und-Nshu":{"value":"zhx-Nshu-CN"},"nss":{"value":"nss-Latn-ZZ"},"zh-VN":{"value":"zh-Hant-VN"},"und-Hmnp":{"value":"mww-Hmnp-US"},"und-Kana":{"value":"ja-Kana-JP"},"und-Hmng":{"value":"hnj-Hmng-LA"},"wer":{"value":"wer-Latn-ZZ"},"zh-TW":{"value":"zh-Hant-TW"},"ntm":{"value":"ntm-Latn-ZZ"}
,"ntr":{"value":"ntr-Latn-ZZ"},"zh-US":{"value":"zh-Hant-US"},"und-Xpeo":{"value":"peo-Xpeo-IR"},"jmc":{"value":"jmc-Latn-TZ"},"nui":{"value":"nui-Latn-ZZ"},"jml":{"value":"jml-Deva-NP"},"nup":{"value":"nup-Latn-ZZ"},"und-Cyrl-SK":{"value":"uk-Cyrl-SK"},"nus":{"value":"nus-Latn-SS"},"nuv":{"value":"nuv-Latn-ZZ"},"nux":{"value":"nux-Latn-ZZ"},"zh-TH":{"value":"zh-Hant-TH"},"wgi":{"value":"wgi-Latn-ZZ"},"und-Phnx":{"value":"phn-Phnx-LB"},"und-Cyrl-TR":{"value":"kbd-Cyrl-TR"},"ffi":{"value":"ffi-Latn-ZZ"},"und-Elym":
{"value":"arc-Elym-IR"},"ffm":{"value":"ffm-Latn-ML"},"und-Rjng":{"value":"rej-Rjng-ID"},"whg":{"value":"whg-Latn-ZZ"},"nwb":{"value":"nwb-Latn-ZZ"},"zh-SR":{"value":"zh-Hant-SR"},"wib":{"value":"wib-Latn-ZZ"},"und-Hebr":{"value":"he-Hebr-IL"},"saf":{"value":"saf-Latn-GH"},"sah":{"value":"sah-Cyrl-RU"},"saq":{"value":"saq-Latn-KE"},"wiu":{"value":"wiu-Latn-ZZ"},"sas":{"value":"sas-Latn-ID"},"wiv":{"value":"wiv-Latn-ZZ"},"nxq":{"value":"nxq-Latn-CN"},"sat":{"value":"sat-Latn-IN"},"nxr":{"value":"nxr-Latn-ZZ"}
,"sav":{"value":"sav-Latn-SN"},"saz":{"value":"saz-Saur-IN"},"wja":{"value":"wja-Latn-ZZ"},"sba":{"value":"sba-Latn-ZZ"},"sbe":{"value":"sbe-Latn-ZZ"},"wji":{"value":"wji-Latn-ZZ"},"mn-Mong":{"value":"mn-Mong-CN"},"und-419":{"value":"es-Latn-419"},"fia":{"value":"fia-Arab-SD"},"sbp":{"value":"sbp-Latn-TZ"},"und-NO":{"value":"nb-Latn-NO"},"nyn":{"value":"nyn-Latn-UG"},"nym":{"value":"nym-Latn-TZ"},"und-NL":{"value":"nl-Latn-NL"},"und-NP":{"value":"ne-Deva-NP"},"fil":{"value":"fil-Latn-PH"},"bal":{"value":"bal-Arab-PK"}
,"ban":{"value":"ban-Latn-ID"},"bap":{"value":"bap-Deva-NP"},"fit":{"value":"fit-Latn-SE"},"bar":{"value":"bar-Latn-AT"},"bas":{"value":"bas-Latn-CM"},"bav":{"value":"bav-Latn-ZZ"},"bax":{"value":"bax-Bamu-CM"},"jra":{"value":"jra-Latn-ZZ"},"sck":{"value":"sck-Deva-IN"},"nzi":{"value":"nzi-Latn-GH"},"scl":{"value":"scl-Arab-ZZ"},"sco":{"value":"sco-Latn-GB"},"scn":{"value":"scn-Latn-IT"},"aa":{"value":"aa-Latn-ET"},"bba":{"value":"bba-Latn-ZZ"},"und-MN":{"value":"mn-Cyrl-MN"},"ab":{"value":"ab-Cyrl-GE"},"und-MM":
{"value":"my-Mymr-MM"},"und-Osma":{"value":"so-Osma-SO"},"bbc":{"value":"bbc-Latn-ID"},"scs":{"value":"scs-Latn-CA"},"und-ML":{"value":"bm-Latn-ML"},"bbb":{"value":"bbb-Latn-ZZ"},"und-MK":{"value":"mk-Cyrl-MK"},"ae":{"value":"ae-Avst-IR"},"und-MR":{"value":"ar-Arab-MR"},"af":{"value":"af-Latn-ZA"},"bbd":{"value":"bbd-Latn-ZZ"},"und-MQ":{"value":"fr-Latn-MQ"},"und-Wara":{"value":"hoc-Wara-IN"},"und-MO":{"value":"zh-Hant-MO"},"und-MV":{"value":"dv-Thaa-MV"},"und-MU":{"value":"mfe-Latn-MU"},"ak":{"value":"ak-Latn-GH"}
,"und-MT":{"value":"mt-Latn-MT"},"bbj":{"value":"bbj-Latn-CM"},"am":{"value":"am-Ethi-ET"},"und-MZ":{"value":"pt-Latn-MZ"},"und-MY":{"value":"ms-Latn-MY"},"und-MX":{"value":"es-Latn-MX"},"ar":{"value":"ar-Arab-EG"},"bbp":{"value":"bbp-Latn-ZZ"},"as":{"value":"as-Beng-IN"},"bbr":{"value":"bbr-Latn-ZZ"},"sdc":{"value":"sdc-Latn-IT"},"und-NC":{"value":"fr-Latn-NC"},"av":{"value":"av-Cyrl-RU"},"sdh":{"value":"sdh-Arab-IR"},"und-NA":{"value":"af-Latn-NA"},"ay":{"value":"ay-Latn-BO"},"az":{"value":"az-Latn-AZ"},"und-NE":
{"value":"ha-Latn-NE"},"und-NI":{"value":"es-Latn-NI"},"ba":{"value":"ba-Cyrl-RU"},"wls":{"value":"wls-Latn-WF"},"und-Kore":{"value":"ko-Kore-KR"},"und-LK":{"value":"si-Sinh-LK"},"be":{"value":"be-Cyrl-BY"},"bcf":{"value":"bcf-Latn-ZZ"},"bg":{"value":"bg-Cyrl-BG"},"bch":{"value":"bch-Latn-ZZ"},"bi":{"value":"bi-Latn-VU"},"und-LU":{"value":"fr-Latn-LU"},"bci":{"value":"bci-Latn-CI"},"und-LT":{"value":"lt-Latn-LT"},"und-LS":{"value":"st-Latn-LS"},"bm":{"value":"bm-Latn-ML"},"bcn":{"value":"bcn-Latn-ZZ"},"bn":
{"value":"bn-Beng-BD"},"und-LY":{"value":"ar-Arab-LY"},"bcm":{"value":"bcm-Latn-ZZ"},"bo":{"value":"bo-Tibt-CN"},"bco":{"value":"bco-Latn-ZZ"},"und-LV":{"value":"lv-Latn-LV"},"br":{"value":"br-Latn-FR"},"bcq":{"value":"bcq-Ethi-ZZ"},"bs":{"value":"bs-Latn-BA"},"bcu":{"value":"bcu-Latn-ZZ"},"sef":{"value":"sef-Latn-CI"},"und-MA":{"value":"ar-Arab-MA"},"sei":{"value":"sei-Latn-MX"},"seh":{"value":"seh-Latn-MZ"},"und-MF":{"value":"fr-Latn-MF"},"wmo":{"value":"wmo-Latn-ZZ"},"und-ME":{"value":"sr-Latn-ME"},"und-MD":
{"value":"ro-Latn-MD"},"und-MC":{"value":"fr-Latn-MC"},"ca":{"value":"ca-Latn-ES"},"und-MG":{"value":"mg-Latn-MG"},"ses":{"value":"ses-Latn-ML"},"ce":{"value":"ce-Cyrl-RU"},"und-Cyrl-BA":{"value":"sr-Cyrl-BA"},"bdd":{"value":"bdd-Latn-ZZ"},"und-KP":{"value":"ko-Kore-KP"},"ch":{"value":"ch-Latn-GU"},"und-KM":{"value":"ar-Arab-KM"},"und-KR":{"value":"ko-Kore-KR"},"co":{"value":"co-Latn-FR"},"flr":{"value":"flr-Latn-ZZ"},"und-KW":{"value":"ar-Arab-KW"},"wnc":{"value":"wnc-Latn-ZZ"},"und-Dogr":{"value":"doi-Dogr-IN"}
,"cr":{"value":"cr-Cans-CA"},"cs":{"value":"cs-Latn-CZ"},"cu":{"value":"cu-Cyrl-RU"},"und-KZ":{"value":"ru-Cyrl-KZ"},"cv":{"value":"cv-Cyrl-RU"},"wni":{"value":"wni-Arab-KM"},"und-LA":{"value":"lo-Laoo-LA"},"cy":{"value":"cy-Latn-GB"},"und-LB":{"value":"ar-Arab-LB"},"und-LI":{"value":"de-Latn-LI"},"da":{"value":"da-Latn-DK"},"und-Cyrl-AL":{"value":"mk-Cyrl-AL"},"wnu":{"value":"wnu-Latn-ZZ"},"de":{"value":"de-Latn-DE"},"bef":{"value":"bef-Latn-ZZ"},"beh":{"value":"beh-Latn-ZZ"},"und-JO":{"value":"ar-Arab-JO"}
,"bej":{"value":"bej-Arab-SD"},"fmp":{"value":"fmp-Latn-ZZ"},"jut":{"value":"jut-Latn-DK"},"bem":{"value":"bem-Latn-ZM"},"und-JP":{"value":"ja-Jpan-JP"},"wob":{"value":"wob-Latn-ZZ"},"sga":{"value":"sga-Ogam-IE"},"bet":{"value":"bet-Latn-ZZ"},"dv":{"value":"dv-Thaa-MV"},"bex":{"value":"bex-Latn-ZZ"},"bew":{"value":"bew-Latn-ID"},"bez":{"value":"bez-Latn-TZ"},"dz":{"value":"dz-Tibt-BT"},"ms-ID":{"value":"ms-Arab-ID"},"wos":{"value":"wos-Latn-ZZ"},"und-KH":{"value":"km-Khmr-KH"},"und-KG":{"value":"ky-Cyrl-KG"}
,"sgs":{"value":"sgs-Latn-LT"},"und-KE":{"value":"sw-Latn-KE"},"ee":{"value":"ee-Latn-GH"},"bfd":{"value":"bfd-Latn-CM"},"sgw":{"value":"sgw-Ethi-ZZ"},"und-IN":{"value":"hi-Deva-IN"},"und-IL":{"value":"he-Hebr-IL"},"el":{"value":"el-Grek-GR"},"sgz":{"value":"sgz-Latn-ZZ"},"und-IR":{"value":"fa-Arab-IR"},"en":{"value":"en-Latn-US"},"und-IQ":{"value":"ar-Arab-IQ"},"und-Perm":{"value":"kv-Perm-RU"},"eo":{"value":"eo-Latn-001"},"bfq":{"value":"bfq-Taml-IN"},"es":{"value":"es-Latn-ES"},"und-IT":{"value":"it-Latn-IT"}
,"et":{"value":"et-Latn-EE"},"und-IS":{"value":"is-Latn-IS"},"eu":{"value":"eu-Latn-ES"},"bft":{"value":"bft-Arab-PK"},"bfy":{"value":"bfy-Deva-IN"},"shi":{"value":"shi-Tfng-MA"},"shk":{"value":"shk-Latn-ZZ"},"shn":{"value":"shn-Mymr-MM"},"fod":{"value":"fod-Latn-ZZ"},"fa":{"value":"fa-Arab-IR"},"bgc":{"value":"bgc-Deva-IN"},"ff":{"value":"ff-Latn-SN"},"shu":{"value":"shu-Arab-ZZ"},"fi":{"value":"fi-Latn-FI"},"fj":{"value":"fj-Latn-FJ"},"fon":{"value":"fon-Latn-BJ"},"und-HM":{"value":"und-Latn-HM"},"und-HK":
{"value":"zh-Hant-HK"},"bgn":{"value":"bgn-Arab-PK"},"for":{"value":"for-Latn-ZZ"},"fo":{"value":"fo-Latn-FO"},"und-HN":{"value":"es-Latn-HN"},"fr":{"value":"fr-Latn-FR"},"und-HU":{"value":"hu-Latn-HU"},"und-HT":{"value":"ht-Latn-HT"},"ku-Arab":{"value":"ku-Arab-IQ"},"sid":{"value":"sid-Latn-ET"},"und-HR":{"value":"hr-Latn-HR"},"sig":{"value":"sig-Latn-ZZ"},"bgx":{"value":"bgx-Grek-TR"},"fy":{"value":"fy-Latn-NL"},"sim":{"value":"sim-Latn-ZZ"},"sil":{"value":"sil-Latn-ZZ"},"fpe":{"value":"fpe-Latn-ZZ"},"ga":
{"value":"ga-Latn-IE"},"bhb":{"value":"bhb-Deva-IN"},"gd":{"value":"gd-Latn-GB"},"und-ID":{"value":"id-Latn-ID"},"und-IC":{"value":"es-Latn-IC"},"bhg":{"value":"bhg-Latn-ZZ"},"und-GH":{"value":"ak-Latn-GH"},"bhi":{"value":"bhi-Deva-IN"},"und-GF":{"value":"fr-Latn-GF"},"und-GE":{"value":"ka-Geor-GE"},"bhk":{"value":"bhk-Latn-PH"},"und-GL":{"value":"kl-Latn-GL"},"gl":{"value":"gl-Latn-ES"},"bhl":{"value":"bhl-Latn-ZZ"},"gn":{"value":"gn-Latn-PY"},"bho":{"value":"bho-Deva-IN"},"und-GP":{"value":"fr-Latn-GP"},"und-GN":
{"value":"fr-Latn-GN"},"und-GT":{"value":"es-Latn-GT"},"und-GS":{"value":"und-Latn-GS"},"gu":{"value":"gu-Gujr-IN"},"und-GR":{"value":"el-Grek-GR"},"gv":{"value":"gv-Latn-IM"},"und-GQ":{"value":"es-Latn-GQ"},"und-Palm":{"value":"arc-Palm-SY"},"und-GW":{"value":"pt-Latn-GW"},"bhy":{"value":"bhy-Latn-ZZ"},"ha":{"value":"ha-Latn-NG"},"wrs":{"value":"wrs-Latn-ZZ"},"bib":{"value":"bib-Latn-ZZ"},"sjr":{"value":"sjr-Latn-ZZ"},"he":{"value":"he-Hebr-IL"},"big":{"value":"big-Latn-ZZ"},"hi":{"value":"hi-Deva-IN"},"und-Cyrl-GE":
{"value":"ab-Cyrl-GE"},"bik":{"value":"bik-Latn-PH"},"bin":{"value":"bin-Latn-NG"},"und-Cham":{"value":"cjm-Cham-VN"},"und-FI":{"value":"fi-Latn-FI"},"bim":{"value":"bim-Latn-ZZ"},"ho":{"value":"ho-Latn-PG"},"tg-PK":{"value":"tg-Arab-PK"},"und-FO":{"value":"fo-Latn-FO"},"bio":{"value":"bio-Latn-ZZ"},"fqs":{"value":"fqs-Latn-ZZ"},"hr":{"value":"hr-Latn-HR"},"skc":{"value":"skc-Latn-ZZ"},"wsg":{"value":"wsg-Gong-IN"},"biq":{"value":"biq-Latn-ZZ"},"ht":{"value":"ht-Latn-HT"},"hu":{"value":"hu-Latn-HU"},"und-FR":
{"value":"fr-Latn-FR"},"wsk":{"value":"wsk-Latn-ZZ"},"hy":{"value":"hy-Armn-AM"},"hz":{"value":"hz-Latn-NA"},"frc":{"value":"frc-Latn-US"},"ia":{"value":"ia-Latn-001"},"sks":{"value":"sks-Latn-ZZ"},"id":{"value":"id-Latn-ID"},"skr":{"value":"skr-Arab-PK"},"ig":{"value":"ig-Latn-NG"},"und-GA":{"value":"fr-Latn-GA"},"bji":{"value":"bji-Ethi-ZZ"},"ii":{"value":"ii-Yiii-CN"},"bjh":{"value":"bjh-Latn-ZZ"},"und-EE":{"value":"et-Latn-EE"},"ik":{"value":"ik-Latn-US"},"bjj":{"value":"bjj-Deva-IN"},"und-EC":{"value":
"es-Latn-EC"},"und-Cprt":{"value":"grc-Cprt-CY"},"frp":{"value":"frp-Latn-FR"},"in":{"value":"in-Latn-ID"},"bjo":{"value":"bjo-Latn-ZZ"},"frs":{"value":"frs-Latn-DE"},"io":{"value":"io-Latn-001"},"und-EH":{"value":"ar-Arab-EH"},"bjn":{"value":"bjn-Latn-ID"},"frr":{"value":"frr-Latn-DE"},"und-EG":{"value":"ar-Arab-EG"},"is":{"value":"is-Latn-IS"},"sld":{"value":"sld-Latn-ZZ"},"bjr":{"value":"bjr-Latn-ZZ"},"it":{"value":"it-Latn-IT"},"iu":{"value":"iu-Cans-CA"},"und-ER":{"value":"ti-Ethi-ER"},"bjt":{"value":"bjt-Latn-SN"}
,"iw":{"value":"iw-Hebr-IL"},"und-Tirh":{"value":"mai-Tirh-IN"},"sli":{"value":"sli-Latn-PL"},"und-EU":{"value":"en-Latn-GB"},"wtm":{"value":"wtm-Deva-IN"},"sll":{"value":"sll-Latn-ZZ"},"und-ET":{"value":"am-Ethi-ET"},"bjz":{"value":"bjz-Latn-ZZ"},"und-ES":{"value":"es-Latn-ES"},"und-EZ":{"value":"de-Latn-EZ"},"ja":{"value":"ja-Jpan-JP"},"zh-GF":{"value":"zh-Hant-GF"},"bkc":{"value":"bkc-Latn-ZZ"},"zh-GB":{"value":"zh-Hant-GB"},"und-Cyrl-GR":{"value":"mk-Cyrl-GR"},"ji":{"value":"ji-Hebr-UA"},"und-DE":{"value"
:"de-Latn-DE"},"sly":{"value":"sly-Latn-ID"},"bkm":{"value":"bkm-Latn-CM"},"sma":{"value":"sma-Latn-SE"},"bkq":{"value":"bkq-Latn-ZZ"},"und-DK":{"value":"da-Latn-DK"},"und-DJ":{"value":"aa-Latn-DJ"},"bkv":{"value":"bkv-Latn-ZZ"},"jv":{"value":"jv-Latn-ID"},"bku":{"value":"bku-Latn-PH"},"jw":{"value":"jw-Latn-ID"},"und-DO":{"value":"es-Latn-DO"},"smj":{"value":"smj-Latn-SE"},"smn":{"value":"smn-Latn-FI"},"ka":{"value":"ka-Geor-GE"},"smq":{"value":"smq-Latn-ZZ"},"wuu":{"value":"wuu-Hans-CN"},"smp":{"value":"smp-Samr-IL"}
,"sms":{"value":"sms-Latn-FI"},"wuv":{"value":"wuv-Latn-ZZ"},"und-DZ":{"value":"ar-Arab-DZ"},"kg":{"value":"kg-Latn-CD"},"und-EA":{"value":"es-Latn-EA"},"ki":{"value":"ki-Latn-KE"},"kj":{"value":"kj-Latn-NA"},"kk":{"value":"kk-Cyrl-KZ"},"man-Nkoo":{"value":"man-Nkoo-GN"},"und-CD":{"value":"sw-Latn-CD"},"kl":{"value":"kl-Latn-GL"},"und-Telu":{"value":"te-Telu-IN"},"km":{"value":"km-Khmr-KH"},"kn":{"value":"kn-Knda-IN"},"ko":{"value":"ko-Kore-KR"},"und-CH":{"value":"de-Latn-CH"},"und-CG":{"value":"fr-Latn-CG"}
,"und-CF":{"value":"fr-Latn-CF"},"kr":{"value":"kr-Latn-ZZ"},"ks":{"value":"ks-Arab-IN"},"und-CL":{"value":"es-Latn-CL"},"snc":{"value":"snc-Latn-ZZ"},"ku":{"value":"ku-Latn-TR"},"blt":{"value":"blt-Tavt-VN"},"kv":{"value":"kv-Cyrl-RU"},"und-CI":{"value":"fr-Latn-CI"},"kw":{"value":"kw-Latn-GB"},"und-CP":{"value":"und-Latn-CP"},"und-CO":{"value":"es-Latn-CO"},"ky":{"value":"ky-Cyrl-KG"},"und-CN":{"value":"zh-Hans-CN"},"und-CM":{"value":"fr-Latn-CM"},"snk":{"value":"snk-Latn-ML"},"fub":{"value":"fub-Arab-CM"}
,"und-CR":{"value":"es-Latn-CR"},"fud":{"value":"fud-Latn-WF"},"snp":{"value":"snp-Latn-ZZ"},"la":{"value":"la-Latn-VA"},"und-CW":{"value":"pap-Latn-CW"},"fuf":{"value":"fuf-Latn-GN"},"lb":{"value":"lb-Latn-LU"},"und-CV":{"value":"pt-Latn-CV"},"fue":{"value":"fue-Latn-ZZ"},"und-CU":{"value":"es-Latn-CU"},"fuh":{"value":"fuh-Latn-ZZ"},"und-CZ":{"value":"cs-Latn-CZ"},"lg":{"value":"lg-Latn-UG"},"und-CY":{"value":"el-Grek-CY"},"bmh":{"value":"bmh-Latn-ZZ"},"snx":{"value":"snx-Latn-ZZ"},"li":{"value":"li-Latn-NL"}
,"sny":{"value":"sny-Latn-ZZ"},"wwa":{"value":"wwa-Latn-ZZ"},"bmk":{"value":"bmk-Latn-ZZ"},"und-Cher":{"value":"chr-Cher-US"},"fur":{"value":"fur-Latn-IT"},"ln":{"value":"ln-Latn-CD"},"und-BA":{"value":"bs-Latn-BA"},"fuq":{"value":"fuq-Latn-NE"},"lo":{"value":"lo-Laoo-LA"},"und-BG":{"value":"bg-Cyrl-BG"},"und-BF":{"value":"fr-Latn-BF"},"fuv":{"value":"fuv-Latn-NG"},"und-BE":{"value":"nl-Latn-BE"},"bmq":{"value":"bmq-Latn-ML"},"und-BD":{"value":"bn-Beng-BD"},"lt":{"value":"lt-Latn-LT"},"lu":{"value":"lu-Latn-CD"}
,"und-BJ":{"value":"fr-Latn-BJ"},"lv":{"value":"lv-Latn-LV"},"ogc":{"value":"ogc-Latn-ZZ"},"sog":{"value":"sog-Sogd-UZ"},"und-BI":{"value":"rn-Latn-BI"},"bmu":{"value":"bmu-Latn-ZZ"},"fuy":{"value":"fuy-Latn-ZZ"},"und-BH":{"value":"ar-Arab-BH"},"und-BO":{"value":"es-Latn-BO"},"und-BN":{"value":"ms-Latn-BN"},"sok":{"value":"sok-Latn-ZZ"},"und-BL":{"value":"fr-Latn-BL"},"und-BR":{"value":"pt-Latn-BR"},"und-BQ":{"value":"pap-Latn-BQ"},"soq":{"value":"soq-Latn-ZZ"},"und-BV":{"value":"und-Latn-BV"},"und-BT":{"value"
:"dz-Tibt-BT"},"sou":{"value":"sou-Thai-TH"},"bng":{"value":"bng-Latn-ZZ"},"mg":{"value":"mg-Latn-MG"},"und-BY":{"value":"be-Cyrl-BY"},"und-Glag":{"value":"cu-Glag-BG"},"mh":{"value":"mh-Latn-MH"},"mi":{"value":"mi-Latn-NZ"},"soy":{"value":"soy-Latn-ZZ"},"mk":{"value":"mk-Cyrl-MK"},"ml":{"value":"ml-Mlym-IN"},"bnm":{"value":"bnm-Latn-ZZ"},"mn":{"value":"mn-Cyrl-MN"},"und-Prti":{"value":"xpr-Prti-IR"},"fvr":{"value":"fvr-Latn-SD"},"und-AF":{"value":"fa-Arab-AF"},"bnp":{"value":"bnp-Latn-ZZ"},"mr":{"value":"mr-Deva-IN"}
,"und-AE":{"value":"ar-Arab-AE"},"ms":{"value":"ms-Latn-MY"},"spd":{"value":"spd-Latn-ZZ"},"und-AD":{"value":"ca-Latn-AD"},"mt":{"value":"mt-Latn-MT"},"my":{"value":"my-Mymr-MM"},"zh-BN":{"value":"zh-Hant-BN"},"und-AM":{"value":"hy-Armn-AM"},"spl":{"value":"spl-Latn-ZZ"},"und-AL":{"value":"sq-Latn-AL"},"und-AR":{"value":"es-Latn-AR"},"und-AQ":{"value":"und-Latn-AQ"},"na":{"value":"na-Latn-NR"},"und-AO":{"value":"pt-Latn-AO"},"nb":{"value":"nb-Latn-NO"},"nd":{"value":"nd-Latn-ZW"},"und-AT":{"value":"de-Latn-AT"}
,"ne":{"value":"ne-Deva-NP"},"sps":{"value":"sps-Latn-ZZ"},"und-AS":{"value":"sm-Latn-AS"},"und-AZ":{"value":"az-Latn-AZ"},"ng":{"value":"ng-Latn-NA"},"und-AX":{"value":"sv-Latn-AX"},"und-AW":{"value":"nl-Latn-AW"},"boj":{"value":"boj-Latn-ZZ"},"nl":{"value":"nl-Latn-NL"},"bon":{"value":"bon-Latn-ZZ"},"nn":{"value":"nn-Latn-NO"},"bom":{"value":"bom-Latn-ZZ"},"no":{"value":"no-Latn-NO"},"nr":{"value":"nr-Latn-ZA"},"arc-Nbat":{"value":"arc-Nbat-JO"},"und-Medf":{"value":"mis-Medf-NG"},"nv":{"value":"nv-Latn-US"}
,"kaa":{"value":"kaa-Cyrl-UZ"},"ny":{"value":"ny-Latn-MW"},"kac":{"value":"kac-Latn-MM"},"kab":{"value":"kab-Latn-DZ"},"kad":{"value":"kad-Latn-ZZ"},"kai":{"value":"kai-Latn-ZZ"},"oc":{"value":"oc-Latn-FR"},"zh-AU":{"value":"zh-Hant-AU"},"kaj":{"value":"kaj-Latn-NG"},"kam":{"value":"kam-Latn-KE"},"und-Tagb":{"value":"tbw-Tagb-PH"},"kao":{"value":"kao-Latn-ML"},"und-Ogam":{"value":"sga-Ogam-IE"},"om":{"value":"om-Latn-ET"},"srb":{"value":"srb-Sora-IN"},"or":{"value":"or-Orya-IN"},"tg-Arab":{"value":"tg-Arab-PK"}
,"os":{"value":"os-Cyrl-GE"},"und-Sogd":{"value":"sog-Sogd-UZ"},"bpy":{"value":"bpy-Beng-IN"},"kbd":{"value":"kbd-Cyrl-RU"},"srn":{"value":"srn-Latn-SR"},"pa":{"value":"pa-Guru-IN"},"srr":{"value":"srr-Latn-SN"},"bqc":{"value":"bqc-Latn-ZZ"},"und-Kthi":{"value":"bho-Kthi-IN"},"kbm":{"value":"kbm-Latn-ZZ"},"kbp":{"value":"kbp-Latn-ZZ"},"srx":{"value":"srx-Deva-IN"},"bqi":{"value":"bqi-Arab-IR"},"kbq":{"value":"kbq-Latn-ZZ"},"pl":{"value":"pl-Latn-PL"},"bqp":{"value":"bqp-Latn-ZZ"},"kbx":{"value":"kbx-Latn-ZZ"}
,"kby":{"value":"kby-Arab-NE"},"ps":{"value":"ps-Arab-AF"},"pt":{"value":"pt-Latn-BR"},"ssd":{"value":"ssd-Latn-ZZ"},"und-Nkoo":{"value":"man-Nkoo-GN"},"bqv":{"value":"bqv-Latn-CI"},"ssg":{"value":"ssg-Latn-ZZ"},"und-Mymr":{"value":"my-Mymr-MM"},"kcg":{"value":"kcg-Latn-NG"},"bra":{"value":"bra-Deva-IN"},"kck":{"value":"kck-Latn-ZW"},"kcl":{"value":"kcl-Latn-ZZ"},"okr":{"value":"okr-Latn-ZZ"},"ssy":{"value":"ssy-Latn-ER"},"brh":{"value":"brh-Arab-PK"},"okv":{"value":"okv-Latn-ZZ"},"kct":{"value":"kct-Latn-ZZ"}
,"und-Hani":{"value":"zh-Hani-CN"},"und-Bugi":{"value":"bug-Bugi-ID"},"und-Hang":{"value":"ko-Hang-KR"},"qu":{"value":"qu-Latn-PE"},"brx":{"value":"brx-Deva-IN"},"und-Samr":{"value":"smp-Samr-IL"},"brz":{"value":"brz-Latn-ZZ"},"stk":{"value":"stk-Latn-ZZ"},"und-Hano":{"value":"hnn-Hano-PH"},"kde":{"value":"kde-Latn-TZ"},"kdh":{"value":"kdh-Arab-TG"},"stq":{"value":"stq-Latn-DE"},"kdl":{"value":"kdl-Latn-ZZ"},"bsj":{"value":"bsj-Latn-ZZ"},"und-Hanb":{"value":"zh-Hanb-TW"},"kdt":{"value":"kdt-Thai-TH"},"rm":{"value"
:"rm-Latn-CH"},"rn":{"value":"rn-Latn-BI"},"ro":{"value":"ro-Latn-RO"},"sua":{"value":"sua-Latn-ZZ"},"und-Deva-BT":{"value":"ne-Deva-BT"},"bsq":{"value":"bsq-Bass-LR"},"bst":{"value":"bst-Ethi-ZZ"},"sue":{"value":"sue-Latn-ZZ"},"bss":{"value":"bss-Latn-CM"},"ru":{"value":"ru-Cyrl-RU"},"und-Buhd":{"value":"bku-Buhd-PH"},"rw":{"value":"rw-Latn-RW"},"kea":{"value":"kea-Latn-CV"},"suk":{"value":"suk-Latn-TZ"},"grc-Linb":{"value":"grc-Linb-GR"},"sa":{"value":"sa-Deva-IN"},"sc":{"value":"sc-Latn-IT"},"sus":{"value"
:"sus-Latn-GN"},"sd":{"value":"sd-Arab-PK"},"sur":{"value":"sur-Latn-ZZ"},"se":{"value":"se-Latn-NO"},"sg":{"value":"sg-Latn-CF"},"ken":{"value":"ken-Latn-CM"},"si":{"value":"si-Sinh-LK"},"und-Hant":{"value":"zh-Hant-TW"},"und-Hans":{"value":"zh-Hans-CN"},"sk":{"value":"sk-Latn-SK"},"sl":{"value":"sl-Latn-SI"},"sm":{"value":"sm-Latn-WS"},"sn":{"value":"sn-Latn-ZW"},"bto":{"value":"bto-Latn-PH"},"so":{"value":"so-Latn-SO"},"sq":{"value":"sq-Latn-AL"},"sr":{"value":"sr-Cyrl-RS"},"ss":{"value":"ss-Latn-ZA"},"kez":
{"value":"kez-Latn-ZZ"},"st":{"value":"st-Latn-ZA"},"su":{"value":"su-Latn-ID"},"btt":{"value":"btt-Latn-ZZ"},"sv":{"value":"sv-Latn-SE"},"sw":{"value":"sw-Latn-TZ"},"btv":{"value":"btv-Deva-PK"},"ong":{"value":"ong-Latn-ZZ"},"ta":{"value":"ta-Taml-IN"},"onn":{"value":"onn-Latn-ZZ"},"bua":{"value":"bua-Cyrl-RU"},"bud":{"value":"bud-Latn-ZZ"},"buc":{"value":"buc-Latn-YT"},"te":{"value":"te-Telu-IN"},"tg":{"value":"tg-Cyrl-TJ"},"th":{"value":"th-Thai-TH"},"und-Gong":{"value":"wsg-Gong-IN"},"bug":{"value":"bug-Latn-ID"}
,"kfo":{"value":"kfo-Latn-CI"},"ons":{"value":"ons-Latn-ZZ"},"ti":{"value":"ti-Ethi-ET"},"kfr":{"value":"kfr-Deva-IN"},"tk":{"value":"tk-Latn-TM"},"tl":{"value":"tl-Latn-PH"},"und-Lisu":{"value":"lis-Lisu-CN"},"buk":{"value":"buk-Latn-ZZ"},"tn":{"value":"tn-Latn-ZA"},"bum":{"value":"bum-Latn-CM"},"to":{"value":"to-Latn-TO"},"buo":{"value":"buo-Latn-ZZ"},"swc":{"value":"swc-Latn-CD"},"tr":{"value":"tr-Latn-TR"},"und-Gonm":{"value":"esg-Gonm-IN"},"kfy":{"value":"kfy-Deva-IN"},"swb":{"value":"swb-Arab-YT"},"ts":
{"value":"ts-Latn-ZA"},"tt":{"value":"tt-Cyrl-RU"},"bus":{"value":"bus-Latn-ZZ"},"swg":{"value":"swg-Latn-DE"},"buu":{"value":"buu-Latn-ZZ"},"ty":{"value":"ty-Latn-PF"},"kge":{"value":"kge-Latn-ID"},"kgf":{"value":"kgf-Latn-ZZ"},"swp":{"value":"swp-Latn-ZZ"},"bvb":{"value":"bvb-Latn-GQ"},"ug":{"value":"ug-Arab-CN"},"swv":{"value":"swv-Deva-IN"},"kgp":{"value":"kgp-Latn-BR"},"uk":{"value":"uk-Cyrl-UA"},"ur":{"value":"ur-Arab-PK"},"kk-IR":{"value":"kk-Arab-IR"},"khb":{"value":"khb-Talu-CN"},"kha":{"value":"kha-Latn-IN"}
,"uz":{"value":"uz-Latn-UZ"},"sxn":{"value":"sxn-Latn-ID"},"xav":{"value":"xav-Latn-BR"},"opm":{"value":"opm-Latn-ZZ"},"bwd":{"value":"bwd-Latn-ZZ"},"und-Mlym":{"value":"ml-Mlym-IN"},"ve":{"value":"ve-Latn-ZA"},"khn":{"value":"khn-Deva-IN"},"sxw":{"value":"sxw-Latn-ZZ"},"vi":{"value":"vi-Latn-VN"},"khq":{"value":"khq-Latn-ML"},"kht":{"value":"kht-Mymr-IN"},"khs":{"value":"khs-Latn-ZZ"},"vo":{"value":"vo-Latn-001"},"khw":{"value":"khw-Arab-PK"},"bwr":{"value":"bwr-Latn-ZZ"},"khz":{"value":"khz-Latn-ZZ"},"und-ZW":
{"value":"sn-Latn-ZW"},"xbi":{"value":"xbi-Latn-ZZ"},"gaa":{"value":"gaa-Latn-GH"},"syl":{"value":"syl-Beng-BD"},"wa":{"value":"wa-Latn-BE"},"gag":{"value":"gag-Latn-MD"},"gaf":{"value":"gaf-Latn-ZZ"},"kij":{"value":"kij-Latn-ZZ"},"syr":{"value":"syr-Syrc-IQ"},"und-YE":{"value":"ar-Arab-YE"},"gah":{"value":"gah-Latn-ZZ"},"gaj":{"value":"gaj-Latn-ZZ"},"gam":{"value":"gam-Latn-ZZ"},"bxh":{"value":"bxh-Latn-ZZ"},"gan":{"value":"gan-Hans-CN"},"kiu":{"value":"kiu-Latn-TR"},"kiw":{"value":"kiw-Latn-ZZ"},"wo":{"value"
:"wo-Latn-SN"},"gaw":{"value":"gaw-Latn-ZZ"},"und-Sarb":{"value":"xsa-Sarb-YE"},"gay":{"value":"gay-Latn-ID"},"und-YT":{"value":"fr-Latn-YT"},"kjd":{"value":"kjd-Latn-ZZ"},"szl":{"value":"szl-Latn-PL"},"xcr":{"value":"xcr-Cari-TR"},"gba":{"value":"gba-Latn-ZZ"},"und-Mult":{"value":"skr-Mult-PK"},"kjg":{"value":"kjg-Laoo-LA"},"gbf":{"value":"gbf-Latn-ZZ"},"oro":{"value":"oro-Latn-ZZ"},"und-Hatr":{"value":"mis-Hatr-IQ"},"bye":{"value":"bye-Latn-ZZ"},"xh":{"value":"xh-Latn-ZA"},"gbm":{"value":"gbm-Deva-IN"},"oru":
{"value":"oru-Arab-ZZ"},"kjs":{"value":"kjs-Latn-ZZ"},"byn":{"value":"byn-Ethi-ER"},"und-XK":{"value":"sq-Latn-XK"},"yue-CN":{"value":"yue-Hans-CN"},"und-Lepc":{"value":"lep-Lepc-IN"},"byr":{"value":"byr-Latn-ZZ"},"kjy":{"value":"kjy-Latn-ZZ"},"osa":{"value":"osa-Osge-US"},"bys":{"value":"bys-Latn-ZZ"},"byv":{"value":"byv-Latn-CM"},"gbz":{"value":"gbz-Arab-IR"},"gby":{"value":"gby-Latn-ZZ"},"byx":{"value":"byx-Latn-ZZ"},"kkc":{"value":"kkc-Latn-ZZ"},"und-VU":{"value":"bi-Latn-VU"},"bza":{"value":"bza-Latn-ZZ"}
,"und-Goth":{"value":"got-Goth-UA"},"kkj":{"value":"kkj-Latn-CM"},"bze":{"value":"bze-Latn-ML"},"und-Avst":{"value":"ae-Avst-IR"},"bzf":{"value":"bzf-Latn-ZZ"},"yi":{"value":"yi-Hebr-001"},"bzh":{"value":"bzh-Latn-ZZ"},"und-WF":{"value":"fr-Latn-WF"},"yo":{"value":"yo-Latn-NG"},"gcr":{"value":"gcr-Latn-GF"},"ota":{"value":"ota-Arab-ZZ"},"und-WS":{"value":"sm-Latn-WS"},"bzw":{"value":"bzw-Latn-ZZ"},"und-UZ":{"value":"uz-Latn-UZ"},"und-UY":{"value":"es-Latn-UY"},"otk":{"value":"otk-Orkh-MN"},"xes":{"value":"xes-Latn-ZZ"}
,"za":{"value":"za-Latn-CN"},"gde":{"value":"gde-Latn-ZZ"},"kln":{"value":"kln-Latn-KE"},"und-VA":{"value":"it-Latn-VA"},"zh":{"value":"zh-Hans-CN"},"gdn":{"value":"gdn-Latn-ZZ"},"klq":{"value":"klq-Latn-ZZ"},"und-Saur":{"value":"saz-Saur-IN"},"klt":{"value":"klt-Latn-ZZ"},"und-VE":{"value":"es-Latn-VE"},"gdr":{"value":"gdr-Latn-ZZ"},"klx":{"value":"klx-Latn-ZZ"},"und-VN":{"value":"vi-Latn-VN"},"kk-MN":{"value":"kk-Arab-MN"},"zu":{"value":"zu-Latn-ZA"},"und-Armn":{"value":"hy-Armn-AM"},"kmb":{"value":"kmb-Latn-AO"}
,"und-TR":{"value":"tr-Latn-TR"},"geb":{"value":"geb-Latn-ZZ"},"und-TW":{"value":"zh-Hant-TW"},"kmh":{"value":"kmh-Latn-ZZ"},"und-TV":{"value":"tvl-Latn-TV"},"und-TZ":{"value":"sw-Latn-TZ"},"kmo":{"value":"kmo-Latn-ZZ"},"gej":{"value":"gej-Latn-ZZ"},"und-UA":{"value":"uk-Cyrl-UA"},"gel":{"value":"gel-Latn-ZZ"},"kms":{"value":"kms-Latn-ZZ"},"kmu":{"value":"kmu-Latn-ZZ"},"kmw":{"value":"kmw-Latn-ZZ"},"und-Tibt":{"value":"bo-Tibt-CN"},"und-UG":{"value":"sw-Latn-UG"},"und-Armi":{"value":"arc-Armi-IR"},"gez":{"value"
:"gez-Ethi-ET"},"und-ST":{"value":"pt-Latn-ST"},"knf":{"value":"knf-Latn-GW"},"und-SR":{"value":"nl-Latn-SR"},"und-SV":{"value":"es-Latn-SV"},"und-SY":{"value":"ar-Arab-SY"},"knp":{"value":"knp-Latn-ZZ"},"gfk":{"value":"gfk-Latn-ZZ"},"und-TD":{"value":"fr-Latn-TD"},"und-TH":{"value":"th-Thai-TH"},"und-TG":{"value":"fr-Latn-TG"},"und-TF":{"value":"fr-Latn-TF"},"und-TM":{"value":"tk-Latn-TM"},"und-TL":{"value":"pt-Latn-TL"},"und-TK":{"value":"tkl-Latn-TK"},"und-TJ":{"value":"tg-Cyrl-TJ"},"und-TO":{"value":"to-Latn-TO"}
,"und-TN":{"value":"ar-Arab-TN"},"und-RS":{"value":"sr-Cyrl-RS"},"koi":{"value":"koi-Cyrl-RU"},"und-RW":{"value":"rw-Latn-RW"},"kok":{"value":"kok-Deva-IN"},"und-RU":{"value":"ru-Cyrl-RU"},"kol":{"value":"kol-Latn-ZZ"},"kos":{"value":"kos-Latn-FM"},"ggn":{"value":"ggn-Deva-NP"},"und-SD":{"value":"ar-Arab-SD"},"und-SC":{"value":"fr-Latn-SC"},"und-SA":{"value":"ar-Arab-SA"},"koz":{"value":"koz-Latn-ZZ"},"und-SE":{"value":"sv-Latn-SE"},"und-SK":{"value":"sk-Latn-SK"},"und-SJ":{"value":"nb-Latn-SJ"},"und-SI":{"value"
:"sl-Latn-SI"},"taj":{"value":"taj-Deva-NP"},"und-SO":{"value":"so-Latn-SO"},"tal":{"value":"tal-Latn-ZZ"},"und-SN":{"value":"fr-Latn-SN"},"und-Osge":{"value":"osa-Osge-US"},"und-SM":{"value":"it-Latn-SM"},"kpf":{"value":"kpf-Latn-ZZ"},"tan":{"value":"tan-Latn-ZZ"},"kpe":{"value":"kpe-Latn-LR"},"und-QO":{"value":"en-Latn-DG"},"taq":{"value":"taq-Latn-ZZ"},"kpo":{"value":"kpo-Latn-ZZ"},"kpr":{"value":"kpr-Latn-ZZ"},"kpx":{"value":"kpx-Latn-ZZ"},"ghs":{"value":"ghs-Latn-ZZ"},"und-Lana":{"value":"nod-Lana-TH"}
,"tbc":{"value":"tbc-Latn-ZZ"},"und-RE":{"value":"fr-Latn-RE"},"tbd":{"value":"tbd-Latn-ZZ"},"tbg":{"value":"tbg-Latn-ZZ"},"tbf":{"value":"tbf-Latn-ZZ"},"und-RO":{"value":"ro-Latn-RO"},"kqb":{"value":"kqb-Latn-ZZ"},"tbo":{"value":"tbo-Latn-ZZ"},"kqf":{"value":"kqf-Latn-ZZ"},"und-PT":{"value":"pt-Latn-PT"},"und-PS":{"value":"ar-Arab-PS"},"und-PR":{"value":"es-Latn-PR"},"tbw":{"value":"tbw-Latn-PH"},"und-PY":{"value":"gn-Latn-PY"},"gim":{"value":"gim-Latn-ZZ"},"und-PW":{"value":"pau-Latn-PW"},"gil":{"value":"gil-Latn-KI"}
,"kqs":{"value":"kqs-Latn-ZZ"},"tbz":{"value":"tbz-Latn-ZZ"},"und-Laoo":{"value":"lo-Laoo-LA"},"can":{"value":"can-Latn-ZZ"},"und-QA":{"value":"ar-Arab-QA"},"kqy":{"value":"kqy-Ethi-ZZ"},"ms-CC":{"value":"ms-Arab-CC"},"tci":{"value":"tci-Latn-ZZ"},"krc":{"value":"krc-Cyrl-RU"},"krj":{"value":"krj-Latn-PH"},"kri":{"value":"kri-Latn-SL"},"ozm":{"value":"ozm-Latn-ZZ"},"und-OM":{"value":"ar-Arab-OM"},"krl":{"value":"krl-Latn-RU"},"gjk":{"value":"gjk-Arab-PK"},"cbj":{"value":"cbj-Latn-ZZ"},"gjn":{"value":"gjn-Latn-ZZ"}
,"tcy":{"value":"tcy-Knda-IN"},"xla":{"value":"xla-Latn-ZZ"},"krs":{"value":"krs-Latn-ZZ"},"xlc":{"value":"xlc-Lyci-TR"},"kru":{"value":"kru-Deva-IN"},"und-PA":{"value":"es-Latn-PA"},"xld":{"value":"xld-Lydi-TR"},"gju":{"value":"gju-Arab-PK"},"und-PE":{"value":"es-Latn-PE"},"tdd":{"value":"tdd-Tale-CN"},"tdg":{"value":"tdg-Deva-NP"},"tdh":{"value":"tdh-Deva-NP"},"und-PH":{"value":"fil-Latn-PH"},"und-PG":{"value":"tpi-Latn-PG"},"ksb":{"value":"ksb-Latn-TZ"},"und-PF":{"value":"fr-Latn-PF"},"und-PM":{"value":"fr-Latn-PM"}
,"ksd":{"value":"ksd-Latn-ZZ"},"und-PL":{"value":"pl-Latn-PL"},"und-PK":{"value":"ur-Arab-PK"},"ksf":{"value":"ksf-Latn-CM"}};}
function A0s(){return {"root":[{"value":"BCE"},{"value":"CE"}],"en":[{"value":"BC"},{"value":"AD"}]};}
function A6T(){return {"root":[{"value":"AM"},{"value":"PM"}],"en":[{"value":"AM"},{"value":"PM"}]};}
function A6o(){return {"root":[{"value":"M01"},{"value":"M02"},{"value":"M03"},{"value":"M04"},{"value":"M05"},{"value":"M06"},{"value":"M07"},{"value":"M08"},{"value":"M09"},{"value":"M10"},{"value":"M11"},{"value":"M12"}],"en":[{"value":"January"},{"value":"February"},{"value":"March"},{"value":"April"},{"value":"May"},{"value":"June"},{"value":"July"},{"value":"August"},{"value":"September"},{"value":"October"},{"value":"November"},{"value":"December"}]};}
function AUL(){return {"root":[{"value":"M01"},{"value":"M02"},{"value":"M03"},{"value":"M04"},{"value":"M05"},{"value":"M06"},{"value":"M07"},{"value":"M08"},{"value":"M09"},{"value":"M10"},{"value":"M11"},{"value":"M12"}],"en":[{"value":"Jan"},{"value":"Feb"},{"value":"Mar"},{"value":"Apr"},{"value":"May"},{"value":"Jun"},{"value":"Jul"},{"value":"Aug"},{"value":"Sep"},{"value":"Oct"},{"value":"Nov"},{"value":"Dec"}]};}
function A52(){return {"root":[{"value":"Sun"},{"value":"Mon"},{"value":"Tue"},{"value":"Wed"},{"value":"Thu"},{"value":"Fri"},{"value":"Sat"}],"en":[{"value":"Sunday"},{"value":"Monday"},{"value":"Tuesday"},{"value":"Wednesday"},{"value":"Thursday"},{"value":"Friday"},{"value":"Saturday"}]};}
function AVE(){return {"root":[{"value":"Sun"},{"value":"Mon"},{"value":"Tue"},{"value":"Wed"},{"value":"Thu"},{"value":"Fri"},{"value":"Sat"}],"en":[{"value":"Sun"},{"value":"Mon"},{"value":"Tue"},{"value":"Wed"},{"value":"Thu"},{"value":"Fri"},{"value":"Sat"}]};}
function AU$(){return {"value":"en_GB"};}
function A5e(){return {"DE":{"value":4},"PT":{"value":4},"DK":{"value":4},"LT":{"value":4},"LU":{"value":4},"HU":{"value":4},"MC":{"value":4},"UM":{"value":1},"IE":{"value":4},"US":{"value":1},"EE":{"value":4},"AD":{"value":4},"IM":{"value":4},"MQ":{"value":4},"IS":{"value":4},"IT":{"value":4},"VA":{"value":4},"AN":{"value":4},"ES":{"value":4},"001":{"value":1},"AT":{"value":4},"RE":{"value":4},"VI":{"value":1},"AX":{"value":4},"JE":{"value":4},"NL":{"value":4},"NO":{"value":4},"BE":{"value":4},"FI":{"value"
:4},"RU":{"value":4},"FJ":{"value":4},"BG":{"value":4},"FO":{"value":4},"FR":{"value":4},"SE":{"value":4},"SJ":{"value":4},"SK":{"value":4},"SM":{"value":4},"GB":{"value":4},"GF":{"value":4},"GG":{"value":4},"GI":{"value":4},"CH":{"value":4},"GP":{"value":4},"GR":{"value":4},"GU":{"value":1},"CZ":{"value":4},"PL":{"value":4},"LI":{"value":4}};}
function AYL(){return {"PR":{"value":1},"HK":{"value":1},"PT":{"value":1},"HN":{"value":1},"PY":{"value":1},"HR":{"value":2},"YE":{"value":1},"HU":{"value":2},"QA":{"value":7},"ID":{"value":1},"IE":{"value":2},"AD":{"value":2},"IL":{"value":1},"AE":{"value":7},"AF":{"value":7},"IN":{"value":1},"AG":{"value":1},"ZA":{"value":1},"AI":{"value":2},"IQ":{"value":7},"IR":{"value":7},"IS":{"value":2},"AL":{"value":2},"IT":{"value":2},"AM":{"value":2},"AN":{"value":2},"001":{"value":2},"AR":{"value":1},"AS":{"value"
:1},"AT":{"value":2},"RE":{"value":2},"AU":{"value":1},"AX":{"value":2},"AZ":{"value":2},"RO":{"value":2},"ZW":{"value":1},"BA":{"value":2},"RS":{"value":2},"BD":{"value":1},"BE":{"value":2},"JM":{"value":1},"RU":{"value":2},"BG":{"value":2},"JO":{"value":7},"BH":{"value":7},"JP":{"value":1},"BM":{"value":2},"BN":{"value":2},"SA":{"value":1},"BR":{"value":1},"BS":{"value":1},"SD":{"value":7},"BT":{"value":1},"SE":{"value":2},"SG":{"value":1},"BW":{"value":1},"SI":{"value":2},"BY":{"value":2},"BZ":{"value":1}
,"SK":{"value":2},"KE":{"value":1},"SM":{"value":2},"KG":{"value":2},"KH":{"value":1},"CA":{"value":1},"SV":{"value":1},"CH":{"value":2},"SY":{"value":7},"KR":{"value":1},"CL":{"value":2},"CM":{"value":2},"CN":{"value":1},"CO":{"value":1},"KW":{"value":7},"CR":{"value":2},"KZ":{"value":2},"TH":{"value":1},"LA":{"value":1},"CY":{"value":2},"LB":{"value":2},"TJ":{"value":2},"CZ":{"value":2},"TM":{"value":2},"LI":{"value":2},"TR":{"value":2},"LK":{"value":2},"TT":{"value":1},"DE":{"value":2},"TW":{"value":1},"DJ":
{"value":7},"DK":{"value":2},"LT":{"value":2},"DM":{"value":1},"LU":{"value":2},"LV":{"value":2},"DO":{"value":1},"UA":{"value":2},"LY":{"value":7},"DZ":{"value":7},"MC":{"value":2},"MD":{"value":2},"ME":{"value":2},"UM":{"value":1},"MH":{"value":1},"EC":{"value":2},"MK":{"value":2},"US":{"value":1},"EE":{"value":2},"MM":{"value":1},"MN":{"value":2},"EG":{"value":7},"MO":{"value":1},"MQ":{"value":2},"UY":{"value":2},"UZ":{"value":2},"MT":{"value":1},"MV":{"value":6},"MX":{"value":1},"VA":{"value":2},"MY":{"value"
:2},"MZ":{"value":1},"ES":{"value":2},"ET":{"value":1},"VE":{"value":1},"GB-alt-variant":{"value":1},"VI":{"value":1},"VN":{"value":2},"NI":{"value":1},"NL":{"value":2},"NO":{"value":2},"NP":{"value":1},"FI":{"value":2},"FJ":{"value":2},"FO":{"value":2},"FR":{"value":2},"NZ":{"value":2},"GB":{"value":2},"WS":{"value":1},"GE":{"value":2},"OM":{"value":7},"GF":{"value":2},"GP":{"value":2},"GR":{"value":2},"GT":{"value":1},"GU":{"value":1},"PA":{"value":1},"XK":{"value":2},"PE":{"value":1},"PH":{"value":1},"PK":
{"value":1},"PL":{"value":2}};}
function AI0(){C.call(this);}
function AD5(b){var result = [];for (var key in b) {result.push(key);}return result;}
function AAz(b){var c,d,e,f;c=b.length;d=H(BC,c);e=d.data;f=0;while(f<c){e[f]=(b[f]!==null?$rt_str(b[f]):null);f=f+1|0;}return d;}
function Oe(){var a=this;FG.call(a);a.jJ=0;a.cV=null;a.oO=null;}
function ADP(b){var c,d;if(b>=0)return A3G(b,0);c=new BB;d=new S;V(d);Bd(c,R(Bf(G(d,B(268)),b)));J(c);}
function AKg(b,c,d){return A$q(0,b.data.length,b,c,c+d|0,0,0);}
function My(b){return AKg(b,0,b.data.length);}
function WF(a,b,c,d){var e,f,g,h,i,j,k;if(c>=0){e=b.data;f=e.length;if(c<f){g=c+d|0;if(g>f){h=new BE;i=new S;V(i);Bd(h,R(Bf(G(Bf(G(i,B(269)),g),B(253)),f)));J(h);}if(BV(a)<d){i=new G6;Z(i);J(i);}if(d<0){i=new BE;h=new S;V(h);Bd(i,R(G(Bf(G(h,B(254)),d),B(255))));J(i);}g=a.O+a.jJ|0;j=0;while(j<d){k=c+1|0;b=a.cV.data;f=g+1|0;e[c]=b[g];j=j+1|0;c=k;g=f;}a.O=a.O+d|0;return a;}}b=b.data;h=new BE;i=new S;V(i);Bd(h,R(G(Bf(G(Bf(G(i,B(256)),c),B(250)),b.length),B(34))));J(h);}
function AEK(a,b){return WF(a,b,0,b.data.length);}
function ZB(a,b,c,d){var e,f,g,h,i,j,k;if(!d)return a;if(a.na){e=new Fd;Z(e);J(e);}if(BV(a)<d){e=new GV;Z(e);J(e);}if(c>=0){f=b.data;g=f.length;if(c<g){h=c+d|0;if(h>g){e=new BE;i=new S;V(i);Bd(e,R(Bf(G(Bf(G(i,B(270)),h),B(253)),g)));J(e);}if(d<0){e=new BE;i=new S;V(i);Bd(e,R(G(Bf(G(i,B(254)),d),B(255))));J(e);}h=a.O+a.jJ|0;j=0;while(j<d){b=a.cV.data;k=h+1|0;g=c+1|0;b[h]=f[c];j=j+1|0;h=k;c=g;}a.O=a.O+d|0;return a;}}b=b.data;i=new BE;e=new S;V(e);Bd(i,R(G(Bf(G(Bf(G(e,B(256)),c),B(250)),b.length),B(34))));J(i);}
function W9(a,b){return ZB(a,b,0,b.data.length);}
function A0m(a){return 1;}
function ATc(a){return a.cV;}
function A6f(a,b){a.oO=b;return a;}
function AP7(a){DM(a);return a;}
function A60(a){Ec(a);return a;}
function A1Z(a,b){H0(a,b);return a;}
function AW5(a,b){Dz(a,b);return a;}
function Nq(){Cq.call(this);}
function Or(){Nd.call(this);}
function Kz(a){var b,c;if(a.O<a.cv){b=a.O;a.O=b+1|0;return TS(a,b);}c=new G6;Z(c);J(c);}
function Ch(a,b){var c,d;if(AIY(a)){c=new Fd;Z(c);J(c);}if(a.O<a.cv){d=a.O;a.O=d+1|0;AEF(a,d,b);return a;}c=new GV;Z(c);J(c);}
function AIY(a){return a.yf;}
function Zo(){var a=this;Or.call(a);a.yf=0;a.zh=0;a.x3=null;}
function TS(a,b){return a.x3.data[b+a.zh|0];}
function AEF(a,b,c){a.x3.data[b+a.zh|0]=c;}
function A5h(a){return a.yf;}
function ID(){var a=this;C.call(a);a.Hm=null;a.Je=0.0;a.IQ=0.0;}
function Iw(a,b,c){var d=new ID();Y5(d,a,b,c);return d;}
function Y5(a,b,c,d){a.Hm=b;a.Je=c;a.IQ=d;}
function AGw(){ID.call(this);}
function A_e(a,b,c){var d=new AGw();AZQ(d,a,b,c);return d;}
function AZQ(a,b,c,d){Y5(a,b,1.0,1.0);}
function AOs(){ID.call(this);}
function A$X(a,b,c){var d=new AOs();AU1(d,a,b,c);return d;}
function AU1(a,b,c,d){Y5(a,b,1.0,1.0);}
function ABd(){U.call(this);}
function AWM(a,b){var c=new ABd();AST(c,a,b);return c;}
function AST(a,b,c){DR(a,b,c,Bec);}
function APi(a,b,c){L();return Bcn.b;}
function AEr(){U.call(this);}
function A9f(a){var b=new AEr();ATQ(b,a);return b;}
function ATQ(a,b){Ep(a,2,Beq);a.bk=3;EA(a,1);}
function ARE(a,b){return b==1?0:b?3:2;}
function A18(a,b,c,d,e,f){var g,h;g=d+1|0;if(D5(b,c,g,e)<4&&CR(b,c,g,e).pP()){if(!W(f,4)){L();By(b,c,d,e,Bci.b);}}else if(D5(b,c,g,e)>=9){c=(c+W(f,3)|0)-1|0;d=(d+W(f,5)|0)-3|0;e=(e+W(f,3)|0)-1|0;h=O(b,c,d,e);L();if(h==Bci.b){h=d+1|0;if(D5(b,c,h,e)>=4&&!CR(b,c,h,e).pP())By(b,c,d,e,Bch.b);}}}
function A6X(a,b,c){L();return Bci.gp(0,c);}
function AHC(){U.call(this);}
function A$8(a,b){var c=new AHC();AZL(c,a,b);return c;}
function AZL(a,b,c){DR(a,3,2,Beq);}
function B7(){C.call(this);}
var Bc_=null;var Beq=null;var Bed=null;var Bec=null;var Ber=null;var Bda=null;var Bdb=null;var Bes=null;var Bet=null;var Beu=null;var Bef=null;var Bev=null;var Bew=null;var Bex=null;var Bee=null;var Bey=null;function A6y(a){return 0;}
function ACA(a){return !a.l$()&&!a.it()?1:0;}
function AXx(a){return 1;}
function A3E(a){return 1;}
function AUn(a){return 1;}
function AOf(){Bc_=new M_;Beq=new B7;Bed=new B7;Bec=new B7;Ber=new B7;Bda=new L6;Bdb=new L6;Bes=new B7;Bet=new Of;Beu=new B7;Bef=new B7;Bev=new M_;Bew=new B7;Bex=new Of;Bee=new B7;Bey=new B7;}
function Gp(){U.call(this);}
function A1g(a,b){var c=new Gp();L$(c,a,b);return c;}
function L$(a,b,c){Ep(a,b,Bet);a.bk=c;EA(a,1);D3(a,0.30000001192092896,0.0,0.30000001192092896,0.699999988079071,0.6000000238418579,0.699999988079071);}
function A1L(a,b,c,d,e){return a.rQ(O(b,c,d-1|0,e));}
function AP5(a,b){L();return b!=Bch.b&&b!=Bci.b&&b!=Bd$.b?0:1;}
function A07(a,b,c,d,e,f){Lb(a,b,c,d,e);}
function ATl(a,b,c,d,e,f){Lb(a,b,c,d,e);}
function Lb(a,b,c,d,e){if(!a.s7(b,c,d,e)){Ja(a,b,c,d,e,Cr(b,c,d,e));By(b,c,d,e,0);}}
function ATv(a,b,c,d,e){a:{b:{if(D5(b,c,d,e)<8){if(D5(b,c,d,e)<4)break b;if(!Md(b,c,d,e))break b;}if(a.rQ(O(b,c,d-1|0,e))){c=1;break a;}}c=0;}return c;}
function A5b(a,b,c,d){return null;}
function ARu(a){return 0;}
function AUc(a){return 0;}
function ATV(a){return 1;}
function AGn(){Gp.call(this);}
function A$c(a,b){var c=new AGn();A0n(c,a,b);return c;}
function A0n(a,b,c){L$(a,6,15);D3(a,0.09999999403953552,0.0,0.09999999403953552,0.8999999761581421,0.800000011920929,0.8999999761581421);}
function AR5(a,b,c,d,e,f){var g;Lb(a,b,c,d,e);if(D5(b,c,d+1|0,e)>=9&&!W(f,5)){g=Cr(b,c,d,e);if(g<15){DK(b,c,d,e,g+1|0);return;}Ig(b,c,d,e,0);if(!L_(b,c,d,e))Ig(b,c,d,e,a.b);}}
function Jc(){var a=this;U.call(a);a.v1=0;a.mB=0;}
function Bez(a,b){var c=new Jc();UG(c,a,b);return c;}
function UG(a,b,c){Ep(a,b,c);a.bk=14;if(c===Bdb)a.bk=30;BdX.data[b]=1;a.mB=b;a.v1=b+1|0;D3(a,0.009999999776482582,(-0.09000000357627869),0.009999999776482582,1.0099999904632568,0.9099999666213989,1.0099999904632568);EA(a,1);Di(a,2.0);}
function A75(a,b){return a.ck===Bdb?a.bk:b==1?a.bk:!b?a.bk:a.bk+32|0;}
function A3h(a){return 0;}
function A4D(a,b,c,d,e){Ge(b,c,d,e,a.mB);}
function Ek(a,b,c,d,e){var f,g,h,i,j,k,l;if(!ACA(CR(b,c,d,e)))return 0;a:{if(a.ck===Bda){f=c-2|0;g=c+2|0;h=d-2|0;d=d+2|0;i=e-2|0;e=e+2|0;while(true){if(f>g)break a;j=h;while(j<=d){k=i;while(k<=e){l=O(b,f,j,k);L();if(l==BcC.b)return 0;k=k+1|0;}j=j+1|0;}f=f+1|0;}}}return 1;}
function ASc(a,b,c,d,e){return a.ck!==Bdb?DT(b,c,d,e):100.0;}
function AAp(a,b,c,d,e,f){var g;if(c>=0&&d>=0&&e>=0&&c<b.o&&e<b.t){a:{g=O(b,c,d,e);if(g!=a.mB&&g!=a.v1){b:{if(f==1){if(!O(b,c-1|0,d,e))break b;if(!O(b,c+1|0,d,e))break b;if(!O(b,c,d,e-1|0))break b;if(!O(b,c,d,e+1|0))break b;}c=Kb(a,b,c,d,e,f);break a;}c=1;}else c=0;}return c;}return 0;}
function AZx(a){return 0;}
function A5u(a,b,c,d){return null;}
function A5A(a){return 0;}
function AYx(a){return a.ck!==Bdb?5:25;}
function A4i(a,b){return 0;}
function ATP(a){return 0;}
function AUb(a,b,c,d,e,f){var g,h,i,j,k,l;if(a.ck===Bdb){g=d+1|0;if(CR(b,c,g,e)===Bc_&&!BM(b,c,g,e)&&!W(f,100))BY(b,B(271),c+N(f),d+a.cD,e+N(f),0.0,0.0,0.0);}a:{if(a.ck===Bda){b:{g=c+1|0;if(PI(b,g,d,e)){h=0;i=g+0.125;j=d;k=e;while(true){if(h>=4)break b;BY(b,B(272),i,j,k+N(f),0.0,0.0,0.0);h=h+1|0;}}}c:{if(PI(b,c-1|0,d,e)){g=0;i=c-0.125;j=d;k=e;while(true){if(g>=4)break c;BY(b,B(272),i,j,k+N(f),0.0,0.0,0.0);g=g+1|0;}}}d:{g=e+1|0;if(PI(b,c,d,g)){h=0;j=c;k=d;l=g+0.125;while(true){if(h>=4)break d;BY(b,B(272),j+N(f),
k,l,0.0,0.0,0.0);h=h+1|0;}}}if(PI(b,c,d,e-1|0)){g=0;i=c;k=d;l=e-0.125;while(true){if(g>=4)break a;BY(b,B(272),i+N(f),k,l,0.0,0.0,0.0);g=g+1|0;}}}}}
function PI(b,c,d,e){var f,g;f=CR(b,c,d,e);g=CR(b,c,d-1|0,e);return !f.os()&&!f.l$()?(!g.os()&&!g.l$()?0:1):0;}
function ANn(){var a=this;Jc.call(a);a.ns=0;a.l_=0;a.qd=null;a.ec=null;}
function A6J(a,b){var c=new ANn();AQI(c,a,b);return c;}
function AQI(a,b,c){var d,e;UG(a,b,c);a.qd=new Dd;d=$rt_createIntArray(4);e=d.data;e[0]=0;e[1]=1;e[2]=2;e[3]=3;a.ec=d;a.bk=14;if(c===Bdb)a.bk=30;L();BdX.data[b]=1;a.l_=b;a.ns=b+1|0;D3(a,0.009999999776482582,(-0.09000000357627869),0.009999999776482582,1.0099999904632568,0.9099999666213989,1.0099999904632568);EA(a,1);}
function ASn(a,b,c,d,e){Ge(b,c,d,e,a.l_);}
function AR3(a,b,c,d,e,f){AKP(a,b,c,d,e,0);}
function AKP(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o;g=c-1|0;h=!Ek(a,b,g,d,e)&&!Ek(a,b,c+1|0,d,e)&&!Ek(a,b,c,d,e-1|0)&&!Ek(a,b,c,d,e+1|0)?0:1;if(h){f=d-1|0;if(CR(b,c,f,e)===a.ck&&AL7(b,c,f,e,a.l_,a.ns)==1){i=SL(b,c,d,e,a.l_,a.ns);if(i==(-9999))return 0;if(i<0)return 0;j=i%1024|0;c=i>>10;By(b,j,(c>>10)%1024|0,c%1024|0,0);return 0;}}k=Jr(a,b,c,d,e,c,d-1|0,e);l=0;m=c+1|0;n=e-1|0;i=e+1|0;while(l<4){j=W(a.qd,4-l|0)+l|0;o=a.ec.data[l];a.ec.data[l]=a.ec.data[j];a.ec.data[j]=o;if(!a.ec.data[l]&&!k)k=Jr(a,b,c,d,e,g,d,e);if
(a.ec.data[l]==1&&!k)k=Jr(a,b,c,d,e,m,d,e);if(a.ec.data[l]==2&&!k)k=Jr(a,b,c,d,e,c,d,n);if(a.ec.data[l]==3&&!k)k=Jr(a,b,c,d,e,c,d,i);l=l+1|0;}if(!k&&h){a:{if(!W(a.qd,3)){if(W(a.qd,3)){if(a.ck!==Bdb)By(b,c,d,e,0);else{L();By(b,c,d,e,Bcl.b);}}else{f=0;j=0;while(true){if(j>=4)break a;k=W(a.qd,4-j|0)+j|0;o=a.ec.data[j];a.ec.data[j]=a.ec.data[k];a.ec.data[k]=o;if(!a.ec.data[j]&&!f)f=KC(a,b,c,d,e,g,d,e);if(a.ec.data[j]==1&&!f)f=KC(a,b,c,d,e,m,d,e);if(a.ec.data[j]==2&&!f)f=KC(a,b,c,d,e,c,d,n);if(a.ec.data[j]==3&&!f)f
=KC(a,b,c,d,e,c,d,i);j=j+1|0;}}}}return 0;}if(a.ck===Bda)k=k|Mr(b,g,d,e)|Mr(b,m,d,e)|Mr(b,c,d,n)|Mr(b,c,d,i);if(a.ck===Bdb)k=k|M5(b,g,d,e)|M5(b,m,d,e)|M5(b,c,d,n)|M5(b,c,d,i);if(k)Ge(b,c,d,e,a.l_);else Ig(b,c,d,e,a.ns);return k;}
function KC(a,b,c,d,e,f,g,h){if(!Ek(a,b,f,g,h))return 0;By(b,f,g,h,a.b);Ge(b,f,g,h,a.b);return 1;}
function Jr(a,b,c,d,e,f,g,h){var i,j;if(!Ek(a,b,f,g,h))return 0;c=SL(b,c,d,e,a.l_,a.ns);if(c!=(-9999)){if(c<0)return 0;e=c%1024|0;c=c>>10;i=c%1024|0;j=(c>>10)%1024|0;d=Bw(j,g);if(!(d<=0&&Ek(a,b,f,g-1|0,h))&&d<=0&&e&&e!=(b.o-1|0)&&i&&i!=(b.t-1|0))return 0;By(b,e,j,i,0);}By(b,f,g,h,a.b);Ge(b,f,g,h,a.b);return 1;}
function AY1(a,b,c,d,e,f){var g;if(c>=0&&d>=0&&e>=0&&c<b.o&&e<b.t){a:{g=O(b,c,d,e);if(g!=a.l_&&g!=a.ns){b:{if(f==1){if(!O(b,c-1|0,d,e))break b;if(!O(b,c+1|0,d,e))break b;if(!O(b,c,d,e-1|0))break b;if(!O(b,c,d,e+1|0))break b;}c=AAp(a,b,c,d,e,f);break a;}c=1;}else c=0;}return c;}return 0;}
function A8j(a){return 0;}
function APh(a,b,c,d){return null;}
function A3o(a){return 0;}
function AUN(a,b,c,d,e,f){return;}
function A1D(a){return a.ck!==Bdb?5:25;}
function A68(a,b){return 0;}
function AQZ(a){return a.ck!==Bda?0:1;}
function Mr(b,c,d,e){var f;f=O(b,c,d,e);L();if(f==Bd1.b){By(b,c,d,e,0);return 1;}if(O(b,c,d,e)!=Bcc.b&&O(b,c,d,e)!=Bd0.b)return 0;By(b,c,d,e,Bcl.b);return 1;}
function M5(b,c,d,e){L();if(!Zv(Bd1,O(b,c,d,e)))return 0;AA5(Bd1,b,c,d,e);return 1;}
function ANH(){Jc.call(this);}
function AXW(a,b){var c=new ANH();ARh(c,a,b);return c;}
function ARh(a,b,c){UG(a,b,c);a.mB=b-1|0;a.v1=b;EA(a,0);}
function A3n(a,b,c,d,e,f){return;}
function ASa(a,b,c,d,e,f){var g,h;g=0;if(Ek(a,b,c,d-1|0,e))g=1;if(!g&&Ek(a,b,c-1|0,d,e))g=1;if(!g&&Ek(a,b,c+1|0,d,e))g=1;if(!g&&Ek(a,b,c,d,e-1|0))g=1;if(!g&&Ek(a,b,c,d,e+1|0))g=1;a:{if(f){L();h=Bcf.data[f].ck;if(!(a.ck===Bda&&h===Bdb)){if(h!==Bda)break a;if(a.ck!==Bdb)break a;}By(b,c,d,e,Bcl.b);return;}}L();if(Zv(Bd1,f))g=1;if(g){Ig(b,c,d,e,a.mB);Ge(b,c,d,e,a.mB);}}
function Ph(){U.call(this);}
function A9V(a,b){var c=new Ph();ANN(c,a,b);return c;}
function ANN(a,b,c){DR(a,b,c,Bew);}
function AXu(a,b,c,d,e){Zb(a,b,c,d,e);}
function ARn(a,b,c,d,e,f){Zb(a,b,c,d,e);}
function Zb(a,b,c,d,e){var f,g,h,i;f=d;while(true){g=O(b,c,f-1|0,e);if(!g)h=1;else{L();if(g==Bd1.b)h=1;else{i=Bcf.data[g].ck;h=i===Bda?1:i!==Bdb?0:1;}}if(!h)break;if(f<0)break;f=f+(-1)|0;g=O(b,c,f,e);L();if(g==Bd1.b)H1(b,c,f,e,0);}if(f<0)Ig(b,c,d,e,0);if(f!=d){g=O(b,c,f,e);if(g>0){L();if(Bcf.data[g].ck!==Bc_)Ig(b,c,f,e,0);}ALa(b,c,d,e,c,f,e);}}
function ADF(){Ph.call(this);}
function A$x(a,b){var c=new ADF();A7O(c,a,b);return c;}
function A7O(a,b,c){ANN(a,13,19);}
function AYD(a,b,c){if(W(c,10))b=a.b;else{B2();b=BeA.c3;}return b;}
function ACq(){U.call(this);}
function TO(a,b){var c=new ACq();AXE(c,a,b);return c;}
function AXE(a,b,c){DR(a,b,c,Bec);}
function AXY(a,b,c){b=a.b;L();if(b==BcT.b){B2();b=BeB.c3;}else if(a.b!=Bd6.b)b=a.b;else{B2();b=BeC.c3;}return b;}
function AOR(a,b){return 1;}
function AGO(){U.call(this);}
function A9x(a){var b=new AGO();AYw(b,a);return b;}
function AYw(a,b){Ep(a,17,Bed);a.bk=20;}
function A3J(a,b){return 1;}
function APG(a,b,c){L();return Bcq.b;}
function A5O(a,b){return b==1?21:b?20:21;}
function L3(){U.call(this);this.A1=0;}
function ARW(a){return 0;}
function A0i(a,b,c,d,e,f){var g;g=O(b,c,d,e);return !a.A1&&g==a.b?0:Kb(a,b,c,d,e,f);}
function ANZ(){L3.call(this);}
function A9l(a,b){var c=new ANZ();AWm(c,a,b);return c;}
function AWm(a,b,c){DR(a,18,52,Bes);a.A1=1;EA(a,1);}
function A1N(a,b,c,d,e,f){var g,h,i,j,k,l,m,n;a:{g=d-1|0;if(!CR(b,c,g,e).it()){h=c-2|0;i=c+2|0;j=e-2|0;k=e+2|0;b:while(true){if(h>i){Ja(a,b,c,d,e,Cr(b,c,d,e));By(b,c,d,e,0);break a;}l=g;while(l<=d){m=j;while(m<=k){n=O(b,h,l,m);L();if(n==Bcq.b)break b;m=m+1|0;}l=l+1|0;}h=h+1|0;}return;}}}
function AYR(a,b){return W(b,10)?0:1;}
function ASp(a,b,c){L();return Bcv.b;}
function AOb(){U.call(this);}
function A$A(a){var b=new AOb();A72(b,a);return b;}
function A72(a,b){Ep(a,19,Beu);a.bk=48;}
function A8i(a,b,c,d,e){var f,g,h,i,j,k;f=c-2|0;g=c+2|0;h=d-2|0;d=d+2|0;i=e-2|0;e=e+2|0;while(f<=g){j=h;while(j<=d){k=i;while(k<=e){if(ACw(b,f,j,k))H1(b,f,j,k,0);k=k+1|0;}j=j+1|0;}f=f+1|0;}}
function ARg(a,b,c,d,e){var f,g,h,i,j,k,l;f=c-2|0;g=c+2|0;h=d-2|0;i=d+2|0;j=e-2|0;c=e+2|0;while(f<=g){k=h;while(k<=i){l=j;while(l<=c){Lr(b,f,k,l,O(b,f,k,l));l=l+1|0;}k=k+1|0;}f=f+1|0;}}
function O$(){U.call(this);this.z9=0;}
function AYA(a){return 0;}
function AZD(a,b,c,d,e,f){var g;g=O(b,c,d,e);return !a.z9&&g==a.b?0:Kb(a,b,c,d,e,f);}
function AJ3(){O$.call(this);}
function A83(a,b,c,d){var e=new AJ3();A4I(e,a,b,c,d);return e;}
function A4I(a,b,c,d,e){DR(a,20,49,d);a.z9=0;}
function AZB(a,b){return 0;}
function AAV(){Gp.call(this);}
function A1y(a,b){var c=new AAV();AOX(c,a,b);return c;}
function AOX(a,b,c){L$(a,b,c);D3(a,0.30000001192092896,0.0,0.30000001192092896,0.699999988079071,0.4000000059604645,0.699999988079071);}
function AQn(a,b){L();return BdU.data[b];}
function A3b(a,b,c,d,e){if(D5(b,c,d,e)<=13){c=O(b,c,d-1|0,e);L();if(BdU.data[c])return 1;}return 0;}
function AAt(){U.call(this);}
function AMc(a,b){var c=new AAt();A3w(c,a,b);return c;}
function A3w(a,b,c){Ep(a,b,Ber);a.bk=c;}
function A49(a,b){return b==1?a.bk-16|0:b?a.bk:a.bk+16|0;}
function AKt(){U.call(this);this.un=0;}
function AYV(a,b){var c=new AKt();A76(c,a,b);return c;}
function A76(a,b,c){DR(a,b,6,Bec);a.un=c;if(!c)D3(a,0.0,0.0,0.0,1.0,0.5,1.0);G_(a,255);}
function ARp(a,b){return b>1?5:6;}
function APs(a){return a.un;}
function A5y(a,b,c,d,e,f){L();}
function AYK(a,b,c,d,e){var f;L();f=d-1|0;if(O(b,c,f,e)==Bck.b){By(b,c,d,e,0);By(b,c,f,e,Bcj.b);}}
function APx(a,b,c){L();return Bck.b;}
function A0K(a){return a.un;}
function A6I(a,b,c,d,e,f){return f==1?1:!Kb(a,b,c,d,e,f)?0:!f?1:O(b,c,d,e)==a.b?0:1;}
function ANB(){U.call(this);}
function A9B(a,b){var c=new ANB();APw(c,a,b);return c;}
function APw(a,b,c){DR(a,46,8,Bey);}
function AQC(a,b){return !b?a.bk+2|0:b!=1?a.bk:a.bk+1|0;}
function A4q(a,b){return 0;}
function A7R(a,b,c,d,e){var f;f=ARf(b,c+0.5,d+0.5,e+0.5);f.gl=W(b.bo,f.gl/4|0)+(f.gl/8|0)|0;De(b,f);}
function A7s(a,b,c,d,e,f){De(b,ARf(b,c+0.5,d+0.5,e+0.5));}
function AJz(){U.call(this);}
function A_b(a,b){var c=new AJz();ASC(c,a,b);return c;}
function ASC(a,b,c){DR(a,47,35,Bed);}
function ARF(a,b){return b>1?a.bk:4;}
function ARO(a,b){return 0;}
function AOB(){U.call(this);}
function A$a(a,b){var c=new AOB();A1I(c,a,b);return c;}
function A1I(a,b,c){DR(a,50,80,Bex);EA(a,1);}
function AU8(a,b,c,d){return null;}
function A2l(a){return 0;}
function AXz(a){return 0;}
function A71(a){return 2;}
function AIg(a,b,c,d,e){return BM(b,c-1|0,d,e)?1:BM(b,c+1|0,d,e)?1:BM(b,c,d,e-1|0)?1:BM(b,c,d,e+1|0)?1:BM(b,c,d-1|0,e);}
function APv(a,b,c,d,e,f){var g;g=Cr(b,c,d,e);if(f==1&&BM(b,c,d-1|0,e))g=5;if(f==2&&BM(b,c,d,e+1|0))g=4;if(f==3&&BM(b,c,d,e-1|0))g=3;if(f==4&&BM(b,c+1|0,d,e))g=2;if(f==5&&BM(b,c-1|0,d,e))g=1;DK(b,c,d,e,g);}
function AWc(a,b,c,d,e,f){if(!Cr(b,c,d,e))AJR(a,b,c,d,e);}
function AJR(a,b,c,d,e){if(BM(b,c-1|0,d,e))DK(b,c,d,e,1);else if(BM(b,c+1|0,d,e))DK(b,c,d,e,2);else if(BM(b,c,d,e-1|0))DK(b,c,d,e,3);else if(BM(b,c,d,e+1|0))DK(b,c,d,e,4);else if(BM(b,c,d-1|0,e))DK(b,c,d,e,5);RD(a,b,c,d,e);}
function ASu(a,b,c,d,e,f){var g,h;if(RD(a,b,c,d,e)){g=Cr(b,c,d,e);h=0;if(!BM(b,c-1|0,d,e)&&g==1)h=1;if(!BM(b,c+1|0,d,e)&&g==2)h=1;if(!BM(b,c,d,e-1|0)&&g==3)h=1;if(!BM(b,c,d,e+1|0)&&g==4)h=1;if(!BM(b,c,d-1|0,e)&&g==5)h=1;if(h){Ja(a,b,c,d,e,Cr(b,c,d,e));By(b,c,d,e,0);}}}
function RD(a,b,c,d,e){if(AIg(a,b,c,d,e))return 1;Ja(a,b,c,d,e,Cr(b,c,d,e));By(b,c,d,e,0);return 0;}
function AUq(a,b,c,d,e,f,g){var h;h=Cr(b,c,d,e);if(h==1)D3(a,0.0,0.20000000298023224,0.3499999940395355,0.30000001192092896,0.800000011920929,0.6499999761581421);else if(h==2)D3(a,0.699999988079071,0.20000000298023224,0.3499999940395355,1.0,0.800000011920929,0.6499999761581421);else if(h==3)D3(a,0.3499999940395355,0.20000000298023224,0.0,0.6499999761581421,0.800000011920929,0.30000001192092896);else if(h!=4)D3(a,0.4000000059604645,0.0,0.4000000059604645,0.6000000238418579,0.6000000238418579,0.6000000238418579);else D3(a,
0.3499999940395355,0.20000000298023224,0.699999988079071,0.6499999761581421,0.800000011920929,1.0);return ALb(a,b,c,d,e,f,g);}
function AS7(a,b,c,d,e,f){var g,h,i,j,k,l;g=Cr(b,c,d,e);h=c+0.5;i=d+0.699999988079071;j=e+0.5;if(g==1){k=h-0.27000001072883606;l=i+0.2199999988079071;BY(b,B(273),k,l,j,0.0,0.0,0.0);BY(b,B(274),k,l,j,0.0,0.0,0.0);}else if(g==2){k=h+0.27000001072883606;l=i+0.2199999988079071;BY(b,B(273),k,l,j,0.0,0.0,0.0);BY(b,B(274),k,l,j,0.0,0.0,0.0);}else if(g==3){k=i+0.2199999988079071;l=j-0.27000001072883606;BY(b,B(273),h,k,l,0.0,0.0,0.0);BY(b,B(274),h,k,l,0.0,0.0,0.0);}else if(g!=4){BY(b,B(273),h,i,j,0.0,0.0,0.0);BY(b,B(274),
h,i,j,0.0,0.0,0.0);}else{k=i+0.2199999988079071;l=j+0.27000001072883606;BY(b,B(273),h,k,l,0.0,0.0,0.0);BY(b,B(274),h,k,l,0.0,0.0,0.0);}}
function AOI(){var a=this;U.call(a);a.pL=null;a.xj=null;}
function A$g(a,b){var c=new AOI();A50(c,a,b);return c;}
function A50(a,b,c){DR(a,51,31,Bev);a.pL=$rt_createIntArray(256);a.xj=$rt_createIntArray(256);Hf(a,Bcp.b,5,20);Hf(a,Bcq.b,5,5);Hf(a,Bcr.b,30,60);Hf(a,BcY.b,30,20);Hf(a,BcZ.b,15,100);b=0;while(b<16){Hf(a,BcD.b+b|0,30,60);b=b+1|0;}EA(a,1);}
function Hf(a,b,c,d){a.pL.data[b]=c;a.xj.data[b]=d;}
function AWp(a,b,c,d){return null;}
function ATe(a){return 0;}
function AWs(a){return 0;}
function AVH(a){return 3;}
function A8k(a,b){return 0;}
function A2c(a){return 20;}
function A21(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q;g=Cr(b,c,d,e);h=Bw(g,15);if(h<0){DK(b,c,d,e,g+1|0);Ge(b,c,d,e,a.b);}a:{if(K8(a,b,c,d,e)){i=d-1|0;if(!C4(a,b,c,i,e)&&!h&&!W(f,4))By(b,c,d,e,0);else if(!(g%5|0)&&g>5){j=c+1|0;HZ(a,b,j,d,e,300,f);h=c-1|0;HZ(a,b,h,d,e,300,f);HZ(a,b,c,i,e,100,f);k=d+1|0;HZ(a,b,c,k,e,200,f);l=e-1|0;HZ(a,b,c,d,l,300,f);g=e+1|0;HZ(a,b,c,d,g,300,f);m=d+4|0;while(true){if(h>j)break a;n=l;while(n<=g){o=i;while(o<=m){if(!(h==c&&o==d&&n==e)){p=100;if(o>k)p=100+((o-k|0)*100|0)|0;q=O(b,h,
o,n)?0:Hm(a,b,h,o,n+1|0,Hm(a,b,h,o,n-1|0,Hm(a,b,h,o+1|0,n,Hm(a,b,h,o-1|0,n,Hm(a,b,h-1|0,o,n,Hm(a,b,h+1|0,o,n,0))))));if(q>0&&W(f,p)<=q)By(b,h,o,n,a.b);}o=o+1|0;}n=n+1|0;}h=h+1|0;}}}else if(!(BM(b,c,d-1|0,e)&&g<=3))By(b,c,d,e,0);}}
function HZ(a,b,c,d,e,f,g){var h,i;h=a.xj.data[O(b,c,d,e)];if(W(g,f)<h){f=O(b,c,d,e);L();i=f!=BcZ.b?0:1;if(W(g,2))By(b,c,d,e,0);else By(b,c,d,e,a.b);if(i)BcZ.rD(b,c,d,e,0);}}
function K8(a,b,c,d,e){return C4(a,b,c+1|0,d,e)?1:C4(a,b,c-1|0,d,e)?1:C4(a,b,c,d-1|0,e)?1:C4(a,b,c,d+1|0,e)?1:C4(a,b,c,d,e-1|0)?1:C4(a,b,c,d,e+1|0);}
function A8d(a){return 0;}
function C4(a,b,c,d,e){return a.pL.data[O(b,c,d,e)]<=0?0:1;}
function Hm(a,b,c,d,e,f){var g;g=a.pL.data[O(b,c,d,e)];if(g>f)f=g;return f;}
function A0Y(a,b,c,d,e){return !BM(b,c,d-1|0,e)&&!K8(a,b,c,d,e)?0:1;}
function AZv(a,b,c,d,e,f){if(!BM(b,c,d-1|0,e)&&!K8(a,b,c,d,e))By(b,c,d,e,0);}
function A3T(a,b,c,d,e){if(!BM(b,c,d-1|0,e)&&!K8(a,b,c,d,e))By(b,c,d,e,0);else Ge(b,c,d,e,a.b);}
function Zv(a,b){return a.pL.data[b]<=0?0:1;}
function AA5(a,b,c,d,e){var f;f=IB(b,c,d+1|0,e);if(!f)f=IB(b,c-1|0,d,e);if(!f)f=IB(b,c+1|0,d,e);if(!f)f=IB(b,c,d,e-1|0);if(!f)f=IB(b,c,d,e+1|0);if(!f)f=IB(b,c,d-1|0,e);if(!f){L();By(b,c,d,e,Bd1.b);}}
function ASt(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o;a:{b:{g=d-1|0;if(!BM(b,c,g,e)){L();if(!C4(Bd1,b,c,g,e))break b;}g=0;h=c;i=d;j=e;while(true){if(g>=3)break a;BY(b,B(275),h+N(f),i+N(f)*0.5+0.5,j+N(f),0.0,0.0,0.0);g=g+1|0;}}c:{if(C4(Bd1,b,c-1|0,d,e)){g=0;h=c;k=d;l=e;while(true){if(g>=2)break c;BY(b,B(275),h+N(f)*0.10000000149011612,k+N(f),l+N(f),0.0,0.0,0.0);g=g+1|0;}}}d:{m=Bd1;n=c+1|0;if(C4(m,b,n,d,e)){g=0;h=n;k=d;l=e;while(true){if(g>=2)break d;BY(b,B(275),h-N(f)*0.10000000149011612,k+N(f),l+N(f),0.0,0.0,0.0);g
=g+1|0;}}}e:{if(C4(Bd1,b,c,d,e-1|0)){g=0;h=c;o=d;l=e;while(true){if(g>=2)break e;BY(b,B(275),h+N(f),o+N(f),l+N(f)*0.10000000149011612,0.0,0.0,0.0);g=g+1|0;}}}f:{m=Bd1;g=e+1|0;if(C4(m,b,c,d,g)){n=0;j=c;k=d;l=g;while(true){if(n>=2)break f;BY(b,B(275),j+N(f),k+N(f),l-N(f)*0.10000000149011612,0.0,0.0,0.0);n=n+1|0;}}}m=Bd1;d=d+1|0;if(C4(m,b,c,d,e)){g=0;h=c;i=d;j=e;while(true){if(g>=2)break a;BY(b,B(275),h+N(f),i-N(f)*0.10000000149011612,j+N(f),0.0,0.0,0.0);g=g+1|0;}}}}
function IB(b,c,d,e){var f;f=O(b,c,d,e);L();if(f==Bd1.b)return 1;if(f)return 0;By(b,c,d,e,Bd1.b);return 1;}
function ADI(){U.call(this);this.iW=0;}
function A2E(a,b){var c=new ADI();AYU(c,a,b);return c;}
function AYU(a,b,c){L();DR(a,b,Bcf.data[c].bk,Bda);a.iW=c;EA(a,1);}
function A1F(a,b,c,d,e){var f,g;f=c-1|0;if(!O(b,f,d,e))By(b,f,d,e,a.iW);g=c+1|0;if(!O(b,g,d,e))By(b,g,d,e,a.iW);g=e-1|0;if(!O(b,c,d,g))By(b,c,d,g,a.iW);e=e+1|0;if(!O(b,c,d,e))By(b,c,d,e,a.iW);}
function A3y(a,b,c,d,e,f){var g,h;g=c-1|0;if(!O(b,g,d,e))By(b,g,d,e,a.iW);h=c+1|0;if(!O(b,h,d,e))By(b,h,d,e,a.iW);h=e-1|0;if(!O(b,c,d,h))By(b,c,d,h,a.iW);e=e+1|0;if(!O(b,c,d,e))By(b,c,d,e,a.iW);}
function J2(){U.call(this);}
function AI6(a,b,c,d,e){KU(b,c,d,e,a.DC());}
function AVl(a,b,c,d,e){WZ(b,c,d,e);}
function ADt(){J2.call(this);this.ko=null;}
function A9_(a){var b=new ADt();AX2(b,a);return b;}
function AX2(a,b){Ep(a,54,Bed);a.ko=new Dd;a.bk=26;}
function A7_(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p;if(f==1)return a.bk-1|0;if(!f)return a.bk-1|0;g=e-1|0;h=O(b,c,d,g);i=e+1|0;j=O(b,c,d,i);k=c-1|0;l=O(b,k,d,e);m=c+1|0;n=O(b,m,d,e);if(h!=a.b&&j!=a.b){if(l!=a.b&&n!=a.b){k=3;L();if(BdU.data[h]&&!BdU.data[j])k=3;if(BdU.data[j]&&!BdU.data[h])k=2;if(BdU.data[l]&&!BdU.data[n])k=5;if(BdU.data[n]&&!BdU.data[l])k=4;return f!=k?a.bk:a.bk+1|0;}if(f!=4&&f!=5){o=0;if(l==a.b)o=(-1);g=O(b,l!=a.b?m:k,d,g);if(l==a.b)m=k;m=O(b,m,d,i);if(f==3)o=(-1)-o|0;i=3;L();if(!(!BdU.data[h]
&&!BdU.data[g])&&!BdU.data[j]&&!BdU.data[m])i=3;if(!(!BdU.data[j]&&!BdU.data[m])&&!BdU.data[h]&&!BdU.data[g])i=2;return (f!=i?a.bk+32|0:a.bk+16|0)+o|0;}return a.bk;}if(f!=2&&f!=3){o=0;if(h==a.b)o=(-1);p=O(b,k,d,h!=a.b?i:g);if(h==a.b)i=g;m=O(b,m,d,i);if(f==4)o=(-1)-o|0;i=5;L();if(!(!BdU.data[l]&&!BdU.data[p])&&!BdU.data[n]&&!BdU.data[m])i=5;if(!(!BdU.data[n]&&!BdU.data[m])&&!BdU.data[l]&&!BdU.data[p])i=4;return (f!=i?a.bk+32|0:a.bk+16|0)+o|0;}return a.bk;}
function A5t(a,b){return b==1?a.bk-1|0:!b?a.bk-1|0:b!=3?a.bk:a.bk+1|0;}
function AW9(a,b,c,d,e){var f,g,h,i,j;f=0;g=c-1|0;if(O(b,g,d,e)==a.b)f=1;h=c+1|0;if(O(b,h,d,e)==a.b)f=f+1|0;i=e-1|0;if(O(b,c,d,i)==a.b)f=f+1|0;j=e+1|0;if(O(b,c,d,j)==a.b)f=f+1|0;return f>1?0:Lk(a,b,g,d,e)?0:Lk(a,b,h,d,e)?0:Lk(a,b,c,d,i)?0:Lk(a,b,c,d,j)?0:1;}
function Lk(a,b,c,d,e){return O(b,c,d,e)!=a.b?0:O(b,c-1|0,d,e)==a.b?1:O(b,c+1|0,d,e)==a.b?1:O(b,c,d,e-1|0)==a.b?1:O(b,c,d,e+1|0)!=a.b?0:1;}
function A36(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q;f=FZ(b,c,d,e);g=0;h=c;i=d;j=e;while(g<27){a:{k=AEJ(f,g);if(k!==null){l=N(a.ko)*0.800000011920929+0.10000000149011612;m=N(a.ko)*0.800000011920929+0.10000000149011612;n=N(a.ko)*0.800000011920929+0.10000000149011612;o=h+l;l=i+m;m=j+n;while(true){if(k.s<=0)break a;p=W(a.ko,21)+10|0;if(p>k.s)p=k.s;k.s=k.s-p|0;q=Sz(b,o,l,m,A7k(k.bX,p,k.fy));q.G=HH(a.ko)*0.05000000074505806;q.C=HH(a.ko)*0.05000000074505806+0.20000000298023224;q.H=HH(a.ko)*0.05000000074505806;De(b,
q);}}}g=g+1|0;}WZ(b,c,d,e);}
function AJW(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,$p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=FZ(b,c,d,e);h=d+1|0;if(BM(b,c,h,e))return 1;i=c-1|0;if(O(b,i,d,e)==a.b&&BM(b,i,h,e))return 1;j=c+1|0;if(O(b,j,d,e)==a.b&&BM(b,j,h,e))return 1;k=e-1|0;if(O(b,c,d,k)==a.b&&BM(b,c,h,k))return 1;l=e+1|0;if(O(b,c,d,l)==a.b&&BM(b,c,h,l))return 1;m=O(b,i,d,e)!=a.b?g:S4(B(276),
FZ(b,i,d,e),g);n=O(b,j,d,e)!=a.b?m:S4(B(276),m,FZ(b,j,d,e));m=O(b,c,d,k)!=a.b?n:S4(B(276),FZ(b,c,d,k),n);b=O(b,c,d,l)!=a.b?m:S4(B(276),m,FZ(b,c,d,l));$p=1;case 1:AHN(f,b);if(I()){break _;}return 1;default:F2();}}Dh().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,$p);}
function A2T(a){return AFt();}
function ANx(){U.call(this);}
function A$t(a,b){var c=new ANx();A7E(c,a,b);return c;}
function A7E(a,b,c){DR(a,55,62,Bex);}
function AZo(a,b,c,d){return null;}
function ARV(a){return 0;}
function A66(a){return 0;}
function A25(a){return 5;}
function AZW(a,b){return 1;}
function APu(a){return 0;}
function AGx(){U.call(this);}
function A_k(a){var b=new AGx();A4$(b,a);return b;}
function A4$(a,b){Ep(a,58,Bed);a.bk=59;}
function AXq(a,b){if(b==1)b=a.bk-16|0;else if(!b){L();b=Bcp.cO(0);}else b=b!=2&&b!=4?a.bk:a.bk+1|0;return b;}
function ALm(a,b,c,d,e,f){var $p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:ANi(f);if(I()){break _;}return 1;default:F2();}}Dh().s(a,b,c,d,e,f,$p);}
function ANV(){Gp.call(this);}
function A85(a,b){var c=new ANV();AYT(c,a,b);return c;}
function AYT(a,b,c){L$(a,59,88);a.bk=88;EA(a,1);D3(a,0.0,0.0,0.0,1.0,0.25,1.0);}
function AY9(a,b){L();return b!=Bd$.b?0:1;}
function A3k(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x;Lb(a,b,c,d,e);if(D5(b,c,d+1|0,e)>=9){g=Cr(b,c,d,e);if(g<7){h=1.0;i=e-1|0;j=O(b,c,d,i);k=e+1|0;l=O(b,c,d,k);m=c-1|0;n=O(b,m,d,e);o=c+1|0;p=O(b,o,d,e);q=O(b,m,d,i);r=O(b,o,d,i);s=O(b,o,d,k);t=O(b,m,d,k);u=n!=a.b&&p!=a.b?0:1;v=j!=a.b&&l!=a.b?0:1;w=q!=a.b&&r!=a.b&&s!=a.b&&t!=a.b?0:1;n=d-1|0;while(m<=o){t=i;while(t<=k){s=O(b,m,n,t);x=0.0;L();if(s==Bd$.b){x=1.0;if(Cr(b,m,n,t)>0)x=3.0;}if(!(m==c&&t==e))x=x/4.0;h=h+x;t=t+1|0;}m=m+1|0;}a:{if(!w){if(!u)break a;if
(!v)break a;}h=h/2.0;}if(!W(f,100.0/h|0))DK(b,c,d,e,g+1|0);}}}
function AQV(a,b,c){if(c<0)c=7;return a.bk+c|0;}
function A4V(a){return 6;}
function AQB(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p;g=0;h=c;i=d;j=e;while(g<3){if(W(b.bo,15)<=f){k=N(b.bo)*0.699999988079071+0.15000000596046448;l=N(b.bo)*0.699999988079071+0.15000000596046448;m=N(b.bo)*0.699999988079071+0.15000000596046448;n=new Gn;o=h+k;l=i+l;k=j+m;p=new C9;B2();Ie(p,BeD);K1(n,b,o,l,k,p);n.iZ=10;De(b,n);}g=g+1|0;}}
function A4j(a,b,c){var d;c=Dr();d=new S;V(d);Cm(c,R(Bf(G(d,B(277)),b)));if(b!=7)b=(-1);else{B2();b=BeE.c3;}return b;}
function APE(a,b){return 1;}
function ALv(){U.call(this);}
function A_m(a){var b=new ALv();AZX(b,a);return b;}
function AZX(a,b){Ep(a,60,Beq);a.bk=87;EA(a,1);D3(a,0.0,0.0,0.0,1.0,0.9375,1.0);G_(a,255);}
function ASX(a,b,c,d){return GL(b,c,d,b+1|0,c+1|0,d+1|0);}
function A6V(a){return 0;}
function A6$(a){return 0;}
function A6a(a,b,c){b=Bw(b,1);return !b&&c>0?a.bk-1|0:b?2:a.bk;}
function A33(a,b,c,d,e,f){var g,h,i,j,k,l,m,n;a:{if(!W(f,5)){g=c-4|0;h=c+4|0;i=d+1|0;j=e-4|0;k=e+4|0;b:{while(g<=h){l=d;while(l<=i){m=j;while(m<=k){if(CR(b,g,l,m)===Bda){k=1;break b;}m=m+1|0;}l=l+1|0;}g=g+1|0;}k=0;}if(k){DK(b,c,d,e,7);return;}n=Cr(b,c,d,e);if(n>0){DK(b,c,d,e,n-1|0);return;}h=c;while(h<=c){j=e;while(j<=e){d=O(b,h,i,j);L();if(d==Bd9.b)break a;j=j+1|0;}h=h+1|0;}}}}
function AUf(a,b,c,d,e){return;}
function A8v(a,b,c,d,e,f){if(CR(b,c,d+1|0,e).it()){L();By(b,c,d,e,Bci.b);}}
function ASl(a,b,c){L();return Bci.gp(0,c);}
function AMW(){J2.call(this);this.vF=0;}
function A2p(a,b){var c=new AMW();AWI(c,a,b);return c;}
function AWI(a,b,c){Ep(a,b,Bec);a.vF=c;a.bk=45;}
function A3H(a,b,c,d,e){AI6(a,b,c,d,e);AFc(b,c,d,e);}
function AFc(b,c,d,e){var f,g,h,i,j;f=O(b,c,d,e-1|0);g=O(b,c,d,e+1|0);h=O(b,c-1|0,d,e);i=O(b,c+1|0,d,e);j=3;L();if(BdU.data[f]&&!BdU.data[g])j=3;if(BdU.data[g]&&!BdU.data[f])j=2;if(BdU.data[h]&&!BdU.data[i])j=5;if(BdU.data[i]&&!BdU.data[h])j=4;DK(b,c,d,e,j);}
function AZn(a,b,c,d,e,f){var g;if(f==1){L();return Bcl.bk;}if(!f){L();return Bcl.bk;}g=Cr(b,c,d,e);if(!g){AFc(b,c,d,e);g=Cr(b,c,d,e);}return f!=g?a.bk:!a.vF?a.bk-1|0:a.bk+16|0;}
function A35(a,b,c,d,e,f){var g,h,i,j,k,l;if(a.vF){g=Cr(b,c,d,e);h=c+0.5;i=d+N(f)*6.0/16.0;j=e+0.5;k=N(f)*0.6000000238418579-0.30000001192092896;if(g==4){h=h-0.5199999809265137;k=j+k;BY(b,B(273),h,i,k,0.0,0.0,0.0);BY(b,B(274),h,i,k,0.0,0.0,0.0);}else if(g==5){h=h+0.5199999809265137;k=j+k;BY(b,B(273),h,i,k,0.0,0.0,0.0);BY(b,B(274),h,i,k,0.0,0.0,0.0);}else if(g==2){h=h+k;k=j-0.5199999809265137;BY(b,B(273),h,i,k,0.0,0.0,0.0);BY(b,B(274),h,i,k,0.0,0.0,0.0);}else if(g==3){l=h+k;j=j+0.5199999809265137;BY(b,B(273),
l,i,j,0.0,0.0,0.0);BY(b,B(274),l,i,j,0.0,0.0,0.0);}}}
function AYf(a,b){if(b==1){L();b=Bcl.b;}else if(!b){L();b=Bcl.b;}else b=b!=3?a.bk:a.bk-1|0;return b;}
function ALD(a,b,c,d,e,f){var g,$p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:g=FZ(b,c,d,e);$p=1;case 1:AMP(f,g);if(I()){break _;}return 1;default:F2();}}Dh().s(a,b,c,d,e,f,g,$p);}
function A6W(a){return AB5();}
function Bg(){var a=this;C.call(a);a.c3=0;a.gf=0;a.iQ=0;a.L=0;}
var BeF=null;var Bce=null;var BeG=null;var BeH=null;var BeI=null;var BeJ=null;var BeK=null;var BeL=null;var BeB=null;var BeC=null;var BeM=null;var BeN=null;var BeO=null;var BeP=null;var BeQ=null;var BeR=null;var BeS=null;var BeT=null;var BeU=null;var BeV=null;var BeW=null;var BeX=null;var BeY=null;var BeZ=null;var Be0=null;var Be1=null;var Be2=null;var Be3=null;var Be4=null;var Be5=null;var Be6=null;var Be7=null;var Be8=null;var Be9=null;var Be$=null;var Be_=null;var Bfa=null;var Bfb=null;var Bfc=null;var Bfd
=null;var BeD=null;var BeE=null;var Bfe=null;var Bff=null;var Bfg=null;var Bfh=null;var Bfi=null;var Bfj=null;var Bfk=null;var Bfl=null;var Bfm=null;var Bfn=null;var Bfo=null;var Bfp=null;var Bfq=null;var Bfr=null;var Bfs=null;var Bft=null;var Bfu=null;var Bfv=null;var Bfw=null;var Bfx=null;var Bfy=null;var BeA=null;var Bfz=null;var BfA=null;var BfB=null;function B2(){B2=Bl(Bg);A03();}
function E6(a){var b=new Bg();Ey(b,a);return b;}
function Ey(a,b){var c,d,e;B2();a.gf=64;a.iQ=32;c=b+256|0;a.c3=c;if(Bce.data[c]!==null){d=Dr();e=new S;V(e);Cm(d,R(Bf(G(e,B(278)),b)));}Bce.data[c]=a;}
function A0d(a,b){a.L=b;return a;}
function Gh(a){return a.L;}
function A4O(a,b,c,d,e,f,g){return 0;}
function A24(a,b){return 1.0;}
function A3V(a,b,c,d){return b;}
function HC(a){return a.gf;}
function APe(a){return a.iQ;}
function A3e(a,b){return;}
function AXX(a,b){return;}
function AXG(a){return 1;}
function AZh(a,b){return 0;}
function A03(){var b,c,d,e,f,g,h,i,j,k,l,m;BeF=A9T();Bce=H(Bg,1024);b=Nx(0,2);b.L=82;BeG=b;c=MB(1,2);c.L=98;BeH=c;d=M$(2,2);d.L=114;BeI=d;e=A8U(3);e.L=5;BeJ=e;ZJ(4,4).L=4;f=A9G(5);f.L=21;BeK=f;g=E6(6);g.L=37;BeL=g;b=E6(7);b.L=7;BeB=b;b=E6(8);b.L=55;BeC=b;b=E6(9);b.L=23;BeM=b;b=E6(10);b.L=39;BeN=b;h=N9(11,2);h.L=66;BeO=h;b=N9(12,0);b.L=64;BeP=b;b=Nx(13,0);b.L=80;BeQ=b;b=MB(14,0);b.L=96;BeR=b;b=M$(15,0);b.L=112;BeS=b;b=N9(16,1);b.L=65;BeT=b;b=Nx(17,1);b.L=81;BeU=b;b=MB(18,1);b.L=97;BeV=b;b=M$(19,1);b.L=113;BeW
=b;b=N9(20,3);b.L=67;BeX=b;b=Nx(21,3);b.L=83;BeY=b;b=MB(22,3);b.L=99;BeZ=b;b=M$(23,3);b.L=115;Be0=b;b=E6(24);b.L=53;Be1=b;b=E6(25);b.L=71;Be2=b;i=A8X(26,10);i.L=72;Be3=i;b=N9(27,0);b.L=68;Be4=b;b=Nx(28,0);b.L=84;Be5=b;b=MB(29,0);b.L=100;Be6=b;b=M$(30,0);b.L=116;Be7=b;b=E6(31);b.L=8;Be8=b;b=E6(32);b.L=24;Be9=b;b=E6(33);b.L=40;Be$=b;j=Oi(34,0);j.L=128;Be_=j;b=Oi(35,1);b.L=129;Bfa=b;b=Oi(36,2);b.L=130;Bfb=b;b=Oi(37,3);b.L=131;Bfc=b;b=Oi(38,4);b.L=132;Bfd=b;k=new W5;L();AFe(k,39,Bd9.b);k.L=9;BeD=k;b=E6(40);b.L=
25;BeE=b;b=ZJ(41,5);b.L=41;Bfe=b;l=Dc(42,0,0,0);l.L=0;Bff=l;b=Dc(43,0,0,1);b.L=16;Bfg=b;b=Dc(44,0,0,2);b.L=32;Bfh=b;b=Dc(45,0,0,3);b.L=48;Bfi=b;b=Dc(46,1,1,0);b.L=1;Bfj=b;b=Dc(47,1,1,1);b.L=17;Bfk=b;b=Dc(48,1,1,2);b.L=33;Bfl=b;b=Dc(49,1,1,3);b.L=49;Bfm=b;b=Dc(50,2,2,0);b.L=2;Bfn=b;b=Dc(51,2,2,1);b.L=18;Bfo=b;b=Dc(52,2,2,2);b.L=34;Bfp=b;b=Dc(53,2,2,3);b.L=50;Bfq=b;b=Dc(54,3,3,0);b.L=3;Bfr=b;b=Dc(55,3,3,1);b.L=19;Bfs=b;b=Dc(56,3,3,2);b.L=35;Bft=b;b=Dc(57,3,3,3);b.L=51;Bfu=b;b=Dc(58,1,4,0);b.L=4;Bfv=b;b=Dc(59,
1,4,1);b.L=20;Bfw=b;b=Dc(60,1,4,2);b.L=36;Bfx=b;b=Dc(61,1,4,3);b.L=52;Bfy=b;b=E6(62);b.L=6;BeA=b;b=ZJ(63,3);b.L=87;Bfz=b;b=ZJ(64,8);b.L=88;BfA=b;m=A9z(65);m.L=26;BfB=m;}
function AH3(){Bg.call(this);this.oZ=0;}
function A8Z(a){var b=new AH3();ARl(b,a);return b;}
function ARl(a,b){Ey(a,b);b=b+256|0;a.oZ=b;L();a.L=Bcf.data[b].cO(2);}
function A4g(a,b,c,d,e,f,g){var h,i;if(!g)e=e+(-1)|0;if(g==1)e=e+1|0;if(g==2)f=f+(-1)|0;if(g==3)f=f+1|0;if(g==4)d=d+(-1)|0;if(g==5)d=d+1|0;if(!b.s)return 0;if(d>0&&e>0&&f>0&&d<(c.o-1|0)&&e<(c.bu-1|0)&&f<(c.t-1|0)){h=O(c,d,e,f);L();i=Bcf.data[h];if(!(!(a.oZ>0&&i===null)&&i!==Bcb&&i!==BdZ&&i!==Bcc&&i!==Bd0&&i!==Bd1)){i=Bcf.data[a.oZ];if(AFO(c,i.iq(d,e,f))&&i.ok(c,d,e,f)&&By(c,d,e,f,a.oZ)){Bcf.data[a.oZ].Ek(c,d,e,f,g);b.s=b.s-1|0;}}return 1;}return 0;}
function GT(){var a=this;C.call(a);a.je=0;a.l=null;a.bG=null;a.iM=0;a.cZ=Long_ZERO;a.vE=0;a.g7=0;a.sS=0;a.EM=0;a.Ex=0;a.vV=null;}
var BfC=null;var BfD=0;var BfE=0;var BfF=null;function Go(a){if(!a.iM){ZH(a);a.iM=1;}if(!a.je){AGQ(a);a.je=1;}}
function Gs(a,b){Go(a);return a.l.data[b];}
function G1(a){return a.EM;}
function KI(a){return a.Ex;}
function Gy(a){if(!a.iM){ZH(a);a.iM=1;}return a.cZ;}
function AYt(a){return a.vV;}
function AB7(a,b){a.vV=b;a.je=0;}
function Ns(a){return a.sS;}
function CX(a,b,c){a.l.data[b]=c;a.bG.data[b]=1;a.je=0;a.iM=0;if(b>2&&b<9)a.g7=b;if(!(b!=10&&b!=11))a.vE=b;if(b==9)a.vE=10;}
function A4F(a,b){a.sS=b;}
function Ob(a,b){if(!(a.iM&&a.je&&Long_eq(a.cZ,b))){a.cZ=b;a.iM=1;a.je=0;Go(a);}}
function AAQ(){var b,c;b=H(BC,17);c=b.data;c[0]=B(279);c[1]=B(280);c[2]=B(281);c[3]=B(282);c[4]=B(283);c[5]=B(284);c[6]=B(285);c[7]=B(286);c[8]=B(287);c[9]=B(288);c[10]=B(289);c[11]=B(290);c[12]=B(291);c[13]=B(292);c[14]=B(293);c[15]=B(294);c[16]=B(295);BfC=b;BfD=(-1);BfE=(-1);}
function ANJ(){var a=this;Oe.call(a);a.Hk=0;a.na=0;}
function A3G(a,b){var c=new ANJ();A22(c,a,b);return c;}
function A$q(a,b,c,d,e,f,g){var h=new ANJ();AAG(h,a,b,c,d,e,f,g);return h;}
function A22(a,b,c){AAG(a,0,b,$rt_createByteArray(b),0,b,c,0);}
function AAG(a,b,c,d,e,f,g,h){LQ(a,c);a.oO=Bb$;a.jJ=b;a.cV=d;a.O=e;a.cv=f;a.Hk=g;a.na=h;}
function AJE(a){var b,c,d,e;if(a.O>=a.cv){b=new G6;Z(b);J(b);}c=a.cV.data;d=a.jJ;e=a.O;a.O=e+1|0;return c[d+e|0];}
function AEf(a){var b,c,d,e,f,g,h,i,j;if(a.na){b=new Fd;Z(b);J(b);}a:{c=BV(a);if(a.O>0){d=a.jJ;e=a.jJ+a.O|0;f=0;while(true){if(f>=c)break a;g=a.cV.data;h=d+1|0;i=a.cV.data;j=e+1|0;g[d]=i[e];f=f+1|0;d=h;e=j;}}}a.O=c;a.cv=a.i$;a.jn=(-1);return a;}
function AXF(a){return a.na;}
function AHh(a){var b,c;b=BV(a)/4|0;if(a.oO!==Bb$){c=new QM;Qd(c,a.jJ+a.O|0,b,a,0,b,a.na);return c;}c=new X7;Qd(c,a.jJ+a.O|0,b,a,0,b,a.na);return c;}
function XJ(){}
function M7(){FG.call(this);}
function AGY(b){var c,d;if(b>=0)return AVT(0,b,$rt_createCharArray(b),0,b,0);c=new BB;d=new S;V(d);Bd(c,R(Bf(G(d,B(268)),b)));J(c);}
function AKv(b,c,d){return AVT(0,b.data.length,b,c,c+d|0,0);}
function Tf(b){return AKv(b,0,b.data.length);}
function Mc(a,b,c,d){var e,f,g,h,i,j,k;if(c>=0){e=b.data;f=e.length;if(c<f){g=c+d|0;if(g>f){h=new BE;i=new S;V(i);Bd(h,R(Bf(G(Bf(G(i,B(296)),g),B(253)),f)));J(h);}if(BV(a)<d){h=new G6;Z(h);J(h);}if(d<0){h=new BE;i=new S;V(i);Bd(h,R(G(Bf(G(i,B(254)),d),B(255))));J(h);}g=a.O;j=0;while(j<d){k=c+1|0;f=g+1|0;e[c]=Ym(a,g);j=j+1|0;c=k;g=f;}a.O=a.O+d|0;return a;}}b=b.data;i=new BE;h=new S;V(h);Bd(i,R(G(Bf(G(Bf(G(h,B(256)),c),B(250)),b.length),B(34))));J(i);}
function AFl(a,b){return Mc(a,b,0,b.data.length);}
function AOy(a,b,c,d){var e,f,g,h,i,j,k;if(PN(a)){e=new Fd;Z(e);J(e);}if(BV(a)<d){e=new GV;Z(e);J(e);}if(c>=0){f=b.data;g=f.length;if(c<g){h=c+d|0;if(h>g){e=new BE;i=new S;V(i);Bd(e,R(Bf(G(Bf(G(i,B(297)),h),B(253)),g)));J(e);}if(d<0){e=new BE;i=new S;V(i);Bd(e,R(G(Bf(G(i,B(254)),d),B(255))));J(e);}h=a.O;j=0;while(j<d){k=h+1|0;g=c+1|0;OR(a,h,f[c]);j=j+1|0;h=k;c=g;}a.O=a.O+d|0;return a;}}b=b.data;i=new BE;e=new S;V(e);Bd(i,R(G(Bf(G(Bf(G(e,B(256)),c),B(250)),b.length),B(34))));J(i);}
function AIn(a,b,c,d){var e,f,g,h,i,j;if(PN(a)){b=new Fd;Z(b);J(b);}e=d-c|0;if(BV(a)<e){b=new GV;Z(b);J(b);}if(c>=0&&c<Q(b)){if(d>Q(b)){f=new BE;g=new S;V(g);Bd(f,R(Bf(G(Bf(G(g,B(297)),d),B(298)),Q(b))));J(f);}if(c>d){b=new BE;f=new S;V(f);Bd(b,R(Bf(G(Bf(G(f,B(299)),c),B(300)),d)));J(b);}h=a.O;while(c<d){i=h+1|0;j=c+1|0;OR(a,h,P(b,c));h=i;c=j;}a.O=a.O+e|0;return a;}g=new BE;f=new S;V(f);Bd(g,R(G(Bf(G(Bf(G(f,B(299)),c),B(250)),Q(b)),B(34))));J(g);}
function Ov(a,b){return AIn(a,b,0,Q(b));}
function AID(a){return 1;}
function AMg(a){return a.mC;}
function AUG(a){Ec(a);return a;}
function AT_(a,b){Dz(a,b);return a;}
function RN(){BA.call(this);}
function Dd(){var a=this;C.call(a);a.BJ=0.0;a.xw=0;}
function A9T(){var a=new Dd();AZm(a);return a;}
function AZm(a){return;}
function AKT(a,b){return;}
function AGb(a,b){if(b==32)return HX(a)*4.294967295E9+(-2.147483648E9)|0;return HX(a)*Long_toNumber(Long_shl(Long_fromInt(1),B4(32,b)))|0;}
function RC(a){return AGb(a,32);}
function W(a,b){return HX(a)*b|0;}
function N(a){return HX(a);}
function HX(a){return Math.random();}
function HH(a){var b,c,d,e;if(a.xw){a.xw=0;return a.BJ;}while(true){while(true){b=2.0*HX(a)-1.0;c=2.0*HX(a)-1.0;d=b*b+c*c;if(d>=1.0)continue;else break;}if(d===0.0)continue;else break;}e=Iu((-2.0)*AZZ(d)/d);a.BJ=c*e;a.xw=1;return b*e;}
function GF(){var a=this;GT.call(a);a.pQ=Long_ZERO;a.eV=0;a.q$=0;a.ke=0;a.dz=null;a.v8=Long_ZERO;a.wq=Long_ZERO;a.ou=0;a.AN=0;}
var BfG=null;var BfH=null;var BfI=null;var BfJ=null;var BfK=null;function AO0(a){var b=new GF();AJY(b,a);return b;}
function BfL(a,b){var c=new GF();L8(c,a,b);return c;}
function AJY(a,b){L8(a,b,Bc1);}
function L8(a,b,c){var d,e,f,g;a.l=$rt_createIntArray(17);a.bG=$rt_createBooleanArray(17);a.je=0;a.iM=0;a.sS=1;AB7(a,b);a.l=$rt_createIntArray(17);a.bG=$rt_createBooleanArray(17);a.je=0;a.iM=0;a.sS=1;if(c===BfF&&BfD>=0)d=BfD;else{b=AB$(c.f6,c.fU);if(Bep===null)Bep=AYL();e=Bep;BfD=e.hasOwnProperty($rt_ustr(b))?e[$rt_ustr(b)].value:e[$rt_ustr(B(301))].value;d=BfD;}AHR(a,d);if(c===BfF&&BfE>=0)d=BfE;else{b=AB$(c.f6,c.fU);if(Beo===null)Beo=A5e();e=Beo;BfE=e.hasOwnProperty($rt_ustr(b))?e[$rt_ustr(b)].value:e[$rt_ustr(B(301))].value;d
=BfE;}ACz(a,d);BfF=c;a.pQ=new Long(4184124416, 4294964450);a.eV=1582;a.q$=(((a.eV-2000|0)/400|0)+Nt(a)|0)-((a.eV-2000|0)/100|0)|0;f=$rt_createIntArray(10);g=f.data;g[0]=0;g[1]=0;g[2]=0;g[3]=0;g[4]=0;g[5]=0;g[6]=0;g[7]=0;g[8]=0;g[9]=0;a.dz=f;a.ou=10;Ob(a,CF());}
function ED(a,b,c){var d,e,f,g,h,i;if(!c)return;if(b>=0&&b<15){a.ke=0;if(!b){Go(a);if(a.l.data[0]!=1){if(c<=0)return;CX(a,0,1);}else{if(c>=0)return;CX(a,0,0);}Go(a);return;}if(b!=1&&b!=2){a:{d=Long_ZERO;Gy(a);switch(b){case 3:case 4:case 8:d=Long_fromInt(604800000);break a;case 5:case 6:case 7:d=Long_fromInt(86400000);break a;case 9:d=Long_fromInt(43200000);break a;case 10:case 11:a.cZ=Long_add(a.cZ,Long_mul(Long_fromInt(c),Long_fromInt(3600000)));break a;case 12:a.cZ=Long_add(a.cZ,Long_mul(Long_fromInt(c),
Long_fromInt(60000)));break a;case 13:a.cZ=Long_add(a.cZ,Long_mul(Long_fromInt(c),Long_fromInt(1000)));break a;case 14:a.cZ=Long_add(a.cZ,Long_fromInt(c));break a;default:}}if(Long_gt(d,Long_ZERO)){e=Jk(a,a.cZ);a.cZ=Long_add(a.cZ,Long_mul(Long_fromInt(c),d));f=Jk(a,a.cZ);if(f!=e)a.cZ=Long_add(a.cZ,Long_fromInt(e-f|0));}a.je=0;Go(a);return;}Go(a);if(b==2){g=a.l.data[2]+c|0;if(g>=0)c=g/12|0;else{c=(g-11|0)/12|0;g=12+(g%12|0)|0;}CX(a,2,g%12|0);}CX(a,1,a.l.data[1]+c|0);h=FQ(a,Fs(a,a.l.data[1]),a.l.data[2]);if(a.l.data[5]
>h)CX(a,5,h);Go(a);return;}i=new BB;Z(i);J(i);}
function TZ(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o;e=Long_div(b,Long_fromInt(86400000));if(c<0){c=c+86400000|0;e=Long_sub(e,Long_fromInt(1));}c=c+d|0;while(c<0){c=c+86400000|0;e=Long_sub(e,Long_fromInt(1));}while(c>=86400000){c=c-86400000|0;e=Long_add(e,Long_fromInt(1));}f=Long_fromInt(d);g=Long_add(b,f);h=Zy(a,e,g);a.l.data[6]=h;if(a.l.data[1]==a.eV&&Long_le(a.pQ,g))h=h+a.ou|0;i=h/32|0;j=Fs(a,a.l.data[1]);k=h-Mu(a,j,i)|0;if(k>FQ(a,j,i)){k=k-FQ(a,j,i)|0;i=i+1|0;}a.l.data[7]=Dj(a,Long_sub(e,Long_fromInt(3)))+1|0;l
=Jk(a,b);if(a.l.data[1]>0)l=l-d|0;a.l.data[16]=l;if(!l)g=e;else{c=c+l|0;if(c<0){c=c+86400000|0;g=Long_sub(e,Long_fromInt(1));}else if(c<86400000)g=e;else{c=c-86400000|0;g=Long_add(e,Long_fromInt(1));}if(Long_ne(e,g)){b=Long_add(Long_sub(b,f),Long_fromInt(l));d=Zy(a,g,b);a.l.data[6]=d;if(a.l.data[1]==a.eV&&Long_le(a.pQ,b))d=d+a.ou|0;i=d/32|0;j=Fs(a,a.l.data[1]);k=d-Mu(a,j,i)|0;if(k>FQ(a,j,i)){k=k-FQ(a,j,i)|0;i=i+1|0;}a.l.data[7]=Dj(a,Long_sub(g,Long_fromInt(3)))+1|0;}}a.l.data[14]=c%1000|0;c=c/1000|0;a.l.data[13]
=c%60|0;c=c/60|0;a.l.data[12]=c%60|0;a.l.data[11]=(c/60|0)%24|0;m=a.l;m.data[9]=a.l.data[11]<=11?0:1;a.l.data[10]=a.l.data[11]%12|0;if(a.l.data[1]>0)a.l.data[0]=1;else{a.l.data[0]=0;a.l.data[1]= -a.l.data[1]+1|0;}a.l.data[2]=i;a.l.data[5]=k;m=a.l.data;d=k-1|0;m[8]=(d/7|0)+1|0;a.l.data[4]=((d+Dj(a,Long_sub(Long_sub(Long_sub(g,Long_fromInt(k)),Long_fromInt(2)),Long_fromInt(G1(a)-1|0)))|0)/7|0)+1|0;n=Dj(a,Long_sub(Long_sub(Long_sub(g,Long_fromInt(3)),Long_fromInt(a.l.data[6]-1|0)),Long_fromInt(G1(a)-1|0)));o=(((a.l.data[6]
-1|0)+n|0)/7|0)+((7-n|0)<KI(a)?0:1)|0;if(!o){m=a.l;i=!Fs(a,a.l.data[1]-1|0)?1:2;m.data[3]=(7-Dj(a,Long_fromInt(n-i|0))|0)<KI(a)?52:53;}else{c=a.l.data[6];d=!j?366:367;i=!j?1:2;if(c<(d-Dj(a,Long_fromInt(n+i|0))|0))a.l.data[3]=o;else{m=a.l;i=!j?1:2;if((7-Dj(a,Long_fromInt(n+i|0))|0)>=KI(a))o=1;m.data[3]=o;}}}
function AEz(a,b,c,d,e,f){var g;a:{b:{g=a.l.data[16];if(a.ke&&Long_lt(c,a.v8)&&Long_gt(c,a.wq)&&a.dz.data[4]==f&&!(!g&&Long_ge(d,a.v8))){if(!g)break b;if(Long_gt(d,a.wq))break b;}TZ(a,b,e,f);a.ke=0;break a;}a.l.data[1]=a.dz.data[0];a.l.data[2]=a.dz.data[1];a.l.data[5]=a.dz.data[2];a.l.data[7]=a.dz.data[3];a.l.data[0]=a.dz.data[5];a.l.data[3]=a.dz.data[6];a.l.data[4]=a.dz.data[7];a.l.data[6]=a.dz.data[8];a.l.data[8]=a.dz.data[9];}}
function Jk(a,b){return ALx(a.vV,b);}
function AGQ(a){var b,c,d,e,f,g,h,i;b=Jk(a,a.cZ);if(!a.bG.data[15])a.l.data[15]=b;c=Long_rem(a.cZ,Long_fromInt(86400000)).lo;d=a.l.data[16];e=b+d|0;f=Long_add(a.cZ,Long_fromInt(e));if(Long_gt(a.cZ,Long_ZERO)&&Long_lt(f,Long_ZERO)&&e>0)f=new Long(4294967295, 2147483647);else if(Long_lt(a.cZ,Long_ZERO)&&Long_gt(f,Long_ZERO)&&e<0)f=new Long(0, 2147483648);if(!a.ke)TZ(a,a.cZ,c,b);else{e=((c>=0?c:c+86400000|0)+b|0)+d|0;if(e<0)e=e+86400000|0;else if(e>=86400000)e=e-86400000|0;a.l.data[14]=e%1000|0;e=e/1000|0;a.l.data[13]
=e%60|0;g=e/60|0;a.l.data[12]=g%60|0;a.l.data[11]=(g/60|0)%24|0;h=a.l;h.data[9]=a.l.data[11]<=11?0:1;a.l.data[10]=a.l.data[11]%12|0;e=Long_compare(f,Long_ZERO);i=e>0&&e<0&&!d?new Long(4294967295, 2147483647):e>=0?f:e<=0?f:d?new Long(0, 2147483648):f;AEz(a,a.cZ,f,i,c,b);}g=0;while(g<17){a.bG.data[g]=1;g=g+1|0;}if(!a.ke&&Long_ne(f,new Long(4294967295, 2147483647))&&Long_ne(f,new Long(0, 2147483648))){a.dz.data[0]=a.l.data[1];a.dz.data[1]=a.l.data[2];a.dz.data[2]=a.l.data[5];a.dz.data[3]=a.l.data[7];a.dz.data[4]
=b;a.dz.data[5]=a.l.data[0];a.dz.data[6]=a.l.data[3];a.dz.data[7]=a.l.data[4];a.dz.data[8]=a.l.data[6];a.dz.data[9]=a.l.data[8];a.v8=Long_add(f,Long_fromInt(((0+((((23-a.l.data[11]|0)*60|0)*60|0)*1000|0)|0)+(((59-a.l.data[12]|0)*60|0)*1000|0)|0)+((59-a.l.data[13]|0)*1000|0)|0));a.wq=Long_sub(f,Long_fromInt(((((a.l.data[11]*60|0)*60|0)*1000|0)+((a.l.data[12]*60|0)*1000|0)|0)+(a.l.data[13]*1000|0)|0));a.ke=1;}}
function ZH(a){var b,c,d,e,f,g,h,i,j,k,l,m;a:{b:{c:{d:{e:{if(!Ns(a)){f:{if(a.bG.data[11]){if(a.l.data[11]>=0&&a.l.data[11]<=23)break f;J(DB());}if(a.bG.data[10]){if(a.l.data[10]<0)break a;if(a.l.data[10]>11)break a;}}if(a.bG.data[12]&&!(a.l.data[12]>=0&&a.l.data[12]<=59))J(DB());if(a.bG.data[13]){if(a.l.data[13]<0)break b;if(a.l.data[13]>59)break b;}if(a.bG.data[14]){if(a.l.data[14]<0)break c;if(a.l.data[14]>999)break c;}if(a.bG.data[3]&&!(a.l.data[3]>=1&&a.l.data[3]<=53))J(DB());if(a.bG.data[7]&&!(a.l.data[7]
>=1&&a.l.data[7]<=7))J(DB());if(a.bG.data[8]&&!(a.l.data[8]>=1&&a.l.data[8]<=6))J(DB());if(a.bG.data[4]){if(a.l.data[4]<1)break d;if(a.l.data[4]>6)break d;}if(a.bG.data[9]&&a.l.data[9]&&a.l.data[9]!=1)J(DB());if(a.bG.data[10]&&!(a.l.data[10]>=0&&a.l.data[10]<=11))J(DB());if(a.bG.data[1]){if(a.bG.data[0]&&!a.l.data[0]&&!(a.l.data[1]>=1&&a.l.data[1]<=292269054))J(DB());if(!(a.l.data[1]>=1&&a.l.data[1]<=292278994))J(DB());}if(a.bG.data[2]){if(a.l.data[2]<0)break e;if(a.l.data[2]>11)break e;}}b=Long_ZERO;if(a.bG.data[11]
&&a.vE!=10)b=Long_fromInt(a.l.data[11]);else if(a.bG.data[10])b=Long_fromInt((a.l.data[9]*12|0)+a.l.data[10]|0);c=Long_mul(b,Long_fromInt(3600000));if(a.bG.data[12])c=Long_add(c,Long_mul(Long_fromInt(a.l.data[12]),Long_fromInt(60000)));if(a.bG.data[13])c=Long_add(c,Long_mul(Long_fromInt(a.l.data[13]),Long_fromInt(1000)));if(a.bG.data[14])c=Long_add(c,Long_fromInt(a.l.data[14]));d=!a.bG.data[1]?1970:a.l.data[1];if(a.bG.data[0]){if(a.l.data[0]&&a.l.data[0]!=1)J(DB());if(!a.l.data[0])d=1-d|0;}e=!a.bG.data[4]&&
!a.bG.data[8]?0:1;f=!(!a.bG.data[5]&&!a.bG.data[2]&&!e)&&a.g7!=6?1:0;if(f&&!(a.g7!=7&&a.g7!=3)){if(a.bG.data[3]&&a.bG.data[7])f=a.g7!=3&&e&&a.bG.data[7]?1:0;else if(a.bG.data[6])f=a.bG.data[5]&&a.bG.data[2]?1:0;}if(!f){g=a.bG.data[3]&&a.g7!=6?1:0;if(g&&a.bG.data[6])g=a.bG.data[7];h=NE(a,d);if(g){i=!a.bG.data[7]?G1(a)-1|0:a.l.data[7]-1|0;b=Long_sub(h,Long_fromInt(3));j=Dj(a,Long_sub(b,Long_fromInt(G1(a)-1|0)));h=Long_add(h,Long_fromInt((((a.l.data[3]-1|0)*7|0)+Dj(a,Long_sub(Long_fromInt(j+i|0),b))|0)-j|0));if
((7-j|0)<KI(a))h=Long_add(h,Long_fromInt(7));}else if(a.bG.data[6]){if(!Ns(a)&&!(a.l.data[6]>=1&&a.l.data[6]<=(365+(!Fs(a,d)?0:1)|0)))J(DB());h=Long_add(h,Long_fromInt(a.l.data[6]-1|0));}else if(a.bG.data[7])h=Long_add(h,Long_fromInt(Dj(a,Long_sub(Long_fromInt(a.l.data[7]-1|0),Long_sub(h,Long_fromInt(3))))));}else{k=a.l.data[2];d=d+(k/12|0)|0;k=k%12|0;if(k<0){d=d+(-1)|0;k=k+12|0;}l=Fs(a,d);h=Long_add(NE(a,d),Long_fromInt(Mu(a,l,k)));m=a.bG.data[5];if(m&&!(a.g7!=7&&a.g7!=4&&a.g7!=8))m=a.bG.data[7]&&e?0:1;if(m)
{if(!Ns(a)&&!(a.l.data[5]>=1&&a.l.data[5]<=FQ(a,l,k)))J(DB());h=Long_add(h,Long_fromInt(a.l.data[5]-1|0));}else{i=!a.bG.data[7]?G1(a)-1|0:a.l.data[7]-1|0;if(a.bG.data[4]&&a.g7!=8){j=Dj(a,Long_sub(Long_sub(h,Long_fromInt(3)),Long_fromInt(G1(a)-1|0)));h=Long_add(h,Long_fromInt((((a.l.data[4]-1|0)*7|0)+Dj(a,Long_sub(Long_fromInt(j+i|0),Long_sub(h,Long_fromInt(2))))|0)-j|0));}else if(a.bG.data[8])h=a.l.data[8]>=0?Long_add(h,Long_fromInt(Dj(a,Long_sub(Long_fromInt(i),Long_sub(h,Long_fromInt(3))))+((a.l.data[8]-1
|0)*7|0)|0)):Long_add(h,Long_fromInt((FQ(a,l,k)+Dj(a,Long_sub(Long_fromInt(i),Long_sub(Long_add(h,Long_fromInt(FQ(a,l,k))),Long_fromInt(3))))|0)+(a.l.data[8]*7|0)|0));else if(a.bG.data[7]){b=Long_sub(h,Long_fromInt(3));j=Dj(a,Long_sub(b,Long_fromInt(G1(a)-1|0)));h=Long_add(h,Long_fromInt(Dj(a,Long_fromInt(Dj(a,Long_sub(Long_fromInt(j+i|0),b))-j|0))));}}}a.g7=0;b=Long_add(c,Long_mul(h,Long_fromInt(86400000)));if(d==a.eV&&Long_ge(b,Long_add(a.pQ,Long_mul(Long_fromInt(Nt(a)),Long_fromInt(86400000)))))b=Long_sub(b,
Long_mul(Long_fromInt(Nt(a)),Long_fromInt(86400000)));a.cZ=Long_sub(b,Long_fromInt(Jk(a,b)));return;}J(DB());}J(DB());}J(DB());}J(DB());}J(DB());}
function Zy(a,b,c){var d,e,f;d=1970;c=Long_ge(c,a.pQ)?b:Long_sub(b,Long_fromInt(a.q$));while(true){e=Long_div(c,Long_fromInt(365)).lo;if(!e)break;d=d+e|0;c=Long_sub(b,NE(a,d));}if(Long_lt(c,Long_ZERO)){d=d-1|0;f=!Fs(a,d)?365:366;if(d==a.eV)f=f-a.ou|0;if(d==(a.eV-1|0))f=f-a.AN|0;c=Long_add(c,Long_fromInt(f));}a.l.data[1]=d;return c.lo+1|0;}
function NE(a,b){var c,d;c=Long_fromInt(b);if(Long_lt(c,Long_fromInt(1970))){if(Long_le(c,Long_fromInt(a.eV)))return Long_add(Long_add(Long_mul(Long_sub(c,Long_fromInt(1970)),Long_fromInt(365)),Long_div(Long_sub(c,Long_fromInt(1972)),Long_fromInt(4))),Long_fromInt(a.q$));d=Long_add(Long_mul(Long_sub(c,Long_fromInt(1970)),Long_fromInt(365)),Long_div(Long_sub(c,Long_fromInt(1972)),Long_fromInt(4)));c=Long_sub(c,Long_fromInt(2000));return Long_add(Long_sub(d,Long_div(c,Long_fromInt(100))),Long_div(c,Long_fromInt(400)));}d
=Long_add(Long_mul(Long_sub(c,Long_fromInt(1970)),Long_fromInt(365)),Long_div(Long_sub(c,Long_fromInt(1969)),Long_fromInt(4)));return Long_gt(c,Long_fromInt(a.eV))?Long_sub(d,Long_sub(Long_div(Long_sub(c,Long_fromInt(1901)),Long_fromInt(100)),Long_div(Long_sub(c,Long_fromInt(1601)),Long_fromInt(400)))):Long_eq(c,Long_fromInt(a.eV))?Long_add(d,Long_fromInt(a.ou)):Long_ne(c,Long_fromInt(a.eV-1|0))?Long_add(d,Long_fromInt(a.q$)):Long_add(d,Long_fromInt(a.AN));}
function FQ(a,b,c){if(b&&c==1)return BfG.data[c]+1|0;return BfG.data[c];}
function Mu(a,b,c){if(b&&c>1)return BfH.data[c]+1|0;return BfH.data[c];}
function Fs(a,b){if(b<=a.eV)return b%4|0?0:1;a:{b:{if(!(b%4|0)){if(b%100|0)break b;if(!(b%400|0))break b;}b=0;break a;}b=1;}return b;}
function Nt(a){return ((a.eV/100|0)-(a.eV/400|0)|0)-2|0;}
function Dj(a,b){var c;c=Long_rem(b,Long_fromInt(7)).lo;if(Long_lt(b,Long_ZERO)&&c<0)return c+7|0;return c;}
function AHR(a,b){a.EM=b;a.ke=0;}
function ACz(a,b){a.Ex=b;a.ke=0;}
function ACa(){var b,c;b=$rt_createByteArray(12);c=b.data;c[0]=31;c[1]=28;c[2]=31;c[3]=30;c[4]=31;c[5]=30;c[6]=31;c[7]=31;c[8]=30;c[9]=31;c[10]=30;c[11]=31;BfG=b;b=$rt_createIntArray(12);c=b.data;c[0]=0;c[1]=31;c[2]=59;c[3]=90;c[4]=120;c[5]=151;c[6]=181;c[7]=212;c[8]=243;c[9]=273;c[10]=304;c[11]=334;BfH=b;b=$rt_createIntArray(17);c=b.data;c[0]=1;c[1]=292278994;c[2]=11;c[3]=53;c[4]=6;c[5]=31;c[6]=366;c[7]=7;c[8]=6;c[9]=1;c[10]=11;c[11]=23;c[12]=59;c[13]=59;c[14]=999;c[15]=50400000;c[16]=7200000;BfI=b;b=$rt_createIntArray(17);c
=b.data;c[0]=0;c[1]=1;c[2]=0;c[3]=1;c[4]=0;c[5]=1;c[6]=1;c[7]=1;c[8]=1;c[9]=0;c[10]=0;c[11]=0;c[12]=0;c[13]=0;c[14]=0;c[15]=(-46800000);c[16]=0;BfJ=b;b=$rt_createIntArray(17);c=b.data;c[0]=1;c[1]=292269054;c[2]=11;c[3]=50;c[4]=3;c[5]=28;c[6]=355;c[7]=7;c[8]=3;c[9]=1;c[10]=11;c[11]=23;c[12]=59;c[13]=59;c[14]=999;c[15]=50400000;c[16]=1200000;BfK=b;}
function Po(){}
function AGh(){var a=this;C.call(a);a.dP=Long_ZERO;a.eN=Long_ZERO;}
function A6s(){var a=new AGh();AWk(a);return a;}
function AWk(a){a.dP=Long_fromInt(1);a.eN=Long_ZERO;}
function AO1(a,b){a.dP=Long_and(b,Long_fromInt(65535));a.eN=Long_and(Long_shr(b,16),Long_fromInt(65535));}
function AVG(a){a.dP=Long_fromInt(1);a.eN=Long_ZERO;}
function AQc(a){return Long_or(Long_shl(a.eN,16),a.dP);}
function A40(a,b,c,d){var e,f,g,h,i,j;if(d==1){b=b.data;a.dP=Long_add(a.dP,Long_fromInt(b[c]&255));a.eN=Long_add(a.eN,a.dP);a.dP=Long_rem(a.dP,Long_fromInt(65521));a.eN=Long_rem(a.eN,Long_fromInt(65521));return;}e=d/5552|0;f=d%5552|0;while(true){g=e+(-1)|0;if(e<=0)break;h=5552;while(true){e=h+(-1)|0;if(h<=0)break;i=b.data;j=a.dP;d=c+1|0;a.dP=Long_add(j,Long_fromInt(i[c]&255));a.eN=Long_add(a.eN,a.dP);h=e;c=d;}a.dP=Long_rem(a.dP,Long_fromInt(65521));a.eN=Long_rem(a.eN,Long_fromInt(65521));e=g;}while(true){d=
f+(-1)|0;if(f<=0)break;i=b.data;j=a.dP;e=c+1|0;a.dP=Long_add(j,Long_fromInt(i[c]&255));a.eN=Long_add(a.eN,a.dP);f=d;c=e;}a.dP=Long_rem(a.dP,Long_fromInt(65521));a.eN=Long_rem(a.eN,Long_fromInt(65521));}
function GC(){Fc.call(this);}
var Bc5=null;var Bc9=null;var BfM=null;function AMp(){var b,c,d;b=new GC;FJ(b,B(302),0);Bc5=b;b=new GC;FJ(b,B(303),1);Bc9=b;c=H(GC,2);d=c.data;d[0]=Bc5;d[1]=Bc9;BfM=c;}
function M_(){B7.call(this);}
function A5c(a){return 0;}
function A6P(a){return 0;}
function A37(a){return 0;}
function L6(){B7.call(this);}
function A3R(a){return 1;}
function AUp(a){return 0;}
function Of(){B7.call(this);}
function AXJ(a){return 0;}
function AXM(a){return 0;}
function AQg(a){return 0;}
function Ha(){var a=this;Bg.call(a);a.uC=null;a.xm=0.0;a.BU=0;}
function BfN(a,b,c,d){var e=new Ha();Oj(e,a,b,c,d);return e;}
function Oj(a,b,c,d,e){Ey(a,b);a.xm=4.0;a.uC=e;a.gf=1;a.iQ=32<<d;a.xm=(d+1|0)<<1;a.BU=c+d|0;}
function AQw(a,b){var c;c=0;while(c<a.uC.data.length){if(a.uC.data[c]===b)return a.xm;c=c+1|0;}return 1.0;}
function AUx(a,b){GW(b,2);}
function APV(a,b){GW(b,1);}
function A0r(a){return a.BU;}
function Zq(){Ha.call(this);}
var BfO=null;function A9E(){A9E=Bl(Zq);APJ();}
function Nx(a,b){var c=new Zq();AEq(c,a,b);return c;}
function AEq(a,b,c){A9E();Oj(a,b,1,c,BfO);}
function APJ(){var b,c;b=H(U,4);c=b.data;L();c[0]=Bch;c[1]=Bci;c[2]=BcA;c[3]=BcB;BfO=b;}
function Z3(){Ha.call(this);this.oD=0;}
var BfP=null;function A96(){A96=Bl(Z3);APg();}
function MB(a,b){var c=new Z3();AGa(c,a,b);return c;}
function AGa(a,b,c){A96();Oj(a,b,2,c,BfP);a.oD=c;}
function ASS(a,b){L();return b===Bc0?(a.oD!=3?0:1):b!==Bd7&&b!==Bd6?(b!==BcX&&b!==BcV?(b!==BcW&&b!==BcU?(b.ck===Bec?1:b.ck!==Ber?0:1):a.oD<=0?0:1):a.oD<2?0:1):a.oD<2?0:1;}
function APg(){var b,c;b=H(U,12);c=b.data;L();c[0]=Bcn;c[1]=Bcj;c[2]=Bck;c[3]=Bcl;c[4]=Bcu;c[5]=BcU;c[6]=BcW;c[7]=BcT;c[8]=BcX;c[9]=BcV;c[10]=Bd6;c[11]=Bd7;BfP=b;}
function U_(){Ha.call(this);}
var BfQ=null;function A9s(){A9s=Bl(U_);A8A();}
function M$(a,b){var c=new U_();AFT(c,a,b);return c;}
function AFT(a,b,c){A9s();Oj(a,b,3,c,BfQ);}
function A8A(){var b,c;b=H(U,4);c=b.data;L();c[0]=Bcp;c[1]=BcY;c[2]=Bcq;c[3]=Bd4;BfQ=b;}
function AGo(){Bg.call(this);}
function A8U(a){var b=new AGo();AXb(b,a);return b;}
function AXb(a,b){Ey(a,3);a.gf=1;a.iQ=64;}
function A1t(a,b,c,d,e,f,g){if(!g)e=e+(-1)|0;if(g==1)e=e+1|0;if(g==2)f=f+(-1)|0;if(g==3)f=f+1|0;if(g==4)d=d+(-1)|0;if(g==5)d=d+1|0;if(d>0&&e>0&&f>0&&d<(c.o-1|0)&&e<(c.bu-1|0)&&f<(c.t-1|0)){if(!O(c,d,e,f)){L();By(c,d,e,f,Bd1.b);}GW(b,1);return 1;}return 0;}
function Nv(){Bg.call(this);this.Fi=0;}
function ZJ(a,b){var c=new Nv();AKW(c,a,b);return c;}
function AKW(a,b,c){Ey(a,b);a.Fi=c;a.gf=1;}
function AGZ(a,b,c,d){b.s=b.s-1|0;Wo(d,a.Fi);return b;}
function AGj(){Bg.call(this);}
function A9G(a){var b=new AGj();AZJ(b,a);return b;}
function AZJ(a,b){Ey(a,5);a.gf=1;}
function A7L(a,b,c,d){var e;e=d.F;B2();if(AA_(e,BeL.c3))De(c,AZ3(c,d));return b;}
function AHp(){Bg.call(this);this.Cp=0;}
function N9(a,b){var c=new AHp();A78(c,a,b);return c;}
function A78(a,b,c){Ey(a,b);a.gf=1;a.iQ=32<<c;a.Cp=4+(c<<1)|0;}
function AWr(a,b){return 1.5;}
function APU(a,b){GW(b,1);}
function A5K(a,b){GW(b,2);}
function ATg(a){return a.Cp;}
function ADn(){Nv.call(this);}
function A8X(a,b){var c=new ADn();A57(c,a,b);return c;}
function A57(a,b,c){AKW(a,26,10);}
function A3f(a,b,c,d){AGZ(a,b,c,d);b=new C9;B2();Ie(b,Be2);return b;}
function AL_(){Bg.call(this);}
function Oi(a,b){var c=new AL_();ATC(c,a,b);return c;}
function ATC(a,b,c){Ey(a,b);a.gf=1;a.iQ=32<<c;}
function AV_(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o;if(d>0&&e>0&&f>0&&d<(c.o-1|0)&&e<(c.bu-1|0)&&f<(c.t-1|0)){a:{g=O(c,d,e,f);if(!CR(c,d,e+1|0,f).it()){L();if(g==Bch.b)break a;}L();if(g!=Bci.b)return 0;}b:{L();By(c,d,e,f,Bd$.b);GW(b,1);if(!W(c.bo,8)&&g==Bch.b){h=0;i=d;j=e+1.2000000476837158;k=f;while(true){if(h>0)break b;l=N(c.bo)*0.699999988079071+0.15000000596046448;m=N(c.bo)*0.699999988079071+0.15000000596046448;n=new Gn;l=i+l;m=k+m;o=new C9;B2();Ie(o,BeD);K1(n,c,l,j,m,o);n.iZ=10;De(c,n);h=h+1|0;}}}return 1;}return 0;}
function W5(){Bg.call(this);this.Bm=0;}
function BfR(a,b){var c=new W5();AFe(c,a,b);return c;}
function AFe(a,b,c){Ey(a,39);a.Bm=c;}
function A5E(a,b,c,d,e,f,g){if(g!=1)return 0;if(d>0&&e>0&&f>0&&d<(c.o-1|0)&&e<(c.bu-1|0)&&f<(c.t-1|0)){g=O(c,d,e,f);L();if(g!=Bd$.b)return 0;By(c,d,e+1|0,f,a.Bm);b.s=b.s-1|0;return 1;}return 0;}
function Gm(){var a=this;Bg.call(a);a.z_=0;a.BX=0;a.AL=0;}
var BfS=null;var BfT=null;function Dc(a,b,c,d){var e=new Gm();AKC(e,a,b,c,d);return e;}
function AKC(a,b,c,d,e){Ey(a,b);a.z_=e;a.AL=d;a.BX=BfS.data[e];a.iQ=(BfT.data[e]*3|0)<<c;a.gf=1;}
function ANC(){var b,c;b=$rt_createIntArray(4);c=b.data;c[0]=3;c[1]=8;c[2]=6;c[3]=3;BfS=b;b=$rt_createIntArray(4);c=b.data;c[0]=11;c[1]=16;c[2]=15;c[3]=13;BfT=b;}
function AHP(){Bg.call(this);}
function A9z(a){var b=new AHP();A6r(b,a);return b;}
function A6r(a,b){Ey(a,65);a.iQ=64;}
function AZr(a,b,c,d,e,f,g){var h,i,j,k,l;if(!g)return 0;if(g==1)return 0;if(d>0&&e>0&&f>0&&d<(c.o-1|0)&&e<(c.bu-1|0)&&f<(c.t-1|0)){h=0;if(g==4)h=1;if(g==3)h=2;if(g==5)h=3;i=AT5(c);i.nh=d;i.ri=e;i.mG=f;j=BU();k=Xi().data;d=k.length;e=0;while(e<d){l=k[e];i.dm=l;N8(i,h);if(Pb(i))M(j,l);e=e+1|0;}if(j.q>0)i.dm=Bc(j,W(i.N,j.q));N8(i,h);if(Pb(i)){De(c,i);b.s=b.s-1|0;}return 1;}return 0;}
function OE(){C.call(this);this.HA=null;}
var Bb$=null;var BfU=null;function ARI(a){var b=new OE();AHx(b,a);return b;}
function AHx(a,b){a.HA=b;}
function AOw(){Bb$=ARI(B(304));BfU=ARI(B(305));}
function I8(){C.call(this);this.HL=null;}
var Bc2=null;var BfV=null;function Zr(b){var c,d,e,f,g,h,i,j;c=Od(b);if(c!==null)return YN(c);a:{if(EG(b,B(306))&&Q(b)>3){d=P(b,3);if(!(d!=43&&d!=45)){e=$rt_createIntArray(1);f=4;c=new S;V(c);g=Q(b);G(c,BO(b,0,f));while(f<g){if(LL(P(b,f),10)!=(-1)){Ce(c,P(b,f));if((g-(f+1|0)|0)==2)Ce(c,58);}else if(P(b,f)==58)Ce(c,58);f=f+1|0;}if(LI(R(c),B(307))==(-1)){Ce(c,58);G(c,B(308));}if(LI(R(c),B(307))==5)J4(c,4,48);b=R(c);f=Sd(b,4,e);if(f>=0&&f<=23){h=e.data;i=h[0];if(i==(-1))break a;else{b:{g=K(f,3600000);if(i<Q(b)
&&P(b,i)==58){j=Sd(b,i+1|0,e);if(h[0]!=(-1)&&j>=0&&j<=59){g=g+(j*60000|0)|0;break b;}return IX(BfV);}if(!(f<30&&i<=6))g=K(f/100|0,3600000)+((f%100|0)*60000|0)|0;}if(d==45)g= -g;return YN(ANO(b,g,g));}}return IX(BfV);}}}return IX(BfV);}
function Sd(b,c,d){var e,f,g,h;e=Q(b);f=0;g=c;a:{while(true){if(g>=e)break a;h=LL(P(b,g),10);if(h==(-1))break;g=g+1|0;f=(f*10|0)+h|0;}}if(g==c)g=(-1);d.data[0]=g;return f;}
function AOu(){BfV=YN(ANO(B(306),0,0));}
function BE(){BT.call(this);}
function ALn(){C.call(this);}
function AMb(b){if (b === null || b.constructor.$meta.item === undefined) {$rt_throw(DB());}return b.data.length;}
function AFg(b,c){if(b===null){b=new Eg;Z(b);J(b);}if(b===D($rt_voidcls())){b=new BB;Z(b);J(b);}if(c>=0)return AX3(b.hX,c);b=new Z8;Z(b);J(b);}
function AX3(b,c){if (b.$meta.primitive) {if (b == $rt_bytecls()) {return $rt_createByteArray(c);}if (b == $rt_shortcls()) {return $rt_createShortArray(c);}if (b == $rt_charcls()) {return $rt_createCharArray(c);}if (b == $rt_intcls()) {return $rt_createIntArray(c);}if (b == $rt_longcls()) {return $rt_createLongArray(c);}if (b == $rt_floatcls()) {return $rt_createFloatArray(c);}if (b == $rt_doublecls()) {return $rt_createDoubleArray(c);}if (b == $rt_booleancls()) {return $rt_createBooleanArray(c);}} else {return $rt_createArray(b, c)}}
function K4(){BT.call(this);}
function NM(){C.call(this);}
var BfW=null;var BfX=null;function Od(b){var c,d,e,f,g,h,i,j,k,l;if(!Dx(BfW,b)){c=BfW;d=Fx(b,47);if(d<0){e=B(9);f=b;}else{e=BO(b,0,d);f=DO(b,d+1|0);}if(!Lz().hasOwnProperty($rt_ustr(e)))e=null;else{e=Lz()[$rt_ustr(e)];e=!e.hasOwnProperty($rt_ustr(f))?null:e[$rt_ustr(f)];}if(e===null)e=null;else{e=(e.data!==null?$rt_str(e.data):null);f=AFI(H5(e));if(HS(f)==4){f=DO(e,f.f_);e=new Mm;f=Od(f);Jx(e,b);e.qX=f;}else a:{b:{f=AFI(H5(e));d=HS(f);switch(d){case 0:g=HS(f);h=$rt_createLongArray(g);i=h.data;j=$rt_createIntArray(g);k
=$rt_createIntArray(g);i[0]=GI(f);l=1;while(l<g){i[l]=Long_add(Long_add(i[l-1|0],GI(f)),Long_fromInt(657000000));l=l+1|0;}ABi(f,j);ABi(f,k);i=f.ne.data;d=f.f_;f.f_=d+1|0;if(i[d]!=121)f=null;else{f.f_=f.f_+1|0;f=AA$(b,f);}e=new V7;Jx(e,b);e.mO=h;e.tp=j;e.sP=k;e.iy=f;if(ADJ(e)){if(e instanceof J$)e=e;else{f=new J$;Jx(f,e.sZ);f.AM=H(Yq,BfY+1|0);f.py=e;e=f;}}break a;case 1:e=ANO(b,GI(f).lo,GI(f).lo);break a;case 2:break b;case 3:break;default:break b;}e=AA$(b,f);break a;}b=new BB;c=new S;V(c);Bd(b,R(Bf(G(c,B(309)),
d)));J(b);}}BI(c,b,e);}return Co(BfW,b);}
function AJf(){return false;}
function AE_(){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s;if(!AJf())return null;b=BU();c=CF();d= -(new Date(Long_toNumber(CF()))).getTimezoneOffset();e=BU();f=AAz(AD5(Lz())).data;g=f.length;h=0;while(h<g){i=f[h];j=AAz(AD5(Lz()[$rt_ustr(i)])).data;k=j.length;l=0;while(l<k){m=j[l];if(!Eb(i)){n=new S;V(n);m=R(G(G(G(n,i),B(30)),m));}M(e,m);l=l+1|0;}h=h+1|0;}f=HW(e,H(BC,e.q)).data;g=f.length;h=0;while(h<g){o=Od(f[h]);if(!(o instanceof Mm)&&K9((o.hb(c)/60000|0)-d|0)<=120&&Long_ne(o.kq(c),c)){e=new TV;e.jh=o;M(b,e);}h
=h+1|0;}i=BU();Yt(i,b);m=CZ();p=A9k(b.q,new UL);q=AG6();VA(p,GN(c));BI(m,GN(c),A9W(b));a:{b:{c:while(true){if(Ko(p))break b;if(i.q<=1)break b;r=AEs(p).j_;ANR(q,GN(r));e=M4(m,GN(r));l= -(new Date(Long_toNumber(r))).getTimezoneOffset();n=Hq(e);while(JO(n)){e=Il(n);s=e.jh.kq(r);if(Long_eq(s,r)){if(Bc(i,0)===e)break c;GD(i,e);}else{if(K9((e.jh.hb(r)/60000|0)-l|0)>120){GD(i,e);continue;}AHJ(m,GN(s),new T1).kx(e);if(AOk(q,GN(s)))VA(p,GN(s));}}if(i.q==1)break a;if(Long_eq(Bc(i,0).jh.kq(r),r))break a;if(i.q>1&&(Bc(i,
0).nz+2880|0)<Bc(i,1).nz)return Bc(i,0).jh;g=i.q-1|0;while(g>=0){e=Bc(i,g);h=e.jh.hb(r)/60000|0;if(h!=l)e.nz=e.nz+(K(Long_div(Long_sub(c,r),Long_fromInt(60000)).lo,K9(h-l|0))/30|0)|0;k=g+1|0;while(k<i.q&&e.nz>Bc(i,k).nz){M6(i,k-1|0,Bc(i,k));k=k+1|0;}M6(i,k-1|0,e);g=g+(-1)|0;}c=r;}return e.jh;}return Bc(i,0).jh;}return Bc(i,0).jh;}
function Lz(){if(BfX===null)BfX=ADs();return BfX;}
function AAO(){BfW=CZ();}
function ADs(){return {"":{"CET":{"data":" ?Fq4=wm?.LAwm?wm?wm?wm?wm?wm?wm?wm?wm?wm?.LAkBEd1A1A1A1A1A1A1A1+1Y1y\'1s\'\u001e=n11s5\u001e=n1 "},"EET":{"data":" ?Fq4=wm?.LAwm?wm?wm?wm?wm?wm?wm?wm?wm?wm?.LAkBEdAQAQAQAQAQAQAQA+AYAy\'Au\'\u001e=n)1u5\u001e=n) "},"PST8PDT":{"data":" ls&<=6<;ZBEJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEJw;FeCJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEVD7NuIa#H#8#H#8#H#8#H#8#H#8#H#8#H#8#H#8#H#8#H#8#H#8#H#8#H#8#H#8#H#8#H#8#H#8#H#8#H#+H#V#H#y\'H#w\'1=y11w7#=y1 "},"EST":{"data":"#tt"}
,"WET":{"data":" ?Fq4=wm?.LAwm?wm?wm?wm?wm?wm?wm?wm?wm?wm?.LAkBEd 1 1 1 1 1 1 1 + Y y\' u\'\u001e=n)1u5\u001e=n) "},"HST":{"data":"#i#i#"},"CST6CDT":{"data":" lR&<=6<;ZBEJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEJw;FeCJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEVD7NuIa#(#t(#t(#t(#t(#t(#t(#t(#t(#t(#t(#t(#t(#t(#t(#t(#t(#t(#t(#+(#V#(#y\'(#w\'1=y11w7#=y1 "},"MET":{"data":" ?Fq4=wm?.LAwm?wm?wm?wm?wm?wm?wm?wm?wm?wm?.LAkBEd1A1A1A1A1A1A1A1+1Y1y\'1s\'\u001e=n11s5\u001e=n1 "},"EST5EDT":{"data":" lB&<=6<;ZBEJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEJw;FeCJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEVD7NuIa#tdtdtdtdtdtdtdtdtdtdtdtdtdtdtdtdtdtdt+tV#ty\'tw\'1=y11w7#=y1 "}
,"MST7MDT":{"data":" lc&<=6<;ZBEJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEJw;FeCJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEVD7NuIa#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#+8#V#8#y\'8#w\'1=y11w7#=y1 "},"MST":{"data":"#8#8#"}},"Asia":{"Gaza":{"data":" >#&y0=geCs:;{BE*w;{BE*w;Z2E6L;Z2E!o9omE6L;>TE>L=c:C>L=c:C>L=.TEwu?:w?wu?*o?wu?*o?wu?*o?wu?:w?NT=R2C2o=6T?B*?_]AJw;R:CFT;Z2E:w;g&g7B,_/o_@;*<i-ouIFT?Z2AF]?Z*AZBEFD;ZBEVD;>eEc!;>eEc!;>eER!;a%AQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQ+AV%Ay\'Aw5\u001e9n) w\'\u001e5n 1"}
,"Makassar":{"data":" #PPNC+F#+F#n"},"Ulaanbaatar":{"data":" h_m4=*o?{JA*o?gm?*o?gm?*o?gm?*o?gm?*o?gm?>LAgm?*o?gm?*o?gm?:Zo#c2;*o?wu?*o?wu?:w?wu?*o?wu?*o?wu?:{*-Vu?Zw?Vu?X#F#V#F#V#F#V#F#V#F#V#F#V#F#V#F#V#F#V#F#V#F#V#F#V#F#V#F#V#F#V#F#V#F#V#F#+F#N#F#n"},"Vladivostok":{"data":" |om4=wm?.LAg@bgL3:_+wm?wm?wm?wm?wm?wm?wm?.LAkBE&<;kBE&<;kBE&<;!!Go]9!!Go]9!!G&<;kBE&<;kBE&<;!!Go]9!!Go]9!!Go]9!!G&<;kBE&<;kBE&<;!!Go]9g(V%$%g#w#g#V#g#w#g#w#g#w#g#w#g#w#g#w#g#w#g#w#g#w#g#w#g#w#g#w#g#w#g#w#g#w#g#w#g#w#g#w#g#w#g#w#g#7g#g#g#V#c#g#/w#g#n"}
,"Tashkent":{"data":" )Ro4=wm?.LAg@b7&#6#&#r7&#&#&#rn"},"Beirut":{"data":" KRo8=c2C>T=c2C>T=s:C6L;s2?gm?*o?gm?*o?gm?>LAgm?*o?gm?*o?gm?*o?o}E|AQAQAQAQAQAQAQAQAQAQA+ArAy\'Aw\'\u001e=n 1w5\u001e=n  "},"Qyzylorda":{"data":" [co4=wm?.LA&Pv*2Mwm?wm?wm?wm?wm?wm?.LAkBE&<;kBE&<;kBE&<;!!Go]9!!Go]9!!G&<;kBE&<;kBE&<;VTX5@#r&#r&#r&#r&#r&#r&#r&#r&#r&#r&#r&#r&#r&#r&#r7rrr&#*#rn"},"Phnom_Penh":{"data":" #D(DDO+6#+6#n"},"Hong_Kong":{"data":" #_m&/+F#+F#n"},"Kabul":{"data":" #eR!E+j+jn"},"Riyadh":{"data":" #mqsc5+Q+Qn"},"Ashgabat":
{"data":" +co4=wm?.LAg@bgL3;r&#rbr;rrrbrn"},"Chita":{"data":" !#!o4=wm?.LAg@bgL3:_+wm?wm?wm?wm?wm?wm?wm?.LAkBE&<;kBE&<;kBE&<;!!Go]9!!Go]9!!G&<;kBE&<;kBE&<;!!Go]9!!Go]9!!Go]9!!G&<;kBE&<;kBE&<;!!Go]9g(V%c>!#(%V#g#V#F#V#g#V#g#V#g#V#g#V#g#V#g#V#g#V#g#V#g#V#g#V#g#V#g#V#g#V#g#V#g#V#g#V#g#V#g#V#g#V#g#F#V#7V#V#V#F#c#V#3g#F#V#n"},"Aqtau":{"data":" ^co4=wm?.LAg@bgL3:_+wm?wm?wm?wm?*o?wm?wm?.LAkBE&<;kBE&<;kBE&<;!!Go]9!!Go]9!!G&<;kBE&<;kBE&<;D#r&#rbr&#r&#r&#brbrbrbrbrbrbrbrbrbr7rrrb9r+bnbn"},"Tokyo":{"data":" #u{2;+V#+V#n"}
,"Baku":{"data":" |so4=wm?.LAg@bwm?&(s%kBEs:;kBE&<;kBE&<;!!Go]9!!Go]9!!G&<;kBE&<;kBE&<;!!Go]9!!Go]9!!Go]9!!G&<;kBE&<;kBE&<;!!Go]9!!Go]9!!G&<;kBE&<;kBE&<;kBE$%brbQbrbrbrbrbrbrbrbrbrbrbrbrbrbrbrbrbrbrbrbrb;bbbQQg#bn"},"Kathmandu":{"data":" #F8R7+&^+&^n"},"Novosibirsk":{"data":" $#Bo4=wm?.LAg@bgL3:_+wm?wm?ND)sg5wm?wm?wm?wm?.LAkBE&<;kBE&<;kBE&<;!!Go]9!!Go]9!!G&<;kBE&<;kBE&<;!!Go]9!!Go]9!!Go]9!!G&<;kBE&<;kBE&<;!!Go]9g(V%6,8#,%6#F#6#&#6#F#6#F#6#&#6#&#6#&#6#&#6#&#6#&#6#&#6#&#6#&#6#&#6#&#6#&#6#&#6#&#6#&#6#&#6#&#6#&#6#&#6#76#6#6#&#16#+&#R#&#36#&#6#n"}
,"Aqtobe":{"data":" `co4=wm?.LAg@bgL3:_+wm?wm?wm?wm?wm?wm?wm?.LAkBE&<;kBE&<;kBE&<;!!Go]9!!Go]9!!G&<;kBE&<;kBE&<;!!GH#r&#rbr&#r&#r&#r&#r&#r&#r&#r&#r&#r&#r&#r&#r&#r7rrrb2#rn"},"Kamchatka":{"data":" xNm4=wm?.LAg@bgL3:_+wm?wm?wm?wm?wm?wm?wm?.LAkBE&<;kBE&<;kBE&<;!!Go]9!!Go]9!!G&<;kBE&<;kBE&<;!!Go]9!!Go]9!!Go]9!!G&<;kBE&<;kBE{{bo]9y#*%:%*%w#*%:%*%:%*%:%*%:%*%:%*%:%*%:%*%:%*%:%*%:%*%:%*%:%*%:%*%:%*%:%*%:%*%:%*%:%*%w#*%7*%*%*%w#Z#*%/w#*%n"},"Istanbul":{"data":" 2#&q4=wm?.LAwm?wm?wm?wm?wm?wm?c2?.LAwm?wm?.LAkBE&<;kBE&<;kBE&<;!!Go]9!!Go]9!!G&<;kBE&<;kBE&<;!!Go]9!!Go]9!!G2_9!!G&<;kBE&<;kBE&<;!!G!g9ouEo]9!!G&<;kBE6D;Z:E&<;6]GZ!9H%AQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQ+A>%An"}
,"Nicosia":{"data":" Ico4=*o?{JA*o?gm?*o?gm?*o?gm?*o?gm?*o?gm?>LAgm?*o?gm?*o?>DE&<;xAQAQAQAQAQAQAQAQAQAQ+AnAy\'Au\'\u001e=n)1u5\u001e=n) "},"Pontianak":{"data":" #wL{9+6#+6#n"},"Qostanay":{"data":" ^co4=wm?.LAg@bgL3:_+wm?wm?wm?wm?wm?wm?wm?.LAkBE&<;kBE&<;kBE&<;!!Go]9!!Go]9!!G&<;kBE&<;kBE&<;D#r&#rbr&#r&#r&#r&#r&#r&#r&#r&#r&#r&#r&#r&#r&#7rrrb.#rn"},"Jerusalem":{"data":" (#&y0=geCs:;{BE*w;{BE*w;Z2E6L;Z2E!o9omE6L;2wA:*Ak2AsB?{:A_e={2Es:;F]GB2?Z*A>T=k2ANeABw={JA{:A>T=k*AB2C_T={JA&<?B*?oeA_mABw=:*Ag]?_e=B!C.TA&<?Ve?*o?o}E4%AQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQA+A*%Ay\'Aw\'O5y11w5\u001e=n1 "}
,"Barnaul":{"data":" $#Bo4=wm?.LAg@bgL3:_+wm?wm?wm?wm?wm?wm?c!+_,5.LAkBE&<;kBE&<;kBE&<;!!Go]9!!Go]9!!G&<;kBE&<;kBE&<;!!Go]9!!Go]9!!Go]9!!G&<;kBE&<;kBE&<;!!Go]9g(V%R>!#,%6#F#6#&#6#F#6#F#6#F#6#F#6#&#6#&#6#&#6#&#6#&#6#&#6#&#6#&#6#&#6#&#6#&#6#&#6#&#6#&#6#&#6#&#6#&#6#76#6#6#&#A6#+&#B#&#36#&#6#n"},"Kuala_Lumpur":{"data":" #{_]1+F#+F#n"},"Kolkata":{"data":" #8PJC+z+zn"},"Hanoi":{"data":" #<R}5+6#+6#n"},"Novokuznetsk":{"data":" xBo4=wm?.LAg@bgL3:_+wm?wm?wm?wm?wm?wm?wm?.LAkBE&<;kBE&<;kBE&<;!!Go]9!!Go]9!!G&<;kBE&<;kBE&<;!!Go]9!!Go]9!!Go]9!!G&<;kBE&<;kBE{{bo]9y#6#F#6#&#6#F#6#F#6#F#6#F#6#F#6#F#6#F#6#F#6#F#6#F#6#F#6#F#6#F#6#F#6#F#6#F#6#F#6#F#6#&#6#76#6#6#&#Z#6#/&#6#n"}
,"Kuching":{"data":" #HPPC+F#+F#n"},"Bahrain":{"data":" #c!g#+Q+Qn"},"Bangkok":{"data":" #D(DDO+6#+6#n"},"Srednekolymsk":{"data":" |_m4=wm?.LAg@bgL3:_+wm?wm?wm?wm?wm?wm?wm?.LAkBE&<;kBE&<;kBE&<;!!Go]9!!Go]9!!G&<;kBE&<;kBE&<;!!Go]9!!Go]9!!Go]9!!G&<;kBE&<;kBE&<;!!Go]9g(V%$%w#*%w#g#w#*%w#*%w#*%w#*%w#*%w#*%w#*%w#*%w#*%w#*%w#*%w#*%w#*%w#*%w#*%w#*%w#*%w#*%w#*%w#*%w#7w#w#w#g#c#w#/*%w#n"},"Karachi":{"data":" /]&0;FXDjgm?Va&)c2;.<=sJCCr&#r&#r&#r+r9rn"},"Aden":{"data":" #mqsc5+Q+Qn"},"Irkutsk":{"data":" |2o4=wm?.LAg@bgL3:_+wm?wm?wm?wm?wm?wm?wm?.LAkBE&<;kBE&<;kBE&<;!!Go]9!!Go]9!!G&<;kBE&<;kBE&<;!!Go]9!!Go]9!!Go]9!!G&<;kBE&<;kBE&<;!!Go]9g(V%$%F#V#F#6#F#V#F#V#F#V#F#V#F#V#F#V#F#V#F#V#F#V#F#V#F#V#F#V#F#V#F#V#F#V#F#V#F#V#F#V#F#V#F#V#F#7F#F#F#6#c#F#/V#F#n"}
,"Hovd":{"data":" hom4=*o?{JA*o?gm?*o?gm?*o?gm?*o?gm?*o?gm?>LAgm?*o?gm?*o?gm?:Zo#c2;*o?wu?*o?wu?:w?wu?*o?wu?*o?wu?:{*-Vu?Zw?Vu?X#6#F#6#F#6#F#6#F#6#F#6#F#6#F#6#F#6#F#6#F#6#F#6#F#6#F#6#F#6#F#6#F#6#F#6#+6#N#6#n"},"Baghdad":{"data":" lso4=wm?.LAJw?*w?*w?*w?wm?*w?wm?*w?wm?*w?*w?*w?wm?*w?wm?*w?wm?*w?*w?*w?wm?*w?wm?*w?wm?*w?*w?*w?wm?*w?wm?*w?wm?*w?a#QbQbQbQbQbQbQbQbQbQbQbQbQbQbQbQbQbQbQ+QV#Qn"},"Samarkand":{"data":" +co4=wm?.LAwm?wm?;r&#r&#r+r1rn"},"Thimphu":{"data":" #B.k9+&#+&#n"},"Dhaka":{"data":" \'m&0;k>Vt2,*73&#6#&#3&#&#&#n"}
,"Yerevan":{"data":" tso4=wm?.LAg@bwm?wm?wm?wm?wm?wm?wm?w}H#kBE&<;kBE&<;!!Go]9!!Go]9!!G&<;kBE&<;kBE&<;!!Go]9!!Go]9!!Go]9!!G&<;kBE&<;kBE&<;!!Go]9!!Gq#brbQbQbQbQbrbrbrbrbrbrbrbrbrbrbrbrbrbrbrb3bbbAQ+b:#bn"},"Muscat":{"data":" #HJgNO+b+bn"},"Dili":{"data":" %swT)k.TC/F#V#/F#V#n"},"Singapore":{"data":" #{_]1+F#+F#n"},"Damascus":{"data":" !#:N6=*o?gm?wu?wu?NTAc:?&<?wu?.DAwu?*o?wu?:w?wu?s2?.TAs2?.TA*o?wu?:w?wu?*o?wu?*o?wu?*o?wu?:w?wu?*o?wu?*o?B*?J!AcJGs*;.]END9>eE*g;w}C*g;w}Cs*;(%AQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQ+A{#Ay\'Aw\'\u001e5n 1w5\u001e5n  "}
,"Taipei":{"data":" #V}!/+F#+F#n"},"Macau":{"data":" #_m&/+F#+F#n"},"Choibalsan":{"data":" jNm4=*o?{JA*o?gm?*o?gm?*o?gm?*o?gm?*o?gm?>LAgm?*o?gm?*o?gm?:Zo#c2;*o?wu?*o?wu?:w?wu?*o?wu?*o?wu?JV(#:c!+Vu?Zw?Vu?]#V#g#V#g#V#g#V#g#V#g#V#g#V#g#V#g#V#g#V#g#V#g#V#g#V#g#V#g#V#g#V#F#V#F#V#F#+V#>#V#+F#1F#n"},"Amman":{"data":" (#*V6=J*EV];c2CJ*=R*CR2?*o?wu?*o?.L=s:C>L=sBC>L=c:C>L=c:C>L=BJS&$/*w?*w?wm?*w?*w?wm?*w?.TE&<;VeCJ!=wm?*w?>]Ec*;>]Es2;>]Ec*;>]Ec*;>]Ec*;>]Es2;Bo6#.$1>]E4%AQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQA+A*%Ay\'Aw)#5n 1s5\u001e5n  "}
,"Jayapura":{"data":" #uw>)+V#+V#n"},"Oral":{"data":" ^so4=wm?.LAwm?wm?gL3*2Mwm?wm?wm?wm?wm?wm?.LAkBE&<;kBE&<;kBE&<;!!Go]9!!Go]9!!G&<;kBE&<;kBE&<;D#brbrbrbrbrbrbrbrbrbrbrbrbrbrbr+b1b+r&#bn"},"Manila":{"data":" #B{:-+F#+F#n"},"Dubai":{"data":" #HJgNO+b+bn"},"Yakutsk":{"data":" |!o4=wm?.LAg@bgL3:_+wm?wm?wm?wm?wm?wm?wm?.LAkBE&<;kBE&<;kBE&<;!!Go]9!!Go]9!!G&<;kBE&<;kBE&<;!!Go]9!!Go]9!!Go]9!!G&<;kBE&<;kBE&<;!!Go]9g(V%$%V#g#V#F#V#g#V#g#V#g#V#g#V#g#V#g#V#g#V#g#V#g#V#g#V#g#V#g#V#g#V#g#V#g#V#g#V#g#V#g#V#g#V#g#V#7V#V#V#F#c#V#/g#V#n"}
,"Seoul":{"data":" #.(R;+V#+V#n"},"Qatar":{"data":" #c!g#+Q+Qn"},"Hebron":{"data":" B#&y0=geCs:;{BE*w;{BE*w;Z2E6L;Z2E!o9omE6L;>TE>L=c:C>L=c:C>L=.TEwu?:w?wu?*o?wu?*o?wu?*o?wu?:w?NT=R2C2o=6T?B*?_]AJw;R:Cwm;*wC:w;wuC*o7o_@;*<i-Ny#N,%FL?FT?Z2AF]?Z*AZBEFD;ZBEVD;>eEc!;>eEc!;>eER!;i%AQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQ+A_%Ay\'Aw5\u001e9n) w\'\u001e5n 1"},"Bishkek":{"data":" `Ro4=wm?.LARc[6eG>T=R*C>T=R*C>T=R*C>T=R*CR2?Ro?ZBE6<;ZBE6<;o}E!_9o}E!_9o}E6<;ZBE6<;ZBE6<;o}E!_9H#&#6#&#r&#r&#r&#r&#r&#r&#r&#r&#r&#r&#r&#r&#r&#r&#3&#&#&#6#rn"}
,"Tomsk":{"data":" $#Bo4=wm?.LAg@bgL3:_+wm?wm?wm?wm?wm?wm?wm?.LAkBE&<;kBE&<;kBE&<;!!Go]9!!Go]9!!G&<;_,%VT?&<;kBE&<;!!Go]9!!Go]9!!Go]9!!G&<;kBE&<;kBE&<;!!Go]9g(V%N$.#,%6#F#6#&#6#F#6#F#6#F#6#F#6#F#6#F#6#F#6#F#6#F#6#F#6#F#6#&#6#&#6#&#6#&#6#&#6#&#6#&#6#&#6#&#6#&#6#76#6#6#&#z6#+&#f&#36#&#6#n"},"Yekaterinburg":{"data":" |co4=wm?.LAg@bgL3:_+wm?wm?wm?wm?wm?wm?wm?.LAkBE&<;kBE&<;kBE&<;!!Go]9!!Go]9!!G&<;kBE&<;kBE&<;!!Go]9!!Go]9!!Go]9!!G&<;kBE&<;kBE&<;!!Go]9g(V%$%r&#rbr&#r&#r&#r&#r&#r&#r&#r&#r&#r&#r&#r&#r&#r&#r&#r&#r&#r&#r&#r&#r7rrrbc#r/&#rn"}
,"Colombo":{"data":" )eFJCcNJj{:;g(m-7z.#&#z7z.#&#zn"},"Khandyga":{"data":" $#!o4=wm?.LAg@bgL3:_+wm?wm?wm?wm?wm?wm?wm?.LAkBE&<;kBE&<;kBE&<;!!Go]9!!Go]9!!G&<;kBE&<;kBEVD+V4/!!Go]9!!Go]9!!Go]9!!G&<;kBE&<;kBE&<;!!Go]9>e=s_6%,%V#g#V#F#V#g#V#g#V#g#V#g#V#g#V#g#V#g#V#g#V#g#V#g#V#g#V#g#V#g#w#g#w#g#w#g#w#g#w#g#w#g#w#g#w#g#V#7V#V#V#F#*#V#+g#Yg#3w#g#V#n"},"Dushanbe":{"data":" )Ro4=wm?.LA:R^7&#6#&#r7&#&#&#rn"},"Famagusta":{"data":" 8#co4=*o?{JA*o?gm?*o?gm?*o?gm?*o?gm?*o?gm?>LAgm?*o?gm?*o?>DE&<;!!Go]9!!Go]9!!G&<;kBE&<;kBE&<;!!Go]9!!Go]9!!Go]9!!G&<;kBE&<;kBE&<;!!Go]9!!Go]9!!G&<;kBE&<;kBE&<;kBE&<;>$.#o]9!!GT%AQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQA+AJ%Ay\'Au\'\u001e=n)1u5\u001e=n) "}
,"Kuwait":{"data":" #mqsc5+Q+Qn"},"Pyongyang":{"data":" \'q<kt:J]Z#.Py#3V#N#V#3V#N#V#n"},"Magadan":{"data":" !#_m4=wm?.LAg@bgL3:_+wm?wm?wm?wm?wm?wm?wm?.LAkBE&<;kBE&<;kBE&<;!!Go]9!!Go]9!!G&<;kBE&<;kBE&<;!!Go]9!!Go]9!!Go]9!!G&<;kBE&<;kBE&<;!!Go]9g(V%Vq&#(%w#*%w#g#w#*%w#*%w#*%w#*%w#*%w#*%w#*%w#*%w#*%w#*%w#*%w#*%w#*%w#*%w#*%w#*%w#*%w#*%w#*%w#*%g#w#7w#w#w#g#c#w#3*%g#w#n"},"Tehran":{"data":" 4)ZNe/2oZ/k29*o?*!Awe?*!Awe?*!Awe?*!Awe?*!A*o?*!Awe?*!Awe?*!Awe?*!A*o?*!Awe?*!Awe?*!Awe?*!A*o?*!As{i#*!A*o?*!Awe?*!Awe?*!Awe?*!A*o?*!Awe?*!Awe?*!Awe?*!A*o?*!Awe?*!Awe?*!Awe?*!A*o?*!Awe?*!Awe?*!Awe?*!A*o?*!Awe?*!Awe?*!Awe?*!Awe?*!A*o?*!Awe?*!Awe?*!Awe?*!A*o?*!Awe?*!Awe?*!Awe?*!A*o?*!Awe?*!Awe?*!Awe?*!A*o?*!Awe?*!Awe?*!Awe?*!A*o?*!Awe?*!Awe?*!Awe?*!A*o?*!Awe?*!Awe?*!Awe?*!A*o?*!Awe?*!Awe?*!Awe?*!A*o?*!Awe?*!Awe?*!Awe?*!Awe?*!A*o?*!Awe?*!Awe?*!Awe?*!A*o?*!Awe?*!Awe?*!Awe?*!A*o?*!Awe?*!Awe?*!Awe?*!A*o?*!Awe?*!"
+"Awe?*!Awe?*!A*o?*!Awe?*!Awe?*!Awe?*!A*o?*!Awe?*!Awe?*!Awe?*!A*o?*!Awe?*!AL1YjYjYjYjYjYjYjYjYjYjYjYjYjYjYjYjYjYjYjYjYjYjYjYjYjYjYjYjYjYjYjYjYjYjYjYjYjYjYjYjYjYjYjYjYjYjYjYjYjYjYjYjYjYjYjYjYjYjYjYjYjYjYjYjYjYjYjYjYjYjYjYjYjYjYjYjYjYjYjYjYjYjYjYjYjYjYjYjYjYjYjYjYjYjYjYjY+YB1Yy\'Yw\'K n 1w3K n  "},"Sakhalin":{"data":" |_m4=wm?.LAg@bgL3:_+wm?wm?wm?wm?wm?wm?wm?.LAkBEg@b&<;kBE&<;!!Go]9!!Go]9!!G&<;kBE&<;kBE&<;!!Go]9!!Go]9!!Go]9!!G&<;kBE&<;kBE&<;!!Go]9g(V%R>!#$%w#*%w#g#w#*%w#*%w#*%w#*%w#*%w#g#w#g#w#g#w#g#w#g#w#g#w#g#w#g#w#g#w#g#w#g#w#g#w#g#w#g#w#g#w#7w#w#w#g#Mw#+g#.#g#3w#g#w#n"}
,"Urumqi":{"data":" #H_oeG+&#+&#n"},"Shanghai":{"data":" +k24={BEs:;{BEs:;;F#V#F#V#F#+F#1F#n"},"Atyrau":{"data":" [co4=wm?.LAg@bgL3:_+wm?wm?wm?wm?wm?wm?wm?.LAkBE&<;kBE&<;kBE{{bo]9!!Go]9!!G&<;kBE&<;kBE&<;@#r&#rbr&#r&#r&#r&#r&#r&#r&#rbrbrbrbrbr7rrrb^r+bEbn"},"Yangon":{"data":" #DNiC+.#+.#n"},"Almaty":{"data":" `Ro4=wm?.LAg@bgL3:_+wm?wm?wm?wm?wm?wm?wm?.LAkBE&<;kBE&<;kBE&<;!!Go]9!!Go]9!!G&<;kBE&<;kBE&<;!!GH#&#6#&#r&#6#&#6#&#6#&#6#&#6#&#6#&#6#&#6#&#6#&#6#&#6#&#6#&#6#&#7&#&#&#r2#&#n"},"Tbilisi":{"data":" [so4=wm?.LAg@bVm?gm?*o?gm?*o?F@bgm?>LAwD,#6<;ZBE6<;o}E!_9o}E!_9o}E6<;ZBE6<;ZBE6<;wT/sg5o]9@#brbQbQbQbrbrbrbrbrbrbrbrbrbQb3bbb9Q+bbb3QQbn"}
,"Anadyr":{"data":" xNm4=wm?.LAg@bgL3:_+wm?wm?wm?wm?wm?wm?wm?.LAkBE&<;kBE&<;kBE&<;!!Go]9!!Go]9!!G&<;kBE&<;kBE&<;!!Go]9!!Go]9!!Go]9!!G&<;kBE&<;kBE{{bo]9y#*%:%*%w#*%:%*%:%*%:%*%:%*%:%*%:%*%:%*%:%*%:%*%:%*%:%*%:%*%:%*%:%*%:%*%:%*%:%*%:%*%w#*%7*%*%*%w#Z#*%/w#*%n"},"Vientiane":{"data":" #D(DDO+6#+6#n"},"Krasnoyarsk":{"data":" |Bo4=wm?.LAg@bgL3:_+wm?wm?wm?wm?wm?wm?wm?.LAkBE&<;kBE&<;kBE&<;!!Go]9!!Go]9!!G&<;kBE&<;kBE&<;!!Go]9!!Go]9!!Go]9!!G&<;kBE&<;kBE&<;!!Go]9g(V%$%6#F#6#&#6#F#6#F#6#F#6#F#6#F#6#F#6#F#6#F#6#F#6#F#6#F#6#F#6#F#6#F#6#F#6#F#6#F#6#F#6#F#6#F#6#76#6#6#&#c#6#/F#6#n"}
,"Brunei":{"data":" #X8_U+F#+F#n"},"Omsk":{"data":" |Ro4=wm?.LAg@bgL3:_+wm?wm?wm?wm?wm?wm?wm?.LAkBE&<;kBE&<;kBE&<;!!Go]9!!Go]9!!G&<;kBE&<;kBE&<;!!Go]9!!Go]9!!Go]9!!G&<;kBE&<;kBE&<;!!Go]9g(V%$%&#6#&#r&#6#&#6#&#6#&#6#&#6#&#6#&#6#&#6#&#6#&#6#&#6#&#6#&#6#&#6#&#6#&#6#&#6#&#6#&#6#&#6#&#7&#&#&#rc#&#/6#&#n"},"Jakarta":{"data":" #Tw>)+6#+6#n"},"Ho_Chi_Minh":{"data":" #RJw\'+6#+6#n"},"Ust-Nera":{"data":" !#_m4=wm?.LAg@bgL3:_+wm?wm?wm?wm?wm?wm?wm?.LAkBE&<;kBE&<;kBE&<;!!Go]9!!Go]9!!G&<;kBE&<;kBE&<;!!Go]9!!Go]9!!Go]9!!G&<;kBE&<;kBE&<;!!Go]9>e=s_6%(%w#*%w#g#w#*%w#*%w#*%w#*%w#*%w#*%w#*%w#*%w#*%w#*%w#*%w#*%w#*%w#*%w#*%w#*%w#*%w#*%w#*%w#*%w#g#7w#w#w#g#c#w#3*%w#g#n"}
},"Etc":{"UTC":{"data":"#  "},"GMT+9":{"data":"#X#X#"},"GMT-10":{"data":"#g#g#"},"GMT-11":{"data":"#w#w#"},"GMT-7":{"data":"#6#6#"},"GMT+5":{"data":"#tt"},"GMT-8":{"data":"#F#F#"},"GMT+6":{"data":"#(#(#"},"GMT+12":{"data":"#,%,%"},"GMT-9":{"data":"#V#V#"},"GMT+7":{"data":"#8#8#"},"GMT+11":{"data":"#y#y#"},"GMT+8":{"data":"#H#H#"},"GMT+10":{"data":"#i#i#"},"GMT-3":{"data":"#QQ"},"GMT+1":{"data":"#33"},"GMT-4":{"data":"#bb"},"GMT+2":{"data":"#CC"},"GMT-5":{"data":"#rr"},"GMT+3":{"data":"#SS"},"GMT-6":{"data":
"#&#&#"},"GMT+4":{"data":"#dd"},"GMT-1":{"data":"#11"},"GMT-2":{"data":"#AA"},"GMT-12":{"data":"#*%*%"},"GMT-13":{"data":"#:%:%"},"GMT-14":{"data":"#J%J%"},"GMT":{"data":"#  "}},"Pacific":{"Easter":{"data":" <#Vi8=_]9>LAR2?2!Gs:;{BEs:;{BEs:;{BEs:;2!G_]92!G>T=R*Cs:;R*C{JA>LAs:;2!G_]92!G_]92!G_]92!Gs:;{BEs:;{BEs:;2!G_]92!G>T=R*Cs:;{BER2?>LAZBEco1w0MBg5NuIVD7::IVD7644#:V/V(Q:V/V(Q:V/NuI6<;]%t(#t(#t(#t(#t(#t(#t(#t(#t(#t(#t(#t(#t(#t(#t(#t(#t(#t(#t(#t(#t(#t(#t(#t(#t(#t(#t(#t(#t(#t+(#R%(#y\'(#u)%=y9 u3%=yA1"},"Fiji":
{"data":" CTi2LSZTu}n{*5*2MgL3wX!/{*5kBEFD7J:I*V/g(Q*V/{cQcw-BBS_<-l*%:%*%:%*%:%*%:%*%:%*%:%*%:%*%:%*%+*%b*%y\'*%w7#=y11w#;=y9 "},"Port_Moresby":{"data":" #,(&8h+g#+g#n"},"Kiritimati":{"data":" %ZyaV):H00//i#J%/i#J%n"},"Pohnpei":{"data":" #e>XC+w#+w#n"},"Chuuk":{"data":" #e>XC+g#+g#n"},"Kwajalein":{"data":" %yD1_(4C/,%*%/,%*%n"},"Kosrae":{"data":" %yD12g&K/*%w#/*%w#n"},"Auckland":{"data":" nw(8=:w;VeC:w;VeC:w;VeCNT=B*CNT=B*CNT=B*CNT=VeC:w;VeC:w;VeCNT=B*CNT=B*CNT=VeC:w;VeC:w;VeCNT=B*CNT=B*CNT=B*CNT=B*C.LAe#:%*%:%*%:%*%:%*%:%*%:%*%:%*%:%*%:%*%:%*%:%*%:%*%:%*%:%*%:%*%:%*%:%*%:%*%:%*%+*%Z#*%y\'*%s3\u001e=n11s)#=y1 "}
,"Efate":{"data":" 1>m4=gm?*o?gm?>LAk*5w(QwT/G*%w#*%w#*%w#*%w#+w#=w#n"},"Niue":{"data":" #_y<-+y#+y#n"},"Majuro":{"data":" #yD1+*%+*%n"},"Guadalcanal":{"data":" #HFLuU+w#+w#n"},"Honolulu":{"data":" #Hu8A+i#+i#n"},"Guam":{"data":" #c_P++g#+g#n"},"Chatham":{"data":" nw(8=:w;VeC:w;VeC:w;VeCNT=B*CNT=B*CNT=B*CNT=VeC:w;VeC:w;VeCNT=B*CNT=B*CNT=VeC:w;VeC:w;VeCNT=B*CNT=B*CNT=B*CNT=B*C.LAe#kT#VJ#kT#VJ#kT#VJ#kT#VJ#kT#VJ#kT#VJ#kT#VJ#kT#VJ#kT#VJ#kT#VJ#kT#VJ#kT#VJ#kT#VJ#kT#VJ#kT#VJ#kT#VJ#kT#VJ#kT#VJ#kT#VJ#+VJ#Z#VJ#y\'VJ#s3\u001e=n4/1s)#=y4/ "}
,"Midway":{"data":" #D@6eW+y#+y#n"},"Tahiti":{"data":" #i&HuU+i#+i#n"},"Pago_Pago":{"data":" #D@6eW+y#+y#n"},"Galapagos":{"data":" \'6<R768{)*V+3(#t(#3(#(#(#n"},"Funafuti":{"data":" #y.FHb+*%+*%n"},"Marquesas":{"data":" #@.HuU+a#+a#n"},"Rarotonga":{"data":" )&(<=*g5guI*g57a#i#a#i#+i#-i#n"},"Tarawa":{"data":" #q*FHb+*%+*%n"},"Saipan":{"data":" #c_P++g#+g#n"},"Gambier":{"data":" #0D8t+X#+X#n"},"Wallis":{"data":" #X2FHb+*%+*%n"},"Tongatapu":{"data":" 3y&oZ;c8_XWk2=J:Icw-.eQcw-&$]5J_+K:%J%:%J%:%J%:%J%:%+:%A:%n"}
,"Fakaofo":{"data":" %,P@HbgsT..#/y#:%/y#:%n"},"Wake":{"data":" #X&FHb+*%+*%n"},"Enderbury":{"data":" %6($/kc{5/y#:%/y#:%n"},"Pitcairn":{"data":" %Dm@Hb*y{c|/P#H#/P#H#n"},"Apia":{"data":" /LkF=*.gxNDAc2?J*1{_/wm?Cy#i#y#i#J%:%J%+y#-y#3:%:%:%y\':%w)#=yA w3\u001e=n91"},"Noumea":{"data":" \'NDX-{wi9*V/3w#*%w#3w#w#w#n"},"Palau":{"data":" #DmDHb+V#+V#n"},"Nauru":{"data":" #{oT-+*%+*%n"},"Bougainville":{"data":" %8PTCoiy(#/g#w#/g#w#n"},"Norfolk":{"data":" %2*e\'sV6[/!%w#/!%w#n"}},"Europe":{"Saratov":{"data":" z&q4=wm?.LAwm?6q&#wm?wm?wm?wm?wm?wm?.LAkBE&<;kBE&<;kBE&<;!!Go]9!!Go]9!!G&<;kBE&<;kBE&<;!!Go]9!!Go]9!!Go]9!!G&<;kBE&<;kBE&<;!!Go]9g(V%B2P#}#QbQbQbQbQbQbQbQbQbQbQbQbQbQbQbQbQbQbQbQbQbQb7QQQbZ#Q3bQbn"}
,"Belgrade":{"data":" ?Fq4=wm?.LAwm?wm?wm?wm?wm?wm?wm?wm?wm?wm?.LAkBEd1A1A1A1A1A1A1A1+1Y1y\'1u\'\u001e=n)1u5\u001e=n) "},"Gibraltar":{"data":" ?Fq4=wm?.LAwm?wm?wm?wm?wm?wm?wm?wm?wm?wm?.LAkBEd1A1A1A1A1A1A1A1+1Y1y\'1u\'\u001e=n)1u5\u001e=n) "},"Bucharest":{"data":" C6q4=wm?.LAVm?wm?wm?wm?wm?wm?wm?gm?*o?gm?>LAZBEg<;kBElAQAQAQAQAQAQAQAQA+AbAy\'Au\'\u001e=n)1u5\u001e=n) "},"Dublin":{"data":" ?N$<=o]9!!G&<;kBE&<;kBE&<;kBE&<;kBE&<;kBE:w;kBEd 1 1 1 1 1 1 1 +1Y1y\'1u\'\u001e=n) u5\u001e=n)3"},"Zaporozhye":{"data":" =&q4=wm?.LA6@b*o?gm?*o?gm?*o?gm?Zo?wm?.LAkBE`QbQAQAQAQAQAQA3QQQMAy\'Au\'\u001e=n)1u5\u001e=n) "}
,"Kiev":{"data":" =&q4=wm?.41gXrVm?gm?*o?gm?*o?gm?Zo?wm?.LAkBE`QbQAQAQAQAQAQA/QQQAy\'Au\'\u001e=n)1u5\u001e=n) "},"Zurich":{"data":" ?Fq4=wm?.LAwm?wm?wm?wm?wm?wm?wm?wm?wm?wm?.LAkBEd1A1A1A1A1A1A1A1+1Y1y\'1u\'\u001e=n)1u5\u001e=n) "},"Copenhagen":{"data":" ?Fq4=wm?.LAwm?wm?wm?wm?wm?wm?wm?wm?wm?wm?.LAkBEd1A1A1A1A1A1A1A1+1Y1y\'1u\'\u001e=n)1u5\u001e=n) "},"Rome":{"data":" ?Fq4=wm?.LAwm?wm?wm?wm?wm?wm?wm?wm?wm?wm?.LAkBEd1A1A1A1A1A1A1A1+1Y1y\'1u\'\u001e=n)1u5\u001e=n) "},"Zagreb":{"data":" ?Fq4=wm?.LAwm?wm?wm?wm?wm?wm?wm?wm?wm?wm?.LAkBEd1A1A1A1A1A1A1A1+1Y1y\'1u\'\u001e=n)1u5\u001e=n) "}
,"Monaco":{"data":" ?Fq4=wm?.LAwm?wm?wm?wm?wm?wm?wm?wm?wm?wm?.LAkBEd1A1A1A1A1A1A1A1+1Y1y\'1u\'\u001e=n)1u5\u001e=n) "},"Luxembourg":{"data":" ?Fq4=wm?.LAwm?wm?wm?wm?wm?wm?wm?wm?wm?wm?.LAkBEd1A1A1A1A1A1A1A1+1Y1y\'1u\'\u001e=n)1u5\u001e=n) "},"Jersey":{"data":" ?N$<=o]9!!G&<;kBE&<;kBE&<;kBE&<;kBE&<;kBE:w;kBEd 1 1 1 1 1 1 1 + Y y\' u\'\u001e=n)1u5\u001e=n) "},"Istanbul":{"data":" 2#&q4=wm?.LAwm?wm?wm?wm?wm?wm?c2?.LAwm?wm?.LAkBE&<;kBE&<;kBE&<;!!Go]9!!Go]9!!G&<;kBE&<;kBE&<;!!Go]9!!Go]9!!G2_9!!G&<;kBE&<;kBE&<;!!G!g9ouEo]9!!G&<;kBE6D;Z:E&<;6]GZ!9H%AQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQ+A>%An"}
,"Ulyanovsk":{"data":" !#&q4=wm?.LAg@bgL3:_+wm?wm?wm?wm?wm?wm?wm?.LAkBE&<;kBE&<;kBE&<;!!Go]9!!Go]9!!G&<;kBE&<;kBE&<;!!Go]9!!Go]9!!Go]9!!G&<;kBE&<;kBE&<;!!Go]9g(V%R>!#(%QbQAQbQbQbQbQbQbQbQbQbQbQbQbQbQbQbQbQbQbQbQbQb7QQQAc#Q3bQbn"},"Samara":{"data":" v&q4=wm?.LAF8fwu;wm?wm?wm?wm?wm?wm?wm?.LAkBE&<;kBE&<;kBE&<;!!Go]9!!Go]9!!G&<;kBE&<;kBE&<;!!Go]9!!Go]9!!Go]9!!G&<;kBE&<;kBE{{bo]9u#QbQbrbrbrbrbrbrbrbrbrbrbrbrbrbrbrbrbrbrbQb3QQQZ#b/Qbn"},"Sarajevo":{"data":" ?Fq4=wm?.LAwm?wm?wm?wm?wm?wm?wm?wm?wm?wm?.LAkBEd1A1A1A1A1A1A1A1+1Y1y\'1u\'\u001e=n)1u5\u001e=n) "}
,"Nicosia":{"data":" Ico4=*o?{JA*o?gm?*o?gm?*o?gm?*o?gm?*o?gm?>LAgm?*o?gm?*o?>DE&<;xAQAQAQAQAQAQAQAQAQAQ+AnAy\'Au\'\u001e=n)1u5\u001e=n) "},"Chisinau":{"data":" E&q4=wm?F,\'2_9wm?wm?Vm?gm?*o?gm?*o?gm?*o?gm?>LAZBEV<;kBEpQbQAQAQAQAQAQAQAQA/QQbAy\'Aw\'\u001e=n11w5\u001e=n9 "},"Vatican":{"data":" ?Fq4=wm?.LAwm?wm?wm?wm?wm?wm?wm?wm?wm?wm?.LAkBEd1A1A1A1A1A1A1A1+1Y1y\'1u\'\u001e=n)1u5\u001e=n) "},"Brussels":{"data":" ?Fq4=wm?.LAwm?wm?wm?wm?wm?wm?wm?wm?wm?wm?.LAkBEd1A1A1A1A1A1A1A1+1Y1y\'1u\'\u001e=n)1u5\u001e=n) "}
,"Oslo":{"data":" ?Fq4=wm?.LAwm?wm?wm?wm?wm?wm?wm?wm?wm?wm?.LAkBEd1A1A1A1A1A1A1A1+1Y1y\'1u\'\u001e=n)1u5\u001e=n) "},"Warsaw":{"data":" ?Fq4=wm?.LAwm?wm?wm?wm?wm?wm?wm?wm?wm?wm?.LAkBEd1A1A1A1A1A1A1A1+1Y1y\'1u\'\u001e=n)1u5\u001e=n) "},"Lisbon":{"data":" =Fq4=wm?.LAwm?wm?wm?V@bwm?wm?wm?wm?wm?_Ph&<;` 1 1 1A1A1A1 1+ 5 +151/  y\' u\'\u001e=n)1u5\u001e=n) "},"Berlin":{"data":" ?Fq4=wm?.LAwm?wm?wm?wm?wm?wm?wm?wm?wm?wm?.LAkBEd1A1A1A1A1A1A1A1+1Y1y\'1u\'\u001e=n)1u5\u001e=n) "},"Simferopol":{"data":" &#&q4={cQs*8#gm?*o?gm?*o?2N%_]9*o?gm?>LA>DEg@b&<;kBE&<;!!Go]9!!Go]9!!G&<;kBE&<;kBE&<;!!Go]9!!Go]9!!Go]9!!G&<;kBE&<;kBE&<;!!Go]9!!Go]9!!G&<;kBEs:;JBE0%QAQAQAQbQbQbQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAbQ+Q9A+Q5Q+AF#A/bQn"}
,"San_Marino":{"data":" ?Fq4=wm?.LAwm?wm?wm?wm?wm?wm?wm?wm?wm?wm?.LAkBEd1A1A1A1A1A1A1A1+1Y1y\'1u\'\u001e=n)1u5\u001e=n) "},"Podgorica":{"data":" ?Fq4=wm?.LAwm?wm?wm?wm?wm?wm?wm?wm?wm?wm?.LAkBEd1A1A1A1A1A1A1A1+1Y1y\'1u\'\u001e=n)1u5\u001e=n) "},"Athens":{"data":" ?Fq4=wm?.LAwm?wm?wm?wm?wm?wm?wm?wm?wm?wm?.LAkBEdAQAQAQAQAQAQAQA+AYAy\'Au\'\u001e=n)1u5\u001e=n) "},"Bratislava":{"data":" ?Fq4=wm?.LAwm?wm?wm?wm?wm?wm?wm?wm?wm?wm?.LAkBEd1A1A1A1A1A1A1A1+1Y1y\'1u\'\u001e=n)1u5\u001e=n) "},"Stockholm":{"data":" ?Fq4=wm?.LAwm?wm?wm?wm?wm?wm?wm?wm?wm?wm?.LAkBEd1A1A1A1A1A1A1A1+1Y1y\'1u\'\u001e=n)1u5\u001e=n) "}
,"Prague":{"data":" ?Fq4=wm?.LAwm?wm?wm?wm?wm?wm?wm?wm?wm?wm?.LAkBEd1A1A1A1A1A1A1A1+1Y1y\'1u\'\u001e=n)1u5\u001e=n) "},"Uzhgorod":{"data":" ;&q4={cQ:*Qs>bgm?*o?gm?*o?gm?Zo?wm?.LAkBE[Q1AQAQAQAQAQA/Q1MAy\'Au\'\u001e=n)1u5\u001e=n) "},"Budapest":{"data":" ?Fq4=wm?.LAwm?wm?wm?wm?wm?wm?wm?wm?wm?wm?.LAkBEd1A1A1A1A1A1A1A1+1Y1y\'1u\'\u001e=n)1u5\u001e=n) "},"Astrakhan":{"data":" z&q4=wm?.LAwm?6q&#wm?wm?wm?wm?wm?wm?.LAkBE&<;kBE&<;kBE&<;!!Go]9!!Go]9!!G&<;kBE&<;kBE&<;!!Go]9!!Go]9!!Go]9!!G&<;kBE&<;kBE&<;!!Go]9g(V%R>!#}#QbQbQbQbQbQbQbQbQbQbQbQbQbQbQbQbQbQbQbQbQbQb7QQQbZ#Q3bQbn"}
,"Madrid":{"data":" ?Fq4=wm?.LAwm?wm?wm?wm?wm?wm?wm?wm?wm?wm?.LAkBEd1A1A1A1A1A1A1A1+1Y1y\'1u\'\u001e=n)1u5\u001e=n) "},"Vaduz":{"data":" ?Fq4=wm?.LAwm?wm?wm?wm?wm?wm?wm?wm?wm?wm?.LAkBEd1A1A1A1A1A1A1A1+1Y1y\'1u\'\u001e=n)1u5\u001e=n) "},"London":{"data":" ?N$<=o]9!!G&<;kBE&<;kBE&<;kBE&<;kBE&<;kBE:w;kBEd 1 1 1 1 1 1 1 + Y y\' u\'\u001e=n)1u5\u001e=n) "},"Vilnius":{"data":" K6q4=wm?.LAwm?wm?wm?wm?wm?wm?wm?wm?wm?wm?.LAkBE&<;kBEg@b&<;c&s%kBE|AQAQAQAQAQAQAQAQA1AQA+AbA711AAy\'Au\'\u001e=n)1u5\u001e=n) "},"Isle_of_Man":
{"data":" ?N$<=o]9!!G&<;kBE&<;kBE&<;kBE&<;kBE&<;kBE:w;kBEd 1 1 1 1 1 1 1 + Y y\' u\'\u001e=n)1u5\u001e=n) "},"Sofia":{"data":" C6q4=wm?.LAVm?gm?*o?gm?*o?gm?*o?gm?*o?gm?>LAZBEg<;kBElAQAQAQAQAQAQAQAQA+AbAy\'Au\'\u001e=n)1u5\u001e=n) "},"Kirov":{"data":" x&q4=wm?.LAwm?6q&#wm?wm?wm?wm?wm?wm?.LAkBE&<;kBE&<;kBE&<;!!Go]9!!Go]9!!G&<;kBE&<;kBE&<;!!Go]9!!Go]9!!Go]9!!G&<;kBE&<;kBE&<;!!Go]9g(V%y#QbQbQbQbQbQbQbQbQbQbQbQbQbQbQbQbQbQbQbQbQbQ7QQQbZ#Q/bQn"},"Tallinn":{"data":" O6q4=wm?.LAwm?wm?wm?wm?wm?wm?wm?wm?wm?wm?.LAkBE&<;kBE&<;{BE&<;!!G_@e#kBE(#AQAQAQAQAQAQAQAQAQAQAQA+AzAy\'Au\'\u001e=n)1u5\u001e=n) "}
,"Moscow":{"data":" |&q4=wm?.LAg@bgL3:_+wm?wm?wm?wm?wm?wm?wm?.LAkBE&<;kBE&<;kBE&<;!!Go]9!!Go]9!!G&<;kBE&<;kBE&<;!!Go]9!!Go]9!!Go]9!!G&<;kBE&<;kBE&<;!!Go]9g(V%$%QbQAQbQbQbQbQbQbQbQbQbQbQbQbQbQbQbQbQbQbQbQbQ7QQQAc#Q/bQn"},"Malta":{"data":" ?Fq4=wm?.LAwm?wm?wm?wm?wm?wm?wm?wm?wm?wm?.LAkBEd1A1A1A1A1A1A1A1+1Y1y\'1u\'\u001e=n)1u5\u001e=n) "},"Busingen":{"data":" ?Fq4=wm?.LAwm?wm?wm?wm?wm?wm?wm?wm?wm?wm?.LAkBEd1A1A1A1A1A1A1A1+1Y1y\'1u\'\u001e=n)1u5\u001e=n) "},"Amsterdam":{"data":" ?Fq4=wm?.LAwm?wm?wm?wm?wm?wm?wm?wm?wm?wm?.LAkBEd1A1A1A1A1A1A1A1+1Y1y\'1u\'\u001e=n)1u5\u001e=n) "}
,"Andorra":{"data":" ?Fq4=wm?.LAwm?wm?wm?wm?wm?wm?wm?wm?wm?wm?.LAkBEd1A1A1A1A1A1A1A1+1Y1y\'1u\'\u001e=n)1u5\u001e=n) "},"Riga":{"data":" O6q4=wm?.LAwm?wm?wm?wm?wm?wm?wm?wm?wm?wm?.LAwm?*o?kBE&<;kBE&<;!!G.a|!!G(#AQAQAQAQAQAQAQAQAQAQAQA+AzAy\'Au\'\u001e=n)1u5\u001e=n) "},"Vienna":{"data":" ?Fq4=wm?.LAwm?wm?wm?wm?wm?wm?wm?wm?wm?wm?.LAkBEd1A1A1A1A1A1A1A1+1Y1y\'1u\'\u001e=n)1u5\u001e=n) "},"Helsinki":{"data":" ?Fq4=wm?.LAwm?wm?wm?wm?wm?wm?wm?wm?wm?wm?.LAkBEdAQAQAQAQAQAQAQA+AYAy\'Au\'\u001e=n)1u5\u001e=n) "},"Minsk":
{"data":" t&q4=:!J#wm?wm?wm?wm?wm?wm?wm?wm?.LAkBE&<;kBE&<;kBE&<;!!Go]9!!Go]9!!G&<;kBE&<;kBE&<;!!Go]9!!Go]9!!Go]9!!G&<;kBE&<;kBE&<;!!Go]9q#QAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQ+Qc#A+Qn"},"Kaliningrad":{"data":" |6q4=wm?.LAwm?wm?wm?wm?wm?wm?wm?wm?wm?wm?.LAkBE&<;kBE&<;kBE&<;!!Go]9!!Go]9!!G&<;kBE&<;kBE&<;!!Go]9!!Go]9!!Go]9!!G&<;kBE&<;kBE&<;!!Go]9g(V%$%AQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQA+Ao#A/QAn"},"Skopje":{"data":" ?Fq4=wm?.LAwm?wm?wm?wm?wm?wm?wm?wm?wm?wm?.LAkBEd1A1A1A1A1A1A1A1+1Y1y\'1u\'\u001e=n)1u5\u001e=n) "}
,"Mariehamn":{"data":" ?Fq4=wm?.LAwm?wm?wm?wm?wm?wm?wm?wm?wm?wm?.LAkBEdAQAQAQAQAQAQAQA+AYAy\'Au\'\u001e=n)1u5\u001e=n) "},"Ljubljana":{"data":" ?Fq4=wm?.LAwm?wm?wm?wm?wm?wm?wm?wm?wm?wm?.LAkBEd1A1A1A1A1A1A1A1+1Y1y\'1u\'\u001e=n)1u5\u001e=n) "},"Tirane":{"data":" ?Fq4=wm?.LAwm?wm?wm?wm?wm?wm?wm?wm?wm?wm?.LAkBEd1A1A1A1A1A1A1A1+1Y1y\'1u\'\u001e=n)1u5\u001e=n) "},"Guernsey":{"data":" ?N$<=o]9!!G&<;kBE&<;kBE&<;kBE&<;kBE&<;kBE:w;kBEd 1 1 1 1 1 1 1 + Y y\' u\'\u001e=n)1u5\u001e=n) "},"Volgograd":{"data":" z&q4=wm?.LAwm?6q&#wm?wm?wm?wm?wm?wm?.LAkBE&<;kBE&<;kBE&<;!!Go]9!!Go]9!!G&<;kBE&<;kBE&<;!!Go]9!!Go]9!!Go]9!!G&<;kBE&<;kBE&<;!!Go]9g(V%s&s%}#QbQbQbQbQbQbQbQbQbQbQbQbQbQbQbQbQbQbQbQbQbQb7QQQbZ#Q3bQbn"}
,"Paris":{"data":" ?Fq4=wm?.LAwm?wm?wm?wm?wm?wm?wm?wm?wm?wm?.LAkBEd1A1A1A1A1A1A1A1+1Y1y\'1u\'\u001e=n)1u5\u001e=n) "}},"America":{"Belem":{"data":" #*s$;+S+Sn"},"Guayaquil":{"data":" \'H{y>E>k]([*V+3tdt3tttn"},"Argentina/Buenos_Aires":{"data":" 9Fi8=J!9Z:I6D7Z:I6D7Z:IJ!9N<_5N<-2!G_]9WCSCSCSCSCSCS+SMSn"},"Costa_Rica":{"data":" +J2P/FL]/{B=&DCB_);(#t(#t(#+(#1(#n"},"Hermosillo":{"data":" /F#kguEFeCJw;FeCJw;FeCC8#(#8#(#8#(#8#+8#98#n"},"Punta_Arenas":{"data":" 0#Vi8=_]9>LAR2?2!Gs:;{BEs:;{BEs:;{BEs:;2!G_]92!G>T=R*Cs:;R*C{JA>LAs:;2!G_]92!G_]92!G_]92!Gs:;{BEs:;{BEs:;2!G_]92!G>T=R*Cs:;{BER2?>LAZBEco1w0MBg5NuIVD7::IVD7644#:V/D%SdSdSdSdSdSdSdSdSdSdSdSdSdSdSdSdSdSdSdSdSdSdSdSdSdSdS+d:%dn"}
,"Iqaluit":{"data":" jB&<=6<;ZBEJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEJw;FeCJw;FeCJw;FeCJw;kBE6<;F@bZBEJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEVD7NuI]#tdtdtdtdtdtdtdtdtdtd(#tdtdtdtdtdtdtdt+tnt/(#(#Yty\'tw\'1=y11w7#=y1 "},"Godthab":{"data":" ?Fq4=wm?.LAwm?wm?wm?wm?wm?wm?wm?wm?wm?wm?.LAkBEdSCSCSCSCSCSCSCS+SYSy\'Su\'\u001e=n)1u5\u001e=n) "},"El_Salvador":{"data":" #koN;+(#+(#n"},"Monterrey":{"data":" ?6$V;kg@+FeCJw;FeCJw;FeCJw;ZBE6<;ZBE>LA_]9>LAFeCd(#t(#t(#t(#t(#t(#t(#t(#+(#Y(#y\'(#w)#=y11w5\u001e=n1 "},"Sao_Paulo":{"data":" >#Fi8=k*5:2Mk*5&TKVL3NmM.41NmM!g5ouI!g5ouIk*5ouI6D7kBINT9F]G6D7F]G_]9F]G6D7ouI!g5NmMBo1&TKk*5o}M6<3ouI!g5NmMVL3Z:I!g5&TKk*5&TK!g5ouI!g5ouI6D7ouIk*5&TKk*5&TK!g5ouI!g5ouI!g5ouI!g5NmMBo1a%CSCSCSCSCSCSCSCSCSCSCSCSCSCSCSCSCSCSCSCSCSCSCSCSCSCSCSCSCSCS+SV%Sn"}
,"Bahia":{"data":" ^Fi8=k*5:2Mk*5&TKVL3NmM.41NmM!g5ouI!g5ouIk*5ouI6D7kBINT9F]G6D7F]G_]9F]G6D7ouI!g5NmMBo1cF6-6D7D#CSCSCSCSCSCSCSCSCSCSCSCSCSCSCS+S:#Sn"},"Indiana/Winamac":{"data":" +c{UwiwSVD7>uIBg5;t(#dtd/t(#-ty\'tw\'1=y11w7#=y1 "},"Grenada":{"data":" #aR$2W+d+dn"},"Grand_Turk":{"data":" 2#B&<=6<;ZBEJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEJw;FeCJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEVD7NuIBg5NuIBg5NuIVD7NuIBg5NuIBg5NuIBg5NuIBg5NuIBg5ZZZ%Bg5H%tdtdtdtdtdtdtdtdtdtdtdtdtdtdtdtdtdtdtdtdtdtdtdtdtdtdtd+t>%ty\'tw\'1=y11w7#=y1 "}
,"Montserrat":{"data":" #aR$2W+d+dn"},"Panama":{"data":" #qVL}Y+t+tn"},"Guadeloupe":{"data":" #aR$2W+d+dn"},"Guatemala":{"data":" +Rks3koD+>T=c_R5s:;;(#t(#t(#+(#1(#n"},"Guyana":{"data":" %JDTZ%Rus6//Sd/Sdn"},"Swift_Current":{"data":" #F0a#+(#+(#n"},"Puerto_Rico":{"data":" #qmLC+d+dn"},"Moncton":{"data":" l2&<=6<;ZBEJw;FeCJw;FeCgJ(3ZBE6<;ZBE6<;ZBEJw;FeCJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEBaH/NuIa#dSdSdSdSdSdSdSdSdSdSdSdSdSdSdSdSdSdSd+dV#dy\'dw\'1=y11w7#=y1 "},"Danmarkshavn":{"data":" =Fq4=wm?.LAwm?wm?wm?wm?wm?wm?wm?wm?wm?wm?o<1`SCSCSCSCSCSCS +SQS+ n"}
,"Nome":{"data":" l&(<=6<;ZBEJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEJw;FeCJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEVD7NuIa#X#H#X#H#X#H#X#H#X#H#X#H#X#H#X#H#X#H#X#H#X#H#X#H#X#H#X#H#X#H#X#H#X#H#X#H#X#+X#V#X#y\'X#w\'1=y11w7#=y1 "},"Porto_Velho":{"data":" #:s$;+d+dn"},"Cuiaba":{"data":" :#Vi8=k*5:2Mk*5&TKVL3NmM.41NmM!g5ouI!g5ouIk*5ouI6D7kBINT9F]G6D7F]G_]9F]G6D7ouI!g5NmMBo1.$6#6<3ouI!g5NmMVL3Z:I!g5&TKk*5&TK!g5ouI!g5ouI6D7ouIk*5&TKk*5&TK!g5ouI!g5ouI!g5ouI!g5NmMBo1X%SdSdSdSdSdSdSdSdSdSdSdSdSdSdSdSdSdSdSdSdSdSdSdSdSdSdSdSdSd+dN%dn"}
,"Pangnirtung":{"data":" h2&<=6<;ZBEJw;FeCJw;FeCJw;ZBE6<;ZBEg@bJw;FeCJw;FeCJw;FeCJw;kBE6<;F@bZBEJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEVD7NuIX#dSdSdSdSdSdtdtdtdtd(#tdtdtdtdtdtdtdt+dId+t=t/(#(#Yty\'tw\'1=y11w7#=y1 "},"Kralendijk":{"data":" #m_X\'+d+dn"},"Indiana/Vincennes":{"data":" +c{UwiwSVD7F@bNuI;t(#tdt;t(#(#tty\'tw\'1=y11w7#=y1 "},"Indiana/Indianapolis":{"data":" +c{UFePSZBEVD7NuI;tdtdt+t1ty\'tw\'1=y11w7#=y1 "},"Belize":{"data":" #w]J3+(#+(#n"},"Indiana/Marengo":{"data":" +Jg2)_yuKZBEVD7NuI;tdtdt+t1ty\'tw\'1=y11w7#=y1 "}
,"Anguilla":{"data":" #aR$2W+d+dn"},"Argentina/Ushuaia":{"data":" 9Fi8=J!9Z:I6D7Z:I6D7Z:IJ!9oP(1*6#*2R%N<-WCSCSCSCSdSCS+S=S+d-Sn"},"Santiago":{"data":" <#Vi8=_]9>LAR2?2!Gs:;{BEs:;{BEs:;{BEs:;2!G_]92!G>T=R*Cs:;R*C{JA>LAs:;2!G_]92!G_]92!G_]92!Gs:;{BEs:;{BEs:;2!G_]92!G>T=R*Cs:;{BER2?>LAZBEco1w0MBg5NuIVD7::IVD7644#:V/V(Q:V/V(Q:V/NuI6<;]%SdSdSdSdSdSdSdSdSdSdSdSdSdSdSdSdSdSdSdSdSdSdSdSdSdSdSdSdSdS+dR%dy\'du)%=y9 u3%=yA1"},"Argentina/Catamarca":{"data":" 9Fi8=J!9Z:I6D7k:I&D7Z:IJ!92c(1g$#*2R%N<-WCSCdCSCSdSCS7SSSd1S+d-Sn"}
,"Boise":{"data":" lc&<=6<;ZBEJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEJw;FeCJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEVD7NuIa#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#+8#V#8#y\'8#w\'1=y11w7#=y1 "},"Creston":{"data":" #@T0l+8#+8#n"},"Miquelon":{"data":" l!&<=6<;ZBEJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEJw;FeCJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEVD7NuIa#SCSCSCSCSCSCSCSCSCSCSCSCSCSCSCSCSCSCS+SV#Sy\'Sw\'1=y11w7#=y1 "},"Jamaica":{"data":" #>8{3+t+tn"},"Rankin_Inlet":
{"data":" hR&<=6<;ZBEJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEJw;FeCJw;FeCJw;FeCJw;ZBE6<;wD,#Jw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEVD7NuIX#(#t(#t(#t(#t(#t(#t(#t(#t(#t(#t(#t(#t(#t(#t(#t(#t(#t(#+(#N#(#y\'(#w\'1=y11w7#=y1 "},"Toronto":{"data":" lB&<=6<;ZBEJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEJw;FeCJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEVD7NuIa#tdtdtdtdtdtdtdtdtdtdtdtdtdtdtdtdtdtdt+tV#ty\'tw\'1=y11w7#=y1 "},"Eirunepe":{"data":" +Js$;!{()!g5FX>5oXq\';tdtdt;tttdtn"},"Dawson":{"data":" ls&<=6<;ZBEJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEJw;FeCJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEVD7NuIa#H#8#H#8#H#8#H#8#H#8#H#8#H#8#H#8#H#8#H#8#H#8#H#8#H#8#H#8#H#8#H#8#H#8#H#8#H#+H#V#H#y\'H#w\'1=y11w7#=y1 "}
,"Argentina/Mendoza":{"data":" 9Fi8=J!9geGwe7*!I*o7Z:I:!9Zs&1Bg5&<@%N<-WCdSdSdCSdSCS+S5d3SSd-Sn"},"Nassau":{"data":" lB&<=6<;ZBEJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEJw;FeCJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEVD7NuIa#tdtdtdtdtdtdtdtdtdtdtdtdtdtdtdtdtdtdt+tV#ty\'tw\'1=y11w7#=y1 "},"Vancouver":{"data":" ls&<=6<;ZBEJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEJw;FeCJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEVD7NuIa#H#8#H#8#H#8#H#8#H#8#H#8#H#8#H#8#H#8#H#8#H#8#H#8#H#8#H#8#H#8#H#8#H#8#H#8#H#+H#V#H#y\'H#w\'1=y11w7#=y1 "}
,"Noronha":{"data":" 16i8=k*5kkw-_]9F]Ge%g@b!g5G3C3C3C3C+C=Cn"},"Argentina/Cordoba":{"data":" 9Fi8=J!9Z:I6D7k:I&D7Z:IJ!9N<_5N<-2!G_]9WCSCdCSCSCSCS7SSSdASn"},"Argentina/La_Rioja":{"data":" ;Fi8=J!9Z:Is27:F+{B=6D7Z:IJ!92c(1g$#*2R%N<-[CSCdSCSCSdSCS7SSSd5S+d-Sn"},"Regina":{"data":" #y(}-+(#+(#n"},"St_Vincent":{"data":" #aR$2W+d+dn"},"Scoresbysund":{"data":" ?Fq4=wm?.LAwm?wm?wm?wm?wm?wm?wm?wm?wm?wm?.LAkBEd3 3 3 3 3 3 3 3+3Y3y\'3u\'\u001e=n)1u5\u001e=n) "},"Aruba":{"data":" #m_X\'+d+dn"},"North_Dakota/Center":{"data"
:" jc&<=6<;ZBEJw;FeCJw;F@bZBE6<;ZBE6<;ZBEJw;FeCJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEVD7NuI]#8#(#8#(#8#(#t(#t(#t(#t(#t(#t(#t(#t(#t(#t(#t(#t(#t(#t(#t(#+8#58#+(#:#(#y\'(#w\'1=y11w7#=y1 "},"Thule":{"data":" hDXm*S>NR(hgm?*o?gm?>LAZBE6<;ZBE6<;ZBEJw;FeCJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEVD7NuIX#dSdSdSdSdSdSdSdSdSdSdSdSdSdSdSdSdSd+dN#dy\'dw\'1=y11w7#=y1 "},"Argentina/San_Juan":{"data":" ;Fi8=J!9Z:Is27:F+{B=6D7Z:IJ!9!Z(1!>)!!L%N<-[CSCdSCSCSdSCS7SSSd5S+d-Sn"},"Rio_Branco":
{"data":" \'Js$;s__=oXq\'3tdt3tdtn"},"Los_Angeles":{"data":" ls&<=6<;ZBEJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEJw;FeCJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEVD7NuIa#H#8#H#8#H#8#H#8#H#8#H#8#H#8#H#8#H#8#H#8#H#8#H#8#H#8#H#8#H#8#H#8#H#8#H#8#H#+H#V#H#y\'H#w\'1=y11w7#=y1 "},"St_Thomas":{"data":" #aR$2W+d+dn"},"Cancun":{"data":" tguZ1*s:5FeCJw;FeCJw;k*5&y-Jw;ZBE6<;ZBE>LA_]9>LAFeCJw;FeCJw;ZBE6<;ZBE6<;ZBE6<;ZBEJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEJw;FeCJw;FeCN41q#tdtdtdt(#t(#t(#t(#t(#t(#t(#t(#t(#t(#t(#t(#t(#t(#t(#t(#t(#t+t5t+(#J#(#+tn"}
,"Maceio":{"data":" 5Fi8=k*5k>()k*5g}X%_]9F]GRURc`!g5OCSCSCSCSCS+SESn"},"Sitka":{"data":" l&(<=6<;ZBEJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEJw;FeCJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEVD7NuIa#X#H#X#H#X#H#X#H#X#H#X#H#X#H#X#H#X#H#X#H#X#H#X#H#X#H#X#H#X#H#X#H#X#H#X#H#X#+X#V#X#y\'X#w\'1=y11w7#=y1 "},"Denver":{"data":" lc&<=6<;ZBEJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEJw;FeCJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEVD7NuIa#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#+8#V#8#y\'8#w\'1=y11w7#=y1 "}
,"Cayman":{"data":" #qVL}Y+t+tn"},"Thunder_Bay":{"data":" lB&<=6<;ZBEJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEJw;FeCJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEVD7NuIa#tdtdtdtdtdtdtdtdtdtdtdtdtdtdtdtdtdtdt+tV#ty\'tw\'1=y11w7#=y1 "},"Nipigon":{"data":" lB&<=6<;ZBEJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEJw;FeCJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEVD7NuIa#tdtdtdtdtdtdtdtdtdtdtdtdtdtdtdtdtdtdt+tV#ty\'tw\'1=y11w7#=y1 "},"Havana":{"data":" zB.8=s2?2*Cs2?.LAc2?.LAc2?.LAc2?.LAc2?.LAwm?wm?wm?.LANT=kBE&<;!!G&<;kBE&<;kBE:w;VeC:w;VeC&<;Z&q#FD7J:IZ!96]GFD7J:IZ!9J:IZ!9_uIZ!9!!G2g5}#tdtdtdtdtdtdtdtdtdtdtdtdtdtdtdtdtdtdtdtdtdtd+ts#ty\'ts7#=y  s\'1=y 1"}
,"Campo_Grande":{"data":" >#Vi8=k*5:2Mk*5&TKVL3NmM.41NmM!g5ouI!g5ouIk*5ouI6D7kBINT9F]G6D7F]G_]9F]G6D7ouI!g5NmMBo1&TKk*5o}M6<3ouI!g5NmMVL3Z:I!g5&TKk*5&TK!g5ouI!g5ouI6D7ouIk*5&TKk*5&TK!g5ouI!g5ouI!g5ouI!g5NmMBo1a%SdSdSdSdSdSdSdSdSdSdSdSdSdSdSdSdSdSdSdSdSdSdSdSdSdSdSdSdSdSd+dV%dn"},"Cambridge_Bay":{"data":" hc&<=6<;ZBEJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEJw;FeCJw;FeCJw;FeCJw;F@bN}Esc`Jw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEVD7NuIX#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#(#t(#8#(#8#(#8#(#8#(#8#(#8#(#8#+8#n8#/(#(#U8#y\'8#w\'1=y11w7#=y1 "}
,"Fortaleza":{"data":" 1Fi8=k*5kkw-_]9F]GRURc`!g5GCSCSCSCS+S=Sn"},"Managua":{"data":" 3J:T/{.<1oPO_<12sq%oHy+R2?>DEc:;K(#t(#t(#t(#t(#7(#t(#t5(#n"},"Menominee":{"data":" lR&<=6<;ZBEJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEJw;FeCJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEVD7NuIa#(#t(#t(#t(#t(#t(#t(#t(#t(#t(#t(#t(#t(#t(#t(#t(#t(#t(#t(#+(#V#(#y\'(#w\'1=y11w7#=y1 "},"Halifax":{"data":" l2&<=6<;ZBEJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEJw;FeCJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEVD7NuIa#dSdSdSdSdSdSdSdSdSdSdSdSdSdSdSdSdSdSd+dV#dy\'dw\'1=y11w7#=y1 "}
,"Ojinaga":{"data":" ^u.4Wsw*!#FeCJw;FeCg@bJw;ZBE6<;ZBE>LA_]9>LAFeCJw;FeCJw;ZBE6<;ZBE6<;ZBE6<;ZBEJw;FeCJw;FeCk!9NuID#(#t(#t(#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#+(#1(#+8#&#8#y\'8#w\'1=y11w7#=y1 "},"Glace_Bay":{"data":" l2&<=6<;ZBEJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEJw;FeCJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEVD7NuIa#dSdSdSdSdSdSdSdSdSdSdSdSdSdSdSdSdSdSd+dV#dy\'dw\'1=y11w7#=y1 "},"Lower_Princes":{"data":" #m_X\'+d+dn"},"Argentina/Tucuman":{"data":" =Fi8=J!9Z:I6D7k:I&D7Z:IJ!92c(1RE>mR%N<-2!G_]9`CSCdCSCSdSCSCS7SSSd1S+d5Sn"}
,"Indiana/Petersburg":{"data":" +g<:+sJ8KVD7F@bNuI;t(#tdt;(#(#(#tty\'tw\'1=y11w7#=y1 "},"Yakutat":{"data":" l&(<=6<;ZBEJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEJw;FeCJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEVD7NuIa#X#H#X#H#X#H#X#H#X#H#X#H#X#H#X#H#X#H#X#H#X#H#X#H#X#H#X#H#X#H#X#H#X#H#X#H#X#+X#V#X#y\'X#w\'1=y11w7#=y1 "},"Detroit":{"data":" lB&<=6<;ZBEJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEJw;FeCJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEVD7NuIa#tdtdtdtdtdtdtdtdtdtdtdtdtdtdtdtdtdtdt+tV#ty\'tw\'1=y11w7#=y1 "}
,"Merida":{"data":" ?F,>3Z_X3FeCJw;FeCJw;FeCJw;ZBE6<;ZBE>LA_]9>LAFeCd(#t(#t(#t(#t(#t(#t(#t(#+(#Y(#y\'(#w)#=y11w5\u001e=n1 "},"Bahia_Banderas":{"data":" bF#kguEFeCJw;FeCJw;FeCJw;ZBE6<;ZBE>LA_]9>LAFeCJw;FeCJw;ZBE6<;ZBE6<;ZBE6<;ZBEJw;FeCJw;FeCJw;JBE6<;L#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#t(#t+8#6#8#3(#(#(#y\'(#w)#=y11w5\u001e=n1 "},"Matamoros":{"data":" `6$V;kg@+FeCJw;FeCJw;FeCJw;ZBE6<;ZBE>LA_]9>LAFeCJw;FeCJw;ZBE6<;ZBE6<;ZBE6<;ZBEJw;FeCJw;FeCk!9NuIH#(#t(#t(#t(#t(#t(#t(#t(#t(#t(#t(#t(#t(#t(#t(#t(#+(#>#(#y\'(#w\'1=y11w7#=y1 "}
,"Indiana/Vevay":{"data":" +R_$%V$(QZBEVD7NuI;tdtdt+t1ty\'tw\'1=y11w7#=y1 "},"St_Barthelemy":{"data":" #aR$2W+d+dn"},"Argentina/San_Luis":{"data":" ;Fi8=2w9!oEwe7J_/o,B3!>)!!L%w<#k_\'2!G_]92!G[CdSdSdSCSdSdS+S-d7SdSS1d+Sn"},"Indiana/Tell_City":{"data":" )c{UwiwSVD7NuI7t(#t(#+t-(#y\'(#w\'1=y11w7#=y1 "},"Boa_Vista":{"data":" +:s$;ZND1_]9F]Ge%;dSdSd+d1dn"},"Metlakatla":{"data":" 5o8{3N$&OVD7NuIBg5NuIBg5ssW{g\'NuIOH#X#H#X#H#X#H#X#H#X#+H#EX#y\'X#w\'1=y11w7#=y1 "},"Tortola":{"data":" #aR$2W+d+dn"},"Argentina/Jujuy":
{"data":" 5Fi8=J!9!wIJ!9geCN]9Z:IJ!9N<_5N<-OCdSdCSCSCS+S-d+S5Sn"},"North_Dakota/New_Salem":{"data":" jc&<=6<;ZBEJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEJw;FeCJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEJw;FeCJw;F@bZBE6<;ZBE6<;ZBEVD7NuI]#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#(#t(#t(#t(#t(#+8#2#8#+(#=(#y\'(#w\'1=y11w7#=y1 "},"Inuvik":{"data":" lc&<=6<;ZBEJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEJw;FeCJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEVD7NuIa#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#+8#V#8#y\'8#w\'1=y11w7#=y1 "}
,"Port_of_Spain":{"data":" #aR$2W+d+dn"},"Paramaribo":{"data":" #NmZ5+S+Sn"},"New_York":{"data":" lB&<=6<;ZBEJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEJw;FeCJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEVD7NuIa#tdtdtdtdtdtdtdtdtdtdtdtdtdtdtdtdtdtdt+tV#ty\'tw\'1=y11w7#=y1 "},"Manaus":{"data":" \':s$;!{()!g53dSd3dddn"},"Resolute":{"data":" fR&<=6<;ZBEJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEJw;FeCJw;FeCJw;FeCJw;ZBE6<;wD,#Jw;FeCJw;FeCJw;ZBE6<;ZBE6<;.$.#Bg5T#(#t(#t(#t(#t(#t(#t(#t(#t(#t(#t(#t(#t(#t(#t(#t(#t(#t+(#J#(#y\'(#w\'1=y11w7#=y1 "}
,"Curacao":{"data":" #m_X\'+d+dn"},"North_Dakota/Beulah":{"data":" zc&<=6<;ZBEJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEJw;FeCJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEVD7NuIBg5NuIBg5NuIVD7F@bNuI}#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#(#t(#+8#k#8#/(#(#y\'(#w\'1=y11w7#=y1 "},"Bogota":{"data":" \'m4*uS:,HDjRk[3tdt3tttn"},"Adak":{"data":" l6(<=6<;ZBEJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEJw;FeCJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEVD7NuIa#i#X#i#X#i#X#i#X#i#X#i#X#i#X#i#X#i#X#i#X#i#X#i#X#i#X#i#X#i#X#i#X#i#X#i#X#i#+i#V#i#y\'i#w\'1=y11w7#=y1 "}
,"Mazatlan":{"data":" ?F#kguEFeCJw;FeCJw;FeCJw;ZBE6<;ZBE>LA_]9>LAFeCd8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#+8#Y8#y\'8#w)#=y11w5\u001e=n1 "},"Caracas":{"data":" \'m_X\'!:w^NP$-3dld3dldn"},"St_Kitts":{"data":" #aR$2W+d+dn"},"Argentina/Salta":{"data":" 5Fi8=J!9Z:I6D7k:I&D7Z:IJ!9N<_5N<-OCSCdCSCSCS7SSSd9Sn"},"Mexico_City":{"data":" ?(i};&TubFeCJw;FeCJw;FeCJw;ZBE6<;ZBE>LA_]9>LAFeCd(#t(#t(#t(#t(#t(#t(#t(#+(#Y(#y\'(#w)#=y11w5\u001e=n1 "},"Edmonton":{"data":" lc&<=6<;ZBEJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEJw;FeCJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEVD7NuIa#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#+8#V#8#y\'8#w\'1=y11w7#=y1 "}
,"Kentucky/Louisville":{"data":" lB&<=6<;ZBEJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEJw;FeCJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEVD7NuIa#tdtdtdtdtdtdtdtdtdtdtdtdtdtdtdtdtdtdt+tV#ty\'tw\'1=y11w7#=y1 "},"Araguaina":{"data":" IFi8=k*5k>()k*5ouI6D7kBINT9F]G6D7F]G_]9F]G6D7ouI!g5NmMBo16({-k*5xCSCSCSCSCSCSCSCSCSCS+SnSn"},"Santo_Domingo":{"data":" \'{cL\'J6eEBN%3dtd3dtdn"},"Indiana/Knox":{"data":" /R&<=6<;ZBEJw;Z&47VD7NuIC(#t(#t(#t(#+(#9(#y\'(#w\'1=y11w7#=y1 "},"Whitehorse":{"data":" ls&<=6<;ZBEJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEJw;FeCJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEVD7NuIa#H#8#H#8#H#8#H#8#H#8#H#8#H#8#H#8#H#8#H#8#H#8#H#8#H#8#H#8#H#8#H#8#H#8#H#8#H#+H#V#H#y\'H#w\'1=y11w7#=y1 "}
,"Yellowknife":{"data":" lc&<=6<;ZBEJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEJw;FeCJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEVD7NuIa#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#(#8#+8#V#8#y\'8#w\'1=y11w7#=y1 "},"Kentucky/Monticello":{"data":" jR&<=6<;ZBEJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEJw;FeCJw;FeCJw;FeCJw;ZBE6<;F@bZBEJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEVD7NuI]#(#t(#t(#t(#t(#t(#t(#t(#t(#t(#t(#tdtdtdtdtdtdtdt+(#v(#+tUty\'tw\'1=y11w7#=y1 "},"Asuncion":{"data":" &#kF:=*w;:w?gm?.DA_]9B*GsB?J!A!o9!wEoe92!GR*;R2GJ!9F]G_]92!Gs:;{BEs:;{BEs:;2!Ggm?!_9o}E6<;ZBER*C_]92!G_]92!G_]9F]GJ!9F]GJ!9F]GR2?s2?{JAs2?{JA*o?>T=0%SdSdSdSdSdSdSdSdSdSdSdSdSdSdSdSdSdSdSdSdSdSdSdSd+d&%dy\'dw5#=y 1w\'M=y  "}
,"Santarem":{"data":" %:s$;s__=/dS/dSn"},"Antigua":{"data":" #aR$2W+d+dn"},"Winnipeg":{"data":" lc&<=&<;kBE:w;VeC:w;VeC:w;kBE&<;kBE&<;kBE:w;VeC:w;VeC:w;VeC:w;kBE&<;kBE&<;kBE:w;VeC:w;VeC:w;kBE&<;kBE&<;ZBEVD7NuIa#(#t(#t(#t(#t(#t(#t(#t(#t(#t(#t(#t(#t(#t(#t(#t(#t(#t(#t(#+(#V#(#y\'(#w\'1=y11w7#=y1 "},"Recife":{"data":" 1Fi8=k*5kkw-_]9F]Ge%g@b!g5GCSCSCSCS+S=Sn"},"Lima":{"data":" +2VH9FX{#gL/sca%gL/;tdtdt+t1tn"},"Phoenix":{"data":" #u*V#+8#+8#n"},"Martinique":{"data":" #k{e/+d+dn"},"St_Johns":{"data":" !#>.P>36<;ZBEJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEJw;FeCJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEVD7NuIBg5NuIBg5NuIVD7NuIBg5g:];Bg5(%[K[K[K[K[K[K[K[K[K[K[K[K[K[K[K[K[K[K[K[K[K[K[K+[{#[y\'[w\'1=y11w7#=y1 "}
,"Goose_Bay":{"data":" !#w2P>36<;ZBEJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEJw;FeCJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEVD7NuIBg5NuIBg5NuIVD7NuIBg5g:];Bg5(%dSdSdSdSdSdSdSdSdSdSdSdSdSdSdSdSdSdSdSdSdSdSdS+d{#dy\'dw\'1=y11w7#=y1 "},"Montevideo":{"data":" ^o$<=k*5ouI6D7ouI!g5Z:I6D7R>>1>LAR*Cs:;geC*w;{BEs:;{BEs:;{BE*w;geC*w;geC*w;{BEs:;{BEs:;{BEs:;D#CSCSCSCSCSCSCSCSCSCSCSCSCSCSCS+S:#Sn"},"St_Lucia":{"data":" #aR$2W+d+dn"},"Chicago":{"data":" lR&<=6<;ZBEJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEJw;FeCJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEVD7NuIa#(#t(#t(#t(#t(#t(#t(#t(#t(#t(#t(#t(#t(#t(#t(#t(#t(#t(#t(#+(#V#(#y\'(#w\'1=y11w7#=y1 "}
,"Chihuahua":{"data":" =u.4Wsw*!#FeCJw;FeCg@bJw;ZBE6<;ZBE>LA_]9>LAFeC`(#t(#t(#8#(#8#(#8#(#8#(#8#+(#1(#+8#A8#y\'8#w)#=y11w5\u001e=n1 "},"La_Paz":{"data":" #LmZgC+d+dn"},"Blanc-Sablon":{"data":" #qmLC+d+dn"},"Tijuana":{"data":" xs&<=6<;ZBEJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEJw;FeCJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBE6<;ZBEJw;FeCJw;FeCk!9NuIy#H#8#H#8#H#8#H#8#H#8#H#8#H#8#H#8#H#8#H#8#H#8#H#8#H#8#H#8#H#8#H#8#H#8#H#8#H#8#H#8#H#8#H#+H#o#H#y\'H#w\'1=y11w7#=y1 "},"Barbados":{"data":" #Zce/+d+dn"},"Anchorage":
{"data":" l&(<=6<;ZBEJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEJw;FeCJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEVD7NuIa#X#H#X#H#X#H#X#H#X#H#X#H#X#H#X#H#X#H#X#H#X#H#X#H#X#H#X#H#X#H#X#H#X#H#X#H#X#+X#V#X#y\'X#w\'1=y11w7#=y1 "},"Rainy_River":{"data":" lR&<=6<;ZBEJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEJw;FeCJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEVD7NuIa#(#t(#t(#t(#t(#t(#t(#t(#t(#t(#t(#t(#t(#t(#t(#t(#t(#t(#t(#+(#V#(#y\'(#w\'1=y11w7#=y1 "},"Port-au-Prince":{"data":" `B&<=&<;kBE:w;VeC:w;VeC:w;kBE&<;kBE&<;kBE:w;VeC:w;VeCJg@+ZBE6<;ZBE_0q\'NuIBg5NuIBg5NuIBg5NuIsFzNuIH#tdtdtdtdtdtdtdtdtdtdtdtdtdtdtdt+t>#ty\'tw\'1=y11w7#=y1 "}
,"Tegucigalpa":{"data":" \'koN;6$a964/3(#t(#3(#(#(#n"},"Cayenne":{"data":" #L_Z#+S+Sn"},"Marigot":{"data":" #aR$2W+d+dn"},"Juneau":{"data":" l&(<=6<;ZBEJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEJw;FeCJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEVD7NuIa#X#H#X#H#X#H#X#H#X#H#X#H#X#H#X#H#X#H#X#H#X#H#X#H#X#H#X#H#X#H#X#H#X#H#X#H#X#+X#V#X#y\'X#w\'1=y11w7#=y1 "},"Atikokan":{"data":" #HX(K+t+(#n"},"Argentina/Rio_Gallegos":{"data":" 9Fi8=J!9Z:I6D7Z:I6D7Z:IJ!92c(1g$#*2R%N<-WCSCSCSCSdSCS+S=S+d-Sn"},"Dawson_Creek":{"data"
:" #V0a#+8#+H#n"},"Dominica":{"data":" #aR$2W+d+dn"},"Fort_Nelson":{"data":" .#s&<=6<;ZBEJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEJw;FeCJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEVD7NuIBg5NuIBg5NuIVD7NuIBg5NuIBg5NuIBg5NuIBg5NuIBg5@%H#8#H#8#H#8#H#8#H#8#H#8#H#8#H#8#H#8#H#8#H#8#H#8#H#8#H#8#H#8#H#8#H#8#H#8#H#8#H#8#H#8#H#8#H#8#H#8#H#8#H#8#+H#2%H#+8#n"}},"Africa":{"Tunis":{"data":" 7&q4=B2Gc*;c_N5s*;6D?!!Go]9!!G&<;kBES1A1A1A1A1A1+1I1n"},"Maputo":{"data":" #L<aF`+A+An"},"Casablanca":{"data":" s\'2:R7:2.A*_/w(Q2_-ZBM.41ouIk*5:*QRg-_,%F$\'kBEJ_+2F%oD-&<;wL/BN%&$/&<;_<-BN%>41&<;J_+BN%gL3o]9!F)V,\'{*5o]9kg\'BN%:RYBN%&uWBN%:RYBN%&uWV,\'&uWBN%:RYBN%&uWV,\'&uWBN%:RYBN%&uWBN%:RYBN%&uWV,\'&uWBN%:RYBN%&uWV,\'&uWBN%&uWV,\'&uWBN%:RYBN%&uWV,\'&uWBN%:RYBN%&uWV,\'&uWBN%&uWV,\'&uWBN%:RYBN%&uWV,\'&uWBN%:RYBN%&uWV,\'&uWBN%&uWV,\'&uWBN%:RYBN%&uWV,\'&uWBN%:RYBN%&uWV,\'&uWBN%&uWV,\'&uWBN%:RYBN%&uWV,\'&uWBN%:RYBN%&uWBN%:RYBN%&uWV,\'&uWBN%:RYBN%&uWV,\'&uWBN%:RYBN%&uWBN%:RYBN%&uWV,\'&uWBN%:RYBN%&uWV,\'&uWBN%:RYBN%&uWBN%:RYBN%&uWV,\'&uWBN%:RY"
+"BN%&uWV,\'&uWBN%:RYBN%&uWBN%m/ 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1+ R# +1.-1n"},"Johannesburg":{"data":" #<_VE+A+An"},"Addis_Ababa":{"data":" #L42c)+Q+Qn"},"Lagos":{"data":" #q.{]O+1+1n"},"Accra":{"data":" #q:_a9+ + n"},"Nairobi":{"data":" #L42c)+Q+Qn"},"Brazzaville":{"data":" #q.{]O+1+1n"},"Lubumbashi":{"data":" #L<aF`+A+An"},"Banjul":{"data":" #y!_8W+ + n"},"Porto-Novo":
{"data":" #q.{]O+1+1n"},"Lusaka":{"data":" #L<aF`+A+An"},"Kigali":{"data":" #L<aF`+A+An"},"Ouagadougou":{"data":" #y!_8W+ + n"},"Freetown":{"data":" #y!_8W+ + n"},"Ndjamena":{"data":" #JJ@/+1+1n"},"Conakry":{"data":" #y!_8W+ + n"},"Niamey":{"data":" #q.{]O+1+1n"},"Maseru":{"data":" #<_VE+A+An"},"El_Aaiun":{"data":" s\'F]2-&mLK*_/w(Q2_-ZBM.41ouIk*5:*QRg-_,%F$\'kBEJ_+2F%oD-&<;wL/BN%&$/&<;_<-BN%>41&<;J_+BN%gL3o]9!F)V,\'{*5o]9kg\'BN%:RYBN%&uWBN%:RYBN%&uWV,\'&uWBN%:RYBN%&uWV,\'&uWBN%:RYBN%&uWBN%:RYBN%&uWV,\'&uWBN%:RYBN%&uWV,\'&uWBN%&uWV,\'&uWBN%:RYBN%&uWV,\'&uWBN%:RYBN%&uWV,\'&uWBN%&uWV,\'&uWBN%:RYBN%&uWV,\'&uWBN%:RYBN%&uWV,\'&uWBN%&uWV,\'&uWBN%:RYBN%&uWV,\'&uWBN%:RYBN%&uWV,\'&uWBN%&uWV,\'&uWBN%:RYBN%&uWV,\'&uWBN%:RYBN%&uWBN%:RYBN%&uWV,\'&uWBN%:RYBN%&uWV,\'&uWBN%:RYBN%&uWBN%:RYBN%&uWV,\'&uWBN%:RYBN%&uWV,\'&uWBN%:RYBN%&uWBN%:RYBN%&uWV,\'&uWBN%:RY"
+"BN%&uWV,\'&uWBN%:RYBN%&uWBN%m/ 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1+ R# +1.-1n"},"Sao_Tome":{"data":" \'D:ktoDB_#gHb3 1 3 1 n"},"Ceuta":{"data":" ?Fq4=wm?.LAwm?wm?wm?wm?wm?wm?wm?wm?wm?wm?.LAkBEd1A1A1A1A1A1A1A1+1Y1y\'1u\'\u001e=n)1u5\u001e=n) "},"Khartoum":{"data":" \':2D7g]85J&m93AQA3AQAn"},"Algiers":{"data":" #_L01+1+1n"},"Bujumbura":{"data":" #L<aF`+A+An"},"Bangui":
{"data":" #q.{]O+1+1n"},"Gaborone":{"data":" #L<aF`+A+An"},"Juba":{"data":" %:2D7g]85/AQ/AQn"},"Windhoek":{"data":" (#Xa<GgTejoL=ZBE6<;o}E!_9o}E6<;ZBE6<;ZBE6<;ZBE6<;ZBE6<;o}E!_9o}E6<;ZBE6<;ZBE6<;ZBE6<;ZBE6<;o}E6<;ZBE6<;ZBE6<;ZBE6<;ZBE6<;o}E!_9o}E6<;ZBE6<;ZBE6<;ZBE6<;4%A1A1A1A1A1A1A1A1A1A1A1A1A1A1A1A1A1A1A1A1A1A1A1A1A+A*%An"},"Dar_es_Salaam":{"data":" #L42c)+Q+Qn"},"Harare":{"data":" #L<aF`+A+An"},"Tripoli":{"data":" -*N6=omE6eX)k2AVH67gT7?1A1A1A/1A11n"},"Malabo":{"data":" #q.{]O+1+1n"},"Libreville":{"data":
" #q.{]O+1+1n"},"Abidjan":{"data":" #y!_8W+ + n"},"Luanda":{"data":" #q.{]O+1+1n"},"Lome":{"data":" #y!_8W+ + n"},"Nouakchott":{"data":" #y!_8W+ + n"},"Bissau":{"data":" #gaX\'+ + n"},"Asmara":{"data":" #L42c)+Q+Qn"},"Kinshasa":{"data":" #q.{]O+1+1n"},"Mogadishu":{"data":" #L42c)+Q+Qn"},"Djibouti":{"data":" #L42c)+Q+Qn"},"Douala":{"data":" #q.{]O+1+1n"},"Kampala":{"data":" #L42c)+Q+Qn"},"Dakar":{"data":" #y!_8W+ + n"},"Cairo":{"data":" (#JN6={RE&4;{RE&4;.]E&4;{RE&4;{RE&4;VuCs:;>TEs:;.LEs:;.LEs:;.LEs:;>TEs:;.LEs:;.LEs:;.LEs:;>TEs:;.LEs:;.LEB!;_eE&<7.TI_T5B2Kk*56]K&43_$%c^VuX%F,\'RN%_<)4%AQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQAQA+A*%An"}
,"Blantyre":{"data":" #L<aF`+A+An"},"Monrovia":{"data":" #sTTx+ + n"},"Mbabane":{"data":" #<_VE+A+An"},"Bamako":{"data":" #y!_8W+ + n"}},"Indian":{"Reunion":{"data":" #0!@RW+b+bn"},"Maldives":{"data":" #aJ2c)+r+rn"},"Christmas":{"data":" #yB44h+6#+6#n"},"Chagos":{"data":" %P2eX[_.4mt/r&#/r&#n"},"Antananarivo":{"data":" #L42c)+Q+Qn"},"Mahe":{"data":" #,XDs[+b+bn"},"Mayotte":{"data":" #L42c)+Q+Qn"},"Kerguelen":{"data":" #LoF=+r+rn"},"Mauritius":{"data":" \'Z{P3&mHEs:;3brb3bbbn"},"Comoro":{"data":" #L42c)+Q+Qn"}
,"Cocos":{"data":" #a*}sb+.#+.#n"}},"Antarctica":{"Macquarie":{"data":" tw}:=Z!96]G&<;.LAc2?.LAc2?.LAc2?.LAc2?.LAwm?.LAc2?.LAc2?.LAc2?.LAc2?&<;kBEB*Cc2?.LAc2?.LAc2?.LAc2?.LAwm?wm?c2?B*Cwm?wm?wm?wm?q#w#g#w#g#w#g#w#g#w#g#w#g#w#g#w#g#w#g#w#g#w#g#w#g#w#g#w#g#w#g#w#g#w#g#w#g#w#g#w#g#w#+g#g#g#n"},"Palmer":{"data":" 0#Vi8=_]9>LAR2?2!Gs:;{BEs:;{BEs:;{BEs:;2!G_]92!G>T=R*Cs:;R*C{JA>LAs:;2!G_]92!G_]92!G_]92!Gs:;{BEs:;{BEs:;2!G_]92!G>T=R*Cs:;{BER2?>LAZBEco1w0MBg5NuIVD7::IVD7644#:V/D%SdSdSdSdSdSdSdSdSdSdSdSdSdSdSdSdSdSdSdSdSdSdSdSdSdSdS+d:%dn"}
,"Troll":{"data":" \'ZeR4o12(]g23!!G3 A 3   y\' u\'\u001e=n)Au5\u001e=n) "},"Casey":{"data":" /P,dR:D[gm7Ny0#Jw3Jw@\':.|CF#w#F#w#F#w#F#CF#w#F#w#F#w#F#n"},"Vostok":{"data":" #(0a1+&#+&#n"},"Syowa":{"data":" #u:>3+Q+Qn"},"DumontDUrville":{"data":" #DBN3+g#+g#n"},"McMurdo":{"data":" nw(8=:w;VeC:w;VeC:w;VeCNT=B*CNT=B*CNT=B*CNT=VeC:w;VeC:w;VeCNT=B*CNT=B*CNT=VeC:w;VeC:w;VeCNT=B*CNT=B*CNT=B*CNT=B*C.LAe#:%*%:%*%:%*%:%*%:%*%:%*%:%*%:%*%:%*%:%*%:%*%:%*%:%*%:%*%:%*%:%*%:%*%:%*%:%*%+*%Z#*%y\'*%s3\u001e=n11s)#=y1 "},"Mawson":
{"data":" %uBJ7:R*r/&#r/&#rn"},"Davis":{"data":" +,>^>L>[ND9gD0#kw3;6#r6#r6#;6#r6#r6#n"},"Rothera":{"data":" #>4})+S+Sn"}},"Australia":{"Broken_Hill":{"data":" p!!<=2g5_uI2g5_uI2g5_uIFD7_uI2g5_uI2g5_uI&<;kBE&<;kBE&<;kBE&<;!!Go]9!!Go]9!!G&<;kBE&<;kBE&<;!!Go]9!!G&<;kBEo]9!!G:w;wm?i#o#_#o#_#o#_#o#_#o#_#o#_#o#_#o#_#o#_#o#_#o#_#o#_#o#_#o#_#o#_#o#_#o#_#o#_#o#_#o#+_#_#_#y\'_#s)#=y1 s5#=y11"},"Darwin":{"data":" #D&VE+_#+_#n"},"Brisbane":{"data":" -w}:=2g5_uI2g5_uI2g5?w#g#w#g#w#g#+g#5g#n"},"Currie":{"data":" nw}:=Z!96]G&<;.LAc2?.LAc2?.LAc2?.LAc2?.LAwm?.LAc2?.LAc2?.LAc2?.LAc2?&<;kBEB*Cc2?.LAc2?.LAc2?.LAc2?.LAwm?wm?c2?B*Cwm?e#w#g#w#g#w#g#w#g#w#g#w#g#w#g#w#g#w#g#w#g#w#g#w#g#w#g#w#g#w#g#w#g#w#g#w#g#w#g#+g#Z#g#y\'g#s5#=y11s)#=y1 "}
,"Lord_Howe":{"data":" po}:=*g5guI*g5guI*g5guI>D7guI*g5guI*g5guI{:;sBE{:;sBE{:;sBE{:;*!Gg]9.<;cBE*!G{:;sBE{:;sBE{:;*!Gg]9*!G{:;sBEg]9*!G2w;!o?i#w#o#w#o#w#o#w#o#w#o#w#o#w#o#w#o#w#o#w#o#w#o#w#o#w#o#w#o#w#o#w#o#w#o#w#o#w#o#w#+o#_#o#y\'o#w)#=y1 w5#=y1)"},"Lindeman":{"data":" 5w}:=2g5_uI2g5_uI2g5_uIFD7_uI2g5Ow#g#w#g#w#g#w#g#w#g#+g#Eg#n"},"Perth":{"data":" 3.]45_]R+Ro1_DZ5gL3!!G&<;kBE&<;KF#V#F#V#F#V#F#V#F#+F#AF#n"},"Adelaide":{"data":" p!!<=Z!96]G2g5_uIo]9!!GFD7_uIZ!96]Go]9!!G&<;kBE&<;kBE&<;kBE&<;!!Go]9!!Go]9!!G&<;kBE&<;kBE&<;!!Go]9!!G&<;kBEo]9!!G:w;wm?i#o#_#o#_#o#_#o#_#o#_#o#_#o#_#o#_#o#_#o#_#o#_#o#_#o#_#o#_#o#_#o#_#o#_#o#_#o#_#o#+_#_#_#y\'_#s)#=y1 s5#=y11"}
,"Eucla":{"data":" 3&w:_-_]R+Ro1_DZ5gL3!!G&<;kBE&<;Kc|w*#c|w*#c|w*#c|w*#c|+c|Ac|n"},"Sydney":{"data":" pw}:=2g5_uI2g5_uI2g5_uIFD7_uI2g5_uI2g5_uI&<;kBE&<;kBE&<;kBE&<;!!Go]9&<;kBE!!G&<;kBE&<;kBE&<;!!Go]9!!G&<;kBEo]9!!G:w;wm?i#w#g#w#g#w#g#w#g#w#g#w#g#w#g#w#g#w#g#w#g#w#g#w#g#w#g#w#g#w#g#w#g#w#g#w#g#w#g#w#+g#_#g#y\'g#s)#=y1 s5#=y11"},"Melbourne":{"data":" pw}:=Z!96]G2g5_uI2g5_uIFD7_uI2g5_uIo]9!!G&<;kBE&<;kBE&<;kBE&<;!!Go]9&<;kBE!!G&<;kBE&<;kBE&<;!!Go]9!!G&<;kBEo]9!!G:w;wm?i#w#g#w#g#w#g#w#g#w#g#w#g#w#g#w#g#w#g#w#g#w#g#w#g#w#g#w#g#w#g#w#g#w#g#w#g#w#g#w#+g#_#g#y\'g#s)#=y1 s5#=y11"}
,"Hobart":{"data":" nw}:=Z!96]G&<;.LAc2?.LAc2?.LAc2?.LAc2?.LAwm?.LAc2?.LAc2?.LAc2?.LAc2?&<;kBEB*Cc2?.LAc2?.LAc2?.LAc2?.LAwm?wm?c2?B*Cwm?e#w#g#w#g#w#g#w#g#w#g#w#g#w#g#w#g#w#g#w#g#w#g#w#g#w#g#w#g#w#g#w#g#w#g#w#g#w#g#+g#Z#g#y\'g#s5#=y11s)#=y1 "}},"Arctic":{"Longyearbyen":{"data":" ?Fq4=wm?.LAwm?wm?wm?wm?wm?wm?wm?wm?wm?wm?.LAkBEd1A1A1A1A1A1A1A1+1Y1y\'1u\'\u001e=n)1u5\u001e=n) "}},"Atlantic":{"St_Helena":{"data":" #y!_8W+ + n"},"Reykjavik":{"data":" #yP8#+ + n"},"Stanley":{"data":" xNX2=&]Gk!9&]G!_9o}E!_9o}E!_9o}E!_9o}E!_9&]G!_9o}E!_9o}E!_9o}E!_9o}E!_92!Gk!9::IVD7::Ik!9&]Gk!9&]Gk!9&]Gk!9&]Gk!9::Ik!9&]Gk!9&]Gk!9y#SdSdSdSdSdSdSdSdSdSdSdSdSdSdSdSdSdSdSdSdSdS+dk#d+Sn"}
,"Faroe":{"data":" ?Fq4=wm?.LAwm?wm?wm?wm?wm?wm?wm?wm?wm?wm?.LAkBEd 1 1 1 1 1 1 1 + Y y\' u\'\u001e=n)1u5\u001e=n) "},"Madeira":{"data":" ?Fq4=wm?.LAwm?wm?wm?wm?wm?wm?wm?wm?wm?wm?.LAkBEd 1 1 1 1 1 1 1 + Y y\' u\'\u001e=n)1u5\u001e=n) "},"Canary":{"data":" ?Fq4=wm?.LAwm?wm?wm?wm?wm?wm?wm?wm?wm?wm?.LAkBEd 1 1 1 1 1 1 1 + Y y\' u\'\u001e=n)1u5\u001e=n) "},"Bermuda":{"data":" l2&<=6<;ZBEJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEJw;FeCJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEJw;FeCJw;FeCJw;ZBE6<;ZBE6<;ZBEVD7NuIa#dSdSdSdSdSdSdSdSdSdSdSdSdSdSdSdSdSdSd+dV#dy\'dw\'1=y11w7#=y1 "}
,"Azores":{"data":" ;Vq4=wm?.LAwm?wm?wm?&q&#wm?wm?wm?wm?.LAkBE[3 3 3 3 3 3 3+3Q3y\'3u\'\u001e=n)1u5\u001e=n) "},"South_Georgia":{"data":" #0:(Xl+C+Cn"},"Cape_Verde":{"data":" #>L8)+3+3n"}}};}
function AD7(){var a=this;I8.call(a);a.sK=null;a.oC=0;a.Fo=0;}
function YN(a){var b=new AD7();A1n(b,a);return b;}
function A1n(a,b){a.HL=b.sZ;a.sK=b;a.oC=b.k9(CF());a.Fo= -a.oC;}
function ALx(a,b){return (a.oC+a.Fo|0)+a.sK.hb(b)|0;}
function IX(a){var b,$$je;a:{try{b=ADQ(a);break a;}catch($$e){$$je=Bh($$e);if($$je instanceof Nq){}else{throw $$e;}}b=null;}b=b;b.oC=a.oC;b.sK=a.sK;return b;}
function AP3(a){return IX(a);}
function PL(){C.call(this);this.sZ=null;}
function APo(a){return a.sZ;}
function EB(){PL.call(this);}
function BfZ(a){var b=new EB();Jx(b,a);return b;}
function Jx(a,b){var c;if(b!==null){a.sZ=b;return;}c=new BB;Bd(c,B(310));J(c);}
function GI(b){var c,d;c=Long_fromInt(HS(b));d=Long_div(c,Long_fromInt(2));if(Long_ne(Long_rem(c,Long_fromInt(2)),Long_ZERO))d=Long_neg(d);if(Long_ne(Long_and(d,Long_fromInt(1)),Long_ZERO))return Long_mul(Long_shr(d,1),Long_fromInt(60000));return Long_mul(Long_shr(d,1),Long_fromInt(1800000));}
function ABi(b,c){var d,e,f,g,h,i;d=0;while(true){e=c.data;if(d>=e.length)break;f=L9(b);if(f<0){g=f^(-1);while(true){h=g+(-1)|0;if(g<=0)break;i=d+1|0;e[d]=GI(b).lo;g=h;d=i;}}else{h=GI(b).lo;while(true){i=f+(-1)|0;if(f<=0)break;g=d+1|0;e[d]=h;f=i;d=g;}}}}
function ACX(){var a=this;EB.call(a);a.Cf=0;a.zI=0;}
function ANO(a,b,c){var d=new ACX();AT9(d,a,b,c);return d;}
function AT9(a,b,c,d){Jx(a,b);a.Cf=c;a.zI=d;}
function A0b(a,b){return a.Cf;}
function AVL(a,b){return a.zI;}
function AR8(a,b){return b;}
function PA(){FA.call(this);}
function VA(a,b){if(ACU(a,b))return 1;b=new DE;Z(b);J(b);}
function AEs(a){var b;if(!Ko(a))return AEi(a);b=new Jl;Z(b);J(b);}
function AOp(){var a=this;PA.call(a);a.dV=null;a.rN=null;a.IW=null;a.ho=0;a.rF=0;}
function A9k(a,b){var c=new AOp();AUT(c,a,b);return c;}
function AUT(a,b,c){if(b<1){c=new BB;Z(c);J(c);}a.dV=H(C,b);a.IW=c;if(c===null){c=new RL;c.Kq=a;}a.rN=c;}
function ACU(a,b){var c,d;if(b===null){b=new Eg;Z(b);J(b);}c=a.ho+1|0;if(a.dV.data.length<c){c=Df(c,(a.dV.data.length*3|0)/2|0);a.dV=Ea(a.dV,c);}c=a.ho;while(c>0){d=(c-1|0)/2|0;if(a.rN.iH(b,a.dV.data[d])>=0)break;a.dV.data[c]=a.dV.data[d];c=d;}a.dV.data[c]=b;a.ho=a.ho+1|0;a.rF=a.rF+1|0;return 1;}
function AEi(a){var b,c,d,e,f,g;if(!a.ho)return null;b=a.dV.data[0];c=0;a.rF=a.rF+1|0;d=a.dV.data[a.ho-1|0];a:{while(true){e=(c*2|0)+1|0;f=e+1|0;if(e>=a.ho)break;if(f<a.ho&&a.rN.iH(a.dV.data[e],a.dV.data[f])>=0)e=f;if(a.rN.iH(d,a.dV.data[e])<=0)break a;a.dV.data[c]=a.dV.data[e];c=e;}}a.dV.data[c]=d;g=a.dV.data;c=a.ho-1|0;a.ho=c;g[c]=null;return b;}
function A3g(a){return a.ho;}
function UL(){C.call(this);}
function AZq(a,b,c){return OQ(c,b);}
function AZc(a,b,c){return OQ(c,b);}
function Lv(){Fw.call(this);this.j_=Long_ZERO;}
var Bf0=null;function GN(b){var c;c=new Lv;c.j_=b;return c;}
function AOQ(a){return a.j_;}
function AOU(a){var b;b=a.j_;return b.lo^b.hi;}
function AVy(a,b){if(a===b)return 1;return b instanceof Lv&&Long_eq(b.j_,a.j_)?1:0;}
function OQ(a,b){return Long_compare(a.j_,b.j_);}
function A44(a,b){return OQ(a,b);}
function AJK(){Bf0=D($rt_longcls());}
function Mm(){EB.call(this);this.qX=null;}
function A4z(a,b){return a.qX.hb(b);}
function AZS(a,b){return a.qX.k9(b);}
function ATj(a,b){return a.qX.kq(b);}
function AJ9(){C.call(this);}
function LR(b){return Math.sin(b);}
function Qx(b){return Math.cos(b);}
function Lo(b){return Math.atan(b);}
function AZZ(b){return Math.log(b);}
function Iu(b){return Math.sqrt(b);}
function WQ(b){return Math.ceil(b);}
function AYX(b,c){return Math.pow(b,c);}
function GK(b,c){return Math.atan2(b,c);}
function Cc(){return AYB();}
function AYB(){return Math.random();}
function B4(b,c){if(b<c)c=b;return c;}
function Df(b,c){if(b>c)c=b;return c;}
function A2R(b,c){if(b<c)c=b;return c;}
function Nf(b,c){if(b>c)c=b;return c;}
function A6U(b,c){if(b<c)c=b;return c;}
function K9(b){if(b<=0)b= -b;return b;}
function I3(b){if(b<=0.0)b= -b;return b;}
function HK(b){if(b<=0.0)b= -b;return b;}
function AV5(b){var c;c=Bw(b,0.0);if(c>0)b=1.0;else if(c<0)b=(-1.0);return b;}
function TV(){var a=this;C.call(a);a.jh=null;a.nz=0;}
function Sg(){}
function T1(){C.call(this);}
function AEU(a,b){return BU();}
function RL(){C.call(this);this.Kq=null;}
function A8o(a,b,c){if(Jb(b,Dk))return b.kQ(c);return  -c.kQ(b);}
function AFu(){var a=this;C.call(a);a.ne=null;a.f_=0;}
function AFI(a){var b=new AFu();A1s(b,a);return b;}
function A1s(a,b){a.ne=b;}
function AJM(){C.call(this);}
function HS(b){var c,d,e,f,g;c=0;d=1;while(true){e=b.ne.data;f=b.f_;b.f_=f+1|0;g=ALL(e[f]);f=(g%2|0)!=1?0:1;c=c+K(d,g/2|0)|0;d=d*46|0;if(!f)break;}return c;}
function L9(b){var c,d;c=HS(b);d=c/2|0;if(c%2|0)d= -d;return d;}
function ALL(b){if(b<34)return b-32|0;if(b>=92)return (b-32|0)-2|0;return (b-32|0)-1|0;}
function V7(){var a=this;EB.call(a);a.mO=null;a.tp=null;a.sP=null;a.iy=null;}
function AI_(a,b){var c,d;c=a.mO;d=MF(c,b);if(d>=0)return a.tp.data[d];c=c.data;d=d^(-1);if(d<c.length){if(d<=0)return 0;return a.tp.data[d-1|0];}if(a.iy!==null)return AK3(a.iy,b);return a.tp.data[d-1|0];}
function AAw(a,b){var c,d;c=a.mO;d=MF(c,b);if(d>=0)return a.sP.data[d];c=c.data;d=d^(-1);if(d<c.length){if(d<=0)return 0;return a.sP.data[d-1|0];}if(a.iy!==null)return a.iy.lE;return a.sP.data[d-1|0];}
function AE1(a,b){var c,d,e,f;c=a.mO;d=MF(c,b);d=d<0?d^(-1):d+1|0;c=c.data;e=c.length;if(d<e)return c[d];if(a.iy===null)return b;f=c[e-1|0];if(Long_ge(b,f))f=b;return AN9(a.iy,f);}
function AKM(a,b){var c,d,e;c=a.mO;d=MF(c,b);if(d>=0){if(Long_le(b,new Long(0, 2147483648)))return b;return Long_sub(b,Long_fromInt(1));}c=c.data;d=d^(-1);if(d<c.length){if(d>0){e=c[d-1|0];if(Long_gt(e,new Long(0, 2147483648)))return Long_sub(e,Long_fromInt(1));}return b;}if(a.iy!==null){e=ADL(a.iy,b);if(Long_lt(e,b))return e;}e=c[d-1|0];if(Long_le(e,new Long(0, 2147483648)))return b;return Long_sub(e,Long_fromInt(1));}
function ADJ(a){var b,c,d,e,f,g;if(a.iy!==null)return 1;b=a.mO.data;c=b.length;if(c<=1)return 0;d=0.0;e=0;f=1;while(f<c){g=Long_sub(b[f],b[f-1|0]);if(Long_lt(g,new Long(3028857856, 14))){d=d+Long_toNumber(g);e=e+1|0;}f=f+1|0;}if(e>0&&d/e/8.64E7>=25.0)return 1;return 0;}
function Qw(){var a=this;EB.call(a);a.lE=0;a.tB=null;a.sR=null;}
function AK3(a,b){var c,d,e,f,g,h,$$je;c=a.lE;d=a.lE;e=a.tB;f=a.sR;a:{b:{try{g=Lw(e,b,d,Hj(f));}catch($$e){$$je=Bh($$e);if($$je instanceof BB){break b;}else if($$je instanceof G0){break b;}else{throw $$e;}}break a;}g=b;}c:{d:{try{h=Lw(f,b,d,Hj(e));}catch($$e){$$je=Bh($$e);if($$je instanceof BB){break d;}else if($$je instanceof G0){break d;}else{throw $$e;}}break c;}h=b;}if(Long_gt(g,h))f=e;return c+f.v5|0;}
function ARz(a,b){return a.lE;}
function AN9(a,b){var c,d,e,f,g,h,$$je;c=a.lE;d=a.tB;e=a.sR;a:{b:{try{c:{try{f=Lw(d,b,c,Hj(e));g=Long_compare(b,Long_ZERO);if(g<=0)break c;if(Long_ge(f,Long_ZERO))break c;f=b;break c;}catch($$e){$$je=Bh($$e);if($$je instanceof BB){break b;}else{throw $$e;}}}break a;}catch($$e){$$je=Bh($$e);if($$je instanceof G0){}else{throw $$e;}}}f=b;}d:{e:{try{f:{try{h=Lw(e,b,c,Hj(d));if(g<=0)break f;if(Long_ge(h,Long_ZERO))break f;h=b;break f;}catch($$e){$$je=Bh($$e);if($$je instanceof BB){break e;}else{throw $$e;}}}break d;}
catch($$e){$$je=Bh($$e);if($$je instanceof G0){}else{throw $$e;}}}h=b;}if(Long_gt(f,h))f=h;return f;}
function ADL(a,b){var c,d,e,f,g,h,i,$$je;c=Long_add(b,Long_fromInt(1));d=a.lE;e=a.tB;f=a.sR;a:{b:{try{c:{try{g=SB(e,c,d,Hj(f));h=Long_compare(c,Long_ZERO);if(h>=0)break c;if(Long_le(g,Long_ZERO))break c;g=c;break c;}catch($$e){$$je=Bh($$e);if($$je instanceof BB){break b;}else{throw $$e;}}}break a;}catch($$e){$$je=Bh($$e);if($$je instanceof G0){}else{throw $$e;}}}g=c;}d:{e:{try{f:{try{i=SB(f,c,d,Hj(e));if(h>=0)break f;if(Long_le(i,Long_ZERO))break f;i=c;break f;}catch($$e){$$je=Bh($$e);if($$je instanceof BB)
{break e;}else{throw $$e;}}}break d;}catch($$e){$$je=Bh($$e);if($$je instanceof G0){}else{throw $$e;}}}i=c;}if(Long_gt(g,i))i=g;return Long_sub(i,Long_fromInt(1));}
function AA$(b,c){var d,e,f;d=GI(c).lo;e=AF7(c);f=AF7(c);c=new Qw;Jx(c,b);c.lE=d;c.tB=e;c.sR=f;return c;}
function J$(){var a=this;EB.call(a);a.py=null;a.AM=null;}
var BfY=0;function A3C(a,b){return ZP(TI(a,b),b);}
function A23(a,b){return W7(TI(a,b),b);}
function AZU(a,b){return AKM(a.py,b);}
function TI(a,b){var c,d,e,f,g,h,i;c=b.hi;d=a.AM.data;e=c&BfY;f=d[e];if(!(f!==null&&f.mL.hi==c)){g=Long_and(b,new Long(0, 4294967295));f=A3X(a.py,g);b=Long_or(g,new Long(4294967295, 0));h=f;a:{while(true){i=AE1(a.py,g);if(Long_eq(i,g))break a;if(Long_gt(i,b))break;h.kM=A3X(a.py,i);h=h.kM;g=i;}}d[e]=f;}return f;}
function AJx(){BfY=511;}
function Qi(){var a=this;C.call(a);a.wB=null;a.v5=0;}
function Lw(a,b,c,d){return ACp(a.wB,b,c,d);}
function SB(a,b,c,d){return AHB(a.wB,b,c,d);}
function Hj(a){return a.v5;}
function AF7(b){var c,d,e,f,g,h,i,j,k,l,m,n;c=b.ne.data;d=b.f_;b.f_=d+1|0;e=c[d];d=HS(b);f=HS(b);g=L9(b);c=b.ne.data;h=b.f_;b.f_=h+1|0;i=c[h]!=121?0:1;j=Long_ZERO;k=Long_fromInt(1);while(true){c=b.ne.data;l=b.f_;b.f_=l+1|0;l=ALL(c[l]);m=(l%2|0)!=1?0:1;j=Long_add(j,Long_mul(k,Long_fromInt(l/2|0)));k=Long_mul(k,Long_fromInt(46));if(!m)break;}h=(Long_ne(Long_and(j,Long_fromInt(1)),Long_ZERO)?Long_mul(Long_shru(j,1),Long_fromInt(60000)):Long_mul(Long_shru(j,1),Long_fromInt(1800000))).lo;n=new Va;if(e!=117&&e!=119
&&e!=115){n=new BB;b=new S;V(b);b=G(b,B(311));Ce(b,e);Bd(n,R(b));J(n);}n.p8=e;n.pv=d;n.ty=f;n.tu=g;n.DE=i;n.ym=h;e=GI(b).lo;b=new Qi;b.wB=n;b.v5=e;return b;}
function Va(){var a=this;C.call(a);a.p8=0;a.pv=0;a.ty=0;a.tu=0;a.DE=0;a.ym=0;}
function ACp(a,b,c,d){var e,f;if(a.p8==119)c=c+d|0;else if(a.p8!=115)c=0;e=Long_fromInt(c);b=Long_add(b,e);f=AO0(AEx());Ob(f,b);CX(f,2,a.pv-1|0);CX(f,5,1);CX(f,11,0);CX(f,12,0);CX(f,13,0);CX(f,14,0);ED(f,14,a.ym);ML(a,f);if(a.tu){Kd(a,f);if(Long_le(Gy(f),b)){ED(f,1,1);CX(f,2,a.pv-1|0);ML(a,f);Kd(a,f);}}else if(Long_le(Gy(f),b)){ED(f,1,1);ML(a,f);}return Long_sub(Gy(f),e);}
function AHB(a,b,c,d){var e,f;if(a.p8==119)c=c+d|0;else if(a.p8!=115)c=0;e=Long_fromInt(c);b=Long_add(b,e);f=AO0(AEx());Ob(f,b);CX(f,2,a.pv-1|0);CX(f,5,1);CX(f,11,0);CX(f,12,0);CX(f,13,0);CX(f,14,0);ED(f,14,a.ym);MV(a,f);if(a.tu){Kd(a,f);if(Long_ge(Gy(f),b)){ED(f,1,(-1));CX(f,2,a.pv-1|0);MV(a,f);Kd(a,f);}}else if(Long_ge(Gy(f),b)){ED(f,1,(-1));MV(a,f);}return Long_sub(Gy(f),e);}
function ML(a,b){a:{if(Gs(b,2)==1&&Gs(b,5)==29)while(true){if(Fs(b,Gs(b,1)))break a;ED(b,1,1);}}Sa(a,b);}
function MV(a,b){a:{if(Gs(b,2)==1&&Gs(b,5)==29)while(true){if(Fs(b,Gs(b,1)))break a;ED(b,1,(-1));}}Sa(a,b);}
function Sa(a,b){if(a.ty>=0)CX(b,5,a.ty);else{CX(b,5,1);ED(b,2,1);ED(b,5,a.ty);}}
function Kd(a,b){var c,d;c=Gs(b,7);d=(a.tu==7?1:c+1|0)-c|0;if(d){if(!a.DE){if(d>0)d=d+(-7)|0;}else if(d<0)d=d+7|0;ED(b,5,d);}}
function ABz(){C.call(this);}
function OI(b){if(b>92)return ((b-32|0)-2|0)<<24>>24;if(b<=34)return (b-32|0)<<24>>24;return ((b-32|0)-1|0)<<24>>24;}
function AYS(b){var c,d,e,f,g,h,i,j,k,l,m,n,o;c=H(VO,16384);d=c.data;e=$rt_createByteArray(16384);f=e.data;g=0;h=0;i=0;j=0;while(j<Q(b)){k=OI(P(b,j));if(k==64){j=j+1|0;k=OI(P(b,j));l=0;m=1;n=0;while(n<3){j=j+1|0;l=l|K(m,OI(P(b,j)));m=m*64|0;n=n+1|0;}}else if(k<32)l=1;else{k=(k-32|0)<<24>>24;j=j+1|0;l=OI(P(b,j));}if(!k&&l>=128){if(g>0){m=h+1|0;d[h]=AR9(i,i+g|0,LT(e,g));h=m;}i=i+(g+l|0)|0;g=0;}else{o=g+l|0;if(o<f.length)n=h;else{n=h+1|0;d[h]=AR9(i,i+g|0,LT(e,g));i=i+o|0;g=0;}while(true){m=l+(-1)|0;if(l<=0)break;o
=g+1|0;f[g]=k;g=o;l=m;}h=n;}j=j+1|0;}return Ea(c,h);}
function Yq(){var a=this;C.call(a);a.mL=Long_ZERO;a.t9=null;a.kM=null;a.rE=0;a.sN=0;}
function A3X(a,b){var c=new Yq();A1u(c,a,b);return c;}
function A1u(a,b,c){a.rE=(-2147483648);a.sN=(-2147483648);a.mL=c;a.t9=b;}
function ZP(a,b){if(a.kM!==null&&Long_ge(b,a.kM.mL))return ZP(a.kM,b);if(a.rE==(-2147483648))a.rE=AI_(a.t9,a.mL);return a.rE;}
function W7(a,b){if(a.kM!==null&&Long_ge(b,a.kM.mL))return W7(a.kM,b);if(a.sN==(-2147483648))a.sN=AAw(a.t9,a.mL);return a.sN;}
function HO(){}
function MU(){var a=this;C.call(a);a.ik=null;a.fq=null;}
function A1l(a,b){var c,d;if(a===b)return 1;if(!Jb(b,HO))return 0;a:{b:{c:{c=b;if(a.ik===null){if(c.nU()!==null)break c;}else if(!a.ik.cI(c.nU()))break c;if(a.fq===null){if(c.mM()!==null)break c;break b;}if(a.fq.cI(c.mM()))break b;}d=0;break a;}d=1;}return d;}
function AS2(a){return a.ik;}
function AYs(a){return a.fq;}
function LA(){var a=this;MU.call(a);a.tf=0;a.gg=null;}
function A9J(a,b){var c=new LA();AE6(c,a,b);return c;}
function AE6(a,b,c){var d;d=null;a.ik=b;a.fq=d;a.tf=c;}
function Iq(){BE.call(this);}
function Z0(){var a=this;C.call(a);a.Kt=0;a.Ku=0;}
function RP(a){Lt(1);a.Kt=0;a.Ku=0;}
function ALp(a){Jz();JK();Lt(0);}
function M3(){var a=this;C.call(a);a.mN=0;a.mA=0;a.jC=0;a.kb=0;a.fx=0;a.ds=0;a.b4=0;a.k6=0;a.wb=null;a.y0=null;a.vJ=null;a.x_=null;a.uq=null;a.gw=null;a.g2=null;a.D1=null;a.g6=null;a.hi=null;a.ha=null;a.gq=null;a.AJ=0;a.dG=0;a.ce=0;}
var Bf1=null;var Bf2=null;function A_g(){var a=new M3();AL4(a);return a;}
function AL4(a){var b,c;a.mN=1;a.mA=1;a.jC=0;a.kb=0;a.fx=0;a.ds=1;a.b4=0;a.k6=0;a.wb=FN(B(312),17);a.y0=FN(B(313),30);a.vJ=FN(B(314),31);a.x_=FN(B(315),32);a.uq=FN(B(316),57);a.gw=FN(B(317),23);a.g2=FN(B(318),16);a.D1=FN(B(319),20);a.g6=FN(B(320),33);a.hi=FN(B(321),28);a.ha=FN(B(322),19);b=H(W0,11);c=b.data;c[0]=a.wb;c[1]=a.y0;c[2]=a.vJ;c[3]=a.x_;c[4]=a.uq;c[5]=a.g2;c[6]=a.gw;c[7]=a.D1;c[8]=a.g6;c[9]=a.hi;c[10]=a.ha;a.gq=b;a.AJ=9;a.dG=2;a.ce=0;AET(a);}
function KK(a,b){var c;c=new S;V(c);c=G(G(c,a.gq.data[b].rJ),B(19));b=a.gq.data[b].bt;Be();return R(G(c,b>=0&&b<256?BaH.data[b]:B(17)));}
function AAX(a,b,c){a.gq.data[b].bt=c;QB(a);}
function Fa(a,b,c){if(!b)a.mN=a.mN?0:1;if(b==1)a.mA=a.mA?0:1;if(b==2)a.jC=a.jC?0:1;if(b==3)a.kb=a.kb?0:1;if(b==4)a.fx=(a.fx+c|0)&3;if(b==5)a.ds=a.ds?0:1;if(b==6)a.b4=a.b4?0:1;if(b==7)a.k6=a.k6?0:1;if(b==8)a.dG=(a.dG+c|0)&3;QB(a);}
function XG(a,b){var c;a:{if(!b){c=new S;V(c);c=R(G(G(c,B(323)),!a.mN?B(324):B(325)));break a;}if(b==1){c=new S;V(c);c=R(G(G(c,B(326)),!a.mA?B(324):B(325)));break a;}if(b==2){c=new S;V(c);c=R(G(G(c,B(327)),!a.jC?B(324):B(325)));break a;}if(b==3){c=new S;V(c);c=R(G(G(c,B(328)),!a.kb?B(324):B(325)));break a;}if(b==4){c=new S;V(c);c=R(G(G(c,B(329)),Bf1.data[a.fx]));break a;}if(b==5){c=new S;V(c);c=R(G(G(c,B(330)),!a.ds?B(324):B(325)));break a;}if(b==6){c=new S;V(c);c=R(G(G(c,B(331)),!a.b4?B(324):B(325)));break a;}if
(b!=7){if(b!=8){c=B(9);break a;}c=new S;V(c);c=R(G(G(c,B(332)),Bf2.data[a.dG]));break a;}c=new S;V(c);c=R(G(G(c,B(333)),!a.k6?B(324):B(325)));}return c;}
function AET(a){var b,c,d,e;b=A_t;if(!b.b2.dC)return;if(Ex(b,B(334)))a.mN=Gb(b,B(334));if(Ex(b,B(335)))a.mA=Gb(b,B(335));if(Ex(b,B(336)))a.jC=Gb(b,B(336));if(Ex(b,B(337)))a.kb=Gb(b,B(337));if(Ex(b,B(338)))a.fx=DJ(b,B(338));if(Ex(b,B(339)))a.ds=Gb(b,B(339));if(Ex(b,B(340)))a.b4=Gb(b,B(340));if(Ex(b,B(341)))a.k6=Gb(b,B(334));if(Ex(b,B(342)))a.dG=DJ(b,B(342));c=0;while(c<a.gq.data.length){d=new S;V(d);e=R(G(G(d,B(343)),a.gq.data[c].rJ));if(Ex(b,e))a.gq.data[c].bt=Ck(b,e)&65535;c=c+1|0;}}
function QB(a){var b,c,d,e,$$je;b=A_t;Gc(b,B(334),a.mN);Gc(b,B(335),a.mA);Gc(b,B(336),a.jC);Gc(b,B(337),a.kb);E0(b,B(338),a.fx);Gc(b,B(339),a.ds);Gc(b,B(340),a.b4);Gc(b,B(341),a.k6);E0(b,B(342),a.dG);c=0;while(c<a.gq.data.length){d=new S;V(d);CH(b,R(G(G(d,B(343)),a.gq.data[c].rJ)),a.gq.data[c].bt<<16>>16);c=c+1|0;}a:{try{P3();break a;}catch($$e){$$je=Bh($$e);if($$je instanceof BA){e=$$je;}else{throw $$e;}}DA(e);}}
function ANT(){var b,c;b=H(BC,4);c=b.data;c[0]=B(344);c[1]=B(345);c[2]=B(346);c[3]=B(347);Bf1=b;b=H(BC,4);c=b.data;c[0]=B(348);c[1]=B(349);c[2]=B(350);c[3]=B(351);Bf2=b;}
function Sy(){var a=this;C.call(a);a.pN=null;a.Ck=null;a.lP=null;a.pA=null;a.xo=null;a.r2=0;a.tw=0;}
function AB2(a,b){var c,d,e,$$je,$p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=Co(a.pN,b);if(c!==null)return c.fz;try{AFH(a.lP);P9(a.lP);d=M2(a.lP,0);if(EG(b,B(352))){a.r2=1;e=I9(DO(b,7));$p=1;continue _;}if(!EG(b,B(353))){e=I9(b);$p=2;continue _;}a.tw=1;e=I9(DO(b,6));$p=3;continue _;}catch($$e){$$je=Bh($$e);if($$je instanceof BA){}else{throw $$e;}}b=new BT;Bd(b,B(354));J(b);case 1:a:{try{$z=ADO(a,e);if(I()){break _;}c=$z;Ke(a,c,d);a.r2
=0;M8(a.pN,b,C0(d));}catch($$e){$$je=Bh($$e);if($$je instanceof BA){break a;}else{throw $$e;}}return d;}b=new BT;Bd(b,B(354));J(b);case 2:a:{try{$z=ADO(a,e);if(I()){break _;}c=$z;Ke(a,c,d);M8(a.pN,b,C0(d));}catch($$e){$$je=Bh($$e);if($$je instanceof BA){break a;}else{throw $$e;}}return d;}b=new BT;Bd(b,B(354));J(b);case 3:a:{try{$z=ADO(a,e);if(I()){break _;}c=$z;Ke(a,c,d);a.tw=0;M8(a.pN,b,C0(d));}catch($$e){$$je=Bh($$e);if($$je instanceof BA){break a;}else{throw $$e;}}return d;}b=new BT;Bd(b,B(354));J(b);default:
F2();}}Dh().s(a,b,c,d,e,$p);}
function AJS(a,b){var c;DM(a.lP);P9(a.lP);c=M2(a.lP,0);Ke(a,b,c);BI(a.Ck,C0(c),b);return c;}
function Ke(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;EO(c);FX(3553,10241,9728);FX(3553,10240,9728);if(a.tw){FX(3553,10241,9729);FX(3553,10240,9729);}if(!a.r2){FX(3553,10242,10497);FX(3553,10243,10497);}else{FX(3553,10242,10496);FX(3553,10243,10496);}d=b.us;e=b.Ap;f=b.uY;g=$rt_createByteArray(K(d,e)*4|0);h=g.data;i=0;while(true){j=f.data;if(i>=j.length)break;k=j[i]>>24&255;l=j[i]>>16&255;m=j[i]>>8&255;n=j[i]>>0&255;if(a.xo!==null&&a.xo.b4){o=l*30|0;l=((o+(m*59|0)|0)+(n*11|0)|0)/100|0;m=(o+(m*70|0)|0)/100|0;n
=(o+(n*70|0)|0)/100|0;}c=i*4|0;h[c+0|0]=l<<24>>24;h[c+1|0]=m<<24>>24;h[c+2|0]=n<<24>>24;h[c+3|0]=k<<24>>24;i=i+1|0;}DM(a.pA);W9(a.pA,g);b=a.pA;Dz(b,0);H0(b,h.length);b=a.pA;Be();if(b===null){b=A_Q;p=null;b.texImage2D(3553,0,32856,d,e,0,6408,5121,p);}else{k=BV(b);p=Bac;q=0;while(q<k){r=(AJE(b)&255)<<16>>16;p[q]=r;q=q+1|0;}p=new Uint8Array(Bac.buffer,0,k);A_Q.texImage2D(3553,0,32856,d,e,0,6408,5121,p);}}
function AJo(a,b){var c,$p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AB2(a,b);if(I()){break _;}c=$z;return c;default:F2();}}Dh().s(a,b,c,$p);}
function ADO(a,b){var c,$p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:$z=AC5(b);if(I()){break _;}c=$z;return c;default:F2();}}Dh().s(a,b,c,$p);}
function EO(b){IQ(Bb_,1);if(b<0){IQ(Bb_,0);return;}Cj(3553,b);IQ(Bb_,0);}
function SK(){var a=this;C.call(a);a.sc=null;a.yP=0;a.sj=0;}
function Bf3(a,b,c){var d=new SK();AIq(d,a,b,c);return d;}
function AIq(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,$p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();bd=$T.l();bc=$T.l();bb=$T.l();ba=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.sc=$rt_createIntArray(256);a.yP=0;e=I9(c);$p=1;case 1:$z=AC5(e);if(I()){break _;}f
=$z;g=f.us;e=f.uY;h=0;while(h<256){i=h%16|0;j=h/16|0;k=7;i=i*8|0;l=j*8|0;a:{while(k>=0){m=i+k|0;n=1;o=0;while(o<8&&n){if((e.data[m+K(l+o|0,g)|0]&255)>0)n=0;o=o+1|0;}if(!n)break a;k=k+(-1)|0;}}if(h==32)k=2;a.sc.data[h]=k+2|0;h=h+1|0;}a.yP=AJS(d,f);a.sj=AOv(288);BD();p=Bc$;q=0;while(q<256){EX(a.sj+q|0,4864);Bx(p);r=(q%16|0)*8|0;s=(q/16|0)*8|0;t=r;u=t/128.0+0.0;v=s;w=(v+7.989999771118164)/128.0+0.0;F(p,0.0,7.989999771118164,0.0,u,w);x=(t+7.989999771118164)/128.0+0.0;F(p,7.989999771118164,7.989999771118164,0.0,
x,w);y=v/128.0+0.0;F(p,7.989999771118164,0.0,0.0,x,y);F(p,0.0,0.0,0.0,u,y);Bt(p);E5();q=q+1|0;}l=0;while(l<32){z=(l>>3&1)*85|0;ba=((l>>2&1)*170|0)+z|0;bb=((l>>1&1)*170|0)+z|0;bc=((l>>0&1)*170|0)+z|0;if(l==6)ba=ba+85|0;bd=l<16?0:1;if(b.b4){g=ba*30|0;ba=((g+(bb*59|0)|0)+(bc*11|0)|0)/100|0;bb=(g+(bb*70|0)|0)/100|0;bc=(g+(bc*70|0)|0)/100|0;}if(bd){ba=ba/4|0;bb=bb/4|0;bc=bc/4|0;}EX((a.sj+256|0)+l|0,4864);Mg(ba/255.0,bb/255.0,bc/255.0);E5();l=l+1|0;}return;default:F2();}}Dh().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,
s,t,u,v,w,x,y,z,ba,bb,bc,bd,$p);}
function CG(a,b,c,d,e){YX(a,b,c+1|0,d+1|0,e,1);F9(a,b,c,d,e);}
function F9(a,b,c,d,e){YX(a,b,c,d,e,0);}
function YX(a,b,c,d,e,f){var g,h,i,j,k,l,m;if(b===null)return;if(f)e=((e&16579836)>>2)+(e&(-16777216))|0;Cj(3553,a.yP);g=(e>>16&255)/255.0;h=(e>>8&255)/255.0;i=(e&255)/255.0;j=(e>>24&255)/255.0;if(j===0.0)j=1.0;BJ(g,h,i,j);Ca();Bj(c,d,0.0);k=0;while(k<Q(b)){c=k;while(true){d=Q(b);k=c+1|0;if(d<=k)break;if(P(b,c)!=167)break;l=Fx(B(355),P(Oh(b),k));c=c+2|0;}if(c<Q(b)){m=P4(P(b,c));if(m>=0){FF((a.sj+m|0)+32|0);Bj(a.sc.data[m+32|0],0.0,0.0);}}}BR();}
function Ei(a,b){var c,d,e;if(b===null)return 0;c=0;d=0;while(d<Q(b)){if(P(b,d)==167)d=d+1|0;else{e=P4(P(b,d));if(e>=0)c=c+a.sc.data[e+32|0]|0;}d=d+1|0;}return c;}
function Tg(){}
function ANP(){var a=this;C.call(a);a.K=null;a.hW=null;a.kA=0;a.jZ=null;a.ij=null;a.dT=null;a.fN=null;a.fg=0;a.fj=0;a.ny=0;a.BB=0;a.ge=null;a.Bb=null;a.sL=null;a.oA=0;a.r6=0;a.uJ=0;a.ld=0;a.k7=0;a.l7=0;a.we=null;a.u1=null;a.rs=0;a.rY=0;a.q2=0;a.tE=0;a.rx=0.0;a.ry=0.0;a.rz=0.0;a.ra=0.0;}
function A8V(a,b){var c=new ANP();A08(c,a,b);return c;}
function A08(a,b,c){var d,e,f,g,h,i;a.jZ=KZ(65536);a.ij=BU();a.oA=0;a.r6=0;a.we=$rt_createIntArray(50000);a.u1=KZ(64);a.rx=(-9999.0);a.ry=(-9999.0);a.rz=(-9999.0);a.ge=b;a.hW=c;a.kA=JF(2);a.BB=JF(786432);a.oA=1;if(a.oA){DM(a.u1);if(!M2(a.u1,0))a.oA=0;else{a.sL=KZ(262144);DM(a.sL);Dz(a.sL,0);H0(a.sL,262144);}}a.uJ=JF(1);EX(a.uJ,4864);d=new Dd;e=0;while(e<500){BD();f=Bc$;g=0.25+N(d)*0.25;Bx(f);h= -g;i=g;F(f,h,(-100.0),i,1.0,1.0);F(f,i,(-100.0),i,0.0,1.0);F(f,i,(-100.0),h,0.0,0.0);F(f,h,(-100.0),h,1.0,0.0);Bt(f);e
=e+1|0;}E5();}
function ACM(a,b){if(a.K!==null)AGI(a.K,a);a.rx=(-9999.0);a.ry=(-9999.0);a.rz=(-9999.0);BdI.m9=b;a.K=b;a.Bb=AFs(b);if(b!==null){AI2(b,a);Tl(a);}}
function Tl(a){var b,c,d,e,f,g,h,i,j,k,l,m,n;a:{if(a.fN!==null){b=0;while(true){if(b>=a.fN.data.length)break a;AFv(a.fN.data[b]);b=b+1|0;}}}a.fg=a.K.o/16|0;a.fj=a.K.bu/16|0;a.ny=a.K.t/16|0;a.fN=H(H7,K(K(a.fg,a.fj),a.ny));a.dT=H(H7,K(K(a.fg,a.fj),a.ny));c=0;d=0;while(d<a.fg){e=0;while(e<a.fj){f=0;while(f<a.ny){g=a.fN.data;h=K(K(f,a.fj)+e|0,a.fg)+d|0;i=new H7;j=a.K;k=d<<4;l=e<<4;m=f<<4;n=a.BB+c|0;AKo();i.rI=(-1);i.gz=0;i.ob=$rt_createBooleanArray(2);i.jO=1;i.Aj=AFs(j);i.o0=j;i.yI=k;i.yJ=l;i.yK=m;i.mY=16;i.m4=
16;i.n0=16;i.D2=k+(i.n0/2|0)|0;i.z0=l+(i.m4/2|0)|0;i.CA=m+(i.mY/2|0)|0;B$((K(i.n0,i.n0)+K(i.m4,i.m4)|0)+K(i.mY,i.mY)|0);i.w9=FK(GL(k,l,m,k+i.n0|0,l+i.m4|0,m+i.mY|0),2.0,2.0,2.0);i.rI=n;Y6(i);Bb(3553);EX(n+2|0,4864);AJ_(i.w9);E5();Y(3553);g[h]=i;a.dT.data[K(K(f,a.fj)+e|0,a.fg)+d|0]=a.fN.data[K(K(f,a.fj)+e|0,a.fg)+d|0];c=c+3|0;f=f+1|0;}e=e+1|0;}d=d+1|0;}b=0;while(b<a.ij.q){Bc(a.ij,b).pK=0;b=b+1|0;}ER(a.ij);EX(a.kA,4864);Yd(a);E5();EX(a.kA+1|0,4864);T5(a);E5();MT(a,0,0,0,a.K.o,a.K.bu,a.K.t);}
function AMM(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,$p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=a.K.dl;AGE(BdI,a.K,a.hW,a.ge.a,d);a.ld=0;a.k7=0;a.l7=0;f=0;a:{while(f<e.ex){g=0;while(g<e.eK){h=0;while(h<e.h0){b:{i=e.lz.data[K(K(h,e.eK)+g|0,e.ex)+f|0];if(i.q){j=(f<<3)+4|0;k=(g<<3)+4|
0;l=(h<<3)+4|0;a.ld=a.ld+i.q|0;m=j;n=k;o=l;if(m>=0.0&&n>=0.0&&o>=0.0&&m<a.K.o&&n<a.K.bu&&o<a.K.t){p=m/16.0|0;q=n/16.0|0;r=o/16.0|0;s=a.fN.data[K(K(r,a.fj)+q|0,a.fg)+p|0].gz&&a.fN.data[K(K(r,a.fj)+q|0,a.fg)+p|0].jO?1:0;}else s=1;if(!s)a.l7=a.l7+i.q|0;else{j=0;while(true){if(j>=i.q)break b;t=Bc(i,j);m=t.f-b.U;n=t.j-b.R;o=t.g-b.S;m=m*m+n*n+o*o;u=t.Y;n=(u.bv-u.bg+u.bs-u.bc+u.bw-u.bf)/3.0*64.0;if(m<n*n&&Pw(c,t.Y)){if(t!==a.K.cU)break a;if(a.ge.d.ce)break a;}j=j+1|0;}}}}h=h+1|0;}g=g+1|0;}f=f+1|0;}return;}a.k7=a.k7
+1|0;u=BdI;$p=1;case 1:AAa(u,t,d);if(I()){break _;}a:{c:while(true){j=j+1|0;while(j>=i.q){while(true){h=h+1|0;while(h>=e.h0){g=g+1|0;while(g>=e.eK){f=f+1|0;if(f>=e.ex)break c;g=0;}h=0;}i=e.lz.data[K(K(h,e.eK)+g|0,e.ex)+f|0];if(!i.q)continue;j=(f<<3)+4|0;k=(g<<3)+4|0;l=(h<<3)+4|0;a.ld=a.ld+i.q|0;m=j;n=k;o=l;if(m>=0.0&&n>=0.0&&o>=0.0&&m<a.K.o&&n<a.K.bu&&o<a.K.t){p=m/16.0|0;q=n/16.0|0;r=o/16.0|0;s=a.fN.data[K(K(r,a.fj)+q|0,a.fg)+p|0].gz&&a.fN.data[K(K(r,a.fj)+q|0,a.fg)+p|0].jO?1:0;}else s=1;if(s)break;a.l7=a.l7
+i.q|0;}j=0;}t=Bc(i,j);m=t.f-b.U;n=t.j-b.R;o=t.g-b.S;m=m*m+n*n+o*o;u=t.Y;n=(u.bv-u.bg+u.bs-u.bc+u.bw-u.bf)/3.0*64.0;if(m>=n*n)continue;if(!Pw(c,t.Y))continue;if(t!==a.K.cU)break a;if(!a.ge.d.ce)continue;else break a;}return;}a.k7=a.k7+1|0;u=BdI;continue _;default:F2();}}Dh().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,$p);}
function YE(a){var b;b=new S;V(b);return R(Bf(G(Bf(G(Bf(G(Bf(G(b,B(356)),a.tE),B(30)),a.rs),B(357)),a.rY),B(358)),a.q2));}
function RH(a){var b;b=new S;V(b);return R(Bf(G(Bf(G(Bf(G(Bf(G(b,B(359)),a.k7),B(30)),a.ld),B(360)),a.l7),B(361)),(a.ld-a.l7|0)-a.k7|0));}
function S8(a,b,c){var d,e,f,g,h,i,j,k,l;if(!c){a.rs=0;a.rY=0;a.q2=0;a.tE=0;}d=b.f-a.rx;e=b.j-a.ry;f=b.g-a.rz;if(d*d+e*e+f*f>16.0){a.rx=b.f;a.ry=b.j;a.rz=b.g;g=a.dT;h=new R3;h.va=b;ACu(g,h);}if(a.oA&&!c){i=8;j=0;while(j<8){a.dT.data[j].jO=1;j=j+1|0;}k=0+N1(a,0,8,c)|0;while(true){j=i<<1;if(j>a.dT.data.length)j=a.dT.data.length;Bb(3553);Bb(2896);Bb(3008);Cz(0,0,0,0);EJ(0);l=i;while(l<j){if(!a.dT.data[l].gz)a.dT.data[l].jO=1;l=l+1|0;}Cz(1,1,1,1);EJ(1);Y(3553);Y(3008);k=k+N1(a,i,j,c)|0;if(j>=a.dT.data.length)break;i
=j;}}else k=0+N1(a,0,a.dT.data.length,c)|0;return k;}
function N1(a,b,c,d){var e;e=0;while(b<c){if(!d){a.rs=a.rs+1|0;if(!a.dT.data[b].gz)a.rY=a.rY+1|0;if(a.dT.data[b].gz&&!a.dT.data[b].jO)a.q2=a.q2+1|0;if(a.dT.data[b].gz&&a.dT.data[b].jO)a.tE=a.tE+1|0;}if(a.dT.data[b].gz&&a.dT.data[b].jO)e=AFw(a.dT.data[b],a.we,e,d);b=b+1|0;}DM(a.jZ);AOr(a.jZ,a.we,0,e);Ec(a.jZ);if(BV(a.jZ)>0)Vg(a.jZ);return BV(a.jZ);}
function AIJ(a){var b,c,d,e,$p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=3553;c=a.hW;d=B(205);$p=1;case 1:$z=AB2(c,d);if(I()){break _;}e=$z;Cj(b,e);Vg(a.jZ);return;default:F2();}}Dh().s(a,b,c,d,e,$p);}
function DX(a){a.r6=a.r6+1|0;}
function AHF(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,$p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:Bb(3553);c=UM(a.K,b);d=c.U;e=c.R;f=c.S;if(a.ge.d.b4){g=d*30.0;d=(g+e*59.0+f*11.0)/100.0;e=(g+e*70.0)/100.0;f=(g+f*70.0)/100.0;}EJ(0);BD();h=Bc$;Bx(h);CW(h,
d,e,f);d=a.K.bu+10|0;i=(-2048);j=d;while(i<(a.K.o+2048|0)){k=(-2048);while(k<(a.K.t+2048|0)){l=i;m=k;Bo(h,l,j,m);n=i+512|0;Bo(h,n,j,m);k=k+512|0;m=k;Bo(h,n,j,m);Bo(h,l,j,m);}i=i+512|0;}Bt(h);Y(3553);Bb(2912);Bb(3008);Y(3042);Dy(1,1);Ca();d=a.K.cU.eb+(a.K.cU.f-a.K.cU.eb)*b;e=a.K.cU.ea+(a.K.cU.j-a.K.cU.ea)*b;o=a.K.cU.d_+(a.K.cU.g-a.K.cU.d_)*b;BJ(1.0,1.0,1.0,1.0);Bj(d,e,o);Bs(0.0,0.0,0.0,1.0);Bs(H3(a.K,b)*360.0,1.0,0.0,0.0);i=3553;c=a.hW;p=B(362);$p=1;case 1:$z=AB2(c,p);if(I()){break _;}q=$z;Cj(i,q);Bx(h);F(h,
(-30.0),100.0,(-30.0),0.0,0.0);F(h,30.0,100.0,(-30.0),1.0,0.0);F(h,30.0,100.0,30.0,1.0,1.0);F(h,(-30.0),100.0,30.0,0.0,1.0);Bt(h);i=3553;c=a.hW;p=B(363);$p=2;case 2:$z=AB2(c,p);if(I()){break _;}q=$z;Cj(i,q);Bx(h);F(h,(-20.0),(-100.0),20.0,1.0,1.0);F(h,20.0,(-100.0),20.0,0.0,1.0);F(h,20.0,(-100.0),(-20.0),0.0,0.0);F(h,(-20.0),(-100.0),(-20.0),1.0,0.0);Bt(h);Bb(3553);d=AIl(a.K,b);BJ(d,d,d,d);FF(a.uJ);BJ(1.0,1.0,1.0,1.0);Y(3553);Bb(3042);Y(3008);Y(2912);BR();EJ(1);i=3553;c=a.hW;p=B(364);$p=3;case 3:$z=AB2(c,p);if
(I()){break _;}q=$z;Cj(i,q);BJ(1.0,1.0,1.0,1.0);p=AII(a.K,b);d=p.U;g=p.R;e=p.S;if(a.ge.d.b4){o=d*30.0;d=(o+g*59.0+e*11.0)/100.0;g=(o+g*70.0)/100.0;e=(o+e*70.0)/100.0;}o=a.K.kD;r=(a.r6+b)*4.8828125E-4*0.029999999329447746;Bx(h);CW(h,d,g,e);q=(-2048);j=o;while(q<(a.K.o+2048|0)){k=(-2048);while(k<(a.K.t+2048|0)){d=q;l=d;s=k+512|0;e=s;m=e;n=d*4.8828125E-4+r;t=e*4.8828125E-4;F(h,l,j,m,n,t);b=q+512|0;u=b;v=b*4.8828125E-4+r;F(h,u,j,m,v,t);b=k;w=b;x=b*4.8828125E-4;F(h,u,j,w,v,x);F(h,l,j,w,n,x);F(h,l,j,w,n,x);F(h,u,
j,w,v,x);F(h,u,j,m,v,t);F(h,l,j,m,n,t);k=s;}q=q+512|0;}Bt(h);return;default:F2();}}Dh().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,$p);}
function ALV(a){var b,c,d,e,f,$p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=DT(a.K,0,a.K.eC,0);c=3553;d=a.hW;e=B(227);$p=1;case 1:$z=AB2(d,e);if(I()){break _;}f=$z;Cj(c,f);if(a.K.eC>a.K.fD){c=a.K.jo;L();if(c==Bcb.b){c=3553;d=a.hW;e=B(365);$p=2;continue _;}}BJ(b,b,b,1.0);Y(3553);FF(a.kA);return;case 2:$z=AB2(d,e);if(I()){break _;}f=$z;Cj(c,f);BJ(b,b,b,1.0);Y(3553);FF(a.kA);return;default:F2();}}Dh().s(a,b,c,d,e,f,$p);}
function Yd(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o;BD();b=Bc$;c=a.K.eC;d=128;if(128>a.K.o)d=a.K.o;if(d>a.K.t)d=a.K.t;e=2048/d|0;Bx(b);f=K( -d,e);g=Bw(c,0.0);h=c;i=f;while(true){j=a.K.o;k=K(d,e);if(i>=(j+k|0))break;j=f;while(j<(a.K.t+k|0)){if(!(g>=0&&i>=0&&j>=0&&i<a.K.o&&j<a.K.t)){l=i;m=j+d|0;n=d;F(b,l,h,m,0.0,n);o=i+d|0;F(b,o,h,m,n,n);m=j;F(b,o,h,m,n,0.0);F(b,l,h,m,0.0,0.0);}j=j+d|0;}i=i+d|0;}Bt(b);}
function ABS(a){var b,c,d,e,f,$p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:Y(3553);Y(3042);b=3553;c=a.hW;d=B(210);$p=1;case 1:$z=AB2(c,d);if(I()){break _;}e=$z;Cj(b,e);f=DT(a.K,0,a.K.fD,0);BJ(f,f,f,1.0);FF(a.kA+1|0);BJ(1.0,1.0,1.0,1.0);Bb(3042);return;default:F2();}}Dh().s(a,b,c,d,e,f,$p);}
function T5(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t;b=a.K.fD;Dy(770,771);BD();c=Bc$;d=128;if(128>a.K.o)d=a.K.o;if(d>a.K.t)d=a.K.t;e=2048/d|0;Bx(c);L();f=Bcb.ew;g=Bcb.ev;h=K( -d,e);i=Bw(b,0.0);j=h;while(true){k=a.K.o;l=K(d,e);if(j>=(k+l|0))break;m=h;while(m<(a.K.t+l|0)){n=b+Bcb.ch;if(!(i>=0&&j>=0&&m>=0&&j<a.K.o&&m<a.K.t)){o=j+f;p=n;q=(m+d|0)+g;r=d;F(c,o,p,q,0.0,r);s=(j+d|0)+f;F(c,s,p,q,r,r);t=m+g;F(c,s,p,t,r,0.0);F(c,o,p,t,0.0,0.0);F(c,o,p,t,0.0,0.0);F(c,s,p,t,r,0.0);F(c,s,p,q,r,r);F(c,o,p,q,0.0,r);}m=m
+d|0;}j=j+d|0;}Bt(c);Bb(3042);}
function AJH(a,b){var c,d,e,f,g;c=a.ij;d=new Vk;d.zk=b;TK(c,d);e=a.ij.q-1|0;f=a.ij.q;g=0;while(g<f){c=Bc(a.ij,e-g|0);if(IP(c,b)>2500.0&&g>4)return;GD(a.ij,c);AN2(c);c.pK=0;g=g+1|0;}}
function AOn(a,b,c,d){var e,f,g,$p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:BD();e=Bc$;Y(3042);Y(3008);Dy(770,1);BJ(1.0,1.0,1.0,(Bv(Long_toNumber(CF())/100.0)*0.20000000298023224+0.4000000059604645)*0.5);if(a.ra<=0.0){Bb(3042);Bb(3008);return;}Dy(774,768);d=a.hW;f=B(205);$p=1;case 1:$z=AB2(d,f);if(I()){break _;}g=$z;Cj(3553,g);BJ(1.0,1.0,1.0,0.5);Ca();c=O(a.K,b.c6,b.c7,b.c8);if(c<=0)f=null;else{L();f=Bcf.data[c];}Bb(3008);Bx(e);AEZ(e);if
(f===null){L();f=Bcl;}BN();AK1(a.Bb,f,b.c6,b.c7,b.c8,240+(a.ra*10.0|0)|0);BN();Bt(e);Y(3008);EJ(1);BR();Bb(3042);Bb(3008);return;default:F2();}}Dh().s(a,b,c,d,e,f,g,$p);}
function Xa(a,b,c){var d,e;Y(3042);Dy(770,771);BJ(0.0,0.0,0.0,0.4000000059604645);Bb(3553);EJ(0);c=O(a.K,b.c6,b.c7,b.c8);if(c>0){L();d=FK(AL2(Bcf.data[c],b.c6,b.c7,b.c8),0.0020000000949949026,0.0020000000949949026,0.0020000000949949026);BD();e=Bc$;Lx(e,3);Bo(e,d.bg,d.bc,d.bf);Bo(e,d.bv,d.bc,d.bf);Bo(e,d.bv,d.bc,d.bw);Bo(e,d.bg,d.bc,d.bw);Bo(e,d.bg,d.bc,d.bf);Bt(e);Lx(e,3);Bo(e,d.bg,d.bs,d.bf);Bo(e,d.bv,d.bs,d.bf);Bo(e,d.bv,d.bs,d.bw);Bo(e,d.bg,d.bs,d.bw);Bo(e,d.bg,d.bs,d.bf);Bt(e);Lx(e,1);Bo(e,d.bg,d.bc,d.bf);Bo(e,
d.bg,d.bs,d.bf);Bo(e,d.bv,d.bc,d.bf);Bo(e,d.bv,d.bs,d.bf);Bo(e,d.bv,d.bc,d.bw);Bo(e,d.bv,d.bs,d.bw);Bo(e,d.bg,d.bc,d.bw);Bo(e,d.bg,d.bs,d.bw);Bt(e);}EJ(1);Y(3553);Bb(3042);}
function MT(a,b,c,d,e,f,g){var h,i,j,k,l;h=b/16|0;i=c/16|0;c=d/16|0;d=e/16|0;e=f/16|0;f=g/16|0;if(h<0)h=0;if(i<0)i=0;if(c<0)c=0;if(d>(a.fg-1|0))d=a.fg-1|0;if(e>(a.fj-1|0))e=a.fj-1|0;if(f>(a.ny-1|0))f=a.ny-1|0;while(h<=d){j=i;while(j<=e){k=c;while(k<=f){l=a.fN.data[K(K(k,a.fj)+j|0,a.fg)+h|0];if(!l.pK){l.pK=1;M(a.ij,a.fN.data[K(K(k,a.fj)+j|0,a.fg)+h|0]);}k=k+1|0;}j=j+1|0;}h=h+1|0;}}
function WP(a,b,c,d){MT(a,b-1|0,c-1|0,d-1|0,b+1|0,c+1|0,d+1|0);}
function AHq(a,b,c,d,e,f,g){MT(a,b-1|0,c-1|0,d-1|0,e+1|0,f+1|0,g+1|0);}
function AE$(a,b){var c;c=0;while(c<a.fN.data.length){ADr(a.fN.data[c],b);c=c+1|0;}}
function ABY(a,b,c,d,e,f,g,h){var i,j,k,l;i=a.K.cU.f-c;j=a.K.cU.j-d;k=a.K.cU.g-e;if(i*i+j*j+k*k<=256.0){if(b===B(366)){b=a.ge.bI;l=new QC;Ga(l,a.K,c,d,e,f,g,h);l.hR=1.0;l.iG=1.0;l.iJ=1.0;l.fT=32;DC(l,0.019999999552965164,0.019999999552965164);l.dq=l.dq*(N(l.N)*0.6000000238418579+0.20000000298023224);l.by=f*0.20000000298023224+(Cc()*2.0-1.0)*0.019999999552965164;l.bD=g*0.20000000298023224+(Cc()*2.0-1.0)*0.019999999552965164;l.bz=h*0.20000000298023224+(Cc()*2.0-1.0)*0.019999999552965164;l.cT=8.0/(Cc()*0.8+0.2)
|0;E$(b,l);}else if(b===B(273))E$(a.ge.bI,AS6(a.K,c,d,e,1.0));else if(b===B(367)){b=a.ge.bI;l=new QX;Ga(l,a.K,c,d,e,f,g,h);l.by=f+(Cc()*2.0-1.0)*0.05000000074505806;l.bD=g+(Cc()*2.0-1.0)*0.05000000074505806;l.bz=h+(Cc()*2.0-1.0)*0.05000000074505806;c=N(l.N)*0.30000001192092896+0.699999988079071;l.iJ=c;l.iG=c;l.hR=c;l.dq=N(l.N)*N(l.N)*6.0+1.0;l.cT=(16.0/(N(l.N)*0.8+0.2)|0)+2|0;E$(b,l);}else if(b!==B(274)){if(b===B(271))E$(a.ge.bI,A$W(a.K,c,d,e));else if(b===B(272)){b=a.ge.bI;l=new QR;ABG(l,a.K,c,d,e);l.o$=0.03999999910593033;l.fT
=l.fT+1|0;E$(b,l);}else if(b===B(275))E$(a.ge.bI,AS6(a.K,c,d,e,2.5));}else{b=a.ge.bI;l=new SD;Ga(l,a.K,c,d,e,0.0,0.0,0.0);l.by=l.by*0.009999999776482582;l.bD=l.bD*0.009999999776482582;l.bz=l.bz*0.009999999776482582;N(l.N);N(l.N);N(l.N);N(l.N);N(l.N);N(l.N);l.CG=l.dq;l.iJ=1.0;l.iG=1.0;l.hR=1.0;l.cT=(8.0/(Cc()*0.8+0.2)|0)+4|0;l.oi=1;l.fT=48;E$(b,l);}}}
function AWh(a,b){return;}
function APt(a,b){return;}
function AKK(a){EX(a.kA,4864);Yd(a);E5();EX(a.kA+1|0,4864);T5(a);E5();}
function OF(){var a=this;C.call(a);a.o=0;a.t=0;a.bu=0;a.b_=null;a.gV=null;a.ox=null;a.o_=null;a.qG=Long_ZERO;a.g4=0;a.gY=0;a.hv=0;a.r5=0.0;a.jo=0;a.di=null;a.j$=null;a.l9=null;a.n3=null;a.kn=null;a.bo=null;a.Dv=null;a.pn=0;a.dl=null;a.fD=0;a.eC=0;a.kD=0;a.hH=0;a.hB=0;a.hn=0;a.mh=0;a.uG=0;a.cU=null;a.xe=0;a.dF=0;a.ef=0;a.rT=null;a.hT=null;a.iR=0;a.e0=null;a.hq=null;a.tF=null;a.c1=0;}
var Bf4=null;var Bf5=0;function XU(){var a=new OF();AGz(a);return a;}
function AGz(a){var b,c;L();a.jo=Bcb.b;a.di=BU();a.j$=SR();a.l9=CZ();a.n3=BU();a.bo=new Dd;a.Dv=new Dd;a.pn=RC(a.bo);a.hH=10079487;a.hB=16777215;a.hn=16777215;a.mh=0;a.uG=0;a.xe=1;a.dF=15;a.ef=15;b=new Vd;c=new R9;c.dL=H(IN,1024);c.eO=0;b.kk=c;b.tm=CZ();b.mU=H(IN,32);b.mt=a;a.rT=b;a.iR=0;a.e0=$rt_createShortArray(1048576);a.hq=$rt_createIntArray(1048576);a.tF=$rt_createIntArray(1048576);a.c1=2;}
function TG(a){var b,c,d,e,f;if(a.b_===null){b=new BT;Bd(b,B(368));J(b);}a.di=BU();a.kn=$rt_createIntArray(K(a.o,a.t));Js(a.kn,a.bu);X2(a.hT,0,0,a.o,a.t);a.bo=new Dd;a.pn=RC(a.bo);a.j$=BU();if(a.dl===null){b=new VN;c=a.o;d=a.bu;e=a.t;b.lN=A67(b);b.w5=A67(b);b.fi=BU();b.mz=BU();b.ex=c/8|0;b.eK=d/8|0;b.h0=e/8|0;if(!b.ex)b.ex=1;if(!b.eK)b.eK=1;if(!b.h0)b.h0=1;b.lz=H(VY,K(K(b.ex,b.eK),b.h0));c=0;while(c<b.ex){d=0;while(d<b.eK){f=0;while(f<b.h0){b.lz.data[K(K(f,b.eK)+d|0,b.ex)+c|0]=BU();f=f+1|0;}d=d+1|0;}c=c+1|0;}a.dl
=b;}}
function K2(a,b,c,d,e,f){var g,h,i,j,k,l,m;if(f!==null&&!f.data.length)f=null;a.o=b;a.t=d;a.bu=c;a.b_=e;g=0;while(g<a.o){h=0;while(h<a.t){i=0;while(i<a.bu){a:{j=0;c=Bw(i,1);if(c<=0&&i<(a.eC-1|0)&&!e.data[K(K(i+1|0,a.t)+h|0,a.o)+g|0]){L();j=Bd0.b;}else if(i<(a.eC-1|0)){L();j=Bcg.b;}else if(i<a.eC){if(a.eC>a.fD){k=a.jo;L();if(k==Bcb.b){j=Bch.b;break a;}}L();j=Bci.b;}else if(i<a.fD)j=a.jo;}e.data[K(K(i,a.t)+h|0,a.o)+g|0]=j<<24>>24;if(!c&&g&&h&&g!=(a.o-1|0)&&h!=(a.t-1|0))i=a.bu-2|0;i=i+1|0;}h=h+1|0;}g=g+1|0;}a.kn
=$rt_createIntArray(K(b,d));Js(a.kn,a.bu);if(f!==null){a.gV=f;a.hT=ASZ(a);}else{a.gV=$rt_createByteArray(e.data.length);a.hT=ASZ(a);b=a.ef;c=0;while(c<a.o){k=0;while(k<a.t){l=a.bu-1|0;while(l>0){L();if(BdV.data[O(a,c,l,k)])break;l=l+(-1)|0;}a.kn.data[c+K(k,a.o)|0]=l+1|0;d=0;while(d<a.bu){g=K(K(d,a.t)+k|0,a.o)+c|0;l=d<a.kn.data[c+K(k,a.o)|0]?0:b;m=a.b_.data[g];L();if(l<BdY.data[m])l=BdY.data[m];a.gV.data[g]=((a.gV.data[g]&240)+l|0)<<24>>24;d=d+1|0;}k=k+1|0;}c=c+1|0;}NU(a.hT,0,0,0,a.o,a.bu,a.t);}b=0;while(b<a.di.q)
{Tl(Bc(a.di,b));b=b+1|0;}a.j$.w7();Zw(a);TG(a);}
function Zw(a){var b,c,d,e,f,g,h,i,j,k,l;b=new Dd;c=0;a:while(true){c=c+1|0;d=W(b,a.o/2|0)+(a.o/4|0)|0;e=W(b,a.t/2|0)+(a.t/4|0)|0;f=a.bu;while(true){g=f-1|0;if(O(a,d,g,e)){L();if(Bcf.data[O(a,d,g,e)].ck!==Bc_)break;}if(f<=0)break;f=f+(-1)|0;}g=f+1|0;if(c==1000000){a.g4=d;a.gY=a.bu+100|0;a.hv=e;a.r5=180.0;return;}if(g<4)continue;if(g<=a.fD)continue;h=d-3|0;i=h;b:while(true){f=d+3|0;if(i>f){j=g-2|0;c:while(true){if(h>f)break a;k=(e-3|0)-2|0;while(k<=(e+3|0)){L();if(!BdU.data[O(a,h,j,k)])break c;k=k+1|0;}h=h+1
|0;}continue a;}l=g-1|0;while(l<=(g+2|0)){f=(e-3|0)-2|0;while(f<=(e+3|0)){if(CR(a,i,l,f).it())break b;f=f+1|0;}l=l+1|0;}i=i+1|0;}}a.g4=d;a.gY=g;a.hv=e;a.r5=180.0;}
function AI2(a,b){var c;c=0;while(c<a.dl.fi.q){Bc(a.dl.fi,c);c=c+1|0;}M(a.di,b);}
function AGI(a,b){GD(a.di,b);}
function Hv(a,b){var c,d,e,f,g,h,i,j,k,l,m;c=BU();d=b.bg|0;e=(b.bv|0)+1|0;f=b.bc|0;g=(b.bs|0)+1|0;h=b.bf|0;i=(b.bw|0)+1|0;if(b.bg<0.0)d=d+(-1)|0;if(b.bc<0.0)f=f+(-1)|0;if(b.bf<0.0)h=h+(-1)|0;while(d<e){j=f;while(j<g){k=h;while(k<i){L();l=Bcf.data[O(a,d,j,k)];if(l!==null){m=l.iq(d,j,k);if(m!==null&&Y_(b,m))M(c,m);}else if(a.eC<0&&!(j>=a.eC&&j>=a.fD)){m=Bcg.iq(d,j,k);if(m!==null&&Y_(b,m))M(c,m);}k=k+1|0;}j=j+1|0;}d=d+1|0;}return c;}
function ALa(a,b,c,d,e,f,g){var h,i;h=O(a,b,c,d);i=O(a,e,f,g);H1(a,b,c,d,i);H1(a,e,f,g,h);Lr(a,b,c,d,i);Lr(a,e,f,g,h);}
function H1(a,b,c,d,e){var f;if(b>0&&c>0&&d>0&&b<(a.o-1|0)&&c<(a.bu-1|0)&&d<(a.t-1|0)){if(e==a.b_.data[K(K(c,a.t)+d|0,a.o)+b|0])return 0;if(!e&&!(b&&d&&b!=(a.o-1|0)&&d!=(a.t-1|0))&&c>=a.eC&&c<a.fD){L();e=Bcb.b;}f=a.b_.data[K(K(c,a.t)+d|0,a.o)+b|0];a.b_.data[K(K(c,a.t)+d|0,a.o)+b|0]=e<<24>>24;DK(a,b,c,d,0);if(f){L();Bcf.data[f].tk(a,b,c,d);}if(e){L();Bcf.data[e].gC(a,b,c,d);}L();if(!(BdV.data[f]==BdV.data[e]&&!BdY.data[f]&&!BdY.data[e])){X2(a.hT,b,d,1,1);NU(a.hT,b,c,d,b+1|0,c+1|0,d+1|0);}e=0;while(e<a.di.q){WP(Bc(a.di,
e),b,c,d);e=e+1|0;}return 1;}return 0;}
function By(a,b,c,d,e){if(!H1(a,b,c,d,e))return 0;Lr(a,b,c,d,e);return 1;}
function Lr(a,b,c,d,e){Ik(a,b-1|0,c,d,e);Ik(a,b+1|0,c,d,e);Ik(a,b,c-1|0,d,e);Ik(a,b,c+1|0,d,e);Ik(a,b,c,d-1|0,e);Ik(a,b,c,d+1|0,e);}
function Ig(a,b,c,d,e){if(b>=0&&c>=0&&d>=0&&b<a.o&&c<a.bu&&d<a.t){if(e==a.b_.data[K(K(c,a.t)+d|0,a.o)+b|0])return 0;a.b_.data[K(K(c,a.t)+d|0,a.o)+b|0]=e<<24>>24;NU(a.hT,b,c,d,b+1|0,c+1|0,d+1|0);return 1;}return 0;}
function Ik(a,b,c,d,e){var f;if(b>=0&&c>=0&&d>=0&&b<a.o&&c<a.bu&&d<a.t){L();f=Bcf.data[a.b_.data[K(K(c,a.t)+d|0,a.o)+b|0]];if(f!==null)f.jm(a,b,c,d,e);}}
function O(a,b,c,d){if(b<0)b=0;else if(b>=a.o)b=a.o-1|0;if(c<0)c=0;else if(c>=a.bu)c=a.bu-1|0;if(d<0)d=0;else if(d>=a.t)d=a.t-1|0;return a.b_.data[K(K(c,a.t)+d|0,a.o)+b|0]&255;}
function BM(a,b,c,d){var e;L();e=Bcf.data[O(a,b,c,d)];return e!==null?e.fJ():0;}
function DI(a){var b;AES(a.dl);b=0;while(b<a.n3.q){Bc(a.n3,b).zH();b=b+1|0;}}
function HN(a){ADY(a.hT);}
function AIl(a,b){b=1.0-(Bp(H3(a,b)*3.1415927410125732*2.0)*2.0+0.75);if(b<0.0)b=0.0;if(b>1.0)b=1.0;return b*b*0.5;}
function UM(a,b){var c,d,e;b=Bp(H3(a,b)*3.1415927410125732*2.0)*2.0+0.5;if(b<0.0)b=0.0;if(b>1.0)b=1.0;c=(a.hH>>16&255)/255.0;d=(a.hH>>8&255)/255.0;e=(a.hH&255)/255.0;return BF(c*b,d*b,e*b);}
function H3(a,b){if(a.dF>15)return 0.0;return (a.iR+b)/24000.0-0.15000000596046448;}
function ABv(a,b){var c,d,e,f;b=Bp(H3(a,b)*3.1415927410125732*2.0)*2.0+0.5;if(b<0.0)b=0.0;if(b>1.0)b=1.0;c=(a.hB>>16&255)/255.0;d=(a.hB>>8&255)/255.0;e=(a.hB&255)/255.0;f=b*0.9399999976158142+0.05999999865889549;return BF(c*f,d*f,e*(b*0.9100000262260437+0.09000000357627869));}
function AII(a,b){var c,d,e,f;b=Bp(H3(a,b)*3.1415927410125732*2.0)*2.0+0.5;if(b<0.0)b=0.0;if(b>1.0)b=1.0;c=(a.hn>>16&255)/255.0;d=(a.hn>>8&255)/255.0;e=(a.hn&255)/255.0;f=b*0.8999999761581421+0.10000000149011612;return BF(c*f,d*f,e*(b*0.8500000238418579+0.15000000596046448));}
function Ot(a){var b,c;b=Bp(H3(a,1.0)*3.1415927410125732*2.0)*1.5+0.5;if(b<0.0)b=0.0;if(b>1.0)b=1.0;c=b*((15*a.dF|0)/15.0-4.0)+4.0|0;if(c>15)c=15;if(c<4)c=4;return c;}
function DL(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p;a.iR=a.iR+1|0;if(a.iR==24000)a.iR=0;b=Ot(a);if(a.ef>b)XV(a,a.ef-1|0);if(a.ef<b)XV(a,a.ef+1|0);a.uG=a.uG+1|0;b=1;c=1;while(1<<b<a.o){b=b+1|0;}while(1<<c<a.t){c=c+1|0;}d=a.t-1|0;e=a.o-1|0;f=a.bu-1|0;g=a.j$.eW();if(g>200)g=200;h=0;while(h<g){a:{i=a.j$.FL(0);if(i.sO>0){i.sO=i.sO-1|0;a.j$.kx(i);break a;}j=i.rm;k=i.tx;l=i.sC;if(l<0)break a;if(k<0)break a;if(j<0)break a;if(l>=a.o)break a;if(k>=a.bu)break a;if(j>=a.t)break a;m=a.b_.data[K(K(i.tx,a.t)+i.rm|0,a.o)+i.sC
|0];if(m!=i.Aw)break a;if(m<=0)break a;L();Bcf.data[m].gi(a,i.sC,i.tx,i.rm,a.bo);}h=h+1|0;}a.mh=a.mh+K(K(a.o,a.t),a.bu)|0;g=a.mh/200|0;a.mh=a.mh-(g*200|0)|0;h=0;while(h<g){a.pn=(a.pn*3|0)+1013904223|0;n=a.pn>>2;o=n&e;l=n>>b&d;n=n>>(b+c|0)&f;p=a.b_.data[K(K(n,a.t)+l|0,a.o)+o|0];L();if(BdT.data[p])Bcf.data[p].gi(a,o,n,l,a.bo);h=h+1|0;}}
function Yv(a,b){var c,d;c=0;d=0;while(d<a.dl.fi.q){if(RQ(b,B5(Bc(a.dl.fi,d))))c=c+1|0;d=d+1|0;}return c;}
function A3L(a){return a.eC;}
function AVJ(a){return a.fD;}
function SF(a,b){var c,d,e,f,g,h,i,j,k;c=b.bg|0;d=(b.bv|0)+1|0;e=b.bc|0;f=(b.bs|0)+1|0;g=b.bf|0;h=(b.bw|0)+1|0;if(b.bg<0.0)c=c+(-1)|0;if(b.bc<0.0)e=e+(-1)|0;if(b.bf<0.0)g=g+(-1)|0;if(c<0)c=0;if(e<0)e=0;if(g<0)g=0;if(d>a.o)d=a.o;if(f>a.bu)f=a.bu;if(h>a.t)h=a.t;while(c<d){i=e;while(i<f){j=g;while(j<h){L();k=Bcf.data[O(a,c,i,j)];if(k!==null&&k.ck.l$())return 1;j=j+1|0;}i=i+1|0;}c=c+1|0;}return 0;}
function AHm(a,b){var c,d,e,f,g,h,i,j,k;c=b.bg|0;d=(b.bv|0)+1|0;e=b.bc|0;f=(b.bs|0)+1|0;g=b.bf|0;h=(b.bw|0)+1|0;a:{while(c<d){i=e;while(i<f){j=g;while(j<h){k=O(a,c,i,j);L();if(k==Bd1.b)break a;if(k==Bcc.b)break a;if(k==Bd0.b)break a;j=j+1|0;}i=i+1|0;}c=c+1|0;}return 0;}return 1;}
function PZ(a,b,c){var d,e,f,g,h,i,j,k,l;d=b.bg|0;e=(b.bv|0)+1|0;f=b.bc|0;g=(b.bs|0)+1|0;h=b.bf|0;i=(b.bw|0)+1|0;while(d<e){j=f;while(j<g){k=h;while(k<i){L();l=Bcf.data[O(a,d,j,k)];if(l!==null&&l.ck===c)return 1;k=k+1|0;}j=j+1|0;}d=d+1|0;}return 0;}
function Ge(a,b,c,d,e){var f;f=new P2;f.sC=b;f.tx=c;f.rm=d;f.Aw=e;if(e>0){L();f.sO=Bcf.data[e].rV();}a.j$.kx(f);}
function AEC(a,b){return Ht(a.dl,null,b).q?0:1;}
function AFO(a,b){var c,d;c=Ht(a.dl,null,b);d=0;while(d<c.q){if(Bc(c,d).ti)return 0;d=d+1|0;}return 1;}
function P5(a,b,c){return Ht(a.dl,b,c);}
function AOc(a,b,c,d,e){var f,g,h,i;e=b-0.10000000149011612;f=c-0.10000000149011612;g=d-0.10000000149011612;if(FV(a,e,f,g))h=1;else{i=d+0.10000000149011612;if(FV(a,e,f,i))h=1;else{c=c+0.10000000149011612;if(FV(a,e,c,g))h=1;else if(FV(a,e,c,i))h=1;else{b=b+0.10000000149011612;h=FV(a,b,f,g)?1:FV(a,b,f,i)?1:!FV(a,b,c,g)?FV(a,b,c,i):1;}}}return h;}
function FV(a,b,c,d){var e;a:{e=O(a,b|0,c|0,d|0);if(e>0){L();if(Bcf.data[e].fJ()){e=1;break a;}}e=0;}return e;}
function Fy(a,b,c,d,e){a.g4=b;a.gY=c;a.hv=d;a.r5=e;}
function DT(a,b,c,d){return Bf4.data[D5(a,b,c,d)];}
function D5(a,b,c,d){var e;if(b<0)b=0;else if(b>=a.o)b=a.o-1|0;if(c<0)c=0;else if(c>=a.bu)c=a.bu-1|0;if(d<0)d=0;else if(d>=a.t)d=a.t-1|0;e=a.b_.data[K(K(c,a.t)+d|0,a.o)+b|0];L();return e!=Bck.b?(a.gV.data[K(K(c,a.t)+d|0,a.o)+b|0]&15)<<24>>24:c>=(a.bu-1|0)?15:(a.gV.data[K(K(c+1|0,a.t)+d|0,a.o)+b|0]&15)<<24>>24;}
function Cr(a,b,c,d){if(b<0)b=0;else if(b>=a.o)b=a.o-1|0;if(c<0)c=0;else if(c>=a.bu)c=a.bu-1|0;if(d<0)d=0;else if(d>=a.t)d=a.t-1|0;return (a.gV.data[K(K(c,a.t)+d|0,a.o)+b|0]>>>4&15)<<24>>24;}
function DK(a,b,c,d,e){if(b<0)b=0;else if(b>=a.o)b=a.o-1|0;if(c<0)c=0;else if(c>=a.bu)c=a.bu-1|0;if(d<0)d=0;else if(d>=a.t)d=a.t-1|0;a.gV.data[K(K(c,a.t)+d|0,a.o)+b|0]=((a.gV.data[K(K(c,a.t)+d|0,a.o)+b|0]&15)+(e<<4)|0)<<24>>24;e=0;while(e<a.di.q){WP(Bc(a.di,e),b,c,d);e=e+1|0;}}
function CR(a,b,c,d){var e;b=O(a,b,c,d);if(!b)e=Bc_;else{L();e=Bcf.data[b].ck;}return e;}
function ACw(a,b,c,d){a:{b=O(a,b,c,d);if(b>0){L();if(Bcf.data[b].ck===Bda){b=1;break a;}}b=0;}return b;}
function E1(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z;if(!(isNaN(b.U)?1:0)&&!(isNaN(b.R)?1:0)&&!(isNaN(b.S)?1:0)){if(!(isNaN(c.U)?1:0)&&!(isNaN(c.R)?1:0)&&!(isNaN(c.S)?1:0)){d=FM(c.U);e=FM(c.R);f=FM(c.S);g=FM(b.U);h=FM(b.R);i=FM(b.S);j=20;a:{while(true){k=j+(-1)|0;if(j<0)return null;if(isNaN(b.U)?1:0)break a;if(isNaN(b.R)?1:0)break a;if(isNaN(b.S)?1:0)break a;if(g==d&&h==e&&i==f)return null;l=999.0;m=999.0;n=999.0;j=Bw(d,g);if(j>0)l=g+1.0;if(j<0)l=g;o=Bw(e,h);if(o>0)m=h+1.0;if(o<0)m=h;h=Bw(f,
i);if(h>0)n=i+1.0;if(h<0)n=i;p=999.0;q=999.0;r=999.0;s=c.U-b.U;t=c.R-b.R;u=c.S-b.S;if(l!==999.0)p=(l-b.U)/s;if(m!==999.0)q=(m-b.R)/t;if(n!==999.0)r=(n-b.S)/u;if(p<q&&p<r){v=j<=0?5:4;b.U=l;b.R=b.R+t*p;b.S=b.S+u*p;}else if(q>=r){v=h<=0?3:2;b.U=b.U+s*r;b.R=b.R+t*r;b.S=n;}else{v=o<=0?1:0;b.U=b.U+s*q;b.R=m;b.S=b.S+u*q;}w=BF(b.U,b.R,b.S);x=FM(b.U);w.U=x;g=x|0;if(v==5){g=g+(-1)|0;w.U=w.U+1.0;}x=FM(b.R);w.R=x;h=x|0;if(v==1){h=h+(-1)|0;w.R=w.R+1.0;}x=FM(b.S);w.S=x;i=x|0;if(v==3){i=i+(-1)|0;w.S=w.S+1.0;}o=O(a,g,h,i);L();y
=Bcf.data[o];if(o>0&&y.pI()){z=y.Bd(a,g,h,i,b,c);if(z!==null)break;}j=k;}return z;}return null;}return null;}return null;}
function L_(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r;e=W(a.bo,3)+4|0;f=1;if(c>0){g=c+e|0;if((g+1|0)<=a.bu){h=(c+1|0)+e|0;i=h-2|0;j=c;while(j<=h){k=1;if(j==c)k=0;if(j>=i)k=2;l=b-k|0;while(l<=(b+k|0)&&f){m=d-k|0;while(m<=(d+k|0)&&f){if(!(l>=0&&j>=0&&m>=0&&l<a.o&&j<a.bu&&m<a.t))f=0;else if(a.b_.data[K(K(j,a.t)+m|0,a.o)+l|0]&255)f=0;m=m+1|0;}l=l+1|0;}j=j+1|0;}if(!f)return 0;n=a.b_.data;j=c-1|0;h=n[K(K(j,a.t)+d|0,a.o)+b|0]&255;L();if(!(h!=Bch.b&&h!=Bci.b)&&c<((a.bu-e|0)-1|0)){By(a,b,j,d,Bci.b);h=(c-3|0)+e|0;while
(h<=g){o=h-g|0;i=1-(o/2|0)|0;p=b-i|0;f=b+i|0;k=d-i|0;m=d+i|0;while(p<=f){q=p-b|0;l=k;while(l<=m){a:{r=l-d|0;if(K9(q)==i&&K9(r)==i){if(!W(a.bo,2))break a;if(!o)break a;}if(!BdU.data[O(a,p,h,l)])By(a,p,h,l,Bcr.b);}l=l+1|0;}p=p+1|0;}h=h+1|0;}j=0;while(j<e){n=BdU.data;h=c+j|0;if(!n[O(a,b,h,d)])By(a,b,h,d,Bcq.b);j=j+1|0;}return 1;}return 0;}}return 0;}
function A2x(a){return a.cU;}
function De(a,b){var c;ADv(a.dl,b);b.A=a;c=0;while(c<a.di.q){Bc(a.di,c);c=c+1|0;}}
function AIy(a,b){var c;AEB(a.dl,b);c=0;while(c<a.di.q){Bc(a.di,c);c=c+1|0;}}
function Tm(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn;g=A$r();h=0;while(h<16){i=0;while(i<16){j=0;while(j<16){a:{if(!(h&&h!=15&&i&&i!=15&&j&&j!=15)){k=h/15.0*2.0-1.0;l=i/15.0*2.0-1.0;m=j/15.0*2.0-1.0;n=Iu(k*k+l*l+m*m);o=k/n;p=l/n;k=m/n;q=f*(0.699999988079071+N(a.bo)*0.6000000238418579);o=o*0.30000001192092896;p=p*0.30000001192092896;r=k*0.30000001192092896;s=c;k=d;t=e;while(true){if(q<=0.0)break a;u=s|0;v=k|0;w=t|0;x=O(a,u,v,w);if(x>0){L();q=q-(ABo(Bcf.data[x])
+0.30000001192092896)*0.30000001192092896;}if(q>0.0)ABs(g,C0((u+(v<<10)|0)+(w<<10<<10)|0));s=s+o;k=k+p;t=t+r;q=q-0.22500000894069672;}}}j=j+1|0;}i=i+1|0;}h=h+1|0;}k=f*2.0;y=c-k-1.0|0;i=c+k+1.0|0;j=d-k-1.0|0;z=d+k+1.0|0;ba=e-k-1.0|0;bb=e+k+1.0|0;bc=AEa(a.dl,b,y,j,ba,i,z,bb);bd=BF(c,d,e);be=0;while(be<CE(bc)){bf=Bc(bc,be);o=bf.f-c;p=bf.j-d;bg=bf.g-e;t=B$(o*o+p*p+bg*bg)/k;if(t<=1.0){s=bf.f-c;r=bf.j-d;bh=bf.g-e;bi=B$(s*s+r*r+bh*bh);s=s/bi;o=r/bi;p=bh/bi;bj=(1.0-t)*AAv(a,bd,bf.Y);bf.eX(b,(bj*bj+bj)/2.0*8.0*k+1.0
|0);bf.G=bf.G+s*bj;bf.C=bf.C+o*bj;bf.H=bf.H+p*bj;}be=be+1|0;}bk=BU();Yt(bk,g);y=CE(bk)-1|0;while(y>=0){bl=AIf(Bc(bk,y));h=bl&1023;u=bl>>10&1023;v=bl>>20&1023;if(h>=0&&u>=0&&v>=0&&h<a.o&&u<a.bu&&v<a.t){w=O(a,h,u,v);x=0;r=h;q=u;l=v;while(x<=0){bj=r+N(a.bo);bm=q+N(a.bo);bn=l+N(a.bo);s=bj-c;o=bm-d;p=bn-e;k=B$(s*s+o*o+p*p);s=s/k;o=o/k;p=p/k;k=0.5/(k/f+0.10000000149011612)*(N(a.bo)*N(a.bo)+0.30000001192092896);s=s*k;o=o*k;p=p*k;BY(a,B(367),(bj+c)/2.0,(bm+d)/2.0,(bn+e)/2.0,s,o,p);BY(a,B(273),bj,bm,bn,s,o,p);x=x+1|
0;}if(w>0){L();YT(Bcf.data[w],a,h,u,v,Cr(a,h,u,v),0.30000001192092896);By(a,h,u,v,0);Bcf.data[w].A2(a,h,u,v);}}y=y+(-1)|0;}}
function AAv(a,b,c){var d,e,f,g,h,i,j,k;d=1.0/((c.bv-c.bg)*2.0+1.0);e=1.0/((c.bs-c.bc)*2.0+1.0);f=1.0/((c.bw-c.bf)*2.0+1.0);g=0;h=0;i=0.0;while(i<=1.0){j=0.0;while(j<=1.0){k=0.0;while(k<=1.0){if(E1(a,BF(c.bg+(c.bv-c.bg)*i,c.bc+(c.bs-c.bc)*j,c.bf+(c.bw-c.bf)*k),b)===null)g=g+1|0;h=h+1|0;k=k+f;}j=j+e;}i=i+d;}return g/h;}
function AFA(a,b){var c,d;c=0;while(true){if(c>=a.dl.fi.q)return null;d=Bc(a.dl.fi,c);if(RQ(b,B5(d)))break;c=c+1|0;}return d;}
function SL(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y;if(b>=0&&c>=0&&d>=0&&b<a.o&&c<a.bu&&d<a.t){g=(((c<<10)+d|0)<<10)+b|0;h=1;a.hq.data[0]=b+(d<<10)|0;i=(-9999);L();if(!(e!=BdZ.b&&e!=Bcb.b))i=Bd2.b;if(!(e!=Bd0.b&&e!=Bcc.b))i=Bd3.b;while(true){j=0;k=(-1);l=0;m=(Bf5+1|0)<<16>>16;Bf5=m;if(m==30000){AFG(a.e0,0);Bf5=1;}while(h>0){h=h+(-1)|0;n=a.hq.data[h];if(a.e0.data[n]==Bf5)continue;o=n%1024|0;p=n/1024|0;q=p-d|0;q=K(q,q);while(o>0&&a.e0.data[n-1|0]!=Bf5&&!(a.b_.data[(K(K(c,a.t)+p|0,a.o)+o|0)-1|0]
!=e&&a.b_.data[(K(K(c,a.t)+p|0,a.o)+o|0)-1|0]!=f)){o=o+(-1)|0;n=n+(-1)|0;}if(o>0&&a.b_.data[(K(K(c,a.t)+p|0,a.o)+o|0)-1|0]==i)j=1;r=0;s=0;t=0;while(o<a.o&&a.e0.data[n]!=Bf5&&!(a.b_.data[K(K(c,a.t)+p|0,a.o)+o|0]!=e&&a.b_.data[K(K(c,a.t)+p|0,a.o)+o|0]!=f)){if(p<=0){u=h;v=r;}else{m=a.b_.data[K((K(c,a.t)+p|0)-1|0,a.o)+o|0];if(m==i)j=1;a:{b:{w=a.e0.data;x=n-1024|0;if(w[x]!=Bf5){if(m==e)break b;if(m==f)break b;}v=0;break a;}v=1;}if(!v)u=h;else if(r)u=h;else{w=a.hq.data;u=h+1|0;w[h]=x;}}if(p>=(a.t-1|0)){h=u;y=s;}else
{m=a.b_.data[K((K(c,a.t)+p|0)+1|0,a.o)+o|0];if(m==i)j=1;c:{d:{w=a.e0.data;x=n+1024|0;if(w[x]!=Bf5){if(m==e)break d;if(m==f)break d;}y=0;break c;}y=1;}if(!y)h=u;else if(s)h=u;else{w=a.hq.data;h=u+1|0;w[u]=x;}}if(c>=(a.bu-1|0)){m=l;x=t;}else{m=a.b_.data[K(K(c+1|0,a.t)+p|0,a.o)+o|0];x=m!=e&&m!=f?0:1;if(!x)m=l;else if(t)m=l;else{w=a.tF.data;m=l+1|0;w[l]=n;}}u=o-b|0;l=K(u,u)+q|0;if(l>k){g=(((c<<10)+p|0)<<10)+o|0;k=l;}w=a.e0.data;u=n+1|0;w[n]=Bf5;o=o+1|0;r=v;s=y;l=m;t=x;n=u;}if(o<a.o&&a.b_.data[K(K(c,a.t)+p|0,a.o)
+o|0]==i)j=1;}c=c+1|0;w=a.tF;a.tF=a.hq;a.hq=w;if(l<=0)break;h=l;}if(!j)return g;return (-9999);}return (-1);}
function AL7(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p;if(b>=0&&c>=0&&d>=0&&b<a.o&&c<a.bu&&d<a.t){g=(Bf5+1|0)<<16>>16;Bf5=g;if(g==30000){AFG(a.e0,0);Bf5=1;}h=1;a.hq.data[0]=b+(d<<10)|0;a:{b:{while(h>0){h=h+(-1)|0;i=a.hq.data[h];if(a.e0.data[i]==Bf5)continue;j=i%1024|0;k=i/1024|0;if(!j)break a;if(j==(a.o-1|0))break a;if(!c)break a;if(c==(a.bu-1|0))break a;if(!k)break a;if(k==(a.t-1|0))break a;while(j>0&&a.e0.data[i-1|0]!=Bf5&&!(a.b_.data[(K(K(c,a.t)+k|0,a.o)+j|0)-1|0]!=e&&a.b_.data[(K(K(c,a.t)+k|0,a.o)+j|0)-1|0]!=
f)){j=j+(-1)|0;i=i+(-1)|0;}if(j>0&&!a.b_.data[(K(K(c,a.t)+k|0,a.o)+j|0)-1|0])return 0;g=0;l=0;while(j<a.o&&a.e0.data[i]!=Bf5&&!(a.b_.data[K(K(c,a.t)+k|0,a.o)+j|0]!=e&&a.b_.data[K(K(c,a.t)+k|0,a.o)+j|0]!=f)){if(!j)break b;if(j==(a.o-1|0))break b;if(k<=0){b=h;m=g;}else{n=a.b_.data[K((K(c,a.t)+k|0)-1|0,a.o)+j|0];if(!n)return 0;c:{d:{o=a.e0.data;d=i-1024|0;if(o[d]!=Bf5){if(n==e)break d;if(n==f)break d;}m=0;break c;}m=1;}if(!m)b=h;else if(g)b=h;else{o=a.hq.data;b=h+1|0;o[h]=d;}}if(k>=(a.t-1|0))h=b;else{n=a.b_.data[K((K(c,
a.t)+k|0)+1|0,a.o)+j|0];if(!n)return 0;e:{f:{o=a.e0.data;g=i+1024|0;if(o[g]!=Bf5){if(n==e)break f;if(n==f)break f;}p=0;break e;}p=1;}if(!p)h=b;else if(l)h=b;else{o=a.hq.data;h=b+1|0;o[b]=g;}l=p;}a.e0.data[i]=Bf5;i=i+1|0;j=j+1|0;g=m;}if(j>=a.o)continue;if(!a.b_.data[K(K(c,a.t)+k|0,a.o)+j|0])return 0;}return 1;}return 2;}return 2;}return 0;}
function AD$(a,b,c,d,e){if(!e)c=c+(-1)|0;if(e==1)c=c+1|0;if(e==2)d=d+(-1)|0;if(e==3)d=d+1|0;if(e==4)b=b+(-1)|0;if(e==5)b=b+1|0;e=O(a,b,c,d);L();if(e==Bd1.b)By(a,b,c,d,0);}
function KU(a,b,c,d,e){e.Al=a;e.DD=b;e.FE=c;e.CV=d;BI(a.l9,C0((b+(c<<10)|0)+(d<<10<<10)|0),e);M(a.n3,e);}
function WZ(a,b,c,d){GD(a.n3,M4(a.l9,C0((b+(c<<10)|0)+(d<<10<<10)|0)));}
function FZ(a,b,c,d){var e,f,g;e=(b+(c<<10)|0)+(d<<10<<10)|0;f=Co(a.l9,C0(e));if(f===null){g=O(a,b,c,d);L();Bcf.data[g].gC(a,b,c,d);f=Co(a.l9,C0(e));}return f;}
function BY(a,b,c,d,e,f,g,h){var i;i=0;while(i<a.di.q){ABY(Bc(a.di,i),b,c,d,e,f,g,h);i=i+1|0;}}
function DN(a,b,c,d){var e,f,g,h,i;e=0;while(e<1000){f=(b+W(a.bo,16)|0)-W(a.bo,16)|0;g=(c+W(a.bo,16)|0)-W(a.bo,16)|0;h=(d+W(a.bo,16)|0)-W(a.bo,16)|0;i=O(a,f,g,h);if(i>0){L();Bcf.data[i].oL(a,f,g,h,a.Dv);}e=e+1|0;}}
function WG(a){var b;b=new S;V(b);return R(G(G(Bf(G(b,B(9)),a.j$.eW()),B(369)),AJ0(a.hT)));}
function AFz(a){var b,c;b=0;while(b<a.di.q){Bc(a.di,b);c=0;while(c<a.dl.fi.q){Bc(a.dl.fi,b);c=c+1|0;}b=b+1|0;}}
function XV(a,b){AAT(a.hT,b);}
function Md(a,b,c,d){if(a.kn.data[b+K(d,a.o)|0]<=c)return 1;while(c<a.bu){L();if(BdU.data[O(a,b,c,d)])return 0;c=c+1|0;}return 1;}
function ALH(){var b,c;Bf4=$rt_createFloatArray(16);b=0;while(b<=15){c=1.0-b/15.0;Bf4.data[b]=(1.0-c)/(c*3.0+1.0)*0.949999988079071+0.05000000074505806;b=b+1|0;}Bf5=0;}
function Kx(){var a=this;C.call(a);a.kH=null;a.cu=null;a.hl=null;a.nn=null;}
function E$(a,b){var c;c=b.yg();M(a.cu.data[c],b);}
function DS(a){var b,c,d,e;b=0;while(b<3){c=0;while(c<a.cu.data[b].q){d=Bc(a.cu.data[b],c);d.eP();if(!d.hL)e=c;else{d=a.cu.data[b];e=c+(-1)|0;Ej(d,c);}c=e+1|0;}b=b+1|0;}}
function ABB(a,b,c){var d,e,f,g,h,i,j,k,l,m,$p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=Bp(b.I*3.1415927410125732/180.0);e=Bv(b.I*3.1415927410125732/180.0);f= -e*Bv(b.X*3.1415927410125732/180.0);g=d*Bv(b.X*3.1415927410125732/180.0);h=Bp(b.X*3.1415927410125732/180.0);i=0;while(i<2){if(a.cu.data[i].q){if(!i){b=a.hl;j=B(370);$p=1;continue _;}if(i==1){b=a.hl;j=B(205);$p
=2;continue _;}Cj(3553,0);BD();j=Bc$;Bx(j);k=0;if(k<a.cu.data[i].q){l=Bc(a.cu.data[i],k);$p=3;continue _;}Bt(j);}i=i+1|0;}return;case 1:$z=AB2(b,j);if(I()){break _;}m=$z;a:while(true){if(i==1){b=a.hl;j=B(205);$p=2;continue _;}Cj(3553,m);BD();j=Bc$;Bx(j);k=0;if(k<a.cu.data[i].q){l=Bc(a.cu.data[i],k);$p=3;continue _;}Bt(j);while(true){i=i+1|0;if(i>=2)break a;if(!a.cu.data[i].q)continue;else break;}m=0;if(!i){b=a.hl;j=B(370);continue _;}}return;case 2:$z=AB2(b,j);if(I()){break _;}m=$z;a:while(true){Cj(3553,m);BD();j
=Bc$;Bx(j);k=0;if(k<a.cu.data[i].q){l=Bc(a.cu.data[i],k);$p=3;continue _;}Bt(j);while(true){i=i+1|0;if(i>=2)break a;if(!a.cu.data[i].q)continue;else break;}m=0;if(!i){b=a.hl;j=B(370);$p=1;continue _;}if(i==1){b=a.hl;j=B(205);continue _;}}return;case 3:l.jg(j,c,d,h,e,f,g);if(I()){break _;}k=k+1|0;a:while(true){if(k<a.cu.data[i].q){l=Bc(a.cu.data[i],k);continue _;}Bt(j);while(true){i=i+1|0;if(i>=2)break a;if(!a.cu.data[i].q)continue;else break;}if(!i){b=a.hl;j=B(370);$p=1;continue _;}if(i==1){b=a.hl;j=B(205);$p
=2;continue _;}Cj(3553,0);BD();j=Bc$;Bx(j);k=0;}return;default:F2();}}Dh().s(a,b,c,d,e,f,g,h,i,j,k,l,m,$p);}
function AIM(a,b){var c,d,e,f,g,h,i,j,$p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.cu.data[2].q){BD();c=Bc$;d=0;if(d<a.cu.data[2].q){e=Bc(a.cu.data[2],d);f=0.0;g=0.0;h=0.0;i=0.0;j=0.0;$p=1;continue _;}}return;case 1:e.jg(c,b,f,g,h,i,j);if(I()){break _;}d=d+1|0;if(d>=a.cu.data[2].q)return;e=Bc(a.cu.data[2],d);f=0.0;g=0.0;h=0.0;i=0.0;j=0.0;continue _;default:F2();}}Dh().s(a,b,c,d,e,f,g,
h,i,j,$p);}
function AKU(a,b){var c;a.kH=b;c=0;while(c<3){ER(a.cu.data[c]);c=c+1|0;}}
function AN3(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o;a:{e=O(a.kH,b,c,d);if(e){L();f=Bcf.data[e];g=0;h=b;i=c;j=d;while(true){if(g>=4)break a;k=0;while(k<4){l=0;while(l<4){m=h+(g+0.5)/4.0;n=i+(k+0.5)/4.0;o=j+(l+0.5)/4.0;E$(a,AY$(a.kH,m,n,o,m-h-0.5,n-i-0.5,o-j-0.5,f));l=l+1|0;}k=k+1|0;}g=g+1|0;}}}}
function EK(a,b,c,d,e){var f,g,h,i,j,k,l,m;f=O(a.kH,b,c,d);if(f){L();g=Bcf.data[f];h=b;i=h+N(a.nn)*(g.fC-g.ew-0.20000000298023224)+0.10000000149011612+g.ew;j=c;k=j+N(a.nn)*(g.cD-g.ch-0.20000000298023224)+0.10000000149011612+g.ch;l=d;m=l+N(a.nn)*(g.fB-g.ev-0.20000000298023224)+0.10000000149011612+g.ev;if(!e)k=j+g.ch-0.10000000149011612;if(e==1)k=j+g.cD+0.10000000149011612;if(e==2)m=l+g.ev-0.10000000149011612;if(e==3)m=l+g.fB+0.10000000149011612;if(e==4)i=h+g.ew-0.10000000149011612;if(e==5)i=h+g.fC+0.10000000149011612;E$(a,
ANc(ACB(AY$(a.kH,i,k,m,0.0,0.0,0.0,g),0.20000000298023224),0.6000000238418579));}}
function Sw(a){var b;b=new S;V(b);return R(Bf(G(b,B(9)),(a.cu.data[0].q+a.cu.data[1].q|0)+a.cu.data[2].q|0));}
function GB(){C.call(this);this.nm=0.0;}
function Bf6(){var a=new GB();JH(a);return a;}
function JH(a){a.nm=0.0;}
function AF1(b,c,d,e,f){var g,h,i,j,k,l,m,n;g=(f>>>24)/255.0;h=(f>>16&255)/255.0;i=(f>>8&255)/255.0;j=(f&255)/255.0;BD();k=Bc$;Y(3042);Bb(3553);Dy(770,771);BJ(h,i,j,g);Bx(k);l=b;m=e;Bo(k,l,m,0.0);n=d;Bo(k,n,m,0.0);m=c;Bo(k,n,m,0.0);Bo(k,l,m,0.0);Bt(k);Y(3553);Bb(3042);}
function Pv(b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q,r,s;h=(f>>>24)/255.0;i=(f>>16&255)/255.0;j=(f>>8&255)/255.0;k=(f&255)/255.0;l=(g>>>24)/255.0;m=(g>>16&255)/255.0;n=(g>>8&255)/255.0;o=(g&255)/255.0;Bb(3553);Y(3042);Bb(3008);Dy(770,771);BD();p=Bc$;Bx(p);Oa(p,i,j,k,h);q=d;r=c;Bo(p,q,r,0.0);s=b;Bo(p,s,r,0.0);Oa(p,m,n,o,l);r=e;Bo(p,s,r,0.0);Bo(p,q,r,0.0);Bt(p);Bb(3042);Y(3008);Y(3553);}
function Eh(b,c,d,e,f){CG(b,c,d-(Ei(b,c)/2|0)|0,e,f);}
function NV(b,c,d,e,f){CG(b,c,d,e,f);}
function CD(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o;BD();h=Bc$;Bx(h);i=b;j=c+g|0;k=a.nm;l=d*0.00390625;m=(e+g|0)*0.00390625;F(h,i,j,k,l,m);n=b+f|0;o=a.nm;k=(d+f|0)*0.00390625;F(h,n,j,o,k,m);o=c;m=a.nm;j=e*0.00390625;F(h,n,o,m,k,j);F(h,i,o,a.nm,l,j);Bt(h);}
function Jd(){var a=this;GB.call(a);a.hr=null;a.n5=null;a.ci=null;a.nZ=0;}
var Bf7=null;function ADB(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,$p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();be=$T.l();bd=$T.l();bc=$T.l();bb=$T.l();ba=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=G8(a.ci.cn,a.ci.cp);d=ADS(c);e=AKr(c);f=a.ci.ji;O9(a.ci.cH);g
=3553;c=a.ci.cd;h=B(371);$p=1;case 1:$z=AB2(c,h);if(I()){break _;}i=$z;Cj(g,i);BJ(1.0,1.0,1.0,1.0);Y(3042);j=a.ci.a.F;a.nm=(-90.0);k=d/2|0;l=k-91|0;m=e-22|0;CD(a,l,m,0,0,182,22);CD(a,(l-1|0)+(j.J*20|0)|0,m-1|0,0,22,24,22);g=3553;c=a.ci.cd;h=B(372);$p=2;case 2:$z=AB2(c,h);if(I()){break _;}i=$z;Cj(g,i);Y(3042);Dy(775,769);CD(a,k-7|0,(e/2|0)-7|0,0,0,16,16);Bb(3042);n=((a.ci.a.hV/3|0)%2|0)!=1?0:1;if(a.ci.a.hV<10)n=0;a:{o=a.ci.a.b0;p=a.ci.a.rA;AKT(a.n5,Long_fromInt(K(a.nZ,312871)));if(AIG(a.ci.P)){g=W4(a.ci.a.F);q
=0;r=e-32|0;s=k+91|0;m=Bw(o,4);while(q<10){if(g>0){t=(s-(q<<3)|0)-9|0;i=Bw((q<<1)+1|0,g);if(i<0)CD(a,t,r,34,9,9,9);if(!i)CD(a,t,r,25,9,9,9);if(i>0)CD(a,t,r,16,9,9,9);}u=0;if(n)u=1;v=l+(q<<3)|0;i=m>0?r:r+W(a.n5,2)|0;CD(a,v,i,16+(u*9|0)|0,0,9,9);if(n){t=Bw((q<<1)+1|0,p);if(t<0)CD(a,v,i,70,0,9,9);if(!t)CD(a,v,i,79,0,9,9);}t=Bw((q<<1)+1|0,o);if(t<0)CD(a,v,i,52,0,9,9);if(!t)CD(a,v,i,61,0,9,9);q=q+1|0;}if(D4(a.ci.a)){g=WQ((a.ci.a.h2-2|0)*10.0/300.0)|0;m=(WQ(a.ci.a.h2*10.0/300.0)|0)-g|0;t=0;i=g+m|0;w=r-9|0;while(true)
{if(t>=i)break a;if(t>=g)CD(a,l+(t<<3)|0,w,25,18,9,9);else CD(a,l+(t<<3)|0,w,16,18,9,9);t=t+1|0;}}}}Bb(3042);Y(2977);Ca();Bs(180.0,1.0,0.0,0.0);I4();BR();l=0;g=k-90|0;k=(e-16|0)-3|0;i=k+12|0;x=i;y= -i;while(l<9){i=(g+(l*20|0)|0)+2|0;z=a.ci.a.F.br.data[l];if(z!==null){ba=z.kU-b;q=Bw(ba,0.0);if(q>0){Ca();bb=1.0+ba/5.0;m=i+8|0;Bj(m,x,0.0);C7(1.0/bb,(bb+1.0)/2.0,1.0);Bj( -m,y,0.0);}c=Bf7;h=a.ci.cd;$p=3;continue _;}l=l+1|0;}D9();Bb(2977);if(!a.ci.d.kb)CG(f,B(373),2,2,16777215);else{CG(f,B(373),2,2,16777215);CG(f,
a.ci.oo,2,12,16777215);CG(f,YE(a.ci.cw),2,22,16777215);CG(f,RH(a.ci.cw),2,32,16777215);c=a.ci;CG(f,B3(G(G(G(G(Cd(),B(374)),Sw(c.bI)),B(375)),WG(c.i))),2,42,16777215);bc=Ne();bd=NR();be=Long_sub(bc,MI());h=B3(G(DZ(G(DZ(G(Cd(),B(376)),Long_div(Long_mul(be,Long_fromInt(100)),bc)),B(377)),Long_div(Long_div(bc,Long_fromInt(1024)),Long_fromInt(1024))),B(378)));NV(f,h,(d-Ei(f,h)|0)-2|0,2,14737632);c=B3(G(DZ(G(DZ(G(Cd(),B(379)),Long_div(Long_mul(bd,Long_fromInt(100)),bc)),B(380)),Long_div(Long_div(bd,Long_fromInt(1024)),
Long_fromInt(1024))),B(381)));NV(f,c,(d-Ei(f,c)|0)-2|0,12,14737632);}m=0;h=null;q=e-8|0;while(m<CE(a.hr)&&m<10){if(Bc(a.hr,m).rB<200){Bc(a.hr,m);CG(f,h,2,(q-(m*9|0)|0)-20|0,16777215);}m=m+1|0;}return;case 3:AKN(c,h,z,i,k);if(I()){break _;}if(q>0)BR();Pi(Bf7,a.ci.ji,z,i,k);while(true){l=l+1|0;if(l>=9)break;i=(g+(l*20|0)|0)+2|0;z=a.ci.a.F.br.data[l];if(z===null)continue;else{ba=z.kU-b;q=Bw(ba,0.0);if(q>0){Ca();bb=1.0+ba/5.0;m=i+8|0;Bj(m,x,0.0);C7(1.0/bb,(bb+1.0)/2.0,1.0);Bj( -m,y,0.0);}c=Bf7;h=a.ci.cd;continue _;}}D9();Bb(2977);if
(!a.ci.d.kb)CG(f,B(373),2,2,16777215);else{CG(f,B(373),2,2,16777215);CG(f,a.ci.oo,2,12,16777215);CG(f,YE(a.ci.cw),2,22,16777215);CG(f,RH(a.ci.cw),2,32,16777215);c=a.ci;CG(f,B3(G(G(G(G(Cd(),B(374)),Sw(c.bI)),B(375)),WG(c.i))),2,42,16777215);bc=Ne();bd=NR();be=Long_sub(bc,MI());h=B3(G(DZ(G(DZ(G(Cd(),B(376)),Long_div(Long_mul(be,Long_fromInt(100)),bc)),B(377)),Long_div(Long_div(bc,Long_fromInt(1024)),Long_fromInt(1024))),B(378)));NV(f,h,(d-Ei(f,h)|0)-2|0,2,14737632);c=B3(G(DZ(G(DZ(G(Cd(),B(379)),Long_div(Long_mul(bd,
Long_fromInt(100)),bc)),B(380)),Long_div(Long_div(bd,Long_fromInt(1024)),Long_fromInt(1024))),B(381)));NV(f,c,(d-Ei(f,c)|0)-2|0,12,14737632);}m=0;h=null;q=e-8|0;while(m<CE(a.hr)&&m<10){if(Bc(a.hr,m).rB<200){Bc(a.hr,m);CG(f,h,2,(q-(m*9|0)|0)-20|0,16777215);}m=m+1|0;}return;default:F2();}}Dh().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,$p);}
function ADx(a){var b,c;a.nZ=a.nZ+1|0;b=0;while(b<a.hr.q){c=Bc(a.hr,b);c.rB=c.rB+1|0;b=b+1|0;}}
function AJ4(){Bf7=AM0();}
function Ds(){Cq.call(this);}
function H7(){var a=this;C.call(a);a.o0=null;a.rI=0;a.yI=0;a.yJ=0;a.yK=0;a.n0=0;a.m4=0;a.mY=0;a.gz=0;a.ob=null;a.D2=0;a.z0=0;a.CA=0;a.pK=0;a.w9=null;a.Aj=null;a.jO=0;}
var Bf8=null;var Bcd=0;function AKo(){AKo=Bl(H7);A7N();}
function AN2(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;a:{if(a.pK){Bcd=Bcd+1|0;b=a.yI;c=a.yJ;d=a.yK;e=a.yI+a.n0|0;f=a.yJ+a.m4|0;g=a.yK+a.mY|0;h=0;while(h<2){a.ob.data[h]=1;h=h+1|0;}i=0;while(true){if(i>=2)break a;j=0;k=0;Bx(Bf8);EX(a.rI+i|0,4864);l=c;while(l<f){m=d;while(m<g){n=K(K(l,a.o0.t)+m|0,a.o0.o)+b|0;o=b;while(o<e){p=a.o0.b_.data;h=n+1|0;q=p[n]&255;if(q>0){L();r=Bcf.data[q];if(r.yj()!=i)j=1;else k=k|Ow(a.Aj,r,o,l,m);}o=o+1|0;n=h;}m=m+1|0;}l=l+1|0;}Bt(Bf8);E5();if(k)a.ob.data[i]=0;if(!j)break;i=i+1|0;}}}}
function IP(a,b){var c,d,e;c=b.f-a.D2;d=b.j-a.z0;e=b.g-a.CA;return c*c+d*d+e*e;}
function Y6(a){var b;b=0;while(b<2){a.ob.data[b]=1;b=b+1|0;}}
function AFv(a){Y6(a);a.o0=null;}
function AFw(a,b,c,d){var e;if(!a.gz)return c;if(a.ob.data[d])e=c;else{b=b.data;e=c+1|0;b[c]=a.rI+d|0;}return e;}
function ADr(a,b){a.gz=Pw(b,a.w9);}
function A7N(){BD();Bf8=Bc$;Bcd=0;}
function CV(){var a=this;GB.call(a);a.x=null;a.bq=0;a.bM=0;a.ba=null;a.n6=0;a.cJ=null;}
function Bf9(){var a=new CV();Fo(a);return a;}
function Fo(a){JH(a);a.ba=BU();a.n6=0;}
function ANU(a,b,c,d){var e,f,g,$p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:e=0;if(e>=a.ba.q)return;f=Bc(a.ba,e);g=a.x;$p=1;case 1:AEQ(f,g,b,c);if(I()){break _;}e=e+1|0;if(e>=a.ba.q)return;f=Bc(a.ba,e);g=a.x;continue _;default:F2();}}Dh().s(a,b,c,d,e,f,g,$p);}
function AMU(a,b,c){var d,e,$p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(c!=1)return;d=a.x;e=null;$p=1;case 1:AOJ(d,e);if(I()){break _;}d=a.x;$p=2;case 2:AEh(d);if(I()){break _;}return;default:F2();}}Dh().s(a,b,c,d,e,$p);}
function AFb(a,b,c,d){var e,f,$p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a:{if(!d){e=0;while(true){if(e>=a.ba.q)break a;f=Bc(a.ba,e);if(RR(f,b,c)){$p=1;continue _;}e=e+1|0;}}}return;case 1:a.iT(f);if(I()){break _;}while(true){e=e+1|0;if(e>=a.ba.q)break;f=Bc(a.ba,e);if(!RR(f,b,c))continue;else{continue _;}}return;default:F2();}}Dh().s(a,b,c,d,e,f,$p);}
function AFK(a,b){return;}
function OX(a,b,c,d){a.x=b;a.cJ=b.ji;a.bq=c;a.bM=d;a.hS();}
function AWN(a){return;}
function ALy(a){var b,c,d,$p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!Cv()){Qy();SM();C3();return;}b=K(Qy(),a.bq)/a.x.cn|0;c=(a.bM-(K(SM(),a.bM)/a.x.cp|0)|0)-1|0;d=C3();$p=1;case 1:a.IK(b,c,d);if(I()){break _;}return;default:F2();}}Dh().s(a,b,c,d,$p);}
function AEp(a){var b,c,d,$p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!C6())return;if(Bak===null)b=0;else{c=$rt_str(Bak.key);b=Bak===null?32:Q(c)>1?0:P(c,0);}d=Bi();$p=1;case 1:a.pC(b,d);if(I()){break _;}return;default:F2();}}Dh().s(a,b,c,d,$p);}
function AJP(a){return;}
function A3z(a){return;}
function AAW(a){var b,c,d,e,f,$p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.x.i!==null){Pv(0,0,a.bq,a.bM,1610941696,(-1607454624));return;}Bb(2896);Bb(2912);BD();b=Bc$;c=3553;d=a.x.cd;e=B(227);$p=1;case 1:$z=AB2(d,e);if(I()){break _;}f=$z;Cj(c,f);BJ(1.0,1.0,1.0,1.0);Bx(b);Ii(b,4210752);F(b,0.0,a.bM,0.0,0.0,a.bM/32.0);F(b,a.bq,a.bM,0.0,a.bq/32.0,a.bM/32.0);F(b,a.bq,0.0,0.0,a.bq/32.0,0.0);F(b,0.0,0.0,0.0,0.0,0.0);Bt(b);return;default:
F2();}}Dh().s(a,b,c,d,e,f,$p);}
function AZ9(a){return 1;}
function ACn(){CV.call(this);this.wn=null;}
function ASV(){var a=new ACn();A7q(a);return a;}
function A7q(a){Fo(a);a.wn=B(382);}
function AJ$(a,b,c){return;}
function A7A(a){ER(a.ba);M(a.ba,CL(1,(a.bq/2|0)-100|0,(a.bM/4|0)+72|0,B(383)));M(a.ba,CL(2,(a.bq/2|0)-100|0,(a.bM/4|0)+48|0,B(384)));M(a.ba,CL(3,(a.bq/2|0)-100|0,(a.bM/4|0)+96|0,B(385)));M(a.ba,CL(0,(a.bq/2|0)-100|0,((a.bM/4|0)+120|0)+12|0,B(386)));if(A_w===null)Bc(a.ba,1).fb=0;Bc(a.ba,2).fb=0;}
function AJb(a,b){var c,d,$p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!b.bC){c=a.x;d=AFF(a,a.x.d);$p=1;continue _;}if(b.bC==1){c=a.x;d=LP(a);$p=2;continue _;}if(b.bC!=2)return;c=new FO;d=Bb_;$p=3;continue _;case 1:AOJ(c,d);if(I()){break _;}if(b.bC==1){c=a.x;d=LP(a);$p=2;continue _;}if(b.bC!=2)return;c=new FO;d=Bb_;$p=3;continue _;case 2:AOJ(c,d);if(I()){break _;}if(b.bC!=2)return;c=new FO;d=Bb_;$p=3;case 3:$z=AMz(c);if(I()){break _;}b=$z;$p
=4;case 4:AC$(d,b);if(I()){break _;}b=a.x;c=null;$p=5;case 5:AOJ(b,c);if(I()){break _;}return;default:F2();}}Dh().s(a,b,c,d,$p);}
function AMH(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,$p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AAW(a);if(I()){break _;}BD();e=Bc$;f=3553;g=a.x.cd;h=B(387);$p=2;case 2:$z=AB2(g,h);if(I()){break _;}i=$z;Cj(f,i);BJ(1.0,1.0,1.0,1.0);Ii(e,16777215);CD(a,(a.bq-256|0)/2|0,30,0,0,256,49);Ca();Bj((a.bq/2|0)+90|0,70.0,0.0);Bs((-20.0),0.0,0.0,1.0);j=Bv(Long_toNumber(Long_rem(CF(),
Long_fromInt(1000)))/1000.0*3.1415927410125732*2.0)*0.10000000149011612;if(j<0.0)j= -j;k=(1.7999999523162842-j)*100.0/(Ei(a.cJ,a.wn)+32|0);C7(k,k,k);Eh(a.cJ,a.wn,0,(-8),16776960);BR();CG(a.cJ,B(388),(a.bq-Ei(a.cJ,B(388))|0)-2|0,a.bM-10|0,16777215);l=Ne();m=NR();n=Long_sub(l,MI());e=new S;V(e);e=R(G(DZ(G(DZ(G(e,B(376)),Long_div(Long_mul(n,Long_fromInt(100)),l)),B(377)),Long_div(Long_div(l,Long_fromInt(1024)),Long_fromInt(1024))),B(378)));CG(a.cJ,e,(a.bq-Ei(a.cJ,e)|0)-2|0,2,8421504);e=new S;V(e);h=R(G(DZ(G(DZ(G(e,
B(379)),Long_div(Long_mul(m,Long_fromInt(100)),l)),B(380)),Long_div(Long_div(m,Long_fromInt(1024)),Long_fromInt(1024))),B(381)));CG(a.cJ,h,(a.bq-Ei(a.cJ,h)|0)-2|0,12,8421504);$p=3;case 3:ANU(a,b,c,d);if(I()){break _;}return;default:F2();}}Dh().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,$p);}
function F4(){BA.call(this);}
function Ho(){}
function YY(){C.call(this);this.AR=null;}
function AIh(a){var b,c,d,$$je,$p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=a.AR;try{Bdi=Bdi+1|0;FU(b);$p=1;continue _;}catch($$e){$$je=Bh($$e);c=$$je;}d=b.nc;$p=2;continue _;case 1:a:{try{b.hK();if(I()){break _;}}catch($$e){$$je=Bh($$e);c=$$je;break a;}c=b.nc;$p=3;continue _;}d=b.nc;$p=2;case 2:AEM(d);if(I()){break _;}a:{try{ZQ(b.nc);Pd(d);break a;}catch($$e){$$je=Bh($$e);b=$$je;}Pd(d);J(b);}b.wY=0;Bdi=Bdi-1|0;FU(Bdg);J(c);case 3:AEM(c);if
(I()){break _;}a:{try{ZQ(b.nc);Pd(c);break a;}catch($$e){$$je=Bh($$e);b=$$je;}Pd(c);J(b);}b.wY=0;Bdi=Bdi-1|0;FU(Bdg);return;default:F2();}}Dh().s(a,b,c,d,$p);}
function E2(){var a=this;C.call(a);a.hN=null;a.v4=0.0;a.v6=0.0;}
function Hx(a,b,c,d,e){var f=new E2();A5_(f,a,b,c,d,e);return f;}
function A5_(a,b,c,d,e,f){a.hN=BF(b,c,d);a.v4=e;a.v6=f;}
function K7(a,b,c){var d;d=new E2;d.hN=a.hN;d.v4=b;d.v6=c;return d;}
function Gd(){C.call(this);this.hh=null;}
function Bf$(a,b,c,d,e){var f=new Gd();HG(f,a,b,c,d,e);return f;}
function HG(a,b,c,d,e,f){var g,h,i,j,k,l;g=b.data;a.hh=b;h=g[0];i=e/64.0-0.0015625000232830644;j=d/32.0+0.0031250000465661287;g[0]=K7(h,i,j);h=g[1];k=c/64.0+0.0015625000232830644;g[1]=K7(h,k,j);h=g[2];l=f/32.0-0.0031250000465661287;g[2]=K7(h,k,l);g[3]=K7(g[3],i,l);}
function MR(){var a=this;C.call(a);a.bV=0;a.o6=0;a.sy=Long_ZERO;a.bH=Long_ZERO;a.pe=0;a.dN=0;a.yH=0;a.iF=null;a.v=null;a.eD=0;a.iN=0;a.yu=null;a.cC=null;a.fS=null;}
var Bf_=null;function AFY(a){var b;if(a.v===null)return (-2);b=a.v;a.v.nM=Long_ZERO;b.y=Long_ZERO;a.v.ca=null;a.bV=14;a.iN=(-1);KS(a.iF);return 0;}
function AFZ(a){if(a.iF!==null)U6(a.iF);return 0;}
function AAc(a,b){var c,d,e,f;a.v.ca=null;a.iF=null;a.dN=0;if(b<0)b= -b;else if(b&1073741824){a.dN=4;b=b&(-1073741825);if(b<48)b=b&15;}else if(b&(-32)){a.dN=4;b=b&15;}else{a.dN=(b>>4)+1|0;if(b<48)b=b&15;}if(b>=8&&b<=15){if(a.iF!==null&&a.yH!=b){U6(a.iF);a.iF=null;}a.yH=b;c=new LD;d=a.v;b=1<<b;c.sQ=$rt_createIntArray(1);c.pd=$rt_createIntArray(1);c.nl=$rt_createIntArray(1);c.nj=$rt_createIntArray(1);c.wa=H($rt_arraycls($rt_intcls()),1);c.wc=H($rt_arraycls($rt_intcls()),1);c.vB=$rt_createIntArray(1);c.vG=$rt_createIntArray(1);e
=new F3;e.kg=null;e.kp=null;e.eJ=null;e.fF=null;e.lI=null;e.ir=null;c.xA=e;c.p=d;e=new MH;f=c.p;e.lv=0;e.bb=f;e.u=c;c.p1=e;c.ky=$rt_createIntArray(4320);c.cR=$rt_createByteArray(b);c.cL=b;c.rL=d.jE.dN?1:0;c.dB=0;KS(c);a.iF=c;AFY(a);return 0;}AFZ(a);return (-2);}
function AGu(a,b){var c,d,e,f,g,h,i,$$je;if(a.v!==null&&a.v.cl!==null){c=b!=4?0:(-5);d=(-5);a:{b:{c:{d:{e:{f:{g:{h:{i:while(true){j:{k:{l:{m:{n:{o:{p:{q:{r:{s:{t:{u:{v:{w:{switch(a.bV){case 6:a.bV=13;a.v.ca=B(389);a.pe=0;return (-2);case 7:d=ABx(a.iF,d);if(d==(-3)){a.bV=13;a.pe=0;continue i;}if(!d)d=c;if(d!=1)break i;a.sy=a.v.f4.zB();KS(a.iF);if(!a.dN){a.bV=12;d=c;continue i;}a.bV=8;d=c;break w;case 12:break e;case 13:return (-3);case 14:break r;case 23:try{d=GG(a,2,d,c);}catch($$e){$$je=Bh($$e);if($$je instanceof D$)
{e=$$je;return e.hw;}else{throw $$e;}}a.eD=a.bH.lo&65535;if((a.eD&255)!=8){a.v.ca=B(390);a.bV=13;continue i;}if(a.eD&57344){a.v.ca=B(391);a.bV=13;continue i;}if(a.eD&512)Jt(a,2,a.bH);a.bV=16;break p;case 2:break d;case 3:break c;case 4:break b;case 5:c=d;break a;case 8:break w;case 9:break v;case 10:break u;case 11:break t;case 15:break s;case 16:break p;case 17:break o;case 18:break n;case 19:break q;case 20:break l;case 21:break k;case 22:break;default:return (-2);}break j;}if(!a.v.E)return d;e=a.v;e.E=e.E
-1|0;e=a.v;e.y=Long_add(e.y,Long_fromInt(1));f=a.v.cl.data;e=a.v;b=e.r;e.r=b+1|0;a.bH=Long_and(Long_fromInt((f[b]&255)<<24),new Long(4278190080, 0));a.bV=9;d=c;}if(!a.v.E)return d;e=a.v;e.E=e.E-1|0;e=a.v;e.y=Long_add(e.y,Long_fromInt(1));g=a.bH;f=a.v.cl.data;e=a.v;b=e.r;e.r=b+1|0;a.bH=Long_add(g,Long_and(Long_fromInt((f[b]&255)<<16),Long_fromInt(16711680)));a.bV=10;d=c;}if(!a.v.E)return d;e=a.v;e.E=e.E-1|0;e=a.v;e.y=Long_add(e.y,Long_fromInt(1));g=a.bH;f=a.v.cl.data;e=a.v;b=e.r;e.r=b+1|0;a.bH=Long_add(g,Long_and(Long_fromInt((f[b]
&255)<<8),Long_fromInt(65280)));a.bV=11;d=c;}if(!a.v.E)return d;e=a.v;e.E=e.E-1|0;e=a.v;e.y=Long_add(e.y,Long_fromInt(1));g=a.bH;f=a.v.cl.data;e=a.v;b=e.r;e.r=b+1|0;a.bH=Long_add(g,Long_and(Long_fromInt(f[b]),Long_fromInt(255)));if(a.eD)a.bH=Long_and(Long_or(Long_or(Long_or(Long_shr(Long_and(a.bH,Long_fromInt(-16777216)),24),Long_shr(Long_and(a.bH,Long_fromInt(16711680)),8)),Long_shl(Long_and(a.bH,Long_fromInt(65280)),8)),Long_shl(Long_and(a.bH,Long_fromInt(65535)),24)),new Long(4294967295, 0));if(a.sy.lo!=
a.bH.lo)a.v.ca=B(392);else if(a.eD&&a.cC!==null)a.cC.IM=a.bH;a.bV=15;d=c;}if(!(a.dN&&a.eD)){if(a.v.ca===null)break f;if(!BW(a.v.ca,B(392)))break f;a.bV=13;a.pe=5;continue i;}try{d=GG(a,4,d,c);}catch($$e){$$je=Bh($$e);if($$je instanceof D$){e=$$je;return e.hw;}else{throw $$e;}}if(a.v.ca!==null&&BW(a.v.ca,B(392))){a.bV=13;a.pe=5;continue i;}if(Long_eq(a.bH,Long_and(a.v.nM,new Long(4294967295, 0)))){a.v.ca=null;break f;}a.v.ca=B(393);a.bV=13;continue i;}if(!a.dN){a.bV=7;continue i;}try{d=GG(a,2,d,c);}catch($$e)
{$$je=Bh($$e);if($$je instanceof D$){e=$$je;return e.hw;}else{throw $$e;}}if(!(a.dN!=4&&!(a.dN&2))&&Long_eq(a.bH,Long_fromInt(35615))){if(a.dN==4)a.dN=2;a.v.f4=ASq();Jt(a,2,a.bH);if(a.cC===null)a.cC=A$P();a.bV=23;continue i;}if(a.dN&2){a.bV=13;a.v.ca=B(394);continue i;}a.eD=0;a.o6=a.bH.lo&255;h=Long_shr(a.bH,8).lo&255;if(!(a.dN&1&&!(((a.o6<<8)+h|0)%31|0))&&(a.o6&15)!=8){if(a.dN!=4){a.bV=13;a.v.ca=B(394);continue i;}e=a.v;e.r=e.r-2|0;e=a.v;e.E=e.E+2|0;e=a.v;e.y=Long_sub(e.y,Long_fromInt(2));a.dN=0;a.bV=7;continue i;}if
((a.o6&15)!=8){a.bV=13;a.v.ca=B(390);continue i;}if(a.dN==4)a.dN=1;if(((a.o6>>4)+8|0)>a.yH){a.bV=13;a.v.ca=B(395);continue i;}a.v.f4=A6s();if(h&32){a.bV=2;break d;}a.bV=7;continue i;}break m;}try{d=GG(a,4,d,c);}catch($$e){$$je=Bh($$e);if($$je instanceof D$){e=$$je;return e.hw;}else{throw $$e;}}if(a.cC!==null)a.cC.I7=a.bH;if(a.eD&512)Jt(a,4,a.bH);a.bV=17;}try{d=GG(a,2,d,c);}catch($$e){$$je=Bh($$e);if($$je instanceof D$){e=$$je;return e.hw;}else{throw $$e;}}if(a.cC!==null){a.cC.J$=a.bH.lo&255;a.cC.Ct=a.bH.lo>>
8&255;}if(a.eD&512)Jt(a,2,a.bH);a.bV=18;}if(a.eD&1024){try{d=GG(a,2,d,c);}catch($$e){$$je=Bh($$e);if($$je instanceof D$){e=$$je;return e.hw;}else{throw $$e;}}if(a.cC!==null)a.cC.pR=$rt_createByteArray(a.bH.lo&65535);if(a.eD&512)Jt(a,2,a.bH);}else if(a.cC!==null)a.cC.pR=null;a.bV=19;}if(a.eD&1024)x:{try{d=AKS(a,d,c);if(a.cC===null)break x;f=HP(a.fS);i=f.data;a.fS=null;b=i.length;if(b!=a.cC.pR.data.length){a.v.ca=B(396);a.bV=13;continue i;}CT(f,0,a.cC.pR,0,b);break x;}catch($$e){$$je=Bh($$e);if($$je instanceof D$)
{e=$$je;return e.hw;}else{throw $$e;}}}else if(a.cC!==null)a.cC.pR=null;a.bV=20;}y:{if(a.eD&2048){z:{try{d=Ro(a,d,c);if(a.cC===null)break z;a.cC.zN=HP(a.fS);break z;}catch($$e){$$je=Bh($$e);if($$je instanceof D$){e=$$je;break h;}else{throw $$e;}}}try{a.fS=null;break y;}catch($$e){$$je=Bh($$e);if($$je instanceof D$){e=$$je;break h;}else{throw $$e;}}}else if(a.cC!==null)a.cC.zN=null;}a.bV=21;}ba:{if(a.eD&4096){bb:{try{d=Ro(a,d,c);if(a.cC===null)break bb;a.cC.BD=HP(a.fS);break bb;}catch($$e){$$je=Bh($$e);if($$je instanceof D$)
{e=$$je;break g;}else{throw $$e;}}}try{a.fS=null;break ba;}catch($$e){$$je=Bh($$e);if($$je instanceof D$){e=$$je;break g;}else{throw $$e;}}}else if(a.cC!==null)a.cC.BD=null;}a.bV=22;}if(a.eD&512){try{d=GG(a,2,d,c);}catch($$e){$$je=Bh($$e);if($$je instanceof D$){e=$$je;return e.hw;}else{throw $$e;}}if(a.cC!==null)a.cC.K0=Long_and(a.bH,Long_fromInt(65535)).lo;if(Long_ne(a.bH,Long_and(a.v.f4.zB(),Long_fromInt(65535)))){a.bV=13;a.v.ca=B(397);a.pe=5;continue;}}a.v.f4=ASq();a.bV=7;}return d;}return e.hw;}return e.hw;}a.bV
=12;}return 1;}if(!a.v.E)return d;e=a.v;e.E=e.E-1|0;e=a.v;e.y=Long_add(e.y,Long_fromInt(1));f=a.v.cl.data;e=a.v;d=e.r;e.r=d+1|0;a.bH=Long_and(Long_fromInt((f[d]&255)<<24),new Long(4278190080, 0));a.bV=3;d=c;}if(!a.v.E)return d;e=a.v;e.E=e.E-1|0;e=a.v;e.y=Long_add(e.y,Long_fromInt(1));g=a.bH;f=a.v.cl.data;e=a.v;d=e.r;e.r=d+1|0;a.bH=Long_add(g,Long_and(Long_fromInt((f[d]&255)<<16),Long_fromInt(16711680)));a.bV=4;d=c;}if(!a.v.E)return d;e=a.v;e.E=e.E-1|0;e=a.v;e.y=Long_add(e.y,Long_fromInt(1));g=a.bH;f=a.v.cl.data;e
=a.v;b=e.r;e.r=b+1|0;a.bH=Long_add(g,Long_and(Long_fromInt((f[b]&255)<<8),Long_fromInt(65280)));a.bV=5;}if(!a.v.E)return c;e=a.v;e.E=e.E-1|0;e=a.v;e.y=Long_add(e.y,Long_fromInt(1));g=a.bH;f=a.v.cl.data;e=a.v;b=e.r;e.r=b+1|0;a.bH=Long_add(g,Long_and(Long_fromInt(f[b]),Long_fromInt(255)));a.v.f4.FT(a.bH);a.bV=6;return 2;}if(b==4&&a.bV==14)return 0;return (-2);}
function GG(a,b,c,d){var e,f,g,h;if(a.iN==(-1)){a.iN=b;a.bH=Long_ZERO;}while(true){if(a.iN<=0){if(b==2)a.bH=Long_and(a.bH,Long_fromInt(65535));else if(b==4)a.bH=Long_and(a.bH,new Long(4294967295, 0));a.iN=(-1);return c;}if(!a.v.E)break;e=a.v;e.E=e.E-1|0;e=a.v;e.y=Long_add(e.y,Long_fromInt(1));f=a.bH;g=a.v.cl.data;e=a.v;h=e.r;e.r=h+1|0;a.bH=Long_or(f,Long_fromInt((g[h]&255)<<((b-a.iN|0)*8|0)));a.iN=a.iN-1|0;c=d;}J(AGM(a,c));}
function Ro(a,b,c){var d,e;if(a.fS===null)a.fS=O0();while(true){if(!a.v.E)J(AGM(a,b));d=a.v;d.E=d.E-1|0;d=a.v;d.y=Long_add(d.y,Long_fromInt(1));e=a.v.cl.data[a.v.r];if(e)TB(a.fS,a.v.cl,a.v.r,1);a.v.f4.k5(a.v.cl,a.v.r,1);d=a.v;d.r=d.r+1|0;if(!e)break;b=c;}return c;}
function AKS(a,b,c){var d;if(a.fS===null)a.fS=O0();while(Long_gt(a.bH,Long_ZERO)){if(!a.v.E)J(AGM(a,b));d=a.v;d.E=d.E-1|0;d=a.v;d.y=Long_add(d.y,Long_fromInt(1));TB(a.fS,a.v.cl,a.v.r,1);a.v.f4.k5(a.v.cl,a.v.r,1);d=a.v;d.r=d.r+1|0;a.bH=Long_sub(a.bH,Long_fromInt(1));b=c;}return b;}
function Jt(a,b,c){var d;d=0;while(d<b){a.yu.data[d]=Long_and(c,Long_fromInt(255)).lo<<24>>24;c=Long_shr(c,8);d=d+1|0;}a.v.f4.k5(a.yu,0,b);}
function ALB(){var b,c;b=$rt_createByteArray(4);c=b.data;c[0]=0;c[1]=0;c[2]=(-1);c[3]=(-1);Bf_=b;}
function DE(){Cq.call(this);}
function ASw(a){var b=new DE();A5l(b,a);return b;}
function A5l(a,b){Bd(a,b);}
function Jl(){BT.call(this);}
function Fn(){}
function VS(){var a=this;C.call(a);a.tO=0;a.FH=0;a.Ee=0;a.ES=0;a.pF=null;}
function JO(a){return a.tO>=a.Ee?0:1;}
function Il(a){var b,c;if(a.FH<a.pF.d2){b=new JW;Z(b);J(b);}a.ES=a.tO;b=a.pF;c=a.tO;a.tO=c+1|0;return b.mI(c);}
function W0(){var a=this;C.call(a);a.rJ=null;a.bt=0;}
function FN(a,b){var c=new W0();AXB(c,a,b);return c;}
function AXB(a,b,c){a.rJ=b;a.bt=c;}
function Qv(){var a=this;C.call(a);a.uY=null;a.us=0;a.Ap=0;a.IU=0;}
function Ny(){var a=this;C.call(a);a.xX=null;a.CM=null;a.la=0;a.FQ=0.0;a.FP=0.0;a.AF=0;a.mo=0;a.mc=0;a.nN=0;a.pr=0;a.s5=0;a.A6=0;a.JH=0.0;a.KY=0.0;a.Jz=0.0;a.oM=0;a.mR=0;a.FR=0;}
var Bc$=null;function BD(){BD=Bl(Ny);AT4();}
function Bt(a){var b,c,d,e,f;if(!a.oM)return 0;a.oM=0;if(a.la>0){if(a.mc)Pe(32888);if(a.mo)Pe(32886);if(a.mR)Pe(32885);b=a.A6;c=a.la;d=a.xX.buffer;e=a.la*7|0;AFB(b,0,c,new Int32Array(d,0,e));if(a.mc)OD(32888);if(a.mo)OD(32886);if(a.mR)OD(32885);}f=a.nN*4|0;ZY(a);return f;}
function ZY(a){a.la=0;a.nN=0;a.pr=0;}
function Bx(a){Lx(a,7);}
function Lx(a,b){if(a.oM)Bt(a);a.oM=1;ZY(a);a.A6=b;a.mR=0;a.mo=0;a.mc=0;a.s5=0;}
function ALG(a,b,c){a.mc=1;a.FQ=b;a.FP=c;}
function CW(a,b,c,d){UX(a,b*255.0|0,c*255.0|0,d*255.0|0);}
function Oa(a,b,c,d,e){X5(a,b*255.0|0,c*255.0|0,d*255.0|0,e*255.0|0);}
function UX(a,b,c,d){X5(a,b,c,d,255);}
function X5(a,b,c,d,e){if(!a.s5){if(b>255)b=255;if(c>255)c=255;if(d>255)d=255;if(e>255)e=255;if(b<0)b=0;if(c<0)c=0;if(d<0)d=0;if(e<0)e=0;a.mo=1;a.AF=e<<24|d<<16|c<<8|b;}}
function F(a,b,c,d,e,f){ALG(a,e,f);Bo(a,b,c,d);}
function Bo(a,b,c,d){var e,f,g,h,i,j;if(a.pr>65534)return;a.pr=a.pr+1|0;a.la=a.la+1|0;e=a.nN;f=a.xX;g=a.CM;h=e+0|0;i=b+a.JH;g[h]=i;h=e+1|0;i=c+a.KY;g[h]=i;h=e+2|0;i=d+a.Jz;g[h]=i;if(a.mc){h=e+3|0;i=a.FQ;g[h]=i;h=e+4|0;i=a.FP;g[h]=i;}if(a.mo){h=e+5|0;j=a.AF;f[h]=j;}if(a.mR){e=e+6|0;h=a.FR;f[e]=h;}a.nN=a.nN+7|0;}
function Ii(a,b){UX(a,b>>16&255,b>>8&255,b&255);}
function AEZ(a){a.s5=1;}
function B0(a,b,c,d){var e;a.mR=1;e=Iu(b*b+c*c+d*d);a.FR=((b/e*125.0|0)+125|0)&255|(((c/e*125.0|0)+125|0)&255)<<8|(((d/e*125.0|0)+125|0)&255)<<16;IT(b,c,d);}
function AT4(){var b,c;b=new Ny;BD();b.la=0;b.mo=0;b.mc=0;b.nN=0;b.pr=0;b.s5=0;b.oM=0;b.mR=0;c=new ArrayBuffer(1140000);b.xX=new Int32Array(c);b.CM=new Float32Array(c);Bc$=b;}
function Oc(){FG.call(this);}
function AJG(b){var c,d;c=b.data.length;d=new Xd;Wv(d,c,0,0+c|0);d.yE=0;d.CK=0;d.xf=b;return d;}
function AOr(a,b,c,d){var e,f,g,h,i,j,k;if(a.lG()){e=new Fd;Z(e);J(e);}if(BV(a)<d){e=new GV;Z(e);J(e);}if(c>=0){f=b.data;g=f.length;if(c<g){h=c+d|0;if(h>g){e=new BE;i=new S;V(i);Bd(e,R(Bf(G(Bf(G(i,B(398)),h),B(253)),g)));J(e);}if(d<0){e=new BE;i=new S;V(i);Bd(e,R(G(Bf(G(i,B(254)),d),B(255))));J(e);}h=a.O;j=0;while(j<d){k=h+1|0;g=c+1|0;XL(a,h,f[c]);j=j+1|0;h=k;c=g;}a.O=a.O+d|0;return a;}}b=b.data;i=new BE;e=new S;V(e);Bd(i,R(G(Bf(G(Bf(G(e,B(256)),c),B(250)),b.length),B(34))));J(i);}
function AFH(a){DM(a);return a;}
function AYN(a){Ec(a);return a;}
function A6M(a,b){H0(a,b);return a;}
function AY_(a,b){Dz(a,b);return a;}
function Vd(){var a=this;C.call(a);a.mt=null;a.kk=null;a.tm=null;a.mU=null;}
function X3(a,b,c,d){return Qo(a,b,c.f,c.Y.bc,c.g,16.0);}
function AIk(a,b,c,d,e,f){return Qo(a,b,c+0.5,d+0.5,e+0.5,16.0);}
function Qo(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v;P0(a.kk);Xr(a.tm);g=Ji(a,b.Y.bg|0,b.Y.bc|0,b.Y.bf|0);h=Ji(a,c-b.dK/2.0|0,d|0,e-b.dK/2.0|0);i=AY8(b.dK+1.0|0,b.gA+1.0|0,b.dK+1.0|0);g.m$=0.0;g.oB=Fe(g,h);g.i3=g.oB;P0(a.kk);TW(a.kk,g);j=g;a:{while(true){if(AHt(a.kk)){k=j!==g?AGT(j):null;break a;}l=ALE(a.kk);if(l.qn==h.qn)break;if(Fe(l,h)<Fe(j,h))j=l;l.nA=1;m=0;n=0;if(LX(a,l.h$,l.h3+1|0,l.is,i)>0)n=1;o=KB(a,b,l.h$,l.h3,l.is+1|0,i,n);p=KB(a,b,l.h$-1|0,l.h3,l.is,i,n);q=KB(a,b,l.h$+1|0,l.h3,l.is,i,n);r
=KB(a,b,l.h$,l.h3,l.is-1|0,i,n);if(o!==null&&!o.nA&&Fe(o,h)<f){m=1;a.mU.data[0]=o;}if(p===null)s=m;else if(p.nA)s=m;else if(Fe(p,h)>=f)s=m;else{t=a.mU.data;s=m+1|0;t[m]=p;}if(q===null)m=s;else if(q.nA)m=s;else if(Fe(q,h)>=f)m=s;else{t=a.mU.data;m=s+1|0;t[s]=q;}if(r===null)n=m;else if(r.nA)n=m;else if(Fe(r,h)>=f)n=m;else{t=a.mU.data;n=m+1|0;t[m]=r;}s=0;while(s<n){u=a.mU.data[s];v=l.m$+Fe(l,u);if(!(V0(u)&&v>=u.m$)){u.on=l;u.m$=v;u.oB=Fe(u,h);if(V0(u))AK2(a.kk,u,u.m$+u.oB);else{u.i3=u.m$+u.oB;TW(a.kk,u);}}s=s+
1|0;}}k=AGT(h);}return k;}
function KB(a,b,c,d,e,f,g){var h,i,j;h=null;if(LX(a,c,d,e,f)>0)h=Ji(a,c,d,e);if(h===null){g=d+g|0;if(LX(a,c,g,e,f)>0)h=Ji(a,c,g,e);}if(h!==null){g=0;a:{while(true){if(d<=0)break a;i=LX(a,c,d-1|0,e,f);if(i<=0)break a;if(i<0)return null;g=g+1|0;if(g>=4)break;d=d+(-1)|0;h=Ji(a,c,d,e);}return null;}j=CR(a.mt,c,d-1|0,e);if(!(j!==Bda&&j!==Bdb))return null;}return h;}
function Ji(a,b,c,d){var e,f;e=b|c<<10|d<<20;f=Co(a.tm,C0(e));if(f===null){f=AY8(b,c,d);BI(a.tm,C0(e),f);}return f;}
function LX(a,b,c,d,e){var f,g,h,i;f=b;a:{b:{c:{d:{while(f<(b+e.h$|0)){if(f<0)break a;if(f>=a.mt.o)break a;g=c;while(g<(c+e.h3|0)){if(g<0)break b;if(g>=a.mt.bu)break b;h=d;while(h<(d+e.is|0)){if(h<0)break c;if(h>=a.mt.t)break c;i=CR(a.mt,b,c,d);if(i.os())return 0;if(i===Bda)break d;if(i===Bdb)break d;h=h+1|0;}g=g+1|0;}f=f+1|0;}return 1;}return (-1);}return 0;}return 0;}return 0;}
function AGT(b){var c,d,e,f;c=1;d=b;while(d.on!==null){c=c+1|0;d=d.on;}e=H(IN,c);f=e.data;c=c+(-1)|0;f[c]=b;while(b.on!==null){b=b.on;c=c+(-1)|0;f[c]=b;}b=new Z7;b.qb=e;return b;}
function CK(){IZ.call(this);}
function DD(){var a=this;C.call(a);a.ti=0;a.A=null;a.cs=0.0;a.cx=0.0;a.ct=0.0;a.f=0.0;a.j=0.0;a.g=0.0;a.G=0.0;a.C=0.0;a.H=0.0;a.I=0.0;a.X=0.0;a.bN=0.0;a.b1=0.0;a.Y=null;a.dE=0;a.so=0;a.lS=0;a.hL=0;a.dO=0.0;a.dK=0.0;a.gA=0.0;a.uF=0.0;a.kZ=0.0;a.pi=0;a.i6=0.0;a.rW=0;a.eb=0.0;a.ea=0.0;a.d_=0.0;a.j3=0.0;a.sk=0.0;a.oi=0;a.J2=0.0;a.N=null;a.pS=0;a.rt=0;a.dk=0;a.E3=0;a.r1=0;a.hV=0;a.h2=0;a.xN=0;a.JE=null;}
function Bga(a){var b=new DD();GQ(b,a);return b;}
function GQ(a,b){a.ti=0;a.dE=0;a.so=0;a.lS=1;a.hL=0;a.dO=0.0;a.dK=0.6000000238418579;a.gA=1.7999999523162842;a.uF=0.0;a.kZ=0.0;a.pi=1;a.i6=0.0;a.rW=1;a.j3=0.0;a.sk=0.0;a.oi=0;a.J2=0.0;a.N=new Dd;a.pS=0;a.rt=1;a.dk=0;a.E3=300;a.r1=0;a.hV=0;a.h2=300;a.xN=1;a.A=b;if(a instanceof Hk&&A_w!==null)D0(a,G4(A_w,B(399)),G4(A_w,B(400)),G4(A_w,B(401)));else D0(a,0.0,0.0,0.0);}
function CN(a){a.hL=1;}
function DC(a,b,c){a.dK=b;a.gA=c;}
function D0(a,b,c,d){var e,f;a.f=b;a.j=c;a.g=d;e=a.dK/2.0;f=a.gA/2.0;a.Y=GL(b-e,c-f,d-e,b+e,c+f,d+e);}
function N2(a){var b,c,d,e,f,g;a.pS=a.pS+1|0;a.uF=a.kZ;a.cs=a.f;a.cx=a.j;a.ct=a.g;a.b1=a.X;a.bN=a.I;if(!Gq(a))a.r1=0;else{a:{if(!a.r1&&!a.xN){B$(a.G*a.G*0.20000000298023224+a.C*a.C+a.H*a.H*0.20000000298023224);b=a.Y.bc|0;c=0;d=b+1.0;while(c<1.0+a.dK*20.0){e=(N(a.N)*2.0-1.0)*a.dK;f=(N(a.N)*2.0-1.0)*a.dK;BY(a.A,B(366),a.f+e,d,a.g+f,a.G,a.C-N(a.N)*0.20000000298023224,a.H);c=c+1|0;}c=0;while(true){if(c>=1.0+a.dK*20.0)break a;e=(N(a.N)*2.0-1.0)*a.dK;f=(N(a.N)*2.0-1.0)*a.dK;BY(a.A,B(272),a.f+e,d,a.g+f,a.G,a.C,a.H);c
=c+1|0;}}}a.i6=0.0;a.r1=1;a.dk=0;}if(a.dk>0){if(!(a.dk%20|0))a.eX(null,1);a.dk=a.dk-1|0;}if(JD(a)){a.eX(null,10);a.dk=600;}if(a.f<(-8.0)){g= -(a.f+8.0);a.G=a.G+g*0.0010000000474974513;}if(a.g<(-8.0)){g= -(a.g+8.0);a.H=a.H+g*0.0010000000474974513;}if(a.f>a.A.o+8.0){g=a.f-a.A.o+8.0;a.G=a.G-g*0.0010000000474974513;}if(a.g>a.A.t+8.0){g=a.g-a.A.t+8.0;a.H=a.H-g*0.0010000000474974513;}a.xN=0;}
function Yg(a,b,c,d){var e,f;e=a.Y;f=GL(e.bg+d,e.bc+c,e.bf+d,e.bv+b,e.bs+c,e.bw+d);return Hv(a.A,f).q>0?0:SF(a.A,f)?0:1;}
function Eq(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y;if(a.oi){GO(a.Y,b,c,d);a.f=(a.Y.bg+a.Y.bv)/2.0;a.j=a.Y.bc+a.dO-a.j3;a.g=(a.Y.bf+a.Y.bw)/2.0;}else{e=a.f;f=a.g;g=LS(a.Y);h=Hv(a.A,K3(a.Y,b,c,d));i=0;j=c;while(i<CE(h)){j=S9(Bc(h,i),a.Y,j);i=i+1|0;}GO(a.Y,0.0,j,0.0);if(a.lS){k=d;l=b;}else if(c===j){k=d;l=b;}else{l=0.0;k=l;j=l;}a:{b:{if(!a.dE){if(c===j)break b;if(c>=0.0)break b;}m=1;break a;}m=0;}n=0;while(n<CE(h)){l=TQ(Bc(h,n),a.Y,l);n=n+1|0;}GO(a.Y,l,0.0,0.0);if(!a.lS&&b!==l){l=0.0;k=l;j=l;}o
=0;while(o<CE(h)){k=T_(Bc(h,o),a.Y,k);o=o+1|0;}GO(a.Y,0.0,0.0,k);if(!a.lS&&d!==k){l=0.0;k=l;j=l;}if(a.sk<=0.0){p=l;q=j;r=k;}else if(!m){p=l;q=j;r=k;}else if(a.j3>=0.05000000074505806){p=l;q=j;r=k;}else if(b===l&&d===k){p=l;q=j;r=k;}else{q=a.sk;s=LS(a.Y);a.Y=LS(g);g=Hv(a.A,K3(a.Y,b,q,d));o=0;while(o<CE(g)){q=S9(Bc(g,o),a.Y,q);o=o+1|0;}GO(a.Y,0.0,q,0.0);if(a.lS){r=d;p=b;}else if(c===q){r=d;p=b;}else{p=0.0;r=p;q=p;}o=0;while(o<CE(g)){p=TQ(Bc(g,o),a.Y,p);o=o+1|0;}GO(a.Y,p,0.0,0.0);if(!a.lS&&b!==p){p=0.0;r=p;q=p;}o
=0;while(o<CE(g)){r=T_(Bc(g,o),a.Y,r);o=o+1|0;}GO(a.Y,0.0,0.0,r);if(!a.lS&&d!==r){p=0.0;r=p;q=p;}if(l*l+k*k>=p*p+r*r){a.Y=LS(s);p=l;q=j;r=k;}else a.j3=a.j3+0.5;}a.f=(a.Y.bg+a.Y.bv)/2.0;a.j=a.Y.bc+a.dO-a.j3;a.g=(a.Y.bf+a.Y.bw)/2.0;t=Bw(b,p);a.so=!t&&d===r?0:1;o=Bw(c,q);a.dE=o&&c<0.0?1:0;if(!a.dE){if(q<0.0)a.i6=a.i6-q;}else if(a.i6>0.0){a.EE(a.i6);a.i6=0.0;}if(t)a.G=0.0;if(o)a.C=0.0;if(d!==r)a.H=0.0;u=a.f-e;v=a.g-f;a.kZ=a.kZ+B$(u*u+v*v)*0.6;if(a.pi){w=a.f|0;x=a.j-0.20000000298023224-a.dO|0;o=a.g|0;y=O(a.A,w,x,
o);if(a.kZ>a.rW&&y>0){a.rW=a.rW+1|0;L();Bcf.data[y].F2(a.A,w,x,o);}}a.j3=a.j3*0.4000000059604645;t=Gq(a);if(AHm(a.A,a.Y)){a.AS(1);if(!t){a.dk=a.dk+1|0;if(!a.dk)a.dk=300;}}else if(a.dk<=0)a.dk= -a.rt;if(t&&a.dk>0)a.dk= -a.rt;}}
function A3d(a,b){a.eX(null,1);}
function AZp(a,b){return;}
function Gq(a){return PZ(a.A,FK(a.Y,0.0,(-0.4000000059604645),0.0),Bda);}
function D4(a){var b;b=O(a.A,a.f|0,a.j+a.sa()|0,a.g|0);if(!b)b=0;else{L();b=Bcf.data[b].ck!==Bda?0:1;}return b;}
function A5B(a){return 0.0;}
function JD(a){return PZ(a.A,FK(a.Y,0.0,(-0.4000000059604645),0.0),Bdb);}
function MD(a,b,c,d){var e,f;e=B$(b*b+c*c);if(e>=0.009999999776482582){if(e<1.0)e=1.0;d=d/e;b=b*d;d=c*d;e=Bv(a.I*3.1415927410125732/180.0);f=Bp(a.I*3.1415927410125732/180.0);a.G=a.G+b*f-d*e;a.H=a.H+d*f+b*e;}}
function EC(a,b){var c,d,e;c=a.f|0;d=a.j+a.dO/2.0|0;e=a.g|0;return DT(a.A,c,d,e);}
function A8y(a,b){a.A=b;}
function Jy(a,b,c,d,e,f){a.f=b;a.cs=b;b=c+a.dO;a.j=b;a.cx=b;a.g=d;a.ct=d;a.I=e;a.X=f;D0(a,a.f,a.j,a.g);}
function Za(a,b){var c,d,e;c=a.f-b.f;d=a.j-b.j;e=a.g-b.g;return c*c+d*d+e*e;}
function APW(a,b){return;}
function AKp(a,b){var c,d,e;c=b.f-a.f;d=b.g-a.g;e=c*c+d*d;if(e>=0.009999999776482582){e=B$(e);c=c/e;d=d/e;c=c/e;e=d/e;c=c*0.05000000074505806;e=e*0.05000000074505806;Um(a, -c,0.0, -e);Um(b,c,0.0,e);}}
function Um(a,b,c,d){a.G=a.G+b;a.C=a.C;a.H=a.H+d;}
function AO4(a,b,c){return 0;}
function A2h(a){return 0;}
function A8u(a){return 0;}
function AK0(a,b){var c,d,e;c=a.gb();if(!a.hL&&c!==null){HM(b,B(402),c);d=$rt_createFloatArray(3);e=d.data;e[0]=a.f;e[1]=a.j;e[2]=a.g;Ff(b,B(403),X8(d));e=$rt_createFloatArray(3);d=e.data;d[0]=a.G;d[1]=a.C;d[2]=a.H;Ff(b,B(404),X8(e));e=$rt_createFloatArray(2);d=e.data;d[0]=a.I;d[1]=a.X;Ff(b,B(405),X8(e));Le(b,B(406),a.i6);CH(b,B(407),a.dk<<16>>16);CH(b,B(408),a.h2<<16>>16);a.fZ(b);}}
function Uv(a,b){var c,d,e;c=Ee(b,B(403));d=Ee(b,B(404));e=Ee(b,B(405));a.f=CS(c,0).gx;a.j=CS(c,1).gx;a.g=CS(c,2).gx;a.G=CS(d,0).gx;a.C=CS(d,1).gx;a.H=CS(d,2).gx;a.I=CS(e,0).gx;a.X=CS(e,1).gx;a.i6=G4(b,B(406));a.dk=Ck(b,B(407));a.h2=Ck(b,B(408));Jy(a,a.f,a.j,a.g,a.I,a.X);a.il(b);}
function X8(b){var c,d,e;b=b.data;c=Gu();d=b.length;e=0;while(e<d){EP(c,A6F(b[e]));e=e+1|0;}return c;}
function A73(a){return a.gA/2.0;}
function AMC(a,b,c){return Zd(a,b,1,0.0);}
function Zd(a,b,c,d){var e;e=Sz(a.A,a.f,a.j+d,a.g,OC(b,c));e.iZ=10;De(a.A,e);return e;}
function AWd(a){return a.hL?0:1;}
function T6(a,b,c){var d,e;d=a.X;e=a.I;a.I=a.I+b*0.15;a.X=a.X-c*0.15;if(a.X<(-90.0))a.X=(-90.0);if(a.X>90.0)a.X=90.0;a.b1=a.b1+a.X-d;a.bN=a.bN+a.I-e;}
function F8(){var a=this;DD.call(a);a.pO=0;a.eL=0.0;a.hQ=0.0;a.zx=0.0;a.Ad=0.0;a.hx=null;a.GG=0;a.b0=0;a.rA=0;a.vC=0;a.hk=0;a.BA=0;a.lr=0.0;a.dA=0;a.i_=0;a.y4=0.0;a.n8=0.0;a.xr=0.0;a.j9=0.0;a.y3=0.0;a.jj=0;a.kS=0.0;a.kv=0.0;a.n4=0.0;a.hP=0;a.If=0.0;a.lO=0.0;}
function Bgb(a){var b=new F8();Rh(b,a);return b;}
function Rh(a,b){GQ(a,b);a.pO=20;a.eL=0.0;a.hQ=0.0;a.hx=B(207);a.GG=0;a.lr=0.0;a.dA=0;a.i_=0;Cc();a.jj=0;a.hP=0;a.If=0.0;a.lO=0.699999988079071;a.b0=10;a.ti=1;Cc();D0(a,a.f,a.j,a.g);Cc();a.I=Cc()*3.1415927410125732*2.0;a.sk=0.5;}
function AMi(a){return a.hx;}
function A8w(a){return a.hL?0:1;}
function A1c(a){return a.hL?0:1;}
function ACe(a){return a.gA*0.8500000238418579;}
function ADZ(a){var b,c,d,e,f,g,h,i,j;N2(a);b=W(a.N,1000);c=a.vC;a.vC=c+1|0;if(b<c)a.vC=(-80);if(!D4(a))a.h2=a.E3;else{a.h2=a.h2-1|0;if(a.h2==(-20)){a.h2=0;d=0;while(d<8){e=N(a.N)-N(a.N);f=N(a.N)-N(a.N);g=N(a.N)-N(a.N);BY(a.A,B(366),a.f+e,a.j+f,a.g+g,a.G,a.C,a.H);d=d+1|0;}a.eX(null,2);}a.dk=0;}a.y4=a.n8;if(a.i_>0)a.i_=a.i_-1|0;if(a.hk>0)a.hk=a.hk-1|0;if(a.hV>0)a.hV=a.hV-1|0;if(a.b0<=0){a.dA=a.dA+1|0;if(a.dA>20)a.xJ();}a.hQ=a.eL;a.bN=a.I;a.b1=a.X;a.mQ();h=a.f-a.cs;e=a.g-a.ct;f=B$(h*h+e*e);g=a.eL;i=0.0;j=0.0;if
(f>0.05000000074505806){j=1.0;i=f*3.0;g=GK(e,h)*180.0/3.1415927410125732-90.0;}if(!a.dE)j=0.0;a.zx=a.zx+(j-a.zx)*0.30000001192092896;e=g-a.eL;while(e<(-180.0)){e=e+360.0;}while(e>=180.0){e=e-360.0;}a.eL=a.eL+e*0.10000000149011612;f=a.I-a.eL;while(f<(-180.0)){f=f+360.0;}while(f>=180.0){f=f-360.0;}b=f>=(-90.0)&&f<90.0?0:1;if(f<(-75.0))f=(-75.0);if(f>=75.0)f=75.0;a.eL=a.I-f;a.eL=a.eL+f*0.10000000149011612;if(b)i= -i;while(a.I-a.bN<(-180.0)){a.bN=a.bN-360.0;}while(a.I-a.bN>=180.0){a.bN=a.bN+360.0;}while(a.eL-a.hQ
<(-180.0)){a.hQ=a.hQ-360.0;}while(a.eL-a.hQ>=180.0){a.hQ=a.hQ+360.0;}while(a.X-a.b1<(-180.0)){a.b1=a.b1-360.0;}while(a.X-a.b1>=180.0){a.b1=a.b1+360.0;}a.Ad=a.Ad+i;}
function A3S(a,b,c){DC(a,b,c);}
function Wo(a,b){if(a.b0>0){a.b0=a.b0+b|0;if(a.b0>20)a.b0=20;a.hV=a.pO/2|0;}}
function NP(a,b,c){var d,e,f;if(!a.A.xe)return 0;a.jj=0;if(a.b0<=0)return 0;a.j9=1.5;if(a.hV<=a.pO/2.0){a.rA=a.b0;a.hV=a.pO;a.b0=a.b0-c|0;a.BA=10;a.hk=10;}else{if((a.rA-c|0)>=a.b0)return 0;a.b0=a.rA-c|0;}a.lr=0.0;if(b===null)a.lr=(Cc()*2.0|0)*180|0;else{d=b.f-a.f;e=b.g-a.g;a.lr=GK(e,d)*180.0/3.1415927410125732-a.I;f=B$(d*d+e*e);a.G=a.G/2.0;a.C=a.C/2.0;a.H=a.H/2.0;a.G=a.G-d/f*0.4000000059604645;a.C=a.C+0.4000000059604645;a.H=a.H-e/f*0.4000000059604645;if(a.C>0.4000000059604645)a.C=0.4000000059604645;}if(a.b0
<=0)a.A3(b);return 1;}
function A5G(a,b){var c,d,e;a:{c=a.nt();if(c>0){d=W(a.N,3);e=0;while(true){if(e>=d)break a;AMC(a,c,1);e=e+1|0;}}}}
function AWP(a){return 0;}
function A7H(a,b){var c;c=WQ(b-3.0)|0;if(c>0){a.eX(null,c);O(a.A,a.f|0,a.j-0.20000000298023224-a.dO|0,a.g|0);}}
function Gk(a,b){CH(b,B(409),a.b0<<16>>16);CH(b,B(410),a.hk<<16>>16);CH(b,B(411),a.dA<<16>>16);CH(b,B(412),a.i_<<16>>16);}
function GP(a,b){a.b0=Ck(b,B(409));if(!Ex(b,B(409)))a.b0=10;a.hk=Ck(b,B(410));a.dA=Ck(b,B(411));a.i_=Ck(b,B(412));}
function AVR(a){return !a.hL&&a.b0>0?1:0;}
function W2(a){var b,c,d,e,f,g,h,i,j,k;a.jj=a.jj+1|0;if(a.jj>600&&!W(a.N,800)){b=a.A.cU;if(b!==null){c=b.f-a.f;d=b.j-a.j;e=b.g-a.g;if(c*c+d*d+e*e>=1024.0)a.xJ();else a.jj=0;}}if(a.b0>0)a.sF();else{a.hP=0;a.kS=0.0;a.kv=0.0;a.n4=0.0;}f=Gq(a);g=JD(a);if(a.hP){if(f)a.C=a.C+0.03999999910593033;else if(g)a.C=a.C+0.03999999910593033;else if(a.dE)a.C=0.41999998688697815;}a.kS=a.kS*0.9800000190734863;a.kv=a.kv*0.9800000190734863;a.n4=a.n4*0.8999999761581421;d=a.kv;c=a.kS;if(Gq(a)){h=a.j;MD(a,c,d,0.019999999552965164);Eq(a,
a.G,a.C,a.H);a.G=a.G*0.800000011920929;a.C=a.C*0.800000011920929;a.H=a.H*0.800000011920929;a.C=a.C-0.02;if(a.so&&Yg(a,a.G,a.C+0.6000000238418579-a.j+h,a.H))a.C=0.30000001192092896;}else if(JD(a)){h=a.j;MD(a,c,d,0.019999999552965164);Eq(a,a.G,a.C,a.H);a.G=a.G*0.5;a.C=a.C*0.5;a.H=a.H*0.5;a.C=a.C-0.02;if(a.so&&Yg(a,a.G,a.C+0.6000000238418579-a.j+h,a.H))a.C=0.30000001192092896;}else{MD(a,c,d,!a.dE?0.019999999552965164:0.10000000149011612);Eq(a,a.G,a.C,a.H);a.G=a.G*0.9100000262260437;a.C=a.C*0.9800000190734863;a.H
=a.H*0.9100000262260437;a.C=a.C-0.08;if(a.dE){a.G=a.G*0.6000000238418579;a.H=a.H*0.6000000238418579;}}a.xr=a.j9;h=a.f-a.cs;d=a.g-a.ct;d=B$(h*h+d*d)*4.0;if(d>1.0)d=1.0;a:{a.j9=a.j9+(d-a.j9)*0.4000000059604645;a.y3=a.y3+a.j9;i=P5(a.A,a,FK(a.Y,0.20000000298023224,0.0,0.20000000298023224));if(i!==null&&i.q>0){j=0;while(true){if(j>=i.q)break a;k=Bc(i,j);if(k.C3())AKp(k,a);j=j+1|0;}}}}
function AFk(a){var b,c;if(N(a.N)<0.07000000029802322){a.kS=(N(a.N)-0.5)*a.lO;a.kv=N(a.N)*a.lO;}a.hP=N(a.N)>=0.009999999776482582?0:1;if(N(a.N)<0.03999999910593033)a.n4=(N(a.N)-0.5)*60.0;a.I=a.I+a.n4;a.X=0.0;b=Gq(a);c=JD(a);if(!(!b&&!c))a.hP=N(a.N)>=0.800000011920929?0:1;}
function Hk(){var a=this;F8.call(a);a.F=null;a.Jd=0;a.rR=0;a.xE=0.0;a.pc=0.0;a.xq=0;}
function C_(a){var b,c,d,e;a.dO=1.6200000047683716;DC(a,0.6000000238418579,1.7999999523162842);if(a.A!==null){b=a.A.g4+0.5;c=a.A.gY;d=a.A.hv+0.5;e=a instanceof Hk;a:{while(true){if(c<=0.0)break a;if(e&&A_w!==null)D0(a,G4(A_w,B(399)),G4(A_w,B(400)),G4(A_w,B(401)));else D0(a,b,c,d);if(!Hv(a.A,a.Y).q)break;c=c+1.0;}}a.H=0.0;a.C=0.0;a.G=0.0;a.I=a.A.r5;a.X=0.0;}if(a.A!==null)a.A.cU=a;a.b0=20;a.dA=0;}
function AKd(a){var b,c,d,e,f,g;if(!a.A.c1&&a.b0<20&&!((a.pS%20|0)<<2))Wo(a,1);b=a.F;c=0;while(c<b.br.data.length){if(b.br.data[c]!==null&&b.br.data[c].kU>0){d=b.br.data[c];d.kU=d.kU-1|0;}c=c+1|0;}a.xE=a.pc;W2(a);e=B$(a.G*a.G+a.H*a.H);f=Lo( -a.C*0.20000000298023224)*15.0;if(e>0.10000000149011612)e=0.10000000149011612;if(!(a.dE&&a.b0>0))e=0.0;if(!(!a.dE&&a.b0>0))f=0.0;a:{a.pc=a.pc+(e-a.pc)*0.4000000059604645;a.n8=a.n8+(f-a.n8)*0.800000011920929;if(a.b0>0){d=P5(a.A,a,FK(a.Y,1.0,0.0,1.0));if(d!==null){g=0;while
(true){if(g>=d.q)break a;Bc(d,g).xy(a);g=g+1|0;}}}}}
function A4l(a,b){DC(a,0.20000000298023224,0.20000000298023224);D0(a,a.f,a.j,a.g);a.C=0.10000000149011612;if(b===null){a.H=0.0;a.G=0.0;}else{a.G= -Bp((a.lr+a.I)*3.1415927410125732/180.0)*0.10000000149011612;a.H= -Bv((a.lr+a.I)*3.1415927410125732/180.0)*0.10000000149011612;}a.dO=0.10000000149011612;}
function ARv(a){return;}
function J9(a,b){EZ(a,b,0);}
function EZ(a,b,c){var d,e,f,g,h,i,j;if(b!==null){d=Sz(a.A,a.f,a.j-0.30000001192092896,a.g,b);d.iZ=40;d.G= -Bv(a.I/180.0*3.1415927410125732)*Bp(a.X/180.0*3.1415927410125732)*0.30000001192092896;d.H=Bp(a.I/180.0*3.1415927410125732)*Bp(a.X/180.0*3.1415927410125732)*0.30000001192092896;d.C= -Bv(a.X/180.0*3.1415927410125732)*0.30000001192092896+0.10000000149011612;e=N(a.N)*3.1415927410125732*2.0;f=0.019999999552965164*N(a.N);g=d.G;h=e;i=Qx(h);j=f;d.G=g+i*j;d.C=d.C+(N(a.N)-N(a.N))*0.10000000149011612;d.H=d.H+LR(h)
*j;De(a.A,d);}}
function Tn(a,b){var c,d,e;c=a.F;if(b.ck!==Bec&&b.ck!==Ber)return 1;d=R2(c,c.J);if(d===null)e=0;else{B2();e=Bce.data[d.bX].x8(b);}return e;}
function AVF(a){return 0.11999999731779099;}
function AUV(a,b,c){var d,e,f;if(!a.A.xe)return 0;a.jj=0;if(a.b0<=0)return 0;if(a.hV>a.pO/2.0)return 0;if(!(!(b instanceof DP)&&!(b instanceof MY))){if(!a.A.c1)c=0;if(a.A.c1==1)c=(c/3|0)+1|0;if(a.A.c1==3)c=(c*3|0)/2|0;}d=K(c,25-W4(a.F)|0)+a.xq|0;e=a.F;f=0;while(f<e.c$.data.length){if(e.c$.data[f]!==null&&BZ(e.c$.data[f]) instanceof Gm){GW(e.c$.data[f],c);if(!e.c$.data[f].s)e.c$.data[f]=null;}f=f+1|0;}c=d/25|0;a.xq=d%25|0;if(c)return NP(a,b,c);return 0;}
function Mk(){var a=this;Hk.call(a);a.eU=null;a.mH=null;}
function A1m(a){a.kS=a.eU.lt;a.kv=a.eU.lB;a.hP=a.eU.vZ;}
function AWA(a){AN6(a.eU);AKd(a);}
function AN4(a,b){var c,d,e,f;Gk(a,b);E0(b,B(413),a.rR);c=a.F;d=Gu();e=0;while(e<c.br.data.length){if(c.br.data[e]!==null){f=DG();DW(f,B(414),e<<24>>24);Ix(c.br.data[e],f);EP(d,f);}e=e+1|0;}e=0;while(e<c.c$.data.length){if(c.c$.data[e]!==null){f=DG();DW(f,B(414),(e+100|0)<<24>>24);Ix(c.c$.data[e],f);EP(d,f);}e=e+1|0;}Ff(b,B(317),d);}
function Rw(a,b){var c,d,e,f,g;GP(a,b);a.rR=DJ(b,B(413));c=Ee(b,B(317));d=a.F;d.br=H(C9,36);d.c$=H(C9,4);e=0;while(e<GU(c)){f=CS(c,e);g=EV(f,B(414))&255;if(g>=0&&g<d.br.data.length)d.br.data[g]=PT(f);if(g>=100&&g<(d.c$.data.length+100|0))d.c$.data[g-100|0]=PT(f);e=e+1|0;}}
function A1T(a){return B(415);}
function AHN(a,b){var c,d,$p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.mH;d=A$K(a.F,b);$p=1;case 1:AOJ(c,d);if(I()){break _;}return;default:F2();}}Dh().s(a,b,c,d,$p);}
function ANi(a){var b,c,d,e,f,$p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=a.mH;c=new Ul;d=a.F;J7(c);c.pg=AOO(c,3,3);c.wi=AQW();M(c.cX,APZ(c,c.pg,c.wi,0,124,35));e=0;while(e<3){f=0;while(f<3){M(c.cX,En(c,c.pg,f+(e*3|0)|0,30+(f*18|0)|0,17+(e*18|0)|0));f=f+1|0;}e=e+1|0;}e=0;while(e<3){f=0;while(f<9){M(c.cX,En(c,d,f+((e+1|0)*9|0)|0,8+(f*18|0)|0,84+(e*18|0)|0));f=f+1|0;}e=e+1|0;}e=0;while(e<9){M(c.cX,En(c,d,e,8+(e*18|0)|0,142));e
=e+1|0;}$p=1;case 1:AOJ(b,c);if(I()){break _;}return;default:F2();}}Dh().s(a,b,c,d,e,f,$p);}
function AMP(a,b){var c,d,e,f,g,h,$p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.mH;d=new QV;e=a.F;J7(d);AH_(new Vp);d.tR=b;M(d.cX,En(d,b,0,56,17));M(d.cX,En(d,b,1,56,53));M(d.cX,En(d,b,2,116,35));f=0;while(f<3){g=0;while(g<9){M(d.cX,En(d,e,g+((f+1|0)*9|0)|0,8+(g*18|0)|0,84+(f*18|0)|0));g=g+1|0;}f=f+1|0;}h=0;while(h<9){M(d.cX,En(d,e,h,8+(h*18|0)|0,142));h=h+1|0;}$p=1;case 1:AOJ(c,d);if(I()){break _;}return;default:
F2();}}Dh().s(a,b,c,d,e,f,g,h,$p);}
function S$(a){AE7(a.F,a.F.J,null);}
function Ui(a,b){var c,d;c=a.mH.bI;d=new VR;Ga(d,a.mH.i,b.f,b.j,b.g,b.G,b.C,b.H);d.oY=0;d.rM=0;d.nd=b;d.hU=a;d.rM=3;d.Bv=(-0.5);E$(c,d);}
function GZ(){}
function Ti(){var a=this;C.call(a);a.br=null;a.c$=null;a.J=0;a.Gl=null;}
function F0(a){return a.br.data[a.J];}
function RS(a,b){var c;c=0;while(true){if(c>=a.br.data.length)return (-1);if(a.br.data[c]!==null&&a.br.data[c].bX==b)break;c=c+1|0;}return c;}
function Rr(a){var b;b=0;while(true){if(b>=a.br.data.length)return (-1);if(a.br.data[b]===null)break;b=b+1|0;}return b;}
function H$(a,b){b=RS(a,b);if(b>=0&&b<9)a.J=b;}
function AA_(a,b){var c,d;c=RS(a,b);if(c<0)return 0;d=a.br.data[c];b=d.s-1|0;d.s=b;if(b<=0)a.br.data[c]=null;return 1;}
function XH(a,b){var c,d,e,f,g;if(!b.fy){c=b.s;d=b.bX;e=0;a:{while(true){if(e>=a.br.data.length){e=(-1);break a;}if(a.br.data[e]!==null&&a.br.data[e].bX==d){f=a.br.data[e];if(a.br.data[e].s<BZ(f).gf&&a.br.data[e].s<64)break;}e=e+1|0;}}if(e<0)e=Rr(a);if(e>=0){if(a.br.data[e]===null)a.br.data[e]=OC(d,0);g=c<=(BZ(a.br.data[e]).gf-a.br.data[e].s|0)?c:BZ(a.br.data[e]).gf-a.br.data[e].s|0;if(g>(64-a.br.data[e].s|0))g=64-a.br.data[e].s|0;if(g){c=c-g|0;f=a.br.data[e];f.s=f.s+g|0;a.br.data[e].kU=5;}}b.s=c;if(!b.s)return 1;}g
=Rr(a);if(g<0)return 0;a.br.data[g]=b;a.br.data[g].kU=5;return 1;}
function Fr(a,b,c){var d,e,f;d=a.br;if(b>=a.br.data.length){d=a.c$;b=b-a.br.data.length|0;}d=d.data;if(d[b]===null)return null;if(d[b].s<=c){e=d[b];d[b]=null;return e;}f=FB(d[b],c);if(!d[b].s)d[b]=null;return f;}
function AE7(a,b,c){var d;d=a.br;if(b>=a.br.data.length){d=a.c$;b=b-a.br.data.length|0;}d.data[b]=c;}
function ALw(a){return a.br.data.length+4|0;}
function R2(a,b){var c;c=a.br;if(b>=a.br.data.length){c=a.c$;b=b-a.br.data.length|0;}return c.data[b];}
function AUu(a){return B(317);}
function APc(a){return 64;}
function W4(a){var b,c,d,e,f;b=0;c=0;d=0;e=0;while(e<a.c$.data.length){if(a.c$.data[e]!==null&&BZ(a.c$.data[e]) instanceof Gm){f=Kr(a.c$.data[e]);c=c+(f-a.c$.data[e].fy|0)|0;d=d+f|0;b=b+BZ(a.c$.data[e]).BX|0;}e=e+1|0;}if(!d)return 0;return (K(b-1|0,c)/d|0)+1|0;}
function C9(){var a=this;C.call(a);a.s=0;a.kU=0;a.bX=0;a.fy=0;}
function YF(a){var b=new C9();AU4(b,a);return b;}
function NK(a,b){var c=new C9();AM2(c,a,b);return c;}
function WM(a){var b=new C9();Ie(b,a);return b;}
function IS(a,b){var c=new C9();QJ(c,a,b);return c;}
function OC(a,b){var c=new C9();MQ(c,a,b);return c;}
function A7k(a,b,c){var d=new C9();A5o(d,a,b,c);return d;}
function PT(a){var b=new C9();AV7(b,a);return b;}
function AU4(a,b){AM2(a,b,1);}
function AM2(a,b,c){MQ(a,b.b,c);}
function Ie(a,b){QJ(a,b,1);}
function QJ(a,b,c){MQ(a,b.c3,c);}
function MQ(a,b,c){a.s=0;a.bX=b;a.s=c;}
function A5o(a,b,c,d){a.s=0;a.bX=b;a.s=c;a.fy=d;}
function AV7(a,b){a.s=0;a.bX=Ck(b,B(402));a.s=EV(b,B(416));a.fy=Ck(b,B(417));}
function FB(a,b){a.s=a.s-b|0;return A7k(a.bX,b,a.fy);}
function BZ(a){B2();return Bce.data[a.bX];}
function Ix(a,b){CH(b,B(402),a.bX<<16>>16);DW(b,B(416),a.s<<24>>24);CH(b,B(417),a.fy<<16>>16);return b;}
function Kr(a){B2();return Bce.data[a.bX].iQ;}
function GW(a,b){a.fy=a.fy+b|0;if(a.fy>Kr(a)){a.s=a.s-1|0;if(a.s<0)a.s=0;a.fy=0;}}
function AFX(){var a=this;C.call(a);a.e7=0;a.c6=0;a.c7=0;a.c8=0;a.c2=0;a.d4=null;a.tN=null;}
function A5Q(a,b,c,d,e){var f=new AFX();A3$(f,a,b,c,d,e);return f;}
function ATd(a){var b=new AFX();AZi(b,a);return b;}
function A3$(a,b,c,d,e,f){a.e7=0;a.c6=b;a.c7=c;a.c8=d;a.c2=e;a.d4=BF(f.U,f.R,f.S);}
function AZi(a,b){a.e7=1;a.tN=b;a.d4=BF(b.f,b.j,b.g);}
function Eu(){var a=this;CV.call(a);a.bF=null;a.e8=0;a.fh=0;a.cX=null;}
var Bgc=null;function Bgd(){var a=new Eu();J7(a);return a;}
function J7(a){Fo(a);a.bF=null;a.e8=176;a.fh=166;a.cX=BU();}
function AAD(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,$p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AAW(a);if(I()){break _;}e=(a.bq-a.e8|0)/2|0;f=(a.bM-a.fh|0)/2|0;$p=2;case 2:a.tA();if(I()){break _;}Ca();Bs(180.0,1.0,0.0,0.0);I4();BR();Ca();Bj(e,f,0.0);BJ(1.0,1.0,1.0,1.0);Y(2977);g=0;if(g<a.cX.q){h=Bc(a.cX,g);i=h.fE;j
=h.k$;k=h.j1;l=h.kd;m=i.gX(j);if(m===null){n=h.sB();if(n>=0){Bb(2896);i=a.x.cd;m=B(248);$p=5;continue _;}}o=Bgc;i=a.x.cd;$p=4;continue _;}if(a.bF===null){Bb(2977);D9();Bb(2896);Bb(2929);a.lQ();Y(2896);Y(2929);BR();return;}Bj(0.0,0.0,32.0);h=Bgc;i=a.x.cd;m=a.bF;b=(b-e|0)-8|0;c=(c-f|0)-8|0;$p=3;case 3:AKN(h,i,m,b,c);if(I()){break _;}Pi(Bgc,a.cJ,a.bF,b,c);Bb(2977);D9();Bb(2896);Bb(2929);a.lQ();Y(2896);Y(2929);BR();return;case 4:AKN(o,i,m,k,l);if(I()){break _;}Pi(Bgc,a.cJ,m,k,l);if(NB(h,b,c)){Bb(2896);Bb(2929);p
=h.j1;q=h.kd;Pv(p,q,p+16|0,q+16|0,(-2130706433),(-2130706433));Y(2896);Y(2929);}g=g+1|0;if(g<a.cX.q){h=Bc(a.cX,g);i=h.fE;j=h.k$;k=h.j1;l=h.kd;m=i.gX(j);if(m===null){n=h.sB();if(n>=0){Bb(2896);i=a.x.cd;m=B(248);$p=5;continue _;}}o=Bgc;i=a.x.cd;continue _;}if(a.bF===null){Bb(2977);D9();Bb(2896);Bb(2929);a.lQ();Y(2896);Y(2929);BR();return;}Bj(0.0,0.0,32.0);h=Bgc;i=a.x.cd;m=a.bF;b=(b-e|0)-8|0;c=(c-f|0)-8|0;$p=3;continue _;case 5:$z=AB2(i,m);if(I()){break _;}j=$z;EO(j);CD(a,k,l,(n%16|0)<<4,(n/16|0)<<4,16,16);Y(2896);if
(NB(h,b,c)){Bb(2896);Bb(2929);p=h.j1;q=h.kd;Pv(p,q,p+16|0,q+16|0,(-2130706433),(-2130706433));Y(2896);Y(2929);}g=g+1|0;if(g<a.cX.q){h=Bc(a.cX,g);i=h.fE;j=h.k$;k=h.j1;l=h.kd;m=i.gX(j);if(m===null){n=h.sB();if(n>=0){Bb(2896);i=a.x.cd;m=B(248);continue _;}}o=Bgc;i=a.x.cd;$p=4;continue _;}if(a.bF===null){Bb(2977);D9();Bb(2896);Bb(2929);a.lQ();Y(2896);Y(2929);BR();return;}Bj(0.0,0.0,32.0);h=Bgc;i=a.x.cd;m=a.bF;b=(b-e|0)-8|0;c=(c-f|0)-8|0;$p=3;continue _;default:F2();}}Dh().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,$p);}
function AJ7(a,b,c,d){var e,f,g,h,i,j;if(!(d&&d!=1)){e=0;a:{while(true){if(e>=CE(a.cX)){f=null;break a;}f=Bc(a.cX,e);if(NB(f,b,c))break;e=e+1|0;}}if(f!==null){g=f.fE.gX(f.k$);if(g===null&&a.bF===null)return;if(g!==null&&a.bF===null){b=!d?g.s:(g.s+1|0)/2|0;a.bF=f.fE.kL(f.k$,b);if(!g.s)KJ(f,null);f.y5();}else if(g===null&&a.bF!==null&&f.q6(a.bF)){b=d?1:a.bF.s;if(b>f.fE.f1())b=f.fE.f1();KJ(f,FB(a.bF,b));if(!a.bF.s)a.bF=null;}else if(g!==null&&a.bF!==null){if(!f.q6(a.bF)){if(g.bX==a.bF.bX&&HC(BZ(a.bF))>1){b=g.s;if
(b>0&&(b+a.bF.s|0)<=HC(BZ(a.bF))){h=a.bF;h.s=h.s+b|0;FB(g,b);if(!g.s)KJ(f,null);f.y5();return;}return;}return;}if(g.bX!=a.bF.bX){if(a.bF.s>f.fE.f1())return;KJ(f,a.bF);a.bF=g;}else{if(g.bX!=a.bF.bX)return;if(!d){b=a.bF.s;if(b>(f.fE.f1()-g.s|0))b=f.fE.f1()-g.s|0;if(b>(HC(BZ(a.bF))-g.s|0))b=HC(BZ(a.bF))-g.s|0;FB(a.bF,b);if(!a.bF.s)a.bF=null;g.s=g.s+b|0;}else{if(d!=1)return;b=1;if(1>(f.fE.f1()-g.s|0))b=f.fE.f1()-g.s|0;if(b>(HC(BZ(a.bF))-g.s|0))b=HC(BZ(a.bF))-g.s|0;FB(a.bF,b);if(!a.bF.s)a.bF=null;g.s=g.s+b|0;}}}
else return;}else if(a.bF!==null){i=(a.bq-a.e8|0)/2|0;e=(a.bM-a.fh|0)/2|0;if(!(b>=i&&c>=e&&b<(i+a.e8|0)&&c<(e+a.e8|0))){j=a.x.a;if(!d){J9(j,a.bF);a.bF=null;}if(d==1){J9(j,FB(a.bF,1));if(!a.bF.s)a.bF=null;}}}}}
function AIc(a,b,c){var d,e,$p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(c!=1&&c!=a.x.d.gw.bt)return;d=a.x;e=null;$p=1;case 1:AOJ(d,e);if(I()){break _;}return;default:F2();}}Dh().s(a,b,c,d,e,$p);}
function YZ(a){if(a.bF!==null)J9(a.x.a,a.bF);}
function A2j(a){return 0;}
function AMK(){Bgc=AM0();}
function AJO(){var a=this;Eu.call(a);a.mu=null;a.vf=null;a.FU=0.0;a.Dy=0.0;}
function Gl(a){var b=new AJO();AWS(b,a);return b;}
function AWS(a,b){var c,d,e,f,g;J7(a);a.mu=AOO(a,2,2);a.vf=AQW();a.n6=1;M(a.cX,APZ(a,a.mu,a.vf,0,144,36));c=0;while(c<2){d=0;while(d<2){M(a.cX,En(a,a.mu,d+(c<<1)|0,88+(d*18|0)|0,26+(c*18|0)|0));d=d+1|0;}c=c+1|0;}d=0;while(d<4){e=a.cX;f=new Wp;XR(f,a,b,(ALw(b)-1|0)-d|0,8,8+(d*18|0)|0);f.xh=d;M(e,f);d=d+1|0;}d=0;while(d<3){g=0;while(g<9){M(a.cX,En(a,b,g+((d+1|0)*9|0)|0,8+(g*18|0)|0,84+(d*18|0)|0));g=g+1|0;}d=d+1|0;}c=0;while(c<9){M(a.cX,En(a,b,c,8+(c*18|0)|0,142));c=c+1|0;}}
function A29(a){var b,c;YZ(a);b=0;while(b<a.mu.n9){c=IW(a.mu,b);if(c!==null)J9(a.x.a,c);b=b+1|0;}}
function AO2(a){var b,c,d,e,f,g;b=$rt_createIntArray(9);c=b.data;d=0;while(d<3){e=0;while(e<3){f=(-1);if(d<2&&e<2){g=IW(a.mu,d+(e<<1)|0);if(g!==null)f=g.bX;}c[d+(e*3|0)|0]=f;e=e+1|0;}d=d+1|0;}Sm(a.vf,0,Vh(Xh(),b));}
function A6H(a){F9(a.cJ,B(418),86,16,4210752);}
function AA1(a,b,c,d){var $p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AAD(a,b,c,d);if(I()){break _;}a.FU=b;a.Dy=c;return;default:F2();}}Dh().s(a,b,c,d,$p);}
function AAk(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,$p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=a.x.cd;c=B(419);$p=1;case 1:$z=AB2(b,c);if(I()){break _;}d=$z;BJ(1.0,1.0,1.0,1.0);EO(d);e=(a.bq-a.e8|0)/2|0;f=(a.bM-a.fh|0)/2|0;CD(a,e,f,0,0,a.e8,a.fh);Y(2977);Y(2903);Ca();g=e+51|0;d=f+75|0;Bj(g,d,50.0);C7((-30.0),30.0,30.0);Bs(180.0,0.0,0.0,
1.0);h=a.x.a.eL;i=a.x.a.I;j=a.x.a.X;g=g-a.FU;k=(d-50|0)-a.Dy;Bs(135.0,0.0,1.0,0.0);I4();Bs((-135.0),0.0,1.0,0.0);l=k/40.0;Bs( -Lo(l)*20.0,1.0,0.0,0.0);c=a.x.a;m=g/40.0;c.eL=Lo(m)*20.0;a.x.a.I=Lo(m)*40.0;a.x.a.X= -Lo(l)*20.0;Bj(0.0,a.x.a.dO,0.0);c=BdI;b=a.x.a;k=0.0;n=0.0;o=0.0;p=0.0;g=1.0;$p=2;case 2:AF6(c,b,k,n,o,p,g);if(I()){break _;}a.x.a.eL=h;a.x.a.I=i;a.x.a.X=j;BR();D9();Bb(2977);return;default:F2();}}Dh().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,$p);}
function AB8(){var a=this;C.call(a);a.fY=0;a.fR=0;}
function G8(a,b){var c=new AB8();A0M(c,a,b);return c;}
function A0M(a,b,c){var d;a.fY=b;a.fR=c;c=1;while(true){d=a.fY;b=c+1|0;if((d/b|0)<320)break;if((a.fR/b|0)<240)break;c=b;}a.fY=a.fY/c|0;a.fR=a.fR/c|0;}
function ADS(a){return a.fY;}
function AKr(a){return a.fR;}
function Uq(){}
function Uz(){}
function QQ(){var a=this;C.call(a);a.wN=null;a.Cn=null;a.JD=0;a.Kw=0;}
function AMk(a){if(!a.JD){a.wN.DS=null;FU(a.wN);CY(a.Cn,null);}}
function Ru(){Ev.call(this);}
function A2G(a,b){$rt_putStderr(b);}
function AHv(){var a=this;C.call(a);a.U=0.0;a.R=0.0;a.S=0.0;}
function BF(a,b,c){var d=new AHv();A3a(d,a,b,c);return d;}
function A3a(a,b,c,d){a.U=b;a.R=c;a.S=d;}
function ZS(a,b){return BF(a.U-b.U,a.R-b.R,a.S-b.S);}
function J_(a){var b;b=B$(a.U*a.U+a.R*a.R+a.S*a.S);return BF(a.U/b,a.R/b,a.S/b);}
function Je(a,b,c,d){return BF(a.U+b,a.R+c,a.S+d);}
function C$(a,b){var c,d,e;c=b.U-a.U;d=b.R-a.R;e=b.S-a.S;return B$(c*c+d*d+e*e);}
function EY(a,b){var c,d,e;c=b.U-a.U;d=b.R-a.R;e=b.S-a.S;return c*c+d*d+e*e;}
function Ks(a,b,c){var d,e,f;d=b.U-a.U;e=b.R-a.R;f=b.S-a.S;if(d*d<1.0000000116860974E-7)return null;c=(c-a.U)/d;return c>=0.0&&c<=1.0?BF(a.U+d*c,a.R+e*c,a.S+f*c):null;}
function Kw(a,b,c){var d,e,f;d=b.U-a.U;e=b.R-a.R;f=b.S-a.S;if(e*e<1.0000000116860974E-7)return null;c=(c-a.R)/e;return c>=0.0&&c<=1.0?BF(a.U+d*c,a.R+e*c,a.S+f*c):null;}
function Kf(a,b,c){var d,e,f;d=b.U-a.U;e=b.R-a.R;f=b.S-a.S;if(f*f<1.0000000116860974E-7)return null;c=(c-a.S)/f;return c>=0.0&&c<=1.0?BF(a.U+d*c,a.R+e*c,a.S+f*c):null;}
function Uo(){var a=this;C.call(a);a.ot=null;a.xP=null;a.cA=null;a.db=0;a.jv=null;}
function AUM(a){return a.cA;}
function AF_(a,b){var c,d,e,f;ER(a.cA);a.jv=b;a.db=0;while(a.db<Q(b)){a:{b:{c:{c=P(b,a.db);switch(c){case 39:a.db=a.db+1|0;d=new S;V(d);while(a.db<Q(a.jv)){e=a.jv;f=a.db;a.db=f+1|0;c=P(e,f);if(c!=39)Ce(d,c);else{if(a.db>=Q(a.jv))break;if(P(a.jv,a.db)!=39)break;Ce(d,39);a.db=a.db+1|0;}}M(a.cA,AXQ(R(d)));break a;case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:case 48:case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 65:case 66:case 67:case 73:case 74:case 78:case 79:case 80:case 81:case 82:case 84:case 85:case 86:case 91:case 92:case 93:case 94:case 95:case 96:case 98:case 101:case 102:case 103:case 105:case 106:case 108:case 110:case 111:case 112:case 113:case 114:case 116:case 118:case 120:break b;case 68:break;case 69:case 99:f
=CO(a);M(a.cA,A$5(a.ot,f>3?0:1));break a;case 70:f=CO(a);M(a.cA,Fj(8,f));break a;case 71:CO(a);d=a.cA;e=new Sx;e.wO=AIT(a.ot);M(d,e);break a;case 72:f=CO(a);M(a.cA,Fj(11,f));break a;case 75:f=CO(a);M(a.cA,Fj(10,f));break a;case 76:case 77:f=CO(a);if(f<=2){M(a.cA,A$i(f));break a;}M(a.cA,A$p(a.ot,f!=3?0:1));break a;case 83:f=CO(a);M(a.cA,Fj(14,f));break a;case 87:f=CO(a);M(a.cA,Fj(4,f));break a;case 88:f=CO(a);if(f>3){b=new BB;d=new S;V(d);AOE(b,R(Bf(G(d,B(420)),a.db)));J(b);}d=a.cA;e=new TF;e.yF=f;M(d,e);break a;case 89:case 121:break c;case 90:CO(a);d
=a.cA;e=new Su;T2(e,a.xP);M(d,e);break a;case 97:CO(a);d=a.cA;e=new Qe;e.wH=AA8(a.ot);M(d,e);break a;case 100:f=CO(a);M(a.cA,Fj(5,f));break a;case 104:f=CO(a);M(a.cA,A0A(10,f,12));break a;case 107:f=CO(a);M(a.cA,A0A(11,f,24));break a;case 109:f=CO(a);M(a.cA,Fj(12,f));break a;case 115:f=CO(a);M(a.cA,Fj(13,f));break a;case 117:f=CO(a);d=a.cA;e=new RW;Ox(e,7,f);M(d,e);break a;case 119:f=CO(a);M(a.cA,Fj(3,f));break a;case 122:CO(a);d=a.cA;e=new R1;T2(e,a.xP);M(d,e);break a;default:break b;}f=CO(a);M(a.cA,Fj(6,f));break a;}f
=CO(a);if(f!=2){M(a.cA,Fj(1,f));break a;}d=a.cA;e=new X9;e.vy=1;M(d,e);break a;}if(Rb(a,c))CO(a);else{d=new S;V(d);while(a.db<Q(b)&&!Rb(a,P(b,a.db))){f=a.db;a.db=f+1|0;Ce(d,P(b,f));}M(a.cA,AXQ(R(d)));}}}}
function Rb(a,b){a:{b:{if(b!=39&&!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}b=1;break a;}b=0;}return b;}
function CO(a){var b,c,d,e;b=1;c=a.jv;d=a.db;a.db=d+1|0;e=P(c,d);while(a.db<Q(a.jv)&&P(a.jv,a.db)==e){a.db=a.db+1|0;b=b+1|0;}return b;}
function C2(){C.call(this);}
function Z8(){BT.call(this);}
function Km(){C.call(this);this.H6=null;}
var Bge=null;var Ba4=null;var Bc4=null;function AGB(a){var b=new Km();AMB(b,a);return b;}
function AMB(a,b){a.H6=b;}
function AEg(){Bge=AGB(B(421));Ba4=AGB(B(422));Bc4=AGB(B(423));}
function Mf(){C.call(this);}
function Jm(){var a=this;Mf.call(a);a.ej=0.0;a.eh=0.0;a.ei=0.0;a.ek=0.0;a.en=0.0;a.eo=0.0;a.el=0.0;a.em=0.0;a.ep=0.0;a.er=0.0;a.es=0.0;a.eq=0.0;a.gK=0.0;a.gL=0.0;a.gM=0.0;a.gN=0.0;}
function FH(){var a=new Jm();A5H(a);return a;}
function A5H(a){Zz(a);}
function Zz(a){a.ej=1.0;a.eh=0.0;a.ei=0.0;a.ek=0.0;a.en=0.0;a.eo=1.0;a.el=0.0;a.em=0.0;a.ep=0.0;a.er=0.0;a.es=1.0;a.eq=0.0;a.gK=0.0;a.gL=0.0;a.gM=0.0;a.gN=1.0;return a;}
function LJ(a){a.ej=0.0;a.eh=0.0;a.ei=0.0;a.ek=0.0;a.en=0.0;a.eo=0.0;a.el=0.0;a.em=0.0;a.ep=0.0;a.er=0.0;a.es=0.0;a.eq=0.0;a.gK=0.0;a.gL=0.0;a.gM=0.0;a.gN=0.0;return a;}
function Hn(a,b){a.ej=b.ej;a.eh=b.eh;a.ei=b.ei;a.ek=b.ek;a.en=b.en;a.eo=b.eo;a.el=b.el;a.em=b.em;a.ep=b.ep;a.er=b.er;a.es=b.es;a.eq=b.eq;a.gK=b.gK;a.gL=b.gL;a.gM=b.gM;a.gN=b.gN;return a;}
function Yy(a,b){Ch(b,a.ej);Ch(b,a.eh);Ch(b,a.ei);Ch(b,a.ek);Ch(b,a.en);Ch(b,a.eo);Ch(b,a.el);Ch(b,a.em);Ch(b,a.ep);Ch(b,a.er);Ch(b,a.es);Ch(b,a.eq);Ch(b,a.gK);Ch(b,a.gL);Ch(b,a.gM);Ch(b,a.gN);return a;}
function Oz(a,b){b=b.data;b[0]=a.ej;b[1]=a.eh;b[2]=a.ei;b[3]=a.ek;b[4]=a.en;b[5]=a.eo;b[6]=a.el;b[7]=a.em;b[8]=a.ep;b[9]=a.er;b[10]=a.es;b[11]=a.eq;b[12]=a.gK;b[13]=a.gL;b[14]=a.gM;b[15]=a.gN;return a;}
function AZ7(a,b){return VC(a,b,a);}
function ADC(a,b){a.ej=a.ej*b.ft;a.eh=a.eh*b.ft;a.ei=a.ei*b.ft;a.ek=a.ek*b.ft;a.en=a.en*b.fv;a.eo=a.eo*b.fv;a.el=a.el*b.fv;a.em=a.em*b.fv;a.ep=a.ep*b.fu;a.er=a.er*b.fu;a.es=a.es*b.fu;a.eq=a.eq*b.fu;return a;}
function A0z(a,b,c){return VK(a,b,c,a);}
function VK(a,b,c,d){return AZ8(b,c,a,d);}
function AZ8(b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf;if(e===null)e=FH();f=b;g=Qx(f);h=LR(f);i=1.0-g;j=c.ft*c.fv;k=c.fv*c.fu;l=c.ft*c.fu;m=c.ft*h;n=c.fv*h;o=c.fu*h;p=c.ft*c.ft*i+g;b=j*i;q=b+o;r=l*i;s=r-n;t=b-o;u=c.fv*c.fv*i+g;b=k*i;v=b+m;w=r+n;x=b-m;y=c.fu*c.fu*i+g;z=d.ej*p+d.en*q+d.ep*s;ba=d.eh*p+d.eo*q+d.er*s;bb=d.ei*p+d.el*q+d.es*s;bc=d.ek*p+d.em*q+d.eq*s;bd=d.ej*t+d.en*u+d.ep*v;be=d.eh*t+d.eo*u+d.er*v;bf=d.ei*t+d.el*u+d.es*v;r=d.ek*t+d.em*u+d.eq*v;e.ep=d.ej*w+d.en*x+d.ep*
y;e.er=d.eh*w+d.eo*x+d.er*y;e.es=d.ei*w+d.el*x+d.es*y;e.eq=d.ek*w+d.em*x+d.eq*y;e.ej=z;e.eh=ba;e.ei=bb;e.ek=bc;e.en=bd;e.eo=be;e.el=bf;e.em=r;return e;}
function VC(a,b,c){if(c===null)c=FH();c.gK=c.gK+a.ej*b.ft+a.en*b.fv+a.ep*b.fu;c.gL=c.gL+a.eh*b.ft+a.eo*b.fv+a.er*b.fu;c.gM=c.gM+a.ei*b.ft+a.el*b.fv+a.es*b.fu;c.gN=c.gN+a.ek*b.ft+a.em*b.fv+a.eq*b.fu;return c;}
function L7(a,b){var c;a:{if(b instanceof Jm){b:{c:{b=b;if(a.ej!==b.ej)break c;if(a.eh!==b.eh)break c;if(a.ei!==b.ei)break c;if(a.ek!==b.ek)break c;if(a.en!==b.en)break c;if(a.eo!==b.eo)break c;if(a.el!==b.el)break c;if(a.em!==b.em)break c;if(a.ep!==b.ep)break c;if(a.er!==b.er)break c;if(a.es!==b.es)break c;if(a.eq!==b.eq)break c;if(a.gK!==b.gK)break c;if(a.gL!==b.gL)break c;if(a.gM!==b.gM)break c;if(a.gN===b.gN){c=1;break b;}}c=0;}if(c){c=1;break a;}}c=0;}return c;}
function SG(){var a=this;C.call(a);a.AH=0;a.s6=null;a.po=null;a.lh=0;a.kK=0;}
function LC(){var a=this;C.call(a);a.r8=0;a.rG=0;a.tq=0;a.xF=0;a.u0=0;a.ye=0;a.ET=0;a.cz=null;a.xU=null;a.xV=null;a.xW=null;a.uD=null;a.yd=null;a.wx=null;a.w0=null;a.xK=null;a.zi=null;a.t$=null;a.xs=null;a.wA=null;a.w4=null;a.x9=null;a.w1=null;a.sm=0;a.oR=0;a.qx=0;a.qu=0;a.IB=0;a.wd=null;a.vD=null;a.uR=0;a.yT=null;a.uo=null;a.yG=null;a.um=null;a.uT=null;a.xR=null;a.nq=null;a.n2=null;a.uA=0;a.rd=0.0;a.re=0.0;a.rf=0.0;a.rg=0.0;a.sl=0.0;a.rc=0.0;a.s_=0.0;a.sW=0.0;a.tT=0.0;a.tS=0.0;a.sx=0.0;a.sw=0.0;a.sv=0.0;a.sz
=0.0;a.sh=0.0;a.sg=0.0;a.sf=0.0;}
var Bgf=null;var Bgg=null;function A84(a,b,c,d,e,f,g,h){var i=new LC();AOd(i,a,b,c,d,e,f,g,h);return i;}
function Xz(b){var c,d,e,f,g,h,i,j;c=Bgf.data[b];if(c===null){d=0;e=0;f=0;g=0;h=0;i=0;j=0;if((b&1)==1)d=1;if((b&2)==2)e=1;if((b&4)==4)f=1;if((b&8)==8)g=1;if((b&16)==16)h=1;if((b&32)==32)i=1;if((b&64)==64)j=1;c=A84(b,d,e,f,g,h,i,j);Bgf.data[b]=c;}return c;}
function AOd(a,b,c,d,e,f,g,h,i){var j,k,l;Y9(a);a.xU=null;a.xV=null;a.xW=null;a.uD=null;a.yd=null;a.wx=null;a.w0=null;a.xK=null;a.zi=null;a.t$=null;a.xs=null;a.wA=null;a.w4=null;a.x9=null;a.w1=null;a.uR=0;a.yT=$rt_createFloatArray(16);a.uo=$rt_createFloatArray(16);a.yG=$rt_createFloatArray(16);a.um=LJ(FH());a.uT=LJ(FH());a.xR=LJ(FH());a.nq=AZN();a.n2=AZN();a.uA=0;a.rd=0.0;a.re=0.0;a.rf=0.0;a.rg=0.0;a.sl=0.0;a.rc=0.0;a.s_=0.0;a.sW=0.0;a.tT=0.0;a.tS=0.0;a.sx=0.0;a.sw=0.0;a.sv=0.0;a.sz=0.0;a.sh=0.0;a.sg=0.0;a.sf
=0.0;a.r8=c;a.rG=d;a.tq=e;a.xF=f;a.u0=g;a.ye=h;a.ET=i;if(Bgg===null)Bgg=ADW(B(424));j=B(9);if(a.r8)j=B3(G(G(Cd(),j),B(425)));if(a.rG)j=B3(G(G(Cd(),j),B(426)));if(a.tq)j=B3(G(G(Cd(),j),B(427)));if(a.xF)j=B3(G(G(Cd(),j),B(428)));if(a.u0)j=B3(G(G(Cd(),j),B(429)));if(a.ye)j=B3(G(G(Cd(),j),B(430)));if(a.ET)j=B3(G(G(Cd(),j),B(431)));j=B3(G(G(Cd(),j),Bgg));k=TH(35633);Zl(k,B3(G(G(G(Cd(),XQ()),B(432)),j)));V8(k);if(!TJ(k)){Cm(Ez(),Pq(B3(G(G(Cd(),B(433)),XI(k))),B(174),B(434)));J(Rs(B(435)));}l=TH(35632);Zl(l,B3(G(G(G(Cd(),
XQ()),B(436)),j)));V8(l);if(!TJ(l)){Cm(Ez(),Pq(B3(G(G(Cd(),B(433)),XI(l))),B(174),B(437)));J(Rs(B(435)));}a.cz=AJ6();Z6(a.cz,k);Z6(a.cz,l);b=1;a.sm=0;LM(a.cz,a.sm,B(438));if(!a.tq)a.oR=(-1);else{a.oR=b;LM(a.cz,a.oR,B(439));b=2;}if(!a.r8)a.qx=(-1);else{c=b+1|0;a.qx=b;LM(a.cz,a.qx,B(440));b=c;}if(!a.rG)a.qu=(-1);else{c=b+1|0;a.qu=b;LM(a.cz,a.qu,B(441));b=c;}a.IB=b;ABw(a.cz);Wm(a.cz,k);Wm(a.cz,l);W3(k);W3(l);if(!AJt(a.cz)){Cm(Ez(),Pq(B3(G(G(Cd(),B(433)),AOh(a.cz))),B(174),B(442)));J(Rs(B(435)));}Tv(a.cz);a.xU=
Du(a.cz,B(443));a.xV=Du(a.cz,B(444));a.xW=Du(a.cz,B(445));a.t$=Du(a.cz,B(446));if(a.xF){a.xs=Du(a.cz,B(447));a.x9=Du(a.cz,B(448));a.w1=Du(a.cz,B(449));}if(a.u0){a.uD=Du(a.cz,B(450));a.yd=Du(a.cz,B(451));a.wx=Du(a.cz,B(452));a.w0=Du(a.cz,B(453));a.xK=Du(a.cz,B(454));a.zi=Du(a.cz,B(455));}if(a.ye)a.wA=Du(a.cz,B(456));Qt(Du(a.cz,B(457)),0);a.w4=Du(a.cz,B(458));a.wd=Z2();a.vD=Ms();Rx(a.wd);HY(34962,a.vD);QH(a);}
function QH(a){Kv(a.sm);Kn(a.sm,3,5126,0,28,0);if(a.tq){Kv(a.oR);Kn(a.oR,2,5126,0,28,12);}if(a.r8){Kv(a.qx);Kn(a.qx,4,5121,1,28,20);}if(a.rG){Kv(a.qu);Kn(a.qu,4,5121,1,28,24);}}
function AGr(a){Tv(a.cz);}
function ATw(a){return;}
function AHr(a,b){if(!L7(b,a.um)){Oz(Hn(a.um,b),a.yT);Nc(a.xU,a.yT);}}
function ABC(a,b){if(!L7(b,a.uT)){Oz(Hn(a.uT,b),a.uo);Nc(a.xV,a.uo);}}
function AAB(a,b){if(!L7(b,a.xR)){Oz(Hn(a.xR,b),a.yG);Nc(a.xW,a.yG);}}
function ABt(a,b,c){if(!(XA(b,a.nq)&&XA(c,a.n2))){YB(a.nq,b);YB(a.n2,c);NL(a.x9,a.nq.hz,a.nq.hy,a.nq.hA);NL(a.w1,a.n2.hz,a.n2.hy,a.n2.hA);}}
function ANF(a,b){if(a.uA!=b){a.uA=b;Qt(a.yd,b%2|0);I5(a.zi,b/2|0);}}
function AGW(a,b,c,d,e){if(!(a.rd===b&&a.re===c&&a.rf===d&&a.rg===e)){a.rd=b;a.re=c;a.rf=d;a.rg=e;Tc(a.uD,a.rd,a.re,a.rf,a.rg);}}
function AAg(a,b,c){if(!(a.sl===b&&a.rc===c)){a.sl=b;a.rc=c;I5(a.wx,a.sl);I5(a.w0,a.rc);}}
function AJj(a,b){if(a.s_!==b){a.s_=b;I5(a.xK,a.s_);}}
function AF9(a,b){if(a.sW!==b){a.sW=b;I5(a.wA,a.sW);}}
function AIP(a,b,c){var d,e;if(!(a.tT===b&&a.tS===c)){a.tT=b;a.tS=c;d=a.w4;b=a.tT;c=a.tS;Be();if(d!==null){e=A_Q;d=d.lT;e.uniform2f(d,b,c);}}}
function AHu(a,b,c,d,e){if(!(a.sx===b&&a.sw===c&&a.sv===d&&a.sz===e)){a.sx=b;a.sw=c;a.sv=d;a.sz=e;Tc(a.t$,a.sx,a.sw,a.sv,a.sz);}}
function AMn(a,b,c,d){if(!(a.sh===b&&a.sg===c&&a.sf===d)){a.sh=b;a.sg=c;a.sf=d;NL(a.xs,a.sh,a.sg,a.sf);}}
function AMv(){Bgf=H(LC,128);Bgg=null;}
function R9(){var a=this;C.call(a);a.dL=null;a.eO=0;}
function TW(a,b){var c,d;if(b.gt>=0){b=new DE;Bd(b,B(459));J(b);}if(a.eO==a.dL.data.length){c=H(IN,a.eO<<1);CT(a.dL,0,c,0,a.eO);a.dL=c;}a.dL.data[a.eO]=b;b.gt=a.eO;d=a.eO;a.eO=d+1|0;QS(a,d);return b;}
function P0(a){a.eO=0;}
function ALE(a){var b,c,d,e;b=a.dL.data[0];c=a.dL.data;d=a.dL.data;e=a.eO-1|0;a.eO=e;c[0]=d[e];a.dL.data[a.eO]=null;if(a.eO>0)Ve(a,0);b.gt=(-1);return b;}
function AK2(a,b,c){var d;d=b.i3;b.i3=c;if(c>=d)Ve(a,b.gt);else QS(a,b.gt);}
function QS(a,b){var c,d,e,f;c=a.dL.data[b];d=c.i3;a:{while(true){if(b<=0)break a;e=(b-1|0)>>1;f=a.dL.data[e];if(d>=f.i3)break;a.dL.data[b]=f;f.gt=b;b=e;}}a.dL.data[b]=c;c.gt=b;}
function Ve(a,b){var c,d,e,f,g,h,i,j;c=a.dL.data[b];d=c.i3;a:{while(true){e=1+(b<<1)|0;f=e+1|0;if(e>=a.eO)break;g=a.dL.data[e];h=g.i3;if(f>=a.eO){i=null;j=Infinity;}else{i=a.dL.data[f];j=i.i3;}if(h<j){if(h>=d)break a;a.dL.data[b]=g;g.gt=b;}else{if(j>=d)break a;a.dL.data[b]=i;i.gt=b;e=f;}b=e;}}a.dL.data[b]=c;c.gt=b;}
function AHt(a){return a.eO?0:1;}
function IN(){var a=this;C.call(a);a.h$=0;a.h3=0;a.is=0;a.qn=0;a.gt=0;a.m$=0.0;a.oB=0.0;a.i3=0.0;a.on=null;a.nA=0;}
function AY8(a,b,c){var d=new IN();AYH(d,a,b,c);return d;}
function AYH(a,b,c,d){a.gt=(-1);a.nA=0;a.h$=b;a.h3=c;a.is=d;a.qn=b|c<<10|d<<20;}
function Fe(a,b){var c,d,e;c=b.h$-a.h$|0;d=b.h3-a.h3|0;e=b.is-a.is|0;return B$(c*c+d*d+e*e);}
function A2i(a,b){return b.qn!=a.qn?0:1;}
function V0(a){return a.gt<0?0:1;}
function D_(){var a=this;C.call(a);a.hI=null;a.nY=0.0;a.t_=0.0;}
function Bgh(){var a=new D_();Ia(a);return a;}
function Ia(a){KF(new JV);AMO(new ZM);a.nY=0.0;a.t_=1.0;}
function AHA(a,b){var c,d,$p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.hI.sG;$p=1;case 1:$z=AB2(c,b);if(I()){break _;}d=$z;EO(d);return;default:F2();}}Dh().s(a,b,c,d,$p);}
function AHT(a,b){var c,d,$p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.hI.sG;$p=1;case 1:$z=AB2(c,b);if(I()){break _;}d=$z;EO(d);return;default:F2();}}Dh().s(a,b,c,d,$p);}
function AJ_(b){var c;Bb(3553);BD();c=Bc$;BJ(1.0,1.0,1.0,1.0);Bx(c);B0(c,0.0,0.0,(-1.0));Bo(c,b.bg,b.bs,b.bf);Bo(c,b.bv,b.bs,b.bf);Bo(c,b.bv,b.bc,b.bf);Bo(c,b.bg,b.bc,b.bf);B0(c,0.0,0.0,1.0);Bo(c,b.bg,b.bc,b.bw);Bo(c,b.bv,b.bc,b.bw);Bo(c,b.bv,b.bs,b.bw);Bo(c,b.bg,b.bs,b.bw);B0(c,0.0,(-1.0),0.0);Bo(c,b.bg,b.bc,b.bf);Bo(c,b.bv,b.bc,b.bf);Bo(c,b.bv,b.bc,b.bw);Bo(c,b.bg,b.bc,b.bw);B0(c,0.0,1.0,0.0);Bo(c,b.bg,b.bs,b.bw);Bo(c,b.bv,b.bs,b.bw);Bo(c,b.bv,b.bs,b.bf);Bo(c,b.bg,b.bs,b.bf);B0(c,(-1.0),0.0,0.0);Bo(c,b.bg,
b.bc,b.bw);Bo(c,b.bg,b.bs,b.bw);Bo(c,b.bg,b.bs,b.bf);Bo(c,b.bg,b.bc,b.bf);B0(c,1.0,0.0,0.0);Bo(c,b.bv,b.bc,b.bf);Bo(c,b.bv,b.bs,b.bf);Bo(c,b.bv,b.bs,b.bw);Bo(c,b.bv,b.bc,b.bw);Bt(c);Y(3553);}
function ATO(a,b){a.hI=b;}
function ABy(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,$p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:Bb(2896);L();g=Bd1.bk;h=(g&15)<<4;i=g&240;f=h;j=f/256.0;k=(f+15.989999771118164)/256.0;f=i;l=f/256.0;m=(f+15.989999771118164)/256.0;Ca();Bj(c,d,e);n=b.dK*1.399999976158142;C7(n,n,n);o=B(205);$p
=1;case 1:AHA(a,o);if(I()){break _;}BD();o=Bc$;p=1.0;q=0.0;r=b.gA/b.dK;Bs( -a.hI.qO,0.0,1.0,0.0);Bj(0.0,0.0,0.4000000059604645+(r|0)*0.019999999552965164);BJ(1.0,1.0,1.0,1.0);Bx(o);e=k;s=m;t=j;u=l;while(r>0.0){c=p-0.5;d=0.0-q;F(o,c,d,0.0,e,s);F(o,(-0.5),d,0.0,t,s);d=1.399999976158142-q;F(o,(-0.5),d,0.0,t,u);F(o,c,d,0.0,e,u);r=r-1.0;q=q-1.0;p=p*0.8999999761581421;Bj(0.0,0.0,(-0.03999999910593033));}Bt(o);BR();Y(2896);return;default:F2();}}Dh().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,$p);}
function AH6(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,$p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();bj=$T.l();bi=$T.l();bh=$T.l();bg=$T.l();bf=$T.l();be=$T.l();bd=$T.l();bc=$T.l();bb=$T.l();ba=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:Y(3042);Dy(770,
771);h=a.hI.sG;i=B(460);$p=1;case 1:$z=AB2(h,i);if(I()){break _;}j=$z;EO(j);i=QF(a);EJ(0);k=a.nY;l=b.eb;m=b.f-b.eb;n=g;o=l+m*n;p=b.ea+(b.j-b.ea)*n;l=b.d_+(b.g-b.d_)*n;m=k;j=Em(o-m);q=Em(o+m);r=Em(p-m);s=Em(p);t=Em(l-m);u=Em(l+m);v=c;w=v-o;x=d;y=x-p;z=e;ba=z-l;BD();bb=Bc$;Bx(bb);bc=f;while(j<=q){bd=r;while(bd<=s){be=t;while(be<=u){bf=O(i,j,bd-1|0,be);if(bf>0&&D5(i,j,bd,be)>3){L();b=Bcf.data[bf];h=Bc$;if(b.iv()){p=bd;n=(bc-(x-(p+y))/2.0)*0.5*DT(QF(a),j,bd,be);if(n>=0.0){if(n>1.0)n=1.0;Oa(h,1.0,1.0,1.0,n);l=j;n
=l+b.ew+w;bg=l+b.fC+w;bh=p+b.ch+y+0.015625;l=be;bi=l+b.ev+ba;bj=l+b.fB+ba;e=(v-n)/2.0/m+0.5;f=(v-bg)/2.0/m+0.5;d=(z-bi)/2.0/m+0.5;c=(z-bj)/2.0/m+0.5;l=e;o=d;F(h,n,bh,bi,l,o);p=c;F(h,n,bh,bj,l,p);l=f;F(h,bg,bh,bj,l,p);F(h,bg,bh,bi,l,o);}}}be=be+1|0;}bd=bd+1|0;}j=j+1|0;}Bt(bb);BJ(1.0,1.0,1.0,1.0);Bb(3042);EJ(1);return;default:F2();}}Dh().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,$p);}
function QF(a){return a.hI.m9;}
function AK7(a,b,c,d,e,f,g){var h,i,j,k,$p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(Bb_.d.ds&&a.nY>0.0){h=(1.0-AAK(a.hI,b.f,b.j,b.g)/256.0)*a.t_;if(h>0.0){$p=2;continue _;}}if(b.dk<=0)return;i=c;j=d;k=e;$p=1;case 1:ABy(a,b,i,j,k,g);if(I()){break _;}return;case 2:AH6(a,b,c,d,e,h,g);if(I()){break _;}if(b.dk<=0)return;i=c;j=d;k=e;$p=1;continue _;default:F2();}}Dh().s(a,b,c,d,e,f,
g,h,i,j,k,$p);}
function ABV(){var a=this;D_.call(a);a.zj=null;a.hM=null;}
function AM0(){var a=new ABV();AYE(a);return a;}
function AYE(a){Ia(a);a.zj=AAq();a.hM=new Dd;a.nY=0.15000000596046448;a.t_=0.75;}
function AKN(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,$p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(c!==null){if(c.bX<256){L();if(!Bcf.data[c.bX].ig()){f=c.bX;c=B(205);$p=1;continue _;}}if(BZ(c).L>=0){Bb(2896);if(c.bX>=256){g=B(248);$p=2;continue _;}g=B(205);$p=3;continue _;}}return;case 1:$z=AB2(b,c);if(I()){break _;}h=$z;EO(h);i
=Bcf.data[f];Ca();Bj(d-2|0,e+3|0,0.0);C7(10.0,10.0,10.0);Bj(1.0,0.5,8.0);Bs(210.0,1.0,0.0,0.0);Bs(45.0,0.0,1.0,0.0);BJ(1.0,1.0,1.0,1.0);BN();IU(a.zj,i);BN();BR();return;case 2:$z=AB2(b,g);if(I()){break _;}f=$z;EO(f);h=(BZ(c).L%16|0)<<4;j=(BZ(c).L/16|0)<<4;BD();g=Bc$;Bx(g);k=d;l=e+16|0;m=h*0.00390625;n=(j+16|0)*0.00390625;F(g,k,l,0.0,m,n);o=d+16|0;p=(h+16|0)*0.00390625;F(g,o,l,0.0,p,n);l=e;q=j*0.00390625;F(g,o,l,0.0,p,q);F(g,k,l,0.0,m,q);Bt(g);Y(2896);return;case 3:$z=AB2(b,g);if(I()){break _;}f=$z;EO(f);h=(BZ(c).L
%16|0)<<4;j=(BZ(c).L/16|0)<<4;BD();g=Bc$;Bx(g);k=d;l=e+16|0;m=h*0.00390625;n=(j+16|0)*0.00390625;F(g,k,l,0.0,m,n);o=d+16|0;p=(h+16|0)*0.00390625;F(g,o,l,0.0,p,n);l=e;q=j*0.00390625;F(g,o,l,0.0,p,q);F(g,k,l,0.0,m,q);Bt(g);Y(2896);return;default:F2();}}Dh().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,$p);}
function Pi(a,b,c,d,e){var f,g,h,i,j,k,l;if(c!==null){if(c.s>1){f=new S;V(f);f=R(Bf(G(f,B(9)),c.s));Bb(2896);Bb(2929);CG(b,f,((d+19|0)-2|0)-Ei(b,f)|0,(e+6|0)+3|0,16777215);Y(2896);Y(2929);}if(c.fy>0){g=13-((c.fy*13|0)/Kr(c)|0)|0;h=255-((c.fy*255|0)/Kr(c)|0)|0;Bb(2896);Bb(2929);Bb(3553);BD();i=Bc$;j=255-h|0;k=j<<16|h<<8;h=(j/4|0)<<16|16128;d=d+2|0;l=e+13|0;Zs(i,d,l,13,2,0);Zs(i,d,l,12,1,h);Zs(i,d,l,g,1,k);Y(3553);Y(2896);Y(2929);BJ(1.0,1.0,1.0,1.0);}}}
function Zs(b,c,d,e,f,g){var h,i,j;Bx(b);Ii(b,g);h=c;i=d;Bo(b,h,i,0.0);j=d+f|0;Bo(b,h,j,0.0);h=c+e|0;Bo(b,h,j,0.0);Bo(b,h,i,0.0);Bt(b);}
function ALA(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q,r,s,$p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:h=b;i=h.jN;Ca();j=Bv((h.iV+g)/10.0+h.ro)*0.10000000149011612+0.10000000149011612;f=((h.iV+g)/20.0+h.ro)*57.2957763671875;k=1;if(h.jN.s>1)k=2;if(h.jN.s>5)k=3;if(h.jN.s>20)k=4;Bj(c,d+j,e);Y(2977);if(i.bX<256){L();if
(!Bcf.data[i.bX].ig()){Bs(f,0.0,1.0,0.0);b=B(205);$p=3;continue _;}}C7(0.5,0.5,0.5);l=BZ(i).L;if(i.bX>=256){b=B(248);$p=1;continue _;}b=B(205);$p=2;continue _;case 1:AHA(a,b);if(I()){break _;}BD();m=Bc$;n=(l%16|0)<<4;c=n/256.0;f=(n+16|0)/256.0;n=(l/16|0)<<4;g=n/256.0;d=(n+16|0)/256.0;o=0;p=c;q=d;r=f;s=g;while(o<k){Ca();if(o>0)Bj((N(a.hM)*2.0-1.0)*0.30000001192092896,(N(a.hM)*2.0-1.0)*0.30000001192092896,(N(a.hM)*2.0-1.0)*0.30000001192092896);Bs(180.0-a.hI.qO,0.0,1.0,0.0);Bx(m);B0(m,0.0,1.0,0.0);F(m,(-0.5),(-0.25),
0.0,p,q);F(m,0.5,(-0.25),0.0,r,q);F(m,0.5,0.75,0.0,r,s);F(m,(-0.5),0.75,0.0,p,s);BN();Bt(m);BN();BR();o=o+1|0;}Bb(2977);BR();return;case 2:AHA(a,b);if(I()){break _;}BD();m=Bc$;n=(l%16|0)<<4;c=n/256.0;f=(n+16|0)/256.0;n=(l/16|0)<<4;g=n/256.0;d=(n+16|0)/256.0;o=0;p=c;q=d;r=f;s=g;while(o<k){Ca();if(o>0)Bj((N(a.hM)*2.0-1.0)*0.30000001192092896,(N(a.hM)*2.0-1.0)*0.30000001192092896,(N(a.hM)*2.0-1.0)*0.30000001192092896);Bs(180.0-a.hI.qO,0.0,1.0,0.0);Bx(m);B0(m,0.0,1.0,0.0);F(m,(-0.5),(-0.25),0.0,p,q);F(m,0.5,(-0.25),
0.0,r,q);F(m,0.5,0.75,0.0,r,s);F(m,(-0.5),0.75,0.0,p,s);BN();Bt(m);BN();BR();o=o+1|0;}Bb(2977);BR();return;case 3:AHA(a,b);if(I()){break _;}c=0.25;if(!Bcf.data[i.bX].iv()&&i.bX!=Bck.b)c=0.5;C7(c,c,c);n=0;while(n<k){Ca();if(n>0)Bj((N(a.hM)*2.0-1.0)*0.20000000298023224/c,(N(a.hM)*2.0-1.0)*0.20000000298023224/c,(N(a.hM)*2.0-1.0)*0.20000000298023224/c);BN();IU(a.zj,Bcf.data[i.bX]);BN();BR();n=n+1|0;}Bb(2977);BR();return;default:F2();}}Dh().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,$p);}
function FO(){C.call(this);}
function AMz(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,$$je,$p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:Zg(Bb_.f$,B(461));b=Bb_.f$;c=25;$p=1;case 1:ALI(b,c);if(I()){break _;}try{d=Long_fromInt(3000);$p=2;continue _;}catch($$e){$$je=Bh($$e);if($$je instanceof Ds)
{e=$$je;}else{throw $$e;}}e.iK();b=Bb_.f$;f=B(462);$p=3;continue _;case 2:a:{try{AI7(d);if(I()){break _;}break a;}catch($$e){$$je=Bh($$e);if($$je instanceof Ds){e=$$je;}else{throw $$e;}}e.iK();}b=Bb_.f$;f=B(462);$p=3;case 3:ANb(b,f);if(I()){break _;}b=Bb_.f$;c=50;$p=4;case 4:ALI(b,c);if(I()){break _;}try{d=Long_fromInt(1000);$p=5;continue _;}catch($$e){$$je=Bh($$e);if($$je instanceof Ds){e=$$je;}else{throw $$e;}}e.iK();f=A_w;b=Gw(f,B(463));g=Gw(f,B(464));h=Gw(f,B(465));i=Ee(f,B(466));j=Ck(g,B(467));k=Ck(g,B(468));l
=Ck(g,B(469));m=XU();e=Bb_.f$;n=B(470);$p=6;continue _;case 5:a:{try{AI7(d);if(I()){break _;}break a;}catch($$e){$$je=Bh($$e);if($$je instanceof Ds){e=$$je;}else{throw $$e;}}e.iK();}f=A_w;b=Gw(f,B(463));g=Gw(f,B(464));h=Gw(f,B(465));i=Ee(f,B(466));j=Ck(g,B(467));k=Ck(g,B(468));l=Ck(g,B(469));m=XU();e=Bb_.f$;n=B(470);$p=6;case 6:ANb(e,n);if(I()){break _;}e=Bb_.f$;c=75;$p=7;case 7:ALI(e,c);if(I()){break _;}try{d=Long_fromInt(1000);$p=8;continue _;}catch($$e){$$je=Bh($$e);if($$je instanceof Ds){e=$$je;}else{throw $$e;}}e.iK();n
=Ee(g,B(471));m.g4=CS(n,0).h8;m.gY=CS(n,1).h8;m.hv=CS(n,2).h8;m.o_=Fg(b,B(472));m.ox=Fg(b,B(473));m.qG=V4(b,B(474));m.hn=DJ(h,B(475));m.hH=DJ(h,B(476));m.hB=DJ(h,B(477));m.dF=EV(h,B(478));if(m.dF<0)m.dF=0;if(m.dF>16)m.dF=(m.dF*15|0)/100|0;m.kD=Ck(h,B(479));m.eC=Ck(h,B(480));m.fD=Ck(h,B(481));m.jo=EV(h,B(482));m.iR=Ck(h,B(483));m.ef=Ot(m);K2(m,j,l,k,LW(g,B(484)),LW(g,B(485)));b=Bb_.f$;g=B(486);$p=9;continue _;case 8:a:{try{AI7(d);if(I()){break _;}break a;}catch($$e){$$je=Bh($$e);if($$je instanceof Ds){e=$$je;}
else{throw $$e;}}e.iK();}n=Ee(g,B(471));m.g4=CS(n,0).h8;m.gY=CS(n,1).h8;m.hv=CS(n,2).h8;m.o_=Fg(b,B(472));m.ox=Fg(b,B(473));m.qG=V4(b,B(474));m.hn=DJ(h,B(475));m.hH=DJ(h,B(476));m.hB=DJ(h,B(477));m.dF=EV(h,B(478));if(m.dF<0)m.dF=0;if(m.dF>16)m.dF=(m.dF*15|0)/100|0;m.kD=Ck(h,B(479));m.eC=Ck(h,B(480));m.fD=Ck(h,B(481));m.jo=EV(h,B(482));m.iR=Ck(h,B(483));m.ef=Ot(m);K2(m,j,l,k,LW(g,B(484)),LW(g,B(485)));b=Bb_.f$;g=B(486);$p=9;case 9:ANb(b,g);if(I()){break _;}b=Bb_.f$;c=100;$p=10;case 10:ALI(b,c);if(I()){break _;}try
{d=Long_fromInt(1000);$p=11;continue _;}catch($$e){$$je=Bh($$e);if($$je instanceof Ds){e=$$je;}else{throw $$e;}}e.iK();c=0;while(c<GU(i)){b:{try{b=CS(i,c);o=Fg(b,B(402));p=Ty(a,m,o);if(p!==null){Uv(p,b);De(m,p);}else Cm(Dr(),B3(G(G(G(Cd(),B(487)),o),B(488))));break b;}catch($$e){$$je=Bh($$e);if($$je instanceof Cq){q=$$je;}else{throw $$e;}}Cm(Dr(),B(489));DA(q);}c=c+1|0;}r=Ee(f,B(490));s=0;while(s<GU(r)){c:{try{b=CS(r,s);t=DJ(b,B(403));u=Fg(b,B(402));v=BW(u,B(491))?AFt():!BW(u,B(492))?null:AB5();if(v===null)Cm(Dr(),
B3(G(G(G(Cd(),B(493)),u),B(488))));else{w=t%1024|0;x=(t>>10)%1024|0;c=(t>>20)%1024|0;f=v;f.tc(b);KU(m,w,x,c,f);}break c;}catch($$e){$$je=Bh($$e);if($$je instanceof Cq){y=$$je;}else{throw $$e;}}Cm(Dr(),B(494));DA(y);}s=s+1|0;}return m;case 11:a:{try{AI7(d);if(I()){break _;}break a;}catch($$e){$$je=Bh($$e);if($$je instanceof Ds){e=$$je;}else{throw $$e;}}e.iK();}c=0;while(c<GU(i)){d:{try{b=CS(i,c);o=Fg(b,B(402));p=Ty(a,m,o);if(p!==null){Uv(p,b);De(m,p);}else Cm(Dr(),B3(G(G(G(Cd(),B(487)),o),B(488))));break d;}
catch($$e){$$je=Bh($$e);if($$je instanceof Cq){q=$$je;}else{throw $$e;}}Cm(Dr(),B(489));DA(q);}c=c+1|0;}r=Ee(f,B(490));s=0;while(s<GU(r)){e:{try{b=CS(r,s);t=DJ(b,B(403));u=Fg(b,B(402));v=BW(u,B(491))?AFt():!BW(u,B(492))?null:AB5();if(v===null)Cm(Dr(),B3(G(G(G(Cd(),B(493)),u),B(488))));else{w=t%1024|0;x=(t>>10)%1024|0;c=(t>>20)%1024|0;f=v;f.tc(b);KU(m,w,x,c,f);}break e;}catch($$e){$$je=Bh($$e);if($$je instanceof Cq){y=$$je;}else{throw $$e;}}Cm(Dr(),B(494));DA(y);}s=s+1|0;}return m;default:F2();}}Dh().s(a,b,c,
d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,$p);}
function Ty(a,b,c){a:{if(BW(c,B(495))){c=A79(b);break a;}if(BW(c,B(496))){c=AXo(b);break a;}if(BW(c,B(497))){c=A4M(b);break a;}if(BW(c,B(498))){c=AXk(b);break a;}if(BW(c,B(499))){c=ASd(b);break a;}if(BW(c,B(500))){c=AYa(b);break a;}if(BW(c,B(501))){c=new PR;Iz(c,b);c.hx=B(502);c.lO=0.5;c.tW=50;c.b0=c.b0*10|0;c.dO=c.dO*6.0;DC(c,c.dK*6.0,c.gA*6.0);break a;}if(!BW(c,B(503))){if(!BW(c,B(504))){c=null;break a;}c=AT5(b);break a;}c=new Gn;GQ(c,b);c.iV=0;c.lD=5;c.ro=Cc()*3.141592653589793*2.0;}return c;}
function AND(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,$p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=Bb_.i;c=DG();E0(c,B(475),b.hn);E0(c,B(476),b.hH);E0(c,B(477),b.hB);DW(c,B(478),b.dF<<24>>24);CH(c,B(479),b.kD<<16>>16);CH(c,B(480),b.eC<<16>>16);CH(c,B(481),b.fD<<16>>16);L();DW(c,B(505),Bch.b<<24>>24);DW(c,B(482),b.jo<<24>>24);CH(c,B(483),b.iR<<16>>16);d
=DG();CH(d,B(467),b.o<<16>>16);CH(d,B(468),b.t<<16>>16);CH(d,B(469),b.bu<<16>>16);V_(d,B(484),b.b_);V_(d,B(485),b.gV);e=Gu();EP(e,Vf(b.g4<<16>>16));EP(e,Vf(b.gY<<16>>16));EP(e,Vf(b.hv<<16>>16));Ff(d,B(471),e);f=DG();HM(f,B(472),b.o_);HM(f,B(473),b.ox);ANg(f,B(474),b.qG);g=Gu();h=Hq(b.dl.fi);while(JO(h)){i=Il(h);j=DG();AK0(i,j);if(!ABL(j))EP(g,j);}k=Gu();l=WE(b.l9).gy();while(l.jr()){m=l.hm().fz;n=DG();E0(n,B(403),m);Co(b.l9,C0(m)).vz(n);EP(k,n);}o=DG();o.e1=B(506);Ka(o,B(463),f);Ka(o,B(464),d);Ka(o,B(465),c);Ff(o,
B(466),g);Ff(o,B(490),k);Le(o,B(399),Bb_.a.f);Le(o,B(400),Bb_.a.j);Le(o,B(401),Bb_.a.g);AN4(Bb_.a,o);A_w=o;b=new F_;c=new TN;c.H2=a;Te(b,c);$p=1;case 1:ANK(b);if(I()){break _;}return;default:F2();}}Dh().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,$p);}
function PG(){}
function Yc(){C.call(this);}
function AEA(a){var b,c,d;Be();A_N.requestPointerLock();b=CF();if(YQ())clearTimeout(YQ());O5(0);if(Long_lt(Long_sub(b,Xl()),Long_fromInt(3000))){c=new T3;c.I_=a;d=3000-Long_sub(b,Xl()).lo|0;O5(setTimeout(Cs(c,"onTimer"),d));}}
function AXv(a){AEA(a);}
function OJ(){var a=this;C.call(a);a.lt=0.0;a.lB=0.0;a.vZ=0;}
function AI3(){var a=this;C.call(a);a.iA=null;a.n9=0;a.sI=null;}
function AOO(a,b,c){var d=new AI3();AQS(d,a,b,c);return d;}
function AQS(a,b,c,d){a.n9=K(c,d);a.iA=H(C9,a.n9);a.sI=b;}
function A7b(a){return a.n9;}
function IW(a,b){return a.iA.data[b];}
function ACY(a,b,c){var d,e;if(a.iA.data[b]===null)return null;if(a.iA.data[b].s<=c){d=a.iA.data[b];a.iA.data[b]=null;a.sI.rl();return d;}e=FB(a.iA.data[b],c);if(!a.iA.data[b].s)a.iA.data[b]=null;a.sI.rl();return e;}
function AY0(a,b,c){a.iA.data[b]=c;a.sI.rl();}
function AV6(a){return 64;}
function Vp(){C.call(this);this.nC=null;}
function AQW(){var a=new Vp();AH_(a);return a;}
function AH_(a){a.nC=H(C9,1);}
function A6B(a,b){return a.nC.data[b];}
function A3A(a,b,c){var d;if(a.nC.data[b]===null)return null;d=a.nC.data[b];a.nC.data[b]=null;return d;}
function Sm(a,b,c){a.nC.data[b]=c;}
function AW0(a){return 64;}
function IV(){var a=this;C.call(a);a.k$=0;a.j1=0;a.kd=0;a.fE=null;a.qw=null;}
function En(a,b,c,d,e){var f=new IV();XR(f,a,b,c,d,e);return f;}
function XR(a,b,c,d,e,f){a.qw=b;a.fE=c;a.k$=d;a.j1=e;a.kd=f;}
function NB(a,b,c){var d,e;d=(a.qw.bq-a.qw.e8|0)/2|0;e=(a.qw.bM-a.qw.fh|0)/2|0;d=b-d|0;c=c-e|0;return d>=(a.j1-1|0)&&d<((a.j1+16|0)+1|0)&&c>=(a.kd-1|0)&&c<((a.kd+16|0)+1|0)?1:0;}
function A1M(a){return;}
function AZF(a,b){return 1;}
function KJ(a,b){a.fE.jF(a.k$,b);}
function A2k(a){return (-1);}
function AHk(){IV.call(this);this.tQ=null;}
function APZ(a,b,c,d,e,f){var g=new AHk();AQm(g,a,b,c,d,e,f);return g;}
function AQm(a,b,c,d,e,f,g){XR(a,b,d,0,f,g);a.tQ=c;}
function A5p(a,b){return 0;}
function A4s(a){var b;b=0;while(b<a.tQ.n9){if(IW(a.tQ,b)!==null)ACY(a.tQ,b,1);b=b+1|0;}}
function Wp(){IV.call(this);this.xh=0;}
function AQJ(a,b){return !(BZ(b) instanceof Gm)?0:BZ(b).z_!=a.xh?0:1;}
function AYl(a){return 15+(a.xh<<4)|0;}
function Mx(){M7.call(this);}
function AA4(a){var b,c,d,e,f;if(PN(a)){b=new Fd;Z(b);J(b);}a:{c=BV(a);if(a.O>0){d=a.O;e=0;while(true){if(e>=c)break a;f=d+1|0;OR(a,e,Ym(a,d));e=e+1|0;d=f;}}}a.O=c;a.cv=a.i$;a.jn=(-1);return a;}
function PN(a){return a.zz;}
function ADh(){var a=this;Mx.call(a);a.zz=0;a.y7=0;a.mC=null;}
function AVT(a,b,c,d,e,f){var g=new ADh();AYO(g,a,b,c,d,e,f);return g;}
function AYO(a,b,c,d,e,f,g){LQ(a,c);a.O=e;a.cv=f;a.y7=b;a.zz=g;a.mC=d;}
function Ym(a,b){return a.mC.data[b+a.y7|0];}
function OR(a,b,c){a.mC.data[b+a.y7|0]=c;}
function AVh(a){return 1;}
function ASk(a){return a.mC;}
function AYj(a){return a.zz;}
function MZ(){var a=this;C.call(a);a.IL=null;a.uZ=null;a.BS=0.0;a.C4=0.0;a.vS=null;a.vc=null;a.lH=0;}
function SO(a,b){var c;if(b!==null){a.vS=b;return a;}c=new BB;Bd(c,B(507));J(c);}
function AYn(a,b){return;}
function UU(a,b){var c;if(b!==null){a.vc=b;return a;}c=new BB;Bd(c,B(507));J(c);}
function A26(a,b){return;}
function N4(a,b,c,d){var e,f,g,h,$$je;a:{if(a.lH!=3){if(d)break a;if(a.lH!=2)break a;}b=new DE;Z(b);J(b);}a.lH=!d?1:2;while(true){try{e=ABe(a,b,c);}catch($$e){$$je=Bh($$e);if($$je instanceof BT){f=$$je;J(A1o(f));}else{throw $$e;}}if(Hz(e)){if(!d)return e;g=BV(b);if(g<=0)return e;e=FC(g);}else if(G9(e))break;h=!NA(e)?a.vS:a.vc;b:{if(h!==Ba4){if(h===Bge)break b;else return e;}if(BV(c)<a.uZ.data.length)return Bgi;W9(c,a.uZ);}Dz(b,b.O+MA(e)|0);}return e;}
function AJe(a,b){var c,d;if(!BV(b))return ADP(0);AAu(a);c=ADP(BV(b)*a.BS|0);while(true){d=N4(a,b,c,0);if(d===Bgj)break;if(d===Bgi){c=QE(a,c);continue;}if(!JI(d))continue;KY(d);}b=N4(a,b,c,1);if(JI(b))KY(b);while(true){b=Qa(a,c);if(Hz(b))break;if(!G9(b))continue;c=QE(a,c);}Ec(c);return c;}
function QE(a,b){var c,d;c=b.cV;d=My(LT(c,c.data.length*2|0));Dz(d,b.O);return d;}
function Qa(a,b){var c;if(a.lH!=2&&a.lH!=4){b=new DE;Z(b);J(b);}c=Bgj;if(c===Bgj)a.lH=3;return c;}
function A39(a,b){return Bgj;}
function AAu(a){a.lH=0;return a;}
function AVq(a){return;}
function Pu(){var a=this;C.call(a);a.nR=0;a.qW=0;}
var Bgj=null;var Bgi=null;function ABr(a,b){var c=new Pu();AIU(c,a,b);return c;}
function AIU(a,b,c){a.nR=b;a.qW=c;}
function Hz(a){return a.nR?0:1;}
function G9(a){return a.nR!=1?0:1;}
function JI(a){return !R0(a)&&!NA(a)?0:1;}
function R0(a){return a.nR!=2?0:1;}
function NA(a){return a.nR!=3?0:1;}
function MA(a){var b;if(JI(a))return a.qW;b=new Hs;Z(b);J(b);}
function FC(b){return ABr(2,b);}
function KY(a){var b,c;switch(a.nR){case 0:b=new RM;Z(b);J(b);case 1:b=new UV;Z(b);J(b);case 2:b=new T7;c=a.qW;Z(b);b.CO=c;J(b);case 3:b=new RI;c=a.qW;Z(b);b.FG=c;J(b);default:}}
function AJh(){Bgj=ABr(0,0);Bgi=ABr(1,0);}
function AEN(){var a=this;C.call(a);a.lx=null;a.kr=0;a.im=0;a.zd=0;}
function APC(a){var b=new AEN();AUa(b,a);return b;}
function AUa(a,b){a.lx=H(C,b);a.kr=b;a.im=0;a.zd=0;}
function SJ(a,b){var c,d;c=a.im;while(true){a.im=a.im+1|0;if(a.im>=a.kr)a.im=0;if(a.im==c){c=a.kr;a.kr=a.kr+(a.kr/2|0)|0;d=a.lx;a.lx=H(C,a.kr);CT(d,0,a.lx,0,c);return SJ(a,b);}if(a.lx.data[a.im]!==null)continue;else break;}a.lx.data[a.im]=b;a.zd=a.zd+1|0;return a.im;}
function ADE(a,b){if(b<a.kr&&b>=0)return a.lx.data[b];return null;}
function ME(){}
function IA(){C.call(this);}
function YG(){}
function Pl(){}
function Tp(){}
function M9(){}
function X$(){var a=this;IA.call(a);a.ft=0.0;a.fv=0.0;a.fu=0.0;}
function O3(a,b,c,d){a.ft=b;a.fv=c;a.fu=d;}
function YI(){}
function To(){}
function Id(){var a=this;IA.call(a);a.hz=0.0;a.hy=0.0;a.hA=0.0;a.p7=0.0;}
function AZN(){var a=new Id();A5v(a);return a;}
function A5v(a){return;}
function YB(a,b){a.hz=b.hz;a.hy=b.hy;a.hA=b.hA;a.p7=b.p7;return a;}
function ARc(a){return a.hz;}
function AXI(a){return a.hy;}
function A2W(a){return a.hA;}
function A41(a){return a.p7;}
function XA(a,b){var c;if(a===b)return 1;if(b===null)return 0;if(B5(a)!==B5(b))return 0;c=b;if(a.hz===c.hz&&a.hy===c.hy&&a.hA===c.hA&&a.p7===c.p7)return 1;return 0;}
function Yb(){var a=this;C.call(a);a.fQ=null;a.wF=null;}
function AHz(a,b){var c,d,e,f,g,h,i,j,k,l;if(H6()===null)Bah=A_L.createElement("canvas");if(H6().width<a.fQ.width){b=H6();c=a.fQ.width;b.width=c;}if(H6().height<a.fQ.height){b=H6();c=a.fQ.height;b.height=c;}if(Lm()===null)Bai=H6().getContext("2d");b=Lm();d=a.fQ.width;e=a.fQ.height;b.clearRect(0.0,0.0,d,e);b=Lm();c=a.fQ;d=a.fQ.width;e=a.fQ.height;b.drawImage(c,0.0,0.0,d,e);b=Lm();d=a.fQ.width;e=a.fQ.height;f=b.getImageData(0.0,0.0,d,e);c=f.data;g=K(f.width,f.height);RE($rt_str(a.fQ.src));if(c.byteLength<(g*4
|0)){CY(a.wF,null);return;}h=$rt_createIntArray(g);i=h.data;j=0;g=i.length;while(j<g){k=j*4|0;i[j]=c[k]<<16|c[k+1|0]<<8|c[k+2|0]|c[k+3|0]<<24;j=j+1|0;}b=a.wF;c=new Qv;k=f.width;l=f.height;if(g==K(k,l)){c.us=k;c.Ap=l;c.IU=1;c.uY=h;CY(b,c);return;}b=new BB;Bd(b,B(508));J(b);}
function A2O(a,b){AHz(a,b);}
function Ya(){var a=this;C.call(a);a.DH=null;a.Cz=null;}
function ACf(a,b){RE($rt_str(a.DH.src));CY(a.Cz,null);}
function A55(a,b){ACf(a,b);}
function Rm(){var a=this;C.call(a);a.gZ=null;a.rK=null;a.d7=null;a.fd=0;}
function Lp(){BT.call(this);}
function XO(){C.call(this);this.BI=null;}
function Zp(){var a=this;C.call(a);a.Cx=null;a.u$=0;}
function WN(){var a=this;C.call(a);a.FC=null;a.Hu=0;a.Hr=0;a.IS=0;a.Jg=0;}
function AH0(){C.call(this);}
function KX(b){return b.length?0:1;}
function ALU(b){return b.shift();}
function U4(){C.call(this);this.Eh=null;}
function ANA(a){var b,c,d;b=a.Eh;if(!IL(b)&&b.cr.d7===null){c=b.cr;if(c.gZ!==null&&!KX(c.gZ)){b=c.gZ;d=ALU(b);if(b===null)c.gZ=null;R$(d);}}}
function JC(){Oc.call(this);}
function Bgk(a,b,c){var d=new JC();Wv(d,a,b,c);return d;}
function Wv(a,b,c,d){LQ(a,b);a.O=c;a.cv=d;}
function UA(a){var b,c;if(a.O<a.cv){b=a.O;a.O=b+1|0;return a.zv(b);}c=new G6;Z(c);J(c);}
function O2(a,b){var c,d;if(a.lG()){c=new Fd;Z(c);J(c);}if(a.O<a.cv){d=a.O;a.O=d+1|0;a.vu(d,b);return a;}c=new GV;Z(c);J(c);}
function M2(a,b){var c,d;if(b>=0&&b<a.cv)return ALF(a,b);c=new BE;d=new S;V(d);Bd(c,R(G(Bf(G(Bf(G(d,B(509)),b),B(250)),a.cv),B(34))));J(c);}
function ANw(a,b,c){var d,e;if(a.lG()){d=new Fd;Z(d);J(d);}if(b>=0&&b<a.cv){XL(a,b,c);return a;}e=new BE;d=new S;V(d);Bd(e,R(G(Bf(G(Bf(G(d,B(509)),b),B(250)),a.cv),B(34))));J(e);}
function AT6(a){return a.lG();}
function Xd(){var a=this;JC.call(a);a.CK=0;a.yE=0;a.xf=null;}
function ALF(a,b){return a.xf.data[b+a.yE|0];}
function XL(a,b,c){a.xf.data[b+a.yE|0]=c;}
function AOV(a){return a.CK;}
function Tb(){var a=this;C.call(a);a.AD=null;a.AE=null;a.AB=0;a.AC=null;}
function R$(a){var b,c,d,e;b=a.AD;c=a.AE;d=a.AB;e=a.AC;FU(b);c.cr.d7=b;b=c.cr;b.fd=b.fd+d|0;CY(e,null);}
function XZ(){C.call(this);this.ju=null;}
function Sn(){var a=this;C.call(a);a.i9=null;a.x5=0;}
function VX(){C.call(this);this.lT=null;}
function PH(){Fw.call(this);}
var Bgl=0.0;var Bgm=null;function AEX(){Bgl=NaN;Bgm=D($rt_floatcls());}
function On(){Fw.call(this);}
var Bgn=0.0;var Bgo=null;function AIK(){Bgn=NaN;Bgo=D($rt_doublecls());}
function AEu(){var a=this;C.call(a);a.cy=0;a.m8=null;a.gj=null;a.bP=0;a.c9=0;a.eB=0;a.pz=null;a.dM=null;a.qE=null;a.mP=null;a.mf=null;a.sV=null;a.ki=null;a.cK=null;a.cY=null;a.iw=null;a.yi=0;a.qH=0;}
function ASZ(a){var b=new AEu();AWG(b,a);return b;}
function AWG(a,b){a.cy=0;a.m8=BU();a.mP=BU();a.mf=BU();a.sV=BU();a.ki=BU();a.cK=OG(a);a.iw=null;a.yi=0;a.gj=b;a.bP=b.o;a.c9=b.t;a.eB=b.bu;a.cY=$rt_createByteArray(b.b_.data.length/8|0);a.pz=b.b_;a.dM=b.gV;a.qE=b.kn;}
function OG(a){return a.ki.q<=0?$rt_createIntArray(32768):Ej(a.ki,a.ki.q-1|0);}
function X2(a,b,c,d,e){M(a.sV,Ol(a,b,c,0,d,e,1));}
function AAT(a,b){if(b>15)b=15;if(b<0)b=0;a.qH=b-a.gj.ef|0;if(a.qH){a.yi=a.gj.ef;a.gj.ef=b;while(a.iw!==null){VJ(a,64);}a.iw=Ol(a,0,0,0,a.gj.o,a.gj.bu,a.gj.t);}}
function VJ(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o;c=a.iw.m7;d=a.iw.qk;e=a.iw.st;f=a.iw.tt;g=d-1|0;while(true){if(c>=d){h=0;while(h<a.bP){i=0;while(i<a.c9){j=a.mf;k=new Tj;d=h+32|0;l=a.eB;g=i+32|0;ANy(k,a,h,0,i,d,l,g);M(j,k);M(a.mP,Ol(a,h,0,i,d,a.eB,g));i=g;}h=h+32|0;}b=0;while(b<a.gj.di.q){AKK(Bc(a.gj.di,b));b=b+1|0;}a.iw=null;return;}h=b+(-1)|0;if(b<=0&&c!=g)break;m=e;while(m<f){i=a.qE.data[c+K(m,a.bP)|0]-1|0;while(i>0){L();if(BdV.data[a.pz.data[K(K(i,a.c9)+m|0,a.bP)+c|0]]>=100)break;i=i+(-1)|0;}b=i+1|0;while
(b<a.eB){l=K(K(b,a.c9)+m|0,a.bP)+c|0;L();if(!BdY.data[a.pz.data[l]]){n=a.dM.data[l]&15;if(n<=a.yi){if(a.qH<0&&n>0){o=a.dM.data;o[l]=(o[l]-1|0)<<24>>24;}else if(a.qH>0&&n<15){o=a.dM.data;o[l]=(o[l]+1|0)<<24>>24;}}}b=b+1|0;}m=m+1|0;}c=c+1|0;b=h;}a.iw.m7=c;}
function NU(a,b,c,d,e,f,g){M(a.mf,Ol(a,b,c,d,e,f,g));}
function Ue(a,b,c,d,e,f,g){var h,i,j,k,l,m,n;while(c<f){h=d;while(h<g){i=b;while(i<e){j=(i+K(c,a.bP)|0)+K(K(h,a.bP),a.eB)|0;k=a.cY.data;l=j>>3;m=k[l];n=1<<(j&7);if(!(m&n)){a.cY.data[l]=(a.cY.data[l]|n)<<24>>24;k=a.cK.data;m=a.cy;a.cy=m+1|0;k[m]=j;if(!(a.cY.data[l]&n))Cm(Dr(),B(510));if(a.cy>(a.cK.data.length-32|0)){k=a.cK.data;j=a.cy-1|0;a.cy=j;l=k[j];a.cK.data[a.cK.data.length-1|0]=a.cy;M(a.m8,a.cK);a.cK=OG(a);a.cy=1;a.cK.data[0]=l;}}i=i+1|0;}h=h+1|0;}c=c+1|0;}}
function ADY(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba;if(CE(a.ki)>0)Ej(a.ki,CE(a.ki)-1|0);b=5;while(CE(a.mP)>0){c=b+(-1)|0;if(b<=0)break;d=Ej(a.mP,0);e=0;while(e<CE(a.gj.di)){AHq(Bc(a.gj.di,e),d.m7,d.su,d.st,d.qk,d.ts,d.tt);e=e+1|0;}b=c;}a:{if(a.iw!==null)VJ(a,8);else{f=0;while(true){if(f>=16)break a;if(CE(a.mf)>0){g=Ej(a.mf,0);Ue(a,g.m7,g.su,g.st,g.qk,g.ts,g.tt);}b:{if(CE(a.sV)>0){g=Ej(a.sV,0);h=g.ts;i=g.qk;j=g.su;k=g.m7;b=k+i|0;l=j+h|0;while(true){if(k>=b)break b;m=j;while(m<l){n=a.qE.data[k
+K(m,a.bP)|0];o=a.eB-1|0;while(o>0){L();if(BdV.data[a.pz.data[K(K(o,a.c9)+m|0,a.bP)+k|0]])break;o=o+(-1)|0;}a.qE.data[k+K(m,a.bP)|0]=o+1|0;p=Bw(n,o);if(p){q=p>=0?o:n;if(p>0)o=n;Ue(a,k,q,m,k+1|0,o,m+1|0);}m=m+1|0;}k=k+1|0;}}}p=a.gj.ef;j=(-999);i=(-999);h=(-999);r=(-999);m=(-999);s=(-999);t=1024;q=0;while(true){k=t+(-1)|0;if(t<=0)break;if(a.cy<=0&&CE(a.m8)<=0)break;q=q+1|0;if(!a.cy){if(a.cK!==null){u=a.cK;M(a.ki,u);}a.cK=Ej(a.m8,CE(a.m8)-1|0);a.cy=a.cK.data[a.cK.data.length-1|0];}if(a.cy<=(a.cK.data.length-32
|0)){u=a.cK.data;b=a.cy-1|0;a.cy=b;n=u[b];o=n%a.bP|0;v=(n/a.bP|0)%a.eB|0;w=((n/a.bP|0)/a.eB|0)%a.c9|0;u=a.cY.data;l=n>>3;u[l]=(a.cY.data[l]^1<<(n&7))<<24>>24;l=v<a.qE.data[o+K(w,a.bP)|0]?0:p;x=a.pz.data[K(K(v,a.c9)+w|0,a.bP)+o|0];L();y=BdV.data[x];if(y>100)l=0;else if(l<15){if(!y)y=1;if(o>0){z=(a.dM.data[K(K(v,a.c9)+w|0,a.bP)+(o-1|0)|0]&15)-y|0;if(z<=l)z=l;}else z=l;if(o>=(a.bP-1|0))ba=z;else{ba=(a.dM.data[(K(K(v,a.c9)+w|0,a.bP)+o|0)+1|0]&15)-y|0;if(ba<=z)ba=z;}if(v<=0)z=ba;else{z=(a.dM.data[K(K(v-1|0,a.c9)
+w|0,a.bP)+o|0]&15)-y|0;if(z<=ba)z=ba;}if(v>=(a.eB-1|0))ba=z;else{ba=(a.dM.data[K(K(v+1|0,a.c9)+w|0,a.bP)+o|0]&15)-y|0;if(ba<=z)ba=z;}if(w<=0)z=ba;else{z=(a.dM.data[K(K(v,a.c9)+(w-1|0)|0,a.bP)+o|0]&15)-y|0;if(z<=ba)z=ba;}if(w>=(a.c9-1|0))l=z;else{l=(a.dM.data[K((K(v,a.c9)+w|0)+1|0,a.bP)+o|0]&15)-y|0;if(l<=z)l=z;}}if(l<BdY.data[x])l=BdY.data[x];if((a.dM.data[K(K(v,a.c9)+w|0,a.bP)+o|0]&15)!=l){a.dM.data[K(K(v,a.c9)+w|0,a.bP)+o|0]=((a.dM.data[K(K(v,a.c9)+w|0,a.bP)+o|0]&240)+l|0)<<24>>24;if(o>0){u=a.dM.data;b=K(K(v,
a.c9)+w|0,a.bP);x=o-1|0;if((u[b+x|0]&15)!=(l-1|0)){b=(x+K(v,a.bP)|0)+K(K(w,a.bP),a.eB)|0;u=a.cY.data;x=b>>3;y=u[x];t=1<<(b&7);if(!(y&t)){a.cY.data[x]=(a.cY.data[x]|t)<<24>>24;u=a.cK.data;x=a.cy;a.cy=x+1|0;u[x]=b;}}}if(o<(a.bP-1|0)&&(a.dM.data[(K(K(v,a.c9)+w|0,a.bP)+o|0)+1|0]&15)!=(l-1|0)){b=((o+1|0)+K(v,a.bP)|0)+K(K(w,a.bP),a.eB)|0;u=a.cY.data;x=b>>3;y=u[x];t=1<<(b&7);if(!(y&t)){a.cY.data[x]=(a.cY.data[x]|t)<<24>>24;u=a.cK.data;x=a.cy;a.cy=x+1|0;u[x]=b;}}if(v>0){u=a.dM.data;b=v-1|0;if((u[K(K(b,a.c9)+w|0,a.bP)
+o|0]&15)!=(l-1|0)){b=(o+K(b,a.bP)|0)+K(K(w,a.bP),a.eB)|0;u=a.cY.data;x=b>>3;y=u[x];t=1<<(b&7);if(!(y&t)){a.cY.data[x]=(a.cY.data[x]|t)<<24>>24;u=a.cK.data;x=a.cy;a.cy=x+1|0;u[x]=b;}}}if(v<(a.eB-1|0)){u=a.dM.data;b=v+1|0;if((u[K(K(b,a.c9)+w|0,a.bP)+o|0]&15)!=(l-1|0)){b=(o+K(b,a.bP)|0)+K(K(w,a.bP),a.eB)|0;u=a.cY.data;x=b>>3;y=u[x];t=1<<(b&7);if(!(y&t)){a.cY.data[x]=(a.cY.data[x]|t)<<24>>24;u=a.cK.data;x=a.cy;a.cy=x+1|0;u[x]=b;}}}if(w>0){u=a.dM.data;b=K(v,a.c9);x=w-1|0;if((u[K(b+x|0,a.bP)+o|0]&15)!=(l-1|0)){b
=(o+K(v,a.bP)|0)+K(K(x,a.bP),a.eB)|0;u=a.cY.data;x=b>>3;y=u[x];t=1<<(b&7);if(!(y&t)){a.cY.data[x]=(a.cY.data[x]|t)<<24>>24;u=a.cK.data;x=a.cy;a.cy=x+1|0;u[x]=b;}}}if(w<(a.c9-1|0)&&(a.dM.data[K((K(v,a.c9)+w|0)+1|0,a.bP)+o|0]&15)!=(l-1|0)){t=(o+K(v,a.bP)|0)+K(K(w+1|0,a.bP),a.eB)|0;u=a.cY.data;b=t>>3;l=u[b];x=1<<(t&7);if(!(l&x)){a.cY.data[b]=(a.cY.data[b]|x)<<24>>24;u=a.cK.data;b=a.cy;a.cy=b+1|0;u[b]=t;}}if(j==(-999)){j=o;i=o;h=v;r=v;m=w;s=w;}if(o>=j){if(o<=i)o=j;else{i=o;o=j;}}if(v<=r){if(v>=h)v=r;else{h=v;v=
r;}}if(w<m){j=o;r=v;m=w;}else if(w<=s){j=o;r=v;}else{j=o;r=v;s=w;}}t=k;continue;}u=a.cK.data;b=a.cy-1|0;a.cy=b;n=u[b];a.cK.data[a.cK.data.length-1|0]=a.cy;M(a.m8,a.cK);a.cK=OG(a);a.cy=1;a.cK.data[0]=n;t=k;}if(j>(-999))M(a.mP,Ol(a,j,h,m,i,r,s));f=f+1|0;}}}}
function AJ0(a){var b;b=new S;V(b);return R(Bf(G(b,B(9)),a.mf.q+a.mP.q|0));}
function Y4(){var a=this;OJ.call(a);a.kz=null;a.mJ=null;}
function FD(a,b,c){var d;d=(-1);if(Bb_.M){if(b==a.mJ.wb.bt)d=0;if(b==a.mJ.vJ.bt)d=1;if(b==a.mJ.y0.bt)d=2;if(b==a.mJ.x_.bt)d=3;if(b==a.mJ.uq.bt)d=4;}if(d>=0)a.kz.data[d]=c;}
function Xp(a){var b;b=0;while(b<10){a.kz.data[b]=0;b=b+1|0;}}
function AN6(a){a.lt=0.0;a.lB=0.0;if(a.kz.data[0])a.lB=a.lB+1.0;if(a.kz.data[1])a.lB=a.lB-1.0;if(a.kz.data[2])a.lt=a.lt+1.0;if(a.kz.data[3])a.lt=a.lt-1.0;a.vZ=a.kz.data[4];}
function Uu(){CV.call(this);}
function Tx(){CV.call(this);}
function AVY(a){ER(a.ba);M(a.ba,CL(1,(a.bq/2|0)-100|0,(a.bM/4|0)+72|0,B(383)));M(a.ba,CL(2,(a.bq/2|0)-100|0,(a.bM/4|0)+96|0,B(384)));Bc(a.ba,1).fb=0;}
function AHG(a,b,c){return;}
function AL9(a,b){var c,d,$p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!b.bC){c=a.x;d=AFF(a,a.x.d);$p=1;continue _;}if(b.bC==1){c=a.x;d=LP(a);$p=2;continue _;}if(a.x.ga!==null&&b.bC==2){b=a.x;c=Jj(a);$p=3;continue _;}return;case 1:AOJ(c,d);if(I()){break _;}if(b.bC==1){c=a.x;d=LP(a);$p=2;continue _;}if(a.x.ga!==null&&b.bC==2){b=a.x;c=Jj(a);$p=3;continue _;}return;case 2:AOJ(c,d);if(I()){break _;}if(a.x.ga!==null&&b.bC==2){b=a.x;c=Jj(a);$p=3;continue _;}return;case 3:AOJ(b,
c);if(I()){break _;}return;default:F2();}}Dh().s(a,b,c,d,$p);}
function AIW(a,b,c,d){var e,f,$p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:Pv(0,0,a.bq,a.bM,1615855616,(-1602211792));Ca();C7(2.0,2.0,2.0);Eh(a.cJ,B(511),(a.bq/2|0)/2|0,30,16777215);BR();e=a.cJ;f=new S;V(f);Eh(e,R(Bf(G(f,B(512)),a.x.a.rR)),a.bq/2|0,100,16777215);$p=1;case 1:ANU(a,b,c,d);if(I()){break _;}return;default:F2();}}Dh().s(a,b,c,d,e,f,$p);}
function ASU(a){return 0;}
function Nm(){var a=this;C.call(a);a.c5=0;a.gJ=null;a.bE=0;a.lR=0;a.lq=0;a.lj=0;a.gG=0;}
function Rq(){FA.call(this);this.CU=null;}
function WY(a){var b;b=new Xs;OT(b,a.CU);return b;}
function AB4(){C.call(this);}
function A6z(){return {};}
function LD(){var a=this;C.call(a);a.dB=0;a.p6=0;a.qq=0;a.f0=0;a.fw=null;a.sQ=null;a.pd=null;a.nl=null;a.nj=null;a.wa=null;a.wc=null;a.vB=null;a.vG=null;a.p1=null;a.tM=0;a.bU=0;a.bT=0;a.ky=null;a.cR=null;a.cL=0;a.bZ=0;a.bj=0;a.rL=0;a.xA=null;a.p=null;}
var Bgp=null;var Bgq=null;function KS(a){a.dB=0;a.bU=0;a.bT=0;a.bj=0;a.bZ=0;if(a.rL)a.p.f4.mi();}
function ABx(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;c=a.p.r;d=a.p.E;e=a.bT;f=a.bU;g=a.bj;h=g>=a.bZ?a.cL-g|0:(a.bZ-g|0)-1|0;a:{b:{c:{d:{e:while(true){f:{g:{h:{i:{j:{switch(a.dB){case 2:break f;case 9:a.bT=e;a.bU=f;a.p.E=d;i=a.p;i.y=Long_add(i.y,Long_fromInt(c-a.p.r|0));a.p.r=c;a.bj=g;return B1(a,(-3));case 0:break j;case 1:break;case 3:while(f<14){if(!d){a.bT=e;a.bU=f;a.p.E=d;i=a.p;i.y=Long_add(i.y,Long_fromInt(c-a.p.r|0));a.p.r=c;a.bj=g;return B1(a,b);}b=0;d=d+(-1)|0;j=a.p.cl.data;k=c+1|0;e=e|(j[c]&255)<<f;f
=f+8|0;c=k;}k=e&16383;a.qq=k;l=k&31;if(l>29)break d;k=k>>5&31;if(k>29)break d;k:{k=(258+l|0)+k|0;if(!(a.fw!==null&&a.fw.data.length>=k))a.fw=$rt_createIntArray(k);else{l=0;while(true){if(l>=k)break k;a.fw.data[l]=0;l=l+1|0;}}}e=e>>>14;f=f+(-14)|0;a.f0=0;a.dB=4;break i;case 4:break i;case 5:break h;case 6:break g;case 7:break b;case 8:break a;default:a.bT=e;a.bU=f;a.p.E=d;i=a.p;i.y=Long_add(i.y,Long_fromInt(c-a.p.r|0));a.p.r=c;a.bj=g;return B1(a,(-2));}while(f<32){if(!d){a.bT=e;a.bU=f;a.p.E=d;i=a.p;i.y=Long_add(i.y,
Long_fromInt(c-a.p.r|0));a.p.r=c;a.bj=g;return B1(a,b);}b=0;d=d+(-1)|0;j=a.p.cl.data;k=c+1|0;e=e|(j[c]&255)<<f;f=f+8|0;c=k;}k=(e^(-1))>>>16&65535;l=e&65535;if(k!=l){a.dB=9;a.p.ca=B(513);a.bT=e;a.bU=f;a.p.E=d;i=a.p;i.y=Long_add(i.y,Long_fromInt(c-a.p.r|0));a.p.r=c;a.bj=g;return B1(a,(-3));}a.p6=l;f=0;a.dB=a.p6?2:!a.tM?0:7;e=f;continue e;}while(f<3){if(!d){a.bT=e;a.bU=f;a.p.E=d;i=a.p;i.y=Long_add(i.y,Long_fromInt(c-a.p.r|0));a.p.r=c;a.bj=g;return B1(a,b);}b=0;d=d+(-1)|0;j=a.p.cl.data;k=c+1|0;e=e|(j[c]&255)<<f;f
=f+8|0;c=k;}l:{m=e&7;a.tM=m&1;switch(m>>>1){case 0:k=e>>>3;l=f+(-3)|0;n=l&7;e=k>>>n;f=l-n|0;a.dB=1;break l;case 1:AEV(a.nl,a.nj,a.wa,a.wc,a.p);ZL(a.p1,a.nl.data[0],a.nj.data[0],a.wa.data[0],0,a.wc.data[0],0);e=e>>>3;f=f+(-3)|0;a.dB=6;break l;case 2:e=e>>>3;f=f+(-3)|0;a.dB=3;break l;case 3:b=e>>>3;k=f+(-3)|0;a.dB=9;a.p.ca=B(514);a.bT=b;a.bU=k;a.p.E=d;i=a.p;i.y=Long_add(i.y,Long_fromInt(c-a.p.r|0));a.p.r=c;a.bj=g;return B1(a,(-3));default:}}continue e;}while(a.f0<(4+(a.qq>>>10)|0)){while(f<3){if(!d){a.bT=e;a.bU
=f;a.p.E=d;i=a.p;i.y=Long_add(i.y,Long_fromInt(c-a.p.r|0));a.p.r=c;a.bj=g;return B1(a,b);}b=0;d=d+(-1)|0;j=a.p.cl.data;k=c+1|0;e=e|(j[c]&255)<<f;f=f+8|0;c=k;}o=a.fw.data;j=Bgq.data;k=a.f0;a.f0=k+1|0;o[j[k]]=e&7;e=e>>>3;f=f+(-3)|0;}while(a.f0<19){o=a.fw.data;j=Bgq.data;k=a.f0;a.f0=k+1|0;o[j[k]]=0;}a.sQ.data[0]=7;k=AMS(a.xA,a.fw,a.sQ,a.pd,a.ky,a.p);if(k){if(k==(-3)){a.fw=null;a.dB=9;}a.bT=e;a.bU=f;a.p.E=d;i=a.p;i.y=Long_add(i.y,Long_fromInt(c-a.p.r|0));a.p.r=c;a.bj=g;return B1(a,k);}a.f0=0;a.dB=5;}while(true)
{k=a.qq;if(a.f0>=((258+(k&31)|0)+(k>>5&31)|0))break;k=a.sQ.data[0];while(f<k){if(!d){a.bT=e;a.bU=f;a.p.E=d;i=a.p;i.y=Long_add(i.y,Long_fromInt(c-a.p.r|0));a.p.r=c;a.bj=g;return B1(a,b);}b=0;d=d+(-1)|0;j=a.p.cl.data;l=c+1|0;e=e|(j[c]&255)<<f;f=f+8|0;c=l;}k=a.ky.data[((a.pd.data[0]+(e&Bgp.data[k])|0)*3|0)+1|0];n=a.ky.data[((a.pd.data[0]+(e&Bgp.data[k])|0)*3|0)+2|0];l=Bw(n,16);if(l<0){e=e>>>k;f=f-k|0;j=a.fw.data;k=a.f0;a.f0=k+1|0;j[k]=n;}else{p=Bw(n,18);q=!p?7:n-14|0;p=p?3:11;while(f<(k+q|0)){if(!d){a.bT=e;a.bU
=f;a.p.E=d;i=a.p;i.y=Long_add(i.y,Long_fromInt(c-a.p.r|0));a.p.r=c;a.bj=g;return B1(a,b);}b=0;d=d+(-1)|0;j=a.p.cl.data;n=c+1|0;e=e|(j[c]&255)<<f;f=f+8|0;c=n;}n=e>>>k;k=f-k|0;p=p+(n&Bgp.data[q])|0;e=n>>>q;f=k-q|0;h=a.f0;q=a.qq;if((h+p|0)>((258+(q&31)|0)+(q>>5&31)|0))break c;if(!l&&h<1)break c;k=l?0:a.fw.data[h-1|0];while(true){j=a.fw.data;l=h+1|0;j[h]=k;p=p+(-1)|0;if(!p)break;h=l;}a.f0=l;}}a.pd.data[0]=(-1);a.nl.data[0]=9;a.nj.data[0]=6;k=a.qq;k=AAZ(a.xA,257+(k&31)|0,1+(k>>5&31)|0,a.fw,a.nl,a.nj,a.vB,a.vG,a.ky,
a.p);if(k){if(k==(-3)){a.fw=null;a.dB=9;}a.bT=e;a.bU=f;a.p.E=d;i=a.p;i.y=Long_add(i.y,Long_fromInt(c-a.p.r|0));a.p.r=c;a.bj=g;return B1(a,k);}ZL(a.p1,a.nl.data[0],a.nj.data[0],a.ky,a.vB.data[0],a.ky,a.vG.data[0]);a.dB=6;}a.bT=e;a.bU=f;a.p.E=d;i=a.p;i.y=Long_add(i.y,Long_fromInt(c-a.p.r|0));a.p.r=c;a.bj=g;b=AC6(a.p1,b);if(b!=1)break e;b=0;ACG(a.p1,a.p);c=a.p.r;d=a.p.E;e=a.bT;f=a.bU;g=a.bj;h=g>=a.bZ?a.cL-g|0:(a.bZ-g|0)-1|0;if(a.tM){a.dB=7;break b;}a.dB=0;continue e;}if(!d){a.bT=e;a.bU=f;a.p.E=d;i=a.p;i.y=Long_add(i.y,
Long_fromInt(c-a.p.r|0));a.p.r=c;a.bj=g;return B1(a,b);}if(!h){if(g==a.cL&&a.bZ){g=0;h=g>=a.bZ?a.cL-g|0:(a.bZ-g|0)-1|0;}if(!h){a.bj=g;b=B1(a,b);g=a.bj;h=g>=a.bZ?a.cL-g|0:(a.bZ-g|0)-1|0;if(g==a.cL&&a.bZ){g=0;h=g>=a.bZ?a.cL-g|0:(a.bZ-g|0)-1|0;}if(!h){a.bT=e;a.bU=f;a.p.E=d;i=a.p;i.y=Long_add(i.y,Long_fromInt(c-a.p.r|0));a.p.r=c;a.bj=g;return B1(a,b);}}}b=0;k=a.p6;if(k>d)k=d;if(k>h)k=h;CT(a.p.cl,c,a.cR,g,k);c=c+k|0;d=d-k|0;g=g+k|0;h=h-k|0;k=a.p6-k|0;a.p6=k;if(k)continue;a.dB=!a.tM?0:7;}return B1(a,b);}a.dB=9;a.p.ca
=B(515);a.bT=e;a.bU=f;a.p.E=d;i=a.p;i.y=Long_add(i.y,Long_fromInt(c-a.p.r|0));a.p.r=c;a.bj=g;return B1(a,(-3));}a.fw=null;a.dB=9;a.p.ca=B(516);a.bT=e;a.bU=f;a.p.E=d;i=a.p;i.y=Long_add(i.y,Long_fromInt(c-a.p.r|0));a.p.r=c;a.bj=g;return B1(a,(-3));}a.bj=g;b=B1(a,b);g=a.bj;if(a.bZ!=a.bj){a.bT=e;a.bU=f;a.p.E=d;i=a.p;i.y=Long_add(i.y,Long_fromInt(c-a.p.r|0));a.p.r=c;a.bj=g;return B1(a,b);}a.dB=8;}a.bT=e;a.bU=f;a.p.E=d;i=a.p;i.y=Long_add(i.y,Long_fromInt(c-a.p.r|0));a.p.r=c;a.bj=g;return B1(a,1);}
function U6(a){KS(a);a.cR=null;a.ky=null;}
function B1(a,b){var c,d,e,f,g;c=a.p.p_;d=a.bZ;e=(d>a.bj?a.cL:a.bj)-d|0;if(e>a.p.ia)e=a.p.ia;if(e&&b==(-5))b=0;f=a.p;f.ia=f.ia-e|0;f=a.p;f.nM=Long_add(f.nM,Long_fromInt(e));if(a.rL&&e>0)a.p.f4.k5(a.cR,d,e);CT(a.cR,d,a.p.vl,c,e);c=c+e|0;g=d+e|0;if(g==a.cL){if(a.bj==a.cL)a.bj=0;d=a.bj-0|0;if(d>a.p.ia)d=a.p.ia;if(d&&b==(-5))b=0;f=a.p;f.ia=f.ia-d|0;f=a.p;f.nM=Long_add(f.nM,Long_fromInt(d));if(a.rL&&d>0)a.p.f4.k5(a.cR,0,d);CT(a.cR,0,a.p.vl,c,d);c=c+d|0;g=0+d|0;}a.p.p_=c;a.bZ=g;return b;}
function AHw(){var b,c;b=$rt_createIntArray(17);c=b.data;c[0]=0;c[1]=1;c[2]=3;c[3]=7;c[4]=15;c[5]=31;c[6]=63;c[7]=127;c[8]=255;c[9]=511;c[10]=1023;c[11]=2047;c[12]=4095;c[13]=8191;c[14]=16383;c[15]=32767;c[16]=65535;Bgp=b;b=$rt_createIntArray(19);c=b.data;c[0]=16;c[1]=17;c[2]=18;c[3]=0;c[4]=8;c[5]=7;c[6]=9;c[7]=6;c[8]=10;c[9]=5;c[10]=11;c[11]=4;c[12]=12;c[13]=3;c[14]=13;c[15]=2;c[16]=14;c[17]=1;c[18]=15;Bgq=b;}
function AAR(){C.call(this);this.rB=0;}
function Do(){var a=this;DD.call(a);a.by=0.0;a.bD=0.0;a.bz=0.0;a.fT=0;a.D3=0.0;a.D4=0.0;a.dJ=0;a.cT=0;a.dq=0.0;a.o$=0.0;a.hR=0.0;a.iG=0.0;a.iJ=0.0;}
function Bgr(a,b,c,d,e,f,g){var h=new Do();Ga(h,a,b,c,d,e,f,g);return h;}
function Ga(a,b,c,d,e,f,g,h){var i;GQ(a,b);a.dJ=0;a.cT=0;DC(a,0.20000000298023224,0.20000000298023224);a.dO=a.gA/2.0;D0(a,c,d,e);a.iJ=1.0;a.iG=1.0;a.hR=1.0;a.by=f+(Cc()*2.0-1.0)*0.4000000059604645;a.bD=g+(Cc()*2.0-1.0)*0.4000000059604645;a.bz=h+(Cc()*2.0-1.0)*0.4000000059604645;i=(Cc()+Cc()+1.0)*0.15000000596046448;c=B$(a.by*a.by+a.bD*a.bD+a.bz*a.bz);a.by=a.by/c*i*0.4000000059604645;a.bD=a.bD/c*i*0.4000000059604645+0.10000000149011612;a.bz=a.bz/c*i*0.4000000059604645;a.D3=N(a.N)*3.0;a.D4=N(a.N)*3.0;a.dq=(N(a.N)
*0.5+0.5)*2.0;a.cT=4.0/(N(a.N)*0.8999999761581421+0.10000000149011612)|0;a.dJ=0;a.pi=0;}
function ACB(a,b){a.by=a.by*0.20000000298023224;a.bD=(a.bD-0.10000000149011612)*0.20000000298023224+0.10000000149011612;a.bz=a.bz*0.20000000298023224;return a;}
function ANc(a,b){DC(a,0.12000000476837158,0.12000000476837158);a.dq=a.dq*0.6000000238418579;return a;}
function A6E(a){var b;a.cs=a.f;a.cx=a.j;a.ct=a.g;b=a.dJ;a.dJ=b+1|0;if(b>=a.cT)CN(a);a.bD=a.bD-0.04*a.o$;Eq(a,a.by,a.bD,a.bz);a.by=a.by*0.9800000190734863;a.bD=a.bD*0.9800000190734863;a.bz=a.bz*0.9800000190734863;if(a.dE){a.by=a.by*0.699999988079071;a.bz=a.bz*0.699999988079071;}}
function Ip(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x;i=(a.fT%16|0)/16.0;j=i+0.062437500804662704;k=(a.fT/16|0)/16.0;l=k+0.062437500804662704;m=0.10000000149011612*a.dq;n=a.cs+(a.f-a.cs)*c;o=a.cx+(a.j-a.cx)*c;p=a.ct+(a.g-a.ct)*c;c=a.vH(c);CW(b,a.hR*c,a.iG*c,a.iJ*c);c=d*m;d=n-c;g=g*m;q=d-g;e=e*m;r=o-e;f=f*m;s=p-f;h=h*m;t=s-h;u=i;v=l;F(b,q,r,t,u,v);w=d+g;x=o+e;q=s+h;t=k;F(b,w,x,q,u,t);c=n+c;q=c+g;d=p+f;u=d+h;w=j;F(b,q,x,u,w,t);F(b,c-g,r,d-h,w,v);}
function ASD(a){return 0;}
function A7g(a,b){return;}
function AQr(a){return null;}
function AOG(){Do.call(this);}
function AY$(a,b,c,d,e,f,g,h){var i=new AOG();A7C(i,a,b,c,d,e,f,g,h);return i;}
function A7C(a,b,c,d,e,f,g,h,i){Ga(a,b,c,d,e,f,g,h);a.fT=i.bk;a.o$=i.DG;a.iJ=0.6000000238418579;a.iG=0.6000000238418579;a.hR=0.6000000238418579;a.dq=a.dq/2.0;}
function AU0(a){return 1;}
function AAs(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x;i=((a.fT%16|0)+a.D3/4.0)/16.0;j=i+0.015609375201165676;k=((a.fT/16|0)+a.D4/4.0)/16.0;l=k+0.015609375201165676;m=0.10000000149011612*a.dq;n=a.cs+(a.f-a.cs)*c;o=a.cx+(a.j-a.cx)*c;p=a.ct+(a.g-a.ct)*c;c=EC(a,c);CW(b,c*a.hR,c*a.iG,c*a.iJ);c=d*m;d=n-c;g=g*m;q=d-g;e=e*m;r=o-e;f=f*m;s=p-f;h=h*m;t=s-h;u=i;v=l;F(b,q,r,t,u,v);w=d+g;x=o+e;q=s+h;t=k;F(b,w,x,q,u,t);c=n+c;q=c+g;d=p+f;u=d+h;w=j;F(b,q,x,u,w,t);F(b,c-g,r,d-h,w,v);}
function Yz(){CV.call(this);}
function AZt(a){ER(a.ba);M(a.ba,CL(0,(a.bq/2|0)-100|0,a.bM/4|0,B(386)));M(a.ba,CL(1,(a.bq/2|0)-100|0,(a.bM/4|0)+24|0,B(383)));M(a.ba,CL(2,(a.bq/2|0)-100|0,(a.bM/4|0)+48|0,B(517)));M(a.ba,CL(3,(a.bq/2|0)-100|0,(a.bM/4|0)+72|0,B(384)));M(a.ba,CL(4,(a.bq/2|0)-100|0,(a.bM/4|0)+120|0,B(518)));Bc(a.ba,2).fb=0;Bc(a.ba,3).fb=0;}
function ABp(a,b){var c,d,$p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!b.bC){c=a.x;d=AFF(a,a.x.d);$p=1;continue _;}if(b.bC==1){c=a.x;d=LP(a);$p=2;continue _;}if(a.x.ga!==null){if(b.bC==2){c=a.x;d=new Lf;O7(d,a);d.pJ=B(519);$p=5;continue _;}if(b.bC==3){c=a.x;d=Jj(a);$p=6;continue _;}}if(b.bC!=4)return;b=a.x;c=null;$p=3;continue _;case 1:AOJ(c,d);if(I()){break _;}if(b.bC==1){c=a.x;d=LP(a);$p=2;continue _;}if(a.x.ga!==null){if(b.bC==2){c=a.x;d
=new Lf;O7(d,a);d.pJ=B(519);$p=5;continue _;}if(b.bC==3){c=a.x;d=Jj(a);$p=6;continue _;}}if(b.bC!=4)return;b=a.x;c=null;$p=3;continue _;case 2:AOJ(c,d);if(I()){break _;}if(a.x.ga!==null){if(b.bC==2){c=a.x;d=new Lf;O7(d,a);d.pJ=B(519);$p=5;continue _;}if(b.bC==3){c=a.x;d=Jj(a);$p=6;continue _;}}if(b.bC!=4)return;b=a.x;c=null;$p=3;case 3:AOJ(b,c);if(I()){break _;}b=a.x;$p=4;case 4:AEh(b);if(I()){break _;}RP(a.x.rq);Lt(1);return;case 5:AOJ(c,d);if(I()){break _;}if(b.bC==3){c=a.x;d=Jj(a);$p=6;continue _;}if(b.bC
!=4)return;b=a.x;c=null;$p=3;continue _;case 6:AOJ(c,d);if(I()){break _;}if(b.bC!=4)return;b=a.x;c=null;$p=3;continue _;default:F2();}}Dh().s(a,b,c,d,$p);}
function AJi(a,b,c,d){var $p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AAW(a);if(I()){break _;}Eh(a.cJ,B(520),a.bq/2|0,40,16777215);$p=2;case 2:ANU(a,b,c,d);if(I()){break _;}return;default:F2();}}Dh().s(a,b,c,d,$p);}
function Gr(){var a=this;C2.call(a);a.xa=0;a.zc=0;}
function Fj(a,b){var c=new Gr();Ox(c,a,b);return c;}
function Ox(a,b,c){a.xa=b;a.zc=c;}
function AHc(a,b){var c;if(a===b)return 1;if(b!==null&&B5(a)===B5(b)){c=b;return a.xa==c.xa&&a.zc==c.zc?1:0;}return 0;}
function AC0(){var a=this;C2.call(a);a.xl=null;a.t8=null;a.yV=0;}
function A$5(a,b){var c=new AC0();ASA(c,a,b);return c;}
function ASA(a,b,c){a.xl=AIA(b);a.t8=AD6(b);a.yV=c;}
function A0_(a,b){var c;if(a===b)return 1;if(b!==null&&B5(a)===B5(b)){c=b;return a.yV==c.yV&&JU(a.xl,c.xl)&&JU(a.t8,c.t8)?1:0;}return 0;}
function Sx(){C2.call(this);this.wO=null;}
function A06(a,b){var c;if(a===b)return 1;if(b!==null&&B5(a)===B5(b)){c=b;return JU(a.wO,c.wO);}return 0;}
function I_(){var a=this;C2.call(a);a.wL=null;a.B4=null;}
function Bgs(a){var b=new I_();T2(b,a);return b;}
function T2(a,b){a.wL=b;}
function A17(a,b){var c;if(a===b)return 1;if(b!==null&&B5(a)===B5(b)){c=b;return LH(a.wL,c.wL)&&LH(a.B4,c.B4)?1:0;}return 0;}
function Su(){I_.call(this);}
function Qe(){C2.call(this);this.wH=null;}
function A30(a,b){var c;if(a===b)return 1;if(b!==null&&B5(a)===B5(b)){c=b;return JU(a.wH,c.wH);}return 0;}
function ALd(){Gr.call(this);this.yv=0;}
function A0A(a,b,c){var d=new ALd();A0y(d,a,b,c);return d;}
function A0y(a,b,c,d){Ox(a,b,c);a.yv=d;}
function A7y(a,b){var c;if(a===b)return 1;if(b!==null&&B5(a)===B5(b)){if(!AHc(a,b))return 0;c=b;return a.yv!=c.yv?0:1;}return 0;}
function RW(){Gr.call(this);}
function R1(){I_.call(this);}
function ACZ(){C2.call(this);this.vU=null;}
function AXQ(a){var b=new ACZ();AQ2(b,a);return b;}
function AQ2(a,b){a.vU=b;}
function A1U(a,b){var c;if(a===b)return 1;if(b!==null&&B5(a)===B5(b)){c=b;return LH(a.vU,c.vU);}return 0;}
function X9(){C2.call(this);this.vy=0;}
function AQY(a,b){var c;if(a===b)return 1;if(b!==null&&B5(a)===B5(b)){c=b;return a.vy!=c.vy?0:1;}return 0;}
function TF(){C2.call(this);this.yF=0;}
function A3B(a,b){var c;if(a===b)return 1;if(b!==null&&B5(a)===B5(b)){c=b;return a.yF!=c.yF?0:1;}return 0;}
function ADk(){var a=this;C2.call(a);a.uV=null;a.ur=null;a.v0=0;}
function A$p(a,b){var c=new ADk();AX1(c,a,b);return c;}
function AX1(a,b,c){a.uV=AEe(b);a.ur=AMm(b);a.v0=c;}
function A0k(a,b){var c;if(a===b)return 1;if(b!==null&&B5(a)===B5(b)){c=b;return a.v0==c.v0&&JU(a.uV,c.uV)&&JU(a.ur,c.ur)?1:0;}return 0;}
function AA7(){Gr.call(this);}
function A$i(a){var b=new AA7();A7o(b,a);return b;}
function A7o(a,b){Ox(a,2,b);}
function OO(){MZ.call(this);}
function ABe(a,b,c){var d,e,f,g,h,i,j,k,l,m;d=$rt_createCharArray(B4(BV(b),512));e=d.data;f=0;g=0;h=$rt_createByteArray(B4(BV(c),512));i=h.data;a:{while(true){if((f+32|0)>g&&DH(b)){j=f;while(j<g){e[j-f|0]=e[j];j=j+1|0;}k=g-f|0;g=B4(BV(b)+k|0,e.length);Mc(b,d,k,g-k|0);f=0;}if(!DH(c)){l=!DH(b)&&f>=g?Bgj:Bgi;break a;}k=B4(BV(c),i.length);m=new VU;m.zP=b;m.Ei=c;l=ADN(a,d,f,g,h,0,k,m);f=m.v9;if(l===null&&0==m.se)l=Bgj;ZB(c,h,0,m.se);if(l!==null)break;}}Dz(b,b.O-(g-f|0)|0);return l;}
function Rz(){OO.call(this);}
function ADN(a,b,c,d,e,f,g,h){var i,j,k,l,m,n;i=null;a:{while(c<d){if(f>=g){j=c;break a;}k=b.data;j=c+1|0;l=k[c];if(l<128){k=e.data;m=f+1|0;k[f]=l<<24>>24;}else if(l<2048){if((f+2|0)>g){j=j+(-1)|0;if(Ps(h,2))break a;i=Bgi;break a;}k=e.data;c=f+1|0;k[f]=(192|l>>6)<<24>>24;m=c+1|0;k[c]=(128|l&63)<<24>>24;}else if(!PD(l)){if((f+3|0)>g){j=j+(-1)|0;if(Ps(h,3))break a;i=Bgi;break a;}k=e.data;n=f+1|0;k[f]=(224|l>>12)<<24>>24;c=n+1|0;k[n]=(128|l>>6&63)<<24>>24;m=c+1|0;k[c]=(128|l&63)<<24>>24;}else{if(!Dw(l)){i=FC(1);break a;}if
(j>=d){if(ACo(h))break a;i=Bgj;break a;}c=j+1|0;j=k[j];if(!D1(j)){j=c+(-2)|0;i=FC(1);break a;}if((f+4|0)>g){j=c+(-2)|0;if(Ps(h,4))break a;i=Bgi;break a;}k=e.data;n=E3(l,j);j=f+1|0;k[f]=(240|n>>18)<<24>>24;f=j+1|0;k[j]=(128|n>>12&63)<<24>>24;j=f+1|0;k[f]=(128|n>>6&63)<<24>>24;m=j+1|0;k[j]=(128|n&63)<<24>>24;j=c;}c=j;f=m;}j=c;}h.v9=j;h.se=f;return i;}
function VN(){var a=this;C.call(a);a.ex=0;a.eK=0;a.h0=0;a.lN=null;a.w5=null;a.lz=null;a.fi=null;a.mz=null;}
function ADv(a,b){M(a.fi,b);Sq(Gi(a.lN,b.f,b.j,b.g),b);b.eb=b.f;b.ea=b.j;b.d_=b.g;}
function AEB(a,b){Kl(Gi(a.lN,b.eb,b.ea,b.d_),b);Kl(Gi(a.lN,b.f,b.j,b.g),b);GD(a.fi,b);}
function AEa(a,b,c,d,e,f,g,h){ER(a.mz);return UH(a,b,c,d,e,f,g,h,a.mz);}
function UH(a,b,c,d,e,f,g,h,i){var j,k,l,m,n,o,p,q,r;j=Gi(a.lN,c,d,e);k=Gi(a.w5,f,g,h);l=j.g3-1|0;while(l<=(k.g3+1|0)){m=j.hp-1|0;while(m<=(k.hp+1|0)){n=j.gW-1|0;while(n<=(k.gW+1|0)){a:{if(l>=0&&m>=0&&n>=0&&l<a.ex&&m<a.eK&&n<a.h0){o=a.lz.data[K(K(n,a.eK)+m|0,a.ex)+l|0];p=0;while(true){if(p>=o.q)break a;q=Bc(o,p);if(q!==b){r=q.Y;if(f>r.bg&&c<r.bv&&g>r.bc&&d<r.bs&&h>r.bf&&e<r.bw)M(i,q);}p=p+1|0;}}}n=n+1|0;}m=m+1|0;}l=l+1|0;}return i;}
function Ht(a,b,c){ER(a.mz);return c===null?a.mz:UH(a,b,c.bg,c.bc,c.bf,c.bv,c.bs,c.bw,a.mz);}
function AES(a){var b,c,d,e,f,g,h,i,j,k;b=0;while(b<a.fi.q){c=Bc(a.fi,b);c.eb=c.f;c.ea=c.j;c.d_=c.g;c.eP();if(c.hL){d=a.fi;e=b+(-1)|0;Ej(d,b);Kl(Gi(a.lN,c.eb,c.ea,c.d_),c);}else{f=c.eb/8.0|0;g=c.ea/8.0|0;e=c.d_/8.0|0;h=c.f/8.0|0;i=c.j/8.0|0;j=c.g/8.0|0;if(f==h&&g==i&&e==j)e=b;else{d=Gi(a.lN,c.eb,c.ea,c.d_);k=Gi(a.w5,c.f,c.j,c.g);if(S3(d,k))e=b;else{Kl(d,c);Sq(k,c);e=b;}}}b=e+1|0;}}
function TN(){C.call(this);this.H2=null;}
function AIF(a){var b,$$je,$p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:try{$p=1;continue _;}catch($$e){$$je=Bh($$e);if($$je instanceof BA){b=$$je;}else{throw $$e;}}DA(b);return;case 1:a:{try{AEG();if(I()){break _;}break a;}catch($$e){$$je=Bh($$e);if($$je instanceof BA){b=$$je;}else{throw $$e;}}DA(b);}return;default:F2();}}Dh().s(a,b,$p);}
function ADT(){var a=this;C.call(a);a.CL=null;a.gs=null;a.pZ=null;}
function S4(a,b,c){var d=new ADT();AXs(d,a,b,c);return d;}
function AXs(a,b,c,d){a.CL=b;a.gs=c;a.pZ=d;}
function A42(a){return a.gs.gS()+a.pZ.gS()|0;}
function AWD(a){return a.CL;}
function ASh(a,b){return b<a.gs.gS()?a.gs.gX(b):a.pZ.gX(b-a.gs.gS()|0);}
function AVv(a,b,c){return b<a.gs.gS()?a.gs.kL(b,c):a.pZ.kL(b-a.gs.gS()|0,c);}
function AXR(a,b,c){if(b<a.gs.gS())a.gs.jF(b,c);else a.pZ.jF(b-a.gs.gS()|0,c);}
function APl(a){return a.gs.f1();}
function T3(){C.call(this);this.I_=null;}
function AJU(a){Be();A_N.requestPointerLock();O5(0);}
function AX6(a){AJU(a);}
function JW(){BT.call(this);}
function SI(){C.call(this);}
var Bgt=null;function Bv(b){return Bgt.data[(b*651.8986206054688|0)&4095];}
function Bp(b){return Bgt.data[((b+1.5707963705062866)*651.8986206054688|0)&4095];}
function B$(b){return Iu(b);}
function FM(b){var c;c=b|0;if(b<c)c=c-1|0;return c;}
function Em(b){var c;c=b|0;if(b<c)c=c-1|0;return c;}
function ANv(){var b,c,d,e;Bgt=$rt_createFloatArray(4096);b=0;while(b<4096){Bgt.data[b]=LR((b+0.5)/4096.0*6.2831854820251465);b=b+1|0;}c=0;while(c<360){d=Bgt.data;e=c;d[(e*11.377778053283691|0)&4095]=LR(e*0.01745329238474369);c=c+90|0;}}
function Pt(){var a=this;C.call(a);a.bd=null;a.V=null;a.W=null;a.Z=null;}
function PE(){var a=this;Pt.call(a);a.oH=null;a.qr=null;a.Az=null;}
var Bgu=null;function G7(){var b;b=Bgu;M1(b.oH);M1(b.qr);M1(b.Az);PX(2983,b.oH);PX(2982,b.qr);RV(V2(b.oH),16);X4(b.oH,b.V);RV(V2(b.qr),16);X4(b.qr,b.W);b.Z.data[0]=b.W.data[0]*b.V.data[0]+b.W.data[1]*b.V.data[4]+b.W.data[2]*b.V.data[8]+b.W.data[3]*b.V.data[12];b.Z.data[1]=b.W.data[0]*b.V.data[1]+b.W.data[1]*b.V.data[5]+b.W.data[2]*b.V.data[9]+b.W.data[3]*b.V.data[13];b.Z.data[2]=b.W.data[0]*b.V.data[2]+b.W.data[1]*b.V.data[6]+b.W.data[2]*b.V.data[10]+b.W.data[3]*b.V.data[14];b.Z.data[3]=b.W.data[0]*b.V.data[3]
+b.W.data[1]*b.V.data[7]+b.W.data[2]*b.V.data[11]+b.W.data[3]*b.V.data[15];b.Z.data[4]=b.W.data[4]*b.V.data[0]+b.W.data[5]*b.V.data[4]+b.W.data[6]*b.V.data[8]+b.W.data[7]*b.V.data[12];b.Z.data[5]=b.W.data[4]*b.V.data[1]+b.W.data[5]*b.V.data[5]+b.W.data[6]*b.V.data[9]+b.W.data[7]*b.V.data[13];b.Z.data[6]=b.W.data[4]*b.V.data[2]+b.W.data[5]*b.V.data[6]+b.W.data[6]*b.V.data[10]+b.W.data[7]*b.V.data[14];b.Z.data[7]=b.W.data[4]*b.V.data[3]+b.W.data[5]*b.V.data[7]+b.W.data[6]*b.V.data[11]+b.W.data[7]*b.V.data[15];b.Z.data[8]
=b.W.data[8]*b.V.data[0]+b.W.data[9]*b.V.data[4]+b.W.data[10]*b.V.data[8]+b.W.data[11]*b.V.data[12];b.Z.data[9]=b.W.data[8]*b.V.data[1]+b.W.data[9]*b.V.data[5]+b.W.data[10]*b.V.data[9]+b.W.data[11]*b.V.data[13];b.Z.data[10]=b.W.data[8]*b.V.data[2]+b.W.data[9]*b.V.data[6]+b.W.data[10]*b.V.data[10]+b.W.data[11]*b.V.data[14];b.Z.data[11]=b.W.data[8]*b.V.data[3]+b.W.data[9]*b.V.data[7]+b.W.data[10]*b.V.data[11]+b.W.data[11]*b.V.data[15];b.Z.data[12]=b.W.data[12]*b.V.data[0]+b.W.data[13]*b.V.data[4]+b.W.data[14]
*b.V.data[8]+b.W.data[15]*b.V.data[12];b.Z.data[13]=b.W.data[12]*b.V.data[1]+b.W.data[13]*b.V.data[5]+b.W.data[14]*b.V.data[9]+b.W.data[15]*b.V.data[13];b.Z.data[14]=b.W.data[12]*b.V.data[2]+b.W.data[13]*b.V.data[6]+b.W.data[14]*b.V.data[10]+b.W.data[15]*b.V.data[14];b.Z.data[15]=b.W.data[12]*b.V.data[3]+b.W.data[13]*b.V.data[7]+b.W.data[14]*b.V.data[11]+b.W.data[15]*b.V.data[15];b.bd.data[0].data[0]=b.Z.data[3]-b.Z.data[0];b.bd.data[0].data[1]=b.Z.data[7]-b.Z.data[4];b.bd.data[0].data[2]=b.Z.data[11]-b.Z.data[8];b.bd.data[0].data[3]
=b.Z.data[15]-b.Z.data[12];HJ(b.bd,0);b.bd.data[1].data[0]=b.Z.data[3]+b.Z.data[0];b.bd.data[1].data[1]=b.Z.data[7]+b.Z.data[4];b.bd.data[1].data[2]=b.Z.data[11]+b.Z.data[8];b.bd.data[1].data[3]=b.Z.data[15]+b.Z.data[12];HJ(b.bd,1);b.bd.data[2].data[0]=b.Z.data[3]+b.Z.data[1];b.bd.data[2].data[1]=b.Z.data[7]+b.Z.data[5];b.bd.data[2].data[2]=b.Z.data[11]+b.Z.data[9];b.bd.data[2].data[3]=b.Z.data[15]+b.Z.data[13];HJ(b.bd,2);b.bd.data[3].data[0]=b.Z.data[3]-b.Z.data[1];b.bd.data[3].data[1]=b.Z.data[7]-b.Z.data[5];b.bd.data[3].data[2]
=b.Z.data[11]-b.Z.data[9];b.bd.data[3].data[3]=b.Z.data[15]-b.Z.data[13];HJ(b.bd,3);b.bd.data[4].data[0]=b.Z.data[3]-b.Z.data[2];b.bd.data[4].data[1]=b.Z.data[7]-b.Z.data[6];b.bd.data[4].data[2]=b.Z.data[11]-b.Z.data[10];b.bd.data[4].data[3]=b.Z.data[15]-b.Z.data[14];HJ(b.bd,4);b.bd.data[5].data[0]=b.Z.data[3]+b.Z.data[2];b.bd.data[5].data[1]=b.Z.data[7]+b.Z.data[6];b.bd.data[5].data[2]=b.Z.data[11]+b.Z.data[10];b.bd.data[5].data[3]=b.Z.data[15]+b.Z.data[14];HJ(b.bd,5);return Bgu;}
function HJ(b,c){var d,e;b=b.data;d=B$(b[c].data[0]*b[c].data[0]+b[c].data[1]*b[c].data[1]+b[c].data[2]*b[c].data[2]);e=b[c].data;e[0]=e[0]/d;e=b[c].data;e[1]=e[1]/d;e=b[c].data;e[2]=e[2]/d;b=b[c].data;b[3]=b[3]/d;}
function AGF(){var b;b=new PE;b.bd=$rt_createFloatMultiArray([16,16]);b.V=$rt_createFloatArray(16);b.W=$rt_createFloatArray(16);b.Z=$rt_createFloatArray(16);b.oH=HE(16);b.qr=HE(16);b.Az=HE(16);Bgu=b;}
function WV(){}
function ANL(){C.call(this);this.z7=null;}
function A$3(){var a=new ANL();ASW(a);return a;}
function ASW(a){a.z7=G7();}
function Pw(a,b){var c,d,e,f,g,h,i,j;c=a.z7;d=b.bw;e=b.bs;f=b.bv;g=b.bf;h=b.bc;i=b.bg;j=0;while(j<6){if(c.bd.data[j].data[0]*i+c.bd.data[j].data[1]*h+c.bd.data[j].data[2]*g+c.bd.data[j].data[3]<=0.0&&c.bd.data[j].data[0]*f+c.bd.data[j].data[1]*h+c.bd.data[j].data[2]*g+c.bd.data[j].data[3]<=0.0&&c.bd.data[j].data[0]*i+c.bd.data[j].data[1]*e+c.bd.data[j].data[2]*g+c.bd.data[j].data[3]<=0.0&&c.bd.data[j].data[0]*f+c.bd.data[j].data[1]*e+c.bd.data[j].data[2]*g+c.bd.data[j].data[3]<=0.0&&c.bd.data[j].data[0]*i+c.bd.data[j].data[1]
*h+c.bd.data[j].data[2]*d+c.bd.data[j].data[3]<=0.0&&c.bd.data[j].data[0]*f+c.bd.data[j].data[1]*h+c.bd.data[j].data[2]*d+c.bd.data[j].data[3]<=0.0&&c.bd.data[j].data[0]*i+c.bd.data[j].data[1]*e+c.bd.data[j].data[2]*d+c.bd.data[j].data[3]<=0.0&&c.bd.data[j].data[0]*f+c.bd.data[j].data[1]*e+c.bd.data[j].data[2]*d+c.bd.data[j].data[3]<=0.0)return 0;j=j+1|0;}return 1;}
function Tk(){C.call(this);}
var Bgv=null;function D9(){Bb(2896);Bb(16384);Bb(16385);Bb(2903);}
function I4(){var b;Y(2896);Y(16384);Y(16385);Y(2903);b=BF(0.30000001192092896,1.0,(-0.699999988079071));FL(b.U,b.R,b.S,0.0);FL(0.5,0.5,0.5,1.0);FL(0.0,0.0,0.0,1.0);FL(0.0,0.0,0.0,1.0);b=BF((-0.699999988079071),1.0,0.20000000298023224);FL(b.U,b.R,b.S,0.0);FL(0.5,0.5,0.5,1.0);FL(0.0,0.0,0.0,1.0);FL(0.0,0.0,0.0,1.0);FL(0.5,0.5,0.5,1.0);}
function FL(b,c,d,e){DM(Bgv);Ch(Ch(Ch(Ch(Bgv,b),c),d),e);Ec(Bgv);return Bgv;}
function AGV(){Bgv=HE(16);}
function F3(){var a=this;C.call(a);a.kg=null;a.kp=null;a.eJ=null;a.fF=null;a.lI=null;a.ir=null;}
var Bgw=null;var Bgx=null;var Bgy=null;var Bgz=null;var BgA=null;var BgB=null;function OS(a,b,c,d,e,f,g,h,i,j,k,l){var m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be;m=0;n=d;while(true){o=b.data;p=a.eJ.data;q=o[c+m|0];p[q]=p[q]+1|0;m=m+1|0;n=n+(-1)|0;if(!n)break;}if(a.eJ.data[0]==d){b=h.data;f=i.data;b[0]=(-1);f[0]=0;return 0;}i=i.data;r=i[0];s=1;a:{while(true){if(s>15)break a;if(a.eJ.data[s])break;s=s+1|0;}}if(r<s)r=s;t=15;b:{while(true){if(!t)break b;if(a.eJ.data[t])break;t=t+(-1)|0;}}if(r>t)r=t;i[0]=r;u=1<<s;m
=s;while(true){if(m>=t){v=u-a.eJ.data[t]|0;if(v<0)return (-3);b=a.eJ.data;b[t]=b[t]+v|0;b=a.ir.data;u=0;b[1]=u;m=1;w=2;x=t;while(true){x=x+(-1)|0;if(!x)break;i=a.ir.data;u=u+a.eJ.data[m]|0;i[w]=u;w=w+1|0;m=m+1|0;}m=0;w=0;while(true){x=o[c+w|0];if(x){i=l.data;b=a.ir.data;q=b[x];b[x]=q+1|0;i[q]=m;}w=w+1|0;m=m+1|0;if(m>=d)break;}u=a.ir.data[t];b=a.ir.data;m=0;b[0]=m;w=0;y=(-1);z= -r;a.lI.data[0]=0;ba=0;bb=0;c:while(true){if(s>t)return v&&t!=1?(-5):0;bc=a.eJ.data[s];while(true){bd=bc+(-1)|0;if(!bc)break;n=bd+1|
0;while(true){be=z+r|0;if(s<=be)break;y=y+1|0;x=t-be|0;if(x>r)x=r;d:{bc=s-be|0;c=1<<bc;if(c>n){q=c-n|0;if(bc<x){c=s;while(true){bc=bc+1|0;if(bc>=x)break;d=q<<1;b=a.eJ.data;c=c+1|0;if(d<=b[c])break d;q=d-a.eJ.data[c]|0;}}}}b=k.data;bb=1<<bc;if((b[0]+bb|0)>1440)break c;i=a.lI.data;ba=b[0];i[y]=ba;b[0]=b[0]+bb|0;if(!y){h.data[0]=ba;z=be;continue;}a.ir.data[y]=m;a.fF.data[0]=bc<<24>>24;a.fF.data[1]=r<<24>>24;c=m>>>(be-r|0);i=a.fF.data;b=a.lI.data;q=y-1|0;i[2]=(ba-b[q]|0)-c|0;CT(a.fF,0,j,(a.lI.data[q]+c|0)*3|0,3);z
=be;}b=a.fF.data;x=s-z|0;b[1]=x<<24>>24;if(w>=u)a.fF.data[0]=192;else{p=l.data;if(p[w]>=e){i=g.data;o=f.data;a.fF.data[0]=((i[p[w]-e|0]+16|0)+64|0)<<24>>24;b=a.fF.data;d=w+1|0;b[2]=o[p[w]-e|0];w=d;}else{b=a.fF;b.data[0]=(p[w]>=256?96:0)<<24>>24;b=a.fF.data;d=w+1|0;b[2]=p[w];w=d;}}q=1<<x;c=m>>>z;while(c<bb){CT(a.fF,0,j,(ba+c|0)*3|0,3);c=c+q|0;}c=1<<(s-1|0);while(m&c){m=m^c;c=c>>>1;}m=m^c;x=(1<<z)-1|0;while((m&x)!=a.ir.data[y]){y=y+(-1)|0;z=z-r|0;x=(1<<z)-1|0;}bc=bd;}s=s+1|0;}return (-3);}q=u-a.eJ.data[m]|0;if
(q<0)break;m=m+1|0;u=q<<1;}return (-3);}
function AMS(a,b,c,d,e,f){var g;N$(a,19);a.kg.data[0]=0;g=OS(a,b,0,19,19,null,null,d,c,e,a.kg,a.kp);if(g==(-3))f.ca=B(521);else if(!(g!=(-5)&&c.data[0])){f.ca=B(522);g=(-3);}return g;}
function AAZ(a,b,c,d,e,f,g,h,i,j){var k;N$(a,288);a.kg.data[0]=0;k=OS(a,d,0,b,257,Bgy,Bgz,g,e,i,a.kg,a.kp);if(!k&&e.data[0]){N$(a,288);c=OS(a,d,b,c,0,BgA,BgB,h,f,i,a.kg,a.kp);if(!c&&!(!f.data[0]&&b>257))return 0;if(c==(-3))j.ca=B(523);else if(c==(-5)){j.ca=B(524);c=(-3);}else if(c!=(-4)){j.ca=B(525);c=(-3);}return c;}if(k==(-3))j.ca=B(526);else if(k!=(-4)){j.ca=B(527);k=(-3);}return k;}
function AEV(b,c,d,e,f){e=e.data;d=d.data;c=c.data;b.data[0]=9;c[0]=5;d[0]=Bgw;e[0]=Bgx;return 0;}
function N$(a,b){var c;if(a.kg===null){a.kg=$rt_createIntArray(1);a.kp=$rt_createIntArray(b);a.eJ=$rt_createIntArray(16);a.fF=$rt_createIntArray(3);a.lI=$rt_createIntArray(15);a.ir=$rt_createIntArray(16);}if(a.kp.data.length<b)a.kp=$rt_createIntArray(b);c=0;while(c<b){a.kp.data[c]=0;c=c+1|0;}c=0;while(c<16){a.eJ.data[c]=0;c=c+1|0;}c=0;while(c<3){a.fF.data[c]=0;c=c+1|0;}CT(a.eJ,0,a.lI,0,15);CT(a.eJ,0,a.ir,0,16);}
function ALq(){var b,c;b=$rt_createIntArray(1536);c=b.data;c[0]=96;c[1]=7;c[2]=256;c[3]=0;c[4]=8;c[5]=80;c[6]=0;c[7]=8;c[8]=16;c[9]=84;c[10]=8;c[11]=115;c[12]=82;c[13]=7;c[14]=31;c[15]=0;c[16]=8;c[17]=112;c[18]=0;c[19]=8;c[20]=48;c[21]=0;c[22]=9;c[23]=192;c[24]=80;c[25]=7;c[26]=10;c[27]=0;c[28]=8;c[29]=96;c[30]=0;c[31]=8;c[32]=32;c[33]=0;c[34]=9;c[35]=160;c[36]=0;c[37]=8;c[38]=0;c[39]=0;c[40]=8;c[41]=128;c[42]=0;c[43]=8;c[44]=64;c[45]=0;c[46]=9;c[47]=224;c[48]=80;c[49]=7;c[50]=6;c[51]=0;c[52]=8;c[53]=88;c[54]
=0;c[55]=8;c[56]=24;c[57]=0;c[58]=9;c[59]=144;c[60]=83;c[61]=7;c[62]=59;c[63]=0;c[64]=8;c[65]=120;c[66]=0;c[67]=8;c[68]=56;c[69]=0;c[70]=9;c[71]=208;c[72]=81;c[73]=7;c[74]=17;c[75]=0;c[76]=8;c[77]=104;c[78]=0;c[79]=8;c[80]=40;c[81]=0;c[82]=9;c[83]=176;c[84]=0;c[85]=8;c[86]=8;c[87]=0;c[88]=8;c[89]=136;c[90]=0;c[91]=8;c[92]=72;c[93]=0;c[94]=9;c[95]=240;c[96]=80;c[97]=7;c[98]=4;c[99]=0;c[100]=8;c[101]=84;c[102]=0;c[103]=8;c[104]=20;c[105]=85;c[106]=8;c[107]=227;c[108]=83;c[109]=7;c[110]=43;c[111]=0;c[112]=8;c[113]
=116;c[114]=0;c[115]=8;c[116]=52;c[117]=0;c[118]=9;c[119]=200;c[120]=81;c[121]=7;c[122]=13;c[123]=0;c[124]=8;c[125]=100;c[126]=0;c[127]=8;c[128]=36;c[129]=0;c[130]=9;c[131]=168;c[132]=0;c[133]=8;c[134]=4;c[135]=0;c[136]=8;c[137]=132;c[138]=0;c[139]=8;c[140]=68;c[141]=0;c[142]=9;c[143]=232;c[144]=80;c[145]=7;c[146]=8;c[147]=0;c[148]=8;c[149]=92;c[150]=0;c[151]=8;c[152]=28;c[153]=0;c[154]=9;c[155]=152;c[156]=84;c[157]=7;c[158]=83;c[159]=0;c[160]=8;c[161]=124;c[162]=0;c[163]=8;c[164]=60;c[165]=0;c[166]=9;c[167]
=216;c[168]=82;c[169]=7;c[170]=23;c[171]=0;c[172]=8;c[173]=108;c[174]=0;c[175]=8;c[176]=44;c[177]=0;c[178]=9;c[179]=184;c[180]=0;c[181]=8;c[182]=12;c[183]=0;c[184]=8;c[185]=140;c[186]=0;c[187]=8;c[188]=76;c[189]=0;c[190]=9;c[191]=248;c[192]=80;c[193]=7;c[194]=3;c[195]=0;c[196]=8;c[197]=82;c[198]=0;c[199]=8;c[200]=18;c[201]=85;c[202]=8;c[203]=163;c[204]=83;c[205]=7;c[206]=35;c[207]=0;c[208]=8;c[209]=114;c[210]=0;c[211]=8;c[212]=50;c[213]=0;c[214]=9;c[215]=196;c[216]=81;c[217]=7;c[218]=11;c[219]=0;c[220]=8;c[221]
=98;c[222]=0;c[223]=8;c[224]=34;c[225]=0;c[226]=9;c[227]=164;c[228]=0;c[229]=8;c[230]=2;c[231]=0;c[232]=8;c[233]=130;c[234]=0;c[235]=8;c[236]=66;c[237]=0;c[238]=9;c[239]=228;c[240]=80;c[241]=7;c[242]=7;c[243]=0;c[244]=8;c[245]=90;c[246]=0;c[247]=8;c[248]=26;c[249]=0;c[250]=9;c[251]=148;c[252]=84;c[253]=7;c[254]=67;c[255]=0;c[256]=8;c[257]=122;c[258]=0;c[259]=8;c[260]=58;c[261]=0;c[262]=9;c[263]=212;c[264]=82;c[265]=7;c[266]=19;c[267]=0;c[268]=8;c[269]=106;c[270]=0;c[271]=8;c[272]=42;c[273]=0;c[274]=9;c[275]
=180;c[276]=0;c[277]=8;c[278]=10;c[279]=0;c[280]=8;c[281]=138;c[282]=0;c[283]=8;c[284]=74;c[285]=0;c[286]=9;c[287]=244;c[288]=80;c[289]=7;c[290]=5;c[291]=0;c[292]=8;c[293]=86;c[294]=0;c[295]=8;c[296]=22;c[297]=192;c[298]=8;c[299]=0;c[300]=83;c[301]=7;c[302]=51;c[303]=0;c[304]=8;c[305]=118;c[306]=0;c[307]=8;c[308]=54;c[309]=0;c[310]=9;c[311]=204;c[312]=81;c[313]=7;c[314]=15;c[315]=0;c[316]=8;c[317]=102;c[318]=0;c[319]=8;c[320]=38;c[321]=0;c[322]=9;c[323]=172;c[324]=0;c[325]=8;c[326]=6;c[327]=0;c[328]=8;c[329]
=134;c[330]=0;c[331]=8;c[332]=70;c[333]=0;c[334]=9;c[335]=236;c[336]=80;c[337]=7;c[338]=9;c[339]=0;c[340]=8;c[341]=94;c[342]=0;c[343]=8;c[344]=30;c[345]=0;c[346]=9;c[347]=156;c[348]=84;c[349]=7;c[350]=99;c[351]=0;c[352]=8;c[353]=126;c[354]=0;c[355]=8;c[356]=62;c[357]=0;c[358]=9;c[359]=220;c[360]=82;c[361]=7;c[362]=27;c[363]=0;c[364]=8;c[365]=110;c[366]=0;c[367]=8;c[368]=46;c[369]=0;c[370]=9;c[371]=188;c[372]=0;c[373]=8;c[374]=14;c[375]=0;c[376]=8;c[377]=142;c[378]=0;c[379]=8;c[380]=78;c[381]=0;c[382]=9;c[383]
=252;c[384]=96;c[385]=7;c[386]=256;c[387]=0;c[388]=8;c[389]=81;c[390]=0;c[391]=8;c[392]=17;c[393]=85;c[394]=8;c[395]=131;c[396]=82;c[397]=7;c[398]=31;c[399]=0;c[400]=8;c[401]=113;c[402]=0;c[403]=8;c[404]=49;c[405]=0;c[406]=9;c[407]=194;c[408]=80;c[409]=7;c[410]=10;c[411]=0;c[412]=8;c[413]=97;c[414]=0;c[415]=8;c[416]=33;c[417]=0;c[418]=9;c[419]=162;c[420]=0;c[421]=8;c[422]=1;c[423]=0;c[424]=8;c[425]=129;c[426]=0;c[427]=8;c[428]=65;c[429]=0;c[430]=9;c[431]=226;c[432]=80;c[433]=7;c[434]=6;c[435]=0;c[436]=8;c[437]
=89;c[438]=0;c[439]=8;c[440]=25;c[441]=0;c[442]=9;c[443]=146;c[444]=83;c[445]=7;c[446]=59;c[447]=0;c[448]=8;c[449]=121;c[450]=0;c[451]=8;c[452]=57;c[453]=0;c[454]=9;c[455]=210;c[456]=81;c[457]=7;c[458]=17;c[459]=0;c[460]=8;c[461]=105;c[462]=0;c[463]=8;c[464]=41;c[465]=0;c[466]=9;c[467]=178;c[468]=0;c[469]=8;c[470]=9;c[471]=0;c[472]=8;c[473]=137;c[474]=0;c[475]=8;c[476]=73;c[477]=0;c[478]=9;c[479]=242;c[480]=80;c[481]=7;c[482]=4;c[483]=0;c[484]=8;c[485]=85;c[486]=0;c[487]=8;c[488]=21;c[489]=80;c[490]=8;c[491]
=258;c[492]=83;c[493]=7;c[494]=43;c[495]=0;c[496]=8;c[497]=117;c[498]=0;c[499]=8;c[500]=53;c[501]=0;c[502]=9;c[503]=202;c[504]=81;c[505]=7;c[506]=13;c[507]=0;c[508]=8;c[509]=101;c[510]=0;c[511]=8;c[512]=37;c[513]=0;c[514]=9;c[515]=170;c[516]=0;c[517]=8;c[518]=5;c[519]=0;c[520]=8;c[521]=133;c[522]=0;c[523]=8;c[524]=69;c[525]=0;c[526]=9;c[527]=234;c[528]=80;c[529]=7;c[530]=8;c[531]=0;c[532]=8;c[533]=93;c[534]=0;c[535]=8;c[536]=29;c[537]=0;c[538]=9;c[539]=154;c[540]=84;c[541]=7;c[542]=83;c[543]=0;c[544]=8;c[545]
=125;c[546]=0;c[547]=8;c[548]=61;c[549]=0;c[550]=9;c[551]=218;c[552]=82;c[553]=7;c[554]=23;c[555]=0;c[556]=8;c[557]=109;c[558]=0;c[559]=8;c[560]=45;c[561]=0;c[562]=9;c[563]=186;c[564]=0;c[565]=8;c[566]=13;c[567]=0;c[568]=8;c[569]=141;c[570]=0;c[571]=8;c[572]=77;c[573]=0;c[574]=9;c[575]=250;c[576]=80;c[577]=7;c[578]=3;c[579]=0;c[580]=8;c[581]=83;c[582]=0;c[583]=8;c[584]=19;c[585]=85;c[586]=8;c[587]=195;c[588]=83;c[589]=7;c[590]=35;c[591]=0;c[592]=8;c[593]=115;c[594]=0;c[595]=8;c[596]=51;c[597]=0;c[598]=9;c[599]
=198;c[600]=81;c[601]=7;c[602]=11;c[603]=0;c[604]=8;c[605]=99;c[606]=0;c[607]=8;c[608]=35;c[609]=0;c[610]=9;c[611]=166;c[612]=0;c[613]=8;c[614]=3;c[615]=0;c[616]=8;c[617]=131;c[618]=0;c[619]=8;c[620]=67;c[621]=0;c[622]=9;c[623]=230;c[624]=80;c[625]=7;c[626]=7;c[627]=0;c[628]=8;c[629]=91;c[630]=0;c[631]=8;c[632]=27;c[633]=0;c[634]=9;c[635]=150;c[636]=84;c[637]=7;c[638]=67;c[639]=0;c[640]=8;c[641]=123;c[642]=0;c[643]=8;c[644]=59;c[645]=0;c[646]=9;c[647]=214;c[648]=82;c[649]=7;c[650]=19;c[651]=0;c[652]=8;c[653]
=107;c[654]=0;c[655]=8;c[656]=43;c[657]=0;c[658]=9;c[659]=182;c[660]=0;c[661]=8;c[662]=11;c[663]=0;c[664]=8;c[665]=139;c[666]=0;c[667]=8;c[668]=75;c[669]=0;c[670]=9;c[671]=246;c[672]=80;c[673]=7;c[674]=5;c[675]=0;c[676]=8;c[677]=87;c[678]=0;c[679]=8;c[680]=23;c[681]=192;c[682]=8;c[683]=0;c[684]=83;c[685]=7;c[686]=51;c[687]=0;c[688]=8;c[689]=119;c[690]=0;c[691]=8;c[692]=55;c[693]=0;c[694]=9;c[695]=206;c[696]=81;c[697]=7;c[698]=15;c[699]=0;c[700]=8;c[701]=103;c[702]=0;c[703]=8;c[704]=39;c[705]=0;c[706]=9;c[707]
=174;c[708]=0;c[709]=8;c[710]=7;c[711]=0;c[712]=8;c[713]=135;c[714]=0;c[715]=8;c[716]=71;c[717]=0;c[718]=9;c[719]=238;c[720]=80;c[721]=7;c[722]=9;c[723]=0;c[724]=8;c[725]=95;c[726]=0;c[727]=8;c[728]=31;c[729]=0;c[730]=9;c[731]=158;c[732]=84;c[733]=7;c[734]=99;c[735]=0;c[736]=8;c[737]=127;c[738]=0;c[739]=8;c[740]=63;c[741]=0;c[742]=9;c[743]=222;c[744]=82;c[745]=7;c[746]=27;c[747]=0;c[748]=8;c[749]=111;c[750]=0;c[751]=8;c[752]=47;c[753]=0;c[754]=9;c[755]=190;c[756]=0;c[757]=8;c[758]=15;c[759]=0;c[760]=8;c[761]
=143;c[762]=0;c[763]=8;c[764]=79;c[765]=0;c[766]=9;c[767]=254;c[768]=96;c[769]=7;c[770]=256;c[771]=0;c[772]=8;c[773]=80;c[774]=0;c[775]=8;c[776]=16;c[777]=84;c[778]=8;c[779]=115;c[780]=82;c[781]=7;c[782]=31;c[783]=0;c[784]=8;c[785]=112;c[786]=0;c[787]=8;c[788]=48;c[789]=0;c[790]=9;c[791]=193;c[792]=80;c[793]=7;c[794]=10;c[795]=0;c[796]=8;c[797]=96;c[798]=0;c[799]=8;c[800]=32;c[801]=0;c[802]=9;c[803]=161;c[804]=0;c[805]=8;c[806]=0;c[807]=0;c[808]=8;c[809]=128;c[810]=0;c[811]=8;c[812]=64;c[813]=0;c[814]=9;c[815]
=225;c[816]=80;c[817]=7;c[818]=6;c[819]=0;c[820]=8;c[821]=88;c[822]=0;c[823]=8;c[824]=24;c[825]=0;c[826]=9;c[827]=145;c[828]=83;c[829]=7;c[830]=59;c[831]=0;c[832]=8;c[833]=120;c[834]=0;c[835]=8;c[836]=56;c[837]=0;c[838]=9;c[839]=209;c[840]=81;c[841]=7;c[842]=17;c[843]=0;c[844]=8;c[845]=104;c[846]=0;c[847]=8;c[848]=40;c[849]=0;c[850]=9;c[851]=177;c[852]=0;c[853]=8;c[854]=8;c[855]=0;c[856]=8;c[857]=136;c[858]=0;c[859]=8;c[860]=72;c[861]=0;c[862]=9;c[863]=241;c[864]=80;c[865]=7;c[866]=4;c[867]=0;c[868]=8;c[869]
=84;c[870]=0;c[871]=8;c[872]=20;c[873]=85;c[874]=8;c[875]=227;c[876]=83;c[877]=7;c[878]=43;c[879]=0;c[880]=8;c[881]=116;c[882]=0;c[883]=8;c[884]=52;c[885]=0;c[886]=9;c[887]=201;c[888]=81;c[889]=7;c[890]=13;c[891]=0;c[892]=8;c[893]=100;c[894]=0;c[895]=8;c[896]=36;c[897]=0;c[898]=9;c[899]=169;c[900]=0;c[901]=8;c[902]=4;c[903]=0;c[904]=8;c[905]=132;c[906]=0;c[907]=8;c[908]=68;c[909]=0;c[910]=9;c[911]=233;c[912]=80;c[913]=7;c[914]=8;c[915]=0;c[916]=8;c[917]=92;c[918]=0;c[919]=8;c[920]=28;c[921]=0;c[922]=9;c[923]
=153;c[924]=84;c[925]=7;c[926]=83;c[927]=0;c[928]=8;c[929]=124;c[930]=0;c[931]=8;c[932]=60;c[933]=0;c[934]=9;c[935]=217;c[936]=82;c[937]=7;c[938]=23;c[939]=0;c[940]=8;c[941]=108;c[942]=0;c[943]=8;c[944]=44;c[945]=0;c[946]=9;c[947]=185;c[948]=0;c[949]=8;c[950]=12;c[951]=0;c[952]=8;c[953]=140;c[954]=0;c[955]=8;c[956]=76;c[957]=0;c[958]=9;c[959]=249;c[960]=80;c[961]=7;c[962]=3;c[963]=0;c[964]=8;c[965]=82;c[966]=0;c[967]=8;c[968]=18;c[969]=85;c[970]=8;c[971]=163;c[972]=83;c[973]=7;c[974]=35;c[975]=0;c[976]=8;c[977]
=114;c[978]=0;c[979]=8;c[980]=50;c[981]=0;c[982]=9;c[983]=197;c[984]=81;c[985]=7;c[986]=11;c[987]=0;c[988]=8;c[989]=98;c[990]=0;c[991]=8;c[992]=34;c[993]=0;c[994]=9;c[995]=165;c[996]=0;c[997]=8;c[998]=2;c[999]=0;c[1000]=8;c[1001]=130;c[1002]=0;c[1003]=8;c[1004]=66;c[1005]=0;c[1006]=9;c[1007]=229;c[1008]=80;c[1009]=7;c[1010]=7;c[1011]=0;c[1012]=8;c[1013]=90;c[1014]=0;c[1015]=8;c[1016]=26;c[1017]=0;c[1018]=9;c[1019]=149;c[1020]=84;c[1021]=7;c[1022]=67;c[1023]=0;c[1024]=8;c[1025]=122;c[1026]=0;c[1027]=8;c[1028]
=58;c[1029]=0;c[1030]=9;c[1031]=213;c[1032]=82;c[1033]=7;c[1034]=19;c[1035]=0;c[1036]=8;c[1037]=106;c[1038]=0;c[1039]=8;c[1040]=42;c[1041]=0;c[1042]=9;c[1043]=181;c[1044]=0;c[1045]=8;c[1046]=10;c[1047]=0;c[1048]=8;c[1049]=138;c[1050]=0;c[1051]=8;c[1052]=74;c[1053]=0;c[1054]=9;c[1055]=245;c[1056]=80;c[1057]=7;c[1058]=5;c[1059]=0;c[1060]=8;c[1061]=86;c[1062]=0;c[1063]=8;c[1064]=22;c[1065]=192;c[1066]=8;c[1067]=0;c[1068]=83;c[1069]=7;c[1070]=51;c[1071]=0;c[1072]=8;c[1073]=118;c[1074]=0;c[1075]=8;c[1076]=54;c[1077]
=0;c[1078]=9;c[1079]=205;c[1080]=81;c[1081]=7;c[1082]=15;c[1083]=0;c[1084]=8;c[1085]=102;c[1086]=0;c[1087]=8;c[1088]=38;c[1089]=0;c[1090]=9;c[1091]=173;c[1092]=0;c[1093]=8;c[1094]=6;c[1095]=0;c[1096]=8;c[1097]=134;c[1098]=0;c[1099]=8;c[1100]=70;c[1101]=0;c[1102]=9;c[1103]=237;c[1104]=80;c[1105]=7;c[1106]=9;c[1107]=0;c[1108]=8;c[1109]=94;c[1110]=0;c[1111]=8;c[1112]=30;c[1113]=0;c[1114]=9;c[1115]=157;c[1116]=84;c[1117]=7;c[1118]=99;c[1119]=0;c[1120]=8;c[1121]=126;c[1122]=0;c[1123]=8;c[1124]=62;c[1125]=0;c[1126]
=9;c[1127]=221;c[1128]=82;c[1129]=7;c[1130]=27;c[1131]=0;c[1132]=8;c[1133]=110;c[1134]=0;c[1135]=8;c[1136]=46;c[1137]=0;c[1138]=9;c[1139]=189;c[1140]=0;c[1141]=8;c[1142]=14;c[1143]=0;c[1144]=8;c[1145]=142;c[1146]=0;c[1147]=8;c[1148]=78;c[1149]=0;c[1150]=9;c[1151]=253;c[1152]=96;c[1153]=7;c[1154]=256;c[1155]=0;c[1156]=8;c[1157]=81;c[1158]=0;c[1159]=8;c[1160]=17;c[1161]=85;c[1162]=8;c[1163]=131;c[1164]=82;c[1165]=7;c[1166]=31;c[1167]=0;c[1168]=8;c[1169]=113;c[1170]=0;c[1171]=8;c[1172]=49;c[1173]=0;c[1174]=9;c[1175]
=195;c[1176]=80;c[1177]=7;c[1178]=10;c[1179]=0;c[1180]=8;c[1181]=97;c[1182]=0;c[1183]=8;c[1184]=33;c[1185]=0;c[1186]=9;c[1187]=163;c[1188]=0;c[1189]=8;c[1190]=1;c[1191]=0;c[1192]=8;c[1193]=129;c[1194]=0;c[1195]=8;c[1196]=65;c[1197]=0;c[1198]=9;c[1199]=227;c[1200]=80;c[1201]=7;c[1202]=6;c[1203]=0;c[1204]=8;c[1205]=89;c[1206]=0;c[1207]=8;c[1208]=25;c[1209]=0;c[1210]=9;c[1211]=147;c[1212]=83;c[1213]=7;c[1214]=59;c[1215]=0;c[1216]=8;c[1217]=121;c[1218]=0;c[1219]=8;c[1220]=57;c[1221]=0;c[1222]=9;c[1223]=211;c[1224]
=81;c[1225]=7;c[1226]=17;c[1227]=0;c[1228]=8;c[1229]=105;c[1230]=0;c[1231]=8;c[1232]=41;c[1233]=0;c[1234]=9;c[1235]=179;c[1236]=0;c[1237]=8;c[1238]=9;c[1239]=0;c[1240]=8;c[1241]=137;c[1242]=0;c[1243]=8;c[1244]=73;c[1245]=0;c[1246]=9;c[1247]=243;c[1248]=80;c[1249]=7;c[1250]=4;c[1251]=0;c[1252]=8;c[1253]=85;c[1254]=0;c[1255]=8;c[1256]=21;c[1257]=80;c[1258]=8;c[1259]=258;c[1260]=83;c[1261]=7;c[1262]=43;c[1263]=0;c[1264]=8;c[1265]=117;c[1266]=0;c[1267]=8;c[1268]=53;c[1269]=0;c[1270]=9;c[1271]=203;c[1272]=81;c[1273]
=7;c[1274]=13;c[1275]=0;c[1276]=8;c[1277]=101;c[1278]=0;c[1279]=8;c[1280]=37;c[1281]=0;c[1282]=9;c[1283]=171;c[1284]=0;c[1285]=8;c[1286]=5;c[1287]=0;c[1288]=8;c[1289]=133;c[1290]=0;c[1291]=8;c[1292]=69;c[1293]=0;c[1294]=9;c[1295]=235;c[1296]=80;c[1297]=7;c[1298]=8;c[1299]=0;c[1300]=8;c[1301]=93;c[1302]=0;c[1303]=8;c[1304]=29;c[1305]=0;c[1306]=9;c[1307]=155;c[1308]=84;c[1309]=7;c[1310]=83;c[1311]=0;c[1312]=8;c[1313]=125;c[1314]=0;c[1315]=8;c[1316]=61;c[1317]=0;c[1318]=9;c[1319]=219;c[1320]=82;c[1321]=7;c[1322]
=23;c[1323]=0;c[1324]=8;c[1325]=109;c[1326]=0;c[1327]=8;c[1328]=45;c[1329]=0;c[1330]=9;c[1331]=187;c[1332]=0;c[1333]=8;c[1334]=13;c[1335]=0;c[1336]=8;c[1337]=141;c[1338]=0;c[1339]=8;c[1340]=77;c[1341]=0;c[1342]=9;c[1343]=251;c[1344]=80;c[1345]=7;c[1346]=3;c[1347]=0;c[1348]=8;c[1349]=83;c[1350]=0;c[1351]=8;c[1352]=19;c[1353]=85;c[1354]=8;c[1355]=195;c[1356]=83;c[1357]=7;c[1358]=35;c[1359]=0;c[1360]=8;c[1361]=115;c[1362]=0;c[1363]=8;c[1364]=51;c[1365]=0;c[1366]=9;c[1367]=199;c[1368]=81;c[1369]=7;c[1370]=11;c[1371]
=0;c[1372]=8;c[1373]=99;c[1374]=0;c[1375]=8;c[1376]=35;c[1377]=0;c[1378]=9;c[1379]=167;c[1380]=0;c[1381]=8;c[1382]=3;c[1383]=0;c[1384]=8;c[1385]=131;c[1386]=0;c[1387]=8;c[1388]=67;c[1389]=0;c[1390]=9;c[1391]=231;c[1392]=80;c[1393]=7;c[1394]=7;c[1395]=0;c[1396]=8;c[1397]=91;c[1398]=0;c[1399]=8;c[1400]=27;c[1401]=0;c[1402]=9;c[1403]=151;c[1404]=84;c[1405]=7;c[1406]=67;c[1407]=0;c[1408]=8;c[1409]=123;c[1410]=0;c[1411]=8;c[1412]=59;c[1413]=0;c[1414]=9;c[1415]=215;c[1416]=82;c[1417]=7;c[1418]=19;c[1419]=0;c[1420]
=8;c[1421]=107;c[1422]=0;c[1423]=8;c[1424]=43;c[1425]=0;c[1426]=9;c[1427]=183;c[1428]=0;c[1429]=8;c[1430]=11;c[1431]=0;c[1432]=8;c[1433]=139;c[1434]=0;c[1435]=8;c[1436]=75;c[1437]=0;c[1438]=9;c[1439]=247;c[1440]=80;c[1441]=7;c[1442]=5;c[1443]=0;c[1444]=8;c[1445]=87;c[1446]=0;c[1447]=8;c[1448]=23;c[1449]=192;c[1450]=8;c[1451]=0;c[1452]=83;c[1453]=7;c[1454]=51;c[1455]=0;c[1456]=8;c[1457]=119;c[1458]=0;c[1459]=8;c[1460]=55;c[1461]=0;c[1462]=9;c[1463]=207;c[1464]=81;c[1465]=7;c[1466]=15;c[1467]=0;c[1468]=8;c[1469]
=103;c[1470]=0;c[1471]=8;c[1472]=39;c[1473]=0;c[1474]=9;c[1475]=175;c[1476]=0;c[1477]=8;c[1478]=7;c[1479]=0;c[1480]=8;c[1481]=135;c[1482]=0;c[1483]=8;c[1484]=71;c[1485]=0;c[1486]=9;c[1487]=239;c[1488]=80;c[1489]=7;c[1490]=9;c[1491]=0;c[1492]=8;c[1493]=95;c[1494]=0;c[1495]=8;c[1496]=31;c[1497]=0;c[1498]=9;c[1499]=159;c[1500]=84;c[1501]=7;c[1502]=99;c[1503]=0;c[1504]=8;c[1505]=127;c[1506]=0;c[1507]=8;c[1508]=63;c[1509]=0;c[1510]=9;c[1511]=223;c[1512]=82;c[1513]=7;c[1514]=27;c[1515]=0;c[1516]=8;c[1517]=111;c[1518]
=0;c[1519]=8;c[1520]=47;c[1521]=0;c[1522]=9;c[1523]=191;c[1524]=0;c[1525]=8;c[1526]=15;c[1527]=0;c[1528]=8;c[1529]=143;c[1530]=0;c[1531]=8;c[1532]=79;c[1533]=0;c[1534]=9;c[1535]=255;Bgw=b;b=$rt_createIntArray(96);c=b.data;c[0]=80;c[1]=5;c[2]=1;c[3]=87;c[4]=5;c[5]=257;c[6]=83;c[7]=5;c[8]=17;c[9]=91;c[10]=5;c[11]=4097;c[12]=81;c[13]=5;c[14]=5;c[15]=89;c[16]=5;c[17]=1025;c[18]=85;c[19]=5;c[20]=65;c[21]=93;c[22]=5;c[23]=16385;c[24]=80;c[25]=5;c[26]=3;c[27]=88;c[28]=5;c[29]=513;c[30]=84;c[31]=5;c[32]=33;c[33]=92;c[34]
=5;c[35]=8193;c[36]=82;c[37]=5;c[38]=9;c[39]=90;c[40]=5;c[41]=2049;c[42]=86;c[43]=5;c[44]=129;c[45]=192;c[46]=5;c[47]=24577;c[48]=80;c[49]=5;c[50]=2;c[51]=87;c[52]=5;c[53]=385;c[54]=83;c[55]=5;c[56]=25;c[57]=91;c[58]=5;c[59]=6145;c[60]=81;c[61]=5;c[62]=7;c[63]=89;c[64]=5;c[65]=1537;c[66]=85;c[67]=5;c[68]=97;c[69]=93;c[70]=5;c[71]=24577;c[72]=80;c[73]=5;c[74]=4;c[75]=88;c[76]=5;c[77]=769;c[78]=84;c[79]=5;c[80]=49;c[81]=92;c[82]=5;c[83]=12289;c[84]=82;c[85]=5;c[86]=13;c[87]=90;c[88]=5;c[89]=3073;c[90]=86;c[91]
=5;c[92]=193;c[93]=192;c[94]=5;c[95]=24577;Bgx=b;b=$rt_createIntArray(31);c=b.data;c[0]=3;c[1]=4;c[2]=5;c[3]=6;c[4]=7;c[5]=8;c[6]=9;c[7]=10;c[8]=11;c[9]=13;c[10]=15;c[11]=17;c[12]=19;c[13]=23;c[14]=27;c[15]=31;c[16]=35;c[17]=43;c[18]=51;c[19]=59;c[20]=67;c[21]=83;c[22]=99;c[23]=115;c[24]=131;c[25]=163;c[26]=195;c[27]=227;c[28]=258;c[29]=0;c[30]=0;Bgy=b;b=$rt_createIntArray(31);c=b.data;c[0]=0;c[1]=0;c[2]=0;c[3]=0;c[4]=0;c[5]=0;c[6]=0;c[7]=0;c[8]=1;c[9]=1;c[10]=1;c[11]=1;c[12]=2;c[13]=2;c[14]=2;c[15]=2;c[16]
=3;c[17]=3;c[18]=3;c[19]=3;c[20]=4;c[21]=4;c[22]=4;c[23]=4;c[24]=5;c[25]=5;c[26]=5;c[27]=5;c[28]=0;c[29]=112;c[30]=112;Bgz=b;b=$rt_createIntArray(30);c=b.data;c[0]=1;c[1]=2;c[2]=3;c[3]=4;c[4]=5;c[5]=7;c[6]=9;c[7]=13;c[8]=17;c[9]=25;c[10]=33;c[11]=49;c[12]=65;c[13]=97;c[14]=129;c[15]=193;c[16]=257;c[17]=385;c[18]=513;c[19]=769;c[20]=1025;c[21]=1537;c[22]=2049;c[23]=3073;c[24]=4097;c[25]=6145;c[26]=8193;c[27]=12289;c[28]=16385;c[29]=24577;BgA=b;b=$rt_createIntArray(30);c=b.data;c[0]=0;c[1]=0;c[2]=0;c[3]=0;c[4]
=1;c[5]=1;c[6]=2;c[7]=2;c[8]=3;c[9]=3;c[10]=4;c[11]=4;c[12]=5;c[13]=5;c[14]=6;c[15]=6;c[16]=7;c[17]=7;c[18]=8;c[19]=8;c[20]=9;c[21]=9;c[22]=10;c[23]=10;c[24]=11;c[25]=11;c[26]=12;c[27]=12;c[28]=13;c[29]=13;BgB=b;}
function MH(){var a=this;C.call(a);a.e$=0;a.md=0;a.fA=null;a.lv=0;a.mx=0;a.z3=0;a.s9=0;a.rh=0;a.ve=0;a.uX=0;a.zE=null;a.wo=0;a.y9=null;a.ww=0;a.bb=null;a.u=null;}
var BgC=null;function ZL(a,b,c,d,e,f,g){a.e$=0;a.ve=b<<24>>24;a.uX=c<<24>>24;a.zE=d;a.wo=e;a.y9=f;a.ww=g;a.fA=null;}
function AC6(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o;c=a.bb.r;d=a.bb.E;e=a.u.bT;f=a.u.bU;g=a.u.bj;h=g>=a.u.bZ?a.u.cL-g|0:(a.u.bZ-g|0)-1|0;a:{b:while(true){c:{d:{e:{f:{g:{switch(a.e$){case 0:break f;case 2:i=a.s9;while(f<i){if(!d){a.u.bT=e;a.u.bU=f;a.bb.E=d;j=a.bb;j.y=Long_add(j.y,Long_fromInt(c-a.bb.r|0));a.bb.r=c;a.u.bj=g;return B1(a.u,b);}b=0;d=d+(-1)|0;k=a.bb.cl.data;l=c+1|0;e=e|(k[c]&255)<<f;f=f+8|0;c=l;}a.md=a.md+(e&BgC.data[i])|0;e=e>>i;f=f-i|0;a.mx=a.uX;a.fA=a.y9;a.lv=a.ww;a.e$=3;break g;case 4:i=a.s9;while
(f<i){if(!d){a.u.bT=e;a.u.bU=f;a.bb.E=d;j=a.bb;j.y=Long_add(j.y,Long_fromInt(c-a.bb.r|0));a.bb.r=c;a.u.bj=g;return B1(a.u,b);}b=0;d=d+(-1)|0;k=a.bb.cl.data;l=c+1|0;e=e|(k[c]&255)<<f;f=f+8|0;c=l;}a.rh=a.rh+(e&BgC.data[i])|0;e=e>>i;f=f-i|0;a.e$=5;break c;case 6:break d;case 7:if(f>7){f=f+(-8)|0;d=d+1|0;c=c+(-1)|0;}a.u.bj=g;b=B1(a.u,b);g=a.u.bj;if(a.u.bZ!=a.u.bj){a.u.bT=e;a.u.bU=f;a.bb.E=d;j=a.bb;j.y=Long_add(j.y,Long_fromInt(c-a.bb.r|0));a.bb.r=c;a.u.bj=g;return B1(a.u,b);}a.e$=8;break a;case 9:a.u.bT=e;a.u.bU
=f;a.bb.E=d;j=a.bb;j.y=Long_add(j.y,Long_fromInt(c-a.bb.r|0));a.bb.r=c;a.u.bj=g;return B1(a.u,(-3));case 1:break e;case 3:break;case 5:break c;case 8:break a;default:a.u.bT=e;a.u.bU=f;a.bb.E=d;j=a.bb;j.y=Long_add(j.y,Long_fromInt(c-a.bb.r|0));a.bb.r=c;a.u.bj=g;return B1(a.u,(-2));}}l=a.mx;while(f<l){if(!d){a.u.bT=e;a.u.bU=f;a.bb.E=d;j=a.bb;j.y=Long_add(j.y,Long_fromInt(c-a.bb.r|0));a.bb.r=c;a.u.bj=g;return B1(a.u,b);}b=0;d=d+(-1)|0;k=a.bb.cl.data;i=c+1|0;e=e|(k[c]&255)<<f;f=f+8|0;c=i;}m=(a.lv+(e&BgC.data[l])
|0)*3|0;k=a.fA.data;i=m+1|0;e=e>>k[i];f=f-a.fA.data[i]|0;l=a.fA.data[m];if(l&16){a.s9=l&15;a.rh=a.fA.data[m+2|0];a.e$=4;continue b;}if(l&64){a.e$=9;a.bb.ca=B(528);a.u.bT=e;a.u.bU=f;a.bb.E=d;j=a.bb;j.y=Long_add(j.y,Long_fromInt(c-a.bb.r|0));a.bb.r=c;a.u.bj=g;return B1(a.u,(-3));}a.mx=l;a.lv=(m/3|0)+a.fA.data[m+2|0]|0;continue b;}if(h>=258&&d>=10){a.u.bT=e;a.u.bU=f;a.bb.E=d;j=a.bb;j.y=Long_add(j.y,Long_fromInt(c-a.bb.r|0));a.bb.r=c;a.u.bj=g;b=AKs(a,a.ve,a.uX,a.zE,a.wo,a.y9,a.ww,a.u,a.bb);c=a.bb.r;d=a.bb.E;e=a.u.bT;f
=a.u.bU;g=a.u.bj;h=g>=a.u.bZ?a.u.cL-g|0:(a.u.bZ-g|0)-1|0;if(b){a.e$=b!=1?9:7;continue b;}}a.mx=a.ve;a.fA=a.zE;a.lv=a.wo;a.e$=1;}l=a.mx;while(f<l){if(!d)break b;b=0;d=d+(-1)|0;k=a.bb.cl.data;i=c+1|0;e=e|(k[c]&255)<<f;f=f+8|0;c=i;}m=(a.lv+(e&BgC.data[l])|0)*3|0;k=a.fA.data;i=m+1|0;e=e>>>k[i];f=f-a.fA.data[i]|0;n=a.fA.data[m];if(!n){a.z3=a.fA.data[m+2|0];a.e$=6;continue b;}if(n&16){a.s9=n&15;a.md=a.fA.data[m+2|0];a.e$=2;continue b;}if(!(n&64)){a.mx=n;a.lv=(m/3|0)+a.fA.data[m+2|0]|0;continue b;}if(!(n&32)){a.e$
=9;a.bb.ca=B(529);a.u.bT=e;a.u.bU=f;a.bb.E=d;j=a.bb;j.y=Long_add(j.y,Long_fromInt(c-a.bb.r|0));a.bb.r=c;a.u.bj=g;return B1(a.u,(-3));}a.e$=7;continue b;}if(h)i=g;else{if(g!=a.u.cL)i=g;else if(!a.u.bZ)i=g;else{i=0;h=i>=a.u.bZ?a.u.cL-i|0:(a.u.bZ-i|0)-1|0;}if(!h){a.u.bj=i;b=B1(a.u,b);i=a.u.bj;h=i>=a.u.bZ?a.u.cL-i|0:(a.u.bZ-i|0)-1|0;if(i==a.u.cL&&a.u.bZ){i=0;h=i>=a.u.bZ?a.u.cL-i|0:(a.u.bZ-i|0)-1|0;}if(!h){a.u.bT=e;a.u.bU=f;a.bb.E=d;j=a.bb;j.y=Long_add(j.y,Long_fromInt(c-a.bb.r|0));a.bb.r=c;a.u.bj=i;return B1(a.u,
b);}}}b=0;k=a.u.cR.data;g=i+1|0;k[i]=a.z3<<24>>24;h=h+(-1)|0;a.e$=0;continue b;}i=g-a.rh|0;while(i<0){i=i+a.u.cL|0;}while(a.md){if(h)l=g;else{if(g!=a.u.cL)l=g;else if(!a.u.bZ)l=g;else{l=0;h=l>=a.u.bZ?a.u.cL-l|0:(a.u.bZ-l|0)-1|0;}if(!h){a.u.bj=l;b=B1(a.u,b);l=a.u.bj;h=l>=a.u.bZ?a.u.cL-l|0:(a.u.bZ-l|0)-1|0;if(l==a.u.cL&&a.u.bZ){l=0;h=l>=a.u.bZ?a.u.cL-l|0:(a.u.bZ-l|0)-1|0;}if(!h){a.u.bT=e;a.u.bU=f;a.bb.E=d;j=a.bb;j.y=Long_add(j.y,Long_fromInt(c-a.bb.r|0));a.bb.r=c;a.u.bj=l;return B1(a.u,b);}}}o=a.u.cR.data;g=l
+1|0;k=a.u.cR.data;m=i+1|0;o[l]=k[i];h=h+(-1)|0;i=m==a.u.cL?0:m;a.md=a.md-1|0;}a.e$=0;}a.u.bT=e;a.u.bU=f;a.bb.E=d;j=a.bb;j.y=Long_add(j.y,Long_fromInt(c-a.bb.r|0));a.bb.r=c;a.u.bj=g;return B1(a.u,b);}a.u.bT=e;a.u.bU=f;a.bb.E=d;j=a.bb;j.y=Long_add(j.y,Long_fromInt(c-a.bb.r|0));a.bb.r=c;a.u.bj=g;return B1(a.u,1);}
function ACG(a,b){return;}
function AKs(a,b,c,d,e,f,g,h,i){var j,k,l,m,n,o,p,q,r,s,t,u,v,w,x;j=i.r;k=i.E;l=h.bT;m=h.bU;n=h.bj;o=n>=h.bZ?h.cL-n|0:(h.bZ-n|0)-1|0;p=BgC.data[b];q=BgC.data[c];while(true){if(m<20){k=k+(-1)|0;r=i.cl.data;b=j+1|0;l=l|(r[j]&255)<<m;m=m+8|0;j=b;continue;}a:{s=d.data;t=l&p;u=(e+t|0)*3|0;c=s[u];if(!c){b=u+1|0;l=l>>s[b];m=m-s[b]|0;r=h.cR.data;c=n+1|0;r[n]=s[u+2|0]<<24>>24;o=o+(-1)|0;}else{while(true){b=u+1|0;l=l>>s[b];m=m-s[b]|0;if(c&16){b=c&15;v=s[u+2|0]+(l&BgC.data[b])|0;w=l>>b;m=m-b|0;while(m<15){k=k+(-1)|0;r
=i.cl.data;b=j+1|0;w=w|(r[j]&255)<<m;m=m+8|0;j=b;}r=f.data;b=w&q;x=(g+b|0)*3|0;c=r[x];while(true){l=x+1|0;w=w>>r[l];m=m-r[l]|0;if(c&16)break;if(c&64){i.ca=B(528);b=i.E-k|0;c=m>>3;if(c<b)b=c;c=k+b|0;e=j-b|0;b=m-(b<<3)|0;h.bT=w;h.bU=b;i.E=c;i.y=Long_add(i.y,Long_fromInt(e-i.r|0));i.r=e;h.bj=n;return (-3);}b=(b+r[x+2|0]|0)+(w&BgC.data[c])|0;x=(g+b|0)*3|0;c=r[x];}b=c&15;while(m<b){k=k+(-1)|0;s=i.cl.data;c=j+1|0;w=w|(s[j]&255)<<m;m=m+8|0;j=c;}x=r[x+2|0]+(w&BgC.data[b])|0;l=w>>b;m=m-b|0;o=o-v|0;if(n>=x){w=n-x|0;b
=n-w|0;if(b>0&&2>b){s=h.cR.data;b=n+1|0;r=h.cR.data;c=w+1|0;s[n]=r[w];s=h.cR.data;n=b+1|0;r=h.cR.data;w=c+1|0;s[b]=r[c];v=v+(-2)|0;}else{CT(h.cR,w,h.cR,n,2);n=n+2|0;w=w+2|0;v=v+(-2)|0;}}else{w=n-x|0;while(true){w=w+h.cL|0;if(w>=0)break;}b=h.cL-w|0;if(v>b){v=v-b|0;c=n-w|0;if(c>0&&b>c){c=n;while(true){s=h.cR.data;n=c+1|0;r=h.cR.data;x=w+1|0;s[c]=r[w];b=b+(-1)|0;if(!b)break;c=n;w=x;}}else{CT(h.cR,w,h.cR,n,b);n=n+b|0;}w=0;}}b=n-w|0;if(b>0&&v>b){while(true){s=h.cR.data;c=n+1|0;r=h.cR.data;b=w+1|0;s[n]=r[w];v=v+(-1)
|0;if(!v)break;n=c;w=b;}break a;}CT(h.cR,w,h.cR,n,v);c=n+v|0;break a;}if(c&64){if(c&32){v=i.E-k|0;b=m>>3;if(b<v)v=b;b=k+v|0;c=j-v|0;e=m-(v<<3)|0;h.bT=l;h.bU=e;i.E=b;i.y=Long_add(i.y,Long_fromInt(c-i.r|0));i.r=c;h.bj=n;return 1;}i.ca=B(529);v=i.E-k|0;b=m>>3;if(b<v)v=b;e=k+v|0;b=j-v|0;c=m-(v<<3)|0;h.bT=l;h.bU=c;i.E=e;i.y=Long_add(i.y,Long_fromInt(b-i.r|0));i.r=b;h.bj=n;return (-3);}t=(t+s[u+2|0]|0)+(l&BgC.data[c])|0;u=(e+t|0)*3|0;c=s[u];if(!c)break;}b=u+1|0;l=l>>s[b];m=m-s[b]|0;r=h.cR.data;c=n+1|0;r[n]=s[u+2|
0]<<24>>24;o=o+(-1)|0;}}if(o<258)break;if(k<10)break;n=c;}v=i.E-k|0;b=m>>3;if(b<v)v=b;b=k+v|0;e=j-v|0;g=m-(v<<3)|0;h.bT=l;h.bU=g;i.E=b;i.y=Long_add(i.y,Long_fromInt(e-i.r|0));i.r=e;h.bj=c;return 0;}
function ADa(){var b,c;b=$rt_createIntArray(17);c=b.data;c[0]=0;c[1]=1;c[2]=3;c[3]=7;c[4]=15;c[5]=31;c[6]=63;c[7]=127;c[8]=255;c[9]=511;c[10]=1023;c[11]=2047;c[12]=4095;c[13]=8191;c[14]=16383;c[15]=32767;c[16]=65535;BgC=b;}
function AG2(){C.call(this);this.Q=null;}
function AVZ(a){var b=new AG2();APD(b,a);return b;}
function APD(a,b){a.Q=b;}
function X0(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be;b=((((K(K(a.Q.o,a.Q.t),a.Q.bu)*20|0)/64|0)/64|0)/64|0)/2|0;if(!a.Q.c1)b=0;if(a.Q.c1==1)b=(b*3|0)/4|0;if(a.Q.c1==2)b=(b<<2)/4|0;if(a.Q.c1==3)b=(b*6|0)/4|0;c=K(a.Q.o,a.Q.t)/4000|0;d=Yv(a.Q,D(DP));e=0;while(e<4){if(d<b){f=a.Q.cU;g=0;h=W(a.Q.bo,5);i=W(a.Q.bo,a.Q.o);j=A6U(N(a.Q.bo),N(a.Q.bo))*a.Q.bu|0;k=W(a.Q.bo,a.Q.t);l=0;m=Bw(h,1);n=Bw(h,2);o=Bw(h,3);while(l<2){p=0;q=i;r=j;s=k;while(p<3){a:{q=q+(W(a.Q.bo,6)-W(a.Q.bo,6)|0)|0;r=r
+(W(a.Q.bo,1)-W(a.Q.bo,1)|0)|0;s=s+(W(a.Q.bo,6)-W(a.Q.bo,6)|0)|0;if(q<0)break a;if(s<=0)break a;if(r<0)break a;if(r>=(a.Q.bu-2|0))break a;if(q>=a.Q.o)break a;if(s>=a.Q.t)break a;b:{t=q+0.5;u=r+0.5;v=s+0.5;if(f!==null){w=t-f.f;x=u-f.j;y=v-f.g;if(w*w+x*x+y*y>=1024.0)break b;break a;}w=t-a.Q.g4;x=u-a.Q.gY;y=v-a.Q.hv;if(w*w+x*x+y*y<1024.0)break a;}z=null;if(!h)z=AXk(a.Q);if(!m)z=A4M(a.Q);if(!n)z=ASd(a.Q);if(!o)z=AYa(a.Q);if(z instanceof DP&&!a.Q.c1)z=null;if(z===null)break a;if(BM(a.Q,q,r,s))break a;if(!BM(a.Q,
q,r-1|0,s))break a;ba=z;if(!AM1(ba,t,u,v))break a;Jy(ba,t,u,v,N(a.Q.bo)*360.0,0.0);g=g+1|0;De(a.Q,z);}p=p+1|0;}l=l+1|0;}d=d+g|0;}e=e+1|0;}g=Yv(a.Q,D(He));h=0;while(h<4){if(g<c){ba=a.Q.cU;bb=0;bc=W(a.Q.bo,2);i=W(a.Q.bo,a.Q.o);s=W(a.Q.bo,a.Q.bu);m=W(a.Q.bo,a.Q.t);n=0;r=Bw(bc,1);while(n<2){p=0;d=i;e=s;j=m;while(p<3){c:{d=d+(W(a.Q.bo,6)-W(a.Q.bo,6)|0)|0;e=e+(W(a.Q.bo,1)-W(a.Q.bo,1)|0)|0;j=j+(W(a.Q.bo,6)-W(a.Q.bo,6)|0)|0;if(d<0)break c;if(j<=0)break c;if(e<0)break c;if(e>=(a.Q.bu-2|0))break c;if(d>=a.Q.o)break c;if
(j>=a.Q.t)break c;d:{bd=d+0.5;be=e+0.5;v=j+0.5;if(ba!==null){w=bd-ba.f;x=be-ba.j;y=v-ba.g;if(w*w+x*x+y*y>=1024.0)break d;break c;}w=bd-a.Q.g4;x=be-a.Q.gY;y=v-a.Q.hv;if(w*w+x*x+y*y<1024.0)break c;}z=null;if(!bc)z=A79(a.Q);if(!r)z=AXo(a.Q);if(z===null)break c;if(BM(a.Q,d,e,j))break c;if(!BM(a.Q,d,e-1|0,j))break c;f=z;if(!AKZ(f,bd,be,v))break c;Jy(f,bd,be,v,N(a.Q.bo)*360.0,0.0);bb=bb+1|0;De(a.Q,z);}p=p+1|0;}n=n+1|0;}g=g+bb|0;}h=h+1|0;}}
function JN(){var a=this;C.call(a);a.Al=null;a.DD=0;a.FE=0;a.CV=0;}
function A3M(a){return;}
function PM(){var a=this;C.call(a);a.G8=0.0;a.bg=0.0;a.bc=0.0;a.bf=0.0;a.bv=0.0;a.bs=0.0;a.bw=0.0;}
function GL(a,b,c,d,e,f){var g=new PM();Ra(g,a,b,c,d,e,f);return g;}
function Ra(a,b,c,d,e,f,g){a.G8=0.0;a.bg=b;a.bc=c;a.bf=d;a.bv=e;a.bs=f;a.bw=g;}
function K3(a,b,c,d){var e,f,g,h,i,j,k;e=a.bg;f=a.bc;g=a.bf;h=a.bv;i=a.bs;j=a.bw;k=Bw(b,0.0);if(k<0)e=e+b;if(k>0)h=h+b;k=Bw(c,0.0);if(k<0)f=f+c;if(k>0)i=i+c;k=Bw(d,0.0);if(k<0)g=g+d;if(k>0)j=j+d;return GL(e,f,g,h,i,j);}
function FK(a,b,c,d){var e;if(a.bc>a.bs){e=new BB;Bd(e,B(530));J(e);}return GL(a.bg-b,a.bc-c,a.bf-d,b+a.bv,c+a.bs,d+a.bw);}
function TQ(a,b,c){var d,e;if(b.bs>a.bc&&b.bc<a.bs){if(b.bw>a.bf&&b.bf<a.bw){if(c<=0.0)d=c;else if(b.bv>a.bg)d=c;else{d=a.bg-b.bv;if(d>=c)d=c;}if(d>=0.0)e=d;else if(b.bg<a.bv)e=d;else{e=a.bv-b.bg;if(e<=d)e=d;}return e;}return c;}return c;}
function S9(a,b,c){var d,e;if(b.bv>a.bg&&b.bg<a.bv){if(b.bw>a.bf&&b.bf<a.bw){if(c<=0.0)d=c;else if(b.bs>a.bc)d=c;else{d=a.bc-b.bs;if(d>=c)d=c;}if(d>=0.0)e=d;else if(b.bc<a.bs)e=d;else{e=a.bs-b.bc;if(e<=d)e=d;}return e;}return c;}return c;}
function T_(a,b,c){var d,e;if(b.bv>a.bg&&b.bg<a.bv){if(b.bs>a.bc&&b.bc<a.bs){if(c<=0.0)d=c;else if(b.bw>a.bf)d=c;else{d=a.bf-b.bw;if(d>=c)d=c;}if(d>=0.0)e=d;else if(b.bf<a.bw)e=d;else{e=a.bw-b.bf;if(e<=d)e=d;}return e;}return c;}return c;}
function Y_(a,b){return b.bv>=a.bg&&b.bg<=a.bv?(b.bs>=a.bc&&b.bc<=a.bs?(b.bw>=a.bf&&b.bf<=a.bw?1:0):0):0;}
function GO(a,b,c,d){a.bg=a.bg+b;a.bc=a.bc+c;a.bf=a.bf+d;a.bv=a.bv+b;a.bs=a.bs+c;a.bw=a.bw+d;}
function LS(a){return GL(a.bg,a.bc,a.bf,a.bv,a.bs,a.bw);}
function Qg(a,b,c){var d,e,f,g,h,i,j;d=Ks(b,c,a.bg);e=Ks(b,c,a.bv);f=Kw(b,c,a.bc);g=Kw(b,c,a.bs);h=Kf(b,c,a.bf);c=Kf(b,c,a.bw);if(!RB(a,d))d=null;if(!RB(a,e))e=null;if(!WU(a,f))f=null;if(!WU(a,g))g=null;if(!V$(a,h))h=null;if(!V$(a,c))c=null;i=null;if(d!==null)i=d;if(e!==null&&!(i!==null&&EY(b,e)>=EY(b,i)))i=e;if(f!==null&&!(i!==null&&EY(b,f)>=EY(b,i)))i=f;if(g!==null&&!(i!==null&&EY(b,g)>=EY(b,i)))i=g;if(h!==null&&!(i!==null&&EY(b,h)>=EY(b,i)))i=h;if(c!==null&&!(i!==null&&EY(b,c)>=EY(b,i)))i=c;if(i===null)return null;j
=(-1);if(i===d)j=4;if(i===e)j=5;if(i===f)j=0;if(i===g)j=1;if(i===h)j=2;if(i===c)j=3;return A5Q(0,0,0,j,i);}
function RB(a,b){return b===null?0:b.R>=a.bc&&b.R<=a.bs&&b.S>=a.bf&&b.S<=a.bw?1:0;}
function WU(a,b){return b===null?0:b.U>=a.bg&&b.U<=a.bv&&b.S>=a.bf&&b.S<=a.bw?1:0;}
function V$(a,b){return b===null?0:b.U>=a.bg&&b.U<=a.bv&&b.R>=a.bc&&b.R<=a.bs?1:0;}
function U$(){var a=this;C.call(a);a.Dg=null;a.Df=null;}
function AH1(a){var b,c;b=a.Dg;c=a.Df;FU(b);CY(c,null);}
function Ir(){BA.call(this);}
function ACO(){C.call(this);}
function A8g(a,b){return a.IX(b);}
function AQH(a){return a.Kc();}
function Vs(){C.call(this);this.A5=null;}
function AMe(a){CY(a.A5,QL(1));}
function A8e(a){AMe(a);}
function WH(){C.call(this);this.Dh=null;}
function ABD(a){CY(a.Dh,QL(0));}
function A4x(a){ABD(a);}
function Fl(){Fc.call(this);}
var BgD=null;var BaU=null;var BgE=null;var BgF=null;function AFx(){var b,c,d;b=new Fl;FJ(b,B(531),0);BgD=b;b=new Fl;FJ(b,B(532),1);BaU=b;b=new Fl;FJ(b,B(533),2);BgE=b;c=H(Fl,3);d=c.data;d[0]=BgD;d[1]=BaU;d[2]=BgE;BgF=c;}
function Vu(){var a=this;C.call(a);a.Fl=null;a.yh=null;}
function AMD(a){CY(a.Fl,a.yh.result===null?BgE:!(ADu(a.yh.result)?1:0)?BgD:BaU);}
function A3s(a){AMD(a);}
function Vt(){C.call(this);this.Bw=null;}
function AKQ(a){CY(a.Bw,BgE);}
function A09(a){AKQ(a);}
function G0(){BT.call(this);}
function GH(){BA.call(this);}
function AN0(){EF.call(this);}
function A1$(a,b){var c=new AN0();ARt(c,a,b);return c;}
function ARt(a,b,c){a.rP=1;a.sn=1;a.vW=b;a.jL=c;}
function P2(){var a=this;C.call(a);a.sC=0;a.tx=0;a.rm=0;a.Aw=0;a.sO=0;}
function Gn(){var a=this;DD.call(a);a.jN=null;a.EJ=0;a.iV=0;a.iZ=0;a.lD=0;a.ro=0.0;}
function Sz(a,b,c,d,e){var f=new Gn();K1(f,a,b,c,d,e);return f;}
function K1(a,b,c,d,e,f){GQ(a,b);a.iV=0;a.lD=5;a.ro=Cc()*3.141592653589793*2.0;DC(a,0.25,0.25);a.dO=a.gA/2.0;D0(a,c,d,e);a.jN=f;a.I=Cc()*360.0;a.G=Cc()*0.20000000298023224-0.10000000149011612;a.C=0.20000000298023224;a.H=Cc()*0.20000000298023224-0.10000000149011612;a.pi=0;}
function A1v(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p;N2(a);if(a.iZ>0)a.iZ=a.iZ-1|0;a.cs=a.f;a.cx=a.j;a.ct=a.g;a.C=a.C-0.03999999910593033;if(CR(a.A,a.f|0,a.j|0,a.g|0)===Bdb){a.C=0.20000000298023224;a.G=(N(a.N)-N(a.N))*0.20000000298023224;a.H=(N(a.N)-N(a.N))*0.20000000298023224;}b=a.g;c=a.j;d=a.f;e=d|0;f=c|0;g=b|0;d=d-e;c=c-f;h=b-g;L();if(BdU.data[O(a.A,e,f,g)]){i=BdU.data[O(a.A,e-1|0,f,g)]?0:1;j=BdU.data[O(a.A,e+1|0,f,g)]?0:1;k=BdU.data[O(a.A,e,f-1|0,g)]?0:1;l=BdU.data[O(a.A,e,f+1|0,g)]?0:1;m=BdU.data[O(a.A,e,
f,g-1|0)]?0:1;n=BdU.data[O(a.A,e,f,g+1|0)]?0:1;o=(-1);p=9999.0;if(i&&d<9999.0){o=0;p=d;}if(!j)b=p;else{b=1.0-d;if(b<p)o=1;else b=p;}if(k&&c<b){o=2;b=c;}if(!l)c=b;else{c=1.0-c;if(c<b)o=3;else c=b;}if(m&&h<c){o=4;c=h;}if(n&&1.0-h<c)o=5;b=N(a.N)*0.20000000298023224+0.10000000149011612;if(!o)a.G= -b;if(o==1)a.G=b;if(o==2)a.C= -b;if(o==3)a.C=b;if(o==4)a.H= -b;if(o==5)a.H=b;}Eq(a,a.G,a.C,a.H);a.G=a.G*0.9800000190734863;a.C=a.C*0.9800000190734863;a.H=a.H*0.9800000190734863;if(a.dE){a.G=a.G*0.699999988079071;a.H=a.H
*0.699999988079071;a.C=a.C*(-0.5);}a.EJ=a.EJ+1|0;a.iV=a.iV+1|0;if(a.iV>=6000)CN(a);}
function A1f(a,b){ABX(a,null,1);}
function ABX(a,b,c){a.lD=a.lD-c|0;if(a.lD<=0)CN(a);return 0;}
function AXP(a,b){CH(b,B(409),a.lD<<24>>24<<16>>16);CH(b,B(534),a.iV<<16>>16);Ka(b,B(503),Ix(a.jN,DG()));}
function A6m(a,b){a.lD=Ck(b,B(409))&255;a.iV=Ck(b,B(534));a.jN=PT(Gw(b,B(503)));}
function A3Q(a){return B(503);}
function AXi(a,b){if(!a.iZ&&XH(b.F,a.jN)){Ui(b,a);CN(a);}}
function QV(){Eu.call(this);this.tR=null;}
function AXK(a){F9(a.cJ,B(492),60,6,4210752);F9(a.cJ,B(317),8,(a.fh-96|0)+2|0,4210752);}
function AAh(a){var b,c,d,e,f,g,h,$p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=a.x.cd;c=B(535);$p=1;case 1:$z=AB2(b,c);if(I()){break _;}d=$z;BJ(1.0,1.0,1.0,1.0);EO(d);e=(a.bq-a.e8|0)/2|0;f=(a.bM-a.fh|0)/2|0;CD(a,e,f,0,0,a.e8,a.fh);if(Tq(a.tR)){g=AA6(a.tR,12);CD(a,e+56|0,((f+36|0)+12|0)-g|0,176,12-g|0,14,g+2|0);}h=AIw(a.tR,24);CD(a,e+79|0,f+34|0,176,14,h+1|0,16);return;default:F2();}}Dh().s(a,b,c,d,e,f,g,h,
$p);}
function Ul(){var a=this;Eu.call(a);a.pg=null;a.wi=null;}
function A1S(a){var b,c;YZ(a);b=0;while(b<9){c=IW(a.pg,b);if(c!==null)J9(a.x.a,c);b=b+1|0;}}
function AO6(a){var b,c,d,e,f,g;b=$rt_createIntArray(9);c=b.data;d=0;while(d<3){e=0;while(e<3){f=d+(e*3|0)|0;g=IW(a.pg,f);if(g!==null)c[f]=g.bX;else c[f]=(-1);e=e+1|0;}d=d+1|0;}Sm(a.wi,0,Vh(Xh(),b));}
function AUS(a){F9(a.cJ,B(418),28,6,4210752);F9(a.cJ,B(317),8,(a.fh-96|0)+2|0,4210752);}
function AKa(a){var b,c,d,$p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=a.x.cd;c=B(536);$p=1;case 1:$z=AB2(b,c);if(I()){break _;}d=$z;BJ(1.0,1.0,1.0,1.0);EO(d);CD(a,(a.bq-a.e8|0)/2|0,(a.bM-a.fh|0)/2|0,0,0,a.e8,a.fh);return;default:F2();}}Dh().s(a,b,c,d,$p);}
function AF3(){var a=this;Eu.call(a);a.KA=null;a.A8=null;a.lu=0;}
function A$K(a,b){var c=new AF3();AX0(c,a,b);return c;}
function AX0(a,b,c){var d,e,f,g;J7(a);a.lu=0;a.KA=b;a.A8=c;a.n6=0;a.lu=c.gS()/9|0;a.fh=114+(a.lu*18|0)|0;d=(a.lu-4|0)*18|0;e=0;while(e<a.lu){f=0;while(f<9){M(a.cX,En(a,c,f+(e*9|0)|0,8+(f*18|0)|0,18+(e*18|0)|0));f=f+1|0;}e=e+1|0;}f=0;while(f<3){g=0;while(g<9){M(a.cX,En(a,b,g+((f+1|0)*9|0)|0,8+(g*18|0)|0,(103+(f*18|0)|0)+d|0));g=g+1|0;}f=f+1|0;}e=0;f=d+161|0;while(e<9){M(a.cX,En(a,b,e,8+(e*18|0)|0,f));e=e+1|0;}}
function A1w(a){F9(a.cJ,a.A8.xD(),8,6,4210752);F9(a.cJ,B(317),8,(a.fh-96|0)+2|0,4210752);}
function ADK(a){var b,c,d,e,f,$p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=a.x.cd;c=B(537);$p=1;case 1:$z=AB2(b,c);if(I()){break _;}d=$z;BJ(1.0,1.0,1.0,1.0);EO(d);e=(a.bq-a.e8|0)/2|0;f=(a.bM-a.fh|0)/2|0;CD(a,e,f,0,0,a.e8,(a.lu*18|0)+17|0);CD(a,e,(f+(a.lu*18|0)|0)+17|0,0,126,a.e8,96);return;default:F2();}}Dh().s(a,b,c,d,e,f,$p);}
function G5(){var a=this;C.call(a);a.mr=0;a.BR=0;a.l2=null;a.jG=null;a.D$=null;a.qi=null;}
function BgG(a){var b=new G5();OT(b,a);return b;}
function OT(a,b){a.qi=b;a.BR=b.fM;a.l2=null;}
function La(a){if(a.l2!==null)return 1;while(a.mr<a.qi.cP.data.length){if(a.qi.cP.data[a.mr]!==null)return 1;a.mr=a.mr+1|0;}return 0;}
function AI4(a){var b;if(a.BR==a.qi.fM)return;b=new JW;Z(b);J(b);}
function Pf(a){var b,c,d;AI4(a);if(!La(a)){b=new Jl;Z(b);J(b);}if(a.l2===null){c=a.qi.cP.data;d=a.mr;a.mr=d+1|0;a.jG=c[d];a.l2=a.jG.gg;a.D$=null;}else{if(a.jG!==null)a.D$=a.jG;a.jG=a.l2;a.l2=a.l2.gg;}}
function Xs(){G5.call(this);}
function T9(a){Pf(a);return a.jG.fq;}
function JT(){var a=this;JC.call(a);a.eg=null;a.Bj=0;a.d6=0;}
function BgH(a,b,c,d,e,f){var g=new JT();Qd(g,a,b,c,d,e,f);return g;}
function Qd(a,b,c,d,e,f,g){Wv(a,c,e,f);a.d6=b;a.eg=d;a.Bj=g;}
function ATW(a){return a.Bj;}
function QM(){JT.call(this);}
function ASi(a,b){var c,d;c=a.eg.cV.data;d=a.d6;b=b*4|0;return c[d+b|0]&255|(a.eg.cV.data[(a.d6+b|0)+1|0]&255)<<8|(a.eg.cV.data[(a.d6+b|0)+2|0]&255)<<16|(a.eg.cV.data[(a.d6+b|0)+3|0]&255)<<24;}
function AOT(a,b,c){var d,e;d=a.eg.cV.data;e=a.d6;b=b*4|0;d[e+b|0]=c<<24>>24;a.eg.cV.data[(a.d6+b|0)+1|0]=c>>8<<24>>24;a.eg.cV.data[(a.d6+b|0)+2|0]=c>>16<<24>>24;a.eg.cV.data[(a.d6+b|0)+3|0]=c>>24<<24>>24;}
function X7(){JT.call(this);}
function AW6(a,b){var c,d;c=a.eg.cV.data;d=a.d6;b=b*4|0;return (c[d+b|0]&255)<<24|(a.eg.cV.data[(a.d6+b|0)+1|0]&255)<<16|(a.eg.cV.data[(a.d6+b|0)+2|0]&255)<<8|a.eg.cV.data[(a.d6+b|0)+3|0]&255;}
function APR(a,b,c){var d,e;d=a.eg.cV.data;e=a.d6;b=b*4|0;d[e+b|0]=c>>24<<24>>24;a.eg.cV.data[(a.d6+b|0)+1|0]=c>>16<<24>>24;a.eg.cV.data[(a.d6+b|0)+2|0]=c>>8<<24>>24;a.eg.cV.data[(a.d6+b|0)+3|0]=c<<24>>24;}
function Tj(){var a=this;C.call(a);a.m7=0;a.su=0;a.st=0;a.qk=0;a.ts=0;a.tt=0;}
function Ol(a,b,c,d,e,f,g){var h=new Tj();ANy(h,a,b,c,d,e,f,g);return h;}
function ANy(a,b,c,d,e,f,g,h){a.m7=c;a.su=d;a.st=e;a.qk=f;a.ts=g;a.tt=h;}
function Z5(){var a=this;C.call(a);a.dI=null;a.sG=null;a.m9=null;a.qO=0.0;a.E1=0.0;a.EZ=0.0;a.E0=0.0;}
var BdI=null;function A9y(){var a=new Z5();AIz(a);return a;}
function AIz(a){var b,c,d,e,f;a.dI=CZ();b=a.dI;c=new Zm;F6(c,AOW(),1.0);c.k8=AOW();BI(b,D(TM),c);d=a.dI;e=new DV;b=new Qu;Px(b,6,0.0);F6(e,b,0.699999988079071);BI(d,D(ZZ),e);b=a.dI;c=new YD;e=new WS;Px(e,12,0.0);e.gn=BK(0,0);BH(e.gn,(-3.0),(-4.0),(-6.0),6,6,8,0.0);BG(e.gn,0.0,6.0,(-8.0));e.hD=BK(28,8);BH(e.hD,(-4.0),(-10.0),(-7.0),8,16,6,0.0);BG(e.hD,0.0,5.0,2.0);f=A$_();F6(c,e,0.699999988079071);c.k8=f;BI(b,D(P8),c);b=a.dI;c=new ZO;F6(c,A95(),0.5);BI(b,D(Wh),c);b=a.dI;e=new DV;f=new UR;KF(f);f.dS=BK(40,16);BH(f.dS,
(-1.0),(-2.0),(-1.0),2,12,2,0.0);BG(f.dS,(-5.0),2.0,0.0);f.dH=BK(40,16);f.dH.lX=1;BH(f.dH,(-1.0),(-2.0),(-1.0),2,12,2,0.0);BG(f.dH,5.0,2.0,0.0);f.iL=BK(0,16);BH(f.iL,(-1.0),0.0,(-1.0),2,12,2,0.0);BG(f.iL,(-2.0),12.0,0.0);f.g$=BK(0,16);f.g$.lX=1;BH(f.g$,(-1.0),0.0,(-1.0),2,12,2,0.0);BG(f.g$,2.0,12.0,0.0);F6(e,f,0.5);BI(b,D(X_),e);b=a.dI;c=new DV;e=new Jv;KF(e);F6(c,e,0.5);BI(b,D(SN),c);b=a.dI;c=new OV;F6(c,AMY(0.0),0.5);c.AZ=c.kf;c.Eu=AMY(1.0);c.BO=AMY(0.5);BI(b,D(Hk),c);b=a.dI;c=new YP;e=new Jv;KF(e);F6(c,e,
3.0);c.r3=6.0;BI(b,D(PR),c);BI(a.dI,D(F8),A$U(A90(),0.5));b=a.dI;c=new SA;Ia(c);BI(b,D(DD),c);b=a.dI;c=new SQ;Ia(c);c.GY=new Dd;BI(b,D(PQ),c);b=a.dI;c=new Vc;Ia(c);BI(b,D(MY),c);BI(a.dI,D(Gn),AM0());b=a.dI;c=new Up;Ia(c);c.xL=AAq();c.nY=0.5;BI(b,D(Ws),c);b=WY(Xe(a.dI));while(La(b)){T9(b).hI=a;}}
function Qz(a,b){var c,d;c=B5(b);d=Co(a.dI,c);if(d===null&&c!==D(DD)){d=Co(a.dI,Nl(c));BI(a.dI,c,d);}return d;}
function AGE(a,b,c,d,e){a.m9=b;a.sG=c;a.qO=d.bN+(d.I-d.bN)*e;a.E1=d.eb+(d.f-d.eb)*e;a.EZ=d.ea+(d.j-d.ea)*e;a.E0=d.d_+(d.g-d.d_)*e;}
function AAa(a,b,c){var d,e,f,g,h,$p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=b.eb+(b.f-b.eb)*c;e=b.ea+(b.j-b.ea)*c;f=b.d_+(b.g-b.d_)*c;g=b.bN+(b.I-b.bN)*c;h=DT(a.m9,d|0,e+b.v_()|0,f|0);Mg(h,h,h);$p=1;case 1:AF6(a,b,d,e,f,g,c);if(I()){break _;}return;default:F2();}}Dh().s(a,b,c,d,e,f,g,h,$p);}
function AF6(a,b,c,d,e,f,g){var h,$p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:h=Qz(a,b);if(h===null)return;$p=1;case 1:h.kW(b,c,d,e,f,g);if(I()){break _;}$p=2;case 2:AK7(h,b,c,d,e,f,g);if(I()){break _;}return;default:F2();}}Dh().s(a,b,c,d,e,f,g,h,$p);}
function AQs(a,b){a.m9=b;}
function AAK(a,b,c,d){b=b-a.E1;c=c-a.EZ;d=d-a.E0;return b*b+c*c+d*d;}
function AEc(){BdI=A9y();}
function Rp(){Dn.call(this);this.Dw=null;}
function AT$(a){var b;b=new XX;OT(b,a.Dw);return b;}
function WO(){}
function AD9(){var a=this;C.call(a);a.fK=null;a.iE=null;a.kX=null;a.qo=0;a.rC=0;a.ii=null;}
function A0L(a,b,c,d){var e=new AD9();AQv(e,a,b,c,d);return e;}
function AQv(a,b,c,d,e){a.ii=b;a.rC=a.ii.d2;a.fK=c;a.iE=d;a.qo=e;}
function ADD(a){return a.fK===null?0:1;}
function ABg(a){var b;TC(a);if(a.fK===null){b=new Jl;Z(b);J(b);}b=a.fK.Ai;a.kX=a.fK;a.iE=a.fK;a.fK=a.fK.hc;a.qo=a.qo+1|0;return b;}
function AGR(a){var b,c;if(a.kX===null){b=new DE;Z(b);J(b);}b=a.ii;c=a.kX;if(c.iD===null)b.s4=c.hc;else c.iD.hc=c.hc;if(c.hc===null)b.qI=c.iD;else c.hc.iD=c.iD;b.jc=b.jc-1|0;b.d2=b.d2+1|0;if(a.kX===a.iE){a.iE=!ADD(a)?null:a.fK.iD;a.qo=a.qo-1|0;}else if(a.kX===a.fK)a.fK=!ABM(a)?null:a.iE.hc;a.rC=a.ii.d2;a.kX=null;}
function ABM(a){return a.iE===null?0:1;}
function AC3(a,b){var c;TC(a);c=new TR;c.Ai=b;c.iD=a.iE;c.hc=a.fK;if(a.iE!==null)a.iE.hc=c;else a.ii.s4=c;if(a.fK!==null)a.fK.iD=c;else a.ii.qI=c;a.iE=c;b=a.ii;b.jc=b.jc+1|0;b=a.ii;b.d2=b.d2+1|0;a.rC=a.ii.d2;a.kX=null;}
function TC(a){var b;if(a.rC>=a.ii.d2)return;b=new JW;Z(b);J(b);}
function TR(){var a=this;C.call(a);a.Ai=null;a.hc=null;a.iD=null;}
function Vk(){C.call(this);this.zk=null;}
function ARR(a,b,c){var d,e,f,g;d=b;e=c;f=d.gz;g=e.gz;return f&&!g?1:!(g&&!f)&&IP(d,a.zk)<IP(e,a.zk)?1:(-1);}
function Im(){C.call(this);}
var BgI=null;var BgJ=null;var BgK=null;var BgL=null;var BgM=null;function TK(b,c){var d,e,f;if(c===null)c=BgL;d=H(C,b.q);HW(b,d);ACu(d,c);e=0;while(true){f=d.data;if(e>=f.length)break;M6(b,e,f[e]);e=e+1|0;}}
function AK$(){BgI=new Uf;BgJ=new Ud;BgK=new Ug;BgL=new Y$;BgM=new Y8;}
function R3(){C.call(this);this.va=null;}
function AWK(a,b,c){var d,e;d=b;e=c;return IP(d,a.va)>=IP(e,a.va)?1:(-1);}
function Hs(){BT.call(this);}
function Fd(){Hs.call(this);}
function GV(){BT.call(this);}
function G6(){BT.call(this);}
function Np(){C.call(this);this.Jt=0;}
var BgN=null;var BgO=null;function APM(a){var b=new Np();AHU(b,a);return b;}
function AHU(a,b){a.Jt=b;}
function QL(b){return !b?BgO:BgN;}
function ALu(){BgN=APM(1);BgO=APM(0);}
function Pz(){var a=this;C.call(a);a.I$=null;a.C7=0.0;a.G7=0.0;a.lF=null;a.ni=null;a.r0=null;a.h1=0;}
function Zu(a,b){var c;if(b!==null){a.ni=b;return a;}c=new BB;Bd(c,B(538));J(c);}
function A7j(a,b){return;}
function Tt(a,b){var c;if(b!==null){a.r0=b;return a;}c=new BB;Bd(c,B(538));J(c);}
function A2M(a,b){return;}
function Oy(a,b,c,d){var e,f,$$je;if(!(a.h1==2&&!d)&&a.h1!=3){a.h1=d?2:1;while(true){try{e=AGi(a,b,c);}catch($$e){$$je=Bh($$e);if($$je instanceof BT){f=$$je;J(A1o(f));}else{throw $$e;}}if(G9(e))return e;if(Hz(e)){if(d&&DH(b)){if(a.ni===Bc4)return FC(BV(b));if(BV(c)<=Q(a.lF))return Bgi;Dz(b,b.O+BV(b)|0);if(a.ni===Ba4)Ov(c,a.lF);}return e;}if(R0(e)){if(a.ni===Bc4)return e;if(a.ni===Ba4){if(BV(c)<Q(a.lF))return Bgi;Ov(c,a.lF);}Dz(b,b.O+MA(e)|0);}else if(NA(e)){if(a.r0===Bc4)break;if(a.r0===Ba4){if(BV(c)<Q(a.lF))return Bgi;Ov(c,
a.lF);}Dz(b,b.O+MA(e)|0);}}return e;}b=new DE;Z(b);J(b);}
function Sj(a,b){if(a.h1!=3&&a.h1!=2){b=new DE;Z(b);J(b);}a.h1=3;return Bgj;}
function ANS(a){a.h1=0;return a;}
function AIH(a,b){var c,d;if(a.h1&&a.h1!=3){b=new DE;Z(b);J(b);}if(!BV(b))return AGY(0);if(a.h1)ANS(a);c=AGY(Df(8,BV(b)*a.C7|0));while(true){d=Oy(a,b,c,0);if(Hz(d))break;if(G9(d))c=XP(a,c);if(!JI(d))continue;KY(d);}b=Oy(a,b,c,1);if(JI(b))KY(b);while(!Hz(Sj(a,c))){c=XP(a,c);}Ec(c);return c;}
function XP(a,b){var c,d;c=b.mC;d=Tf(QA(c,Df(8,c.data.length*2|0)));Dz(d,b.O);return d;}
function AUQ(a,b){return Bgj;}
function A1R(a){return;}
function AMA(){var a=this;C.call(a);a.g3=0;a.hp=0;a.gW=0;a.f2=null;}
function A67(a){var b=new AMA();A4T(b,a);return b;}
function Gi(a,b,c,d){a.g3=b/8.0|0;a.hp=c/8.0|0;a.gW=d/8.0|0;if(a.g3<0)a.g3=0;if(a.hp<0)a.hp=0;if(a.gW<0)a.gW=0;if(a.g3>=a.f2.ex)a.g3=a.f2.ex-1|0;if(a.hp>=a.f2.eK)a.hp=a.f2.eK-1|0;if(a.gW>=a.f2.h0)a.gW=a.f2.h0-1|0;return a;}
function Sq(a,b){if(a.g3>=0&&a.hp>=0&&a.gW>=0)M(a.f2.lz.data[K(K(a.gW,a.f2.eK)+a.hp|0,a.f2.ex)+a.g3|0],b);}
function Kl(a,b){if(a.g3>=0&&a.hp>=0&&a.gW>=0)GD(a.f2.lz.data[K(K(a.gW,a.f2.eK)+a.hp|0,a.f2.ex)+a.g3|0],b);}
function A4T(a,b){a.f2=b;}
function DV(){var a=this;D_.call(a);a.kf=null;a.k8=null;}
function A$U(a,b){var c=new DV();F6(c,a,b);return c;}
function F6(a,b,c){Ia(a);a.kf=b;a.nY=c;}
function APr(a,b){a.k8=b;}
function AGH(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q,r,$p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:Ca();Bb(2884);h=b.hQ+(b.eL-b.hQ)*g;i=b.bN+(b.I-b.bN)*g;j=b.b1+(b.X-b.b1)*g;Bj(c,d,e);k=b.pS+g;Bs(180.0-h,0.0,1.0,0.0);if(b.dA>0){c=B$((b.dA+g-1.0)/20.0*1.600000023841858);if(c>1.0)c=1.0;Bs(c*a.Ae(b),0.0,0.0,1.0);}C7((-0.0625),
(-0.0625),0.0625);a.v3(b,g);Bj(0.0,(-24.0),0.0);Y(2977);c=b.xr+(b.j9-b.xr)*g;d=b.y3-b.j9*(1.0-g);if(c>1.0)c=1.0;l=b.hx;$p=1;case 1:AHT(a,l);if(I()){break _;}Y(3008);l=a.kf;f=i-h;l.gP(d,c,k,f,j,1.0);m=0;if(m<4){$p=2;continue _;}h=EC(b,g);n=a.wP(b,h,g);m=n>>>24;if(!(m<=0&&b.hk<=0&&b.dA<=0)){Bb(3553);Bb(3008);Y(3042);Dy(770,771);GM(514);if(!(b.hk<=0&&b.dA<=0)){BJ(h,0.0,0.0,0.4000000059604645);a.kf.gP(d,c,k,f,j,1.0);o=0;if(o<4){$p=3;continue _;}}if(m>0){p=(n>>16&255)/255.0;e=(n>>8&255)/255.0;q=(n&255)/255.0;g=m
/255.0;BJ(p,e,q,g);a.kf.gP(d,c,k,f,j,1.0);r=0;if(r<4){$p=4;continue _;}}GM(515);Bb(3042);Y(3008);Y(3553);}Bb(2977);Y(2884);BR();return;case 2:$z=a.my(b,m);if(I()){break _;}n=$z;if(n){a.k8.gP(d,c,k,f,j,1.0);Bb(3042);Y(3008);}m=m+1|0;if(m<4){continue _;}h=EC(b,g);n=a.wP(b,h,g);m=n>>>24;if(!(m<=0&&b.hk<=0&&b.dA<=0)){Bb(3553);Bb(3008);Y(3042);Dy(770,771);GM(514);if(!(b.hk<=0&&b.dA<=0)){BJ(h,0.0,0.0,0.4000000059604645);a.kf.gP(d,c,k,f,j,1.0);o=0;if(o<4){$p=3;continue _;}}if(m>0){p=(n>>16&255)/255.0;e=(n>>8&255)/
255.0;q=(n&255)/255.0;g=m/255.0;BJ(p,e,q,g);a.kf.gP(d,c,k,f,j,1.0);r=0;if(r<4){$p=4;continue _;}}GM(515);Bb(3042);Y(3008);Y(3553);}Bb(2977);Y(2884);BR();return;case 3:$z=a.my(b,o);if(I()){break _;}r=$z;if(r){BJ(h,0.0,0.0,0.4000000059604645);a.k8.gP(d,c,k,f,j,1.0);}o=o+1|0;if(o<4){continue _;}if(m>0){p=(n>>16&255)/255.0;e=(n>>8&255)/255.0;q=(n&255)/255.0;g=m/255.0;BJ(p,e,q,g);a.kf.gP(d,c,k,f,j,1.0);r=0;if(r<4){$p=4;continue _;}}GM(515);Bb(3042);Y(3008);Y(3553);Bb(2977);Y(2884);BR();return;case 4:$z=a.my(b,r);if
(I()){break _;}n=$z;if(n){BJ(p,e,q,g);a.k8.gP(d,c,k,f,j,1.0);}r=r+1|0;if(r>=4){GM(515);Bb(3042);Y(3008);Y(3553);Bb(2977);Y(2884);BR();return;}continue _;default:F2();}}Dh().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,$p);}
function ABq(a,b,c){return 0;}
function AUo(a,b){return 90.0;}
function ASz(a,b,c,d){return 0;}
function A11(a,b,c){return;}
function AHM(a,b,c,d,e,f,g){var $p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=b;$p=1;case 1:a.I4(b,c,d,e,f,g);if(I()){break _;}return;default:F2();}}Dh().s(a,b,c,d,e,f,g,$p);}
function OV(){var a=this;DV.call(a);a.AZ=null;a.Eu=null;a.BO=null;}
var BgP=null;function AL$(a,b,c,d,e,f,g){var $p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:IQ(Bb_,1);d=d-b.dO;$p=1;case 1:AGH(a,b,c,d,e,f,g);if(I()){break _;}IQ(Bb_,0);return;default:F2();}}Dh().s(a,b,c,d,e,f,g,$p);}
function ALf(a){B8(a.AZ.dS,1.0);}
function AEY(a,b,c){var d,e,f,g,h,i,j,$p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=b;e=3-c|0;f=d.F.c$.data[e];if(f!==null){g=BZ(f);if(g instanceof Gm){h=g;b=new S;V(b);b=G(G(G(b,B(539)),BgP.data[h.AL]),B(540));e=Bw(c,2);b=R(G(Bf(b,e?1:2),B(209)));$p=1;continue _;}}return 0;case 1:AHA(a,b);if(I()){break _;}i=e?a.Eu:a.BO;i.i0.jp=c?0:1;i.k2.jp=c?0:1;b=i.qg;j=Bw(c,1);b.jp=j&&e?0:1;i.dS.jp=j?
0:1;i.dH.jp=j?0:1;i.iL.jp=e&&c!=3?0:1;i.g$.jp=e&&c!=3?0:1;a.k8=i;return 1;default:F2();}}Dh().s(a,b,c,d,e,f,g,h,i,j,$p);}
function ALY(a,b,c,d,e,f,g){var $p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=b;$p=1;case 1:AL$(a,b,c,d,e,f,g);if(I()){break _;}return;default:F2();}}Dh().s(a,b,c,d,e,f,g,$p);}
function ADc(a,b,c,d,e,f,g){var $p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=b;$p=1;case 1:AL$(a,b,c,d,e,f,g);if(I()){break _;}return;default:F2();}}Dh().s(a,b,c,d,e,f,g,$p);}
function AM7(){var b,c;b=H(BC,5);c=b.data;c[0]=B(264);c[1]=B(541);c[2]=B(542);c[3]=B(543);c[4]=B(544);BgP=b;}
function Pm(){var a=this;GB.call(a);a.g9=0;a.i2=0;a.h6=0;a.io=0;a.eR=null;a.bC=0;a.fb=0;a.jB=0;}
function CL(a,b,c,d){var e=new Pm();AQz(e,a,b,c,d);return e;}
function BgQ(a,b,c,d,e,f){var g=new Pm();Y1(g,a,b,c,d,e,f);return g;}
function AQz(a,b,c,d,e){Y1(a,b,c,d,200,20,e);}
function Y1(a,b,c,d,e,f,g){JH(a);a.g9=200;a.i2=20;a.fb=1;a.jB=1;a.bC=b;a.h6=c;a.io=d;a.g9=e;a.i2=20;a.eR=g;}
function AEQ(a,b,c,d){var e,f,g,h,i,j,$p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(!a.jB)return;e=b.ji;f=3553;g=b.cd;b=B(371);$p=1;case 1:$z=AB2(g,b);if(I()){break _;}h=$z;Cj(f,h);BJ(1.0,1.0,1.0,1.0);f=1;h=c>=a.h6&&d>=a.io&&c<(a.h6+a.g9|0)&&d<(a.io+a.i2|0)?1:0;if(!a.fb)f=0;else if(h)f=2;i=a.h6;j=a.io;c=46+(f*20|0)|0;CD(a,i,j,0,c,a.g9/2|0,a.i2);CD(a,a.h6+(a.g9/2|0)|0,a.io,200-(a.g9/2|0)|
0,c,a.g9/2|0,a.i2);if(!a.fb)Eh(e,a.eR,a.h6+(a.g9/2|0)|0,a.io+((a.i2-8|0)/2|0)|0,(-6250336));else if(!h)Eh(e,a.eR,a.h6+(a.g9/2|0)|0,a.io+((a.i2-8|0)/2|0)|0,14737632);else Eh(e,a.eR,a.h6+(a.g9/2|0)|0,a.io+((a.i2-8|0)/2|0)|0,16777120);return;default:F2();}}Dh().s(a,b,c,d,e,f,g,h,i,j,$p);}
function RR(a,b,c){return a.fb&&b>=a.h6&&c>=a.io&&b<(a.h6+a.g9|0)&&c<(a.io+a.i2|0)?1:0;}
function Y$(){C.call(this);}
function A0$(a,b,c){return b!==null?b.kQ(c): -c.kQ(b);}
function Y8(){C.call(this);}
function JR(){var a=this;F8.call(a);a.gH=null;a.eI=null;a.qj=0;}
function BgR(a){var b=new JR();O1(b,a);return b;}
function O1(a,b){Rh(a,b);a.qj=0;}
function AHg(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s;a.qj=0;if(a.eI===null){a.eI=a.vb();if(a.eI!==null)a.gH=X3(a.A.rT,a,a.eI,16.0);}else if(!a.eI.Dk())a.eI=null;else{b=a.eI;c=b.f-a.f;d=b.j-a.j;e=b.g-a.g;f=B$(c*c+d*d+e*e);if(E1(a.A,BF(a.f,a.j+ACe(a),a.g),BF(a.eI.f,a.eI.j+a.eI.sa(),a.eI.g))===null)a.pl(a.eI,f);}if(a.qj){a.kS=0.0;a.kv=0.0;a.hP=0;}else{if(a.eI!==null&&!(a.gH!==null&&W(a.N,20)))a.gH=X3(a.A.rT,a,a.eI,16.0);else if(!(a.gH!==null&&W(a.N,100))){g=(-1);h=(-1);i=(-1);j=(-99999.0);k=0;while(k<200){l
=a.f+W(a.N,21)-10.0|0;m=a.j+W(a.N,9)-4.0|0;n=a.g+W(a.N,21)-10.0|0;o=a.s8(l,m,n);if(o>j){j=o;g=l;h=m;i=n;}k=k+1|0;}if(g>0)a.gH=AIk(a.A.rT,a,g,h,i,16.0);}p=Gq(a);q=JD(a);if(a.gH!==null&&W(a.N,100)){r=Wn(a.gH,a);j=a.dK*2.0;j=j*j;a:{while(true){if(r===null)break a;d=a.g;c=a.j;e=a.f-r.U;c=c-r.R;s=d-r.S;if(e*e+c*c+s*s>=j)break a;if(r.R>a.j)break;AJa(a.gH);if(!AJI(a.gH)){r=Wn(a.gH,a);continue;}r=null;a.gH=null;}}a.hP=0;if(r!==null){s=r.U-a.f;e=r.S-a.g;c=r.R-a.j;a.I=GK(e,s)*180.0/3.1415927410125732-90.0;a.kv=a.lO;if
(c>0.0)a.hP=1;}if(N(a.N)<0.800000011920929&&!(!p&&!q))a.hP=1;}else{AFk(a);a.gH=null;}}}
function AQh(a,b,c){return;}
function AVr(a){return null;}
function ZE(a,b,c,d){var e;D0(a,b,c+a.gA/2.0,d);e=AEC(a.A,a.Y)&&!Hv(a.A,a.Y).q&&!SF(a.A,a.Y)?1:0;return e&&a.s8(b|0,c|0,d|0)>=0.0?1:0;}
function DP(){JR.call(this);this.tW=0;}
function BgS(a){var b=new DP();Iz(b,a);return b;}
function Iz(a,b){O1(a,b);a.tW=2;a.b0=20;}
function Yo(a){if(EC(a,1.0)>0.5)a.jj=a.jj+2|0;W2(a);}
function AVN(a){ADZ(a);if(!a.A.c1)CN(a);}
function ASO(a){return Za(a.A.cU,a)>=256.0?null:a.A.cU;}
function A1d(a,b,c){if(!NP(a,b,c))return 0;if(b!==a)a.eI=b;return 1;}
function AL5(a,b,c){if(c<2.5&&b.Y.bs>a.Y.bc&&b.Y.bc<a.Y.bs){a.i_=20;b.eX(a,a.tW);}}
function A0H(a,b,c,d){return 0.5-DT(a.A,b,c,d);}
function AUA(a,b){Gk(a,b);}
function AXa(a,b){GP(a,b);}
function AM1(a,b,c,d){return D5(a.A,b|0,c|0,d|0)<=W(a.N,8)&&ZE(a,b,c,d)?1:0;}
function TM(){DP.call(this);}
function ASd(a){var b=new TM();AWu(b,a);return b;}
function AWu(a,b){Iz(a,b);a.hx=B(545);DC(a,1.399999976158142,0.8999999761581421);a.lO=0.800000011920929;}
function A6A(a){if(EC(a,1.0)<0.5&&Za(a.A.cU,a)<256.0)return a.A.cU;return null;}
function APT(a,b,c){var d,e;a:{if(EC(a,1.0)>0.5&&!W(a.N,100))a.eI=null;else{if(c>2.0&&c<6.0&&!W(a.N,10)){if(!a.dE)break a;else{c=b.f-a.f;d=b.g-a.g;e=B$(c*c+d*d);a.G=c/e*0.5*0.800000011920929+a.G*0.20000000298023224;a.H=d/e*0.5*0.800000011920929+a.H*0.20000000298023224;a.C=0.4000000059604645;return;}}AL5(a,b,c);}}}
function A65(a,b){Gk(a,b);}
function A2S(a,b){GP(a,b);}
function AWH(a){return B(499);}
function AUD(a){B2();return Be8.c3;}
function Zm(){DV.call(this);}
function A4J(a,b){return 180.0;}
function AB3(a,b,c){var d,e,$p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=b;if(c)return 0;if(c)return 0;b=B(546);$p=1;case 1:AHA(a,b);if(I()){break _;}e=(1.0-EC(d,1.0))*0.5;Y(3042);Bb(3008);Dy(770,771);BJ(1.0,1.0,1.0,e);return 1;default:F2();}}Dh().s(a,b,c,d,e,$p);}
function He(){JR.call(this);}
function AQT(a,b,c,d){var e;e=O(a.A,b,c-1|0,d);L();return e==Bch.b?10.0:DT(a.A,b,c,d)-0.5;}
function AKZ(a,b,c,d){return D5(a.A,b|0,c|0,d|0)>8&&ZE(a,b,c,d)?1:0;}
function ZZ(){He.call(this);}
function A79(a){var b=new ZZ();ARU(b,a);return b;}
function ARU(a,b){O1(a,b);a.hx=B(547);DC(a,0.8999999761581421,0.8999999761581421);}
function AUH(a,b){Gk(a,b);}
function A4p(a,b){GP(a,b);}
function A1E(a){return B(495);}
function ARb(a){B2();return Bfz.c3;}
function GA(){var a=this;Fv.call(a);a.gn=null;a.hD=null;a.j4=null;a.j6=null;a.j5=null;a.j7=null;}
function BgT(a,b){var c=new GA();Px(c,a,b);return c;}
function Px(a,b,c){var d,e;a.gn=BK(0,0);BH(a.gn,(-4.0),(-4.0),(-8.0),8,8,8,0.0);BG(a.gn,0.0,18-b|0,(-6.0));a.hD=BK(28,8);BH(a.hD,(-5.0),(-10.0),(-7.0),10,16,8,0.0);BG(a.hD,0.0,17-b|0,2.0);a.j4=BK(0,16);BH(a.j4,(-2.0),0.0,(-2.0),4,b,4,0.0);d=a.j4;e=24-b|0;BG(d,(-3.0),e,7.0);a.j6=BK(0,16);BH(a.j6,(-2.0),0.0,(-2.0),4,b,4,0.0);BG(a.j6,3.0,e,7.0);a.j5=BK(0,16);BH(a.j5,(-2.0),0.0,(-2.0),4,b,4,0.0);BG(a.j5,(-3.0),e,(-5.0));a.j7=BK(0,16);BH(a.j7,(-2.0),0.0,(-2.0),4,b,4,0.0);BG(a.j7,3.0,e,(-5.0));}
function AUK(a,b,c,d,e,f,g){AGe(a,b,c,d,e,f,1.0);B8(a.gn,1.0);B8(a.hD,1.0);B8(a.j4,1.0);B8(a.j6,1.0);B8(a.j5,1.0);B8(a.j7,1.0);}
function AGe(a,b,c,d,e,f,g){var h;a.gn.cc=e/57.2957763671875;a.gn.b7=f/57.2957763671875;a.hD.b7=1.5707963705062866;h=a.j4;b=b*0.6661999821662903;h.b7=Bp(b)*1.399999976158142*c;h=a.j6;d=b+3.1415927410125732;h.b7=Bp(d)*1.399999976158142*c;a.j5.b7=Bp(d)*1.399999976158142*c;a.j7.b7=Bp(b)*1.399999976158142*c;}
function Qu(){GA.call(this);}
function P8(){He.call(this);this.nv=0;}
function AXo(a){var b=new P8();AYZ(b,a);return b;}
function AYZ(a,b){O1(a,b);a.nv=0;a.hx=B(548);DC(a,0.8999999761581421,1.2999999523162842);}
function A4n(a,b,c){var d,e,f;a:{if(!a.nv&&b instanceof F8){a.nv=1;d=1+W(a.N,3)|0;e=0;while(true){if(e>=d)break a;L();f=Zd(a,BcR.b,1,1.0);f.C=f.C+N(a.N)*0.05000000074505806;f.G=f.G+(N(a.N)-N(a.N))*0.10000000149011612;f.H=f.H+(N(a.N)-N(a.N))*0.10000000149011612;e=e+1|0;}}}return NP(a,b,c);}
function AZy(a,b){Gk(a,b);Gc(b,B(549),a.nv);}
function A2z(a,b){GP(a,b);a.nv=Gb(b,B(549));}
function ATK(a){return B(496);}
function YD(){DV.call(this);}
function AKH(a,b,c){var d,$p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=b;b=B(550);$p=1;case 1:AHA(a,b);if(I()){break _;}return !c&&!d.nv?1:0;default:F2();}}Dh().s(a,b,c,d,$p);}
function WS(){GA.call(this);}
function AAE(){GA.call(this);}
function A$_(){var a=new AAE();A0G(a);return a;}
function A0G(a){Px(a,12,0.0);a.gn=BK(0,0);BH(a.gn,(-3.0),(-4.0),(-4.0),6,6,6,0.6000000238418579);BG(a.gn,0.0,6.0,(-8.0));a.hD=BK(28,8);BH(a.hD,(-4.0),(-10.0),(-7.0),8,16,6,1.75);BG(a.hD,0.0,5.0,2.0);a.j4=BK(0,16);BH(a.j4,(-2.0),0.0,(-2.0),4,6,4,0.5);BG(a.j4,(-3.0),12.0,7.0);a.j6=BK(0,16);BH(a.j6,(-2.0),0.0,(-2.0),4,6,4,0.5);BG(a.j6,3.0,12.0,7.0);a.j5=BK(0,16);BH(a.j5,(-2.0),0.0,(-2.0),4,6,4,0.5);BG(a.j5,(-3.0),12.0,(-5.0));a.j7=BK(0,16);BH(a.j7,(-2.0),0.0,(-2.0),4,6,4,0.5);BG(a.j7,3.0,12.0,(-5.0));}
function Wh(){var a=this;DP.call(a);a.kC=0;a.yO=0;a.wp=0;a.jk=0;}
function A4M(a){var b=new Wh();A1X(b,a);return b;}
function A1X(a,b){Iz(a,b);a.wp=30;a.jk=(-1);a.hx=B(551);}
function A7Z(a,b){Gk(a,b);}
function AZY(a,b){GP(a,b);}
function AWL(a){return B(497);}
function A59(a){a.yO=a.kC;if(a.kC>0&&a.jk<0)a.kC=a.kC-1|0;if(a.jk>=0)a.jk=2;AHg(a);if(a.jk!=1)a.jk=(-1);}
function A4f(a,b,c){a:{if(!(a.jk<=0&&c<3.0)){if(a.jk<=0)break a;if(c>=7.0)break a;}a.jk=1;a.kC=a.kC+1|0;if(a.kC==a.wp){Tm(a.A,a,a.f,a.j,a.g,3.0);CN(a);}a.qj=1;}}
function Z9(a,b){return (a.yO+(a.kC-a.yO|0)*b)/(a.wp-2|0);}
function A53(a){B2();return Be$.c3;}
function ZO(){DV.call(this);}
function A2D(a,b,c){var d,e;d=Z9(b,c);c=1.0+Bv(d*100.0)*d*0.009999999776482582;if(d<0.0)d=0.0;if(d>1.0)d=1.0;d=d*d;d=d*d;e=(1.0+d*0.4000000059604645)*c;C7(e,(1.0+d*0.10000000149011612)/c,e);}
function AWb(a,b,c,d){var e,f;e=Z9(b,d);if(!((e*10.0|0)%2|0))return 0;f=e*0.20000000298023224*255.0|0;if(f<0)f=0;if(f>255)f=255;return f<<24|16711680|65280|255;}
function X_(){DP.call(this);}
function AXk(a){var b=new X_();AYd(b,a);return b;}
function AYd(a,b){Iz(a,b);a.hx=B(552);}
function A1A(a){var b;if(a.A.ef>7){b=EC(a,1.0);if(b>0.5&&Md(a.A,a.f|0,a.j|0,a.g|0)&&N(a.N)*30.0<(b-0.4000000059604645)*2.0)a.dk=300;}Yo(a);}
function A14(a,b,c){var d,e,f,g,h;if(c<10.0){d=b.f-a.f;e=b.g-a.g;if(!a.i_){f=AZ3(a.A,a);f.j=f.j+1.0;g=b.j-0.20000000298023224-f.j;h=B$(d*d+e*e)*0.20000000298023224;De(a.A,f);Zi(f,d,g+h,e,0.6000000238418579,12.0);a.i_=30;}a.I=GK(e,d)*180.0/3.1415927410125732-90.0;a.qj=1;}}
function AQX(a,b){Gk(a,b);}
function AS$(a,b){GP(a,b);}
function ATz(a){return B(498);}
function ATR(a){B2();return BeL.c3;}
function Jv(){JV.call(this);}
function ATq(a,b,c,d,e,f,g){var h;ABk(a,b,c,d,e,f,g);b=Bv(0.0);f=Bv(0.0);a.dS.bY=0.0;a.dH.bY=0.0;h=a.dS;c=0.10000000149011612-b*0.6000000238418579;h.cc= -c;a.dH.cc=c;a.dS.b7=(-1.5707963705062866);a.dH.b7=(-1.5707963705062866);h=a.dS;c=h.b7;b=b*1.2000000476837158-f*0.4000000059604645;h.b7=c-b;h=a.dH;h.b7=h.b7-b;h=a.dS;b=h.bY;c=d*0.09000000357627869;h.bY=b+Bp(c)*0.05000000074505806+0.05000000074505806;h=a.dH;h.bY=h.bY-(Bp(c)*0.05000000074505806+0.05000000074505806);h=a.dS;b=h.b7;c=d*0.06700000166893005;h.b7=b
+Bv(c)*0.05000000074505806;h=a.dH;h.b7=h.b7-Bv(c)*0.05000000074505806;}
function UR(){Jv.call(this);}
function SN(){DP.call(this);}
function AYa(a){var b=new SN();ASv(b,a);return b;}
function ASv(a,b){Iz(a,b);a.hx=B(502);a.lO=0.5;a.tW=5;}
function A5a(a){var b;if(a.A.ef>7){b=EC(a,1.0);if(b>0.5&&Md(a.A,a.f|0,a.j|0,a.g|0)&&N(a.N)*30.0<(b-0.4000000059604645)*2.0)a.dk=300;}Yo(a);}
function AXT(a){return B(500);}
function AP4(a){B2();return Be9.c3;}
function PR(){DP.call(this);}
function A6O(a,b,c,d){return DT(a.A,b,c,d)-0.5;}
function A8p(a){return B(501);}
function YP(){DV.call(this);this.r3=0.0;}
function APy(a,b,c){C7(a.r3,a.r3,a.r3);}
function SA(){D_.call(this);}
function AIo(a,b,c,d,e,f,g){Ca();Bj(c-b.eb,d-b.ea,e-b.d_);BN();AJ_(b.Y);BN();BR();}
function PQ(){var a=this;DD.call(a);a.ru=0;a.fm=0;a.nh=0;a.ri=0;a.mG=0;a.dm=null;}
function AT5(a){var b=new PQ();AV$(b,a);return b;}
function AV$(a,b){GQ(a,b);a.ru=0;a.fm=0;a.dO=0.0;DC(a,0.5,0.5);}
function N8(a,b){var c,d,e,f,g,h,i,j,k,l,m;a.fm=b;c=b*90|0;a.I=c;a.bN=c;c=a.dm.gd;d=a.dm.nG;e=a.dm.gd;if(b&&b!=2)c=0.5;else e=0.5;c=c/32.0;f=d/32.0;e=e/32.0;g=a.nh+0.5;h=a.ri+0.5;i=a.mG+0.5;if(!b)i=i-0.5625;j=Bw(b,1);if(!j)g=g-0.5625;k=Bw(b,2);if(!k)i=i+0.5625;l=Bw(b,3);if(!l)g=g+0.5625;if(!b)g=g-KM(a.dm.gd);if(!j)i=i+KM(a.dm.gd);if(!k)g=g+KM(a.dm.gd);if(!l)i=i-KM(a.dm.gd);d=h+KM(a.dm.nG);D0(a,g,d,i);a.Y=GL(g-c,d-f,i-e,g+c,d+f,i+e);m=a.Y;c=m.bg;d=m.bc;e=m.bf;f=m.bv;g=m.bs;h=m.bw;a.Y=GL(c,d,e,f-0.0062500000931322575,
g-0.0062500000931322575,h-0.0062500000931322575);}
function KM(b){return b==32?0.5:b!=64?0.0:0.5;}
function ARA(a){var b,c,d,e,f,g,h,i;b=a.ru;a.ru=b+1|0;if(b==100&&!Pb(a)){a.ru=0;CN(a);c=a.A;d=new Gn;e=a.A;f=a.f;g=a.j;h=a.g;i=new C9;B2();Ie(i,BfB);K1(d,e,f,g,h,i);De(c,d);}}
function Pb(a){var b,c,d,e,f,g,h,i;if(Hv(a.A,a.Y).q>0)return 0;b=a.dm.gd/16|0;c=a.dm.nG/16|0;d=a.nh;e=a.mG;if(!a.fm)d=a.f-a.dm.gd/32.0|0;if(a.fm==1)e=a.g-a.dm.gd/32.0|0;if(a.fm==2)d=a.f-a.dm.gd/32.0|0;if(a.fm==3)e=a.g-a.dm.gd/32.0|0;f=a.j-a.dm.nG/32.0|0;g=0;a:while(true){if(g>=b){h=Ht(a.A.dl,a,a.Y);i=0;while(i<h.q){if(Bc(h,i) instanceof PQ)return 0;i=i+1|0;}return 1;}i=0;while(i<c){if(!(a.fm&&a.fm!=2?CR(a.A,a.nh,f+i|0,e+g|0):CR(a.A,d+g|0,f+i|0,a.mG)).it())break a;i=i+1|0;}g=g+1|0;}return 0;}
function A2u(a){return 1;}
function A3q(a,b,c){var d,e,f,g,h,i;CN(a);d=a.A;b=new Gn;e=a.A;f=a.f;g=a.j;h=a.g;i=new C9;B2();Ie(i,BfB);K1(b,e,f,g,h,i);De(d,b);return 1;}
function A70(a,b){DW(b,B(553),a.fm<<24>>24);HM(b,B(554),a.dm.u4);E0(b,B(555),a.nh);E0(b,B(556),a.ri);E0(b,B(557),a.mG);}
function A1B(a){return B(504);}
function AWw(a,b){var c,d,e,f,g;a.fm=EV(b,B(553));a.nh=DJ(b,B(555));a.ri=DJ(b,B(556));a.mG=DJ(b,B(557));c=Fg(b,B(554));d=Xi().data;e=d.length;f=0;while(f<e){g=d[f];if(BW(g.u4,c))a.dm=g;f=f+1|0;}if(a.dm===null)a.dm=BgU;N8(a,a.fm);}
function SQ(){D_.call(this);this.GY=null;}
function AL6(a,b,c,d,e,f,g){var h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,bo,bp,bq,$p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();bq=$T.l();bp=$T.l();bo=$T.l();bn=$T.l();bm=$T.l();bl=$T.l();bk=$T.l();bj=$T.l();bi=$T.l();bh=$T.l();bg=$T.l();bf=$T.l();be=$T.l();bd=$T.l();bc=$T.l();bb=$T.l();ba=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f
=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:h=b;Ca();Bj(c,d,e);Bs(f,0.0,1.0,0.0);Y(2977);b=B(558);$p=1;case 1:AHA(a,b);if(I()){break _;}i=h.dm;C7(0.0625,0.0625,0.0625);j=i.C_;k=i.C$;l=i.nG;m=i.gd;n= -m/2.0;o= -l/2.0;p=0;q=m/16|0;r=l/16|0;m=k+m|0;s=j+l|0;while(p<q){t=0;while(t<r){u=(p+1|0)<<4;v=n+u;w=p<<4;x=n+w;y=t+1|0;z=y<<4;ba=o+z;l=t<<4;bb=o+l;bc=(v+x)/2.0;bd=(ba+bb)/2.0;be=h.f|0;bf=h.j+bd/16.0|0;bg=h.g|0;if(!h.fm)be=h.f+bc/16.0|0;if(h.fm==1)bg=h.g-bc/16.0|0;if(h.fm
==2)be=h.f-bc/16.0|0;if(h.fm==3)bg=h.g+bc/16.0|0;bh=DT(a.hI.m9,be,bf,bg);Mg(bh,bh,bh);c=(m-w|0)/256.0;bi=(m-u|0)/256.0;d=(s-l|0)/256.0;bc=(s-z|0)/256.0;BD();bj=Bc$;Bx(bj);B0(bj,0.0,0.0,(-1.0));bk=v;bl=bb;bm=bi;bn=d;F(bj,bk,bl,(-0.5),bm,bn);bo=x;bp=c;F(bj,bo,bl,(-0.5),bp,bn);bq=ba;bn=bc;F(bj,bo,bq,(-0.5),bp,bn);F(bj,bk,bq,(-0.5),bm,bn);B0(bj,0.0,0.0,1.0);F(bj,bk,bq,0.5,0.75,0.0);F(bj,bo,bq,0.5,0.8125,0.0);F(bj,bo,bl,0.5,0.8125,0.0625);F(bj,bk,bl,0.5,0.75,0.0625);B0(bj,0.0,(-1.0),0.0);F(bj,bk,bq,(-0.5),0.75,0.001953125);F(bj,
bo,bq,(-0.5),0.8125,0.001953125);F(bj,bo,bq,0.5,0.8125,0.001953125);F(bj,bk,bq,0.5,0.75,0.001953125);B0(bj,0.0,1.0,0.0);F(bj,bk,bl,0.5,0.75,0.001953125);F(bj,bo,bl,0.5,0.8125,0.001953125);F(bj,bo,bl,(-0.5),0.8125,0.001953125);F(bj,bk,bl,(-0.5),0.75,0.001953125);B0(bj,(-1.0),0.0,0.0);F(bj,bk,bq,0.5,0.751953125,0.0);F(bj,bk,bl,0.5,0.751953125,0.0625);F(bj,bk,bl,(-0.5),0.751953125,0.0625);F(bj,bk,bq,(-0.5),0.751953125,0.0);B0(bj,1.0,0.0,0.0);F(bj,bo,bq,(-0.5),0.751953125,0.0);F(bj,bo,bl,(-0.5),0.751953125,0.0625);F(bj,
bo,bl,0.5,0.751953125,0.0625);F(bj,bo,bq,0.5,0.751953125,0.0);Bt(bj);t=y;}p=p+1|0;}Bb(2977);BR();return;default:F2();}}Dh().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,bo,bp,bq,$p);}
function MY(){var a=this;DD.call(a);a.oj=0;a.p0=0;a.o1=0;a.sX=0;a.nx=0;a.kG=0;a.wJ=null;a.pu=0;a.me=0;}
function AZ3(a,b){var c=new MY();ATN(c,a,b);return c;}
function ATN(a,b,c){GQ(a,b);a.oj=(-1);a.p0=(-1);a.o1=(-1);a.sX=0;a.nx=0;a.kG=0;a.me=0;a.wJ=c;DC(a,0.5,0.5);Jy(a,c.f,c.j,c.g,c.I,c.X);a.f=a.f-Bp(a.I/180.0*3.1415927410125732)*0.1599999964237213;a.j=a.j-0.10000000149011612;a.g=a.g-Bv(a.I/180.0*3.1415927410125732)*0.1599999964237213;D0(a,a.f,a.j,a.g);a.dO=0.0;a.G= -Bv(a.I/180.0*3.1415927410125732)*Bp(a.X/180.0*3.1415927410125732);a.H=Bp(a.I/180.0*3.1415927410125732)*Bp(a.X/180.0*3.1415927410125732);a.C= -Bv(a.X/180.0*3.1415927410125732);Zi(a,a.G,a.C,a.H,1.5,1.0);}
function Zi(a,b,c,d,e,f){var g,h,i,j;g=B$(b*b+c*c+d*d);b=b/g;c=c/g;d=d/g;h=b;i=HH(a.N)*0.007499999832361937;j=f;b=h+i*j;c=c+HH(a.N)*0.007499999832361937*j;d=d+HH(a.N)*0.007499999832361937*j;b=b*e;c=c*e;d=d*e;a.G=b;a.C=c;a.H=d;e=B$(b*b+d*d);b=GK(b,d)*180.0/3.1415927410125732;a.I=b;a.bN=b;b=GK(c,e)*180.0/3.1415927410125732;a.X=b;a.b1=b;a.pu=0;}
function AZH(a){var b,c,d,e,f,g,h,i,j,k,l,m,n;N2(a);if(a.kG>0)a.kG=a.kG-1|0;if(!a.nx)a.me=a.me+1|0;else{if(O(a.A,a.oj,a.p0,a.o1)==a.sX){a.pu=a.pu+1|0;if(a.pu==1200)CN(a);return;}a.nx=0;a.G=a.G*N(a.N)*0.20000000298023224;a.C=a.C*N(a.N)*0.20000000298023224;a.H=a.H*N(a.N)*0.20000000298023224;a.pu=0;a.me=0;}b=BF(a.f,a.j,a.g);c=BF(a.f+a.G,a.j+a.C,a.g+a.H);d=E1(a.A,b,c);b=BF(a.f,a.j,a.g);c=BF(a.f+a.G,a.j+a.C,a.g+a.H);if(d!==null)c=BF(d.d4.U,d.d4.R,d.d4.S);e=null;f=Ht(a.A.dl,a,FK(K3(a.Y,a.G,a.C,a.H),1.0,1.0,1.0));g
=0.0;h=0;while(h<CE(f)){i=Bc(f,h);if(i.qf()&&!(i===a.wJ&&a.me<5)){j=Qg(FK(i.Y,0.30000001192092896,0.30000001192092896,0.30000001192092896),b,c);if(j!==null){k=C$(b,j.d4);if(!(k>=g&&g!==0.0)){e=i;g=k;}}}h=h+1|0;}if(e!==null)d=ATd(e);if(d!==null){if(d.tN===null){a.oj=d.c6;a.p0=d.c7;a.o1=d.c8;a.sX=O(a.A,a.oj,a.p0,a.o1);a.G=d.d4.U-a.f;a.C=d.d4.R-a.j;a.H=d.d4.S-a.g;l=B$(a.G*a.G+a.C*a.C+a.H*a.H);a.f=a.f-a.G/l*0.05000000074505806;a.j=a.j-a.C/l*0.05000000074505806;a.g=a.g-a.H/l*0.05000000074505806;a.nx=1;a.kG=7;}else if
(d.tN.eX(a,4))CN(a);else{a.G=a.G*(-0.10000000149011612);a.C=a.C*(-0.10000000149011612);a.H=a.H*(-0.10000000149011612);a.I=a.I+180.0;a.bN=a.bN+180.0;a.me=0;}}a.f=a.f+a.G;a.j=a.j+a.C;a.g=a.g+a.H;l=B$(a.G*a.G+a.H*a.H);a.I=GK(a.G,a.H)*180.0/3.1415927410125732;a.X=GK(a.C,l)*180.0/3.1415927410125732;while(a.X-a.b1<(-180.0)){a.b1=a.b1-360.0;}while(a.X-a.b1>=180.0){a.b1=a.b1+360.0;}while(a.I-a.bN<(-180.0)){a.bN=a.bN-360.0;}while(a.I-a.bN>=180.0){a.bN=a.bN+360.0;}a.X=a.b1+(a.X-a.b1)*0.20000000298023224;a.I=a.bN+(a.I
-a.bN)*0.20000000298023224;m=0.9900000095367432;if(Gq(a)){n=0;while(n<4){BY(a.A,B(366),a.f-a.G*0.25,a.j-a.C*0.25,a.g-a.H*0.25,a.G,a.C,a.H);n=n+1|0;}m=0.800000011920929;}a.G=a.G*m;a.C=a.C*m;a.H=a.H*m;a.C=a.C-0.029999999329447746;D0(a,a.f,a.j,a.g);}
function A4e(a,b){CH(b,B(559),a.oj<<16>>16);CH(b,B(560),a.p0<<16>>16);CH(b,B(561),a.o1<<16>>16);DW(b,B(562),a.sX<<24>>24);DW(b,B(563),a.kG<<24>>24);DW(b,B(564),(!a.nx?0:1)<<24>>24);}
function A5C(a){return B(565);}
function A7G(a,b){var c,d;if(a.nx&&a.wJ===b&&a.kG<=0){c=b.F;d=new C9;B2();MQ(d,BeL.c3,1);if(XH(c,d)){Ui(b,a);CN(a);}}}
function ATY(a){return 0.0;}
function Vc(){D_.call(this);}
function ALc(a,b,c,d,e,f,g){var h,i,j,$p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:h=b;b=B(566);$p=1;case 1:AHA(a,b);if(I()){break _;}Ca();Bj(c,d,e);Bs(h.bN+(h.I-h.bN)*g-90.0,0.0,1.0,0.0);Bs(h.b1+(h.X-h.b1)*g,0.0,0.0,1.0);BD();i=Bc$;Y(2977);c=h.kG-g;if(c>0.0)Bs( -Bv(c*3.0)*c,0.0,0.0,1.0);Bs(45.0,1.0,0.0,0.0);C7(0.05624999850988388,0.05624999850988388,0.05624999850988388);Bj((-4.0),0.0,0.0);IT(0.05624999850988388,
0.0,0.0);Bx(i);F(i,(-7.0),(-2.0),(-2.0),0.0,0.15625);F(i,(-7.0),(-2.0),2.0,0.15625,0.15625);F(i,(-7.0),2.0,2.0,0.15625,0.3125);F(i,(-7.0),2.0,(-2.0),0.0,0.3125);Bt(i);IT((-0.05624999850988388),0.0,0.0);Bx(i);F(i,(-7.0),2.0,(-2.0),0.0,0.15625);F(i,(-7.0),2.0,2.0,0.15625,0.15625);F(i,(-7.0),(-2.0),2.0,0.15625,0.3125);F(i,(-7.0),(-2.0),(-2.0),0.0,0.3125);Bt(i);j=0;while(j<4){Bs(90.0,1.0,0.0,0.0);IT(0.0,0.0,0.05624999850988388);Bx(i);F(i,(-8.0),(-2.0),0.0,0.0,0.0);F(i,8.0,(-2.0),0.0,0.5,0.0);F(i,8.0,2.0,0.0,0.5,
0.15625);F(i,(-8.0),2.0,0.0,0.0,0.15625);Bt(i);j=j+1|0;}Bb(2977);BN();BR();BN();return;default:F2();}}Dh().s(a,b,c,d,e,f,g,h,i,j,$p);}
function Ws(){DD.call(this);this.gl=0;}
function ARf(a,b,c,d){var e=new Ws();A5w(e,a,b,c,d);return e;}
function A5w(a,b,c,d,e){var f;GQ(a,b);a.gl=0;a.ti=1;DC(a,0.9800000190734863,0.9800000190734863);a.dO=a.gA/2.0;D0(a,c,d,e);f=Cc()*3.1415927410125732*2.0*3.1415927410125732/180.0;a.G= -Bv(f)*0.019999999552965164;a.C=0.20000000298023224;a.H= -Bp(f)*0.019999999552965164;a.pi=0;a.gl=80;a.cs=c;a.cx=d;a.ct=e;}
function A3t(a){return a.hL?0:1;}
function APj(a){var b;a.cs=a.f;a.cx=a.j;a.ct=a.g;a.C=a.C-0.03999999910593033;Eq(a,a.G,a.C,a.H);a.G=a.G*0.9800000190734863;a.C=a.C*0.9800000190734863;a.H=a.H*0.9800000190734863;if(a.dE){a.G=a.G*0.699999988079071;a.H=a.H*0.699999988079071;a.C=a.C*(-0.5);}b=a.gl;a.gl=b-1|0;if(b<=0){CN(a);Tm(a.A,null,a.f,a.j,a.g,4.0);}else BY(a.A,B(273),a.f,a.j+0.5,a.g,0.0,0.0,0.0);}
function A0u(a,b){DW(b,B(567),a.gl<<24>>24);}
function ATM(a){return B(568);}
function ASM(a){return 0.0;}
function Up(){D_.call(this);this.xL=null;}
function AJX(a,b,c,d,e,f,g){var h,$p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:h=b;Ca();Bj(c,d,e);if(h.gl-g+1.0<10.0){c=1.0-(h.gl-g+1.0)/10.0;if(c<0.0)c=0.0;if(c>1.0)c=1.0;c=c*c;c=1.0+c*c*0.30000001192092896;C7(c,c,c);}c=(1.0-(h.gl-g+1.0)/100.0)*0.800000011920929;b=B(205);$p=1;case 1:AHA(a,b);if(I()){break _;}b=a.xL;L();IU(b,BcZ);if(!((h.gl/5|0)%2|0)){Bb(3553);Bb(2896);Y(3042);Dy(770,772);BJ(1.0,1.0,1.0,c);IU(a.xL,
BcZ);BJ(1.0,1.0,1.0,1.0);Bb(3042);Y(2896);Y(3553);}BR();return;default:F2();}}Dh().s(a,b,c,d,e,f,g,h,$p);}
function Uf(){Dn.call(this);}
function Ud(){Fh.call(this);}
function Ug(){Fu.call(this);}
function ACc(){var a=this;Fv.call(a);a.m_=null;a.sT=null;a.tZ=null;a.jT=null;a.jU=null;a.jR=null;a.jS=null;a.jP=null;a.jQ=null;a.jV=null;a.jW=null;}
function AOW(){var a=new ACc();A1K(a);return a;}
function A1K(a){a.m_=BK(32,4);BH(a.m_,(-4.0),(-4.0),(-8.0),8,8,8,0.0);BG(a.m_,0.0,15.0,(-3.0));a.sT=BK(0,0);BH(a.sT,(-3.0),(-3.0),(-3.0),6,6,6,0.0);BG(a.sT,0.0,15.0,0.0);a.tZ=BK(0,12);BH(a.tZ,(-5.0),(-4.0),(-6.0),10,8,12,0.0);BG(a.tZ,0.0,15.0,9.0);a.jT=BK(18,0);BH(a.jT,(-15.0),(-1.0),(-1.0),16,2,2,0.0);BG(a.jT,(-4.0),15.0,2.0);a.jU=BK(18,0);BH(a.jU,(-1.0),(-1.0),(-1.0),16,2,2,0.0);BG(a.jU,4.0,15.0,2.0);a.jR=BK(18,0);BH(a.jR,(-15.0),(-1.0),(-1.0),16,2,2,0.0);BG(a.jR,(-4.0),15.0,1.0);a.jS=BK(18,0);BH(a.jS,(-1.0),
(-1.0),(-1.0),16,2,2,0.0);BG(a.jS,4.0,15.0,1.0);a.jP=BK(18,0);BH(a.jP,(-15.0),(-1.0),(-1.0),16,2,2,0.0);BG(a.jP,(-4.0),15.0,0.0);a.jQ=BK(18,0);BH(a.jQ,(-1.0),(-1.0),(-1.0),16,2,2,0.0);BG(a.jQ,4.0,15.0,0.0);a.jV=BK(18,0);BH(a.jV,(-15.0),(-1.0),(-1.0),16,2,2,0.0);BG(a.jV,(-4.0),15.0,(-1.0));a.jW=BK(18,0);BH(a.jW,(-1.0),(-1.0),(-1.0),16,2,2,0.0);BG(a.jW,4.0,15.0,(-1.0));}
function AS1(a,b,c,d,e,f,g){AC2(a,b,c,d,e,f,1.0);B8(a.m_,1.0);B8(a.sT,1.0);B8(a.tZ,1.0);B8(a.jT,1.0);B8(a.jU,1.0);B8(a.jR,1.0);B8(a.jS,1.0);B8(a.jP,1.0);B8(a.jQ,1.0);B8(a.jV,1.0);B8(a.jW,1.0);}
function AC2(a,b,c,d,e,f,g){var h,i,j,k,l,m;a.m_.cc=e/57.2957763671875;a.m_.b7=f/57.2957763671875;a.jT.bY=(-0.7853981852531433);a.jU.bY=0.7853981852531433;a.jR.bY=(-0.5811946392059326);a.jS.bY=0.5811946392059326;a.jP.bY=(-0.5811946392059326);a.jQ.bY=0.5811946392059326;a.jV.bY=(-0.7853981852531433);a.jW.bY=0.7853981852531433;a.jT.cc=0.7853981852531433;a.jU.cc=(-0.7853981852531433);a.jR.cc=0.39269909262657166;a.jS.cc=(-0.39269909262657166);a.jP.cc=(-0.39269909262657166);a.jQ.cc=0.39269909262657166;a.jV.cc=(-0.7853981852531433);a.jW.cc
=0.7853981852531433;b=b*0.6661999821662903;e=b*2.0;g= -(Bp(e)*0.4000000059604645)*c;h= -(Bp(e+3.1415927410125732)*0.4000000059604645)*c;i= -(Bp(e+1.5707963705062866)*0.4000000059604645)*c;d= -(Bp(e+4.71238899230957)*0.4000000059604645)*c;j=I3(Bv(b)*0.4000000059604645)*c;k=I3(Bv(b+3.1415927410125732)*0.4000000059604645)*c;l=I3(Bv(b+1.5707963705062866)*0.4000000059604645)*c;b=I3(Bv(b+4.71238899230957)*0.4000000059604645)*c;m=a.jT;m.cc=m.cc+g;m=a.jU;m.cc=m.cc-g;m=a.jR;m.cc=m.cc+h;m=a.jS;m.cc=m.cc-h;m=a.jP;m.cc
=m.cc+i;m=a.jQ;m.cc=m.cc-i;m=a.jV;m.cc=m.cc+d;m=a.jW;m.cc=m.cc-d;m=a.jT;m.bY=m.bY+j;m=a.jU;m.bY=m.bY-j;m=a.jR;m.bY=m.bY+k;m=a.jS;m.bY=m.bY-k;m=a.jP;m.bY=m.bY+l;m=a.jQ;m.bY=m.bY-l;m=a.jV;m.bY=m.bY+b;m=a.jW;m.bY=m.bY-b;}
function AAr(){var a=this;Fv.call(a);a.nQ=null;a.w3=null;a.s$=null;a.of=null;a.oe=null;a.oh=null;a.og=null;}
function A95(){var a=new AAr();AT1(a);return a;}
function AT1(a){a.nQ=BK(0,0);BH(a.nQ,(-4.0),(-8.0),(-4.0),8,8,8,0.0);BG(a.nQ,0.0,4.0,0.0);a.w3=BK(32,0);BH(a.w3,(-4.0),(-8.0),(-4.0),8,8,8,0.5);BG(a.w3,0.0,4.0,0.0);a.s$=BK(16,16);BH(a.s$,(-4.0),0.0,(-2.0),8,12,4,0.0);BG(a.s$,0.0,4.0,0.0);a.of=BK(0,16);BH(a.of,(-2.0),0.0,(-2.0),4,6,4,0.0);BG(a.of,(-2.0),16.0,4.0);a.oe=BK(0,16);BH(a.oe,(-2.0),0.0,(-2.0),4,6,4,0.0);BG(a.oe,2.0,16.0,4.0);a.oh=BK(0,16);BH(a.oh,(-2.0),0.0,(-2.0),4,6,4,0.0);BG(a.oh,(-2.0),16.0,(-4.0));a.og=BK(0,16);BH(a.og,(-2.0),0.0,(-2.0),4,6,4,
0.0);BG(a.og,2.0,16.0,(-4.0));}
function A4H(a,b,c,d,e,f,g){AL1(a,b,c,d,e,f,1.0);B8(a.nQ,1.0);B8(a.s$,1.0);B8(a.of,1.0);B8(a.oe,1.0);B8(a.oh,1.0);B8(a.og,1.0);}
function AL1(a,b,c,d,e,f,g){var h;a.nQ.cc=e/57.2957763671875;a.nQ.b7=f/57.2957763671875;h=a.of;b=b*0.6661999821662903;h.b7=Bp(b)*1.399999976158142*c;h=a.oe;d=b+3.1415927410125732;h.b7=Bp(d)*1.399999976158142*c;a.oh.b7=Bp(d)*1.399999976158142*c;a.og.b7=Bp(b)*1.399999976158142*c;}
function XX(){G5.call(this);}
function AQQ(a){Pf(a);return a.jG.ik;}
function MK(){Pz.call(this);}
function AGi(a,b,c){var d,e,f,g,h,i,j,k,l,m;d=$rt_createByteArray(B4(BV(b),512));e=d.data;f=0;g=0;h=$rt_createCharArray(B4(BV(c),512));i=h.data;a:{while(true){if((f+32|0)>g&&DH(b)){j=f;while(j<g){e[j-f|0]=e[j];j=j+1|0;}k=g-f|0;g=B4(BV(b)+k|0,e.length);WF(b,d,k,g-k|0);f=0;}if(!DH(c)){l=!DH(b)&&f>=g?Bgj:Bgi;break a;}k=B4(BV(c),i.length);m=new YO;m.Bq=b;m.Fr=c;l=AN7(a,d,f,g,h,0,k,m);f=m.wz;if(l===null&&0==m.qY)l=Bgj;AOy(c,h,0,m.qY);if(l!==null)break;}}Dz(b,b.O-(g-f|0)|0);return l;}
function Tr(){MK.call(this);}
function AN7(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p,q;i=null;a:{b:{c:{while(c<d){if(f>=g)break a;j=b.data;k=c+1|0;l=j[c]&255;if(!(l&128)){j=e.data;m=f+1|0;j[f]=l&65535;}else if((l&224)==192){if(k>=d){c=k+(-1)|0;if(O4(h))break a;i=Bgj;break a;}n=k+1|0;k=j[k];if(!Ij(a,k)){c=n+(-2)|0;i=FC(1);break a;}j=e.data;m=f+1|0;j[f]=((l&31)<<6|k&63)&65535;k=n;}else if((l&240)==224){if((k+2|0)>d){c=k+(-1)|0;if(O4(h))break a;i=Bgj;break a;}c=k+1|0;m=j[k];k=c+1|0;o=j[c];if(!Ij(a,m))break b;if(!Ij(a,o))break b;p=((l&15)<<12|(m
&63)<<6|o&63)&65535;if(PD(p)){c=k+(-3)|0;i=FC(3);break a;}j=e.data;m=f+1|0;j[f]=p;}else{if((l&248)!=240){c=k+(-1)|0;i=FC(1);break a;}if((k+3|0)>d){c=k+(-1)|0;if(O4(h))break a;i=Bgj;break a;}if((f+2|0)>g){c=k+(-1)|0;if(AIv(h,2))break a;i=Bgi;break a;}c=k+1|0;m=j[k];n=c+1|0;o=j[c];k=n+1|0;n=j[n];if(!Ij(a,m))break c;if(!Ij(a,o))break c;if(!Ij(a,n))break c;j=e.data;q=(l&7)<<18|(m&63)<<12|(o&63)<<6|n&63;c=f+1|0;j[f]=JJ(q);m=c+1|0;j[c]=Jg(q);}c=k;f=m;}break a;}c=k+(-3)|0;i=FC(1);break a;}c=k+(-3)|0;i=FC(1);}h.wz=
c;h.qY=f;return i;}
function Ij(a,b){return (b&192)!=128?0:1;}
function Nk(){C.call(this);}
var BgV=null;var BgW=null;function P4(b){var c;c=0;while(true){if(c>=BgV.data.length)return (-1);if(b==BgV.data[c])break;c=c+1|0;}return c;}
function AMh(){var b,c;b=$rt_createIntArray(144);c=b.data;c[0]=32;c[1]=33;c[2]=34;c[3]=35;c[4]=36;c[5]=37;c[6]=38;c[7]=39;c[8]=40;c[9]=41;c[10]=42;c[11]=43;c[12]=44;c[13]=45;c[14]=46;c[15]=47;c[16]=48;c[17]=49;c[18]=50;c[19]=51;c[20]=52;c[21]=53;c[22]=54;c[23]=55;c[24]=56;c[25]=57;c[26]=58;c[27]=59;c[28]=60;c[29]=61;c[30]=62;c[31]=63;c[32]=64;c[33]=65;c[34]=66;c[35]=67;c[36]=68;c[37]=69;c[38]=70;c[39]=71;c[40]=72;c[41]=73;c[42]=74;c[43]=75;c[44]=76;c[45]=77;c[46]=78;c[47]=79;c[48]=80;c[49]=81;c[50]=82;c[51]
=83;c[52]=84;c[53]=85;c[54]=86;c[55]=87;c[56]=88;c[57]=89;c[58]=90;c[59]=91;c[60]=92;c[61]=93;c[62]=94;c[63]=95;c[64]=39;c[65]=97;c[66]=98;c[67]=99;c[68]=100;c[69]=101;c[70]=102;c[71]=103;c[72]=104;c[73]=105;c[74]=106;c[75]=107;c[76]=108;c[77]=109;c[78]=110;c[79]=111;c[80]=112;c[81]=113;c[82]=114;c[83]=115;c[84]=116;c[85]=117;c[86]=118;c[87]=119;c[88]=120;c[89]=121;c[90]=122;c[91]=123;c[92]=124;c[93]=125;c[94]=126;c[95]=8962;c[96]=199;c[97]=252;c[98]=233;c[99]=226;c[100]=228;c[101]=224;c[102]=229;c[103]=231;c[104]
=234;c[105]=235;c[106]=232;c[107]=239;c[108]=238;c[109]=236;c[110]=196;c[111]=197;c[112]=201;c[113]=230;c[114]=198;c[115]=244;c[116]=246;c[117]=242;c[118]=251;c[119]=249;c[120]=255;c[121]=214;c[122]=220;c[123]=248;c[124]=163;c[125]=216;c[126]=215;c[127]=402;c[128]=225;c[129]=237;c[130]=243;c[131]=250;c[132]=241;c[133]=209;c[134]=170;c[135]=186;c[136]=191;c[137]=174;c[138]=172;c[139]=189;c[140]=188;c[141]=161;c[142]=171;c[143]=187;BgV=b;b=$rt_createCharArray(15);c=b.data;c[0]=47;c[1]=10;c[2]=13;c[3]=9;c[4]=0;c[5]
=12;c[6]=96;c[7]=63;c[8]=42;c[9]=92;c[10]=60;c[11]=62;c[12]=124;c[13]=34;c[14]=58;BgW=b;}
function D$(){var a=this;Cq.call(a);a.hw=0;a.JX=null;}
function AGM(a,b){var c=new D$();ARj(c,a,b);return c;}
function ARj(a,b,c){a.JX=b;Z(a);a.hw=c;}
function AKG(){var a=this;C.call(a);a.KB=0;a.HS=0;a.I7=Long_ZERO;a.J$=0;a.Ct=0;a.pR=null;a.zN=null;a.BD=null;a.K0=0;a.IM=Long_ZERO;a.HU=0;a.Jp=Long_ZERO;}
function A$P(){var a=new AKG();A5m(a);return a;}
function A5m(a){a.KB=0;a.HS=0;a.Ct=255;a.HU=0;a.Jp=Long_ZERO;}
function Ql(){C.call(this);this.mD=0;}
var BgX=null;function ASq(){var a=new Ql();ABl(a);return a;}
function ABl(a){a.mD=0;}
function AYM(a,b,c,d){var e,f,g,h;e=a.mD^(-1);while(true){d=d+(-1)|0;if(d<0)break;f=b.data;g=BgX.data;h=c+1|0;e=g[(e^f[c])&255]^e>>>8;c=h;}a.mD=e^(-1);}
function A2Y(a){a.mD=0;}
function A6u(a,b){a.mD=Long_and(b,new Long(4294967295, 0)).lo;}
function A4b(a){return Long_and(Long_fromInt(a.mD),new Long(4294967295, 0));}
function AFR(){var b,c,d;BgX=null;BgX=$rt_createIntArray(256);b=0;while(b<256){c=8;d=b;while(true){c=c+(-1)|0;if(c<0)break;if(!(d&1)){d=d>>>1;continue;}d=(-306674912)^d>>>1;}BgX.data[b]=d;b=b+1|0;}}
function AJl(){var a=this;JN.call(a);a.b6=null;a.e2=0;a.ov=0;a.iP=0;}
function AB5(){var a=new AJl();AWR(a);return a;}
function AWR(a){a.b6=H(C9,3);a.e2=0;a.ov=0;a.iP=0;}
function AU6(a,b){return a.b6.data[b];}
function AX9(a,b,c){var d;if(a.b6.data[b]===null)return null;if(a.b6.data[b].s<=c){d=a.b6.data[b];a.b6.data[b]=null;return d;}d=FB(a.b6.data[b],c);if(!a.b6.data[b].s)a.b6.data[b]=null;return d;}
function AT8(a,b,c){a.b6.data[b]=c;if(c!==null&&c.s>64)c.s=64;}
function A2Z(a,b){var c,d,e,f;c=Ee(b,B(569));a.b6=H(C9,a.b6.data.length);d=0;while(d<GU(c)){e=CS(c,d);f=EV(e,B(414));if(f>=0&&f<a.b6.data.length)a.b6.data[f]=PT(e);d=d+1|0;}a.e2=Ck(b,B(570));a.iP=Ck(b,B(571));a.ov=AHW(a.b6.data[1]);b=Dr();c=new S;V(c);Cm(b,R(Bf(G(Bf(G(c,B(572)),a.e2),B(30)),a.ov)));}
function ARG(a,b){var c,d,e;CH(b,B(570),a.e2<<16>>16);CH(b,B(571),a.iP<<16>>16);HM(b,B(402),B(492));c=Gu();d=0;while(d<a.b6.data.length){if(a.b6.data[d]!==null){e=DG();DW(e,B(414),d<<24>>24);Ix(a.b6.data[d],e);EP(c,e);}d=d+1|0;}Ff(b,B(569),c);}
function A34(a){return 64;}
function AIw(a,b){return (a.iP*24|0)/200|0;}
function AA6(a,b){return (a.e2*12|0)/a.ov|0;}
function Tq(a){return a.e2<=0?0:1;}
function AO3(a){var b,c,d,e,f,g,h,i,j;b=a.e2<=0?0:1;if(a.e2>0)a.e2=a.e2-1|0;if(!a.e2&&PJ(a)){c=AHW(a.b6.data[1]);a.e2=c;a.ov=c;if(a.e2>0&&a.b6.data[1]!==null){d=a.b6.data[1];d.s=d.s-1|0;if(!a.b6.data[1].s)a.b6.data[1]=null;}}if(Tq(a)&&PJ(a)){a.iP=a.iP+1|0;if(a.iP==200){a.iP=0;if(PJ(a)){e=AAx(BZ(a.b6.data[0]).c3);if(a.b6.data[2]===null)a.b6.data[2]=OC(e,1);else if(a.b6.data[2].bX==e){d=a.b6.data[2];d.s=d.s+1|0;}d=a.b6.data[0];d.s=d.s-1|0;if(a.b6.data[0].s<=0)a.b6.data[0]=null;}}}else a.iP=0;if(b!=(a.e2<=0?0:
1)){c=a.e2<=0?0:1;f=a.CV;g=a.FE;h=a.DD;d=a.Al;i=Cr(d,h,g,f);j=FZ(d,h,g,f);if(!c){L();By(d,h,g,f,Bd_.b);}else{L();By(d,h,g,f,Bea.b);}DK(d,h,g,f,i);KU(d,h,g,f,j);}}
function PJ(a){var b,c;if(a.b6.data[0]===null)return 0;b=AAx(BZ(a.b6.data[0]).c3);if(b<0)b=0;else if(a.b6.data[2]===null)b=1;else if(a.b6.data[2].bX!=b)b=0;else if(a.b6.data[2].s<64)b=1;else{c=a.b6.data[2].s;B2();b=c>=Bce.data[b].gf?0:1;}return b;}
function AAx(b){L();if(b==BcU.b){B2();b=BeM.c3;}else if(b==BcV.b){B2();b=BeN.c3;}else if(b==Bd6.b){B2();b=BeC.c3;}else if(b==BcA.b)b=Bct.b;else{B2();b=b==Bfz.c3?BfA.c3:b!=Bcn.b?(-1):Bcl.b;}return b;}
function AHW(b){var c,d;if(b===null)return 0;a:{c=BZ(b).c3;if(c<256){L();if(Bcf.data[c].ck===Bed){d=300;break a;}}B2();if(c==Be1.c3)d=100;else if(c!=BeB.c3)d=0;else d=1600;}return d;}
function N7(){EF.call(this);}
function Yw(){N7.call(this);}
function ALW(){EF.call(this);}
function A1o(a){var b=new ALW();AUE(b,a);return b;}
function AUE(a,b){a.rP=1;a.sn=1;a.jL=b;}
function ZC(){C.call(this);}
var BgY=null;function AEx(){if(BgY===null)BgY=Zr(B(573));return BgY;}
function AGD(){JN.call(this);this.ey=null;}
function AFt(){var a=new AGD();A1V(a);return a;}
function A1V(a){a.ey=H(C9,36);}
function A6R(a){return 27;}
function AEJ(a,b){return a.ey.data[b];}
function A19(a,b,c){var d;if(a.ey.data[b]===null)return null;if(a.ey.data[b].s<=c){d=a.ey.data[b];a.ey.data[b]=null;return d;}d=FB(a.ey.data[b],c);if(!a.ey.data[b].s)a.ey.data[b]=null;return d;}
function A0S(a,b,c){a.ey.data[b]=c;if(c!==null&&c.s>64)c.s=64;}
function AOM(a){return B(491);}
function AVM(a,b){var c,d,e,f;c=Ee(b,B(569));a.ey=H(C9,27);d=0;while(d<GU(c)){e=CS(c,d);f=EV(e,B(414))&255;if(f>=0&&f<a.ey.data.length)a.ey.data[f]=PT(e);d=d+1|0;}}
function A4X(a,b){var c,d,e;HM(b,B(402),B(491));c=Gu();d=0;while(d<a.ey.data.length){if(a.ey.data[d]!==null){e=DG();DW(e,B(414),d<<24>>24);Ix(a.ey.data[d],e);EP(c,e);}d=d+1|0;}Ff(b,B(569),c);}
function A2v(a){return 64;}
function ACC(){var a=this;CV.call(a);a.vm=null;a.DI=null;a.nE=null;}
function AFF(a,b){var c=new ACC();A4A(c,a,b);return c;}
function A4A(a,b,c){Fo(a);a.DI=B(574);a.vm=b;a.nE=c;}
function AWW(a){var b;b=0;while(b<a.nE.AJ){M(a.ba,A3P(b,((a.bq/2|0)-155|0)+((b%2|0)*160|0)|0,(a.bM/6|0)+(24*(b>>1)|0)|0,XG(a.nE,b)));b=b+1|0;}M(a.ba,CL(100,(a.bq/2|0)-100|0,((a.bM/6|0)+120|0)+12|0,B(575)));M(a.ba,CL(200,(a.bq/2|0)-100|0,(a.bM/6|0)+168|0,B(576)));}
function AIZ(a,b){var c,d,e,$p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(b.fb){if(b.bC<100){Fa(a.nE,b.bC,1);b.eR=XG(a.nE,b.bC);}if(b.bC==100){c=a.x;d=new ZF;e=a.nE;Fo(d);d.Bs=B(577);d.kY=(-1);d.Ac=a;d.jY=e;$p=1;continue _;}if(b.bC==200){b=a.x;c=a.vm;$p=2;continue _;}}return;case 1:AOJ(c,d);if(I()){break _;}if(b.bC!=200)return;b=a.x;c=a.vm;$p=2;case 2:AOJ(b,c);if(I()){break _;}return;default:F2();}}Dh().s(a,b,c,d,e,$p);}
function AN$(a,b,c,d){var $p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AAW(a);if(I()){break _;}Eh(a.cJ,a.DI,a.bq/2|0,20,16777215);$p=2;case 2:ANU(a,b,c,d);if(I()){break _;}return;default:F2();}}Dh().s(a,b,c,d,$p);}
function ACh(){var a=this;CV.call(a);a.At=null;a.w6=null;a.yQ=null;a.vx=null;a.v7=null;a.nw=0;a.nW=0;a.nV=0;a.mm=0;}
function LP(a){var b=new ACh();A1a(b,a);return b;}
function A1a(a,b){var c,d;Fo(a);c=H(BC,4);d=c.data;d[0]=B(578);d[1]=B(579);d[2]=B(580);d[3]=B(581);a.w6=c;c=H(BC,3);d=c.data;d[0]=B(582);d[1]=B(583);d[2]=B(584);a.yQ=c;c=H(BC,3);d=c.data;d[0]=B(585);d[1]=B(350);d[2]=B(586);a.vx=c;c=H(BC,4);d=c.data;d[0]=B(350);d[1]=B(587);d[2]=B(588);d[3]=B(589);a.v7=c;a.nw=1;a.nW=0;a.nV=1;a.mm=0;a.At=b;}
function AVg(a){ER(a.ba);M(a.ba,CL(0,(a.bq/2|0)-100|0,a.bM/4|0,B(590)));M(a.ba,CL(1,(a.bq/2|0)-100|0,(a.bM/4|0)+24|0,B(591)));M(a.ba,CL(2,(a.bq/2|0)-100|0,(a.bM/4|0)+48|0,B(592)));M(a.ba,CL(3,(a.bq/2|0)-100|0,(a.bM/4|0)+72|0,B(593)));M(a.ba,CL(4,(a.bq/2|0)-100|0,((a.bM/4|0)+96|0)+12|0,B(594)));M(a.ba,CL(5,(a.bq/2|0)-100|0,((a.bM/4|0)+120|0)+12|0,B(595)));Ll(a);}
function Ll(a){var b,c;b=Bc(a.ba,0);c=new S;V(c);b.eR=R(G(G(c,B(590)),a.w6.data[a.nw]));b=Bc(a.ba,1);c=new S;V(c);b.eR=R(G(G(c,B(596)),a.yQ.data[a.nW]));b=Bc(a.ba,2);c=new S;V(c);b.eR=R(G(G(c,B(592)),a.vx.data[a.nV]));b=Bc(a.ba,3);c=new S;V(c);b.eR=R(G(G(c,B(593)),a.v7.data[a.mm]));}
function ALs(a,b){var c,d,e,f,g,$$je,$p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(b.bC!=5){if(b.bC==4){A_w=DG();try{$p=2;continue _;}catch($$e){$$je=Bh($$e);if($$je instanceof BA){c=$$je;}else{throw $$e;}}DA(c);a.x.lA=a.x.bn+6000|0;b=a.x;d=a.nV;e=a.nW;f=a.nw;g=a.mm;$p=3;continue _;}if(!b.bC)a.nw=(a.nw+1|0)%a.w6.data.length|0;else if(b.bC==1)a.nW=(a.nW+1|0)%a.yQ.data.length|0;else if(b.bC==2)a.nV=(a.nV+1|0)%a.vx.data.length
|0;else if(b.bC==3)a.mm=(a.mm+1|0)%a.v7.data.length|0;Ll(a);return;}b=a.x;c=a.At;$p=1;case 1:AOJ(b,c);if(I()){break _;}Ll(a);return;case 2:a:{try{AEG();if(I()){break _;}break a;}catch($$e){$$je=Bh($$e);if($$je instanceof BA){c=$$je;}else{throw $$e;}}DA(c);}a.x.lA=a.x.bn+6000|0;b=a.x;d=a.nV;e=a.nW;f=a.nw;g=a.mm;$p=3;case 3:AMa(b,d,e,f,g);if(I()){break _;}b=a.x;c=null;$p=4;case 4:AOJ(b,c);if(I()){break _;}Ll(a);return;default:F2();}}Dh().s(a,b,c,d,e,f,g,$p);}
function AB0(a,b,c,d){var $p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AAW(a);if(I()){break _;}Eh(a.cJ,B(597),a.bq/2|0,40,16777215);$p=2;case 2:ANU(a,b,c,d);if(I()){break _;}return;default:F2();}}Dh().s(a,b,c,d,$p);}
function Nn(){var a=this;CV.call(a);a.wr=null;a.kc=0;a.kJ=0;a.px=null;a.mF=null;a.pJ=null;a.r7=0;a.np=null;}
function Jj(a){var b=new Nn();O7(b,a);return b;}
function O7(a,b){Fo(a);a.kc=0;a.kJ=0;a.px=null;a.mF=B(9);a.pJ=B(598);a.r7=0;a.wr=b;}
function AFW(a){var b,c,$p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.np===null)return;if(!Ou(Oo(a.np),B(599))){b=new HT;c=new S;V(c);Zc(b,R(G(G(c,PY(a.np)),B(599))));a.np=b;}a.Fh(a.np);a.np=null;c=a.x;b=null;$p=1;case 1:AOJ(c,b);if(I()){break _;}return;default:F2();}}Dh().s(a,b,c,$p);}
function AGU(a){var b,c,d,$$je,$p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:try{a.mF=B(600);b=A_d(B3(G(G(G(G(Cd(),B(601)),a.x.Ig),B(602)),a.x.ga.sM)));c=new Th;d=new QK;b=ANY(b);$p=1;continue _;}catch($$e){$$je=Bh($$e);if($$je instanceof Cq){d=$$je;}else{throw $$e;}}DA(d);a.mF=B(603);a.kc=1;return;case 1:a:{b:{c:{try{$z=AKR(b);if(I()){break _;}b=$z;AAo(d,b);AJc(c,d);a.px=AKE(AHd(c),B(604));if(a.px.data.length<5)break c;a.F9(a.px);a.kJ=1;}catch
($$e){$$je=Bh($$e);if($$je instanceof Cq){d=$$je;break b;}else{throw $$e;}}return;}try{a.mF=a.px.data[0];a.kc=1;break a;}catch($$e){$$je=Bh($$e);if($$je instanceof Cq){d=$$je;}else{throw $$e;}}}DA(d);a.mF=B(603);a.kc=1;}return;default:F2();}}Dh().s(a,b,c,d,$p);}
function A0g(a,b){var c,d;c=0;while(c<5){d=b.data;Bc(a.ba,c).fb=BW(d[c],B(267))?0:1;Bc(a.ba,c).eR=d[c];Bc(a.ba,c).jB=1;c=c+1|0;}Bc(a.ba,5).jB=1;}
function AMR(a){var b;VG(A$k(a));b=0;while(b<5){M(a.ba,CL(b,(a.bq/2|0)-100|0,(a.bM/6|0)+(b*24|0)|0,B(605)));Bc(a.ba,b).jB=0;b=b+1|0;}M(a.ba,CL(5,(a.bq/2|0)-100|0,((a.bM/6|0)+120|0)+12|0,B(606)));M(a.ba,CL(6,(a.bq/2|0)-100|0,(a.bM/6|0)+168|0,B(595)));Bc(a.ba,5).jB=0;}
function ABK(a,b){var c,d,$p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a:{if(!a.r7&&b.fb){if(a.kJ&&b.bC<5){c=b.bC;$p=1;continue _;}b:{if(!a.kc){if(!a.kJ)break b;if(b.bC!=5)break b;}a.r7=1;}if(a.kc)break a;if(a.kJ&&b.bC==6)break a;}return;}b=a.x;d=a.wr;$p=2;continue _;case 1:a.Ja(c);if(I()){break _;}a:{if(!a.kc){if(!a.kJ)break a;if(b.bC!=5)break a;}a.r7=1;}if(!a.kc&&!(a.kJ&&b.bC==6))return;b=a.x;d=a.wr;$p=2;case 2:AOJ(b,d);if(I()){break _;}return;default:
F2();}}Dh().s(a,b,c,d,$p);}
function AMs(a,b){var c,d,$p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.x;d=null;$p=1;case 1:AOJ(c,d);if(I()){break _;}d=a.x;$p=2;case 2:AEh(d);if(I()){break _;}return;default:F2();}}Dh().s(a,b,c,d,$p);}
function ANl(a,b,c,d){var $p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AAW(a);if(I()){break _;}Eh(a.cJ,a.pJ,a.bq/2|0,20,16777215);if(!a.kJ)Eh(a.cJ,a.mF,a.bq/2|0,(a.bM/2|0)-4|0,16777215);$p=2;case 2:ANU(a,b,c,d);if(I()){break _;}return;default:F2();}}Dh().s(a,b,c,d,$p);}
function AS4(a,b){var c,$$je;a:{try{AIX(A8$(b));break a;}catch($$e){$$je=Bh($$e);if($$je instanceof BA){c=$$je;}else{throw $$e;}}DA(c);}}
function Lf(){Nn.call(this);}
function AUm(a){AMR(a);Bc(a.ba,5).eR=B(607);}
function A4P(a,b){var c,d;c=0;while(c<5){d=b.data;Bc(a.ba,c).eR=d[c];Bc(a.ba,c).jB=1;c=c+1|0;}Bc(a.ba,5).jB=1;}
function AW_(a,b){var c,$$je;a:{try{ALX(A8Q(b));break a;}catch($$e){$$je=Bh($$e);if($$je instanceof BA){c=$$je;}else{throw $$e;}}DA(c);}}
function ALz(a,b){var c,d,e,$p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=a.x;d=new WC;e=Bc(a.ba,b).eR;Fo(d);d.BY=B(608);d.rU=0;d.vM=a;d.GQ=b;d.ff=e;if(BW(d.ff,B(267)))d.ff=B(9);$p=1;case 1:AOJ(c,d);if(I()){break _;}return;default:F2();}}Dh().s(a,b,c,d,e,$p);}
function CM(){var a=this;Fc.call(a);a.u4=null;a.gd=0;a.nG=0;a.C$=0;a.C_=0;}
var BgU=null;var BgZ=null;var Bg0=null;var Bg1=null;var Bg2=null;var Bg3=null;var Bg4=null;var Bg5=null;var Bg6=null;var Bg7=null;var Bg8=null;var Bg9=null;var Bg$=null;var Bg_=null;var Bha=null;var Bhb=null;var Bhc=null;var Bhd=null;var Bhe=null;var Bhf=null;function Dm(a,b,c,d,e,f,g){var h=new CM();AGq(h,a,b,c,d,e,f,g);return h;}
function Xi(){return Bhf.gE();}
function AGq(a,b,c,d,e,f,g,h){FJ(a,b,c);a.u4=d;a.gd=e;a.nG=f;a.C$=g;a.C_=h;}
function AM4(){var b,c;BgU=Dm(B(609),0,B(609),16,16,0,0);BgZ=Dm(B(610),1,B(610),16,16,16,0);Bg0=Dm(B(611),2,B(611),16,16,32,0);Bg1=Dm(B(612),3,B(612),16,16,48,0);Bg2=Dm(B(613),4,B(613),16,16,64,0);Bg3=Dm(B(614),5,B(614),16,16,80,0);Bg4=Dm(B(615),6,B(615),16,16,96,0);Bg5=Dm(B(616),7,B(616),32,16,0,32);Bg6=Dm(B(617),8,B(617),32,16,32,32);Bg7=Dm(B(618),9,B(618),32,16,64,32);Bg8=Dm(B(619),10,B(619),32,16,96,32);Bg9=Dm(B(620),11,B(620),16,32,0,64);Bg$=Dm(B(621),12,B(621),32,32,0,128);Bg_=Dm(B(622),13,B(622),32,32,
32,128);Bha=Dm(B(623),14,B(623),32,32,64,128);Bhb=Dm(B(624),15,B(624),32,32,96,128);Bhc=Dm(B(625),16,B(625),32,32,128,128);Bhd=Dm(B(626),17,B(626),64,32,0,96);Bhe=Dm(B(627),18,B(627),64,64,0,192);b=H(CM,19);c=b.data;c[0]=BgU;c[1]=BgZ;c[2]=Bg0;c[3]=Bg1;c[4]=Bg2;c[5]=Bg3;c[6]=Bg4;c[7]=Bg5;c[8]=Bg6;c[9]=Bg7;c[10]=Bg8;c[11]=Bg9;c[12]=Bg$;c[13]=Bg_;c[14]=Bha;c[15]=Bhb;c[16]=Bhc;c[17]=Bhd;c[18]=Bhe;Bhf=b;}
function VU(){var a=this;C.call(a);a.zP=null;a.Ei=null;a.v9=0;a.se=0;}
function ACo(a){return DH(a.zP);}
function Ps(a,b){return BV(a.Ei)<b?0:1;}
function A2m(a,b){a.v9=b;}
function A8z(a,b){a.se=b;}
function RM(){BT.call(this);}
function UV(){BT.call(this);}
function T7(){GH.call(this);this.CO=0;}
function AR0(a){var b;b=new S;V(b);return R(Bf(G(b,B(628)),a.CO));}
function RI(){GH.call(this);this.FG=0;}
function ARs(a){var b;b=new S;V(b);return R(Bf(G(b,B(629)),a.FG));}
function QC(){Do.call(this);}
function AVf(a){var b;a.cs=a.f;a.cx=a.j;a.ct=a.g;a.bD=a.bD+0.002;Eq(a,a.by,a.bD,a.bz);a.by=a.by*0.8500000238418579;a.bD=a.bD*0.8500000238418579;a.bz=a.bz*0.8500000238418579;if(CR(a.A,a.f|0,a.j|0,a.g|0)!==Bda)CN(a);b=a.cT;a.cT=b-1|0;if(b<=0)CN(a);}
function AAF(){Do.call(this);this.Ce=0.0;}
function AS6(a,b,c,d,e){var f=new AAF();ASG(f,a,b,c,d,e);return f;}
function ASG(a,b,c,d,e,f){Ga(a,b,c,d,e,0.0,0.0,0.0);a.by=a.by*0.10000000149011612;a.bD=a.bD*0.10000000149011612;a.bz=a.bz*0.10000000149011612;c=Cc()*0.30000001192092896;a.iJ=c;a.iG=c;a.hR=c;a.dq=a.dq*0.75;a.dq=a.dq*f;a.Ce=a.dq;a.cT=8.0/(Cc()*0.8+0.2)|0;a.cT=a.cT*f|0;a.oi=0;}
function AHa(a,b,c,d,e,f,g,h){var i;i=(a.dJ+c)/a.cT*32.0;if(i<0.0)i=0.0;if(i>1.0)i=1.0;a.dq=a.Ce*i;Ip(a,b,c,d,e,f,g,h);}
function A3O(a){var b;a.cs=a.f;a.cx=a.j;a.ct=a.g;b=a.dJ;a.dJ=b+1|0;if(b>=a.cT)CN(a);a.fT=7-((a.dJ<<3)/a.cT|0)|0;a.bD=a.bD+0.004;Eq(a,a.by,a.bD,a.bz);if(a.j===a.cx){a.by=a.by*1.1;a.bz=a.bz*1.1;}a.by=a.by*0.9599999785423279;a.bD=a.bD*0.9599999785423279;a.bz=a.bz*0.9599999785423279;if(a.dE){a.by=a.by*0.699999988079071;a.bz=a.bz*0.699999988079071;}}
function QX(){Do.call(this);}
function AOC(a,b,c,d,e,f,g,h){Ip(a,b,c,d,e,f,g,h);}
function AWo(a){var b;a.cs=a.f;a.cx=a.j;a.ct=a.g;b=a.dJ;a.dJ=b+1|0;if(b>=a.cT)CN(a);a.fT=7-((a.dJ<<3)/a.cT|0)|0;a.bD=a.bD+0.004;Eq(a,a.by,a.bD,a.bz);a.by=a.by*0.8999999761581421;a.bD=a.bD*0.8999999761581421;a.bz=a.bz*0.8999999761581421;if(a.dE){a.by=a.by*0.699999988079071;a.bz=a.bz*0.699999988079071;}}
function SD(){Do.call(this);this.CG=0.0;}
function AAC(a,b,c,d,e,f,g,h){var i;i=(a.dJ+c)/a.cT;a.dq=a.CG*(1.0-i*i*0.5);Ip(a,b,c,d,e,f,g,h);}
function A1z(a,b){var c;c=(a.dJ+b)/a.cT;if(c<0.0)c=0.0;if(c>1.0)c=1.0;return EC(a,b)*c+1.0-c;}
function AQU(a){var b;a.cs=a.f;a.cx=a.j;a.ct=a.g;b=a.dJ;a.dJ=b+1|0;if(b>=a.cT)CN(a);Eq(a,a.by,a.bD,a.bz);a.by=a.by*0.9599999785423279;a.bD=a.bD*0.9599999785423279;a.bz=a.bz*0.9599999785423279;if(a.dE){a.by=a.by*0.699999988079071;a.bz=a.bz*0.699999988079071;}}
function AEb(){Do.call(this);this.FN=0.0;}
function A$W(a,b,c,d){var e=new AEb();A5I(e,a,b,c,d);return e;}
function A5I(a,b,c,d,e){Ga(a,b,c,d,e,0.0,0.0,0.0);a.by=a.by*0.800000011920929;a.bD=a.bD*0.800000011920929;a.bz=a.bz*0.800000011920929;a.bD=N(a.N)*0.4000000059604645+0.05000000074505806;a.iJ=1.0;a.iG=1.0;a.hR=1.0;a.dq=a.dq*(N(a.N)*2.0+0.20000000298023224);a.FN=a.dq;a.cT=16.0/(Cc()*0.8+0.2)|0;a.oi=0;a.fT=49;}
function ATi(a,b){return 1.0;}
function ANX(a,b,c,d,e,f,g,h){var i;i=(a.dJ+c)/a.cT;a.dq=a.FN*(1.0-i*i);Ip(a,b,c,d,e,f,g,h);}
function AUd(a){var b,c;a.cs=a.f;a.cx=a.j;a.ct=a.g;b=a.dJ;a.dJ=b+1|0;if(b>=a.cT)CN(a);c=a.dJ/a.cT;if(N(a.N)>c)BY(a.A,B(273),a.f,a.j,a.g,a.by,a.bD,a.bz);a.bD=a.bD-0.03;Eq(a,a.by,a.bD,a.bz);a.by=a.by*0.9990000128746033;a.bD=a.bD*0.9990000128746033;a.bz=a.bz*0.9990000128746033;if(a.dE){a.by=a.by*0.699999988079071;a.bz=a.bz*0.699999988079071;}}
function Ma(){Do.call(this);}
function Bhg(a,b,c,d){var e=new Ma();ABG(e,a,b,c,d);return e;}
function ABG(a,b,c,d,e){Ga(a,b,c,d,e,0.0,0.0,0.0);a.by=a.by*0.30000001192092896;a.bD=Cc()*0.20000000298023224+0.10000000149011612;a.bz=a.bz*0.30000001192092896;a.hR=1.0;a.iG=1.0;a.iJ=1.0;a.fT=16;DC(a,0.009999999776482582,0.009999999776482582);a.o$=0.05999999865889549;a.cT=8.0/(Cc()*0.8+0.2)|0;}
function AIb(a,b,c,d,e,f,g,h){Ip(a,b,c,d,e,f,g,h);}
function A4a(a){var b,c;a.cs=a.f;a.cx=a.j;a.ct=a.g;a.bD=a.bD-a.o$;Eq(a,a.by,a.bD,a.bz);a.by=a.by*0.9800000190734863;a.bD=a.bD*0.9800000190734863;a.bz=a.bz*0.9800000190734863;b=a.cT;a.cT=b-1|0;if(b<=0)CN(a);if(a.dE){if(Cc()<0.5)CN(a);a.by=a.by*0.699999988079071;a.bz=a.bz*0.699999988079071;}c=CR(a.A,a.f|0,a.j|0,a.g|0);if(!(!c.l$()&&!c.it()))CN(a);}
function QR(){Ma.call(this);}
function Wt(){C.call(this);this.nO=null;}
var Bhh=null;function AWJ(){AWJ=Bl(Wt);A4B();}
function A8N(){var a=new Wt();AIL(a);return a;}
function Xh(){AWJ();return Bhh;}
function AIL(a){var b,c,d,e;AWJ();Y9(a);a.nO=BU();AG1(A9P(),a);AIR(A9Q(),a);ANf(A$b(),a);AJk(new T4);b=new C9;B2();Ie(b,Be3);c=H(C,9);d=c.data;d[0]=B(64);d[1]=B(88);d[2]=B(630);d[3]=BX(88);L();d[4]=Bcy;d[5]=BX(89);d[6]=Bcz;d[7]=BX(35);d[8]=Be2;CP(a,b,c);e=WM(Be3);c=H(C,9);d=c.data;d[0]=B(64);d[1]=B(88);d[2]=B(630);d[3]=BX(88);d[4]=Bcz;d[5]=BX(89);d[6]=Bcy;d[7]=BX(35);d[8]=Be2;CP(a,e,c);AFo(new T$);e=YF(Bd4);c=H(C,5);d=c.data;d[0]=B(631);d[1]=B(632);d[2]=B(631);d[3]=BX(35);d[4]=Bcp;CP(a,e,c);e=YF(Bd_);c=H(C,
5);d=c.data;d[0]=B(631);d[1]=B(632);d[2]=B(631);d[3]=BX(35);d[4]=Bcn;CP(a,e,c);e=YF(Bd8);c=H(C,4);d=c.data;d[0]=B(633);d[1]=B(633);d[2]=BX(35);d[3]=Bcp;CP(a,e,c);AKV(A9n(),a);e=NK(BcR,1);c=H(C,5);d=c.data;d[0]=B(631);d[1]=B(631);d[2]=B(631);d[3]=BX(35);d[4]=Be8;CP(a,e,c);e=NK(BcZ,1);c=H(C,7);d=c.data;d[0]=B(634);d[1]=B(635);d[2]=B(634);d[3]=BX(88);d[4]=Be$;d[5]=BX(35);d[6]=BcA;CP(a,e,c);e=NK(Bck,3);c=H(C,3);d=c.data;d[0]=B(631);d[1]=BX(35);d[2]=Bcn;CP(a,e,c);e=NK(Bcp,4);c=H(C,3);d=c.data;d[0]=B(630);d[1]=BX(35);d[2]
=Bcq;CP(a,e,c);e=IS(Be1,4);d=H(C,4);c=d.data;c[0]=B(630);c[1]=B(630);c[2]=BX(35);c[3]=Bcp;CP(a,e,d);e=NK(Bcs,4);c=H(C,6);d=c.data;d[0]=B(88);d[1]=B(630);d[2]=BX(88);d[3]=BeB;d[4]=BX(35);d[5]=Be1;CP(a,e,c);e=IS(Be2,4);c=H(C,4);d=c.data;d[0]=B(632);d[1]=B(636);d[2]=BX(35);d[3]=Bcp;CP(a,e,c);e=IS(BeJ,1);c=H(C,6);d=c.data;d[0]=B(637);d[1]=B(638);d[2]=BX(65);d[3]=BeM;d[4]=BX(66);d[5]=BeA;CP(a,e,c);e=IS(Bfe,1);c=H(C,3);d=c.data;d[0]=B(631);d[1]=BX(35);d[2]=BeE;CP(a,e,c);e=IS(BfB,1);c=H(C,7);d=c.data;d[0]=B(631);d[1]
=B(635);d[2]=B(631);d[3]=BX(35);d[4]=Bcp;d[5]=BX(88);d[6]=BcR;CP(a,e,c);TK(a.nO,A8E(a));Cm(Dr(),B3(G(Bf(Cd(),CE(a.nO)),B(639))));}
function CP(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p;d=c.data;e=B(9);f=0;g=0;h=0;if(!Jb(d[0],$rt_arraycls(BC)))while(d[f] instanceof BC){i=f+1|0;j=d[f];h=h+1|0;g=Q(j);k=new S;V(k);e=R(G(G(k,e),j));f=i;}else{f=1;l=d[0];i=0;while(true){c=l.data;if(i>=c.length)break;k=c[i];h=h+1|0;g=Q(k);j=new S;V(j);e=R(G(G(j,e),k));i=i+1|0;}}m=CZ();while(f<d.length){n=d[f];o=0;i=f+1|0;if(d[i] instanceof Bg)o=d[i].c3;else if(d[i] instanceof U)o=d[i].b;BI(m,n,C0(o));f=f+2|0;}f=K(g,h);d=$rt_createIntArray(f);c=d.data;o=0;while(o<f)
{p=P(e,o);if(!Dx(m,BX(p)))c[o]=(-1);else c[o]=Co(m,BX(p)).fz;o=o+1|0;}e=a.nO;j=new P_;j.l4=g;j.to=h;j.vv=d;j.uH=b;M(e,j);}
function Vh(a,b){var c,d;c=0;while(c<a.nO.q){d=Bc(a.nO,c);if(ADM(d,b))return ADH(d);c=c+1|0;}return null;}
function A4B(){Bhh=A8N();}
function ZF(){var a=this;CV.call(a);a.Ac=null;a.Bs=null;a.jY=null;a.kY=0;}
function AYC(a){var b;b=0;while(b<a.jY.gq.data.length){M(a.ba,A3P(b,((a.bq/2|0)-155|0)+((b%2|0)*160|0)|0,(a.bM/6|0)+(24*(b>>1)|0)|0,KK(a.jY,b)));b=b+1|0;}M(a.ba,CL(200,(a.bq/2|0)-100|0,(a.bM/6|0)+168|0,B(576)));}
function AAd(a,b){var c,d,$p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=0;while(c<a.jY.gq.data.length){Bc(a.ba,c).eR=KK(a.jY,c);c=c+1|0;}if(b.bC!=200){a.kY=b.bC;d=new S;V(d);b.eR=R(G(G(G(d,B(640)),KK(a.jY,b.bC)),B(641)));return;}b=a.x;d=a.Ac;$p=1;case 1:AOJ(b,d);if(I()){break _;}return;default:F2();}}Dh().s(a,b,c,d,$p);}
function AEW(a,b,c){var $p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.kY>=0){AAX(a.jY,a.kY,c);Bc(a.ba,a.kY).eR=KK(a.jY,a.kY);a.kY=(-1);return;}$p=1;case 1:AMU(a,b,c);if(I()){break _;}return;default:F2();}}Dh().s(a,b,c,$p);}
function AHH(a,b,c,d){var $p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AAW(a);if(I()){break _;}Eh(a.cJ,a.Bs,a.bq/2|0,20,16777215);$p=2;case 2:ANU(a,b,c,d);if(I()){break _;}return;default:F2();}}Dh().s(a,b,c,d,$p);}
function AN8(){Pm.call(this);}
function A3P(a,b,c,d){var e=new AN8();A74(e,a,b,c,d);return e;}
function A74(a,b,c,d,e){Y1(a,b,c,d,150,20,e);}
function HT(){C.call(this);this.d5=null;}
var Bhi=0;var Bhj=null;var Bhk=0;var Bhl=null;function AVU(a){var b=new HT();Zc(b,a);return b;}
function Zc(a,b){if(b!==null){a.d5=AOF(b);return;}b=new Eg;Bd(b,B(9));J(b);}
function Oo(a){var b;b=AC8(a.d5,Bhj);return b<0?a.d5:BO(a.d5,b+1|0,Q(a.d5));}
function Gf(){return Bhm;}
function PY(a){var b,c,d,e;if(AEd(a))return a.d5;b=Gf().wl;if(Eb(a.d5))return b;c=Q(b);d=new S;d.bp=$rt_createCharArray(Q(b));e=0;while(e<d.bp.data.length){d.bp.data[e]=P(b,e);e=e+1|0;}d.b5=Q(b);if(P(b,c-1|0)==Bhi)Gf();else if(P(a.d5,0)!=Bhi)G(d,Bhj);G(d,a.d5);return R(d);}
function AEd(a){return Wl(a,a.d5);}
function Wl(a,b){Gf();return !Eb(b)&&P(b,0)==Bhi?1:0;}
function AZb(b){a:{b:{if(!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}b=1;break a;}b=0;}return b;}
function QO(a){var b,c,d,e,f,g,h,i,j,k,l;b=PY(a);c=1;d=0;while(d<Q(b)){if(P(b,d)==Bhi)c=c+1|0;d=d+1|0;}e=$rt_createIntArray(c).data;Gf();f=$rt_createCharArray(Q(b)+1|0);g=f.data;h=0;i=0;j=0;e[i]=0;d=0;a:{while(true){if(d>Q(b))break a;if(d<0){c=h+1|0;g[h]=P(b,d);}else if(d!=Q(b)&&P(b,d)!=Bhi){if(P(b,d)==46){j=j+1|0;c=h;}else{if(j>0){k=0;while(k<j){l=h+1|0;g[h]=46;k=k+1|0;h=l;}}c=h+1|0;g[h]=P(b,d);j=0;}}else{if(d==Q(b)&&!j)break;l=Bw(j,1);if(!l){j=0;c=h;}else if(l<=0){i=i+1|0;e[i]=h;c=h+1|0;g[h]=Bhi;}else{l=j
-1|0;i=i<=l?0:i-l|0;c=e[i]+1|0;j=0;}}d=d+1|0;h=c;}}if(h>1&&g[h-1|0]==Bhi)h=h+(-1)|0;return IJ(f,0,h);}
function Se(a){var b,c;b=Q(a.d5);c=Gt(a.d5,Bhi);if(c!=(-1)&&P(a.d5,b-1|0)!=Bhi){a:{if(Fx(a.d5,Bhi)==c){if(Wl(a,a.d5))break a;if(!c)break a;}return BO(a.d5,0,c);}return BO(a.d5,0,c+1|0);}return null;}
function AF5(a){return Se(a)===null?null:AVU(Se(a));}
function AOF(b){var c,d,e,f,g,h,i,j;c=Q(b);d=0;Gf();e=0;f=H5(b);g=0;while(g<c){h=f.data;i=h[g];if(i!=47&&i!=Bhi){j=d+1|0;h[d]=i;e=0;}else if(e&&g)j=d;else{j=d+1|0;h[d]=Bhi;e=1;}g=g+1|0;d=j;}a:{if(e){if(d<=1){if(d!=2)break a;if(f.data[0]==47)break a;}d=d+(-1)|0;}}return IJ(f,0,d);}
function OL(a){return AAY(Gf(),QO(a));}
function AEv(a){var b;b=QO(a);if(!Eb(b)&&!BW(b,B(30)))return OL(AF5(AVU(b)));return null;}
function AG$(){Gf();Bhi=47;Bhj=XE(Bhi);Gf();Bhk=58;Bhl=XE(Bhk);}
function WD(){}
function Un(){}
function Vi(){Dn.call(this);this.u_=null;}
var Bhn=null;function A$r(){var a=new Vi();ACb(a);return a;}
function ACb(a){var b,c;b=new Wz;c=null;b.HZ=c;if(c===null){c=new SH;c.Kd=b;}b.l8=c;a.u_=b;}
function AZ6(a){return AGf(a.u_).gy();}
function ABs(a,b){return AOD(a.u_,b,b)===Bhn?0:1;}
function ACL(){Bhn=new C;}
function ANm(){C.call(this);}
function LH(b,c){if(b===c)return 1;return b!==null?b.cI(c):c!==null?0:1;}
function U1(){}
function Qk(){}
function Wz(){var a=this;Fh.call(a);a.gh=null;a.l8=null;a.HZ=null;a.t4=0;a.xc=null;}
function AOD(a,b,c){var d,e;a.gh=PB(a,a.gh,b);d=AMq(a,b);e=Vo(d,c);Vo(d,c);a.t4=a.t4+1|0;return e;}
function AMq(a,b){var c,d;c=a.gh;while(true){if(c===null)return null;d=Io(a.l8,b,c.hC);if(!d)break;c=d>=0?c.dU:c.d3;}return c;}
function Vb(a,b,c){var d,e,f,g;d=a.gh;e=null;while(d!==null){f=Io(a.l8,b,d.hC);if(c)f= -f;if(!f)return d;if(f>=0)g=Jn(d,c);else{g=G2(d,c);e=d;}d=g;}return e;}
function Z4(a,b,c){var d,e,f,g,h;d=H(IG,PW(a));e=0;f=a.gh;a:{while(f!==null){g=Io(a.l8,b,f.hC);if(c)g= -g;if(!g){h=d.data;c=e+1|0;h[e]=f;break a;}if(g>=0)f=Jn(f,c);else{h=d.data;g=e+1|0;h[e]=f;f=G2(f,c);e=g;}}c=e;}return Ea(d,c);}
function RZ(a,b,c){var d,e,f,g;d=a.gh;e=null;while(d!==null){f=Io(a.l8,b,d.hC);if(c)f= -f;if(f>=0)g=Jn(d,c);else{g=G2(d,c);e=d;}d=g;}return e;}
function Q0(a,b,c){var d,e,f,g,h;d=H(IG,PW(a));e=0;f=a.gh;while(f!==null){g=Io(a.l8,b,f.hC);if(c)g= -g;if(g>=0)f=Jn(f,c);else{h=d.data;g=e+1|0;h[e]=f;f=G2(f,c);e=g;}}return Ea(d,e);}
function Zj(a,b){var c,d,e,f,g;c=H(IG,PW(a));d=0;e=a.gh;while(e!==null){f=c.data;g=d+1|0;f[d]=e;e=G2(e,b);d=g;}return Ea(c,d);}
function PB(a,b,c){var d,e;if(b===null){b=new IG;d=null;b.hC=c;b.ms=d;b.kI=1;b.kO=1;return b;}e=Io(a.l8,c,b.hC);if(!e)return b;if(e>=0)b.dU=PB(a,b.dU,c);else b.d3=PB(a,b.d3,c);JM(b);return AIB(b);}
function AFU(a){var b,c,d;if(a.xc===null){b=new RO;c=null;d=null;b.Hy=(-1);b.e_=a;b.ze=c;b.ws=1;b.yY=0;b.l0=d;b.ug=1;b.vp=0;b.EU=0;a.xc=b;}return a.xc;}
function PW(a){return a.gh===null?0:a.gh.kI;}
function ABf(b,c){var d,e;b=b.gh;d=null;while(b!==null){e=G2(b,c);d=b;b=e;}return d;}
function AHD(){var a=this;C.call(a);a.CW=null;a.p2=null;}
function A9P(){var a=new AHD();AUI(a);return a;}
function AUI(a){var b,c,d,e;b=H($rt_arraycls(BC),4);c=b.data;d=H(BC,3);e=d.data;e[0]=B(642);e[1]=B(636);e[2]=B(636);c[0]=d;d=H(BC,3);e=d.data;e[0]=B(88);e[1]=B(630);e[2]=B(630);c[1]=d;d=H(BC,3);e=d.data;e[0]=B(643);e[1]=B(644);e[2]=B(645);c[2]=d;d=H(BC,3);e=d.data;e[0]=B(643);e[1]=B(645);e[2]=B(645);c[3]=d;a.CW=b;b=H($rt_arraycls(C),5);c=b.data;d=H(C,5);e=d.data;L();e[0]=Bcp;e[1]=Bcn;B2();e[2]=BeM;e[3]=BeC;e[4]=BeN;c[0]=d;d=H(C,5);e=d.data;e[0]=BeR;e[1]=BeV;e[2]=BeH;e[3]=BeZ;e[4]=Be6;c[1]=d;d=H(C,5);e=d.data;e[0]
=BeQ;e[1]=BeU;e[2]=BeG;e[3]=BeY;e[4]=Be5;c[2]=d;d=H(C,5);e=d.data;e[0]=BeS;e[1]=BeW;e[2]=BeI;e[3]=Be0;e[4]=Be7;c[3]=d;d=H(C,5);e=d.data;e[0]=Be_;e[1]=Bfa;e[2]=Bfb;e[3]=Bfc;e[4]=Bfd;c[4]=d;a.p2=b;}
function AG1(a,b){var c,d,e,f,g,h,i,j;c=0;while(c<a.p2.data[0].data.length){d=a.p2.data[0].data[c];e=0;while(e<(a.p2.data.length-1|0)){f=a.p2.data;g=e+1|0;h=f[g].data[c];i=WM(h);f=H(C,5);j=f.data;j[0]=a.CW.data[e];j[1]=BX(35);B2();j[2]=Be1;j[3]=BX(88);j[4]=d;CP(b,i,f);e=g;}c=c+1|0;}}
function AGA(){var a=this;C.call(a);a.Cc=null;a.pB=null;}
function A9Q(){var a=new AGA();A5X(a);return a;}
function A5X(a){var b,c,d,e;b=H($rt_arraycls(BC),1);c=b.data;d=H(BC,3);e=d.data;e[0]=B(88);e[1]=B(88);e[2]=B(630);c[0]=d;a.Cc=b;b=H($rt_arraycls(C),2);c=b.data;d=H(C,5);e=d.data;L();e[0]=Bcp;e[1]=Bcn;B2();e[2]=BeM;e[3]=BeC;e[4]=BeN;c[0]=d;d=H(C,5);e=d.data;e[0]=BeP;e[1]=BeT;e[2]=BeO;e[3]=BeX;e[4]=Be4;c[1]=d;a.pB=b;}
function AIR(a,b){var c,d,e,f,g,h,i,j,k;c=0;while(c<a.pB.data[0].data.length){d=a.pB.data[0].data[c];e=0;while(e<(a.pB.data.length-1|0)){f=a.pB.data;g=e+1|0;h=f[g].data[c];i=WM(h);j=H(C,5);k=j.data;k[0]=a.Cc.data[e];k[1]=BX(35);B2();k[2]=Be1;k[3]=BX(88);k[4]=d;CP(b,i,j);e=g;}c=c+1|0;}h=new C9;B2();QJ(h,BeK,1);f=H(C,7);k=f.data;k[0]=B(646);k[1]=B(647);k[2]=B(646);k[3]=BX(88);k[4]=Be8;k[5]=BX(35);k[6]=Be1;CP(b,h,f);d=IS(BeL,4);f=H(C,9);k=f.data;k[0]=B(88);k[1]=B(630);k[2]=B(64);k[3]=BX(89);k[4]=Be9;k[5]=BX(88);k[6]
=BeM;k[7]=BX(35);k[8]=Be1;CP(b,d,f);}
function AM_(){C.call(this);this.q8=null;}
function A$b(){var a=new AM_();ATb(a);return a;}
function ATb(a){var b,c,d,e;b=H($rt_arraycls(C),3);c=b.data;d=H(C,2);e=d.data;L();e[0]=BcX;B2();e[1]=BeN;c[0]=d;d=H(C,2);e=d.data;e[0]=BcW;e[1]=BeM;c[1]=d;d=H(C,2);e=d.data;e[0]=Bd7;e[1]=BeC;c[2]=d;a.q8=b;}
function ANf(a,b){var c,d,e,f,g,h;c=0;while(c<a.q8.data.length){d=a.q8.data[c].data[0];e=a.q8.data[c].data[1];f=YF(d);g=H(C,5);h=g.data;h[0]=B(631);h[1]=B(631);h[2]=B(631);h[3]=BX(35);h[4]=e;CP(b,f,g);f=IS(e,9);g=H(C,3);h=g.data;h[0]=B(630);h[1]=BX(35);h[2]=d;CP(b,f,g);c=c+1|0;}}
function T4(){C.call(this);}
function Bho(){var a=new T4();AJk(a);return a;}
function AJk(a){return;}
function T$(){C.call(this);}
function Bhp(){var a=new T$();AFo(a);return a;}
function AFo(a){return;}
function ACd(){var a=this;C.call(a);a.Ea=null;a.qy=null;}
function A9n(){var a=new ACd();AYQ(a);return a;}
function AYQ(a){var b,c,d,e;b=H($rt_arraycls(BC),4);c=b.data;d=H(BC,2);e=d.data;e[0]=B(642);e[1]=B(648);c[0]=d;d=H(BC,3);e=d.data;e[0]=B(648);e[1]=B(642);e[2]=B(642);c[1]=d;d=H(BC,3);e=d.data;e[0]=B(642);e[1]=B(648);e[2]=B(648);c[2]=d;d=H(BC,2);e=d.data;e[0]=B(648);e[1]=B(648);c[3]=d;a.Ea=b;b=H($rt_arraycls(C),5);c=b.data;d=H(C,5);e=d.data;L();e[0]=BcR;e[1]=Bd1;B2();e[2]=BeM;e[3]=BeC;e[4]=BeN;c[0]=d;d=H(C,5);e=d.data;e[0]=Bff;e[1]=Bfj;e[2]=Bfn;e[3]=Bfr;e[4]=Bfv;c[1]=d;d=H(C,5);e=d.data;e[0]=Bfg;e[1]=Bfk;e[2]
=Bfo;e[3]=Bfs;e[4]=Bfw;c[2]=d;d=H(C,5);e=d.data;e[0]=Bfh;e[1]=Bfl;e[2]=Bfp;e[3]=Bft;e[4]=Bfx;c[3]=d;d=H(C,5);e=d.data;e[0]=Bfi;e[1]=Bfm;e[2]=Bfq;e[3]=Bfu;e[4]=Bfy;c[4]=d;a.qy=b;}
function AKV(a,b){var c,d,e,f,g,h,i,j;c=0;while(c<a.qy.data[0].data.length){d=a.qy.data[0].data[c];e=0;while(e<(a.qy.data.length-1|0)){f=a.qy.data;g=e+1|0;h=f[g].data[c];i=WM(h);f=H(C,3);j=f.data;j[0]=a.Ea.data[e];j[1]=BX(88);j[2]=d;CP(b,i,f);e=g;}c=c+1|0;}}
function AOK(){C.call(this);}
function A8E(a){var b=new AOK();A5W(b,a);return b;}
function A5W(a,b){return;}
function A5x(a,b,c){var d,e;d=b;e=c;return LF(e)<LF(d)?(-1):LF(e)<=LF(d)?0:1;}
function UC(){C.call(this);}
var Bhm=null;function ALe(){var b,c,d;b=new RK;c=new Xx;RY(c,B(9));d=new Yh;ACk(d);d.r9=0;d.lC=null;c.pm=d;b.Am=c;b.wl=B(30);Bhm=b;}
function SH(){C.call(this);this.Kd=null;}
function Io(a,b,c){return b===null?XF(c,b):XF(b,c);}
function YC(){}
function RK(){var a=this;C.call(a);a.Am=null;a.wl=null;}
function AAY(a,b){var c;c=new Xm;c.C1=a;c.m1=b;return c;}
function A1P(a){return a.wl;}
function A8B(a){return 0;}
function JS(){var a=this;C.call(a);a.pD=null;a.Bc=null;a.Cb=Long_ZERO;a.BP=0;}
function Bhq(a){var b=new JS();RY(b,a);return b;}
function RY(a,b){a.Cb=CF();a.pD=b;}
function AW$(a){return a.pD;}
function ALi(a){return a.BP?0:1;}
function AB9(a){a.Cb=CF();}
function Xx(){JS.call(this);this.pm=null;}
function AVP(a){return 1;}
function A5V(a,b){return AK5(a.pm,b);}
function A13(a,b,c,d){return null;}
function ARQ(a,b){var c,d;if(!ALi(a)){b=new BA;Bd(b,B(649));J(b);}if(Dx(a.pm,b))return null;c=new ZR;RY(c,b);c.Jm=$rt_createByteArray(0);if(!Dx(a.pm,c.pD)){c.Bc=a;AGt(a.pm,c.pD,c);AB9(a);return c;}b=new BB;d=new S;V(d);Bd(b,R(G(G(G(d,B(650)),c.pD),B(651))));J(b);}
function Yh(){var a=this;MS.call(a);a.r9=0;a.lC=null;a.ed=null;}
function AQj(a,b){return H(Py,b);}
function AK5(a,b){var c,d,e,f;if(b===null)c=KH(a);else{d=O8(b);c=Kq(a,b,(d&2147483647)%a.cP.data.length|0,d);}if(c===null)return null;if(a.r9&&a.ed!==c){e=c.gF;f=c.e6;f.gF=e;if(e===null)a.lC=f;else e.e6=f;c.e6=null;c.gF=a.ed;a.ed.e6=c;a.ed=c;}return c.fq;}
function So(a,b,c,d){var e;e=new Py;AE6(e,b,d);e.e6=null;e.gF=null;e.gg=a.cP.data[c];a.cP.data[c]=e;OZ(a,e);return e;}
function AGt(a,b,c){return AG5(a,b,c);}
function AG5(a,b,c){var d,e,f,g,h,i;if(!a.dC){a.lC=null;a.ed=null;}if(b===null){d=KH(a);if(d!==null)OZ(a,d);else{a.fM=a.fM+1|0;e=a.dC+1|0;a.dC=e;if(e>a.oE)LN(a);d=So(a,null,0,0);}}else{f=O8(b);e=f&2147483647;g=e%a.cP.data.length|0;d=Kq(a,b,g,f);if(d!==null)OZ(a,d);else{a.fM=a.fM+1|0;h=a.dC+1|0;a.dC=h;if(h>a.oE){LN(a);g=e%a.cP.data.length|0;}d=So(a,b,g,f);}}i=d.fq;d.fq=c;return i;}
function OZ(a,b){var c,d;if(a.ed===b)return;if(a.lC===null){a.lC=b;a.ed=b;return;}c=b.gF;d=b.e6;if(c!==null){if(d===null)return;if(a.r9){c.e6=d;d.gF=c;b.e6=null;b.gF=a.ed;a.ed.e6=b;a.ed=b;}return;}if(d===null){b.gF=a.ed;b.e6=null;a.ed.e6=b;a.ed=b;}else if(a.r9){a.lC=d;d.gF=null;b.gF=a.ed;b.e6=null;a.ed.e6=b;a.ed=b;}}
function AWf(a,b){var c,d,e;c=TP(a,b);if(c===null)return null;d=c.gF;e=c.e6;if(d===null)a.lC=e;else d.e6=e;if(e===null)a.ed=d;else e.gF=d;return c.fq;}
function AUF(a,b){return 0;}
function Pa(){var a=this;C.call(a);a.Ht=0;a.iX=null;a.de=null;a.fr=null;a.iS=0;a.hO=null;a.kT=null;a.k1=null;a.lp=null;a.sH=null;a.dw=null;}
var Bhr=null;var Bhs=null;function A_d(a){var b=new Pa();AHQ(b,a);return b;}
function Bht(a,b,c){var d=new Pa();Xn(d,a,b,c);return d;}
function AHQ(a,b){Xn(a,null,b,null);}
function Xn(a,b,c,d){var e,f,g,h,i,j,k,$$je;a.iS=(-1);a.dw=d;if(c===null){b=new GE;Z(b);J(b);}d=GX(c);a:{try{e=Fx(d,58);break a;}catch($$e){$$je=Bh($$e);if($$je instanceof Eg){f=$$je;}else{throw $$e;}}b=new GE;Bd(b,f.eM());J(b);}g=Fx(d,91);if(e>=0&&!(g!=(-1)&&e>=g)){b:{c:{a.de=BO(d,0,e);h=P(a.de,0);if(!(97<=h&&h<=122)){if(65>h)break c;if(h>90)break c;}i=1;break b;}i=0;}j=1;while(i&&j<Q(a.de)){i=P(a.de,j);i=!(97<=i&&i<=122)&&!(65<=i&&i<=90)&&!(48<=i&&i<=57)&&i!=43&&i!=45&&i!=46?0:1;j=j+1|0;}if(i)a.de=Oh(a.de);else
{a.de=null;e=(-1);}}if(a.de===null){if(b===null){b=new GE;Z(b);J(b);}KN(a,b.de,b.fr,b.iS,b.hO,b.kT,b.k1,b.lp,null);if(a.dw===null)a.dw=b.dw;}else if(b!==null&&BW(a.de,b.de)){k=b.k1;if(k!==null&&k.Js(B(30)))KN(a,a.de,b.fr,b.iS,b.hO,b.kT,k,b.lp,null);if(a.dw===null)a.dw=b.dw;}if(a.dw===null){AFp(a);if(a.dw===null){b=new GE;Z(b);J(b);}}d:{try{ACF(a.dw,a,d,e+1|0,Q(d));break d;}catch($$e){$$je=Bh($$e);if($$je instanceof Cq){f=$$je;}else{throw $$e;}}b=new GE;Bd(b,ANh(f));J(b);}if(a.iS>=(-1))return;b=new GE;Z(b);J(b);}
function ACW(a,b){var c,d;if(a.fr!==null&&Q(a.fr)>0){a.hO=a.fr;if(a.iS!=(-1)){c=new S;V(c);a.hO=R(Bf(G(G(c,a.hO),B(307)),a.iS));}}if(b){d=(-1);if(a.fr!==null)d=Gt(a.fr,64);if(d<0)a.kT=null;else{a.kT=BO(a.fr,0,d);a.fr=DO(a.fr,d+1|0);}}d=(-1);if(a.iX!==null)d=Fx(a.iX,63);if(d<0){a.lp=null;a.k1=a.iX;}else{a.lp=DO(a.iX,d+1|0);a.k1=BO(a.iX,0,d);}}
function AEI(a,b,c,d,e,f){if(a.de===null)a.de=b;a.fr=c;a.iX=e;a.iS=d;a.sH=f;a.Ht=0;ACW(a,1);}
function AFp(a){var b,c;a.dw=Co(Bhr,a.de);if(a.dw!==null)return;if(Bhs!==null){a.dw=Bhs.Nu(a.de);if(a.dw!==null){BI(Bhr,a.de,a.dw);return;}}a:{b=a.de;c=(-1);switch(O8(b)){case 101730:if(!BW(b,B(652)))break a;c=2;break a;case 3213448:if(!BW(b,B(653)))break a;c=0;break a;case 99617003:if(!BW(b,B(654)))break a;c=1;break a;default:}}b:{switch(c){case 0:case 1:a.dw=new QD;break b;case 2:break;default:a.dw=AZ0((-1));break b;}a.dw=AZ0(21);}}
function ANY(a){return a.dw.Ch(a);}
function AQP(a){return S1(a);}
function S1(a){var b;if(a.dw!==null)return AEw(a.dw,a);b=new S;V(b);return R(G(G(G(G(G(b,B(655)),a.de),B(656)),a.fr),a.iX));}
function A3c(a){return a.iX;}
function AUP(a){return a.fr;}
function ASy(a){return a.iS;}
function APA(a){return a.de;}
function A5T(a){return a.sH;}
function A12(a){return a.lp;}
function AS_(a){return a.k1;}
function AWU(a){return a.kT;}
function AP1(a){return a.hO;}
function KN(a,b,c,d,e,f,g,h,i){var j;if(h===null)j=g;else if(Eb(h))j=g;else if(g===null){j=new S;V(j);j=R(G(G(j,B(657)),h));}else{j=new S;V(j);j=R(G(G(G(j,g),B(657)),h));}AEI(a,b,c,d,j,i);a.hO=e;a.kT=f;a.k1=g;a.lp=h;}
function AKD(){Bhr=CZ();}
function IM(){C.call(this);this.GV=null;}
function Bhu(){var a=new IM();Tz(a);return a;}
function Tz(a){a.GV=new C;}
function Th(){var a=this;IM.call(a);a.zu=null;a.nu=null;a.jq=0;a.q3=0;a.ys=0;a.Cg=0;}
function Bhv(a){var b=new Th();AJc(b,a);return b;}
function AJc(a,b){Tz(a);a.Cg=(-1);a.zu=b;a.nu=$rt_createCharArray(Df(64,1024));}
function AHd(a){var b,c,d,e;if(a.zu===null){b=new BA;Z(b);J(b);}if(a.ys&&a.jq>=a.q3)return null;b=new S;V(b);a:{while(true){if(a.jq>=a.q3&&!S7(a,0))break a;c=a.nu.data;d=a.jq;a.jq=d+1|0;e=c[d];if(e==10)break;if(e==13){if(a.jq>=a.q3&&!S7(a,0))break a;if(a.nu.data[a.jq]!=10)break a;a.jq=a.jq+1|0;break a;}Ce(b,e);}}return R(b);}
function S7(a,b){var c;if(a.ys)return 0;a:{while(true){if(b>=a.nu.data.length)break a;c=ADe(a.zu,a.nu,b,a.nu.data.length-b|0);if(c==(-1)){a.ys=1;break a;}if(!c)break;b=b+c|0;}}a.q3=b;a.jq=0;a.Cg=(-1);return 1;}
function QK(){var a=this;IM.call(a);a.Fc=null;a.za=null;a.F1=null;a.fG=null;a.DQ=null;a.hG=null;a.tI=0;a.y6=0;}
function Bhw(a){var b=new QK();AAo(b,a);return b;}
function AAo(a,b){var c;c=Tt(Zu(Uj(AGy()),Ba4),Ba4);Tz(a);a.F1=$rt_createByteArray(8192);a.fG=My(a.F1);a.DQ=$rt_createCharArray(1024);a.hG=Tf(a.DQ);a.Fc=b;a.za=c;Dz(a.hG,a.hG.cv);Dz(a.fG,a.fG.cv);}
function ADe(a,b,c,d){var e,f,g;if(a.y6&&!DH(a.hG))return (-1);e=0;a:{while(d>0){f=B4(d,BV(a.hG));Mc(a.hG,b,c+e|0,f);d=d-f|0;e=e+f|0;if(!DH(a.hG)){if(a.y6)g=0;else{AA4(a.hG);b:{while(true){if(!DH(a.fG)){if(a.tI)g=0;else{AEf(a.fG);c:{while(true){if(!DH(a.fG))break c;g=AOi(a.Fc,a.fG.cV,a.fG.O,BV(a.fG));if(g==(-1)){a.tI=1;break c;}Dz(a.fG,a.fG.O+g|0);if(!g)break;}}Ec(a.fG);g=1;}if(!g)break b;}if(!G9(Oy(a.za,a.fG,a.hG,a.tI)))continue;else break;}}if(!DH(a.fG)&&a.tI&&Hz(Sj(a.za,a.hG)))a.y6=1;Ec(a.hG);g=1;}if(!g)break a;}}}return e;}
function Py(){var a=this;LA.call(a);a.e6=null;a.gF=null;}
function AHS(){C.call(this);}
function R6(){var a=this;C.call(a);a.c4=null;a.bi=0;a.bS=0;a.cS=0;a.z=null;a.dd=null;a.dn=0;a.hF=0;a.qp=0;a.li=0;a.qa=0;a.eT=0;a.lV=0;a.mT=0;a.ED=0.0;a.ee=null;}
function AG0(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,bo,bp,bq,br,bs,bt,bu,bv,bw,bx,by,bz,bA,bB,bC,bD,bE,bF,bG,bH,bI,bJ,bK,bL,bM,bN,bO,bP,bQ,bR,bS,bT,bU,bV,bW,bX,bY,bZ,b0,b1,$p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();b1=$T.l();b0=$T.l();bZ=$T.l();bY=$T.l();bX=$T.l();bW=$T.l();bV=$T.l();bU=$T.l();bT=$T.l();bS=$T.l();bR=$T.l();bQ=$T.l();bP=$T.l();bO=$T.l();bN=$T.l();bM=$T.l();bL=$T.l();bK=$T.l();bJ=$T.l();bI=$T.l();bH=$T.l();bG=$T.l();bF=$T.l();bE=$T.l();bD
=$T.l();bC=$T.l();bB=$T.l();bA=$T.l();bz=$T.l();by=$T.l();bx=$T.l();bw=$T.l();bv=$T.l();bu=$T.l();bt=$T.l();bs=$T.l();br=$T.l();bq=$T.l();bp=$T.l();bo=$T.l();bn=$T.l();bm=$T.l();bl=$T.l();bk=$T.l();bj=$T.l();bi=$T.l();bh=$T.l();bg=$T.l();bf=$T.l();be=$T.l();bd=$T.l();bc=$T.l();bb=$T.l();ba=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b
=$T.l();a=$T.l();}_:while(true){switch($p){case 0:f=1;if(a.li)f=((e-64|0)/48|0)+1|0;a.mT=13+(f*4|0)|0;Zg(a.c4,B(658));g=XU();g.fD=a.dn;g.eC=a.hF;a.bi=c;a.bS=d;a.cS=e;h=K(c,d);a.dd=$rt_createByteArray(K(h,e));i=0;j=e-32|0;if(i>=f){k=a.c4;l=B(659);$p=1;continue _;}a.dn=j-(i*48|0)|0;a.hF=a.dn-2|0;if(!a.qa){k=a.c4;l=B(660);$p=3;continue _;}m=$rt_createIntArray(h);n=m.data;o=0;p=n.length;while(o<p){n[o]=0;o=o+1|0;}$p=16;continue _;case 1:ANb(k,l);if(I()){break _;}$p=2;case 2:AAA(a);if(I()){break _;}h=a.bi;p=a.bS;q
=a.cS;r=((K(K(h,p),q)/256|0)/64|0)<<1;s=0;t=r-1|0;u=h;v=q;w=p;if(s<r){x=s*100.0/t;$p=12;continue _;}L();p=BcT.b;q=1000;r=10;s=(e<<2)/5|0;$p=5;continue _;case 3:ANb(k,l);if(I()){break _;}$p=4;case 4:AAA(a);if(I()){break _;}y=SZ(El(a.z,8),El(a.z,8));z=SZ(El(a.z,8),El(a.z,8));ba=El(a.z,6);k=El(a.z,2);m=$rt_createIntArray(K(a.bi,a.bS));n=m.data;bb=0;if(bb>=a.bi){k=a.c4;l=B(661);$p=14;continue _;}bc=bb;bd=HK((bc/(a.bi-1.0)-0.5)*2.0);x=bb;t=x*100.0/(a.bi-1|0);$p=13;continue _;case 5:$z=AKk(a,p,q,r,s);if(I()){break _;}p
=$z;q=BcU.b;r=800;s=8;be=(e*3|0)/5|0;$p=6;case 6:$z=AKk(a,q,r,s,be);if(I()){break _;}be=$z;q=BcV.b;r=500;s=6;o=(e<<1)/5|0;$p=7;case 7:$z=AKk(a,q,r,s,o);if(I()){break _;}o=$z;q=Bd6.b;r=800;s=2;bf=e/5|0;$p=8;case 8:$z=AKk(a,q,r,s,bf);if(I()){break _;}q=$z;Cm(Dr(),B3(Bf(G(Bf(G(Bf(G(Bf(G(Cd(),B(662)),p),B(663)),be),B(664)),o),B(665)),q)));k=a.c4;l=B(666);$p=9;case 9:ANb(k,l);if(I()){break _;}$p=10;case 10:AAA(a);if(I()){break _;}$p=11;case 11:AA0(a);if(I()){break _;}p=e+2|0;g.kD=p;if(a.li){a.hF=(-128);a.dn=a.hF
+1|0;g.kD=(-16);}else if(a.qp)a.hF=a.dn-9|0;else{a.hF=a.dn+1|0;a.dn=a.hF-16|0;}k=a.c4;l=B(667);$p=18;continue _;case 12:AMu(a,x);if(I()){break _;}x=N(a.z)*u;bg=N(a.z)*v;bh=N(a.z)*w;j=(N(a.z)+N(a.z))*200.0|0;bi=N(a.z)*3.1415927410125732*2.0;bj=0.0;bk=N(a.z)*3.1415927410125732*2.0;bl=0.0;bm=N(a.z)*N(a.z);bn=0;bo=j;while(bn<j){a:{x=x+Bv(bi)*Bp(bk);bh=bh+Bp(bi)*Bp(bk);bg=bg+Bv(bk);bi=bi+bj*0.20000000298023224;bj=bj*0.8999999761581421+N(a.z)-N(a.z);bk=(bk+bl*0.5)*0.5;bl=bl*0.75+N(a.z)-N(a.z);if(N(a.z)>=0.25){bp=
x+(N(a.z)*4.0-2.0)*0.20000000298023224;bq=bg+(N(a.z)*4.0-2.0)*0.20000000298023224;br=bh+(N(a.z)*4.0-2.0)*0.20000000298023224;bs=1.2000000476837158+((a.cS-bq)/a.cS*3.5+1.0)*bm;bt=Bv(bn*3.1415927410125732/bo)*bs;p=bp-bt|0;q=bp+bt|0;o=bq-bt|0;bf=bq+bt|0;bu=br-bt|0;bv=br+bt|0;bw=bt*bt;while(true){if(p>q)break a;bx=o;while(bx<=bf){by=bu;while(by<=bv){b:{bz=p-bp;bA=bx-bq;bB=by-br;if(bz*bz+bA*bA*2.0+bB*bB>=bw)break b;if(p<=0)break b;if(bx<=0)break b;if(by<=0)break b;if(p>=(a.bi-1|0))break b;if(bx>=(a.cS-1|0))break b;if
(by>=(a.bS-1|0))break b;be=K(K(bx,a.bS)+by|0,a.bi)+p|0;bC=a.dd.data[be];L();if(bC!=Bcl.b)break b;a.dd.data[be]=0;}by=by+1|0;}bx=bx+1|0;}p=p+1|0;}}}bn=bn+1|0;}s=s+1|0;if(s<r){x=s*100.0/t;continue _;}L();p=BcT.b;q=1000;r=10;s=(e<<2)/5|0;$p=5;continue _;case 13:AMu(a,t);if(I()){break _;}bD=0;bE=x*1.2999999523162842;bF=bd*bd;bG=x*0.05000000074505806;while(bD<a.bS){bH=bD;bI=HK((bH/(a.bS-1.0)-0.5)*2.0);x=bD;bJ=x*1.2999999523162842;bK=KQ(y,bE,bJ)/6.0+(-4.0);bL=KQ(z,bE,bJ)/5.0+10.0+(-4.0);if(EN(ba,bc,bH)/8.0>0.0)bL
=bK;bM=Nf(bK,bL)/2.0;if(a.qp){bH=Nf(A2R(Iu(bF+bI*bI)*1.2000000476837158,EN(k,bG,x*0.05000000074505806)/4.0+1.0),Nf(bd,bI));if(bH>1.0)bH=1.0;if(bH<0.0)bH=0.0;bH=bH*bH;bM=bM*(1.0-bH)-bH*10.0+5.0;if(bM<0.0)bM=bM-bM*bM*0.20000000298023224;}else if(bM<0.0)bM=bM*0.8;n[bb+K(bD,a.bi)|0]=bM|0;bD=bD+1|0;}bb=bb+1|0;if(bb>=a.bi){k=a.c4;l=B(661);$p=14;continue _;}bc=bb;bd=HK((bc/(a.bi-1.0)-0.5)*2.0);x=bb;t=x*100.0/(a.bi-1|0);continue _;case 14:ANb(k,l);if(I()){break _;}$p=15;case 15:AAA(a);if(I()){break _;}k=SZ(El(a.z,8),
El(a.z,8));l=SZ(El(a.z,8),El(a.z,8));p=0;if(p>=a.bi){k=a.c4;l=B(668);$p=21;continue _;}t=p*100.0/(a.bi-1|0);$p=23;continue _;case 16:AAA(a);if(I()){break _;}$p=17;case 17:AAA(a);if(I()){break _;}k=a.c4;l=B(668);$p=21;continue _;case 18:ANb(k,l);if(I()){break _;}$p=19;case 19:AAA(a);if(I()){break _;}$p=20;case 20:c:{ALh(a);if(I()){break _;}if(!a.li){q=BdZ.b;if(a.eT==1)q=Bd0.b;r=0;o=d-1|0;while(r<c){Dv(a,r,a.dn-1|0,0,0,q);Dv(a,r,a.dn-1|0,o,0,q);r=r+1|0;}r=0;be=c-1|0;while(true){if(r>=d)break c;Dv(a,be,a.dn-1|
0,r,0,q);Dv(a,0,a.dn-1|0,r,0,q);r=r+1|0;}}}if(!a.eT){g.hH=10079487;g.hB=16777215;g.hn=16777215;}if(a.eT==1){g.hn=2164736;g.hB=1049600;g.hH=1049600;g.dF=7;g.ef=7;g.jo=Bcc.b;if(a.li){g.kD=p;a.dn=(-16);}}if(a.eT==2){g.hH=13033215;g.hB=13033215;g.hn=15658751;g.dF=15;g.ef=15;g.dF=16;g.kD=e+64|0;}if(a.eT==3){g.hH=7699847;g.hB=5069403;g.hn=5069403;g.dF=12;g.ef=12;}g.fD=a.dn;g.eC=a.hF;k=a.c4;l=B(669);$p=27;continue _;case 21:ANb(k,l);if(I()){break _;}$p=22;case 22:AAA(a);if(I()){break _;}bu=a.bi;bN=a.bS;bO=a.cS;bP=
El(a.z,8);bQ=El(a.z,8);s=0;bJ=bu-1.0;bg=bu-1|0;bK=bN-1.0;be=bO-2|0;if(s>=bu){k=a.c4;l=B(670);$p=24;continue _;}bH=s;bE=HK((bH/bJ-0.5)*2.0);t=s*100.0/bg;$p=26;continue _;case 23:AMu(a,t);if(I()){break _;}q=0;while(q<a.bS){bG=p<<1;bH=q<<1;bJ=KQ(k,bG,bH)/8.0;r=KQ(l,bG,bH)<=0.0?0:1;if(bJ>2.0)n[p+K(q,a.bi)|0]=(((n[p+K(q,a.bi)|0]-r|0)/2|0)<<1)+r|0;q=q+1|0;}p=p+1|0;if(p>=a.bi){k=a.c4;l=B(668);$p=21;continue _;}t=p*100.0/(a.bi-1|0);continue _;case 24:ANb(k,l);if(I()){break _;}$p=25;case 25:AAA(a);if(I()){break _;}p
=a.bi;q=a.bS;k=El(a.z,8);l=El(a.z,8);r=a.dn-1|0;if(a.eT==2)r=r+2|0;s=0;t=p-1|0;if(s<p){x=s*100.0/t;$p=38;continue _;}i=i+1|0;if(i>=f){k=a.c4;l=B(659);$p=1;continue _;}a.dn=j-(i*48|0)|0;a.hF=a.dn-2|0;if(!a.qa){k=a.c4;l=B(660);$p=3;continue _;}m=$rt_createIntArray(h);n=m.data;o=0;p=n.length;while(o<p){n[o]=0;o=o+1|0;}$p=16;continue _;case 26:AMu(a,t);if(I()){break _;}bR=0;bM=bH*2.3;while(bR<bN){n=m.data;bG=bR;bc=Nf(bE,HK((bG/bK-0.5)*2.0));bI=bc*bc*bc;bS=(EN(bP,bH,bG)/24.0|0)-4|0;q=s+K(bR,bu)|0;bT=n[q]+a.dn|0;bn
=bT+bS|0;n[q]=Df(bT,bn);if(n[q]>be)n[q]=be;if(n[q]<=0)n[q]=1;bG=EN(bQ,bM,bG*2.3)/24.0;q=((Iu(HK(bG))*AV5(bG)*20.0|0)+a.dn|0)*(1.0-bI)+bI*a.cS|0;if(q>a.dn)q=a.cS;bU=0;while(bU<bO){bv=K(K(bU,a.bS)+bR|0,a.bi)+s|0;bC=0;if(bU<=bT){L();bC=Bci.b;}if(bU<=bn){L();bC=Bcl.b;}if(a.li&&bU<q)bC=0;if(!a.dd.data[bv])a.dd.data[bv]=bC<<24>>24;bU=bU+1|0;}bR=bR+1|0;}s=s+1|0;if(s>=bu){k=a.c4;l=B(670);$p=24;continue _;}bH=s;bE=HK((bH/bJ-0.5)*2.0);t=s*100.0/bg;continue _;case 27:ANb(k,l);if(I()){break _;}$p=28;case 28:AAA(a);if(I())
{break _;}t=0.0;$p=29;case 29:AMu(a,t);if(I()){break _;}K2(g,c,e,d,a.dd,null);k=a.c4;l=B(671);$p=30;case 30:ANb(k,l);if(I()){break _;}$p=31;case 31:AAA(a);if(I()){break _;}t=0.0;$p=32;case 32:AMu(a,t);if(I()){break _;}Zw(g);AUB(g);k=a.c4;l=B(672);$p=33;case 33:ANb(k,l);if(I()){break _;}$p=34;case 34:AAA(a);if(I()){break _;}if(a.eT==1){$p=35;continue _;}$p=37;continue _;case 35:AAA(a);if(I()){break _;}$p=36;case 36:ALZ(a,g);if(I()){break _;}if(a.eT==3){c=0;if(c<50){$p=49;continue _;}}bV=100;if(a.eT==2)bV=1000;$p
=39;continue _;case 37:AL8(a,g);if(I()){break _;}$p=35;continue _;case 38:AMu(a,x);if(I()){break _;}bb=0;while(bb<q){bG=s;bH=bb;bW=EN(k,bG,bH)<=8.0?0:1;if(a.qp)bW=EN(k,bG,bH)<=(-8.0)?0:1;if(a.eT==2)bW=EN(k,bG,bH)<=(-32.0)?0:1;bX=EN(l,bG,bH)<=12.0?0:1;if(!(a.eT!=1&&a.eT!=3))bW=EN(k,bG,bH)<=(-8.0)?0:1;bD=m.data[s+K(bb,p)|0];bY=K(K(bD,a.bS)+bb|0,a.bi)+s|0;bZ=a.dd.data[K(K(bD+1|0,a.bS)+bb|0,a.bi)+s|0]&255;L();if(!(bZ!=Bcb.b&&bZ!=BdZ.b&&bZ)&&bD<=(a.dn-1|0)&&bX)a.dd.data[bY]=BcB.b<<24>>24;if(!bZ){b0=(-1);if(bD<=r
&&bW){b0=BcA.b;if(a.eT==1)b0=Bch.b;}if(a.dd.data[bY]&&b0>0)a.dd.data[bY]=b0<<24>>24;}bb=bb+1|0;}s=s+1|0;if(s<p){x=s*100.0/t;continue _;}i=i+1|0;if(i>=f){k=a.c4;l=B(659);$p=1;continue _;}a.dn=j-(i*48|0)|0;a.hF=a.dn-2|0;if(!a.qa){k=a.c4;l=B(660);$p=3;continue _;}m=$rt_createIntArray(h);n=m.data;o=0;p=n.length;while(o<p){n[o]=0;o=o+1|0;}$p=16;continue _;case 39:AAA(a);if(I()){break _;}k=Bcw;$p=40;case 40:AFm(a,g,k,bV);if(I()){break _;}$p=41;case 41:AAA(a);if(I()){break _;}k=Bcx;$p=42;case 42:AFm(a,g,k,bV);if(I())
{break _;}$p=43;case 43:AAA(a);if(I()){break _;}k=Bcy;c=50;$p=44;case 44:AFm(a,g,k,c);if(I()){break _;}$p=45;case 45:AAA(a);if(I()){break _;}k=Bcz;c=50;$p=46;case 46:AFm(a,g,k,c);if(I()){break _;}k=a.c4;l=B(673);$p=47;case 47:ANb(k,l);if(I()){break _;}$p=48;case 48:AAA(a);if(I()){break _;}c=0;if(c>=10000){k=a.c4;l=B(674);$p=50;continue _;}t=(c*100|0)/10000|0;$p=52;continue _;case 49:ALZ(a,g);if(I()){break _;}c=c+1|0;if(c<50){continue _;}bV=100;if(a.eT==2)bV=1000;$p=39;continue _;case 50:ANb(k,l);if(I()){break _;}$p
=51;case 51:AAA(a);if(I()){break _;}b1=AVZ(g);c=0;if(c>=1000){g.qG=CF();g.o_=b;g.ox=B(675);if(a.lV==a.mT)return g;J(ASw(B3(Bf(G(Bf(G(Cd(),B(676)),a.mT),B(677)),a.lV))));}t=c*100.0/999.0;$p=53;continue _;case 52:AMu(a,t);if(I()){break _;}HN(g);c=c+1|0;if(c>=10000){k=a.c4;l=B(674);$p=50;continue _;}t=(c*100|0)/10000|0;continue _;case 53:AMu(a,t);if(I()){break _;}X0(b1);c=c+1|0;if(c>=1000){g.qG=CF();g.o_=b;g.ox=B(675);if(a.lV==a.mT)return g;J(ASw(B3(Bf(G(Bf(G(Cd(),B(676)),a.mT),B(677)),a.lV))));}t=c*100.0/999.0;continue _;default:
F2();}}Dh().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,bo,bp,bq,br,bs,bt,bu,bv,bw,bx,by,bz,bA,bB,bC,bD,bE,bF,bG,bH,bI,bJ,bK,bL,bM,bN,bO,bP,bQ,bR,bS,bT,bU,bV,bW,bX,bY,bZ,b0,b1,$p);}
function AUB(b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t;c=b.g4;d=b.gY;e=b.hv;f=c-3|0;g=c+3|0;h=d-2|0;i=d+2|0;j=e-3|0;k=e+3|0;l=d-1|0;m=f;while(true){n=Bw(m,g);if(n>0)break;o=h;while(true){p=Bw(o,i);if(p>0)break;q=j;while(true){r=Bw(q,k);if(r>0)break;s=Bw(o,l);if(s>=0)t=0;else{L();t=Bc0.b;}if(!(m!=f&&q!=j&&n&&r&&o!=h&&p)){L();t=Bcl.b;if(s>=0)t=Bcp.b;}if(q==j&&m==c&&s>=0&&o<=d)t=0;By(b,m,o,q,t);q=q+1|0;}o=o+1|0;}m=m+1|0;}h=f+1|0;L();By(b,h,d,e,Bcs.b);By(b,g-1|0,d,e,Bcs.b);}
function AL8(a,b){var c,d,e,f,g,$p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=0;if(c>=a.bi)return;d=c*100.0/(a.bi-1|0);$p=1;case 1:AMu(a,d);if(I()){break _;}e=0;while(e<a.cS){f=0;while(f<a.bS){g=O(b,c,e,f);L();if(g==Bci.b){g=e+1|0;if(D5(b,c,g,f)>=4&&!CR(b,c,g,f).pP())H1(b,c,e,f,Bch.b);}f=f+1|0;}e=e+1|0;}c=c+1|0;if(c>=a.bi)return;d=c*100.0/(a.bi-1|0);continue _;default:F2();}}Dh().s(a,b,c,d,e,f,g,$p);}
function ALZ(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,$p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:c=K(K(a.bi,a.bS),a.cS)/80000|0;d=0;e=c-1|0;while(d<c){if(!(d%100|0)){f=d*100.0/e;$p=1;continue _;}g=W(a.z,a.bi);h=W(a.z,a.cS);i=W(a.z,a.bS);j=0;while(j<25){k=0;l=g;m=h;n=i;while(k<20){l=l+(W(a.z,12)-W(a.z,12)|0)|0;m=m+(W(a.z,3)-W(a.z,6)|0)|0;n=n+(W(a.z,12)-W(a.z,12)
|0)|0;if(l>=0&&m>=0&&n>=0&&l<a.bi&&m<a.cS&&n<a.bS)L_(b,l,m,n);k=k+1|0;}j=j+1|0;}d=d+1|0;}return;case 1:AMu(a,f);if(I()){break _;}while(true){g=W(a.z,a.bi);h=W(a.z,a.cS);i=W(a.z,a.bS);j=0;while(j<25){k=0;l=g;m=h;n=i;while(k<20){l=l+(W(a.z,12)-W(a.z,12)|0)|0;m=m+(W(a.z,3)-W(a.z,6)|0)|0;n=n+(W(a.z,12)-W(a.z,12)|0)|0;if(l>=0&&m>=0&&n>=0&&l<a.bi&&m<a.cS&&n<a.bS)L_(b,l,m,n);k=k+1|0;}j=j+1|0;}d=d+1|0;if(d>=c)break;if(d%100|0)continue;else{f=d*100.0/e;continue _;}}return;default:F2();}}Dh().s(a,b,c,d,e,f,g,h,i,j,k,
l,m,n,$p);}
function AFm(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,$p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:d=Long_div(Long_mul(Long_mul(Long_mul(Long_fromInt(a.bi),Long_fromInt(a.bS)),Long_fromInt(a.cS)),Long_fromInt(d)),Long_fromInt(1600000)).lo;e=0;f=d-1|0;while(e<d){if(!(e%100|0)){g=e*100.0/f;$p=1;continue _;}h=W(a.z,a.bi);i=W(a.z,a.cS);j=W(a.z,a.bS);k=0;while
(k<10){l=0;m=h;n=i;o=j;while(l<10){a:{m=m+(W(a.z,4)-W(a.z,4)|0)|0;n=n+(W(a.z,2)-W(a.z,2)|0)|0;o=o+(W(a.z,4)-W(a.z,4)|0)|0;if(m<0)break a;if(o<0)break a;if(n<=0)break a;if(m>=a.bi)break a;if(o>=a.bS)break a;if(n>=a.cS)break a;if(O(b,m,n,o))break a;if(!c.s7(b,m,n,o))break a;By(b,m,n,o,c.b);}l=l+1|0;}k=k+1|0;}e=e+1|0;}return;case 1:AMu(a,g);if(I()){break _;}while(true){h=W(a.z,a.bi);i=W(a.z,a.cS);j=W(a.z,a.bS);k=0;while(k<10){l=0;m=h;n=i;o=j;while(l<10){a:{m=m+(W(a.z,4)-W(a.z,4)|0)|0;n=n+(W(a.z,2)-W(a.z,2)|0)|
0;o=o+(W(a.z,4)-W(a.z,4)|0)|0;if(m<0)break a;if(o<0)break a;if(n<=0)break a;if(m>=a.bi)break a;if(o>=a.bS)break a;if(n>=a.cS)break a;if(O(b,m,n,o))break a;if(!c.s7(b,m,n,o))break a;By(b,m,n,o,c.b);}l=l+1|0;}k=k+1|0;}e=e+1|0;if(e>=d)break;if(e%100|0)continue;else{g=e*100.0/f;continue _;}}return;default:F2();}}Dh().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,$p);}
function AKk(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,$p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();bk=$T.l();bj=$T.l();bi=$T.l();bh=$T.l();bg=$T.l();bf=$T.l();be=$T.l();bd=$T.l();bc=$T.l();bb=$T.l();ba=$T.l();z=$T.l();y=$T.l();x=$T.l();w=$T.l();v=$T.l();u=$T.l();t=$T.l();s=$T.l();r=$T.l();q=$T.l();p=$T.l();o=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p)
{case 0:f=0;g=b<<24>>24;h=a.bi;i=a.bS;j=a.cS;k=K((K(K(h,i),j)/256|0)/64|0,c)/100|0;l=0;m=k-1|0;n=h;o=j;p=i;q=e;r=d;if(l>=k)return f;s=l*100.0/m;$p=1;case 1:AMu(a,s);if(I()){break _;}t=N(a.z)*n;u=N(a.z)*o;v=N(a.z)*p;if(u<=q){w=(N(a.z)+N(a.z))*75.0*r/100.0|0;x=N(a.z)*3.1415927410125732*2.0;y=0.0;z=N(a.z)*3.1415927410125732*2.0;ba=0.0;bb=0;bc=w;while(bb<w){t=t+Bv(x)*Bp(z);v=v+Bp(x)*Bp(z);u=u+Bv(z);x=x+y*0.20000000298023224;y=y*0.8999999761581421+N(a.z)-N(a.z);z=(z+ba*0.5)*0.5;ba=ba*0.8999999761581421+N(a.z)-N(a.z);bd
=Bv(bb*3.1415927410125732/bc)*r/100.0+1.0;be=t-bd|0;j=t+bd|0;d=u-bd|0;e=u+bd|0;h=v-bd|0;b=v+bd|0;bf=bd*bd;while(be<=j){bg=d;while(bg<=e){bh=h;while(bh<=b){a:{s=be-t;bi=bg-u;bj=bh-v;if(s*s+bi*bi*2.0+bj*bj>=bf)break a;if(be<=0)break a;if(bg<=0)break a;if(bh<=0)break a;if(be>=(a.bi-1|0))break a;if(bg>=(a.cS-1|0))break a;if(bh>=(a.bS-1|0))break a;bk=K(K(bg,a.bS)+bh|0,a.bi)+be|0;c=a.dd.data[bk];L();if(c!=Bcl.b)break a;a.dd.data[bk]=g;f=f+1|0;}bh=bh+1|0;}bg=bg+1|0;}be=be+1|0;}bb=bb+1|0;}}l=l+1|0;if(l>=k)return f;s
=l*100.0/m;continue _;default:F2();}}Dh().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,$p);}
function ALh(a){var b,c,d,e,f,g,h,i,j,$p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:L();b=BdZ.b;if(a.eT==1)b=Bd0.b;c=K(K(a.bi,a.bS),a.cS)/1000|0;d=0;e=c-1|0;while(d<c){if(!(d%100|0)){f=d*100.0/e;$p=2;continue _;}g=W(a.z,a.bi);h=W(a.z,a.cS);i=W(a.z,a.bS);if(!a.dd.data[K(K(h,a.bS)+i|0,a.bi)+g|0]){j=Dv(a,g,h,i,0,255);if(Long_gt(j,Long_ZERO)&&Long_lt(j,Long_fromInt(640)))Dv(a,g,h,i,255,b);else Dv(a,
g,h,i,255,0);}d=d+1|0;}e=100.0;$p=1;case 1:AMu(a,e);if(I()){break _;}return;case 2:AMu(a,f);if(I()){break _;}while(true){g=W(a.z,a.bi);h=W(a.z,a.cS);i=W(a.z,a.bS);if(!a.dd.data[K(K(h,a.bS)+i|0,a.bi)+g|0]){j=Dv(a,g,h,i,0,255);if(Long_gt(j,Long_ZERO)&&Long_lt(j,Long_fromInt(640)))Dv(a,g,h,i,255,b);else Dv(a,g,h,i,255,0);}d=d+1|0;if(d>=c)break;if(d%100|0)continue;else{f=d*100.0/e;continue _;}}e=100.0;$p=1;continue _;default:F2();}}Dh().s(a,b,c,d,e,f,g,h,i,j,$p);}
function AAA(a){var b,$p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:a.lV=a.lV+1|0;a.ED=0.0;b=0.0;$p=1;case 1:AMu(a,b);if(I()){break _;}return;default:F2();}}Dh().s(a,b,$p);}
function AMu(a,b){var c,d,$p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(b<0.0){c=new DE;Bd(c,B(678));J(c);}d=((a.lV-1|0)+b/100.0)*100.0/a.mT|0;c=a.c4;$p=1;case 1:ALI(c,d);if(I()){break _;}return;default:F2();}}Dh().s(a,b,c,d,$p);}
function AA0(a){var b,c,d,e,f,g,h,i,j,$p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:b=K(K(a.bi,a.bS),a.cS)/2000|0;c=a.hF;d=0;e=b-1|0;while(d<b){if(!(d%100|0)){f=d*100.0/e;$p=2;continue _;}g=W(a.z,a.bi);h=B4(B4(W(a.z,c),W(a.z,c)),B4(W(a.z,c),W(a.z,c)));i=W(a.z,a.bS);if(!a.dd.data[K(K(h,a.bS)+i|0,a.bi)+g|0]){j=Dv(a,g,h,i,0,255);if(Long_gt(j,Long_ZERO)&&Long_lt(j,Long_fromInt(640))){L();Dv(a,g,
h,i,255,Bd0.b);}else Dv(a,g,h,i,255,0);}d=d+1|0;}e=100.0;$p=1;case 1:AMu(a,e);if(I()){break _;}return;case 2:AMu(a,f);if(I()){break _;}while(true){g=W(a.z,a.bi);h=B4(B4(W(a.z,c),W(a.z,c)),B4(W(a.z,c),W(a.z,c)));i=W(a.z,a.bS);if(!a.dd.data[K(K(h,a.bS)+i|0,a.bi)+g|0]){j=Dv(a,g,h,i,0,255);if(Long_gt(j,Long_ZERO)&&Long_lt(j,Long_fromInt(640))){L();Dv(a,g,h,i,255,Bd0.b);}else Dv(a,g,h,i,255,0);}d=d+1|0;if(d>=b)break;if(d%100|0)continue;else{f=d*100.0/e;continue _;}}e=100.0;$p=1;continue _;default:F2();}}Dh().s(a,
b,c,d,e,f,g,h,i,j,$p);}
function Dv(a,b,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,ba,bb,bc;g=f<<24>>24;h=e<<24>>24;i=BU();j=1;k=1;while(1<<j<a.bi){j=j+1|0;}while(1<<k<a.bS){k=k+1|0;}l=a.bS-1|0;m=a.bi-1|0;n=1;a.ee.data[0]=(((c<<k)+d|0)<<j)+b|0;o=Long_ZERO;p=K(a.bi,a.bS);f=Bw(f,255);a:{while(n>0){n=n+(-1)|0;q=a.ee.data[n];if(!n&&CE(i)>0){a.ee=Ej(i,CE(i)-1|0);n=a.ee.data.length;}d=q>>j&l;c=j+k|0;r=q>>c;s=q&m;e=s;b:{while(e>0){if(a.dd.data[q-1|0]!=h)break b;e=e+(-1)|0;q=q+(-1)|0;}}while(s<a.bi&&a.dd.data[(q+s|0)-e|0]==h){s=
s+1|0;}t=q>>j&l;u=q>>c;if(!f){if(!e)break a;if(s==(a.bi-1|0))break a;if(!r)break a;if(r==(a.cS-1|0))break a;if(!d)break a;if(d==(a.bS-1|0))break a;}if(!(t==d&&u==r))Cm(Dr(),B(679));v=0;w=0;x=0;o=Long_add(o,Long_fromInt(s-e|0));while(e<s){a.dd.data[q]=g;if(d<=0)y=v;else{y=a.dd.data[q-a.bi|0]!=h?0:1;if(y&&!v){if(n!=a.ee.data.length)b=n;else{M(i,a.ee);a.ee=$rt_createIntArray(1048576);b=0;}z=a.ee.data;n=b+1|0;z[b]=q-a.bi|0;}}if(d>=(a.bS-1|0))ba=w;else{ba=a.dd.data[q+a.bi|0]!=h?0:1;if(ba&&!w){if(n!=a.ee.data.length)c
=n;else{M(i,a.ee);a.ee=$rt_createIntArray(1048576);c=0;}z=a.ee.data;n=c+1|0;z[c]=q+a.bi|0;}}if(r>0){z=a.dd.data;v=q-p|0;bb=z[v];L();if(!(g!=Bcc.b&&g!=Bd0.b)&&!(bb!=Bcb.b&&bb!=BdZ.b))a.dd.data[v]=Bcl.b<<24>>24;bc=bb!=h?0:1;if(bc&&!x){if(n!=a.ee.data.length)b=n;else{M(i,a.ee);a.ee=$rt_createIntArray(1048576);b=0;}z=a.ee.data;n=b+1|0;z[b]=v;}x=bc;}q=q+1|0;e=e+1|0;v=y;w=ba;}}return o;}return Long_fromInt(-1);}
function AOm(){EF.call(this);}
function AKw(){var a=new AOm();AWv(a);return a;}
function AWv(a){Z(a);}
function WC(){var a=this;CV.call(a);a.vM=null;a.BY=null;a.GQ=0;a.ff=null;a.rU=0;}
function AQe(a){ER(a.ba);Ur(1);M(a.ba,CL(0,(a.bq/2|0)-100|0,(a.bM/4|0)+120|0,B(680)));M(a.ba,CL(1,(a.bq/2|0)-100|0,(a.bM/4|0)+144|0,B(595)));Bc(a.ba,0).fb=Q(GX(a.ff))<=1?0:1;}
function AP$(a){Ur(0);}
function ABE(a){a.rU=a.rU+1|0;}
function AFr(a,b){var c,d,$p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(b.fb){if(!b.bC&&Q(GX(a.ff))>1){GX(a.ff);c=a.x;d=null;$p=2;continue _;}if(b.bC==1){b=a.x;c=a.vM;$p=1;continue _;}}return;case 1:AOJ(b,c);if(I()){break _;}return;case 2:AOJ(c,d);if(I()){break _;}c=a.x;$p=3;case 3:AEh(c);if(I()){break _;}if(b.bC!=1)return;b=a.x;c=a.vM;$p=1;continue _;default:F2();}}Dh().s(a,b,c,d,$p);}
function ANa(a,b,c){var d;if(c==14&&Q(a.ff)>0)a.ff=BO(a.ff,0,Q(a.ff)-1|0);if(Fx(B(681),b)>=0&&Q(a.ff)<64){d=new S;V(d);d=G(d,a.ff);Ce(d,b);a.ff=R(d);}Bc(a.ba,0).fb=Q(GX(a.ff))<=1?0:1;}
function AE4(a,b,c,d){var e,f,g,h,i,j,k,l,m,$p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AAW(a);if(I()){break _;}Eh(a.cJ,a.BY,a.bq/2|0,40,16777215);e=(a.bq/2|0)-100|0;f=(a.bM/2|0)-10|0;g=e-1|0;h=f-1|0;i=e+200|0;j=i+1|0;k=f+20|0;AF1(g,h,j,k+1|0,(-6250336));AF1(e,f,i,k,(-16777216));l=a.cJ;m=new S;V(m);CG(l,R(G(G(m,a.ff),(a.rU/6|0)%2|0?B(9):B(540))),e+4|
0,f+6|0,14737632);$p=2;case 2:ANU(a,b,c,d);if(I()){break _;}return;default:F2();}}Dh().s(a,b,c,d,e,f,g,h,i,j,k,l,m,$p);}
function U2(){Gz.call(this);this.zf=null;}
var Bhx=null;function A8$(a){var b=new U2();ALC(b,a);return b;}
function ALC(a,b){var c;c=OL(b);if(c!==null&&!ADR(c)){a.zf=WA(c,1,0,0);if(a.zf!==null)return;b=new HR;Z(b);J(b);}b=new HR;Z(b);J(b);}
function AIX(a){a.zf=null;}
function AD8(){Bhx=$rt_createByteArray(1);}
function VZ(){Ev.call(this);this.xv=null;}
var Bhy=null;function A8Q(a){var b=new VZ();AJ2(b,a);return b;}
function AJ2(a,b){var c,$$je;if(Eb(Oo(b))){b=new HR;Bd(b,B(682));J(b);}c=AEv(b);if(c!==null)a:{try{AH5(c,Oo(b));break a;}catch($$e){$$je=Bh($$e);if($$je instanceof BA){}else{throw $$e;}}b=new HR;Z(b);J(b);}a.xv=WA(OL(b),0,1,0);if(a.xv!==null)return;b=new HR;Z(b);J(b);}
function ALX(a){a.xv=null;}
function AHX(){Bhy=$rt_createByteArray(1);}
function P_(){var a=this;C.call(a);a.l4=0;a.to=0;a.vv=null;a.uH=null;}
function ADM(a,b){var c,d;c=0;while(c<=(3-a.l4|0)){d=0;while(d<=(3-a.to|0)){if(Zk(a,b,c,d,1))return 1;if(Zk(a,b,c,d,0))return 1;d=d+1|0;}c=c+1|0;}return 0;}
function Zk(a,b,c,d,e){var f,g,h,i,j;f=0;while(f<3){g=0;while(g<3){h=f-c|0;i=g-d|0;j=(-1);if(h>=0&&i>=0&&h<a.l4&&i<a.to)j=!e?a.vv.data[h+K(i,a.l4)|0]:a.vv.data[((a.l4-h|0)-1|0)+K(i,a.l4)|0];if(b.data[f+(g*3|0)|0]!=j)return 0;g=g+1|0;}f=f+1|0;}return 1;}
function ADH(a){return OC(a.uH.bX,a.uH.s);}
function LF(a){return K(a.l4,a.to);}
function Iv(){var a=this;C.call(a);a.DB=null;a.I6=Long_ZERO;a.In=0;a.zt=0;a.Hc=0;a.Jq=0;a.vQ=null;}
var Bhz=0;var BhA=0;function AN5(a){var b,c,d,e,f;if(a.zt){b=new DE;Z(b);J(b);}b=CZ();c=WE(a.vQ).gy();while(c.jr()){d=c.hm();e=Co(a.vQ,d);f=new Rd;f.xY=e;BI(b,d,f);}c=new Rf;c.FW=b;return c;}
function ABN(){BhA=1;}
function HR(){BA.call(this);}
function Z7(){var a=this;C.call(a);a.qb=null;a.mW=0;}
function AJa(a){a.mW=a.mW+1|0;}
function AJI(a){return a.mW<a.qb.data.length?0:1;}
function Wn(a,b){return BF(a.qb.data[a.mW].h$+(b.dK+1.0|0)*0.5,a.qb.data[a.mW].h3,a.qb.data[a.mW].is+(b.dK+1.0|0)*0.5);}
function Ic(){C.call(this);}
var A_E=null;var BhB=null;var BhC=null;var BhD=null;var A_D=null;function AKj(){var b,c;b=$rt_createIntArray(10);c=b.data;c[0]=1;c[1]=10;c[2]=100;c[3]=1000;c[4]=10000;c[5]=100000;c[6]=1000000;c[7]=10000000;c[8]=100000000;c[9]=1000000000;A_E=b;b=$rt_createLongArray(19);c=b.data;c[0]=Long_fromInt(1);c[1]=Long_fromInt(10);c[2]=Long_fromInt(100);c[3]=Long_fromInt(1000);c[4]=Long_fromInt(10000);c[5]=Long_fromInt(100000);c[6]=Long_fromInt(1000000);c[7]=Long_fromInt(10000000);c[8]=Long_fromInt(100000000);c[9]=Long_fromInt(1000000000);c[10]
=new Long(1410065408, 2);c[11]=new Long(1215752192, 23);c[12]=new Long(3567587328, 232);c[13]=new Long(1316134912, 2328);c[14]=new Long(276447232, 23283);c[15]=new Long(2764472320, 232830);c[16]=new Long(1874919424, 2328306);c[17]=new Long(1569325056, 23283064);c[18]=new Long(2808348672, 232830643);BhB=b;b=$rt_createLongArray(6);c=b.data;c[0]=Long_fromInt(1);c[1]=Long_fromInt(10);c[2]=Long_fromInt(100);c[3]=Long_fromInt(10000);c[4]=Long_fromInt(100000000);c[5]=new Long(1874919424, 2328306);BhC=b;BhD=new Yx;A_D
=new Uc;}
function Oq(){C.call(this);}
var BhE=null;var BhF=null;function AK_(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=$rt_floatToIntBits(b);c.Ab=!(d&(-2147483648))?0:1;e=d&8388607;f=d>>23&255;if(!e&&!f){c.uW=0;c.uI=0;return;}g=0;if(f)e=e|8388608;else{e=e<<1;while(Long_eq(Long_and(Long_fromInt(e),Long_fromInt(8388608)),Long_ZERO)){e=e<<1;f=f+(-1)|0;g=g+1|0;}}h=BhF.data;i=0;j=h.length;if(i>j){c=new BB;Z(c);J(c);}j=j-1|0;a:{while(true){k=(i+j|0)/2|0;l=h[k];if(l==f)break;if(f>=l){i=k+1|0;if(i>j){k= -k-2|0;break a;}}else{j=k-1|0;if(j<i){k= -k-1|0;break a;}}}}if
(k<0)k= -k-2|0;m=9+(f-BhF.data[k]|0)|0;n=Long_fromInt(e);i=Long_shru(Long_mul(n,Long_fromInt(BhE.data[k])),32-m|0).lo;if(i>=1000000000){k=k+1|0;m=9+(f-BhF.data[k]|0)|0;i=Long_shru(Long_mul(n,Long_fromInt(BhE.data[k])),32-m|0).lo;}f=(31-m|0)-g|0;j=f>=0?BhE.data[k]>>>f:BhE.data[k]<< -f;l=(j+1|0)>>1;o=j>>1;if(e==4194304)o=o>>2;p=10;while(p<=o){p=p*10|0;}if((i%p|0)>=(o/2|0))p=p/10|0;q=10;while(q<=l){q=q*10|0;}if((q-(i%q|0)|0)>(l/2|0))q=q/10|0;e=Bw(p,q);e=e>0?K(i/p|0,p):e<0?K(i/q|0,q)+q|0:K((i+(q/2|0)|0)/q|0,q);if
(e>=1000000000){k=k+1|0;e=e/10|0;}else if(e<100000000){k=k+(-1)|0;e=e*10|0;}c.uW=e;c.uI=k-50|0;}
function AJu(){var b,c,d,e,f,g,h,i;BhE=$rt_createIntArray(100);BhF=$rt_createIntArray(100);b=2000000000;c=127;d=0;e=b;while(d<50){f=BhE.data;g=d+50|0;f[g]=$rt_udiv(e,20);BhF.data[g]=c;g=$rt_udiv(e,10);h=$rt_umod(g,10);while(g<=b&&!(g&(-2147483648))){g=g<<1;c=c+1|0;h=h<<1;}e=g+(h/10|0)|0;d=d+1|0;}c=127;d=0;while(d<50){i=0;h=b;while(h>214748364){h=h>>1;i=i+1|0;c=c+(-1)|0;}h=h*10|0;b=i<=0?h:Long_add(Long_fromInt(h),Long_shr(Long_mul(Long_fromInt(b&((1<<i)-1|0)),Long_fromInt(10)),i)).lo;f=BhE.data;i=(50-d|0)-1|
0;f[i]=$rt_udiv(b,20);BhF.data[i]=c;d=d+1|0;}}
function Uc(){var a=this;C.call(a);a.uW=0;a.uI=0;a.Ab=0;}
function GE(){BA.call(this);}
function Jw(){C.call(this);}
function ACF(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,$$je;if(e>=d&&e>=0){f=BO(c,d,e);d=e-d|0;g=0;h=b.fr;i=b.iS;j=b.sH;k=b.k1;l=b.lp;m=b.hO;n=b.kT;o=Eo(f,35,0);if(EG(f,B(683))&&!EG(f,B(684))){p=2;i=(-1);e=Eo(f,47,p);g=Eo(f,63,p);if(g==(-1))g=e;else if(e!=(-1)&&e<=g)g=e;if(g==(-1)){k=B(9);g=d;}e=o==(-1)?g:o<g?o:g;q=Ft(f,64,e);m=BO(f,p,e);r=Bw(q,(-1));if(r>0){n=BO(f,p,q);p=q+1|0;}if(!r)q=p;a:{s=Eo(f,58,q);t=Fx(f,93);if(t==(-1))r=s;else{try{u=s;v=Q(f);r=t+1|0;if(v<=r){u=s;r=(-1);u=r;}else{u=s;if(P(f,
r)==58){u=r;u=s;}else{u=s;r=(-1);u=r;}u=r;}break a;}catch($$e){$$je=Bh($$e);if($$je instanceof Cq){}else{throw $$e;}}r=u;}}if(r!=(-1)&&r<=g){h=BO(f,p,r);w=BO(f,r+1|0,e);i=!Q(w)?(-1):Kg(w,10);}else h=BO(f,p,e);}r=Bw(o,(-1));if(r>0)j=BO(f,o+1|0,d);r=r?o:d;v=Ft(f,63,r);u=0;if(v<=(-1)){if(!o)v=r;else{l=null;v=r;}}else{l=BO(f,v+1|0,r);if(!v&&k!==null){if(BW(k,B(9)))k=B(30);else if(EG(k,B(30)))u=1;k=BO(k,0,Gt(k,47)+1|0);}}if(g>(-1)){if(g<d&&P(f,g)==47)k=BO(f,g,v);else if(v>g){if(k===null)k=B(9);else if(BW(k,B(9)))k
=B(30);else if(EG(k,B(30)))u=1;x=Gt(k,47)+1|0;if(!x)k=BO(f,g,v);else{c=new S;V(c);k=R(G(G(c,BO(k,0,x)),BO(f,g,v)));}}}if(k===null)k=B(9);if(h===null)h=B(9);if(u)k=AVs(k);KN(b,b.de,h,i,m,n,k,l,j);return;}b:{if(e<=(-2147483647)){if(d>=Q(c))break b;if(d<0)break b;}if(!(Pg(c,B(683),d)&&Eo(c,47,d+2|0)==(-1)))return;}b=new Iq;c=new S;V(c);Bd(b,R(Bf(G(c,B(685)),e)));J(b);}
function AVs(b){var c,d,e;while(true){c=LI(b,B(686));if(c<0)break;d=new S;V(d);b=R(G(G(d,BO(b,0,c+1|0)),DO(b,c+3|0)));}if(Ou(b,B(687)))b=BO(b,0,Q(b)-1|0);while(true){e=LI(b,B(688));if(e<0)break;if(!e){b=DO(b,e+3|0);continue;}d=new S;V(d);b=R(G(G(d,BO(b,0,Ft(b,47,e-1|0))),DO(b,e+3|0)));}if(Ou(b,B(689))&&Q(b)>3)b=BO(b,0,Ft(b,47,Q(b)-4|0)+1|0);return b;}
function AVQ(a,b,c,d,e,f,g,h,i,j){KN(b,c,d,e,f,g,h,i,j);}
function AEw(a,b){var c,d,e,f;c=new S;V(c);G(c,b.de);Ce(c,58);d=b.hO;if(d!==null&&Q(d)>0){G(c,B(683));G(c,b.hO);}e=b.iX;f=b.sH;if(e!==null)G(c,e);if(f!==null){Ce(c,35);G(c,f);}return R(c);}
function Yx(){C.call(this);}
function Gv(){C.call(this);}
function ADA(){var a=this;Gv.call(a);a.AI=null;a.CD=null;}
function SZ(a,b){var c=new ADA();AU_(c,a,b);return c;}
function AU_(a,b,c){a.AI=b;a.CD=c;}
function KQ(a,b,c){return EN(a.AI,b+EN(a.CD,b,c),c);}
function ADm(){var a=this;Gv.call(a);a.yA=null;a.DW=0;}
function El(a,b){var c=new ADm();A6d(c,a,b);return c;}
function A6d(a,b,c){var d,e,f,g,h,i,j;a.DW=c;a.yA=H(NO,c);d=0;while(d<c){e=a.yA;f=new NO;f.dp=$rt_createIntArray(512);g=0;while(g<256){h=f.dp.data;i=g+1|0;h[g]=g;g=i;}g=0;while(g<256){i=W(b,256-g|0)+g|0;j=f.dp.data[g];f.dp.data[g]=f.dp.data[i];f.dp.data[i]=j;f.dp.data[g+256|0]=f.dp.data[g];g=g+1|0;}e.data[d]=f;d=d+1|0;}}
function EN(a,b,c){var d,e,f;d=0.0;e=1.0;f=0;while(f<a.DW){d=d+AN1(a.yA.data[f],b/e,c/e)*e;e=e*2.0;f=f+1|0;}return d;}
function ZT(){Dn.call(this);this.E4=null;}
function ARP(a){var b,c;b=ABm(AFU(a.E4));c=new TA;c.Jf=a;c.w_=b;return c;}
function QD(){Jw.call(this);}
function A7S(a,b){var c,d,e;c=new QW;c.I6=Long_fromInt(-1);c.In=BhA;c.Hc=1;c.Jq=Bhz;c.vQ=CZ();c.DB=b;d=H(BC,7);e=d.data;e[0]=B(690);e[1]=B(167);e[2]=B(691);e[3]=B(692);e[4]=B(693);e[5]=B(694);e[6]=B(695);c.GM=d;c.z$=B(690);c.i8=(-1);c.HE=BhG;c.KD=(-1);c.JU=(-1);c.wk=CZ();c.q0=CZ();return c;}
function ADy(){Jw.call(this);this.Jy=0;}
function AZ0(a){var b=new ADy();ATA(b,a);return b;}
function ATA(a,b){a.Jy=b;}
function A1p(a,b){var c,d;c=new BA;d=new S;V(d);Bd(c,R(G(G(d,B(696)),b.de)));J(c);}
function NO(){Gv.call(this);this.dp=null;}
function Xj(b){return b*b*b*(b*(b*6.0-15.0)+10.0);}
function Hl(b,c,d){return c+b*(d-c);}
function GR(b,c,d,e){var f;b=b&15;f=b>=8?d:c;if(b>=4)d=b!=12&&b!=14?e:c;if(b&1)f= -f;if(b&2)d= -d;return f+d;}
function AN1(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=Em(b)&255;e=Em(c)&255;f=Em(0.0)&255;g=b-Em(b);b=c-Em(c);c=0.0-Em(0.0);h=Xj(g);i=Xj(b);j=Xj(c);k=a.dp.data[d]+e|0;l=a.dp.data[k]+f|0;k=a.dp.data[k+1|0]+f|0;d=a.dp.data[d+1|0]+e|0;e=a.dp.data[d]+f|0;f=a.dp.data[d+1|0]+f|0;m=GR(a.dp.data[l],g,b,c);d=a.dp.data[e];n=g-1.0;o=Hl(h,m,GR(d,n,b,c));d=a.dp.data[k];p=b-1.0;q=Hl(i,o,Hl(h,GR(d,g,p,c),GR(a.dp.data[f],n,p,c)));d=a.dp.data[l+1|0];c=c-1.0;return Hl(j,q,Hl(i,Hl(h,GR(d,g,b,c),GR(a.dp.data[e+1|0],n,b,c)),Hl(h,
GR(a.dp.data[k+1|0],g,p,c),GR(a.dp.data[f+1|0],n,p,c))));}
function NN(){var a=this;C.call(a);a.hC=null;a.ms=null;}
function AV9(a){return a.ms;}
function Vo(a,b){var c;c=a.ms;a.ms=b;return c;}
function ATI(a){return a.hC;}
function A1Q(a,b){var c;if(!Jb(b,HO))return 0;a:{c=b;if(a.hC===null){if(c.nU()===null)break a;}else if(ZV(a.hC,c.nU()))break a;return 0;}return a.ms!==null?ZV(a.ms,c.mM()):c.mM()!==null?0:1;}
function IG(){var a=this;NN.call(a);a.d3=null;a.dU=null;a.kI=0;a.kO=0;}
function AIB(a){var b;b=M0(a);if(b==2){if(M0(a.dU)<0)a.dU=Qn(a.dU);return Rc(a);}if(b!=(-2))return a;if(M0(a.d3)>0)a.d3=Rc(a.d3);return Qn(a);}
function M0(a){return (a.dU===null?0:a.dU.kI)-(a.d3===null?0:a.d3.kI)|0;}
function Qn(a){var b;b=a.d3;a.d3=b.dU;b.dU=a;JM(a);JM(b);return b;}
function Rc(a){var b;b=a.dU;a.dU=b.d3;b.d3=a;JM(a);JM(b);return b;}
function JM(a){var b,c;b=a.dU===null?0:a.dU.kI;c=a.d3===null?0:a.d3.kI;a.kI=Df(b,c)+1|0;a.kO=1;if(a.d3!==null)a.kO=a.kO+a.d3.kO|0;if(a.dU!==null)a.kO=a.kO+a.dU.kO|0;}
function G2(a,b){return b?a.dU:a.d3;}
function Jn(a,b){return b?a.d3:a.dU;}
function TA(){var a=this;C.call(a);a.w_=null;a.Jf=null;}
function AV3(a){return AML(a.w_);}
function A3l(a){return XY(a.w_).hC;}
function K6(){var a=this;Iv.call(a);a.GM=null;a.z$=null;a.i8=0;a.vs=null;a.HE=0;a.KD=0;a.JU=0;}
var BhG=0;function AFq(){BhG=1;}
function QW(){var a=this;K6.call(a);a.gR=null;a.CQ=null;a.n1=null;a.CZ=null;a.wk=null;a.I0=null;a.Gh=null;a.q0=null;a.zM=0;}
function AOz(a){var b,c,d,e,f,g;if(a.zt)return;a.gR=new XMLHttpRequest();b=a.gR;c=a.z$;d=S1(a.DB);b.open($rt_ustr(c),$rt_ustr(d));b=AMI(ANt(AN5(a)));while(AJs(b)){c=UZ(b);e=Hq(c.wX);while(JO(e)){f=Il(e);g=a.gR;d=c.vR;g.setRequestHeader($rt_ustr(d),$rt_ustr(f));}}b=a.gR;c="arraybuffer";b.responseType=c;a.zt=1;}
function AAf(a){var thread=$rt_nativeThread();var javaThread=$rt_getThread();if(thread.isResuming()){thread.status=0;var result=thread.attribute;if(result instanceof Error){throw result;}return result;}var callback=function(){};callback.Hp=function(val){thread.attribute=val;$rt_setThread(javaThread);thread.resume();};callback.J4=function(e){thread.attribute=$rt_exception(e);$rt_setThread(javaThread);thread.resume();};callback=A9g(callback);return thread.suspend(function(){try{AVm(a,callback);}catch($e){callback.J4($rt_exception($e));}});}
function AVm(a,b){var c,d,e,f,g,h;c=a.gR;d=new W8;d.Fe=a;d.Ff=b;b=Cs(d,"stateChanged");c.onreadystatechange=b;if(a.CQ===null)a.gR.send();else{e=a.CQ.JW().data;f=e.length;c=new Int8Array(f);g=0;while(g<f){h=e[g];c[g]=h;g=g+1|0;}b=a.gR;c=c.buffer;b.send(c);}}
function AKR(a){var b,c,d,$p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:AOz(a);if(a.zM){b=a.i8/100|0;if(b!=4&&b!=5)return a.n1;a.n1=Ju($rt_createByteArray(0));c=new BA;d=new S;V(d);Bd(c,R(G(G(Bf(G(d,B(697)),a.i8),B(698)),a.vs)));J(c);}a.zM=1;$p=1;case 1:AAf(a);if(I()){break _;}b=a.i8/100|0;if(b!=4&&b!=5)return a.n1;a.n1=Ju($rt_createByteArray(0));c=new BA;d=new S;V(d);Bd(c,R(G(G(Bf(G(d,B(697)),a.i8),B(698)),a.vs)));J(c);default:F2();}}Dh().s(a,
b,c,d,$p);}
function YO(){var a=this;C.call(a);a.Bq=null;a.Fr=null;a.wz=0;a.qY=0;}
function O4(a){return DH(a.Bq);}
function AIv(a,b){return BV(a.Fr)<b?0:1;}
function A7f(a,b){a.wz=b;}
function A51(a,b){a.qY=b;}
function Xq(){var a=this;C.call(a);a.h=null;a.fL=0;a.uz=null;a.z5=0;a.iz=0;a.ku=0;a.dh=0;a.vo=null;}
function AJD(a,b){var c,d,e,f,g,h,i,j;c=new XM;c.q7=(-1);c.s0=(-1);c.Gz=a;c.Fz=a.vo;c.p4=b;c.q7=0;c.s0=Q(c.p4);d=new YR;e=c.q7;f=c.s0;g=a.iz;h=ANu(a);i=AEO(a);d.lm=(-1);j=g+1|0;d.Ax=j;d.gv=$rt_createIntArray(j*2|0);d.pj=$rt_createIntArray(i);Js(d.pj,(-1));if(h>0)d.yb=$rt_createIntArray(h);Js(d.gv,(-1));ZU(d,b,e,f);c.du=d;return c;}
function AH9(a,b,c){var d,e,f,g,h,i;d=BU();e=AJD(a,b);f=0;g=0;if(!Q(b)){h=H(BC,1);h.data[0]=B(9);return h;}while(ACT(e)){i=f+1|0;if(i>=c&&c>0)break;M(d,BO(b,g,AGN(e)));g=AJm(e);f=i;}a:{M(d,BO(b,g,Q(b)));f=f+1|0;if(!c)while(true){f=f+(-1)|0;if(f<0)break;if(Q(Bc(d,f)))break a;Ej(d,f);}}if(f<0)f=0;return HW(d,H(BC,f));}
function AH8(a,b){return AH9(a,b,0);}
function Ok(a){return a.h.eG;}
function U8(a,b,c,d){var e,f,g,h,i;e=BU();f=a.fL;g=0;if(c!=a.fL)a.fL=c;a:{switch(b){case -1073741784:h=new Sl;c=a.dh+1|0;a.dh=c;H2(h,c);break a;case -536870872:case -268435416:break;case -134217688:case -67108824:h=new RF;c=a.dh+1|0;a.dh=c;H2(h,c);break a;case -33554392:h=new S5;c=a.dh+1|0;a.dh=c;H2(h,c);break a;default:a.iz=a.iz+1|0;if(d!==null)h=A$V(a.iz);else{h=new HA;H2(h,0);g=1;}if(a.iz<=(-1))break a;if(a.iz>=10)break a;a.uz.data[a.iz]=h;break a;}h=new ZX;H2(h,(-1));}while(true){if(GJ(a.h)&&a.h.B==(-536870788))
{d=A7l(CU(a,2),CU(a,64));while(!EE(a.h)&&GJ(a.h)&&!(a.h.B&&a.h.B!=(-536870788)&&a.h.B!=(-536870871))){Dq(d,Bz(a.h));if(a.h.cB!=(-536870788))continue;Bz(a.h);}i=MX(a,d);i.cg(h);}else if(a.h.cB==(-536870788)){i=JQ(h);Bz(a.h);}else{i=Wy(a,h);if(a.h.cB==(-536870788))Bz(a.h);}if(i!==null)M(e,i);if(EE(a.h))break;if(a.h.cB==(-536870871))break;}if(a.h.q_==(-536870788))M(e,JQ(h));if(a.fL!=f&&!g){a.fL=f;AIC(a.h,a.fL);}switch(b){case -1073741784:break;case -536870872:d=new Vx;HB(d,e,h);return d;case -268435416:d=new Zh;HB(d,
e,h);return d;case -134217688:d=new Xt;HB(d,e,h);return d;case -67108824:d=new Ts;HB(d,e,h);return d;case -33554392:d=new Fb;HB(d,e,h);return d;default:switch(e.q){case 0:break;case 1:return A$Q(Bc(e,0),h);default:return A9e(e,h);}return JQ(h);}d=new LY;HB(d,e,h);return d;}
function AMN(a){var b,c,d,e,f,g;b=$rt_createIntArray(4);c=(-1);d=(-1);if(!EE(a.h)&&GJ(a.h)){e=b.data;c=Bz(a.h);e[0]=c;d=c-4352|0;}if(d>=0&&d<19){e=$rt_createCharArray(3);b=e.data;b[0]=c&65535;f=a.h.cB;c=f-4449|0;if(c>=0&&c<21){b[1]=f&65535;Bz(a.h);f=a.h.cB;d=f-4519|0;if(d>=0&&d<28){b[2]=f&65535;Bz(a.h);return A7a(e,3);}return A7a(e,2);}if(!CU(a,2))return AB6(b[0]);if(CU(a,64))return A5S(b[0]);return A0R(b[0]);}e=b.data;c=1;while(c<4&&!EE(a.h)&&GJ(a.h)){f=c+1|0;e[c]=Bz(a.h);c=f;}if(c==1){f=e[0];if(!(BhH.v$(f)
==BhI?0:1))return U3(a,e[0]);}if(!CU(a,2))return A_l(b,c);if(CU(a,64)){g=new UY;QN(g,b,c);return g;}g=new Ys;QN(g,b,c);return g;}
function Wy(a,b){var c,d,e,f;if(GJ(a.h)&&!Mi(a.h)&&OB(a.h.B)){if(CU(a,128)){c=AMN(a);if(!EE(a.h)&&!(a.h.cB==(-536870871)&&!(b instanceof HA))&&a.h.cB!=(-536870788)&&!GJ(a.h))c=NG(a,b,c);}else if(!V3(a.h)&&!YS(a.h)){d=new Kh;V(d);while(!EE(a.h)&&GJ(a.h)&&!V3(a.h)&&!YS(a.h)&&!(!(!Mi(a.h)&&!a.h.B)&&!(!Mi(a.h)&&OB(a.h.B))&&a.h.B!=(-536870871)&&(a.h.B&(-2147418113))!=(-2147483608)&&a.h.B!=(-536870788)&&a.h.B!=(-536870876))){e=Bz(a.h);if(!NC(e))Ce(d,e&65535);else Ib(d,JE(e));}if(!CU(a,2))c=A89(d);else if(CU(a,64))c
=A_j(d);else{c=new Qq;E9(c);c.p5=R(d);c.c_=PP(d);}}else c=NG(a,b,ZK(a,b));}else if(a.h.cB!=(-536870871))c=NG(a,b,ZK(a,b));else{if(b instanceof HA)J(CC(B(9),a.h.eG,a.h.ic));c=JQ(b);}if(!EE(a.h)&&!(a.h.cB==(-536870871)&&!(b instanceof HA))&&a.h.cB!=(-536870788)){f=Wy(a,b);if(c instanceof Ef&&!(c instanceof Hi)&&!(c instanceof D7)&&!(c instanceof Gj)){b=c;if(!f.dQ(b.bW)){c=new UB;Gx(c,b.bW,b.m,b.qm);c.bW.cg(c);}}if((f.pf()&65535)!=43)c.cg(f);else c.cg(f.bW);}else{if(c===null)return null;c.cg(b);}if((c.pf()&65535)
!=43)return c;return c.bW;}
function NG(a,b,c){var d,e,f,g;d=a.h.cB;if(c!==null&&!(c instanceof CA)){switch(d){case -2147483606:Bz(a.h);e=new Vl;Et(e,c,b,d);c.cg(BhJ);return e;case -2147483605:Bz(a.h);e=new WW;Et(e,c,b,(-2147483606));c.cg(BhJ);return e;case -2147483585:Bz(a.h);e=new Rt;Et(e,c,b,(-536870849));c.cg(BhJ);return e;case -2147483525:e=new Qm;f=HU(a.h);d=a.ku+1|0;a.ku=d;NS(e,f,c,b,(-536870849),d);c.cg(BhJ);return e;case -1073741782:case -1073741781:Bz(a.h);f=new Sf;Et(f,c,b,d);c.cg(f);return f;case -1073741761:Bz(a.h);f=new Xc;Et(f,
c,b,(-536870849));c.cg(b);return f;case -1073741701:f=new T0;e=HU(a.h);g=a.ku+1|0;a.ku=g;NS(f,e,c,b,(-536870849),g);c.cg(f);return f;case -536870870:case -536870869:Bz(a.h);if(c.pf()!=(-2147483602)){f=new D7;Et(f,c,b,d);}else if(CU(a,32)){f=new Sh;Et(f,c,b,d);}else{f=new Wa;e=WI(a.fL);Et(f,c,b,d);f.uS=e;}c.cg(f);return f;case -536870849:Bz(a.h);f=new Is;Et(f,c,b,(-536870849));c.cg(b);return f;case -536870789:f=new HV;e=HU(a.h);g=a.ku+1|0;a.ku=g;NS(f,e,c,b,(-536870849),g);c.cg(f);return f;default:}return c;}e
=null;if(c!==null)e=c;switch(d){case -2147483606:case -2147483605:Bz(a.h);f=new Z$;Gx(f,e,b,d);e.m=f;return f;case -2147483585:Bz(a.h);c=new Uw;Gx(c,e,b,(-2147483585));return c;case -2147483525:c=new Wx;SC(c,HU(a.h),e,b,(-2147483525));return c;case -1073741782:case -1073741781:Bz(a.h);f=new W$;Gx(f,e,b,d);e.m=f;return f;case -1073741761:Bz(a.h);c=new Yu;Gx(c,e,b,(-1073741761));return c;case -1073741701:c=new R5;SC(c,HU(a.h),e,b,(-1073741701));return c;case -536870870:case -536870869:Bz(a.h);f=A9w(e,b,d);e.m
=f;return f;case -536870849:Bz(a.h);c=new Gj;Gx(c,e,b,(-536870849));return c;case -536870789:return A$n(HU(a.h),e,b,(-536870789));default:}return c;}
function ZK(a,b){var c,d,e,f,g,h,i;c=null;d=b instanceof HA;while(true){a:{e=Lu(a.h);if((e&(-2147418113))==(-2147483608)){Bz(a.h);f=(e&16711680)>>16;e=e&(-16711681);if(e==(-16777176))a.fL=f;else{if(e!=(-1073741784))f=a.fL;c=U8(a,e,f,b);if(Lu(a.h)!=(-536870871))J(CC(B(9),ET(a.h),IH(a.h)));Bz(a.h);}}else{b:{c:{switch(e){case -2147483599:case -2147483598:case -2147483597:case -2147483596:case -2147483595:case -2147483594:case -2147483593:case -2147483592:case -2147483591:g=(e&2147483647)-48|0;if(a.iz<g)J(CC(B(9),
ET(a.h),IH(a.h)));Bz(a.h);a.dh=a.dh+1|0;c=!CU(a,2)?A94(g,a.dh):CU(a,64)?A87(g,a.dh):A_i(g,a.dh);a.uz.data[g].xg=1;a.z5=1;break a;case -2147483583:break;case -2147483582:Bz(a.h);c=A6Z(0);break a;case -2147483577:Bz(a.h);c=A80();break a;case -2147483558:Bz(a.h);c=new US;g=a.dh+1|0;a.dh=g;ANe(c,g);break a;case -2147483550:Bz(a.h);c=A6Z(1);break a;case -2147483526:Bz(a.h);c=A9N();break a;case -536870876:break c;case -536870866:Bz(a.h);if(CU(a,32)){c=A9X();break a;}c=A9A(WI(a.fL));break a;case -536870821:Bz(a.h);h
=0;if(Lu(a.h)==(-536870818)){h=1;Bz(a.h);}c=AEy(a,h,b);if(Lu(a.h)!=(-536870819))J(CC(B(9),ET(a.h),IH(a.h)));Wr(a.h,1);Bz(a.h);break a;case -536870818:Bz(a.h);a.dh=a.dh+1|0;if(!CU(a,8)){c=AXp();break a;}c=A$6(WI(a.fL));break a;case 0:i=RA(a.h);if(i!==null)c=MX(a,i);else{if(EE(a.h)){c=JQ(b);break a;}c=AB6(e&65535);}Bz(a.h);break a;default:break b;}Bz(a.h);c=AXp();break a;}Bz(a.h);a.dh=a.dh+1|0;if(CU(a,8)){if(CU(a,1)){c=A88(a.dh);break a;}c=A8I(a.dh);break a;}if(CU(a,1)){c=A9i(a.dh);break a;}c=A9H(a.dh);break a;}if
(e>=0&&!I7(a.h)){c=U3(a,e);Bz(a.h);}else if(e==(-536870788))c=JQ(b);else{if(e!=(-536870871))J(CC(!I7(a.h)?UO(e&65535):RA(a.h).eM(),ET(a.h),IH(a.h)));if(d)J(CC(B(9),ET(a.h),IH(a.h)));c=JQ(b);}}}if(e!=(-16777176))break;}return c;}
function AEy(a,b,c){var d;d=MX(a,Jp(a,b));d.cg(c);return d;}
function Jp(a,b){var c,d,e,f,g,h,i,j,$$je;c=A7l(CU(a,2),CU(a,64));FY(c,b);d=(-1);e=0;f=0;g=1;a:{b:{c:while(true){if(EE(a.h))break a;f=a.h.cB==(-536870819)&&!g?0:1;if(!f)break a;d:{switch(a.h.cB){case -536870874:if(d>=0)Dq(c,d);d=Bz(a.h);if(a.h.cB!=(-536870874)){d=38;break d;}if(a.h.B==(-536870821)){Bz(a.h);e=1;d=(-1);break d;}Bz(a.h);if(g){c=Jp(a,0);break d;}if(a.h.cB==(-536870819))break d;UF(c,Jp(a,0));break d;case -536870867:if(!g&&a.h.B!=(-536870819)&&a.h.B!=(-536870821)&&d>=0){Bz(a.h);h=a.h.cB;if(I7(a.h))break c;if
(h<0&&a.h.B!=(-536870819)&&a.h.B!=(-536870821)&&d>=0)break c;e:{try{if(OB(h))break e;h=h&65535;break e;}catch($$e){$$je=Bh($$e);if($$je instanceof Cq){break b;}else{throw $$e;}}}try{Cy(c,d,h);}catch($$e){$$je=Bh($$e);if($$je instanceof Cq){break b;}else{throw $$e;}}Bz(a.h);d=(-1);break d;}if(d>=0)Dq(c,d);d=45;Bz(a.h);break d;case -536870821:if(d>=0){Dq(c,d);d=(-1);}Bz(a.h);i=0;if(a.h.cB==(-536870818)){Bz(a.h);i=1;}if(!e)AHL(c,Jp(a,i));else UF(c,Jp(a,i));e=0;Bz(a.h);break d;case -536870819:if(d>=0)Dq(c,d);d=
93;Bz(a.h);break d;case -536870818:if(d>=0)Dq(c,d);d=94;Bz(a.h);break d;case 0:if(d>=0)Dq(c,d);j=a.h.lo;if(j===null)d=0;else{AOA(c,j);d=(-1);}Bz(a.h);break d;default:}if(d>=0)Dq(c,d);d=Bz(a.h);}g=0;}J(CC(B(9),Ok(a),a.h.ic));}J(CC(B(9),Ok(a),a.h.ic));}if(!f){if(d>=0)Dq(c,d);return c;}J(CC(B(9),Ok(a),a.h.ic-1|0));}
function U3(a,b){var c,d,e;c=NC(b);if(CU(a,2)){a:{if(!(b>=97&&b<=122)){if(b<65)break a;if(b>90)break a;}return A0R(b&65535);}if(CU(a,64)&&b>128){if(c){d=new Vr;E9(d);d.c_=2;d.A$=Hy(Hw(b));return d;}if(Rj(b))return AVc(b&65535);if(!SP(b))return A5S(b&65535);return A2$(b&65535);}}if(!c){if(Rj(b))return AVc(b&65535);if(!SP(b))return AB6(b&65535);return A2$(b&65535);}d=new Fi;E9(d);d.c_=2;d.kV=b;e=JE(b).data;d.t0=e[0];d.sU=e[1];return d;}
function MX(a,b){var c,d,e;if(!AKY(b)){if(!b.cf){if(b.op())return ASN(b);return AXj(b);}if(!b.op())return A3m(b);c=new NT;YA(c,b);return c;}c=AA9(b);d=new P$;Cx(d);d.AQ=c;d.IE=c.co;if(!b.cf){if(b.op())return AE0(ASN(Lh(b)),d);return AE0(AXj(Lh(b)),d);}if(!b.op())return AE0(A3m(Lh(b)),d);c=new RT;e=new NT;YA(e,Lh(b));AGS(c,e,d);return c;}
function AZC(a){return a.iz;}
function ANu(a){return a.ku+1|0;}
function AEO(a){return a.dh+1|0;}
function Li(b){if(b>=97&&b<=122)b=(b-32|0)&65535;else if(b>=65&&b<=90)b=(b+32|0)&65535;return b;}
function CU(a,b){return (a.fL&b)!=b?0:1;}
function VR(){var a=this;Do.call(a);a.nd=null;a.hU=null;a.oY=0;a.rM=0;a.Bv=0.0;}
function AKJ(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,$p,$z;$p=0;if(F7()){var $T=Dh();$p=$T.l();n=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:i=(a.oY+c)/a.rM;d=i*i;j=a.nd.f;k=a.nd.j;i=a.nd.g;l=a.hU.eb+(a.hU.f-a.hU.eb)*c;e=a.hU.ea+(a.hU.j-a.hU.ea)*c+a.Bv;m=a.hU.d_+(a.hU.g-a.hU.d_)*c;f=j+(l-j)*d;e=k+(e-k)*d;d=i+(m-i)*d;g=DT(a.A,f|0,e|0,d|0);BJ(g,g,g,1.0);b=BdI;n=a.nd;g=a.nd.I;$p=1;case 1:AF6(b,n,f,e,d,g,c);if
(I()){break _;}return;default:F2();}}Dh().s(a,b,c,d,e,f,g,h,i,j,k,l,m,n,$p);}
function ARN(a){a.oY=a.oY+1|0;if(a.oY==a.rM)CN(a);}
function AZ$(a){return 2;}
function Zx(){}
function Xm(){var a=this;C.call(a);a.C1=null;a.m1=null;}
function ADR(a){var b;b=Ml(a);return b!==null&&b.yU()?1:0;}
function WA(a,b,c,d){var e;e=Ml(a);return e===null?null:e.up(b,c,d);}
function AH5(a,b){var c;c=Ml(a);if(c===null){c=new BA;Bd(c,B(699));J(c);}return c.zT(b)===null?0:1;}
function Ml(a){var b,c,d;b=a.C1.Am;c=0;if(EG(a.m1,B(30)))c=1;a:{while(c<Q(a.m1)){d=Eo(a.m1,47,c);if(d<0)d=Q(a.m1);b=b.Fx(BO(a.m1,c,d));if(b===null)break a;c=d+1|0;}}return b;}
function ES(){BB.call(this);}
function B_(){var a=this;C.call(a);a.m=null;a.eH=0;a.DO=null;a.qm=0;}
var A_z=0;function BhK(){var a=new B_();Cx(a);return a;}
function BhL(a){var b=new B_();ON(b,a);return b;}
function Cx(a){var b,c;b=new GS;c=A_z;A_z=c+1|0;Mv(b,c);a.DO=ND(b);}
function ON(a,b){var c,d;c=new GS;d=A_z;A_z=d+1|0;Mv(c,d);a.DO=ND(c);a.m=b;}
function Kk(a,b,c,d){var e;e=d.bO;while(true){if(b>e)return (-1);if(a.e(b,c,d)>=0)break;b=b+1|0;}return b;}
function Kt(a,b,c,d,e){while(true){if(c<b)return (-1);if(a.e(c,d,e)>=0)break;c=c+(-1)|0;}return c;}
function A02(a,b){a.qm=b;}
function A0J(a){return a.qm;}
function AWO(a){return a.m;}
function AXy(a,b){a.m=b;}
function A7c(a,b){return 1;}
function A7U(a){return null;}
function L2(a){var b;a.eH=1;if(a.m!==null){if(!a.m.eH){b=a.m.lU();if(b!==null){a.m.eH=1;a.m=b;}a.m.i7();}else if(a.m instanceof JG&&a.m.f3.xg)a.m=a.m.m;}}
function AG9(){A_z=1;}
function D6(){var a=this;B_.call(a);a.xg=0;a.ih=0;}
var BhJ=null;function A$V(a){var b=new D6();H2(b,a);return b;}
function H2(a,b){Cx(a);a.ih=b;}
function APS(a,b,c,d){var e,f;e=KT(d,a.ih);N6(d,a.ih,b);f=a.m.e(b,c,d);if(f<0)N6(d,a.ih,e);return f;}
function A4c(a){return a.ih;}
function AQf(a,b){return 0;}
function AJq(){var b;b=new V5;Cx(b);BhJ=b;}
function I0(){var a=this;C.call(a);a.bR=null;a.mv=0;a.h4=0;a.Cy=0;a.q_=0;a.cB=0;a.B=0;a.ER=0;a.lo=null;a.jK=null;a.be=0;a.qz=0;a.ic=0;a.p3=0;a.eG=null;}
var BhM=null;var BhH=null;var BhI=0;function Lu(a){return a.cB;}
function Wr(a,b){if(b>0&&b<3)a.h4=b;if(b==1){a.B=a.cB;a.jK=a.lo;a.be=a.p3;a.p3=a.ic;Hg(a);}}
function AIC(a,b){a.mv=b;a.B=a.cB;a.jK=a.lo;a.be=a.ic+1|0;a.p3=a.ic;Hg(a);}
function RA(a){return a.lo;}
function I7(a){return a.lo===null?0:1;}
function Mi(a){return a.jK===null?0:1;}
function Bz(a){Hg(a);return a.q_;}
function HU(a){var b;b=a.lo;Hg(a);return b;}
function AZ2(a){return a.B;}
function AR2(a){return a.q_;}
function Hg(a){var b,c,d,e,f,$$je;a.q_=a.cB;a.cB=a.B;a.lo=a.jK;a.ic=a.p3;a.p3=a.be;while(true){b=0;a.B=a.be>=a.bR.data.length?0:No(a);a.jK=null;if(a.h4==4){if(a.B!=92)return;a.B=a.be>=a.bR.data.length?0:a.bR.data[Cw(a)];switch(a.B){case 69:break;default:a.B=92;a.be=a.qz;return;}a.h4=a.Cy;a.B=a.be>(a.bR.data.length-2|0)?0:No(a);}a:{if(a.B!=92){if(a.h4==1)switch(a.B){case 36:a.B=(-536870876);break a;case 40:if(a.bR.data[a.be]!=63){a.B=(-2147483608);break a;}Cw(a);c=a.bR.data[a.be];d=0;while(true){b:{if(d){d=0;switch
(c){case 33:break;case 61:a.B=(-134217688);Cw(a);break b;default:J(CC(B(9),ET(a),a.be));}a.B=(-67108824);Cw(a);}else{switch(c){case 33:break;case 60:Cw(a);c=a.bR.data[a.be];d=1;break b;case 61:a.B=(-536870872);Cw(a);break b;case 62:a.B=(-33554392);Cw(a);break b;default:a.B=AOt(a);if(a.B<256){a.mv=a.B;a.B=a.B<<16;a.B=(-1073741784)|a.B;break b;}a.B=a.B&255;a.mv=a.B;a.B=a.B<<16;a.B=(-16777176)|a.B;break b;}a.B=(-268435416);Cw(a);}}if(!d)break;}break a;case 41:a.B=(-536870871);break a;case 42:case 43:case 63:switch
(a.be>=a.bR.data.length?42:a.bR.data[a.be]){case 43:a.B=a.B|(-2147483648);Cw(a);break a;case 63:a.B=a.B|(-1073741824);Cw(a);break a;default:}a.B=a.B|(-536870912);break a;case 46:a.B=(-536870866);break a;case 91:a.B=(-536870821);Wr(a,2);break a;case 93:if(a.h4!=2)break a;a.B=(-536870819);break a;case 94:a.B=(-536870818);break a;case 123:a.jK=AGl(a,a.B);break a;case 124:a.B=(-536870788);break a;default:}else if(a.h4==2)switch(a.B){case 38:a.B=(-536870874);break a;case 45:a.B=(-536870867);break a;case 91:a.B=(-536870821);break a;case 93:a.B
=(-536870819);break a;case 94:a.B=(-536870818);break a;default:}}else{c=a.be>=(a.bR.data.length-2|0)?(-1):No(a);c:{a.B=c;switch(a.B){case -1:J(CC(B(9),ET(a),a.be));case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:case 8:case 9:case 10:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 23:case 24:case 25:case 26:case 27:case 28:case 29:case 30:case 31:case 32:case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 118:break;case 48:a.B
=AED(a);break a;case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:if(a.h4!=1)break a;a.B=(-2147483648)|a.B;break a;case 65:a.B=(-2147483583);break a;case 66:a.B=(-2147483582);break a;case 67:case 69:case 70:case 72:case 73:case 74:case 75:case 76:case 77:case 78:case 79:case 82:case 84:case 85:case 86:case 88:case 89:case 103:case 104:case 105:case 106:case 107:case 108:case 109:case 111:case 113:case 121:J(CC(B(9),ET(a),a.be));case 68:case 83:case 87:case 100:case 115:case 119:a.jK=Sv(IJ(a.bR,
a.qz,1),0);a.B=0;break a;case 71:a.B=(-2147483577);break a;case 80:case 112:break c;case 81:a.Cy=a.h4;a.h4=4;b=1;break a;case 90:a.B=(-2147483558);break a;case 97:a.B=7;break a;case 98:a.B=(-2147483550);break a;case 99:if(a.be>=(a.bR.data.length-2|0))J(CC(B(9),ET(a),a.be));a.B=a.bR.data[Cw(a)]&31;break a;case 101:a.B=27;break a;case 102:a.B=12;break a;case 110:a.B=10;break a;case 114:a.B=13;break a;case 116:a.B=9;break a;case 117:a.B=WX(a,4);break a;case 120:a.B=WX(a,2);break a;case 122:a.B=(-2147483526);break a;default:}break a;}e
=ALl(a);f=0;if(a.B==80)f=1;try{a.jK=Sv(e,f);}catch($$e){$$je=Bh($$e);if($$je instanceof NW){J(CC(B(9),ET(a),a.be));}else{throw $$e;}}a.B=0;}}if(b)continue;else break;}}
function ALl(a){var b,c,d;b=new S;Hh(b,10);if(a.be<(a.bR.data.length-2|0)){if(a.bR.data[a.be]!=123){b=new S;V(b);return R(G(G(b,B(700)),IJ(a.bR,Cw(a),1)));}Cw(a);c=0;a:{while(a.be<(a.bR.data.length-2|0)){c=a.bR.data[Cw(a)];if(c==125)break a;Ce(b,c);}}if(c!=125)J(CC(B(9),a.eG,a.be));}if(!Lg(b))J(CC(B(9),a.eG,a.be));d=R(b);if(Q(d)==1){b=new S;V(b);return R(G(G(b,B(700)),d));}b:{c:{if(Q(d)>3){if(EG(d,B(700)))break c;if(EG(d,B(701)))break c;}break b;}d=DO(d,2);}return d;}
function AGl(a,b){var c,d,e,f,$$je;c=new S;Hh(c,4);d=(-1);e=2147483647;a:{while(true){if(a.be>=a.bR.data.length)break a;b=a.bR.data[Cw(a)];if(b==125)break a;if(b==44&&d<0)try{d=Kg(B3(c),10);AGv(c,0,Lg(c));continue;}catch($$e){$$je=Bh($$e);if($$je instanceof ES){break;}else{throw $$e;}}Ce(c,b&65535);}J(CC(B(9),a.eG,a.be));}if(b!=125)J(CC(B(9),a.eG,a.be));if(Lg(c)>0)b:{try{e=Kg(B3(c),10);if(d>=0)break b;d=e;break b;}catch($$e){$$je=Bh($$e);if($$je instanceof ES){}else{throw $$e;}}J(CC(B(9),a.eG,a.be));}else if
(d<0)J(CC(B(9),a.eG,a.be));if((d|e|(e-d|0))<0)J(CC(B(9),a.eG,a.be));f=a.be>=a.bR.data.length?42:a.bR.data[a.be];c:{switch(f){case 43:a.B=(-2147483525);Cw(a);break c;case 63:a.B=(-1073741701);Cw(a);break c;default:}a.B=(-536870789);}c=new VH;c.jl=d;c.iu=e;return c;}
function ET(a){return a.eG;}
function EE(a){return !a.cB&&!a.B&&a.be==a.ER&&!I7(a)?1:0;}
function OB(b){return b<0?0:1;}
function GJ(a){return !EE(a)&&!I7(a)&&OB(a.cB)?1:0;}
function V3(a){return a.cB<=56319&&a.cB>=55296?1:0;}
function YS(a){return a.cB<=57343&&a.cB>=56320?1:0;}
function SP(b){return b<=56319&&b>=55296?1:0;}
function Rj(b){return b<=57343&&b>=56320?1:0;}
function WX(a,b){var c,d,e,f,$$je;c=new S;Hh(c,b);d=a.bR.data.length-2|0;e=0;while(true){f=Bw(e,b);if(f>=0)break;if(a.be>=d)break;Ce(c,a.bR.data[Cw(a)]);e=e+1|0;}if(!f)a:{try{b=Kg(B3(c),16);}catch($$e){$$je=Bh($$e);if($$je instanceof ES){break a;}else{throw $$e;}}return b;}J(CC(B(9),a.eG,a.be));}
function AED(a){var b,c,d,e,f;b=3;c=1;d=a.bR.data.length-2|0;e=LL(a.bR.data[a.be],8);switch(e){case -1:break;default:if(e>3)b=2;Cw(a);a:{while(true){if(c>=b)break a;if(a.be>=d)break a;f=LL(a.bR.data[a.be],8);if(f<0)break;e=(e*8|0)+f|0;Cw(a);c=c+1|0;}}return e;}J(CC(B(9),a.eG,a.be));}
function AOt(a){var b,c;b=1;c=a.mv;a:while(true){if(a.be>=a.bR.data.length)J(CC(B(9),a.eG,a.be));b:{c:{switch(a.bR.data[a.be]){case 41:Cw(a);return c|256;case 45:if(!b)J(CC(B(9),a.eG,a.be));b=0;break b;case 58:break a;case 100:break c;case 105:c=b?c|2:(c^2)&c;break b;case 109:c=b?c|8:(c^8)&c;break b;case 115:c=b?c|32:(c^32)&c;break b;case 117:c=b?c|64:(c^64)&c;break b;case 120:c=b?c|4:(c^4)&c;break b;default:}break b;}c=b?c|1:(c^1)&c;}Cw(a);}Cw(a);return c;}
function Cw(a){var b,c;a.qz=a.be;if(!(a.mv&4))a.be=a.be+1|0;else{b=a.bR.data.length-2|0;a.be=a.be+1|0;a:while(true){if(a.be<b&&R4(a.bR.data[a.be])){a.be=a.be+1|0;continue;}if(a.be>=b)break;if(a.bR.data[a.be]!=35)break;a.be=a.be+1|0;while(true){if(a.be>=b)continue a;c=a.bR.data[a.be];if(c!=10&&c!=13&&c!=133&&(c|1)!=8233?0:1)continue a;a.be=a.be+1|0;}}}return a.qz;}
function ANr(b){return BhM.N8(b);}
function No(a){var b,c,d;b=a.bR.data[Cw(a)];if(Dw(b)){c=a.qz+1|0;if(c<a.bR.data.length){d=a.bR.data[c];if(D1(d)){Cw(a);return E3(b,d);}}}return b;}
function IH(a){return a.ic;}
function ANG(){var a=this;BB.call(a);a.B0=null;a.rw=null;a.oF=0;}
function CC(a,b,c){var d=new ANG();AZP(d,a,b,c);return d;}
function AZP(a,b,c,d){Z(a);a.oF=(-1);a.B0=b;a.rw=c;a.oF=d;}
function A7P(a){var b,c,d,e,f,g,h,i;b=B(9);if(a.oF>=1){c=$rt_createCharArray(a.oF);d=c.data;e=0;f=d.length;if(e>f){b=new BB;Z(b);J(b);}while(e<f){g=e+1|0;d[e]=32;e=g;}b=AHE(c);}h=new S;V(h);h=G(h,a.B0);if(a.rw!==null&&Q(a.rw)){i=new S;V(i);b=R(G(G(G(G(Bf(i,a.oF),B(702)),a.rw),B(702)),b));}else b=B(9);return R(G(h,b));}
function Sl(){D6.call(this);}
function AZE(a,b,c,d){var e;e=a.ih;Cg(d,e,b-EH(d,e)|0);return a.m.e(b,c,d);}
function A6h(a,b){return 0;}
function ZX(){D6.call(this);}
function A00(a,b,c,d){return b;}
function RF(){D6.call(this);}
function AQl(a,b,c,d){if(EH(d,a.ih)!=b)b=(-1);return b;}
function S5(){D6.call(this);this.w2=0;}
function AZK(a,b,c,d){var e;e=a.ih;Cg(d,e,b-EH(d,e)|0);a.w2=b;return b;}
function AQp(a){return a.w2;}
function A5s(a,b){return 0;}
function HA(){D6.call(this);}
function AXO(a,b,c,d){if(d.nP!=1&&b!=d.bO)return (-1);ANW(d);N6(d,0,b);return b;}
function CA(){B_.call(this);this.c_=0;}
function BhN(){var a=new CA();E9(a);return a;}
function E9(a){Cx(a);a.c_=1;}
function A8f(a,b,c,d){var e;if((b+a.dY()|0)>d.bO){d.g8=1;return (-1);}e=a.dg(b,c);if(e<0)return (-1);return a.m.e(b+e|0,c,d);}
function A6N(a){return a.c_;}
function ATk(a,b){return 1;}
function AF2(){CA.call(this);}
function JQ(a){var b=new AF2();A4k(b,a);return b;}
function A4k(a,b){ON(a,b);a.c_=1;a.qm=1;a.c_=0;}
function A6n(a,b,c){return 0;}
function A1_(a,b,c,d){var e,f,g;e=d.bO;f=d.fc;while(true){g=Bw(b,e);if(g>0)return (-1);if(g<0&&D1(P(c,b))&&b>f&&Dw(P(c,b-1|0))){b=b+1|0;continue;}if(a.m.e(b,c,d)>=0)break;b=b+1|0;}return b;}
function A0U(a,b,c,d,e){var f,g;f=e.bO;g=e.fc;while(true){if(c<b)return (-1);if(c<f&&D1(P(d,c))&&c>g&&Dw(P(d,c-1|0))){c=c+(-1)|0;continue;}if(a.m.e(c,d,e)>=0)break;c=c+(-1)|0;}return c;}
function AZI(a,b){return 0;}
function Cu(){var a=this;B_.call(a);a.dc=null;a.f3=null;a.cE=0;}
function A9e(a,b){var c=new Cu();HB(c,a,b);return c;}
function HB(a,b,c){Cx(a);a.dc=b;a.f3=c;a.cE=c.ih;}
function ASB(a,b,c,d){var e,f,g,h;if(a.dc===null)return (-1);e=If(d,a.cE);E8(d,a.cE,b);f=a.dc.q;g=0;while(true){if(g>=f){E8(d,a.cE,e);return (-1);}h=Bc(a.dc,g).e(b,c,d);if(h>=0)break;g=g+1|0;}return h;}
function AVz(a,b){a.f3.m=b;}
function A3N(a,b){var c;a:{if(a.dc!==null){c=Hq(a.dc);while(true){if(!JO(c))break a;if(!Il(c).dQ(b))continue;else return 1;}}}return 0;}
function AV1(a,b){return KT(b,a.cE)>=0&&If(b,a.cE)==KT(b,a.cE)?0:1;}
function AQN(a){var b,c,d,e;a.eH=1;if(a.f3!==null&&!a.f3.eH)L2(a.f3);a:{if(a.dc!==null){b=a.dc.q;c=0;while(true){if(c>=b)break a;d=Bc(a.dc,c);e=d.lU();if(e===null)e=d;else{d.eH=1;Ej(a.dc,c);AKi(a.dc,c,e);}if(!e.eH)e.i7();c=c+1|0;}}}if(a.m!==null)L2(a);}
function LY(){Cu.call(this);}
function AVp(a,b,c,d){var e,f,g,h;e=EH(d,a.cE);Cg(d,a.cE,b);f=a.dc.q;g=0;while(true){if(g>=f){Cg(d,a.cE,e);return (-1);}h=Bc(a.dc,g).e(b,c,d);if(h>=0)break;g=g+1|0;}return h;}
function A54(a,b){return !EH(b,a.cE)?0:1;}
function Fb(){LY.call(this);}
function A1r(a,b,c,d){var e,f,g;e=EH(d,a.cE);Cg(d,a.cE,b);f=a.dc.q;g=0;while(g<f){if(Bc(a.dc,g).e(b,c,d)>=0)return a.m.e(a.f3.w2,c,d);g=g+1|0;}Cg(d,a.cE,e);return (-1);}
function A5P(a,b){a.m=b;}
function Vx(){Fb.call(this);}
function AVw(a,b,c,d){var e,f;e=a.dc.q;f=0;while(f<e){if(Bc(a.dc,f).e(b,c,d)>=0)return a.m.e(b,c,d);f=f+1|0;}return (-1);}
function AXC(a,b){return 0;}
function Zh(){Fb.call(this);}
function AP8(a,b,c,d){var e,f;e=a.dc.q;f=0;while(true){if(f>=e)return a.m.e(b,c,d);if(Bc(a.dc,f).e(b,c,d)>=0)break;f=f+1|0;}return (-1);}
function A6S(a,b){return 0;}
function Xt(){Fb.call(this);}
function AQM(a,b,c,d){var e,f,g,h;e=a.dc.q;f=d.oQ?0:d.fc;a:{g=a.m.e(b,c,d);if(g>=0){Cg(d,a.cE,b);h=0;while(true){if(h>=e)break a;if(Bc(a.dc,h).eQ(f,b,c,d)>=0){Cg(d,a.cE,(-1));return g;}h=h+1|0;}}}return (-1);}
function A8t(a,b){return 0;}
function Ts(){Fb.call(this);}
function AZj(a,b,c,d){var e,f;e=a.dc.q;Cg(d,a.cE,b);f=0;while(true){if(f>=e)return a.m.e(b,c,d);if(Bc(a.dc,f).eQ(0,b,c,d)>=0)break;f=f+1|0;}return (-1);}
function A6b(a,b){return 0;}
function JG(){Cu.call(this);this.fn=null;}
function A$Q(a,b){var c=new JG();ABT(c,a,b);return c;}
function ABT(a,b,c){Cx(a);a.fn=b;a.f3=c;a.cE=c.ih;}
function APd(a,b,c,d){var e,f;e=If(d,a.cE);E8(d,a.cE,b);f=a.fn.e(b,c,d);if(f>=0)return f;E8(d,a.cE,e);return (-1);}
function AUi(a,b,c,d){var e;e=a.fn.ez(b,c,d);if(e>=0)E8(d,a.cE,e);return e;}
function A6i(a,b,c,d,e){var f;f=a.fn.eQ(b,c,d,e);if(f>=0)E8(e,a.cE,f);return f;}
function A3I(a,b){return a.fn.dQ(b);}
function A5r(a){var b;b=new Qj;ABT(b,a.fn,a.f3);a.m=b;return b;}
function AYg(a){var b;a.eH=1;if(a.f3!==null&&!a.f3.eH)L2(a.f3);if(a.fn!==null&&!a.fn.eH){b=a.fn.lU();if(b!==null){a.fn.eH=1;a.fn=b;}a.fn.i7();}}
function I6(){C.call(this);}
function Bk(){var a=this;I6.call(a);a.co=0;a.dD=0;a.cb=null;a.qs=null;a.qV=null;a.cf=0;}
var BhO=null;function BhP(){var a=new Bk();BQ(a);return a;}
function BQ(a){var b;b=new ZD;b.bL=$rt_createIntArray(64);a.cb=b;}
function A0t(a){return null;}
function AZT(a){return a.cb;}
function AKY(a){return !a.dD?(J5(a.cb,0)>=2048?0:1):AE5(a.cb,0)>=2048?0:1;}
function A2K(a){return a.cf;}
function A6G(a){return a;}
function AA9(a){var b,c;if(a.qV===null){b=a.kE();c=new Uy;c.Kv=a;c.Dr=b;BQ(c);a.qV=c;FY(a.qV,a.dD);}return a.qV;}
function Lh(a){var b,c;if(a.qs===null){b=a.kE();c=new Ux;c.HJ=a;c.Fq=b;c.CB=a;BQ(c);a.qs=c;FY(a.qs,a.co);a.qs.cf=a.cf;}return a.qs;}
function A7Q(a){return 0;}
function FY(a,b){if(a.co^b){a.co=a.co?0:1;a.dD=a.dD?0:1;}if(!a.cf)a.cf=1;return a;}
function AR4(a){return a.co;}
function LG(b,c){if(b.hs()!==null&&c.hs()!==null)return AEP(b.hs(),c.hs());return 1;}
function Sv(b,c){return AME(ANQ(BhO,b),c);}
function ABW(){BhO=new Jf;}
function ABI(){var a=this;Bk.call(a);a.yr=0;a.zY=0;a.nJ=0;a.u9=0;a.iC=0;a.lK=0;a.b9=null;a.cW=null;}
function EI(){var a=new ABI();AYG(a);return a;}
function A7l(a,b){var c=new ABI();AQ6(c,a,b);return c;}
function AYG(a){BQ(a);a.b9=A8x();}
function AQ6(a,b,c){BQ(a);a.b9=A8x();a.yr=b;a.zY=c;}
function Dq(a,b){a:{if(a.yr){b:{if(!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}if(a.iC){PS(a.b9,Li(b&65535));break a;}Ni(a.b9,Li(b&65535));break a;}if(a.zY&&b>128){a.nJ=1;b=Hy(Hw(b));}}}if(!(!SP(b)&&!Rj(b))){if(a.u9)PS(a.cb,b-55296|0);else Ni(a.cb,b-55296|0);}if(a.iC)PS(a.b9,b);else Ni(a.b9,b);if(!a.cf&&NC(b))a.cf=1;return a;}
function AOA(a,b){var c,d,e;if(!a.cf&&b.cf)a.cf=1;if(a.u9){if(!b.dD)HL(a.cb,b.kE());else Er(a.cb,b.kE());}else if(!b.dD)In(a.cb,b.kE());else{H9(a.cb,b.kE());Er(a.cb,b.kE());a.dD=a.dD?0:1;a.u9=1;}if(!a.lK&&b.hs()!==null){if(a.iC){if(!b.co)HL(a.b9,b.hs());else Er(a.b9,b.hs());}else if(!b.co)In(a.b9,b.hs());else{H9(a.b9,b.hs());Er(a.b9,b.hs());a.co=a.co?0:1;a.iC=1;}}else{c=a.co;if(a.cW!==null){d=a.cW;if(!c){e=new Wg;e.IV=a;e.FM=c;e.Cv=d;e.Cs=b;BQ(e);a.cW=e;}else{e=new Wi;e.KO=a;e.Bg=c;e.Ew=d;e.Ef=b;BQ(e);a.cW=
e;}}else{if(c&&!a.iC&&PC(a.b9)){d=new Wd;d.JM=a;d.Ez=b;BQ(d);a.cW=d;}else if(!c){d=new Wb;d.xM=a;d.wU=c;d.DJ=b;BQ(d);a.cW=d;}else{d=new Wc;d.vI=a;d.uk=c;d.Cu=b;BQ(d);a.cW=d;}a.lK=1;}}return a;}
function Cy(a,b,c){var d;if(b>c){d=new BB;Z(d);J(d);}a:{b:{if(!a.yr){if(c<55296)break b;if(b>57343)break b;}c=c+1|0;while(true){if(b>=c)break a;Dq(a,b);b=b+1|0;}}if(a.iC)AH2(a.b9,b,c+1|0);else Ky(a.b9,b,c+1|0);}return a;}
function AHL(a,b){var c,d,e;if(!a.cf&&b.cf)a.cf=1;if(b.nJ)a.nJ=1;if(!(a.dD^b.dD)){if(!a.dD)In(a.cb,b.cb);else Er(a.cb,b.cb);}else if(a.dD)HL(a.cb,b.cb);else{H9(a.cb,b.cb);Er(a.cb,b.cb);a.dD=1;}if(!a.lK&&D8(b)!==null){if(!(a.co^b.co)){if(!a.co)In(a.b9,D8(b));else Er(a.b9,D8(b));}else if(a.co)HL(a.b9,D8(b));else{H9(a.b9,D8(b));Er(a.b9,D8(b));a.co=1;}}else{c=a.co;if(a.cW!==null){d=a.cW;if(!c){e=new Q4;e.Gk=a;e.B7=c;e.Fy=d;e.CH=b;BQ(e);a.cW=e;}else{e=new Rl;e.GE=a;e.FI=c;e.zS=d;e.z1=b;BQ(e);a.cW=e;}}else{if(!a.iC
&&PC(a.b9)){if(!c){d=new We;d.KU=a;d.AW=b;BQ(d);a.cW=d;}else{d=new Wf;d.I5=a;d.FD=b;BQ(d);a.cW=d;}}else if(!c){d=new Wj;d.B$=a;d.Bo=b;d.Ey=c;BQ(d);a.cW=d;}else{d=new Wk;d.Bx=a;d.BG=b;d.EY=c;BQ(d);a.cW=d;}a.lK=1;}}}
function UF(a,b){var c,d,e;if(!a.cf&&b.cf)a.cf=1;if(b.nJ)a.nJ=1;if(!(a.dD^b.dD)){if(!a.dD)Er(a.cb,b.cb);else In(a.cb,b.cb);}else if(!a.dD)HL(a.cb,b.cb);else{H9(a.cb,b.cb);Er(a.cb,b.cb);a.dD=0;}if(!a.lK&&D8(b)!==null){if(!(a.co^b.co)){if(!a.co)Er(a.b9,D8(b));else In(a.b9,D8(b));}else if(!a.co)HL(a.b9,D8(b));else{H9(a.b9,D8(b));Er(a.b9,D8(b));a.co=0;}}else{c=a.co;if(a.cW!==null){d=a.cW;if(!c){e=new Q6;e.IT=a;e.Fj=c;e.Dp=d;e.Bf=b;BQ(e);a.cW=e;}else{e=new Q7;e.I9=a;e.E6=c;e.Dd=d;e.Fg=b;BQ(e);a.cW=e;}}else{if(!a.iC
&&PC(a.b9)){if(!c){d=new Q2;d.GH=a;d.DZ=b;BQ(d);a.cW=d;}else{d=new Q3;d.KM=a;d.AP=b;BQ(d);a.cW=d;}}else if(!c){d=new Q8;d.F_=a;d.FK=b;d.BF=c;BQ(d);a.cW=d;}else{d=new Q1;d.BC=a;d.E$=b;d.EF=c;BQ(d);a.cW=d;}a.lK=1;}}}
function Ed(a,b){if(a.cW!==null)return a.co^a.cW.T(b);return a.co^E7(a.b9,b);}
function D8(a){if(!a.lK)return a.b9;return null;}
function A15(a){return a.cb;}
function AXn(a){var b,c;if(a.cW!==null)return a;b=D8(a);c=new Q5;c.IF=a;c.sY=b;BQ(c);return FY(c,a.co);}
function A4L(a){var b,c;b=new S;V(b);c=J5(a.b9,0);while(c>=0){Ib(b,JE(c));Ce(b,124);c=J5(a.b9,c+1|0);}if(b.b5>0)Us(b,b.b5-1|0);return R(b);}
function AR6(a){return a.nJ;}
function NW(){var a=this;BT.call(a);a.Im=null;a.Ky=null;}
function Fm(){B_.call(this);this.bW=null;}
function BhQ(a,b,c){var d=new Fm();Et(d,a,b,c);return d;}
function Et(a,b,c,d){ON(a,c);a.bW=b;a.qm=d;}
function A8l(a){return a.bW;}
function AWx(a,b){return !a.bW.dQ(b)&&!a.m.dQ(b)?0:1;}
function A7n(a,b){return 1;}
function AUz(a){var b;a.eH=1;if(a.m!==null&&!a.m.eH){b=a.m.lU();if(b!==null){a.m.eH=1;a.m=b;}a.m.i7();}if(a.bW!==null){if(!a.bW.eH){b=a.bW.lU();if(b!==null){a.bW.eH=1;a.bW=b;}a.bW.i7();}else if(a.bW instanceof JG&&a.bW.f3.xg)a.bW=a.bW.m;}}
function Ef(){Fm.call(this);this.cF=null;}
function A9w(a,b,c){var d=new Ef();Gx(d,a,b,c);return d;}
function Gx(a,b,c,d){Et(a,b,c,d);a.cF=b;}
function AZk(a,b,c,d){var e,f;e=0;a:{while((b+a.cF.dY()|0)<=d.bO){f=a.cF.dg(b,c);if(f<=0)break a;b=b+f|0;e=e+1|0;}}while(true){if(e<0)return (-1);f=a.m.e(b,c,d);if(f>=0)break;b=b-a.cF.dY()|0;e=e+(-1)|0;}return f;}
function Hi(){Ef.call(this);this.ll=null;}
function A$n(a,b,c,d){var e=new Hi();SC(e,a,b,c,d);return e;}
function SC(a,b,c,d,e){Gx(a,c,d,e);a.ll=b;}
function A0c(a,b,c,d){var e,f,g,h;e=a.ll.jl;f=a.ll.iu;g=0;while(true){if(g>=e){a:{while(g<f){if((b+a.cF.dY()|0)>d.bO)break a;h=a.cF.dg(b,c);if(h<1)break a;b=b+h|0;g=g+1|0;}}while(true){if(g<e)return (-1);h=a.m.e(b,c,d);if(h>=0)break;b=b-a.cF.dY()|0;g=g+(-1)|0;}return h;}if((b+a.cF.dY()|0)>d.bO){d.g8=1;return (-1);}h=a.cF.dg(b,c);if(h<1)break;b=b+h|0;g=g+1|0;}return (-1);}
function D7(){Fm.call(this);}
function AZz(a,b,c,d){var e;if(!a.bW.b8(d))return a.m.e(b,c,d);e=a.bW.e(b,c,d);if(e>=0)return e;return a.m.e(b,c,d);}
function Gj(){Ef.call(this);}
function A31(a,b,c,d){var e;e=a.bW.e(b,c,d);if(e<0)e=a.m.e(b,c,d);return e;}
function AYW(a,b){a.m=b;a.bW.cg(b);}
function UB(){Ef.call(this);}
function A8a(a,b,c,d){while((b+a.cF.dY()|0)<=d.bO&&a.cF.dg(b,c)>0){b=b+a.cF.dY()|0;}return a.m.e(b,c,d);}
function AUY(a,b,c,d){var e,f,g;e=a.m.ez(b,c,d);if(e<0)return (-1);f=e-a.cF.dY()|0;while(f>=b&&a.cF.dg(f,c)>0){g=f-a.cF.dY()|0;e=f;f=g;}return e;}
function VH(){var a=this;I6.call(a);a.jl=0;a.iu=0;}
function A2y(a){return a.jl;}
function A7h(a){return a.iu;}
function A4R(a){var b;b=new S;V(b);return R(G(G(G(Bf(G(b,B(703)),a.jl),B(704)),a.iu==2147483647?B(9):ND(ANq(a.iu))),B(705)));}
function V5(){B_.call(this);}
function ATF(a,b,c,d){return b;}
function A5n(a,b){return 0;}
function ZD(){var a=this;C.call(a);a.bL=null;a.cq=0;}
function A8x(){var a=new ZD();A0P(a);return a;}
function A0P(a){a.bL=$rt_createIntArray(0);}
function Ni(a,b){var c,d;c=b/32|0;if(b>=a.cq){LK(a,c+1|0);a.cq=b+1|0;}d=a.bL.data;d[c]=d[c]|1<<(b%32|0);}
function Ky(a,b,c){var d,e,f,g,h;if(b>c){d=new BE;Z(d);J(d);}e=b/32|0;f=c/32|0;if(c>a.cq){LK(a,f+1|0);a.cq=c;}if(e==f){g=a.bL.data;g[e]=g[e]|Kp(a,b)&LB(a,c);}else{g=a.bL.data;g[e]=g[e]|Kp(a,b);h=e+1|0;while(h<f){a.bL.data[h]=(-1);h=h+1|0;}g=a.bL.data;g[f]=g[f]|LB(a,c);}}
function Kp(a,b){return (-1)<<(b%32|0);}
function LB(a,b){b=b%32|0;return !b?0:(-1)>>>(32-b|0);}
function PS(a,b){var c,d,e,f;c=b/32|0;if(c<a.bL.data.length){d=a.bL.data;e=d[c];f=(b%32|0)&31;d[c]=e&((-2)<<f|(-2)>>>(32-f|0));if(b==(a.cq-1|0))Jh(a);}}
function AH2(a,b,c){var d,e,f,g,h;if(b>c){d=new BE;Z(d);J(d);}if(b>=a.cq)return;c=B4(a.cq,c);e=b/32|0;f=c/32|0;if(e==f){g=a.bL.data;g[e]=g[e]&(LB(a,b)|Kp(a,c));}else{g=a.bL.data;g[e]=g[e]&LB(a,b);h=e+1|0;while(h<f){a.bL.data[h]=0;h=h+1|0;}g=a.bL.data;g[f]=g[f]&Kp(a,c);}Jh(a);}
function E7(a,b){var c;c=b/32|0;return c<a.bL.data.length&&a.bL.data[c]&1<<(b%32|0)?1:0;}
function J5(a,b){var c,d,e;if(b>=a.cq)return (-1);c=b/32|0;d=a.bL.data[c]>>>(b%32|0);if(d)return KR(d)+b|0;d=(a.cq+31|0)/32|0;e=c+1|0;while(e<d){if(a.bL.data[e])return (e*32|0)+KR(a.bL.data[e])|0;e=e+1|0;}return (-1);}
function AE5(a,b){var c,d,e;if(b>=a.cq)return b;c=b/32|0;d=(a.bL.data[c]^(-1))>>>(b%32|0);if(d)return KR(d)+b|0;d=(a.cq+31|0)/32|0;e=c+1|0;while(e<d){if(a.bL.data[e]!=(-1))return (e*32|0)+KR(a.bL.data[e]^(-1))|0;e=e+1|0;}return a.cq;}
function LK(a,b){var c,d,e,f;if(a.bL.data.length>=b)return;c=Df((b*3|0)/2|0,(a.bL.data.length*2|0)+1|0);d=a.bL.data;e=$rt_createIntArray(c);f=e.data;b=B4(c,d.length);c=0;while(c<b){f[c]=d[c];c=c+1|0;}a.bL=e;}
function Jh(a){var b,c,d;b=(a.cq+31|0)/32|0;a.cq=b*32|0;c=b-1|0;a:{while(true){if(c<0)break a;d=VW(a.bL.data[c]);if(d<32)break;c=c+(-1)|0;a.cq=a.cq-32|0;}a.cq=a.cq-d|0;}}
function AEP(a,b){var c,d;c=B4(a.bL.data.length,b.bL.data.length);d=0;while(d<c){if(a.bL.data[d]&b.bL.data[d])return 1;d=d+1|0;}return 0;}
function Er(a,b){var c,d,e;c=B4(a.bL.data.length,b.bL.data.length);d=0;while(d<c){e=a.bL.data;e[d]=e[d]&b.bL.data[d];d=d+1|0;}while(c<a.bL.data.length){a.bL.data[c]=0;c=c+1|0;}a.cq=B4(a.cq,b.cq);Jh(a);}
function HL(a,b){var c,d,e;c=B4(a.bL.data.length,b.bL.data.length);d=0;while(d<c){e=a.bL.data;e[d]=e[d]&(b.bL.data[d]^(-1));d=d+1|0;}Jh(a);}
function In(a,b){var c,d,e;a.cq=Df(a.cq,b.cq);LK(a,(a.cq+31|0)/32|0);c=B4(a.bL.data.length,b.cq);d=0;while(d<c){e=a.bL.data;e[d]=e[d]|b.bL.data[d];d=d+1|0;}}
function H9(a,b){var c,d,e;a.cq=Df(a.cq,b.cq);LK(a,(a.cq+31|0)/32|0);c=B4(a.bL.data.length,b.cq);d=0;while(d<c){e=a.bL.data;e[d]=e[d]^b.bL.data[d];d=d+1|0;}Jh(a);}
function PC(a){return a.cq?0:1;}
function P$(){var a=this;Cu.call(a);a.AQ=null;a.IE=0;}
function A2a(a,b){a.m=b;}
function ADb(a,b,c,d){var e,f,g,h,i;e=d.fc;f=d.bO;g=b+1|0;h=Bw(g,f);if(h>0){d.g8=1;return (-1);}i=P(c,b);if(!a.AQ.T(i))return (-1);if(Dw(i)){if(h<0&&D1(P(c,g)))return (-1);}else if(D1(i)&&b>e&&Dw(P(c,b-1|0)))return (-1);return a.m.e(g,c,d);}
function RT(){var a=this;Cu.call(a);a.wg=null;a.yB=null;}
function AE0(a,b){var c=new RT();AGS(c,a,b);return c;}
function AGS(a,b,c){Cx(a);a.wg=b;a.yB=c;}
function APP(a,b,c,d){var e;e=a.wg.e(b,c,d);if(e<0)e=ADb(a.yB,b,c,d);if(e>=0)return e;return (-1);}
function A5f(a,b){a.m=b;a.yB.m=b;a.wg.cg(b);}
function AQq(a,b){return 1;}
function AQa(a,b){return 1;}
function E_(){var a=this;Cu.call(a);a.hZ=null;a.Hd=0;}
function A3m(a){var b=new E_();YA(b,a);return b;}
function YA(a,b){Cx(a);a.hZ=b.te();a.Hd=b.co;}
function A1Y(a,b,c,d){var e,f,g;e=d.bO;if(b<e){f=b+1|0;g=P(c,b);if(a.T(g)){b=a.m.e(f,c,d);if(b>0)return b;}if(f<e){b=f+1|0;f=P(c,f);if(K$(g,f)&&a.T(E3(g,f)))return a.m.e(b,c,d);}}return (-1);}
function ASf(a,b){return a.hZ.T(b);}
function APN(a,b){if(b instanceof Fi)return a.hZ.T(b.kV);if(b instanceof FW)return a.hZ.T(b.gm);if(b instanceof E_)return LG(a.hZ,b.hZ);if(!(b instanceof FP))return 1;return LG(a.hZ,b.kh);}
function ATy(a){return a.hZ;}
function A6C(a,b){a.m=b;}
function AR1(a,b){return 1;}
function NT(){E_.call(this);}
function ATm(a,b){return a.hZ.T(Hy(Hw(b)));}
function ABA(){var a=this;CA.call(a);a.En=null;a.G2=0;}
function ASN(a){var b=new ABA();AU7(b,a);return b;}
function AU7(a,b){E9(a);a.En=b.te();a.G2=b.co;}
function A3u(a,b,c){return !a.En.T(Gg(F1(P(c,b))))?(-1):1;}
function FP(){var a=this;CA.call(a);a.kh=null;a.Hx=0;}
function AXj(a){var b=new FP();AVS(b,a);return b;}
function AVS(a,b){E9(a);a.kh=b.te();a.Hx=b.co;}
function Vn(a,b,c){return !a.kh.T(P(c,b))?(-1):1;}
function AVA(a,b){if(b instanceof FW)return a.kh.T(b.gm);if(b instanceof FP)return LG(a.kh,b.kh);if(!(b instanceof E_)){if(!(b instanceof Fi))return 1;return 0;}return LG(a.kh,b.hZ);}
function A5i(a){return a.kh;}
function Wq(){var a=this;Cu.call(a);a.ka=null;a.yX=null;a.o9=0;}
function A7a(a,b){var c=new Wq();AZA(c,a,b);return c;}
function AZA(a,b,c){Cx(a);a.ka=b;a.o9=c;}
function AUl(a,b){a.m=b;}
function RU(a){if(a.yX===null)a.yX=AHE(a.ka);return a.yX;}
function AOY(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o;e=d.bO;f=$rt_createIntArray(3);g=(-1);h=(-1);if(b>=e)return (-1);i=b+1|0;j=P(c,b);k=j-44032|0;if(k>=0&&k<11172){b=4352+(k/588|0)|0;l=4449+((k%588|0)/28|0)|0;k=k%28|0;if(!k){m=$rt_createIntArray(2);n=m.data;n[0]=b;n[1]=l;}else{o=4519+k|0;m=$rt_createIntArray(3);n=m.data;n[0]=b;n[1]=l;n[2]=o;}}else m=null;if(m!==null){m=m.data;l=0;if(m.length!=a.o9)return (-1);while(true){if(l>=a.o9)return a.m.e(i,c,d);if(m[l]!=a.ka.data[l])break;l=l+1|0;}return (-1);}f=f.data;f[0]
=j;k=j-4352|0;if(k>=0&&k<19){if(i<e){j=P(c,i);g=j-4449|0;}if(g>=0&&g<21){k=i+1|0;f[1]=j;if(k<e){j=P(c,k);h=j-4519|0;}if(h>=0&&h<28){b=k+1|0;f[2]=j;return a.o9==3&&f[0]==a.ka.data[0]&&f[1]==a.ka.data[1]&&f[2]==a.ka.data[2]?a.m.e(b,c,d):(-1);}return a.o9==2&&f[0]==a.ka.data[0]&&f[1]==a.ka.data[1]?a.m.e(k,c,d):(-1);}return (-1);}return (-1);}
function A0C(a,b){return b instanceof Wq&&!BW(RU(b),RU(a))?0:1;}
function AXr(a,b){return 1;}
function FW(){CA.call(this);this.gm=0;}
function AB6(a){var b=new FW();AVV(b,a);return b;}
function AVV(a,b){E9(a);a.gm=b;}
function A3i(a){return 1;}
function ASK(a,b,c){return a.gm!=P(c,b)?(-1):1;}
function ARM(a,b,c,d){var e,f,g,h;if(!(c instanceof BC))return Kk(a,b,c,d);e=c;f=d.bO;while(true){if(b>=f)return (-1);g=Eo(e,a.gm,b);if(g<0)return (-1);h=a.m;b=g+1|0;if(h.e(b,c,d)>=0)break;}return g;}
function ATB(a,b,c,d,e){var f,g;if(!(d instanceof BC))return Kt(a,b,c,d,e);f=d;a:{while(true){if(c<b)return (-1);g=Ft(f,a.gm,c);if(g<0)break a;if(g<b)break a;if(a.m.e(g+1|0,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function AP9(a){return a.gm;}
function AXm(a,b){if(b instanceof FW)return b.gm!=a.gm?0:1;if(!(b instanceof FP)){if(b instanceof E_)return b.T(a.gm);if(!(b instanceof Fi))return 1;return 0;}return Vn(b,0,UO(a.gm))<=0?0:1;}
function AGC(){CA.call(this);this.C5=0;}
function A5S(a){var b=new AGC();A4G(b,a);return b;}
function A4G(a,b){E9(a);a.C5=Gg(F1(b));}
function AY4(a,b,c){return a.C5!=Gg(F1(P(c,b)))?(-1):1;}
function AAn(){var a=this;CA.call(a);a.CJ=0;a.Dl=0;}
function A0R(a){var b=new AAn();AWl(b,a);return b;}
function AWl(a,b){E9(a);a.CJ=b;a.Dl=Li(b);}
function APa(a,b,c){return a.CJ!=P(c,b)&&a.Dl!=P(c,b)?(-1):1;}
function Hp(){var a=this;Cu.call(a);a.qe=0;a.uL=null;a.uh=null;a.t7=0;}
function A_l(a,b){var c=new Hp();QN(c,a,b);return c;}
function QN(a,b,c){Cx(a);a.qe=1;a.uh=b;a.t7=c;}
function A7X(a,b){a.m=b;}
function AVo(a,b,c,d){var e,f,g,h,i,j,k,l;e=$rt_createIntArray(4);f=d.bO;if(b>=f)return (-1);g=MP(a,b,c,f);h=b+a.qe|0;i=ANr(g);if(i===null){i=e.data;b=1;i[0]=g;}else{b=i.data.length;CT(i,0,e,0,b);b=0+b|0;}a:{if(h<f){j=e.data;g=MP(a,h,c,f);while(b<4){if(!((g!=832?0:1)|(g!=833?0:1)|(g!=835?0:1)|(g!=836?0:1))){k=b+1|0;j[b]=g;}else{i=ANr(g).data;if(i.length!=2){k=b+1|0;j[b]=i[0];}else{l=b+1|0;j[b]=i[0];k=l+1|0;j[l]=i[1];}}h=h+a.qe|0;if(h>=f){b=k;break a;}g=MP(a,h,c,f);b=k;}}}if(b!=a.t7)return (-1);i=e.data;g=0;while
(true){if(g>=b)return a.m.e(h,c,d);if(i[g]!=a.uh.data[g])break;g=g+1|0;}return (-1);}
function UE(a){var b,c;if(a.uL===null){b=new S;V(b);c=0;while(c<a.t7){Ib(b,JE(a.uh.data[c]));c=c+1|0;}a.uL=R(b);}return a.uL;}
function MP(a,b,c,d){var e,f,g;a.qe=1;if(b>=(d-1|0))e=P(c,b);else{d=b+1|0;e=P(c,b);f=P(c,d);if(K$(e,f)){g=$rt_createCharArray(2).data;g[0]=e;g[1]=f;e=0<(g.length-1|0)&&Dw(g[0])&&D1(g[1])?E3(g[0],g[1]):g[0];a.qe=2;}}return e;}
function ATG(a,b){return b instanceof Hp&&!BW(UE(b),UE(a))?0:1;}
function A5R(a,b){return 1;}
function UY(){Hp.call(this);}
function Ys(){Hp.call(this);}
function Vl(){D7.call(this);}
function A05(a,b,c,d){var e;while(true){e=a.bW.e(b,c,d);if(e<=0)break;b=e;}return a.m.e(b,c,d);}
function WW(){D7.call(this);}
function A4u(a,b,c,d){var e;e=a.bW.e(b,c,d);if(e<0)return (-1);if(e>b){while(true){b=a.bW.e(e,c,d);if(b<=e)break;e=b;}b=e;}return a.m.e(b,c,d);}
function Is(){D7.call(this);}
function A6x(a,b,c,d){var e;if(!a.bW.b8(d))return a.m.e(b,c,d);e=a.bW.e(b,c,d);if(e>=0)return e;return a.m.e(b,c,d);}
function A7u(a,b){a.m=b;a.bW.cg(b);}
function Rt(){Is.call(this);}
function ATx(a,b,c,d){var e;e=a.bW.e(b,c,d);if(e<=0)e=b;return a.m.e(e,c,d);}
function A4U(a,b){a.m=b;}
function HV(){var a=this;D7.call(a);a.k4=null;a.he=0;}
function BhR(a,b,c,d,e){var f=new HV();NS(f,a,b,c,d,e);return f;}
function NS(a,b,c,d,e,f){Et(a,c,d,e);a.k4=b;a.he=f;}
function A8q(a,b,c,d){var e,f;e=VB(d,a.he);if(!a.bW.b8(d))return a.m.e(b,c,d);if(e>=a.k4.iu)return a.m.e(b,c,d);f=a.he;e=e+1|0;F5(d,f,e);f=a.bW.e(b,c,d);if(f>=0){F5(d,a.he,0);return f;}f=a.he;e=e+(-1)|0;F5(d,f,e);if(e>=a.k4.jl)return a.m.e(b,c,d);F5(d,a.he,0);return (-1);}
function Qm(){HV.call(this);}
function AS3(a,b,c,d){var e,f,g;e=0;f=a.k4.iu;a:{while(true){g=a.bW.e(b,c,d);if(g<=b)break a;if(e>=f)break;e=e+1|0;b=g;}}if(g<0&&e<a.k4.jl)return (-1);return a.m.e(b,c,d);}
function Sf(){D7.call(this);}
function AYp(a,b,c,d){var e;if(!a.bW.b8(d))return a.m.e(b,c,d);e=a.m.e(b,c,d);if(e>=0)return e;return a.bW.e(b,c,d);}
function Xc(){Is.call(this);}
function AQt(a,b,c,d){var e;if(!a.bW.b8(d))return a.m.e(b,c,d);e=a.m.e(b,c,d);if(e<0)e=a.bW.e(b,c,d);return e;}
function T0(){HV.call(this);}
function AZO(a,b,c,d){var e,f;e=VB(d,a.he);if(!a.bW.b8(d))return a.m.e(b,c,d);if(e>=a.k4.iu){F5(d,a.he,0);return a.m.e(b,c,d);}if(e<a.k4.jl){F5(d,a.he,e+1|0);f=a.bW.e(b,c,d);}else{f=a.m.e(b,c,d);if(f>=0){F5(d,a.he,0);return f;}F5(d,a.he,e+1|0);f=a.bW.e(b,c,d);}return f;}
function Sh(){Fm.call(this);}
function A8h(a,b,c,d){var e;e=d.bO;if(e>b)return a.m.eQ(b,e,c,d);return a.m.e(b,c,d);}
function AW3(a,b,c,d){var e;e=d.bO;if(a.m.eQ(b,e,c,d)>=0)return b;return (-1);}
function Wa(){Fm.call(this);this.uS=null;}
function AVB(a,b,c,d){var e,f;e=d.bO;f=YK(a,b,e,c);if(f>=0)e=f;if(e>b)return a.m.eQ(b,e,c,d);return a.m.e(b,c,d);}
function AOZ(a,b,c,d){var e,f,g,h;e=d.bO;f=a.m.ez(b,c,d);if(f<0)return (-1);g=YK(a,f,e,c);if(g>=0)e=g;g=a.m.eQ(f,e,c,d);if(f<g)f=g;if(f<=0)h=f?(-1):0;else{h=f-1|0;a:{while(true){if(h<b){h=(-1);break a;}if(a.uS.o7(P(c,h)))break;h=h+(-1)|0;}}}if(h>=b)b=h>=f?h:h+1|0;return b;}
function YK(a,b,c,d){while(true){if(b>=c)return (-1);if(a.uS.o7(P(d,b)))break;b=b+1|0;}return b;}
function GY(){C.call(this);}
var BhS=null;var BhT=null;function WI(b){if(!(b&1)){if(BhT!==null)return BhT;BhT=new YV;return BhT;}if(BhS!==null)return BhS;BhS=new YU;return BhS;}
function Z$(){Ef.call(this);}
function APB(a,b,c,d){var e;a:{while(true){if((b+a.cF.dY()|0)>d.bO)break a;e=a.cF.dg(b,c);if(e<1)break;b=b+e|0;}}return a.m.e(b,c,d);}
function Uw(){Gj.call(this);}
function AUJ(a,b,c,d){var e;if((b+a.cF.dY()|0)<=d.bO){e=a.cF.dg(b,c);if(e>=1)b=b+e|0;}return a.m.e(b,c,d);}
function Wx(){Hi.call(this);}
function A6j(a,b,c,d){var e,f,g,h,i;e=a.ll.jl;f=a.ll.iu;g=0;while(true){if(g>=e){a:{while(true){if(g>=f)break a;if((b+a.cF.dY()|0)>d.bO)break a;h=a.cF.dg(b,c);if(h<1)break;b=b+h|0;g=g+1|0;}}return a.m.e(b,c,d);}if((b+a.cF.dY()|0)>d.bO){d.g8=1;return (-1);}i=a.cF.dg(b,c);if(i<1)break;b=b+i|0;g=g+1|0;}return (-1);}
function W$(){Ef.call(this);}
function AVx(a,b,c,d){var e;while(true){e=a.m.e(b,c,d);if(e>=0)break;if((b+a.cF.dY()|0)<=d.bO){e=a.cF.dg(b,c);b=b+e|0;}if(e<1)return (-1);}return e;}
function Yu(){Gj.call(this);}
function APK(a,b,c,d){var e;e=a.m.e(b,c,d);if(e>=0)return e;return a.bW.e(b,c,d);}
function R5(){Hi.call(this);}
function A6p(a,b,c,d){var e,f,g,h,i;e=a.ll.jl;f=a.ll.iu;g=0;while(true){if(g>=e){a:{while(true){h=a.m.e(b,c,d);if(h>=0)break;if((b+a.cF.dY()|0)<=d.bO){h=a.cF.dg(b,c);b=b+h|0;g=g+1|0;}if(h<1)break a;if(g>f)break a;}return h;}return (-1);}if((b+a.cF.dY()|0)>d.bO){d.g8=1;return (-1);}i=a.cF.dg(b,c);if(i<1)break;b=b+i|0;g=g+1|0;}return (-1);}
function ADf(){B_.call(this);}
function AXp(){var a=new ADf();ARr(a);return a;}
function ARr(a){Cx(a);}
function A3K(a,b,c,d){if(b&&!(d.lM&&b==d.fc))return (-1);return a.m.e(b,c,d);}
function A2_(a,b){return 0;}
function ACi(){B_.call(this);this.Cw=0;}
function A6Z(a){var b=new ACi();ATr(b,a);return b;}
function ATr(a,b){Cx(a);a.Cw=b;}
function A0q(a,b,c,d){var e,f,g;e=b<d.bO?P(c,b):32;f=!b?32:P(c,b-1|0);g=d.oQ?0:d.fc;return (e!=32&&!Xg(a,e,b,g,c)?0:1)^(f!=32&&!Xg(a,f,b-1|0,g,c)?0:1)^a.Cw?(-1):a.m.e(b,c,d);}
function A0B(a,b){return 0;}
function Xg(a,b,c,d,e){var f;if(!Me(b)&&b!=95){a:{if(Dp(b)==6)while(true){c=c+(-1)|0;if(c<d)break a;f=P(e,c);if(Me(f))return 0;if(Dp(f)!=6)return 1;}}return 1;}return 0;}
function AIx(){B_.call(this);}
function A80(){var a=new AIx();AWX(a);return a;}
function AWX(a){Cx(a);}
function ATo(a,b,c,d){if(b!=d.lm)return (-1);return a.m.e(b,c,d);}
function AYI(a,b){return 0;}
function US(){B_.call(this);this.mw=0;}
function A9H(a){var b=new US();ANe(b,a);return b;}
function ANe(a,b){Cx(a);a.mw=b;}
function A5J(a,b,c,d){var e,f,g;e=!d.lM?Q(c):d.bO;if(b>=e){Cg(d,a.mw,0);return a.m.e(b,c,d);}f=e-b|0;if(f==2&&P(c,b)==13&&P(c,b+1|0)==10){Cg(d,a.mw,0);return a.m.e(b,c,d);}a:{if(f==1){g=P(c,b);if(g==10)break a;if(g==13)break a;if(g==133)break a;if((g|1)==8233)break a;}return (-1);}Cg(d,a.mw,0);return a.m.e(b,c,d);}
function A0W(a,b){var c;c=!EH(b,a.mw)?0:1;Cg(b,a.mw,(-1));return c;}
function ANz(){B_.call(this);}
function A9N(){var a=new ANz();ATf(a);return a;}
function ATf(a){Cx(a);}
function A4_(a,b,c,d){if(b<(d.oQ?Q(c):d.bO))return (-1);d.g8=1;d.Kn=1;return a.m.e(b,c,d);}
function AY3(a,b){return 0;}
function AH7(){B_.call(this);this.EI=null;}
function A$6(a){var b=new AH7();A5L(b,a);return b;}
function A5L(a,b){Cx(a);a.EI=b;}
function A0T(a,b,c,d){a:{if(b!=d.bO){if(!b)break a;if(d.lM&&b==d.fc)break a;if(a.EI.E7(P(c,b-1|0),P(c,b)))break a;}return (-1);}return a.m.e(b,c,d);}
function ASs(a,b){return 0;}
function AGg(){Cu.call(this);}
function A9X(){var a=new AGg();A43(a);return a;}
function A43(a){Cx(a);}
function AYq(a,b,c,d){var e,f,g,h;e=d.bO;f=b+1|0;if(f>e){d.g8=1;return (-1);}g=P(c,b);if(Dw(g)){h=b+2|0;if(h<=e&&K$(g,P(c,f)))return a.m.e(h,c,d);}return a.m.e(f,c,d);}
function A0F(a,b){a.m=b;}
function A4Z(a){return (-2147483602);}
function A0D(a,b){return 1;}
function ABH(){Cu.call(this);this.vh=null;}
function A9A(a){var b=new ABH();AQ0(b,a);return b;}
function AQ0(a,b){Cx(a);a.vh=b;}
function A45(a,b,c,d){var e,f,g,h;e=d.bO;f=b+1|0;if(f>e){d.g8=1;return (-1);}g=P(c,b);if(Dw(g)){b=b+2|0;if(b<=e){h=P(c,f);if(K$(g,h))return a.vh.o7(E3(g,h))?(-1):a.m.e(b,c,d);}}return a.vh.o7(g)?(-1):a.m.e(f,c,d);}
function A6e(a,b){a.m=b;}
function AOL(a){return (-2147483602);}
function AYz(a,b){return 1;}
function ANo(){B_.call(this);this.p9=0;}
function A9i(a){var b=new ANo();A2q(b,a);return b;}
function A2q(a,b){Cx(a);a.p9=b;}
function ATL(a,b,c,d){var e;e=!d.lM?Q(c):d.bO;if(b>=e){Cg(d,a.p9,0);return a.m.e(b,c,d);}if((e-b|0)==1&&P(c,b)==10){Cg(d,a.p9,1);return a.m.e(b+1|0,c,d);}return (-1);}
function A2o(a,b){var c;c=!EH(b,a.p9)?0:1;Cg(b,a.p9,(-1));return c;}
function AK6(){B_.call(this);this.oU=0;}
function A88(a){var b=new AK6();A2L(b,a);return b;}
function A2L(a,b){Cx(a);a.oU=b;}
function AVk(a,b,c,d){if((!d.lM?Q(c)-b|0:d.bO-b|0)<=0){Cg(d,a.oU,0);return a.m.e(b,c,d);}if(P(c,b)!=10)return (-1);Cg(d,a.oU,1);return a.m.e(b+1|0,c,d);}
function A2g(a,b){var c;c=!EH(b,a.oU)?0:1;Cg(b,a.oU,(-1));return c;}
function AHI(){B_.call(this);this.l5=0;}
function A8I(a){var b=new AHI();A8s(b,a);return b;}
function A8s(a,b){Cx(a);a.l5=b;}
function A27(a,b,c,d){var e,f,g;e=!d.lM?Q(c)-b|0:d.fc-b|0;if(!e){Cg(d,a.l5,0);return a.m.e(b,c,d);}if(e<2){f=P(c,b);g=97;}else{f=P(c,b);g=P(c,b+1|0);}switch(f){case 10:case 133:case 8232:case 8233:Cg(d,a.l5,0);return a.m.e(b,c,d);case 13:if(g!=10){Cg(d,a.l5,0);return a.m.e(b,c,d);}Cg(d,a.l5,0);return a.m.e(b,c,d);default:}return (-1);}
function AQ5(a,b){var c;c=!EH(b,a.l5)?0:1;Cg(b,a.l5,(-1));return c;}
function JZ(){var a=this;Cu.call(a);a.zX=0;a.m5=0;}
function A_i(a,b){var c=new JZ();Ri(c,a,b);return c;}
function Ri(a,b,c){Cx(a);a.zX=b;a.m5=c;}
function APF(a,b,c,d){var e,f,g,h;e=IK(a,d);if(e!==null&&(b+Q(e)|0)<=d.bO){f=0;while(true){if(f>=Q(e)){Cg(d,a.m5,Q(e));return a.m.e(b+Q(e)|0,c,d);}g=P(e,f);h=b+f|0;if(g!=P(c,h)&&Li(P(e,f))!=P(c,h))break;f=f+1|0;}return (-1);}return (-1);}
function A5N(a,b){a.m=b;}
function IK(a,b){return AKx(b,a.zX);}
function AWi(a,b){var c;c=!EH(b,a.m5)?0:1;Cg(b,a.m5,(-1));return c;}
function ANs(){JZ.call(this);}
function A94(a,b){var c=new ANs();A7p(c,a,b);return c;}
function A7p(a,b,c){Ri(a,b,c);}
function AQ8(a,b,c,d){var e,f;e=IK(a,d);if(e!==null&&(b+Q(e)|0)<=d.bO){f=!Pg(c,e,b)?(-1):Q(e);if(f<0)return (-1);Cg(d,a.m5,f);return a.m.e(b+f|0,c,d);}return (-1);}
function AXA(a,b,c,d){var e,f,g;e=IK(a,d);f=d.fc;if(e!==null&&(b+Q(e)|0)<=f){g=c;while(true){if(b>f)return (-1);b=Op(g,e,b);if(b<0)return (-1);if(a.m.e(b+Q(e)|0,c,d)>=0)break;b=b+1|0;}return b;}return (-1);}
function APp(a,b,c,d,e){var f,g,h;f=IK(a,e);if(f===null)return (-1);g=d;a:{while(true){if(c<b)return (-1);h=RG(g,f,c);if(h<0)break a;if(h<b)break a;if(a.m.e(h+Q(f)|0,d,e)>=0)break;c=h+(-1)|0;}return h;}return (-1);}
function A4m(a,b){return 1;}
function AJZ(){JZ.call(this);}
function A87(a,b){var c=new AJZ();ASj(c,a,b);return c;}
function ASj(a,b,c){Ri(a,b,c);}
function AUg(a,b,c,d){var e,f;e=IK(a,d);if(e!==null&&(b+Q(e)|0)<=d.bO){f=0;while(true){if(f>=Q(e)){Cg(d,a.m5,Q(e));return a.m.e(b+Q(e)|0,c,d);}if(Gg(F1(P(e,f)))!=Gg(F1(P(c,b+f|0))))break;f=f+1|0;}return (-1);}return (-1);}
function AKn(){var a=this;CA.call(a);a.eY=null;a.xx=null;a.vq=null;}
function A89(a){var b=new AKn();A1k(b,a);return b;}
function A1k(a,b){var c;E9(a);a.eY=R(b);a.c_=PP(b);a.xx=A4Y(a.c_);a.vq=A4Y(a.c_);c=0;while(c<(a.c_-1|0)){R7(a.xx,P(a.eY,c),(a.c_-c|0)-1|0);R7(a.vq,P(a.eY,(a.c_-c|0)-1|0),(a.c_-c|0)-1|0);c=c+1|0;}}
function ARk(a,b,c){return !MJ(a,c,b)?(-1):a.c_;}
function A0o(a,b,c,d){var e,f;e=d.bO;while(true){if(b>e)return (-1);f=ANE(a,c,b,e);if(f<0)return (-1);if(a.m.e(f+a.c_|0,c,d)>=0)break;b=f+1|0;}return f;}
function A2s(a,b,c,d,e){while(true){if(c<b)return (-1);c=ANd(a,d,b,c);if(c<0)return (-1);if(a.m.e(c+a.c_|0,d,e)>=0)break;c=c+(-1)|0;}return c;}
function ASR(a,b){var c;if(b instanceof FW)return b.gm!=P(a.eY,0)?0:1;if(b instanceof FP)return Vn(b,0,BO(a.eY,0,1))<=0?0:1;if(!(b instanceof E_)){if(!(b instanceof Fi))return 1;return Q(a.eY)>1&&b.kV==E3(P(a.eY,0),P(a.eY,1))?1:0;}a:{b:{b=b;if(!b.T(P(a.eY,0))){if(Q(a.eY)<=1)break b;if(!b.T(E3(P(a.eY,0),P(a.eY,1))))break b;}c=1;break a;}c=0;}return c;}
function ANE(a,b,c,d){var e,f;e=P(a.eY,a.c_-1|0);while(true){if(c>(d-a.c_|0))return (-1);f=P(b,(c+a.c_|0)-1|0);if(f==e&&MJ(a,b,c))break;c=c+XT(a.xx,f)|0;}return c;}
function ANd(a,b,c,d){var e,f,g;e=P(a.eY,0);f=(Q(b)-d|0)-a.c_|0;if(f<=0)d=d+f|0;while(true){if(d<c)return (-1);g=P(b,d);if(g==e&&MJ(a,b,d))break;d=d-XT(a.vq,g)|0;}return d;}
function MJ(a,b,c){var d;d=0;while(d<a.c_){if(P(b,d+c|0)!=P(a.eY,d))return 0;d=d+1|0;}return 1;}
function AAi(){CA.call(this);this.td=null;}
function A_j(a){var b=new AAi();A64(b,a);return b;}
function A64(a,b){var c,d;E9(a);c=new S;V(c);d=0;while(d<PP(b)){Ce(c,Gg(F1(AHO(b,d))));d=d+1|0;}a.td=R(c);a.c_=Lg(c);}
function AUj(a,b,c){var d;d=0;while(true){if(d>=Q(a.td))return Q(a.td);if(P(a.td,d)!=Gg(F1(P(c,b+d|0))))break;d=d+1|0;}return (-1);}
function Qq(){CA.call(this);this.p5=null;}
function A6k(a,b,c){var d,e,f;d=0;while(true){if(d>=Q(a.p5))return Q(a.p5);e=P(a.p5,d);f=b+d|0;if(e!=P(c,f)&&Li(P(a.p5,d))!=P(c,f))break;d=d+1|0;}return (-1);}
function Jf(){C.call(this);}
var BhU=null;var BhV=null;var BhW=null;function ANQ(a,b){var c,d,e;c=0;while(true){if(c>=BhW.data.length){d=new NW;Bd(d,B(9));d.Im=B(9);d.Ky=b;J(d);}e=BhW.data[c].data;if(BW(b,e[0]))break;c=c+1|0;}return e[1];}
function ACj(){var b,c,d,e;BhU=A9L();BhV=A$B();b=H($rt_arraycls(C),194);c=b.data;d=H(C,2);e=d.data;e[0]=B(706);e[1]=A9Z();c[0]=d;d=H(C,2);e=d.data;e[0]=B(707);e[1]=A8H();c[1]=d;d=H(C,2);e=d.data;e[0]=B(708);e[1]=A$4();c[2]=d;d=H(C,2);e=d.data;e[0]=B(709);e[1]=A$$();c[3]=d;d=H(C,2);e=d.data;e[0]=B(710);e[1]=BhV;c[4]=d;d=H(C,2);e=d.data;e[0]=B(711);e[1]=A$I();c[5]=d;d=H(C,2);e=d.data;e[0]=B(712);e[1]=A8_();c[6]=d;d=H(C,2);e=d.data;e[0]=B(713);e[1]=A97();c[7]=d;d=H(C,2);e=d.data;e[0]=B(714);e[1]=A93();c[8]=d;d
=H(C,2);e=d.data;e[0]=B(715);e[1]=A8R();c[9]=d;d=H(C,2);e=d.data;e[0]=B(716);e[1]=A82();c[10]=d;d=H(C,2);e=d.data;e[0]=B(717);e[1]=A99();c[11]=d;d=H(C,2);e=d.data;e[0]=B(718);e[1]=A9v();c[12]=d;d=H(C,2);e=d.data;e[0]=B(719);e[1]=A8F();c[13]=d;d=H(C,2);e=d.data;e[0]=B(720);e[1]=A$7();c[14]=d;d=H(C,2);e=d.data;e[0]=B(721);e[1]=A81();c[15]=d;d=H(C,2);e=d.data;e[0]=B(722);e[1]=A$G();c[16]=d;d=H(C,2);e=d.data;e[0]=B(723);e[1]=A$m();c[17]=d;d=H(C,2);e=d.data;e[0]=B(724);e[1]=A$H();c[18]=d;d=H(C,2);e=d.data;e[0]=B(725);e[1]
=A8T();c[19]=d;d=H(C,2);e=d.data;e[0]=B(726);e[1]=A_a();c[20]=d;d=H(C,2);e=d.data;e[0]=B(727);e[1]=A$h();c[21]=d;d=H(C,2);e=d.data;e[0]=B(728);e[1]=A9j();c[22]=d;d=H(C,2);e=d.data;e[0]=B(729);e[1]=A$2();c[23]=d;d=H(C,2);e=d.data;e[0]=B(730);e[1]=A$0();c[24]=d;d=H(C,2);e=d.data;e[0]=B(731);e[1]=A9U();c[25]=d;d=H(C,2);e=d.data;e[0]=B(732);e[1]=A8S();c[26]=d;d=H(C,2);e=d.data;e[0]=B(733);e[1]=A$T();c[27]=d;d=H(C,2);e=d.data;e[0]=B(734);e[1]=BhU;c[28]=d;d=H(C,2);e=d.data;e[0]=B(735);e[1]=A9p();c[29]=d;d=H(C,2);e
=d.data;e[0]=B(60);e[1]=A98();c[30]=d;d=H(C,2);e=d.data;e[0]=B(736);e[1]=BhU;c[31]=d;d=H(C,2);e=d.data;e[0]=B(74);e[1]=A8D();c[32]=d;d=H(C,2);e=d.data;e[0]=B(737);e[1]=BhV;c[33]=d;d=H(C,2);e=d.data;e[0]=B(75);e[1]=A86();c[34]=d;d=H(C,2);e=d.data;e[0]=B(738);e[1]=X(0,127);c[35]=d;d=H(C,2);e=d.data;e[0]=B(739);e[1]=X(128,255);c[36]=d;d=H(C,2);e=d.data;e[0]=B(740);e[1]=X(256,383);c[37]=d;d=H(C,2);e=d.data;e[0]=B(741);e[1]=X(384,591);c[38]=d;d=H(C,2);e=d.data;e[0]=B(742);e[1]=X(592,687);c[39]=d;d=H(C,2);e=d.data;e[0]
=B(743);e[1]=X(688,767);c[40]=d;d=H(C,2);e=d.data;e[0]=B(744);e[1]=X(768,879);c[41]=d;d=H(C,2);e=d.data;e[0]=B(745);e[1]=X(880,1023);c[42]=d;d=H(C,2);e=d.data;e[0]=B(746);e[1]=X(1024,1279);c[43]=d;d=H(C,2);e=d.data;e[0]=B(747);e[1]=X(1280,1327);c[44]=d;d=H(C,2);e=d.data;e[0]=B(748);e[1]=X(1328,1423);c[45]=d;d=H(C,2);e=d.data;e[0]=B(749);e[1]=X(1424,1535);c[46]=d;d=H(C,2);e=d.data;e[0]=B(750);e[1]=X(1536,1791);c[47]=d;d=H(C,2);e=d.data;e[0]=B(751);e[1]=X(1792,1871);c[48]=d;d=H(C,2);e=d.data;e[0]=B(752);e[1]=
X(1872,1919);c[49]=d;d=H(C,2);e=d.data;e[0]=B(753);e[1]=X(1920,1983);c[50]=d;d=H(C,2);e=d.data;e[0]=B(754);e[1]=X(2304,2431);c[51]=d;d=H(C,2);e=d.data;e[0]=B(755);e[1]=X(2432,2559);c[52]=d;d=H(C,2);e=d.data;e[0]=B(756);e[1]=X(2560,2687);c[53]=d;d=H(C,2);e=d.data;e[0]=B(757);e[1]=X(2688,2815);c[54]=d;d=H(C,2);e=d.data;e[0]=B(758);e[1]=X(2816,2943);c[55]=d;d=H(C,2);e=d.data;e[0]=B(759);e[1]=X(2944,3071);c[56]=d;d=H(C,2);e=d.data;e[0]=B(760);e[1]=X(3072,3199);c[57]=d;d=H(C,2);e=d.data;e[0]=B(761);e[1]=X(3200,3327);c[58]
=d;d=H(C,2);e=d.data;e[0]=B(762);e[1]=X(3328,3455);c[59]=d;d=H(C,2);e=d.data;e[0]=B(763);e[1]=X(3456,3583);c[60]=d;d=H(C,2);e=d.data;e[0]=B(764);e[1]=X(3584,3711);c[61]=d;d=H(C,2);e=d.data;e[0]=B(765);e[1]=X(3712,3839);c[62]=d;d=H(C,2);e=d.data;e[0]=B(766);e[1]=X(3840,4095);c[63]=d;d=H(C,2);e=d.data;e[0]=B(767);e[1]=X(4096,4255);c[64]=d;d=H(C,2);e=d.data;e[0]=B(768);e[1]=X(4256,4351);c[65]=d;d=H(C,2);e=d.data;e[0]=B(769);e[1]=X(4352,4607);c[66]=d;d=H(C,2);e=d.data;e[0]=B(770);e[1]=X(4608,4991);c[67]=d;d=H(C,
2);e=d.data;e[0]=B(771);e[1]=X(4992,5023);c[68]=d;d=H(C,2);e=d.data;e[0]=B(772);e[1]=X(5024,5119);c[69]=d;d=H(C,2);e=d.data;e[0]=B(773);e[1]=X(5120,5759);c[70]=d;d=H(C,2);e=d.data;e[0]=B(774);e[1]=X(5760,5791);c[71]=d;d=H(C,2);e=d.data;e[0]=B(775);e[1]=X(5792,5887);c[72]=d;d=H(C,2);e=d.data;e[0]=B(776);e[1]=X(5888,5919);c[73]=d;d=H(C,2);e=d.data;e[0]=B(777);e[1]=X(5920,5951);c[74]=d;d=H(C,2);e=d.data;e[0]=B(778);e[1]=X(5952,5983);c[75]=d;d=H(C,2);e=d.data;e[0]=B(779);e[1]=X(5984,6015);c[76]=d;d=H(C,2);e=d.data;e[0]
=B(780);e[1]=X(6016,6143);c[77]=d;d=H(C,2);e=d.data;e[0]=B(781);e[1]=X(6144,6319);c[78]=d;d=H(C,2);e=d.data;e[0]=B(782);e[1]=X(6400,6479);c[79]=d;d=H(C,2);e=d.data;e[0]=B(783);e[1]=X(6480,6527);c[80]=d;d=H(C,2);e=d.data;e[0]=B(784);e[1]=X(6528,6623);c[81]=d;d=H(C,2);e=d.data;e[0]=B(785);e[1]=X(6624,6655);c[82]=d;d=H(C,2);e=d.data;e[0]=B(786);e[1]=X(6656,6687);c[83]=d;d=H(C,2);e=d.data;e[0]=B(787);e[1]=X(7424,7551);c[84]=d;d=H(C,2);e=d.data;e[0]=B(788);e[1]=X(7552,7615);c[85]=d;d=H(C,2);e=d.data;e[0]=B(789);e[1]
=X(7616,7679);c[86]=d;d=H(C,2);e=d.data;e[0]=B(790);e[1]=X(7680,7935);c[87]=d;d=H(C,2);e=d.data;e[0]=B(791);e[1]=X(7936,8191);c[88]=d;d=H(C,2);e=d.data;e[0]=B(792);e[1]=X(8192,8303);c[89]=d;d=H(C,2);e=d.data;e[0]=B(793);e[1]=X(8304,8351);c[90]=d;d=H(C,2);e=d.data;e[0]=B(794);e[1]=X(8352,8399);c[91]=d;d=H(C,2);e=d.data;e[0]=B(795);e[1]=X(8400,8447);c[92]=d;d=H(C,2);e=d.data;e[0]=B(796);e[1]=X(8448,8527);c[93]=d;d=H(C,2);e=d.data;e[0]=B(797);e[1]=X(8528,8591);c[94]=d;d=H(C,2);e=d.data;e[0]=B(798);e[1]=X(8592,
8703);c[95]=d;d=H(C,2);e=d.data;e[0]=B(799);e[1]=X(8704,8959);c[96]=d;d=H(C,2);e=d.data;e[0]=B(800);e[1]=X(8960,9215);c[97]=d;d=H(C,2);e=d.data;e[0]=B(801);e[1]=X(9216,9279);c[98]=d;d=H(C,2);e=d.data;e[0]=B(802);e[1]=X(9280,9311);c[99]=d;d=H(C,2);e=d.data;e[0]=B(803);e[1]=X(9312,9471);c[100]=d;d=H(C,2);e=d.data;e[0]=B(804);e[1]=X(9472,9599);c[101]=d;d=H(C,2);e=d.data;e[0]=B(805);e[1]=X(9600,9631);c[102]=d;d=H(C,2);e=d.data;e[0]=B(806);e[1]=X(9632,9727);c[103]=d;d=H(C,2);e=d.data;e[0]=B(807);e[1]=X(9728,9983);c[104]
=d;d=H(C,2);e=d.data;e[0]=B(808);e[1]=X(9984,10175);c[105]=d;d=H(C,2);e=d.data;e[0]=B(809);e[1]=X(10176,10223);c[106]=d;d=H(C,2);e=d.data;e[0]=B(810);e[1]=X(10224,10239);c[107]=d;d=H(C,2);e=d.data;e[0]=B(811);e[1]=X(10240,10495);c[108]=d;d=H(C,2);e=d.data;e[0]=B(812);e[1]=X(10496,10623);c[109]=d;d=H(C,2);e=d.data;e[0]=B(813);e[1]=X(10624,10751);c[110]=d;d=H(C,2);e=d.data;e[0]=B(814);e[1]=X(10752,11007);c[111]=d;d=H(C,2);e=d.data;e[0]=B(815);e[1]=X(11008,11263);c[112]=d;d=H(C,2);e=d.data;e[0]=B(816);e[1]=X(11264,
11359);c[113]=d;d=H(C,2);e=d.data;e[0]=B(817);e[1]=X(11392,11519);c[114]=d;d=H(C,2);e=d.data;e[0]=B(818);e[1]=X(11520,11567);c[115]=d;d=H(C,2);e=d.data;e[0]=B(819);e[1]=X(11568,11647);c[116]=d;d=H(C,2);e=d.data;e[0]=B(820);e[1]=X(11648,11743);c[117]=d;d=H(C,2);e=d.data;e[0]=B(821);e[1]=X(11776,11903);c[118]=d;d=H(C,2);e=d.data;e[0]=B(822);e[1]=X(11904,12031);c[119]=d;d=H(C,2);e=d.data;e[0]=B(823);e[1]=X(12032,12255);c[120]=d;d=H(C,2);e=d.data;e[0]=B(824);e[1]=X(12272,12287);c[121]=d;d=H(C,2);e=d.data;e[0]=B(825);e[1]
=X(12288,12351);c[122]=d;d=H(C,2);e=d.data;e[0]=B(826);e[1]=X(12352,12447);c[123]=d;d=H(C,2);e=d.data;e[0]=B(827);e[1]=X(12448,12543);c[124]=d;d=H(C,2);e=d.data;e[0]=B(828);e[1]=X(12544,12591);c[125]=d;d=H(C,2);e=d.data;e[0]=B(829);e[1]=X(12592,12687);c[126]=d;d=H(C,2);e=d.data;e[0]=B(830);e[1]=X(12688,12703);c[127]=d;d=H(C,2);e=d.data;e[0]=B(831);e[1]=X(12704,12735);c[128]=d;d=H(C,2);e=d.data;e[0]=B(832);e[1]=X(12736,12783);c[129]=d;d=H(C,2);e=d.data;e[0]=B(833);e[1]=X(12784,12799);c[130]=d;d=H(C,2);e=d.data;e[0]
=B(834);e[1]=X(12800,13055);c[131]=d;d=H(C,2);e=d.data;e[0]=B(835);e[1]=X(13056,13311);c[132]=d;d=H(C,2);e=d.data;e[0]=B(836);e[1]=X(13312,19893);c[133]=d;d=H(C,2);e=d.data;e[0]=B(837);e[1]=X(19904,19967);c[134]=d;d=H(C,2);e=d.data;e[0]=B(838);e[1]=X(19968,40959);c[135]=d;d=H(C,2);e=d.data;e[0]=B(839);e[1]=X(40960,42127);c[136]=d;d=H(C,2);e=d.data;e[0]=B(840);e[1]=X(42128,42191);c[137]=d;d=H(C,2);e=d.data;e[0]=B(841);e[1]=X(42752,42783);c[138]=d;d=H(C,2);e=d.data;e[0]=B(842);e[1]=X(43008,43055);c[139]=d;d=H(C,
2);e=d.data;e[0]=B(843);e[1]=X(44032,55203);c[140]=d;d=H(C,2);e=d.data;e[0]=B(844);e[1]=X(55296,56191);c[141]=d;d=H(C,2);e=d.data;e[0]=B(845);e[1]=X(56192,56319);c[142]=d;d=H(C,2);e=d.data;e[0]=B(846);e[1]=X(56320,57343);c[143]=d;d=H(C,2);e=d.data;e[0]=B(847);e[1]=X(57344,63743);c[144]=d;d=H(C,2);e=d.data;e[0]=B(848);e[1]=X(63744,64255);c[145]=d;d=H(C,2);e=d.data;e[0]=B(849);e[1]=X(64256,64335);c[146]=d;d=H(C,2);e=d.data;e[0]=B(850);e[1]=X(64336,65023);c[147]=d;d=H(C,2);e=d.data;e[0]=B(851);e[1]=X(65024,65039);c[148]
=d;d=H(C,2);e=d.data;e[0]=B(852);e[1]=X(65040,65055);c[149]=d;d=H(C,2);e=d.data;e[0]=B(853);e[1]=X(65056,65071);c[150]=d;d=H(C,2);e=d.data;e[0]=B(854);e[1]=X(65072,65103);c[151]=d;d=H(C,2);e=d.data;e[0]=B(855);e[1]=X(65104,65135);c[152]=d;d=H(C,2);e=d.data;e[0]=B(856);e[1]=X(65136,65279);c[153]=d;d=H(C,2);e=d.data;e[0]=B(857);e[1]=X(65280,65519);c[154]=d;d=H(C,2);e=d.data;e[0]=B(858);e[1]=X(0,1114111);c[155]=d;d=H(C,2);e=d.data;e[0]=B(859);e[1]=A9$();c[156]=d;d=H(C,2);e=d.data;e[0]=B(860);e[1]=Cl(0,1);c[157]
=d;d=H(C,2);e=d.data;e[0]=B(861);e[1]=LU(62,1);c[158]=d;d=H(C,2);e=d.data;e[0]=B(862);e[1]=Cl(1,1);c[159]=d;d=H(C,2);e=d.data;e[0]=B(863);e[1]=Cl(2,1);c[160]=d;d=H(C,2);e=d.data;e[0]=B(864);e[1]=Cl(3,0);c[161]=d;d=H(C,2);e=d.data;e[0]=B(865);e[1]=Cl(4,0);c[162]=d;d=H(C,2);e=d.data;e[0]=B(866);e[1]=Cl(5,1);c[163]=d;d=H(C,2);e=d.data;e[0]=B(867);e[1]=LU(448,1);c[164]=d;d=H(C,2);e=d.data;e[0]=B(868);e[1]=Cl(6,1);c[165]=d;d=H(C,2);e=d.data;e[0]=B(869);e[1]=Cl(7,0);c[166]=d;d=H(C,2);e=d.data;e[0]=B(870);e[1]=Cl(8,
1);c[167]=d;d=H(C,2);e=d.data;e[0]=B(92);e[1]=LU(3584,1);c[168]=d;d=H(C,2);e=d.data;e[0]=B(871);e[1]=Cl(9,1);c[169]=d;d=H(C,2);e=d.data;e[0]=B(872);e[1]=Cl(10,1);c[170]=d;d=H(C,2);e=d.data;e[0]=B(873);e[1]=Cl(11,1);c[171]=d;d=H(C,2);e=d.data;e[0]=B(874);e[1]=LU(28672,0);c[172]=d;d=H(C,2);e=d.data;e[0]=B(875);e[1]=Cl(12,0);c[173]=d;d=H(C,2);e=d.data;e[0]=B(876);e[1]=Cl(13,0);c[174]=d;d=H(C,2);e=d.data;e[0]=B(877);e[1]=Cl(14,0);c[175]=d;d=H(C,2);e=d.data;e[0]=B(878);e[1]=A$y(983040,1,1);c[176]=d;d=H(C,2);e=d.data;e[0]
=B(879);e[1]=Cl(15,0);c[177]=d;d=H(C,2);e=d.data;e[0]=B(880);e[1]=Cl(16,1);c[178]=d;d=H(C,2);e=d.data;e[0]=B(881);e[1]=Cl(18,1);c[179]=d;d=H(C,2);e=d.data;e[0]=B(882);e[1]=A9h(19,0,1);c[180]=d;d=H(C,2);e=d.data;e[0]=B(883);e[1]=LU(1643118592,1);c[181]=d;d=H(C,2);e=d.data;e[0]=B(884);e[1]=Cl(20,0);c[182]=d;d=H(C,2);e=d.data;e[0]=B(885);e[1]=Cl(21,0);c[183]=d;d=H(C,2);e=d.data;e[0]=B(886);e[1]=Cl(22,0);c[184]=d;d=H(C,2);e=d.data;e[0]=B(887);e[1]=Cl(23,0);c[185]=d;d=H(C,2);e=d.data;e[0]=B(888);e[1]=Cl(24,1);c[186]
=d;d=H(C,2);e=d.data;e[0]=B(889);e[1]=LU(2113929216,1);c[187]=d;d=H(C,2);e=d.data;e[0]=B(890);e[1]=Cl(25,1);c[188]=d;d=H(C,2);e=d.data;e[0]=B(891);e[1]=Cl(26,0);c[189]=d;d=H(C,2);e=d.data;e[0]=B(892);e[1]=Cl(27,0);c[190]=d;d=H(C,2);e=d.data;e[0]=B(893);e[1]=Cl(28,1);c[191]=d;d=H(C,2);e=d.data;e[0]=B(894);e[1]=Cl(29,0);c[192]=d;d=H(C,2);e=d.data;e[0]=B(895);e[1]=Cl(30,0);c[193]=d;BhW=b;}
function Bq(){var a=this;C.call(a);a.vN=null;a.uU=null;}
function AME(a,b){if(!b&&a.vN===null)a.vN=a.b3();else if(b&&a.uU===null)a.uU=FY(a.b3(),1);if(b)return a.uU;return a.vN;}
function Vr(){CA.call(this);this.A$=0;}
function AWB(a,b,c){var d,e;d=b+1|0;e=P(c,b);d=P(c,d);return a.A$!=Hy(Hw(E3(e,d)))?(-1):2;}
function OY(){Cu.call(this);this.mK=0;}
function AVc(a){var b=new OY();AQy(b,a);return b;}
function AQy(a,b){Cx(a);a.mK=b;}
function A5k(a,b){a.m=b;}
function A0X(a,b,c,d){var e,f;e=b+1|0;if(e>d.bO){d.g8=1;return (-1);}f=P(c,b);if(b>d.fc&&Dw(P(c,b-1|0)))return (-1);if(a.mK!=f)return (-1);return a.m.e(e,c,d);}
function ASP(a,b,c,d){var e,f,g,h,i;if(!(c instanceof BC))return Kk(a,b,c,d);e=c;f=d.fc;g=d.bO;while(true){if(b>=g)return (-1);h=Eo(e,a.mK,b);if(h<0)return (-1);if(h>f&&Dw(P(e,h-1|0))){b=h+1|0;continue;}i=a.m;b=h+1|0;if(i.e(b,c,d)>=0)break;}return h;}
function A1x(a,b,c,d,e){var f,g;if(!(d instanceof BC))return Kt(a,b,c,d,e);f=e.fc;g=d;a:{while(true){if(c<b)return (-1);c=Ft(g,a.mK,c);if(c<0)break a;if(c<b)break a;if(c>f&&Dw(P(g,c-1|0))){c=c+(-2)|0;continue;}if(a.m.e(c+1|0,d,e)>=0)break;c=c+(-1)|0;}return c;}return (-1);}
function APm(a,b){if(b instanceof FW)return 0;if(b instanceof FP)return 0;if(b instanceof E_)return 0;if(b instanceof Fi)return 0;if(b instanceof O_)return 0;if(!(b instanceof OY))return 1;return b.mK!=a.mK?0:1;}
function AXd(a,b){return 1;}
function O_(){Cu.call(this);this.mj=0;}
function A2$(a){var b=new O_();AVi(b,a);return b;}
function AVi(a,b){Cx(a);a.mj=b;}
function A0N(a,b){a.m=b;}
function AO5(a,b,c,d){var e,f,g,h;e=d.bO;f=b+1|0;g=Bw(f,e);if(g>0){d.g8=1;return (-1);}h=P(c,b);if(g<0&&D1(P(c,f)))return (-1);if(a.mj!=h)return (-1);return a.m.e(f,c,d);}
function A5z(a,b,c,d){var e,f,g;if(!(c instanceof BC))return Kk(a,b,c,d);e=c;f=d.bO;while(true){if(b>=f)return (-1);g=Eo(e,a.mj,b);if(g<0)return (-1);b=g+1|0;if(b<f&&D1(P(e,b))){b=g+2|0;continue;}if(a.m.e(b,c,d)>=0)break;}return g;}
function AWy(a,b,c,d,e){var f,g,h;if(!(d instanceof BC))return Kt(a,b,c,d,e);f=d;g=e.bO;a:{while(true){if(c<b)return (-1);c=Ft(f,a.mj,c);if(c<0)break a;if(c<b)break a;h=c+1|0;if(h<g&&D1(P(f,h))){c=c+(-1)|0;continue;}if(a.m.e(h,d,e)>=0)break;c=c+(-1)|0;}return c;}return (-1);}
function ARm(a,b){if(b instanceof FW)return 0;if(b instanceof FP)return 0;if(b instanceof E_)return 0;if(b instanceof Fi)return 0;if(b instanceof OY)return 0;if(!(b instanceof O_))return 1;return b.mj!=a.mj?0:1;}
function A5F(a,b){return 1;}
function Fi(){var a=this;CA.call(a);a.t0=0;a.sU=0;a.kV=0;}
function A56(a,b,c){var d,e;d=b+1|0;e=P(c,b);d=P(c,d);return a.t0==e&&a.sU==d?2:(-1);}
function A4N(a,b,c,d){var e,f,g;if(!(c instanceof BC))return Kk(a,b,c,d);e=c;f=d.bO;while(b<f){b=Eo(e,a.t0,b);if(b<0)return (-1);b=b+1|0;if(b>=f)continue;g=P(e,b);if(a.sU==g&&a.m.e(b+1|0,c,d)>=0)return b+(-1)|0;b=b+1|0;}return (-1);}
function AQA(a,b,c,d,e){var f;if(!(d instanceof BC))return Kt(a,b,c,d,e);f=d;a:{while(true){if(c<b)return (-1);c=Ft(f,a.sU,c)+(-1)|0;if(c<0)break a;if(c<b)break a;if(a.t0==P(f,c)&&a.m.e(c+2|0,d,e)>=0)break;c=c+(-1)|0;}return c;}return (-1);}
function AZl(a){return a.kV;}
function A5U(a,b){if(b instanceof Fi)return b.kV!=a.kV?0:1;if(b instanceof E_)return b.T(a.kV);if(b instanceof FW)return 0;if(!(b instanceof FP))return 1;return 0;}
function YU(){GY.call(this);}
function AQG(a,b){return b!=10?0:1;}
function AWe(a,b,c){return b!=10?0:1;}
function YV(){GY.call(this);}
function A6q(a,b){return b!=10&&b!=13&&b!=133&&(b|1)!=8233?0:1;}
function AX8(a,b,c){a:{b:{if(b!=10&&b!=133&&(b|1)!=8233){if(b!=13)break b;if(c==10)break b;}b=1;break a;}b=0;}return b;}
function AFj(){var a=this;C.call(a);a.pt=null;a.uj=null;a.f5=0;a.CY=0;}
function A4Y(a){var b=new AFj();ATn(b,a);return b;}
function ATn(a,b){while(b>=a.f5){a.f5=a.f5<<1|1;}a.f5=a.f5<<1|1;a.pt=$rt_createIntArray(a.f5+1|0);a.uj=$rt_createIntArray(a.f5+1|0);a.CY=b;}
function R7(a,b,c){var d,e;d=0;e=b&a.f5;while(a.pt.data[e]&&a.pt.data[e]!=b){d=(d+1|0)&a.f5;e=(e+d|0)&a.f5;}a.pt.data[e]=b;a.uj.data[e]=c;}
function XT(a,b){var c,d,e;c=b&a.f5;d=0;while(true){e=a.pt.data[c];if(!e)break;if(e==b)return a.uj.data[c];d=(d+1|0)&a.f5;c=(c+d|0)&a.f5;}return a.CY;}
function AAP(){C.call(this);}
function OU(){Bq.call(this);}
function A9L(){var a=new OU();AS5(a);return a;}
function AS5(a){return;}
function AJ8(a){return Dq(Cy(EI(),9,13),32);}
function Om(){Bq.call(this);}
function A$B(){var a=new Om();AW8(a);return a;}
function AW8(a){return;}
function AKO(a){return Cy(EI(),48,57);}
function AFf(){Bq.call(this);}
function A9Z(){var a=new AFf();ASE(a);return a;}
function ASE(a){return;}
function A6g(a){return Cy(EI(),97,122);}
function AFJ(){Bq.call(this);}
function A8H(){var a=new AFJ();ATu(a);return a;}
function ATu(a){return;}
function AXf(a){return Cy(EI(),65,90);}
function AFM(){Bq.call(this);}
function A$4(){var a=new AFM();AP0(a);return a;}
function AP0(a){return;}
function ARS(a){return Cy(EI(),0,127);}
function OP(){Bq.call(this);}
function A$$(){var a=new OP();AQ9(a);return a;}
function AQ9(a){return;}
function ABJ(a){return Cy(Cy(EI(),97,122),65,90);}
function Ng(){OP.call(this);}
function A$I(){var a=new Ng();AS9(a);return a;}
function AS9(a){return;}
function ACN(a){return Cy(ABJ(a),48,57);}
function AHl(){Bq.call(this);}
function A8_(){var a=new AHl();A4y(a);return a;}
function A4y(a){return;}
function A2N(a){return Cy(Cy(Cy(EI(),33,64),91,96),123,126);}
function PU(){Ng.call(this);}
function A97(){var a=new PU();AV0(a);return a;}
function AV0(a){return;}
function AHy(a){return Cy(Cy(Cy(ACN(a),33,64),91,96),123,126);}
function AKl(){PU.call(this);}
function A93(){var a=new AKl();AW1(a);return a;}
function AW1(a){return;}
function AUC(a){return Dq(AHy(a),32);}
function ADU(){Bq.call(this);}
function A8R(){var a=new ADU();A6l(a);return a;}
function A6l(a){return;}
function A1j(a){return Dq(Dq(EI(),32),9);}
function AB_(){Bq.call(this);}
function A82(){var a=new AB_();A7F(a);return a;}
function A7F(a){return;}
function AUv(a){return Dq(Cy(EI(),0,31),127);}
function AIQ(){Bq.call(this);}
function A99(){var a=new AIQ();AQi(a);return a;}
function AQi(a){return;}
function AYc(a){return Cy(Cy(Cy(EI(),48,57),97,102),65,70);}
function AM5(){Bq.call(this);}
function A9v(){var a=new AM5();AZ_(a);return a;}
function AZ_(a){return;}
function A4W(a){var b;b=new X1;b.JF=a;BQ(b);b.cf=1;return b;}
function AHo(){Bq.call(this);}
function A8F(){var a=new AHo();AWa(a);return a;}
function AWa(a){return;}
function AZa(a){var b;b=new Vz;b.JN=a;BQ(b);b.cf=1;return b;}
function AMo(){Bq.call(this);}
function A$7(){var a=new AMo();AP6(a);return a;}
function AP6(a){return;}
function AS8(a){var b;b=new Ss;b.Jj=a;BQ(b);return b;}
function AE2(){Bq.call(this);}
function A81(){var a=new AE2();AUy(a);return a;}
function AUy(a){return;}
function AWj(a){var b;b=new Sr;b.GJ=a;BQ(b);return b;}
function AF4(){Bq.call(this);}
function A$G(){var a=new AF4();AQ7(a);return a;}
function AQ7(a){return;}
function A1h(a){var b;b=new UI;b.H0=a;BQ(b);Ky(b.cb,0,2048);b.cf=1;return b;}
function ABa(){Bq.call(this);}
function A$m(){var a=new ABa();AQE(a);return a;}
function AQE(a){return;}
function ARx(a){var b;b=new Wu;b.J0=a;BQ(b);b.cf=1;return b;}
function AHZ(){Bq.call(this);}
function A$H(){var a=new AHZ();AUh(a);return a;}
function AUh(a){return;}
function A7K(a){var b;b=new QP;b.Ip=a;BQ(b);b.cf=1;return b;}
function AMw(){Bq.call(this);}
function A8T(){var a=new AMw();AUO(a);return a;}
function AUO(a){return;}
function AY5(a){var b;b=new Xk;b.He=a;BQ(b);return b;}
function AFy(){Bq.call(this);}
function A_a(){var a=new AFy();A2X(a);return a;}
function A2X(a){return;}
function ATS(a){var b;b=new Vv;b.Gb=a;BQ(b);b.cf=1;return b;}
function AJv(){Bq.call(this);}
function A$h(){var a=new AJv();APq(a);return a;}
function APq(a){return;}
function ARC(a){var b;b=new Vy;b.Hz=a;BQ(b);b.cf=1;return b;}
function AD3(){Bq.call(this);}
function A9j(){var a=new AD3();AQK(a);return a;}
function AQK(a){return;}
function A2t(a){var b;b=new QG;b.HY=a;BQ(b);b.cf=1;return b;}
function AGP(){Bq.call(this);}
function A$2(){var a=new AGP();ATX(a);return a;}
function ATX(a){return;}
function A3D(a){var b;b=new WL;b.KC=a;BQ(b);b.cf=1;return b;}
function AMG(){Bq.call(this);}
function A$0(){var a=new AMG();A4Q(a);return a;}
function A4Q(a){return;}
function AXt(a){var b;b=new WR;b.G1=a;BQ(b);return b;}
function AC4(){Bq.call(this);}
function A9U(){var a=new AC4();AQF(a);return a;}
function AQF(a){return;}
function AVW(a){var b;b=new Yn;b.J9=a;BQ(b);return b;}
function ACD(){Bq.call(this);}
function A8S(){var a=new ACD();A5$(a);return a;}
function A5$(a){return;}
function AU2(a){var b;b=new XN;b.Ge=a;BQ(b);b.cf=1;return b;}
function AHn(){Bq.call(this);}
function A$T(){var a=new AHn();A2U(a);return a;}
function A2U(a){return;}
function A6c(a){var b;b=new Qc;b.KV=a;BQ(b);b.cf=1;return b;}
function Mb(){Bq.call(this);}
function A9p(){var a=new Mb();ARK(a);return a;}
function ARK(a){return;}
function ADV(a){return Dq(Cy(Cy(Cy(EI(),97,122),65,90),48,57),95);}
function ANj(){Mb.call(this);}
function A98(){var a=new ANj();A20(a);return a;}
function A20(a){return;}
function AUR(a){var b;b=FY(ADV(a),1);b.cf=1;return b;}
function AKq(){OU.call(this);}
function A8D(){var a=new AKq();AXS(a);return a;}
function AXS(a){return;}
function A0j(a){var b;b=FY(AJ8(a),1);b.cf=1;return b;}
function ACv(){Om.call(this);}
function A86(){var a=new ACv();A3r(a);return a;}
function A3r(a){return;}
function ASI(a){var b;b=FY(AKO(a),1);b.cf=1;return b;}
function AIV(){var a=this;Bq.call(a);a.A7=0;a.EG=0;}
function X(a,b){var c=new AIV();A7J(c,a,b);return c;}
function A7J(a,b,c){a.A7=b;a.EG=c;}
function AT7(a){return Cy(EI(),a.A7,a.EG);}
function AJg(){Bq.call(this);}
function A9$(){var a=new AJg();AYh(a);return a;}
function AYh(a){return;}
function AXZ(a){return Cy(Cy(EI(),65279,65279),65520,65533);}
function AKe(){var a=this;Bq.call(a);a.yZ=0;a.wQ=0;a.DP=0;}
function Cl(a,b){var c=new AKe();AQ3(c,a,b);return c;}
function A9h(a,b,c){var d=new AKe();AX5(d,a,b,c);return d;}
function AQ3(a,b,c){a.wQ=c;a.yZ=b;}
function AX5(a,b,c,d){a.DP=d;a.wQ=c;a.yZ=b;}
function A2e(a){var b;b=A9Y(a.yZ);if(a.DP)Ky(b.cb,0,2048);b.cf=a.wQ;return b;}
function AKm(){var a=this;Bq.call(a);a.v2=0;a.ul=0;a.zZ=0;}
function LU(a,b){var c=new AKm();ARD(c,a,b);return c;}
function A$y(a,b,c){var d=new AKm();AY7(d,a,b,c);return d;}
function ARD(a,b,c){a.ul=c;a.v2=b;}
function AY7(a,b,c,d){a.zZ=d;a.ul=c;a.v2=b;}
function AOS(a){var b;b=new XD;AEE(b,a.v2);if(a.zZ)Ky(b.cb,0,2048);b.cf=a.ul;return b;}
function VO(){var a=this;C.call(a);a.xH=0;a.Br=0;a.D8=null;}
function AR9(a,b,c){var d=new VO();AWY(d,a,b,c);return d;}
function AWY(a,b,c,d){a.xH=b;a.Br=c;a.D8=d;}
function RO(){var a=this;Dn.call(a);a.Hy=0;a.e_=null;a.ze=null;a.ws=0;a.yY=0;a.l0=null;a.ug=0;a.vp=0;a.EU=0;}
function ABm(a){var b,c,d;if(a.EU){b=!a.vp?Zj(a.e_,1):!a.ug?Q0(a.e_,a.l0,1):Z4(a.e_,a.l0,1);c=!a.yY?ABf(a.e_,0):!a.ws?RZ(a.e_,a.l0,0):Vb(a.e_,a.l0,0);d=A4C(a.e_,b,c,1);}else{b=!a.yY?Zj(a.e_,0):!a.ws?Q0(a.e_,a.ze,0):Z4(a.e_,a.ze,0);c=!a.vp?ABf(a.e_,1):!a.ug?RZ(a.e_,a.l0,1):Vb(a.e_,a.l0,1);d=A4C(a.e_,b,c,0);}return d;}
function Uy(){var a=this;Bk.call(a);a.Dr=null;a.Kv=null;}
function ARY(a,b){var c;c=b-55296|0;return c>=0&&c<2048?a.dD^E7(a.Dr,c):0;}
function Ux(){var a=this;Bk.call(a);a.Fq=null;a.CB=null;a.HJ=null;}
function AZw(a,b){var c,d;c=b-55296|0;d=c>=0&&c<2048?a.dD^E7(a.Fq,c):0;return a.CB.T(b)&&!d?1:0;}
function Q5(){var a=this;Bk.call(a);a.sY=null;a.IF=null;}
function AT0(a,b){return a.co^E7(a.sY,b);}
function A2A(a){var b,c;b=new S;V(b);c=J5(a.sY,0);while(c>=0){Ib(b,JE(c));Ce(b,124);c=J5(a.sY,c+1|0);}if(b.b5>0)Us(b,b.b5-1|0);return R(b);}
function Wd(){var a=this;Bk.call(a);a.Ez=null;a.JM=null;}
function A58(a,b){return a.Ez.T(b);}
function Wb(){var a=this;Bk.call(a);a.wU=0;a.DJ=null;a.xM=null;}
function AWz(a,b){return !(a.wU^E7(a.xM.b9,b))&&!(a.wU^a.xM.iC^a.DJ.T(b))?0:1;}
function Wc(){var a=this;Bk.call(a);a.uk=0;a.Cu=null;a.vI=null;}
function A3Z(a,b){return !(a.uk^E7(a.vI.b9,b))&&!(a.uk^a.vI.iC^a.Cu.T(b))?1:0;}
function Wg(){var a=this;Bk.call(a);a.FM=0;a.Cv=null;a.Cs=null;a.IV=null;}
function A1G(a,b){return a.FM^(!a.Cv.T(b)&&!a.Cs.T(b)?0:1);}
function Wi(){var a=this;Bk.call(a);a.Bg=0;a.Ew=null;a.Ef=null;a.KO=null;}
function AON(a,b){return a.Bg^(!a.Ew.T(b)&&!a.Ef.T(b)?0:1)?0:1;}
function We(){var a=this;Bk.call(a);a.AW=null;a.KU=null;}
function ASF(a,b){return Ed(a.AW,b);}
function Wf(){var a=this;Bk.call(a);a.FD=null;a.I5=null;}
function AUk(a,b){return Ed(a.FD,b)?0:1;}
function Wj(){var a=this;Bk.call(a);a.Bo=null;a.Ey=0;a.B$=null;}
function AXD(a,b){return !Ed(a.Bo,b)&&!(a.Ey^E7(a.B$.b9,b))?0:1;}
function Wk(){var a=this;Bk.call(a);a.BG=null;a.EY=0;a.Bx=null;}
function A1b(a,b){return !Ed(a.BG,b)&&!(a.EY^E7(a.Bx.b9,b))?1:0;}
function Q4(){var a=this;Bk.call(a);a.B7=0;a.Fy=null;a.CH=null;a.Gk=null;}
function A8C(a,b){return !(a.B7^a.Fy.T(b))&&!Ed(a.CH,b)?0:1;}
function Rl(){var a=this;Bk.call(a);a.FI=0;a.zS=null;a.z1=null;a.GE=null;}
function ASH(a,b){return !(a.FI^a.zS.T(b))&&!Ed(a.z1,b)?1:0;}
function Q2(){var a=this;Bk.call(a);a.DZ=null;a.GH=null;}
function ARa(a,b){return Ed(a.DZ,b);}
function Q3(){var a=this;Bk.call(a);a.AP=null;a.KM=null;}
function A2n(a,b){return Ed(a.AP,b)?0:1;}
function Q8(){var a=this;Bk.call(a);a.FK=null;a.BF=0;a.F_=null;}
function ATs(a,b){return Ed(a.FK,b)&&a.BF^E7(a.F_.b9,b)?1:0;}
function Q1(){var a=this;Bk.call(a);a.E$=null;a.EF=0;a.BC=null;}
function A61(a,b){return Ed(a.E$,b)&&a.EF^E7(a.BC.b9,b)?0:1;}
function Q6(){var a=this;Bk.call(a);a.Fj=0;a.Dp=null;a.Bf=null;a.IT=null;}
function A0w(a,b){return a.Fj^a.Dp.T(b)&&Ed(a.Bf,b)?1:0;}
function Q7(){var a=this;Bk.call(a);a.E6=0;a.Dd=null;a.Fg=null;a.I9=null;}
function AVO(a,b){return a.E6^a.Dd.T(b)&&Ed(a.Fg,b)?0:1;}
function W8(){var a=this;C.call(a);a.Fe=null;a.Ff=null;}
function AI1(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p;b=a.Fe;c=a.Ff;if(b.gR.readyState==4){b.i8=b.gR.status;b.vs=$rt_str(b.gR.statusText);if(!b.i8)b.i8=(-1);d=new Int8Array(b.gR.response);e=$rt_createByteArray(d.length);f=e.data;g=0;h=f.length;while(g<h){f[g]=d[g];g=g+1|0;}i=Ju(e);d=$rt_str(b.gR.getAllResponseHeaders());j=0;k=BU();l=BU();b.wk=CZ();b.q0=CZ();while(j<Q(d)){g=Op(d,B(896),j);if(g<0)g=Q(d);h=Eo(d,58,j);if(h<0)h=Q(d);m=Bw(h,g);n=m>=0?BO(d,j,g):BO(d,j,h);o=m>=0?B(9):GX(BO(d,h+1|0,g));n=GX(n);M(k,n);M(l,
o);p=Co(b.q0,n);if(p===null){p=BU();BI(b.q0,n,p);}p.kx(o);n=Oh(n);BI(b.wk,n,o);j=g+2|0;}b.I0=HW(k,H(BC,k.q));b.Gh=HW(l,H(BC,l.q));j=b.i8/100|0;if(j!=4&&j!=5){b.n1=i;b.CZ=null;}else{b.CZ=i;b.n1=null;}CY(c,BhX);}}
function AUX(a){AI1(a);}
function ALt(){Fp.call(this);}
function Qj(){JG.call(this);}
function ASb(a,b,c,d){var e,f,g;e=0;f=d.bO;a:{while(true){if(b>f){b=e;break a;}g=If(d,a.cE);E8(d,a.cE,b);e=a.fn.e(b,c,d);if(e>=0)break;E8(d,a.cE,g);b=b+1|0;}}return b;}
function A8n(a,b,c,d,e){var f,g;f=0;a:{while(true){if(c<b){c=f;break a;}g=If(e,a.cE);E8(e,a.cE,c);f=a.fn.e(c,d,e);if(f>=0)break;E8(e,a.cE,g);c=c+(-1)|0;}}return c;}
function AQ1(a){return null;}
function AHs(){var a=this;C.call(a);a.D5=0;a.FJ=null;a.wG=null;a.uK=null;a.Ci=null;a.j0=0;a.yR=0;}
function A4C(a,b,c,d){var e=new AHs();A7M(e,a,b,c,d);return e;}
function A7M(a,b,c,d,e){var f,g;a.FJ=b;a.D5=b.t4;f=b.gh===null?0:b.gh.kI;g=c.data;a.wG=Ea(c,f);a.j0=g.length;a.Ci=d;a.yR=e;}
function AML(a){return a.j0<=0?0:1;}
function XY(a){var b,c,d,e,f;if(a.D5!=a.FJ.t4){b=new JW;Z(b);J(b);}if(!a.j0){b=new Jl;Z(b);J(b);}a:{c=a.wG.data;d=a.j0-1|0;a.j0=d;b=c[d];a.uK=b;e=Jn(b,a.yR);if(e!==null)while(true){if(e===null)break a;c=a.wG.data;f=a.j0;a.j0=f+1|0;c[f]=e;e=G2(e,a.yR);}}if(a.uK===a.Ci)a.j0=0;return a.uK;}
function AX_(a){return XY(a);}
function Nw(){}
function XM(){var a=this;C.call(a);a.Gz=null;a.Fz=null;a.p4=null;a.du=null;a.q7=0;a.s0=0;}
function P6(a,b){var c,d;c=Q(a.p4);if(b>=0&&b<=c){AB1(a.du);a.du.nP=1;AMJ(a.du,b);b=a.Fz.ez(b,a.p4,a.du);if(b==(-1))a.du.g8=1;if(b>=0&&a.du.oN){AD_(a.du);return 1;}a.du.hf=(-1);return 0;}d=new BE;Bd(d,Yi(b));J(d);}
function ACT(a){var b,c;b=Q(a.p4);if(!AA2(a))b=a.s0;if(a.du.hf>=0&&a.du.nP==1){a.du.hf=NQ(a.du);if(NQ(a.du)==AFh(a.du)){c=a.du;c.hf=c.hf+1|0;}return a.du.hf<=b&&P6(a,a.du.hf)?1:0;}return P6(a,a.q7);}
function AHj(a,b){return Rk(a.du,b);}
function AAI(a,b){return St(a.du,b);}
function AGN(a){return AHj(a,0);}
function AJm(a){return AAI(a,0);}
function AA2(a){return a.du.oQ;}
function KE(){C.call(this);this.Il=0;}
var BhX=null;var BhY=null;var BhZ=null;function AVK(a){var b=new KE();AE9(b,a);return b;}
function AE9(a,b){a.Il=b;}
function AIr(){BhX=AVK(1);BhY=AVK(0);BhZ=D($rt_booleancls());}
function ZR(){var a=this;JS.call(a);a.Jm=null;a.Ic=0;}
function ASL(a){return 0;}
function AQ4(a,b){b=new Hs;Z(b);J(b);}
function A1J(a,b,c,d){var e;if(a.Bc===null)return null;if(c&&a.BP)return null;e=new Qp;e.AG=a;e.z8=d;if(e.z8)e.G4=e.AG.Ic;return e;}
function AWQ(a,b){var c,d;c=new BA;d=new S;V(d);Bd(c,R(G(G(G(d,B(897)),b),B(898))));J(c);}
function X1(){Bk.call(this);this.JF=null;}
function AXN(a,b){return Dp(b)!=2?0:1;}
function Vz(){Bk.call(this);this.JN=null;}
function A0h(a,b){return Dp(b)!=1?0:1;}
function Ss(){Bk.call(this);this.Jj=null;}
function API(a,b){return R4(b);}
function Sr(){Bk.call(this);this.GJ=null;}
function A2d(a,b){return 0;}
function UI(){Bk.call(this);this.H0=null;}
function ATh(a,b){return !Dp(b)?0:1;}
function Wu(){Bk.call(this);this.J0=null;}
function A7r(a,b){return Dp(b)!=9?0:1;}
function QP(){Bk.call(this);this.Ip=null;}
function AVt(a,b){return JB(b);}
function Xk(){Bk.call(this);this.He=null;}
function AWn(a,b){a:{b:{if(!(b>=0&&b<=31)){if(b<127)break b;if(b>159)break b;}b=1;break a;}b=0;}return b;}
function Vv(){Bk.call(this);this.Gb=null;}
function A8c(a,b){a:{b:{switch(Dp(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:case 26:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break b;default:break b;}b=1;break a;}b=JB(b);}return b;}
function Vy(){Bk.call(this);this.Hz=null;}
function ARq(a,b){a:{b:{switch(Dp(b)){case 1:case 2:case 3:case 4:case 5:case 10:case 23:case 26:break;case 6:case 7:case 8:case 9:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break b;default:break b;}b=1;break a;}b=JB(b);}return b;}
function QG(){Bk.call(this);this.HY=null;}
function AXV(a,b){a:{switch(Dp(b)){case 1:case 2:case 3:case 4:case 5:break;default:b=0;break a;}b=1;}return b;}
function WL(){Bk.call(this);this.KC=null;}
function A4d(a,b){return Me(b);}
function WR(){Bk.call(this);this.G1=null;}
function A5M(a,b){return WT(b);}
function Yn(){Bk.call(this);this.J9=null;}
function A7i(a,b){return Dp(b)!=3?0:1;}
function XN(){Bk.call(this);this.Ge=null;}
function AYi(a,b){a:{b:{switch(Dp(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:break b;default:break b;}b=1;break a;}b=JB(b);}return b;}
function Qc(){Bk.call(this);this.KV=null;}
function ARi(a,b){a:{b:{switch(Dp(b)){case 1:case 2:case 3:case 4:case 5:case 10:break;case 6:case 7:case 8:case 9:break b;default:break b;}b=1;break a;}b=JB(b);}return b;}
function NH(){Bk.call(this);this.vw=0;}
function A9Y(a){var b=new NH();AEE(b,a);return b;}
function AEE(a,b){BQ(a);a.vw=b;}
function AVu(a,b){return a.co^(a.vw!=Dp(b&65535)?0:1);}
function XD(){NH.call(this);}
function A6D(a,b){return a.co^(!(a.vw>>Dp(b&65535)&1)?0:1);}
function Rf(){Fh.call(this);this.FW=null;}
function ANt(a){var b,c;b=AMy(a.FW);c=new Re;c.Bh=b;return c;}
function Rd(){Fu.call(this);this.xY=null;}
function A7W(a,b){return a.xY.mI(b);}
function A4w(a){return a.xY.eW();}
function YR(){var a=this;C.call(a);a.gv=null;a.pj=null;a.yb=null;a.vk=null;a.Ax=0;a.oN=0;a.fc=0;a.bO=0;a.hf=0;a.oQ=0;a.lM=0;a.g8=0;a.Kn=0;a.lm=0;a.nP=0;}
function Cg(a,b,c){a.pj.data[b]=c;}
function EH(a,b){return a.pj.data[b];}
function NQ(a){return St(a,0);}
function St(a,b){XC(a,b);return a.gv.data[(b*2|0)+1|0];}
function E8(a,b,c){a.gv.data[b*2|0]=c;}
function N6(a,b,c){a.gv.data[(b*2|0)+1|0]=c;}
function If(a,b){return a.gv.data[b*2|0];}
function KT(a,b){return a.gv.data[(b*2|0)+1|0];}
function AKx(a,b){var c,d;c=If(a,b);d=KT(a,b);if((d|c|(d-c|0))>=0&&d<=Q(a.vk))return BO(a.vk,c,d);return null;}
function AFh(a){return Rk(a,0);}
function Rk(a,b){XC(a,b);return a.gv.data[b*2|0];}
function AD_(a){if(a.gv.data[0]==(-1)){a.gv.data[0]=a.hf;a.gv.data[1]=a.hf;}a.lm=NQ(a);}
function VB(a,b){return a.yb.data[b];}
function F5(a,b,c){a.yb.data[b]=c;}
function XC(a,b){var c;if(!a.oN){c=new DE;Z(c);J(c);}if(b>=0&&b<a.Ax)return;c=new BE;Bd(c,Yi(b));J(c);}
function ANW(a){a.oN=1;}
function A7x(a){return a.oN;}
function ZU(a,b,c,d){a.oN=0;a.nP=2;Js(a.gv,(-1));Js(a.pj,(-1));if(b!==null)a.vk=b;if(c>=0){a.fc=c;a.bO=d;}a.hf=a.fc;}
function AB1(a){ZU(a,null,(-1),(-1));}
function AMJ(a,b){a.hf=b;if(a.lm>=0)b=a.lm;a.lm=b;}
function A0I(a){return a.fc;}
function A32(a){return a.bO;}
function A1H(a,b){a.nP=b;}
function ASo(a){return a.nP;}
function A2Q(a){return a.lM;}
function AZu(a){return a.oQ;}
function AZV(a){return a.lm;}
function Re(){Dn.call(this);this.Bh=null;}
function AMI(a){var b,c;b=AIs(a.Bh);c=new Rg;c.wM=b;return c;}
function TY(){Dn.call(this);this.EB=null;}
function AIs(a){var b;b=new TT;OT(b,a.EB);return b;}
function Rg(){C.call(this);this.wM=null;}
function AJs(a){return La(a.wM);}
function UZ(a){var b,c,d;b=new UP;c=S6(a.wM);d=c.ik;c=c.fq;b.vR=d;b.wX=c;return b;}
function A6t(a){return UZ(a);}
function TT(){G5.call(this);}
function S6(a){Pf(a);return a.jG;}
function A7Y(a){return S6(a);}
function UT(){}
function Qp(){var a=this;C.call(a);a.G4=0;a.z8=0;a.AG=null;}
function A3x(a){return;}
function UP(){var a=this;C.call(a);a.vR=null;a.wX=null;}
function AVC(a){return a.wX;}
function ARe(a){return a.vR;}
function AIt(){C.call(this);}
$rt_packages([-1,"com",0,"jcraft",1,"jzlib",-1,"java",3,"util",4,"regex",3,"nio",6,"charset",3,"io",3,"net",3,"lang",-1,"net",11,"minecraft",12,"game",13,"level",14,"block",13,"entity",16,"animal",16,"monster",16,"player",12,"client",20,"effect",11,"PeytonPlayz585"]);
$rt_metadata([C,"Object",10,0,[],0,3,0,["lY",function(){return A1i(this);},"cI",function(b){return S3(this,b);},"eM",function(){return AQx(this);}],OA,0,C,[],0,3,0,0,VI,0,C,[],3,3,0,0,Zn,0,C,[VI],0,3,0,0,AIN,0,C,[],4,0,0,0,AIE,0,C,[],4,3,0,0,Ci,0,C,[],3,3,0,0,Dk,0,C,[],3,3,0,0,LV,0,C,[],3,3,0,0,BC,"String",10,C,[Ci,Dk,LV],0,3,0,["eM",function(){return AQu(this);},"cI",function(b){return BW(this,b);},"lY",function(){return O8(this);},"kQ",function(b){return AR$(this,b);}],FR,0,C,[],0,3,0,["kR",function(){return AWq(this);
}],EF,0,FR,[],0,3,0,0,J8,0,EF,[],0,3,0,0,AJV,0,J8,[],0,3,0,0,IR,0,C,[Ci,LV],0,0,0,["nX",function(b){N5(this,b);},"eM",function(){return R(this);}],JA,0,C,[],3,3,0,0,S,0,IR,[JA],0,3,0,["yC",function(b,c,d,e){return A3v(this,b,c,d,e);},"xT",function(b,c,d){return ARw(this,b,c,d);},"eM",function(){return B3(this);},"nX",function(b){ATU(this,b);},"zb",function(b,c){return A3Y(this,b,c);}],Fw,0,C,[Ci],1,3,0,0,GS,0,Fw,[Dk],0,3,0,["lY",function(){return AZe(this);},"cI",function(b){return ZV(this,b);},"kQ",function(b)
{return XF(this,b);}],JX,0,J8,[],0,3,0,0,ALJ,0,JX,[],0,3,0,0,AJC,0,JX,[],0,3,0,0,Cq,0,FR,[],0,3,0,0,BT,"RuntimeException",10,Cq,[],0,3,0,0,Dl,0,C,[],3,3,0,0,H_,0,C,[Dl],3,3,0,0,WK,0,C,[H_],3,3,0,0,Sb,0,C,[H_],3,3,0,0,Xu,0,C,[H_],3,3,0,0,Tu,0,C,[H_],3,3,0,0,YH,0,C,[H_,WK,Sb,Xu,Tu],3,3,0,0,Q$,0,C,[],3,3,0,0,Mn,0,C,[Dl],3,3,0,0,AA3,0,C,[Dl,YH,Q$,Mn],1,3,0,["Yc",function(b,c){return AUe(this,b,c);},"ZT",function(b,c){return AUt(this,b,c);},"SU",function(b){return APO(this,b);},"O$",function(b,c,d){return AVn(this,
b,c,d);},"Nr",function(b){return AXU(this,b);},"Vx",function(){return AQL(this);},"T8",function(b,c,d){return AO7(this,b,c,d);}],Bn,0,C,[],0,3,Be,0,Os,"MinecraftMain$AbortedLaunchException",22,BT,[],0,3,0,0,U5,0,C,[],3,3,0,0,IY,0,C,[U5],3,3,0,0,Pj,0,C,[],3,3,0,0,IC,0,C,[JA,IY,Pj],1,3,0,0,MG,0,IC,[],0,3,0,0,Mz,0,IC,[],0,3,0,0,AFE,0,C,[],4,3,0,0,AF0,0,C,[Dl],1,3,0,0,Nb,0,C,[],4,3,0,0,Pc,0,C,[],0,3,0,0,V6,0,C,[],0,3,0,0,DY,0,C,[Dl],3,3,0,0,ALM,0,C,[DY],0,0,0,["gI",function(b){return AZd(this,b);}],ALP,0,C,[DY],
0,0,0,["gI",function(b){return A8r(this,b);}]]);
$rt_metadata([ALQ,0,C,[DY],0,0,0,["gI",function(b){return A0f(this,b);}],ALN,0,C,[DY],0,0,0,["gI",function(b){return APX(this,b);}],ALO,0,C,[DY],0,0,0,["gI",function(b){return A6_(this,b);}],ALS,0,C,[DY],0,0,0,["gI",function(b){return ATJ(this,b);}],ALT,0,C,[DY],0,0,0,["gI",function(b){return AWC(this,b);}],ALR,0,C,[DY],0,0,0,["gI",function(b){return ART(this,b);}],ALk,0,C,[DY],0,0,0,["gI",function(b){return A2w(this,b);}],ALj,0,C,[DY],0,0,0,["gI",function(b){return AYv(this,b);}],Mw,0,C,[],0,3,0,0,Fc,"Enum",
10,C,[Dk,Ci],1,3,0,["cI",function(b){return APz(this,b);},"kQ",function(b){return ATH(this,b);}],Fq,0,Fc,[],12,3,0,0,Xf,0,C,[],0,3,0,0,BA,"IOException",8,Cq,[],0,3,0,0,Kh,0,IR,[JA],0,3,0,["yC",function(b,c,d,e){return AR7(this,b,c,d,e);},"xT",function(b,c,d){return A0v(this,b,c,d);},"nX",function(b){A0O(this,b);},"zb",function(b,c){return A6K(this,b,c);}],E4,0,C,[],3,3,0,0,Yr,0,C,[E4],0,3,0,0,FE,0,C,[Dk],0,3,0,["cI",function(b){return A7D(this,b);},"lY",function(){return A7m(this);},"kQ",function(b){return AZg(this,
b);}],Ev,0,C,[IY,Pj],1,3,0,["jz",function(b,c,d){APk(this,b,c,d);}],Jo,0,Ev,[],0,3,0,0,ACR,0,Jo,[],0,3,0,0,ZN,0,Ev,[],0,0,0,["qS",function(b){AUs(this,b);}],Gz,0,C,[IY],1,3,0,0,J0,0,Gz,[],0,3,0,0,QY,0,C,[],3,3,0,0,RJ,0,J0,[QY],0,3,0,0,AM6,0,Gz,[],0,3,0,["Du",function(){return A0V(this);},"oK",function(b,c,d){return AOi(this,b,c,d);},"xn",function(){return A10(this);}],CI,0,C,[],1,3,0,0,Kc,0,CI,[],4,3,0,["gB",function(b){APf(this,b);},"gu",function(b){AXL(this,b);},"e4",function(){return AZR(this);}],Bm,0,Bn,
[],0,3,BS,0,AG8,0,Bm,[],0,3,0,0,I1,0,C,[],3,3,0,0,Mj,0,C,[I1],4,3,0,0,Mq,0,C,[],4,3,A$v,0,Ut,0,C,[],3,3,0,0,Jq,0,C,[Ut],3,3,0,0,FA,0,C,[Jq],1,3,0,0,HQ,0,C,[Jq],3,3,0,0,Fu,0,FA,[HQ],1,3,0,["kx",function(b){return HF(this,b);},"gy",function(){return Hq(this);},"wI",function(b,c){A62(this,b,c);},"cI",function(b){return AUW(this,b);}],Nz,0,Fu,[],1,3,0,["wI",function(b,c){AV4(this,b,c);},"FL",function(b){return VE(this,b);}],L0,0,C,[Jq],3,3,0,0,ZW,0,C,[L0],3,3,0,0,AFd,0,Nz,[ZW],0,3,0,["eW",function(){return A5Z(this);
},"w7",function(){PK(this);}],AK8,0,C,[Dl],1,3,0,0,Fp,0,C,[Dl],1,3,0,0,AC_,0,Fp,[],1,3,0,0,AI$,0,Fp,[],1,3,0,0,DF,0,C,[],3,3,0,0,L5,0,C,[Ci,DF],1,3,0,0,Mo,0,L5,[],1,3,0,0,AHe,0,Mo,[],0,3,0,0]);
$rt_metadata([Kj,0,C,[Jq],3,3,0,0,Dn,0,FA,[Kj],1,3,0,["cI",function(b){return A2r(this,b);}],AM9,0,Dn,[DF,Ci],0,3,0,0,KP,0,C,[],3,3,0,0,Fh,0,C,[KP],1,3,0,0,MS,0,Fh,[DF,Ci],0,3,0,["xd",function(b){return A2C(this,b);}],AIS,0,Fp,[],1,3,0,0,AG7,0,C,[],0,3,0,0,AKy,0,C,[],0,3,0,0,Sc,0,C,[],3,3,0,0,Xo,0,C,[Sc],0,0,0,["Hp",function(b){CY(this,b);},"J4",function(b){AYm(this,b);}],ANk,0,C,[Dl],1,3,0,0,PO,0,C,[Dl],3,3,0,0,Yp,0,C,[PO],0,0,0,["KT",function(){return AYr(this);}],NZ,0,C,[Dk],1,3,0,0,Zt,0,J0,[],0,3,0,["Du",
function(){return AO8(this);},"oK",function(b,c,d){return AJJ(this,b,c,d);},"xn",function(){return AWt(this);}],Og,0,C,[],1,3,0,0,Td,0,Og,[],0,3,0,0,AIm,0,C,[],0,3,0,0,AHf,0,NZ,[],0,3,0,0,KG,0,C,[],1,3,0,0,KL,0,KG,[],0,3,0,0,Nj,0,CI,[],4,3,0,["gu",function(b){AYy(this,b);},"gB",function(b){A3p(this,b);},"e4",function(){return AS0(this);}],IZ,0,C,[],0,3,0,0,AEm,0,IZ,[],4,3,0,0,R8,0,C,[],4,3,0,0,Xb,0,C,[],3,3,0,0,Xw,0,C,[Xb],0,3,0,0,QZ,0,C,[],4,3,0,0,Iy,0,C,[],0,3,0,0,Fv,0,C,[],1,3,0,0,JV,0,Fv,[],0,3,0,["gP",
function(b,c,d,e,f,g){A8m(this,b,c,d,e,f,g);},"oS",function(b,c,d,e,f,g){ABk(this,b,c,d,e,f,g);}],I2,0,C,[],0,3,0,0,QU,0,I2,[],4,3,0,0,Ta,0,I2,[],4,3,0,0,F_,0,C,[I1],0,3,0,["hK",function(){ANK(this);}],ZG,0,F_,[],4,0,0,["hK",function(){AGp(this);}],Ct,0,C,[DF,Ci],4,3,0,["cI",function(b){return A2f(this,b);}],EQ,0,C,[Dl],3,3,0,0,SS,0,C,[EQ],0,0,0,["jD",function(){return AW2(this);}],ST,0,C,[EQ],0,0,0,["jD",function(){return ATt(this);}],SU,0,C,[EQ],0,0,0,["jD",function(){return A4r(this);}],SV,0,C,[DY],0,0,0,
["gI",function(b){return A6Y(this,b);}],UN,0,C,[],0,0,0,0,BB,"IllegalArgumentException",10,BT,[],0,3,0,0,Xv,"UnsupportedCharsetException",7,BB,[],0,3,0,0,Eg,"NullPointerException",10,BT,[],0,3,0,0,OK,0,CI,[],4,3,0,["gB",function(b){A3W(this,b);},"gu",function(b){AQo(this,b);},"e4",function(){return A5D(this);}],UJ,0,CI,[],4,3,0,["gB",function(b){A7t(this,b);},"gu",function(b){AYk(this,b);},"e4",function(){return AR_(this);}],Mh,0,CI,[],4,3,0,["gB",function(b){AV8(this,b);},"gu",function(b){APH(this,b);},"e4",
function(){return AT3(this);}]]);
$rt_metadata([LZ,0,CI,[],4,3,0,["gB",function(b){A2V(this,b);},"gu",function(b){A1O(this,b);},"e4",function(){return AWg(this);}],Y2,0,CI,[],4,3,0,["gB",function(b){A3j(this,b);},"gu",function(b){APL(this,b);},"e4",function(){return A0p(this);}],QT,0,CI,[],4,3,0,["gB",function(b){A2P(this,b);},"gu",function(b){AZ1(this,b);},"e4",function(){return AX7(this);}],MW,0,CI,[],4,3,0,["gB",function(b){A1q(this,b);},"gu",function(b){A5d(this,b);},"e4",function(){return A5g(this);}],OW,0,CI,[],4,3,0,["gB",function(b)
{ARB(this,b);},"gu",function(b){A16(this,b);},"e4",function(){return A7I(this);}],AHb,0,CI,[],4,3,0,["gB",function(b){A4S(this,b);},"gu",function(b){APY(this,b);},"e4",function(){return AZf(this);}],AG3,0,Iy,[],0,3,0,0,U7,0,C,[],4,3,0,0,FG,0,C,[],1,3,0,0,Nd,0,FG,[Dk],1,3,0,0,U,"Block",15,C,[],0,3,L,["iv",function(){return AWF(this);},"ig",function(){return AZG(this);},"dW",function(b,c,d,e){return ASr(this,b,c,d,e);},"d8",function(b,c,d,e,f){return Kb(this,b,c,d,e,f);},"jA",function(b,c,d,e,f){return A2I(this,
b,c,d,e,f);},"qt",function(b,c){return AZM(this,b,c);},"cO",function(b){return A69(this,b);},"iq",function(b,c,d){return APb(this,b,c,d);},"fJ",function(){return AWE(this);},"pI",function(){return ATZ(this);},"gi",function(b,c,d,e,f){A7B(this,b,c,d,e,f);},"oL",function(b,c,d,e,f){AYe(this,b,c,d,e,f);},"rD",function(b,c,d,e,f){A38(this,b,c,d,e,f);},"jm",function(b,c,d,e,f){A48(this,b,c,d,e,f);},"rV",function(){return A5j(this);},"gC",function(b,c,d,e){AP_(this,b,c,d,e);},"tk",function(b,c,d,e){APn(this,b,c,d,
e);},"gk",function(b){return ASY(this,b);},"gp",function(b,c){return AVj(this,b,c);},"Bd",function(b,c,d,e,f,g){return ALb(this,b,c,d,e,f,g);},"A2",function(b,c,d,e){ARJ(this,b,c,d,e);},"yj",function(){return A46(this);},"ok",function(b,c,d,e){return A0e(this,b,c,d,e);},"r4",function(b,c,d,e,f){return AAJ(this,b,c,d,e,f);},"F2",function(b,c,d,e){AVb(this,b,c,d,e);},"Ek",function(b,c,d,e,f){AQ$(this,b,c,d,e,f);}],TL,0,C,[],3,3,0,0,VY,0,Fu,[DF,Ci,TL],0,3,0,["mI",function(b){return Bc(this,b);},"eW",function()
{return CE(this);},"kx",function(b){return M(this,b);},"wI",function(b,c){AKi(this,b,c);},"FL",function(b){return Ej(this,b);},"w7",function(){ER(this);}],AIe,0,C,[Ci,DF],0,3,0,0,AOl,0,Ev,[],0,3,0,["qS",function(b){A4v(this,b);},"jz",function(b,c,d){TB(this,b,c,d);}],Ub,0,C,[],3,3,0,0,AF$,0,Jo,[Ub],0,3,0,0,AFD,"IllegalCharsetNameException",7,BB,[],0,3,0,0,NY,0,C,[],128,3,0,0,WB,0,NY,[],4,3,0,0,Rv,0,C,[Dl],3,3,0,0,ANI,0,C,[Dl,Rv],1,3,0,0,SX,0,C,[EQ],0,0,0,["jD",function(){return AQ_(this);}],SY,0,C,[EQ],0,0,
0,["jD",function(){return A8b(this);}],ACS,0,C,[Dl],4,3,0,0,ZM,0,C,[],4,3,0,0,ADp,0,C,[],4,3,0,0,Es,0,C,[],4,3,0,0,AI0,0,C,[],4,0,0,0,Oe,0,FG,[Dk],1,3,0,0,Nq,"CloneNotSupportedException",10,Cq,[],0,3,0,0,Or,0,Nd,[],1,0,0,0,Zo,0,Or,[],0,0,0,0,ID,0,C,[],0,3,0,0,AGw,0,ID,[],4,0,0,0,AOs,0,ID,[],4,0,0,0,ABd,"BlockStone",15,U,[],4,3,0,["gp",function(b,c){return APi(this,b,c);}],AEr,"BlockGrass",15,U,[],4,3,0,["cO",function(b){return ARE(this,b);},"gi",function(b,c,d,e,f){A18(this,b,c,d,e,f);},"gp",function(b,c){return A6X(this,
b,c);}],AHC,"BlockDirt",15,U,[],4,3,0,0,B7,0,C,[],0,3,0,["l$",function(){return A6y(this);},"it",function(){return AXx(this);},"pP",function(){return A3E(this);},"os",function(){return AUn(this);}],Gp,"BlockFlower",15,U,[],0,3,0,["ok",function(b,c,d,e){return A1L(this,b,c,d,e);},"rQ",function(b){return AP5(this,b);},"jm",function(b,c,d,e,f){A07(this,b,c,d,e,f);},"gi",function(b,c,d,e,f){ATl(this,b,c,d,e,f);},"s7",function(b,c,d,e){return ATv(this,b,c,d,e);},"iq",function(b,c,d){return A5b(this,b,c,d);},"fJ",
function(){return ARu(this);},"iv",function(){return AUc(this);},"ig",function(){return ATV(this);}],AGn,"BlockSapling",15,Gp,[],4,3,0,["gi",function(b,c,d,e,f){AR5(this,b,c,d,e,f);}],Jc,0,U,[],0,3,0,["cO",function(b){return A75(this,b);},"iv",function(){return A3h(this);},"gC",function(b,c,d,e){A4D(this,b,c,d,e);},"dW",function(b,c,d,e){return ASc(this,b,c,d,e);},"d8",function(b,c,d,e,f){return AAp(this,b,c,d,e,f);},"pI",function(){return AZx(this);},"iq",function(b,c,d){return A5u(this,b,c,d);},"fJ",function()
{return A5A(this);},"rV",function(){return AYx(this);},"gk",function(b){return A4i(this,b);},"yj",function(){return ATP(this);},"oL",function(b,c,d,e,f){AUb(this,b,c,d,e,f);}],ANn,"BlockFlowing",15,Jc,[],4,3,0,["gC",function(b,c,d,e){ASn(this,b,c,d,e);},"gi",function(b,c,d,e,f){AR3(this,b,c,d,e,f);},"d8",function(b,c,d,e,f){return AY1(this,b,c,d,e,f);},"pI",function(){return A8j(this);},"iq",function(b,c,d){return APh(this,b,c,d);},"fJ",function(){return A3o(this);},"jm",function(b,c,d,e,f){AUN(this,b,c,d,e,
f);},"rV",function(){return A1D(this);},"gk",function(b){return A68(this,b);},"yj",function(){return AQZ(this);}],ANH,"BlockStationary",15,Jc,[],4,3,0,["gi",function(b,c,d,e,f){A3n(this,b,c,d,e,f);},"jm",function(b,c,d,e,f){ASa(this,b,c,d,e,f);}],Ph,"BlockSand",15,U,[],0,3,0,["gC",function(b,c,d,e){AXu(this,b,c,d,e);},"jm",function(b,c,d,e,f){ARn(this,b,c,d,e,f);}],ADF,"BlockGravel",15,Ph,[],4,3,0,["gp",function(b,c){return AYD(this,b,c);}],ACq,"BlockOre",15,U,[],4,3,0,["gp",function(b,c){return AXY(this,b,
c);},"gk",function(b){return AOR(this,b);}],AGO,"BlockLog",15,U,[],4,3,0,["gk",function(b){return A3J(this,b);},"gp",function(b,c){return APG(this,b,c);},"cO",function(b){return A5O(this,b);}],L3,0,U,[],0,3,0,["fJ",function(){return ARW(this);},"d8",function(b,c,d,e,f){return A0i(this,b,c,d,e,f);}]]);
$rt_metadata([ANZ,"BlockLeaves",15,L3,[],4,3,0,["gi",function(b,c,d,e,f){A1N(this,b,c,d,e,f);},"gk",function(b){return AYR(this,b);},"gp",function(b,c){return ASp(this,b,c);}],AOb,"BlockSponge",15,U,[],4,3,0,["gC",function(b,c,d,e){A8i(this,b,c,d,e);},"tk",function(b,c,d,e){ARg(this,b,c,d,e);}],O$,0,U,[],0,3,0,["fJ",function(){return AYA(this);},"d8",function(b,c,d,e,f){return AZD(this,b,c,d,e,f);}],AJ3,"BlockGlass",15,O$,[],4,3,0,["gk",function(b){return AZB(this,b);}],AAV,"BlockMushroom",15,Gp,[],4,3,0,["rQ",
function(b){return AQn(this,b);},"s7",function(b,c,d,e){return A3b(this,b,c,d,e);}],AAt,"BlockOreBlock",15,U,[],4,3,0,["cO",function(b){return A49(this,b);}],AKt,"BlockStep",15,U,[],4,3,0,["cO",function(b){return ARp(this,b);},"fJ",function(){return APs(this);},"jm",function(b,c,d,e,f){A5y(this,b,c,d,e,f);},"gC",function(b,c,d,e){AYK(this,b,c,d,e);},"gp",function(b,c){return APx(this,b,c);},"iv",function(){return A0K(this);},"d8",function(b,c,d,e,f){return A6I(this,b,c,d,e,f);}],ANB,"BlockTNT",15,U,[],4,3,0,
["cO",function(b){return AQC(this,b);},"gk",function(b){return A4q(this,b);},"A2",function(b,c,d,e){A7R(this,b,c,d,e);},"rD",function(b,c,d,e,f){A7s(this,b,c,d,e,f);}],AJz,"BlockBookshelf",15,U,[],4,3,0,["cO",function(b){return ARF(this,b);},"gk",function(b){return ARO(this,b);}],AOB,"BlockTorch",15,U,[],4,3,0,["iq",function(b,c,d){return AU8(this,b,c,d);},"fJ",function(){return A2l(this);},"iv",function(){return AXz(this);},"ig",function(){return A71(this);},"ok",function(b,c,d,e){return AIg(this,b,c,d,e);
},"Ek",function(b,c,d,e,f){APv(this,b,c,d,e,f);},"gi",function(b,c,d,e,f){AWc(this,b,c,d,e,f);},"gC",function(b,c,d,e){AJR(this,b,c,d,e);},"jm",function(b,c,d,e,f){ASu(this,b,c,d,e,f);},"Bd",function(b,c,d,e,f,g){return AUq(this,b,c,d,e,f,g);},"oL",function(b,c,d,e,f){AS7(this,b,c,d,e,f);}],AOI,"BlockFire",15,U,[],4,3,0,["iq",function(b,c,d){return AWp(this,b,c,d);},"fJ",function(){return ATe(this);},"iv",function(){return AWs(this);},"ig",function(){return AVH(this);},"gk",function(b){return A8k(this,b);},
"rV",function(){return A2c(this);},"gi",function(b,c,d,e,f){A21(this,b,c,d,e,f);},"pI",function(){return A8d(this);},"ok",function(b,c,d,e){return A0Y(this,b,c,d,e);},"jm",function(b,c,d,e,f){AZv(this,b,c,d,e,f);},"gC",function(b,c,d,e){A3T(this,b,c,d,e);},"oL",function(b,c,d,e,f){ASt(this,b,c,d,e,f);}],ADI,"BlockSource",15,U,[],4,3,0,["gC",function(b,c,d,e){A1F(this,b,c,d,e);},"gi",function(b,c,d,e,f){A3y(this,b,c,d,e,f);}],J2,0,U,[],1,3,0,["gC",function(b,c,d,e){AI6(this,b,c,d,e);},"tk",function(b,c,d,e){
AVl(this,b,c,d,e);}],ADt,"BlockChest",15,J2,[],4,3,0,["jA",function(b,c,d,e,f){return A7_(this,b,c,d,e,f);},"cO",function(b){return A5t(this,b);},"ok",function(b,c,d,e){return AW9(this,b,c,d,e);},"tk",function(b,c,d,e){A36(this,b,c,d,e);},"r4",function(b,c,d,e,f){return AJW(this,b,c,d,e,f);},"DC",function(){return A2T(this);}],ANx,"BlockGears",15,U,[],4,3,0,["iq",function(b,c,d){return AZo(this,b,c,d);},"fJ",function(){return ARV(this);},"iv",function(){return A66(this);},"ig",function(){return A25(this);},
"gk",function(b){return AZW(this,b);},"pI",function(){return APu(this);}],AGx,"BlockWorkbench",15,U,[],4,3,0,["cO",function(b){return AXq(this,b);},"r4",function(b,c,d,e,f){return ALm(this,b,c,d,e,f);}],ANV,"BlockCrops",15,Gp,[],4,3,0,["rQ",function(b){return AY9(this,b);},"gi",function(b,c,d,e,f){A3k(this,b,c,d,e,f);},"qt",function(b,c){return AQV(this,b,c);},"ig",function(){return A4V(this);},"rD",function(b,c,d,e,f){AQB(this,b,c,d,e,f);},"gp",function(b,c){return A4j(this,b,c);},"gk",function(b){return APE(this,
b);}],ALv,"BlockFarmland",15,U,[],4,3,0,["iq",function(b,c,d){return ASX(this,b,c,d);},"fJ",function(){return A6V(this);},"iv",function(){return A6$(this);},"qt",function(b,c){return A6a(this,b,c);},"gi",function(b,c,d,e,f){A33(this,b,c,d,e,f);},"F2",function(b,c,d,e){AUf(this,b,c,d,e);},"jm",function(b,c,d,e,f){A8v(this,b,c,d,e,f);},"gp",function(b,c){return ASl(this,b,c);}],AMW,"BlockFurnace",15,J2,[],4,3,0,["gC",function(b,c,d,e){A3H(this,b,c,d,e);},"jA",function(b,c,d,e,f){return AZn(this,b,c,d,e,f);},"oL",
function(b,c,d,e,f){A35(this,b,c,d,e,f);},"cO",function(b){return AYf(this,b);},"r4",function(b,c,d,e,f){return ALD(this,b,c,d,e,f);},"DC",function(){return A6W(this);}],Bg,0,C,[],0,3,B2,["lf",function(b,c,d,e,f,g){return A4O(this,b,c,d,e,f,g);},"yy",function(b){return A24(this,b);},"t2",function(b,c,d){return A3V(this,b,c,d);},"xi",function(b){A3e(this,b);},"xI",function(b){AXX(this,b);},"xb",function(){return AXG(this);},"x8",function(b){return AZh(this,b);}],AH3,0,Bg,[],4,3,0,["lf",function(b,c,d,e,f,g){
return A4g(this,b,c,d,e,f,g);}],GT,0,C,[Ci,DF,Dk],1,3,0,0,ANJ,0,Oe,[],0,0,0,0,XJ,0,C,[],3,3,0,0,M7,0,FG,[Dk,JA,LV,XJ],1,3,0,0,RN,"GZIPException",2,BA,[],0,3,0,0,Dd,0,C,[Ci],0,3,0,0,GF,0,GT,[],0,3,0,0,Po,0,C,[],3,0,0,0,AGh,0,C,[Po],4,3,0,["FT",function(b){AO1(this,b);},"mi",function(){AVG(this);},"zB",function(){return AQc(this);},"k5",function(b,c,d){A40(this,b,c,d);}],GC,0,Fc,[],12,0,0,0,M_,0,B7,[],4,3,0,["it",function(){return A5c(this);},"pP",function(){return A6P(this);},"os",function(){return A37(this);
}],L6,0,B7,[],4,3,0,["l$",function(){return A3R(this);},"it",function(){return AUp(this);}],Of,0,B7,[],4,3,0,["it",function(){return AXJ(this);},"pP",function(){return AXM(this);},"os",function(){return AQg(this);}],Ha,0,Bg,[],0,3,0,["yy",function(b){return AQw(this,b);},"xi",function(b){AUx(this,b);},"xI",function(b){APV(this,b);},"xb",function(){return A0r(this);}],Zq,0,Ha,[],4,3,A9E,0,Z3,0,Ha,[],4,3,A96,["x8",function(b){return ASS(this,b);}],U_,0,Ha,[],4,3,A9s,0,AGo,0,Bg,[],4,3,0,["lf",function(b,c,d,e,
f,g){return A1t(this,b,c,d,e,f,g);}],Nv,0,Bg,[],0,3,0,["t2",function(b,c,d){return AGZ(this,b,c,d);}],AGj,0,Bg,[],4,3,0,["t2",function(b,c,d){return A7L(this,b,c,d);}],AHp,0,Bg,[],4,3,0,["yy",function(b){return AWr(this,b);},"xi",function(b){APU(this,b);},"xI",function(b){A5K(this,b);},"xb",function(){return ATg(this);}],ADn,0,Nv,[],4,3,0,["t2",function(b,c,d){return A3f(this,b,c,d);}],AL_,0,Bg,[],4,3,0,["lf",function(b,c,d,e,f,g){return AV_(this,b,c,d,e,f,g);}],W5,0,Bg,[],4,3,0,["lf",function(b,c,d,e,f,g){
return A5E(this,b,c,d,e,f,g);}],Gm,0,Bg,[],4,3,0,0,AHP,0,Bg,[],4,3,0,["lf",function(b,c,d,e,f,g){return AZr(this,b,c,d,e,f,g);}],OE,0,C,[],4,3,0,0,I8,0,C,[Ci,DF],1,3,0,0,BE,"IndexOutOfBoundsException",10,BT,[],0,3,0,0]);
$rt_metadata([ALn,0,C,[],4,3,0,0,K4,"ArrayStoreException",10,BT,[],0,3,0,0,NM,0,C,[],4,3,0,0,AD7,0,I8,[],0,0,0,0,PL,0,C,[],1,3,0,0,EB,0,PL,[],1,3,0,0,ACX,0,EB,[],4,3,0,["hb",function(b){return A0b(this,b);},"k9",function(b){return AVL(this,b);},"kq",function(b){return AR8(this,b);}],PA,0,FA,[L0],1,3,0,0,AOp,0,PA,[Ci],0,3,0,["eW",function(){return A3g(this);}],UL,0,C,[E4],4,0,0,["iH",function(b,c){return AZc(this,b,c);}],Lv,0,Fw,[Dk],0,3,0,["lY",function(){return AOU(this);},"cI",function(b){return AVy(this,
b);},"kQ",function(b){return A44(this,b);}],Mm,0,EB,[],0,3,0,["hb",function(b){return A4z(this,b);},"k9",function(b){return AZS(this,b);},"kq",function(b){return ATj(this,b);}],AJ9,0,C,[],4,3,0,0,TV,0,C,[],0,0,0,0,Sg,0,C,[],3,3,0,0,T1,0,C,[Sg],0,3,0,0,RL,0,C,[E4],0,0,0,["iH",function(b,c){return A8o(this,b,c);}],AFu,0,C,[],0,3,0,0,AJM,0,C,[],4,3,0,0,V7,0,EB,[],4,0,0,["hb",function(b){return AI_(this,b);},"k9",function(b){return AAw(this,b);},"kq",function(b){return AKM(this,b);}],Qw,0,EB,[],4,0,0,["hb",function(b)
{return AK3(this,b);},"k9",function(b){return ARz(this,b);},"kq",function(b){return ADL(this,b);}],J$,0,EB,[],4,3,0,["hb",function(b){return A3C(this,b);},"k9",function(b){return A23(this,b);},"kq",function(b){return AZU(this,b);}],Qi,0,C,[],4,0,0,0,Va,0,C,[],4,0,0,0,ABz,0,C,[],4,3,0,0,Yq,0,C,[],4,0,0,0,HO,0,C,[],3,3,0,0,MU,0,C,[HO,DF],0,0,0,["cI",function(b){return A1l(this,b);}],LA,0,MU,[],0,0,0,0,Iq,"StringIndexOutOfBoundsException",10,BE,[],0,3,0,0,Z0,0,C,[],0,3,0,0,M3,0,C,[],4,3,0,0,Sy,0,C,[],0,3,0,0,SK,
0,C,[],0,3,0,0,Tg,0,C,[],3,3,0,0,ANP,0,C,[Tg],4,3,0,0,OF,0,C,[],4,3,0,0,Kx,0,C,[],4,3,0,0,GB,0,C,[],0,3,0,0,Jd,0,GB,[],4,3,0,0,Ds,0,Cq,[],0,3,0,0,H7,0,C,[],4,3,AKo,0,CV,0,GB,[],0,3,0,["pC",function(b,c){AMU(this,b,c);},"IK",function(b,c,d){AFb(this,b,c,d);},"iT",function(b){AFK(this,b);},"hS",function(){AWN(this);},"vY",function(){AJP(this);},"pT",function(){A3z(this);},"rp",function(){return AZ9(this);}],ACn,0,CV,[],4,3,0,["pC",function(b,c){AJ$(this,b,c);},"hS",function(){A7A(this);},"iT",function(b){AJb(this,
b);},"iI",function(b,c,d){AMH(this,b,c,d);}],F4,"EOFException",8,BA,[],0,3,0,0,Ho,0,C,[],3,3,0,0,YY,0,C,[Ho],0,3,0,["hK",function(){AIh(this);}],E2,0,C,[],4,3,0,0,Gd,0,C,[],4,3,0,0,MR,0,C,[],4,0,0,0]);
$rt_metadata([DE,"IllegalStateException",10,Cq,[],0,3,0,0,Jl,"NoSuchElementException",4,BT,[],0,3,0,0,Fn,0,C,[],3,3,0,0,VS,0,C,[Fn],0,0,0,["jr",function(){return JO(this);},"hm",function(){return Il(this);}],W0,0,C,[],4,3,0,0,Qv,0,C,[],0,3,0,0,Ny,0,C,[],0,3,BD,0,Oc,0,FG,[Dk],1,3,0,0,Vd,0,C,[],4,3,0,0,CK,0,IZ,[],4,3,0,0,DD,"Entity",16,C,[],1,3,0,["xJ",function(){CN(this);},"AS",function(b){A3d(this,b);},"EE",function(b){AZp(this,b);},"sa",function(){return A5B(this);},"vH",function(b){return EC(this,b);},"xy",
function(b){APW(this,b);},"eX",function(b,c){return AO4(this,b,c);},"qf",function(){return A2h(this);},"C3",function(){return A8u(this);},"v_",function(){return A73(this);},"Dk",function(){return AWd(this);}],F8,0,DD,[],0,3,0,["qf",function(){return A8w(this);},"C3",function(){return A1c(this);},"sa",function(){return ACe(this);},"eP",function(){ADZ(this);},"eX",function(b,c){return NP(this,b,c);},"A3",function(b){A5G(this,b);},"nt",function(){return AWP(this);},"EE",function(b){A7H(this,b);},"Dk",function()
{return AVR(this);},"mQ",function(){W2(this);}],Hk,"EntityPlayer",19,F8,[],0,3,0,["A3",function(b){A4l(this,b);},"xJ",function(){ARv(this);},"sa",function(){return AVF(this);},"eX",function(b,c){return AUV(this,b,c);}],Mk,0,Hk,[],0,3,0,["sF",function(){A1m(this);},"mQ",function(){AWA(this);},"fZ",function(b){AN4(this,b);},"gb",function(){return A1T(this);}],GZ,0,C,[],3,3,0,0,Ti,0,C,[GZ],4,3,0,["kL",function(b,c){return Fr(this,b,c);},"jF",function(b,c){AE7(this,b,c);},"gX",function(b){return R2(this,b);},"f1",
function(){return APc(this);}],C9,0,C,[],4,3,0,0,AFX,0,C,[],4,3,0,0,Eu,0,CV,[],1,3,0,["iI",function(b,c,d){AAD(this,b,c,d);},"IK",function(b,c,d){AJ7(this,b,c,d);},"pC",function(b,c){AIc(this,b,c);},"pT",function(){YZ(this);},"rp",function(){return A2j(this);}],AJO,0,Eu,[],4,3,0,["pT",function(){A29(this);},"rl",function(){AO2(this);},"lQ",function(){A6H(this);},"iI",function(b,c,d){AA1(this,b,c,d);},"tA",function(){AAk(this);}],AB8,0,C,[],4,3,0,0,Uq,0,C,[],3,3,0,0,Uz,0,C,[],3,3,0,0,QQ,0,C,[Ho,Uq,Uz],0,0,0,
["hK",function(){AMk(this);}],Ru,0,Ev,[],0,0,0,["qS",function(b){A2G(this,b);}],AHv,0,C,[],4,3,0,0,Uo,0,C,[],0,0,0,0,C2,0,C,[],1,0,0,0,Z8,"NegativeArraySizeException",10,BT,[],0,3,0,0,Km,0,C,[],0,3,0,0,Mf,0,C,[Ci],1,3,0,0,Jm,0,Mf,[Ci],0,3,0,0,SG,0,C,[],0,0,0,0,LC,0,C,[],0,3,0,0,R9,0,C,[],4,3,0,0,IN,0,C,[],4,3,0,["cI",function(b){return A2i(this,b);}],D_,0,C,[],1,3,0,0,ABV,0,D_,[],4,3,0,["kW",function(b,c,d,e,f,g){ALA(this,b,c,d,e,f,g);}],FO,0,C,[],0,3,0,0,PG,0,C,[Dl],3,3,0,0,Yc,0,C,[PG],0,0,0,["Hf",function()
{return AXv(this);}],OJ,0,C,[],0,3,0,0,AI3,0,C,[GZ],4,3,0,["gX",function(b){return IW(this,b);},"kL",function(b,c){return ACY(this,b,c);},"jF",function(b,c){AY0(this,b,c);},"f1",function(){return AV6(this);}],Vp,0,C,[GZ],4,3,0,["gX",function(b){return A6B(this,b);},"kL",function(b,c){return A3A(this,b,c);},"jF",function(b,c){Sm(this,b,c);},"f1",function(){return AW0(this);}],IV,0,C,[],0,3,0,["y5",function(){A1M(this);},"q6",function(b){return AZF(this,b);},"sB",function(){return A2k(this);}],AHk,0,IV,[],4,0,
0,["q6",function(b){return A5p(this,b);},"y5",function(){A4s(this);}],Wp,0,IV,[],4,0,0,["q6",function(b){return AQJ(this,b);},"sB",function(){return AYl(this);}],Mx,0,M7,[],1,0,0,0,ADh,0,Mx,[],0,0,0,0,MZ,0,C,[],1,3,0,0]);
$rt_metadata([Pu,0,C,[],0,3,0,0,AEN,0,C,[],0,3,0,0,ME,0,C,[],3,3,0,0,IA,0,C,[Ci,ME],1,3,0,0,YG,0,C,[ME],3,3,0,0,Pl,0,C,[YG],3,3,0,0,Tp,0,C,[],3,3,0,0,M9,0,C,[Tp],3,3,0,0,X$,0,IA,[Ci,Pl,M9],0,3,0,0,YI,0,C,[Pl],3,3,0,0,To,0,C,[M9],3,3,0,0,Id,0,IA,[Ci,YI,To],0,3,0,0,Yb,0,C,[DY],0,0,0,["gI",function(b){return A2O(this,b);}],Ya,0,C,[DY],0,0,0,["gI",function(b){return A55(this,b);}],Rm,0,C,[],0,0,0,0,Lp,"IllegalMonitorStateException",10,BT,[],0,3,0,0,XO,0,C,[],4,3,0,0,Zp,0,C,[],4,3,0,0,WN,0,C,[],4,3,0,0,AH0,0,C,[Dl],
1,3,0,0,U4,0,C,[Ho],0,3,0,["hK",function(){ANA(this);}],JC,0,Oc,[],1,0,0,0,Xd,0,JC,[],0,0,0,["zv",function(b){return ALF(this,b);},"vu",function(b,c){XL(this,b,c);},"lG",function(){return AOV(this);}],Tb,0,C,[Ho],0,3,0,0,XZ,0,C,[],4,3,0,0,Sn,0,C,[],4,3,0,0,VX,0,C,[],4,3,0,0,PH,0,Fw,[Dk],0,3,0,0,On,0,Fw,[Dk],0,3,0,0,AEu,0,C,[],4,3,0,0,Y4,0,OJ,[],4,3,0,0,Uu,0,CV,[],4,3,0,0,Tx,0,CV,[],4,3,0,["hS",function(){AVY(this);},"pC",function(b,c){AHG(this,b,c);},"iT",function(b){AL9(this,b);},"iI",function(b,c,d){AIW(this,
b,c,d);},"rp",function(){return ASU(this);}],Nm,0,C,[],0,0,0,0,Rq,0,FA,[],0,0,0,0,AB4,0,C,[Dl],1,3,0,0,LD,0,C,[],4,0,0,0,AAR,0,C,[],4,3,0,0,Do,"EntityFX",21,DD,[],0,3,0,["eP",function(){A6E(this);},"jg",function(b,c,d,e,f,g,h){Ip(this,b,c,d,e,f,g,h);},"yg",function(){return ASD(this);},"fZ",function(b){A7g(this,b);},"gb",function(){return AQr(this);}],AOG,0,Do,[],4,3,0,["yg",function(){return AU0(this);},"jg",function(b,c,d,e,f,g,h){AAs(this,b,c,d,e,f,g,h);}],Yz,0,CV,[],4,3,0,["hS",function(){AZt(this);},"iT",
function(b){ABp(this,b);},"iI",function(b,c,d){AJi(this,b,c,d);}],Gr,0,C2,[],0,3,0,["cI",function(b){return AHc(this,b);}],AC0,0,C2,[],0,3,0,["cI",function(b){return A0_(this,b);}],Sx,0,C2,[],0,3,0,["cI",function(b){return A06(this,b);}],I_,0,C2,[],1,3,0,["cI",function(b){return A17(this,b);}],Su,0,I_,[],0,3,0,0,Qe,0,C2,[],0,3,0,["cI",function(b){return A30(this,b);}],ALd,0,Gr,[],0,3,0,["cI",function(b){return A7y(this,b);}],RW,0,Gr,[],0,3,0,0,R1,0,I_,[],0,3,0,0]);
$rt_metadata([ACZ,0,C2,[],0,3,0,["cI",function(b){return A1U(this,b);}],X9,0,C2,[],0,3,0,["cI",function(b){return AQY(this,b);}],TF,0,C2,[],0,3,0,["cI",function(b){return A3B(this,b);}],ADk,0,C2,[],0,3,0,["cI",function(b){return A0k(this,b);}],AA7,0,Gr,[],0,3,0,0,OO,0,MZ,[],1,3,0,0,Rz,0,OO,[],0,3,0,0,VN,0,C,[],4,3,0,0,TN,0,C,[I1],0,0,0,["hK",function(){AIF(this);}],ADT,0,C,[GZ],4,3,0,["gS",function(){return A42(this);},"xD",function(){return AWD(this);},"gX",function(b){return ASh(this,b);},"kL",function(b,
c){return AVv(this,b,c);},"jF",function(b,c){AXR(this,b,c);},"f1",function(){return APl(this);}],T3,0,C,[PG],0,0,0,["Hf",function(){return AX6(this);}],JW,"ConcurrentModificationException",4,BT,[],0,3,0,0,SI,0,C,[],0,3,0,0,Pt,0,C,[],0,3,0,0,PE,0,Pt,[],4,3,0,0,WV,0,C,[],3,3,0,0,ANL,0,C,[WV],4,3,0,0,Tk,0,C,[],4,3,0,0,F3,0,C,[],4,0,0,0,MH,0,C,[],4,0,0,0,AG2,0,C,[],0,3,0,0,JN,0,C,[],0,3,0,["zH",function(){A3M(this);}],PM,0,C,[],4,3,0,0,U$,0,C,[Ho],0,3,0,["hK",function(){AH1(this);}],Ir,"UTFDataFormatException",
8,BA,[],0,3,0,0,ACO,0,C,[Mn],1,3,0,["RJ",function(b){return A8g(this,b);},"Zd",function(){return AQH(this);}],Vs,0,C,[EQ],0,0,0,["jD",function(){return A8e(this);}],WH,0,C,[EQ],0,0,0,["jD",function(){return A4x(this);}],Fl,0,Fc,[],12,3,0,0,Vu,0,C,[EQ],0,0,0,["jD",function(){return A3s(this);}],Vt,0,C,[EQ],0,0,0,["jD",function(){return A09(this);}],G0,0,BT,[],0,3,0,0,GH,0,BA,[],0,3,0,0,AN0,"AssertionError",10,EF,[],0,3,0,0,P2,0,C,[],4,3,0,0,Gn,0,DD,[],0,3,0,["eP",function(){A1v(this);},"AS",function(b){A1f(this,
b);},"eX",function(b,c){return ABX(this,b,c);},"fZ",function(b){AXP(this,b);},"il",function(b){A6m(this,b);},"gb",function(){return A3Q(this);},"xy",function(b){AXi(this,b);}],QV,0,Eu,[],4,3,0,["lQ",function(){AXK(this);},"tA",function(){AAh(this);}],Ul,0,Eu,[],4,3,0,["pT",function(){A1S(this);},"rl",function(){AO6(this);},"lQ",function(){AUS(this);},"tA",function(){AKa(this);}],AF3,0,Eu,[],4,3,0,["lQ",function(){A1w(this);},"tA",function(){ADK(this);}],G5,0,C,[],0,0,0,["jr",function(){return La(this);}],Xs,
0,G5,[Fn],0,0,0,0,JT,0,JC,[],1,0,0,["lG",function(){return ATW(this);}],QM,0,JT,[],0,0,0,["zv",function(b){return ASi(this,b);},"vu",function(b,c){AOT(this,b,c);}],X7,0,JT,[],0,0,0,["zv",function(b){return AW6(this,b);},"vu",function(b,c){APR(this,b,c);}],Tj,0,C,[],4,0,0,0,Z5,0,C,[],4,3,0,0,Rp,0,Dn,[],0,0,0,["gy",function(){return AT$(this);}],WO,0,C,[Fn],3,3,0,0,AD9,0,C,[WO],0,0,0,0,TR,0,C,[],0,0,0,0]);
$rt_metadata([Vk,0,C,[E4],4,3,0,["iH",function(b,c){return ARR(this,b,c);}],Im,0,C,[],0,3,0,0,R3,0,C,[E4],4,3,0,["iH",function(b,c){return AWK(this,b,c);}],Hs,"UnsupportedOperationException",10,BT,[],0,3,0,0,Fd,"ReadOnlyBufferException",6,Hs,[],0,3,0,0,GV,"BufferOverflowException",6,BT,[],0,3,0,0,G6,"BufferUnderflowException",6,BT,[],0,3,0,0,Np,0,C,[],0,3,0,0,Pz,0,C,[],1,3,0,0,AMA,0,C,[],4,0,0,0,DV,0,D_,[],0,3,0,["I4",function(b,c,d,e,f,g){AGH(this,b,c,d,e,f,g);},"my",function(b,c){return ABq(this,b,c);},"Ae",
function(b){return AUo(this,b);},"wP",function(b,c,d){return ASz(this,b,c,d);},"v3",function(b,c){A11(this,b,c);},"kW",function(b,c,d,e,f,g){AHM(this,b,c,d,e,f,g);}],OV,0,DV,[],4,3,0,["my",function(b,c){return AEY(this,b,c);},"I4",function(b,c,d,e,f,g){ALY(this,b,c,d,e,f,g);},"kW",function(b,c,d,e,f,g){ADc(this,b,c,d,e,f,g);}],Pm,0,GB,[],0,3,0,0,Y$,0,C,[E4],0,3,0,["iH",function(b,c){return A0$(this,b,c);}],Y8,0,C,[E4],0,3,0,0,JR,0,F8,[],0,3,0,["sF",function(){AHg(this);},"pl",function(b,c){AQh(this,b,c);},"vb",
function(){return AVr(this);}],DP,"EntityMob",18,JR,[],0,3,0,["mQ",function(){Yo(this);},"eP",function(){AVN(this);},"vb",function(){return ASO(this);},"eX",function(b,c){return A1d(this,b,c);},"pl",function(b,c){AL5(this,b,c);},"s8",function(b,c,d){return A0H(this,b,c,d);},"fZ",function(b){AUA(this,b);},"il",function(b){AXa(this,b);}],TM,0,DP,[],0,3,0,["vb",function(){return A6A(this);},"pl",function(b,c){APT(this,b,c);},"fZ",function(b){A65(this,b);},"il",function(b){A2S(this,b);},"gb",function(){return AWH(this);
},"nt",function(){return AUD(this);}],Zm,0,DV,[],4,3,0,["Ae",function(b){return A4J(this,b);},"my",function(b,c){return AB3(this,b,c);}],He,"EntityAnimal",17,JR,[],1,3,0,["s8",function(b,c,d){return AQT(this,b,c,d);}],ZZ,0,He,[],0,3,0,["fZ",function(b){AUH(this,b);},"il",function(b){A4p(this,b);},"gb",function(){return A1E(this);},"nt",function(){return ARb(this);}],GA,0,Fv,[],0,3,0,["gP",function(b,c,d,e,f,g){AUK(this,b,c,d,e,f,g);}],Qu,0,GA,[],4,3,0,0,P8,0,He,[],0,3,0,["eX",function(b,c){return A4n(this,b,
c);},"fZ",function(b){AZy(this,b);},"il",function(b){A2z(this,b);},"gb",function(){return ATK(this);}],YD,0,DV,[],4,3,0,["my",function(b,c){return AKH(this,b,c);}],WS,0,GA,[],4,3,0,0,AAE,0,GA,[],4,3,0,0,Wh,0,DP,[],0,3,0,["fZ",function(b){A7Z(this,b);},"il",function(b){AZY(this,b);},"gb",function(){return AWL(this);},"sF",function(){A59(this);},"pl",function(b,c){A4f(this,b,c);},"nt",function(){return A53(this);}],ZO,0,DV,[],4,3,0,["v3",function(b,c){A2D(this,b,c);},"wP",function(b,c,d){return AWb(this,b,c,d);
}],X_,0,DP,[],0,3,0,["mQ",function(){A1A(this);},"pl",function(b,c){A14(this,b,c);},"fZ",function(b){AQX(this,b);},"il",function(b){AS$(this,b);},"gb",function(){return ATz(this);},"nt",function(){return ATR(this);}],Jv,0,JV,[],0,3,0,["oS",function(b,c,d,e,f,g){ATq(this,b,c,d,e,f,g);}],UR,0,Jv,[],4,3,0,0,SN,0,DP,[],0,3,0,["mQ",function(){A5a(this);},"gb",function(){return AXT(this);},"nt",function(){return AP4(this);}],PR,0,DP,[],0,3,0,["s8",function(b,c,d){return A6O(this,b,c,d);},"gb",function(){return A8p(this);
}],YP,0,DV,[],4,3,0,["v3",function(b,c){APy(this,b,c);}],SA,0,D_,[],4,3,0,["kW",function(b,c,d,e,f,g){AIo(this,b,c,d,e,f,g);}],PQ,0,DD,[],0,3,0,["eP",function(){ARA(this);},"qf",function(){return A2u(this);},"eX",function(b,c){return A3q(this,b,c);},"fZ",function(b){A70(this,b);},"gb",function(){return A1B(this);},"il",function(b){AWw(this,b);}],SQ,0,D_,[],4,3,0,["kW",function(b,c,d,e,f,g){AL6(this,b,c,d,e,f,g);}],MY,0,DD,[],0,3,0,["eP",function(){AZH(this);},"fZ",function(b){A4e(this,b);},"gb",function(){return A5C(this);
},"xy",function(b){A7G(this,b);},"v_",function(){return ATY(this);}],Vc,0,D_,[],4,3,0,["kW",function(b,c,d,e,f,g){ALc(this,b,c,d,e,f,g);}],Ws,0,DD,[],0,3,0,["qf",function(){return A3t(this);},"eP",function(){APj(this);},"fZ",function(b){A0u(this,b);},"gb",function(){return ATM(this);},"v_",function(){return ASM(this);}],Up,0,D_,[],4,3,0,["kW",function(b,c,d,e,f,g){AJX(this,b,c,d,e,f,g);}],Uf,0,Dn,[],4,0,0,0,Ud,0,Fh,[],4,0,0,0,Ug,0,Fu,[],4,0,0,0,ACc,0,Fv,[],4,3,0,["gP",function(b,c,d,e,f,g){AS1(this,b,c,d,e,
f,g);}],AAr,0,Fv,[],4,3,0,["gP",function(b,c,d,e,f,g){A4H(this,b,c,d,e,f,g);}],XX,0,G5,[Fn],0,0,0,["hm",function(){return AQQ(this);}],MK,0,Pz,[],1,3,0,0,Tr,0,MK,[],0,3,0,0]);
$rt_metadata([Nk,0,C,[],0,3,0,0,D$,"Inflate$Return",2,Cq,[],0,0,0,0,AKG,0,C,[DF],0,3,0,0,Ql,0,C,[Po],4,3,0,["k5",function(b,c,d){AYM(this,b,c,d);},"mi",function(){A2Y(this);},"FT",function(b){A6u(this,b);},"zB",function(){return A4b(this);}],AJl,0,JN,[GZ],4,3,0,["gX",function(b){return AU6(this,b);},"kL",function(b,c){return AX9(this,b,c);},"jF",function(b,c){AT8(this,b,c);},"tc",function(b){A2Z(this,b);},"vz",function(b){ARG(this,b);},"f1",function(){return A34(this);},"zH",function(){AO3(this);}],N7,0,EF,
[],0,3,0,0,Yw,"OutOfMemoryError",10,N7,[],0,3,0,0,ALW,"CoderMalfunctionError",7,EF,[],0,3,0,0,ZC,0,C,[],0,3,0,0,AGD,0,JN,[GZ],4,3,0,["gS",function(){return A6R(this);},"gX",function(b){return AEJ(this,b);},"kL",function(b,c){return A19(this,b,c);},"jF",function(b,c){A0S(this,b,c);},"xD",function(){return AOM(this);},"tc",function(b){AVM(this,b);},"vz",function(b){A4X(this,b);},"f1",function(){return A2v(this);}],ACC,0,CV,[],4,3,0,["hS",function(){AWW(this);},"iT",function(b){AIZ(this,b);},"iI",function(b,c,
d){AN$(this,b,c,d);}],ACh,0,CV,[],4,3,0,["hS",function(){AVg(this);},"iT",function(b){ALs(this,b);},"iI",function(b,c,d){AB0(this,b,c,d);}],Nn,0,CV,[I1],0,3,0,["vY",function(){AFW(this);},"hK",function(){AGU(this);},"F9",function(b){A0g(this,b);},"hS",function(){AMR(this);},"iT",function(b){ABK(this,b);},"Ja",function(b){AMs(this,b);},"iI",function(b,c,d){ANl(this,b,c,d);},"Fh",function(b){AS4(this,b);}],Lf,0,Nn,[],4,3,0,["hS",function(){AUm(this);},"F9",function(b){A4P(this,b);},"Fh",function(b){AW_(this,b);
},"Ja",function(b){ALz(this,b);}],CM,"EnumArt",16,Fc,[],12,3,0,0,VU,0,C,[],0,3,0,0,RM,"BufferUnderflowException",7,BT,[],0,3,0,0,UV,"BufferOverflowException",7,BT,[],0,3,0,0,T7,"MalformedInputException",7,GH,[],0,3,0,["kR",function(){return AR0(this);}],RI,"UnmappableCharacterException",7,GH,[],0,3,0,["kR",function(){return ARs(this);}],QC,0,Do,[],4,3,0,["eP",function(){AVf(this);}],AAF,0,Do,[],4,3,0,["jg",function(b,c,d,e,f,g,h){AHa(this,b,c,d,e,f,g,h);},"eP",function(){A3O(this);}],QX,0,Do,[],4,3,0,["jg",
function(b,c,d,e,f,g,h){AOC(this,b,c,d,e,f,g,h);},"eP",function(){AWo(this);}],SD,0,Do,[],4,3,0,["jg",function(b,c,d,e,f,g,h){AAC(this,b,c,d,e,f,g,h);},"vH",function(b){return A1z(this,b);},"eP",function(){AQU(this);}],AEb,0,Do,[],4,3,0,["vH",function(b){return ATi(this,b);},"jg",function(b,c,d,e,f,g,h){ANX(this,b,c,d,e,f,g,h);},"eP",function(){AUd(this);}],Ma,"EntityRainFX",21,Do,[],0,3,0,["jg",function(b,c,d,e,f,g,h){AIb(this,b,c,d,e,f,g,h);},"eP",function(){A4a(this);}],QR,0,Ma,[],4,3,0,0,Wt,0,C,[],4,3,AWJ,
0,ZF,0,CV,[],4,3,0,["hS",function(){AYC(this);},"iT",function(b){AAd(this,b);},"pC",function(b,c){AEW(this,b,c);},"iI",function(b,c,d){AHH(this,b,c,d);}],AN8,0,Pm,[],4,3,0,0,HT,0,C,[Ci,Dk],0,3,0,0,WD,0,C,[Kj],3,3,0,0,Un,0,C,[WD],3,3,0,0,Vi,0,Dn,[Un],0,3,0,["gy",function(){return AZ6(this);}],ANm,0,C,[],4,3,0,0,U1,0,C,[KP],3,3,0,0,Qk,0,C,[U1],3,3,0,0,Wz,0,Fh,[DF,Ci,Qk],0,3,0,0,AHD,0,C,[],4,3,0,0,AGA,0,C,[],4,3,0,0,AM_,0,C,[],4,3,0,0,T4,0,C,[],4,3,0,0,T$,0,C,[],4,3,0,0,ACd,0,C,[],4,3,0,0,AOK,0,C,[E4],4,0,0,["iH",
function(b,c){return A5x(this,b,c);}],UC,0,C,[],4,3,0,0,SH,0,C,[E4],0,0,0,0,YC,0,C,[],3,3,0,0,RK,0,C,[YC],0,3,0,0,JS,0,C,[],1,3,0,0]);
$rt_metadata([Xx,0,JS,[],0,3,0,["yU",function(){return AVP(this);},"Fx",function(b){return A5V(this,b);},"up",function(b,c,d){return A13(this,b,c,d);},"zT",function(b){return ARQ(this,b);}],Yh,0,MS,[KP],0,3,0,["xd",function(b){return AQj(this,b);}],Pa,0,C,[Ci],4,3,0,0,IM,0,C,[IY],1,3,0,0,Th,0,IM,[],0,3,0,0,QK,0,IM,[],0,3,0,0,Py,0,LA,[],4,0,0,0,AHS,0,C,[],4,3,0,0,R6,0,C,[],4,3,0,0,AOm,"MinecraftError",20,EF,[],4,3,0,0,WC,0,CV,[],4,3,0,["hS",function(){AQe(this);},"pT",function(){AP$(this);},"vY",function(){ABE(this);
},"iT",function(b){AFr(this,b);},"pC",function(b,c){ANa(this,b,c);},"iI",function(b,c,d){AE4(this,b,c,d);}],U2,0,Gz,[],0,3,0,0,VZ,0,Ev,[],0,3,0,0,P_,0,C,[],4,3,0,0,Iv,0,C,[],1,3,0,0,HR,"FileNotFoundException",8,BA,[],0,3,0,0,Z7,0,C,[],4,3,0,0,Ic,0,C,[],0,0,0,0,Oq,0,C,[],4,3,0,0,Uc,0,C,[],0,3,0,0,GE,"MalformedURLException",9,BA,[],0,3,0,0,Jw,0,C,[],1,3,0,0,Yx,0,C,[],0,3,0,0,Gv,0,C,[],1,3,0,0,ADA,0,Gv,[],4,3,0,0,ADm,0,Gv,[],4,3,0,0,ZT,0,Dn,[],0,0,0,["gy",function(){return ARP(this);}],QD,0,Jw,[],0,3,0,["Ch",function(b)
{return A7S(this,b);}],ADy,0,Jw,[],0,3,0,["Ch",function(b){return A1p(this,b);}],NO,0,Gv,[],4,3,0,0,NN,0,C,[HO,Ci],0,3,0,["cI",function(b){return A1Q(this,b);}],IG,0,NN,[],0,0,0,0,TA,0,C,[Fn],0,0,0,["jr",function(){return AV3(this);},"hm",function(){return A3l(this);}],K6,0,Iv,[],1,3,0,0,QW,0,K6,[],0,3,0,0,YO,0,C,[],0,3,0,0,Xq,0,C,[Ci],4,3,0,0,VR,0,Do,[],4,3,0,["jg",function(b,c,d,e,f,g,h){AKJ(this,b,c,d,e,f,g,h);},"eP",function(){ARN(this);},"yg",function(){return AZ$(this);}],Zx,0,C,[],3,3,0,0,Xm,0,C,[Zx],
0,3,0,0,ES,"NumberFormatException",10,BB,[],0,3,0,0,B_,0,C,[],1,0,0,["ez",function(b,c,d){return Kk(this,b,c,d);},"eQ",function(b,c,d,e){return Kt(this,b,c,d,e);},"pf",function(){return A0J(this);},"cg",function(b){AXy(this,b);},"dQ",function(b){return A7c(this,b);},"lU",function(){return A7U(this);},"i7",function(){L2(this);}],D6,0,B_,[],0,0,0,["e",function(b,c,d){return APS(this,b,c,d);},"b8",function(b){return AQf(this,b);}],I0,0,C,[],0,0,0,0,ANG,"PatternSyntaxException",5,BB,[],0,3,0,["kR",function(){return A7P(this);
}],Sl,0,D6,[],0,0,0,["e",function(b,c,d){return AZE(this,b,c,d);},"b8",function(b){return A6h(this,b);}],ZX,0,D6,[],0,0,0,["e",function(b,c,d){return A00(this,b,c,d);}],RF,0,D6,[],0,0,0,["e",function(b,c,d){return AQl(this,b,c,d);}],S5,0,D6,[],0,0,0,["e",function(b,c,d){return AZK(this,b,c,d);},"b8",function(b){return A5s(this,b);}],HA,0,D6,[],0,0,0,["e",function(b,c,d){return AXO(this,b,c,d);}]]);
$rt_metadata([CA,0,B_,[],1,0,0,["e",function(b,c,d){return A8f(this,b,c,d);},"dY",function(){return A6N(this);},"b8",function(b){return ATk(this,b);}],AF2,0,CA,[],0,0,0,["dg",function(b,c){return A6n(this,b,c);},"ez",function(b,c,d){return A1_(this,b,c,d);},"eQ",function(b,c,d,e){return A0U(this,b,c,d,e);},"b8",function(b){return AZI(this,b);}],Cu,0,B_,[],0,0,0,["e",function(b,c,d){return ASB(this,b,c,d);},"cg",function(b){AVz(this,b);},"dQ",function(b){return A3N(this,b);},"b8",function(b){return AV1(this,
b);},"i7",function(){AQN(this);}],LY,0,Cu,[],0,0,0,["e",function(b,c,d){return AVp(this,b,c,d);},"b8",function(b){return A54(this,b);}],Fb,0,LY,[],0,0,0,["e",function(b,c,d){return A1r(this,b,c,d);},"cg",function(b){A5P(this,b);}],Vx,0,Fb,[],0,0,0,["e",function(b,c,d){return AVw(this,b,c,d);},"b8",function(b){return AXC(this,b);}],Zh,0,Fb,[],0,0,0,["e",function(b,c,d){return AP8(this,b,c,d);},"b8",function(b){return A6S(this,b);}],Xt,0,Fb,[],0,0,0,["e",function(b,c,d){return AQM(this,b,c,d);},"b8",function(b)
{return A8t(this,b);}],Ts,0,Fb,[],0,0,0,["e",function(b,c,d){return AZj(this,b,c,d);},"b8",function(b){return A6b(this,b);}],JG,0,Cu,[],0,0,0,["e",function(b,c,d){return APd(this,b,c,d);},"ez",function(b,c,d){return AUi(this,b,c,d);},"eQ",function(b,c,d,e){return A6i(this,b,c,d,e);},"dQ",function(b){return A3I(this,b);},"lU",function(){return A5r(this);},"i7",function(){AYg(this);}],I6,0,C,[],1,0,0,0,Bk,0,I6,[],1,0,0,["hs",function(){return A0t(this);},"kE",function(){return AZT(this);},"te",function(){return A6G(this);
},"op",function(){return A7Q(this);}],ABI,"CharClass",5,Bk,[],0,0,0,["T",function(b){return Ed(this,b);},"hs",function(){return D8(this);},"kE",function(){return A15(this);},"te",function(){return AXn(this);},"eM",function(){return A4L(this);},"op",function(){return AR6(this);}],NW,"MissingResourceException",4,BT,[],0,3,0,0,Fm,0,B_,[],1,0,0,["dQ",function(b){return AWx(this,b);},"b8",function(b){return A7n(this,b);},"i7",function(){AUz(this);}],Ef,0,Fm,[],0,0,0,["e",function(b,c,d){return AZk(this,b,c,d);}],Hi,
0,Ef,[],0,0,0,["e",function(b,c,d){return A0c(this,b,c,d);}],D7,0,Fm,[],0,0,0,["e",function(b,c,d){return AZz(this,b,c,d);}],Gj,0,Ef,[],0,0,0,["e",function(b,c,d){return A31(this,b,c,d);},"cg",function(b){AYW(this,b);}],UB,0,Ef,[],0,0,0,["e",function(b,c,d){return A8a(this,b,c,d);},"ez",function(b,c,d){return AUY(this,b,c,d);}],VH,"Quantifier",5,I6,[DF],0,0,0,["eM",function(){return A4R(this);}],V5,0,B_,[],0,0,0,["e",function(b,c,d){return ATF(this,b,c,d);},"b8",function(b){return A5n(this,b);}],ZD,0,C,[DF,
Ci],0,3,0,0,P$,0,Cu,[],0,0,0,0,RT,0,Cu,[],0,0,0,["e",function(b,c,d){return APP(this,b,c,d);},"cg",function(b){A5f(this,b);},"b8",function(b){return AQq(this,b);},"dQ",function(b){return AQa(this,b);}],E_,0,Cu,[],0,0,0,["e",function(b,c,d){return A1Y(this,b,c,d);},"T",function(b){return ASf(this,b);},"dQ",function(b){return APN(this,b);},"cg",function(b){A6C(this,b);},"b8",function(b){return AR1(this,b);}],NT,0,E_,[],0,0,0,["T",function(b){return ATm(this,b);}],ABA,0,CA,[],0,0,0,["dg",function(b,c){return A3u(this,
b,c);}],FP,0,CA,[],0,0,0,["dg",function(b,c){return Vn(this,b,c);},"dQ",function(b){return AVA(this,b);}],Wq,0,Cu,[],0,0,0,["cg",function(b){AUl(this,b);},"e",function(b,c,d){return AOY(this,b,c,d);},"dQ",function(b){return A0C(this,b);},"b8",function(b){return AXr(this,b);}],FW,0,CA,[],0,0,0,["dY",function(){return A3i(this);},"dg",function(b,c){return ASK(this,b,c);},"ez",function(b,c,d){return ARM(this,b,c,d);},"eQ",function(b,c,d,e){return ATB(this,b,c,d,e);},"dQ",function(b){return AXm(this,b);}],AGC,0,
CA,[],0,0,0,["dg",function(b,c){return AY4(this,b,c);}],AAn,0,CA,[],0,0,0,["dg",function(b,c){return APa(this,b,c);}],Hp,0,Cu,[],0,0,0,["cg",function(b){A7X(this,b);},"e",function(b,c,d){return AVo(this,b,c,d);},"dQ",function(b){return ATG(this,b);},"b8",function(b){return A5R(this,b);}],UY,0,Hp,[],0,0,0,0,Ys,0,Hp,[],0,0,0,0,Vl,0,D7,[],0,0,0,["e",function(b,c,d){return A05(this,b,c,d);}],WW,0,D7,[],0,0,0,["e",function(b,c,d){return A4u(this,b,c,d);}],Is,0,D7,[],0,0,0,["e",function(b,c,d){return A6x(this,b,c,
d);},"cg",function(b){A7u(this,b);}],Rt,0,Is,[],0,0,0,["e",function(b,c,d){return ATx(this,b,c,d);},"cg",function(b){A4U(this,b);}],HV,0,D7,[],0,0,0,["e",function(b,c,d){return A8q(this,b,c,d);}],Qm,0,HV,[],0,0,0,["e",function(b,c,d){return AS3(this,b,c,d);}],Sf,0,D7,[],0,0,0,["e",function(b,c,d){return AYp(this,b,c,d);}],Xc,0,Is,[],0,0,0,["e",function(b,c,d){return AQt(this,b,c,d);}],T0,0,HV,[],0,0,0,["e",function(b,c,d){return AZO(this,b,c,d);}],Sh,0,Fm,[],0,0,0,["e",function(b,c,d){return A8h(this,b,c,d);
},"ez",function(b,c,d){return AW3(this,b,c,d);}],Wa,0,Fm,[],0,0,0,["e",function(b,c,d){return AVB(this,b,c,d);},"ez",function(b,c,d){return AOZ(this,b,c,d);}],GY,0,C,[],1,0,0,0,Z$,0,Ef,[],0,0,0,["e",function(b,c,d){return APB(this,b,c,d);}],Uw,0,Gj,[],0,0,0,["e",function(b,c,d){return AUJ(this,b,c,d);}]]);
$rt_metadata([Wx,0,Hi,[],0,0,0,["e",function(b,c,d){return A6j(this,b,c,d);}],W$,0,Ef,[],0,0,0,["e",function(b,c,d){return AVx(this,b,c,d);}],Yu,0,Gj,[],0,0,0,["e",function(b,c,d){return APK(this,b,c,d);}],R5,0,Hi,[],0,0,0,["e",function(b,c,d){return A6p(this,b,c,d);}],ADf,0,B_,[],4,0,0,["e",function(b,c,d){return A3K(this,b,c,d);},"b8",function(b){return A2_(this,b);}],ACi,0,B_,[],0,0,0,["e",function(b,c,d){return A0q(this,b,c,d);},"b8",function(b){return A0B(this,b);}],AIx,0,B_,[],0,0,0,["e",function(b,c,
d){return ATo(this,b,c,d);},"b8",function(b){return AYI(this,b);}],US,0,B_,[],4,0,0,["e",function(b,c,d){return A5J(this,b,c,d);},"b8",function(b){return A0W(this,b);}],ANz,0,B_,[],0,0,0,["e",function(b,c,d){return A4_(this,b,c,d);},"b8",function(b){return AY3(this,b);}],AH7,0,B_,[],0,0,0,["e",function(b,c,d){return A0T(this,b,c,d);},"b8",function(b){return ASs(this,b);}],AGg,0,Cu,[],0,0,0,["e",function(b,c,d){return AYq(this,b,c,d);},"cg",function(b){A0F(this,b);},"pf",function(){return A4Z(this);},"b8",function(b)
{return A0D(this,b);}],ABH,0,Cu,[],4,0,0,["e",function(b,c,d){return A45(this,b,c,d);},"cg",function(b){A6e(this,b);},"pf",function(){return AOL(this);},"b8",function(b){return AYz(this,b);}],ANo,0,B_,[],4,0,0,["e",function(b,c,d){return ATL(this,b,c,d);},"b8",function(b){return A2o(this,b);}],AK6,0,B_,[],0,0,0,["e",function(b,c,d){return AVk(this,b,c,d);},"b8",function(b){return A2g(this,b);}],AHI,0,B_,[],0,0,0,["e",function(b,c,d){return A27(this,b,c,d);},"b8",function(b){return AQ5(this,b);}],JZ,0,Cu,[],
0,0,0,["e",function(b,c,d){return APF(this,b,c,d);},"cg",function(b){A5N(this,b);},"b8",function(b){return AWi(this,b);}],ANs,0,JZ,[],0,0,0,["e",function(b,c,d){return AQ8(this,b,c,d);},"ez",function(b,c,d){return AXA(this,b,c,d);},"eQ",function(b,c,d,e){return APp(this,b,c,d,e);},"dQ",function(b){return A4m(this,b);}],AJZ,0,JZ,[],0,0,0,["e",function(b,c,d){return AUg(this,b,c,d);}],AKn,0,CA,[],0,0,0,["dg",function(b,c){return ARk(this,b,c);},"ez",function(b,c,d){return A0o(this,b,c,d);},"eQ",function(b,c,d,
e){return A2s(this,b,c,d,e);},"dQ",function(b){return ASR(this,b);}],AAi,0,CA,[],0,0,0,["dg",function(b,c){return AUj(this,b,c);}],Qq,0,CA,[],0,0,0,["dg",function(b,c){return A6k(this,b,c);}],Jf,0,C,[],4,0,0,0,Bq,0,C,[],1,0,0,0,Vr,0,CA,[],0,0,0,["dg",function(b,c){return AWB(this,b,c);}],OY,0,Cu,[],0,0,0,["cg",function(b){A5k(this,b);},"e",function(b,c,d){return A0X(this,b,c,d);},"ez",function(b,c,d){return ASP(this,b,c,d);},"eQ",function(b,c,d,e){return A1x(this,b,c,d,e);},"dQ",function(b){return APm(this,
b);},"b8",function(b){return AXd(this,b);}],O_,0,Cu,[],0,0,0,["cg",function(b){A0N(this,b);},"e",function(b,c,d){return AO5(this,b,c,d);},"ez",function(b,c,d){return A5z(this,b,c,d);},"eQ",function(b,c,d,e){return AWy(this,b,c,d,e);},"dQ",function(b){return ARm(this,b);},"b8",function(b){return A5F(this,b);}],Fi,0,CA,[],0,0,0,["dg",function(b,c){return A56(this,b,c);},"ez",function(b,c,d){return A4N(this,b,c,d);},"eQ",function(b,c,d,e){return AQA(this,b,c,d,e);},"dQ",function(b){return A5U(this,b);}],YU,0,GY,
[],4,0,0,["o7",function(b){return AQG(this,b);},"E7",function(b,c){return AWe(this,b,c);}],YV,0,GY,[],4,0,0,["o7",function(b){return A6q(this,b);},"E7",function(b,c){return AX8(this,b,c);}],AFj,0,C,[],0,0,0,0,AAP,0,C,[],0,0,0,0,OU,0,Bq,[],0,0,0,["b3",function(){return AJ8(this);}],Om,0,Bq,[],0,0,0,["b3",function(){return AKO(this);}],AFf,0,Bq,[],0,0,0,["b3",function(){return A6g(this);}],AFJ,0,Bq,[],0,0,0,["b3",function(){return AXf(this);}],AFM,0,Bq,[],0,0,0,["b3",function(){return ARS(this);}],OP,0,Bq,[],
0,0,0,["b3",function(){return ABJ(this);}],Ng,0,OP,[],0,0,0,["b3",function(){return ACN(this);}],AHl,0,Bq,[],0,0,0,["b3",function(){return A2N(this);}],PU,0,Ng,[],0,0,0,["b3",function(){return AHy(this);}],AKl,0,PU,[],0,0,0,["b3",function(){return AUC(this);}],ADU,0,Bq,[],0,0,0,["b3",function(){return A1j(this);}],AB_,0,Bq,[],0,0,0,["b3",function(){return AUv(this);}],AIQ,0,Bq,[],0,0,0,["b3",function(){return AYc(this);}],AM5,0,Bq,[],0,0,0,["b3",function(){return A4W(this);}],AHo,0,Bq,[],0,0,0,["b3",function()
{return AZa(this);}],AMo,0,Bq,[],0,0,0,["b3",function(){return AS8(this);}],AE2,0,Bq,[],0,0,0,["b3",function(){return AWj(this);}],AF4,0,Bq,[],0,0,0,["b3",function(){return A1h(this);}],ABa,0,Bq,[],0,0,0,["b3",function(){return ARx(this);}]]);
$rt_metadata([AHZ,0,Bq,[],0,0,0,["b3",function(){return A7K(this);}],AMw,0,Bq,[],0,0,0,["b3",function(){return AY5(this);}],AFy,0,Bq,[],0,0,0,["b3",function(){return ATS(this);}],AJv,0,Bq,[],0,0,0,["b3",function(){return ARC(this);}],AD3,0,Bq,[],0,0,0,["b3",function(){return A2t(this);}],AGP,0,Bq,[],0,0,0,["b3",function(){return A3D(this);}],AMG,0,Bq,[],0,0,0,["b3",function(){return AXt(this);}],AC4,0,Bq,[],0,0,0,["b3",function(){return AVW(this);}],ACD,0,Bq,[],0,0,0,["b3",function(){return AU2(this);}],AHn,
0,Bq,[],0,0,0,["b3",function(){return A6c(this);}],Mb,0,Bq,[],0,0,0,["b3",function(){return ADV(this);}],ANj,0,Mb,[],0,0,0,["b3",function(){return AUR(this);}],AKq,0,OU,[],0,0,0,["b3",function(){return A0j(this);}],ACv,0,Om,[],0,0,0,["b3",function(){return ASI(this);}],AIV,0,Bq,[],0,0,0,["b3",function(){return AT7(this);}],AJg,0,Bq,[],0,0,0,["b3",function(){return AXZ(this);}],AKe,0,Bq,[],0,0,0,["b3",function(){return A2e(this);}],AKm,0,Bq,[],0,0,0,["b3",function(){return AOS(this);}],VO,0,C,[],0,3,0,0,RO,0,
Dn,[],0,0,0,0,Uy,"AbstractCharClass$1",5,Bk,[],0,0,0,["T",function(b){return ARY(this,b);}],Ux,"AbstractCharClass$2",5,Bk,[],0,0,0,["T",function(b){return AZw(this,b);}],Q5,"CharClass$18",5,Bk,[],0,0,0,["T",function(b){return AT0(this,b);},"eM",function(){return A2A(this);}],Wd,0,Bk,[],0,0,0,["T",function(b){return A58(this,b);}],Wb,0,Bk,[],0,0,0,["T",function(b){return AWz(this,b);}],Wc,0,Bk,[],0,0,0,["T",function(b){return A3Z(this,b);}],Wg,0,Bk,[],0,0,0,["T",function(b){return A1G(this,b);}],Wi,0,Bk,[],0,
0,0,["T",function(b){return AON(this,b);}],We,0,Bk,[],0,0,0,["T",function(b){return ASF(this,b);}],Wf,0,Bk,[],0,0,0,["T",function(b){return AUk(this,b);}],Wj,0,Bk,[],0,0,0,["T",function(b){return AXD(this,b);}],Wk,0,Bk,[],0,0,0,["T",function(b){return A1b(this,b);}],Q4,0,Bk,[],0,0,0,["T",function(b){return A8C(this,b);}],Rl,0,Bk,[],0,0,0,["T",function(b){return ASH(this,b);}],Q2,0,Bk,[],0,0,0,["T",function(b){return ARa(this,b);}],Q3,0,Bk,[],0,0,0,["T",function(b){return A2n(this,b);}],Q8,0,Bk,[],0,0,0,["T",
function(b){return ATs(this,b);}],Q1,0,Bk,[],0,0,0,["T",function(b){return A61(this,b);}],Q6,0,Bk,[],0,0,0,["T",function(b){return A0w(this,b);}],Q7,0,Bk,[],0,0,0,["T",function(b){return AVO(this,b);}],W8,0,C,[PO],0,3,0,["KT",function(){return AUX(this);}],ALt,0,Fp,[],1,3,0,0,Qj,0,JG,[],0,0,0,["ez",function(b,c,d){return ASb(this,b,c,d);},"eQ",function(b,c,d,e){return A8n(this,b,c,d,e);},"lU",function(){return AQ1(this);}],AHs,0,C,[Fn],0,0,0,0,Nw,0,C,[],3,3,0,0,XM,0,C,[Nw],4,3,0,0,KE,0,C,[Ci,Dk],0,3,0,0,ZR,
0,JS,[],0,3,0,["yU",function(){return ASL(this);},"Fx",function(b){return AQ4(this,b);},"up",function(b,c,d){return A1J(this,b,c,d);},"zT",function(b){return AWQ(this,b);}],X1,"AbstractCharClass$LazyJavaLowerCase$1",5,Bk,[],0,0,0,["T",function(b){return AXN(this,b);}],Vz,"AbstractCharClass$LazyJavaUpperCase$1",5,Bk,[],0,0,0,["T",function(b){return A0h(this,b);}]]);
$rt_metadata([Ss,"AbstractCharClass$LazyJavaWhitespace$1",5,Bk,[],0,0,0,["T",function(b){return API(this,b);}],Sr,"AbstractCharClass$LazyJavaMirrored$1",5,Bk,[],0,0,0,["T",function(b){return A2d(this,b);}],UI,"AbstractCharClass$LazyJavaDefined$1",5,Bk,[],0,0,0,["T",function(b){return ATh(this,b);}],Wu,"AbstractCharClass$LazyJavaDigit$1",5,Bk,[],0,0,0,["T",function(b){return A7r(this,b);}],QP,"AbstractCharClass$LazyJavaIdentifierIgnorable$1",5,Bk,[],0,0,0,["T",function(b){return AVt(this,b);}],Xk,"AbstractCharClass$LazyJavaISOControl$1",
5,Bk,[],0,0,0,["T",function(b){return AWn(this,b);}],Vv,"AbstractCharClass$LazyJavaJavaIdentifierPart$1",5,Bk,[],0,0,0,["T",function(b){return A8c(this,b);}],Vy,"AbstractCharClass$LazyJavaJavaIdentifierStart$1",5,Bk,[],0,0,0,["T",function(b){return ARq(this,b);}],QG,"AbstractCharClass$LazyJavaLetter$1",5,Bk,[],0,0,0,["T",function(b){return AXV(this,b);}],WL,"AbstractCharClass$LazyJavaLetterOrDigit$1",5,Bk,[],0,0,0,["T",function(b){return A4d(this,b);}],WR,"AbstractCharClass$LazyJavaSpaceChar$1",5,Bk,[],0,0,
0,["T",function(b){return A5M(this,b);}],Yn,"AbstractCharClass$LazyJavaTitleCase$1",5,Bk,[],0,0,0,["T",function(b){return A7i(this,b);}],XN,"AbstractCharClass$LazyJavaUnicodeIdentifierPart$1",5,Bk,[],0,0,0,["T",function(b){return AYi(this,b);}],Qc,"AbstractCharClass$LazyJavaUnicodeIdentifierStart$1",5,Bk,[],0,0,0,["T",function(b){return ARi(this,b);}],NH,"UnicodeCategory",5,Bk,[],0,0,0,["T",function(b){return AVu(this,b);}],XD,"UnicodeCategoryScope",5,NH,[],0,0,0,["T",function(b){return A6D(this,b);}],Rf,0,
Fh,[],4,0,0,0,Rd,0,Fu,[],4,0,0,["mI",function(b){return A7W(this,b);},"eW",function(){return A4w(this);}],YR,0,C,[Nw],0,0,0,0,Re,0,Dn,[],4,0,0,0,TY,0,Dn,[],0,0,0,0,Rg,0,C,[Fn],4,0,0,0,TT,0,G5,[Fn],0,0,0,0,UT,0,C,[],3,3,0,0,Qp,0,C,[UT],0,0,0,0,UP,0,C,[HO,Ci],0,3,0,0,AIt,0,C,[],0,0,0,0]);
function $rt_array(cls,data){this.cr=null;this.$id$=0;this.type=cls;this.data=data;this.constructor=$rt_arraycls(cls);}$rt_array.prototype=Object.create(($rt_objcls()).prototype);$rt_array.prototype.toString=function(){var str="[";for(var i=0;i<this.data.length;++i){if(i>0){str+=", ";}str+=this.data[i].toString();}str+="]";return str;};$rt_setCloneMethod($rt_array.prototype,function(){var dataCopy;if('slice' in this.data){dataCopy=this.data.slice();}else {dataCopy=new this.data.constructor(this.data.length);for
(var i=0;i<dataCopy.length;++i){dataCopy[i]=this.data[i];}}return new $rt_array(this.type,dataCopy);});$rt_stringPool(["Can\'t enter monitor from another thread synchronously","@","0"," -------- starting minecraft -------- ","g","p","/saves/level1.dat","PeytonPlayz595","Indev-WebGL","","position:relative;","Native Browser Exception\n","----------------------------------\n","  Line: ","  Type: ","  Message: ","----------------------------------\n\n","null","Patter is null",": ","    at ","Caused by: ","  at ",
"Index out of bounds","String contains invalid digits: ","String contains digits out of radix ","The value is too big for int type: ","String is null or empty","Illegal radix: ","#version 300 es","/","UTF-8","overflow-x:hidden;overflow-y:hidden;","WebGL 2.0 is not supported in your browser (",")","\nError: World folder is locked!\n\nYou are already playing Minecraft in a different Window.\nClose all other Minecraft instances and reload","\nError: World folder could not be loaded!\n\n","mousedown","wheel","keyup",
"_minecraft_alpha.","Input array too big, the output array would be bigger (",") than the specified maximum size of ","yyyy-MM-dd_HH.mm.ss","NONE","ESCAPE","1","2","3","4","5","6","7","8","9","MINUS","EQUALS","BACK","TAB","Q","W","E","R","T","Y","U","I","O","P","LBRACKET","RBRACKET","RETURN","LCONTROL","A","S","D","F","G","H","J","K","L","SEMICOLON","APOSTROPHE","GRAVE","LSHIFT","BACKSLASH","Z","X","C","V","B","N","M","COMMA","PERIOD","SLASH","RSHIFT","MULTIPLY","LMENU","SPACE","CAPITAL","F1","F2","F3","F4",
"F5","F6","F7","F8","F9","F10","NUMLOCK","SCROLL","NUMPAD7","NUMPAD8","NUMPAD9","SUBTRACT","NUMPAD4","NUMPAD5","NUMPAD6","ADD","NUMPAD1","NUMPAD2","NUMPAD3","NUMPAD0","DECIMAL","F11","F12","F13","F14","F15","F16","F17","F18","KANA","F19","CONVERT","NOCONVERT","YEN","NUMPADEQUALS","CIRCUMFLEX","AT","COLON","UNDERLINE","KANJI","STOP","AX","UNLABELED","NUMPADENTER","RCONTROL","SECTION","NUMPADCOMMA","DIVIDE","SYSRQ","RMENU","FUNCTION","PAUSE","HOME","UP","PRIOR","LEFT","RIGHT","END","DOWN","NEXT","INSERT","DELETE",
"CLEAR","LMETA","RMETA","APPS","POWER","SLEEP","\n","Either src or dest is null","_net_peytonplayz585_minecraft_indev_IndexedDBFilesystem","Unknown Error","Initialization Failed","Can\'t compare "," to ","OPENED","LOCKED","ERROR","EAGPKG!!","invalid epk file","<file>"," end","invalid file hash for ","</file>","End of stream reached","Malformed UTF-8 sequence","matrix is not supported while recording display list use tessellator class instead","projection matrix stack overflow","texture matrix stack overflow",
"modelview matrix stack overflow","projection matrix stack underflow","texture matrix stack underflow","modelview matrix stack underflow","only GL_QUADS supported in a display list","vertex format inconsistent in display list","Timer hack thread","/default.png","FPS: ",", Chunk Updates: ","/terrain.png","anonymous","/char.png","http://www.minecraft.net/skin/",".png","/water.png","UTC","window.indexedDB was null or undefined","yee","charsetName is null","Should never been thrown","Stream closed","footer is not found",
"Unexpected end of ZLIB input stream","�","Replacement preconditions do not hold","Unable to allocate array size: ","lineSeparator must not contain base64 characters: [","]","Impossible modulus ","Strict decoding: Last encoded character (before the paddings if any) is a valid base 64 alphabet but not a possible encoding. Decoding requires at least two trailing 6-bit characters to create bytes.","Strict decoding: Last encoded character (before the paddings if any) is a valid base 64 alphabet but not a possible encoding. Expected the discarded bits from the character to be zero.",
"/dirt.png","main","en","CA","fr","zh","CN","FR","de","DE","it","IT","ja","JP","ko","KR","TW","GB","US","open error","path","/gui/items.png","New position "," is outside of range [0;","New limit ","The last float in dst "," is outside of array of size ","Length "," must be non-negative","Offset ","Slot "," is already occupied by "," when adding ","stone","wood","gravel","grass","cloth","sand","UTF Error","-","Capacity is negative: ","The last byte in dst ","The last byte in src ","lava","splash","smoke","flame",
"largesmoke","Large chest","Get resource: ","CONFLICT @ ","ERA=","YEAR=","MONTH=","WEEK_OF_YEAR=","WEEK_OF_MONTH=","DAY_OF_MONTH=","DAY_OF_YEAR=","DAY_OF_WEEK=","DAY_OF_WEEK_IN_MONTH=","AM_PM=","HOUR=","HOUR_OF_DAY","MINUTE=","SECOND=","MILLISECOND=","ZONE_OFFSET=","DST_OFFSET=","The last char in dst ","The last char in src "," is outside of string of size ","Start "," must be before end ","001","STRICT","LENIANT","BIG_ENDIAN","LITTLE_ENDIAN","GMT",":","00","Unknown zone type: ","Id must not be null","Unknown mode: ",
"Forward","Left","Back","Right","Jump","Inventory","Drop","Chat","Toggle fog","Save location","Load location","Music: ","OFF","ON","Sound: ","Invert mouse: ","Show FPS: ","Render distance: ","View bobbing: ","3d anaglyph: ","Difficulty: ","Limit framerate: ","music","sound","invertYMouse","showFrameRate","viewDistance","bobView","anaglyph3d","limitFramerate","difficulty","key_","FAR","NORMAL","SHORT","TINY","Peaceful","Easy","Normal","Hard","%clamp%","%blur%","!!","0123456789abcdef","C: ",". F: ",", O: ","E: ",
". B: ",", I: ","/terrain/sun.png","/terrain/moon.png","/clouds.png","/grass.png","bubble","explode","The level is corrupt!",". L: ","/particles.png","/gui/gui.png","/gui/icons.png","Minecraft Indev (Made by PeytonPlayz585)","P: ",". T: ","Free memory: ","% of ","MB","Allocated memory: ","% (","MB)","Made by PeytonPlayz585!","Generate new level...","Load level..","Play tutorial level","Options...","/gui/logo.png","Fuck Mojang, Distribute to everyone!","need dictionary","unknown compression method","unknown header flags set",
"incorrect data check","incorrect length check","incorrect header check","invalid window size","bad extra field length","header crc mismatch","The last int in src ","player-x","player-y","player-z","id","Pos","Motion","Rotation","FallDistance","Fire","Air","Health","HurtTime","DeathTime","AttackTime","Score","Slot","LocalPlayer","Count","Damage","Crafting","/gui/inventory.png","Wrong number of repetitions of X pattern at ","IGNORE","REPLACE","REPORT","/glsl/core.glsl","\n#define CC_a_color\n","#define CC_a_normal\n",
"#define CC_a_texture0\n","#define CC_lighting\n","#define CC_fog\n","#define CC_alphatest\n","#define CC_unit0\n","\n#define CC_VERT\n","\n\n","\n[/glsl/core.glsl][CC_VERT] ","broken shader file","\n#define CC_FRAG\n","\n[/glsl/core.glsl][CC_FRAG] ","a_position","a_texture0","a_color","a_normal","\n[LINKER] ","matrix_m","matrix_p","matrix_t","colorUniform","normalUniform","light0Pos","light1Pos","fogColor","fogMode","fogStart","fogEnd","fogDensity","fogPremultiply","alphaTestF","tex0","texCoordV0","OW KNOWS!",
"%clamp%/shadow.png","Loading level","Reading..","About","Map","Environment","Entities","Width","Length","Height","Preparing level..","Spawn","Author","Name","CreatedOn","CloudColor","SkyColor","FogColor","SkyBrightness","CloudHeight","SurroundingGroundHeight","SurroundingWaterHeight","SurroundingWaterType","TimeOfDay","Blocks","Data","Preparing entities..","Skipping unknown entity id \"","\"","Error reading entity","TileEntities","Chest","Furnace","Skipping unknown tile entity id \"","Error reading tileentity",
"Pig","Sheep","Creeper","Skeleton","Spider","Zombie","Giant","/mob/zombie.png","Item","Painting","SurroundingGroundType","MinecraftLevel","Action must be non-null","array size does not equal image size","Index ","OMG ERROR!","Game over!","Score: &e","invalid stored block lengths","invalid block type","too many length or distance symbols","invalid bit length repeat","Save level..","Back to game","Save level","Game menu","oversubscribed dynamic bit lengths tree","incomplete dynamic bit lengths tree","oversubscribed distance tree",
"incomplete distance tree","empty distance tree with lengths","oversubscribed literal/length tree","incomplete literal/length tree","invalid distance code","invalid literal/length code","NOOOOOO!","FILE","DIRECTORY","FALSE","Age","/gui/furnace.png","/gui/crafting.png","/gui/container.png","newAction must be non-null","/armor/","_","chain","iron","diamond","gold","/mob/spider.png","/mob/spider_eyes.png","/mob/pig.png","/mob/sheep.png","Sheared","/mob/sheep_fur.png","/mob/creeper.png","/mob/skeleton.png","Dir",
"Motive","TileX","TileY","TileZ","/art/kz.png","xTile","yTile","zTile","inTile","shake","inGround","Arrow","/item/arrows.png","Fuse","PrimedTnt","Items","BurnTime","CookTime","Lit: ","GMT+00:00","Options","Controls...","Done","Controls","Inland","Island","Floating","Flat","Square","Long","Deep","Small","Huge","Hell","Paradise","Woods","Type: ","Shape:","Size: ","Theme: ","Create","Cancel","Shape: ","Generate new level","Load level",".mclevel","Getting level list..","http://","/listmaps.jsp?user=","Failed to load levels",
";","---","Load file...","Save file...","Enter level name:","Kebab","Aztec","Alban","Aztec2","Bomb","Plant","Wasteland","Pool","Courbet","Sea","Sunset","Wanderer","Match","Bust","Stage","Void","SkullAndRoses","Fighters","Pointer","Malformed input of length ","Unmappable characters of length ","#","###","# #","##","X#X","#X#"," # ","A "," B"," recipes","> "," <","XXX","XX","X#"," #"," #X","# X","X X","Directory is read-only","File "," already exists","ftp","http","https","unknown protocol(",")://","?","Generating level",
"Carving..","Raising..","Eroding..","Coal: ",", Iron: ",", Gold: ",", Diamond: ","Melting..","Watering..","Soiling..","Assembling..","Growing..","Building..","Planting..","Lighting..","Spawning..","A Nice World","Wrong number of phases! Wanted ",", got ","Failed to set next phase!","Diagonal flood!?","Save","abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 ,.:-_\'*!\"#%/()=+?[]{}<>","Invalid file name","//","////","String index out of bounds: ","/./","/.","/../","/..","GET","HEAD","OPTIONS","POST",
"PUT","TRACE","Unsupported protocol: ","HTTP status: "," ","Directory does not exist","Is","In",", ","{",",","}","Lower","Upper","ASCII","Alpha","Digit","Alnum","Punct","Graph","Print","Blank","Cntrl","XDigit","javaLowerCase","javaUpperCase","javaWhitespace","javaMirrored","javaDefined","javaDigit","javaIdentifierIgnorable","javaISOControl","javaJavaIdentifierPart","javaJavaIdentifierStart","javaLetter","javaLetterOrDigit","javaSpaceChar","javaTitleCase","javaUnicodeIdentifierPart","javaUnicodeIdentifierStart",
"Space","w","s","d","BasicLatin","Latin-1Supplement","LatinExtended-A","LatinExtended-B","IPAExtensions","SpacingModifierLetters","CombiningDiacriticalMarks","Greek","Cyrillic","CyrillicSupplement","Armenian","Hebrew","Arabic","Syriac","ArabicSupplement","Thaana","Devanagari","Bengali","Gurmukhi","Gujarati","Oriya","Tamil","Telugu","Kannada","Malayalam","Sinhala","Thai","Lao","Tibetan","Myanmar","Georgian","HangulJamo","Ethiopic","EthiopicSupplement","Cherokee","UnifiedCanadianAboriginalSyllabics","Ogham","Runic",
"Tagalog","Hanunoo","Buhid","Tagbanwa","Khmer","Mongolian","Limbu","TaiLe","NewTaiLue","KhmerSymbols","Buginese","PhoneticExtensions","PhoneticExtensionsSupplement","CombiningDiacriticalMarksSupplement","LatinExtendedAdditional","GreekExtended","GeneralPunctuation","SuperscriptsandSubscripts","CurrencySymbols","CombiningMarksforSymbols","LetterlikeSymbols","NumberForms","Arrows","MathematicalOperators","MiscellaneousTechnical","ControlPictures","OpticalCharacterRecognition","EnclosedAlphanumerics","BoxDrawing",
"BlockElements","GeometricShapes","MiscellaneousSymbols","Dingbats","MiscellaneousMathematicalSymbols-A","SupplementalArrows-A","BraillePatterns","SupplementalArrows-B","MiscellaneousMathematicalSymbols-B","SupplementalMathematicalOperators","MiscellaneousSymbolsandArrows","Glagolitic","Coptic","GeorgianSupplement","Tifinagh","EthiopicExtended","SupplementalPunctuation","CJKRadicalsSupplement","KangxiRadicals","IdeographicDescriptionCharacters","CJKSymbolsandPunctuation","Hiragana","Katakana","Bopomofo","HangulCompatibilityJamo",
"Kanbun","BopomofoExtended","CJKStrokes","KatakanaPhoneticExtensions","EnclosedCJKLettersandMonths","CJKCompatibility","CJKUnifiedIdeographsExtensionA","YijingHexagramSymbols","CJKUnifiedIdeographs","YiSyllables","YiRadicals","ModifierToneLetters","SylotiNagri","HangulSyllables","HighSurrogates","HighPrivateUseSurrogates","LowSurrogates","PrivateUseArea","CJKCompatibilityIdeographs","AlphabeticPresentationForms","ArabicPresentationForms-A","VariationSelectors","VerticalForms","CombiningHalfMarks","CJKCompatibilityForms",
"SmallFormVariants","ArabicPresentationForms-B","HalfwidthandFullwidthForms","all","Specials","Cn","IsL","Lu","Ll","Lt","Lm","Lo","IsM","Mn","Me","Mc","Nd","Nl","No","IsZ","Zs","Zl","Zp","IsC","Cc","Cf","Co","Cs","IsP","Pd","Ps","Pe","Pc","Po","IsS","Sm","Sc","Sk","So","Pi","Pf","\r\n","Can\'t create file "," since parent path denotes regular file"]);
BC.prototype.toString=function(){return $rt_ustr(this);};
BC.prototype.valueOf=BC.prototype.toString;C.prototype.toString=function(){return $rt_ustr(AQx(this));};
C.prototype.__teavm_class__=function(){return $dbg_class(this);};
function Long_eq(a,b){return a.hi===b.hi&&a.lo===b.lo;}function Long_ne(a,b){return a.hi!==b.hi||a.lo!==b.lo;}function Long_gt(a,b){if(a.hi<b.hi){return false;}if(a.hi>b.hi){return true;}var x=a.lo>>>1;var y=b.lo>>>1;if(x!==y){return x>y;}return (a.lo&1)>(b.lo&1);}function Long_ge(a,b){if(a.hi<b.hi){return false;}if(a.hi>b.hi){return true;}var x=a.lo>>>1;var y=b.lo>>>1;if(x!==y){return x>=y;}return (a.lo&1)>=(b.lo&1);}function Long_lt(a,b){if(a.hi>b.hi){return false;}if(a.hi<b.hi){return true;}var x=a.lo>>>
1;var y=b.lo>>>1;if(x!==y){return x<y;}return (a.lo&1)<(b.lo&1);}function Long_le(a,b){if(a.hi>b.hi){return false;}if(a.hi<b.hi){return true;}var x=a.lo>>>1;var y=b.lo>>>1;if(x!==y){return x<=y;}return (a.lo&1)<=(b.lo&1);}function Long_add(a,b){if(a.hi===a.lo>>31&&b.hi===b.lo>>31){return Long_fromNumber(a.lo+b.lo);}else if(Math.abs(a.hi)<Long_MAX_NORMAL&&Math.abs(b.hi)<Long_MAX_NORMAL){return Long_fromNumber(Long_toNumber(a)+Long_toNumber(b));}var a_lolo=a.lo&0xFFFF;var a_lohi=a.lo>>>16;var a_hilo=a.hi&0xFFFF;var a_hihi
=a.hi>>>16;var b_lolo=b.lo&0xFFFF;var b_lohi=b.lo>>>16;var b_hilo=b.hi&0xFFFF;var b_hihi=b.hi>>>16;var lolo=a_lolo+b_lolo|0;var lohi=a_lohi+b_lohi+(lolo>>16)|0;var hilo=a_hilo+b_hilo+(lohi>>16)|0;var hihi=a_hihi+b_hihi+(hilo>>16)|0;return new Long(lolo&0xFFFF|(lohi&0xFFFF)<<16,hilo&0xFFFF|(hihi&0xFFFF)<<16);}function Long_inc(a){var lo=a.lo+1|0;var hi=a.hi;if(lo===0){hi=hi+1|0;}return new Long(lo,hi);}function Long_dec(a){var lo=a.lo -1|0;var hi=a.hi;if(lo=== -1){hi=hi -1|0;}return new Long(lo,hi);}function Long_neg(a)
{return Long_inc(new Long(a.lo^0xFFFFFFFF,a.hi^0xFFFFFFFF));}function Long_sub(a,b){if(a.hi===a.lo>>31&&b.hi===b.lo>>31){return Long_fromNumber(a.lo -b.lo);}var a_lolo=a.lo&0xFFFF;var a_lohi=a.lo>>>16;var a_hilo=a.hi&0xFFFF;var a_hihi=a.hi>>>16;var b_lolo=b.lo&0xFFFF;var b_lohi=b.lo>>>16;var b_hilo=b.hi&0xFFFF;var b_hihi=b.hi>>>16;var lolo=a_lolo -b_lolo|0;var lohi=a_lohi -b_lohi+(lolo>>16)|0;var hilo=a_hilo -b_hilo+(lohi>>16)|0;var hihi=a_hihi -b_hihi+(hilo>>16)|0;return new Long(lolo&0xFFFF|(lohi&0xFFFF)<<
16,hilo&0xFFFF|(hihi&0xFFFF)<<16);}function Long_compare(a,b){var r=a.hi -b.hi;if(r!==0){return r;}r=(a.lo>>>1) -(b.lo>>>1);if(r!==0){return r;}return (a.lo&1) -(b.lo&1);}function Long_isPositive(a){return (a.hi&0x80000000)===0;}function Long_isNegative(a){return (a.hi&0x80000000)!==0;}function Long_mul(a,b){var positive=Long_isNegative(a)===Long_isNegative(b);if(Long_isNegative(a)){a=Long_neg(a);}if(Long_isNegative(b)){b=Long_neg(b);}var a_lolo=a.lo&0xFFFF;var a_lohi=a.lo>>>16;var a_hilo=a.hi&0xFFFF;var a_hihi
=a.hi>>>16;var b_lolo=b.lo&0xFFFF;var b_lohi=b.lo>>>16;var b_hilo=b.hi&0xFFFF;var b_hihi=b.hi>>>16;var lolo=0;var lohi=0;var hilo=0;var hihi=0;lolo=a_lolo*b_lolo|0;lohi=lolo>>>16;lohi=(lohi&0xFFFF)+a_lohi*b_lolo|0;hilo=hilo+(lohi>>>16)|0;lohi=(lohi&0xFFFF)+a_lolo*b_lohi|0;hilo=hilo+(lohi>>>16)|0;hihi=hilo>>>16;hilo=(hilo&0xFFFF)+a_hilo*b_lolo|0;hihi=hihi+(hilo>>>16)|0;hilo=(hilo&0xFFFF)+a_lohi*b_lohi|0;hihi=hihi+(hilo>>>16)|0;hilo=(hilo&0xFFFF)+a_lolo*b_hilo|0;hihi=hihi+(hilo>>>16)|0;hihi=hihi+a_hihi*b_lolo
+a_hilo*b_lohi+a_lohi*b_hilo+a_lolo*b_hihi|0;var result=new Long(lolo&0xFFFF|lohi<<16,hilo&0xFFFF|hihi<<16);return positive?result:Long_neg(result);}function Long_div(a,b){if(Math.abs(a.hi)<Long_MAX_NORMAL&&Math.abs(b.hi)<Long_MAX_NORMAL){return Long_fromNumber(Long_toNumber(a)/Long_toNumber(b));}return (Long_divRem(a,b))[0];}function Long_udiv(a,b){if(a.hi>=0&&a.hi<Long_MAX_NORMAL&&b.hi>=0&&b.hi<Long_MAX_NORMAL){return Long_fromNumber(Long_toNumber(a)/Long_toNumber(b));}return (Long_udivRem(a,b))[0];}function Long_rem(a,
b){if(Math.abs(a.hi)<Long_MAX_NORMAL&&Math.abs(b.hi)<Long_MAX_NORMAL){return Long_fromNumber(Long_toNumber(a)%Long_toNumber(b));}return (Long_divRem(a,b))[1];}function Long_urem(a,b){if(a.hi>=0&&a.hi<Long_MAX_NORMAL&&b.hi>=0&&b.hi<Long_MAX_NORMAL){return Long_fromNumber(Long_toNumber(a)/Long_toNumber(b));}return (Long_udivRem(a,b))[1];}function Long_divRem(a,b){if(b.lo===0&&b.hi===0){throw new Error("Division by zero");}var positive=Long_isNegative(a)===Long_isNegative(b);if(Long_isNegative(a)){a=Long_neg(a);}if
(Long_isNegative(b)){b=Long_neg(b);}a=new LongInt(a.lo,a.hi,0);b=new LongInt(b.lo,b.hi,0);var q=LongInt_div(a,b);a=new Long(a.lo,a.hi);q=new Long(q.lo,q.hi);return positive?[q,a]:[Long_neg(q),Long_neg(a)];}function Long_udivRem(a,b){if(b.lo===0&&b.hi===0){throw new Error("Division by zero");}a=new LongInt(a.lo,a.hi,0);b=new LongInt(b.lo,b.hi,0);var q=LongInt_div(a,b);a=new Long(a.lo,a.hi);q=new Long(q.lo,q.hi);return [q,a];}function Long_shiftLeft16(a){return new Long(a.lo<<16,a.lo>>>16|a.hi<<16);}function Long_shiftRight16(a)
{return new Long(a.lo>>>16|a.hi<<16,a.hi>>>16);}function Long_and(a,b){return new Long(a.lo&b.lo,a.hi&b.hi);}function Long_or(a,b){return new Long(a.lo|b.lo,a.hi|b.hi);}function Long_xor(a,b){return new Long(a.lo^b.lo,a.hi^b.hi);}function Long_shl(a,b){b&=63;if(b===0){return a;}else if(b<32){return new Long(a.lo<<b,a.lo>>>32 -b|a.hi<<b);}else if(b===32){return new Long(0,a.lo);}else {return new Long(0,a.lo<<b -32);}}function Long_shr(a,b){b&=63;if(b===0){return a;}else if(b<32){return new Long(a.lo>>>b|a.hi
<<32 -b,a.hi>>b);}else if(b===32){return new Long(a.hi,a.hi>>31);}else {return new Long(a.hi>>b -32,a.hi>>31);}}function Long_shru(a,b){b&=63;if(b===0){return a;}else if(b<32){return new Long(a.lo>>>b|a.hi<<32 -b,a.hi>>>b);}else if(b===32){return new Long(a.hi,0);}else {return new Long(a.hi>>>b -32,0);}}function LongInt(lo,hi,sup){this.lo=lo;this.hi=hi;this.sup=sup;}function LongInt_mul(a,b){var a_lolo=(a.lo&0xFFFF)*b|0;var a_lohi=(a.lo>>>16)*b|0;var a_hilo=(a.hi&0xFFFF)*b|0;var a_hihi=(a.hi>>>16)*b|0;var sup
=a.sup*b|0;a_lohi=a_lohi+(a_lolo>>>16)|0;a_hilo=a_hilo+(a_lohi>>>16)|0;a_hihi=a_hihi+(a_hilo>>>16)|0;sup=sup+(a_hihi>>>16)|0;a.lo=a_lolo&0xFFFF|a_lohi<<16;a.hi=a_hilo&0xFFFF|a_hihi<<16;a.sup=sup&0xFFFF;}function LongInt_sub(a,b){var a_lolo=a.lo&0xFFFF;var a_lohi=a.lo>>>16;var a_hilo=a.hi&0xFFFF;var a_hihi=a.hi>>>16;var b_lolo=b.lo&0xFFFF;var b_lohi=b.lo>>>16;var b_hilo=b.hi&0xFFFF;var b_hihi=b.hi>>>16;a_lolo=a_lolo -b_lolo|0;a_lohi=a_lohi -b_lohi+(a_lolo>>16)|0;a_hilo=a_hilo -b_hilo+(a_lohi>>16)|0;a_hihi=a_hihi -
b_hihi+(a_hilo>>16)|0;var sup=a.sup -b.sup+(a_hihi>>16)|0;a.lo=a_lolo&0xFFFF|a_lohi<<16;a.hi=a_hilo&0xFFFF|a_hihi<<16;a.sup=sup;}function LongInt_add(a,b){var a_lolo=a.lo&0xFFFF;var a_lohi=a.lo>>>16;var a_hilo=a.hi&0xFFFF;var a_hihi=a.hi>>>16;var b_lolo=b.lo&0xFFFF;var b_lohi=b.lo>>>16;var b_hilo=b.hi&0xFFFF;var b_hihi=b.hi>>>16;a_lolo=a_lolo+b_lolo|0;a_lohi=a_lohi+b_lohi+(a_lolo>>16)|0;a_hilo=a_hilo+b_hilo+(a_lohi>>16)|0;a_hihi=a_hihi+b_hihi+(a_hilo>>16)|0;var sup=a.sup+b.sup+(a_hihi>>16)|0;a.lo=a_lolo&0xFFFF
|a_lohi<<16;a.hi=a_hilo&0xFFFF|a_hihi<<16;a.sup=sup;}function LongInt_inc(a){a.lo=a.lo+1|0;if(a.lo===0){a.hi=a.hi+1|0;if(a.hi===0){a.sup=a.sup+1&0xFFFF;}}}function LongInt_dec(a){a.lo=a.lo -1|0;if(a.lo=== -1){a.hi=a.hi -1|0;if(a.hi=== -1){a.sup=a.sup -1&0xFFFF;}}}function LongInt_ucompare(a,b){var r=a.sup -b.sup;if(r!==0){return r;}r=(a.hi>>>1) -(b.hi>>>1);if(r!==0){return r;}r=(a.hi&1) -(b.hi&1);if(r!==0){return r;}r=(a.lo>>>1) -(b.lo>>>1);if(r!==0){return r;}return (a.lo&1) -(b.lo&1);}function LongInt_numOfLeadingZeroBits(a)
{var n=0;var d=16;while(d>0){if(a>>>d!==0){a>>>=d;n=n+d|0;}d=d/2|0;}return 31 -n;}function LongInt_shl(a,b){if(b===0){return;}if(b<32){a.sup=(a.hi>>>32 -b|a.sup<<b)&0xFFFF;a.hi=a.lo>>>32 -b|a.hi<<b;a.lo<<=b;}else if(b===32){a.sup=a.hi&0xFFFF;a.hi=a.lo;a.lo=0;}else if(b<64){a.sup=(a.lo>>>64 -b|a.hi<<b -32)&0xFFFF;a.hi=a.lo<<b;a.lo=0;}else if(b===64){a.sup=a.lo&0xFFFF;a.hi=0;a.lo=0;}else {a.sup=a.lo<<b -64&0xFFFF;a.hi=0;a.lo=0;}}function LongInt_shr(a,b){if(b===0){return;}if(b===32){a.lo=a.hi;a.hi=a.sup;a.sup
=0;}else if(b<32){a.lo=a.lo>>>b|a.hi<<32 -b;a.hi=a.hi>>>b|a.sup<<32 -b;a.sup>>>=b;}else if(b===64){a.lo=a.sup;a.hi=0;a.sup=0;}else if(b<64){a.lo=a.hi>>>b -32|a.sup<<64 -b;a.hi=a.sup>>>b -32;a.sup=0;}else {a.lo=a.sup>>>b -64;a.hi=0;a.sup=0;}}function LongInt_copy(a){return new LongInt(a.lo,a.hi,a.sup);}function LongInt_div(a,b){var bits=b.hi!==0?LongInt_numOfLeadingZeroBits(b.hi):LongInt_numOfLeadingZeroBits(b.lo)+32;var sz=1+(bits/16|0);var dividentBits=bits%16;LongInt_shl(b,bits);LongInt_shl(a,dividentBits);var q
=new LongInt(0,0,0);while(sz-->0){LongInt_shl(q,16);var digitA=(a.hi>>>16)+0x10000*a.sup;var digitB=b.hi>>>16;var digit=digitA/digitB|0;var t=LongInt_copy(b);LongInt_mul(t,digit);if(LongInt_ucompare(t,a)>=0){while(LongInt_ucompare(t,a)>0){LongInt_sub(t,b); --digit;}}else {while(true){var nextT=LongInt_copy(t);LongInt_add(nextT,b);if(LongInt_ucompare(nextT,a)>0){break;}t=nextT;++digit;}}LongInt_sub(a,t);q.lo|=digit;LongInt_shl(a,16);}LongInt_shr(a,bits+16);return q;}function TeaVMThread(runner){this.status=3;this.stack
=[];this.suspendCallback=null;this.runner=runner;this.attribute=null;this.completeCallback=null;}TeaVMThread.prototype.push=function(){for(var i=0;i<arguments.length;++i){this.stack.push(arguments[i]);}return this;};TeaVMThread.prototype.s=TeaVMThread.prototype.push;TeaVMThread.prototype.pop=function(){return this.stack.pop();};TeaVMThread.prototype.l=TeaVMThread.prototype.pop;TeaVMThread.prototype.isResuming=function(){return this.status===2;};TeaVMThread.prototype.isSuspending=function(){return this.status
===1;};TeaVMThread.prototype.suspend=function(callback){this.suspendCallback=callback;this.status=1;};TeaVMThread.prototype.start=function(callback){if(this.status!==3){throw new Error("Thread already started");}if($rt_currentNativeThread!==null){throw new Error("Another thread is running");}this.status=0;this.completeCallback=callback?callback:function(result){if(result instanceof Error){throw result;}};this.run();};TeaVMThread.prototype.resume=function(){if($rt_currentNativeThread!==null){throw new Error("Another thread is running");}this.status
=2;this.run();};TeaVMThread.prototype.run=function(){$rt_currentNativeThread=this;var result;try {result=this.runner();}catch(e){result=e;}finally {$rt_currentNativeThread=null;}if(this.suspendCallback!==null){var self=this;var callback=this.suspendCallback;this.suspendCallback=null;callback(function(){self.resume();});}else if(this.status===0){this.completeCallback(result);}};function $rt_suspending(){var thread=$rt_nativeThread();return thread!=null&&thread.isSuspending();}function $rt_resuming(){var thread
=$rt_nativeThread();return thread!=null&&thread.isResuming();}function $rt_suspend(callback){var nativeThread=$rt_nativeThread();if(nativeThread===null){throw new Error("Suspension point reached from non-threading context (perhaps, from native JS method).");}return nativeThread.suspend(callback);}function $rt_startThread(runner,callback){(new TeaVMThread(runner)).start(callback);}var $rt_currentNativeThread=null;function $rt_nativeThread(){return $rt_currentNativeThread;}function $rt_invalidPointer(){throw new Error("Invalid recorded state");}main
=$rt_mainStarter(ADz);
(function(){var c;c=AA3.prototype;c.dispatchEvent=c.Nr;c.addEventListener=c.Yc;c.removeEventListener=c.ZT;c.getLength=c.Vx;c.get=c.SU;c.addEventListener=c.T8;c.removeEventListener=c.O$;c=ALM.prototype;c.handleEvent=c.gI;c=ALP.prototype;c.handleEvent=c.gI;c=ALQ.prototype;c.handleEvent=c.gI;c=ALN.prototype;c.handleEvent=c.gI;c=ALO.prototype;c.handleEvent=c.gI;c=ALS.prototype;c.handleEvent=c.gI;c=ALT.prototype;c.handleEvent=c.gI;c=ALR.prototype;c.handleEvent=c.gI;c=ALk.prototype;c.handleEvent=c.gI;c=ALj.prototype;c.handleEvent
=c.gI;c=Yp.prototype;c.stateChanged=c.KT;c=SS.prototype;c.handleEvent=c.jD;c=ST.prototype;c.handleEvent=c.jD;c=SU.prototype;c.handleEvent=c.jD;c=SV.prototype;c.handleEvent=c.gI;c=SX.prototype;c.handleEvent=c.jD;c=SY.prototype;c.handleEvent=c.jD;c=Yc.prototype;c.onTimer=c.Hf;c=Yb.prototype;c.handleEvent=c.gI;c=Ya.prototype;c.handleEvent=c.gI;c=T3.prototype;c.onTimer=c.Hf;c=ACO.prototype;c.getLength=c.Zd;c.get=c.RJ;c=Vs.prototype;c.handleEvent=c.jD;c=WH.prototype;c.handleEvent=c.jD;c=Vu.prototype;c.handleEvent
=c.jD;c=Vt.prototype;c.handleEvent=c.jD;c=W8.prototype;c.stateChanged=c.KT;})();
})();

//# sourceMappingURL=app.js.map