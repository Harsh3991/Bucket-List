let addBtn=document.getElementById("add-btn");
let inputTag=document.getElementById("input-tag");
let listContainer=document.getElementById("list-container");
let resetBtn=document.getElementById("reset-btn");
let bucketList=[];
let value;

addBtn.addEventListener("click",addToBucketList);

function addToBucketList(){
    value=inputTag.value;
    bucketList.push(value);
    inputTag.value="";
    showList();
}

function showList(){
    
    listContainer.innerHTML=null;
    console.log(bucketList)
    
     for (let i=0;i<bucketList.length;i++){
        let listBox=document.createElement("div");
        let listText=document.createElement("p");
        let tickMarkImg=document.createElement("img");

        listBox.className="list-box";
        listText.className="list-text";
        tickMarkImg.className="tick-mark-img";

        listText.innerText=bucketList[i];
        tickMarkImg.src="https://kq-storage.s3.ap-south-1.amazonaws.com/Github/bucketlist/tick-mark%5B1%5D.png";

        tickMarkImg.addEventListener("click",function(){
           remove(i)
        })

        listBox.append(listText,tickMarkImg);

        listContainer.append(listBox);
     }

}

function remove(index){
    bucketList.splice(index,1);
    showList();
}

resetBtn.addEventListener("click", resetBucketList);

function resetBucketList(){
    bucketList.splice(0,bucketList.length);
    showList();
}