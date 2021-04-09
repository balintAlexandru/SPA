let category = document.querySelector('#category');

category.addEventListener('click', (ev)=>{

    location.href = location.origin + location.pathname + '#' + ev.target.id;

});

window.addEventListener('popstate', ()=>{
    module.renderOnPageLoadOrURLChange();
});

window.onload = () =>{
    module.renderOnPageLoadOrURLChange();
    document.getElementById('page').innerHTML = null;
}

let module = {
    setAllRendersNull : () => {
        document.getElementById('page').innerHTML = null;
    },
    renderSpecificItems: (items, renderId)=>{
        let div = document.createElement('div');
        div.className = "mac";
        items.map( eachItem =>{
            let li = document.createElement('li');
            li.className = "r1";
            let p = document.createElement('p');
            p.className = "titleProduct";
            p.innerHTML = eachItem.name;
            let p1 = document.createElement('p');
            p1.innerHTML = eachItem.price;
            let image = document.createElement('img');
            image.src = "https://balintalexandru.github.io/SPA/mac-air.png"
            let button = document.createElement('button');
            button.innerHTML = eachItem.button;

             let li1 = document.createElement('li');
             li1.className = "r2";
             let p2 = document.createElement('p');
             p2.className = "titleProduct";
             p2.innerHTML = eachItem.name1;
             let p3 = document.createElement('p');
             p3.innerHTML = eachItem.price1;
             let image1 = document.createElement('img');
             image1.src = "https://balintalexandru.github.io/SPA/mac-pro.png";
             let button1 = document.createElement('button');
             button1.innerHTML = eachItem.button;

             let li2 = document.createElement('li');
             li2.className = "r3";
             let p4 = document.createElement('p');
             p4.className = "titleProduct";
             p4.innerHTML = eachItem.name2;
             let p44 = document.createElement('p');
             p44.innerHTML = eachItem.price2;
             let image2 = document.createElement('img');
             image2.src = "https://balintalexandru.github.io/SPA/mac-mini.png";
             let button2 = document.createElement('button');
             button2.innerHTML = eachItem.button;

            div.appendChild(li);
            div.appendChild(li1);
            div.appendChild(li2);
            li.appendChild(p);
            li.appendChild(p1);
            li.appendChild(image);
            li.appendChild(document.createElement('br'));
            li.appendChild(button);


             li1.appendChild(p2);
             li1.appendChild(p3);
             li1.appendChild(image1);
             li1.appendChild(document.createElement('br'));
             li1.appendChild(button1);

             li2.appendChild(p4);
             li2.appendChild(p44);
             li2.appendChild(image2);
             li2.appendChild(document.createElement('br'));
             li2.appendChild(button2);
        });
        module.setAllRendersNull();
        document.getElementById(renderId).appendChild(div);
    },
    renderSpecificItems1: (items, renderId)=>{
        let div = document.createElement('div');
        div.className = "mac";
        items.map( eachItem =>{
            let li = document.createElement('li');
            li.className = "r1";
            let p = document.createElement('p');
            p.className = "titleProduct";
            p.innerHTML = eachItem.name;
            let p1 = document.createElement('p');
            p1.innerHTML = eachItem.price;
            let image = document.createElement('img');
            image.src = "https://balintalexandru.github.io/SPA/ipad-air.png";
            let button = document.createElement('button');
            button.innerHTML = eachItem.button;

             let li1 = document.createElement('li');
             li1.className = "r2";
             let p2 = document.createElement('p');
             p2.className = "titleProduct";
             p2.innerHTML = eachItem.name1;
             let p3 = document.createElement('p');
             p3.innerHTML = eachItem.price1;
             let image1 = document.createElement('img');
             image1.src = "https://balintalexandru.github.io/SPA/ipad.png";
             let button1 = document.createElement('button');
             button1.innerHTML = eachItem.button;

             let li2 = document.createElement('li');
             li2.className = "r3";
             let p4 = document.createElement('p');
             p4.className = "titleProduct";
             p4.innerHTML = eachItem.name2;
             let p44 = document.createElement('p');
             p44.innerHTML = eachItem.price2;
             let image2 = document.createElement('img');
             image2.src = "https://balintalexandru.github.io/SPA/ipad-pro.png";
             let button2 = document.createElement('button');
             button2.innerHTML = eachItem.button;

            div.appendChild(li);
            div.appendChild(li1);
            div.appendChild(li2);
            li.appendChild(p);
            li.appendChild(p1);
            li.appendChild(image);
            li.appendChild(document.createElement('br'));
            li.appendChild(button);


             li1.appendChild(p2);
             li1.appendChild(p3);
             li1.appendChild(image1);
             li1.appendChild(document.createElement('br'));
             li1.appendChild(button1);

             li2.appendChild(p4);
             li2.appendChild(p44);
             li2.appendChild(image2);
             li2.appendChild(document.createElement('br'));
             li2.appendChild(button2);
        });
        module.setAllRendersNull();
        document.getElementById(renderId).appendChild(div);
    },
    renderSpecificItems2: (items, renderId)=>{
        let div = document.createElement('div');
        div.className = "mac";
        items.map( eachItem =>{
            let li = document.createElement('li');
            li.className = "r1";
            let p = document.createElement('p');
            p.className = "titleProduct";
            p.innerHTML = eachItem.name;
            let p1 = document.createElement('p');
            p1.innerHTML = eachItem.price;
            let image = document.createElement('img');
            image.src = "https://balintalexandru.github.io/SPA/iPhone12.png";
            image.className = "iphone";
            let button = document.createElement('button');
            button.innerHTML = eachItem.button;

             let li1 = document.createElement('li');
             li1.className = "r2";
             let p2 = document.createElement('p');
             p2.className = "titleProduct";
             p2.innerHTML = eachItem.name1;
             let p3 = document.createElement('p');
             p3.innerHTML = eachItem.price1;
             let image1 = document.createElement('img');
             image1.src = "https://balintalexandru.github.io/SPA/iPhone12Pro.png";
             let button1 = document.createElement('button');
             button1.innerHTML = eachItem.button;

             let li2 = document.createElement('li');
             li2.className = "r3";
             let p4 = document.createElement('p');
             p4.className = "titleProduct";
             p4.innerHTML = eachItem.name2;
             let p44 = document.createElement('p');
             p44.innerHTML = eachItem.price2;
             let image2 = document.createElement('img');
             image2.src = "https://balintalexandru.github.io/SPA/iPhone11.png" ;
             image2.className ="iphone1";
             let button2 = document.createElement('button');
             button2.innerHTML = eachItem.button;

            div.appendChild(li);
            div.appendChild(li1);
            div.appendChild(li2);
            li.appendChild(p);
            li.appendChild(p1);
            li.appendChild(image);
            li.appendChild(document.createElement('br'));
            li.appendChild(button);


             li1.appendChild(p2);
             li1.appendChild(p3);
             li1.appendChild(image1);
             li1.appendChild(document.createElement('br'));
             li1.appendChild(button1);

             li2.appendChild(p4);
             li2.appendChild(p44);
             li2.appendChild(image2);
             li2.appendChild(document.createElement('br'));
             li2.appendChild(button2);
        });
        module.setAllRendersNull();
        document.getElementById(renderId).appendChild(div);
    },
    renderOnPageLoadOrURLChange: ()=>{
        let currentPath = location.hash.substr(1);
        
        if(currentPath == 'mac'){
            let mac = [
            {
                id: 1,
                name: "MacBook Air", 
                price: "Price: $999",
                button: "Buy Now",
                name1: "MacBook Pro",
                price1: "Price: $1299 ",
                name2: "Mac Mini",
                price2: "Price: $699 "
            }
         ];
    
        module.renderSpecificItems(mac, 'page');
        } else if(currentPath == 'ipad'){
            let ipad = [
                {
                     id: 1,
                     name: "iPad Air", 
                     price: "Price: $599",
                     button: "Buy Now",
                     name1: "iPad",
                     price1: "Price: $329 ",
                     name2: "iPad Pro",
                     price2: "Price: $699 "
                }
            ];
            module.renderSpecificItems1(ipad, 'page');
        } else if(currentPath == 'iphone'){
            let iphone = [
                {
                    id: 1,
                    name: "iPhone 12", 
                    price: "Price: $699",
                    button: "Buy Now",
                    name1: "iPhone 12 Pro",
                    price1: "Price: $999 ",
                    name2: "iPhone 11",
                    price2: "Price: $599 "
                }
            ];
            module.renderSpecificItems2(iphone, 'page')
        } 
    }
}
