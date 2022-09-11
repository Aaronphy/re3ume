import * as React from 'react';


export interface ISubTitle {
    name: string;
    info?: string;
    tag?: string
}

export const Title = (text:string)=> <header className="section-hd">
<span className="section-title-l" />
<h2 className="section-title">{text}</h2>
<span className="section-title-r" />
</header>;


export const SubTitle = ({name,info,tag}:ISubTitle) => <header className="item-hd">
<h3 className="item-name">{name}</h3>
{info && <span className="item-info">{info}</span>}
{tag && <a className="btn item-more" >{tag}</a>}
</header>