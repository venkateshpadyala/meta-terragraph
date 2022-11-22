"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1123],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=p(n),d=a,u=h["".concat(l,".").concat(d)]||h[d]||m[d]||o;return n?r.createElement(u,i(i({ref:t},c),{},{components:n})):r.createElement(u,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},3028:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={},i="Communication Protocol",s={unversionedId:"developer/Communication_Protocol",id:"developer/Communication_Protocol",title:"Communication Protocol",description:"This document describes the transport and serialization protocols used across",source:"@site/../docs/developer/Communication_Protocol.md",sourceDirName:"developer",slug:"/developer/Communication_Protocol",permalink:"/docs/developer/Communication_Protocol",draft:!1,editUrl:"https://github.com/terragraph/meta-terragraph/edit/main/docs/../docs/developer/Communication_Protocol.md",tags:[],version:"current",frontMatter:{},sidebar:"developerManualSidebar",previous:{title:"Overview",permalink:"/docs/developer/Overview"},next:{title:"Routing Layer",permalink:"/docs/developer/Routing_Layer"}},l={},p=[{value:"Transport Layer",id:"transport-layer",level:2},{value:"About ZeroMQ",id:"about-zeromq",level:3},{value:"Transport Architecture",id:"transport-architecture",level:3},{value:"Implementation Details",id:"implementation-details",level:3},{value:"Global Objects",id:"global-objects",level:3},{value:"Serialization Layer",id:"serialization-layer",level:2},{value:"About Thrift",id:"about-thrift",level:3},{value:"Thrift Interfaces",id:"thrift-interfaces",level:3},{value:"Implementation Details",id:"implementation-details-1",level:3},{value:"Resources",id:"resources",level:2}],c={toc:p};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"communication-protocol"},"Communication Protocol"),(0,a.kt)("p",null,"This document describes the transport and serialization protocols used across\nthe Terragraph E2E stack."),(0,a.kt)("h2",{id:"transport-layer"},"Transport Layer"),(0,a.kt)("h3",{id:"about-zeromq"},"About ZeroMQ"),(0,a.kt)("p",null,"Terragraph uses ",(0,a.kt)("a",{parentName:"p",href:"http://zeromq.org/"},"ZeroMQ")," (or ZMQ) for all inter- and intra-process message\npassing at the application layer. ZMQ offers a protocol-agnostic abstraction\nlayer for socket communication, as well as a framework for building lock-free\nconcurrent applications. E2E specifically uses ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/facebook/fbzmq"},"fbzmq"),", a C++ wrapper over\n",(0,a.kt)("inlineCode",{parentName:"p"},"libzmq"),", which provides some helpful abstractions: an async framework with\nevent loops (",(0,a.kt)("inlineCode",{parentName:"p"},"fbzmq::ZmqEventLoop"),") and timeouts (",(0,a.kt)("inlineCode",{parentName:"p"},"fbzmq::ZmqTimeout"),"), along\nwith methods to easily send and receive Thrift objects over sockets\n(",(0,a.kt)("inlineCode",{parentName:"p"},"fbzmq::Socket"),")."),(0,a.kt)("p",null,"Sockets are the core abstraction of ZMQ, and act as an ",(0,a.kt)("em",{parentName:"p"},"asynchronous message\nqueue"),' rather than a synchronous interface. From a programming perspective, this\nmeans that "sending" a message only enqueues it, with no indication as to\nwhether or when the message was actually delivered or dropped. Additionally,\nZMQ defines various ',(0,a.kt)("em",{parentName:"p"},"socket types")," which enable different ",(0,a.kt)("em",{parentName:"p"},"messaging patterns"),"\n(e.g. request-reply, publish-subscribe). Unlike conventional sockets,\nZMQ sockets allow ",(0,a.kt)("em",{parentName:"p"},"many-to-many")," connections depending on the socket type."),(0,a.kt)("p",null,"Specific behaviors of ZMQ sockets can be configured via a lengthy list of\n",(0,a.kt)("em",{parentName:"p"},"socket options"),". An important option is the ",(0,a.kt)("em",{parentName:"p"},"high watermark"),", which is a hard\nlimit on the size of the message queue; any further messages will either be\ndropped or result in blocking, depending on the socket type. This value is\nconfigured separately for outbound (",(0,a.kt)("inlineCode",{parentName:"p"},"ZMQ_SNDHWM"),") and inbound (",(0,a.kt)("inlineCode",{parentName:"p"},"ZMQ_RCVHWM"),')\nmessages, and the actual limit may be "60-70% lower" than the given value.'),(0,a.kt)("h3",{id:"transport-architecture"},"Transport Architecture"),(0,a.kt)("p",null,"E2E heavily uses the ZMQ ",(0,a.kt)("a",{parentName:"p",href:"http://rfc.zeromq.org/spec:28/REQREP"},"request-reply pattern"),", exposing router sockets\n(",(0,a.kt)("inlineCode",{parentName:"p"},"ZMQ_ROUTER"),") externally and using dealer sockets (",(0,a.kt)("inlineCode",{parentName:"p"},"ZMQ_DEALER"),") internally for\nintra-process communication. Both socket types are bidirectional. Router sockets\naccept multiple client connections from dealer sockets, each with a unique\n",(0,a.kt)("em",{parentName:"p"},"socket identity")," (the ",(0,a.kt)("inlineCode",{parentName:"p"},"ZMQ_IDENTITY")," socket option). For outbound messages in\nrouter sockets, the first ",(0,a.kt)("em",{parentName:"p"},"message part")," must contain the destination's\nidentity; the receiving socket uses this identity to route the message to the\nappropriate client, and will replace the first message part with the sender's\nidentity."),(0,a.kt)("p",null,'The controller exposes two external router sockets: an "app socket" and "minion\nsocket". These sockets are contained within the controller\'s ',(0,a.kt)("inlineCode",{parentName:"p"},"Broker"),", which\nruns as a separate app (i.e. ",(0,a.kt)("inlineCode",{parentName:"p"},"fbzmq::ZmqEventLoop")," thread). Every other\ncontroller app has its own dealer socket, contained within the ",(0,a.kt)("inlineCode",{parentName:"p"},"CtrlApp")," base\nclass, that connects to the broker's app socket. The app socket also accepts\nconnections from external clients, such as TG CLI and API service."),(0,a.kt)("p",null,"Each minion connects to the controller on a dealer socket in the minion's\n",(0,a.kt)("inlineCode",{parentName:"p"},"Broker"),". In addition, the broker has a ",(0,a.kt)("em",{parentName:"p"},"local")," router socket, which is\notherwise analogous to the controller's app socket: all other minion apps\nconnect to the local router socket via dealer sockets in the ",(0,a.kt)("inlineCode",{parentName:"p"},"MinionApp")," base\nclass. The router socket accepts connections from other local clients, which\nmust connect using a ZMQ ID with prefix ",(0,a.kt)("inlineCode",{parentName:"p"},":FWD:")," (",(0,a.kt)("inlineCode",{parentName:"p"},"kAppSockForwardPrefix"),") to\nreceive replies (or else they will get routed to the controller by default).\nThe minion also exposes a publish socket (",(0,a.kt)("inlineCode",{parentName:"p"},"ZMQ_PUB"),") for other clients on which\nit broadcasts certain periodic or asynchronous messages (e.g. heartbeats, link\nstatus)."),(0,a.kt)("p",null,"All socket identities of apps are fixed strings (defined in ",(0,a.kt)("inlineCode",{parentName:"p"},"E2EConsts"),"). The\nsocket identity of each minion is its MAC address. External clients connect\nusing arbitrary, non-conflicting identity strings; these are typically\nrandomized for sending one-off requests."),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{src:"/figures/architecture.svg",width:"650"})),(0,a.kt)("h3",{id:"implementation-details"},"Implementation Details"),(0,a.kt)("p",null,"ZMQ socket details are generally abstracted away from E2E apps through the\ncontroller/minion base classes and brokers. When an app's dealer socket receives\na message, it simply passes the message up to a ",(0,a.kt)("inlineCode",{parentName:"p"},"processMessage()")," virtual\nfunction for the app to handle. This function will never be called concurrently."),(0,a.kt)("p",null,"The controller's app and minion sockets expect multi-part messages, with all\nnon-final message parts flagged with ",(0,a.kt)("inlineCode",{parentName:"p"},"ZMQ_SNDMORE"),". The first part is the\ndestination's identity, as required by router sockets. The second part is the\nsender's app, and the third is the actual message contents. All message contents\nare Thrift structures serialized using the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/thrift/blob/master/doc/specs/thrift-compact-protocol.md"},"Thrift compact protocol"),"."),(0,a.kt)("p",null,"The minion finds the controller's minion socket address (i.e. IP and port)\nthrough reading the ",(0,a.kt)("inlineCode",{parentName:"p"},"e2e-ctrl-url")," key in the Open/R ",(0,a.kt)("inlineCode",{parentName:"p"},"KvStore"),", a process\ndescribed in other documents. The minion's broker automatically disconnects and\nreconnects from the controller upon a URL change or a timeout."),(0,a.kt)("p",null,"The controller uses the ",(0,a.kt)("a",{parentName:"p",href:"https://rfc.zeromq.org/spec:27/ZAP/"},"ZeroMQ Authentication Protocol")," (ZAP), but currently\nonly for debug purposes to log and associate peer IP addresses with their socket\nconnections. If enabled, the controller will spawn a thread to receive and\nrespond to authentication requests via a ",(0,a.kt)("inlineCode",{parentName:"p"},"ZMQ_REP")," socket on\n",(0,a.kt)("inlineCode",{parentName:"p"},"inproc://zeromq.zap.01"),". The app and/or minion sockets will be marked with an\narbitrary, non-empty ",(0,a.kt)("inlineCode",{parentName:"p"},"ZMQ_ZAP_DOMAIN")," socket option, causing ZMQ to forward\nconnection details to the ZAP handler. The handler simply echoes received peer\nIPs into the metadata in its response as the ",(0,a.kt)("inlineCode",{parentName:"p"},"Ip-Address")," property. This\nmetadata becomes associated with the ZMQ socket, and can be queried whenever\nmessages arrive."),(0,a.kt)("p",null,'Each app in both the controller and minion will bump a unique "socketMonitor"\ncounter once per minute (by default) to indicate that its dealer socket is\nhealthy and the thread itself is alive. These stats are published via the local\n',(0,a.kt)("inlineCode",{parentName:"p"},"ZmqMonitor")," instance (refer to ",(0,a.kt)("a",{parentName:"p",href:"/docs/developer/Stats_Events_Logs"},"Stats, Events, Logs")," for\nfurther details)."),(0,a.kt)("h3",{id:"global-objects"},"Global Objects"),(0,a.kt)("p",null,"Apart from the intra-process communication architecture, E2E uses a small number\nof globally-shared objects across apps. These objects, defined in\n",(0,a.kt)("inlineCode",{parentName:"p"},"SharedObjects"),", are only accessible through acquiring read-write locks using\nthe ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/facebook/folly/blob/master/folly/docs/Synchronized.md"},"folly::Synchronized")," abstraction."),(0,a.kt)("h2",{id:"serialization-layer"},"Serialization Layer"),(0,a.kt)("h3",{id:"about-thrift"},"About Thrift"),(0,a.kt)("p",null,"Terragraph E2E serializes all messages using ",(0,a.kt)("a",{parentName:"p",href:"https://thrift.apache.org/"},"Thrift"),", specifically the\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/facebook/fbthrift"},"fbthrift")," branch. Thrift includes an interface definition language (IDL) with a\ncross-language code generator, as well as a serialization framework for the\ngenerated structures. Terragraph does not use Thrift's RPC framework, in favor\nof ZMQ."),(0,a.kt)("h3",{id:"thrift-interfaces"},"Thrift Interfaces"),(0,a.kt)("p",null,"Thrift structures are defined within ",(0,a.kt)("inlineCode",{parentName:"p"},"*.thrift")," files, located inside various\n",(0,a.kt)("inlineCode",{parentName:"p"},"if/")," directories. All Thrift files used in E2E are listed below."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"File"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Controller.thrift")),(0,a.kt)("td",{parentName:"tr",align:null},"Core structures used by the controller")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Aggregator.thrift")),(0,a.kt)("td",{parentName:"tr",align:null},"Core structures used by the aggregator")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Topology.thrift")),(0,a.kt)("td",{parentName:"tr",align:null},"Topology structures")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"NodeConfig.thrift")),(0,a.kt)("td",{parentName:"tr",align:null},"Node configuration structures")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"FwOptParams.thrift")),(0,a.kt)("td",{parentName:"tr",align:null},"Firmware-specific node configuration structures")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Event.thrift")),(0,a.kt)("td",{parentName:"tr",align:null},"Event structures")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"PassThru.thrift")),(0,a.kt)("td",{parentName:"tr",align:null},"Firmware pass-through message structures")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"DriverMessage.thrift")),(0,a.kt)("td",{parentName:"tr",align:null},"Driver message structures")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"BWAllocation.thrift")),(0,a.kt)("td",{parentName:"tr",align:null},"Bandwidth and airtime allocation structures")))),(0,a.kt)("h3",{id:"implementation-details-1"},"Implementation Details"),(0,a.kt)("p",null,"Terragraph exclusively uses the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/thrift/blob/master/doc/specs/thrift-compact-protocol.md"},"Thrift compact protocol")," for messages\ntransported over ZMQ. When writing Thrift structures to disk, the JSON\nserializer is used instead."),(0,a.kt)("p",null,"For consistency at the ZMQ layer, the outermost Thrift structure for transport\nis always ",(0,a.kt)("inlineCode",{parentName:"p"},"thrift::Message")," (shown below). This structure must include a\nmessage type and compact-serialized binary value, which the receiver can then\ndeserialize into another Thrift structure."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"struct Message {\n  1: MessageType mType;\n  2: binary value;\n  3: optional bool compressed;\n  4: optional CompressionFormat compressionFormat;\n}\n")),(0,a.kt)("p",null,"Optionally, messages can be compressed using any supported format. The receiver\nshould first decompress the binary value before deserializing it. Currently,\nonly a handful of message types are compressed, and only the ",(0,a.kt)("a",{parentName:"p",href:"https://google.github.io/snappy/"},"Snappy")," format is\nsupported."),(0,a.kt)("h2",{id:"resources"},"Resources"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"http://zeromq.org/"},"ZeroMQ")," - Distributed messaging library"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/facebook/fbzmq"},"fbzmq")," - Meta's ZeroMQ wrappers"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"http://rfc.zeromq.org/spec:28/REQREP"},"request-reply pattern")," - ZeroMQ request-reply pattern specification"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://rfc.zeromq.org/spec:27/ZAP/"},"ZeroMQ Authentication Protocol")," - ZeroMQ authentication"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/thrift/blob/master/doc/specs/thrift-compact-protocol.md"},"Thrift compact protocol"),' - Thrift\'s "compact" serialization protocol'),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://thrift.apache.org/"},"Thrift")," - Meta's interface definition language"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/facebook/fbthrift"},"fbthrift")," - Meta's branch of Apache Thrift"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/facebook/folly/blob/master/folly/docs/Synchronized.md"},"folly::Synchronized")," - Meta's C++ lock abstraction"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://google.github.io/snappy/"},"Snappy")," - High-speed compression/decompression library")))}m.isMDXComponent=!0}}]);