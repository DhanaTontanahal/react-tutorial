
const parent=
React.createElement("div" , {id:"parent"} , [React.createElement("div" , {id:"child"} , 
[React.createElement("h1" , {} , "I am h1 tag"),React.createElement("h2" , {} , "I am h2 tag")]),
React.createElement("div" , {id:"child2"} , 
[React.createElement("h1" , {} , "I am h1 tag"),React.createElement("h2" , {} , "I am h2 tag")])
]
);

// console.log(parent);
const domRoot=document.getElementById("root");
const reactRoot=ReactDOM.createRoot(domRoot);
reactRoot.render(parent);
