function analyzeBlog(){

    const title=document.getElementById("title").value.trim();

    const content=document.getElementById("content").value.trim();

    const words=content.split(/\s+/).filter(word=>word!="");

    const wordCount=words.length;

    document.getElementById("wordCount").innerText=wordCount;

    const reading=Math.ceil(wordCount/200);

    document.getElementById("readingTime").innerText=reading;

    let score=0;

    let tips=[];

    if(title.length>=10){

        score+=20;

    }else{

        tips.push("Title should be at least 10 characters.");

    }

    if(wordCount>=300){

        score+=40;

    }else{

        tips.push("Write at least 300 words.");

    }

    if(content.includes(title.split(" ")[0])){

        score+=20;

    }else{

        tips.push("Include the main keyword in the content.");

    }

    if(content.includes(".")){

        score+=20;

    }else{

        tips.push("Use proper sentences and punctuation.");

    }

    document.getElementById("seoScore").innerText=score;

    const tipList=document.getElementById("tips");

    tipList.innerHTML="";

    if(tips.length==0){

        tipList.innerHTML="<li>Excellent! Your blog is well optimized.</li>";

    }else{

        tips.forEach(function(tip){

            const li=document.createElement("li");

            li.innerText=tip;

            tipList.appendChild(li);

        });

    }

}