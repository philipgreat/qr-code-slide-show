import { useState } from "react";

import { useLocalStorage } from 'react-use';


const load=()=>{

   

}

const saveFile=({text,fileList, setFileList,fileName})=>{

    const result=[...fileList];

    if(fileList.filter(file=>file.name===fileName).length===0){

        result.push({name:fileName,content:text,time:new Date()})
        setFileList(result);
        return;
    }

    setFileList(result.map(file=>{

        if(file.name===fileName){
            return {name:fileName,content:text,time:new Date()}
        }
        return file;


    }))
    

}

const loadFile=({fileName,setText,fileList,setMode,setFileName})=>{
    const entry=fileList.find(file=>file.name===fileName);
    if(!entry){
        alert("意外删除了")
        setMode("TEXT")
        return;
    }
    setFileName(entry.name);
    setText(entry.content)
    setMode("TEXT")
}



const deleteFile=({fileList,setFileList,setMode, fileName})=>{
    
    const entry=fileList.find(file=>file.name===fileName);
    if(!entry){
        alert("意外删除了")
        setMode("TEXT");
        return;
    }
    setFileList(fileList.filter(file=>file.name!==fileName))
    setMode("TEXT");

}

const calcComponent=({text,setText,mode,setMode,fileList, setFileList,setFileName})=>{
    

    const finalFileList=Array.isArray(fileList)?fileList:[]

    if(!Array.isArray(fileList)){
        setFileList([])
    }


    if(mode!=='TEXT' && finalFileList.length>0 ){
        return <div style={{width:"100%",marginLeft:"10px",marginRight:"10px"}}
        onClick={()=>setMode("TEXT")}
        >
        <table  >
            {finalFileList
            
            .sort((a,b)=>{

                return a.time>b.time?-1:1;
            })
            .map(file=>(
                
                <tr>
                <td>{file.name}</td>
                <td>
                    <button onClick={()=>loadFile({fileName:file.name, setText,fileList,setMode,setFileName})}>LOAD</button>
                    <button onClick={()=>deleteFile({fileName:file.name, setText,fileList,setMode,setFileName,setFileList})}>DEL</button> 
                </td>
                
            </tr>

            ))}



        </table>
       
        
        </div>
    }
    return (<textarea
        value={text}
        onChange={(event)=>setText(event.target.value)}
  
        padding={10}
        
        
        style={{
            marginLeft:"10px",marginRight:"10px",
          fontFamily: '"Fira code", "Fira Mono", monospace',
          fontSize: 10, 
          height:"98vh",
          width:"98%"
        }}
      />)
}


const QRTextEditor = ({text,setText}) => {

    const [mode,setMode]=useState("TEXT")
    const [fileList, setFileList, remove] = useLocalStorage('my-key', [],false);
    const [fileName,setFileName]=useState("FILE1")

    return (
        <div>
         
        <div style={{width:"100%",marginBottom:"10px",marginTop:"10px"}}>

            <label htmlFor='filename'>FILE NAME:</label>
            <input id={'filename'} style={{width:"50%",marginLeft:"10px",marginRight:"10px"}}
            
            onFocus={()=>setMode("SHOW FILE")}
            onDoubleClick={()=>setMode("TEXT")}
            value={fileName}
            onChange={((event)=>setFileName(event.target.value))}
            />
            <button onClick={()=>saveFile({fileList,fileName,text,setFileList})}>SAVE</button>
        </div>
        <div>{calcComponent({text,setText,mode,setMode,fileList, setFileList,setFileName})}</div>
        </div>
    );
  };


  export default QRTextEditor;
