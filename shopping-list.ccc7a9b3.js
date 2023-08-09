((r,a)=>{let e=r.findIndex(r=>r.current),n=`
        <ul class="pagination-list">
            <li class="previous">
                ${r[0].current?`
                    <span>‹</span>
                `:`
                    <a href="${r[e-1].url}">‹</a>
                `}
            </li>
            ${r.map((r,a)=>`
                <li${r.current?' class="current"':""}>
                    ${r.current?`
                        <span>${a+1}</span>
                    `:`
                        <a href="${r.url}">${a+1}</a>
                    `}
                </li> 
            `).join("")}
            <li class="next">
                ${r[r.length-1].current?`
                    <span>›</span>
                `:`
                    <a href="${r[e+1].url}">›</a>
                `}
            </li>
        </ul>
    `;document.querySelector(a).innerHTML=n})([{url:"/page1"},{url:"/page2"},{url:"/page3",current:!0},{url:"/page4"},{url:"/page5"}],".pagination");
//# sourceMappingURL=shopping-list.ccc7a9b3.js.map
