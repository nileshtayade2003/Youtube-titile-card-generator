function createCard(title,cname,views,monthsold,duration,thumbnail)
{
let container = document.querySelector('.container');
    let displayview;
    if(views<1000){
        displayview=views;
    }
    else if(views<1000000)
    {
        displayview=views/1000 + "k";
    }
    else if(views>1000000){
        displayview=views/1000000 + "M";
    }

    let template=`<div class="card">
        <div class="left">
                <img src="${thumbnail}" alt="">
                <p class="duration">${duration}</p>
            </div>
            

            <div class="right">
                <div class="video-title">${title}</div>
                <p>
                    <span class="cname"> ${cname}</span>
                    <span class="views">&bull; ${displayview} views</span>
                    <span class="monthsold">&bull; ${monthsold} months ago</span>
                </p>
            </div>
    </div>` ;

container.innerHTML=container.innerHTML+template;
}


// createCard(title,cname,views,monthsold,duration,thumbnail);
createCard('Example Card (your title goes here)','Channel name',200,8,'33:00',"https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLB0alxLSXCSEPITzWr-XXUiv1oglQ");


//to get form data and call create card method
function getdata(){
    let title = document.getElementById('title').value;
    let cname = document.getElementById('cname').value;
    let duration = document.getElementById('duration').value;
    let views = document.getElementById('views').value;
    let monthsold = document.getElementById('monthsold').value;
    let thumbnail = document.getElementById('thumbnail').value;
    createCard(title,cname,views,monthsold,duration,thumbnail);
}

